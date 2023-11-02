import { Component } from '@angular/core';
import { ScaleDirective } from './scale.directive';
import { findEl } from '../utils/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template: ` <div appScale data-testid="host"></div> `,
})
class HostComponent {}

describe('ScaleDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let div: HTMLDivElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScaleDirective, HostComponent],
    });
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    div = findEl(fixture, 'host').nativeElement;
  });

  it('should set the style initially', () => {
    div.dispatchEvent(new Event('mouseenter'));
    expect(div.style['transform']).toBe('scale(1.1)');
  });
});
