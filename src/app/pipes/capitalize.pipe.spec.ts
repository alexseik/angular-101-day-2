import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform text', () => {
    const inputName = 'julio salinas';
    const pipe = new CapitalizePipe();
    const expected = pipe.transform(inputName);
    expect(expected).toBe('Julio Salinas');
  });
});
