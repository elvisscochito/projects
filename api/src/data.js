import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize('mysql://admin:Q82s594NmN4muuUWimXf@database-1.czfng6b4q5va.us-east-1.rds.amazonaws.com/metaverse_new');

export const Player = sequelize.define('Player', {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(128), allowNull: false },
    email: { type: DataTypes.STRING(128), allowNull: false },
    password: { type: DataTypes.STRING(128), allowNull: false },
}, { tableName: 'player' });

export const Event = sequelize.define('Event', {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(256), allowNull: false, unique: true },
    value: { type: DataTypes.INTEGER, allowNull: true }
}, { tableName: 'event' });

export const Match = sequelize.define('Match', {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    duration: { type: DataTypes.INTEGER, allowNull: true },
}, { tableName: 'match' });

export const HistoryEvent = sequelize.define('HistoryEvent', {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    player_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Player, key: 'id' } },
    match_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Match, key: 'id' } },
    event_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Event, key: 'id' } },
}, { tableName: "history_event" });

export const HistoryPlayer = sequelize.define("HistoryPlayer", {
    player_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, references: { model: Player, key: 'id' } },
    match_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, references: { model: Match, key: 'id' } },
}, { tableName: "history_player" });
