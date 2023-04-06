// Import Talent Model
const Talent = require("../models/talentModel");

// DEFINE CONTROLLER FUNCTIONS

// listAllTalents function - To list all talents
exports.listAllTalents = async (req, res) => {
  try {
    const talents = await Talent.find({});
    res.status(200).json(talents);
  } catch (err) {
    res.status(500).send(err);
  }
};

// createNewTalent function - To create new talent
exports.createNewTalent = (req, res) => {
  const newTalent = new Talent(req.body);
  newTalent
    .save()
    .then((talent) => {
      res.status(201).json(talent);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
// updateTalent function - To update talent by id
exports.updateTalent = (req, res) => {
  Talent.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((talent) => {
      res.status(200).json(talent);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
// deleteTalent function - To delete talent by id
exports.deleteTalent = async (req, res) => {
  try {
    const deletedTalent = await Talent.findOneAndDelete({ _id: req.params.id });
    if (deletedTalent) {
      res.status(200).json({ message: "Talent successfully deleted" });
    } else {
      res.status(404).json({ message: "Talent not found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// createNewLanguage function - To list all talents
exports.createNewLanguage = async (req, res) => {
    try {
      const { name, paradigms } = req.body;
      const languages = new Talent({ name, paradigms });
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
    const languages = await Talent.find();
    res.json(languages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
