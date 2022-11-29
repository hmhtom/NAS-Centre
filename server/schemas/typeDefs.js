const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID!
    name: String!
    events: [Event]
  }

  type Event {
    _id: ID!
    eventName: String!
    description: String!
    image: String!
    date: String!
    price: Float!
    availableSeats: Int!
    ticketsSold: [Ticket]
  }

  type Ticket {
    _id: ID!
    purchaseDate: String!
    seatNumber: String
    event: Event
  }

  type Seat {
    _id: ID!
    seatNumber: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    tickets: [Ticket]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    allEvents: [Event]
    categories: [Category]
    event(_id: ID!): Event
    tickets(event: ID, eventName: String, date: String): [Ticket]
    ticket(_id: ID!): Ticket
    user: User
    event(_id: ID!): Event
    checkout(events: [ID]!): Checkout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    saveTicket(seatNumber: String!, event: ID!): User
    deleteTicket(ticketId: String!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
