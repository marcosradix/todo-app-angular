import { TodoModel } from './../../core/models/todo-model';
import { FormTodoComponent } from 'src/app/shared/form-todo/form-todo.component';
import { TaskService } from './../../core/services/task/task.service';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, AfterContentChecked {
  displayedColumns = ['select', 'name', 'description', 'isDone', 'createdAt'];
  data: TodoModel[] = [];
  dataSource = new MatTableDataSource<TodoModel>(this.data);

  constructor(
    private router: Router,
    private taskService: TaskService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) { }
  public formTodo: FormTodoComponent = new FormTodoComponent();

  selection = new SelectionModel<TodoModel>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.taskService.allTodosFromTaskId(params["id"]).subscribe(data => {
        this.dataSource.data = data;
      });
    });
  }

  ngAfterContentChecked(): void {

  }

  update(event: any) {
    this.toastr.success('Sucesso!', 'Savo com sucesso!');
    console.log("você chamou adionar atividades: ", event);
  }

}
