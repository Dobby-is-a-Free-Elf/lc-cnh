const License = require("./License");

module.exports = class Driver {
  name = "";
  id = 0;
  license = undefined;

  constructor(name, id, license) {
    this.name = name;
    this.id = id;
    this.license = license
  }
};
