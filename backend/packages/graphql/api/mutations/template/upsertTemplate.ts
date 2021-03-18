import { gql } from 'apollo-server-express';

const upsertTemplate = gql`
  mutation upsertTemplate($input: UpsertTemplateInput!) {
    upsertTemplate(input: $input) {
      template {
        id
        name
        pages {
          id
          name
          title
          url
        }
      }
    }
  }
`;

export default upsertTemplate;
