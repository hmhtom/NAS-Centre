import { gql } from "@apollo/client";

export const QUERY_ALL_EVENTS = gql`
  {
    allEvents {
      _id
      eventName
      description
      image
      date
      price
      availableSeats
      ticketsSold {
        _id
      }
    }
  }
`;

export const QUERY_ALL_CATEGORIES = gql`
  {
    categories {
      _id
      name
      events {
        _id
        eventName
        description
        image
        date
        price
        availableSeats
        ticketsSold {
          _id
        }
      }
    }
  }
`;

export const QUERY_EVENT = gql`
  query getEvent($id: ID) {
    event(_id: $id) {
      _id
      eventName
      description
      image
      date
      price
      availableSeats
      ticketsSold {
        _id
      }
    }
  }
`;

export const QUERY_CATEGORY = gql`
  query getCategory($id: id) {
    categories(_id: $id) {
      _id
      name
      events {
        _id
        eventName
        description
        image
        date
        quantity
      }
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      userName
      email
      password     
      tickets {
        purchaseDate
        seatNumber
        event {
            date
            eventName
        }
        }
    }
  }
`;

export const QUERY_TICKET = gql`
  query getTicket($id: id) {
    ticket(_id: $id) {
      purchaseDate
      price
      seatNumber
      user {
        userName
        email
      }
    }
  }
`;
