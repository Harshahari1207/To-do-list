(()=>{"use strict";var r,n,e,t,o,a,i,c,s,l,u,d,p,f,v={426:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,"*{\r\n    margin: 0;\r\n    padding: 0;\r\n\r\n    --primary-color: #567189;\r\n    --secondary-color: #7B8FA1;\r\n    --foo-color: #CFB997;\r\n    --sandel-color: #FAD6A5;\r\n    --light-brown: #C27664;\r\n\r\n    --pd: 10px;\r\n    --br: 5px;\r\n\r\n}\r\n\r\n.main{\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template: 1fr 6fr 1fr/ 1.5fr 4fr;\r\n    background-color: rgb(76, 120, 159);\r\n}\r\n\r\n.nav{\r\n    \r\n    grid-row: 1/2;\r\n    grid-column: 1/3;\r\n    background-color: var(--foo-color);\r\n}\r\n.sideBar{\r\n    grid-row: 2/3;\r\n    grid-column: 1/2;\r\n    background: var(--primary-color);\r\n}\r\n.mainBar{\r\n    background: rgb(207,185,151);\r\nbackground: radial-gradient(circle, rgba(207,185,151,1) 13%, rgba(86,113,137,1) 92%);\r\n\r\n}\r\n.foo{\r\n    grid-column: 1/3;\r\n    background: linear-gradient(var(--primary-color), var(--sandel-color));\r\n}",""]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<r.length;l++){var u=[].concat(r[l]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],l=t.base?s[0]+t.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=e(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var v=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:d,updater:v,references:1})}i.push(d)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=t(r,o),l=0;l<a.length;l++){var u=e(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},m={};function g(r){var n=m[r];if(void 0!==n)return n.exports;var e=m[r]={id:r,exports:{}};return v[r](e,e.exports,g),e.exports}g.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return g.d(n,{a:n}),n},g.d=(r,n)=>{for(var e in n)g.o(n,e)&&!g.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},g.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),g.nc=void 0,r=g(379),n=g.n(r),e=g(795),t=g.n(e),o=g(569),a=g.n(o),i=g(565),c=g.n(i),s=g(216),l=g.n(s),u=g(589),d=g.n(u),p=g(426),(f={}).styleTagTransform=d(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=l(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,console.log("Hello")})();