import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CandidateComponent, CandidateListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule /* contiene ngModel */,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
