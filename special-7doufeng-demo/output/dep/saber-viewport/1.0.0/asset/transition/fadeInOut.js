define("saber-viewport/transition/fadeInOut",["require","../util","../config","saber-run","../transition"],function(require){function t(t,i){var o=i.duration||n.duration,a=i.timing||n.timing,s=i.backPage,u=i.frontPage,c=s.main,f=u.main;n.viewport.insertBefore(c,f);var l=e.getSize(f);e.setStyles(c,{opacity:0}),e.setStyles(f,{position:"absolute",top:0,left:0,opacity:1,width:l.width+"px"},!0),r.transition(f,{opacity:0},{duration:o,timing:a});var p=r.transition(c,{opacity:1},{duration:o,timing:a});p.then(function(){t.fulfill()})}var e=require("../util"),n=require("../config"),r=require("saber-run");return require("../transition").register("fadeInOut",t),t});