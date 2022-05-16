import { InjectRepository } from '@nestjs/typeorm';
import MarketEnum from '../../../modules/common/common.enum';
import { Repository } from 'typeorm';
import { IUserBaseRepository } from './user-base.abstract-repository';
import { UserBaseEntity } from './user-base.entity';

export class UserBaseRepository implements IUserBaseRepository {
  public static market = MarketEnum.BASE;

  constructor(
    @InjectRepository(UserBaseEntity)
    public repository: Repository<UserBaseEntity>,
  ) {}

  public findById<Entity>(id: number): Entity {
    return this.repository.findOne({
      where: { id },
    }) as unknown as Entity;
  }

  public create<Entity>(user: Partial<Entity>): Entity {
    return this.repository.save(user) as unknown as Entity;
  }

  public delete(id: number) {
    return this.repository.delete({ id });
  }
}
