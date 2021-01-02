/* eslint-disable camelcase */

const request = require('request');
const config = require('config');
const moment = require('moment')
const { logger } = require('../../startup/logging');
const { getCategories } = require('../services/directus.service');

module.exports.getCategories = async (req, res) => {
  try {
    
    const { data  }  = await getCategories()
    
    res.json(data)
    
  } catch (err) {
    logger.error('Something went wrong: bemobPostback'+ err && err.response);

    return res.status(400).json({
      message: err.message,
    });
  }
};
