import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../interfaces/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {

  // private baseUrl: string = environment.baseUrl;

  constructor( private httpclient: HttpClient ) { }

  baseUrl='http://localhost:8080/Ejemplo01';

  getPersonas(): Observable<Persona[]>{
    return this.httpclient.get<Persona[]>( ` ${this.baseUrl}/personas ` );
  }

}
