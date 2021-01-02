const http = require('./directus-http.service');
const config = require('config');
const moment = require('moment')
const { logger } = require('../../startup/logging');

module.exports.sendBemobPostback = (cid, payout, txid) => {
  const params = {
    cid,
  }
  if(payout) params.payout= payout
  if(txid) params.txid= txid
  return http.get('/postback', { params });
};