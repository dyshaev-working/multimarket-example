import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBooleanString,
  IsEnum,
  IsInt,
  IsOptional,
  IsPositive,
} from 'class-validator';
import { Transform } from 'class-transformer';

export enum SizesSort {
  SEAT_HEIGHT_ASC = 'seatHeight,asc',
  SEAT_HEIGHT_DESC = 'seatHeight,desc',
  HEIGHT_ASC = 'totalHeight,asc',
  HEIGHT_DESC = 'totalHeight,desc',
  WIDTH_ASC = 'totalWidth,asc',
  WIDTH_DESC = 'totalWidth,desc',
  LENGTH_ASC = 'totalLength,asc',
  LENGTH_DESC = 'totalLength,desc',
}

export class SizesFilterQuery {
  @ApiPropertyOptional({ name: 'filter[forChildren]' })
  @IsBooleanString()
  @IsOptional()
  forChildren?: boolean;

  @ApiPropertyOptional({ name: 'filter[id]' })
  @Transform(({ value }) => +value)
  @IsInt()
  @IsPositive()
  @IsOptional()
  id?: number;
}

export class UserBaseQuery {
  @ApiPropertyOptional({ enum: SizesSort })
  @IsEnum(SizesSort)
  @IsOptional()
  sort: SizesSort;

  @ApiPropertyOptional()
  @IsInt()
  @Transform(({ value }) => +value)
  @IsOptional()
  skip?: number = 0;

  @ApiPropertyOptional()
  @IsInt()
  @Transform(({ value }) => +value)
  @IsOptional()
  take?: number = 10;
}

export class DeleteSizesQuery {
  @ApiProperty({
    type: String,
    example: '1,2',
  })
  @Transform(({ value }) => value.split(',').map((val) => Number(val)))
  @IsInt({ each: true })
  ids: number[];
}
