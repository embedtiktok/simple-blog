(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{RUc2:function(e,t,s){"use strict";function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function c(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}s.r(t);var n,l,i=s("hosL"),a=s("Utv1"),d=s("/eY4"),h=(s("cneo"),s("OhSV")),b=s("ZOvn"),f=s.n(b),u=(s("KDoM"),s("2X7c")),g=s("7g1v"),p=s("mPUg"),O=f.a.marginTop(!0),j=f.a.marginBottom(),m=f.a.subMenuMarginTop(),v={isLoading:!1},y=Object(d.a)(n=function(e){function t(){for(var t,s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).toggleTeam=function(e){var s=t.props.callback,o=t.props.stores.dogStore;o.setCurrentTeam(e===o.currentTeam?void 0:e),a.a.isDefined(s)&&s()},t}return c(t,e),t.prototype.render=function(){var e=this,t=this.props.stores,s=t.userStore.teams,o=t.dogStore.currentTeam;return Object(i.h)("div",{class:"container-fluid px-0"},Object(i.h)("div",{class:"row"},s&&s.map((function(t){return Object(i.h)("div",{class:"col-6 mb-2"},Object(i.h)("div",{class:"border rounded rounded-pill px-3 py-2 "+(o===t.id?"bg-success":""),style:"line-height: 0.9em; cursor: pointer; pointer-events: inherit;",onClick:function(){return e.toggleTeam(t.id)}},Object(i.h)("small",null,Object(i.h)("i",{class:"fas fa-users mr-2"}),t.name)))}))))},t}(i.Component))||n,w=Object(d.a)(l=function(e){function t(t){var s;return(s=e.call(this,t)||this).loadDogs=function(){return new Promise((function(e,t){var o,r,c;return s.setState({isLoading:!0}),r=(o=s.props.stores).dogStore,c=o.userStore,Promise.resolve(r.load({query:{team:r.currentTeam},addData:["workoutSummary","vaccineStatuses"]})).then((function(){try{return Promise.resolve(r.getDogsWithTraining({daysBack:1})).then((function(){try{return Promise.resolve(c.getNotifications()).then((function(){try{return s.setState({isLoading:!1}),e()}catch(e){return t(e)}}),t)}catch(e){return t(e)}}),t)}catch(e){return t(e)}}),t)}))},s.setHistoryType=function(e){s.setState({historyType:e})},s.state=function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},v),s}c(t,e);var s=t.prototype;return s.componentDidMount=function(){this.loadDogs()},s.render=function(){var e=this,t=this.state,s=t.isLoading,o=t.historyType,r=this.props.stores,c=r.dogStore,n=r.appState,l=r.userStore,a=l.user.language,d=f.a.getHistoryMap(void 0===a?"no":a),b=this.props,v=b.month,w=b.year,x=n.darkmode,k=c.dogs,S=c.workoutSummaryCurrent,D=c.findDogsByStatus([2,4,8,9]),T=c.findDogsWithNeeds(),P=o?l.findDogsFromHistory(o):[],L=k.filter(o?function(e){return P.indexOf(e.id)>-1}:function(){return!0});return Object(i.h)("div",{class:"container-fluid",style:"margin-bottom: "+j+"; margin-top: "+O+";"},Object(i.h)("div",{class:"row mb-4 fixed-top",style:"margin-top: "+m+"; background-color: "+(x?"#191d21":"#f8f9fa")+";"},Object(i.h)("div",{class:"col text-center border-bottom border-primary"},Object(i.h)("nobr",null,Object(i.h)("a",{href:"/dogs",class:"text-primary stretched-link"},Object(i.h)("i",{class:"fas fa-chart-line"})," ",Object(i.h)(h.c,{id:"dogs.dashboard"},"Oversikt")))),Object(i.h)("div",{class:"col text-center"},Object(i.h)("nobr",null,Object(i.h)("a",{href:"/dogs/list",class:"text-secondary stretched-link"},Object(i.h)("i",{class:"fas fa-list"})," ",Object(i.h)(h.c,{id:"dogs.list"},"Liste")))),Object(i.h)("div",{class:"col text-center"},Object(i.h)("nobr",null,Object(i.h)("a",{href:"/dogs/feed",class:"text-secondary stretched-link"},Object(i.h)("i",{class:"fas fa-rss"})," ",Object(i.h)(h.c,{id:"dogs.feed"},"Feed")))),Object(i.h)("div",{class:"col text-center"},Object(i.h)("nobr",null,Object(i.h)("a",{href:"/dogs/todo",class:"text-secondary stretched-link"},Object(i.h)("i",{class:"fas fa-calendar-check"})," ",Object(i.h)(h.c,{id:"dogs.todo"},"Todo"))))),Object(i.h)("div",{class:"row"},Object(i.h)("div",{class:"col-12"},Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0 mb-2 border-bottom"},Object(i.h)(y,{stores:this.props.stores,callback:this.loadDogs})),Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0 pb-2 clearfix"},Object(i.h)("span",{class:"float-right"},Object(i.h)("a",{class:"btn btn-sm btn-primary ml-2",href:"/dogs/edit/new"},Object(i.h)("i",{class:"fas fa-plus"})," ",Object(i.h)(h.c,{id:"dogs.add-dogs"},"Legg til hunder"))),Object(i.h)(u.a,{stores:this.props.stores,dog:{},callback:this.loadDogs})),!s&&k&&0===k.length&&Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 text-muted"},Object(i.h)("div",{class:"text-center mb-5"},Object(i.h)("div",{class:"display-1"},Object(i.h)("i",{class:"fas fa-dog"})),Object(i.h)("h5",null,Object(i.h)(h.c,{id:"dogs.no-dogs-registered"},"Ingen hunder er registrert ennå."))),Object(i.h)(h.c,{id:"dogs.howto-add-1"},"Slik kommer du i gang:"),Object(i.h)("ol",null,Object(i.h)("li",null,Object(i.h)(h.c,{id:"dogs.howto-add-2"},'Trykk på knappen "Legg til hunder" rett nedenfor.')))),D&&D.length>0&&Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0 mb-4 clearfix"},Object(i.h)("h5",null,Object(i.h)(h.c,{id:"dogs.dog-with-follow-up"},"Hunder som trenger oppfølging")),Object(i.h)("div",{class:"row"},D&&D.map((function(t){return Object(i.h)(g.a,{stores:e.props.stores,dog:t})})),!D||0===D.length&&Object(i.h)("div",{class:"col-12 text-center text-muted"},Object(i.h)("h3",null,Object(i.h)("i",{class:"fas fa-thumbs-up"})),Object(i.h)(h.c,{id:"dogs.no-dogs-with-follow-up"},"Ingen hunder som trenger ekstra oppfølging.")))),T&&T.length>0&&Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0 mb-4 clearfix"},Object(i.h)("h5",null,Object(i.h)(h.c,{id:"dogs.dog-with-special-needs"},"Hunder med spesielle behov")),Object(i.h)("div",{class:"row"},T&&T.map((function(t){return Object(i.h)(g.a,{stores:e.props.stores,dog:t})})),!T||0===T.length&&Object(i.h)("div",{class:"col-12 text-center text-muted"},Object(i.h)("h3",null,Object(i.h)("i",{class:"fas fa-thumbs-up"})),Object(i.h)(h.c,{id:"dogs.no-dogs-with-special-needs"},"Ingen hunder med spesielle behov.")))),S&&S.length>0&&Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0 mb-4 clearfix"},Object(i.h)("h5",null,Object(i.h)(h.c,{id:"dogs.dog-with-workouts-last-day"},"Hunder som har trent siste døgn")),Object(i.h)("div",{class:"row"},S&&S.map((function(t){var s=c.findDog(t.dog);return Object(i.h)(g.a,{stores:e.props.stores,dog:s,showWorkout:!0})})))),Object(i.h)(p.a,{stores:this.props.stores,basehref:"/dogs/calendar/",month:v,year:w,callback:this.setHistoryType}),Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0 mb-4 clearfix"},Object(i.h)("h5",null,o?Object(i.h)("span",null,Object(i.h)(h.c,{id:"dogs.dogs-filtered-by"},"Filtrert på:")," ",d[o]):Object(i.h)("span",null,Object(i.h)(h.c,{id:"dogs.all-dogs",fields:{total:L.length}},"Alle hundene - ",L.length," stk"))),Object(i.h)("div",{class:"row"},L&&L.map((function(t){return Object(i.h)(g.a,{stores:e.props.stores,dog:t,hideTeam:!0})})))))))},t}(i.Component))||l;t.default=w}}]);
//# sourceMappingURL=route-dogs.chunk.d90f4.js.map