const {format_date, format_plural, format_url} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2022-02-09 16:15:14');
    expect(format_date(date)).toBe('2/9/2022')
});

test('format_plural() returns a pluralized word', () => {
    const word = 'Tiffany';
    const amount = expect.any(Number);
    expect(format_plural(word, amount))
    .toBe('Tiffanys', 2)
});

test('format_plural() returns a singular word', () => {
    const word = 'Tiffany';
    const amount = 1;
    expect(format_plural(word, amount))
    .toBe('Tiffany', 1)
});

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');
  
    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
  });