import IUserAz from '../user-az/user-az.interface';
import IUserBase from './user-base.interface';

type TUser = IUserBase | IUserAz;

export default TUser;
