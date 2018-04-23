'use strict';

var express = require('express');
var controller = require('./api');

var router = express.Router();

// will list all process and their status
router.get('/list/', controller.list);

// this make possible a dashboard tell that another iinstance not supervisoned by orchjs ir running
router.get('/foreigninstance/:user/:thing/:time', controller.foreignInstance);

module.exports = router;