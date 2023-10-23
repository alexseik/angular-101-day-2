import { Inject, Injectable } from '@angular/core';
import { Candidate } from '../models/candidate.model';
import { APP_CONFIG, AppConfig } from '../config/app.config';

@Injectable({
  providedIn: 'root',
})
export class CandidatesService {
  candidates: Candidate[] = [];

  constructor(@Inject(APP_CONFIG) private config: AppConfig) {
    if (this.config && this.config.candidates) {
      this.candidates = this.config.candidates;
    }
  }

  getCandidates() {
    return this.candidates;
  }

  updateCandidate(candidate: Candidate) {
    const candidateIndex = this.candidates.findIndex(
      (c) => c.name === candidate.name
    );
    if (candidateIndex > -1) {
      this.candidates[candidateIndex] = Object.assign(
        {},
        this.candidates[candidateIndex],
        candidate
      );
    }
  }
}
