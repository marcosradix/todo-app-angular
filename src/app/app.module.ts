import { ToolBarComponent } from './core/components/tool-bar/tool-bar.component';
import { TodoService } from './core/services/todo/todo.service';
import { TaskService } from './core/services/task/task.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared-modules/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DefaultComponent } from './core/components/default/default.component';
import { ToastrModule } from 'ngx-toastr';
  

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    ToolBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [TaskService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
