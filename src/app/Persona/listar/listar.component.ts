import { Component, OnInit } from '@angular/core';

import { Persona } from '../interfaces/persona.interface';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: [
  ]
})
export class ListarComponent implements OnInit {

  personas: Persona[] = [];

  constructor( private personaService: PersonaService ) { }


  ngOnInit(): void {

    this.personaService.getPersonas().subscribe({
      next: ( personas => {
        this.personas = personas;
      } ),
    });
  }

}
