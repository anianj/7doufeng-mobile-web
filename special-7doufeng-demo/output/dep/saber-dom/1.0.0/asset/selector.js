define("saber-dom/selector",[],function(){var exports={};return exports.g=function(e){if(!e)return null;else return"string"==typeof e?document.getElementById(e):e},exports.query=function(e,t){if("string"!=typeof e)return e;else return t=t||document.body,t.querySelector(e)},exports.queryAll=function(e,t){if(Array.isArray(e))return e;t=t||document.body;var n=t.querySelectorAll(e);return Array.prototype.slice.call(n)},exports.matches=function(e,t){var n=Element.prototype,r=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector;if(r)return r.call(e,t);for(var i=exports.queryAll(t,e.parentNode),o=0;o<i.length;o++)if(i[o]===e)return!0;return!1},exports});