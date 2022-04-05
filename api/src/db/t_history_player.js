const { DataTypes } = require("sequelize");

module.exports = ({ Player, Match }) => ({
    options: {
        tableName: 'history_player',
    },
    fields: {
        player_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: Player,
                key: 'id',
            },
        },
        match_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: Match,
                key: 'id',
            },
        },
    },
});
