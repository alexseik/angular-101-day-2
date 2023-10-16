import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return this.capitalizeWords(value as String);
  }

  private capitalizeWords(str: String) {
    return str
      .trim()
      .split(/\s+/)
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
  }
}
