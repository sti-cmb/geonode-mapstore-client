(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[41103,47310],{921914:(e,t,r)=>{"use strict";r.d(t,{XL:()=>o,km:()=>i,Ih:()=>a,Xw:()=>l,Pn:()=>c,DZ:()=>s,e8:()=>u,E0:()=>f,F9:()=>d,X_:()=>p,pb:()=>m,qb:()=>y,Re:()=>b,ih:()=>v,xy:()=>g,jL:()=>O,oz:()=>E,ph:()=>h,lF:()=>S,gG:()=>j,cb:()=>P,GI:()=>C,B1:()=>I,fv:()=>N,gc:()=>w,zX:()=>_,ZF:()=>T,Zb:()=>R,DW:()=>D,Xp:()=>A,Fm:()=>F,sV:()=>k,LU:()=>Z,XP:()=>G,WU:()=>x,JB:()=>U,g:()=>z,ws:()=>M,HP:()=>Y,aN:()=>L,Pg:()=>H,u0:()=>X,TM:()=>W,PM:()=>K,lK:()=>B,sv:()=>V,MO:()=>$,oO:()=>Q,Mc:()=>J,Zw:()=>ee,RA:()=>te,am:()=>re,ZM:()=>ne,wm:()=>oe,Y$:()=>ie,Qu:()=>ae,kT:()=>le});var n=r(647310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",a="EXCEPTIONS_FEATURE_INFO",l="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",s="PURGE_MAPINFO_RESULTS",u="CHANGE_MAPINFO_FORMAT",f="SHOW_MAPINFO_MARKER",d="HIDE_MAPINFO_MARKER",p="SHOW_REVERSE_GEOCODE",m="HIDE_REVERSE_GEOCODE",y="GET_VECTOR_INFO",b="NO_QUERYABLE_LAYERS",v="CLEAR_WARNING",g="FEATURE_INFO_CLICK",O="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",E="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",h="TOGGLE_MAPINFO_STATE",S="UPDATE_CENTER_TO_MARKER",j="IDENTIFY:CHANGE_PAGE",P="IDENTIFY:CLOSE_IDENTIFY",C="IDENTIFY:CHANGE_FORMAT",I="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",N="IDENTIFY:EDIT_LAYER_FEATURES",w="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",_="IDENTIFY:SET_MAP_TRIGGER",T="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",R="IDENTIFY:SET_SHOW_IN_MAP_POPUP",D="IDENTIFY:IDENTIFY_IS_MOUNTED",A="IDENTIFY:INIT_PLUGIN";function F(e,t,r,n,i){return{type:o,data:t,reqId:e,requestParams:r,layerMetadata:n,layer:i}}function k(e,t,r,n){return{type:i,error:t,reqId:e,requestParams:r,layerMetadata:n}}function Z(){return{type:b}}function G(){return{type:v}}function x(e,t){return{type:c,reqId:e,request:t}}function U(e,t,r,n){return{type:y,layer:e,request:t,metadata:r,queryableLayers:n}}function z(){return{type:s}}function M(e){return{type:u,infoFormat:e}}function Y(){return{type:f}}function L(){return{type:d}}function q(e){return{type:p,reverseGeocodeData:e.data}}function H(e){return function(t){n.Z.reverseGeocode(e).then((function(e){t(q(e))})).catch((function(e){t(q(e))}))}}function X(){return{type:m}}function W(){return{type:h}}function K(e){return{type:S,status:e}}function B(e,t){return{type:g,point:e,layer:t,filterNameList:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],overrideParams:arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},itemId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:null}}function V(e){return{type:O,point:e}}function $(e){return{type:E,enabled:e}}function Q(e){return{type:j,index:e}}var J=function(){return{type:P}},ee=function(e){return{type:C,format:e}},te=function(e){return{type:I,showCoordinateEditor:e}},re=function(e){return{type:N,layer:e}},ne=function(e){return{type:w,query:e}},oe=function(e){return{type:_,trigger:e}},ie=function(e){return{type:R,value:e}},ae=function(e){return{type:D,isMounted:e}},le=function(e){return{type:A,cfg:e}}},647310:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(375875),o=r.n(n),i=r(472500),a=r.n(i),l=r(727418),c=r.n(l),s={format:"json",bounded:0,polygon_geojson:1,priority:5};const u={geocode:function(e,t){var r=c()({q:e},s,t||{}),n=a().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(e,t){var r=c()({lat:e.lat,lon:e.lng},t||{},s),n=a().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},807472:(e,t,r)=>{"use strict";r.d(t,{Z:()=>P});var n=r(727418),o=r.n(n),i=r(675263),a=r.n(i),l=r(124852),c=r.n(l),s=r(485294),u=r.n(s),f=r(472986),d=r.n(f),p=r(805346);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,S(n.key),n)}}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function h(e,t,r){return(t=S(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e){var t=function(e,t){if("object"!=m(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(t)?t:String(t)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(l,e);var t,r,n,i,a=(n=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(n);if(i){var r=E(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}(this,e)});function l(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return h(O(e=a.call.apply(a,[this].concat(r))),"renderLoading",(function(){return e.props.maskLoading?c().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},c().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},c().createElement(p.Z,{msgId:"loading"}),c().createElement(d(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),h(O(e),"renderRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),h(O(e),"hasRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),h(O(e),"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return t=l,(r=[{key:"render",value:function(){var e=this,t=c().createElement("div",{id:this.props.id,style:b({},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},c().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),c().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?c().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):c().createElement("span",null)),r=this.props.draggable?c().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,n=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?c().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:n,className:"fade in modal "+this.props.containerClassName,role:"dialog"},r):r}}])&&v(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(c().Component);h(j,"propTypes",{id:a().string.isRequired,style:a().object,backgroundStyle:a().object,className:a().string,maskLoading:a().bool,containerClassName:a().string,headerClassName:a().string,bodyClassName:a().string,footerClassName:a().string,onClickOut:a().func,modal:a().bool,start:a().object,draggable:a().bool,bounds:a().oneOfType([a().string,a().object])}),h(j,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const P=j},975480:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(124852),o=r.n(n);const i=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).style,t=void 0===e?{display:"inline-block"}:e;return o().createElement("div",{style:t,className:"mapstore-inline-loader"})}},399534:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(461365),o=r(356936);const i=(0,n.Z)(o.h_)},694745:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(124852),o=r.n(n),i=r(294184),a=r.n(i),l=r(480681),c=r(807472),s=r(80717),u=r(867076),f=r(819081),d=r.n(f),p=r(975480),m={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},y={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const b=(0,u.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,r=void 0!==t&&t,n=e.loading,i=e.loadingText,u=e.onClose,f=void 0===u?function(){}:u,b=e.title,v=void 0===b?"":b,g=e.clickOutEnabled,O=void 0===g||g,E=e.showClose,h=void 0===E||E,S=e.disabledClose,j=void 0!==S&&S,P=e.showFullscreen,C=void 0!==P&&P,I=e.fullscreenType,N=void 0===I?"full":I,w=e.buttons,_=void 0===w?[]:w,T=e.size,R=void 0===T?"":T,D=e.bodyClassName,A=void 0===D?"":D,F=e.children,k=e.draggable,Z=void 0!==k&&k,G=e.fullscreenState,x=e.onFullscreen,U=e.fade,z=void 0!==U&&U,M=e.fitContent,Y=e.modalClassName,L=void 0===Y?"":Y,q=e.dialogClassName,H=void 0===q?"":q,X=e.enableFooter,W=void 0===X||X,K=m[R]||"",B=C&&"expanded"===G&&y.className[N]||"",V=r?o().createElement("div",{className:"modal-fixed ".concat(L," ")+(Z?"ms-draggable":"")},o().createElement(c.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:O?f:function(){},containerClassName:"ms-resizable-modal",draggable:Z,modal:!0,className:a()("modal-dialog modal-content",K,B,H,{"ms-fit-content":M})},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},v),C&&y.className[N]&&o().createElement(l.Glyphicon,{className:"ms-header-btn",onClick:function(){return x("expanded"===G?"collapsed":"expanded")},glyph:y.glyph[G][N]}),h&&f&&o().createElement(l.Glyphicon,{glyph:"1-close",className:"ms-header-btn",onClick:f,disabled:j}))),o().createElement("div",{role:"body",className:A},F),W&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},n?o().createElement(p.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},n?i:null),o().createElement(s.Z,{buttons:_})))):null;return z?o().createElement(d(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},V):V}))},993451:(e,t,r)=>{"use strict";r.d(t,{Z:()=>E});var n=r(86638),o=r(675263),i=r.n(o),a=r(984596),l=r.n(a),c=r(701469),s=r.n(c),u=r(414293),f=r.n(u),d=r(747037),p=r.n(d),m=r(867076),y=["messages"];function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){var n;return n=function(e,t){if("object"!=b(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==b(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return(0,m.compose)((0,m.getContext)({messages:i().object}),(0,m.mapProps)((function(r){var o=r.messages,i=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(r,y);return g(g({},i),l()(e).reduce(function(e,t,r){return function(){var o=arguments.length>1?arguments[1]:void 0;return g(g({},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),{},O({},o,e[o]&&function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(s()(t))return t.map((function(o){var i=(0,n.S$)(e,o[r]||p()(o)&&o||"");return g(g({},o),{},O({},r,f()(i)?t:i))}));var o=(0,n.S$)(e,t);return f()(o)?t:o}(t,e[o],r)))}}(i,o,t),{}))})))}},925108:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(782904),o=r(727418),i=r.n(o),a=r(921914);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){var n;return n=function(e,t){if("object"!=l(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==l(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.kM:var r=t.property||"enabled";return i()({},e,u({},t.control,i()({},e[t.control],u({},r,!(e[t.control]||{})[r]))));case n.At:return!0===t.toggle&&e[t.control]&&e[t.control][t.property]===t.value?i()({},e,u({},t.control,i()({},e[t.control],u({},t.property,void 0)))):i()({},e,u({},t.control,i()({},e[t.control],u({},t.property,t.value))));case n.dc:return i()({},e,u({},t.control,i()({},e[t.control],t.properties)));case n.l:var o=Object.keys(e).filter((function(e){return-1===(t.skip||[]).indexOf(e)})).reduce((function(t,r){return i()(t,u({},r,i()({},e[r],!0===e[r].enabled?{enabled:!1}:{})))}),{});return i()({},e,o);case a.DW:return s(s({},e),{},{info:s(s({},e.info),{},{available:t.isMounted})});default:return e}}},793520:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(124852),o=r.n(n),i=r(480681);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}i.Dropdown.Item=i.MenuItem,i.Dropdown.Divider=function(e){return o().createElement(i.MenuItem,a({},e,{divider:!0}))};const l=i.Dropdown},881114:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>X});var n=r(124852),o=r.n(n),i=r(171703),a=r(22222),l=r(322843),c=r(782904),s=r(805346),u=r(800827),f=r(274621),d=r(303744),p=r(73443),m=r(925108),y=r(572036),b=r(162170),v=r(18576),g=r(675263),O=r.n(g),E=r(694745),h=r(480681),S=r(993451),j=r(532425),P=r(399534);function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var N=(0,S.Z)("placeholder")(h.FormControl);function w(e){var t=e.update,r=e.error,i=e.success,a=e.labelId,l=e.resource,c=e.contentId,u=e.saving,f=e.loading,d=e.enabled,p=e.onClose,m=e.onSave,y=e.onClear,b=e.hideDescription,v=e.copy,g=C((0,n.useState)(),2),O=g[0],S=g[1],I=C((0,n.useState)(""),2),w=I[0],_=I[1],T=C((0,n.useState)(""),2),R=T[0],D=T[1],A=C((0,n.useState)(),2),F=A[0],k=A[1],Z=(0,n.useRef)();Z.current={contentId:c,resource:l};var G=(0,n.useRef)(null);(0,n.useEffect)((function(){y()}),[d]),(0,n.useEffect)((function(){if(!f){var e=Z.current.resource||{};S(e.thumbnail_url),_(e.title),D(e.abstract),k(e.title?void 0:"error")}}),[d,f]);var x=f||u;return o().createElement(P.Z,null,o().createElement("div",{ref:G,onKeyUp:function(e){return e.stopPropagation(),(13===e.keyCode||"Enter"===e.code)&&(n=(r=v?{title:w,isUpdate:t,content:c,image:O,text:R,reload:!1}:{title:w,isUpdate:t,content:c,image:O,text:R,reload:!0}).title,o=r.isUpdate,i=r.content,a=r.image,l=r.text,s=r.reload,m(o?i:void 0,{thumbnail:a,name:n,description:l},s));var r,n,o,i,a,l,s}},o().createElement(E.Z,{title:o().createElement(s.Z,{msgId:a}),show:d,fitContent:!0,clickOutEnabled:!1,buttons:x?[]:[{text:o().createElement(s.Z,{msgId:"close"}),onClick:function(){return p()}},{text:o().createElement(s.Z,{msgId:a}),disabled:!!F,bsStyle:"primary",onClick:function(){return m(t?c:void 0,{thumbnail:O,name:w,description:R},!0)}}],onClose:x?null:function(){return p()}},r&&o().createElement(h.Alert,{bsStyle:"danger",style:{margin:0}},o().createElement("div",null,o().createElement(s.Z,{msgId:"map.mapError.errorDefault"}))),i&&o().createElement(h.Alert,{bsStyle:"success",style:{margin:0}},o().createElement("div",null,o().createElement(s.Z,{msgId:"saveDialog.saveSuccessMessage"}))),o().createElement(h.Form,{onSubmit:function(e){return e.preventDefault()}},o().createElement(h.FormGroup,{validationState:F},o().createElement(h.ControlLabel,null,o().createElement(s.Z,{msgId:"gnviewer.title"})),o().createElement(N,{autoFocus:!0,placeholder:"gnviewer.titlePlaceholder",value:w,onChange:function(e){_(e.target.value),k(e.target.value?void 0:"error")},onBlur:function(e){k(e.target.value?void 0:"error")}})),!b&&o().createElement(h.FormGroup,null,o().createElement(h.ControlLabel,null,o().createElement(s.Z,{msgId:"saveDialog.description"})),o().createElement(N,{placeholder:"saveDialog.descriptionPlaceholder",value:R,onChange:function(e){return D(e.target.value)}}))),x&&o().createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.8)",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"}},o().createElement(j.Z,{size:70})))))}w.propTypes={update:O().bool,labelId:O().string,contentId:O().oneOfType([O().string,O().number]),resource:O().object,loading:O().bool,enabled:O().bool,onClose:O().func,onSave:O().func,onInit:O().func,onClear:O().func,error:O().oneOfType([O().string,O().object]),success:O().oneOfType([O().string,O().object]),thumbnailOptions:O().object},w.defaultProps={update:!1,resource:{},loading:!1,enabled:!1,onClose:function(){},onSave:function(){},onInit:function(){},onClear:function(){},thumbnailOptions:{width:300,height:250,type:"image/jpeg",quality:.9,contain:!1}};const _=w;var T=r(76907),R=r(12530),D=r(535721),A=r(643892),F=r(452992),k=r(793520),Z=r(507412);function G(e){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(e)}var x=["resources","onSave","onCopy","isNew","closeOnSave","labelId"];function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U.apply(this,arguments)}function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){var n,o,i,a;n=e,o=t,i=r[t],a=function(e,t){if("object"!=G(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=G(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==G(a)?a:String(a))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Y=(0,i.connect)((0,a.P1)([function(e){var t,r;return null==e||null===(t=e.controls)||void 0===t||null===(r=t[R.zj.COPY_RESOURCE])||void 0===r?void 0:r.value},u._H,function(e){var t;return null==e||null===(t=e.gnresource)||void 0===t?void 0:t.loading},function(e){var t;return null==e||null===(t=e.gnsave)||void 0===t?void 0:t.saving},function(e){var t;return null==e||null===(t=e.gnsave)||void 0===t?void 0:t.error},function(e){var t;return null==e||null===(t=e.gnsave)||void 0===t?void 0:t.success},T.fg,T.V$,F.SJ],(function(e,t,r,n,o,i,a,l,c){return{enabled:!!e,contentId:a||(null==t?void 0:t.id),resource:null==e?void 0:e[0],loading:c||r,saving:n,error:o,success:i,isNew:l}})),{onClose:c.Xg.bind(null,R.zj.COPY_RESOURCE,"value",void 0),onSave:p.Vj,onCopy:A.EU.bind(null,R.zj.COPY_RESOURCE),onClear:p.rG})((function(e){e.resources;var t,r=e.onSave,n=e.onCopy,i=e.isNew,a=e.closeOnSave,l=e.labelId,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,x);return o().createElement(_,U({},c,{hideDescription:!i,copy:!i,key:(null==c||null===(t=c.resource)||void 0===t?void 0:t.pk)||"new",labelId:l||"save",onSave:function(e,t,o){var l;i?r(e,t,o):n([M(M({},null==c?void 0:c.resource),{},{title:t.name||(null==c||null===(l=c.resource)||void 0===l?void 0:l.title)})]),a&&c.onClose()}}))})),L=function(e){return function(t){var r=(0,f.np)(e);if(!r)return!1;var n=(0,T.V$)(e),o=(0,T.ez)(e);return!(!n||!o)||(0,D.Os)(t,r)}},q=(0,i.connect)((0,a.P1)(T.yK,T.YR,L,(function(e,t,r){return{enabled:!!r(e),resource:e,disabled:!!t}})),{onClick:c.Xg.bind(null,R.zj.COPY_RESOURCE,"value")})((function(e){var t=e.enabled,r=e.onClick,n=e.variant,i=e.size,a=e.resource,l=e.disabled;return t?o().createElement(d.Z,{variant:n||"primary",size:i,disabled:l,onClick:function(){return r([a])}},o().createElement(s.Z,{msgId:"saveAs"})):null})),H=(0,i.connect)((0,a.P1)([L],(function(e){return{canCopy:e}})),{onCopy:c.Xg.bind(null,R.zj.COPY_RESOURCE,"value")})((function(e){var t=e.resource,r=e.canCopy,n=e.onCopy;return r(t)?o().createElement(k.Z.Item,{onClick:function(){return n([t])}},o().createElement(Z.Z,{name:"copy"})," ",o().createElement(s.Z,{msgId:"gnviewer.clone"})):null}));const X=(0,l.rx)("SaveAs",{component:Y,containers:{ActionNavbar:{name:"SaveAs",Component:q},ResourcesGrid:{name:R.zj.COPY_RESOURCE,target:"cardOptions",Component:H}},epics:M({},v.ZP),reducers:{gnresource:y.Z,gnsave:b.Z,controls:m.Z}})},162170:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(73443),o=r(643892),i={};const a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.$X:return i;case n.rs:case n.oz:return{saving:!0,error:void 0,success:void 0};case o.Js:return{savingThumbnailMap:!0};case n.AY:return{success:t.success,saving:!1};case n.SW:return{error:t.error,saving:!1};case n.yB:return{};default:return e}}},819081:(e,t,r)=>{"use strict";e.exports=r(1174)}}]);