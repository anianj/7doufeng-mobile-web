define("saber-viewport/adapter/er",["require","saber-lang/curry","er/events","../main"],function(require){function t(t){var e=t.view.enterDocument;return t.view.enterDocument=s,function(){e.call(t.view)}}function e(e){var n=e.main;n.id="_ER_MAIN_"+(new Date).getTime()+"_",n.style.display="none",document.body.appendChild(n),this.view.container=n.id,e.on("afterenter",t(this))}function n(){o.on("enteraction",function(t){var n=a.load(t.url.getPath()),o=t.action.leave;t.action.leave=s,n.on("afterleave",function(){o.call(t.action)}),t.action.on("beforerender",i(e,n)),r=n}),o.on("enteractioncomplete",function(){if(r)r.main.style.display="",r.enter()})}var r,i=require("saber-lang/curry"),o=require("er/events"),a=require("../main"),s=function(){};return function(t,e){a.init(t,e),n()}});