'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};
  const keyValuePairs = sourceString.split(';');

  for (const item of keyValuePairs) {
    if (!item.trim()) continue;
    const parts = item.split(':');
    const key = parts[0].trim();
    const value = parts[1].trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
