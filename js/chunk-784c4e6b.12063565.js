(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-784c4e6b"],{"0b42":function(e,t,a){var c=a("861d"),s=a("e8b5"),o=a("b622"),n=o("species");e.exports=function(e){var t;return s(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!s(t.prototype)?c(t)&&(t=t[n],null===t&&(t=void 0)):t=void 0),void 0===t?Array:t}},"1a05":function(e,t,a){"use strict";var c=a("7a23"),s={class:"header py-4"},o={class:"position-relative m-4"},n=Object(c["h"])("div",{class:"progress",style:{height:"1px"}},[Object(c["h"])("div",{class:"progress-bar",role:"progressbar",style:{width:"100%"},"aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"})],-1),r={class:"position-absolute top-0 start-50 bg-white px-3 translate-middle text-nowrap"};function l(e,t,a,l,i,d){return Object(c["z"])(),Object(c["g"])("div",s,[Object(c["h"])("div",o,[n,Object(c["h"])("h1",r,Object(c["L"])(a.title),1)])])}var i={name:"Header",props:{title:{type:String,required:!0}}};i.render=l;t["a"]=i},"1dde":function(e,t,a){var c=a("d039"),s=a("b622"),o=a("2d00"),n=s("species");e.exports=function(e){return o>=51||!c((function(){var t=[],a=t.constructor={};return a[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,a){var c=a("0b42");e.exports=function(e,t){return new(c(e))(0===t?0:t)}},7050:function(e,t,a){"use strict";a.r(t);a("b0c0");var c=a("7a23");Object(c["C"])("data-v-6101eabc");var s={class:"container"},o={class:"row pb-7"},n={class:"col-lg-6"},r=Object(c["h"])("h2",{class:"text-center"},"訂單內容",-1),l={class:"d-flex justify-content-center mt-1"},i={class:"table align-middle table-fit"},d=Object(c["h"])("thead",null,[Object(c["h"])("tr",null,[Object(c["h"])("th",{scope:"col"},"商品"),Object(c["h"])("th",{scope:"col"},"單價"),Object(c["h"])("th",{scope:"col",class:"text-nowrap"},"數量")])],-1),u=["onClick"],b={class:"num"},h={class:"num"},p={class:"no-border",colspan:"4"},m={class:"input-group"},j={class:"no-border",colspan:"3"},O=Object(c["j"])(" 總計："),f={class:"num"},v=Object(c["j"])(" 元 "),g={class:"no-border",colspan:"4"},y={class:"text-end"},x=Object(c["h"])("tr",null,[Object(c["h"])("td",{class:"no-border",colspan:"3"})],-1),k={class:"col-lg-6"},C=Object(c["h"])("h2",{class:"text-center"},"訂購人資料",-1),L={class:"form-container mx-auto"},V={class:"mb-3"},w=Object(c["h"])("label",{for:"email",class:"form-label"},"Email",-1),_={class:"mb-3"},I=Object(c["h"])("label",{for:"name",class:"form-label"},"姓名",-1),S={class:"mb-3"},A=Object(c["h"])("label",{for:"tel",class:"form-label"},"電話",-1),T={class:"mb-3"},q=Object(c["h"])("label",{for:"address",class:"form-label"},"地址",-1),M={class:"mb-3"},U=Object(c["h"])("label",{for:"payment",class:"form-label"},"付款方式",-1),E=Object(c["h"])("option",{disabled:"",value:""},"請選擇付款方式",-1),z=Object(c["h"])("option",{value:"ATM轉帳"},"ATM轉帳",-1),F=Object(c["h"])("option",{value:"信用卡"},"信用卡",-1),H={class:"mb-3"},$=Object(c["h"])("label",{for:"msg",class:"form-label"},"留言",-1),J={class:"text-end"},N=["onClick"],P=Object(c["h"])("i",{class:"bi bi-check"},null,-1),W=Object(c["j"])(" 送出訂單 "),X=[P,W];function B(e,t,a,P,W,B){var G=Object(c["I"])("Loading"),R=Object(c["I"])("CenteredHeader"),D=Object(c["I"])("Field"),K=Object(c["I"])("ErrorMessage"),Q=Object(c["I"])("Form");return Object(c["z"])(),Object(c["g"])("div",null,[Object(c["k"])(G,{active:W.isLoading},null,8,["active"]),Object(c["h"])("div",s,[Object(c["k"])(R,{title:"填寫訂單資料"}),Object(c["h"])("div",o,[Object(c["h"])("div",n,[r,Object(c["h"])("div",l,[Object(c["h"])("table",i,[d,Object(c["h"])("tbody",null,[(Object(c["z"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(W.cartItems,(function(e){return Object(c["z"])(),Object(c["g"])("tr",{key:e.id},[Object(c["h"])("td",{onClick:function(t){return B.backToProduct(e.product_id)}},Object(c["L"])(e.product.title),9,u),Object(c["h"])("td",b,Object(c["L"])(e.product.price.toLocaleString()),1),Object(c["h"])("td",null,[Object(c["h"])("span",h,Object(c["L"])(e.qty),1),Object(c["j"])(Object(c["L"])(e.product.unit),1)])])})),128)),Object(c["h"])("tr",null,[Object(c["h"])("td",p,[Object(c["h"])("div",m,[Object(c["X"])(Object(c["h"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return W.code=e}),type:"text",class:"form-control shadow-none",placeholder:"輸入優惠券","aria-label":"Recipient's username","aria-describedby":"button-addon2"},null,512),[[c["S"],W.code]]),Object(c["h"])("button",{onClick:t[1]||(t[1]=function(){return B.addCoupon&&B.addCoupon.apply(B,arguments)}),class:"btn btn-outline-secondary shadow-none",type:"button",id:"button-addon2"}," 使用優惠券 ")]),Object(c["h"])("span",{class:Object(c["s"])([W.isSuccess?"text-success":"text-danger"])},Object(c["L"])(W.codeMessage),3)])]),Object(c["h"])("tr",null,[Object(c["h"])("td",j,[Object(c["h"])("h3",{class:Object(c["s"])(["text-end",{"text-decoration-line-through":W.useCode,"text-secondary":W.useCode}])},[O,Object(c["h"])("span",f," NT "+Object(c["L"])(W.total.toLocaleString()),1),v],2)])]),Object(c["X"])(Object(c["h"])("tr",null,[Object(c["h"])("td",g,[Object(c["h"])("h3",y," 折扣後：NT "+Object(c["L"])(W.final_total.toLocaleString())+" 元 ",1)])],512),[[c["T"],this.useCode]]),x])])])]),Object(c["h"])("div",k,[C,Object(c["h"])("div",L,[Object(c["k"])(Q,null,{default:Object(c["W"])((function(e){var a=e.errors,s=e.validate;return[Object(c["h"])("div",V,[w,Object(c["k"])(D,{id:"email",name:"email",type:"email",class:Object(c["s"])(["form-control",{"is-invalid":a["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:W.user.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return W.user.email=e})},null,8,["class","modelValue"]),Object(c["k"])(K,{name:"email",class:"invalid-feedback"})]),Object(c["h"])("div",_,[I,Object(c["k"])(D,{id:"name",name:"姓名",type:"text",class:Object(c["s"])(["form-control",{"is-invalid":a["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:W.user.name,"onUpdate:modelValue":t[3]||(t[3]=function(e){return W.user.name=e})},null,8,["modelValue","class"]),Object(c["k"])(K,{name:"姓名",class:"invalid-feedback"})]),Object(c["h"])("div",S,[A,Object(c["k"])(D,{id:"tel",name:"電話",type:"number",class:Object(c["s"])(["form-control",{"is-invalid":a["電話"]}]),placeholder:"請輸入電話",modelValue:W.user.tel,"onUpdate:modelValue":t[4]||(t[4]=function(e){return W.user.tel=e}),modelModifiers:{number:!0},rules:{regex:/(\d{2,3}-?|\(\d{2,3}\))\d{3,4}-?\d{4}|09\d{2}(\d{6}|-\d{3}-\d{3})/,required:!0}},null,8,["modelValue","rules","class"]),Object(c["k"])(K,{name:"電話",class:"invalid-feedback"})]),Object(c["h"])("div",T,[q,Object(c["k"])(D,{id:"address",name:"地址",type:"text",class:Object(c["s"])(["form-control",{"is-invalid":a["地址"]}]),placeholder:"請輸入台灣地址或越南當地住宿地址",modelValue:W.user.address,"onUpdate:modelValue":t[5]||(t[5]=function(e){return W.user.address=e}),rules:"required"},null,8,["modelValue","class"]),Object(c["k"])(K,{name:"地址",class:"invalid-feedback"})]),Object(c["h"])("div",M,[U,Object(c["k"])(D,{id:"payment",name:"付款方式",class:Object(c["s"])(["form-control",{"is-invalid":a["付款方式"]}]),modelValue:W.user.payment_method,"onUpdate:modelValue":t[6]||(t[6]=function(e){return W.user.payment_method=e}),as:"select",rules:"required"},{default:Object(c["W"])((function(){return[E,z,F]})),_:2},1032,["modelValue","class"]),Object(c["k"])(K,{name:"付款方式",class:"invalid-feedback"})]),Object(c["h"])("div",H,[$,Object(c["k"])(D,{as:"textarea",id:"msg",name:"留言",type:"text",class:"form-control",placeholder:"請輸入留言",modelValue:W.message,"onUpdate:modelValue":t[7]||(t[7]=function(e){return W.message=e})},null,8,["modelValue"])]),Object(c["h"])("div",J,[Object(c["h"])("button",{type:"button",onClick:function(e){B.submitOrder(),s()},class:"btn btn-primary"},X,8,N)])]})),_:1})])])])])])}Object(c["A"])();a("99af");var G=a("1a05"),R={name:"CheckOut",components:{CenteredHeader:G["a"]},data:function(){return{cartItems:[],total:0,final_total:0,isLoading:!1,useCode:!1,code:"",codeMessage:"",isSuccess:!1,user:{email:"",name:"",tel:"",address:"",payment_method:""},message:""}},methods:{getCart:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("data-api","/cart");this.axios.get(t).then((function(t){t.data.success&&(e.isLoading=!1,e.cartItems=t.data.data.carts,e.total=t.data.data.total,e.final_total=t.data.data.final_total,0===e.cartItems.length&&e.$router.push("/store/products"))}))},updateCart:function(e,t){var a=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("data-api","/cart/").concat(e);this.axios.put(c,{data:{product_id:e,qty:t}}).then((function(e){e.data.success&&a.getCart()}))},backToProduct:function(e){this.$router.push("/store/products/".concat(e))},addCoupon:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("data-api","/coupon");this.axios.post(t,{data:{code:this.code}}).then((function(t){t.data.success?(e.useCode=!0,e.getCart()):e.useCode=!1,e.isLoading=!1,e.isSuccess=t.data.success,e.codeMessage=t.data.message}))},submitOrder:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("data-api","/order");this.axios.post(t,{data:{user:this.user,message:this.message}}).then((function(t){t.data.success&&e.$router.push("/store/payment/".concat(t.data.orderId)),e.isLoading=!1}))}},mounted:function(){this.getCart()}};a("f39c");R.render=B,R.__scopeId="data-v-6101eabc";t["default"]=R},8418:function(e,t,a){"use strict";var c=a("a04b"),s=a("9bf2"),o=a("5c6c");e.exports=function(e,t,a){var n=c(t);n in e?s.f(e,n,o(0,a)):e[n]=a}},"99af":function(e,t,a){"use strict";var c=a("23e7"),s=a("d039"),o=a("e8b5"),n=a("861d"),r=a("7b0b"),l=a("50c4"),i=a("8418"),d=a("65f0"),u=a("1dde"),b=a("b622"),h=a("2d00"),p=b("isConcatSpreadable"),m=9007199254740991,j="Maximum allowed index exceeded",O=h>=51||!s((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),f=u("concat"),v=function(e){if(!n(e))return!1;var t=e[p];return void 0!==t?!!t:o(e)},g=!O||!f;c({target:"Array",proto:!0,forced:g},{concat:function(e){var t,a,c,s,o,n=r(this),u=d(n,0),b=0;for(t=-1,c=arguments.length;t<c;t++)if(o=-1===t?n:arguments[t],v(o)){if(s=l(o.length),b+s>m)throw TypeError(j);for(a=0;a<s;a++,b++)a in o&&i(u,b,o[a])}else{if(b>=m)throw TypeError(j);i(u,b++,o)}return u.length=b,u}})},b0c0:function(e,t,a){var c=a("83ab"),s=a("9bf2").f,o=Function.prototype,n=o.toString,r=/^\s*function ([^ (]*)/,l="name";c&&!(l in o)&&s(o,l,{configurable:!0,get:function(){try{return n.call(this).match(r)[1]}catch(e){return""}}})},c575:function(e,t,a){},e8b5:function(e,t,a){var c=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==c(e)}},f39c:function(e,t,a){"use strict";a("c575")}}]);
//# sourceMappingURL=chunk-784c4e6b.12063565.js.map