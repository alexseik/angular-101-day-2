import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { ScaleDirective } from './directives/scale.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { APP_CONFIG, Config } from './config/app.config';
import { CandidatesService } from './services/candidates.service';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    CandidateListComponent,
    HighlightDirective,
    ScaleDirective,
    CapitalizePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule /* contiene ngModel */,
  ],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: Config,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
