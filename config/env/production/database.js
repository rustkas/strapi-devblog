const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  // const parsedConnectionString = parse(env("DATABASE_URL"));
  ({host, port, database, user, password} = parse(env("DATABASE_URL")));
  return {
    client: 'postgres',
    connection: {
      host,
      port,
      database,
      user,
      password,
      schema: env('DATABASE_SCHEMA', 'public'), // Not required

    },
    debug: false,
  };
};