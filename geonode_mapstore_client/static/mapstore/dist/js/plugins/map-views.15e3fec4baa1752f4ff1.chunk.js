(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[23889],{460604:(e,t,r)=>{"use strict";r.d(t,{hn:()=>n,yg:()=>o,vD:()=>i,jJ:()=>u,oy:()=>c,am:()=>a,W:()=>l,B1:()=>f,YP:()=>s,fU:()=>p,cY:()=>E});var n="ADDITIONALLAYER:ADD_ADDITIONAL_LAYERS",o="ADDITIONALLAYER:REMOVE_ADDITIONAL_LAYER",i="ADDITIONALLAYER:REMOVE_ALL_ADDITIONAL_LAYERS",u="ADDITIONALLAYER:UPDATE_ADDITIONAL_LAYER",c="ADDITIONALLAYER:UPDATE_OPTIONS_BY_OWNER",a="ADDITIONALLAYER:MERGE_OPTIONS_BY_OWNER",l=function(e,t){return{type:u,id:e,owner:t,actionType:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"override",options:arguments.length>3?arguments[3]:void 0}},f=function(e,t){return{type:c,owner:e,options:t}},s=function(e,t){return{type:a,owner:e,options:t}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,r=e.owner;return{type:o,id:t,owner:r}},E=function(e){return{type:i,owner:e}}},881808:(e,t,r)=>{"use strict";r.d(t,{eD:()=>n,AM:()=>o,ok:()=>i,Gg:()=>u,nT:()=>c,TL:()=>a,KS:()=>l,EB:()=>f,DZ:()=>s,Aw:()=>p,V_:()=>E,H0:()=>y,jW:()=>d,JZ:()=>v,fQ:()=>A,HK:()=>O,YO:()=>R,I6:()=>m});var n="MAP:LOAD_NEW_MAP",o="MAP_LOAD_MAP_CONFIG",i="MAP_CONFIG_LOADED",u="MAP_CONFIG_LOAD_ERROR",c="MAP_LOAD_INFO",a="MAP_INFO_LOAD_START",l="MAP_INFO_LOADED",f="MAP_INFO_LOAD_ERROR",s="MAP:MAP_SAVE_ERROR",p="MAP:MAP_SAVED",E="MAP:RESET_MAP_SAVE_ERROR";function y(e,t,r){return{type:i,config:e,legacy:!!t,mapId:t,zoomToExtent:r}}function d(e,t){return{type:u,error:e,mapId:t}}function v(e,t,r,n,i){return{type:o,configName:e,mapId:t,config:r,mapInfo:n,overrideConfig:i}}function A(e,t){return{type:l,mapId:t,info:e,merge:arguments.length>2&&void 0!==arguments[2]&&arguments[2]}}function O(e,t){return{type:f,mapId:e,error:t}}function R(e){return{type:a,mapId:e}}function m(e){return{type:c,mapId:e}}},433528:(e,t,r)=>{"use strict";r.d(t,{gJ:()=>n,Oj:()=>o,jp:()=>i,CM:()=>u,DU:()=>c,aO:()=>a,v6:()=>l,K8:()=>f,IN:()=>s,zh:()=>p,AH:()=>E,Ub:()=>y,_9:()=>d,JB:()=>v,oh:()=>A,AY:()=>O,yi:()=>R,SW:()=>m,Hk:()=>b,iQ:()=>S,dY:()=>I,$:()=>T,_u:()=>g,gG:()=>_,DI:()=>D,dZ:()=>P,qw:()=>w,f$:()=>L,bZ:()=>U,$O:()=>h,sF:()=>G,Gk:()=>F,vO:()=>N,ut:()=>j,MK:()=>M,VV:()=>C,B8:()=>Y,VM:()=>V,a3:()=>k,Xp:()=>W,DA:()=>H,sK:()=>x,r:()=>z,iB:()=>B,WB:()=>Z,vm:()=>K,EH:()=>$,Yd:()=>J,Hg:()=>Q,Lz:()=>X,ye:()=>q,Jb:()=>ee,d:()=>te,fT:()=>re,Ib:()=>ne,UB:()=>oe,Uh:()=>ie,QT:()=>ue,oL:()=>ce,Ap:()=>ae,KD:()=>le,Z_:()=>fe,Vw:()=>se,sY:()=>pe,kA:()=>Ee,gr:()=>ye,pX:()=>de,F5:()=>ve,MO:()=>Ae,dq:()=>Oe,DY:()=>Re,oO:()=>me,uF:()=>be,a8:()=>Se,Pv:()=>Ie,an:()=>Te,lg:()=>ge,nY:()=>_e,nG:()=>De,lx:()=>Pe,$S:()=>we,gc:()=>Le,Uz:()=>Ue,fO:()=>he,$E:()=>Ge,cE:()=>Fe,JK:()=>Ne,YV:()=>je,t9:()=>Me,YG:()=>Ce,HT:()=>Ye,MY:()=>Ve,ve:()=>ke,hB:()=>We,Ox:()=>He,zd:()=>xe,aT:()=>ze,VH:()=>Be,Yb:()=>Ze,Jr:()=>Ke,pP:()=>$e,gL:()=>Je,dM:()=>Qe});var n="FEATUREGRID:SET_UP",o="FEATUREGRID:SELECT_FEATURES",i="FEATUREGRID:DESELECT_FEATURES",u="FEATUREGRID:CLEAR_SELECTION",c="FEATUREGRID:SET_SELECTION_OPTIONS",a="FEATUREGRID:TOGGLE_MODE",l="FEATUREGRID:TOGGLE_FEATURES_SELECTION",f="FEATUREGRID:FEATURES_MODIFIED",s="FEATUREGRID:NEW_FEATURE",p="FEATUREGRID:SAVE_CHANGES",E="FEATUREGRID:SAVING",y="FEATUREGRID:START_EDITING_FEATURE",d="FEATUREGRID:START_DRAWING_FEATURE",v="FEATUREGRID:DELETE_GEOMETRY",A="FEATUREGRID:DELETE_GEOMETRY_FEATURE",O="FEATUREGRID:SAVE_SUCCESS",R="FEATUREGRID:CLEAR_CHANGES",m="FEATUREGRID:SAVE_ERROR",b="FEATUREGRID:DELETE_SELECTED_FEATURES",S="SET_FEATURES",I="FEATUREGRID:SORT_BY",T="FEATUREGRID:SET_LAYER",g="QUERY:UPDATE_FILTER",_="FEATUREGRID:CHANGE_PAGE",D="FEATUREGRID:GEOMETRY_CHANGED",P="DOCK_SIZE_FEATURES",w="FEATUREGRID:TOGGLE_TOOL",L="FEATUREGRID:CUSTOMIZE_ATTRIBUTE",U="ASK_CLOSE_FEATURE_GRID_CONFIRM",h="FEATUREGRID:OPEN_GRID",G="FEATUREGRID:CLOSE_GRID",F="FEATUREGRID:CLEAR_CHANGES_CONFIRMED",N="FEATUREGRID:FEATURE_GRID_CLOSE_CONFIRMED",j="FEATUREGRID:SET_PERMISSION",M="FEATUREGRID:DISABLE_TOOLBAR",C="FEATUREGRID:ACTIVATE_TEMPORARY_CHANGES",Y="FEATUREGRID:DEACTIVATE_GEOMETRY_FILTER",V="FEATUREGRID:ADVANCED_SEARCH",k="FEATUREGRID:ZOOM_ALL",W="FEATUREGRID:INIT_PLUGIN",H="FEATUREGRID:SIZE_CHANGE",x="FEATUREGRID:TOGGLE_SHOW_AGAIN_FLAG",z="FEATUREGRID:UPDATE_EDITORS_OPTIONS",B="FEATUREGRID:LAUNCH_UPDATE_FILTER_FUNC",Z="FEATUREGRID:SET_SYNC_TOOL",K="FEATUREGRID:SET_VIEWPORT_FILTER",$={EDIT:"EDIT",VIEW:"VIEW"},J="FEATUREGRID:START_SYNC_WMS",Q="FEATUREGRID:STOP_SYNC_WMS",X="STORE_ADVANCED_SEARCH_FILTER",q="LOAD_MORE_FEATURES",ee="FEATUREGRID:QUERY_RESULT",te="FEATUREGRID:SET_TIME_SYNC",re="FEATUREGRID:SET_PAGINATION";function ne(){return{type:x}}function oe(e,t){return{type:ee,features:e,pages:t}}function ie(e){return{type:X,filterObj:e}}function ue(){return{type:W,options:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}}function ce(){return{type:F}}function ae(){return{type:N}}function le(e,t){return{type:o,features:e,append:t}}function fe(e){return{type:n,options:e}}function se(e){return{type:D,features:e}}function pe(){return{type:y}}function Ee(){return{type:d}}function ye(e){return{type:i,features:e}}function de(){return{type:v}}function ve(e){return{type:A,features:e}}function Ae(){return{type:u}}function Oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.multiselect,r=e.showCheckbox;return{type:c,multiselect:t,showCheckbox:r}}function Re(e,t){return{type:I,sortBy:e,sortOrder:t}}function me(e,t){return{type:_,page:e,size:t}}function be(e){return{type:T,id:e}}function Se(e){return{type:g,update:e,append:arguments.length>1&&void 0!==arguments[1]&&arguments[1]}}function Ie(e,t){return{type:w,tool:e,value:t}}function Te(e,t,r){return{type:L,name:e,key:t,value:r}}function ge(){return{type:a,mode:$.EDIT}}function _e(){return{type:a,mode:$.VIEW}}function De(e,t){return{type:f,features:e,updated:t}}function Pe(e){return{type:s,features:e}}function we(){return{type:p}}function Le(){return{type:O}}function Ue(){return{type:b}}function he(){return{type:E}}function Ge(){return{type:R}}function Fe(){return{type:m}}function Ne(){return{type:U}}function je(e){return{type:G,closer:e}}function Me(){return{type:h}}function Ce(e){return{type:M,disabled:e}}function Ye(e){return{type:j,permission:e}}function Ve(){return{type:V}}function ke(){return{type:k}}function We(){return{type:J}}function He(e,t){return{type:H,size:e,dockProps:t}}var xe=function(e){return{type:q,pages:e}},ze=function(e){return{type:C,activated:e}},Be=function(e){return{type:Y,deactivated:e}},Ze=function(e){return{type:te,value:e}},Ke=function(e){return{type:re,size:e}},$e=function(e){return{type:B,updateFilterAction:e}},Je=function(e){return{type:Z,syncWmsFilter:e}},Qe=function(e){return{type:K,value:e}}},580416:(e,t,r)=>{"use strict";r.d(t,{yS:()=>n,Zz:()=>o,ms:()=>i,ih:()=>u,OX:()=>c,sb:()=>a,K$:()=>l,k7:()=>f,cX:()=>s,x9:()=>p,vs:()=>E,oE:()=>y,Po:()=>d,qv:()=>v,cI:()=>A,g6:()=>O,I4:()=>R,l$:()=>m,Xv:()=>b,k3:()=>S,CQ:()=>I,R8:()=>T,HN:()=>g,sH:()=>_,c7:()=>D,_7:()=>P,eF:()=>w,O6:()=>L,ED:()=>U,RP:()=>h,sF:()=>G,VP:()=>F,He:()=>N,vO:()=>j,WO:()=>M,bh:()=>C,MK:()=>Y,ZF:()=>V,tV:()=>k,Dv:()=>W,Yz:()=>H,kI:()=>x,XG:()=>z,A4:()=>B,Rp:()=>Z,$o:()=>K,ct:()=>$,oh:()=>J,$h:()=>Q,ud:()=>X,Qr:()=>q,LR:()=>ee,nN:()=>te,UG:()=>re,c9:()=>ne,Xy:()=>oe});var n="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",i="CHANGE_GROUP_PROPERTIES",u="TOGGLE_NODE",c="SORT_NODE",a="REMOVE_NODE",l="UPDATE_NODE",f="MOVE_NODE",s="LAYER_LOADING",p="LAYER_LOAD",E="LAYER_ERROR",y="ADD_LAYER",d="ADD_GROUP",v="REMOVE_LAYER",A="SHOW_SETTINGS",O="HIDE_SETTINGS",R="UPDATE_SETTINGS",m="REFRESH_LAYERS",b="LAYERS:UPDATE_LAYERS_DIMENSION",S="LAYERS_REFRESHED",I="LAYERS_REFRESH_ERROR",T="LAYERS:BROWSE_DATA",g="LAYERS:DOWNLOAD",_="LAYERS:CLEAR_LAYERS",D="LAYERS:SELECT_NODE",P="LAYERS:FILTER_LAYERS",w="LAYERS:SHOW_LAYER_METADATA",L="LAYERS:HIDE_LAYER_METADATA",U="LAYERS:UPDATE_SETTINGS_PARAMS";function h(e,t,r){return{type:A,node:e,nodeType:t,options:r}}function G(){return{type:O}}function F(e){return{type:R,options:e}}function N(e,t){return{type:n,newProperties:t,layer:e}}function j(e,t){return{type:o,layer:e,params:t}}function M(e,t){return{type:i,newProperties:t,group:e}}function C(e,t,r){return{type:u,node:e,nodeType:t,status:!r}}function Y(e,t){return{type:c,node:e,order:t,sortLayers:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}}function V(e,t){return{type:a,node:e,nodeType:t,removeEmpty:arguments.length>2&&void 0!==arguments[2]&&arguments[2]}}function k(e,t,r){return{type:l,node:e,nodeType:t,options:r}}function W(e,t,r){return{type:f,node:e,groupId:t,index:r}}function H(e){return{type:s,layerId:e}}function x(e,t){return{type:p,layerId:e,error:t}}function z(e,t,r){return{type:E,layerId:e,tilesCount:t,tilesErrorCount:r}}function B(e){return{type:y,layer:e,foreground:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}}function Z(e,t,r){return{type:d,group:e,parent:t,options:r,asFirst:arguments.length>3&&void 0!==arguments[3]&&arguments[3]}}function K(e){return{type:v,layerId:e}}function $(e,t){return{type:n,layer:e,newProperties:{_v_:t||(new Date).getTime()}}}function J(e){return{type:S,layers:e}}function Q(e,t){return{type:I,layers:e,error:t}}function X(e,t,r,n){return{type:b,dimension:e,value:t,options:r,layers:n}}function q(e){return{type:T,layer:e}}function ee(e){return{type:g,layer:e}}function te(){return{type:_}}function re(e,t,r){return{type:D,id:e,nodeType:t,ctrlKey:r}}function ne(e,t){return{type:w,metadataRecord:e,maskLoading:t}}function oe(e,t){return{type:U,newParams:e,update:t}}},213652:(e,t,r)=>{"use strict";r.d(t,{Wz:()=>n,UA:()=>o,LI:()=>i});var n="MAP_TYPE_CHANGED",o="MAP_TYPE:VISUALIZATION_MODE_CHANGED";function i(e){return{type:o,visualizationMode:e}}},713760:(e,t,r)=>{"use strict";r.d(t,{y:()=>i});var n=r(432420),o=r(379853),i=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.resourceId,i=t.layer,u=t.resources,c=t.inverse,a=void 0!==c&&c,l=t.offset,f=void 0===l?0:l,s=null!=r?r:function(e,t){var r=t.inverse,n=t.offset;return"".concat(e.id,";inverse:").concat(r,";offset:").concat(n)}(i,{inverse:a,offset:f}),p=null==u?void 0:u.find((function(e){return e.id===s}));return null!=p&&null!==(e=p.data)&&void 0!==e&&e.collection?Promise.resolve(p):{wfs:function(){return(0,n.Bm)(i.url,i.name,{outputFormat:"application/json",srsname:"EPSG:4326"}).then((function(e){return e.data}))},vector:function(){var e;return Promise.resolve({type:"FeatureCollection",features:null!==(e=i.features)&&void 0!==e?e:[]})}}[i.type]().then((function(e){return a?(0,o.Zr)(e,{offset:f}):e})).then((function(e){return{id:s,updated:!0,data:{type:i.type,name:i.name,title:i.title,url:i.url,id:i.id,collection:e}}}))}},38560:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(480681),o=r(124852),i=r.n(o),u=r(294184),c=r.n(u),a=["disabled","className","onClick"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}var f=r(815135);const s=(p=n.zx,i().forwardRef((function(e,t){var r=e.disabled,n=e.className,o=e.onClick,u=void 0===o?function(){}:o,f=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,a);return i().createElement(p,l({ref:t,className:r?c()("disabled",n):n,onClick:function(){r||u.apply(void 0,arguments)}},f),f.children)})));var p;(0,f.Z)(n.zx)},532425:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(45697),o=r.n(n),i=r(124852),u=r.n(i);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){var n,o,i,u;n=e,o=t,i=r[t],u=function(e,t){if("object"!=c(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==c(u)?u:u+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e){return e>100?"full":e>40?"medium":"small"},s=function(e){var t=e.size,r=e.style,n=void 0===r?{}:r,o=e.className,i=e.hidden;return u().createElement("div",{className:o,style:l({width:t,height:t,overflow:"hidden"},n)},!i&&u().createElement("div",{className:"mapstore-".concat(f(t),"-size-loader")}))};s.propTypes={size:o().number,className:o().string,style:o().object};const p=s},787989:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Oe});var n=r(124852),o=r.n(n),i=r(171703),u=r(322843),c=r(22222),a=r(876825);var l="MAP_VIEWS:SETUP_VIEWS",f="MAP_VIEWS:ACTIVATE_VIEWS",s="MAP_VIEWS:HIDE_VIEWS",p="MAP_VIEWS:SELECT_VIEW",E="MAP_VIEWS:UPDATE_VIEWS",y="MAP_VIEWS:UPDATE_RESOURCES",d="MAP_VIEWS:SET_PREVIOUS_VIEW",v=function(e){return{type:s,hide:e}},A=function(e){return{type:y,resources:e}},O=function(e){return{type:d,view:e}},R=r(881808),m=r(379853),b=r(455877),S=r.n(b);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function T(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){var n,o,i,u;n=e,o=t,i=r[t],u=function(e,t){if("object"!=I(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==I(u)?u:u+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P={};var w=r(675110),L=r(308316),U=r(49977),h=r(441609),G=r.n(h),F=r(747037),N=r.n(F),j=r(782904),M=r(460604),C=r(931273),Y=r(213652),V=r(300849),k=r(580416),W=r(433528),H=r(784715),x=r(713760),z=r(93152);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}var Z=["updated"];function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){var n,o,i,u;n=e,o=t,i=r[t],u=function(e,t){if("object"!=B(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==B(u)?u:u+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function J(e){return function(e){if(Array.isArray(e))return Q(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Q(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var X=(0,H.VI)(),q=["drawer","metadataexplorer","print","queryPanel"];const ee={updateMapViewsLayers:function(e,t){return e.ofType(p,E,f,s,l,R.ok,Y.UA).filter((function(){var e=t.getState();return!(0,V.U3)(e)&&(0,V.Ob)(e)})).switchMap((function(e){var r=t.getState(),n=(0,V.Uc)(r),o=(0,V.uz)(r),i=o||{},u=i.layers,c=void 0===u?[]:u,a=i.mask,l=void 0===a?{}:a,f=i.id;if(e.type!==Y.UA&&X((null==n?void 0:n.layers)||[],c)&&X((null==n?void 0:n.mask)||{},l))return U.Observable.of(O(o));var s=(0,V.NJ)(r);return function(e,t){var r=t.getState(),n=(0,V.NJ)(r),o=e||{},i=o.layers,u=void 0===i?[]:i,c=o.mask,a=void 0===c?{}:c;return U.Observable.defer((function(){var e=(0,w.l2)(r),t=N()(a.resourceId)?(0,V.MB)(r,a.resourceId):void 0,o=null==e?void 0:e.find((function(e){var r;return e.id===(null==t||null===(r=t.data)||void 0===r?void 0:r.id)})),i=[{resource:t,options:a,vectorLayer:o}].concat(J(u.filter((function(e){return e.clippingLayerResourceId})).map((function(t){var n=t.clippingLayerResourceId,o=N()(n)?(0,V.MB)(r,n):void 0,i=null==e?void 0:e.find((function(e){var t;return e.id===(null==o||null===(t=o.data)||void 0===t?void 0:t.id)}));return{resource:o,vectorLayer:i}}))));return Promise.all(i.filter((function(e){return e.resource})).map((function(e){var t=e.resource,r=e.options,o=e.vectorLayer;return(0,x.y)({resourceId:t.id,layer:$($({},(null==o?void 0:o.features)&&{features:null==o?void 0:o.features}),t.data),inverse:null==r?void 0:r.inverse,offset:null==r?void 0:r.offset,resources:n}).then((function(e){return e})).catch((function(){return{id:t.id,error:!0}}))})))}))}(o,t).switchMap((function(e){var t,n,i=e.filter((function(e){return!e.error})),u=(0,w.l2)(r),a=i.filter((function(e){return e.updated})),p=N()(l.resourceId)&&i.find((function(e){return e.id===l.resourceId}));return U.Observable.of.apply(U.Observable,J(a.length>0?[A(s.map((function(e){var t=a.find((function(t){return t.id===e.id}))||{},r=(t.updated,function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,Z));return G()(r)?e:r})))]:[]).concat([O(o),(0,M.fU)({owner:m.ex})],J(c.filter((function(e){return!!u.find((function(t){return t.id===e.id}))})).map((function(e){var t,r,n,o=N()(e.clippingLayerResourceId)&&i.find((function(t){return t.id===e.clippingLayerResourceId})),u=N()(e.clippingPolygonFeatureId)&&(null===(t=(0,m.er)(null==o||null===(r=o.data)||void 0===r||null===(n=r.collection)||void 0===n?void 0:n.features))||void 0===t?void 0:t.find((function(t){return t.id===e.clippingPolygonFeatureId})));return(0,M.W)(e.id,m.ex,"override",$($({},e),{},{clippingPolygon:u}))}))),J((0,z.c0)(r)&&null!=p&&null!==(t=p.data)&&void 0!==t&&null!==(n=t.collection)&&void 0!==n&&n.features?[(0,M.W)("".concat(f,"-mask"),m.ex,"overlay",{id:"".concat(f,"-mask"),type:"vector",features:p.data.collection.features,visibility:!0,style:{format:"geostyler",body:{name:"",rules:[{name:"",symbolizers:[{kind:"Fill",color:"#ffffff",fillOpacity:0,msClampToGround:!0,msClassificationType:"3d"}]}]}}})]:[])))}))}))},removeMapViewsLayersWhenDeactivated:function(e){return e.ofType(f).filter((function(e){return!e.active})).switchMap((function(){return U.Observable.of((0,M.fU)({owner:m.ex}),O())}))},closePluginWhenMapViewsActivate:function(e,t){return e.ofType(f).filter((function(e){return e.active})).switchMap((function(){var e=t.getState();return q.find((function(t){var r,n;return!(null==e||null===(r=e.controls)||void 0===r||null===(n=r[t])||void 0===n||!n.enabled)}))?U.Observable.of.apply(U.Observable,J(q.map((function(e){return(0,j.Xg)(e,"enabled",!1)})))):U.Observable.empty()}))},hideMapViewsBasedOnLayoutChanges:function(e,t){return e.ofType(j.kM,j.At,C.ur,R.ok,k.R8,W.sF).filter((function(e){return[C.ur,R.ok,k.R8,W.sF].includes(e.type)||q.includes(e.control)})).switchMap((function(){var e,r=t.getState();return q.find((function(e){var t,n;return!(null==r||null===(t=r.controls)||void 0===t||null===(n=t[e])||void 0===n||!n.enabled)}))||null!=r&&null!==(e=r.featuregrid)&&void 0!==e&&e.open?U.Observable.of((0,M.fU)({owner:m.ex}),O(),v(!0)):U.Observable.of(v(!1))}))}};var te=r(532425),re=["pluginName","mapConfig","onSetup","active","onHideViews","initialized","updateUUID"];function ne(){return ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ne.apply(this,arguments)}var oe=(0,n.lazy)((function(){return r.e(82803).then(r.bind(r,482803))})),ie={mapviews:function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case R.ok:return D({initialized:!0,hide:null==r?void 0:r.hide,updateUUID:S()()},(null==n||null===(e=n.config)||void 0===e?void 0:e[m.TI])||{});case p:return D(D({},r),{},{selectedId:n.id});case E:return D(D({},r),{},{views:T(n.views)});case y:return D(D({},r),{},{resources:T(n.resources)});case f:return D(D({},r),{},{active:n.active});case s:return D(D({},r),{},{hide:n.hide});case l:return r.initialized?r:D({initialized:!0,updateUUID:S()()},null!==(t=n.config)&&void 0!==t?t:{});case d:return D(D({},r),{},{previousView:n.view});default:return r}}},ue=(0,i.connect)((0,c.P1)([V.o,V.iW,w.l2,L.Pz,function(e){return null==e?void 0:e.mapConfigRawData},V.NJ,V.Ob,V.U3,V.pr,V.$O],(function(e,t,r,n,o,i,u,c,a,l){return{selectedId:e,views:t,layers:r.filter((function(e){return"background"!==e.group})),locale:n,mapConfig:o,resources:i,active:u,hide:c,initialized:a,updateUUID:l}})),{onSelectView:function(e){return{type:p,id:e}},onUpdateViews:function(e){return{type:E,views:e}},onSetup:function(e){return{type:l,config:e}},onUpdateResources:A,onHideViews:v})((function(e){var t=e.pluginName,r=e.mapConfig,i=e.onSetup,c=void 0===i?function(){}:i,l=e.active,f=(e.onHideViews,e.initialized),s=e.updateUUID,p=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,re);return function(e,t){var r=t.reducers,o=t.epics,i=t.removeReducers,c=t.muteEpics,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];(0,n.useEffect)((function(){var t=(0,u.BA)(e),n=(0,a.bh)();return r&&Object.keys(r).forEach((function(e){return n.storeManager.addReducer(e,r[e])})),o&&(n.storeManager.addEpics(t,o),n.storeManager.unmuteEpics(t)),function(){r&&i&&Object.keys(r).forEach((function(e){return n.storeManager.removeReducer(e)})),o&&c&&n.storeManager.muteEpics(t)}}),l)}(t,{reducers:ie,epics:ee}),(0,n.useEffect)((function(){!f&&null!=r&&r[m.TI]&&c(r[m.TI])}),[null==r?void 0:r[m.TI],f]),l?o().createElement(n.Suspense,{fallback:o().createElement("div",{className:"ms-map-views"},o().createElement("div",{className:"ms-map-views-wrapper"},o().createElement("div",{className:"ms-map-views-header",style:{justifyContent:"center"}},o().createElement(te.Z,{size:30}))))},o().createElement(oe,ne({key:s},p))):null}));const ce=ue;var ae=r(480681),le=r(38560),fe=r(805346),se=r(815135),pe=r(658422),Ee=r(274621),ye=(0,se.Z)(le.Z);(0,pe.Fd)(m.TI,(function(e){return(0,m.U)({active:(0,V.Ob)(e),selectedId:(0,V.o)(e),views:(0,V.iW)(e),resources:(0,V.NJ)(e)},(0,w.l2)(e))}));var de="MapViews",ve=(0,i.connect)((0,c.P1)([Ee.jl],(function(e){return{pluginName:de,edit:!!e}})))(ce),Ae=(0,i.connect)((0,c.P1)([V.Ob,Ee.jl,V.iW],(function(e,t,r){return{active:e,visible:!!t||!t&&((null==r?void 0:r.length)||0)}})),{onClick:function(e){return{type:f,active:e}}})((function(e){var t=e.active,r=e.onClick,n=e.visible,i=e.menuItem;if(!n)return null;var u=t?"mapViews.deactivateMapViews":"mapViews.activateMapViews";return i?o().createElement(ae.sN,{active:t,onClick:function(){return r(!t)}},o().createElement(ae.gG,{glyph:"map-view"}),o().createElement(fe.Z,{msgId:u})):o().createElement(ye,{className:"square-button",bsStyle:t?"primary":"tray",active:t,onClick:function(){return r(!t)},tooltipId:u,tooltipPosition:"left"},o().createElement(ae.gG,{glyph:"map-view"}))}));const Oe=(0,u.rx)(de,{component:function(){return null},containers:{SidebarMenu:{name:"mapViews",position:2e3,tool:Ae,priority:1},BurgerMenu:{name:"mapviews",position:9,tool:function(){return o().createElement(Ae,{menuItem:!0})},priority:2},Map:{name:de,Tool:ve,alwaysRender:!0}}})},788113:(e,t,r)=>{"use strict";r.d(t,{b6:()=>p,PG:()=>E,_x:()=>y,Mm:()=>d,dP:()=>v,SX:()=>A,ZL:()=>O,_S:()=>R,iH:()=>m,R7:()=>b,Q7:()=>S,n7:()=>I,bA:()=>T,hm:()=>g,E2:()=>_,Cb:()=>D,eK:()=>P,Im:()=>w,e8:()=>L,JF:()=>U,kS:()=>h,y:()=>G,l2:()=>F,HN:()=>N,BM:()=>j,O8:()=>M,am:()=>C,LV:()=>Y,CK:()=>V,jU:()=>k,Qg:()=>W,$c:()=>H});var n=r(22222),o=r(227361),i=r.n(o),u=r(800827),c=r(577215),a=r(274621);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){var n,o,i,u;n=e,o=t,i=r[t],u=function(e,t){if("object"!=l(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==l(u)?u:u+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){return i()(e,"catalog.services")},E=(0,n.P1)((function(e){return i()(e,"catalog.default.staticServices")}),p,(function(e,t){var r=null==e?void 0:e.default_map_backgrounds;return r?(r.readOnly=!0,s(s({},t),{},{default_map_backgrounds:r})):t})),y=function(e){return i()(e,"catalog.default.tileSizes",[256,512])},d=function(e){return i()(e,"controls.metadataexplorer.group")},v=function(e){return i()(e,"catalog.saving")},A=function(e){return i()(e,"catalog.result")},O=function(e){return i()(e,"catalog.openCatalogServiceList")},R=function(e){return i()(e,"catalog.newService")},m=function(e){return i()(e,"catalog.newService.type","csw")},b=function(e){return i()(e,'catalog.services["'.concat(i()(e,"catalog.selectedService"),'"]'))},S=function(e){return i()(e,'catalog.services["'.concat(i()(e,"catalog.selectedService"),'"].type'),function(e){return i()(e,'catalog.default.staticServices["'.concat(i()(e,"catalog.selectedService"),'"].type'),"csw")}(e))},I=function(e){return i()(e,'catalog.services["'.concat(i()(e,"catalog.selectedService"),'"].layerOptions'),{})},T=function(e){return i()(e,"catalog.searchOptions")},g=function(e){return i()(e,"catalog.loadingError")},_=function(e){return i()(e,"catalog.loading",!1)},D=function(e){return i()(e,"catalog.selectedService")},P=function(e){return i()(e,"catalog.mode","view")},w=function(e){return i()(e,"catalog.layerError")},L=function(e){return i()(e,"catalog.searchOptions.text","")},U=function(e){return"metadataexplorer"===i()(e,"controls.toolbar.active")||i()(e,"controls.metadataexplorer.enabled")},h=function(e){return(i()(e,"localConfig.authenticationRules")||[]).filter((function(e){return"authkey"===e.method})).map((function(e){return e.authkeyParamName}))||[]},G=function(e){return i()(e,"catalog.pageSize",4)},F=function(e){return i()(e,"catalog.delayAutoSearch",1e3)},N=(0,n.zB)({projection:u.uy}),j=function(e){return i()(e,"catalog.formatsLoading",!1)},M=function(e){return i()(e,"catalog.newService.supportedFormats.imageFormats",[])},C=function(e){var t,r;return"edit"===P(e)?M(e):(null===(t=b(e))||void 0===t||null===(r=t.supportedFormats)||void 0===r?void 0:r.imageFormats)||[]},Y=function(e){return i()(e,"catalog.newService.supportedFormats.infoFormats",(0,c.oL)())},V=function(e){return i()(e,"catalog.newService.formatUrlUsed","")},k=function(e){return i()(e,"catalog.isNewServiceAdded",!1)},W=function(e){return i()(e,"catalog.showFormatError",!1)},H=function(e){var t=function(e){return i()(e,"catalog.editingAllowedRoles",[])}(e),r=function(e){return i()(e,"catalog.editingAllowedGroups",[])}(e);return(0,a.tv)({allowedRoles:t,allowedGroups:r})(e)}},887157:(e,t,r)=>{var n=r(640554),o=r(588958);e.exports=function(e,t,r,i){var u=e.length;for((r=n(r))<0&&(r=-r>u?0:u+r),(i=void 0===i||i>u?u:n(i))<0&&(i+=u),i=r>i?0:o(i);r<i;)e[r++]=t;return e}},441761:(e,t,r)=>{var n=r(644239),o=r(637005);e.exports=function(e){return o(e)&&"[object Date]"==n(e)}},819873:(e,t,r)=>{var n=r(887157),o=r(816612);e.exports=function(e,t,r,i){var u=null==e?0:e.length;return u?(r&&"number"!=typeof r&&o(e,t,r)&&(r=0,i=u),n(e,t,r,i)):[]}},647960:(e,t,r)=>{var n=r(441761),o=r(307518),i=r(531167),u=i&&i.isDate,c=u?o(u):n;e.exports=c},588958:(e,t,r)=>{var n=r(829750),o=r(640554);e.exports=function(e){return e?n(o(e),0,4294967295):0}}}]);