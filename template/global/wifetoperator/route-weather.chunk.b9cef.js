(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{JmdN:function(t,a,e){"use strict";function n(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}e.r(a);var o,i=e("hosL"),c=e("/eY4"),s=e("bbv7"),p=e("wgWz"),d=p.a.makeRandomData({cnt:500,min:0,max:25,onlyUp:!1,inputData:[],diff:1}),m=p.a.makeRandomData({cnt:500,min:0,max:25,onlyUp:!1,inputData:d,diff:1,maxSkew:5}),f=p.a.makeRandomData({cnt:500,min:0,max:25,onlyUp:!1,inputData:d,diff:1,maxSkew:5}),u={forcastYrData:d,forcastStormData:m,aiData:f,windData:p.a.makeRandomData({cnt:500,min:0,max:25,onlyUp:!1,inputData:f,diff:1,maxSkew:5,cutoff:166})},l=Object(c.a)(o=function(t){function a(a){var e;return(e=t.call(this,a)||this).state=function(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?n(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}({},u),e}var e,o;return o=t,(e=a).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o,a.prototype.render=function(){var t=this.state,a=t.windData,e=t.forcastYrData,n=t.forcastStormData,r=t.aiData;return Object(i.h)("div",{class:"container-fluid mt-5 pt-2"},Object(i.h)("div",{class:"row"},Object(i.h)("div",{class:"col-12"},Object(i.h)("h1",null,"Weather"),Object(i.h)(s.a,{stores:this.props.stores,data:a,dataB:r,dataC:n,dataD:e,legend:"Wind",legendB:"Wind AI prediction",legendC:"Wind forcast Yr",legendD:"Wind forcast Storm",width:1200,height:500,yMax:30,yMin:0,showYTicks:1,yTicks:'["30 m/s", "25 m/s", "20 m/s", "15 m/s", "10 m/s", "5 m/s", "0 m/s"]',unit:"m/s",showXTicks:1,marker:400,avgWindow:8,avgWindowB:8,avgWindowC:8,avgWindowD:8}))))},a}(i.Component))||o;a.default=l}}]);
//# sourceMappingURL=route-weather.chunk.b9cef.js.map