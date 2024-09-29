const Paper = require('../models/Paper');

exports.getPapers = async (req, res) => {
    const papers = await Paper.find();
    res.json(papers);
};

exports.addPaper = async (req, res) => {
    const newPaper = new Paper(req.body);
    await newPaper.save();
    res.status(201).json(newPaper);
};
