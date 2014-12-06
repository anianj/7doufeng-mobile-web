define("saber-emitter/emitter",[],function(){function e(){}var t=e.prototype;return t._getEvents=function(){if(!this._events)this._events={};return this._events},t._getMaxListeners=function(){if(isNaN(this.maxListeners))this.maxListeners=10;return this.maxListeners},t.on=function(e,t){var n=this._getEvents(),r=this._getMaxListeners();n[e]=n[e]||[];var i=n[e].length;if(i>=r&&0!==r)throw new RangeError("Warning: possible Emitter memory leak detected. "+i+" listeners added.");return n[e].push(t),this},t.once=function(e,t){function n(){r.off(e,n),t.apply(this,arguments)}var r=this;return n.listener=t,this.on(e,n),this},t.off=function(e,t){var n=this._getEvents();if(0===arguments.length)return this._events={},this;var r=n[e];if(!r)return this;if(1===arguments.length)return delete n[e],this;for(var i,s=0;s<r.length;s++)if(i=r[s],i===t||i.listener===t){r.splice(s,1);break}return this},t.emit=function(e){var t=this._getEvents(),n=t[e],r=Array.prototype.slice.call(arguments,1);if(n){n=n.slice(0);for(var i=0,s=n.length;s>i;i++)n[i].apply(this,r)}return this},t.listeners=function(e){var t=this._getEvents();return t[e]||[]},t.setMaxListeners=function(e){return this.maxListeners=e,this},e.mixin=function(t){for(var n in e.prototype)t[n]=e.prototype[n];return t},e}),define("saber-emitter",["saber-emitter/emitter"],function(e){return e});