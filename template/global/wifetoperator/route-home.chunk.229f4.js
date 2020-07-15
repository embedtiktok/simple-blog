(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+1Jk":function(t,a,e){"use strict";function n(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}e.r(a);var r,c=e("hosL"),o=e("/eY4"),s=e("bbv7"),h=e("wgWz"),d={productionData:h.a.makeRandomData(500,20,60),wearData:h.a.makeRandomData(300,20,60),windData:h.a.makeRandomData(300,20,60),priceData:h.a.makeRandomData(300,20,60),demandData:h.a.makeRandomData(300,20,60)},p=Object(o.a)(r=function(t){function a(a){var e;return(e=t.call(this,a)||this).state=function(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?n(Object(e),!0).forEach((function(a){i(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}({},d),e.loadAll(),e}var e,r;r=t,(e=a).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var o=a.prototype;return o.loadAll=function(){return new Promise(function(t,a){var e,n;return n=(e=this.props.stores).userStore,e.appState.getFingerprint(),Promise.resolve(n.getInfo()).then((function(){try{return t()}catch(t){return a(t)}}),a)}.bind(this))},o.render=function(){var t=this.state,a=t.productionData,e=t.wearData,n=t.windData,i=t.priceData,r=t.demandData;return Object(c.h)("div",{class:"container-fluid mt-5 pt-2"},Object(c.h)("div",{class:"row"},Object(c.h)("div",{class:"col-12"},Object(c.h)("h1",null,"Home"),Object(c.h)("div",{class:"d-flex"},Object(c.h)("div",{class:"p-2 flex-grow-1 bg-light mr-2"},Object(c.h)("i",{class:"fas fa-chart-bar"})," Production / ",Object(c.h)("i",{class:"fas fa-thermometer"})," Wear",Object(c.h)(s.a,{data:a,data2:e,width:1200,height:300,yMax:100,y2Max:100,showYTicks:1,yTicks:'["100%", "75%", "50%", "25%", "0%"]',showXTicks:1})),Object(c.h)("div",{class:"p-2 bg-light"},Object(c.h)("i",{class:"fas fa-battery-three-quarters"})," Wear status")),Object(c.h)("div",{class:"d-flex mt-2"},Object(c.h)("div",{class:"p-2 flex-fill bg-light mr-2"},Object(c.h)("i",{class:"fas fa-cloud-sun-rain"})," Weather",Object(c.h)(s.a,{data:n,width:300,height:200,yMax:100,showYTicks:1,yTicks:'["20 m/s", "15 m/s", "10 m/s", "5 m/s", "0 m/s"]',showXTicks:1})),Object(c.h)("div",{class:"p-2 flex-fill bg-light mr-2"},Object(c.h)("i",{class:"fas fa-chart-line"})," Electricity prices",Object(c.h)(s.a,{data:i,width:300,height:200,yMax:100,showYTicks:1,yTicks:'["2 NOK", "1.5 NOK", "1 NOK", "0.5 NOK", "0 NOK"]',showXTicks:1})),Object(c.h)("div",{class:"p-2 flex-fill bg-light"},Object(c.h)("i",{class:"fas fa-hand-holding-usd"})," Demand",Object(c.h)(s.a,{data:r,width:300,height:200,yMax:100,showYTicks:1,yTicks:'["100 MWh", "75 MWh", "50 MWh", "25 MWh", "0 MWh"]',showXTicks:1}))))))},a}(c.Component))||r;a.default=p},VtuJ:function(t){t.exports={lineChart:"lineChart__1V7gu",svg:"svg__2VZNe",path:"path__39L9w",pathCold:"pathCold__1X7YC",pathWarm:"pathWarm__1_vqU",pathText:"pathText__2RfbE",pathB:"pathB__4I_xm",path2:"path2__19gje",path2B:"path2B__-l86N",path2C:"path2C__3xnAW",path3:"path3__1IFnl","x-axis":"x-axis__1601s","y-axis":"y-axis__13f0R","y-axis2":"y-axis2__3xPFM"}},bbv7:function(t,a,e){"use strict";function n(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?n(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function c(t,a,e,n,i){void 0===n&&(n=""),void 0===i&&(i="");var r=Array.from(Array(t).keys()),c=Math.ceil(e)-Math.floor(a);return r.map((function(e){return""+n+(parseInt(c/(t-1)*e,10)+Math.floor(a))+i}))}function o(t){if(t)return JSON.parse(t)}function s(t){if("string"==typeof t&&t.match(/\d+h/)){var a=3600*t.replace(/h/g,"")*1e3,e=b.a.epoch();return b.a.isoDate(e-a)}return t}function h(t,a,e,n,i){return n+(t-a)*(i-n)/(e-a)}function d(t,a){void 0===a&&(a=!1);var e=1;return t<0&&(e=-1),a&&1===e?5*Math.floor(Math.abs(t)/5)*e:5*Math.ceil(Math.abs(t)/5)*e}function p(t){var a=t.data,e=t.max;return b.a.isNumber(e)?Math.max.apply(Math,[e].concat(a.map((function(t){return t.y})))):Math.max.apply(Math,a.map((function(t){return t.y})))}function l(t){var a=t.data,e=t.min;return b.a.isNumber(e)?Math.min.apply(Math,[e].concat(a.map((function(t){return t.y})))):Math.min.apply(Math,a.map((function(t){return t.y})))}function u(t){var a=t.data,e=t.yMin,n=t.yMax,i=t.width,r=t.height,c=t.yRangeMin,o=t.yRangeMax,s=t.offsetY,u=void 0===s?0:s,y=t.maxMinFixed,f=void 0!==y&&y;if(a&&a.length){var x,m,v=Math.max.apply(Math,a.map((function(t){return t.x})));x=f?b.a.isNumber(e)?e:l({data:a}):d(x=b.a.isNumber(e)?l({data:a,min:e}):l({data:a}),!0),m=f?b.a.isNumber(n)?n:p({data:a}):d(m=b.a.isNumber(n)?p({data:a,max:n}):p({data:a}));var O=r-u,g=function(t){return t/v*i},j=function(t){var a=t;return b.a.isNumber(c)&&b.a.isNumber(o)?(a=h(a,x,m,c,o),O-h(a,c,o,u,r)):(a=h(a,x,m,x,m),O-h(a,x,m,u,r))};return{d:"M-100 "+(O+u)+" L"+g(a[0].x)+" "+j(a[0].y)+" \n            "+a.slice(1).map((function(t){return"L"+g(t.x)+" "+j(t.y)})).join(" ")+"\n            L"+(g(v)+100)+" "+(O+u)+"\n        ",maxX:v,maxY:m,minY:x}}return{}}var y=e("hosL"),f=e("VtuJ"),x=e.n(f),b=e("Utv1"),m={};a.a=function(t){function a(a){var e;return(e=t.call(this,a)||this).setState(i({},m)),e}var e,n;return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props,a=t.width,e=void 0===a?600:a,n=t.height,r=void 0===n?200:n,h=t.offsetY,f=t.paddingLeft,b=t.paddingBottom,m=t.tickCount,v=void 0===m?6:m,O=t.showXTicks,g=t.showYTicks,j=t.xTicks,M=t.yTicks,w=t.yTicksPrefix,_=t.yTicksPostfix,k=void 0===_?"°C":_,T=t.yMin,D=t.showY2Ticks,P=t.y2Ticks,R=t.y2TicksPrefix,C=t.y2TicksPostfix,B=void 0===C?"°C":C,N=t.y2Max,Y=t.y2Min,W=t.y2BMax,z=t.y2BMin,I=t.range2bMin,S=void 0===I?0:I,X=t.range2bMax,F=void 0===X?100:X,L=t.y2CMax,A=t.y2CMin,E=t.range2cMin,J=void 0===E?0:E,K=t.range2cMax,V=void 0===K?100:K,q=t.y3Min,U=t.y3Max,H=t.range3Min,Z=void 0===H?0:H,G=t.range3Max,Q=void 0===G?100:G,$=t.legend,tt=t.legendB,at=t.legend2,et=t.legend2B,nt=t.legend2C,it=t.legend3,rt=t.data,ct=void 0===rt?[]:rt,ot=t.dataB,st=void 0===ot?[]:ot,ht=t.data2,dt=void 0===ht?[]:ht,pt=t.data2B,lt=void 0===pt?[]:pt,ut=t.data2C,yt=void 0===ut?[]:ut,ft=t.data3,xt=void 0===ft?[]:ft,bt=(void 0===f?0:f)||(g?30:0),mt=(void 0===b?0:b)||(O?20:0),vt={width:e,height:r,offsetY:void 0===h?0:h},Ot=p({data:ct,max:t.yMax}),gt=d(p({data:st,max:Ot})),jt=l({data:ct,min:T}),Mt=d(l({data:st,min:jt}),!0),wt=u(i(i({},vt),{},{data:ct,yMin:Mt,yMax:gt,maxMinFixed:!0})),_t=wt.d,kt=wt.maxX,Tt=void 0===kt?0:kt,Dt=u(i(i({},vt),{},{data:st,yMin:Mt,yMax:gt,maxMinFixed:!0})).d,Pt=u(i(i({},vt),{},{data:dt,yMin:Y,yMax:N})),Rt=Pt.d,Ct=Pt.minY,Bt=void 0===Ct?0:Ct,Nt=Pt.maxY,Yt=void 0===Nt?0:Nt,Wt=u(i(i({},vt),{},{data:lt,yMin:z,yMax:W,yRangeMin:S,yRangeMax:F})).d,zt=u(i(i({},vt),{},{data:yt,yMin:A,yMax:L,yRangeMin:J,yRangeMax:V,maxMinFixed:!0})).d,It=u(i(i({},vt),{},{data:xt,yMin:q,yMax:U,yRangeMin:Z,yRangeMax:Q})).d,St=o(j)||c(v,0,Tt),Xt=o(M)||c(v,Mt,gt,w,k).reverse(),Ft=o(P)||c(v,Bt,Yt,R,B).reverse();return Object(y.h)("div",{class:x.a.lineChart,style:"height: "+r+"px; overflow: hidden;"},Object(y.h)("svg",{xmlns:"http://www.w3.org/2000/svg",class:x.a.svg,viewBox:"0 0 "+e+" "+r,preserveAspectRatio:"none",style:"padding-left: "+bt+"px; padding-bottom: "+mt+"px; width: calc(100%); max-height: 100%;"},It&&Object(y.h)("path",{d:It,class:x.a.path3}),zt&&Object(y.h)("path",{d:zt,class:x.a.path2C}),Wt&&Object(y.h)("path",{d:Wt,class:x.a.path2B}),Rt&&Object(y.h)("path",{d:Rt,class:x.a.path2}),Dt&&Object(y.h)("path",{d:Dt,class:x.a.pathB}),_t&&Object(y.h)("path",{d:_t,class:x.a.path}),$&&Object(y.h)("line",{x1:"10",y1:"5",x2:"30",y2:"5",class:x.a.path}),$&&Object(y.h)("text",{x:"35",y:"10","font-size":"10px",class:x.a.pathText},$),at&&Object(y.h)("line",{x1:"10",y1:"15",x2:"30",y2:"15",class:x.a.path2}),at&&Object(y.h)("text",{x:"35",y:"20","font-size":"10px",class:x.a.pathText},at),it&&Object(y.h)("line",{x1:"10",y1:"25",x2:"30",y2:"25",class:x.a.path3}),it&&Object(y.h)("text",{x:"35",y:"30","font-size":"10px",class:x.a.pathText},it),tt&&Object(y.h)("line",{x1:"10",y1:"35",x2:"30",y2:"35",class:x.a.pathB}),tt&&Object(y.h)("text",{x:"35",y:"40","font-size":"10px",class:x.a.pathText},tt),et&&Object(y.h)("line",{x1:"10",y1:"45",x2:"30",y2:"45",class:x.a.path2B}),et&&Object(y.h)("text",{x:"35",y:"50","font-size":"10px",class:x.a.pathText},et),nt&&Object(y.h)("line",{x1:"10",y1:"55",x2:"30",y2:"55",class:x.a.path2C}),nt&&Object(y.h)("text",{x:"35",y:"60","font-size":"10px",class:x.a.pathText},nt)),O&&Object(y.h)("div",{class:x.a["x-axis"],style:{left:bt+"px",width:"calc(100% - "+bt+"px)"}},St.map((function(t){return Object(y.h)("div",{"data-value":s(t)})}))),g&&Object(y.h)("div",{class:x.a["y-axis"],style:{bottom:mt+"px"}},Xt.map((function(t){return Object(y.h)("div",{"data-value":t})}))),D&&Object(y.h)("div",{class:x.a["y-axis2"],style:{bottom:mt+"px"}},Ft.map((function(t){return Object(y.h)("div",{"data-value":t})}))))},a}(y.Component)},wgWz:function(t,a){"use strict";a.a=function(){function t(){}return t.getRandomInt=function(t,a){return t=Math.ceil(t),a=Math.floor(a),Math.floor(Math.random()*(a-t+1))+t},t.makeRandomData=function(a,e,n,i){void 0===a&&(a=200),void 0===i&&(i=!1);for(var r=[],c=0,o=0,s=a;o<s;o+=1)c=c?i?t.getRandomInt(c,c+3):t.getRandomInt(c-5,c+5):t.getRandomInt(e,n),r.push({x:o,y:c});return r},t}()}}]);
//# sourceMappingURL=route-home.chunk.229f4.js.map