(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+1Jk":function(t,a,e){"use strict";e.r(a),function(t){function s(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,s)}return e}function o(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var i,n=e("hosL"),r=e("Gblv"),c=e("/eY4"),h=e("JWe/"),l=e("3pQw"),u=e("xDik"),d=e("bbv7"),m={},p=Object(c.a)(i=function(a){function e(t){var e;return(e=a.call(this,t)||this).state=function(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?s(Object(e),!0).forEach((function(a){o(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}({},m),e.loadAll(),e}var i,c;c=a,(i=e).prototype=Object.create(c.prototype),i.prototype.constructor=i,i.__proto__=c;var p=e.prototype;return p.loadAll=function(){return new Promise(function(t,a){var e,s;return s=(e=this.props.stores).userStore,e.appState.getFingerprint(),Promise.resolve(s.getInfo()).then(function(){try{return Promise.resolve(this.loadFeed()).then(function(){try{return Promise.resolve(this.loadWorkoutSummary()).then((function(){try{return t()}catch(t){return a(t)}}),a)}catch(t){return a(t)}}.bind(this),a)}catch(t){return a(t)}}.bind(this),a)}.bind(this))},p.loadFeed=function(){return new Promise(function(t,a){return Promise.resolve(this.props.stores.userStore.getFeed()).then((function(){try{return t()}catch(t){return a(t)}}),a)}.bind(this))},p.loadWorkoutSummary=function(){return new Promise(function(t,a){return Promise.resolve(this.props.stores.userStore.getWorkoutSummary()).then((function(){try{return t()}catch(t){return a(t)}}),a)}.bind(this))},p.render=function(){var a=this,e=this.props.stores.userStore,s=e.workouts,o=e.historyFeed,i=e.workoutSummary,c=e.graphWorkoutSummaryWeekDistanceCurrent,m=e.graphWorkoutSummaryWeekDistancePrev;return Object(n.h)("div",{class:"container-fluid",style:"margin-bottom: 100px; margin-top: 60px;"},Object(n.h)("div",{class:"row"},Object(n.h)("div",{class:"col-12 mb-4"})),Object(n.h)("div",{class:"row"},Object(n.h)("div",{class:"col-12 mb-4"},Object(n.h)("h5",null,"Trenings statistikk"),Object(n.h)("small",{class:"mb-3"},Object(n.h)("small",null,Object(n.h)("table",{class:"table table-sm font-weigth-lighter"},Object(n.h)("thead",null,Object(n.h)("tr",null,Object(n.h)("th",null,"Mnd"),r.a.range(1,12).map((function(t){return Object(n.h)("th",{class:"text-right",style:"padding: .2rem;"},t)})))),Object(n.h)("tbody",null,Object(n.h)("tr",null,Object(n.h)("th",{scope:"row",style:"padding: .2rem;"},"2019"),r.a.range(1,12).map((function(a){return Object(n.h)(t,null,Object(n.h)("td",{class:"text-right",style:"padding: .2rem;"},e.findWorkoutSummaryMonth(2019,a),Object(n.h)("br",null),e.findWorkoutSummaryMonth(2019,a,"elevation"),Object(n.h)("br",null)))})),Object(n.h)("td",{class:"text-muted",style:"padding: .2rem;"},Object(n.h)("nobr",null,Object(n.h)("i",{class:"fas fa-road"})," km"),Object(n.h)("br",null),Object(n.h)("nobr",null,Object(n.h)("i",{class:"fas fa-mountain"})," m"),Object(n.h)("br",null))),Object(n.h)("tr",null,Object(n.h)("th",{scope:"row",style:"padding: .2rem;"},"2020"),r.a.range(1,12).map((function(a){return Object(n.h)(t,null,Object(n.h)("td",{class:"text-right",style:"padding: .2rem;"},e.findWorkoutSummaryMonth(2020,a),Object(n.h)("br",null),e.findWorkoutSummaryMonth(2020,a,"elevation"),Object(n.h)("br",null)))})),Object(n.h)("td",{class:"text-muted",style:"padding: .2rem;"},Object(n.h)("nobr",null,Object(n.h)("i",{class:"fas fa-road"})," km"),Object(n.h)("br",null),Object(n.h)("nobr",null,Object(n.h)("i",{class:"fas fa-mountain"})," m"),Object(n.h)("br",null))))))),Object(n.h)(d.a,{stores:this.props.stores,data:c,dataB:m,legend:"2020",legendB:"2019",width:550,height:150,yMin:0,showYTicks:1,unit:"km",showXTicks:1}))),Object(n.h)("div",{class:"row"},Object(n.h)("div",{class:"col-12 mb-4"},Object(n.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0"},Object(n.h)("h5",null,"Siste fra hundene")),o&&o.map((function(t){return Object(n.h)(u.a,{stores:a.props.stores,line:t})})))),Object(n.h)("div",{class:"row"},Object(n.h)("div",{class:"col-12 mb-4"},Object(n.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0"},Object(n.h)("h5",null,"Siste treningsturer - ",s.length," stk")),s&&s.map((function(t){return Object(n.h)(h.a,{stores:a.props.stores,workout:t})})))),Object(n.h)("div",{class:"row"},Object(n.h)("div",{class:"col-12 mb-4"},Object(n.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0"},Object(n.h)("h5",{class:"mt-4"},"Treningsoversikt")),i&&i.map((function(t){return Object(n.h)(l.a,{stores:a.props.stores,summary:t})})))))},e}(n.Component))||i;a.default=p}.call(this,e("hosL").Fragment)},"3pQw":function(t,a,e){"use strict";var s,o=e("hosL"),i=e("Gblv"),n=e("/eY4"),r=Object(n.a)(s=function(t){function a(){return t.apply(this,arguments)||this}var e,s;return s=t,(e=a).prototype=Object.create(s.prototype),e.prototype.constructor=e,e.__proto__=s,a.prototype.render=function(){var t=this.props.summary;return Object(o.h)("div",{class:"w-100 mb-3"},Object(o.h)("div",{class:"row"},Object(o.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 d-flex mb-0 position-relative"},Object(o.h)("div",{class:"text-center border rounded-circle imageRounded"},Object(o.h)("span",{class:"text-muted mt-4",style:"font-size: 40px;"},t._id.week)),Object(o.h)("div",{class:"flex-grow-1 pl-3"},Object(o.h)("h5",{class:"my-0"},t._id.week," - ",t._id.year),Object(o.h)("small",{class:"text-muted"},Object(o.h)("i",{class:"fas fa-wave-square"})," ",t.count,Object(o.h)("i",{class:"fas fa-road ml-2"})," ",t.distanceKm,"km",Object(o.h)("i",{class:"fas fa-mountain ml-2"})," ",t.elevation,"m",Object(o.h)("i",{class:"fas fa-stopwatch ml-2"})," ",i.a.secToHms(t.duration),Object(o.h)("i",{class:"fas fa-tachometer-alt ml-2"})," ",t.speedAvg,"km/t")))))},a}(o.Component))||s;a.a=r},"JWe/":function(t,a,e){"use strict";function s(t){switch(t.type){case 1:return"border-primary";case 2:return"border-danger";case 3:return"border-success"}}function o(t){switch(t.type){case 1:return"fas fa-running";case 2:return"fas fa-flag-checkered";case 3:return"fas fa-hiking"}}var i,n=e("hosL"),r=e("Gblv"),c=e("/eY4"),h=e("UJvz"),l=Object(c.a)(i=function(t){function a(){for(var a,e=arguments.length,s=new Array(e),o=0;o<e;o++)s[o]=arguments[o];return(a=t.call.apply(t,[this].concat(s))||this).showModal=function(t){t.stopPropagation(),t.preventDefault(),a.setState({displayModal:!0,currentImage:t.target.dataset.image,currentImageXXL:t.target.dataset.imagexxl,thumb:t.target.dataset.thumb,name:t.target.dataset.name,title:t.target.dataset.title,date:t.target.dataset.date})},a.closeModal=function(){a.setState({displayModal:!1})},a.toggleDate=function(){a.setState({showDate:!a.state.showDate})},a}var e,i;return i=t,(e=a).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i,a.prototype.render=function(){var t=this,a=this.state,e=a.displayModal,i=a.currentImage,c=a.currentImageXXL,l=a.showDate,u=a.thumb,d=a.name,m=a.title,p=a.date,g=this.props.workout,b=this.props.stores.userStore;return Object(n.h)("div",{class:"w-100 mb-3"},Object(n.h)("div",{class:"row"},e&&Object(n.h)(h.a,{close:this.closeModal,image:i,imagexxl:c,thumb:u,name:d,title:m,date:p}),Object(n.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 d-flex mb-0 position-relative"},Object(n.h)("div",{class:"text-center border rounded-circle imageRounded "+s(g),style:(g.image?'background-image: url("'+g.image.s3SmallLink+'");':"")+" border-width: 3px !important;"},!g.image&&Object(n.h)("i",{class:o(g)+" text-muted mt-3",style:"font-size: 40px;"})),Object(n.h)("div",{class:"flex-grow-1 pl-3",style:"line-height: 1.0em;"},Object(n.h)("a",{class:"stretched-link",href:"/workouts/"+g.id},Object(n.h)("h5",{class:"my-0"},g.name)),Object(n.h)("span",{class:"font-weight-light"},b.findTeam(g.team)),Object(n.h)("br",null),Object(n.h)("small",{class:"text-muted"},g.date&&Object(n.h)("small",{onClick:this.toggleDate},l?r.a.formatDate(g.date,{locale:"no-NB"}):r.a.formatDistance(g.date,new Date,{locale:"no-NB"}),Object(n.h)("br",null))),Object(n.h)("small",null,Object(n.h)("span",{class:"text-muted"},Object(n.h)("i",{class:"fas fa-tools"})," ",b.findEquipment(g.equipment)||g.equipment,Object(n.h)("i",{class:"fas fa-road ml-2"})," ",g.distanceKm,"km",Object(n.h)("i",{class:"fas fa-mountain ml-2"})," ",g.elevation,"m",Object(n.h)("i",{class:"fas fa-tachometer-alt ml-2"})," ",r.a.format(g.speedAvg,1),"km/t",g.dogs&&Object(n.h)("span",null,Object(n.h)("i",{class:"fas fa-dog ml-2"})," ",g.dogs.length)),Object(n.h)("i",null,g.url),Object(n.h)("br",null)))),Object(n.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 mt-1",style:"padding-left: 122px;"},Object(n.h)("div",{class:"row"},g.images&&g.images.map((function(a){return Object(n.h)("div",{class:"text-center border rounded imageRounded imageRoundedSmall",style:a?'background-image: url("'+a.s3SmallLink+'");':"",onClick:t.showModal,"data-image":a.s3LargeLink,"data-imagexxl":a.s3XXLargeLink,"data-thumb":g.image&&g.image.s3SmallLink,"data-name":b.findTeam(g.team),"data-title":g.name,"data-date":g.date}," ")}))))))},a}(n.Component))||i;a.a=l},VtuJ:function(t){t.exports={lineChart:"lineChart__1V7gu",svg:"svg__2VZNe",pathText:"pathText__2RfbE",pathOriginal:"pathOriginal__9eH9i",path:"path__39L9w",pathB:"pathB__4I_xm",pathC:"pathC__1DQi-",pathD:"pathD__2lI_C",pathE:"pathE__2VDGB",path2:"path2__19gje",path2B:"path2B__-l86N",path2C:"path2C__3xnAW",path2D:"path2D__1rC9K",path2E:"path2E__3ixKF",path3:"path3__1IFnl","x-axis":"x-axis__1601s","y-axis":"y-axis__13f0R","y-axis2":"y-axis2__3xPFM",marker:"marker__2peOe",mouseHover:"mouseHover__2B4N6",mouseHoverDarkmode:"mouseHoverDarkmode__3VPOP",mouseHoverBox:"mouseHoverBox__3fJuY",mouseLine:"mouseLine__1cdau"}},bbv7:function(t,a,e){"use strict";function s(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,s)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?s(Object(e),!0).forEach((function(a){i(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function n(t,a,e,s,o){void 0===s&&(s=""),void 0===o&&(o="");var i=Array.from(Array(t).keys()),n=Math.ceil(e)-Math.floor(a);return i.map((function(e){return""+s+(parseInt(n/(t-1)*e,10)+Math.floor(a))+o}))}function r(t){if(t)return JSON.parse(t)}function c(t){if("string"==typeof t&&t.match(/\d+h/)){var a=3600*t.replace(/h/g,"")*1e3,e=M.a.epoch();return M.a.isoDate(e-a)}return t}function h(t,a,e,s,o){return s+(t-a)*(o-s)/(e-a)}function l(t,a){void 0===a&&(a=!1);var e=1;return t<0&&(e=-1),a&&1===e?5*Math.floor(Math.abs(t)/5)*e:5*Math.ceil(Math.abs(t)/5)*e}function u(t){var a=t.data,e=t.max;return M.a.isNumber(e)?Math.max.apply(Math,[e].concat(a.map((function(t){return t.x})))):Math.max.apply(Math,a.map((function(t){return t.x})))}function d(t){var a=t.data,e=t.max;return M.a.isNumber(e)?Math.min.apply(Math,[e].concat(a.map((function(t){return t.x})))):Math.min.apply(Math,a.map((function(t){return t.x})))}function m(t){var a=t.data,e=t.max;return M.a.isNumber(e)?Math.max.apply(Math,[e].concat(a.map((function(t){return t.y})))):Math.max.apply(Math,a.map((function(t){return t.y})))}function p(t){var a=t.data,e=t.min;return M.a.isNumber(e)?Math.min.apply(Math,[e].concat(a.map((function(t){return t.y})))):Math.min.apply(Math,a.map((function(t){return t.y})))}function g(t,a,e,s){var o,i,n,r,c=(n=(i=e||t)[0]-(o=a||t)[0],r=i[1]-o[1],{length:Math.sqrt(Math.pow(n,2)+Math.pow(r,2)),angle:Math.atan2(r,n)}),h=c.angle+(s?Math.PI:0),l=.2*c.length;return[t[0]+Math.cos(h)*l,t[1]+Math.sin(h)*l]}function b(t,a,e){var s=g(e[a-1],e[a-2],t),o=s[0],i=s[1],n=g(t,e[a-1],e[a+1],!0);return"C "+o+","+i+" "+n[0]+","+n[1]+" "+t[0]+","+t[1]}function x(t){return null===t[1]?"M "+t[0]+" "+t[1]:"L "+t[0]+" "+t[1]}function y(t,a){return t.reduce((function(t,e,s,o){return 0===s?"M "+e[0]+","+e[1]:t+" "+a(e,s,o)}),"")}function f(t){var a=t.data,e=t.yMin,s=t.yMax,o=t.xMin,i=t.width,n=t.height,r=t.yRangeMin,c=t.yRangeMax,u=t.offsetY,d=void 0===u?0:u,g=t.maxMinFixed,f=void 0!==g&&g,v=t.smooth,O=void 0!==v&&v,j=t.avgWindow,D=void 0===j?0:j,w={};if(a&&a.length){var k,_,S=t.xMax||Math.max.apply(Math,a.map((function(t){return t.x}))),V=o||Math.min.apply(Math,a.map((function(t){return t.x})));k=f?M.a.isNumber(e)?e:p({data:a}):l(k=M.a.isNumber(e)?p({data:a,min:e}):p({data:a}),!0),_=f?M.a.isNumber(s)?s:m({data:a}):l(_=M.a.isNumber(s)?m({data:a,max:s}):m({data:a}));for(var L=n-d,N=function(t,a){var e=h(t,V,S,0,i);return M.a.isDefined(a)&&(w[a]||(w[a]={}),w[a].x=e,w[a].xVal=t),e},C=function(t,a){var e=t;if(M.a.isNumber(r)&&M.a.isNumber(c))return e=h(e,k,_,r,c),L-h(e,r,c,d,n);if(null===e)return null;e=h(e,k,_,k,_);var s=Math.round(L-h(e,k,_,d,n));return M.a.isDefined(a)&&(w[a]||(w[a]={}),w[a].y=s,w[a].yVal=e),s},P=a.map((function(t,a){return[N(t.x,a+1),C(t.y,a+1)]})).filter((function(t){return null!==t[1]})),X=D>0?function(t,a,e,s){void 0===a&&(a=2),void 0===e&&(e=function(t){return t});for(var o=e,i=[],n=0;n<t.length;n+=1){for(var r=n-a,c=n+a+1,h=0,l=0,u=r>=0?r:0;u<c&&u<t.length;u+=1)l+=o(t[u]),h+=1;i[n]=s?s(t[n],l/h):l/h}return i}(P,D,(function(t){return t[1]}),(function(t,a){return[t[0],a]})):P,B=0,W=X.length;B<W;B+=1)M.a.isDefined(w[B])&&(w[B+1].ySmooth=X[B][1]);var T=y(X,O?b:x),R=y(P,x);return{d:T,minX:V,maxX:S,maxY:_,minY:k,dOriginal:R,dataMap:w}}return{}}var v,O=e("hosL"),M=e("Gblv"),j=e("/eY4"),D=e("VtuJ"),w=e.n(D),k={mouseData:{}},_=Object(j.a)(v=function(t){function a(a){var e;return(e=t.call(this,a)||this).mouseMove=function(t){if(e.props.stores){var a=e.props,s=a.width,o=a.height,i=void 0===o?200:o,n=e.svgRef.clientHeight,r=parseInt(h(t.layerX,30,e.svgRef.clientWidth,0,void 0===s?600:s),10),c=parseInt(h(t.layerY,20,n,0,i)+20,10);e.props.stores.appState.setMousePosition([r,c])}},e.state=o({},k),e.svgRef=null,e}var e,s;s=t,(e=a).prototype=Object.create(s.prototype),e.prototype.constructor=e,e.__proto__=s;var i=a.prototype;return i.getMouseData=function(t,a,e,s){void 0===s&&(s={autoLimit:!1,padding:0});var o=this.props,i=o.data,n=o.width,r=void 0===n?600:n,c=o.height,l=void 0===c?200:c,u=parseInt(h(a,0,r,0,(void 0===i?[]:i).length),10)+1;if(M.a.checkNested(t,u,e)){var d=t[u][e];return s.autoLimit&&"y"===e?d>l/2?d-70-s.padding:d+20-s.padding:s.autoLimit&&"x"===e?d>r/2?d-160-s.padding:d+20-s.padding:d}},i.componentDidMount=function(){this.svgRef.addEventListener("mousemove",this.mouseMove)},i.componentWillUnmount=function(){this.svgRef.removeEventListener("mousemove",this.mouseMove)},i.render=function(){var t=this,a=this.props,e=a.width,s=void 0===e?600:e,i=a.height,h=void 0===i?200:i,g=a.offsetY,b=a.paddingLeft,x=a.paddingBottom,y=a.tickCount,v=void 0===y?6:y,j=a.showXTicks,D=a.showYTicks,k=a.xTicks,_=a.yTicks,S=a.yTicksPrefix,V=a.yTicksPostfix,L=a.yMin,N=a.showY2Ticks,C=a.y2Ticks,P=a.y2TicksPrefix,X=a.y2TicksPostfix,B=a.y2Max,W=a.y2Min,T=a.range2bMin,R=a.range2bMax,F=a.range2cMin,Y=a.range2cMax,z=a.range2dMin,I=a.range2dMax,E=a.y3Min,H=a.y3Max,J=a.range3Min,A=a.range3Max,q=a.legend,G=a.legendB,K=a.legendC,Q=a.legendD,U=a.legend2,Z=a.legend2B,$=a.legend2C,tt=a.legend2D,at=a.legend3,et=a.data,st=void 0===et?[]:et,ot=a.dataB,it=void 0===ot?[]:ot,nt=a.dataC,rt=void 0===nt?[]:nt,ct=a.dataD,ht=void 0===ct?[]:ct,lt=a.data2,ut=void 0===lt?[]:lt,dt=a.data2B,mt=void 0===dt?[]:dt,pt=a.data2C,gt=void 0===pt?[]:pt,bt=a.data2D,xt=void 0===bt?[]:bt,yt=a.data3,ft=void 0===yt?[]:yt,vt=a.marker,Ot=a.unit,Mt=a.unitB,jt=a.unitC,Dt=a.unitD,wt=a.unit2,kt=a.unit2B,_t=a.unit2C,St=a.unit2D,Vt=a.avgWindow,Lt=void 0===Vt?0:Vt,Nt=a.avgWindowB,Ct=void 0===Nt?0:Nt,Pt=a.avgWindowC,Xt=void 0===Pt?0:Pt,Bt=a.avgWindowD,Wt=void 0===Bt?0:Bt,Tt=a.avgWindow2,Rt=void 0===Tt?0:Tt,Ft=a.avgWindow2B,Yt=void 0===Ft?0:Ft,zt=a.avgWindow2C,It=void 0===zt?0:zt,Et=a.avgWindow2D,Ht=void 0===Et?0:Et,Jt=a.avgWindow3,At=void 0===Jt?0:Jt,qt=a.hoverVal,Gt=void 0===qt?function(t){return t}:qt,Kt=a.hoverValB,Qt=void 0===Kt?function(t){return t}:Kt,Ut=a.hoverValC,Zt=void 0===Ut?function(t){return t}:Ut,$t=a.hoverValD,ta=void 0===$t?function(t){return t}:$t,aa=a.hoverVal2,ea=void 0===aa?function(t){return t}:aa,sa=a.hoverVal2B,oa=void 0===sa?function(t){return t}:sa,ia=a.hoverVal2C,na=void 0===ia?function(t){return t}:ia,ra=a.hoverVal2D,ca=void 0===ra?function(t){return t}:ra,ha=(this.props.stores||{}).appState,la=void 0===ha?{}:ha,ua=la.mousePos,da=void 0===ua?[]:ua,ma=la.darkmode,pa=(void 0===b?0:b)||(D?35:0),ga=(void 0===x?0:x)||(j?20:0),ba={width:s,height:h,offsetY:void 0===g?0:g},xa=m({data:st,max:a.yMax}),ya=l(m({data:it,max:xa})),fa=p({data:st,min:L}),va=l(p({data:it,min:fa}),!0),Oa=u({data:st}),Ma=u({data:it,max:Oa}),ja=u({data:it,max:Ma}),Da=d({data:st}),wa=d({data:it,max:Da}),ka=d({data:it,max:wa}),_a=f(o(o({},ba),{},{data:st,yMin:va,yMax:ya,xMax:ja,xMin:ka,maxMinFixed:!0,smooth:!1,avgWindow:Lt})),Sa=_a.d,Va=_a.dataMap,La=_a.dOriginal,Na=f(o(o({},ba),{},{data:it,yMin:va,yMax:ya,xMax:ja,xMin:ka,maxMinFixed:!0,smooth:!1,avgWindow:Ct})),Ca=Na.d,Pa=Na.dataMap,Xa=f(o(o({},ba),{},{data:rt,yMin:va,yMax:ya,xMax:ja,maxMinFixed:!0,smooth:!1,avgWindow:Xt})),Ba=Xa.d,Wa=Xa.dataMap,Ta=f(o(o({},ba),{},{data:ht,yMin:va,yMax:ya,xMax:ja,maxMinFixed:!0,smooth:!1,avgWindow:Wt})),Ra=Ta.d,Fa=Ta.dataMap,Ya=f(o(o({},ba),{},{data:ut,yMin:W,yMax:B,maxMinFixed:!0,smooth:!1,avgWindow:Rt})),za=Ya.d,Ia=Ya.minY,Ea=void 0===Ia?0:Ia,Ha=Ya.maxY,Ja=void 0===Ha?0:Ha,Aa=Ya.dataMap,qa=f(o(o({},ba),{},{data:mt,yMin:W,yMax:B,yRangeMin:T,yRangeMax:R,maxMinFixed:!0,smooth:!1,avgWindow:Yt})),Ga=qa.d,Ka=qa.dataMap,Qa=f(o(o({},ba),{},{data:gt,yMin:W,yMax:B,yRangeMin:F,yRangeMax:Y,maxMinFixed:!0,smooth:!1,avgWindow:It})),Ua=Qa.d,Za=Qa.dataMap,$a=f(o(o({},ba),{},{data:xt,yMin:W,yMax:B,yRangeMin:z,yRangeMax:I,maxMinFixed:!0,smooth:!1,avgWindow:Ht})),te=$a.d,ae=$a.dataMap,ee=f(o(o({},ba),{},{data:ft,yMin:E,yMax:H,yRangeMin:J,yRangeMax:A,maxMinFixed:!0,smooth:!1,avgWindow:At})).d,se=r(k)||n(v,ka,ja),oe=r(_)||n(v,va,ya,S,V).reverse(),ie=r(C)||n(v,Ea,Ja,P,X).reverse();return Object(O.h)("div",{class:w.a.lineChart,style:"height: "+h+"px; overflow: hidden;"},Object(O.h)("svg",{xmlns:"http://www.w3.org/2000/svg",class:w.a.svg,viewBox:"0 0 "+s+" "+h,preserveAspectRatio:"none",style:"padding-left: "+pa+"px; padding-bottom: "+ga+"px; width: calc(100%); max-height: 100%;",ref:function(a){return t.svgRef=a}},ee&&Object(O.h)("path",{d:ee,class:w.a.path3}),te&&Object(O.h)("path",{d:te,class:w.a.path2D}),Ua&&Object(O.h)("path",{d:Ua,class:w.a.path2C}),Ga&&Object(O.h)("path",{d:Ga,class:w.a.path2B}),za&&Object(O.h)("path",{d:za,class:w.a.path2}),Ra&&Object(O.h)("path",{d:Ra,class:w.a.pathD}),Ca&&Object(O.h)("path",{d:Ca,class:w.a.pathB}),Ba&&Object(O.h)("path",{d:Ba,class:w.a.pathC}),Sa&&Object(O.h)("path",{d:Sa,class:w.a.path}),La&&Object(O.h)("path",{d:La,class:w.a.pathOriginal}),q&&Object(O.h)("line",{x1:"10",y1:"5",x2:"30",y2:"5",class:w.a.path}),q&&Object(O.h)("text",{x:"35",y:"10","font-size":"10px",class:w.a.pathText},q),G&&Object(O.h)("line",{x1:"10",y1:"15",x2:"30",y2:"15",class:w.a.pathB}),G&&Object(O.h)("text",{x:"35",y:"20","font-size":"10px",class:w.a.pathText},G),K&&Object(O.h)("line",{x1:"10",y1:"25",x2:"30",y2:"25",class:w.a.pathC}),K&&Object(O.h)("text",{x:"35",y:"30","font-size":"10px",class:w.a.pathText},K),Q&&Object(O.h)("line",{x1:"10",y1:"35",x2:"30",y2:"35",class:w.a.pathD}),Q&&Object(O.h)("text",{x:"35",y:"40","font-size":"10px",class:w.a.pathText},Q),U&&Object(O.h)("line",{x1:s-150,y1:"5",x2:s-130,y2:"5",class:w.a.path2}),U&&Object(O.h)("text",{x:s-125,y:"10","font-size":"10px",class:w.a.pathText},U),Z&&Object(O.h)("line",{x1:s-150,y1:"15",x2:s-130,y2:"15",class:w.a.path2B}),Z&&Object(O.h)("text",{x:s-125,y:"20","font-size":"10px",class:w.a.pathText},Z),$&&Object(O.h)("line",{x1:s-150,y1:"25",x2:s-130,y2:"25",class:w.a.path2C}),$&&Object(O.h)("text",{x:s-125,y:"30","font-size":"10px",class:w.a.pathText},$),tt&&Object(O.h)("line",{x1:s-150,y1:"35",x2:s-130,y2:"35",class:w.a.path2C}),tt&&Object(O.h)("text",{x:s-125,y:"30","font-size":"10px",class:w.a.pathText},tt),at&&Object(O.h)("line",{x1:s-150,y1:"25",x2:s-130,y2:"25",class:w.a.path3}),at&&Object(O.h)("text",{x:s-125,y:"30","font-size":"10px",class:w.a.pathText},at),vt&&Object(O.h)("line",{x1:vt,y1:h,x2:vt,y2:"0",class:w.a.marker}),da&&da.length>0&&Object(O.h)("line",{x1:da[0],y1:h,x2:da[0],y2:"0",class:w.a.mouseLine}),da&&da.length>0&&Va&&M.a.isNumber(this.getMouseData(Va,da[0],"yVal"))&&Object(O.h)("line",{x1:0,y1:this.getMouseData(Va,da[0],"ySmooth"),x2:this.getMouseData(Va,da[0],"x",{maxX:ja}),y2:this.getMouseData(Va,da[0],"ySmooth"),class:w.a.mouseLine+" "+w.a.path}),da&&da.length>0&&Pa&&M.a.isNumber(this.getMouseData(Pa,da[0],"yVal"))&&Object(O.h)("line",{x1:0,y1:this.getMouseData(Pa,da[0],"ySmooth"),x2:this.getMouseData(Pa,da[0],"x",{maxX:ja}),y2:this.getMouseData(Pa,da[0],"ySmooth"),class:w.a.mouseLine+" "+w.a.pathB}),da&&da.length>0&&Wa&&M.a.isNumber(this.getMouseData(Wa,da[0],"yVal"))&&Object(O.h)("line",{x1:0,y1:this.getMouseData(Wa,da[0],"ySmooth"),x2:this.getMouseData(Wa,da[0],"x",{maxX:ja}),y2:this.getMouseData(Wa,da[0],"ySmooth"),class:w.a.mouseLine+" "+w.a.pathD}),da&&da.length>0&&Fa&&M.a.isNumber(this.getMouseData(Fa,da[0],"yVal"))&&Object(O.h)("line",{x1:0,y1:this.getMouseData(Fa,da[0],"ySmooth"),x2:this.getMouseData(Fa,da[0],"x",{maxX:ja}),y2:this.getMouseData(Fa,da[0],"ySmooth"),class:w.a.mouseLine+" "+w.a.pathC}),da&&da.length>0&&Aa&&M.a.isNumber(this.getMouseData(Aa,da[0],"yVal"))&&Object(O.h)("line",{x1:this.getMouseData(Aa,da[0],"x",{maxX:ja}),y1:this.getMouseData(Aa,da[0],"ySmooth"),x2:s,y2:this.getMouseData(Aa,da[0],"ySmooth"),class:w.a.mouseLine+" "+w.a.path2}),da&&da.length>0&&Ka&&M.a.isNumber(this.getMouseData(Ka,da[0],"yVal"))&&Object(O.h)("line",{x1:this.getMouseData(Ka,da[0],"x",{maxX:ja}),y1:this.getMouseData(Ka,da[0],"ySmooth"),x2:s,y2:this.getMouseData(Ka,da[0],"ySmooth"),class:w.a.mouseLine+" "+w.a.path2B}),da&&da.length>0&&Za&&M.a.isNumber(this.getMouseData(Za,da[0],"yVal"))&&Object(O.h)("line",{x1:this.getMouseData(Za,da[0],"x",{maxX:ja}),y1:this.getMouseData(Za,da[0],"ySmooth"),x2:s,y2:this.getMouseData(Za,da[0],"ySmooth"),class:w.a.mouseLine+" "+w.a.path2D}),da&&da.length>0&&ae&&M.a.isNumber(this.getMouseData(ae,da[0],"yVal"))&&Object(O.h)("line",{x1:this.getMouseData(ae,da[0],"x",{maxX:ja}),y1:this.getMouseData(ae,da[0],"ySmooth"),x2:s,y2:this.getMouseData(ae,da[0],"ySmooth"),class:w.a.mouseLine+" "+w.a.path2C}),da&&da.length>0&&Va&&M.a.isNumber(this.getMouseData(Va,da[0],"yVal"))&&Object(O.h)("circle",{cx:this.getMouseData(Va,da[0],"x",{maxX:ja}),cy:this.getMouseData(Va,da[0],"ySmooth"),r:"5",class:w.a.path}),da&&da.length>0&&Pa&&M.a.isNumber(this.getMouseData(Pa,da[0],"yVal"))&&Object(O.h)("circle",{cx:this.getMouseData(Pa,da[0],"x",{maxX:ja}),cy:this.getMouseData(Pa,da[0],"ySmooth"),r:"5",class:w.a.pathB}),da&&da.length>0&&Wa&&M.a.isNumber(this.getMouseData(Wa,da[0],"yVal"))&&Object(O.h)("circle",{cx:this.getMouseData(Wa,da[0],"x",{maxX:ja}),cy:this.getMouseData(Wa,da[0],"ySmooth"),r:"5",class:w.a.pathC}),da&&da.length>0&&Fa&&M.a.isNumber(this.getMouseData(Fa,da[0],"yVal"))&&Object(O.h)("circle",{cx:this.getMouseData(Fa,da[0],"x",{maxX:ja}),cy:this.getMouseData(Fa,da[0],"ySmooth"),r:"5",class:w.a.pathD}),da&&da.length>0&&Aa&&M.a.isNumber(this.getMouseData(Aa,da[0],"yVal"))&&Object(O.h)("circle",{cx:this.getMouseData(Aa,da[0],"x",{maxX:ja}),cy:this.getMouseData(Aa,da[0],"ySmooth"),r:"5",class:w.a.path2}),da&&da.length>0&&Ka&&M.a.isNumber(this.getMouseData(Ka,da[0],"yVal"))&&Object(O.h)("circle",{cx:this.getMouseData(Ka,da[0],"x",{maxX:ja}),cy:this.getMouseData(Ka,da[0],"ySmooth"),r:"5",class:w.a.path2B}),da&&da.length>0&&Za&&M.a.isNumber(this.getMouseData(Za,da[0],"yVal"))&&Object(O.h)("circle",{cx:this.getMouseData(Za,da[0],"x",{maxX:ja}),cy:this.getMouseData(Za,da[0],"ySmooth"),r:"5",class:w.a.path2C}),da&&da.length>0&&ae&&M.a.isNumber(this.getMouseData(ae,da[0],"yVal"))&&Object(O.h)("circle",{cx:this.getMouseData(ae,da[0],"x",{maxX:ja}),cy:this.getMouseData(ae,da[0],"ySmooth"),r:"5",class:w.a.path2D}),da&&da.length>0&&Object(O.h)("rect",{x:this.getMouseData(Va,da[0],"x",{autoLimit:!0,padding:10,maxX:ja}),y:this.getMouseData(Va,da[0],"y",{autoLimit:!0,padding:10}),width:"160",height:"80",rx:"5",ry:"5",class:w.a.mouseHoverBox}),da&&da.length>0&&Object(O.h)("text",{x:this.getMouseData(Va,da[0],"x",{autoLimit:!0,padding:0,maxX:ja}),y:this.getMouseData(Va,da[0],"y",{autoLimit:!0,padding:0}),"font-size":"11px",class:ma?w.a.mouseHoverDarkmode:w.a.mouseHover},Sa&&Va&&M.a.isNumber(this.getMouseData(Va,da[0],"yVal"))&&Object(O.h)("tspan",{x:this.getMouseData(Va,da[0],"x",{autoLimit:!0,padding:0,maxX:ja}),dy:"1.2em"},Object(O.h)("tspan",{class:w.a.path},"--")," ",q,": ",Gt(this.getMouseData(Va,da[0],"yVal"))," ",Ot),Ca&&Pa&&M.a.isNumber(this.getMouseData(Pa,da[0],"yVal"))&&Object(O.h)("tspan",{x:this.getMouseData(Pa,da[0],"x",{autoLimit:!0,padding:0,maxX:ja}),dy:"1.2em"},Object(O.h)("tspan",{class:w.a.pathB},"--")," ",G,": ",Qt(this.getMouseData(Pa,da[0],"yVal"))," ",Mt||Ot),Ba&&Wa&&M.a.isNumber(this.getMouseData(Wa,da[0],"yVal"))&&Object(O.h)("tspan",{x:this.getMouseData(Wa,da[0],"x",{autoLimit:!0,padding:0,maxX:ja}),dy:"1.2em"},Object(O.h)("tspan",{class:w.a.pathC},"--")," ",K,": ",Zt(this.getMouseData(Wa,da[0],"yVal"))," ",jt||Ot),Ra&&Fa&&M.a.isNumber(this.getMouseData(Fa,da[0],"yVal"))&&Object(O.h)("tspan",{x:this.getMouseData(Fa,da[0],"x",{autoLimit:!0,padding:0,maxX:ja}),dy:"1.2em"},Object(O.h)("tspan",{class:w.a.pathD},"--")," ",Q,": ",ta(this.getMouseData(Fa,da[0],"yVal"))," ",Dt||Ot),za&&Aa&&M.a.isNumber(this.getMouseData(Aa,da[0],"yVal"))&&Object(O.h)("tspan",{x:this.getMouseData(Aa,da[0],"x",{autoLimit:!0,padding:0,maxX:ja}),dy:"1.2em"},Object(O.h)("tspan",{class:w.a.path2},"--")," ",U,": ",ea(this.getMouseData(Aa,da[0],"yVal"))," ",wt),Ga&&Ka&&M.a.isNumber(this.getMouseData(Ka,da[0],"yVal"))&&Object(O.h)("tspan",{x:this.getMouseData(Ka,da[0],"x",{autoLimit:!0,padding:0,maxX:ja}),dy:"1.2em"},Object(O.h)("tspan",{class:w.a.path2B},"--")," ",Z,": ",oa(this.getMouseData(Ka,da[0],"yVal"))," ",kt||wt),Ua&&Za&&M.a.isNumber(this.getMouseData(Za,da[0],"yVal"))&&Object(O.h)("tspan",{x:this.getMouseData(Za,da[0],"x",{autoLimit:!0,padding:0,maxX:ja}),dy:"1.2em"},Object(O.h)("tspan",{class:w.a.path2C},"--")," ",$,": ",na(this.getMouseData(Za,da[0],"yVal"))," ",_t||wt),te&&ae&&M.a.isNumber(this.getMouseData(ae,da[0],"yVal"))&&Object(O.h)("tspan",{x:this.getMouseData(ae,da[0],"x",{autoLimit:!0,padding:0,maxX:ja}),dy:"1.2em"},Object(O.h)("tspan",{class:w.a.path2D},"--")," ",tt,": ",ca(this.getMouseData(ae,da[0],"yVal"))," ",St||wt))),j&&Object(O.h)("div",{class:w.a["x-axis"],style:{left:pa+"px",width:"calc(100% - "+pa+"px)"}},se.map((function(t){return Object(O.h)("div",{"data-value":c(t)})}))),D&&Object(O.h)("div",{class:w.a["y-axis"],style:{bottom:ga+"px"}},oe.map((function(t){return Object(O.h)("div",{"data-value":t})}))),N&&Object(O.h)("div",{class:w.a["y-axis2"],style:{bottom:ga+"px"}},ie.map((function(t){return Object(O.h)("div",{"data-value":t})}))))},a}(O.Component))||v;a.a=_}}]);
//# sourceMappingURL=route-home.chunk.a5083.js.map