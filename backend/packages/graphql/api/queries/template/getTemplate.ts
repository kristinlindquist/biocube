import { gql } from 'apollo-server-express';

const getTemplate = gql`
  query getTemplate($input: GetTemplateInput!) {
    getTemplate(input: $input) {
      template {
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

export default getTemplate;
