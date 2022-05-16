import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import USER_PROVIDER from './user.enum';
import {
  userControllerInstances,
  userEntityInstances,
  userRepositoryInstance,
  userServiceInstance,
} from './user.providers';

const SERVICE_PROVIDE = {
  provide: USER_PROVIDER.USER_SERVICE,
  useClass: userServiceInstance,
};

@Module({
  imports: [TypeOrmModule.forFeature(userEntityInstances)],
  providers: [
    SERVICE_PROVIDE,
    {
      provide: USER_PROVIDER.USER_REPOSITORY,
      useClass: userRepositoryInstance,
    },
  ],
  controllers: [...userControllerInstances],
  exports: [SERVICE_PROVIDE],
})
export default class UserModule {}
