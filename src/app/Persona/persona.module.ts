import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { PersonaRoutingModule } from './persona-routing.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ListarComponent,
    AddComponent,
    EditComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    PersonaRoutingModule
  ],
})
export class PersonaModule { }
