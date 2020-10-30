module.exports = function (sequelize, DataTypes) {
    const Schedule = sequelize.define("Schedule", {

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
    Schedule.associate = function (models) {
        Schedule.belongsTo(models.User, {
            onDelete: "cascade"
        });
    };
    return Schedule;
};

