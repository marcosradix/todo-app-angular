import { TodoModel } from './../../models/todo-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateTodoInTaskDto } from '../../models/create-todo-in-task-dto';
import { StatusUpdateDto } from '../../models/status-update-dto';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly BASE_URL: string = environment.urlApi;

  constructor(private http: HttpClient) { }

  updateTaskInTodos(createTodoInTaskDto: CreateTodoInTaskDto): Observable<TodoModel[]> {
    return this.http.post<TodoModel[]>(`${this.BASE_URL}/todos/task/todo/create`, createTodoInTaskDto);
  }

  updateTodoStatus( todoId?: number, statusUpdateDto?: StatusUpdateDto): Observable<TodoModel> {
    return this.http.patch<TodoModel>(`${this.BASE_URL}/todos/${todoId}`, statusUpdateDto);
  }
}
