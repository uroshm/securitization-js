const Bond = require("../main/dto/Bond.js");
const Collateral = require("../main/dto/Collateral.js");

describe("Test Dtos", () => {
  const bond = new Bond();
  const collateral = new Collateral();

  beforeAll(() => {
    bond.name = "Bond 1";
    bond.faceValue = 1000;
    bond.rate = 0.05;
    bond.term = 10;

    collateral.id = 1;
    collateral.name = "Collateral 1";
    collateral.value = 1000;
    collateral.type = "Real Estate";
  });

  test("bond dto happy path", () => {
    expect(bond.getPresentValue()).toBeCloseTo(613.913, 3);
    expect(bond.getDuration()).toBe(10);
  });

  test("collateral dto happy path", () => {
    expect(collateral.id).toBe(1);
    expect(collateral.name).toBe("Collateral 1");
  });

  test("attach collateral to bond", () => {
    bond.collat = collateral;
    expect(bond.collat).toBe(collateral);
  });
});
