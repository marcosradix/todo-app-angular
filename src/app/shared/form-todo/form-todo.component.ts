import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html',
  styleUrls: ['./form-todo.component.css']
})
export class FormTodoComponent implements OnInit {
  public name: String = "";

  constructor() { }


  ngOnInit(): void {
  }
  ok(){
    console.log(`name: ${this.name}`);
    this.name = "";
  }
}
