(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{B7Gj:function(t,e,r){"use strict";function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}r.r(e);var c,a,i=r("hosL"),l=r("Gblv"),u=r("/eY4"),h=r("OhSV"),p=r("JWe/"),d=(r("3pQw"),r("WAWY")),f=r("3UPq"),b={isLoading:!1},m=Object(u.a)(c=function(t){function e(){for(var e,r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))||this).toggleTeam=function(t){var r=e.props.callback,o=e.props.stores.workoutStore;o.setCurrentTeam(t===o.currentTeam?void 0:t),l.a.isDefined(r)&&r()},e}return n(e,t),e.prototype.render=function(){var t=this,e=this.props.stores,r=e.userStore.teams,o=e.workoutStore.currentTeam;return Object(i.h)("div",{class:"container-fluid px-0"},Object(i.h)("div",{class:"row"},r&&r.map((function(e){return Object(i.h)("div",{class:"col-6 mb-2"},Object(i.h)("div",{class:"border rounded rounded-pill px-3 py-2 "+(o===e.id?"bg-success":""),style:"line-height: 0.9em; cursor: pointer; pointer-events: inherit;",onClick:function(){return t.toggleTeam(e.id)}},Object(i.h)("small",null,Object(i.h)("i",{class:"fas fa-users mr-2"}),e.name)))}))))},e}(i.Component))||c,O=Object(u.a)(a=function(t){function e(e){var r;return(r=t.call(this,e)||this).loadWorkouts=function(t){return new Promise((function(e,o){return void 0===t&&(t=r.props),r.setState({isLoading:!0}),t.stores.workoutStore.currentTeam,Promise.resolve(r.loadWorkoutSummary(t)).then((function(){try{return Promise.resolve(r.loadWorkoutPlans(t)).then((function(){try{return r.setState({isLoading:!1}),e()}catch(t){return o(t)}}),o)}catch(t){return o(t)}}),o)}))},r.loadWorkoutPlans=function(t){return new Promise((function(e,o){function s(){return r.setState({isLoading:!1}),e()}var n,c,a,i,u,h,p,d;return void 0===t&&(t=r.props),r.setState({isLoading:!0}),n=t.year,c=(new Date).getMonth()+1,a=l.a.getYear(),i=parseInt(n||(c<6?a-1:a),10),p=(u=t.stores).workoutStore.currentTeam,(h=u.workoutPlanStore).updateItem("workoutPlans",[]),h.updateItem("workoutPlan",{}),p?Promise.resolve(h.load({query:{team:p,seasonYear:i,seasonMonth:6}})).then(function(){try{if((d=h.workoutPlans[0]||{}).id)return Promise.resolve(h.load(d.id)).then(function(){try{return h.prepareWeekGraphs({year:n}),t.call(this)}catch(t){return o(t)}}.bind(this),o);function t(){return s.call(this)}return t.call(this)}catch(t){return o(t)}}.bind(this),o):s.call(this)}))},r.state=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},b),r}n(e,t);var r=e.prototype;return r.loadWorkoutSummary=function(t){return new Promise(function(e,r){var o;return void 0===t&&(t=this.props),o=t.stores,Promise.resolve(o.userStore.getWorkoutSummary({team:o.workoutStore.currentTeam,year:t.year})).then((function(){try{return e()}catch(t){return r(t)}}),r)}.bind(this))},r.componentDidMount=function(){this.loadWorkouts()},r.componentWillReceiveProps=function(t){t.month===this.props.month&&t.year===this.props.year&&t.team===this.props.team||this.loadWorkouts(t)},r.render=function(){var t=this,e=this.state.isLoading,r=this.props.stores,o=r.workoutStore,s=r.workoutPlanStore.workoutPlan,n=this.props,c=n.month,a=n.year,l=o.currentTeam,u=r.appState.darkmode,b=o.getLatests();return Object(i.h)("div",{class:"container-fluid",style:"margin-bottom: 100px; margin-top: 90px;"},Object(i.h)("div",{class:"row mb-4 fixed-top",style:"margin-top: 58px; background-color: "+(u?"#191d21":"#f8f9fa")+";"},Object(i.h)("div",{class:"col text-center border-bottom border-primary"},Object(i.h)("a",{href:"/workouts/",class:"text-primary stretched-link"},Object(i.h)("i",{class:"fas fa-chart-line"})," ",Object(i.h)(h.c,{id:"workout.index.dashboard"},"Oversikt"))),Object(i.h)("div",{class:"col text-center"},Object(i.h)("a",{href:"/workouts/list",class:"text-secondary stretched-link"},Object(i.h)("i",{class:"fas fa-list"})," ",Object(i.h)(h.c,{id:"workout.index.list"},"Liste"))),Object(i.h)("div",{class:"col text-center"},Object(i.h)("a",{href:"/workouts/plan",class:"text-secondary stretched-link"},Object(i.h)("i",{class:"fas fa-calendar-alt"})," ",Object(i.h)(h.c,{id:"workout.index.plan"},"Plan")))),Object(i.h)("div",{class:"row"},Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 border-bottom"},Object(i.h)(m,{stores:this.props.stores,callback:this.loadWorkouts})),Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 mt-2 mb-2"},Object(i.h)("a",{class:"btn btn-primary btn-sm float-right",href:"/workouts/edit/new"},Object(i.h)("i",{class:"fas fa-plus"})," ",Object(i.h)(h.c,{id:"workout.index.add-workout"},"Legg til treningstur"))),Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3"},Object(i.h)(d.a,{stores:this.props.stores,isLoading:e,year:a,key:s.id})),Object(i.h)(f.a,{stores:this.props.stores,team:l,basehref:"/workouts/",month:c,year:a,key:s.id})),Object(i.h)("div",{class:"row"},b&&b.length>0&&Object(i.h)("div",{class:"col-12 mb-4"},Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0 mt-4"},Object(i.h)("h5",null,Object(i.h)(h.c,{id:"workout.index.last-workouts",fields:{total:b.length}},"Nyeste treningsturer - ",b.length," stk"))),b&&b.map((function(e){return Object(i.h)(p.a,{stores:t.props.stores,workout:e})})))),!1)},e}(i.Component))||a;e.default=O}}]);
//# sourceMappingURL=route-workouts.chunk.be4a6.js.map