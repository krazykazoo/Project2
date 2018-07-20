CREATE TABLE user (
  id serial,
  username character varying,
  pass character varying,
  first_name character varying,
  last_name character varying,
  email character varying,
  PRIMARY KEY (id)
);

CREATE TABLE status (
  id serial,
  friend_level character varying,
  PRIMARY KEY (id)
);

CREATE TABLE prompts (
  id serial,
  prompt character varying,
  PRIMARY KEY (id)
);

CREATE TABLE friends (
  id serial,
  user_fk integer references user(id),
  friend_fk integer references user(id),
  status integer references status(id),
  PRIMARY KEY (id)
);

CREATE TABLE game (
  id serial,
  number_playing integer,
  turn_number integer,
  original_prompt_fk integer references prompt(id),
  PRIMARY KEY (id)
);

CREATE TABLE game_group (
  id serial,
  game_fk integer references game(id),
  user_fk integer references user(id),
  position integer,
  PRIMARY KEY (id)
);

CREATE TABLE user_prompts (
  id serial,
  game_fk integer references game(id),
  user_fk integer references user(id),
  response character varying,
  PRIMARY KEY (id)
);

