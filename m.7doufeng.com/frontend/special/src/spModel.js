/**
 * @file
 * @author ()
 */

define(function (require) {

    var Resolver = require('saber-promise');
    var dom_helper = require('saber-dom');

    var config = {};

    config.fetch = function (query) {

        return Resolver.resolved({
            silderFragment:dom_helper.g('slider_template').innerHTML
            });
    };

    return config;

});
