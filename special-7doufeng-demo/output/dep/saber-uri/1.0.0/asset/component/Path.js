define("saber-uri/component/Path",["require","saber-lang/inherits","./Abstract"],function(require){function t(t){if(!t)t="/";return t}function e(t){return t=t.split("/"),t.pop(),t.join("/")}function n(t,e){for(var n,r=0,i=t.length-1;n=t[i];i--)if("."===n)t.splice(i,1);else if(".."===n)t.splice(i,1),r++;else if(r)t.splice(i,1),r--;if(e)for(;r-->0;)t.unshift("..");return t}function r(t,e){o.call(this,t,e)}var i=require("saber-lang/inherits"),o=require("./Abstract");return r.resolve=function(t,r){if(r=r||"","/"===r.charAt(0))return r;var i="/"===t.charAt(0),o=!1;if(r)t=e(t),o="/"===r.charAt(r.length-1);else if(t.length>1)o="/"===t.charAt(t.length-1);var s=t.split("/").concat(r.split("/")).filter(function(t){return!!t});return s=n(s,!i),(i?"/":"")+s.join("/")+(o?"/":"")},i(r,o),r.prototype.set=function(t,e){if(e instanceof r)e=e.get();var n=[t||""];if(e)n.unshift(e);this.data=r.resolve.apply(r,n)},r.prototype.equal=function(e){var n=t(this.data);if(e instanceof r)e=t(e.get());else e=t(r.resolve(e||""));return n===e},r.prototype.resolve=function(t,e){if(t instanceof r)t=t.get();var n=[this.data];if(e)n.unshift(t);else n.push(t);this.data=r.resolve.apply(r,n)},r});