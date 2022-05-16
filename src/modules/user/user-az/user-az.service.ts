import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import MarketEnum from '../../../modules/common/common.enum';
import { UserBaseService } from '../user-base/user-base.service';
import USER_PROVIDER from '../user.enum';
import { IUserAzRepository } from './user-az.abstract-repository';
import { UserAzEntity } from './user-az.entity';

@Injectable()
export class UserAzService extends UserBaseService {
  public static market = MarketEnum.AZ;

  constructor(
    @Inject(USER_PROVIDER.USER_REPOSITORY)
    public readonly repository: IUserAzRepository,
  ) {
    super(repository);
  }

  public async findById(id: number): Promise<UserAzEntity> {
    const user = await this.repository.findById<UserAzEntity>(id);

    if (!user) {
      throw new NotFoundException(`User ${id} not found.`);
    }

    return user;
  }

  public async findByRegion(region: string): Promise<UserAzEntity> {
    const user = await this.repository.findByRegion<UserAzEntity>(region);

    if (!user) {
      throw new NotFoundException(`User not found.`);
    }

    return user;
  }
}
