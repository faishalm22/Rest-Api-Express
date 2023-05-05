const Paradigm = require("../models/paradigmModel");

exports.addParadigm = (req, res) => {
    const new_paradigm = new Paradigm(req.body);
    new_paradigm
        .save()
        .then((paradigm) => {
        res.status(201).json(paradigm);
        })
        .catch((err) => {
        res.status(500).send(err);
        });
};

exports.getParadigm = async (req, res) => {
    try {
      const paradigms = await Paradigm.find().populate('parent_id').exec();
      res.status(200).json(paradigms);
    } catch (err) {
      res.status(500).send(err);
    }
};