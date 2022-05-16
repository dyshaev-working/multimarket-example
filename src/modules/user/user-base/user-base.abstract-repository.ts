import { DeleteResult } from 'typeorm';

export abstract class IUserBaseRepository {
  abstract findById<Entity>(id: number): Promise<Entity>;
  abstract create<Entity>(user: Partial<Entity>): Entity;
  abstract delete(id: number): Promise<DeleteResult>;
}
