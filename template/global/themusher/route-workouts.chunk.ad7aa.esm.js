(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{B7Gj:function(t,e,o){"use strict";function s(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,s)}return o}function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}o.r(e);var a,c,n=o("hosL"),i=o("Utv1"),l=o("/eY4"),u=o("OhSV"),h=o("ZOvn"),d=o.n(h),p=o("JWe/"),b=(o("3pQw"),o("WAWY")),m=o("3UPq");const f=d.a.marginTop(!0),O=d.a.marginBottom(),k=d.a.subMenuMarginTop(),w={isLoading:!1};let g=Object(l.a)(a=class extends n.Component{constructor(...t){super(...t),this.toggleTeam=t=>{const{callback:e}=this.props,{workoutStore:o}=this.props.stores,{currentTeam:s}=o;o.setCurrentTeam(t===s?void 0:t),i.a.isDefined(e)&&e()}}render(){const{userStore:t,workoutStore:e}=this.props.stores,{teams:o}=t,{currentTeam:s}=e;return Object(n.h)("div",{class:"container-fluid px-0"},Object(n.h)("div",{class:"row"},o&&o.map(t=>Object(n.h)("div",{class:"col-6 mb-2"},Object(n.h)("div",{class:"border rounded rounded-pill px-3 py-2 "+(s===t.id?"bg-success":""),style:"line-height: 0.9em; cursor: pointer; pointer-events: inherit;",onClick:()=>this.toggleTeam(t.id)},Object(n.h)("small",null,Object(n.h)("i",{class:"fas fa-users mr-2"}),t.name))))))}})||a,j=Object(l.a)(c=class extends n.Component{constructor(t){var e;super(t),e=this,this.loadWorkouts=async function(t=e.props){e.setState({isLoading:!0});const{workoutStore:o}=t.stores;await e.loadWorkoutSummary(t),await e.loadWorkoutPlans(t),e.setState({isLoading:!1})},this.loadWorkoutPlans=async function(t=e.props){e.setState({isLoading:!0});const{year:o}=t,s=(new Date).getMonth()+1,r=i.a.getYear(),a=parseInt(o||(s<6?r-1:r),10),{workoutPlanStore:c,workoutStore:n}=t.stores,{currentTeam:l}=n;if(c.updateItem("workoutPlans",[]),c.updateItem("workoutPlan",{}),c.resetGraphPlanWeekDistanceCurrent(),l){await c.load({query:{team:l,seasonYear:a,seasonMonth:6}});const{workoutPlans:t}=c,e=t[0]||{};e.id&&(await c.load(e.id),c.prepareWeekGraphs({year:o}))}e.setState({isLoading:!1})},this.state=function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?s(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},w)}async loadWorkoutSummary(t=this.props){const{userStore:e,workoutStore:o}=t.stores,{year:s}=t,{currentTeam:r}=o;await e.getWorkoutSummary({team:r,year:s})}componentDidMount(){this.loadWorkouts()}componentWillReceiveProps(t){t.month===this.props.month&&t.year===this.props.year&&t.team===this.props.team||this.loadWorkouts(t)}render(){const{isLoading:t}=this.state,{userStore:e,appState:o,workoutStore:s,workoutPlanStore:r}=this.props.stores,{workoutPlan:a,workoutPlans:c}=r,{month:i,year:l}=this.props,{currentTeam:h}=s,{darkmode:d}=o,w=s.getLatests(),{workoutSummaryWeek:j=[]}=e;return Object(n.h)("div",{class:"container-fluid",style:`margin-bottom: ${O}; margin-top: ${f};`},Object(n.h)("div",{class:"row mb-4 fixed-top",style:`margin-top: ${k}; background-color: ${d?"#191d21":"#f8f9fa"};`},Object(n.h)("div",{class:"col text-center border-bottom border-primary"},Object(n.h)("a",{href:"/workouts/",class:"text-primary stretched-link"},Object(n.h)("i",{class:"fas fa-chart-line"})," ",Object(n.h)(u.c,{id:"workout.index.dashboard"},"Oversikt"))),Object(n.h)("div",{class:"col text-center"},Object(n.h)("a",{href:"/workouts/list",class:"text-secondary stretched-link"},Object(n.h)("i",{class:"fas fa-list"})," ",Object(n.h)(u.c,{id:"workout.index.list"},"Liste"))),Object(n.h)("div",{class:"col text-center"},Object(n.h)("a",{href:"/workouts/plan",class:"text-secondary stretched-link"},Object(n.h)("i",{class:"fas fa-calendar-alt"})," ",Object(n.h)(u.c,{id:"workout.index.plan"},"Plan")))),Object(n.h)("div",{class:"row"},Object(n.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 border-bottom"},Object(n.h)(g,{stores:this.props.stores,callback:this.loadWorkouts})),Object(n.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 mt-2 mb-2"},Object(n.h)("a",{class:"btn btn-primary btn-sm float-right",href:"/workouts/edit/new"},Object(n.h)("i",{class:"fas fa-plus"})," ",Object(n.h)(u.c,{id:"workout.index.add-workout"},"Legg til treningstur"))),Object(n.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3"},Object(n.h)(b.a,{stores:this.props.stores,isLoading:t,year:l,key:`graph-${a.id}-${c.length}`})),Object(n.h)(m.a,{stores:this.props.stores,team:h,basehref:"/workouts/",month:i,year:l,key:`calendar-${a.id}-${c.length}`})),Object(n.h)("div",{class:"row"},w&&w.length>0&&Object(n.h)("div",{class:"col-12 mb-4"},Object(n.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0 mt-4"},Object(n.h)("h5",null,Object(n.h)(u.c,{id:"workout.index.last-workouts",fields:{total:w.length}},"Nyeste treningsturer - ",w.length," stk"))),w&&w.map(t=>Object(n.h)(p.a,{stores:this.props.stores,workout:t})))),!1)}})||c;e.default=j}}]);
//# sourceMappingURL=route-workouts.chunk.ad7aa.esm.js.map