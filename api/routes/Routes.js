// Import module dependencies
const bizdevController = require("../controllers/bizdevController");
const paradigmController = require("../controllers/paradigmController");
const progLanguageController = require("../controllers/programmingLanguageController");

// Export function that accepts Express app as an argument
module.exports = function (app) {
  // Route for create account talent
  app.post("/createAccount", bizdevController.createTalent);

  // Route for add paradigm
  app.post("/addParadigm", paradigmController.addParadigm);

  // Route for get paradigm
  app.get("/getParadigm", paradigmController.getParadigm);

  // Route for add programming language
  app.post("/addProgLanguage", progLanguageController.addProgrammingLanguage);
  
  // Route for get programming language
  app.get("/getProgLanguage", progLanguageController.getProgrammingLanguage);

  // Route for get programming language
  app.get("/getProgLanguage/:name", progLanguageController.getOneProgrammingLanguage);
};
