(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[34344,45992],{45992:(t,r,e)=>{"use strict";e.d(r,{h:()=>s,Z:()=>l});var o=e(535937),n=e.n(o),i=e(836882),u=e(737275);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function a(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,o)}return e}function p(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?a(Object(e),!0).forEach((function(r){var o,n,i,u;o=t,n=r,i=e[r],u=function(t,r){if("object"!=c(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,"string");if("object"!=c(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n),(n="symbol"==c(u)?u:String(u))in o?Object.defineProperty(o,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[n]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var s=function(t,r){var e,o,c,a,s=i.Z;if("custom"===t)e=r;else if(c=(a=t.split("."))[0],o=a[1],!(e=s[c]))throw new Error("No such provider ("+c+")");var l={url:e.url,options:e.options||{}};if(o&&"variants"in e){if(!(o in e.variants))throw new Error("No such variant of "+(c||e.url)+" ("+o+")");var f,b=e.variants[o];f="string"==typeof b?{variant:b}:b.options,l={url:b.url||l.url,options:p(p({},l.options||{}),f)}}else"function"==typeof l.url&&(l.url=l.url(a.splice(1,a.length-1).join(".")));var y="file:"===window.location.protocol||l.options.forceHTTP;0===l.url.indexOf("//")&&y&&(l.url="http:"+l.url),l.options.retina&&(r.detectRetina&&u.ZP.getBrowserProperties().retina?r.detectRetina=!1:l.options.retina=""),l.options.attribution&&(l.options.attribution=function t(r){return-1===r.indexOf("{attribution.")?r:r.replace(/\{attribution.(\w*)\}/,(function(r,e){return t(s[e].options.attribution)}))}(l.options.attribution));var v=p(p({},l.options),n()(r,(function(t){return void 0!==t})));return[l.url,v]};const l={getLayerConfig:s}}}]);