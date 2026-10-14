const add = require('./math');

test('正確計算 5 + 10 應等於 15', () => {
    expect(add(5, 10)).toBe(15);
});
