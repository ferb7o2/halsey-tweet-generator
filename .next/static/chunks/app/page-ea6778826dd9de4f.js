(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9430:function(e,t,n){Promise.resolve().then(n.t.bind(n,30,23)),Promise.resolve().then(n.bind(n,3552))},372:function(e){e.exports={btn:"generateBtn_btn__fNTIy"}},30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,o=n(2648).Z,i=n(1598).Z,a=n(7273).Z,l=i(n(5784)),s=o(n(5322)),u=n(9642),d=n(931),c=n(601);n(2437);var f=o(n(7112));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,n,o,i,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===n&&a(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,s=!1;o.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{l=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let v=l.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:o,widthInt:i,qualityInt:s,className:u,imgStyle:d,blurStyle:c,isLazy:f,fill:p,placeholder:g,loading:m,srcString:v,config:y,unoptimized:b,loader:_,onLoadRef:w,onLoadingCompleteRef:S,setBlurComplete:C,setShowAltText:E,onLoad:x,onError:O}=e,j=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=f?"lazy":m,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},j,n,{width:i,height:o,decoding:"async","data-nimg":p?"fill":"1",className:u,loading:m,style:r({},d,c),ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(O&&(e.src=e.src),e.complete&&h(e,v,g,w,S,C,b))},[v,g,w,S,C,O,b,t]),onLoad:e=>{let t=e.currentTarget;h(t,v,g,w,S,C,b)},onError:e=>{E(!0),"blur"===g&&C(!0),O&&O(e)}})))}),y=l.forwardRef((e,t)=>{let n,o;var i,{src:h,sizes:y,unoptimized:b=!1,priority:_=!1,loading:w,className:S,quality:C,width:E,height:x,fill:O,style:j,onLoad:P,onLoadingComplete:k,placeholder:I="empty",blurDataURL:z,layout:A,objectFit:R,objectPosition:M,lazyBoundary:L,lazyRoot:D}=e,N=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let U=l.useContext(c.ImageConfigContext),T=l.useMemo(()=>{let e=p||U||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:n})},[U]),B=N,Z=B.loader||f.default;delete B.loader;let F="__next_img_default"in Z;if(F){if("custom"===T.loader)throw Error('Image with src "'.concat(h,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let W=Z;Z=e=>{let{config:t}=e,n=a(e,["config"]);return W(n)}}if(A){"fill"===A&&(O=!0);let G={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];G&&(j=r({},j,G));let V={responsive:"100vw",fill:"100vw"}[A];V&&!y&&(y=V)}let q="",$=m(E),H=m(x);if("object"==typeof(i=h)&&(g(i)||void 0!==i.src)){let J=g(h)?h.default:h;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(n=J.blurWidth,o=J.blurHeight,z=z||J.blurDataURL,q=J.src,!O){if($||H){if($&&!H){let Y=$/J.width;H=Math.round(J.height*Y)}else if(!$&&H){let K=H/J.height;$=Math.round(J.width*K)}}else $=J.width,H=J.height}}let Q=!_&&("lazy"===w||void 0===w);((h="string"==typeof h?h:q).startsWith("data:")||h.startsWith("blob:"))&&(b=!0,Q=!1),T.unoptimized&&(b=!0),F&&h.endsWith(".svg")&&!T.dangerouslyAllowSVG&&(b=!0);let[X,ee]=l.useState(!1),[et,en]=l.useState(!1),er=m(C),eo=Object.assign(O?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:M}:{},et?{}:{color:"transparent"},j),ei="blur"===I&&z&&!X?{backgroundSize:eo.objectFit||"cover",backgroundPosition:eo.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(u.getImageBlurSvg({widthInt:$,heightInt:H,blurWidth:n,blurHeight:o,blurDataURL:z}),'")')}:{},ea=function(e){let{config:t,src:n,unoptimized:r,width:o,quality:i,sizes:a,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,n){let{deviceSizes:r,allSizes:o}=e;if(n){let i=/(^|\s)(1?\d?\d)vw/g,a=[];for(let l;l=i.exec(n);l)a.push(parseInt(l[2]));if(a.length){let s=.01*Math.min(...a);return{widths:o.filter(e=>e>=r[0]*s),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let u=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:u,kind:"x"}}(t,o,a),d=s.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:s.map((e,r)=>"".concat(l({config:t,src:n,quality:i,width:e})," ").concat("w"===u?e:r+1).concat(u)).join(", "),src:l({config:t,src:n,quality:i,width:s[d]})}}({config:T,src:h,unoptimized:b,width:$,quality:er,sizes:y,loader:Z}),el=h,es={imageSrcSet:ea.srcSet,imageSizes:ea.sizes,crossOrigin:B.crossOrigin},eu=l.useRef(P);l.useEffect(()=>{eu.current=P},[P]);let ed=l.useRef(k);l.useEffect(()=>{ed.current=k},[k]);let ec=r({isLazy:Q,imgAttributes:ea,heightInt:H,widthInt:$,qualityInt:er,className:S,imgStyle:eo,blurStyle:ei,loading:w,config:T,fill:O,unoptimized:b,placeholder:I,loader:Z,srcString:el,onLoadRef:eu,onLoadingCompleteRef:ed,setBlurComplete:ee,setShowAltText:en},B);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},ec,{ref:t})),_?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ea.src+ea.srcSet+ea.sizes,rel:"preload",as:"image",href:ea.srcSet?void 0:ea.src},es))):null)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1697:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(2648).Z)(n(5784));let o=r.default.createContext({});t.AmpStateContext=o},3996:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){let{ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e||t&&n}},5322:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var r=n(6495).Z,o=n(2648).Z,i=(0,n(1598).Z)(n(5784)),a=o(n(9914)),l=n(1697),s=n(8385),u=n(3996);function d(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(2437);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(c,[]).reverse().concat(d(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return o=>{let i=!0,a=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){a=!0;let l=o.key.slice(o.key.indexOf("$")+1);e.has(l)?i=!1:e.add(l)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let s=0,u=f.length;s<u;s++){let d=f[s];if(o.props.hasOwnProperty(d)){if("charSet"===d)n.has(d)?i=!1:n.add(d);else{let c=o.props[d],p=r[d]||new Set;("name"!==d||!a)&&p.has(c)?i=!1:(p.add(c),r[d]=p)}}}}return i}}()).reverse().map((e,t)=>{let o=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let a=r({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,i.default.cloneElement(e,a)}return i.default.cloneElement(e,{key:o})})}t.default=function(e){let{children:t}=e,n=i.useContext(l.AmpStateContext),r=i.useContext(s.HeadManagerContext);return i.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:u.isInAmpMode(n)},t)},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9642:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:o,blurDataURL:i}=e,a=r||t,l=o||n,s=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&o?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(i,"'/%3E%3C/svg%3E")}},601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ImageConfigContext=void 0;var r=(0,n(2648).Z)(n(5784)),o=n(931);let i=r.default.createContext(o.imageConfigDefault);t.ImageConfigContext=i},931:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0,t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"],t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",remotePatterns:[],unoptimized:!1}},7112:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},9914:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}if(o){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),l()}return i(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null};var r=(0,n(1598).Z)(n(5784));let o=!1,i=o?()=>{}:r.useLayoutEffect,a=o?()=>{}:r.useEffect},2437:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warnOnce=void 0;let n=e=>{};t.warnOnce=n},3552:function(e,t,n){"use strict";n.r(t);var r=n(1844),o=n(9332);n(5784);var i=n(372),a=n.n(i);t.default=function(){let e=(0,o.useRouter)();async function t(){e.refresh()}return(0,r.jsx)("button",{className:a().btn,onClick:t,children:"Generate new tweet"})}},9803:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(5784),o=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};t.jsx=function(e,t,n){var r,s={},u=null,d=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:d,props:s,_owner:a.current}}},1844:function(e,t,n){"use strict";e.exports=n(9803)},9332:function(e,t,n){e.exports=n(19)}},function(e){e.O(0,[17,744],function(){return e(e.s=9430)}),_N_E=e.O()}]);