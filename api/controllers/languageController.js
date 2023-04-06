const Language = require("../models/languageModel");

// createNewLanguage function - To list all talents
exports.createNewLanguage = async (req, res) => {
    try {
      const { name, paradigms } = req.body;
      const languages = new Language({ name, paradigms });
      await languages.save();
      res.status(201).send(languages);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };


// listAllLanguages function - To list all talents
exports.listLanguage = async (req, res) => {
  try {
    const languages = await Language.find();
    res.json(languages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
