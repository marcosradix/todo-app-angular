import { AfterViewInit, Component, ViewChild } from '@angular/core';
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
export class TaskComponent implements AfterViewInit {
  displayedColumns = ['name', 'description'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(private taskService: TaskService, private router: Router, private toastr: ToastrService) { }



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
      complete: () => this.toastr.success('Savo com sucesso! ', 'Sucesso!')
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

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
