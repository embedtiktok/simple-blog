(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+1Jk":function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t);var o,i=r("hosL"),c=(r("Gblv"),r("/eY4")),a=r("JWe/"),l=(r("3pQw"),r("WAWY")),h=(r("xDik"),r("2X7c"),r("7g1v")),u={isLoading:!1},d=Object(c.a)(o=function(e){function t(t){var r;return(r=e.call(this,t)||this).loadDogs=function(){return new Promise((function(e,t){var n;return r.setState({isLoading:!0}),n=r.props.stores.dogStore,Promise.resolve(n.load({query:{team:n.currentTeam},addData:["workoutSummary"]})).then((function(){try{return r.setState({isLoading:!1}),e()}catch(e){return t(e)}}),t)}))},r.state=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},u),r}var r,o;o=e,(r=t).prototype=Object.create(o.prototype),r.prototype.constructor=r,r.__proto__=o;var c=t.prototype;return c.loadAll=function(){return new Promise(function(e,t){var r,n,s;return n=(r=this.props.stores).appState,s=r.userStore,this.setState({isLoading:!0}),Promise.resolve(n.getFingerprint()).then(function(){try{return Promise.resolve(s.getInfo()).then(function(){try{return Promise.resolve(this.loadWorkoutSummary()).then(function(){try{return Promise.resolve(this.loadDogs()).then(function(){try{return this.setState({isLoading:!1}),e()}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t)}.bind(this))},c.loadFeed=function(){return new Promise(function(e,t){return Promise.resolve(this.props.stores.userStore.getFeed()).then((function(){try{return e()}catch(e){return t(e)}}),t)}.bind(this))},c.loadWorkoutSummary=function(){return new Promise(function(e,t){return Promise.resolve(this.props.stores.userStore.getWorkoutSummary({})).then((function(){try{return e()}catch(e){return t(e)}}),t)}.bind(this))},c.componentDidMount=function(){this.loadAll()},c.render=function(){var e=this,t=this.state.isLoading,r=this.props.stores,n=r.userStore,s=r.dogStore,o=r.appState.darkmode,c=n.workouts,u=n.workoutSummary,d=n.teams,b=n.tracks,f=s.dogs,p=s.findDogsByStatus([2,4,8,9]),g=s.findDogsWithNeeds(),m=d.length,O=f.length,j=b.length;return Object(i.h)("div",{class:"container-fluid",style:"margin-bottom: 100px; margin-top: 90px;"},Object(i.h)("div",{class:"row mb-4 fixed-top",style:"margin-top: 58px; background-color: "+(o?"#191d21":"#f8f9fa")+";"},Object(i.h)("div",{class:"col text-center border-bottom border-primary"},Object(i.h)("a",{href:"/",class:"text-primary stretched-link"},Object(i.h)("i",{class:"fas fa-chart-line"})," Dashboard")),Object(i.h)("div",{class:"col text-center"},Object(i.h)("a",{href:"/feed",class:"text-secondary stretched-link"},Object(i.h)("i",{class:"fas fa-rss"})," Feed")),Object(i.h)("div",{class:"col text-center"},Object(i.h)("a",{href:"/todo",class:"text-secondary stretched-link"},Object(i.h)("i",{class:"fas fa-list"})," Todo"))),Object(i.h)("div",{class:"row"},Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3"},!t&&u&&0===u.length&&Object(i.h)("div",{class:"mb-5 py-3 border-top border-bottom"},Object(i.h)("div",{class:"text-center"},Object(i.h)("div",{class:"display-4"},Object(i.h)("i",{class:"fas fa-paw"})),Object(i.h)("h5",null,"Velkommen til The Musher."),Object(i.h)("p",null,"The Musher er en app som er kontinuerlig under utvikling. Alle ideer/innspill/kommentarer mottas med stor takk på Facebooksiden vår 😃"),Object(i.h)("p",null,"Fokus til appen er enkel registrering av hunder, team, treninger og hendelser rundt hundene. Når man har mange hunder så er det ofte vanskelig å holde styr på løpetid, vaksiner, treninger, skader, vetrinærbesøk, chiplister, osv."),Object(i.h)("p",null,"Alle data lagres sentralt i skyen hos AWS (Amazon Web Services) og det vil derfor være mulig å bruke appen fra flere telefoner og datamaskiner samtidig. Dette kan være fint dersom det er flere som trener og følger opp hundene.")),Object(i.h)("h5",null,"Slik kommer du i gang:"),Object(i.h)("ol",null,m<1&&Object(i.h)("li",null,Object(i.h)("a",{class:"btn btn-info mt-3",href:"/teams/"},"Legg inn teamene dine.")),O<1&&Object(i.h)("li",null,Object(i.h)("a",{class:"btn btn-info mt-3",href:"/dogs/"},"Legg inn hundene dine.")),j<1&&Object(i.h)("li",null,Object(i.h)("a",{class:"btn btn-info mt-3",href:"/tracks/"},"Legg inn rundene dine.")),Object(i.h)("li",null,Object(i.h)("a",{class:"btn btn-info mt-3",href:"/workouts/"},"Begynn å registrere treningene.")))),Object(i.h)(l.a,{stores:this.props.stores,isLoading:t}))),Object(i.h)("div",{class:"row"},p&&p.length>0&&Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 mt-4"},Object(i.h)("h5",null,"Hunder som trenger oppfølging"),Object(i.h)("div",{class:"row"},p&&p.map((function(t){return Object(i.h)(h.a,{stores:e.props.stores,dog:t})})))),g&&g.length>0&&Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 mt-4"},Object(i.h)("h5",null,"Hunder med spesielle behov"),Object(i.h)("div",{class:"row"},g&&g.map((function(t){return Object(i.h)(h.a,{stores:e.props.stores,dog:t})}))))),Object(i.h)("div",{class:"row"},c&&c.length>0&&Object(i.h)("div",{class:"col-12 mb-4"},Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0 mt-4"},Object(i.h)("h5",null,"Siste treningsturer - ",c.length," stk")),c&&c.map((function(t){return Object(i.h)(a.a,{stores:e.props.stores,workout:t})})))))},t}(i.Component))||o;t.default=d}}]);
//# sourceMappingURL=route-home.chunk.5b088.js.map