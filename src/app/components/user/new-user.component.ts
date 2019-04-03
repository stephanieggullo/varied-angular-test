import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-user',
  template: `
    <p>
      new-user works!
    </p>
  `,
  styles: []
})
export class NewUserComponent implements OnInit {

  constructor( private router: ActivatedRoute) {
    this.router.parent.params.subscribe( parametros => {
      console.log(parametros);
    });
   }

  ngOnInit() {
  }

}
