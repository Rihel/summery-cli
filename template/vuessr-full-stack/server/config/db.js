import Sequelize from 'sequelize'
const sequelize = new Sequelize('aaa','root','1234',{
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max:5,
    min:0
  }
})

export default sequelize;