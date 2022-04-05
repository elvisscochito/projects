CREATE DATABASE IF NOT EXISTS metaverse;
USE metaverse;

CREATE TABLE IF NOT EXISTS history
( history_id INT NOT NULL AUTO_INCREMENT
, total_time INT NOT NULL
, history_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP

, CONSTRAINT history_pk
  PRIMARY KEY (history_id)
);

CREATE TABLE IF NOT EXISTS player
( player_id INT NOT NULL AUTO_INCREMENT
, player_name VARCHAR(128) NOT NULL
, player_email VARCHAR(128) NOT NULL
, player_pw VARCHAR(128) NOT NULL

, CONSTRAINT player_pk
  PRIMARY KEY (player_id)
);

CREATE TABLE IF NOT EXISTS game_event
( game_event_id INT NOT NULL AUTO_INCREMENT
, game_event_name VARCHAR(128) NOT NULL
, game_event_points INT NOT NULL

, CONSTRAINT game_event_pk
  PRIMARY KEY (game_event_id)
);

-- history many to many players
CREATE TABLE IF NOT EXISTS history_players
( history_id INT NOT NULL
, player_id INT NOT NULL

, CONSTRAINT history_players_pk
  PRIMARY KEY (history_id, player_id)
, CONSTRAINT history_players_history_fk0
  FOREIGN KEY (history_id)
  REFERENCES history(history_id)
, CONSTRAINT history_players_player_fk0
  FOREIGN KEY (player_id)
  REFERENCES player(player_id)
);

-- history player events
CREATE TABLE IF NOT EXISTS history_event
( history_event_id INT NOT NULL AUTO_INCREMENT
, history_id INT NOT NULL
, game_event_id INT NOT NULL
, player_id INT NOT NULL

, CONSTRAINT history_event_pk
  PRIMARY KEY (history_event_id)
, CONSTRAINT history_event_history_fk0
  FOREIGN KEY (history_id)
  REFERENCES history(history_id)
, CONSTRAINT history_event_game_event_fk0
  FOREIGN KEY (game_event_id)
  REFERENCES game_event(game_event_id)
, CONSTRAINT history_event_player_fk0
  FOREIGN KEY (player_id)
  REFERENCES player(player_id)
);