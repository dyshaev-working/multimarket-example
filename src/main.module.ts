import { Module } from '@nestjs/common';
import { provideDatabaseConfig } from './core/database/database.config';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './core/database/database.module';
import UserModule from './modules/user/user.module';

const COMMON_MODULES = [
  ConfigModule.forRoot({
    load: [provideDatabaseConfig],
  }),
  DatabaseModule,
];

@Module({
  imports: [...COMMON_MODULES, UserModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class MainModule {}
