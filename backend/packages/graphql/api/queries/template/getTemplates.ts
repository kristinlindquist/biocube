import { gql } from 'apollo-server-express';

const getTemplates = gql`
  query getTemplates($input: GetTemplatesInput!) {
    getTemplates(input: $input) {
      templates {
        id
        name
        pages {
          id
          name
          title
          url
          components {
            id
            props
            type
            read {
              id
              document
              parameters
            }
            readOne {
              id
              document
              parameters
            }
            upsert {
              id
              document
              parameters
            }
            delete {
              id
              document
              parameters
            }
          }
        }
      }
    }
  }
`;

export default getTemplates;
