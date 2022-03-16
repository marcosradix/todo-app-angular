import { TaskModel } from './../../core/models/task-model';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormTodoComponent } from 'src/app/shared/form-todo/form-todo.component';
import { TaskService } from 'src/app/core/services/task/task.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements AfterViewInit, OnInit {
  displayedColumns = ['#', 'name', 'createdAt'];
  data: TaskModel[] = [];
  dataSource = new MatTableDataSource<TaskModel>(this.data);

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
  showTodos(taskId: number) {
    console.log("task id: " + taskId);
    this.router.navigate(['/todo', taskId]);
  }

  update(event: any) {
    console.log("você chamou adionar tarefa");

    this.taskService.createTask(event).subscribe({
      next: (v) => console.log("feito: " + JSON.stringify(v)),
      error: (e) => {
        this.toastr.error("erro ao salvar", "Erro");
        console.log(e);
      },
      complete: () => {
        this.toastr.success('Salvo com sucesso! ', 'Sucesso!');
        this.loadTable();
      }
    });

    // this.taskService.createTask(event).subscribe(data => {
    //   this.toastr.success('Savo com sucesso! ', 'Sucesso!');
    //   console.log("feito: " + JSON.stringify(data));
    // }, error => {
    //   this.toastr.error("erro ao salvar", "Erro");
    //   console.log(error);
    // });
  }

  ngAfterViewInit() {

  }
}

