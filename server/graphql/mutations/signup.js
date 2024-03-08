import { gql } from '@apollo/client';

export const SIGNUP_MUTATION = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export default SIGNUP_MUTATION;
