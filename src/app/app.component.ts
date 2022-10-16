import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-crud-springboot';

  constructor( private router:Router ){}

  listar(){
    console.log( "listar" );
    this.router.navigate(['/persona/listar']);
  }

  nuevo(){
    console.log( "nuevo" );
    this.router.navigate(['/persona/add']);
  }
}
