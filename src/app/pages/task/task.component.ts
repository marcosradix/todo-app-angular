import { TaskModel } from './../../core/models/task-model';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormTodoComponent } from 'src/app/shared/form-todo/form-todo.component';
import { TaskService } from 'src/app/core/services/task/task.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements AfterViewInit, OnInit {
  displayedColumns = ['#', 'name', 'createdAt', 'actions'];
  data: TaskModel[] = [];
  dataSource = new MatTableDataSource<TaskModel>(this.data);
  @ViewChild(FormTodoComponent, {static: false}) formTodo!: FormTodoComponent;
  taskEditId?: number;

  constructor(private taskService: TaskService, private router: Router, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.loadTable();
  }

  loadTable() {
    this.taskService.allTasks().subscribe({
      next: (v) => {
        console.log("data: " + JSON.stringify(v));
        this.dataSource.data = v;
      },
      error: (e) => {
        console.log("erro na hora de carregar", e);
      }
    });
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  showTodos(taskId?: number) {
    console.log("task id: " + taskId);
    this.router.navigate(['/todo', taskId]);
  }

  update(event: any) {
    console.log("você chamou adionar tarefa");
    let task: TaskModel = event; 
    task.id = this.taskEditId;
    this.taskService.createTask(event).subscribe({
      next: (v) => console.log("feito: " + JSON.stringify(v)),
      error: (e) => {
        this.toastr.error("erro ao salvar", "Erro");
        console.log(e);
      },
      complete: () => {
        this.toastr.success('Salvo com sucesso! ', 'Sucesso!');
        this.loadTable();
        this.taskEditId = undefined;
      }
    });
  }
  openDialog(type: String, element: TaskModel) {
    
    if('visualizar' == type){
      this.showTodos(element.id);
    }
    if('deletar' == type){
      this.taskService.deleteTaskById(element.id).subscribe({
        next: (v) => console.log("feito: " + JSON.stringify(v)),
        error: (e) => {
          this.toastr.error("erro ao remover", "Erro");
          console.log(e);
        },
        complete: () => {
          this.toastr.success('Removido com sucesso! ', 'Sucesso!');
          this.loadTable();
        }
      });
    }
    
    if('editar' == type){
      console.log(type, element);
      this.taskEditId = element.id;
      this.formTodo.myForm.setValue({
        name: element.name,
        description: ""
      });
    }
  }
  ngAfterViewInit() {

  }
}

