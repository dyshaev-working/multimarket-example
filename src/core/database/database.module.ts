import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userEntityInstances } from '../../modules/user/user.providers';
import { provideDatabaseConfig } from './database.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forFeature(provideDatabaseConfig)],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('database.host'),
        //logging: process.env.NODE_ENV === 'production' ? false : 'all',
        username: configService.get('database.username'),
        database: configService.get('database.database'),
        password: configService.get('database.password'),
        port: configService.get('database.port'),
        synchronize: false,
        entities: [...userEntityInstances],
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
