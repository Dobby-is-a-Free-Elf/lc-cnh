import _ from 'lodash'
// import Driver from 'src/models/Driver'
// const Driver = require("src/models/Driver");

// const id = 123234
// const name = 'dsfssfd'
// const license = new License(true, asdasd,'A', 0)

// const driver = new Driver(id, name, license);

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component())