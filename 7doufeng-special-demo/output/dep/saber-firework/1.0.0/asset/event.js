define("saber-firework/event",["require","saber-dom","saber-lang/extend"],function(require){function e(e){var t;return y.some(function(n){if(n.detect(e))t=n;return!!t}),t}function t(e,t,n){var r=!1,i=h.queryAll(t,n);return i.some(function(t){return r=t===e}),r}function n(e,n){for(var r=n.target,i=n.type,o=[],s=e.handlers[i]||[];s.delegateCount&&r&&r!==e.ele;){for(var a,u=s.delegateCount,l=0;u>l&&(a=s[l]);l++)if(t(r,a.selector,e.ele)){var c=d({},a);c.thisArg=r,o.push(c)}r=r.parentNode}return o=o.concat(s.slice(s.delegateCount||0))}function r(e){return function(t){var r=n(e,t);t=s(t),r.some(function(n){var r=n.thisArg||e.ele,i=n.fn.call(r,t);if(i===!1)t.preventDefault(),t.stopPropagation();return t.isPropagationStopped()})}}function i(t,n){var r=t.commonEventHandler,i=e(n);if(i)i.on(t.ele,n,r);else t.ele.addEventListener(n,r,!1)}function o(t,n){var r=t.commonEventHandler,i=e(n);if(i)i.off(t.ele,n,r);else t.ele.removeEventListener(n,r,!1)}function s(e){var t=e.stopPropagation;return e.stopPropagation=function(){t.call(this),e[v]=!0},e.isPropagationStopped=function(){return!!e[v]},e}function a(e){return e[m]}function u(e){var t=++g;return e[m]=t,t}function l(e){try{delete e[m]}catch(t){}}function c(e){this.uid=u(e),this.ele=e,this.handlers={},this.commonEventHandler=r(this),b[this.uid]=this}function f(e){var t=a(e);if(t)return b[t];else return new c(e)}function p(e){var t,n=a(e);if(n)t=b[n];return t}var h=require("saber-dom"),d=require("saber-lang/extend"),m="_event_uid",v="_stopped",g=0,y=[],b={};c.prototype.on=function(e,t,n){if(!n)n=t,t=void 0;var r=this.handlers[e];if(!r)r=this.handlers[e]=[],r.delegateCount=0,i(this,e);var o={fn:n,selector:t};if(t)r.delegateCount++,r.splice(r.delegateCount-1,0,o);else r.push(o)},c.prototype.off=function(e,t,n){if(!n)n=t,t=void 0;var r=this.handlers[e]||[];if(r.some(function(e,i){var o=!1;if(e.fn===n&&e.selector===t)r.splice(i,1),o=!0;return o}),r.length<=0)o(this,e)},c.prototype.dispose=function(){var e=this;l(e.ele),Object.keys(e.handlers).forEach(function(t){o(e,t)}),this.ele=null};var exports={};return exports.on=function(e,t,n,r){var i=f(e);i.on(t,n,r)},exports.off=function(e,t,n,r){var i=p(e);if(i)i.off(t,n,r)},exports.one=function(e,t,n,r){if(!r)r=n,n=void 0;var i=function(){var o=Array.prototype.slice.call(arguments),s=r.apply(this,o);return exports.off(e,t,n,i),s};exports.on(e,t,n,i)},exports.clear=function(e){var t=p(e);if(t)t.dispose()},exports.register=function(e){if(e.init)e.init();y.push(e)},exports});