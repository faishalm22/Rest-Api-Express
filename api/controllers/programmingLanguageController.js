const ProgrammingLanguage = require("../models/programmingLanguageModel");

exports.addProgrammingLanguage = (req, res) => {
    const new_language = new ProgrammingLanguage(req.body);
    new_language
        .save()
        .then((programming_language) => {
        res.status(201).json(programming_language);
        })
        .catch((err) => {
        res.status(500).send(err);
        });
};

exports.getProgrammingLanguage = async (req, res) => {
    try {
      const programming_language = await ProgrammingLanguage.find()
                                    .populate('paradigm').exec();
      res.status(200).json(programming_language);
    } catch (err) {
      res.status(500).send(err);
    }
};

exports.getOneProgrammingLanguage = async (req, res) => {
    try {
      const programming_language = await ProgrammingLanguage
                                    .findOne({name: req.params.name})
                                    .populate('paradigm').exec();
      res.status(200).json(programming_language);
    } catch (err) {
      res.status(500).send(err);
    }
};