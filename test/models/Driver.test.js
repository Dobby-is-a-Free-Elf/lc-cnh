// import Driver from '../../src/models/Driver'
const Driver = require("../../src/models/Driver");

describe("Driver", () => {
  it("should return the driver's name and id when it's previously configured", () => {
    const driver = new Driver("Maria", 121212);
    expect(driver.name).toBe("Maria");
    expect(driver.id).toBe(121212);
  });
});
