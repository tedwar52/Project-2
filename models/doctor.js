// need help to understand why the inclusion of this file as .js in models folder throws error.

module.exports = function (sequelize, DataTypes) {
  const Doctor = sequelize.define("Doctor", {

    firstName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    orgName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addressOne: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addressTwo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return Doctor;
};
