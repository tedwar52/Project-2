// need help to understand why the inclusion of this file as .js in models folder throws error.

module.exports = function (sequelize, DataTypes) {
    const Schedule = sequelize.define("Schedule", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dateTime: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Schedule;
};


