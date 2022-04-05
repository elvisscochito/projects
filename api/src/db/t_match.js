const { DataTypes } = require("sequelize");

module.exports = {
    options: {
        tableName: 'match',
    },
    fields: {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        durtion: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
};
