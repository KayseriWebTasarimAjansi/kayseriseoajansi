(window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[]).push([[9],{100:function(r,t,e){"use strict";function n(r){if("number"==typeof r)return!0;var t=(r||"").toString();return!!t&&!isNaN(t)}e.d(t,"a",(function(){return n}))},101:function(r,t,e){"use strict";e.d(t,"a",(function(){return o}));var n=e(28),a=e.n(n),o=function(r){return Array.isArray(r)?a()(r).sort():r}},103:function(r,t,e){"use strict";(function(r){e.d(t,"a",(function(){return l}));var n=e(6),a=e.n(n),o=e(13),i=e(104),c=e(105);function u(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function s(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?u(Object(e),!0).forEach((function(t){a()(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}var f={activeModules:[],isAuthenticated:!1,referenceSiteURL:"",trackingEnabled:!1,trackingID:"",userIDHash:"",userRoles:[]};function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r,a=s(s({},f),t);a.referenceSiteURL&&(a.referenceSiteURL=a.referenceSiteURL.toString().replace(/\/+$/,""));var u=Object(i.a)(a,e),l=Object(c.a)(a,e,u,n),d={},p=function(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];var n=JSON.stringify(t);d[n]||(d[n]=Object(o.once)(l)),d[n].apply(d,t)};return{enableTracking:function(){a.trackingEnabled=!0},disableTracking:function(){a.trackingEnabled=!1},initializeSnippet:u,isTrackingEnabled:function(){return!!a.trackingEnabled},trackEvent:l,trackEventOnce:p}}}).call(this,e(24))},104:function(r,t,e){"use strict";(function(r){e.d(t,"a",(function(){return i}));var n=e(59),a=e(36),o=e(49);function i(t,e){var i,c=Object(n.a)(e),u=t.activeModules,s=t.referenceSiteURL,f=t.userIDHash,l=t.userRoles,d=void 0===l?[]:l,p=t.isAuthenticated,g=t.pluginVersion;return function(){var e=r.document;if(void 0===i&&(i=!!e.querySelector("script[".concat(a.b,"]"))),!i){i=!0;var n=(null==d?void 0:d.length)?d.join(","):"";c("js",new Date),c("config",t.trackingID,{groups:"site_kit",send_page_view:t.isSiteKitScreen,dimension1:s,dimension2:n,dimension3:f,dimension4:g||"",dimension5:Array.from(o.a).join(","),dimension6:u.join(","),dimension7:p?"1":"0"}),c("config",t.trackingID_GA4,{groups:"site_kit",send_page_view:t.isSiteKitScreen,domain:s,plugin_version:g||"",enabled_features:Array.from(o.a).join(","),active_modules:u.join(","),authenticated:p?"1":"0",user_properties:{user_roles:n,user_identifier:f}});var l=e.createElement("script");return l.setAttribute(a.b,""),l.async=!0,l.src="https://www.googletagmanager.com/gtag/js?id=".concat(t.trackingID_GA4,"&l=").concat(a.a),e.head.appendChild(l),{scriptTagSrc:"https://www.googletagmanager.com/gtag/js?id=".concat(t.trackingID_GA4,"&l=").concat(a.a)}}}}}).call(this,e(24))},105:function(r,t,e){"use strict";e.d(t,"a",(function(){return d}));var n=e(5),a=e.n(n),o=e(6),i=e.n(o),c=e(17),u=e.n(c),s=e(59);function f(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function l(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?f(Object(e),!0).forEach((function(t){i()(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function d(r,t,e,n){var o=Object(s.a)(t);return function(){var t=u()(a.a.mark((function t(i,c,u,s){var f;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.trackingEnabled){t.next=3;break}return t.abrupt("return");case 3:return e(),f={send_to:"site_kit",event_category:i,event_label:u,value:s},t.abrupt("return",new Promise((function(r){var t,e,a=setTimeout((function(){n.console.warn('Tracking event "'.concat(c,'" (category "').concat(i,'") took too long to fire.')),r()}),1e3),u=function(){clearTimeout(a),r()};o("event",c,l(l({},f),{},{event_callback:u})),(null===(t=n._gaUserPrefs)||void 0===t||null===(e=t.ioo)||void 0===e?void 0:e.call(t))&&u()})));case 6:case"end":return t.stop()}}),t)})));return function(r,e,n,a){return t.apply(this,arguments)}}()}},1088:function(r,t,e){"use strict";e.r(t);var n=e(4),a=e.n(n),o=e(67),i=e(118),c=e(6),u=e.n(c),s=e(11),f=e.n(s),l=e(13);function d(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function p(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?d(Object(e),!0).forEach((function(t){u()(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}var g={initialState:{},actions:{setValues:function(r,t){return f()(r&&"string"==typeof r,"a valid formName is required for setting values."),f()(Object(l.isPlainObject)(t),"formData must be an object."),{payload:{formName:r,formData:t},type:"SET_FORM_VALUES"}}},controls:{},reducer:function(r,t){var e=t.type,n=t.payload;switch(e){case"SET_FORM_VALUES":var a=n.formName,o=n.formData;return p(p({},r),{},u()({},a,p(p({},r[a]||{}),o)));default:return r}},resolvers:{},selectors:{getValue:function(r,t,e){return(r[t]||{})[e]},hasForm:function(r,t){return!!r[t]}}},v=e(34),b=a.a.combineStores(a.a.commonStore,g,Object(i.a)(v.a),Object(o.b)(v.a));b.initialState,b.actions,b.controls,b.reducer,b.resolvers,b.selectors;a.a.registerStore(v.a,b)},118:function(r,t,e){"use strict";e.d(t,"a",(function(){return b})),e.d(t,"c",(function(){return m})),e.d(t,"b",(function(){return y}));var n=e(23),a=e.n(n),o=e(6),i=e.n(o),c=e(5),u=e.n(c),s=e(11),f=e.n(s),l=e(4),d=e.n(l),p=e(41),g=e(8),v=d.a.createRegistryControl,b=function(r){var t;f()(r,"storeName is required to create a snapshot store.");var e={},n={deleteSnapshot:u.a.mark((function r(){var t;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,{payload:{},type:"DELETE_SNAPSHOT"};case 2:return t=r.sent,r.abrupt("return",t);case 4:case"end":return r.stop()}}),r)})),restoreSnapshot:u.a.mark((function r(){var t,e,n,a,o,i,c=arguments;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:{},e=t.clearAfterRestore,n=void 0===e||e,r.next=4,{payload:{},type:"RESTORE_SNAPSHOT"};case 4:if(a=r.sent,o=a.cacheHit,i=a.value,!o){r.next=13;break}return r.next=10,{payload:{snapshot:i},type:"SET_STATE_FROM_SNAPSHOT"};case 10:if(!n){r.next=13;break}return r.next=13,{payload:{},type:"DELETE_SNAPSHOT"};case 13:return r.abrupt("return",o);case 14:case"end":return r.stop()}}),r)})),createSnapshot:u.a.mark((function r(){var t;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,{payload:{},type:"CREATE_SNAPSHOT"};case 2:return t=r.sent,r.abrupt("return",t);case 4:case"end":return r.stop()}}),r)}))},o=(t={},i()(t,"DELETE_SNAPSHOT",(function(){return Object(p.c)("datastore::cache::".concat(r))})),i()(t,"CREATE_SNAPSHOT",v((function(t){return function(){return Object(p.f)("datastore::cache::".concat(r),t.stores[r].store.getState())}}))),i()(t,"RESTORE_SNAPSHOT",(function(){return Object(p.d)("datastore::cache::".concat(r),g.b)})),t);return{initialState:e,actions:n,controls:o,reducer:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,t=arguments.length>1?arguments[1]:void 0,n=t.type,o=t.payload;switch(n){case"SET_STATE_FROM_SNAPSHOT":var i=o.snapshot,c=(i.error,a()(i,["error"]));return c;default:return r}}}},h=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.a;return Object.values(r.stores).filter((function(r){return Object.keys(r.getActions()).includes("restoreSnapshot")}))},m=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.a;return Promise.all(h(r).map((function(r){return r.getActions().createSnapshot()})))},y=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.a;return Promise.all(h(r).map((function(r){return r.getActions().restoreSnapshot()})))}},2:function(r,t){r.exports=googlesitekit.i18n},32:function(r,t,e){"use strict";(function(r){e.d(t,"a",(function(){return O})),e.d(t,"b",(function(){return m})),e.d(t,"c",(function(){return y}));var n=e(103),a=r._googlesitekitTrackingData||{},o=a.activeModules,i=void 0===o?[]:o,c=a.isSiteKitScreen,u=a.trackingEnabled,s=a.trackingID,f=a.referenceSiteURL,l=a.userIDHash,d=a.isAuthenticated,p={activeModules:i,trackingEnabled:u,trackingID:s,trackingID_GA4:"G-EQDN3BWDSD",referenceSiteURL:f,userIDHash:l,isSiteKitScreen:c,userRoles:a.userRoles,isAuthenticated:d,pluginVersion:"1.128.1"},g=Object(n.a)(p),v=g.enableTracking,b=g.disableTracking,h=(g.isTrackingEnabled,g.initializeSnippet),m=g.trackEvent,y=g.trackEventOnce;function O(r){r?v():b()}c&&u&&h()}).call(this,e(24))},34:function(r,t,e){"use strict";e.d(t,"a",(function(){return n}));var n="core/forms"},36:function(r,t,e){"use strict";e.d(t,"a",(function(){return n})),e.d(t,"b",(function(){return a}));var n="_googlesitekitDataLayer",a="data-googlesitekit-gtag"},4:function(r,t){r.exports=googlesitekit.data},41:function(r,t,e){"use strict";(function(r){e.d(t,"a",(function(){return l})),e.d(t,"d",(function(){return m})),e.d(t,"f",(function(){return y})),e.d(t,"c",(function(){return O})),e.d(t,"e",(function(){return j})),e.d(t,"b",(function(){return w}));var n=e(5),a=e.n(n),o=e(17),i=e.n(o),c=(e(28),e(8));function u(r,t){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!e){if(Array.isArray(r)||(e=function(r,t){if(!r)return;if("string"==typeof r)return s(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return s(r,t)}(r))||t&&r&&"number"==typeof r.length){e&&(r=e);var n=0,a=function(){};return{s:a,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){e=e.call(r)},n:function(){var r=e.next();return i=r.done,r},e:function(r){c=!0,o=r},f:function(){try{i||null==e.return||e.return()}finally{if(c)throw o}}}}function s(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var f,l="googlesitekit_",d="".concat(l).concat("1.128.1","_").concat(r._googlesitekitBaseData.storagePrefix,"_"),p=["sessionStorage","localStorage"],g=[].concat(p),v=function(){var t=i()(a.a.mark((function t(e){var n,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=r[e]){t.next=3;break}return t.abrupt("return",!1);case 3:return t.prev=3,o="__storage_test__",n.setItem(o,o),n.removeItem(o),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t.catch(3),t.abrupt("return",t.t0 instanceof DOMException&&(22===t.t0.code||1014===t.t0.code||"QuotaExceededError"===t.t0.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.t0.name)&&0!==n.length);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(r){return t.apply(this,arguments)}}();function b(){return h.apply(this,arguments)}function h(){return(h=i()(a.a.mark((function t(){var e,n,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===f){t.next=2;break}return t.abrupt("return",f);case 2:e=u(g),t.prev=3,e.s();case 5:if((n=e.n()).done){t.next=15;break}if(o=n.value,!f){t.next=9;break}return t.abrupt("continue",13);case 9:return t.next=11,v(o);case 11:if(!t.sent){t.next=13;break}f=r[o];case 13:t.next=5;break;case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(3),e.e(t.t0);case 20:return t.prev=20,e.f(),t.finish(20);case 23:return void 0===f&&(f=null),t.abrupt("return",f);case 25:case"end":return t.stop()}}),t,null,[[3,17,20,23]])})))).apply(this,arguments)}var m=function(){var r=i()(a.a.mark((function r(t){var e,n,o,i,c,u,s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,b();case 2:if(!(e=r.sent)){r.next=10;break}if(!(n=e.getItem("".concat(d).concat(t)))){r.next=10;break}if(o=JSON.parse(n),i=o.timestamp,c=o.ttl,u=o.value,s=o.isError,!i||c&&!(Math.round(Date.now()/1e3)-i<c)){r.next=10;break}return r.abrupt("return",{cacheHit:!0,value:u,isError:s});case 10:return r.abrupt("return",{cacheHit:!1,value:void 0});case 11:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),y=function(){var t=i()(a.a.mark((function t(e,n){var o,i,u,s,f,l,p,g,v=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=v.length>2&&void 0!==v[2]?v[2]:{},i=o.ttl,u=void 0===i?c.b:i,s=o.timestamp,f=void 0===s?Math.round(Date.now()/1e3):s,l=o.isError,p=void 0!==l&&l,t.next=3,b();case 3:if(!(g=t.sent)){t.next=14;break}return t.prev=5,g.setItem("".concat(d).concat(e),JSON.stringify({timestamp:f,ttl:u,value:n,isError:p})),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t.catch(5),r.console.warn("Encountered an unexpected storage error:",t.t0),t.abrupt("return",!1);case 14:return t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t,null,[[5,10]])})));return function(r,e){return t.apply(this,arguments)}}(),O=function(){var t=i()(a.a.mark((function t(e){var n,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:if(!(n=t.sent)){t.next=14;break}return t.prev=4,o=e.startsWith(l)?e:"".concat(d).concat(e),n.removeItem(o),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t.catch(4),r.console.warn("Encountered an unexpected storage error:",t.t0),t.abrupt("return",!1);case 14:return t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t,null,[[4,10]])})));return function(r){return t.apply(this,arguments)}}(),j=function(){var t=i()(a.a.mark((function t(){var e,n,o,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:if(!(e=t.sent)){t.next=14;break}for(t.prev=4,n=[],o=0;o<e.length;o++)0===(i=e.key(o)).indexOf(l)&&n.push(i);return t.abrupt("return",n);case 10:return t.prev=10,t.t0=t.catch(4),r.console.warn("Encountered an unexpected storage error:",t.t0),t.abrupt("return",[]);case 14:return t.abrupt("return",[]);case 15:case"end":return t.stop()}}),t,null,[[4,10]])})));return function(){return t.apply(this,arguments)}}(),w=function(){var r=i()(a.a.mark((function r(){var t,e,n,o;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,b();case 2:if(!r.sent){r.next=25;break}return r.next=6,j();case 6:t=r.sent,e=u(t),r.prev=8,e.s();case 10:if((n=e.n()).done){r.next=16;break}return o=n.value,r.next=14,O(o);case 14:r.next=10;break;case 16:r.next=21;break;case 18:r.prev=18,r.t0=r.catch(8),e.e(r.t0);case 21:return r.prev=21,e.f(),r.finish(21);case 24:return r.abrupt("return",!0);case 25:return r.abrupt("return",!1);case 26:case"end":return r.stop()}}),r,null,[[8,18,21,24]])})));return function(){return r.apply(this,arguments)}}()}).call(this,e(24))},46:function(r,t,e){"use strict";e.d(t,"c",(function(){return n})),e.d(t,"e",(function(){return a})),e.d(t,"d",(function(){return o})),e.d(t,"b",(function(){return i})),e.d(t,"a",(function(){return c})),e.d(t,"f",(function(){return u}));var n="Date param must construct to a valid date instance or be a valid date instance itself.",a="Invalid dateString parameter, it must be a string.",o='Invalid date range, it must be a string with the format "last-x-days".',i=3600,c=86400,u=604800},47:function(r,t,e){"use strict";e.d(t,"a",(function(){return n}));var n=function(r){return r instanceof Date&&!isNaN(r)}},49:function(r,t,e){"use strict";(function(r){var n,a;e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return i}));var o=new Set((null===(n=r)||void 0===n||null===(a=n._googlesitekitBaseData)||void 0===a?void 0:a.enabledFeatures)||[]),i=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;return t instanceof Set&&t.has(r)}}).call(this,e(24))},54:function(r,t,e){"use strict";e.d(t,"a",(function(){return s}));var n=e(16),a=e.n(n),o=e(11),i=e.n(o),c=e(46),u=e(55),s=function(r){i()(Object(u.a)(r),c.e);var t=r.split("-"),e=a()(t,3),n=e[0],o=e[1],s=e[2];return new Date(n,o-1,s)}},55:function(r,t,e){"use strict";e.d(t,"a",(function(){return a}));var n=e(47),a=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="string"==typeof r;if(!t)return!1;var e=r.split("-");return 3===e.length&&Object(n.a)(new Date(r))}},59:function(r,t,e){"use strict";e.d(t,"a",(function(){return a}));var n=e(36);function a(r){return function(){r[n.a]=r[n.a]||[],r[n.a].push(arguments)}}},61:function(r,t,e){"use strict";e.d(t,"d",(function(){return n.e})),e.d(t,"c",(function(){return n.d})),e.d(t,"b",(function(){return n.b})),e.d(t,"a",(function(){return n.a})),e.d(t,"e",(function(){return n.f})),e.d(t,"g",(function(){return c})),e.d(t,"h",(function(){return s})),e.d(t,"i",(function(){return f})),e.d(t,"j",(function(){return l.a})),e.d(t,"f",(function(){return p})),e.d(t,"k",(function(){return u.a}));var n=e(46),a=e(11),o=e.n(a),i=e(47),c=function(r){o()(Object(i.a)(r),n.c);var t="".concat(r.getMonth()+1),e="".concat(r.getDate());return[r.getFullYear(),t.length<2?"0".concat(t):t,e.length<2?"0".concat(e):e].join("-")},u=e(54),s=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,e=Object(u.a)(r);return e.setDate(e.getDate()-t),c(e)},f=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=r.split("-");return 3===t.length&&"last"===t[0]&&!Number.isNaN(t[1])&&!Number.isNaN(parseFloat(t[1]))&&"days"===t[2]},l=e(55);var d=e(2);function p(){var r=function(r){return Object(d.sprintf)(
/* translators: %s: number of days */
Object(d._n)("Last %s day","Last %s days",r,"google-site-kit"),r)};return{"last-7-days":{slug:"last-7-days",label:r(7),days:7},"last-14-days":{slug:"last-14-days",label:r(14),days:14},"last-28-days":{slug:"last-28-days",label:r(28),days:28},"last-90-days":{slug:"last-90-days",label:r(90),days:90}}}},67:function(r,t,e){"use strict";e.d(t,"a",(function(){return b})),e.d(t,"b",(function(){return h}));var n=e(6),a=e.n(n),o=e(30),i=e.n(o),c=e(151),u=e(11),s=e.n(u),f=e(91),l=e.n(f),d=e(8);function p(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function g(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?p(Object(e),!0).forEach((function(t){a()(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function v(r,t){if(t&&Array.isArray(t)){var e=t.map((function(r){return"object"===i()(r)?Object(d.B)(r):r}));return"".concat(r,"::").concat(l()(JSON.stringify(e)))}return r}var b={receiveError:function(r,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return s()(r,"error is required."),s()(t,"baseName is required."),s()(e&&Array.isArray(e),"args must be an array."),{type:"RECEIVE_ERROR",payload:{error:r,baseName:t,args:e}}},clearError:function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return s()(r,"baseName is required."),s()(t&&Array.isArray(t),"args must be an array."),{type:"CLEAR_ERROR",payload:{baseName:r,args:t}}},clearErrors:function(r){return{type:"CLEAR_ERRORS",payload:{baseName:r}}}};function h(r){s()(r,"storeName must be defined.");var t={getErrorForSelector:function(r,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return s()(e,"selectorName is required."),t.getError(r,e,n)},getErrorForAction:function(r,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return s()(e,"actionName is required."),t.getError(r,e,n)},getError:function(r,t,e){var n=r.errors;return s()(t,"baseName is required."),n[v(t,e)]},getErrors:function(r){var t=new Set(Object.values(r.errors));return Array.from(t)},getMetaDataForError:function(r,t){var e=Object.keys(r.errors).find((function(e){return r.errors[e]===t}));return e?{baseName:e.substring(0,e.indexOf("::")),args:r.errorArgs[e]}:null},getSelectorDataForError:Object(c.b)((function(t){return function(e,n){var a=t(r).getMetaDataForError(n);if(a){var o=a.baseName,i=a.args;if(!!t(r)[o])return{storeName:r,name:o,args:i}}return null}})),hasErrors:function(r){return t.getErrors(r).length>0}};return{initialState:{errors:{},errorArgs:{}},actions:b,controls:{},reducer:function(r,t){var e=t.type,n=t.payload;switch(e){case"RECEIVE_ERROR":var o=n.baseName,i=n.args,c=n.error,u=v(o,i);return g(g({},r),{},{errors:g(g({},r.errors||{}),{},a()({},u,c)),errorArgs:g(g({},r.errorArgs||{}),{},a()({},u,i))});case"CLEAR_ERROR":var s=n.baseName,f=n.args,l=g({},r),d=v(s,f);return l.errors=g({},r.errors||{}),l.errorArgs=g({},r.errorArgs||{}),delete l.errors[d],delete l.errorArgs[d],l;case"CLEAR_ERRORS":var p=n.baseName,b=g({},r);if(p)for(var h in b.errors=g({},r.errors||{}),b.errorArgs=g({},r.errorArgs||{}),b.errors)(h===p||h.startsWith("".concat(p,"::")))&&(delete b.errors[h],delete b.errorArgs[h]);else b.errors={},b.errorArgs={};return b;default:return r}},resolvers:{},selectors:t}}},73:function(r,t,e){"use strict";(function(r){e.d(t,"a",(function(){return k})),e.d(t,"d",(function(){return S})),e.d(t,"e",(function(){return _})),e.d(t,"c",(function(){return D})),e.d(t,"b",(function(){return N}));var n=e(16),a=e.n(n),o=e(30),i=e.n(o),c=e(6),u=e.n(c),s=e(23),f=e.n(s),l=e(13),d=e(69),p=e.n(d),g=e(2);function v(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function b(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?v(Object(e),!0).forEach((function(t){u()(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}var h=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=O(r,t),n=e.formatUnit,a=e.formatDecimal;try{return n()}catch(r){return a()}},m=function(r){var t=y(r),e=t.hours,n=t.minutes,a=t.seconds;return a=("0"+a).slice(-2),n=("0"+n).slice(-2),"00"===(e=("0"+e).slice(-2))?"".concat(n,":").concat(a):"".concat(e,":").concat(n,":").concat(a)},y=function(r){return r=parseInt(r,10),Number.isNaN(r)&&(r=0),{hours:Math.floor(r/60/60),minutes:Math.floor(r/60%60),seconds:Math.floor(r%60)}},O=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=y(r),n=e.hours,a=e.minutes,o=e.seconds;return{hours:n,minutes:a,seconds:o,formatUnit:function(){var e=t.unitDisplay,i=b(b({unitDisplay:void 0===e?"short":e},f()(t,["unitDisplay"])),{},{style:"unit"});return 0===r?_(o,b(b({},i),{},{unit:"second"})):Object(g.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(g._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),o?_(o,b(b({},i),{},{unit:"second"})):"",a?_(a,b(b({},i),{},{unit:"minute"})):"",n?_(n,b(b({},i),{},{unit:"hour"})):"").trim()},formatDecimal:function(){var t=Object(g.sprintf)(// translators: %s: number of seconds with "s" as the abbreviated unit.
Object(g.__)("%ds","google-site-kit"),o);if(0===r)return t;var e=Object(g.sprintf)(// translators: %s: number of minutes with "m" as the abbreviated unit.
Object(g.__)("%dm","google-site-kit"),a),i=Object(g.sprintf)(// translators: %s: number of hours with "h" as the abbreviated unit.
Object(g.__)("%dh","google-site-kit"),n);return Object(g.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(g._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),o?t:"",a?e:"",n?i:"").trim()}}},j=function(r){return 1e6<=r?Math.round(r/1e5)/10:1e4<=r?Math.round(r/1e3):1e3<=r?Math.round(r/100)/10:r},w=function(r){var t={minimumFractionDigits:1,maximumFractionDigits:1};return 1e6<=r?Object(g.sprintf)(// translators: %s: an abbreviated number in millions.
Object(g.__)("%sM","google-site-kit"),_(j(r),r%10==0?{}:t)):1e4<=r?Object(g.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(g.__)("%sK","google-site-kit"),_(j(r))):1e3<=r?Object(g.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(g.__)("%sK","google-site-kit"),_(j(r),r%10==0?{}:t)):_(r,{signDisplay:"never",maximumFractionDigits:1})};function k(r){var t={};return"%"===r?t={style:"percent",maximumFractionDigits:2}:"s"===r?t={style:"duration",unitDisplay:"narrow"}:r&&"string"==typeof r?t={style:"currency",currency:r}:Object(l.isPlainObject)(r)&&(t=b({},r)),t}function S(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r=Object(l.isFinite)(r)?r:Number(r),Object(l.isFinite)(r)||(console.warn("Invalid number",r,i()(r)),r=0);var e=k(t),n=e.style,a=void 0===n?"metric":n;return"metric"===a?w(r):"duration"===a?h(r,e):"durationISO"===a?m(r):_(r,e)}var E=p()(console.warn),_=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.locale,n=void 0===e?N():e,o=f()(t,["locale"]);try{return new Intl.NumberFormat(n,o).format(r)}catch(t){E("Site Kit numberFormat error: Intl.NumberFormat( ".concat(JSON.stringify(n),", ").concat(JSON.stringify(o)," ).format( ").concat(i()(r)," )"),t.message)}for(var c={currencyDisplay:"narrow",currencySign:"accounting",style:"unit"},u=["signDisplay","compactDisplay"],s={},l=0,d=Object.entries(o);l<d.length;l++){var p=a()(d[l],2),g=p[0],v=p[1];c[g]&&v===c[g]||(u.includes(g)||(s[g]=v))}try{return new Intl.NumberFormat(n,s).format(r)}catch(t){return new Intl.NumberFormat(n).format(r)}},D=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.locale,n=void 0===e?N():e,a=t.style,o=void 0===a?"long":a,i=t.type,c=void 0===i?"conjunction":i;if(Intl.ListFormat){var u=new Intl.ListFormat(n,{style:o,type:c});return u.format(r)}
/* translators: used between list items, there is a space after the comma. */var s=Object(g.__)(", ","google-site-kit");return r.join(s)},N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,e=Object(l.get)(t,["_googlesitekitLegacyData","locale"]);if(e){var n=e.match(/^(\w{2})?(_)?(\w{2})/);if(n&&n[0])return n[0].replace(/_/g,"-")}return t.navigator.language}}).call(this,e(24))},74:function(r,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return c}));var n=e(30),a=e.n(n),o=e(80),i=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{__html:o.a.sanitize(r,t)}};function c(r){var t,e="object"===a()(r)?r.toString():r;return null==e||null===(t=e.replace)||void 0===t?void 0:t.call(e,/\/+$/,"")}},79:function(r,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"a",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"d",(function(){return c}));var n=e(108);function a(r){try{return new URL(r).pathname}catch(r){}return null}function o(r,t){try{return new URL(t,r).href}catch(r){}return("string"==typeof r?r:"")+("string"==typeof t?t:"")}function i(r){return"string"!=typeof r?r:r.replace(/^https?:\/\/(www\.)?/i,"").replace(/\/$/,"")}function c(r,t){if(!Object(n.a)(r))return r;if(r.length<=t)return r;var e=new URL(r),a=r.replace(e.origin,"");if(a.length<t)return a;var o=a.length-Math.floor(t)+1;return"…"+a.substr(o)}},8:function(r,t,e){"use strict";(function(r){e.d(t,"p",(function(){return b})),e.d(t,"d",(function(){return h})),e.d(t,"F",(function(){return m})),e.d(t,"h",(function(){return y}));var n=e(13),a=e(32);e.d(t,"C",(function(){return a.b})),e.d(t,"D",(function(){return a.c}));var o=e(74);e.d(t,"z",(function(){return o.a})),e.d(t,"E",(function(){return o.b}));var i=e(94);e.d(t,"B",(function(){return i.a}));e(95);var c=e(73);e.d(t,"i",(function(){return c.a})),e.d(t,"n",(function(){return c.b})),e.d(t,"t",(function(){return c.c})),e.d(t,"w",(function(){return c.d})),e.d(t,"x",(function(){return c.e}));var u=e(96);e.d(t,"u",(function(){return u.a}));var s=e(97);e.d(t,"f",(function(){return s.a})),e.d(t,"g",(function(){return s.b}));var f=e(61);e.d(t,"a",(function(){return f.a})),e.d(t,"b",(function(){return f.b})),e.d(t,"c",(function(){return f.e})),e.d(t,"j",(function(){return f.f})),e.d(t,"l",(function(){return f.g})),e.d(t,"o",(function(){return f.h})),e.d(t,"A",(function(){return f.k}));var l=e(98);e.d(t,"e",(function(){return l.a})),e.d(t,"k",(function(){return l.b}));var d=e(79);e.d(t,"m",(function(){return d.a})),e.d(t,"q",(function(){return d.b})),e.d(t,"v",(function(){return d.c}));var p=e(99);e.d(t,"s",(function(){return p.a}));var g=e(100);e.d(t,"r",(function(){return g.a}));var v=e(101);e.d(t,"y",(function(){return v.a})),r._gsktag=a.b;var b=function(r){switch(r){case"minute":return 60;case"hour":return 3600;case"day":return 86400;case"week":return 604800;case"month":return 2592e3;case"year":return 31536e3}};function h(r,t){var e=function(r){return"0"===r||0===r};if(e(r)&&e(t))return 0;if(e(r)||Number.isNaN(r))return null;var n=(t-r)/r;return Number.isNaN(n)||!Number.isFinite(n)?null:n}var m=function(r){try{return JSON.parse(r)&&!!r}catch(r){return!1}},y=function(r){if(!r)return"";var t=r.replace(/&#(\d+);/g,(function(r,t){return String.fromCharCode(t)})).replace(/(\\)/g,"");return Object(n.unescape)(t)}}).call(this,e(24))},80:function(r,t,e){"use strict";(function(r){e.d(t,"a",(function(){return a}));var n=e(150),a=e.n(n)()(r)}).call(this,e(24))},81:function(r,t,e){"use strict";(function(r){var n=e(0),a=e.n(n),o=e(12),i=e.n(o);function ChangeArrow(t){var e=t.direction,n=t.invertColor,a=t.width,o=t.height;return r.createElement("svg",{className:i()("googlesitekit-change-arrow","googlesitekit-change-arrow--".concat(e),{"googlesitekit-change-arrow--inverted-color":n}),width:a,height:o,viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M5.625 10L5.625 2.375L9.125 5.875L10 5L5 -1.76555e-07L-2.7055e-07 5L0.875 5.875L4.375 2.375L4.375 10L5.625 10Z",fill:"currentColor"}))}ChangeArrow.propTypes={direction:a.a.string,invertColor:a.a.bool,width:a.a.number,height:a.a.number},ChangeArrow.defaultProps={direction:"up",invertColor:!1,width:9,height:9},t.a=ChangeArrow}).call(this,e(3))},94:function(r,t,e){"use strict";e.d(t,"a",(function(){return c}));var n=e(30),a=e.n(n),o=e(91),i=e.n(o),c=function(r){return i()(JSON.stringify(function r(t){var e={};return Object.keys(t).sort().forEach((function(n){var o=t[n];o&&"object"===a()(o)&&!Array.isArray(o)&&(o=r(o)),e[n]=o})),e}(r)))}},95:function(r,t,e){"use strict";(function(r){e(50),e(52)}).call(this,e(24))},96:function(r,t,e){"use strict";function n(r){return r.replace(new RegExp("\\[([^\\]]+)\\]\\((https?://[^/]+\\.\\w+/?.*?)\\)","gi"),'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')}function a(r){return"<p>".concat(r.replace(/\n{2,}/g,"</p><p>"),"</p>")}function o(r){return r.replace(/\n/gi,"<br>")}function i(r){for(var t=r,e=0,i=[n,a,o];e<i.length;e++){t=(0,i[e])(t)}return t}e.d(t,"a",(function(){return i}))},97:function(r,t,e){"use strict";e.d(t,"b",(function(){return n})),e.d(t,"a",(function(){return a}));var n=function(r){return r=parseFloat(r),isNaN(r)||0===r?[0,0,0,0]:[Math.floor(r/60/60),Math.floor(r/60%60),Math.floor(r%60),Math.floor(1e3*r)-1e3*Math.floor(r)]},a=function(r){var t=r&&!Number.isInteger(r)?new Date(r).getTime():r;return isNaN(t)||!t?0:t}},98:function(r,t,e){"use strict";(function(r){e.d(t,"b",(function(){return o})),e.d(t,"a",(function(){return i}));var n=e(228),a=e(81),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Number.isNaN(Number(t)))return"";var o=e.invertColor,i=void 0!==o&&o;return Object(n.a)(r.createElement(a.a,{direction:t>0?"up":"down",invertColor:i}))},i=function(r,t){return r>0&&t>0?r/t-1:r>0?1:t>0?-1:0}}).call(this,e(3))},99:function(r,t,e){"use strict";function n(r){var t=parseFloat(r)||0;return!!Number.isInteger(t)&&t>0}e.d(t,"a",(function(){return n}))}},[[1088,1,0]]]);