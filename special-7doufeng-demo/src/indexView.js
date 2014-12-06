/**
 * @file 
 * @author ()
 */
define(function (require) {

    var widget = require('saber-widget');require('saber-widget/Slider');
    var config = {}// The configuration object of View class
    
    config.template = require('./index.tpl');

    // This Slider if the only element in our simple application
    config.prepareSlider = function(){
            var me = this
            if (me.slider) {
                return me.slider
            }else{
                var slider =  widget.slider(this.query('.slider'),{switchAt:0.1,auto:false,direction:'vertical'});
                slider.on('change',function(ev,from,to){
                    var toIndex = to + 1;
                    console.log(toIndex);
                    me.query('.slider > div > div:nth-of-type('+ toIndex +')').innerHTML='Hello';
                })
                me.slider = slider
            }

        };

    config.events = {
        ready: config.prepareSlider
    };

    return config

});
