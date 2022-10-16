import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'persona',
    loadChildren: () => import ('./Persona/persona.module').then( m => m.PersonaModule),
  },
  {
    path: '404',
    component: AppComponent
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
