import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListarComponent } from './listar/listar.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'editar',
        component: EditComponent
      },
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: 'listar',
        component: ListarComponent
      },
      {
        path: '**',
        redirectTo: 'listar'
      },
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class PersonaRoutingModule { }
