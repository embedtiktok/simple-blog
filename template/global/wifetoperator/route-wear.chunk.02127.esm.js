(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"7ncz":function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t);var c,o=r("hosL"),i=r("/eY4"),s=r("bbv7"),p=r("wgWz");const b=p.a.makeRandomData({cnt:500,min:0,max:1e3,onlyUp:!0,inputData:[],diff:2}),u={aiData:p.a.makeRandomData({cnt:500,min:0,max:1e3,onlyUp:!0,wearData:b,diff:2}),wearData:b};let l=Object(i.a)(c=class extends o.Component{constructor(e){super(e),this.state=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},u)}render(){const{wearData:e,aiData:t}=this.state;return Object(o.h)("div",{class:"container-fluid mt-5 pt-2"},Object(o.h)("div",{class:"row"},Object(o.h)("div",{class:"col-12"},Object(o.h)("h1",null,"Wear"),Object(o.h)(s.a,{stores:this.props.stores,data:e,dataB:t,legend:"Wear",legendB:"AI prediction",width:1200,height:500,yMax:1e3,yMin:0,showYTicks:1,yTicks:'["100%", "75%", "50%", "25%", "0%"]',unit:"%",showXTicks:1,marker:400}))))}})||c;t.default=l}}]);
//# sourceMappingURL=route-wear.chunk.02127.esm.js.map