(function(){"use strict";var t={4994:function(t,r,e){var n=e(9242),o=e(3396);const a={class:"page-wrap"};function s(t,r,e,n,s,i){const c=(0,o.up)("NavBar"),u=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c,{user:s.user},null,8,["user"]),(0,o._)("div",a,[(0,o.Wm)(u,{user:s.user},null,8,["user"])])],64)}var i=e(1450);const c={class:"nav-bar"},u={class:"logo-wrap"},d=["src"],p={class:"nav-buttons-wrap"},l=(0,o._)("button",null,"Shopping Cart",-1);function m(t,r,e,n,a,s){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",c,[(0,o.Wm)(i,{to:"/products",class:"products-links"},{default:(0,o.w5)((()=>[(0,o._)("div",u,[(0,o._)("img",{src:a.logo},null,8,d)])])),_:1}),(0,o._)("div",p,[e.user?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:r[0]||(r[0]=(...t)=>s.signOut&&s.signOut(...t))},"Sign Out")):(0,o.kq)("",!0),(0,o.Wm)(i,{to:"/cart"},{default:(0,o.w5)((()=>[l])),_:1})])])}var g=e.p+"img/logo-hexagon.d2768201.svg",h={name:"NavBar",props:["user"],data(){return{logo:g}},methods:{signOut(){const t=(0,i.v0)();(0,i.w7)(t)}}},v=e(89);const w=(0,v.Z)(h,[["render",m]]);var f=w,y={name:"App",components:{NavBar:f},data(){return{user:null}},created(){const t=(0,i.v0)();(0,i.Aj)(t,(t=>{this.user=t}))}};const I=(0,v.Z)(y,[["render",s]]);var k=I,_=e(2483);const b=(0,o._)("h1",null,"Shopping Cart",-1),C={key:0},D={key:1};function P(t,r,e,n,a,s){const i=(0,o.up)("ShoppingCartList");return(0,o.wg)(),(0,o.iD)(o.HY,null,[b,a.cartItems.length>0?((0,o.wg)(),(0,o.iD)("div",C,[(0,o.Wm)(i,{onRemoveFromCart:r[0]||(r[0]=t=>s.removeFromCart(t)),products:a.cartItems},null,8,["products"])])):(0,o.kq)("",!0),0===a.cartItems.length?((0,o.wg)(),(0,o.iD)("div",D," You currently have no items in your cart! ")):(0,o.kq)("",!0)],64)}var S=e(4161),O=e(7139);const Z=["src"],$={class:"details-wrap"},F=["onClick"],j=(0,o._)("button",{class:"checkout-button"},"Proceed to Checkout",-1);function L(t,r,e,n,a,s){return(0,o.wg)(),(0,o.iD)(o.HY,null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.products,(r=>((0,o.wg)(),(0,o.iD)("div",{class:"product-container",key:r.id},[(0,o._)("img",{class:"product-image",src:r.imageUrl},null,8,Z),(0,o._)("div",$,[(0,o._)("h3",null,(0,O.zw)(r.name),1),(0,o._)("p",null,(0,O.zw)(r.price),1)]),(0,o._)("button",{onClick:e=>t.$emit("remove-from-cart",r.id),class:"remove-button"},"Remove from Cart",8,F)])))),128)),j],64)}var N={name:"ShoppingCartList",props:["products"]};const W=(0,v.Z)(N,[["render",L]]);var q=W,x={name:"ShoppingCartPage",props:["user"],components:{ShoppingCartList:q},data(){return{cartItems:[]}},watch:{async user(t){if(t){const t=await S.Z.get("/api/users/${newUserValuer.uid}/cart"),r=t.data;this.cartItems=r}}},methods:{async removeFromCart(t){const r=await S.Z.delete(`/api/users/${this.user.uid}/cart/${t}`),e=r.data;this.cartItems=e}},async created(){if(this.user){const t=await S.Z.get(`/api/users/${this.user.uid}/cart`),r=t.data;this.cartItems=r}}};const z=(0,v.Z)(x,[["render",P]]);var A=z;const B=(0,o._)("h1",null,"Products",-1);function H(t,r,e,n,a,s){const i=(0,o.up)("ProductList");return(0,o.wg)(),(0,o.iD)(o.HY,null,[B,(0,o.Wm)(i,{products:a.products},null,8,["products"])],64)}const Y={class:"grid-wrap"},T=["src"],U={class:"produce-name"},K={class:"product-price"},R=(0,o._)("button",null,"View Details",-1);function M(t,r,e,n,a,s){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",Y,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.products,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"product-item",key:t.id},[(0,o._)("img",{src:t.imageUrl},null,8,T),(0,o._)("h3",U,(0,O.zw)(t.name),1),(0,o._)("p",K,(0,O.zw)(t.price),1),(0,o.Wm)(i,{to:"/products/"+t.id},{default:(0,o.w5)((()=>[R])),_:2},1032,["to"])])))),128))])}var V={name:"ProductList",props:["products"]};const J=(0,v.Z)(V,[["render",M]]);var E=J,G={name:"ProductsPage",components:{ProductList:E},data(){return{products:[]}},async created(){const t=await S.Z.get("/api/products"),r=t.data;this.products=r}};const X=(0,v.Z)(G,[["render",H]]);var Q=X;const tt={key:0},rt={class:"image-wrap"},et=["src"],nt={class:"product-details"},ot={class:"price"},at={key:1,class:"grey-button"},st={key:1};function it(t,r,e,n,a,s){const i=(0,o.up)("NotFoundPage");return a.product?((0,o.wg)(),(0,o.iD)("div",tt,[(0,o._)("div",rt,[(0,o._)("img",{src:a.product.imageUrl},null,8,et)]),(0,o._)("div",nt,[(0,o._)("h1",null,(0,O.zw)(a.product.name),1),(0,o._)("h3",ot,(0,O.zw)(a.product.price),1),e.user&&!s.itemIsInCart?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:r[0]||(r[0]=(...t)=>s.addToCart&&s.addToCart(...t)),class:"add-to-cart"},"Add to cart")):(0,o.kq)("",!0),e.user&&s.itemIsInCart?((0,o.wg)(),(0,o.iD)("button",at,"Item is already in cart")):(0,o.kq)("",!0),e.user?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:2,class:"sign-in",onClick:r[1]||(r[1]=(...t)=>s.signIn&&s.signIn(...t))},"Sign in to add to cart"))])])):((0,o.wg)(),(0,o.iD)("div",st,[(0,o.Wm)(i)]))}function ct(t,r,e,n,a,s){return(0,o.wg)(),(0,o.iD)("h1",null,"404: Page Not Found.")}var ut={name:"NotFoundPage"};const dt=(0,v.Z)(ut,[["render",ct]]);var pt=dt,lt={name:"ProductDetailPage",props:["user"],data(){return{product:{},cartItems:[]}},computed:{itemIsInCart(){return this.cartItems.some((t=>t.id===this.$route.params.productId))}},watch:{async user(t){if(t){const t=await S.Z.get("/api/users/${newUserValuer.uid}/cart"),r=t.data;this.cartItems=r}}},methods:{async addToCart(){await S.Z.post(`/api/users/${this.user.uid}/cart`,{id:this.$route.params.productId}),alert("Successfully added item to cart!")},async signIn(){const t=prompt("Please enter your email to sign in:"),r=(0,i.v0)(),e={url:`https://full-stack-vue-app.onrender.com/products/${this.$route.params.productId}`,handleCodeInApp:!0};await(0,i.oo)(r,t,e),alert("A login link was sent to the email you provided"),window.localStorage.setItem("emailForSignIn",t)}},components:{NotFoundPage:pt},async created(){const t=(0,i.v0)();if((0,i.JB)(t,window.location.href)){const r=window.localStorage.getItem("emailForSignIn");await(0,i.P6)(t,r,window.location.href),alert("Successfully signed in!"),window.localStorage.removeItem("emailForSignIn")}const r=await S.Z.get(`/api/products/${this.$route.params.productId}`),e=r.data;if(this.product=e,this.user){const t=await S.Z.get(`/api/users/${this.user.uid}/cart`),r=t.data;this.cartItems=r}}};const mt=(0,v.Z)(lt,[["render",it]]);var gt=mt,ht=e(7795);const vt={apiKey:"AIzaSyBOvXSAx8DyHwyqkJhGTiPBKDfMjcaNDdk",authDomain:"vue-site-87721.firebaseapp.com",projectId:"vue-site-87721",storageBucket:"vue-site-87721.appspot.com",messagingSenderId:"34208536826",appId:"1:34208536826:web:c96d67e1e297657c315143"};(0,ht.ZF)(vt),(0,n.ri)(k).use(_.p7({history:_.PO("/"),routes:[{path:"/cart",component:A},{path:"/products",component:Q},{path:"/products/:productId",component:gt},{path:"/",redirect:"/products"},{path:"/:pathMatch(.*)*",component:pt}]})).mount("#app")}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return t[n].call(a.exports,a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(r,n,o,a){if(!n){var s=1/0;for(d=0;d<t.length;d++){n=t[d][0],o=t[d][1],a=t[d][2];for(var i=!0,c=0;c<n.length;c++)(!1&a||s>=a)&&Object.keys(e.O).every((function(t){return e.O[t](n[c])}))?n.splice(c--,1):(i=!1,a<s&&(s=a));if(i){t.splice(d--,1);var u=o();void 0!==u&&(r=u)}}return r}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[n,o,a]}}(),function(){e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,{a:r}),r}}(),function(){e.d=function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){e.p="/"}(),function(){var t={143:0};e.O.j=function(r){return 0===t[r]};var r=function(r,n){var o,a,s=n[0],i=n[1],c=n[2],u=0;if(s.some((function(r){return 0!==t[r]}))){for(o in i)e.o(i,o)&&(e.m[o]=i[o]);if(c)var d=c(e)}for(r&&r(n);u<s.length;u++)a=s[u],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(d)},n=self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(4994)}));n=e.O(n)})();
//# sourceMappingURL=app.b473f9dd.js.map