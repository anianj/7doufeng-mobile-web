define("saber-ajax/ajax",["require","saber-lang/bind","saber-emitter","saber-promise"],function(require){function t(t,e){var n=Object.keys(t).map(function(t){return t.toLowerCase()});return n.indexOf(e.toLowerCase())>=0}function e(){return new XMLHttpRequest}function n(t,e){Object.keys(t).forEach(function(n){e(n,t[n])})}function r(t){return"function"==typeof t}function i(t){return"[object String]"===Object.prototype.toString.call(t)}function o(t,e){return n(e,function(e,n){t[e]=n}),t}function s(t){var e;if(t.responseType&&t.responseType!==v)e=t.response;else e=t.responseText;return e}function a(t){n(m,function(e){t["on"+e]=null})}function p(t,e,n){this.xhr=t,this.promise=e.promise(),this.url=n.url,this.handleSuccess=!1,this.handleFail=!1,this.then(l(exports.emit,exports,"success",this),l(exports.emit,exports,"fail",this))}function u(t){var e=[];return t=t||{},n(t,function(t,n){if(!Array.isArray(n))n=[n];n.forEach(function(n){e.push(t+"="+encodeURIComponent(n))})}),e.join("&")}function c(t,e){if(!i(e))e=u(e);t=t.split("#");var n=t[1];return t=t[0],t+=t.indexOf("?")>=0?"&":"?",t+=e+(n?"#"+n:"")}function f(s,a){var f=e();if(a=o({},a||{}),a.method===d&&a.data)s=c(s,a.data),a.data=null;f.open(a.method||d,s,a.async||!0,a.username,a.password);var l=o(a.headers||{},{"X-Requested-With":"XMLHttpRequest"}),h=window.FormData?a.data instanceof FormData:!1;if(a.method===g&&!t(l,"Content-Type")&&!h)l["Content-Type"]="application/x-www-form-urlencoded";n(l,function(t,e){f.setRequestHeader(t,e)});var x;if(x=a.responseType)f.responseType=y[x.toUpperCase()]||v;if(a.async!==!1&&a.timeout)f.timeout=a.timeout;var b=require("saber-promise"),R=new b;if(n(m,function(t,e){f["on"+t]=e(f,R)}),a.progress)if(r(a.progress))f.onprogress=a.progress;else if(a.progress.upload&&f.upload)f.upload.onprogress=a.progress.upload;else if(a.progress.download)f.onprogress=a.progress.download;if(a.before&&r(a.before)){var w=a.before(f,R);if(w===!1)return new p(f,R,a)}var E=a.data;if(window.FormData&&E instanceof FormData)f.send(E);else if(!i(E)&&a.stringify!==!1)f.send(u(E));else f.send(E);return a.url=s,new p(f,R,a)}var l=require("saber-lang/bind"),h=require("saber-emitter"),exports={};h.mixin(exports);var d="GET",g="POST",y={TEXT:"text",ARRAYBUFFER:"arraybuffer",DOCUMENT:"document",BLOB:"blob",JSON:"json"},v=y.TEXT,m={load:function(t,e){return function(){a(t);var n=t.status;if(n>=200&&300>n||304===n)e.fulfill(s(t));else e.reject(n)}},error:function(t,e){return function(){a(t),e.reject("error")}},abort:function(t,e){return function(){a(t),e.reject("abort")}},timeout:function(t,e){return function(){a(t),e.reject("timeout")}}};return p.prototype.then=function(t,e){return this.handleSuccess=this.handleSuccess||!!t,this.handleFail=this.handleFail||!!e,this.promise.then(t,e)},p.prototype.success=function(t){return this.handleSuccess=!0,this.then(t)},p.prototype.fail=function(t){return this.handleFail=!0,this.then(null,t)},p.prototype.ensure=function(t){return this.handleSuccess=this.handleFail=!0,this.then(t,t)},p.prototype.abort=function(){this.xhr.abort()},p.prototype.getData=function(){return s(this.xhr)},exports.get=function(t,e){var n={method:d,data:e};return f(t,n)},exports.post=function(t,e){var n={method:g,data:e};return f(t,n)},exports.request=f,exports}),define("saber-ajax",["saber-ajax/ajax"],function(t){return t});