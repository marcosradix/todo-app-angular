import { SharedModule } from './../../shared-modules/shared.module';
import { TaskComponent } from './task.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './task-routing.module';


@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule
  ]
})
export class TaskModule { }
