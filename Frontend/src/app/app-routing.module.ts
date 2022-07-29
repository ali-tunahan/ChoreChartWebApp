import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoreComponent } from "./chore/chore.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { RulesComponent } from "./rules/rules.component"
const routes: Routes = [

{path:'chore',component:ChoreComponent},
{ path: 'homepage', component: HomepageComponent },
{ path: 'rules', component: RulesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
