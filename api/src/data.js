import { Sequelize, DataTypes } from "sequelize";
import debug from "debug";

const logger = debug("data");

const sequelize = new Sequelize('sqlite::memory:', {
    logging: msg => logger(msg),
});

export const Player = sequelize.define('Player', {
    username: { type: DataTypes.STRING(64), allowNull: false, primaryKey: true },
    password: { type: DataTypes.STRING(64), allowNull: false },
    email: { type: DataTypes.STRING(64), allowNull: true },
});

export const Event = sequelize.define('Event', {
    name: { type: DataTypes.STRING(64), allowNull: false, primaryKey: true },
    description: { type: DataTypes.STRING(256), allowNull: true },
    value: { type: DataTypes.INTEGER, allowNull: true },
});

export const Match = sequelize.define('Match', {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    duration: { type: DataTypes.INTEGER, allowNull: true },
});

export const EventHistory = sequelize.define('EventHistory', {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
});

// match events
Match.EventHistory = Match.hasMany(EventHistory, { foreignKey: { allowNull: false } });
EventHistory.Match = EventHistory.belongsTo(Match, { foreignKey: { allowNull: false } });
Player.EventHistory = Player.hasMany(EventHistory, { foreignKey: { allowNull: false } });
EventHistory.Player = EventHistory.belongsTo(Player, { foreignKey: { allowNull: false } });
Event.EventHistory = Event.hasMany(EventHistory, { foreignKey: { allowNull: false } });
EventHistory.Event = EventHistory.belongsTo(Event, { foreignKey: { allowNull: false } });

sequelize.sync({ force: true });
