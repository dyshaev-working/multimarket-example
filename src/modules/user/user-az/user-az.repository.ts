import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserBaseRepository } from '../user-base/user-base.repository';
import { UserAzEntity } from './user-az.entity';
import MarketEnum from '../../../modules/common/common.enum';

export class UserAzRepository extends UserBaseRepository {
  public static market = MarketEnum.AZ;

  constructor(
    @InjectRepository(UserAzEntity)
    public repository: Repository<UserAzEntity>,
  ) {
    super(repository);
  }

  public async findByRegion<Entity>(region: string): Promise<Entity> {
    return this.repository.findOne({
      where: { region },
    }) as unknown as Entity;
  }
}
