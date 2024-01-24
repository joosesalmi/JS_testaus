const sum = require('./summa2'); 

test('syötteet numeromaisia merkkijonoja', () => {
    expect(sum("1", "2")).toBe(3);
  });
  
test('syötteet numeromaisia merkkijonoja', () => {
    expect(() => {
        sum("jesse", "minna")}).toThrow('ei lukuja');
     });

test('annetaan vain yksi parametri, palautetaan luku itse', () => {
expect(sum(4)).toBe(4);
});

test('parametrit puuttuvat, heitetään poikkeus', () => { 
expect(() => {
    sum()}).toThrow('ei parametreja');
});
      