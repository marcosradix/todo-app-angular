import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly BASE_URL: string = environment.urlApi;
  
  constructor() { }
}
