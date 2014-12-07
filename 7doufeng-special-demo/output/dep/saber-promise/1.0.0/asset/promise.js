define("saber-promise/promise",[],function(){function e(e){return"function"==typeof e}function t(e){return"[object Object]"===Object.prototype.toString.call(e)}function n(r,i){if(t(i)||e(i)){var o;try{var s=i.then;if(e(s))s.call(i,function(e){if(!o)n(r,e),o=!0},function(e){if(!o)r.reject(e),o=!0});else r.fulfill(i)}catch(a){if(!p)throw a;else if(!o)f(a),r.reject(a)}}else r.fulfill(i)}function r(e,t,r){return function(i){try{var o=r(i);if(o===t)throw new TypeError;n(e,o)}catch(s){if(p)f(s),e.reject(s);else throw s}}}function i(e,t,n){if(e.status===t)d(function(){n(e.data)});else if(t===l.FULFILLED)e.fulfillList.push(n);else if(t===l.REJECTED)e.rejectList.push(n)}function o(e){var t=e.status===l.FULFILLED?e.fulfillList:e.rejectList;if(u(e),t.length)d(function(){for(var n;n=t.shift();)n(e.data)})}function s(t,n,o){var s=new c,u=a(s);if(e(n))n=r(s,u,n);else n=function(e){s.fulfill(e)};if(i(t,l.FULFILLED,n),e(o))o=r(s,u,o);else o=function(e){s.reject(e)};return i(t,l.REJECTED,o),u}function a(e){return{then:function(t,n){return s(e,t,n)}}}function u(e){var t=e.status===l.FULFILLED?"resolve":"reject";if(h)c.emit(t,e.data)}function f(e){if(h)c.emit("exception",e)}function c(){this.status=l.PENDING,this.fulfillList=[],this.rejectList=[]}var l={PENDING:0,FULFILLED:1,REJECTED:2},p=!0,h=!1,d=function(){function t(){var e,t=i.length;for(e=0;t>e;e++)i[e]();i.splice(0,e)}var n,r,i=[],o="promise";if("function"==typeof setImmediate)n=setImmediate;else if(r=window.MutationObserver||window.webKitMutationObserver){var s=new r(function(e){var n=e[0];if(n.attributeName===o)t()}),a=document.createElement("div");s.observe(a,{attributes:!0}),n=function(e){i.push(e),a.setAttribute(o,Date.now?Date.now():(new Date).getTime())}}else if(e(window.postMessage))window.addEventListener("message",function(e){if(e.source===window&&e.data===o)t()},!1),n=function(e){i.push(e),window.postMessage(o,"*")};else n=function(e){setTimeout(e,0)};return n}();return c.enableGlobalEvent=function(e){e.mixin(this),h=!0},c.disableExceptionCapture=function(){p=!1},c.enableExceptionCapture=function(){p=!0},c.all=function(e){function t(t){return function(n){if(o[t]=n,i++,i>=e.length)r.fulfill(o)}}function n(e){r.reject(e)}if(!Array.isArray(e))e=Array.prototype.slice.call(arguments);var r=new c,i=0,o=[];return e.forEach(function(e,r){e.then(t(r),n)}),r.promise()},c.promise=function(e){var t=new c;return e(t),t.promise()},c.rejected=function(e){return this.promise(function(t){t.reject(e)})},c.fulfilled=function(e){return this.promise(function(t){t.fulfill(e)})},c.resolved=c.fulfilled,c.prototype.fulfill=function(e){if(this.status===l.PENDING)this.data=e,this.status=l.FULFILLED,o(this)},c.prototype.resolve=c.prototype.fulfill,c.prototype.reject=function(e){if(this.status===l.PENDING)this.data=e,this.status=l.REJECTED,o(this)},c.prototype.promise=function(){return a(this)},c}),define("saber-promise",["saber-promise/promise"],function(e){return e});