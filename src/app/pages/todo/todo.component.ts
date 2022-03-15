import { FormTodoComponent } from 'src/app/shared/form-todo/form-todo.component';
import { TaskService } from './../../core/services/task/task.service';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, AfterContentChecked {
  constructor(private router: Router, private taskService: TaskService) { }
  public formTodo: FormTodoComponent = new FormTodoComponent();
  ngOnInit(): void {
  
  }

  ngAfterContentChecked(): void {
    
  }

  update(event: any) {
      console.log("você chamou adionar atividades: ", event);
    }
  
}
