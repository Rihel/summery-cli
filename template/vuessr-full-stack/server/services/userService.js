import sequelize from '../config/db'
import { resolve } from 'path';
const User = sequelize.import(resolve(__dirname,'../models/user.js'))

export const addUser = (username, password) => {
  return User.create({
    username,
    password
  })
}