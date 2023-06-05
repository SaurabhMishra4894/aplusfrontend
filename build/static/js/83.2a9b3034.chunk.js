"use strict";(self.webpackChunkaplusaudio=self.webpackChunkaplusaudio||[]).push([[83],{8094:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var r=t(390),a=t(7795),i=t(9920),c=t(3423),o=t(4744),l=t(1375),s=t(2559),u=(0,l.Pi)((function(){return(0,s.jsx)(a.xu,{as:"section",children:o.Z.footer?(0,s.jsx)(i.z,{className:"goupButton",variant:"solid",onClick:function(){return window.scrollTo(0,0)},children:(0,s.jsx)(c.gtS,{})}):""})})),d=r.memo(u)},6069:function(n,e,t){t.d(e,{w_:function(){return s}});var r=t(390),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),c=function(){return c=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var a in e=arguments[t])Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n},c.apply(this,arguments)},o=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]])}return t};function l(n){return n&&n.map((function(n,e){return r.createElement(n.tag,c({key:e},n.attr),l(n.child))}))}function s(n){return function(e){return r.createElement(u,c({attr:c({},n.attr)},e),l(n.child))}}function u(n){var e=function(e){var t,a=n.attr,i=n.size,l=n.title,s=o(n,["attr","size","title"]),u=i||e.size||"1em";return e.className&&(t=e.className),n.className&&(t=(t?t+" ":"")+n.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,a,s,{className:t,style:c(c({color:n.color||e.color},e.style),n.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),n.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(n){return e(n)})):e(a)}},9920:function(n,e,t){t.d(e,{z:function(){return w}});var r=t(5987),a=t(1413),i=t(9439),c=t(390);var o=(0,t(7390).k)({strict:!1,name:"ButtonGroupContext"}),l=(0,i.Z)(o,2),s=(l[0],l[1]),u=t(5889),d=t(6984),f=t(2559),m=["children","className"];function p(n){var e=n.children,t=n.className,i=(0,r.Z)(n,m),o=(0,c.isValidElement)(e)?(0,c.cloneElement)(e,{"aria-hidden":!0,focusable:!1}):e,l=(0,d.cx)("chakra-button__icon",t);return(0,f.jsx)(u.m.span,(0,a.Z)((0,a.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},i),{},{className:l,children:o}))}p.displayName="ButtonIcon";var h=t(4942),v=t(6238),g=["label","placement","spacing","children","className","__css"];function y(n){var e=n.label,t=n.placement,i=n.spacing,o=void 0===i?"0.5rem":i,l=n.children,s=void 0===l?(0,f.jsx)(v.$,{color:"currentColor",width:"1em",height:"1em"}):l,m=n.className,p=n.__css,y=(0,r.Z)(n,g),x=(0,d.cx)("chakra-button__spinner",m),b="start"===t?"marginEnd":"marginStart",Z=(0,c.useMemo)((function(){var n;return(0,a.Z)((n={display:"flex",alignItems:"center",position:e?"relative":"absolute"},(0,h.Z)(n,b,e?o:0),(0,h.Z)(n,"fontSize","1em"),(0,h.Z)(n,"lineHeight","normal"),n),p)}),[p,e,b,o]);return(0,f.jsx)(u.m.div,(0,a.Z)((0,a.Z)({className:x},y),{},{__css:Z,children:s}))}y.displayName="ButtonSpinner";var x=t(1007),b=t(5429),Z=t(4056),N=t(4874),j=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],w=(0,b.G)((function(n,e){var t=s(),o=(0,Z.mq)("Button",(0,a.Z)((0,a.Z)({},t),n)),l=(0,N.Lr)(n),m=l.isDisabled,p=void 0===m?null==t?void 0:t.isDisabled:m,h=l.isLoading,v=l.isActive,g=l.children,b=l.leftIcon,w=l.rightIcon,k=l.loadingText,S=l.iconSpacing,C=void 0===S?"0.5rem":S,I=l.type,O=l.spinner,E=l.spinnerPlacement,B=void 0===E?"start":E,P=l.className,z=l.as,q=(0,r.Z)(l,j),A=(0,c.useMemo)((function(){var n=(0,a.Z)((0,a.Z)({},null==o?void 0:o._focus),{},{zIndex:1});return(0,a.Z)((0,a.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},o),!!t&&{_focus:n})}),[o,t]),T=function(n){var e=(0,c.useState)(!n),t=(0,i.Z)(e,2),r=t[0],a=t[1];return{ref:(0,c.useCallback)((function(n){n&&a("BUTTON"===n.tagName)}),[]),type:r?"button":void 0}}(z),D=T.ref,L=T.type,M={rightIcon:w,leftIcon:b,iconSpacing:C,children:g};return(0,f.jsxs)(u.m.button,(0,a.Z)((0,a.Z)({ref:(0,x.qq)(e,D),as:z,type:null!=I?I:L,"data-active":(0,d.PB)(v),"data-loading":(0,d.PB)(h),__css:A,className:(0,d.cx)("chakra-button",P)},q),{},{disabled:p||h,children:[h&&"start"===B&&(0,f.jsx)(y,{className:"chakra-button__spinner--start",label:k,placement:"start",spacing:C,children:O}),h?k||(0,f.jsx)(u.m.span,{opacity:0,children:(0,f.jsx)(_,(0,a.Z)({},M))}):(0,f.jsx)(_,(0,a.Z)({},M)),h&&"end"===B&&(0,f.jsx)(y,{className:"chakra-button__spinner--end",label:k,placement:"end",spacing:C,children:O})]}))}));function _(n){var e=n.leftIcon,t=n.rightIcon,r=n.children,a=n.iconSpacing;return(0,f.jsxs)(f.Fragment,{children:[e&&(0,f.jsx)(p,{marginEnd:a,children:e}),r,t&&(0,f.jsx)(p,{marginStart:a,children:t})]})}w.displayName="Button"},1007:function(n,e,t){t.d(e,{lq:function(){return a},qq:function(){return i}});var r=t(390);function a(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(n){e.forEach((function(e){!function(n,e){if(null!=n)if("function"!==typeof n)try{n.current=e}catch(t){throw new Error("Cannot assign value '".concat(e,"' to ref '").concat(n,"'"))}else n(e)}(e,n)}))}}function i(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return(0,r.useMemo)((function(){return a.apply(void 0,e)}),e)}}}]);
//# sourceMappingURL=83.2a9b3034.chunk.js.map