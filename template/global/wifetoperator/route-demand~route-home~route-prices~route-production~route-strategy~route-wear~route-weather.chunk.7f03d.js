(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{VtuJ:function(t){t.exports={lineChart:"lineChart__1V7gu",svg:"svg__2VZNe",pathText:"pathText__2RfbE",pathOriginal:"pathOriginal__9eH9i",pathLeft0:"pathLeft0__3tOjN",pathLeft1:"pathLeft1__3XeI-",pathLeft2:"pathLeft2__Jskj_",pathLeft3:"pathLeft3__vtNwg",pathLeft4:"pathLeft4__ZfOXV",pathLeft5:"pathLeft5__1V5kT",pathLeft6:"pathLeft6__3g2rw",pathLeft7:"pathLeft7__2aVhq",pathLeft8:"pathLeft8__3LkIB",pathLeft9:"pathLeft9__1eWVE",pathRight0:"pathRight0__3sPo3",pathRight1:"pathRight1__16EJJ",pathRight2:"pathRight2__1giMc",pathRight3:"pathRight3__yhWxI",pathRight4:"pathRight4__3M2kd",pathRight5:"pathRight5__1IsUE","x-axis":"x-axis__1601s","y-axis-left":"y-axis-left__3tpCF","y-axis-right":"y-axis-right__3gWmK",marker:"marker__2peOe",markers:"markers__2lso3",mouseHover:"mouseHover__2B4N6",mouseHoverDarkmode:"mouseHoverDarkmode__3VPOP",mouseHoverBox:"mouseHoverBox__3fJuY",mouseLine:"mouseLine__1cdau"}},bbv7:function(t,a,e){"use strict";(function(t){function i(t,a){if(null==t)return{};var e,i,n={},r=Object.keys(t);for(i=0;i<r.length;i++)a.indexOf(e=r[i])>=0||(n[e]=t[e]);return n}function n(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,i)}return e}function r(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?n(Object(e),!0).forEach((function(a){o(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function h(t,a,e,i,n,r){void 0===i&&(i=!1),void 0===n&&(n=""),void 0===r&&(r="");var o=Array.from(Array(t).keys());i&&(o=o.reverse());var h=Math.ceil(e)-Math.floor(a);return o.map(""===n&&""===r?function(e){return parseInt(h/(t-1)*e,10)+Math.floor(a)}:function(e){return""+n+(parseInt(h/(t-1)*e,10)+Math.floor(a))+r})}function s(t,a){if(b.a.isFunction(a))return a(t);if("string"==typeof t&&t.match(/\d+h/)){var e=3600*t.replace(/h/g,"")*1e3,i=b.a.epoch();return b.a.isoDate(i-e)}return t}function u(t,a){return b.a.isFunction(a)?a(t):t}function p(t,a,e,i,n){return i+(t-a)*(n-i)/(e-a)}function c(t,a){void 0===a&&(a=!1);var e=1;return t<0&&(e=-1),a&&1===e?5*Math.floor(Math.abs(t)/5)*e:5*Math.ceil(Math.abs(t)/5)*e}function f(t){var a=t.min,e=t.data.map((function(t){if(b.a.isArray(t))return b.a.isNumber(a)?Math.min.apply(Math,[a].concat(t.map((function(t){return t.y})))):Math.min.apply(Math,t.map((function(t){return t.y})))}));return Math.min.apply(Math,e)}function d(t){var a=t.max,e=t.data.map((function(t){if(b.a.isArray(t))return b.a.isNumber(a)?Math.max.apply(Math,[a].concat(t.map((function(t){return t.y})))):Math.max.apply(Math,t.map((function(t){return t.y})))}));return Math.max.apply(Math,e)}function l(t,a,e,i){var n,r,o,h,s=(o=(r=e||t)[0]-(n=a||t)[0],h=r[1]-n[1],{length:Math.sqrt(Math.pow(o,2)+Math.pow(h,2)),angle:Math.atan2(h,o)}),u=s.angle+(i?Math.PI:0),p=.2*s.length;return[t[0]+Math.cos(u)*p,t[1]+Math.sin(u)*p]}function g(t,a,e){var i=l(e[a-1],e[a-2],t),n=i[0],r=i[1],o=l(t,e[a-1],e[a+1],!0);return"C "+n+","+r+" "+o[0]+","+o[1]+" "+t[0]+","+t[1]}function v(t){return null===t[1]?"M "+t[0]+" "+t[1]:"L "+t[0]+" "+t[1]}function m(t,a,e){void 0===e&&(e={});var i,n=Math.max.apply(Math,t.map((function(t){return t[0]}))),r=(Math.min.apply(Math,t.map((function(t){return t[0]}))),t[0]||[[0,e.height]]),o=t[t.length-1]||[[n,e.height]];return i=e.lineFromXmax?"L "+(o[0]+10)+","+e.height+" L "+e.width+","+(e.height-1):"L "+o[0]+","+o[1]+" L "+o[0]+","+o[1],(e.lineFromXzero?"M 0,"+e.height+" L "+(r[0]-20)+","+(e.height-1):"M "+r[0]+","+r[1]+" L "+r[0]+","+r[1])+" "+t.reduce((function(t,e,i,n){return 0===i?"L "+e[0]+","+e[1]:t+" "+a(e,i,n)}),"")+" "+i}function x(t){return t.data.map((function(a,e){return function(t){var a=t.data,e=t.yMin,i=t.yMax,n=t.xMin,r=t.xMax,o=t.width,h=t.height,s=t.yRangeMin,u=t.yRangeMax,l=t.offsetY,x=void 0===l?0:l,y=t.maxMinFixed,M=void 0!==y&&y,L=t.smooth,O=void 0!==L&&L,_=t.avgWindow,R=void 0===_?0:_,w={};if(a&&a.length){var j,k,V=r||Math.max.apply(Math,a.map((function(t){return t.x}))),T=n||Math.min.apply(Math,a.map((function(t){return t.x})));j=M?b.a.isNumber(e)?e:f({data:a}):c(j=b.a.isNumber(e)?f({data:a,min:e}):f({data:a}),!0),k=M?b.a.isNumber(i)?i:d({data:a}):c(k=b.a.isNumber(i)?d({data:a,max:i}):d({data:a}));for(var P=h,X=function(t,a){if(-1===t)return-1;var e=p(t,T,V,T,V),i=Math.round(p(e,T,V,0,o));return b.a.isDefined(a)&&(w[a]||(w[a]={}),w[a].x=i,w[a].xVal=t),i},D=function(t,a){if(-1===t)return h;var e=t;if(b.a.isNumber(s)&&b.a.isNumber(u))return e=p(e,j,k,s,u),P-p(e,s,u,0,h-x);if(null===e)return null;e=p(e,j,k,j,k);var i=Math.round(P-p(e,j,k,0,h-x));return b.a.isDefined(a)&&(w[a]||(w[a]={}),w[a].y=i,w[a].yVal=e),i},W=a.map((function(t,a){return[X(t.x,a+1),D(t.y,a+1)]})).filter((function(t){return null!==t[1]})),N=R>0?function(t,a,e,i){void 0===a&&(a=2),void 0===e&&(e=function(t){return t});for(var n=e,r=[],o=0;o<t.length;o+=1){for(var h=o-a,s=o+a+1,u=0,p=0,c=h>=0?h:0;c<s&&c<t.length;c+=1)p+=n(t[c]),u+=1;r[o]=i?i(t[o],p/u):p/u}return r}(W,R,(function(t){return t[1]}),(function(t,a){return[t[0],a]})):W,A=0,C=N.length;A<C;A+=1)b.a.isDefined(w[A])&&(w[A+1].ySmooth=N[A][1]);var B=m(N,O?g:v,{height:h,width:o}),Y=m(W,v,{height:h});return{d:B,maxX:V,maxY:k,minY:j,dOriginal:Y,dataMap:w}}return{}}(r(r({},t),{},{data:a,yRangeMin:b.a.isArray(t.yRangeMin)?t.yRangeMin[e]:void 0,yRangeMax:b.a.isArray(t.yRangeMax)?t.yRangeMax[e]:void 0,avgWindow:b.a.isArray(t.avgWindowLeft)?t.avgWindowLeft[e]:b.a.isArray(t.avgWindowRight)?t.avgWindowRight[e]:void 0,smooth:b.a.isArray(t.smoothLeft)?t.smoothLeft[e]:b.a.isArray(t.smoothRight)?t.smoothRight[e]:void 0}))}))}var y,M=e("hosL"),b=e("Utv1"),L=e("/eY4"),O=e("VtuJ"),_=e.n(O),R={mouseData:{}},w=Object(L.a)(y=function(a){function e(t){var e;return(e=a.call(this,t)||this).mouseMove=function(t){if(e.props.stores){var a=e.getCoordsWithPadding(t.layerX,t.layerY);e.props.stores.appState.setMousePosition([a.x,a.y])}},e.state=r({},R),e.svgRef=null,e}var n,o;o=a,(n=e).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o;var l=e.prototype;return l.getCoordsWithPadding=function(t,a){if(!this.svgRef)return{};var e=this.props,i=e.width,n=e.height,r=void 0===n?200:n,o=e.paddingTop,h=e.paddingBottom||(e.showXTicks?20:0),s=this.svgRef.clientHeight;return{x:parseInt(p(t,e.paddingLeft||(e.showYTicksLeft?35:0),this.svgRef.clientWidth,0,void 0===i?600:i),10),y:parseInt(p(a,o,s,h,r),10)}},l.getMouseCoordX=function(t,a){var e=this.props.width;return parseInt(p(a,0,void 0===e?600:e,0,t),10)+1},l.getCoordX=function(t,a,e){var i=this.props.width;return p(e,t,a,0,void 0===i?600:i)},l.getTextBoxX=function(t,a,e){void 0===e&&(e=0);var i=this.props.width,n=t/(void 0===i?600:i)*100>75?t-180:t;return"right"===a?n+20-e+150:n+20-e},l.getMouseData=function(t,a,e,n,o,h){void 0===h&&(h={autoLimit:!1,padding:0});var s=this.props.width,u=parseInt(p(n,0,void 0===s?600:s,t,a),10)+1;if(!b.a.isObject(e))return null;var c=Object.values(e).reduce((function(t,a){var e=a.xVal,n=i(a,["xVal"]),o=t.xVal,h=i(t,["xVal"]);return Math.abs(u-e)<Math.abs(u-o)?r({xVal:e},n):r({xVal:o},h)}));return b.a.isObject(c)?o?c[o]:c:void 0},l.componentDidMount=function(){var t=this.props;(t.showValueLeftLine||t.showValueRightLine)&&this.svgRef.addEventListener("mousemove",this.mouseMove)},l.componentWillUnmount=function(){var t=this.props;(t.showValueLeftLine||t.showValueRightLine)&&this.svgRef.removeEventListener("mousemove",this.mouseMove)},l.render=function(){var a,e,i,n=this,o=this.props,p=o.width,l=void 0===p?600:p,g=o.height,v=void 0===g?200:g,m=o.offsetY,y=o.paddingLeft,L=o.paddingTop,O=o.paddingBottom,R=o.tickCount,w=void 0===R?6:R,j=o.showXTicks,k=o.showYTicksLeft,V=o.showYTicksRight,T=o.xTicks,P=o.xTicksVal,X=o.yTicksLeft,D=o.yTicksLeftVal,W=o.yTicksLeftPrefix,N=o.yTicksLeftPostfix,A=o.yTicksRight,C=o.yTicksRightVal,B=o.yTicksRightPrefix,Y=o.yTicksRightPostfix,F=o.xMin,H=o.xMax,I=o.yMaxLeft,S=o.yMaxRight,E=o.yMinRight,J=o.rangeMinLeft,z=void 0===J?[]:J,U=o.rangeMaxLeft,q=void 0===U?[]:U,Z=o.rangeMinRight,K=void 0===Z?[]:Z,G=o.rangeMaxRight,Q=void 0===G?[]:G,$=o.dataLeft,tt=void 0===$?[]:$,at=o.dataRight,et=void 0===at?[]:at,it=o.legendLeft,nt=void 0===it?[]:it,rt=o.legendRight,ot=void 0===rt?[]:rt,ht=o.unitLeft,st=void 0===ht?[]:ht,ut=o.unitRight,pt=void 0===ut?[]:ut,ct=o.avgWindowLeft,ft=void 0===ct?[]:ct,dt=o.avgWindowRight,lt=void 0===dt?[]:dt,gt=o.smoothLeft,vt=void 0===gt?[]:gt,mt=o.smoothRight,xt=void 0===mt?[]:mt,yt=o.hoverValLeft,Mt=void 0===yt?[]:yt,bt=o.hoverValRight,Lt=void 0===bt?[]:bt,Ot=o.showValueLeftLine,_t=void 0===Ot||Ot,Rt=o.showValueRightLine,wt=void 0===Rt||Rt,jt=o.marker,kt=o.markers,Vt=void 0===kt?[]:kt,Tt=(this.props.stores||{}).appState,Pt=void 0===Tt?{}:Tt,Xt=Pt.mousePos,Dt=void 0===Xt?[]:Xt,Wt=Pt.darkmode,Nt=(void 0===y?0:y)||(k?35:0),At=void 0===L?0:L,Ct=(void 0===O?0:O)||(j?20:0),Bt={width:l,height:v,offsetY:void 0===m?0:m},Yt=c(f({data:tt,min:o.yMinLeft}),!0),Ft=c(d({data:tt,max:I}),!1),Ht=c(f({data:et,min:E}),!0),It=c(d({data:et,max:S}),!1),St=(a={data:tt.concat(et),min:F},e=a.min,i=a.data.map((function(t){if(b.a.isArray(t))return b.a.isNumber(e)?Math.min.apply(Math,[e].concat(t.map((function(t){return t.x})))):Math.min.apply(Math,t.map((function(t){return t.x})))})),Math.min.apply(Math,i)),Et=function(t){var a=t.max,e=t.data.map((function(t){if(b.a.isArray(t))return b.a.isNumber(a)?Math.max.apply(Math,[a].concat(t.map((function(t){return t.x})))):Math.max.apply(Math,t.map((function(t){return t.x})))}));return Math.max.apply(Math,e)}({data:tt.concat(et),max:H}),Jt=x(r(r({},Bt),{},{data:tt,xMin:St,xMax:Et,yMin:Yt,yMax:Ft,yRangeMin:z,yRangeMax:q,maxMinFixed:!0,smoothLeft:vt,avgWindowLeft:ft,offsetY:At})),zt=x(r(r({},Bt),{},{data:et,xMin:St,xMax:Et,yMin:Ht,yMax:It,yRangeMin:K,yRangeMax:Q,maxMinFixed:!0,smoothRight:xt,avgWindowRight:lt,offsetY:At})),Ut=Jt.length,qt=zt.length,Zt=Ut+qt,Kt=T||h(w,St,Et),Gt=X||h(w,Yt,Ft,!0,W,N),Qt=A||h(w,Ht,It,!0,B,Y),$t=this.getCoordX(St,Et,jt);return Object(M.h)("div",{class:_.a.lineChart,style:"height: "+v+"px; overflow: hidden;"},Object(M.h)("svg",{xmlns:"http://www.w3.org/2000/svg",class:_.a.svg,viewBox:"0 0 "+l+" "+v,preserveAspectRatio:"none",style:"padding-left: "+Nt+"px; padding-bottom: "+Ct+"px; width: calc(100%); max-height: 100%;",ref:function(t){return n.svgRef=t}},Jt&&Jt.reverse().map((function(a,e){var i=n.getMouseData(St,Et,a.dataMap,Dt[0]);return Object(M.h)(t,null,Object(M.h)("path",{d:a.d,class:_.a[Ut>9?"pathOriginal":"pathLeft"+(Ut-e-1)],"fill-rule":"evenodd"}),_t&&Dt&&Dt.length>0&&a.dataMap&&i&&i.yVal&&Object(M.h)("line",{x1:n.getCoordX(St,Et,St),x2:i.x,y1:i.ySmooth,y2:i.ySmooth,class:_.a.mouseLine+" "+_.a["pathLeft"+(Ut-e-1)]}))})),zt&&zt.reverse().map((function(a,e){var i=n.getMouseData(St,Et,a.dataMap,Dt[0]);return Object(M.h)(t,null,Object(M.h)("path",{d:a.d,class:_.a[Ut>9?"pathOriginal":"pathRight"+(qt-e-1)]}),wt&&Dt&&Dt.length>0&&a.dataMap&&i&&i.yVal&&Object(M.h)("line",{x1:n.getCoordX(St,Et,Et),x2:i.x,y1:i.ySmooth,y2:i.ySmooth,class:_.a.mouseLine+" "+_.a["pathRight"+(qt-e-1)]}))})),nt&&nt.map((function(a,e){return Object(M.h)(t,null,Object(M.h)("line",{x1:"10",y1:5+10*e,x2:"30",y2:5+10*e,class:_.a["pathLeft"+e]}),Object(M.h)("text",{x:"35",y:10+10*e,"font-size":"10px",class:_.a.pathText},a))})),ot&&ot.map((function(a,e){return Object(M.h)(t,null,Object(M.h)("line",{x1:l-150,y1:5+10*e,x2:l-130,y2:5+10*e,class:_.a["pathRight"+e]}),Object(M.h)("text",{x:l-125,y:10+10*e,"font-size":"10px",class:_.a.pathText},a))})),Dt&&Dt.length>0&&Object(M.h)("line",{x1:Dt[0],y1:v,x2:Dt[0],y2:"0",class:_.a.mouseLine}),$t&&Object(M.h)("line",{x1:$t,y1:v,x2:$t,y2:"0",class:_.a.marker}),Vt&&Vt.map((function(t){var a=n.getCoordX(St,Et,t);return Object(M.h)("line",{x1:a,y1:v,x2:a,y2:"0",class:_.a.markers})})),(_t||wt)&&Jt&&Dt&&Dt.length>0&&Object(M.h)("rect",{x:this.getTextBoxX(Dt[0],"",10),y:v/2,width:"165",height:15*Zt+25,rx:"5",ry:"5",class:_.a.mouseHoverBox}),(_t||wt)&&Dt&&Dt.length>0&&Object(M.h)("text",{x:this.getTextBoxX(Dt[0]),y:v/2,"font-size":"11px",class:Wt?_.a.mouseHoverDarkmode:_.a.mouseHover,style:"border: #ff0000 solid 2px;"},_t&&Jt&&Jt.reverse().map((function(a,e){var i=b.a.isArray(Mt)&&b.a.isFunction(Mt[e])?Mt[e]:function(t){return t},r=n.getMouseData(St,Et,a.dataMap,Dt[0]);return Object(M.h)(t,null,r&&0===e&&Object(M.h)("tspan",{x:n.getTextBoxX(Dt[0]),dy:"1.2em"},s(r.xVal,P)),a.d&&a.dataMap&&b.a.isNumber(r.yVal)&&Object(M.h)("tspan",{x:n.getTextBoxX(Dt[0]),dy:"1.2em","text-anchor":"start"},Object(M.h)("tspan",{class:_.a["pathLeft"+e]},"--")," ",nt[e],": ",i(r.yVal)," ",st[e]))})),wt&&zt&&zt.reverse().map((function(a,e){var i=b.a.isArray(Lt)&&b.a.isFunction(Lt[e])?Lt[e]:function(t){return t},r=n.getMouseData(St,Et,a.dataMap,Dt[0]);return Object(M.h)(t,null,a.d&&a.dataMap&&b.a.isNumber(r.yVal)&&Object(M.h)("tspan",{x:n.getTextBoxX(Dt[0],"right"),dy:"1.2em","text-anchor":"end"},ot[e],": ",i(r.yVal)," ",pt[e]," ",Object(M.h)("tspan",{class:_.a["pathRight"+e]},"--")))})))),j&&Object(M.h)("div",{class:_.a["x-axis"],style:{left:Nt+"px",width:"calc(100% - "+Nt+"px)"}},Kt.map((function(t){return Object(M.h)("div",{"data-value":s(t,P)})}))),k&&Object(M.h)("div",{class:_.a["y-axis-left"],style:{top:At+"px",bottom:Ct+"px"}},Gt.map((function(t){return Object(M.h)("div",{"data-value":u(t,D)})}))),V&&Object(M.h)("div",{class:_.a["y-axis-right"],style:{top:At+"px",bottom:Ct+"px"}},Qt.map((function(t){return Object(M.h)("div",{"data-value":u(t,C)})}))))},e}(M.Component))||y;a.a=w}).call(this,e("hosL").Fragment)}}]);
//# sourceMappingURL=route-demand~route-home~route-prices~route-production~route-strategy~route-wear~route-weather.chunk.7f03d.js.map