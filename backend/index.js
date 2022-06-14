require('dotenv').config()
const { ApolloServer, UserInputError, AuthenticationError, gql } = require('apollo-server')
const { connectToDatabase } = require('./util/db')
const { PORT } = require('./util/config')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const { User } = require('./models')

const typeDefs = gql`
  type User {
    email: String!
    password: String!
    id: ID!
    flex: Int
    isAdmin: Boolean!
  }
  type Token {
    value: String!
  }
  type Users {
    User: User!
    Users: [User]
  }
  type Query {
    getUser: Users!
  }
  type Mutation { 
    createUser(
      email: String!
      password: String!
    ): Token
    login(
      email: String!
      password: String!
    ): Token
    updateFlex(
      flex: Int!
    ): User
  }
`

const resolvers = {
  Query: {
    getUser: async (root, args, context) => {
      const currentUser = context.currentUser
      if (!currentUser) {
        throw new AuthenticationError("not authenticated")
      }
      if (currentUser.isAdmin) {
        const data = await User.findAll()
        return { User: currentUser, Users: data }
      }
      return { User: currentUser}
    },
  },
  Mutation: {
    createUser: async (root, args) => {
      let user
      const saltRounds = 10

      // Sparar inte rena lösenord i db, sparar lösenordshashen
      const passwordHash = await bcrypt.hash(args.password, saltRounds)
      try {
          user = await User.create({
            email: args.email,
            passwordHash,
          })
      } catch (error) {
        throw new UserInputError(error.message, {
          invalidArgs: args,
        })
      }

    const userForToken = {
      email: args.email,
      id: user.id,
    }

      return { value: jwt.sign(userForToken, process.env.SECRET), user: user }
    },
    login: async (root, args) => {
      // Finns användaren i db? Sök på epost (unique identifier).
      const user = await User.findOne({ where: { email: args.email } })

      // correctPassword är false om user inte finns i db, annars jämför bcrypt lösenordshash i db mot input, returnar false eller true.
      const correctPassword = user === null
        ? false
        : await bcrypt.compare(args.password, user.passwordHash)

      // Kasta userinputerror om usern inte finns i db eller har angett fel lösenord.
      if (!(user && correctPassword)) {
        throw new UserInputError('wrong credentials')
      }

      const userForToken = {
        email: args.email,
        id: user.id,
      }

      // Returna skapad jwt-token.
      return { value: jwt.sign(userForToken, process.env.SECRET) }
    },
    updateFlex: async (root, args, context) => {
      const currentUser = context.currentUser
      if (!currentUser) {
        throw new AuthenticationError("not authenticated")
      }
      const data = await User.upsert({
        id: currentUser.id,
        flex: args.flex,
        email: currentUser.email,
      })
       // Upsert() method returns two index, first (data[0]) returns upserted instance
       // second index contains a boolean (or null) indicating if record was created or updated.
      return data[0]
    },
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null
    if (auth && auth.toLowerCase().startsWith('bearer ')) {
      const decodedToken = jwt.verify(
        auth.substring(7), process.env.SECRET
      )
      const currentUser = await User.findByPk(decodedToken.id)
      return { currentUser }
    }
  }
})

const start = async () => {
  await connectToDatabase()
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start()