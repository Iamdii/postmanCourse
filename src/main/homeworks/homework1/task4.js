/*
Create object "utils". It should contain:
- function to generate random number,
- function to generate random alphanumeric string,
- simple logger: has to contain 2 arguments - level (default value is "INFO"), message.
*/



const utils = {
  getRandomNumber: () => Math.random()*10,
  getRandomString: () => Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
  logger: (message, level="INFO") => console.log(`The level is ${level}. Message: ${message}.`),
};

module.exports = {
  utils,
};
