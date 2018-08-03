var VMAP=function(){"use strict";var t=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},e=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),n=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},r=function e(n){for(var r in t(this,e),this.id=n.getAttribute("id"),this.allowMultipleAds=n.getAttribute("allowMultipleAds"),this.followRedirects=n.getAttribute("followRedirects"),this.vastAdData=null,this.adTagURI=null,this.customData=null,n.childNodes){var a=n.childNodes[r];switch(a.localName){case"AdTagURI":this.adTagURI={templateType:a.getAttribute("templateType"),uri:(a.textContent||a.text||"").trim()};break;case"VASTAdData":for(this.vastAdData=a.firstChild;this.vastAdData&&1!==this.vastAdData.nodeType;)this.vastAdData=this.vastAdData.nextSibling;break;case"CustomAdData":this.customData=a}}};function a(t,e){return[].concat(n(t.childNodes)).filter(function(t){return t.nodeName===e||e==="vmap:"+t.nodeName||t.nodeName==="vmap:"+e})}function i(t){var e={attributes:{},children:{},value:null};return e.value=function(t){return t&&t.childNodes&&[].concat(n(t.childNodes)).filter(function(t){return"#text"===t.nodeName}).reduce(function(t,e){return t+e.textContent.trim()},"")}(t)||null,t.attributes&&[].concat(n(t.attributes)).forEach(function(t){t.nodeName&&void 0!==t.nodeValue&&null!==t.nodeValue&&(e.attributes[t.nodeName]=t.nodeValue)}),[].concat(n(t.childNodes)).filter(function(t){return"#text"!==t.nodeName&&"#comment"!==t.nodeName}).forEach(function(t){e.children[t.nodeName]=i(t)}),e}var o=function(){function n(e){for(var o in t(this,n),this.timeOffset=e.getAttribute("timeOffset"),this.breakType=e.getAttribute("breakType"),this.breakId=e.getAttribute("breakId"),this.repeatAfter=e.getAttribute("repeatAfter"),this.adSource=null,this.trackingEvents=[],this.extensions=[],e.childNodes){var s=e.childNodes[o];switch(s.localName){case"AdSource":this.adSource=new r(s);break;case"TrackingEvents":for(var c in s.childNodes){var u=s.childNodes[c];"Tracking"===u.localName&&this.trackingEvents.push({event:u.getAttribute("event"),uri:(u.textContent||u.text||"").trim()})}break;case"Extensions":this.extensions=a(s,"Extension").map(function(t){return i(t)})}}}return e(n,[{key:"track",value:function(t,e){for(var n in this.trackingEvents){var r=this.trackingEvents[n];if(r.event===t){var a=r.uri;"error"===r.event&&(a=a.replace("[ERRORCODE]",e)),this.tracker(a)}}}},{key:"tracker",value:function(t){"undefined"!=typeof window&&null!==window&&((new Image).src=t)}}]),n}();return function e(n){if(t(this,e),null==(null!=n?n.documentElement:void 0)||"VMAP"!==n.documentElement.localName)throw new Error("Not a VMAP document");for(var r in this.version=n.documentElement.getAttribute("version"),this.adBreaks=[],this.extensions=[],n.documentElement.childNodes){var s=n.documentElement.childNodes[r];switch(s.localName){case"AdBreak":this.adBreaks.push(new o(s));break;case"Extensions":this.extensions=a(s,"Extension").map(function(t){return i(t)})}}}}();
