define("saber-firework/plugin/gesture",["require","hammer","../event"],function(require){function e(){}var t=require("hammer"),n=require("../event"),r={};r.init=function(){t(document.body)},r.detect=function(){return!1},r.on=e,r.off=e,n.register(r)});