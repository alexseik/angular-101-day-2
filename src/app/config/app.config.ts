import { InjectionToken } from '@angular/core';
import { Candidate } from '../models/candidate.model';

export interface AppConfig {
  candidates: Candidate[];
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

const Candidates: Candidate[] = [
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

export const Config: AppConfig = {
  candidates: Candidates,
};
