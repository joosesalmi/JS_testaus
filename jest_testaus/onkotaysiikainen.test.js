const onkoTaysiIkainen = require('./onkotaysiikainen');

test('Tarkistaa täysi-ikäisyyden', () =>{
expect(onkoTaysiIkainen(18)).toBe(true);
}
);

test('Tarkistaa täysi-ikäisyyden', () =>{
expect(onkoTaysiIkainen(17)).toBe(false);
}
);