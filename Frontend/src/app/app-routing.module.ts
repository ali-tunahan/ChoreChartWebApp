import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoreComponent } from "./chore/chore.component";

const routes: Routes = [

{path:'chore',component:ChoreComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
