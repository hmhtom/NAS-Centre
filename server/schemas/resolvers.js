const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { User, Event, Category, Ticket, Seat } = require("../models");
const stripe = require("stripe")(
  "sk_test_51M6zGyKNGVTArXAyTE99N2iYJt6SwpLifGKmtyaB0hhF4tVuKkAISTmZy7AFWeP6WE71FPGhNYmymVpYt4WtBPos00w3IuU3iU"
);

const resolvers = {
  Query: {
    allEvents: async () => {
      return await Event.find();
    },
    categories: async () => {
      return await Category.find().populate("events");
    },

    event: async (parents, { _id }) => {
      return await Event.findById(_id);
    },

    tickets: async (parents, { event, eventName }) => {
      const params = {};

      if (event) {
        params.event = event;
      }
      if (eventName) {
        params.eventName = {
          $regex: eventName,
        };
      }
      return await Event.find(params).populate(event);
    },

    ticket: async (parents, { _id }) => {
      return await Event.findById(_id).populate("event");
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;

      const line_items = [];
      const events = await Event.find({ _id: { $in: args.events } });

      for (let i = 0; i < events.length; i++) {
        const event = await stripe.events.create({
          name: events[i].eventName,
        });

        const price = await stripe.prices.create({
          event: event.id,
          unit_amount: events[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate({ _id: context.user._id }, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },

    saveTicket: async (parent, args, context) => {
      if (context.user) {
        // create the ticket,
        const ticket = await Ticket.create(args);

        // update the event with the ticketId push the ticket ID to the tickets sold array in the events
        console.log(ticket);
        const updatedEvent = await Event.findOneAndUpdate(
          { _id: ticket.event },
          {
            $addToSet: { ticketsSold: ticket._id },
            $inc: { availableSeats: -1 },
          },
          { new: true }
        );
        // // update the user
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { tickets: ticket._id } },
          { new: true }
        );

        return updatedUser;
      }
      throw new AuthenticationError("Not logged in");
    },

    deleteTicket: async (parent, { ticketId }) => {
      if (context.user) {
        const updateUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { tickets: { ticketId } } }
        );

        // update the event to add the ticket back to the available seat (pull the ticketId from the ticketsSold array)
        const updateEvent = await Event.findOneAndUpdate(
          id,
          { $inc: { availableSeats: availableSeats } },
          { new: true },
          { $pull: { ticketsSold: ticketId } }
        );

        return updateUser;
      }
      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
