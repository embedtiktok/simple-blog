(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{B7Gj:function(t,e,s){"use strict";function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,o)}return s}function r(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}s.r(e);var c,a,i=s("hosL"),l=s("Gblv"),n=s("/eY4"),h=s("JWe/"),b=s("3pQw"),p=s("WAWY"),u=s("3UPq");const d={isLoading:!1};let f=Object(n.a)(c=class extends i.Component{constructor(...t){super(...t),this.toggleTeam=t=>{const{callback:e}=this.props,{workoutStore:s}=this.props.stores,{currentTeam:o}=s;s.setCurrentTeam(t===o?void 0:t),l.a.isDefined(e)&&e()}}render(){const{userStore:t,workoutStore:e}=this.props.stores,{teams:s}=t,{currentTeam:o}=e;return Object(i.h)("div",{class:"container-fluid px-0"},Object(i.h)("div",{class:"row"},s&&s.map(t=>Object(i.h)("div",{class:"col-6 mb-2"},Object(i.h)("div",{class:"border rounded rounded-pill px-3 py-2 "+(o===t.id?"bg-success":""),style:"line-height: 0.9em; cursor: pointer; pointer-events: inherit;",onClick:()=>this.toggleTeam(t.id)},Object(i.h)("small",null,Object(i.h)("i",{class:"fas fa-users mr-2"}),t.name))))))}})||c,m=Object(n.a)(a=class extends i.Component{constructor(t){var e;super(t),e=this,this.loadWorkouts=async function(){e.setState({isLoading:!0});const{workoutStore:t}=e.props.stores,{currentTeam:s}=t;await t.load({query:{team:s}}),await e.loadWorkoutSummary(),e.setState({isLoading:!1})},this.loadDogs=async function(){const{dogStore:t}=e.props.stores,{currentTeam:s}=t;await t.load({query:{team:s},addData:["workoutSummary"]})},this.state=function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(Object(s),!0).forEach((function(e){r(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}({},d)}async loadTracks(){const{trackStore:t}=this.props.stores;await t.load()}async loadWorkoutSummary(){const{userStore:t,workoutStore:e}=this.props.stores,{currentTeam:s}=e;await t.getWorkoutSummary({team:s})}componentDidMount(){this.loadWorkouts(),this.loadDogs(),this.loadTracks()}render(){const{isLoading:t}=this.state,{userStore:e,appState:s,workoutStore:o}=this.props.stores,{month:r,year:c}=this.props,{currentTeam:a}=o,{darkmode:l}=s,n=o.getLatests(),{workoutSummaryWeek:d=[]}=e;return Object(i.h)("div",{class:"container-fluid",style:"margin-bottom: 100px; margin-top: 90px;"},Object(i.h)("div",{class:"row mb-4 fixed-top",style:`margin-top: 58px; background-color: ${l?"#191d21":"#f8f9fa"};`},Object(i.h)("div",{class:"col text-center border-bottom border-primary"},Object(i.h)("a",{href:"/workouts/",class:"text-primary stretched-link"},Object(i.h)("i",{class:"fas fa-chart-line"})," Oversikt")),Object(i.h)("div",{class:"col text-center"},Object(i.h)("a",{href:"/workouts/list",class:"text-secondary stretched-link"},Object(i.h)("i",{class:"fas fa-list"})," Liste")),Object(i.h)("div",{class:"col text-center"},Object(i.h)("a",{href:"/workouts/plan",class:"text-secondary stretched-link"},Object(i.h)("i",{class:"fas fa-calendar-alt"})," Plan"))),Object(i.h)("div",{class:"row"},Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 border-bottom"},Object(i.h)(f,{stores:this.props.stores,callback:this.loadWorkouts})),Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 mt-2 mb-2"},Object(i.h)("a",{class:"btn btn-primary btn-sm float-right",href:"/workouts/edit/new"},Object(i.h)("i",{class:"fas fa-plus"})," Legg til treningstur")),Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3"},Object(i.h)(p.a,{stores:this.props.stores,isLoading:t}))),Object(i.h)(u.a,{stores:this.props.stores,team:a,basehref:"/workouts/",month:r,year:c}),Object(i.h)("div",{class:"row"},n&&n.length>0&&Object(i.h)("div",{class:"col-12 mb-4"},Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0 mt-4"},Object(i.h)("h5",null,"Nyeste treningsturer - ",n.length," stk")),n&&n.map(t=>Object(i.h)(h.a,{stores:this.props.stores,workout:t})))),Object(i.h)("div",{class:"row"},d&&d.length>0&&Object(i.h)("div",{class:"col-12 mb-4"},Object(i.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0"},Object(i.h)("h5",{class:"mt-4"},"Treningsoversikt")),d&&d.reverse().map(t=>Object(i.h)(b.a,{stores:this.props.stores,summary:t})))))}})||a;e.default=m}}]);
//# sourceMappingURL=route-workouts.chunk.c0f31.esm.js.map