const expect = require("chai")
  .expect;
const math = require("./math");

describe("Math Suite", () => {
  describe("Addition Suite", () => {
    const x = 2;
    const y = 2;
    const result = math.add(x, y);

    it("should add 2 plus 2 and get 4", () => {
      expect(result)
        .to.equal(4);
    });

    it("should not add 2 plus 2 and get 5", () => {
      expect(result)
        .not.to.equal(5);
    });

    it("should not add 2 plus 2 and get 3", () => {
      expect(result)
        .not.to.equal(3);
    });
  });
});
