/**
 * @file
 * @author ()
 */

 define(function (require) {

     var widget = require('saber-widget');require('saber-widget/Slider');
     var masker = require('saber-widget/plugin/Masker');

     var dom_helper = require('saber-dom');

     var viewConfig = {
         template: require('./res/index.tpl'),
         events:{
             //Instance the slier widget
             ready: function(){
                 var me = this; // This point to view
                 // var slider =  widget.slider(this.query('.slider'),{
                 //     switchAt:0.3,
                 //     auto:false,
                 //     direction:'vertical',
                 //     onChange: function(ev,from,to){
                 //         var toIndex = to + 1;
                 //         var fromIndex = from +1;
                 //         dom_helper.removeClass(me.query('.slider .item-'+ fromIndex),'item-active-' + fromIndex);

                 //         dom_helper.addClass(me.query('.slider .item-'+ toIndex),'item-active-' + toIndex);
                 //     }
                 // });

                 // // emit change for item-1
                 // setTimeout(function(){slider.emit('change', 0, 0);}, 1000);

                 // //bind slider to view
                 // me.slider = slider;
                 // // init masker
                 // me.masker = new masker(slider,{autoClose:true});
             }
         },
         domEvents:{
            'click: .btn': function(el,e){
                alert(1);
                this.masker.enable();
            }
         }
     };

     return viewConfig;

 });
