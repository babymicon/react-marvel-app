import crypto from 'crypto';
import {MARVEL_BASE_URL, MARVEL_PRIVATE_KEY, MARVEL_PUBLIC_API_KEY} from "../../config";

export const getCharactersURL = (count, page) => {
    const ts = new Date().getTime();
    const currentOffset = page === 1 ? 0 : (count * (page - 1));
    return `${MARVEL_BASE_URL}/characters?ts=${ts}&apikey=${MARVEL_PUBLIC_API_KEY}&hash=${setHash(ts)}&limit=${count}&offset=${currentOffset}`;
};

export const setHash = (ts) => {
    return crypto.createHash('md5').update(getData(ts)).digest("hex");
};


const getData = (ts) => {
    return `${ts}${MARVEL_PRIVATE_KEY}${MARVEL_PUBLIC_API_KEY}`
};
