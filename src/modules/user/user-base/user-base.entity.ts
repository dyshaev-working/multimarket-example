import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import IUserBase from './user-base.interface';
import MarketEnum from '../../../modules/common/common.enum';

@Entity('users')
export class UserBaseEntity implements IUserBase {
  public static market = MarketEnum.BASE;

  constructor(data?: Partial<UserBaseEntity>) {
    if (data) {
      Object.assign(this, data);
    }
  }

  @PrimaryGeneratedColumn()
  public readonly id?: number;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column()
  public middleName: string;

  @CreateDateColumn()
  public createdAt?: Date;

  @UpdateDateColumn()
  public updatedAt?: Date;

  @DeleteDateColumn()
  public deletedAt?: Date;
}
