import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly BASE_URL: string = environment.urlApi;
  
  constructor() { }
}
