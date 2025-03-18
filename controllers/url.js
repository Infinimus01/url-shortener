const shortid = require('shortid');
const url = require('../models/url');

async function handlegenerateNewShortUrl(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({error: "url is required"})
    const shortId = shortid();

    await url.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: [],
    });

    return res.json({id: shortId});

}

module.exports = {
    handlegenerateNewShortUrl,

};