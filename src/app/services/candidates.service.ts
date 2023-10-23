import { Injectable } from '@angular/core';
import { Candidate } from '../models/candidate.model';

@Injectable({
  providedIn: 'root',
})
export class CandidatesService {
  private candidates: Candidate[] = [
    {
      id: 1,
      name: 'josé    pérez',
      age: 25,
      position: 'Desarrollador Junior',
      experience: 1,
      salary: 20000,
      skills: ['Java', 'SQL'],
    },
    {
      id: 2,
      name: 'Paco López',
      age: 40,
      position: 'Desarrollador Senior',
      experience: 15,
      salary: 40000,
      skills: ['Java', 'SQL', 'Oracle', 'PL/SQL', 'Cobol', 'C++'],
    },
    {
      id: 3,
      name: 'Mireia García',
      age: 30,
      position: 'Desarrolladora Intermedia',
      experience: 4,
      salary: 30000,
      skills: ['Java', 'SQL', 'Oracle', 'PL/SQL', 'Cobol', 'C++'],
    },
  ];

  constructor() {}

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
