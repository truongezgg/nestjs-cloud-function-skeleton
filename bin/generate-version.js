/* eslint @typescript-eslint/no-var-requires: "off" */
const { version } = require('../package.json');
const semver = require('semver');

const newVersion = semver.inc(version, 'prerelease', 'alpha');
console.log(newVersion);
