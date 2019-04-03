import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  alert: string = 'alert-danger';
  property: object = {
    danger: false,
  };
  loading: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  execute() {
    this.loading = true;
    setTimeout( () => this.loading = false, 3000);
  }
}
