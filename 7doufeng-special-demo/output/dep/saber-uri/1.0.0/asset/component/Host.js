define("saber-uri/component/Host",["require","saber-lang/inherits","./Abstract"],function(require){function t(t){n.call(this,t)}var e=require("saber-lang/inherits"),n=require("./Abstract");return e(t,n),t.prototype.set=function(t){t=t||"",this.data=t.toLowerCase()},t.prototype.equal=function(e){if(e instanceof t)e=e.get();else e=e||"";return this.data===e.toLowerCase()},t});