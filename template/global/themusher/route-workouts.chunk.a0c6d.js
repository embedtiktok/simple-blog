(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{B7Gj:function(t,e,r){"use strict";function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}r.r(e);var c,a,i=r("hosL"),l=r("Gblv"),u=r("/eY4"),f=r("JWe/"),h=r("3pQw"),p=r("WAWY"),b={isLoading:!1},d=Object(u.a)(c=function(t){function e(){for(var e,r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))||this).toggleTeam=function(t){var r=e.props.callback,o=e.props.stores.workoutStore;o.setCurrentTeam(t===o.currentTeam?void 0:t),l.a.isDefined(r)&&r()},e}return n(e,t),e.prototype.render=function(){var t=this,e=this.props.stores,r=e.userStore.teams,o=e.workoutStore.currentTeam;return Object(i.h)("div",{class:"container-fluid px-0"},Object(i.h)("div",{class:"row"},r&&r.map((function(e){return Object(i.h)("div",{class:"col-6 mb-2"},Object(i.h)("div",{class:"border rounded rounded-pill px-3 py-2 "+(o===e.id?"bg-success":""),style:"line-height: 0.9em; cursor: pointer; pointer-events: inherit;",onClick:function(){return t.toggleTeam(e.id)}},Object(i.h)("small",null,Object(i.h)("i",{class:"fas fa-users mr-2"}),e.name)))}))))},e}(i.Component))||c,m=Object(u.a)(a=function(t){function e(e){var r;return(r=t.call(this,e)||this).loadWorkouts=function(){return new Promise((function(t,e){var o;return r.setState({isLoading:!0}),o=r.props.stores.workoutStore,Promise.resolve(o.load({query:{team:o.currentTeam}})).then((function(){try{return Promise.resolve(r.loadWorkoutSummary()).then((function(){try{return r.setState({isLoading:!1}),t()}catch(t){return e(t)}}),e)}catch(t){return e(t)}}),e)}))},r.loadDogs=function(){return new Promise((function(t,e){var o;return o=r.props.stores.dogStore,Promise.resolve(o.load({query:{team:o.currentTeam},addData:["workoutSummary"]})).then((function(){try{return t()}catch(t){return e(t)}}),e)}))},r.state=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},b),r}n(e,t);var r=e.prototype;return r.loadTracks=function(){return new Promise(function(t,e){return Promise.resolve(this.props.stores.trackStore.load()).then((function(){try{return t()}catch(t){return e(t)}}),e)}.bind(this))},r.loadWorkoutSummary=function(){return new Promise(function(t,e){var r;return r=this.props.stores,Promise.resolve(r.userStore.getWorkoutSummary({team:r.workoutStore.currentTeam})).then((function(){try{return t()}catch(t){return e(t)}}),e)}.bind(this))},r.componentDidMount=function(){this.loadWorkouts(),this.loadDogs(),this.loadTracks()},r.render=function(){var t=this,e=this.state.isLoading,r=this.props.stores,o=r.userStore,s=r.appState.darkmode,n=r.workoutStore.getLatests(),c=o.workoutSummaryWeek,a=void 0===c?[]:c;return Object(i.h)("div",{class:"container-fluid",style:"margin-bottom: 100px; margin-top: 90px;"},Object(i.h)("div",{class:"row mb-4 fixed-top",style:"margin-top: 58px; background-color: "+(s?"#191d21":"#f8f9fa")+";"},Object(i.h)("div",{class:"col text-center border-bottom border-primary"},Object(i.h)("a",{href:"/workouts/",class:"text-primary stretched-link"},Object(i.h)("i",{class:"fas fa-chart-line"})," Oversikt")),Object(i.h)("div",{class:"col text-center"},Object(i.h)("a",{href:"/workouts/list",class:"text-secondary stretched-link"},Object(i.h)("i",{class:"fas fa-list"})," Liste")),Object(i.h)("div",{class:"col text-center"},Object(i.h)("a",{href:"/workouts/plan",class:"text-secondary stretched-link"},Object(i.h)("i",{class:"fas fa-calendar-alt"})," Plan"))),Object(i.h)("div",{class:"row"},Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 border-bottom"},Object(i.h)(d,{stores:this.props.stores,callback:this.loadWorkouts})),Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 mt-2 mb-2"},Object(i.h)("a",{class:"btn btn-primary btn-sm float-right",href:"/workouts/edit/new"},Object(i.h)("i",{class:"fas fa-plus"})," Legg til treningstur")),Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3"},Object(i.h)(p.a,{stores:this.props.stores,isLoading:e}))),Object(i.h)("div",{class:"row"},n&&n.length>0&&Object(i.h)("div",{class:"col-12 mb-4"},Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0 mt-4"},Object(i.h)("h5",null,"Nyeste treningsturer - ",n.length," stk")),n&&n.map((function(e){return Object(i.h)(f.a,{stores:t.props.stores,workout:e})})))),Object(i.h)("div",{class:"row"},a&&a.length>0&&Object(i.h)("div",{class:"col-12 mb-4"},Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0"},Object(i.h)("h5",{class:"mt-4"},"Treningsoversikt")),a&&a.reverse().map((function(e){return Object(i.h)(h.a,{stores:t.props.stores,summary:e})})))))},e}(i.Component))||a;e.default=m}}]);
//# sourceMappingURL=route-workouts.chunk.a0c6d.js.map