import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    // console.log('elementStyle', this.el.nativeElement.style);
    this.el.nativeElement.style.borderColor = 'blue';
    this.el.nativeElement.style.borderWidth = '5px';
    this.el.nativeElement.style.borderStyle = 'solid';
    this.el.nativeElement.style.borderRadius = '5px';
  }
}
