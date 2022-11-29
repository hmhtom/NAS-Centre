import { createSlice } from "@reduxjs/toolkit";

export const theaterSlice = createSlice({
  name: "theater",
  initialState: {
    events: [],
    categories: [],
    tickets: [],
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
    addTicket: (state, actions) => {
      state.tickets = [...state.tickets, actions.tickets];
    },
    updateTicket: (state, actions) => {
      state.currentTicket = actions.ticket;
    },
    removeTicket: (state, actions) => {
      let updatedList = state.tickets.filter((ticket) => {
        return ticket._id !== actions._id;
      });
      state.tickets = updatedList;
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
} = theaterSlice.actions;

export default theaterSlice.reducer;
