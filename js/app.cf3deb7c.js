(function(e){function n(n){for(var t,r,a=n[0],d=n[1],h=n[2],f=0,i=[];f<a.length;f++)r=a[f],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&i.push(u[r][0]),u[r]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t]);l&&l(n);while(i.length)i.shift()();return o.push.apply(o,h||[]),c()}function c(){for(var e,n=0;n<o.length;n++){for(var c=o[n],t=!0,r=1;r<c.length;r++){var a=c[r];0!==u[a]&&(t=!1)}t&&(o.splice(n--,1),e=d(d.s=c[0]))}return e}var t={},r={app:0},u={app:0},o=[];function a(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-01cdcdc4":"27f3deb3","chunk-0d8ff9fb":"19eaedb0","chunk-17a9d809":"89a7a84b","chunk-2fccc6d0":"3faf28c6","chunk-326daec4":"f5d7d7ca","chunk-3853e2fa":"bf158478","chunk-064c4876":"f2af528d","chunk-1252260c":"c283eaef","chunk-375eeedd":"c0683a05","chunk-491011d0":"81c0668d","chunk-0a24d94f":"b89bcb6f","chunk-c4f598f6":"8ef09d43","chunk-d26051aa":"1ea1d096","chunk-a877634e":"50263ca4","chunk-626f198e":"e7b16a26","chunk-6c0bc12c":"fc88d9a2","chunk-784c4e6b":"12063565"}[e]+".js"}function d(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,d),c.l=!0,c.exports}d.e=function(e){var n=[],c={"chunk-01cdcdc4":1,"chunk-0d8ff9fb":1,"chunk-17a9d809":1,"chunk-2fccc6d0":1,"chunk-326daec4":1,"chunk-3853e2fa":1,"chunk-064c4876":1,"chunk-1252260c":1,"chunk-375eeedd":1,"chunk-491011d0":1,"chunk-c4f598f6":1,"chunk-a877634e":1,"chunk-626f198e":1,"chunk-6c0bc12c":1,"chunk-784c4e6b":1};r[e]?n.push(r[e]):0!==r[e]&&c[e]&&n.push(r[e]=new Promise((function(n,c){for(var t="css/"+({}[e]||e)+"."+{"chunk-01cdcdc4":"7992d87f","chunk-0d8ff9fb":"4fa1edf1","chunk-17a9d809":"aea66ee7","chunk-2fccc6d0":"3fef3d58","chunk-326daec4":"7a26dd29","chunk-3853e2fa":"c148106b","chunk-064c4876":"2406ab75","chunk-1252260c":"8dcb8ed4","chunk-375eeedd":"f62df424","chunk-491011d0":"485911b6","chunk-0a24d94f":"31d6cfe0","chunk-c4f598f6":"59cd35d9","chunk-d26051aa":"31d6cfe0","chunk-a877634e":"fa9be433","chunk-626f198e":"93897e3c","chunk-6c0bc12c":"c3fd908d","chunk-784c4e6b":"dfe457c1"}[e]+".css",u=d.p+t,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var h=o[a],f=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(f===t||f===u))return n()}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){h=i[a],f=h.getAttribute("data-href");if(f===t||f===u)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var t=n&&n.target&&n.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=t,delete r[e],l.parentNode.removeChild(l),c(o)},l.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){r[e]=0})));var t=u[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,c){t=u[e]=[n,c]}));n.push(t[2]=o);var h,f=document.createElement("script");f.charset="utf-8",f.timeout=120,d.nc&&f.setAttribute("nonce",d.nc),f.src=a(e);var i=new Error;h=function(n){f.onerror=f.onload=null,clearTimeout(l);var c=u[e];if(0!==c){if(c){var t=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+t+": "+r+")",i.name="ChunkLoadError",i.type=t,i.request=r,c[1](i)}u[e]=void 0}};var l=setTimeout((function(){h({type:"timeout",target:f})}),12e4);f.onerror=f.onload=h,document.head.appendChild(f)}return Promise.all(n)},d.m=e,d.c=t,d.d=function(e,n,c){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:c})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(d.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)d.d(c,t,function(n){return e[n]}.bind(null,t));return c},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/online-store/",d.oe=function(e){throw console.error(e),e};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],f=h.push.bind(h);h.push=n,h=h.slice();for(var i=0;i<h.length;i++)n(h[i]);var l=f;o.push([0,"chunk-vendors"]),c()})({0:function(e,n,c){e.exports=c("56d7")},"56d7":function(e,n,c){"use strict";c.r(n);c("e260"),c("e6cf"),c("cca6"),c("a79d");var t=c("7a23"),r=Object(t["h"])("div",{id:"nav"},null,-1);function u(e,n){var c=Object(t["I"])("RouterView");return Object(t["z"])(),Object(t["g"])("div",null,[r,Object(t["k"])(c)])}c("c897");const o={};o.render=u;var a=o,d=(c("d3b7"),c("3ca3"),c("ddb0"),c("6c02")),h=[{path:"/",redirect:"/store/home"},{path:"/login",component:function(){return c.e("chunk-6c0bc12c").then(c.bind(null,"83ca"))}},{path:"/dashboard",component:function(){return c.e("chunk-17a9d809").then(c.bind(null,"6a4c"))},children:[{path:"products",component:function(){return Promise.all([c.e("chunk-3853e2fa"),c.e("chunk-491011d0"),c.e("chunk-c4f598f6")]).then(c.bind(null,"663e"))}},{path:"orders",component:function(){return Promise.all([c.e("chunk-3853e2fa"),c.e("chunk-491011d0"),c.e("chunk-0a24d94f")]).then(c.bind(null,"0257"))}},{path:"coupons",component:function(){return Promise.all([c.e("chunk-3853e2fa"),c.e("chunk-491011d0"),c.e("chunk-d26051aa")]).then(c.bind(null,"30cc"))}},{path:"/dashboard/:pathMatch(.*)*",redirect:"/dashboard/products"}]},{path:"/store",component:function(){return c.e("chunk-326daec4").then(c.bind(null,"8171"))},children:[{path:"home",component:function(){return c.e("chunk-2fccc6d0").then(c.bind(null,"c6d2"))}},{path:"about",component:function(){return c.e("chunk-626f198e").then(c.bind(null,"132a"))}},{path:"vnIntro",component:function(){return c.e("chunk-01cdcdc4").then(c.bind(null,"cb4f"))}},{path:"products",component:function(){return Promise.all([c.e("chunk-3853e2fa"),c.e("chunk-064c4876")]).then(c.bind(null,"0278"))}},{path:"products/:productId",name:"productDetail",component:function(){return Promise.all([c.e("chunk-3853e2fa"),c.e("chunk-1252260c")]).then(c.bind(null,"1807"))},props:function(e){return{id:e.params.productId}}},{path:"cart",component:function(){return Promise.all([c.e("chunk-3853e2fa"),c.e("chunk-a877634e")]).then(c.bind(null,"808b"))}},{path:"liked",component:function(){return Promise.all([c.e("chunk-3853e2fa"),c.e("chunk-375eeedd")]).then(c.bind(null,"e740"))}},{path:"checkout",component:function(){return c.e("chunk-784c4e6b").then(c.bind(null,"7050"))}},{path:"payment/:orderId",component:function(){return c.e("chunk-0d8ff9fb").then(c.bind(null,"4b24"))}},{path:"/store/:pathMatch(.*)*",redirect:"/store/home"}]},{path:"/:pathMatch(.*)*",redirect:"/store/home"}],f=Object(d["a"])({history:Object(d["b"])(),routes:h});f.beforeEach((function(e,n,c){document.documentElement.scrollTop=0,c()}));var i=f,l=(c("0deb"),c("8a14")),p=(c("fe26"),c("bc3a")),s=c.n(p),b=c("2106"),k=c.n(b),m=c("7b37"),v=(c("cd74"),c("7bb1")),g=c("3aa8"),y=c("cbdf"),O=c("9457");Object(v["e"])("required",g["e"]),Object(v["e"])("email",g["b"]),Object(v["e"])("regex",g["d"]),Object(v["e"])("between",g["a"]),Object(v["e"])("max",g["c"]),Object(v["d"])({generateMessage:Object(y["a"])({zh_TW:O}),validateOnInput:!0}),Object(y["b"])("zh_TW");var j=Object(t["d"])(a);j.use(k.a,s.a),j.use(i),j.use(m["a"],{}),j.component("Loading",l["a"]),j.component("Form",v["c"]),j.component("Field",v["b"]),j.component("ErrorMessage",v["a"]),j.mount("#app")},c897:function(e,n,c){"use strict";c("d3ec")},d3ec:function(e,n,c){}});
//# sourceMappingURL=app.cf3deb7c.js.map