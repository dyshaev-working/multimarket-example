import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { UserBaseDto } from '../../user-base/dto/user-base.dto';

export class UserAzDto extends UserBaseDto {
  @ApiProperty()
  @IsString()
  public readonly region: string;

  @ApiProperty()
  @IsString()
  public readonly city: string;
}

export class CreateUserAzDto extends OmitType(UserAzDto, [
  'id',
  'createdAt',
  'deletedAt',
  'updatedAt',
]) {}
