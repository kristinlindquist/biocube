import { gql } from 'apollo-server-express';

const getTemplates = gql`
  query getTemplates($input: GetTemplatesInput!) {
    getTemplates(input: $input) {
      templates {
        id
        name
      }
    }
  }
`;

export default getTemplates;
