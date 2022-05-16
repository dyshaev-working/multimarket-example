export const provideDatabaseConfig = () => ({
  database: {
    type: 'postgres',
    logging: process.env.NODE_ENV !== 'production',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
  },
});
