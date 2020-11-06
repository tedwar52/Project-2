module.exports = function (sequelize, DataTypes) {
    const Appointment = sequelize.define("Appointment", {
  
      firstName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      streetAddress: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true
      },
      zipCode: {
        type: DataTypes.STRING,
        allowNull: true
      },
      appTime: {
        type: DataTypes.STRING,
        allowNull: true
      }
    });
    Appointment.associate = function(models) {
        Appointment.belongsTo(models.User, {
          onDelete: "cascade"
        });
      };
    return Appointment;
  };