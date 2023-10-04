"use strict";(self.webpackChunkaplusaudio=self.webpackChunkaplusaudio||[]).push([[260],{260:function(n,e,a){a.r(e);var t=a(3069),i=a(1416),r=a(3653),c=a(4311),s=a(7866),o=a(3330),l=a(3726),u=function(){return(0,o.useEffect)((function(){window.scrollTo(0,0)}),[]),(0,l.jsxs)(t.xu,{m:"auto",mt:160,py:10,px:6,textAlign:"center",maxW:1200,as:"section",children:[(0,l.jsx)(i.X,{display:"inline-block",as:"h2",size:"2xl",bgGradient:"linear(to-r, teal.400, teal.600)",backgroundClip:"text",children:"404"}),(0,l.jsxs)(t.xu,{m:"auto",display:"flex",alignItems:"center",flexDir:"column",children:[(0,l.jsx)(r.x,{fontSize:"18px",mt:3,mb:2,children:"Page Not Found"}),(0,l.jsx)(r.x,{color:"gray.500",mb:6,children:"The page you're looking for does not seem to exist"})]}),(0,l.jsx)(s.rU,{to:"/",children:(0,l.jsx)(c.z,{colorScheme:"teal",bgGradient:"linear(to-r, teal.400, teal.500, teal.600)",color:"white",variant:"solid",children:"Go to Home"})})]})};e.default=o.memo(u)},4311:function(n,e,a){a.d(e,{z:function(){return _}});var t=a(4155),i=a(2595),r=a(6234),c=a(3330);var s=(0,a(8486).k)({strict:!1,name:"ButtonGroupContext"}),o=(0,r.Z)(s,2),l=(o[0],o[1]),u=a(2217),d=a(7178),m=a(3726),f=["children","className"];function p(n){var e=n.children,a=n.className,r=(0,t.Z)(n,f),s=(0,c.isValidElement)(e)?(0,c.cloneElement)(e,{"aria-hidden":!0,focusable:!1}):e,o=(0,d.cx)("chakra-button__icon",a);return(0,m.jsx)(u.m.span,(0,i.Z)((0,i.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},r),{},{className:o,children:s}))}p.displayName="ButtonIcon";var h=a(2481),x=a(5046),g=["label","placement","spacing","children","className","__css"];function v(n){var e=n.label,a=n.placement,r=n.spacing,s=void 0===r?"0.5rem":r,o=n.children,l=void 0===o?(0,m.jsx)(x.$,{color:"currentColor",width:"1em",height:"1em"}):o,f=n.className,p=n.__css,v=(0,t.Z)(n,g),Z=(0,d.cx)("chakra-button__spinner",f),b="start"===a?"marginEnd":"marginStart",N=(0,c.useMemo)((function(){var n;return(0,i.Z)((n={display:"flex",alignItems:"center",position:e?"relative":"absolute"},(0,h.Z)(n,b,e?s:0),(0,h.Z)(n,"fontSize","1em"),(0,h.Z)(n,"lineHeight","normal"),n),p)}),[p,e,b,s]);return(0,m.jsx)(u.m.div,(0,i.Z)((0,i.Z)({className:Z},v),{},{__css:N,children:l}))}v.displayName="ButtonSpinner";var Z=a(5705),b=a(7628),N=a(9475),y=a(2528),j=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],_=(0,b.G)((function(n,e){var a=l(),s=(0,N.mq)("Button",(0,i.Z)((0,i.Z)({},a),n)),o=(0,y.Lr)(n),f=o.isDisabled,p=void 0===f?null==a?void 0:a.isDisabled:f,h=o.isLoading,x=o.isActive,g=o.children,b=o.leftIcon,_=o.rightIcon,S=o.loadingText,I=o.iconSpacing,w=void 0===I?"0.5rem":I,T=o.type,q=o.spinner,B=o.spinnerPlacement,C=void 0===B?"start":B,A=o.className,E=o.as,G=(0,t.Z)(o,j),z=(0,c.useMemo)((function(){var n=(0,i.Z)((0,i.Z)({},null==s?void 0:s._focus),{},{zIndex:1});return(0,i.Z)((0,i.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},s),!!a&&{_focus:n})}),[s,a]),D=function(n){var e=(0,c.useState)(!n),a=(0,r.Z)(e,2),t=a[0],i=a[1];return{ref:(0,c.useCallback)((function(n){n&&i("BUTTON"===n.tagName)}),[]),type:t?"button":void 0}}(E),L=D.ref,P=D.type,H={rightIcon:_,leftIcon:b,iconSpacing:w,children:g};return(0,m.jsxs)(u.m.button,(0,i.Z)((0,i.Z)({ref:(0,Z.qq)(e,L),as:E,type:null!=T?T:P,"data-active":(0,d.PB)(x),"data-loading":(0,d.PB)(h),__css:z,className:(0,d.cx)("chakra-button",A)},G),{},{disabled:p||h,children:[h&&"start"===C&&(0,m.jsx)(v,{className:"chakra-button__spinner--start",label:S,placement:"start",spacing:w,children:q}),h?S||(0,m.jsx)(u.m.span,{opacity:0,children:(0,m.jsx)(k,(0,i.Z)({},H))}):(0,m.jsx)(k,(0,i.Z)({},H)),h&&"end"===C&&(0,m.jsx)(v,{className:"chakra-button__spinner--end",label:S,placement:"end",spacing:w,children:q})]}))}));function k(n){var e=n.leftIcon,a=n.rightIcon,t=n.children,i=n.iconSpacing;return(0,m.jsxs)(m.Fragment,{children:[e&&(0,m.jsx)(p,{marginEnd:i,children:e}),t,a&&(0,m.jsx)(p,{marginStart:i,children:a})]})}_.displayName="Button"},3653:function(n,e,a){a.d(e,{x:function(){return f}});var t=a(2595),i=a(4155),r=a(7628),c=a(9475),s=a(2528),o=a(2217),l=a(7178),u=a(300),d=a(3726),m=["className","align","decoration","casing"],f=(0,r.G)((function(n,e){var a=(0,c.mq)("Text",n),r=(0,s.Lr)(n),f=(r.className,r.align,r.decoration,r.casing,(0,i.Z)(r,m)),p=(0,u.o)({textAlign:n.align,textDecoration:n.decoration,textTransform:n.casing});return(0,d.jsx)(o.m.p,(0,t.Z)((0,t.Z)((0,t.Z)({ref:e,className:(0,l.cx)("chakra-text",n.className)},p),f),{},{__css:a}))}));f.displayName="Text"},1416:function(n,e,a){a.d(e,{X:function(){return m}});var t=a(2595),i=a(4155),r=a(7628),c=a(9475),s=a(2528),o=a(2217),l=a(7178),u=a(3726),d=["className"],m=(0,r.G)((function(n,e){var a=(0,c.mq)("Heading",n),r=(0,s.Lr)(n),m=(r.className,(0,i.Z)(r,d));return(0,u.jsx)(o.m.h2,(0,t.Z)((0,t.Z)({ref:e,className:(0,l.cx)("chakra-heading",n.className)},m),{},{__css:a}))}));m.displayName="Heading"},300:function(n,e,a){function t(n){var e=Object.assign({},n);for(var a in e)void 0===e[a]&&delete e[a];return e}a.d(e,{o:function(){return t}})},5705:function(n,e,a){a.d(e,{lq:function(){return i},qq:function(){return r}});var t=a(3330);function i(){for(var n=arguments.length,e=new Array(n),a=0;a<n;a++)e[a]=arguments[a];return function(n){e.forEach((function(e){!function(n,e){if(null!=n)if("function"!==typeof n)try{n.current=e}catch(a){throw new Error("Cannot assign value '".concat(e,"' to ref '").concat(n,"'"))}else n(e)}(e,n)}))}}function r(){for(var n=arguments.length,e=new Array(n),a=0;a<n;a++)e[a]=arguments[a];return(0,t.useMemo)((function(){return i.apply(void 0,e)}),e)}}}]);
//# sourceMappingURL=260.afac5047.chunk.js.map