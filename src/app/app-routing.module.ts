import { TodoComponent } from './pages/todo/todo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: TodoComponent,
    children:[
      {
        path: '',
        loadChildren: () => import("./pages/todo/todo.module").then(m => m.TodoModule)
    },
    {
      path: '',
      loadChildren: () => import("./pages/task/task.module").then(m => m.TaskModule)
  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
