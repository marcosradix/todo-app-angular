import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit, AfterContentChecked {
  title = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.title = "/task" == this.router.url ? "Criar nova atividade" : "Criar nova tarefa";
  }

}
