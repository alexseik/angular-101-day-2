import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { FormsModule } from '@angular/forms';
import { CapitalizePipe } from 'src/app/pipes/capitalize.pipe';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [
        AppComponent,
        CandidateComponent,
        CandidateListComponent,
        CapitalizePipe,
      ],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render candidate component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-candidate')?.textContent).toBeDefined();
  });
});
