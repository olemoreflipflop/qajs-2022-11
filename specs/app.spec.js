import { nameIsValid, fullTrim, getTotal } from '../src/app.js'

describe("nameIsValid unit tests", () => {
  it("function is sucessfully loaded", () => {
    expect(nameIsValid).toBeDefined();
    expect(typeof nameIsValid).toBe("function");
  });

  it.each([
    ['Olga'],
    ['Jo'],
    ['OLGA'],
  ])("returns True when input(%s)", (a) => {
    expect(nameIsValid(a)).toBeTruthy();
});

  it.each([
      [''],
      ['a a'],
      ['A'],
      ['   '],
      [' OLGA '],
      [12345],
      [undefined],
      [null],
    ])('returns False when input(%s)', (a) => {
      expect(nameIsValid(a)).toBeFalsy();
  });
});

describe("fullTrim unit tests", () => {
  it("function is sucessfully loaded", () => {
    expect(fullTrim).toBeDefined();
    expect(typeof fullTrim).toBe("function");
  });

  it("works when String with several spaces", () => {
    expect(fullTrim(' t e s t ')).toBe('test');
  });

  it("works when String with Tabs and spaces", () => {
    expect(fullTrim(' t es t  ')).toBe('test');
  });

  it("works when String is empty", () => {
    expect(fullTrim('')).toBe('');
  });

  it("works when String has no spaces", () => {
    expect(fullTrim('hello')).toBe('hello');
  });

  it("works with Template String", () => {
    const word = ' word ';
    expect(fullTrim(`${word} + ${word}`)).toBe('word+word');
  });

  it.each([
      [undefined],
      [null],
    ])("should be False with Negative pass parameters", (a) => {
      expect(fullTrim(a)).toBeFalsy();
  });
});

describe("getTotal unit tests", () => {
  it("function is sucessfully loaded", () => {
    expect(getTotal).toBeDefined();
    expect(typeof getTotal).toBe("function");
  });

  it("works without discount", () => {
    expect(getTotal([{ price: 10, quantity: 10 }])).toBe(100);
  })

  it("works with items with discount", () => {
    expect(getTotal([{ price: 10, quantity: 5 }], 10)).toBe(45);
  })

  it("works with discount = 0", () => {
    expect(getTotal([{ price: 10, quantity: 5 }], 0)).toBe(50);
  })

  it("works with several different items", () => {
    expect(getTotal([{ price: 10, name: 'pen', quantity: 5 }, { price: 5, name: 'pensil', quantity: 4 }])).toBe(70);
  })

  it("return 0 if input has no items ", () => {
    expect(getTotal()).toBe(0);
  })

  it("throws error if discount !== number", () => {
    expect(() => { 
      getTotal([{ price: 10, quantity: 5 }], '10') }).toThrow('Скидка должна быть числом');
  })

  it("throws error if discount < 0", () => {
    expect(() => { 
      getTotal([{ price: 10, quantity: 5 }], -10) }).toThrow('Процент скидки не может быть отрицательным');
  })
});