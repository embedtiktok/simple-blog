(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{RVkS:function(t,e,a){"use strict";function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.r(e);var i,r=a("hosL"),o=a("/eY4"),c=a("bbv7"),h=a("HqZR"),d=a("wgWz");const p=d.a.makeRandomData({cnt:500,min:0,max:30,onlyUp:!1,diff:1,maxSkew:10}),l=d.a.calcData(p,d.a.calcProductionData),x={productionData:l,productionBoostData:d.a.addPercent(l,10,100),productionLongLifeData:d.a.addPercent(l,-5,100)};let y=Object(o.a)(i=class extends r.Component{constructor(t){super(t),this.state=function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},x)}render(){const{productionData:t,productionBoostData:e,productionLongLifeData:a}=this.state,{appState:s,windmillStore:n}=this.props.stores,{darkmode:i}=s,{windmills:o}=n;return Object(r.h)("div",{class:"container-fluid mt-5 pt-2"},Object(r.h)("div",{class:"row"},Object(r.h)("div",{class:"col-12"},Object(r.h)("h1",null,Object(r.h)("i",{class:"fas fa-chart-bar"})," Production"),Object(r.h)(c.a,{stores:this.props.stores,data:t,dataB:e,dataC:a,legend:"Normal production",legendB:"Boost 10%",legendC:"Long life -5%",width:1200,height:400,yMax:500,yMin:0,showYTicks:1,yTicks:'["500Mw", "400Mw", "300Mw", "200Mw", "100Mw", "0Mw"]',unit:"Mw",showXTicks:1,marker:400}))),Object(r.h)("div",{class:"row"},Object(r.h)("div",{class:"col-12",style:"height: 50vh;"},Object(r.h)(h.a,{stores:this.props.stores,darkmode:i,center:[67.1253653,12.422578125],zoom:13,waypoints:o}))))}})||i;e.default=y},VtuJ:function(t){t.exports={lineChart:"lineChart__1V7gu",svg:"svg__2VZNe",pathText:"pathText__2RfbE",path:"path__39L9w",pathB:"pathB__4I_xm",pathC:"pathC__1DQi-",pathD:"pathD__2lI_C",path2:"path2__19gje",path2B:"path2B__-l86N",path2C:"path2C__3xnAW",path3:"path3__1IFnl","x-axis":"x-axis__1601s","y-axis":"y-axis__13f0R","y-axis2":"y-axis2__3xPFM",marker:"marker__2peOe",mouseHover:"mouseHover__2B4N6",mouseHoverDarkmode:"mouseHoverDarkmode__3VPOP",mouseHoverBox:"mouseHoverBox__3fJuY",mouseLines:"mouseLines__3DgQq"}},bbv7:function(t,e,a){"use strict";function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e,a,s="",n=""){const i=Array.from(Array(t).keys()),r=Math.ceil(a)-Math.floor(e);return i.map(a=>`${s}${parseInt(r/(t-1)*a,10)+Math.floor(e)}${n}`)}function o(t){if(t)return JSON.parse(t)}function c(t){if("string"==typeof t&&t.match(/\d+h/)){const e=3600*t.replace(/h/g,"")*1e3,a=m.a.epoch();return m.a.isoDate(a-e)}return t}function h(t,e,a,s,n){return s+(t-e)*(n-s)/(a-e)}function d(t,e=!1){let a=1;return t<0&&(a=-1),e&&1===a?5*Math.floor(Math.abs(t)/5)*a:5*Math.ceil(Math.abs(t)/5)*a}function p({data:t,max:e}){return m.a.isNumber(e)?Math.max(e,...t.map(t=>t.y)):Math.max(...t.map(t=>t.y))}function l({data:t,min:e}){return m.a.isNumber(e)?Math.min(e,...t.map(t=>t.y)):Math.min(...t.map(t=>t.y))}function x({data:t,yMin:e,yMax:a,width:s,height:n,yRangeMin:i,yRangeMax:r,offsetY:o=0,maxMinFixed:c=!1}){const x={};if(t&&t.length){const y=Math.max(...t.map(t=>t.x));let u,f;c?u=m.a.isNumber(e)?e:l({data:t}):(u=m.a.isNumber(e)?l({data:t,min:e}):l({data:t}),u=d(u,!0)),c?f=m.a.isNumber(a)?a:p({data:t}):(f=m.a.isNumber(a)?p({data:t,max:a}):p({data:t}),f=d(f));const b=n-o,g=(t,e)=>{const a=Math.round(t/y*s);return m.a.isDefined(e)&&(x[e]||(x[e]={}),x[e].x=a,x[e].xVal=t),a},M=(t,e)=>{let a=t;if(m.a.isNumber(i)&&m.a.isNumber(r))return a=h(a,u,f,i,r),b-h(a,i,r,o,n);a=h(a,u,f,u,f);const s=Math.round(b-h(a,u,f,o,n));return m.a.isDefined(e)&&(x[e]||(x[e]={}),x[e].y=s,x[e].yVal=a),s};return{d:`M-100 ${b+o} L${g(t[0].x,0)} ${M(t[0].y,0)} \n            ${t.slice(1).map((t,e)=>`L${g(t.x,e+1)} ${M(t.y,e+1)}`).join(" ")}\n            L${g(y)+100} ${b+o}\n        `,maxX:y,maxY:f,minY:u,dataMap:x}}return{}}var y,u=a("hosL"),m=a("Utv1"),f=a("/eY4"),b=a("VtuJ"),g=a.n(b);const M={mouseData:{}};let O=Object(f.a)(y=class extends u.Component{constructor(t){super(t),this.mouseMove=t=>{if(this.props.stores){const{width:e=600,height:a=200}=this.props,s=this.svgRef.clientHeight,n=parseInt(h(t.layerX,30,this.svgRef.clientWidth,0,e),10),i=parseInt(h(t.layerY,20,s,0,a)+20,10),{appState:r}=this.props.stores;r.setMousePosition([n,i])}},this.state=n({},M),this.svgRef=null}getMouseData(t,e,a,s=!1,n=0){const{data:i=[],width:r=600,height:o=200}=this.props,c=parseInt(h(e,0,r,0,i.length),10);if(m.a.checkNested(t,c,a)){let e=t[c][a];return s&&"y"===a?e>o/2?e-70-n:e+20-n:s&&"x"===a?e>r/2?e-150-n:e+20-n:e}}render(){const{width:t=600,height:e=200,offsetY:a=0,paddingLeft:s=0,paddingBottom:i=0,tickCount:h=6,showXTicks:y,showYTicks:m,xTicks:f,yTicks:b,yTicksPrefix:M,yTicksPostfix:O="°C",yMax:j,yMin:D,showY2Ticks:v,y2Ticks:w,y2TicksPrefix:_,y2TicksPostfix:k="°C",y2Max:P,y2Min:R,y2BMax:B,y2BMin:C,range2bMin:T=0,range2bMax:$=100,y2CMax:L,y2CMin:z,range2cMin:N=0,range2cMax:Y=100,y3Min:S,y3Max:V,range3Min:H=0,range3Max:I=100,legend:F,legendB:J,legendC:E,legendD:U,legend2:X,legend2B:A,legend2C:W,legend3:q,data:Q=[],dataB:Z=[],dataC:G=[],dataD:K=[],data2:tt=[],data2B:et=[],data2C:at=[],data3:st=[],marker:nt,unit:it,unitB:rt,unitC:ot,unitD:ct}=this.props,{appState:ht={}}=this.props.stores||{},{mousePos:dt=[],darkmode:pt}=ht,lt=s||(m?30:0),xt=i||(y?20:0),yt={width:t,height:e,offsetY:a},ut=p({data:Q,max:j}),mt=d(p({data:Z,max:ut})),ft=l({data:Q,min:D}),bt=d(l({data:Z,min:ft}),!0),{d:gt,maxX:Mt=0,dataMap:Ot}=x(n(n({},yt),{},{data:Q,yMin:bt,yMax:mt,maxMinFixed:!0})),{d:jt,dataMap:Dt}=x(n(n({},yt),{},{data:Z,yMin:bt,yMax:mt,maxMinFixed:!0})),{d:vt,dataMap:wt}=x(n(n({},yt),{},{data:G,yMin:bt,yMax:mt,maxMinFixed:!0})),{d:_t,dataMap:kt}=x(n(n({},yt),{},{data:K,yMin:bt,yMax:mt,maxMinFixed:!0})),{d:Pt,minY:Rt=0,maxY:Bt=0}=x(n(n({},yt),{},{data:tt,yMin:R,yMax:P})),{d:Ct}=x(n(n({},yt),{},{data:et,yMin:C,yMax:B,yRangeMin:T,yRangeMax:$})),{d:Tt}=x(n(n({},yt),{},{data:at,yMin:z,yMax:L,yRangeMin:N,yRangeMax:Y,maxMinFixed:!0})),{d:$t}=x(n(n({},yt),{},{data:st,yMin:S,yMax:V,yRangeMin:H,yRangeMax:I})),Lt=o(f)||r(h,0,Mt),zt=o(b)||r(h,bt,mt,M,O).reverse(),Nt=o(w)||r(h,Rt,Bt,_,k).reverse();return Object(u.h)("div",{class:g.a.lineChart,style:`height: ${e}px; overflow: hidden;`},Object(u.h)("svg",{xmlns:"http://www.w3.org/2000/svg",class:g.a.svg,viewBox:`0 0 ${t} ${e}`,preserveAspectRatio:"none",style:`padding-left: ${lt}px; padding-bottom: ${xt}px; width: calc(100%); max-height: 100%;`,onMouseMove:this.mouseMove,ref:t=>this.svgRef=t},$t&&Object(u.h)("path",{d:$t,class:g.a.path3}),Tt&&Object(u.h)("path",{d:Tt,class:g.a.path2C}),Ct&&Object(u.h)("path",{d:Ct,class:g.a.path2B}),Pt&&Object(u.h)("path",{d:Pt,class:g.a.path2}),jt&&Object(u.h)("path",{d:jt,class:g.a.pathB}),vt&&Object(u.h)("path",{d:vt,class:g.a.pathC}),_t&&Object(u.h)("path",{d:_t,class:g.a.pathD}),gt&&Object(u.h)("path",{d:gt,class:g.a.path}),F&&Object(u.h)("line",{x1:"10",y1:"5",x2:"30",y2:"5",class:g.a.path}),F&&Object(u.h)("text",{x:"35",y:"10","font-size":"10px",class:g.a.pathText},F),J&&Object(u.h)("line",{x1:"10",y1:"15",x2:"30",y2:"15",class:g.a.pathB}),J&&Object(u.h)("text",{x:"35",y:"20","font-size":"10px",class:g.a.pathText},J),E&&Object(u.h)("line",{x1:"10",y1:"25",x2:"30",y2:"25",class:g.a.pathC}),E&&Object(u.h)("text",{x:"35",y:"30","font-size":"10px",class:g.a.pathText},E),U&&Object(u.h)("line",{x1:"10",y1:"35",x2:"30",y2:"35",class:g.a.pathD}),U&&Object(u.h)("text",{x:"35",y:"40","font-size":"10px",class:g.a.pathText},U),X&&Object(u.h)("line",{x1:"10",y1:"15",x2:"30",y2:"15",class:g.a.path2}),X&&Object(u.h)("text",{x:"35",y:"20","font-size":"10px",class:g.a.pathText},X),q&&Object(u.h)("line",{x1:"10",y1:"25",x2:"30",y2:"25",class:g.a.path3}),q&&Object(u.h)("text",{x:"35",y:"30","font-size":"10px",class:g.a.pathText},q),A&&Object(u.h)("line",{x1:"10",y1:"45",x2:"30",y2:"45",class:g.a.path2B}),A&&Object(u.h)("text",{x:"35",y:"50","font-size":"10px",class:g.a.pathText},A),W&&Object(u.h)("line",{x1:"10",y1:"55",x2:"30",y2:"55",class:g.a.path2C}),W&&Object(u.h)("text",{x:"35",y:"60","font-size":"10px",class:g.a.pathText},W),nt&&Object(u.h)("line",{x1:nt,y1:e,x2:nt,y2:"0",class:g.a.marker}),dt&&dt.length>0&&Object(u.h)("line",{x1:dt[0],y1:e,x2:dt[0],y2:"0",class:g.a.mouseLines}),dt&&dt.length>0&&Object(u.h)("line",{x1:0,y1:this.getMouseData(Ot,dt[0],"y"),x2:t,y2:this.getMouseData(Ot,dt[0],"y"),class:g.a.mouseLines}),dt&&dt.length>0&&Object(u.h)("circle",{cx:this.getMouseData(Ot,dt[0],"x"),cy:this.getMouseData(Ot,dt[0],"y"),r:"5",class:g.a.marker}),dt&&dt.length>0&&Object(u.h)("rect",{x:this.getMouseData(Ot,dt[0],"x",!0,10),y:this.getMouseData(Ot,dt[0],"y",!0,10),width:"150",height:"70",rx:"5",ry:"5",class:g.a.mouseHoverBox}),dt&&dt.length>0&&Object(u.h)("text",{x:this.getMouseData(Ot,dt[0],"x",!0),y:this.getMouseData(Ot,dt[0],"y",!0),"font-size":"11px",class:pt?g.a.mouseHoverDarkmode:g.a.mouseHover},Object(u.h)("tspan",{x:this.getMouseData(Ot,dt[0],"x",!0),dy:"1.2em"},F,": ",this.getMouseData(Ot,dt[0],"yVal")," ",it),jt&&Dt&&Object(u.h)("tspan",{x:this.getMouseData(Dt,dt[0],"x",!0),dy:"1.2em"},J,": ",this.getMouseData(Dt,dt[0],"yVal")," ",rt||it),jt&&wt&&Object(u.h)("tspan",{x:this.getMouseData(wt,dt[0],"x",!0),dy:"1.2em"},E,": ",this.getMouseData(wt,dt[0],"yVal")," ",ot||it),jt&&kt&&Object(u.h)("tspan",{x:this.getMouseData(kt,dt[0],"x",!0),dy:"1.2em"},U,": ",this.getMouseData(kt,dt[0],"yVal")," ",ct||it))),y&&Object(u.h)("div",{class:g.a["x-axis"],style:{left:lt+"px",width:`calc(100% - ${lt}px)`}},Lt.map(t=>Object(u.h)("div",{"data-value":c(t)}))),m&&Object(u.h)("div",{class:g.a["y-axis"],style:{bottom:xt+"px"}},zt.map(t=>Object(u.h)("div",{"data-value":t}))),v&&Object(u.h)("div",{class:g.a["y-axis2"],style:{bottom:xt+"px"}},Nt.map(t=>Object(u.h)("div",{"data-value":t}))))}})||y;e.a=O},wgWz:function(t,e,a){"use strict";var s=a("Utv1");class n{static normalizeRange(t,e,a,s,n){return s+(t-e)*(n-s)/(a-e)}static getRandom(t,e){return Math.random()*(e-t)+t}static getRandomInt(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}static makeRandomData({cnt:t=200,min:e,max:a,onlyUp:i=!1,inputData:r=[],diff:o=5,maxSkew:c=1,rangeMin:h,rangeMax:d}){const p=[];let l=0,x=0;for(let y=0,u=t;y<u;y+=1)s.a.isDefined(r[y])&&s.a.isDefined(r[y].y)?(x=n.getRandomInt(x-o,x+o),l=r[y].y+x,Math.abs(x)>c&&(x-=x/2)):l=s.a.isUndefined(l)?n.getRandomInt(e,a):n.getRandomInt(i?l:l-o,l+o),l<e&&(l=e),l>a&&(l=a),h&&d&&(l=n.normalizeRange(l,e,a,h,d)),p.push({x:y,y:l});return p}static addPercent(t=[],e=10,a=0){let n=a;for(let e=0,a=t.length;e<a;e+=1)s.a.isDefined(t[e])&&s.a.isDefined(t[e].y)&&t[e].y>n&&(n=t[e].y);const i=[];for(let a=0,r=t.length;a<r;a+=1)if(s.a.isDefined(t[a])&&s.a.isDefined(t[a].y)){i.push({x:a,y:t[a].y+e*n/100})}return i}static calcData(t=[],e=(()=>{})){const a=[];for(let n=0,i=t.length;n<i;n+=1){let i=0;if(s.a.isDefined(t[n])&&s.a.isDefined(t[n].y)){i=e(t[n].y)}a.push({x:n,y:i})}return a}static calcProductionData(t,e=0,a=500){const i=Math.pow(12,3);let r=t;r>12&&(r=12);const o=Math.round(Math.pow(r,3));return s.a.isDefined(e)&&s.a.isDefined(a)?Math.round(n.normalizeRange(o,0,i,e,a)):Math.round(o)}}e.a=n}}]);
//# sourceMappingURL=route-production.chunk.47223.esm.js.map