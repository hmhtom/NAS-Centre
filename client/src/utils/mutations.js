import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const ADD_TICKET = gql`
  mutation addTicket($seatNumber: String!, $event: ID!) {
    saveTicket(seatNumber: $seatNumber, event: $event) {
      _id
      email
      username
      tickets {
        _id
        seatNumber
        purchaseDate
        event {
          _id
          date
          eventName
        }
      }
    }
  }
`;
