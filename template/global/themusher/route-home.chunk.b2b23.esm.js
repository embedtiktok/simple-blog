(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+1Jk":function(t,a,e){"use strict";e.r(a),function(t){function s(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,s)}return e}function i(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var o,n=e("hosL"),h=e("Gblv"),c=e("/eY4"),l=e("JWe/"),r=e("3pQw"),m=e("xDik"),u=e("bbv7");const d={};let g=Object(c.a)(o=class extends n.Component{constructor(t){super(t),this.state=function(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?s(Object(e),!0).forEach((function(a){i(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}({},d),this.loadAll()}async loadAll(){const{appState:t,userStore:a}=this.props.stores;t.getFingerprint(),await a.getInfo(),await this.loadFeed(),await this.loadWorkoutSummary()}async loadFeed(){const{userStore:t}=this.props.stores;await t.getFeed()}async loadWorkoutSummary(){const{userStore:t}=this.props.stores;await t.getWorkoutSummary()}render(){const{userStore:a}=this.props.stores,{workouts:e,historyFeed:s,workoutSummary:i,graphWorkoutSummaryWeekDistanceCurrent:o,graphWorkoutSummaryWeekDistancePrev:c}=a;return Object(n.h)("div",{class:"container-fluid",style:"margin-bottom: 100px; margin-top: 60px;"},Object(n.h)("div",{class:"row"},Object(n.h)("div",{class:"col-12 mb-4"})),Object(n.h)("div",{class:"row"},Object(n.h)("div",{class:"col-12 mb-4"},Object(n.h)("h5",null,"Trenings statistikk"),Object(n.h)("small",{class:"mb-3"},Object(n.h)("small",null,Object(n.h)("table",{class:"table table-sm font-weigth-lighter"},Object(n.h)("thead",null,Object(n.h)("tr",null,Object(n.h)("th",null,"Mnd"),h.a.range(1,12).map(t=>Object(n.h)("th",{class:"text-right",style:"padding: .2rem;"},t)))),Object(n.h)("tbody",null,Object(n.h)("tr",null,Object(n.h)("th",{scope:"row",style:"padding: .2rem;"},"2019"),h.a.range(1,12).map(e=>Object(n.h)(t,null,Object(n.h)("td",{class:"text-right",style:"padding: .2rem;"},a.findWorkoutSummaryMonth(2019,e),Object(n.h)("br",null),a.findWorkoutSummaryMonth(2019,e,"elevation"),Object(n.h)("br",null)))),Object(n.h)("td",{class:"text-muted",style:"padding: .2rem;"},Object(n.h)("nobr",null,Object(n.h)("i",{class:"fas fa-road"})," km"),Object(n.h)("br",null),Object(n.h)("nobr",null,Object(n.h)("i",{class:"fas fa-mountain"})," m"),Object(n.h)("br",null))),Object(n.h)("tr",null,Object(n.h)("th",{scope:"row",style:"padding: .2rem;"},"2020"),h.a.range(1,12).map(e=>Object(n.h)(t,null,Object(n.h)("td",{class:"text-right",style:"padding: .2rem;"},a.findWorkoutSummaryMonth(2020,e),Object(n.h)("br",null),a.findWorkoutSummaryMonth(2020,e,"elevation"),Object(n.h)("br",null)))),Object(n.h)("td",{class:"text-muted",style:"padding: .2rem;"},Object(n.h)("nobr",null,Object(n.h)("i",{class:"fas fa-road"})," km"),Object(n.h)("br",null),Object(n.h)("nobr",null,Object(n.h)("i",{class:"fas fa-mountain"})," m"),Object(n.h)("br",null))))))),Object(n.h)(u.a,{stores:this.props.stores,data:o,dataB:c,legend:"2020",legendB:"2019",width:550,height:150,yMin:0,showYTicks:1,unit:"km",showXTicks:1}))),Object(n.h)("div",{class:"row"},Object(n.h)("div",{class:"col-12 mb-4"},Object(n.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0"},Object(n.h)("h5",null,"Siste fra hundene")),s&&s.map(t=>Object(n.h)(m.a,{stores:this.props.stores,line:t})))),Object(n.h)("div",{class:"row"},Object(n.h)("div",{class:"col-12 mb-4"},Object(n.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0"},Object(n.h)("h5",null,"Siste treningsturer - ",e.length," stk")),e&&e.map(t=>Object(n.h)(l.a,{stores:this.props.stores,workout:t})))),Object(n.h)("div",{class:"row"},Object(n.h)("div",{class:"col-12 mb-4"},Object(n.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0"},Object(n.h)("h5",{class:"mt-4"},"Treningsoversikt")),i&&i.map(t=>Object(n.h)(r.a,{stores:this.props.stores,summary:t})))))}})||o;a.default=g}.call(this,e("hosL").Fragment)},"3pQw":function(t,a,e){"use strict";var s,i=e("hosL"),o=e("Gblv"),n=e("/eY4");let h=Object(n.a)(s=class extends i.Component{render(){const{summary:t}=this.props;return Object(i.h)("div",{class:"w-100 mb-3"},Object(i.h)("div",{class:"row"},Object(i.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 d-flex mb-0 position-relative"},Object(i.h)("div",{class:"text-center border rounded-circle imageRounded"},Object(i.h)("span",{class:"text-muted mt-4",style:"font-size: 40px;"},t._id.week)),Object(i.h)("div",{class:"flex-grow-1 pl-3"},Object(i.h)("h5",{class:"my-0"},t._id.week," - ",t._id.year),Object(i.h)("small",{class:"text-muted"},Object(i.h)("i",{class:"fas fa-wave-square"})," ",t.count,Object(i.h)("i",{class:"fas fa-road ml-2"})," ",t.distanceKm,"km",Object(i.h)("i",{class:"fas fa-mountain ml-2"})," ",t.elevation,"m",Object(i.h)("i",{class:"fas fa-stopwatch ml-2"})," ",o.a.secToHms(t.duration),Object(i.h)("i",{class:"fas fa-tachometer-alt ml-2"})," ",t.speedAvg,"km/t")))))}})||s;a.a=h},"JWe/":function(t,a,e){"use strict";function s(t){switch(t.type){case 1:return"border-primary";case 2:return"border-danger";case 3:return"border-success"}}function i(t){switch(t.type){case 1:return"fas fa-running";case 2:return"fas fa-flag-checkered";case 3:return"fas fa-hiking"}}var o,n=e("hosL"),h=e("Gblv"),c=e("/eY4"),l=e("UJvz");let r=Object(c.a)(o=class extends n.Component{constructor(...t){super(...t),this.showModal=t=>{t.stopPropagation(),t.preventDefault();this.setState({displayModal:!0,currentImage:t.target.dataset.image,currentImageXXL:t.target.dataset.imagexxl,thumb:t.target.dataset.thumb,name:t.target.dataset.name,title:t.target.dataset.title,date:t.target.dataset.date})},this.closeModal=()=>{this.setState({displayModal:!1})},this.toggleDate=()=>{const{showDate:t}=this.state;this.setState({showDate:!t})}}render(){const{displayModal:t,currentImage:a,currentImageXXL:e,showDate:o,thumb:c,name:r,title:m,date:u}=this.state,{workout:d}=this.props,{userStore:g}=this.props.stores;return Object(n.h)("div",{class:"w-100 mb-3"},Object(n.h)("div",{class:"row"},t&&Object(n.h)(l.a,{close:this.closeModal,image:a,imagexxl:e,thumb:c,name:r,title:m,date:u}),Object(n.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 d-flex mb-0 position-relative"},Object(n.h)("div",{class:"text-center border rounded-circle imageRounded "+s(d),style:(d.image?`background-image: url("${d.image.s3SmallLink}");`:"")+" border-width: 3px !important;"},!d.image&&Object(n.h)("i",{class:i(d)+" text-muted mt-3",style:"font-size: 40px;"})),Object(n.h)("div",{class:"flex-grow-1 pl-3",style:"line-height: 1.0em;"},Object(n.h)("a",{class:"stretched-link",href:"/workouts/"+d.id},Object(n.h)("h5",{class:"my-0"},d.name)),Object(n.h)("span",{class:"font-weight-light"},g.findTeam(d.team)),Object(n.h)("br",null),Object(n.h)("small",{class:"text-muted"},d.date&&Object(n.h)("small",{onClick:this.toggleDate},o?h.a.formatDate(d.date,{locale:"no-NB"}):h.a.formatDistance(d.date,new Date,{locale:"no-NB"}),Object(n.h)("br",null))),Object(n.h)("small",null,Object(n.h)("span",{class:"text-muted"},Object(n.h)("i",{class:"fas fa-tools"})," ",g.findEquipment(d.equipment)||d.equipment,Object(n.h)("i",{class:"fas fa-road ml-2"})," ",d.distanceKm,"km",Object(n.h)("i",{class:"fas fa-mountain ml-2"})," ",d.elevation,"m",Object(n.h)("i",{class:"fas fa-tachometer-alt ml-2"})," ",h.a.format(d.speedAvg,1),"km/t",d.dogs&&Object(n.h)("span",null,Object(n.h)("i",{class:"fas fa-dog ml-2"})," ",d.dogs.length)),Object(n.h)("i",null,d.url),Object(n.h)("br",null)))),Object(n.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 mt-1",style:"padding-left: 122px;"},Object(n.h)("div",{class:"row"},d.images&&d.images.map(t=>Object(n.h)("div",{class:"text-center border rounded imageRounded imageRoundedSmall",style:t?`background-image: url("${t.s3SmallLink}");`:"",onClick:this.showModal,"data-image":t.s3LargeLink,"data-imagexxl":t.s3XXLargeLink,"data-thumb":d.image&&d.image.s3SmallLink,"data-name":g.findTeam(d.team),"data-title":d.name,"data-date":d.date}," "))))))}})||o;a.a=r},VtuJ:function(t){t.exports={lineChart:"lineChart__1V7gu",svg:"svg__2VZNe",pathText:"pathText__2RfbE",pathOriginal:"pathOriginal__9eH9i",path:"path__39L9w",pathB:"pathB__4I_xm",pathC:"pathC__1DQi-",pathD:"pathD__2lI_C",pathE:"pathE__2VDGB",path2:"path2__19gje",path2B:"path2B__-l86N",path2C:"path2C__3xnAW",path2D:"path2D__1rC9K",path2E:"path2E__3ixKF",path3:"path3__1IFnl","x-axis":"x-axis__1601s","y-axis":"y-axis__13f0R","y-axis2":"y-axis2__3xPFM",marker:"marker__2peOe",mouseHover:"mouseHover__2B4N6",mouseHoverDarkmode:"mouseHoverDarkmode__3VPOP",mouseHoverBox:"mouseHoverBox__3fJuY",mouseLine:"mouseLine__1cdau"}},bbv7:function(t,a,e){"use strict";function s(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,s)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?s(Object(e),!0).forEach((function(a){o(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function n(t,a,e,s="",i=""){const o=Array.from(Array(t).keys()),n=Math.ceil(e)-Math.floor(a);return o.map(e=>`${s}${parseInt(n/(t-1)*e,10)+Math.floor(a)}${i}`)}function h(t){if(t)return JSON.parse(t)}function c(t){if("string"==typeof t&&t.match(/\d+h/)){const a=3600*t.replace(/h/g,"")*1e3,e=j.a.epoch();return j.a.isoDate(e-a)}return t}function l(t,a,e,s,i){return s+(t-a)*(i-s)/(e-a)}function r(t,a=!1){let e=1;return t<0&&(e=-1),a&&1===e?5*Math.floor(Math.abs(t)/5)*e:5*Math.ceil(Math.abs(t)/5)*e}function m({data:t,max:a}){return j.a.isNumber(a)?Math.max(a,...t.map(t=>t.x)):Math.max(...t.map(t=>t.x))}function u({data:t,max:a}){return j.a.isNumber(a)?Math.min(a,...t.map(t=>t.x)):Math.min(...t.map(t=>t.x))}function d({data:t,max:a}){return j.a.isNumber(a)?Math.max(a,...t.map(t=>t.y)):Math.max(...t.map(t=>t.y))}function g({data:t,min:a}){return j.a.isNumber(a)?Math.min(a,...t.map(t=>t.y)):Math.min(...t.map(t=>t.y))}function p(t,a,e,s){const i=function(t,a){const e=a[0]-t[0],s=a[1]-t[1];return{length:Math.sqrt(Math.pow(e,2)+Math.pow(s,2)),angle:Math.atan2(s,e)}}(a||t,e||t),o=i.angle+(s?Math.PI:0),n=.2*i.length;return[t[0]+Math.cos(o)*n,t[1]+Math.sin(o)*n]}function b(t,a,e){const[s,i]=p(e[a-1],e[a-2],t),[o,n]=p(t,e[a-1],e[a+1],!0);return`C ${s},${i} ${o},${n} ${t[0]},${t[1]}`}function x(t){return null===t[1]?`M ${t[0]} ${t[1]}`:`L ${t[0]} ${t[1]}`}function y(t,a){return t.reduce((t,e,s,i)=>0===s?`M ${e[0]},${e[1]}`:`${t} ${a(e,s,i)}`,"")}function O({data:t,yMin:a,yMax:e,xMax:s,xMin:i,width:o,height:n,yRangeMin:h,yRangeMax:c,offsetY:m=0,maxMinFixed:u=!1,smooth:p=!1,avgWindow:O=0}){const M={};if(t&&t.length){const f=s||Math.max(...t.map(t=>t.x)),D=i||Math.min(...t.map(t=>t.x));let v,w;u?v=j.a.isNumber(a)?a:g({data:t}):(v=j.a.isNumber(a)?g({data:t,min:a}):g({data:t}),v=r(v,!0)),u?w=j.a.isNumber(e)?e:d({data:t}):(w=j.a.isNumber(e)?d({data:t,max:e}):d({data:t}),w=r(w));const k=n-m,S=(t,a)=>{const e=l(t,D,f,0,o);return j.a.isDefined(a)&&(M[a]||(M[a]={}),M[a].x=e,M[a].xVal=t),e},_=(t,a)=>{let e=t;if(j.a.isNumber(h)&&j.a.isNumber(c))return e=l(e,v,w,h,c),k-l(e,h,c,m,n);if(null===e)return null;e=l(e,v,w,v,w);const s=Math.round(k-l(e,v,w,m,n));return j.a.isDefined(a)&&(M[a]||(M[a]={}),M[a].y=s,M[a].yVal=e),s},V=t.map((t,a)=>[S(t.x,a+1),_(t.y,a+1)]).filter(t=>null!==t[1]),L=O>0?function(t,a=2,e=(t=>t),s){const i=e,o=[];for(let e=0;e<t.length;e+=1){const n=e-a,h=e+a+1;let c=0,l=0;for(let a=n>=0?n:0;a<h&&a<t.length;a+=1)l+=i(t[a]),c+=1;o[e]=s?s(t[e],l/c):l/c}return o}(V,O,t=>t[1],(t,a)=>[t[0],a]):V;for(let t=0,a=L.length;t<a;t+=1)j.a.isDefined(M[t])&&(M[t+1].ySmooth=L[t][1]);const N=y(L,p?b:x),$=y(V,x);return{d:N,minX:D,maxX:f,maxY:w,minY:v,dOriginal:$,dataMap:M}}return{}}var M,f=e("hosL"),j=e("Gblv"),D=e("/eY4"),v=e("VtuJ"),w=e.n(v);const k={mouseData:{}};let S=Object(D.a)(M=class extends f.Component{constructor(t){super(t),this.mouseMove=t=>{if(this.props.stores){const{width:a=600,height:e=200}=this.props,s=this.svgRef.clientHeight,i=parseInt(l(t.layerX,30,this.svgRef.clientWidth,0,a),10),o=parseInt(l(t.layerY,20,s,0,e)+20,10),{appState:n}=this.props.stores;n.setMousePosition([i,o])}},this.state=i({},k),this.svgRef=null}getMouseData(t,a,e,s={autoLimit:!1,padding:0}){const{data:i=[],width:o=600,height:n=200}=this.props,h=parseInt(l(a,0,o,0,i.length),10)+1;if(j.a.checkNested(t,h,e)){let a=t[h][e];return s.autoLimit&&"y"===e?a>n/2?a-70-s.padding:a+20-s.padding:s.autoLimit&&"x"===e?a>o/2?a-160-s.padding:a+20-s.padding:a}}componentDidMount(){this.svgRef.addEventListener("mousemove",this.mouseMove)}componentWillUnmount(){this.svgRef.removeEventListener("mousemove",this.mouseMove)}render(){const{width:t=600,height:a=200,offsetY:e=0,paddingLeft:s=0,paddingBottom:o=0,tickCount:l=6,showXTicks:p,showYTicks:b,xTicks:x,yTicks:y,yTicksPrefix:M,yTicksPostfix:D,yMax:v,yMin:k,showY2Ticks:S,y2Ticks:_,y2TicksPrefix:V,y2TicksPostfix:L,y2Max:N,y2Min:$,range2bMin:C,range2bMax:X,range2cMin:B,range2cMax:W,range2dMin:P,range2dMax:T,y3Min:R,y3Max:F,range3Min:Y,range3Max:z,legend:I,legendB:E,legendC:H,legendD:J,legend2:A,legend2B:q,legend2C:G,legend2D:K,legend3:Q,data:U=[],dataB:Z=[],dataC:tt=[],dataD:at=[],data2:et=[],data2B:st=[],data2C:it=[],data2D:ot=[],data3:nt=[],marker:ht,unit:ct,unitB:lt,unitC:rt,unitD:mt,unit2:ut,unit2B:dt,unit2C:gt,unit2D:pt,avgWindow:bt=0,avgWindowB:xt=0,avgWindowC:yt=0,avgWindowD:Ot=0,avgWindow2:Mt=0,avgWindow2B:ft=0,avgWindow2C:jt=0,avgWindow2D:Dt=0,avgWindow3:vt=0,hoverVal:wt=(t=>t),hoverValB:kt=(t=>t),hoverValC:St=(t=>t),hoverValD:_t=(t=>t),hoverVal2:Vt=(t=>t),hoverVal2B:Lt=(t=>t),hoverVal2C:Nt=(t=>t),hoverVal2D:$t=(t=>t)}=this.props,{appState:Ct={}}=this.props.stores||{},{mousePos:Xt=[],darkmode:Bt}=Ct,Wt=s||(b?35:0),Pt=o||(p?20:0),Tt={width:t,height:a,offsetY:e},Rt=d({data:U,max:v}),Ft=r(d({data:Z,max:Rt})),Yt=g({data:U,min:k}),zt=r(g({data:Z,min:Yt}),!0),It=m({data:U}),Et=m({data:Z,max:It}),Ht=m({data:Z,max:Et}),Jt=u({data:U}),At=u({data:Z,max:Jt}),qt=u({data:Z,max:At}),{d:Gt,dataMap:Kt,dOriginal:Qt}=O(i(i({},Tt),{},{data:U,yMin:zt,yMax:Ft,xMax:Ht,xMin:qt,maxMinFixed:!0,smooth:!1,avgWindow:bt})),{d:Ut,dataMap:Zt}=O(i(i({},Tt),{},{data:Z,yMin:zt,yMax:Ft,xMax:Ht,xMin:qt,maxMinFixed:!0,smooth:!1,avgWindow:xt})),{d:ta,dataMap:aa}=O(i(i({},Tt),{},{data:tt,yMin:zt,yMax:Ft,xMax:Ht,maxMinFixed:!0,smooth:!1,avgWindow:yt})),{d:ea,dataMap:sa}=O(i(i({},Tt),{},{data:at,yMin:zt,yMax:Ft,xMax:Ht,maxMinFixed:!0,smooth:!1,avgWindow:Ot})),{d:ia,minY:oa=0,maxY:na=0,dataMap:ha}=O(i(i({},Tt),{},{data:et,yMin:$,yMax:N,maxMinFixed:!0,smooth:!1,avgWindow:Mt})),{d:ca,dataMap:la}=O(i(i({},Tt),{},{data:st,yMin:$,yMax:N,yRangeMin:C,yRangeMax:X,maxMinFixed:!0,smooth:!1,avgWindow:ft})),{d:ra,dataMap:ma}=O(i(i({},Tt),{},{data:it,yMin:$,yMax:N,yRangeMin:B,yRangeMax:W,maxMinFixed:!0,smooth:!1,avgWindow:jt})),{d:ua,dataMap:da}=O(i(i({},Tt),{},{data:ot,yMin:$,yMax:N,yRangeMin:P,yRangeMax:T,maxMinFixed:!0,smooth:!1,avgWindow:Dt})),{d:ga}=O(i(i({},Tt),{},{data:nt,yMin:R,yMax:F,yRangeMin:Y,yRangeMax:z,maxMinFixed:!0,smooth:!1,avgWindow:vt})),pa=h(x)||n(l,qt,Ht),ba=h(y)||n(l,zt,Ft,M,D).reverse(),xa=h(_)||n(l,oa,na,V,L).reverse();return Object(f.h)("div",{class:w.a.lineChart,style:`height: ${a}px; overflow: hidden;`},Object(f.h)("svg",{xmlns:"http://www.w3.org/2000/svg",class:w.a.svg,viewBox:`0 0 ${t} ${a}`,preserveAspectRatio:"none",style:`padding-left: ${Wt}px; padding-bottom: ${Pt}px; width: calc(100%); max-height: 100%;`,ref:t=>this.svgRef=t},ga&&Object(f.h)("path",{d:ga,class:w.a.path3}),ua&&Object(f.h)("path",{d:ua,class:w.a.path2D}),ra&&Object(f.h)("path",{d:ra,class:w.a.path2C}),ca&&Object(f.h)("path",{d:ca,class:w.a.path2B}),ia&&Object(f.h)("path",{d:ia,class:w.a.path2}),ea&&Object(f.h)("path",{d:ea,class:w.a.pathD}),Ut&&Object(f.h)("path",{d:Ut,class:w.a.pathB}),ta&&Object(f.h)("path",{d:ta,class:w.a.pathC}),Gt&&Object(f.h)("path",{d:Gt,class:w.a.path}),Qt&&Object(f.h)("path",{d:Qt,class:w.a.pathOriginal}),I&&Object(f.h)("line",{x1:"10",y1:"5",x2:"30",y2:"5",class:w.a.path}),I&&Object(f.h)("text",{x:"35",y:"10","font-size":"10px",class:w.a.pathText},I),E&&Object(f.h)("line",{x1:"10",y1:"15",x2:"30",y2:"15",class:w.a.pathB}),E&&Object(f.h)("text",{x:"35",y:"20","font-size":"10px",class:w.a.pathText},E),H&&Object(f.h)("line",{x1:"10",y1:"25",x2:"30",y2:"25",class:w.a.pathC}),H&&Object(f.h)("text",{x:"35",y:"30","font-size":"10px",class:w.a.pathText},H),J&&Object(f.h)("line",{x1:"10",y1:"35",x2:"30",y2:"35",class:w.a.pathD}),J&&Object(f.h)("text",{x:"35",y:"40","font-size":"10px",class:w.a.pathText},J),A&&Object(f.h)("line",{x1:t-150,y1:"5",x2:t-130,y2:"5",class:w.a.path2}),A&&Object(f.h)("text",{x:t-125,y:"10","font-size":"10px",class:w.a.pathText},A),q&&Object(f.h)("line",{x1:t-150,y1:"15",x2:t-130,y2:"15",class:w.a.path2B}),q&&Object(f.h)("text",{x:t-125,y:"20","font-size":"10px",class:w.a.pathText},q),G&&Object(f.h)("line",{x1:t-150,y1:"25",x2:t-130,y2:"25",class:w.a.path2C}),G&&Object(f.h)("text",{x:t-125,y:"30","font-size":"10px",class:w.a.pathText},G),K&&Object(f.h)("line",{x1:t-150,y1:"35",x2:t-130,y2:"35",class:w.a.path2C}),K&&Object(f.h)("text",{x:t-125,y:"30","font-size":"10px",class:w.a.pathText},K),Q&&Object(f.h)("line",{x1:t-150,y1:"25",x2:t-130,y2:"25",class:w.a.path3}),Q&&Object(f.h)("text",{x:t-125,y:"30","font-size":"10px",class:w.a.pathText},Q),ht&&Object(f.h)("line",{x1:ht,y1:a,x2:ht,y2:"0",class:w.a.marker}),Xt&&Xt.length>0&&Object(f.h)("line",{x1:Xt[0],y1:a,x2:Xt[0],y2:"0",class:w.a.mouseLine}),Xt&&Xt.length>0&&Kt&&j.a.isNumber(this.getMouseData(Kt,Xt[0],"yVal"))&&Object(f.h)("line",{x1:0,y1:this.getMouseData(Kt,Xt[0],"ySmooth"),x2:this.getMouseData(Kt,Xt[0],"x",{maxX:Ht}),y2:this.getMouseData(Kt,Xt[0],"ySmooth"),class:`${w.a.mouseLine} ${w.a.path}`}),Xt&&Xt.length>0&&Zt&&j.a.isNumber(this.getMouseData(Zt,Xt[0],"yVal"))&&Object(f.h)("line",{x1:0,y1:this.getMouseData(Zt,Xt[0],"ySmooth"),x2:this.getMouseData(Zt,Xt[0],"x",{maxX:Ht}),y2:this.getMouseData(Zt,Xt[0],"ySmooth"),class:`${w.a.mouseLine} ${w.a.pathB}`}),Xt&&Xt.length>0&&aa&&j.a.isNumber(this.getMouseData(aa,Xt[0],"yVal"))&&Object(f.h)("line",{x1:0,y1:this.getMouseData(aa,Xt[0],"ySmooth"),x2:this.getMouseData(aa,Xt[0],"x",{maxX:Ht}),y2:this.getMouseData(aa,Xt[0],"ySmooth"),class:`${w.a.mouseLine} ${w.a.pathD}`}),Xt&&Xt.length>0&&sa&&j.a.isNumber(this.getMouseData(sa,Xt[0],"yVal"))&&Object(f.h)("line",{x1:0,y1:this.getMouseData(sa,Xt[0],"ySmooth"),x2:this.getMouseData(sa,Xt[0],"x",{maxX:Ht}),y2:this.getMouseData(sa,Xt[0],"ySmooth"),class:`${w.a.mouseLine} ${w.a.pathC}`}),Xt&&Xt.length>0&&ha&&j.a.isNumber(this.getMouseData(ha,Xt[0],"yVal"))&&Object(f.h)("line",{x1:this.getMouseData(ha,Xt[0],"x",{maxX:Ht}),y1:this.getMouseData(ha,Xt[0],"ySmooth"),x2:t,y2:this.getMouseData(ha,Xt[0],"ySmooth"),class:`${w.a.mouseLine} ${w.a.path2}`}),Xt&&Xt.length>0&&la&&j.a.isNumber(this.getMouseData(la,Xt[0],"yVal"))&&Object(f.h)("line",{x1:this.getMouseData(la,Xt[0],"x",{maxX:Ht}),y1:this.getMouseData(la,Xt[0],"ySmooth"),x2:t,y2:this.getMouseData(la,Xt[0],"ySmooth"),class:`${w.a.mouseLine} ${w.a.path2B}`}),Xt&&Xt.length>0&&ma&&j.a.isNumber(this.getMouseData(ma,Xt[0],"yVal"))&&Object(f.h)("line",{x1:this.getMouseData(ma,Xt[0],"x",{maxX:Ht}),y1:this.getMouseData(ma,Xt[0],"ySmooth"),x2:t,y2:this.getMouseData(ma,Xt[0],"ySmooth"),class:`${w.a.mouseLine} ${w.a.path2D}`}),Xt&&Xt.length>0&&da&&j.a.isNumber(this.getMouseData(da,Xt[0],"yVal"))&&Object(f.h)("line",{x1:this.getMouseData(da,Xt[0],"x",{maxX:Ht}),y1:this.getMouseData(da,Xt[0],"ySmooth"),x2:t,y2:this.getMouseData(da,Xt[0],"ySmooth"),class:`${w.a.mouseLine} ${w.a.path2C}`}),Xt&&Xt.length>0&&Kt&&j.a.isNumber(this.getMouseData(Kt,Xt[0],"yVal"))&&Object(f.h)("circle",{cx:this.getMouseData(Kt,Xt[0],"x",{maxX:Ht}),cy:this.getMouseData(Kt,Xt[0],"ySmooth"),r:"5",class:w.a.path}),Xt&&Xt.length>0&&Zt&&j.a.isNumber(this.getMouseData(Zt,Xt[0],"yVal"))&&Object(f.h)("circle",{cx:this.getMouseData(Zt,Xt[0],"x",{maxX:Ht}),cy:this.getMouseData(Zt,Xt[0],"ySmooth"),r:"5",class:w.a.pathB}),Xt&&Xt.length>0&&aa&&j.a.isNumber(this.getMouseData(aa,Xt[0],"yVal"))&&Object(f.h)("circle",{cx:this.getMouseData(aa,Xt[0],"x",{maxX:Ht}),cy:this.getMouseData(aa,Xt[0],"ySmooth"),r:"5",class:w.a.pathC}),Xt&&Xt.length>0&&sa&&j.a.isNumber(this.getMouseData(sa,Xt[0],"yVal"))&&Object(f.h)("circle",{cx:this.getMouseData(sa,Xt[0],"x",{maxX:Ht}),cy:this.getMouseData(sa,Xt[0],"ySmooth"),r:"5",class:w.a.pathD}),Xt&&Xt.length>0&&ha&&j.a.isNumber(this.getMouseData(ha,Xt[0],"yVal"))&&Object(f.h)("circle",{cx:this.getMouseData(ha,Xt[0],"x",{maxX:Ht}),cy:this.getMouseData(ha,Xt[0],"ySmooth"),r:"5",class:w.a.path2}),Xt&&Xt.length>0&&la&&j.a.isNumber(this.getMouseData(la,Xt[0],"yVal"))&&Object(f.h)("circle",{cx:this.getMouseData(la,Xt[0],"x",{maxX:Ht}),cy:this.getMouseData(la,Xt[0],"ySmooth"),r:"5",class:w.a.path2B}),Xt&&Xt.length>0&&ma&&j.a.isNumber(this.getMouseData(ma,Xt[0],"yVal"))&&Object(f.h)("circle",{cx:this.getMouseData(ma,Xt[0],"x",{maxX:Ht}),cy:this.getMouseData(ma,Xt[0],"ySmooth"),r:"5",class:w.a.path2C}),Xt&&Xt.length>0&&da&&j.a.isNumber(this.getMouseData(da,Xt[0],"yVal"))&&Object(f.h)("circle",{cx:this.getMouseData(da,Xt[0],"x",{maxX:Ht}),cy:this.getMouseData(da,Xt[0],"ySmooth"),r:"5",class:w.a.path2D}),Xt&&Xt.length>0&&Object(f.h)("rect",{x:this.getMouseData(Kt,Xt[0],"x",{autoLimit:!0,padding:10,maxX:Ht}),y:this.getMouseData(Kt,Xt[0],"y",{autoLimit:!0,padding:10}),width:"160",height:"80",rx:"5",ry:"5",class:w.a.mouseHoverBox}),Xt&&Xt.length>0&&Object(f.h)("text",{x:this.getMouseData(Kt,Xt[0],"x",{autoLimit:!0,padding:0,maxX:Ht}),y:this.getMouseData(Kt,Xt[0],"y",{autoLimit:!0,padding:0}),"font-size":"11px",class:Bt?w.a.mouseHoverDarkmode:w.a.mouseHover},Gt&&Kt&&j.a.isNumber(this.getMouseData(Kt,Xt[0],"yVal"))&&Object(f.h)("tspan",{x:this.getMouseData(Kt,Xt[0],"x",{autoLimit:!0,padding:0,maxX:Ht}),dy:"1.2em"},Object(f.h)("tspan",{class:w.a.path},"--")," ",I,": ",wt(this.getMouseData(Kt,Xt[0],"yVal"))," ",ct),Ut&&Zt&&j.a.isNumber(this.getMouseData(Zt,Xt[0],"yVal"))&&Object(f.h)("tspan",{x:this.getMouseData(Zt,Xt[0],"x",{autoLimit:!0,padding:0,maxX:Ht}),dy:"1.2em"},Object(f.h)("tspan",{class:w.a.pathB},"--")," ",E,": ",kt(this.getMouseData(Zt,Xt[0],"yVal"))," ",lt||ct),ta&&aa&&j.a.isNumber(this.getMouseData(aa,Xt[0],"yVal"))&&Object(f.h)("tspan",{x:this.getMouseData(aa,Xt[0],"x",{autoLimit:!0,padding:0,maxX:Ht}),dy:"1.2em"},Object(f.h)("tspan",{class:w.a.pathC},"--")," ",H,": ",St(this.getMouseData(aa,Xt[0],"yVal"))," ",rt||ct),ea&&sa&&j.a.isNumber(this.getMouseData(sa,Xt[0],"yVal"))&&Object(f.h)("tspan",{x:this.getMouseData(sa,Xt[0],"x",{autoLimit:!0,padding:0,maxX:Ht}),dy:"1.2em"},Object(f.h)("tspan",{class:w.a.pathD},"--")," ",J,": ",_t(this.getMouseData(sa,Xt[0],"yVal"))," ",mt||ct),ia&&ha&&j.a.isNumber(this.getMouseData(ha,Xt[0],"yVal"))&&Object(f.h)("tspan",{x:this.getMouseData(ha,Xt[0],"x",{autoLimit:!0,padding:0,maxX:Ht}),dy:"1.2em"},Object(f.h)("tspan",{class:w.a.path2},"--")," ",A,": ",Vt(this.getMouseData(ha,Xt[0],"yVal"))," ",ut),ca&&la&&j.a.isNumber(this.getMouseData(la,Xt[0],"yVal"))&&Object(f.h)("tspan",{x:this.getMouseData(la,Xt[0],"x",{autoLimit:!0,padding:0,maxX:Ht}),dy:"1.2em"},Object(f.h)("tspan",{class:w.a.path2B},"--")," ",q,": ",Lt(this.getMouseData(la,Xt[0],"yVal"))," ",dt||ut),ra&&ma&&j.a.isNumber(this.getMouseData(ma,Xt[0],"yVal"))&&Object(f.h)("tspan",{x:this.getMouseData(ma,Xt[0],"x",{autoLimit:!0,padding:0,maxX:Ht}),dy:"1.2em"},Object(f.h)("tspan",{class:w.a.path2C},"--")," ",G,": ",Nt(this.getMouseData(ma,Xt[0],"yVal"))," ",gt||ut),ua&&da&&j.a.isNumber(this.getMouseData(da,Xt[0],"yVal"))&&Object(f.h)("tspan",{x:this.getMouseData(da,Xt[0],"x",{autoLimit:!0,padding:0,maxX:Ht}),dy:"1.2em"},Object(f.h)("tspan",{class:w.a.path2D},"--")," ",K,": ",$t(this.getMouseData(da,Xt[0],"yVal"))," ",pt||ut))),p&&Object(f.h)("div",{class:w.a["x-axis"],style:{left:Wt+"px",width:`calc(100% - ${Wt}px)`}},pa.map(t=>Object(f.h)("div",{"data-value":c(t)}))),b&&Object(f.h)("div",{class:w.a["y-axis"],style:{bottom:Pt+"px"}},ba.map(t=>Object(f.h)("div",{"data-value":t}))),S&&Object(f.h)("div",{class:w.a["y-axis2"],style:{bottom:Pt+"px"}},xa.map(t=>Object(f.h)("div",{"data-value":t}))))}})||M;a.a=S}}]);
//# sourceMappingURL=route-home.chunk.b2b23.esm.js.map