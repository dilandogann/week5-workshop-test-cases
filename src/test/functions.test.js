const functions = require("./../functions");

it("it should return division", () => {
    expect(functions.divide(4, 2)).toBe(2);
});
it("it should return error if second parameter is zero", () => {
    expect(() => functions.divide(1, 0)).toThrow('Divide by zero error');
});

it("it should return error if parameters not a number", () => {
    expect(() => functions.divide('a', 1)).toThrow('Invalid error');
});

it("it should return upper case of all strings", () => {
    expect(functions.toUpper('hello bootcamp')).toBe('Hello Bootcamp')
});