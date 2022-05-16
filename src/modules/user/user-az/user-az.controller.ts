import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserBaseController } from '../user-base/user-base.controller';
import MarketEnum from '../../../modules/common/common.enum';
import USER_PROVIDER from '../user.enum';
import { UserAzService } from './user-az.service';

@ApiBearerAuth()
@Controller('users')
@ApiTags('Users [az]')
export class UserAzController extends UserBaseController {
  public static market = MarketEnum.AZ;

  constructor(
    @Inject(USER_PROVIDER.USER_SERVICE)
    public readonly service: UserAzService,
  ) {
    super(service);
  }

  @Get('/region/:region')
  public findByRegion(@Param('region') region: string) {
    return this.service.findByRegion(region);
  }
}
