define("saber-widget/LinkageMenu",["require","saber-lang","saber-string","./Widget","saber-dom","saber-scroll","saber-scroll/plugin/scrollbar","saber-emitter","./main"],function(require){function t(t){if(void 0===t)return null;if(/^\d+$/.test(t))t=parseInt(t,10);return t}function e(t){this._root={name:"root",value:"root",level:0,children:t},this._depth=0,this._preprocess()}function n(e){this.next=null,this.value=t(e.value),this.uniqueValue=t(e.uniqueValue),this.data=null,this.main=document.createElement("div"),this.main.className="linkage-item",this.ul=document.createElement("ul"),this.main.appendChild(this.ul),this.render(e.data),this._changeHandler=r.bind(this._changeHandler,this),this.main.addEventListener("click",this._changeHandler,!1)}function i(){this.attrs={datasource:{value:[]},values:{value:[],setter:function(t){for(var e=[],t=t.slice(0),n=0,i=t.length;i>n;n++){var r=["root"].concat(t.slice(0,n+1));e.push(r.join("-"))}this.set("uniqueValues",e)}},uniqueValues:{value:[]}},this.states={},a.apply(this,arguments)}var r=require("saber-lang"),o=require("saber-string"),a=require("./Widget"),s=require("saber-dom");e.prototype={constructor:e,getNode:function(e){var n={},i=this._root;if(void 0===e||"root"===e)return i;var r=[];for(r.push(i);r.length>0;){n=r.shift();var o=t(n.uniqueValue);if(o===e)break;for(var a=n.children||[],s=0,u=a.length;u>s;s++)r.push(a[s])}return r=null,n},getDepth:function(){return this._depth},update:function(){},_preprocess:function(){function t(i,r){if(n.push(i.value),i.level=i.level||r,i.uniqueValue=n.join("-"),!i.children||0===i.children.length)return void(e=Math.max(e,r));else for(var o=0,a=i.children.length;a>o;o++)t(i.children[o],r+1),n.pop()}var e=-1,n=[];t(this._root,0),this._depth=e}};var u=require("saber-scroll");require("saber-scroll/plugin/scrollbar"),n.prototype={constructor:n,render:function(e){if(e=e||[],e.length){if(this.data=e,this.next&&!this.exist("uniqueValue"))this.uniqueValue=e[0].uniqueValue,this.value=e[0].value;for(var n=[],i='<li class="${className}" data-value="${value}" data-unique-value="${uniqueValue}"><span>${name}</span></li>',a=0,s=e.length;s>a;a++){var c=r.extend({},e[a]),l="",f=t(c.uniqueValue);if(f===this.uniqueValue)l+="linkage-item-cur";if(c.disable)l+="linkage-item-disabled";c.className=l,n.push(o.format(i,c))}if(this.ul.innerHTML=n.join(""),!this._scroller)this._scroller=u(this.main,{scrollbar:!0,horizontal:!1});else this._scroller.repaint();return this}},exist:function(t){var e=this[t];if(null===e)return!1;for(var n=this.data,i=0,r=n.length;r>i;i++){var o=n[i][t];if(e===o)return!0}return!1},scrollToCurrent:function(){var t=s.query(".linkage-item-cur",this.ul);if(t)this._scroller.scrollToElement(t)},_changeHandler:function(e){for(var n=e.target,i=!1;n&&n!==this.main;){if("LI"===n.tagName){i=!0;break}n=n.parentNode}if(!i||s.hasClass(n,"linkage-disabled"))return!1;var r=s.query(".linkage-item-cur",this.main);r&&s.removeClass(r,"linkage-item-cur"),s.addClass(n,"linkage-item-cur");var o=n.getAttribute("data-value");this.value=t(o),this.uniqueValue=n.getAttribute("data-unique-value"),this.emit("change",{target:this,type:"change"},{value:o})},dispose:function(){this.main.removeEventListener("click",this._changeHandler),this.main=null,this.ul=null}},require("saber-emitter").mixin(n.prototype),i.prototype.type="LinkageMenu",i.prototype.initDom=function(){this.main.className="linkage-menu";var t=this.get("datasource");this.runtime.tree=new e(t),this.runtime.linkedList=null,this._linkageItemChangeHandler=r.bind(this._linkageItemChangeHandler,this);for(var i,o,a=this.get("values"),s=this.get("uniqueValues"),u=this.runtime.tree,c=u.getDepth(),l=document.createDocumentFragment(),f=0;c>f;f++){var h=u.getNode(o),p=h.children||[],d=a[f],m=s[f],g=new n({data:p,value:d,uniqueValue:m});if(!this.runtime.linkedList)this.runtime.linkedList=g;else i.next=g;i=g,g.on("change",this._linkageItemChangeHandler),l.appendChild(g.main),o=m}i=null,o=null,this.main.appendChild(l)},i.prototype.initEvent=function(){},i.prototype._linkageItemChangeHandler=function(t,e){var n=t.target;if(null===n.next){for(var i=[],r=this.runtime.linkedList;r;)i.push(r.value),r=r.next;this.set("values",i),this.emit("select",i)}else this._linkage(n),this.emit("linkage",e)},i.prototype._linkage=function(t){for(;t&&t.next;){var e=this.runtime.tree.getNode(t.uniqueValue),n=t.next;n.render(e.children),t=n}},r.inherits(i,a),require("./main").register(i)});