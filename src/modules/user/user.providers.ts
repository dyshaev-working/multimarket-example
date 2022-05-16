import MarketEnum from '../common/common.enum';
import { getInstance, getInstances } from '../common/common.util';
import { UserAzController } from './user-az/user-az.controller';
import { UserAzEntity } from './user-az/user-az.entity';
import { UserAzRepository } from './user-az/user-az.repository';
import { UserAzService } from './user-az/user-az.service';
import { UserBaseController } from './user-base/user-base.controller';
import { UserBaseEntity } from './user-base/user-base.entity';
import { UserBaseRepository } from './user-base/user-base.repository';
import { UserBaseService } from './user-base/user-base.service';

const market = process.env.MARKET || MarketEnum.AZ;

export const userEntityInstances = getInstances(
  [UserBaseEntity, UserAzEntity],
  market,
);

export const userRepositoryInstance = getInstance(
  [UserBaseRepository, UserAzRepository],
  market,
);

export const userServiceInstance = getInstance(
  [UserBaseService, UserAzService],
  market,
);

export const userControllerInstances = getInstances(
  [UserBaseController, UserAzController],
  market,
);
