// Import module dependencies
const bizdevController = require("../controllers/bizdevController");

// Export function that accepts Express app as an argument
module.exports = function (app) {
  // Route for create account talent
  app.post("/createAccount", bizdevController.createTalent);

};
