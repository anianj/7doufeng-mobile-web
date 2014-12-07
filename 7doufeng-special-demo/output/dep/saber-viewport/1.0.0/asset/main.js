define("saber-viewport/main",["require","saber-dom","saber-lang/extend","saber-lang/curry","saber-promise","./config","./Page","./transition","./mask"],function(require){function e(){var e=f.viewport;e.style.position="relative"}function t(){var e=f.viewport,t=a.children(e);if(!(t.length<=0)){var n=new l("__blank__");t.forEach(function(e){n.main.appendChild(e)}),e.appendChild(n.main),i=n}}function n(e,t){if(e)e.emit("beforeleave");if(t.emit("beforeenter"),f.mask)h.show()}function r(e,t){if(f.mask)h.hide();if(e)if(e.emit("afterleave"),e.main!==t.main)e.remove();if(t.emit("afterenter"),o=null,i=t,t.hasVisited)m=m.slice(0,m.indexOf(t.url));m.push(t.url)}var i,o,a=require("saber-dom"),s=require("saber-lang/extend"),u=require("saber-lang/curry"),c=require("saber-promise"),f=require("./config"),l=require("./Page"),p=require("./transition"),h=require("./mask"),d={},m=[],g={before:function(e,t){var n=f.scrollContainer,r=e.data.scrollTop=n.scrollTop,i=t.data.scrollTop||0;t.main.style.marginTop=r-i+"px"},after:function(e,t){var n=f.scrollContainer;t.main.style.marginTop=null,setTimeout(function(){n.scrollTop=t.data.scrollTop||0},10)}},v={};return v.transition=function(e,t,a){if(e!==o)return c.rejected();if(a=a||{},a.frontPage=i,a.backPage=e,a.processor={},f.resetScroll)a.processor.scroll=g;return n(i,e),p(t,a).then(u(r,i,e))},{init:function(n,r){if("string"==typeof n||n instanceof String)n=document.getElementById(n);f=s(f,r),f.viewport=n,e(),t()},load:function(e,t){t=t||{};var n;if(!t.noCache)n=d[e];if(!n)n=new l(e,v,t);else n=n.clone(t);if(t.cached)d[e]=n;else if(d[e])delete d[e];if(o)if(o.remove(!0),d[o.url])delete d[o.url];return n.hasVisited=m.indexOf(e)>=0,o=n},delCache:function(e){if(!e)d={};else if(d[e])delete d[e]}}}),define("saber-viewport",["saber-viewport/main"],function(e){return e});