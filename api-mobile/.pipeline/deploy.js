'use strict';

const config = require('./lib/config.js');
const deployAPITask = require('./lib/deploy.js');

const settings = { ...config, phase: settings.options.env };

deployAPITask(settings);
