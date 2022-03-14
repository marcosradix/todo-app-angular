import { TodoService } from './core/services/todo/todo.service';
import { TaskService } from './core/services/task/task.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared-modules/shared.module';
import { HttpClientModule } from '@angular/common/http';  

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [TaskService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
