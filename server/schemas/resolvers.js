const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { User, Event, Category} = require("../models");

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
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },

    saveTicket: async (
      parent,
      { userName, purchaseDate, price, seatNumber },
      context
    ) => {
      return User.findOneAndUpdate(
        { userName: userName },
        {
          $addToSet: {
            tickets: { purchaseDate, price, seatNumber },
          },
        },
        { new: true, runValidators: true }
      );
    },

    deleteTicket: async (parent, { userName, ticketId }) => {
      return User.findOneAndUpdate(
        { userName: userName },
        { $pull: { tickets: { ticketId: ticketId } } },
        { new: true }
      );
    },
  },
};
module.exports = resolvers;