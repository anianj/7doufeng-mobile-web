/**
 * @file
 * @author ()
 */

define(function (require) {
    var widget = require('saber-widget');require('saber-widget/Slider');
    var dom_helper = require('saber-dom');

    var config = {};

    config.template = require('./sp.tpl');

    config.events = {
        //Instance the slier widget
        ready: function(){
            var me = this; // This point to view
            var slider =  widget.slider(this.query('.main-slider'),{
                switchAt:0.3,
                auto:false,
                direction:'vertical',
                onChange: function(ev,from,to){
                    var toIndex = to + 1;
                    var fromIndex = from +1;
                    dom_helper.removeClass(me.query('.main-slider .item-'+ fromIndex),'item-active');
                    dom_helper.addClass(me.query('.main-slider .item-'+ toIndex),'item-active');
                }
            });

            // emit change for item-1
            setTimeout(function(){
                slider.emit('change',0,0);
                },1000);

            //bind slider to view
            me.slider = slider;
        }
    };

    config.domEvents = {
            'click:.sr-4-btn': function(el,e){
                var me = this, masker_dom = me.query('.masker');
                dom_helper.addClass(masker_dom,'masker-active');
                me.addDomEvent(masker_dom,'click',function(ele,e){
                    dom_helper.removeClass(masker_dom,'masker-active');
                    });
                }
         };

    return config;

});
