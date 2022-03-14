import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  update(event: any) {
    if("/task" == this.router.url){
      console.log("você chamou adionar afazeres");
    }
    if("/" == this.router.url){
      console.log("você chamou adionar tarefa");
    }

    console.log(event);
  }
}
