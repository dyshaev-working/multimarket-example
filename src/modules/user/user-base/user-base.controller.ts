import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserBaseService } from './user-base.service';
import { CreateUserBaseDto, UserBaseDto } from './dto/user-base.dto';
import {
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import MarketEnum from '../../../modules/common/common.enum';
import USER_PROVIDER from '../user.enum';

@ApiBearerAuth()
@Controller('users')
@ApiTags('Users [base]')
export class UserBaseController {
  public static market = MarketEnum.BASE;

  constructor(
    @Inject(USER_PROVIDER.USER_SERVICE)
    public readonly service: UserBaseService,
  ) {}

  @Get(':id')
  @ApiNotFoundResponse()
  public findById(@Param('id', new ParseIntPipe()) id: number) {
    return this.service.findById(id);
  }

  @Post()
  @ApiOkResponse({ type: UserBaseDto })
  public create(@Body() createSizesDto: CreateUserBaseDto) {
    return this.service.create(createSizesDto);
  }
}
