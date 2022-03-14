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
 title = "";
  constructor(private router: Router, private taskService: TaskService) { }
  public formTodo: FormTodoComponent = new FormTodoComponent();
  ngOnInit(): void {
  
  }

  ngAfterContentChecked(): void {
    this.title = "/task" == this.router.url ? "Criar nova atividade" : "Criar nova tarefa";
  }

  update(event: any) {
    if("/task" == this.router.url){
      console.log("você chamou adionar afazeres");
      this.taskService.createTask(event).subscribe(data => {
        console.log("feito: "+JSON.stringify( data));
      });
    }
    
    if("/" == this.router.url){
      console.log("você chamou adionar tarefa");
    }
  }
}
