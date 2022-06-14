import { gql } from '@apollo/client'


export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)  {
      value
    }
  }
`

export const REGISTER = gql `
  mutation CreateUser($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      value
    }
  }
`

export const GET_USER = gql `
query GetUser {
  getUser {
    User {
      email
      flex
      isAdmin
    }
    Users {
      email
      flex
      isAdmin
    }
  }
}
`

export const UPDATE_FLEX = gql `
mutation UpdateFlex($flex: Int!) {
  updateFlex(flex: $flex) {
    flex
  }
}
`