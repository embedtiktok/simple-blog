(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RVkS:function(t,a,e){"use strict";function n(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}e.r(a);var r,s=e("hosL"),c=e("/eY4"),o=e("bbv7"),h=e("wgWz");const p={aiData:h.a.makeRandomData(500,20,60),windData:h.a.makeRandomData(500,20,60)};let x=Object(c.a)(r=class extends s.Component{constructor(t){super(t),this.state=function(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?n(Object(e),!0).forEach((function(a){i(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}({},p)}render(){const{windData:t,aiData:a}=this.state;return Object(s.h)("div",{class:"container-fluid mt-5 pt-2"},Object(s.h)("div",{class:"row"},Object(s.h)("div",{class:"col-12"},Object(s.h)("h1",null,"Production"),Object(s.h)(o.a,{data:t,data2B:a,legend:"Production",legend2B:"Production AI prediction",width:1200,height:500,yMax:100,y2Max:100,showYTicks:1,yTicks:'["40 MWh", "30 MWh", "20 MWh", "10 MWh", "0 MWh"]',showXTicks:1}))))}})||r;a.default=x},VtuJ:function(t){t.exports={lineChart:"lineChart__1V7gu",svg:"svg__2VZNe",path:"path__39L9w",pathCold:"pathCold__1X7YC",pathWarm:"pathWarm__1_vqU",pathText:"pathText__2RfbE",pathB:"pathB__4I_xm",path2:"path2__19gje",path2B:"path2B__-l86N",path2C:"path2C__3xnAW",path3:"path3__1IFnl","x-axis":"x-axis__1601s","y-axis":"y-axis__13f0R","y-axis2":"y-axis2__3xPFM"}},bbv7:function(t,a,e){"use strict";function n(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?n(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function s(t,a,e,n="",i=""){const r=Array.from(Array(t).keys()),s=Math.ceil(e)-Math.floor(a);return r.map(e=>`${n}${parseInt(s/(t-1)*e,10)+Math.floor(a)}${i}`)}function c(t){if(t)return JSON.parse(t)}function o(t){if("string"==typeof t&&t.match(/\d+h/)){const a=3600*t.replace(/h/g,"")*1e3,e=f.a.epoch();return f.a.isoDate(e-a)}return t}function h(t,a,e,n,i){return n+(t-a)*(i-n)/(e-a)}function p(t,a=!1){let e=1;return t<0&&(e=-1),a&&1===e?5*Math.floor(Math.abs(t)/5)*e:5*Math.ceil(Math.abs(t)/5)*e}function x({data:t,max:a}){return f.a.isNumber(a)?Math.max(a,...t.map(t=>t.y)):Math.max(...t.map(t=>t.y))}function d({data:t,min:a}){return f.a.isNumber(a)?Math.min(a,...t.map(t=>t.y)):Math.min(...t.map(t=>t.y))}function l({data:t,yMin:a,yMax:e,width:n,height:i,yRangeMin:r,yRangeMax:s,offsetY:c=0,maxMinFixed:o=!1}){if(t&&t.length){const l=Math.max(...t.map(t=>t.x));let y,b;o?y=f.a.isNumber(a)?a:d({data:t}):(y=f.a.isNumber(a)?d({data:t,min:a}):d({data:t}),y=p(y,!0)),o?b=f.a.isNumber(e)?e:x({data:t}):(b=f.a.isNumber(e)?x({data:t,max:e}):x({data:t}),b=p(b));const u=i-c,m=t=>t/l*n,O=t=>{let a=t;return f.a.isNumber(r)&&f.a.isNumber(s)?(a=h(a,y,b,r,s),u-h(a,r,s,c,i)):(a=h(a,y,b,y,b),u-h(a,y,b,c,i))};return{d:`M-100 ${u+c} L${m(t[0].x)} ${O(t[0].y)} \n            ${t.slice(1).map(t=>`L${m(t.x)} ${O(t.y)}`).join(" ")}\n            L${m(l)+100} ${u+c}\n        `,maxX:l,maxY:b,minY:y}}return{}}var y=e("hosL"),b=e("VtuJ"),u=e.n(b),f=e("Utv1");const m={};a.a=class extends y.Component{constructor(t){super(t),this.setState(i({},m))}render(){const{width:t=600,height:a=200,offsetY:e=0,paddingLeft:n=0,paddingBottom:r=0,tickCount:h=6,showXTicks:b,showYTicks:f,xTicks:m,yTicks:O,yTicksPrefix:M,yTicksPostfix:g="°C",yMax:j,yMin:w,showY2Ticks:v,y2Ticks:_,y2TicksPrefix:P,y2TicksPostfix:k="°C",y2Max:T,y2Min:C,y2BMax:R,y2BMin:B,range2bMin:$=0,range2bMax:D=100,y2CMax:Y,y2CMin:N,range2cMin:W=0,range2cMax:z=100,y3Min:I,y3Max:L,range3Min:S=0,range3Max:F=100,legend:A,legendB:E,legend2:J,legend2B:V,legend2C:X,legend3:U,data:q=[],dataB:Z=[],data2:G=[],data2B:H=[],data2C:K=[],data3:Q=[]}=this.props,tt=n||(f?30:0),at=r||(b?20:0),et={width:t,height:a,offsetY:e},nt=x({data:q,max:j}),it=p(x({data:Z,max:nt})),rt=d({data:q,min:w}),st=p(d({data:Z,min:rt}),!0),{d:ct,maxX:ot=0}=l(i(i({},et),{},{data:q,yMin:st,yMax:it,maxMinFixed:!0})),{d:ht}=l(i(i({},et),{},{data:Z,yMin:st,yMax:it,maxMinFixed:!0})),{d:pt,minY:xt=0,maxY:dt=0}=l(i(i({},et),{},{data:G,yMin:C,yMax:T})),{d:lt}=l(i(i({},et),{},{data:H,yMin:B,yMax:R,yRangeMin:$,yRangeMax:D})),{d:yt}=l(i(i({},et),{},{data:K,yMin:N,yMax:Y,yRangeMin:W,yRangeMax:z,maxMinFixed:!0})),{d:bt}=l(i(i({},et),{},{data:Q,yMin:I,yMax:L,yRangeMin:S,yRangeMax:F})),ut=c(m)||s(h,0,ot),ft=c(O)||s(h,st,it,M,g).reverse(),mt=c(_)||s(h,xt,dt,P,k).reverse();return Object(y.h)("div",{class:u.a.lineChart,style:`height: ${a}px; overflow: hidden;`},Object(y.h)("svg",{xmlns:"http://www.w3.org/2000/svg",class:u.a.svg,viewBox:`0 0 ${t} ${a}`,preserveAspectRatio:"none",style:`padding-left: ${tt}px; padding-bottom: ${at}px; width: calc(100%); max-height: 100%;`},bt&&Object(y.h)("path",{d:bt,class:u.a.path3}),yt&&Object(y.h)("path",{d:yt,class:u.a.path2C}),lt&&Object(y.h)("path",{d:lt,class:u.a.path2B}),pt&&Object(y.h)("path",{d:pt,class:u.a.path2}),ht&&Object(y.h)("path",{d:ht,class:u.a.pathB}),ct&&Object(y.h)("path",{d:ct,class:u.a.path}),A&&Object(y.h)("line",{x1:"10",y1:"5",x2:"30",y2:"5",class:u.a.path}),A&&Object(y.h)("text",{x:"35",y:"10","font-size":"10px",class:u.a.pathText},A),J&&Object(y.h)("line",{x1:"10",y1:"15",x2:"30",y2:"15",class:u.a.path2}),J&&Object(y.h)("text",{x:"35",y:"20","font-size":"10px",class:u.a.pathText},J),U&&Object(y.h)("line",{x1:"10",y1:"25",x2:"30",y2:"25",class:u.a.path3}),U&&Object(y.h)("text",{x:"35",y:"30","font-size":"10px",class:u.a.pathText},U),E&&Object(y.h)("line",{x1:"10",y1:"35",x2:"30",y2:"35",class:u.a.pathB}),E&&Object(y.h)("text",{x:"35",y:"40","font-size":"10px",class:u.a.pathText},E),V&&Object(y.h)("line",{x1:"10",y1:"45",x2:"30",y2:"45",class:u.a.path2B}),V&&Object(y.h)("text",{x:"35",y:"50","font-size":"10px",class:u.a.pathText},V),X&&Object(y.h)("line",{x1:"10",y1:"55",x2:"30",y2:"55",class:u.a.path2C}),X&&Object(y.h)("text",{x:"35",y:"60","font-size":"10px",class:u.a.pathText},X)),b&&Object(y.h)("div",{class:u.a["x-axis"],style:{left:tt+"px",width:`calc(100% - ${tt}px)`}},ut.map(t=>Object(y.h)("div",{"data-value":o(t)}))),f&&Object(y.h)("div",{class:u.a["y-axis"],style:{bottom:at+"px"}},ft.map(t=>Object(y.h)("div",{"data-value":t}))),v&&Object(y.h)("div",{class:u.a["y-axis2"],style:{bottom:at+"px"}},mt.map(t=>Object(y.h)("div",{"data-value":t}))))}}},wgWz:function(t,a){"use strict";class e{static getRandomInt(t,a){return t=Math.ceil(t),a=Math.floor(a),Math.floor(Math.random()*(a-t+1))+t}static makeRandomData(t=200,a,n,i=!1){const r=[];let s=0;for(let c=0,o=t;c<o;c+=1)s=s?i?e.getRandomInt(s,s+3):e.getRandomInt(s-5,s+5):e.getRandomInt(a,n),r.push({x:c,y:s});return r}}a.a=e}}]);
//# sourceMappingURL=route-production.chunk.02ab3.esm.js.map