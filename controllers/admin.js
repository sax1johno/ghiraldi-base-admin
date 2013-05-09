/**
 * The base controller for the generic ghiraldi admin interface.
 * @author John O'Connor
 * @copyright 2013 John O'Connor, All Rights reserved.
 * 
 * Licensed under the Mozilla Public License (MPL).
 **/
var logger = require('ghiraldi-simple-logger'),
    plugins = require('ghiraldi-plugin-registry').registry,
    adminPlugin = plugins.get('admin'),
    util = require('util');

var roleMiddleware = require(plugins.get('role').getModule("/util/middleware")),
    jade = require('jade'),
    Q = require('q');

var index = function(req, res){
    logger.log("trace", "This is the admin plugin");
    adminPlugin.getView('header', {title: 'Ghiraldi'}, function(err, indexHtml) {
        logger.log('trace', 'Should have rendered HTML: ' + indexHtml);
        if (!err) {
            res.send(indexHtml);
        } else {
            res.send(err);
        }
    });    
};

module.exports = {
  // /users
  routes: [
    {
        method: index,
        verb: 'get',
        route: '/admin',
        middleware: [
            // roleMiddleware.restrictToAdmin
        ]
    }
  ]
};