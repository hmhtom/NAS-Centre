const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { User, Event, Category, Ticket } = require("../models");

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
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
        const decrement = Math.abs(availableSeats) * -1;
        const ticket = await Ticket.create({_id: eventId, seatInfo: seatInfo, price : price});

        // update the event with the ticketId push the ticket ID to the tickets sold array in the events
        const updateEvent = await Event.findOneAndUpdate( _id, { $inc: { availableSeats : decrement } }, { new: true },
        { $push: { ticketsSold: ticketId } } 
            );

        // update the user and pass w
        const updateUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { tickets: ticket } }
        );

        return updateUser;
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
        const updateEvent = await Event.findOneAndUpdate(id, { $inc: { availableSeats : availableSeats} }, { new: true },
        { $pull: { ticketsSold: ticketId } } )


        return updateUser;
      }
      throw new AuthenticationError("Not logged in");
    },
  },
};
module.exports = resolvers;
