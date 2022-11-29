import { createSlice } from "@reduxjs/toolkit";

export const theaterSlice = createSlice({
  name: "theater",
  initialState: {
    events: [],
    categories: [],
    seats: [],
    cart: [],
    currentTicket: {},
    currentEvent: {},
  },
  reducers: {
    addEvent: (state, actions) => {
      state.events = [...state.events, actions.event];
    },
    removeEvent: (state, actions) => {
      let updatedList = state.events.filter((event) => {
        return event._id !== actions._id;
      });
      state.events = updatedList;
    },
    updateEvent: (state, actions) => {
      state.events = actions.events;
    },
    updateCategories: (state, actions) => {
      state.categories = actions.categories;
    },
    updateSeats: (state, actions) => {
      state.seats = actions.seats;
    },
    addTicket: (state, actions) => {
      state.cart = [...state.cart, actions.ticket];
    },
    updateTicket: (state, actions) => {
      state.currentTicket = actions.ticket;
    },
    removeTicket: (state, actions) => {
      let updatedList = state.cart.filter((ticket) => {
        return ticket.tempId !== actions.tempId;
      });
      state.cart = updatedList;
    },
    emptyCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addEvent,
  removeEvent,
  updateEvent,
  addTicket,
  updateTicket,
  removeTicket,
  updateCategories,
  updateSeats,
  emptyCart,
} = theaterSlice.actions;

export default theaterSlice.reducer;
