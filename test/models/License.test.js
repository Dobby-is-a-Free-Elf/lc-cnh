import License from '../../src/models/License'
import categories from '../../commons/categories'

describe("License", () => {
  let license;
  const initialStatus = true;
  const initialNumber = 11223344;
  const initialCategory = categories.catA;
  const initialPoint = 0;

  beforeEach(() => {
    license = new License(
      initialStatus,
      initialNumber,
      initialCategory,
      initialPoint
    );
  });

  it("Should return the license's atributes", () => {
    expect(license.status).toBe(initialStatus);
    expect(license.number).toBe(initialNumber);
    expect(license.category).toBe(initialCategory);
    expect(license.actualPoints).toBe(initialPoint);
  });

  it("Should change the category", () => {
    license.changeCategory(categories.catB);

    expect(license.category).toBe(categories.catB);
  });

  it("Should not change a category if it's not pre-defined", () => {
    license.changeCategory("D");

    expect(license.category).toBe(initialCategory);
  });

  it("Should increase the license's points", () => {
    license.increasePoints(20);

    expect(license.actualPoints).toBe(20);
  });

  it("The license's increasing points shouldn't be less than 0", () => {
    expect(() => {
      license.increasePoints(-14);
    }).toThrow("o valor deve ser maior ou igual a 0");
  });

  it("Should inform if the license's is suspended ", () => {
    license.increasePoints(31);

    expect(license.status).toBe(false);
  });
});
