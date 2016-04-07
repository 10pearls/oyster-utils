"use strict";

global.Packages = {
    DateFormat: require("dateformat"),
    Lodash: require("lodash"),
    Winston: require("winston"),
    DailyRotateFile: require('winston-daily-rotate-file')
};

module.exports = require('./lib');
