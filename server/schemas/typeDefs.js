const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID!
    name: String!
    events: [Event]
  }
  type Event {
    _id: ID!
    eventName: String
    description: String
    image: String
    quantity: Int
    date: String
    tickets: [Ticket]
  }

  type Ticket {
    _id: ID
    purchaseDate: String
    price: Float
    seatNumber: Int
    user: User
  }

  type User {
    _id: ID
    userName: String
    email: String
    events: [Event]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    tickets(event: ID, eventName: String, date: String): [Ticket]
    ticket(_id: ID!): Ticket
    user: User
    events(Category: ID, name: String): [Event]
    event(_id: ID!): Event
    checkout(tickets: [ID]!): Checkout
  }

  type Mutation {
    addUser(
      userName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      userName: String
      email: String
      password: String
    ): User
    saveTicket(userName: String!,  purchaseDate: String!, price: Float!, seatNumber: Int! ): User
    deleteTicket( userName: String, ticketId: String!): User 
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
