import { gql } from 'apollo-server-express';

const getUser = gql`
  query getUser($input: GetUserInput!) {
    getUser(input: $input) {
      user {
        id
        email
        name
        posts {
          id
        }
      }
    }
  }
`;

export default getUser;
