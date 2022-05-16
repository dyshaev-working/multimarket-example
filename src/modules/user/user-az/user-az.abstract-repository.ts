import { IUserBaseRepository } from '../user-base/user-base.abstract-repository';

export abstract class IUserAzRepository extends IUserBaseRepository {
  abstract findByRegion<Entity>(region: string): Promise<Entity>;
}
