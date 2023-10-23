import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Candidate } from './models/candidate.model';
import { CandidateComponent } from './components/candidate/candidate.component';
import { CandidatesService } from './services/candidates.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'candidates-frontend';

  @ViewChildren(CandidateComponent)
  private candidateComps!: CandidateComponent[];

  public candidatesLength: number = 0;

  selectedCandidate: Candidate | null = null;

  get candidateName(): string {
    return this.selectedCandidate ? this.selectedCandidate.name : '';
  }

  get candidateExperience(): number {
    return this.selectedCandidate ? this.selectedCandidate.experience : 0;
  }

  constructor(public candidates: CandidatesService) {}

  ngOnInit() {
    setTimeout(() => {
      this.candidatesLength =
        !!this.candidateComps && 'length' in this.candidateComps
          ? this.candidateComps.length
          : 0;
    });
  }

  changeInput(event: Event) {
    const updateCandidate = Object.assign({}, this.selectedCandidate, {
      experience: parseInt((event.target as any).value),
    });
    this.candidates.updateCandidate(updateCandidate);
  }

  selectCandidate(candidate: Candidate) {
    this.selectedCandidate = candidate;
  }

  trackById(index: number, item: Candidate) {
    return item.id;
  }

  unselect() {
    this.selectedCandidate = null;
  }
}
