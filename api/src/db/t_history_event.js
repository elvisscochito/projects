const { DataTypes } = require("sequelize");

module.exports = ({ Player, Match, Event }) => ({
    options: {
        tableName: 'history_event',
    },
    fields: {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        player_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Player,
                key: 'id',
            },
        },
        match_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Match,
                key: 'id',
            },
        },
        event_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Event,
                key: 'id',
            },
        },
    },
});
