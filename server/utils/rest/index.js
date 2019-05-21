import logger from '../logger';
import fetch from 'node-fetch';
import AbortController from 'abort-controller';

const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), 60000);
const signal = controller.signal;
// const signal = null;


export const exec = async (url, options) => {
    try {
        logger.debug(`Rest Request url: [${url}], method: [${options.method}]${options.body ? `, with body: [${options.body}]` : ''}`);
        const response = await fetch(url, {...options, signal, compress: true});
        const responseJson = await response.json();
        logger.debug(`Rest Response url: [${url}], method: [${options.method}], response: [${JSON.stringify(responseJson)}]`);
        return responseJson;
    } catch (error) {
        if (error.message === 'ETIMEDOUT') {
            logger.error(`Timeout on: [${url}] ${options.body ? `with request: [${options.body}]` : ''}`);
            throw new Error(error.message);
        }
        throw new Error(`Error on: [${url}] ${options.body ? `with request: [${options.body}]` : ''} \n ${error}`);
    } finally {
        clearTimeout(timeout);
    }
};
