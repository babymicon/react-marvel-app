import { getCharactersURL } from "../utils/common";

const express = require('express');
const router = express.Router();
import { exec } from '../utils/rest';

/* GET characters listing. */
router.get('/', async (req, res) => {
    try {
        const {count, page} = req.headers;
        const { data } = await exec(getCharactersURL(count, page), {
            headers: {'Content-Type': 'application/json'},
            method: 'GET',
        });

        const result = data && data.results.length > 0 ? data.results.map(character => {
            return {
                name: character.name,
                image: character.thumbnail,
                isInComics: character.comics.available > 0,
                isInSeries: character.series.available > 0,
                isInEvents: character.events.available > 0,
                isInStories: character.stories.available > 0,
                biography: character.description,
                urls: character.urls
            }
        }) : {};

        res.status(200).send(result);
    }
    catch(error){
        throw error;
    }
});

module.exports = router;
