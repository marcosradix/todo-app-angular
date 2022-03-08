import { SharedModule } from './../../shared-modules/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { FormTodoComponent } from 'src/app/shared/form-todo/form-todo.component';
import { ToolBarComponent } from 'src/app/core/components/tool-bar/tool-bar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodoComponent,
    FormTodoComponent,
    ToolBarComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class TodoModule { }
