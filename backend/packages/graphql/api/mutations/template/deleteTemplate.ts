import { gql } from 'apollo-server-express';

const deleteTemplate = gql`
  mutation deleteTemplate($input: DeleteTemplateInput!) {
    deleteTemplate(input: $input) {
      template {
        id
        name
      }
    }
  }
`;

export default deleteTemplate;