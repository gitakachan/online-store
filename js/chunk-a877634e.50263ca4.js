(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a877634e"],{"1a05":function(t,e,a){"use strict";var c=a("7a23"),n={class:"header py-4"},o={class:"position-relative m-4"},s=Object(c["h"])("div",{class:"progress",style:{height:"1px"}},[Object(c["h"])("div",{class:"progress-bar",role:"progressbar",style:{width:"100%"},"aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"})],-1),i={class:"position-absolute top-0 start-50 bg-white px-3 translate-middle text-nowrap"};function r(t,e,a,r,l,b){return Object(c["z"])(),Object(c["g"])("div",n,[Object(c["h"])("div",o,[s,Object(c["h"])("h1",i,Object(c["L"])(a.title),1)])])}var l={name:"Header",props:{title:{type:String,required:!0}}};l.render=r;e["a"]=l},"808b":function(t,e,a){"use strict";a.r(e);var c=a("7a23");Object(c["C"])("data-v-967a1114");var n={class:"container min-vh-80"},o={class:"d-flex justify-content-center mt-4"},s=Object(c["h"])("h2",{class:"mb-3"},"購物車內尚無任何商品",-1),i=Object(c["h"])("i",{class:"bi bi-arrow-up-right"},null,-1),r=Object(c["j"])("回去逛逛"),l={class:"table align-middle table-fit"},b=Object(c["h"])("thead",null,[Object(c["h"])("tr",null,[Object(c["h"])("th",{scope:"col"},"商品"),Object(c["h"])("th",{scope:"col"},"單價"),Object(c["h"])("th",{scope:"col"},"數量"),Object(c["h"])("th",{scope:"col"},"刪除")])],-1),d=["onClick"],u={class:"num"},h={class:"input-group"},j=["onUpdate:modelValue","onChange"],O={class:"input-group-text bg-primary",id:"basic-addon1"},p=["onClick"],g=Object(c["h"])("i",{class:"bi bi-trash"},null,-1),f=[g],m={class:"no-border",colspan:"4"},v={class:"text-end"},k=Object(c["j"])(" 小計： "),C={class:"num"},x={class:"no-border",colspan:"4"},L={class:"text-end"},y=Object(c["h"])("i",{class:"bi bi-cart-check"},null,-1),w=Object(c["j"])(" 去結帳 ");function I(t,e,a,g,I,_){var T=Object(c["I"])("Loading"),q=Object(c["I"])("ToastList"),z=Object(c["I"])("CenteredHeader"),S=Object(c["I"])("router-link");return Object(c["z"])(),Object(c["g"])("div",null,[Object(c["k"])(T,{active:I.isLoading},null,8,["active"]),Object(c["k"])(q),Object(c["h"])("div",n,[Object(c["k"])(z,{title:"購物車"}),Object(c["h"])("div",o,[Object(c["X"])(Object(c["h"])("div",null,[s,Object(c["k"])(S,{class:"text-decoration-none d-block text-center",to:"/store/products"},{default:Object(c["W"])((function(){return[i,r]})),_:1})],512),[[c["T"],0===I.cartItems.length]]),Object(c["X"])(Object(c["h"])("table",l,[b,Object(c["h"])("tbody",null,[(Object(c["z"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(I.cartItems,(function(t){return Object(c["z"])(),Object(c["g"])("tr",{key:t.id},[Object(c["h"])("td",{class:"item-title",onClick:function(e){return _.backToProduct(t.product_id)}},Object(c["L"])(t.product.title),9,d),Object(c["h"])("td",u,Object(c["L"])(t.product.price.toLocaleString()),1),Object(c["h"])("td",null,[Object(c["h"])("div",h,[Object(c["X"])(Object(c["h"])("input",{"onUpdate:modelValue":function(e){return t.qty=e},onChange:function(e){return _.updateCart(t.id,t.qty)},min:"1",type:"number",class:"form-control shadow-none num",placeholder:"數量","aria-label":"Username","aria-describedby":"basic-addon1"},null,40,j),[[c["S"],t.qty]]),Object(c["h"])("span",O,Object(c["L"])(t.product.unit),1)])]),Object(c["h"])("td",null,[Object(c["h"])("button",{onClick:function(e){return _.deleteCart(t.id)},class:"btn text-danger"},f,8,p)])])})),128)),Object(c["h"])("tr",null,[Object(c["h"])("td",m,[Object(c["h"])("h3",v,[k,Object(c["h"])("span",C," NT "+Object(c["L"])(I.total.toLocaleString())+" 元",1)])])]),Object(c["h"])("tr",null,[Object(c["h"])("td",x,[Object(c["h"])("div",L,[Object(c["k"])(S,{to:"/store/checkout",tag:"button",type:"button",class:"btn btn-primary"},{default:Object(c["W"])((function(){return[y,w]})),_:1})])])])])],512),[[c["T"],0!==I.cartItems.length]])])])])}Object(c["A"])();a("99af");var _=a("1a05"),T=a("f287"),q={name:"Cart",inject:["emitter","resMsg"],components:{CenteredHeader:_["a"],ToastList:T["a"]},data:function(){return{cartItems:[],total:0,isLoading:!1}},methods:{getCart:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("data-api","/cart");this.axios.get(e).then((function(e){e.data.success&&(t.isLoading=!1,t.cartItems=e.data.data.carts,t.total=e.data.data.total,t.final_total=e.data.data.final_total,t.emitter.emit("cartLength",t.cartItems.length))}))},updateCart:function(t,e){var a=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("data-api","/cart/").concat(t);this.axios.put(c,{data:{product_id:t,qty:e}}).then((function(t){t.data.success&&(a.getCart(),a.resMsg(t,"更新"))}))},deleteCart:function(t){var e=this;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("data-api","/cart/").concat(t);this.axios.delete(a).then((function(t){t.data.success&&(e.isLoading=!1,e.getCart(),e.resMsg(t,"刪除"))}))},backToProduct:function(t){this.$router.push("/store/products/".concat(t))}},mounted:function(){this.getCart()}};a("cef2");q.render=I,q.__scopeId="data-v-967a1114";e["default"]=q},a669:function(t,e,a){},cef2:function(t,e,a){"use strict";a("a669")}}]);
//# sourceMappingURL=chunk-a877634e.50263ca4.js.map