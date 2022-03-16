import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskModel } from '../../models/task-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly BASE_URL: string = environment.urlApi;
  
  constructor(private httpClient: HttpClient) {}

  createTask(task: TaskModel): Observable<TaskModel>{
      return this.httpClient.post<TaskModel>(`${this.BASE_URL}/todos/task`, task);
  }

  
  allTodosFromTaskId(taskId: number): Observable<TaskModel[]>{
    return this.httpClient.get<TaskModel[]>(`${this.BASE_URL}/todos/task/${taskId}`);
}
}
