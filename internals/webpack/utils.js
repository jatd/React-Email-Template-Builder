
const fs = require('fs');
const { EOL } = require('os');
const path = require('path');

/**
 * Convert list of names to wepbpack mapped entries
 * @param {Function} map
 */
exports.appEntries = map =>
  (...list) => list.reduce((entries, app) =>
    Object.assign(entries, { [app]: map(app) }), {});

/**
 * Absolute path to project root
 */
exports.projectRoot = path.normalize(path.join(__dirname, '..'));

/**
 * Parse env file into object
 * @param {string} envPath - path to env file
 * @returns {object}
 */
exports.readEnv = envPath =>
  fs.readFileSync(envPath).toString()
    .split(EOL)
    .filter(l => l)
    .map(l => l.split('='))
    .reduce((obj, [l, r]) => {
      return Object.assign(obj, { [l]: JSON.parse(r) }) || {};
    });
