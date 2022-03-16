import { TodoModel } from './../../core/models/todo-model';
import { FormTodoComponent } from 'src/app/shared/form-todo/form-todo.component';
import { TaskService } from './../../core/services/task/task.service';
import { AfterContentChecked, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ToastrService } from 'ngx-toastr';
import { TodoService } from 'src/app/core/services/todo/todo.service';
import { CreateTodoInTaskDto } from 'src/app/core/models/create-todo-in-task-dto';
import { TaskModel } from 'src/app/core/models/task-model';
import { StatusUpdateDto } from 'src/app/core/models/status-update-dto';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, AfterContentChecked {
  displayedColumns = ['select', 'name', 'description', 'isDone', 'createdAt', 'actions'];
  data: TodoModel[] = [];
  dataSource = new MatTableDataSource<TodoModel>(this.data);
  taskId?: number;
  todoId?: number;
  constructor(
    private router: Router,
    private taskService: TaskService,
    private todoService: TodoService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
  ) { }

  @ViewChild(FormTodoComponent, {static: false}) formTodo!: FormTodoComponent;

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
    this.loadTable();

  }
  loadTable() {
    this.route.params.subscribe(params => {
      this.taskService.allTodosFromTaskId(params["id"]).subscribe(data => {
        this.taskId = params["id"];
        this.dataSource.data = data;
      });
    });
  }

  ngAfterContentChecked(): void {

  }
updateStatus(event: any, row: TodoModel){
  event.stopPropagation();
  console.log("event", row);
  this.todoService.updateTodoStatus(row.id, new StatusUpdateDto(!row.isDone)).subscribe(
    {
      next: (v) => console.log("feito: " + JSON.stringify(v)),
      error: (e) => {
        this.toastr.error("erro ao atualizar", "Erro");
        console.log(e);
      },
      complete: () => {
        this.toastr.success('Atualizado com sucesso! ', 'Sucesso!');
        this.loadTable();
      }
    }
  )
}
  update(event: any) {
    let createTodoInTaskDto: CreateTodoInTaskDto = new CreateTodoInTaskDto();
    let { name, description } = event;
    let todos: TodoModel[] = [];
    let todo: TodoModel = new TodoModel();
    todo.id = this.todoId;
    todo.task = new TaskModel();
    todo.task!.id = this.taskId;
    todo.name = name;
    todo.description = description;
    todos.push(todo);
    createTodoInTaskDto.todos = todos;
    console.log(JSON.stringify(createTodoInTaskDto));
    this.todoService.updateTaskInTodos(createTodoInTaskDto).subscribe({
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
  }
  openDialog(type: String, element: TodoModel) {
    console.log(type, element);
    if('deletar' == type){
      this.todoService.deleteTodoById(element.id).subscribe({
        error: (e) => {
          this.toastr.error("erro ao deletar", "Erro");
          console.log(e);
        },
        complete: () => {
          this.toastr.success('Removido com sucesso! ', 'Sucesso!');
          this.loadTable();
        }
      });
    }
    if('editar' == type){
      this.todoId = element.id;
      this.formTodo.myForm.setValue({
        name: element.name, 
        description: element.description
      });
    }
  }
}
