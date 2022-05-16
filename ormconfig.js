module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['src/modules/**/*-basic/*.entity.ts'], // or *-<another market>. Set dependence of environment variables
  migrations: ['src/core/database/migrations/basic/*.ts'], // or <another market>. Set dependence of environment variables
  autoLoadEntities: false,
  synchronize: false,
  cli: {
    migrationsDir: 'src/core/database/migrations/basic', // or *another market>. Set dependence of environment variables
  },
};
