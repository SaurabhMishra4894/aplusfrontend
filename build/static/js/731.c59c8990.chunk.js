"use strict";(self.webpackChunkaplusaudio=self.webpackChunkaplusaudio||[]).push([[731],{9366:function(e,n,t){t.r(n),t.d(n,{default:function(){return Q}});var r=t(4165),a=t(5861),o=t(9439),c=t(390),i=t(3304),s=t(7795),u=t(3767),l=t(9874),d=t(1756),x=t(7990),f=t(4744),p=t(6248),h=t(5971),g=t(9920),m=t(2720),j=t(6654),C=t(7129),k=t(2397),Z=t(2417),v=t(1831),w=t(499),b=t(1539),N=t(5545),S=t(5400),P=t(221),U=t(1375),y=t(4514),z=t(9134),T=t(2559),L=(0,U.Pi)((function(e){var n,t=e.onClose,o=(0,N.s0)(),c=function(){return t()},i=[{content:"Loading Categories Please wait",onClick:function(e){c()}}],s=[],u="".concat(f.Z.apilink,"/returncategories"),l=(0,y.useQuery)(["getCategories"],(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z.Z.get(u).then((function(e){return e.data.data})));case 1:case"end":return e.stop()}}),e)})))),d=l.data,x=l.refetch,h=l.isLoading;d||(clearTimeout(n),n=setTimeout((function(){x()}),4e3));return!h&&d&&d.map((function(e){return s.push({content:e.catname,onClick:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c();case 2:return console.log(e,"toggle dd closed"),n.abrupt("return",o("/products/".concat(e.catid,"/").concat(e.catname)));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}),!1})),(0,T.jsxs)(p.K,{as:"nav",children:[(0,T.jsx)(S.rU,{to:"/",onClick:function(){return t()},children:"Home"}),(0,T.jsx)(P.Z,{options:d?s:i,initial:200,exit:4,value:"Products"}),(0,T.jsx)(S.rU,{to:"/about-us",onClick:function(){t()},children:"About"}),(0,T.jsx)(S.rU,{to:"/participation",onClick:function(){t()},children:"Our Participation"}),(0,T.jsx)(S.rU,{to:"/contact",onClick:function(){t()},children:"Contact us"})]})})),M=function(){var e=(0,h.q)(),n=e.isOpen,t=e.onOpen,r=e.onClose,a=c.useRef();return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(g.z,{ref:a,backgroundColor:"unset",fontSize:"28px",padding:"5px",onClick:t,children:(0,T.jsx)(b.qTj,{})}),(0,T.jsx)(m.d,{isOpen:n,onClose:r,placement:"top",finalFocusRef:a,children:(0,T.jsx)(j.Z,{className:"headerModal",children:(0,T.jsxs)(C.s,{className:"mainHeaderDrawer",children:[(0,T.jsx)(k.o,{}),(0,T.jsx)(Z.x,{children:"Menu"}),(0,T.jsx)(v.f,{children:(0,T.jsx)(L,{className:"dropdownNav",onClose:r})})]})})})]})},O=function(e){e.children;return(0,T.jsx)(p.K,{children:(0,T.jsx)(w.U,{children:(0,T.jsx)(s.xu,{children:(0,T.jsx)(M,{})})})})},A=function(){return(0,T.jsx)(O,{})};A.containerSize="fill";var H=c.memo(A),I=(0,U.Pi)((function(){var e,n=(0,c.useState)(!0),t=(0,o.Z)(n,2),i=t[0],s=t[1],u=(0,N.s0)(),l=function(){return s(!1)},d=[{content:"Loading Categories Please wait",onClick:function(e){l()}}],x=[],h="".concat(f.Z.apilink,"/returncategories"),m=(0,y.useQuery)(["getCategories"],(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z.Z.get(h).then((function(e){return e.data.data})));case 1:case"end":return e.stop()}}),e)})))),j=m.data,C=m.refetch,k=m.isLoading;j||(clearTimeout(e),e=setTimeout((function(){C()}),4e3));return!k&&j&&(j.map((function(e){x.push({content:e.catname,onClick:function(n){l(),u("/products/".concat(e.catid,"/").concat(e.catname))}}),console.log(e,"data for categories")})),console.log(x,"data for categories")),(0,c.useEffect)((function(){i||s(!0)}),[i]),(0,T.jsxs)(p.K,{direction:"row",m:"10px 10px",gap:2,justifyContent:"space-around",align:"center",children:[(0,T.jsx)(S.rU,{to:"/",children:(0,T.jsx)(g.z,{variant:"ghost",onClick:function(){},children:"Home"})}),(0,T.jsx)(S.rU,{to:"/about-us",children:(0,T.jsx)(g.z,{variant:"ghost",onClick:function(){},children:"About"})}),i?(0,T.jsx)(P.Z,{options:j?x:d,initial:50,exit:4,value:"Products"}):"",(0,T.jsx)(S.rU,{to:"/participation",children:(0,T.jsx)(g.z,{variant:"ghost",children:"Our Participation"})}),(0,T.jsx)(S.rU,{to:"/contact",children:(0,T.jsx)(g.z,{variant:"ghost",children:"Contact"})})]})})),E=c.memo(I),B=t.p+"static/media/Aplus-logo-675x324-white.3bbce33726f6a5550a71.png",F=t(6902),K=(0,U.Pi)((function(e){var n=e.BG,t=void 0!==n&&n,x=(0,i.If)(),p=x.colorMode;x.toggleColorMode;console.log(t,"backgroundof header");var h,g=(0,c.useState)(!0),m=(0,o.Z)(g,2),j=m[0],C=m[1],k=(0,N.s0)(),Z=function(){return C(!1)},v=[],w="".concat(f.Z.apilink,"/returncategories"),b=(0,y.useQuery)(["getCategories"],(0,a.Z)((0,r.Z)().mark((function e(){var n,t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=localStorage.getItem("cachedCategories"))){e.next=5;break}return e.abrupt("return",JSON.parse(n));case 5:return e.next=7,z.Z.get(w);case 7:return t=e.sent,a=t.data.data,localStorage.setItem("cachedCategories",JSON.stringify(a)),e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})))),S=b.data,P=b.refetch,U=b.isLoading;S||(clearTimeout(h),h=setTimeout((function(){P()}),4e3));return!U&&S&&S.forEach((function(e){v.push({content:e.catname,onClick:function(n){Z(),k("/products/".concat(e.catid,"/").concat(e.catname))}}),console.log(e,"data for categories")})),(0,c.useEffect)((function(){j||C(!0)}),[j]),(0,T.jsx)(s.xu,{className:"mainHeader ".concat((f.Z.footer,"mainHeader2")),as:"section",children:(0,T.jsxs)(s.xu,{className:"header",textAlign:"center",children:[(0,T.jsx)(q,{colorMode:p,Logo:B}),f.Z.device?(0,T.jsx)(s.xu,{display:"flex",className:"headerSecondPart",flexDir:"row",gap:15,children:(0,T.jsx)(s.xu,{className:"desktopSlider",children:(0,T.jsx)(H,{})})}):(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(E,{}),(0,T.jsxs)(u.B,{className:"inputheaderSearchMain",size:"xl",children:[(0,T.jsx)(l.I,{pr:".5rem",className:"inputheaderSearch",type:"text",w:"230px",placeholder:"Search"}),(0,T.jsx)(d.x,{marginBottom:"6px",right:"6px",children:(0,T.jsx)(F.w75,{className:"inputheaderSearchIcon"})})]})]})]})})})),Q=c.memo(K);function q(e){e.colorMode;var n=e.Logo;return(0,T.jsx)(s.xu,{className:"titleText",children:(0,T.jsx)(S.rU,{to:"/",children:(0,T.jsx)(x.E,{loading:"lazy",src:n,alt:"Aplus Audios"})})})}}}]);
//# sourceMappingURL=731.c59c8990.chunk.js.map