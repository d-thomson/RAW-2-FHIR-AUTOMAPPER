DROP DATABASE IF EXISTS flaskapp; 

CREATE DATABASE IF NOT EXISTS flaskapp;
CREATE USER flaskapp_user WITH ENCRYPTED PASSWORD 'flaskapp_pass';
GRANT ALL PRIVILEGES ON DATABASE flaskapp TO flaskapp_user;

CREATE TABLE "user" ( 
	userID SERIAL PRIMARY KEY,
	username varchar(50) UNIQUE NOT NULL,
	password varchar(60) NOT NULL -- super secure I know
);

CREATE TABLE mapping (
	mappingID SERIAL PRIMARY KEY,
	userID integer NOT NULL,
	mapping_name varchar(250) NOT NULL,
	mapping_data text NOT NULL,
	CONSTRAINT fk_mapping_userID_user_userID FOREIGN KEY (userID)
      REFERENCES "user" (userID) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);
