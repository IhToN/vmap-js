"use strict";var classCallCheck=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},createClass=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),VMAPAdSource=function t(e){for(var a in classCallCheck(this,t),this.id=e.getAttribute("id"),this.allowMultipleAds=e.getAttribute("allowMultipleAds"),this.followRedirects=e.getAttribute("followRedirects"),this.vastAdData=null,this.adTagURI=null,this.customData=null,e.childNodes){var i=e.childNodes[a];switch(i.localName){case"AdTagURI":this.adTagURI={templateType:i.getAttribute("templateType"),uri:(i.textContent||i.text||"").trim()};break;case"VASTAdData":for(this.vastAdData=i.firstChild;this.vastAdData&&1!==this.vastAdData.nodeType;)this.vastAdData=this.vastAdData.nextSibling;break;case"CustomAdData":this.customData=i}}},VMAPAdBreak=function(){function t(e){for(var a in classCallCheck(this,t),this.timeOffset=e.getAttribute("timeOffset"),this.breakType=e.getAttribute("breakType"),this.breakId=e.getAttribute("breakId"),this.repeatAfter=e.getAttribute("repeatAfter"),this.adSource=null,this.trackingEvents=[],this.extensions=[],e.childNodes){var i=e.childNodes[a];switch(i.localName){case"AdSource":this.adSource=new VMAPAdSource(i);break;case"TrackingEvents":for(var s in i.childNodes){var r=i.childNodes[s];"Tracking"===r.localName&&this.trackingEvents.push({event:r.getAttribute("event"),uri:(r.textContent||r.text||"").trim()})}break;case"Extensions":this.extensions=i.childNodes}}}return createClass(t,[{key:"track",value:function(t,e){for(var a in this.trackingEvents){var i=this.trackingEvents[a];if(i.event===t){var s=i.uri;"error"===i.event&&(s=s.replace("[ERRORCODE]",e)),this.tracker(s)}}}},{key:"tracker",value:function(t){"undefined"!=typeof window&&null!==window&&((new Image).src=t)}}]),t}(),VMAP=function t(e){if(classCallCheck(this,t),null==(null!=e?e.documentElement:void 0)||"VMAP"!==e.documentElement.localName)throw new Error("Not a VMAP document");for(var a in this.version=e.documentElement.getAttribute("version"),this.adBreaks=[],this.extensions=[],e.documentElement.childNodes){var i=e.documentElement.childNodes[a];switch(i.localName){case"AdBreak":this.adBreaks.push(new VMAPAdBreak(i));break;case"Extensions":this.extensions=i.childNodes}}};module.exports=VMAP;
