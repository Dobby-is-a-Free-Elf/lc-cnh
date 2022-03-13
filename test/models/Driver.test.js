// import Driver from '../../src/models/Driver'
const Driver = require("../../src/models/Driver");
const License = require("../../src/models/License");


describe("Driver", () => {
  it("should return the driver's name and id when it's previously configured", () => {
    const driver = new Driver("Maria", 121212);
    expect(driver.name).toBe("Maria");
    expect(driver.id).toBe(121212);
  });

  it("Should inform the atributes' values from Driver", ()=>{
    const license = new License(false, 0, '', 0)
    const driver = new Driver("Maria", 121212, license);

    expect(driver.name).toBe("Maria");
    expect(driver.id).toBe(121212);
    expect(driver.license.status).toBe(false)
    expect(driver.license.number).toBe(0)
    expect(driver.license.category).toBe('')
    expect(driver.license.actualPoints).toBe(0)
  })
});
