const categories = require("../../commons/categories");

module.exports = class License {
  status = false;
  number = 0;
  category = "";
  actualPoints = 0;

  constructor(status, number, category, actualPoints) {
    this.status = status;
    this.number = number;
    this.category = category;
    this.actualPoints = actualPoints;
  }

  changeCategory(newCategory) {
    const isNewCategoryValid = Object.values(categories).some(
      (category) => category === newCategory
    );

    if (isNewCategoryValid) {
      this.category = newCategory;
    }
  }

  increasePoints(points) {
    if (points < 0) {
      throw new Error("o valor deve ser maior ou igual a 0");
    }
    this.actualPoints += points;
    this.verifyStatus();
  }

  verifyStatus() {
    if (this.actualPoints > 30) {
      this.status = false;
    }
  }
};
