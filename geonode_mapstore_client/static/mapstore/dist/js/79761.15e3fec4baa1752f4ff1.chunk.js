(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[79761],{389912:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r,o=n(124852),i=n(843033);const c=function(e){var t=e.map,n=e.onBoxEnd,c=e.status;return(0,o.useEffect)((function(){"start"===c?(r=new i.Z({condition:function(e){return e.originalEvent.altKey}}),t.addInteraction(r)):"end"===c&&t.removeInteraction(r)}),[c]),(0,o.useEffect)((function(){r&&r.on("boxend",(function(e){n({boxExtent:r.getGeometry().getExtent(),modifiers:{ctrl:e.mapBrowserEvent.originalEvent.ctrlKey,metaKey:e.mapBrowserEvent.originalEvent.metaKey}})}))}),[c]),null}},126105:(e,t,n)=>{"use strict";n.d(t,{Z:()=>j});var r=n(124852),o=n.n(r),i=n(180307),c=n.n(i),a=n(45697),u=n.n(a),s=n(193409),p=n(747037),l=n.n(p),f=n(925064),y=n(821751);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,P(r.key),r)}}function v(e,t,n){return t=h(t),function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,g()?Reflect.construct(t,n||[],h(e).constructor):t.apply(e,n))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function O(e,t,n){return(t=P(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e){var t=function(e,t){if("object"!=d(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==d(t)?t:t+""}var j=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return O(e=v(this,t,[].concat(r)),"onPopupClose",(function(t){e.props.onPopupClose(t)})),O(e,"renderPopups",(function(){return e.preparePopups().map((function(t){var n,r=t.popup,i=t.id,a=t.component,u=t.content,s=t.props,p=t.containerStyle,d=r.getElement(),b=l()(a)&&y.default[a]||a;return b?n=o().isValidElement(b)&&b||o().createElement(b,s):u&&(n=f.FP(u)?o().createElement("div",{dangerouslySetInnerHTML:{__html:u}}):u),d&&c().createPortal(o().createElement("div",{className:"map-popup-ol",key:i,onMouseUp:e.convertToClick},o().createElement("div",{className:"ol-popup-content-wrapper"},o().createElement("div",{className:"ol-popup-content",style:p},n)),o().createElement("div",{className:"ol-popup-closer",onClick:function(){return e.onPopupClose(i)}},"x")),d)}))})),O(e,"update",(function(){(e._popups||[]).map((function(e){var t=e.popup;t.setElement(t.getElement())}))})),O(e,"convertToClick",(function(e){var t=new MouseEvent("click",{bubbles:!0});t.stopPropagation=function(){},e.target.dispatchEvent(t)})),O(e,"preparePopups",(function(){var t=e.props,n=t.popups,r=void 0===n?[]:n,o=t.map,i=o.getSize();return(e._popups||[]).forEach((function(e){var t=e.popup,n=e.observer;n&&n.disconnect(),t&&o.removeOverlay(t)})),e._popups=r.map((function(e){var t=Math.round(.9*i[0])-40,n=Math.round(.9*i[1])-40,r=e.id,c=e.position.coordinates,a=e.className,u=e.maxWidth,p=void 0===u?t:u,l=e.maxHeight,y=void 0===l?n:l,d=e.autoPan,m=void 0!==d&&d,v=e.autoPanMargin,g=void 0===v?20:v,h=e.offset,w=void 0===h?[0,0]:h,P=e.autoPanAnimation,j=void 0===P?{duration:200}:P,S=p>t?t:p,E=y>n?n:y,_=f.fH(r,a),I=new s.Z({id:r,element:_,autoPan:m,offset:w,autoPanMargin:g,autoPanAnimation:j,positioning:"bottom-center",className:"ol-overlay-container ol-unselectable",position:c});o.addOverlay(I);var k=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=new MutationObserver((function(){e.getMap().getSize()&&(e.setPosition(void 0),e.setPosition(n.coordinates))}));return r.observe(t,{attributes:!0,childList:!0,subtree:!0}),r}(I,_,{coordinates:c});return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({popup:I,observer:k,containerStyle:{maxWidth:S,maxHeight:E}},e)})),e._popups})),O(e,"stopPropagationOnPointerMove",(function(e){e.stopPropagation()})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(t,e),n=t,(r=[{key:"UNSAFE_componentWillMount",value:function(){this.props.map&&this.props.map.getOverlayContainerStopEvent().addEventListener("pointermove",this.stopPropagationOnPointerMove)}},{key:"shouldComponentUpdate",value:function(e){return e.popups!==this.props.popups}},{key:"componentWillUnmount",value:function(){this.props.map&&this.props.map.getOverlayContainerStopEvent().removeEventListener("pointermove",this.stopPropagationOnPointerMove)}},{key:"render",value:function(){return o().createElement("div",null,this.renderPopups())}}])&&m(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(o().Component);O(j,"propTypes",{map:u().object,popups:u().arrayOf(u().object),onPopupClose:u().func}),O(j,"defaultProps",{popups:[],onPopupClose:function(){}})},821751:(e,t,n)=>{"use strict";n.r(t),n.d(t,{IDENTIFY_POPUP:()=>P,default:()=>j});var r=n(124852),o=n.n(r),i=n(173014),c=n(11196),a=n(867076),u=n(171703),s=n(22222),p=n(307877),l=n(921914),f=n(542872),y=n(701469),d=n.n(y),b=n(352353),m=n.n(b),v=n(979870),g=n(800827),h=(0,a.compose)((0,u.connect)((0,s.P1)(p.Qf,(function(e){return{index:e}})),{setIndex:l.oO}),(0,a.defaultProps)({index:0,responses:[]})),w=(0,s.P1)([p.q7,p.o9,p.OK,p.us,p.x0,g.hp,p.vR],(function(e,t,n,r,o,i,c){return{responses:e,validResponses:t,requests:n,format:r,showEmptyMessageGFI:o,missingResponses:(n||[]).length-(e||[]).length,renderValidOnly:i,loaded:c}}));const O=(0,a.compose)((0,u.connect)(w),(0,a.defaultProps)({responses:[],container:function(e){var t=e.index,n=e.children;return o().createElement(o().Fragment,null,d()(n)&&n[t]||n)},header:v.Z}),h,c.Yy,c.mI,(0,i.Z)((function(e){var t=e.loaded;return m()(t)})))(f.Z);var P="identify";const j={identify:O}},532425:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(45697),o=n.n(r),i=n(124852),c=n.n(i);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){var r,o,i,c;r=e,o=t,i=n[t],c=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==a(c)?c:c+"")in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e){return e>100?"full":e>40?"medium":"small"},l=function(e){var t=e.size,n=e.style,r=void 0===n?{}:n,o=e.className,i=e.hidden;return c().createElement("div",{className:o,style:s({width:t,height:t,overflow:"hidden"},r)},!i&&c().createElement("div",{className:"mapstore-".concat(p(t),"-size-loader")}))};l.propTypes={size:o().number,className:o().string,style:o().object};const f=l},120447:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>K});var r=n(790596),o=n(145697),i=n(130072),c=n(722404),a=n(809056),u=n(706909),s=n(45697),p=n.n(s),l=n(124852),f=n.n(l),y=n(51273),d=n(436403),b=n(120767),m=n(898185),v=n(831219),g=n(409371);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,k(r.key),r)}}function j(e,t,n){return t=E(t),function(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,S()?Reflect.construct(t,n||[],E(e).constructor):t.apply(e,n))}function S(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(S=function(){return!!e})()}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function I(e,t,n){return(t=k(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e){var t=function(e,t){if("object"!=h(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==h(t)?t:t+""}var Z=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return I(e=j(this,t,[].concat(r)),"getLayer",(function(){var t;return e.props.map.getLayers().forEach((function(n){e.layersFilter(n)&&(t=n)}),e),t})),I(e,"setSelectInteraction",(function(){e._selectInteraction.getActive()||e._selectInteraction.setActive(!0)})),I(e,"createSelectInteraction",(function(){e.createStyle(),e._selectInteraction=new y.Z({layers:e.layersFilter,style:e._style,toggleCondition:d.QC}),e._selectInteraction.on("select",e.selectionChange,e),e.props.map.addInteraction(e._selectInteraction)})),I(e,"selectionChange",(function(){var t=[];e._selectInteraction.getFeatures().forEach((function(e){t.push(e.getId())})),e.props.updateHighlighted(t,"")})),I(e,"cleanSupport",(function(){e._selectInteraction&&e._selectInteraction.getActive()&&(e._selectInteraction.getFeatures().clear(),e.props.updateHighlighted([],""),e._selectInteraction.setActive(!1))})),I(e,"layersFilter",(function(t){return e.props.layer&&t.get("msId")===e.props.layer})),I(e,"createStyle",(function(){var t=e.props.selectedStyle,n={stroke:new b.Z(t.stroke?t.stroke:{color:"blue",width:1}),fill:new m.Z(t.fill?t.fill:{color:"blue"})};"Point"===t.type&&(n={image:new g.Z(O(O({},n),{},{radius:t.radius||5}))}),e._style=new v.ZP(n)})),I(e,"highlightFeatures",(function(t){var n=e.getLayer(),r=e._selectInteraction.getFeatures();r.clear(),n&&n.getSource().getFeatures().map((function(e){-1!==t.indexOf(e.getId())&&r.push(e)}),e)})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.createSelectInteraction(),"enabled"===this.props.status?this._selectInteraction.setActive(!0):this._selectInteraction.setActive(!1),this.props.features&&this.highlightFeatures(this.props.features)}},{key:"shouldComponentUpdate",value:function(e){var t=this.props;return e.status!==t.status||e.layer!==t.layer||"update"===e.status&&e.features.toString()!==t.features.toString()}},{key:"UNSAFE_componentWillUpdate",value:function(e){switch(e.status){case"enabled":this.setSelectInteraction(e);break;case"disabled":this.cleanSupport();break;case"update":this.highlightFeatures(e.features);break;default:return}}},{key:"componentWillUnmount",value:function(){this._selectInteraction&&(this.cleanSupport(),this._selectInteraction.un("select",this.selectionChange,this),this.props.map.removeInteraction(this._selectInteraction),this._selectInteraction=null,this._style=null)}},{key:"render",value:function(){return null}}])&&P(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(f().Component);I(Z,"propTypes",{map:p().object,layer:p().string.isRequired,status:p().oneOf(["disabled","enabled","update"]),updateHighlighted:p().func,selectedStyle:p().object,features:p().array}),I(Z,"contextTypes",{messages:p().object}),I(Z,"defaultProps",{status:"disabled",updateHighlighted:function(){},selectedStyle:{type:"Point",radius:12,stroke:{width:4,color:"yellow"},fill:{color:"red"}}});var T=n(973410),C=n(473392),D=n(372445),F=n(718369);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,H(r.key),r)}}function L(e,t,n){return t=N(t),function(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,M()?Reflect.construct(t,n||[],N(e).constructor):t.apply(e,n))}function M(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(M=function(){return!!e})()}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function B(e,t,n){return(t=H(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e){var t=function(e,t){if("object"!=x(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==x(t)?t:t+""}var U=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return B(e=L(this,t,[].concat(r)),"addDrawInteraction",(function(t){e.drawInteraction&&e.removeDrawInteraction();var n=new T.Z,r=new C.Z({source:n,zIndex:1e6,style:new v.ZP({fill:new m.Z({color:"rgba(255, 255, 255, 0.2)"}),stroke:new b.Z({color:"#ffcc33",width:2}),image:new g.Z({radius:7,fill:new m.Z({color:"#ffcc33"})})})});e.props.map.addLayer(r);var o=new D.ZP({source:n,type:t.selection.geomType,style:new v.ZP({fill:new m.Z({color:"rgba(255, 255, 255, 0.2)"}),stroke:new b.Z({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new g.Z({radius:5,stroke:new b.Z({color:"rgba(0, 0, 0, 0.7)"}),fill:new m.Z({color:"rgba(255, 255, 255, 0.2)"})})})});o.on("drawstart",(function(t){e.sketchFeature=t.feature,n.clear()})),o.on("drawend",(function(){e.updateSelectionState()})),e.props.map.addInteraction(o),e.drawInteraction=o,e.selectionLayer=r,e.setDoubleClickZoomEnabled(!1)})),B(e,"removeDrawInteraction",(function(){null!==e.drawInteraction&&(e.props.map.removeInteraction(e.drawInteraction),e.drawInteraction=null,e.props.map.removeLayer(e.selectionLayer),e.sketchFeature=null,setTimeout((function(){return e.setDoubleClickZoomEnabled(!0)}),251))})),B(e,"updateSelectionState",(function(){if(e.sketchFeature){var t=e.sketchFeature.getGeometry().getCoordinates(),n={geomType:e.props.selection.geomType,point:"Point"===e.props.selection.geomType?[t[0],t[1]]:null,line:"LineString"===e.props.selection.geomType?t.map((function(e){return[e[0],e[1]]})):null,polygon:"Polygon"===e.props.selection.geomType?e.sketchFeature.getGeometry().getLinearRing(0).getCoordinates().map((function(e){return[e[0],e[1]]})):null};e.props.changeSelectionState(n)}})),B(e,"setDoubleClickZoomEnabled",(function(t){for(var n=e.props.map.getInteractions(),r=0;r<n.getLength();r++){var o=n.item(r);if(o instanceof F.Z){o.setActive(t);break}}})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(t,e),n=t,(r=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.selection.geomType&&e.selection.geomType!==this.props.selection.geomType&&this.addDrawInteraction(e),e.selection.geomType||this.removeDrawInteraction()}},{key:"render",value:function(){return null}}])&&A(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(f().Component);B(U,"propTypes",{map:p().object,projection:p().string,selection:p().object,changeSelectionState:p().func}),B(U,"defaultProps",{selection:{}});var W=n(126105),z=n(389912);const K={LMap:r.Z,Layer:o.Z,Feature:i.Z,Overview:c.Z,ScaleBar:a.Z,DrawSupport:u.Z,HighlightFeatureSupport:Z,SelectionSupport:U,PopupSupport:W.Z,BoxSelectionSupport:z.Z}},925064:(e,t,n)=>{"use strict";n.d(t,{fH:()=>i,FP:()=>c,R3:()=>a});var r=n(455877),o=n.n(r),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o()(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ms-map-popup",n=document.createElement("div");return n.setAttribute("id",e+"-map-popup"),n.setAttribute("class",t),n},c=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").startsWith("<")},a=function(e,t){if(!t)return e;if(t instanceof Node){var n=document.createDocumentFragment();n.appendChild(t),e.appendChild(n)}else c(t)?e.innerHTML=t:e.append(document.createTextNode(String(t)));return e}}}]);