(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{XWFe:function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.r(e);var o,c=r("hosL"),i=r("/eY4"),s=r("bbv7"),p=r("wgWz"),u=p.a.makeRandomData({cnt:500,min:0,max:200,onlyUp:!1,inputData:[],diff:5}),O={aiData:p.a.makeRandomData({cnt:500,min:0,max:200,onlyUp:!1,priceData:u,diff:2}),priceData:u},b=Object(i.a)(o=function(t){function e(e){var r;return(r=t.call(this,e)||this).state=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},O),r}var r,o;return o=t,(r=e).prototype=Object.create(o.prototype),r.prototype.constructor=r,r.__proto__=o,e.prototype.render=function(){var t=this.state,e=t.priceData,r=t.aiData;return Object(c.h)("div",{class:"container-fluid mt-5 pt-2"},Object(c.h)("div",{class:"row"},Object(c.h)("div",{class:"col-12"},Object(c.h)("h1",null,"Prices"),Object(c.h)(s.a,{stores:this.props.stores,data:e,dataB:r,legend:"Prices",legendB:"AI prediction",width:1200,height:500,yMax:200,yMin:0,showYTicks:1,yTicks:'["2 NOK", "1.5 NOK", "1 NOK", "0.5 NOK", "0 NOK"]',unit:"øre",showXTicks:1,marker:400,avgWindow:8,avgWindowB:8}))))},e}(c.Component))||o;e.default=b}}]);
//# sourceMappingURL=route-prices.chunk.18ce7.js.map