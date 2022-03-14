import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTodoComponent } from 'src/app/shared/form-todo/form-todo.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
