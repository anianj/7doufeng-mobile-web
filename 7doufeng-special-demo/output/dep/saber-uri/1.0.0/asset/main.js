define("saber-uri/main",["require","./URI","./util/uri-parser","./component/Path"],function(require){var t=require("./URI"),exports=function(e){return new t(e)};return exports.parse=require("./util/uri-parser"),exports.resolve=require("./component/Path").resolve,exports}),define("saber-uri",["saber-uri/main"],function(t){return t});