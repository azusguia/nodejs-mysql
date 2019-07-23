module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    user: DataTypes.STRING,
    age: DataTypes.NUMBER,
  });

  return Customer;
}