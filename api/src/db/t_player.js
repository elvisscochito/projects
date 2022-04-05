const { DataTypes } = require("sequelize");

module.exports = {
    options: {
        tableName: 'player',
    },
    fields: {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(128),
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
    },
};