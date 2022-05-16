import IUserBase from '../user-base/user-base.interface';

export default interface IUserAz extends IUserBase {
  readonly region: string;
  readonly city: string;
}
