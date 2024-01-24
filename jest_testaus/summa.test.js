const sum = require('./summa');
test('suorittaa yhteenlaskun 1+2, tulos on 3', () =>{
expect(sum(1,2)).toBe(3);
}
);