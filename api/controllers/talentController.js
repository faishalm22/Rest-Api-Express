// Import Talent Model
const Talent = require("../models/talentModel");
const Language = require("../models/languageModel");

// DEFINE CONTROLLER FUNCTIONS

// LIST FUNCTION
// Function to get paradigms for a specific language
async function getParadigms(languageNames) {
  const languages = await Language.find({ name: { $in: languageNames } }).exec();
  const paradigms = new Set();
  languages.forEach(language => {
    language.paradigms.forEach(paradigm => paradigms.add(paradigm));
  });
  console.log(`\n Paradigms found for languages ${languageNames.join(', ')}: ${Array.from(paradigms).join(', ')}`);
  return Array.from(paradigms);
}

function disSanchez(bp1, bp2) {
  let adb = bp1.filter(x => !bp2.includes(x));
  let bda = bp2.filter(x => !bp1.includes(x));
  let anb = bp1.filter(x => bp2.includes(x));
  console.log(`\n Calculated disSanchez`);
  return Math.log2(1+(adb.length+bda.length)/(adb.length+bda.length+anb.length));
}

// languageCompare function - to compare programming language

exports.languageCompare = async (req, res) => {
  try {
    if (!Array.isArray(req.body.language) || req.body.language.length === 0) {
      return res.status(400).json({ success: false, message: 'Input must be a non-empty array' });
    }

    const talents = await Talent.find().exec();

    const scores = [];
    for (const talent of talents) {
      if (!talent.profile.programming || !Array.isArray(talent.profile.programming) || talent.profile.programming.length === 0) {
        console.warn(`Skipping talent ${talent.profile.name} because programming languages array is invalid`);
        continue;
      }

      const programming = talent.profile.programming;
     // const paradigms = await getParadigms(programming);

      const temp = {};
      for (let i = 0; i < programming.length; i++) {
        if (typeof programming[i] !== 'string') {
          console.warn(`Skipping language ${programming[i]} because it is not a string`);
          continue;
        }

        try {
          const langParadigms = await getParadigms([programming[i]]);
          const langKey = programming[i].toLowerCase();
          if (!temp[langKey]) {
            temp[langKey] = [];
          }
          for (let j = 0; j < req.body.language.length; j++) {
            if (typeof req.body.language[j] !== 'string') {
              console.warn(`Skipping language ${req.body.language[j]} because it is not a string`);
              continue;
            }

            const talentScore = disSanchez(langParadigms, await getParadigms([req.body.language[j]]));
            temp[langKey].push({language: req.body.language[j], score: talentScore});
          }
        } catch (error) {
          console.warn(`Skipping language ${programming[i]} because its paradigms could not be found`);
        }
      }

      //const scoresByLanguage = {};
      let rataRataScore =[];
      let rataRataTotal = 0;
      for (let i = 0; i < programming.length; i++) {
        const langKey = programming[i].toLowerCase();
        if (!temp[langKey]) {
          console.warn(`Skipping language ${programming[i]} because there are no talents with that language`);
          continue;
        }
        //scoresByLanguage[langKey] = temp[langKey];
        temp[langKey].sort((a, b) => parseFloat(a.score) - parseFloat(b.score));
        rataRataScore[i] = temp[langKey][0].score;
        //scoresByLanguage[`scorePalingKecil${programming[i]}`] = rataRataScore;
        rataRataTotal += rataRataScore[i];
      }
      const hasil = rataRataTotal / rataRataScore.length;
      scores.push({ name: talent.profile.name, score: hasil });
    }
    console.log(`\n Language compare result: ${JSON.stringify(scores, null, 2)}`);
    res.json({ success: true, data: scores });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};


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
    res.status(500).send("Internal Server Error");
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
