(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+1Jk":function(e,t,r){"use strict";r.r(t),function(e){function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o,l=r("hosL"),i=r("Utv1"),a=r("/eY4"),c=r("JWe/"),h=(r("3pQw"),r("xDik"),r("bbv7")),u=(r("2X7c"),r("7g1v")),b=["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des"],d={isLoading:!1},m=Object(a.a)(o=function(t){function r(e){var r;return(r=t.call(this,e)||this).loadDogs=function(){return new Promise((function(e,t){var n;return r.setState({isLoading:!0}),n=r.props.stores.dogStore,Promise.resolve(n.load({query:{team:n.currentTeam},addData:["workoutSummary"]})).then((function(){try{return r.setState({isLoading:!1}),e()}catch(e){return t(e)}}),t)}))},r.state=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},d),r}var o,a;a=t,(o=r).prototype=Object.create(a.prototype),o.prototype.constructor=o,o.__proto__=a;var m=r.prototype;return m.loadAll=function(){return new Promise(function(e,t){var r,n,s;return n=(r=this.props.stores).appState,s=r.userStore,this.setState({isLoading:!0}),Promise.resolve(n.getFingerprint()).then(function(){try{return Promise.resolve(s.getInfo()).then(function(){try{return Promise.resolve(this.loadWorkoutSummary()).then(function(){try{return Promise.resolve(this.loadDogs()).then(function(){try{return this.setState({isLoading:!1}),e()}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t)}.bind(this))},m.loadFeed=function(){return new Promise(function(e,t){return Promise.resolve(this.props.stores.userStore.getFeed()).then((function(){try{return e()}catch(e){return t(e)}}),t)}.bind(this))},m.loadWorkoutSummary=function(){return new Promise(function(e,t){return Promise.resolve(this.props.stores.userStore.getWorkoutSummary({})).then((function(){try{return e()}catch(e){return t(e)}}),t)}.bind(this))},m.componentDidMount=function(){this.loadAll()},m.render=function(){var t=this,r=this.state.isLoading,n=this.props.stores,s=n.userStore,o=n.dogStore,a=n.appState.darkmode,d=s.workouts,m=s.workoutSummary,f=s.graphWorkoutSummaryWeekDistanceCurrent,g=s.graphWorkoutSummaryWeekDistancePrev,p=s.graphWorkoutSummaryWeekElevationCurrent,O=s.graphWorkoutSummaryWeekElevationPrev,j=s.teams,v=s.tracks,k=o.dogs,y=o.findDogsByStatus([2,4,8,9]),w=o.findDogsWithNeeds(),S=j.length,x=k.length,P=v.length;return Object(l.h)("div",{class:"container-fluid",style:"margin-bottom: 100px; margin-top: 90px;"},Object(l.h)("div",{class:"row mb-4 fixed-top",style:"margin-top: 58px; background-color: "+(a?"#191d21":"#f8f9fa")+";"},Object(l.h)("div",{class:"col text-center border-bottom border-primary"},Object(l.h)("a",{href:"/",class:"text-primary stretched-link"},Object(l.h)("i",{class:"fas fa-chart-line"})," Dashboard")),Object(l.h)("div",{class:"col text-center"},Object(l.h)("a",{href:"/feed",class:"text-secondary stretched-link"},Object(l.h)("i",{class:"fas fa-rss"})," Feed")),Object(l.h)("div",{class:"col text-center"},Object(l.h)("a",{href:"/todo",class:"text-secondary stretched-link"},Object(l.h)("i",{class:"fas fa-list"})," Todo"))),Object(l.h)("div",{class:"row"},Object(l.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3"},!r&&m&&0===m.length&&Object(l.h)("div",{class:"mb-5 py-3 border-top border-bottom"},Object(l.h)("div",{class:"text-center"},Object(l.h)("div",{class:"display-4"},Object(l.h)("i",{class:"fas fa-paw"})),Object(l.h)("h5",null,"Velkommen til The Musher."),Object(l.h)("p",null,"The Musher er en app som er kontinuerlig under utvikling. Alle ideer/innspill/kommentarer mottas med stor takk på Facebooksiden vår 😃"),Object(l.h)("p",null,"Fokus til appen er enkel registrering av hunder, team, treninger og hendelser rundt hundene. Når man har mange hunder så er det ofte vanskelig å holde styr på løpetid, vaksiner, treninger, skader, vetrinærbesøk, chiplister, osv."),Object(l.h)("p",null,"Alle data lagres sentralt i skyen hos AWS (Amazon Web Services) og det vil derfor være mulig å bruke appen fra flere telefoner og datamaskiner samtidig. Dette kan være fint dersom det er flere som trener og følger opp hundene.")),Object(l.h)("h5",null,"Slik kommer du i gang:"),Object(l.h)("ol",null,S<1&&Object(l.h)("li",null,Object(l.h)("a",{class:"btn btn-info mt-3",href:"/teams/"},"Legg inn teamene dine.")),x<1&&Object(l.h)("li",null,Object(l.h)("a",{class:"btn btn-info mt-3",href:"/dogs/"},"Legg inn hundene dine.")),P<1&&Object(l.h)("li",null,Object(l.h)("a",{class:"btn btn-info mt-3",href:"/tracks/"},"Legg inn rundene dine.")),Object(l.h)("li",null,Object(l.h)("a",{class:"btn btn-info mt-3",href:"/workouts/"},"Begynn å registrere treningene.")))),m&&m.length>0&&Object(l.h)(e,null,Object(l.h)("h5",null,"Trenings statistikk"),Object(l.h)("div",{class:"w-100 mt-3 mb-4"},Object(l.h)("small",{class:"mb-4"},Object(l.h)("small",null,Object(l.h)("table",{class:"table table-sm font-weigth-lighter border-bottom"},Object(l.h)("thead",null,Object(l.h)("tr",null,Object(l.h)("th",{style:"padding: .2rem;"},"Mnd"),i.a.range(1,12).map((function(e){return Object(l.h)("th",{class:"text-right",style:"padding: .2rem;"},b[e-1])})))),Object(l.h)("tbody",null,Object(l.h)("tr",null,Object(l.h)("th",{scope:"row",style:"padding: .2rem;"},"2019"),i.a.range(1,12).map((function(t){return Object(l.h)(e,null,Object(l.h)("td",{class:"text-right",style:"padding: .2rem;"},Object(l.h)("nobr",null,s.findWorkoutSummaryMonth(2019,t)),Object(l.h)("br",null),Object(l.h)("nobr",null,s.findWorkoutSummaryMonth(2019,t,"elevation")),Object(l.h)("br",null)))})),Object(l.h)("td",{class:"text-muted",style:"padding: .2rem;"},Object(l.h)("nobr",null,Object(l.h)("i",{class:"fas fa-road"})," km"),Object(l.h)("br",null),Object(l.h)("nobr",null,Object(l.h)("i",{class:"fas fa-mountain"})," m"),Object(l.h)("br",null))),Object(l.h)("tr",null,Object(l.h)("th",{scope:"row",style:"padding: .2rem;"},"2020"),i.a.range(1,12).map((function(t){return Object(l.h)(e,null,Object(l.h)("td",{class:"text-right",style:"padding: .2rem;"},Object(l.h)("nobr",null,s.findWorkoutSummaryMonth(2020,t)),Object(l.h)("br",null),Object(l.h)("nobr",null,s.findWorkoutSummaryMonth(2020,t,"elevation")),Object(l.h)("br",null)))})),Object(l.h)("td",{class:"text-muted",style:"padding: .2rem;"},Object(l.h)("nobr",null,Object(l.h)("i",{class:"fas fa-road"})," km"),Object(l.h)("br",null),Object(l.h)("nobr",null,Object(l.h)("i",{class:"fas fa-mountain"})," m"),Object(l.h)("br",null))))))),Object(l.h)(h.a,{stores:this.props.stores,width:500,height:150,showXTicks:1,xTicksVal:function(e){return"uke "+e},paddingTop:30,lineFromXzero:!0,lineFromXmax:!0,dataLeft:[f,g],legendLeft:["2020 Distanse","2019 Distanse"],showYTicksLeft:1,yTicksLeftPostfix:"km",unitLeft:["km","km"],avgWindowLeft:[0,0],smoothLeft:[1,1],dataRight:[p,O],legendRight:["2020 Høydemeter","2019 Høydemeter"],showYTicksRight:1,yTicksRightPostfix:"m",unitRight:["m","m"],avgWindowRight:[0,0],smoothRight:[1,1]}))),!r&&m&&m.length<3&&Object(l.h)("div",{class:"mb-5 py-3 border-top border-bottom"},Object(l.h)("div",{class:"text-left",style:"line-height: 1.0em;"},Object(l.h)("div",{class:"display-4 float-left text-warning mr-3"},Object(l.h)("i",{class:"fas fa-paw"})),Object(l.h)("small",null,"Foreløpig er det litt lite data for å kunne vise noen fine grafer. Etterhvert som du legger inn flere treninger så vil dette bli en fin tabell og graf som viser progresjonen din."))))),Object(l.h)("div",{class:"row"},y&&y.length>0&&Object(l.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 mt-4"},Object(l.h)("h5",null,"Hunder som trenger oppfølging"),Object(l.h)("div",{class:"row"},y&&y.map((function(e){return Object(l.h)(u.a,{stores:t.props.stores,dog:e})})))),w&&w.length>0&&Object(l.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 mt-4"},Object(l.h)("h5",null,"Hunder med spesielle behov"),Object(l.h)("div",{class:"row"},w&&w.map((function(e){return Object(l.h)(u.a,{stores:t.props.stores,dog:e})}))))),Object(l.h)("div",{class:"row"},d&&d.length>0&&Object(l.h)("div",{class:"col-12 mb-4"},Object(l.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0 mt-4"},Object(l.h)("h5",null,"Siste treningsturer - ",d.length," stk")),d&&d.map((function(e){return Object(l.h)(c.a,{stores:t.props.stores,workout:e})})))))},r}(l.Component))||o;t.default=m}.call(this,r("hosL").Fragment)}}]);
//# sourceMappingURL=route-home.chunk.e2b01.js.map