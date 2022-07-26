import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoreComponent } from './chore/chore.component';
import { ShowChoreComponent } from './chore/show-chore/show-chore.component';
import { AddEditChoreComponent } from './chore/add-edit-chore/add-edit-chore.component';
import{SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSelectModule } from '@angular/material/select'
@NgModule({
  declarations: [
    AppComponent,
    ChoreComponent,
    ShowChoreComponent,
    AddEditChoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule, 
    [BrowserAnimationsModule],
    MatSelectModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
