(this.webpackJsonpreact_store=this.webpackJsonpreact_store||[]).push([[0],{24:function(e,t,a){e.exports={card:"Cards_card__20Elb",like:"Cards_like__1SWlp",priceD:"Cards_priceD__-HKXm",div1:"Cards_div1__NJw9Q",div2:"Cards_div2__TENLr",div3:"Cards_div3__1Gv7e"}},25:function(e){e.exports=JSON.parse('[{"image":"./images/sliderImage/img1.jpg"},{"image":"./images/sliderImage/img2.jpg"},{"image":"./images/sliderImage/img3.jpg"},{"image":"./images/sliderImage/img4.jpg"},{"image":"./images/sliderImage/img5.jpg"},{"image":"./images/sliderImage/img6.jpg"},{"image":"./images/sliderImage/img7.jpg"},{"image":"./images/sliderImage/img8.jpg"},{"image":"./images/sliderImage/img9.jpg"}]')},27:function(e,t,a){e.exports={itemOverlay:"Item_itemOverlay__cVrP2",itemOverlayHidden:"Item_itemOverlayHidden__29IUx",Item:"Item_Item__iTesS",cartItem:"Item_cartItem__2ThmS",removeBtn:"Item_removeBtn__2CPb-"}},43:function(e,t,a){},57:function(e,t,a){},7:function(e,t,a){e.exports={overlay:"Cart_overlay__2gcIt",drawer:"Cart_drawer__29_q4",titleDrawer:"Cart_titleDrawer__3V6V4",cartItem:"Cart_cartItem__QJOE1",removeBtn:"Cart_removeBtn__20wdD",summaryBlock:"Cart_summaryBlock__3gwpM",items:"Cart_items__Yi1kJ",emptyCart:"Cart_emptyCart__17TVc",button_back:"Cart_button_back__3CIf4",overlayVissible:"Cart_overlayVissible__3cWSp"}},82:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(28),i=a.n(r),s=a(23),o=(a(57),a(17)),l=a(10),d=a.n(l),j=a(21),b=a(3),u=a(8),m=a.n(u),O=a(44),h=a.n(O),x=a(22),p=a.n(x),v=a(7),f=a.n(v),g=n.a.createContext({}),C=a(1),k=function(e){var t=e.image,a=e.title,c=e.description,r=n.a.useContext(g).setCartOpen;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{children:Object(C.jsx)("h2",{children:a})}),Object(C.jsxs)("div",{children:[" ",Object(C.jsx)("img",{src:t,alt:"Empty"}),"  "]}),Object(C.jsx)("div",{children:Object(C.jsx)("h3",{children:c})}),Object(C.jsxs)("div",{children:[Object(C.jsx)("button",{className:f.a.button_back,onClick:function(){return r(!1)},children:"Come to site..."})," "]})]})},_=function(){var e=n.a.useContext(g),t=e.cartItems,a=e.setCartItems,c=t.reduce((function(e,t){return t.price+e}),0);return{cartItems:t,setCartItems:a,totalPrice:c}};var y=function(e){var t=e.offClickCart,a=e.onRemove,c=e.items,r=void 0===c?[]:c,i=n.a.useState(!1),s=Object(b.a)(i,2),o=s[0],l=s[1],u=n.a.useState(null),O=Object(b.a)(u,2),x=O[0],v=O[1],g=n.a.useState(!1),y=Object(b.a)(g,2),N=y[0],I=y[1],w=_(),S=w.cartItems,F=w.setCartItems,P=w.totalPrice,T=function(e){return new Promise((function(t){return setTimeout(t,e)}))},E=function(){var e=Object(j.a)(d.a.mark((function e(){var t,a,c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,I(!0),e.next=4,m.a.post("https://60ecb1dca78dc700178adbfe.mockapi.io/complete",{items:S});case 4:t=e.sent,a=t.data,l(!0),v(a.id),F([]),c=0;case 10:if(!(c<S.length)){e.next=19;break}return n=S[c],e.next=14,m.a.delete("https://60ecb1dca78dc700178adbfe.mockapi.io/cart/"+n.id);case 14:return e.next=16,T(1e3);case 16:c++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert("-----------------------DIDNT WORK------------------------");case 24:I(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:f.a.titleDrawer,children:[Object(C.jsx)("div",{children:Object(C.jsx)("h2",{children:"Your Cart"})}),Object(C.jsx)("div",{children:Object(C.jsx)(p.a,{className:"CloseIcon",onClick:t})})]}),r.length>0?Object(C.jsx)("div",{className:f.a.items,children:r.map((function(e){return Object(C.jsxs)("div",{className:f.a.cartItem,children:[Object(C.jsx)("img",{alt:f.a.cart,src:e.image}),Object(C.jsxs)("div",{children:[Object(C.jsx)("p",{children:e.title}),Object(C.jsx)("b",{children:e.price})]}),Object(C.jsx)("div",{children:Object(C.jsx)(h.a,{onClick:function(){return a(e.id)},className:f.a.removeBtn})})]},e.id)}))}):Object(C.jsx)("div",{className:f.a.emptyCart,children:Object(C.jsx)(k,{title:o?"Order Complited":"Empty Cart",description:o?"Your order #".concat(x," will be delivery to you"):"Add anything to cart",image:o?"/images/order_completed.png":"/images/emptyCart.png"})}),S.length>0?Object(C.jsxs)("div",{className:f.a.summaryBlock,children:[Object(C.jsxs)("ul",{children:[Object(C.jsxs)("li",{children:[Object(C.jsx)("span",{children:"Order Summary"}),Object(C.jsx)("div",{}),Object(C.jsxs)("b",{children:[P," hrn"]})]}),Object(C.jsxs)("li",{children:[Object(C.jsx)("span",{children:"Shipping Discount"}),Object(C.jsx)("div",{}),Object(C.jsxs)("b",{children:[Math.round(P/100*5)," hrn"]})]})]}),Object(C.jsx)("button",{disabled:N,onClick:E,children:Object(C.jsx)("b",{children:"GO TO CHECKOUT"})})]}):""]})},N=function(e){var t=e.offClickCart,a=e.onRemove,c=e.items,n=void 0===c?[]:c,r=e.opened;return console.log(r),Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{className:"".concat(f.a.overlay," ").concat(r?f.a.overlayVissible:""," "),onClick:t,children:Object(C.jsx)("div",{className:"".concat(f.a.drawer," ").concat(r?f.a.drawerVissible:""," "),onClick:function(e){return e.stopPropagation()},children:Object(C.jsx)(y,{offClickCart:t,onRemove:a,items:n})})})})},I=a(47),w=a.n(I),S=a(45),F=a.n(S),P=a(46),T=a.n(P),E=a(6);a(82);var L=function(e){var t="admin@gmail.com",a="admin1234",c=n.a.useState({name:"",email:""}),r=Object(b.a)(c,2),i=r[0],s=r[1],o=n.a.useState({name:"",email:"",password:""}),l=Object(b.a)(o,2),d=l[0],j=l[1],u=n.a.useState(""),m=Object(b.a)(u,2),O=(m[0],m[1]);return Object(C.jsx)("div",{className:"loginOverlay",onClick:e.closeLog,children:Object(C.jsx)("div",{className:"loginDiv",onClick:function(e){return e.stopPropagation()},children:""!==i.email?Object(C.jsxs)("div",{children:[Object(C.jsxs)("h2",{style:{position:"flex"},children:["Wellcome ",Object(C.jsx)("span",{style:{color:"#456"},children:i.name}),Object(C.jsx)(p.a,{className:"CloseIcon",style:{top:"-100px"},onClick:e.closeLog})]}),Object(C.jsx)("button",{className:"LoginBtn",onClick:function(){console.log("Logout"),s({name:"",email:""})},children:"Logout"})]}):Object(C.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){console.log(e),e.email===t&&e.password===a?(console.log("Loggined in"),s({name:e.name,email:e.email})):(console.log("Details do not Match"),O("Details do not Match"))}(d)},children:[Object(C.jsxs)("h2",{children:["Login ",Object(C.jsx)(p.a,{className:"CloseIcon",onClick:e.closeLog})]}),Object(C.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(C.jsx)("input",{type:"name",name:"name",id:"name",onChange:function(e){return j(Object(E.a)(Object(E.a)({},d),{},{name:e.target.value}))},value:d.name}),Object(C.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(C.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return j(Object(E.a)(Object(E.a)({},d),{},{email:e.target.value}))},value:d.email}),Object(C.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(C.jsx)("input",{type:"password",nane:"password",id:"password",onChange:function(e){return j(Object(E.a)(Object(E.a)({},d),{},{password:e.target.value}))},value:d.password}),Object(C.jsx)("input",{className:"LoginBtn",type:"submit",value:"Login"})]})})})};var A=function(e){var t=n.a.useState(!1),a=Object(b.a)(t,2),c=a[0],r=a[1],i=_().totalPrice;return Object(C.jsxs)("header",{children:[Object(C.jsx)("div",{className:c?"loginHidden":"loginBlock",children:c&&Object(C.jsx)(L,{closeLog:function(){return r(!1)}})}),Object(C.jsxs)("div",{className:"headerLeft",children:[Object(C.jsx)(s.b,{to:"/",children:Object(C.jsx)("img",{src:"https://images.discordapp.net/avatars/711610119410024519/80efbf2dbb04b6133acf823924f2b291.png?size=128",alt:"logo",style:{borderRadius:"70px"}})}),Object(C.jsxs)("div",{className:"headerInfo",children:[Object(C.jsx)("h2",{children:"HEADPHONES STORE"}),Object(C.jsx)("p",{children:"MEGA ONLINE SHOPPING"})]})]}),Object(C.jsx)("div",{className:"headerRight",children:Object(C.jsxs)("ul",{children:[Object(C.jsxs)("li",{children:[Object(C.jsx)(F.a,{onClick:e.onClickCart}),Object(C.jsxs)("span",{children:[i,"$"]})]}),Object(C.jsx)("li",{children:Object(C.jsx)(s.b,{to:"/favorite",children:Object(C.jsx)(T.a,{})})}),Object(C.jsx)("li",{children:Object(C.jsx)(s.b,{to:"/orders",children:Object(C.jsx)(w.a,{onClick:function(){return r(!0)}})})})]})})]})},D=a(24),R=a.n(D),B=a(48);var H=function(e){var t=e.id,a=e.title,c=e.image,r=e.price,i=e.onPlus,s=e.onFavorite,o=e.onItemOpen,l=e.loading,d=void 0!==l&&l,j=e.favorited,u=void 0!==j&&j,m=n.a.useContext(g).isItemAdded,O=n.a.useState(u),h=Object(b.a)(O,2),x=h[0],p=h[1];return Object(C.jsx)("div",{className:R.a.card,children:d?Object(C.jsxs)(B.a,{speed:0,width:238,height:382,viewBox:"0 0 238 382",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(C.jsx)("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"180",height:"210"}),Object(C.jsx)("rect",{x:"0",y:"220",rx:"0",ry:"0",width:"180",height:"20"}),Object(C.jsx)("rect",{x:"0",y:"245",rx:"0",ry:"0",width:"100",height:"20"}),Object(C.jsx)("rect",{x:"0",y:"280",rx:"0",ry:"0",width:"60",height:"20"}),Object(C.jsx)("rect",{x:"0",y:"305",rx:"0",ry:"0",width:"74",height:"20"}),Object(C.jsx)("rect",{x:"129",y:"273",rx:"0",ry:"0",width:"50",height:"50"})]}):Object(C.jsxs)(C.Fragment,{children:[s&&Object(C.jsx)("div",{className:R.a.like,children:Object(C.jsx)("img",{alt:"like",width:25,onClick:function(){s({id:t,title:a,image:c,price:r}),p(!x)},src:x?"./images/like.png":"./images/unlike.png"})}),Object(C.jsx)("img",{alt:"head1",src:c,width:180,onClick:o}),Object(C.jsx)("h5",{children:a}),Object(C.jsxs)("div",{className:R.a.priceD,onClick:o,children:[Object(C.jsx)("div",{className:R.a.div1,children:Object(C.jsx)("span",{children:"Price:"})}),Object(C.jsx)("div",{className:R.a.div2,children:Object(C.jsxs)("b",{children:[r,"  hrn"]})}),Object(C.jsx)("div",{className:R.a.div3,children:i&&Object(C.jsx)("img",{style:{color:"#9CC",cursor:"pointer",width:"30px"},alt:"Plus",onClick:function(){i({id:t,title:a,image:c,price:r})},src:m(t)?"./images/unbay.png":"./images/buy.png"})})]})]})})},V=a(51),J=a.n(V),M=(a(85),a(25)),Y=a(50),G=a.n(Y),W=a(49),K=a.n(W),z=function(){var e=n.a.useState(1),t=Object(b.a)(e,2),a=t[0],c=t[1];n.a.useEffect((function(){a!==M.length+1?setTimeout((function(){return c(a+1)}),2e3):c(1)}));var r=function(){a!==M.length?c(a+1):a===M.length&&c(1)},i=function(){1!==a?c(a-1):1===a&&c(M.length)};return Object(C.jsx)("div",{className:"slider",style:{background:"rgba(0,0,0,0.3)"},children:M.map((function(e,t){return Object(C.jsxs)("div",{className:a===t+1?"slide active":"slide",children:[Object(C.jsx)("img",{src:e.image,alt:"traimage"}),Object(C.jsx)(K.a,{className:"prev",onClick:i}),Object(C.jsx)(G.a,{className:"next",onClick:r}),Object(C.jsx)("div",{className:"conteiner-dots",children:Array.from({length:9}).map((function(e,t){return Object(C.jsx)("div",{onClick:function(){return function(e){c(e)}(t+1)},className:a===t+1?"dot active":"dot"},t)}))})]},t)}))})},Q=a(27),U=a.n(Q),q=function(e){var t=e.items,a=e.itemOpen,c=e.onItemClose;return Object(C.jsx)("div",{className:a?U.a.itemOverlay:U.a.itemOverlayHidden,onClick:c,children:Object(C.jsxs)("div",{className:U.a.Item,onClick:function(e){return e.stopPropagation()},children:[Object(C.jsx)("img",{alt:U.a.cart,src:t.image}),Object(C.jsxs)("div",{children:[Object(C.jsx)("p",{children:t.title}),Object(C.jsx)("b",{children:t.price})]})]})})};var X=function(e){var t=e.searchValue,a=e.onChangeSearchInput,c=e.setSearchValue,r=e.items,i=e.onAddToCart,s=e.isLoading,l=e.onAddToFavorite,d=n.a.useState(!1),j=Object(b.a)(d,2),u=j[0],m=j[1],O=function(){m(!0)};return Object(C.jsxs)("div",{className:"content",children:[Object(C.jsx)(z,{}),Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",color:"#fff",marginRight:"18px"},children:[Object(C.jsx)("div",{children:Object(C.jsx)("h1",{children:t?'Search Result: "'.concat(t,'"'):"All Headphones"})}),Object(C.jsxs)("div",{className:"search-block",children:[Object(C.jsx)(J.a,{fontSize:"large",style:{color:"#666"}}),Object(C.jsx)("input",{onChange:a,value:t,placeholder:"Search ..."}),t&&Object(C.jsx)(p.a,{onClick:function(){return c("")},className:"clear"})]})]}),function(){var e=r.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}));return(s?Object(o.a)(Array(8)):e).map((function(e,t){return Object(C.jsx)(H,Object(E.a)(Object(E.a)({onItemOpen:O},e),{},{onFavorite:function(e){return l(e)},onPlus:function(e){return i(e)},loading:s}),t)}))}(),Object(C.jsx)(q,{itemOpen:u,onItemClose:function(){m(!1)},items:r})]})};a(43);var $=function(){var e=n.a.useContext(g),t=e.favorite,a=e.onAddToFavorite;return Object(C.jsxs)("div",{className:"favorite",children:[Object(C.jsx)("h1",{children:"Favorite Headphones"}),t.length>0?Object(C.jsx)("div",{children:t.map((function(e,t){return Object(C.jsx)(H,Object(E.a)(Object(E.a)({},e),{},{favorited:!0,onFavorite:function(e){return a(e)}}),t)}))}):Object(C.jsx)("div",{className:"emptyFavorite",children:Object(C.jsx)("img",{src:"/images/emptyFavorite.png",alt:"logo"})})]})},Z=a(4),ee=function(){return Object(C.jsx)("footer",{className:"footer",children:"2021 Template by Petryk Yaroslav \xa9"})};var te=function(){var e=n.a.useContext(g),t=(e.onAddToCart,e.onAddToFavorite,n.a.useState([])),a=Object(b.a)(t,2),c=a[0],r=a[1],i=n.a.useState(!0),s=Object(b.a)(i,2),l=s[0],u=s[1];return n.a.useEffect((function(){Object(j.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://60ecb1dca78dc700178adbfe.mockapi.io/complete");case 3:t=e.sent,a=t.data,r(a.reduce((function(e,t){return[].concat(Object(o.a)(e),Object(o.a)(t.items))}),[])),u(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("---------ERROR------------"),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(C.jsxs)("div",{className:"favorite",children:[Object(C.jsx)("h1",{children:"Your Orders"}),c.length>0?Object(C.jsx)("div",{children:(l?Object(o.a)(Array(c.length)):c).map((function(e,t){return Object(C.jsx)(H,Object(E.a)(Object(E.a)({},e),{},{loading:l}),t)}))}):Object(C.jsx)("div",{className:"emptyFavorite",children:Object(C.jsx)("img",{src:"/images/emptyFavorite.png",alt:"logo"})})]})};var ae=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),a=t[0],r=t[1],i=Object(c.useState)(!1),s=Object(b.a)(i,2),l=s[0],u=s[1],O=Object(c.useState)([]),h=Object(b.a)(O,2),x=h[0],p=h[1],v=Object(c.useState)(""),f=Object(b.a)(v,2),k=f[0],_=f[1],y=Object(c.useState)(!0),I=Object(b.a)(y,2),w=I[0],S=I[1],F=n.a.useState([]),P=Object(b.a)(F,2),T=P[0],E=P[1];n.a.useEffect((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://60ecb1dca78dc700178adbfe.mockapi.io/cart");case 3:return t=e.sent,e.next=6,m.a.get("https://60ecb1dca78dc700178adbfe.mockapi.io/favorites");case 6:return a=e.sent,e.next=9,m.a.get("https://60ecb1dca78dc700178adbfe.mockapi.io/items");case 9:c=e.sent,S(!1),r(t.data),E(a.data),p(c.data),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),alert("-------------Error in Responce.data---------------");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var L=function(){var e=Object(j.a)(d.a.mark((function e(t){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!T.find((function(e){return e.id===t.id}))){e.next=6;break}m.a.delete("https://60ecb1dca78dc700178adbfe.mockapi.io/favorites/".concat(t.id)),E((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=11;break;case 6:return e.next=8,m.a.post("https://60ecb1dca78dc700178adbfe.mockapi.io/favorites",t);case 8:a=e.sent,c=a.data,E((function(e){return[].concat(Object(o.a)(e),[c])}));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert("Not add to favorites");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!a.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=7;break}return r((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=5,m.a.delete("https://60ecb1dca78dc700178adbfe.mockapi.io/cart/".concat(t.id));case 5:e.next=10;break;case 7:return r((function(e){return[].concat(Object(o.a)(e),[t])})),e.next=10,m.a.post("https://60ecb1dca78dc700178adbfe.mockapi.io/cart",t);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert("Not add to Cart");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsxs)(g.Provider,{value:{items:x,cartItems:a,favorite:T,isItemAdded:function(e){return a.some((function(t){return Number(t.id)===Number(e)}))},onAddToFavorite:L,setCartOpen:u,setCartItems:r},children:[Object(C.jsxs)("div",{className:"wrapper",children:[Object(C.jsx)(N,{items:a,opened:l,offClickCart:function(){return u(!1)},onRemove:function(e){m.a.delete("https://60ecb1dca78dc700178adbfe.mockapi.io/cart/".concat(e)),r((function(t){return t.filter((function(t){return t.id!==e}))}))}}),Object(C.jsx)(A,{onClickCart:function(){return u(!0)}}),Object(C.jsx)(Z.a,{exact:!0,path:"/",children:Object(C.jsx)(X,{searchValue:k,cartItems:a,onChangeSearchInput:function(e){_(e.target.value)},setSearchValue:_,onAddToFavorite:L,items:x,isLoading:w,onAddToCart:D})}),Object(C.jsx)(Z.a,{path:"/favorite",children:Object(C.jsx)($,{})}),Object(C.jsx)(Z.a,{path:"/orders",children:Object(C.jsx)(te,{})})]}),Object(C.jsx)(ee,{})]})};i.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(s.a,{basename:"/HeadphonesStore",children:Object(C.jsx)(ae,{})})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.24622393.chunk.js.map