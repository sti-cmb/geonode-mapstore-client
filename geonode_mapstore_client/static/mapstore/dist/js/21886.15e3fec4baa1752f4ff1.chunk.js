(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[21886],{217549:(e,r,t)=>{"use strict";t.d(r,{Z:()=>u});var n=t(124852),a=t.n(n),l=t(45697),o=t.n(l),c=["href","readOnly","children"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function i(e){var r=e.href,t=e.readOnly,n=e.children,l=function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(r.indexOf(n)>=0)continue;t[n]=e[n]}return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,c);return t?n:a().createElement("a",s({href:r},l),n)}i.propTypes={href:o().string,readOnly:o().bool.isRequired,children:o().any},i.defaultProps={href:"",readOnly:!1};const u=i},834065:(e,r,t)=>{"use strict";t.d(r,{Z:()=>m});var n=t(124852),a=t.n(n),l=t(45697),o=t.n(l),c=t(877593),s=t(217549),i=["resource","readOnly","formatHref","pathname"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},u.apply(this,arguments)}function d(e){var r,t,n,l=e.resource,o=e.readOnly,d=e.formatHref,m=e.pathname,p=function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(r.indexOf(n)>=0)continue;t[n]=e[n]}return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,i);return p.detailsPanel?a().createElement(s.Z,{readOnly:o,href:d({pathname:m,query:{"filter{owner.username.in}":null===(n=l.owner)||void 0===n?void 0:n.username}})},l.owner&&(0,c.vW)(l.owner)):a().createElement("p",u({className:"card-text gn-card-user"},p),(null===(r=l.owner)||void 0===r?void 0:r.avatar)&&a().createElement("img",{src:l.owner.avatar,alt:(0,c.vW)(l.owner),className:"gn-card-author-image"}),a().createElement(s.Z,{readOnly:o,href:d({pathname:m,query:{"filter{owner.username.in}":null===(t=l.owner)||void 0===t?void 0:t.username}})},l.owner&&(0,c.vW)(l.owner)))}d.propTypes={resource:o().object,readOnly:o().bool,formatHref:o().func,props:o().any},d.defaultProps={resource:{},readOnly:!1,formatHref:function(){return"#"}};const m=d},793520:(e,r,t)=>{"use strict";t.d(r,{Z:()=>c});var n=t(124852),a=t.n(n),l=t(480681);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}l.Lt.Item=l.sN,l.Lt.Divider=function(e){return a().createElement(l.sN,o({},e,{divider:!0}))};const c=l.Lt},621886:(e,r,t)=>{"use strict";t.d(r,{Z:()=>O});var n=t(124852),a=t.n(n),l=t(805346),o=t(507412),c=t(303744),s=t(51605),i=t(535721),u=t(71268),d=t(217549),m=t(834065),p=t(45697),f=t.n(p),v=t(793520);function g(e){var r,t,c=e.options,s=e.resource,i=e.buildHrefByTemplate,u=(0,n.useRef)(),d="gn-card-dropdown",m=null==u||null===(r=u.current)||void 0===r?void 0:r.querySelector(".".concat(d)),p=0===((null==m||null===(t=m.children)||void 0===t?void 0:t.length)||0);return a().createElement("div",{ref:u,className:"gn-resource-action-buttons",onClick:function(e){return e.stopPropagation()},style:p?{display:"none"}:{}},a().createElement(v.Z,{className:"gn-card-options",pullRight:!0,id:"gn-card-options-".concat(s.pk2||s.pk)},a().createElement(v.Z.Toggle,{variant:"default",size:"sm",noCaret:!0},a().createElement(o.Z,{name:"ellipsis-v"})),a().createElement(v.Z.Menu,{className:d},c.map((function(e){if("plugin"===e.type){var r=e.Component;return a().createElement(r,{key:e.action,resource:s,renderType:"menuItem"})}return a().createElement(v.Z.Item,{key:e.href,href:i(s,e.href)},a().createElement(o.Z,{name:e.icon})," ",a().createElement(l.Z,{msgId:e.labelId}))})))))}g.propTypes={options:f().array,resource:f().object,buildHrefByTemplate:f().func},g.defaultProps={options:[],resource:{},buildHrefByTemplate:function(){}};const y=g;var h=t(254746);function b(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var E=(0,n.forwardRef)((function(e,r){var t,p,f,v,g=e.data,E=e.active,O=e.options,w=e.formatHref,Z=e.getTypesInfo,N=e.layoutCardsStyle,j=e.buildHrefByTemplate,P=e.readOnly,I=e.className,k=e.loading,H=e.featured,T=e.onClick,S=e.downloading,A=e.getDetailHref,_=void 0===A?function(e){return w({pathname:"/detail/".concat(e.resource_type,"/").concat(e.pk)})}:A,C=(0,n.useRef)(),x=g,B=Z(),R=(B[x.subtype]||B[x.resource_type]||{}).icon,q=x&&(B[x.subtype]||B[x.resource_type])||{},D=q.formatDetailUrl,L=void 0===D?function(e){return null==e?void 0:e.detail_url}:D,W=q.canPreviewed,F=q.hasPermission,M=(null==x?void 0:x.pk)&&L(x),U=(null==x?void 0:x.pk)&&W&&W(x),z=(null==x?void 0:x.pk)&&F&&F(x),J=(null==x?void 0:x.pk)&&(0,i.J7)(x),$=(t=(0,n.useState)(!1),p=2,function(e){if(Array.isArray(e))return e}(t)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,l,o,c=[],s=!0,i=!1;try{if(l=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;s=!1}else for(;!(s=(n=l.call(t)).done)&&(c.push(n.value),c.length!==r);s=!0);}catch(e){i=!0,a=e}finally{try{if(!s&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(i)throw a}}return c}}(t,p)||function(e,r){if(e){if("string"==typeof e)return b(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?b(e,r):void 0}}(t,p)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),G=$[0],K=$[1],Q="list"===N,V=Q?"card-img-left":"card-img-top";return a().createElement("div",{ref:r,onClick:function(){T(g)},className:"gn-resource-card".concat(E?" active":"").concat(P?" read-only":""," gn-card-type-").concat(N," ").concat(Q?"rounded-0":"").concat(I?" ".concat(I):"")},!P&&a().createElement("a",{className:"gn-resource-card-link",href:_(x)}),!P&&O&&O.length>0&&!Q&&a().createElement(y,{buildHrefByTemplate:j,resource:x,options:O,readOnly:P}),a().createElement("div",{className:"card-resource-".concat(N)},G||!x.thumbnail_url?a().createElement("div",{className:"".concat(V," card-img-placeholder")},a().createElement(o.Z,{name:R})):a().createElement("img",{className:V,src:x.thumbnail_url,onError:function(){return K(!0)}}),a().createElement("div",{className:"gn-resource-card-body-wrapper"},a().createElement("div",{className:"card-body"},a().createElement("div",{className:"card-title"},a().createElement("div",null,R&&!k&&!S&&a().createElement(a().Fragment,null,a().createElement(d.Z,{readOnly:P,href:w({query:{f:x.resource_type}})},a().createElement(o.Z,{name:R}))),(k||S)&&a().createElement(s.Z,null),a().createElement(d.Z,{className:H?"gn-featured-card-title":"gn-card-title",readOnly:P,href:_(x)},x.title)),a().createElement("div",null,a().createElement(u.Z,{resource:x})),a().createElement("div",null,a().createElement(h.Z,{resource:x}))),a().createElement("p",{ref:C,className:"card-text gn-card-description ".concat(N)},x.raw_abstract?x.raw_abstract:"..."),Q&&(null==C||null===(f=C.current)||void 0===f?void 0:f.clientHeight)<(null==C||null===(v=C.current)||void 0===v?void 0:v.scrollHeight)?a().createElement("span",{className:"ellipsis"},"..."):null,!P&&O&&O.length>0&&Q&&a().createElement(y,{buildHrefByTemplate:j,resource:x,options:O,readOnly:P})),a().createElement("div",{className:"gn-footer-wrapper"},a().createElement("div",{className:"gn-card-footer",style:{padding:O&&0===O.length?"0 0.25rem 0 0.5rem":"0 0.5rem"}},a().createElement(m.Z,{resource:x,readOnly:P,formatHref:w}),a().createElement("div",{className:"gn-card-actions"},!P&&(M||J)&&a().createElement("div",{className:"".concat(O&&0===O.length?"gn-card-view-editor-right":"gn-card-view-editor")},a().createElement(c.Z,{variant:"primary",href:U||z?M:J,rel:"noopener noreferrer"},a().createElement(l.Z,{msgId:"gnhome.view"})))))))))}));E.defaultProps={links:[],theme:"light",getTypesInfo:i.NN,formatHref:function(){return"#"},featured:!1,onClick:function(){}};const O=E},71268:(e,r,t)=>{"use strict";t.d(r,{Z:()=>g});var n=t(124852),a=t.n(n),l=t(805346),o=t(45697),c=t.n(o),s=t(507412),i=t(815135),u=t(441609),d=t.n(u),m=t(535721),p=t(303744),f=(0,i.Z)(p.Z),v=function(e){var r,t,n,o=e.resource,c=void 0===o?{}:o,i=(0,m.fu)(c),u=i.isApproved,p=i.isPublished,v=i.isProcessing,g=i.isCopying,y=i.isDeleting,h=i.isDeleted;return d()(c)?null:a().createElement("p",{className:"gn-resource-status-text"},!v&&(!u||!p)&&a().createElement(f,{variant:"default",className:"gn-resource-status gn-status-button",tooltip:(r={isApproved:u,isPublished:p},t=r.isApproved,n=r.isPublished,!t&&n?a().createElement(l.Z,{msgId:"gnhome.pendingApproval"}):t||n?n||t?"":a().createElement(l.Z,{msgId:"gnhome.unpublished"}):a().createElement(l.Z,{msgId:"gnhome.unApprovedunPublished"})),style:{marginRight:(y||h||g)&&"0.4rem"},tooltipPosition:"top"},a().createElement(s.Z,{name:"info-circle",className:"gn-resource-status-pending"})),y&&a().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},a().createElement(l.Z,{msgId:"gnviewer.deleting"})),h&&a().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},a().createElement(l.Z,{msgId:"gnviewer.deleted"})),g&&a().createElement("span",{className:"gn-resource-status gn-resource-status-primary"},a().createElement(l.Z,{msgId:"gnviewer.cloning"})))};v.propTypes={isApproved:c().bool,isPublished:c().bool},v.defaultProps={isApproved:!0,isPublished:!0};const g=v},228261:(e,r,t)=>{"use strict";t.d(r,{Z:()=>u});var n=t(124852),a=t.n(n),l=t(45697),o=t.n(l),c=["id","className","style","children"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function i(e){var r=e.id,t=e.className,n=e.style,l=e.children,o=function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(r.indexOf(n)>=0)continue;t[n]=e[n]}return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,c),i=t?" "+t:"";return a().createElement(a().Fragment,null,a().createElement("div",s({},o,{id:r,className:"gn-spinner".concat(i),style:n}),a().createElement("div",null)),l)}i.propTypes={id:o().string,className:o().string,style:o().object},i.defaultProps={};const u=i},51605:(e,r,t)=>{"use strict";t.d(r,{Z:()=>n.Z});var n=t(228261)},254746:(e,r,t)=>{"use strict";t.d(r,{Z:()=>d});var n=t(124852),a=t.n(n),l=t(414293),o=t.n(l),c=t(815135),s=t(17594);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}var u=(0,c.Z)((function(e){return a().createElement("div",i({},e,{className:"gn-unadvertised"}),a().createElement(s.Z,{name:"eye-slash"}))}));const d=function(e){var r=e.resource;return o()(r.advertised)||r.advertised?null:a().createElement(u,{tooltipId:"gnviewer.unadvertised",className:"gn-unadvertised"})}}}]);