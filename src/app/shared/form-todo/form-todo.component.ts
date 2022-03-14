import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html',
  styleUrls: ['./form-todo.component.css']
})
export class FormTodoComponent implements OnInit {
  public name: String = "";


  @Output("execute") execute:EventEmitter<String> =new EventEmitter<String>();
  constructor() { }

  update() {
    this.execute.emit(this.name);
  }

  ngOnInit(): void {
  }
}
