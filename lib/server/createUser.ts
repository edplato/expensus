import 'dotenv/config'
import 'reflect-metadata'

import { createConnection } from 'typeorm'

import createConnectionOptions from './db/createConnectionOptions'
import { User } from './db/entities/User'

createConnection(createConnectionOptions())
  .then(async connection => {
    console.log('connected? ', connection.isConnected)
    console.log('connection name: ', connection.name)

    const user = new User()
    user.firstName = 'Jim'
    user.lastName = 'Test'
    user.email = 'test@example.com'
    user.password = 'plaintext'
    await user.save()
    console.log('User: ', user)
    const users = await User.find()
    console.log('users: ', users)
  })
  .catch(err => console.log('Error connecting: ', err))
