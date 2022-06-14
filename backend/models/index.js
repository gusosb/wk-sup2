const User = require('./user')

const { sequelize } = require('../util/db')




sequelize.sync({ alter: true })

module.exports = {
  User
}


//docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 postgres