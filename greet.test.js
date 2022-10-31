import { greet } from "./greet.js";

describe("greet", () => {
  test('returns a string "Hello Peter!" if called greet("Peter")', () => {
    const result = greet("Peter");
    expect(result).toBe("Hello Peter!");
  });
  test('returns a string "Hello Currywurst" if called greet()', () => {
    const result = greet("Currywurst");
    expect(result).toBe("Hello Currywurst!");
  });
  test('returns a string "Hello Choach" if called greet("Thomas") or greet("Stefan")', () => {
    const result = greet("Stefan");
    expect(result).toBe("Hello Coach");
    //dies geht auch in dieser Schreibweise:
    expect(greet("Thomas")).toBe("Hello Coach");
  });
});
