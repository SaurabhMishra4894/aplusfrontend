"use strict";(self.webpackChunkaplusaudio=self.webpackChunkaplusaudio||[]).push([[106],{7620:function(){},9780:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(7795),a=t(9920),i=t(390),o=t(2559),s=function(e){for(var n=e.totalPosts,t=e.postsPerPage,i=e.setCurrentPage,s=e.currentPage,c=[],l=1;l<=Math.ceil(n/t);l++)c.push(l);return(0,o.jsx)(r.xu,{className:"pagination",children:c.map((function(e,n){return(0,o.jsx)(a.z,{onClick:function(){return i(e)},className:e==s?"active":"",children:e},n)}))})},c=i.memo(s)},6351:function(e,n,t){t.d(n,{B:function(){return h},U:function(){return p}});var r=t(390),a=(t(7620),t(7795)),i=t(6248),o=t(7990),s=t(6011),c=t(2361),l=t(4744),d=t(1539),u=t(5400),x=t(2559),p=r.memo((function(e){var n=e.heading,t=(e.description,e.icon),r=e.href,c=e.referLink,l=void 0!==c&&c;e.onClick;return(0,x.jsx)(x.Fragment,{children:l?(0,x.jsx)("a",{href:r,target:"_blank",children:(0,x.jsxs)(a.xu,{maxW:"200px",className:"featueProductsCard1",borderRadius:"6px",h:285,w:"219px",overflow:"hidden",children:[(0,x.jsx)(i.K,{align:"center",p:4,background:"#F8FBFD",rowGap:5,children:(0,x.jsx)(o.E,{loading:"lazy",src:t,w:"179px",height:"196px",objectFit:"contain",alt:n,borderRadius:0})}),(0,x.jsx)(a.xu,{mt:2,children:(0,x.jsx)(s.X,{fontSize:20,fontWeight:600,size:"md",children:n})})]})}):(0,x.jsx)(u.rU,{to:r,children:(0,x.jsxs)(a.xu,{maxW:"200px",className:"featueProductsCard1",borderRadius:"6px",h:285,w:"219px",overflow:"hidden",children:[(0,x.jsx)(i.K,{className:"featueProductsCard1FirstBox",p:4,background:"#F8FBFD",rowGap:5,children:(0,x.jsx)(o.E,{loading:"lazy",src:t,w:"179px",height:"196px",objectFit:"contain",alt:n,borderRadius:0})}),(0,x.jsx)(a.xu,{className:"overlay"}),(0,x.jsx)(a.xu,{className:"featueProductsCard1SecondBox",mt:2,children:(0,x.jsx)(s.X,{overflow:"visible",height:"auto",fontSize:18,fontWeight:600,size:"md",children:n})})]})})})})),h=r.memo((function(e){var n=e.icon;return(0,x.jsxs)(a.xu,{maxW:"219px",className:"featueProductsCard2",borderRadius:"16px",w:"219px",overflow:"hidden",children:[(0,x.jsx)(s.X,{className:"headerfeatureprod",children:"All Categories"}),(0,x.jsxs)(c.x,{className:"textfeatureprod",children:["View All"," ",l.Z.device?(0,x.jsx)(d.mGl,{}):(0,x.jsx)(d.Duv,{})]}),(0,x.jsx)(o.E,{loading:"lazy",src:n,w:"219px",height:"284px",objectFit:"contain",borderRadius:0})]})}))},2106:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var r=t(3433),a=t(9439),i=t(390),o=t(1215),s=t(3304),c=t(7795),l=t(9920),d=t(6011),u=t(7990),x=t(2361),p=t(9998),h=t(6351),f=t(5545),g=t(5400),m=t(9780),j=t(4744),w=t(6599),b=t(8754),v=t(2559),C=function(e){var n=e.isOpen,t=e.imageUrl,r=e.onClose;return n?(0,w.createPortal)((0,v.jsxs)(c.xu,{position:"fixed",top:"0",left:"0",width:"100%",cursor:"pointer",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.8)",display:"flex",backdropFilter:"blur(10px)",justifyContent:"center",alignItems:"center",onClick:function(){return r()},zIndex:"10040",children:[(0,v.jsx)(b.P,{position:"absolute",top:"10px",width:"50px",border:"1px solid brown",borderRadius:"50%",height:"50px",right:"10px",className:"ModalCloseButton",color:"white",onClick:r}),(0,v.jsx)(c.xu,{position:"relative",width:"80%",maxWidth:"800px",zIndex:"10",onClick:function(){},children:(0,v.jsx)(u.E,{src:t,alt:"Product",className:"modalImage"})}),(0,v.jsx)("style",{children:".ModalCloseButton svg{\n        width:25px;\n        height:25px\n      }\n      .modalImage{\n        \n      }\n      "})]}),document.getElementById("modal-root")):null},k=function(){var e=(0,i.useState)(""),n=(0,a.Z)(e,2),t=n[0],w=n[1],b=(0,f.UO)(),k=b.id,P=b.catid,N=b.name;(0,i.useEffect)((function(){window.scrollTo(0,0)}),[k]);var y=o.a.filter((function(e){return e.pro_name==N}));if(0===y.length){var _=o.a.filter((function(e){return e.showcaseid==k}));y.push(_[0])}console.log("filtered results3",y);var F,z=(0,i.useState)(1),W=(0,a.Z)(z,2),B=W[0],Z=W[1],S=4*B,E=S-4;o.a&&(F=o.a.slice(E,S));var L=(0,s.ff)("yellow.500","yellow.300"),I=(0,i.useState)(!1),R=(0,a.Z)(I,2),U=R[0],D=R[1],M=(0,i.useState)(""),O=(0,a.Z)(M,2),X=O[0],A=O[1];return(0,i.useEffect)((function(){return w("")}),[k]),(0,i.useEffect)((function(){if(0!==y.length&&""==t)if(y[0].pro_desc&&"0"==y[0].pro_desc&&y[0].description&&""!=y[0].description)w(y[0].description);else{console.log(y,"inside of useffect");var e=(0,r.Z)(y[0].pro_desc.matchAll(/s:(\d+):"(.*?)";/g)).map((function(e){var n=e[2];return"{".concat(n,"}")}));w(e)}}),[y]),(0,v.jsxs)(c.xu,{className:"mainSubProductsMain",as:"section",flexDirection:"column",p:"20px",maxW:"1220px",m:"auto",mt:"100px",children:[(0,v.jsx)(g.rU,{className:"goBackMain",to:"/products/".concat(P),children:(0,v.jsx)(l.z,{onClick:function(){return w("")},loadingText:"Loading",isLoading:0===y.length,children:"Go Back"})}),(0,v.jsx)(d.X,{textAlign:"center",children:0!==y.length||y[0].pro_name?y[0].pro_name:"Loading ".concat(N)}),0!==y.length?(0,v.jsxs)(c.xu,{display:"flex",gap:"30px",className:"singleProductMainContainer",flexWrap:"wrap",justifyContent:"space-around",alignItems:"center",children:[(0,v.jsx)(c.xu,{className:"singleProductImage",w:"350px",h:"350px",border:"2px dashed #dedede",children:(0,v.jsx)(u.E,{w:"346px",alt:y[0].pro_image,objectFit:"contain",h:"346px",onClick:function(){return e="".concat(j.Z.imageLink,"/").concat(y[0].pro_image),A(e),void D(!0);var e},loading:"lazy",src:"".concat(j.Z.imageLink,"/").concat(y[0].pro_image)})}),(0,v.jsx)(c.xu,{className:"secondBox",w:"750px",children:(0,v.jsxs)(c.xu,{children:[(0,v.jsx)(x.x,{fontWeight:"bold",fontSize:{base:"16px",lg:"18px"},color:L,textTransform:"uppercase",mb:"4",children:"Product Details"}),(0,v.jsx)(c.xu,{spacing:2,children:!t||t.includes("\r\n")||t.includes(" | ")?t.includes("\r\n")&&!t.includes(" | ")?t.split("\r\n").map((function(e,n){return(0,v.jsxs)(c.xu,{children:[(0,v.jsx)(x.x,{as:"span",fontWeight:"bold",children:e})," "]},n)})):t.includes(" | ")?t.split(" | ").map((function(e,n){return(0,v.jsxs)(c.xu,{children:[(0,v.jsx)(x.x,{as:"span",fontWeight:"bold",children:e})," "]},n)})):"":(0,v.jsx)(v.Fragment,{children:t.map((function(e,n){if(n%4==0&&0!=n)return console.log(e,t[n-3],"main data"),(0,v.jsxs)(c.xu,{children:[(0,v.jsx)(x.x,{as:"span",fontWeight:"bold",children:t[n-3].replace(/{|}/g,"")})," ",t[n-1].replace(/{|}/g,"")]},n)}))})})]})})]}):(0,v.jsx)(p.O,{height:650,width:"100%"}),0!==o.a.length?(0,v.jsxs)(c.xu,{m:"auto",gap:"30px",children:[(0,v.jsx)(d.X,{mb:"10px",children:"You might be interested in"}),(0,v.jsx)(c.xu,{display:"flex",flexWrap:"wrap",gap:"30px",justifyContent:"space-evenly",children:F.map((function(e){console.log(e,"data for all products");var n=e.pro_name.replace(" ","").replace(" ","");return console.log(n,e.pro_name,"name of single product"),(0,v.jsx)(h.U,{referLink:!1,onClick:function(){return w("")},heading:e.pro_name?e.pro_name:"LoudSpeaker",icon:"".concat(j.Z.imageLink,"/").concat(e.pro_image),href:"/productDetails/".concat(e.catid,"/").concat(e.showcaseid,"/").concat(n)})}))}),0!==o.a.length?(0,v.jsx)(m.Z,{totalPosts:o.a.length/8,postsPerPage:4,setCurrentPage:Z,currentPage:B}):(0,v.jsx)(p.O,{height:50,width:"100%"})]}):(0,v.jsx)(p.O,{height:450,width:"100%"}),(0,v.jsx)(C,{isOpen:U,imageUrl:X,onClose:function(){D(!1),A("")}})]})},P=i.memo(k)}}]);
//# sourceMappingURL=106.8937ccf5.chunk.js.map