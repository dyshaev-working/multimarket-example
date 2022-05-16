import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsDateString, IsString } from 'class-validator';
import { UserBaseEntity } from '../user-base.entity';

export class UserBaseDto implements Partial<UserBaseEntity> {
  @ApiProperty({ description: 'Идентификатор' })
  id: number;

  @ApiProperty()
  @IsString()
  public readonly firstName: string;

  @ApiProperty()
  @IsString()
  public readonly lastName: string;

  @ApiProperty()
  @IsString()
  public readonly middleName: string;

  @ApiProperty()
  @IsDateString()
  createdAt: Date;

  @ApiProperty()
  @IsDateString()
  updatedAt: Date;

  @ApiProperty()
  @IsDateString()
  deletedAt: Date;
}

export class CreateUserBaseDto extends OmitType(UserBaseDto, [
  'id',
  'createdAt',
  'deletedAt',
  'updatedAt',
]) {}
