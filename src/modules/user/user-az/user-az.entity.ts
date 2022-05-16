import { Column, Entity } from 'typeorm';
import { UserBaseEntity } from '../user-base/user-base.entity';
import MarketEnum from '../../common/common.enum';

@Entity('users')
export class UserAzEntity extends UserBaseEntity {
  public static market = MarketEnum.AZ;

  constructor(data?: Partial<UserAzEntity>) {
    super();

    if (data) {
      Object.assign(this, data);
    }
  }

  @Column()
  public region: string;

  @Column()
  public city: string;
}
