_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[58],{"/y5a":function(e,c,t){"use strict";var s=t("nKUr"),n=(t("q1tI"),t("40aI")),a=t("D98S"),r=t("JdYI");c.a=function(){return Object(s.jsx)("footer",{className:"ps-footer",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(n.a,{}),Object(s.jsx)(a.a,{}),Object(s.jsx)(r.a,{})]})})}},"24c+":function(e,c,t){"use strict";var s=t("nKUr"),n=(t("q1tI"),t("YFqc")),a=t.n(n);c.a=function(e){var c=e.breacrumb,t=e.layout;return Object(s.jsx)("div",{className:"ps-breadcrumb",children:Object(s.jsx)("div",{className:"fullwidth"===t?"ps-container":"container",children:Object(s.jsx)("ul",{className:"breadcrumb",children:c.map((function(e){return e.url?Object(s.jsx)("li",{children:Object(s.jsx)(a.a,{href:e.url,children:Object(s.jsx)("a",{children:e.text})})},e.text):Object(s.jsx)("li",{children:e.text},e.text)}))})})})}},"9kGU":function(e,c,t){"use strict";var s=t("nKUr"),n=t("q1tI"),a=t("3UE5"),r=t("v+Cz"),l=t("09d2"),i=t("4lSd"),o=t("fDE7");c.a=function(e){var c,t=e.products,j=e.columns,u=void 0===j?4:j,d=Object(n.useState)(!0),b=d[0],x=d[1],h=Object(n.useState)(null),p=h[0],O=h[1],m=Object(n.useState)(0),f=m[0],v=m[1],N=Object(n.useState)(!1),g=N[0],_=(N[1],Object(n.useState)("col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6")),w=_[0],y=_[1];function k(e){e.preventDefault(),x(!b)}if(Object(n.useEffect)((function(){!function(){switch(u){case 2:return y("col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6"),3;case 4:return y("col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6"),4;case 6:return y("col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6"),6;default:y("col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6")}}(),v(t.length),O(t)}),[t]),g){var E=Object(i.a)(12).map((function(e){return Object(s.jsx)("div",{className:w,children:Object(s.jsx)(o.a,{})},e)}));c=Object(s.jsx)("div",{className:"row",children:E})}else if(p&&p.length>0)if(b){var I=p.map((function(e){return Object(s.jsx)("div",{className:w,children:Object(s.jsx)(a.a,{product:e})},e.id)}));c=Object(s.jsx)("div",{className:"ps-shop-items",children:Object(s.jsx)("div",{className:"row",children:I})})}else c=p.map((function(e){return Object(s.jsx)(r.a,{product:e})}));else c=Object(s.jsx)("p",{children:"No product found."});return Object(s.jsxs)("div",{className:"ps-shopping",children:[Object(s.jsxs)("div",{className:"ps-shopping__header",children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{className:"mr-2",children:f}),"Products found"]}),Object(s.jsxs)("div",{className:"ps-shopping__actions",children:[Object(s.jsx)(l.a,{}),Object(s.jsxs)("div",{className:"ps-shopping__view",children:[Object(s.jsx)("p",{children:"View"}),Object(s.jsxs)("ul",{className:"ps-tab-list",children:[Object(s.jsx)("li",{className:!0===b?"active":"",children:Object(s.jsx)("a",{href:"#",onClick:function(e){return k(e)},children:Object(s.jsx)("i",{className:"icon-grid"})})}),Object(s.jsx)("li",{className:!0!==b?"active":"",children:Object(s.jsx)("a",{href:"#",onClick:function(e){return k(e)},children:Object(s.jsx)("i",{className:"icon-list4"})})})]})]})]})]}),Object(s.jsx)("div",{className:"ps-shopping__content",children:c})]})}},nft4:function(e,c,t){"use strict";t.r(c);var s=t("vJKn"),n=t.n(s),a=t("nKUr"),r=t("rg98"),l=t("q1tI"),i=t("Uxkv"),o=t("24c+"),j=t("uYXv"),u=t("sER+"),d=t("rQdz"),b=t("Gq6B"),x=t("20a2"),h=t("9kGU");c.default=function(){var e=Object(x.useRouter)(),c=e.query.slug,t=Object(l.useState)(null),s=t[0],p=t[1],O=Object(l.useState)(!1),m=O[0],f=O[1];function v(){return(v=Object(r.a)(n.a.mark((function t(){var s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(f(!0),!c){t.next=8;break}return t.next=4,b.a.getProductsByCategory(c);case 4:(s=t.sent)&&(p(s),setTimeout(function(){f(!1)}.bind(this),250)),t.next=10;break;case 8:return t.next=10,e.push("/shop");case 10:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}Object(l.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[c]);var N,g=[{text:"Home",url:"/"},{text:"Shop",url:"/"},{text:s?s.name:"Product category"}];return N=m?Object(a.jsx)("p",{children:"Loading..."}):s&&s.products.length>0?Object(a.jsx)(h.a,{columns:4,products:s.products}):Object(a.jsx)("p",{children:"No Product found"}),Object(a.jsx)(i.a,{title:s?s.name:"Category",boxed:!0,children:Object(a.jsxs)("div",{className:"ps-page--shop",children:[Object(a.jsx)(o.a,{breacrumb:g}),Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"ps-layout--shop ps-shop--category",children:[Object(a.jsxs)("div",{className:"ps-layout__left",children:[Object(a.jsx)(j.a,{}),Object(a.jsx)(u.a,{}),Object(a.jsx)(d.a,{})]}),Object(a.jsxs)("div",{className:"ps-layout__right",children:[Object(a.jsx)("h3",{className:"ps-shop__heading",children:s&&s.name}),N]})]})})]})})}},xII9:function(e,c,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/[slug]",function(){return t("nft4")}])}},[["xII9",1,2,0,3,4,5,6,7,8,9,10,17,20]]]);