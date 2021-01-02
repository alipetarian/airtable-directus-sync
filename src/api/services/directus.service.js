const http = require('./directus-http.service');
const config = require('config');
const moment = require('moment')
const { logger } = require('../../startup/logging');

module.exports.getCategories = () => {
  return http.get('/items/categories');
};