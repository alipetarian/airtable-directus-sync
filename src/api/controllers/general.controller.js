/* eslint-disable camelcase */

const request = require('request');
const config = require('config');
const moment = require('moment')
const { logger } = require('../../startup/logging');
const { sendBemobPostback, getCommissions } = require('../services/general.service');

module.exports.testHook = async (req, res) => {
  try {
    
    return res.send('All good.');
  } catch (err) {
    logger.error('Something went wrong: Test Hook', err && err.response);
    return res.status(400).json({
      message: err.message,
    });
  }
};

module.exports.bemobPostback = async (req, res) => {
  try {
    
    const { cid, payout } = req.query
    
    if (cid) {
      logger.info("POTBACK RECEIVED: "+ cid)
      const { data }  = await sendBemobPostback(cid, payout)
      if(!data.startsWith("<html>")){
        res.status(200).send('Postback Received');
      } else{
        logger.info("Invalid Postbacke: "+cid )
        res.status(400).send('Invalid Postback: '+cid );
      }
      
    } else {
      logger.error("POSTBACK ERROR -  NO CLICKID FOUND")
      return res.status(400).json({message: 'No clickId Found'});
    }
  } catch (err) {
    logger.error('Something went wrong: bemobPostback'+ err && err.response);

    return res.status(400).json({
      message: err.message,
    });
  }
};
