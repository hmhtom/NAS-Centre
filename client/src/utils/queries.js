import {gql} from '@apollo/client';

export const QUERY_ALL_EVENTS = gql`
    {
        events {
            _id
            eventName
            description
            image
            date
            quantity
            tickets {
                price
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
            }
        }
    }
`;

export const QUERY_EVENT = gql`
    query getEvent($id: id) {
        event (_id: $id){
            eventName
            description
            image
            date
            quantity
            tickets {
                price
                seatNumber
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
            events {
                eventName
                date
                tickets{
                    purchaseDate
                    seatNumber
                    user
                }
            }
        }
    }
`;

export const QUERY_TICKET = gql`
    query getTicket($id: id){
        ticket(_id: $id){
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