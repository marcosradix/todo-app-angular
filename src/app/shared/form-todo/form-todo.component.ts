import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html',
  styleUrls: ['./form-todo.component.css']
})
export class FormTodoComponent implements OnInit {
  public name: String = "";
  public description: String = "";

  @Input()
  public render: boolean = false;
 

  public myForm: FormGroup = new FormGroup({
    name: new FormControl(),
    description: new FormControl()
  });

  @Output("execute") execute: EventEmitter<String> = new EventEmitter<String>();
  title = "";
  constructor(private formBuilder?: FormBuilder, private router?: Router) { }

  update() {
    this.execute.emit(this.myForm.value);
    this.myForm.reset({});

  }

  ngAfterContentChecked(): void {
    this.title = "/task" == this.router!.url ? "Criar nova atividade" : "Criar nova tarefa";
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
