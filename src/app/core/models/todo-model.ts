import { TaskModel } from './task-model';

export class TodoModel {
    id?: number;
    name?: string;
    description?: string;
    isDone?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    task?: TaskModel;
}

