import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  PreguntasComponent} from './preguntas/preguntas.component'

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'test/:id', component: PreguntasComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
