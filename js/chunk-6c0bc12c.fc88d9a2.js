(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c0bc12c"],{"0b42":function(e,t,r){var n=r("861d"),c=r("e8b5"),o=r("b622"),a=o("species");e.exports=function(e){var t;return c(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!c(t.prototype)?n(t)&&(t=t[a],null===t&&(t=void 0)):t=void 0),void 0===t?Array:t}},"1dde":function(e,t,r){var n=r("d039"),c=r("b622"),o=r("2d00"),a=c("species");e.exports=function(e){return o>=51||!n((function(){var t=[],r=t.constructor={};return r[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,r){var n=r("0b42");e.exports=function(e,t){return new(n(e))(0===t?0:t)}},"691a":function(e,t,r){},"83ca":function(e,t,r){"use strict";r.r(t);var n=r("7a23");Object(n["C"])("data-v-58b6c946");var c={class:"container py-6"},o={class:"row"},a={class:"col col-md-10 col-xl-8 mx-auto"},s={class:"content px-3 py-5 rounded-3"},i=Object(n["h"])("h1",{class:"fs-3 pb-3 fw-lighter eng"},[Object(n["h"])("span",{class:"d-none d-md-inline-block"},"此頁面"),Object(n["j"])("僅供VNEXT管理員登入 ")],-1),u={class:"fs-5 pb-3 fw-lighter"},b=Object(n["j"])(" 若您為訪客："),l=Object(n["j"])("點這裡回首頁"),d={class:"mb-3"},f=Object(n["j"])("Email"),p={class:"mb-3"},j=Object(n["j"])("密碼"),h=Object(n["h"])("div",{class:"text-end"},[Object(n["h"])("button",{type:"submit",class:"btn btn-primary"},"登入")],-1);function O(e,t,O,m,v,g){var x=Object(n["I"])("router-link"),w=Object(n["I"])("Loading");return Object(n["z"])(),Object(n["g"])("div",{class:"vh-100 d-flex align-items-center",style:Object(n["t"])({backgroundImage:"url("+r("c4cd")+")"})},[Object(n["h"])("div",c,[Object(n["h"])("div",o,[Object(n["h"])("div",a,[Object(n["h"])("div",s,[i,Object(n["h"])("h2",u,[b,Object(n["k"])(x,{to:"/store/home",class:"text-success fw-normal"},{default:Object(n["W"])((function(){return[l]})),_:1})]),Object(n["h"])("form",{onSubmit:t[2]||(t[2]=Object(n["Y"])((function(){return g.login&&g.login.apply(g,arguments)}),["prevent"]))},[Object(n["h"])("div",d,[Object(n["h"])("label",{for:"exampleInputEmail1",class:Object(n["s"])(["form-label",{"text-danger":v.error}])},[f,Object(n["X"])(Object(n["h"])("span",null,"有誤，請再試一次",512),[[n["T"],v.error]])],2),Object(n["X"])(Object(n["h"])("input",{type:"email",class:Object(n["s"])(["form-control",{"border-danger":v.error}]),id:"exampleInputEmail1","aria-describedby":"emailHelp","onUpdate:modelValue":t[0]||(t[0]=function(e){return v.user.username=e})},null,2),[[n["S"],v.user.username]])]),Object(n["h"])("div",p,[Object(n["h"])("label",{for:"exampleInputPassword1",class:Object(n["s"])(["form-label",{"text-danger":v.error}])},[j,Object(n["X"])(Object(n["h"])("span",null,"有誤，請再試一次",512),[[n["T"],v.error]])],2),Object(n["X"])(Object(n["h"])("input",{type:"password",class:Object(n["s"])(["form-control",{"border-danger":v.error}]),id:"exampleInputPassword1","onUpdate:modelValue":t[1]||(t[1]=function(e){return v.user.password=e})},null,2),[[n["S"],v.user.password]])]),h],32)])])])]),Object(n["k"])(w,{active:v.isLoading},null,8,["active"])],4)}Object(n["A"])();r("99af");var m={name:"Login",data:function(){return{user:{username:"",password:""},isLoading:!1,error:!1}},methods:{login:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","admin/signin");this.isLoading=!0,this.axios.post(t,this.user).then((function(t){if(e.isLoading=!1,t.data.success){var r=t.data,n=r.token,c=r.expired;document.cookie="hexToken=".concat(n,"; expires=").concat(new Date(c)),e.$router.push("/dashboard/products")}else e.error=!0}))}}};r("ceb5");m.render=O,m.__scopeId="data-v-58b6c946";t["default"]=m},8418:function(e,t,r){"use strict";var n=r("a04b"),c=r("9bf2"),o=r("5c6c");e.exports=function(e,t,r){var a=n(t);a in e?c.f(e,a,o(0,r)):e[a]=r}},"99af":function(e,t,r){"use strict";var n=r("23e7"),c=r("d039"),o=r("e8b5"),a=r("861d"),s=r("7b0b"),i=r("50c4"),u=r("8418"),b=r("65f0"),l=r("1dde"),d=r("b622"),f=r("2d00"),p=d("isConcatSpreadable"),j=9007199254740991,h="Maximum allowed index exceeded",O=f>=51||!c((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),m=l("concat"),v=function(e){if(!a(e))return!1;var t=e[p];return void 0!==t?!!t:o(e)},g=!O||!m;n({target:"Array",proto:!0,forced:g},{concat:function(e){var t,r,n,c,o,a=s(this),l=b(a,0),d=0;for(t=-1,n=arguments.length;t<n;t++)if(o=-1===t?a:arguments[t],v(o)){if(c=i(o.length),d+c>j)throw TypeError(h);for(r=0;r<c;r++,d++)r in o&&u(l,d,o[r])}else{if(d>=j)throw TypeError(h);u(l,d++,o)}return l.length=d,l}})},c4cd:function(e,t,r){e.exports=r.p+"img/bg.3f033509.jpeg"},ceb5:function(e,t,r){"use strict";r("691a")},e8b5:function(e,t,r){var n=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}}}]);
//# sourceMappingURL=chunk-6c0bc12c.fc88d9a2.js.map