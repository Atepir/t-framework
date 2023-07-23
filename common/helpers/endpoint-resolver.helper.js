const _ = require('lodash');

/**
 * getEndpointUrl
 * @param {string} name 
 * @param {Array<Object>} dataSource 
 * @returns 
 */
function getEndpointUrl(name, dataSource) {
    return _.find(dataSource, (endpoint) => endpoint.name === name).url;
}

/**
 * getEndpointObject
 * @param {string} name
 * @param {Array<Object>} dataSource
 */
function getEndpointObject(name, dataSource) {
    return _.find(dataSource, (endpoint) => endpoint.name === name);
}

module.exports = {
    getEndpointUrl,
    getEndpointObject
}