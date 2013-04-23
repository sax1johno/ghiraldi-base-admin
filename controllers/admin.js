/**
 * The base controller for the generic ghiraldi admin interface.
 * @author John O'Connor
 * @copyright 2013 John O'Connor, All Rights reserved.
 * 
 * Licensed under the Mozilla Public License (MPL).
 **/
var logger = require('ghiraldi-simple-logger'),
    plugins = require('ghiraldi-plugin-registry').registry,
    roleMiddleware = require(plugins.get('role').getModule("/util/middleware")),
    jade = require('jade'),
    Q = require('q');

var index = function(req, res){
    logger.log("trace", "This is the admin plugin");
    res.send('/admin');
    // res.render(plugins.get('admin').views['header'], {}, function(err, headerHTML) {
    //     res.render(plugins.get('admin').views['footer'], {}, function(err, footerHTML) {
    //         res.render(plugins.get('admin').views['index'], {}, function(err, indexHTML) {
    //             res.send(headerHTML + footerHTML + indexHTML);
    //         });
    //     });
    // });
};

module.exports = {
  // /users
  routes: [
    {
        method: index,
        verb: 'get',
        route: '/admin',
        middleware: [
            roleMiddleware.restrictToAdmin
        ]
    }
  ]
};