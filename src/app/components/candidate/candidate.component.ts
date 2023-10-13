import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { Candidate } from '../../models/candidate.model';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CandidateComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy
{
  @Input() candidate!: Candidate;

  @Output() select = new EventEmitter<Candidate>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }
  ngOnInit(): void {
    console.log('OnInit', { candidate: this.candidate });
  }
  ngDoCheck(): void {
    console.log('DoCheck');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

  doEdit = () => {
    this.select.emit(this.candidate);
  };

  candidateClasses() {
    return {
      'candidate-card': true,
      senior: this.candidate.experience < 3,
      junior: this.candidate.experience > 5,
    };
  }

  getColor() {
    if (this.candidate.experience <= 5) {
      return 'black';
    }
    return 'white';
  }
}
