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
    availableSeat: Int!
    ticketsSold: [Ticket]
  }

  input EventInput {
    _id: ID!
    eventName: String!
    description: String!
    image: String!
    date: String!
    price: Float!
    availableSeat: Int!
    ticketsSold: [TicketInput]

  }

  type Ticket {
    _id: ID!
    purchaseDate: String!
    seatInfo: Seat!
    event: Event
    
  }
  input TicketInput {
    _id: ID!
    purchaseDate: String!
    seatInfo: SeatInput!
    event: EventInput

  }


  type Seat {
   _id: ID!
    seatNumber: String!

  }
  input SeatInput {
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
    categories: [Category]
    tickets(event: ID, eventName: String, date: String): [Ticket]
    ticket(_id: ID!): Ticket
    user: User
    events(Category: ID, name: String): [Event]
    event(_id: ID!): Event
    checkout(tickets: [TicketInput]!): Checkout
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
    saveTicket(ticket: TicketInput!): User
    deleteTicket(ticketId: String!): User 
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
