/**
 * @file
 * @author ()
 */

 define(function (require) {

     var widget = require('saber-widget');require('saber-widget/Slider');

     var viewConfig = {
         template: require('./index.tpl'),
         events:{

             //Instance the slier widget
             ready: function(){
                 var slider =  widget.slider(this.query('.slider'),{
                     switchAt:0.1,
                     auto:false,
                     direction:'vertical'
                 });

                 //use change event to triger transmition
                 slider.on('change',function(ev,from,to){
                     var toIndex = to + 1;
                     console.log(toIndex);
                     me.query('.slider > div > div:nth-of-type('+ toIndex +')').innerHTML='Hello';
                 });

                 //bind slider to view
                 me.slider = slider;
             }
         }
     };

     return viewConfig;

 });
