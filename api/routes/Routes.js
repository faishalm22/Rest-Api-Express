// Import module dependencies
const talentController = require("../controllers/talentController");
const languageController = require("../controllers/languageController");

// Export function that accepts Express app as an argument
module.exports = function (app) {
  // Route for listing all talents
  app.get("/talents", talentController.listAllTalents);

  // Route for compare language
  app.post("/requirement", talentController.languageCompare);

  // Route for creating new talent
  app.post("/talents", talentController.createNewTalent);

  // Route for updating talent
  app.put("/talents/:id", talentController.updateTalent);

  // Route for deleting talent
  app.delete("/talents/:id", talentController.deleteTalent);

  // Route for list language
  app.get("/language", languageController.listLanguage);

  // Route for creating language
  app.post("/language", languageController.createNewLanguage);
};
