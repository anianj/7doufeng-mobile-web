define("saber-uri/component/Fragment",["require","saber-lang/inherits","./Abstract"],function(require){function t(t){n.call(this,t)}var e=require("saber-lang/inherits"),n=require("./Abstract"),r="#";return e(t,n),t.prototype.toString=function(t){return t=t||r,this.data?t+this.data:""},t});