(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RVkS:function(t,a,e){"use strict";function n(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}e.r(a);var i,o=e("hosL"),c=e("/eY4"),s=e("bbv7"),h=e("wgWz"),p={aiData:h.a.makeRandomData(500,20,60),windData:h.a.makeRandomData(500,20,60)},d=Object(c.a)(i=function(t){function a(a){var e;return(e=t.call(this,a)||this).state=function(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?n(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}({},p),e}var e,i;return i=t,(e=a).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i,a.prototype.render=function(){var t=this.state,a=t.windData,e=t.aiData;return Object(o.h)("div",{class:"container-fluid mt-5 pt-2"},Object(o.h)("div",{class:"row"},Object(o.h)("div",{class:"col-12"},Object(o.h)("h1",null,"Production"),Object(o.h)(s.a,{data:a,data2B:e,legend:"Production",legend2B:"Production AI prediction",width:1200,height:500,yMax:100,y2Max:100,showYTicks:1,yTicks:'["40 MWh", "30 MWh", "20 MWh", "10 MWh", "0 MWh"]',showXTicks:1}))))},a}(o.Component))||i;a.default=d},VtuJ:function(t){t.exports={lineChart:"lineChart__1V7gu",svg:"svg__2VZNe",path:"path__39L9w",pathCold:"pathCold__1X7YC",pathWarm:"pathWarm__1_vqU",pathText:"pathText__2RfbE",pathB:"pathB__4I_xm",path2:"path2__19gje",path2B:"path2B__-l86N",path2C:"path2C__3xnAW",path3:"path3__1IFnl","x-axis":"x-axis__1601s","y-axis":"y-axis__13f0R","y-axis2":"y-axis2__3xPFM"}},bbv7:function(t,a,e){"use strict";function n(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function r(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?n(Object(e),!0).forEach((function(a){i(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function o(t,a,e,n,r){void 0===n&&(n=""),void 0===r&&(r="");var i=Array.from(Array(t).keys()),o=Math.ceil(e)-Math.floor(a);return i.map((function(e){return""+n+(parseInt(o/(t-1)*e,10)+Math.floor(a))+r}))}function c(t){if(t)return JSON.parse(t)}function s(t){if("string"==typeof t&&t.match(/\d+h/)){var a=3600*t.replace(/h/g,"")*1e3,e=b.a.epoch();return b.a.isoDate(e-a)}return t}function h(t,a,e,n,r){return n+(t-a)*(r-n)/(e-a)}function p(t,a){void 0===a&&(a=!1);var e=1;return t<0&&(e=-1),a&&1===e?5*Math.floor(Math.abs(t)/5)*e:5*Math.ceil(Math.abs(t)/5)*e}function d(t){var a=t.data,e=t.max;return b.a.isNumber(e)?Math.max.apply(Math,[e].concat(a.map((function(t){return t.y})))):Math.max.apply(Math,a.map((function(t){return t.y})))}function u(t){var a=t.data,e=t.min;return b.a.isNumber(e)?Math.min.apply(Math,[e].concat(a.map((function(t){return t.y})))):Math.min.apply(Math,a.map((function(t){return t.y})))}function y(t){var a=t.data,e=t.yMin,n=t.yMax,r=t.width,i=t.height,o=t.yRangeMin,c=t.yRangeMax,s=t.offsetY,y=void 0===s?0:s,x=t.maxMinFixed,l=void 0!==x&&x;if(a&&a.length){var f,v,m=Math.max.apply(Math,a.map((function(t){return t.x})));f=l?b.a.isNumber(e)?e:u({data:a}):p(f=b.a.isNumber(e)?u({data:a,min:e}):u({data:a}),!0),v=l?b.a.isNumber(n)?n:d({data:a}):p(v=b.a.isNumber(n)?d({data:a,max:n}):d({data:a}));var M=i-y,O=function(t){return t/m*r},g=function(t){var a=t;return b.a.isNumber(o)&&b.a.isNumber(c)?(a=h(a,f,v,o,c),M-h(a,o,c,y,i)):(a=h(a,f,v,f,v),M-h(a,f,v,y,i))};return{d:"M-100 "+(M+y)+" L"+O(a[0].x)+" "+g(a[0].y)+" \n            "+a.slice(1).map((function(t){return"L"+O(t.x)+" "+g(t.y)})).join(" ")+"\n            L"+(O(m)+100)+" "+(M+y)+"\n        ",maxX:m,maxY:v,minY:f}}return{}}var x=e("hosL"),l=e("VtuJ"),f=e.n(l),b=e("Utv1"),v={};a.a=function(t){function a(a){var e;return(e=t.call(this,a)||this).setState(r({},v)),e}var e,n;return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props,a=t.width,e=void 0===a?600:a,n=t.height,i=void 0===n?200:n,h=t.offsetY,l=t.paddingLeft,b=t.paddingBottom,v=t.tickCount,m=void 0===v?6:v,M=t.showXTicks,O=t.showYTicks,g=t.xTicks,j=t.yTicks,w=t.yTicksPrefix,_=t.yTicksPostfix,P=void 0===_?"°C":_,k=t.yMin,T=t.showY2Ticks,C=t.y2Ticks,R=t.y2TicksPrefix,B=t.y2TicksPostfix,D=void 0===B?"°C":B,Y=t.y2Max,N=t.y2Min,W=t.y2BMax,z=t.y2BMin,I=t.range2bMin,L=void 0===I?0:I,S=t.range2bMax,F=void 0===S?100:S,A=t.y2CMax,E=t.y2CMin,J=t.range2cMin,V=void 0===J?0:J,X=t.range2cMax,U=void 0===X?100:X,q=t.y3Min,Z=t.y3Max,G=t.range3Min,H=void 0===G?0:G,K=t.range3Max,Q=void 0===K?100:K,$=t.legend,tt=t.legendB,at=t.legend2,et=t.legend2B,nt=t.legend2C,rt=t.legend3,it=t.data,ot=void 0===it?[]:it,ct=t.dataB,st=void 0===ct?[]:ct,ht=t.data2,pt=void 0===ht?[]:ht,dt=t.data2B,ut=void 0===dt?[]:dt,yt=t.data2C,xt=void 0===yt?[]:yt,lt=t.data3,ft=void 0===lt?[]:lt,bt=(void 0===l?0:l)||(O?30:0),vt=(void 0===b?0:b)||(M?20:0),mt={width:e,height:i,offsetY:void 0===h?0:h},Mt=d({data:ot,max:t.yMax}),Ot=p(d({data:st,max:Mt})),gt=u({data:ot,min:k}),jt=p(u({data:st,min:gt}),!0),wt=y(r(r({},mt),{},{data:ot,yMin:jt,yMax:Ot,maxMinFixed:!0})),_t=wt.d,Pt=wt.maxX,kt=void 0===Pt?0:Pt,Tt=y(r(r({},mt),{},{data:st,yMin:jt,yMax:Ot,maxMinFixed:!0})).d,Ct=y(r(r({},mt),{},{data:pt,yMin:N,yMax:Y})),Rt=Ct.d,Bt=Ct.minY,Dt=void 0===Bt?0:Bt,Yt=Ct.maxY,Nt=void 0===Yt?0:Yt,Wt=y(r(r({},mt),{},{data:ut,yMin:z,yMax:W,yRangeMin:L,yRangeMax:F})).d,zt=y(r(r({},mt),{},{data:xt,yMin:E,yMax:A,yRangeMin:V,yRangeMax:U,maxMinFixed:!0})).d,It=y(r(r({},mt),{},{data:ft,yMin:q,yMax:Z,yRangeMin:H,yRangeMax:Q})).d,Lt=c(g)||o(m,0,kt),St=c(j)||o(m,jt,Ot,w,P).reverse(),Ft=c(C)||o(m,Dt,Nt,R,D).reverse();return Object(x.h)("div",{class:f.a.lineChart,style:"height: "+i+"px; overflow: hidden;"},Object(x.h)("svg",{xmlns:"http://www.w3.org/2000/svg",class:f.a.svg,viewBox:"0 0 "+e+" "+i,preserveAspectRatio:"none",style:"padding-left: "+bt+"px; padding-bottom: "+vt+"px; width: calc(100%); max-height: 100%;"},It&&Object(x.h)("path",{d:It,class:f.a.path3}),zt&&Object(x.h)("path",{d:zt,class:f.a.path2C}),Wt&&Object(x.h)("path",{d:Wt,class:f.a.path2B}),Rt&&Object(x.h)("path",{d:Rt,class:f.a.path2}),Tt&&Object(x.h)("path",{d:Tt,class:f.a.pathB}),_t&&Object(x.h)("path",{d:_t,class:f.a.path}),$&&Object(x.h)("line",{x1:"10",y1:"5",x2:"30",y2:"5",class:f.a.path}),$&&Object(x.h)("text",{x:"35",y:"10","font-size":"10px",class:f.a.pathText},$),at&&Object(x.h)("line",{x1:"10",y1:"15",x2:"30",y2:"15",class:f.a.path2}),at&&Object(x.h)("text",{x:"35",y:"20","font-size":"10px",class:f.a.pathText},at),rt&&Object(x.h)("line",{x1:"10",y1:"25",x2:"30",y2:"25",class:f.a.path3}),rt&&Object(x.h)("text",{x:"35",y:"30","font-size":"10px",class:f.a.pathText},rt),tt&&Object(x.h)("line",{x1:"10",y1:"35",x2:"30",y2:"35",class:f.a.pathB}),tt&&Object(x.h)("text",{x:"35",y:"40","font-size":"10px",class:f.a.pathText},tt),et&&Object(x.h)("line",{x1:"10",y1:"45",x2:"30",y2:"45",class:f.a.path2B}),et&&Object(x.h)("text",{x:"35",y:"50","font-size":"10px",class:f.a.pathText},et),nt&&Object(x.h)("line",{x1:"10",y1:"55",x2:"30",y2:"55",class:f.a.path2C}),nt&&Object(x.h)("text",{x:"35",y:"60","font-size":"10px",class:f.a.pathText},nt)),M&&Object(x.h)("div",{class:f.a["x-axis"],style:{left:bt+"px",width:"calc(100% - "+bt+"px)"}},Lt.map((function(t){return Object(x.h)("div",{"data-value":s(t)})}))),O&&Object(x.h)("div",{class:f.a["y-axis"],style:{bottom:vt+"px"}},St.map((function(t){return Object(x.h)("div",{"data-value":t})}))),T&&Object(x.h)("div",{class:f.a["y-axis2"],style:{bottom:vt+"px"}},Ft.map((function(t){return Object(x.h)("div",{"data-value":t})}))))},a}(x.Component)},wgWz:function(t,a){"use strict";a.a=function(){function t(){}return t.getRandomInt=function(t,a){return t=Math.ceil(t),a=Math.floor(a),Math.floor(Math.random()*(a-t+1))+t},t.makeRandomData=function(a,e,n,r){void 0===a&&(a=200),void 0===r&&(r=!1);for(var i=[],o=0,c=0,s=a;c<s;c+=1)o=o?r?t.getRandomInt(o,o+3):t.getRandomInt(o-5,o+5):t.getRandomInt(e,n),i.push({x:c,y:o});return i},t}()}}]);
//# sourceMappingURL=route-production.chunk.0f715.js.map