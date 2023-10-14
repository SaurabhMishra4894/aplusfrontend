"use strict";(self.webpackChunkaplusaudio=self.webpackChunkaplusaudio||[]).push([[683],{7065:function(n,e,r){r.d(e,{AV:function(){return i},XQ:function(){return t},Yq:function(){return c}});var a=r(7178),i=Object.freeze(["base","sm","md","lg","xl","2xl"]);function t(n,e){return Array.isArray(n)?n.map((function(n){return null===n?null:e(n)})):(0,a.Kn)(n)?Object.keys(n).reduce((function(r,a){return r[a]=e(n[a]),r}),{}):null!=n?e(n):null}function c(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,r={};return n.forEach((function(n,a){var i=e[a];null!=n&&(r[i]=n)})),r}},4311:function(n,e,r){r.d(e,{z:function(){return _}});var a=r(4155),i=r(2595),t=r(6234),c=r(3330);var o=(0,r(8486).k)({strict:!1,name:"ButtonGroupContext"}),l=(0,t.Z)(o,2),s=(l[0],l[1]),u=r(2217),d=r(7178),f=r(3726),m=["children","className"];function g(n){var e=n.children,r=n.className,t=(0,a.Z)(n,m),o=(0,c.isValidElement)(e)?(0,c.cloneElement)(e,{"aria-hidden":!0,focusable:!1}):e,l=(0,d.cx)("chakra-button__icon",r);return(0,f.jsx)(u.m.span,(0,i.Z)((0,i.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},t),{},{className:l,children:o}))}g.displayName="ButtonIcon";var h=r(2481),p=r(5046),v=["label","placement","spacing","children","className","__css"];function x(n){var e=n.label,r=n.placement,t=n.spacing,o=void 0===t?"0.5rem":t,l=n.children,s=void 0===l?(0,f.jsx)(p.$,{color:"currentColor",width:"1em",height:"1em"}):l,m=n.className,g=n.__css,x=(0,a.Z)(n,v),b=(0,d.cx)("chakra-button__spinner",m),y="start"===r?"marginEnd":"marginStart",Z=(0,c.useMemo)((function(){var n;return(0,i.Z)((n={display:"flex",alignItems:"center",position:e?"relative":"absolute"},(0,h.Z)(n,y,e?o:0),(0,h.Z)(n,"fontSize","1em"),(0,h.Z)(n,"lineHeight","normal"),n),g)}),[g,e,y,o]);return(0,f.jsx)(u.m.div,(0,i.Z)((0,i.Z)({className:b},x),{},{__css:Z,children:s}))}x.displayName="ButtonSpinner";var b=r(5705),y=r(7628),Z=r(9475),k=r(2528),N=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],_=(0,y.G)((function(n,e){var r=s(),o=(0,Z.mq)("Button",(0,i.Z)((0,i.Z)({},r),n)),l=(0,k.Lr)(n),m=l.isDisabled,g=void 0===m?null==r?void 0:r.isDisabled:m,h=l.isLoading,p=l.isActive,v=l.children,y=l.leftIcon,_=l.rightIcon,S=l.loadingText,I=l.iconSpacing,w=void 0===I?"0.5rem":I,E=l.type,W=l.spinner,L=l.spinnerPlacement,B=void 0===L?"start":L,C=l.className,O=l.as,A=(0,a.Z)(l,N),q=(0,c.useMemo)((function(){var n=(0,i.Z)((0,i.Z)({},null==o?void 0:o._focus),{},{zIndex:1});return(0,i.Z)((0,i.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},o),!!r&&{_focus:n})}),[o,r]),G=function(n){var e=(0,c.useState)(!n),r=(0,t.Z)(e,2),a=r[0],i=r[1];return{ref:(0,c.useCallback)((function(n){n&&i("BUTTON"===n.tagName)}),[]),type:a?"button":void 0}}(O),P=G.ref,F=G.type,T={rightIcon:_,leftIcon:y,iconSpacing:w,children:v};return(0,f.jsxs)(u.m.button,(0,i.Z)((0,i.Z)({ref:(0,b.qq)(e,P),as:O,type:null!=E?E:F,"data-active":(0,d.PB)(p),"data-loading":(0,d.PB)(h),__css:q,className:(0,d.cx)("chakra-button",C)},A),{},{disabled:g||h,children:[h&&"start"===B&&(0,f.jsx)(x,{className:"chakra-button__spinner--start",label:S,placement:"start",spacing:w,children:W}),h?S||(0,f.jsx)(u.m.span,{opacity:0,children:(0,f.jsx)(j,(0,i.Z)({},T))}):(0,f.jsx)(j,(0,i.Z)({},T)),h&&"end"===B&&(0,f.jsx)(x,{className:"chakra-button__spinner--end",label:S,placement:"end",spacing:w,children:W})]}))}));function j(n){var e=n.leftIcon,r=n.rightIcon,a=n.children,i=n.iconSpacing;return(0,f.jsxs)(f.Fragment,{children:[e&&(0,f.jsx)(g,{marginEnd:i,children:e}),a,r&&(0,f.jsx)(g,{marginStart:i,children:r})]})}_.displayName="Button"},7594:function(n,e,r){r.d(e,{E:function(){return h}});var a=r(2595),i=r(4155),t=r(1),c=r(7628),o=r(3726),l=["htmlWidth","htmlHeight","alt"],s=(0,c.G)((function(n,e){var r=n.htmlWidth,t=n.htmlHeight,c=n.alt,s=(0,i.Z)(n,l);return(0,o.jsx)("img",(0,a.Z)({width:r,height:t,ref:e,alt:c},s))}));s.displayName="NativeImage";var u=r(6234),d=r(8127),f=r(3330);var m=r(2217),g=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"];var h=(0,c.G)((function(n,e){var r=n.fallbackSrc,c=n.fallback,l=n.src,h=n.srcSet,p=n.align,v=n.fit,x=n.loading,b=n.ignoreFallback,y=n.crossOrigin,Z=n.fallbackStrategy,k=void 0===Z?"beforeLoadOrError":Z,N=n.referrerPolicy,_=(0,i.Z)(n,g),j=null!=x||b||!(void 0!==r||void 0!==c),S=function(n){var e=n.loading,r=n.src,a=n.srcSet,i=n.onLoad,t=n.onError,c=n.crossOrigin,o=n.sizes,l=n.ignoreFallback,s=(0,f.useState)("pending"),m=(0,u.Z)(s,2),g=m[0],h=m[1];(0,f.useEffect)((function(){h(r?"loading":"pending")}),[r]);var p=(0,f.useRef)(),v=(0,f.useCallback)((function(){if(r){x();var n=new Image;n.src=r,c&&(n.crossOrigin=c),a&&(n.srcset=a),o&&(n.sizes=o),e&&(n.loading=e),n.onload=function(n){x(),h("loaded"),null==i||i(n)},n.onerror=function(n){x(),h("failed"),null==t||t(n)},p.current=n}}),[r,c,a,o,i,t,e]),x=function(){p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,d.G)((function(){if(!l)return"loading"===g&&v(),function(){x()}}),[g,v,l]),l?"loaded":g}((0,a.Z)((0,a.Z)({},n),{},{crossOrigin:y,ignoreFallback:j})),I=function(n,e){return"loaded"!==n&&"beforeLoadOrError"===e||"failed"===n&&"onError"===e}(S,k),w=(0,a.Z)({ref:e,objectFit:v,objectPosition:p},j?_:function(n){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=Object.assign({},n),i=(0,t.Z)(r);try{for(i.s();!(e=i.n()).done;){var c=e.value;c in a&&delete a[c]}}catch(o){i.e(o)}finally{i.f()}return a}(_,["onError","onLoad"]));return I?c||(0,o.jsx)(m.m.img,(0,a.Z)({as:s,className:"chakra-image__placeholder",src:r},w)):(0,o.jsx)(m.m.img,(0,a.Z)({as:s,src:l,srcSet:h,crossOrigin:y,loading:x,referrerPolicy:N,className:"chakra-image"},w))}));h.displayName="Image"},3653:function(n,e,r){r.d(e,{x:function(){return m}});var a=r(2595),i=r(4155),t=r(7628),c=r(9475),o=r(2528),l=r(2217),s=r(7178),u=r(300),d=r(3726),f=["className","align","decoration","casing"],m=(0,t.G)((function(n,e){var r=(0,c.mq)("Text",n),t=(0,o.Lr)(n),m=(t.className,t.align,t.decoration,t.casing,(0,i.Z)(t,f)),g=(0,u.o)({textAlign:n.align,textDecoration:n.decoration,textTransform:n.casing});return(0,d.jsx)(l.m.p,(0,a.Z)((0,a.Z)((0,a.Z)({ref:e,className:(0,s.cx)("chakra-text",n.className)},g),m),{},{__css:r}))}));m.displayName="Text"},1416:function(n,e,r){r.d(e,{X:function(){return f}});var a=r(2595),i=r(4155),t=r(7628),c=r(9475),o=r(2528),l=r(2217),s=r(7178),u=r(3726),d=["className"],f=(0,t.G)((function(n,e){var r=(0,c.mq)("Heading",n),t=(0,o.Lr)(n),f=(t.className,(0,i.Z)(t,d));return(0,u.jsx)(l.m.h2,(0,a.Z)((0,a.Z)({ref:e,className:(0,s.cx)("chakra-heading",n.className)},f),{},{__css:r}))}));f.displayName="Heading"},7570:function(n,e,r){r.d(e,{K:function(){return g}});var a=r(2595),i=r(4155),t=r(2217),c=r(3726),o=function(n){return(0,c.jsx)(t.m.div,(0,a.Z)((0,a.Z)({className:"chakra-stack__item"},n),{},{__css:(0,a.Z)({display:"inline-block",flex:"0 0 auto",minWidth:0},n.__css)}))};o.displayName="StackItem";var l=r(7065);var s=r(1087),u=r(7178),d=r(7628),f=r(3330),m=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],g=(0,d.G)((function(n,e){var r=n.isInline,d=n.direction,g=n.align,h=n.justify,p=n.spacing,v=void 0===p?"0.5rem":p,x=n.wrap,b=n.children,y=n.divider,Z=n.className,k=n.shouldWrapChildren,N=(0,i.Z)(n,m),_=r?"row":null!=d?d:"column",j=(0,f.useMemo)((function(){return function(n){var e=n.spacing,r=n.direction,a={column:{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,l.XQ)(r,(function(n){return a[n]}))}}({spacing:v,direction:_})}),[v,_]),S=!!y,I=!k&&!S,w=(0,f.useMemo)((function(){var n=(0,s.W)(b);return I?n:n.map((function(e,r){var a="undefined"!==typeof e.key?e.key:r,i=r+1===n.length,t=k?(0,c.jsx)(o,{children:e},a):e;if(!S)return t;var l=(0,f.cloneElement)(y,{__css:j}),s=i?null:l;return(0,c.jsxs)(f.Fragment,{children:[t,s]},a)}))}),[y,j,S,I,k,b]),E=(0,u.cx)("chakra-stack",Z);return(0,c.jsx)(t.m.div,(0,a.Z)((0,a.Z)({ref:e,display:"flex",alignItems:g,justifyContent:h,flexDirection:_,flexWrap:x,gap:S?void 0:v,className:E},N),{},{children:w}))}));g.displayName="Stack"},1087:function(n,e,r){r.d(e,{W:function(){return i}});var a=r(3330);function i(n){return a.Children.toArray(n).filter((function(n){return(0,a.isValidElement)(n)}))}},5705:function(n,e,r){r.d(e,{lq:function(){return i},qq:function(){return t}});var a=r(3330);function i(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return function(n){e.forEach((function(e){!function(n,e){if(null!=n)if("function"!==typeof n)try{n.current=e}catch(r){throw new Error("Cannot assign value '".concat(e,"' to ref '").concat(n,"'"))}else n(e)}(e,n)}))}}function t(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return(0,a.useMemo)((function(){return i.apply(void 0,e)}),e)}}}]);
//# sourceMappingURL=683.c7df0c18.chunk.js.map