(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+1Jk":function(e,t,r){"use strict";function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t);var s,i=r("hosL"),c=r("Utv1"),a=r("/eY4"),l=r("OhSV"),h=r("ZOvn"),u=r.n(h),d=r("JWe/"),b=r("WAWY"),m=r("7g1v"),f=r("XPU5"),p=r("CE5K"),g=r("0SNj"),O=u.a.marginTop(!0),j=u.a.marginBottom(),v=u.a.subMenuMarginTop(),y={isLoading:!1},k=Object(a.a)(s=function(e){function t(t){var r;return(r=e.call(this,t)||this).loadWorkoutPlans=function(e){return new Promise((function(t,o){function n(){return r.setState({isLoading:!1}),t()}var s,i,a,l,h,u,d,b,m;return void 0===e&&(e=r.props),r.setState({isLoading:!0}),s=e.year,i=(new Date).getMonth()+1,a=c.a.getYear(),l=parseInt(s||(i<6?a-1:a),10),b=void 0===(d=(h=e.stores).workoutStore.currentTeam)?h.userStore.team.id:d,(u=h.workoutPlanStore).updateItem("workoutPlans",[]),u.updateItem("workoutPlan",{}),u.resetGraphPlanWeekDistanceCurrent(),b?Promise.resolve(u.load({query:{seasonYear:l,seasonMonth:6}})).then(function(){try{if((m=u.workoutPlans[0]||{}).id)return Promise.resolve(u.load(m.id)).then(function(){try{return u.prepareWeekGraphs({year:s}),e.call(this)}catch(e){return o(e)}}.bind(this),o);function e(){return n.call(this)}return e.call(this)}catch(e){return o(e)}}.bind(this),o):n.call(this)}))},r.loadDogs=function(){return new Promise((function(e,t){var o;return r.setState({isLoading:!0}),o=r.props.stores.dogStore,Promise.resolve(o.load({query:{team:o.currentTeam},addData:["workoutSummary"]})).then((function(){try{return r.setState({isLoading:!1}),e()}catch(e){return t(e)}}),t)}))},r.state=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},y),r}var r,s;s=e,(r=t).prototype=Object.create(s.prototype),r.prototype.constructor=r,r.__proto__=s;var a=t.prototype;return a.loadAll=function(){return new Promise(function(e,t){var r,o,n;return o=(r=this.props.stores).appState,n=r.userStore,this.setState({isLoading:!0}),Promise.resolve(o.getFingerprint()).then(function(){try{return Promise.resolve(n.getInfo()).then(function(){try{return Promise.resolve(n.getNotifications()).then(function(){try{return Promise.resolve(this.loadWorkoutSummary()).then(function(){try{return Promise.resolve(this.loadDogs()).then(function(){try{return Promise.resolve(this.loadWorkoutPlans()).then(function(){try{return Promise.resolve(this.loadTeams()).then(function(){try{return this.setState({isLoading:!1}),e()}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t)}.bind(this))},a.loadTeams=function(e){return new Promise(function(t,r){return void 0===e&&(e=this.props),Promise.resolve(e.stores.teamStore.load({query:{},addData:["workoutSummary"]})).then((function(){try{return t()}catch(e){return r(e)}}),r)}.bind(this))},a.loadFeed=function(){return new Promise(function(e,t){return Promise.resolve(this.props.stores.userStore.getFeed({})).then((function(){try{return e()}catch(e){return t(e)}}),t)}.bind(this))},a.loadWorkoutSummary=function(){return new Promise(function(e,t){return Promise.resolve(this.props.stores.userStore.getWorkoutSummary({})).then((function(){try{return e()}catch(e){return t(e)}}),t)}.bind(this))},a.componentDidMount=function(){this.loadAll()},a.render=function(){var e=this,t=this.state.isLoading,r=this.props.stores,o=r.userStore,n=r.dogStore,s=r.workoutPlanStore,c=r.teamStore,a=s.workoutPlan,h=s.workoutPlans,u=r.appState.darkmode,y=o.workouts,k=o.workoutSummary,w=o.teams,P=o.tracks,S=o.isAdmin,D=n.dogs,W=n.findDogsByStatus([2,4,8,9]),L=n.findDogsWithNeeds(),x=w.length,T=D.length,A=P.length,M=c.findWorkoutSummaryTotal(2019)||{},F=c.findWorkoutSummaryTotal(2020)||{};return Object(i.h)("div",{class:"container-fluid",style:"margin-bottom: "+j+"; margin-top: "+O+";"},Object(i.h)("div",{class:"row mb-4 fixed-top",style:"margin-top: "+v+"; background-color: "+(u?"#191d21":"#f8f9fa")+";"},S&&Object(i.h)("div",{class:"col text-center"},Object(i.h)("a",{href:"/admin",class:"text-secondary stretched-link"},Object(i.h)("i",{class:"fas fa-user-shield"})," ",Object(i.h)(l.c,{id:"home.admin"},"Admin"))),Object(i.h)("div",{class:"col text-center border-bottom border-primary"},Object(i.h)("a",{href:"/",class:"text-primary stretched-link"},Object(i.h)("i",{class:"fas fa-chart-line"})," ",Object(i.h)(l.c,{id:"home.dashboard"},"Dashboard"))),Object(i.h)("div",{class:"col text-center"},Object(i.h)("a",{href:"/feed",class:"text-secondary stretched-link"},Object(i.h)("i",{class:"fas fa-rss"})," ",Object(i.h)(l.c,{id:"home.feed"},"Feed"))),Object(i.h)("div",{class:"col text-center"},Object(i.h)("a",{href:"/todo",class:"text-secondary stretched-link"},Object(i.h)("i",{class:"fas fa-list"})," ",Object(i.h)(l.c,{id:"home.todo"},"Todo")))),Object(i.h)("div",{class:"row"},Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3"},!t&&k&&0===k.length&&Object(i.h)("div",{class:"mb-5 py-3 border-top border-bottom"},Object(i.h)("div",{class:"text-center"},Object(i.h)("div",{class:"display-4"},Object(i.h)("i",{class:"fas fa-paw"})),Object(i.h)("h5",null,Object(i.h)(l.c,{id:"home.welcome-title"},"Velkommen til The Musher.")),Object(i.h)("p",null,Object(i.h)(l.c,{id:"home.welcome-body-1"},"The Musher er en app som er kontinuerlig under utvikling. Alle ideer/innspill/kommentarer mottas med stor takk på Facebooksiden vår 😃")),Object(i.h)("p",null,Object(i.h)(l.c,{id:"home.welcome-body-2"},"Fokus til appen er enkel registrering av hunder, team, treninger og hendelser rundt hundene. Når man har mange hunder så er det ofte vanskelig å holde styr på løpetid, vaksiner, treninger, skader, vetrinærbesøk, chiplister, osv.")),Object(i.h)("p",null,Object(i.h)(l.c,{id:"home.welcome-body-3"},"Alle data lagres sentralt i skyen hos AWS (Amazon Web Services) og det vil derfor være mulig å bruke appen fra flere telefoner og datamaskiner samtidig. Dette kan være fint dersom det er flere som trener og følger opp hundene."))),Object(i.h)("h5",null,Object(i.h)(l.c,{id:"home.howto-title"},"Slik kommer du i gang:")),Object(i.h)("ol",null,x<1&&Object(i.h)("li",null,Object(i.h)("a",{class:"btn btn-info mt-3",href:"/teams/"},Object(i.h)(l.c,{id:"home.howto-step-1"},"Legg inn teamene dine."))),T<1&&Object(i.h)("li",null,Object(i.h)("a",{class:"btn btn-info mt-3",href:"/dogs/"},Object(i.h)(l.c,{id:"home.howto-step-2"},"Legg inn hundene dine."))),A<1&&Object(i.h)("li",null,Object(i.h)("a",{class:"btn btn-info mt-3",href:"/tracks/"},Object(i.h)(l.c,{id:"home.howto-step-3"},"Legg inn rundene dine."))),Object(i.h)("li",null,Object(i.h)("a",{class:"btn btn-info mt-3",href:"/workouts/"},Object(i.h)(l.c,{id:"home.howto-step-4"},"Begynn å registrere treningene."))))),Object(i.h)(b.a,{stores:this.props.stores,isLoading:t,key:"graph-"+a.id+"-"+h.length}),Object(i.h)(g.a,{stores:this.props.stores,key:"totals-"+F.distancekm,currentSeason:F,prevSeason:M}))),Object(i.h)(p.a,null),Object(i.h)("div",{class:"row"},W&&W.length>0&&Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 mt-4"},Object(i.h)("h5",null,Object(i.h)(l.c,{id:"home.dogs-follow-up"},"Hunder som trenger oppfølging")),Object(i.h)("div",{class:"row"},W&&W.map((function(t){return Object(i.h)(m.a,{stores:e.props.stores,dog:t})})))),L&&L.length>0&&Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 mt-4"},Object(i.h)("h5",null,Object(i.h)(l.c,{id:"home.dogs-special-needs"},"Hunder med spesielle behov")),Object(i.h)("div",{class:"row"},L&&L.map((function(t){return Object(i.h)(m.a,{stores:e.props.stores,dog:t})}))))),Object(i.h)(f.a,{stores:this.props.stores}),Object(i.h)("div",{class:"row"},y&&y.length>0&&Object(i.h)("div",{class:"col-12 mb-4"},Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0 mt-4"},Object(i.h)("h5",null,Object(i.h)(l.c,{id:"home.last-workouts",fields:{total:y.length}},"Siste treningsturer - ",y.length," stk"))),y&&y.map((function(t){return Object(i.h)(d.a,{stores:e.props.stores,workout:t})})))))},t}(i.Component))||s;t.default=k}}]);
//# sourceMappingURL=route-home.chunk.eed56.js.map