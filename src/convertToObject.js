'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  return sourceString
    .split(';')
    .filter((item) => item.trim())
    .map((item) => {
      const [key, value] = item.split(':');

      return [key.trim(), value.trim()];
    })

    .reduce((obj, [key, value]) => {
      obj[key] = value;

      return obj;
    }, {});
}

module.exports = convertToObject;
