define("indexView",["require","saber-widget","saber-widget/Slider","./index.tpl"],function(require){var e=require("saber-widget");require("saber-widget/Slider");var t={template:require("./index.tpl"),events:{ready:function(){var t=e.slider(this.query(".slider"),{switchAt:.1,auto:!1,direction:"vertical"});t.on("change",function(e,t,n){var i=n+1;console.log(i),me.query(".slider > div > div:nth-of-type("+i+")").innerHTML="Hello"}),me.slider=t}}};return t});