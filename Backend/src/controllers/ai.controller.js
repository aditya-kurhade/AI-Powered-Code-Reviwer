const aiService = require('../services/ai.server');

module.exports.getReview = async(req, res) => {
    const code = req.body.code; // Assuming the code is sent in the request body

    if (!code) {
        return res.status(400).send('Prompt is required');
    }

    const response = await aiService.generateContent(code);

    res.send(response);
};