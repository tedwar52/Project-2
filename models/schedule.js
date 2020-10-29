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
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Schedule;
};