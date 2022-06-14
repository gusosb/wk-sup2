Tech used: Material UI, React Router, Apollo Client + GraphQL, Apollo Server, jsonwebtoken, bcypt, Sequelize ORM, postgreSQL.

The wkFlex app is a simple flex time keeping app, adding, or removing flex time is done in the adjust flex box. If the user is an administrator additional navlinks appear and user can see all the users flex time.
  
 



 
Backend
Only one table is used, the user table, which contains the flextime.

/backend/models/user.js
```JavaScript
const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false  
  },
  passwordHash: {
    type: DataTypes.STRING,
    allowNull: true
  },
  flex: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'user',
})

module.exports = User
```


updateFlex mutation updates the current flex of the User.

/backend/index.js
```JavaScript
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
   // Upsert() method returns two index, first (data[0]) returns upserted   instance
   // second index contains a boolean (or null) indicating if record was created or updated.
  return data[0]
},
```


In the getUser query check is done to see if the user is admin and then fetches all the users and returns, if not it returns only the currentuser, which is already available from the context.

/backend/index.js
```JavaScript
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
```


Authentication is done in the shared context.

/backend/index.js
```JavaScript
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
```
  
Frontend
In the index file token is added to the header upon each request.

/frontend/src/index.js
```JavaScript
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('wkflextoken')
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : null,
    }
  }
})
```

If missing but still present in localstorage Token is set in the main, which makes refreshing the page possible without the need to login again and obtain new token.
/frontend/src/App.js
```JavaScript
useEffect(() => {
    if (!token) {
      // get token from localstorage, if available and set it to token
      const localtoken = localStorage.getItem('wkflextoken')
      if(localtoken) {
        setToken(localtoken)
      }
    }
}, [psw])
```

Upon successful login in the loginpage token is set to localstorage.

/frontend/src/components/LoginForm.js
```JavaScript
const [login, result] = useMutation(LOGIN, {
    onError: (error) => {
      if (error.graphQLErrors[0].message === "wrong credentials") {
        notify("Incorrect credentials.")
      }
    },
})


useEffect(() => {
  if (result.data) {
    const token = result.data.login.value
    setToken(token)
    localStorage.setItem('wkflextoken', token)
    navigate('/internal/wkflex/')
  }
}, [result.data]) // eslint-disable-line
```
