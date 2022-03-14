import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html',
  styleUrls: ['./form-todo.component.css']
})
export class FormTodoComponent implements OnInit {
  public name: String = "";
  public description: String = "";

  public myForm: FormGroup = new FormGroup({
    name: new FormControl(),
    description: new FormControl()
  });

  @Output("execute") execute: EventEmitter<String> = new EventEmitter<String>();

  constructor(private formBuilder?: FormBuilder) { }

  update() {
    this.execute.emit(this.myForm.value);
    this.myForm.reset({});

  }
  createForm() {
    this.myForm = this.formBuilder!.group({
      name: '',
      description: ''
    });
  }

  cleanForm() {
    console.log("limpando form");
    this.myForm.reset({});
  }
  ngOnInit(): void {
    this.createForm();
  }
}
