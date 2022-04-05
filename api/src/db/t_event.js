const { DataTypes } = require("sequelize");

module.exports = {
    options: {
        tableName: "event",
    },
    fields: {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(256),
            allowNull: false,
            unique: true,
        },
        value: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
};
