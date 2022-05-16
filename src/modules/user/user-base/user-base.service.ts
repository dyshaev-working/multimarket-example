import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IUserBaseRepository } from './user-base.abstract-repository';
import { UserBaseEntity } from './user-base.entity';
import MarketEnum from '../../../modules/common/common.enum';
import USER_PROVIDER from '../user.enum';
import IUserAz from '../user-az/user-az.interface';
import IUserBase from './user-base.interface';
import TUser from './user-base.type';
import { UserAzEntity } from '../user-az/user-az.entity';

@Injectable()
export class UserBaseService {
  public static market = MarketEnum.BASE;

  constructor(
    @Inject(USER_PROVIDER.USER_REPOSITORY)
    public readonly repository: IUserBaseRepository,
  ) {}

  public async create(createUserDto: IUserAz): Promise<UserAzEntity>;
  public async create(createUserDto: IUserBase): Promise<UserBaseEntity>;
  public async create(createUserDto: TUser): Promise<UserBaseEntity> {
    return this.repository.create<UserBaseEntity>(createUserDto);
  }

  public async findById(id: number): Promise<UserAzEntity>;
  public async findById(id: number): Promise<UserBaseEntity>;
  public async findById(id: number): Promise<UserBaseEntity> {
    const user = await this.repository.findById<UserBaseEntity>(id);

    if (!user) {
      throw new NotFoundException(`User ${id} not found.`);
    }

    return user;
  }
}
