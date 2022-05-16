export default interface IUserBase {
  readonly id?: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly middleName: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly deletedAt?: Date;
}
