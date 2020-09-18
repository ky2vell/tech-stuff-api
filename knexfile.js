module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './database/use_tech.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations'
    },
    seeds: { directory: './database/seeds' }
  },
  testing: {
    client: 'sqlite3',
    connection: { filename: './database/testdb.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations'
    },
    seeds: { directory: './database/seeds' }
  }
};