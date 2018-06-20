export default (sequelize,DataTypes) => {
  return sequelize.define('user',{
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  })
}