'use strict';

module.exports = (req,res,next) => {
  let error = { error: 'Not Found' };
  res.statusCode = 404;
  res.statusMessage = 'Not Found';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};