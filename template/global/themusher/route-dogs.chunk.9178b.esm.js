(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{RUc2:function(e,t,s){"use strict";function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function c(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.r(t);var r,l,a=s("hosL"),i=s("Gblv"),n=s("/eY4"),d=(s("cneo"),s("OhSV")),h=s("ZOvn"),b=s.n(h),g=(s("KDoM"),s("2X7c")),f=s("7g1v"),p=s("mPUg");const O=b.a.marginTop(!0),j=b.a.marginBottom(),u=b.a.subMenuMarginTop(),m={isLoading:!1};let y=Object(n.a)(r=class extends a.Component{constructor(...e){super(...e),this.toggleTeam=e=>{const{callback:t}=this.props,{dogStore:s}=this.props.stores,{currentTeam:o}=s;s.setCurrentTeam(e===o?void 0:e),i.a.isDefined(t)&&t()}}render(){const{userStore:e,dogStore:t}=this.props.stores,{teams:s}=e,{currentTeam:o}=t;return Object(a.h)("div",{class:"container-fluid px-0"},Object(a.h)("div",{class:"row"},s&&s.map(e=>Object(a.h)("div",{class:"col-6 mb-2"},Object(a.h)("div",{class:"border rounded rounded-pill px-3 py-2 "+(o===e.id?"bg-success":""),style:"line-height: 0.9em; cursor: pointer; pointer-events: inherit;",onClick:()=>this.toggleTeam(e.id)},Object(a.h)("small",null,Object(a.h)("i",{class:"fas fa-users mr-2"}),e.name))))))}})||r,v=Object(n.a)(l=class extends a.Component{constructor(e){var t;super(e),t=this,this.loadDogs=async function(){t.setState({isLoading:!0});const{dogStore:e}=t.props.stores,{currentTeam:s}=e;await e.load({query:{team:s},addData:["workoutSummary","vaccineStatuses"]}),await e.getDogsWithTraining({daysBack:1}),t.setState({isLoading:!1})},this.setHistoryType=e=>{this.setState({historyType:e})},this.state=function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){c(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},m)}componentDidMount(){this.loadDogs()}render(){const{isLoading:e,historyType:t}=this.state,{dogStore:s,appState:o,userStore:c}=this.props.stores,{user:r}=c,{language:l="no"}=r,i=b.a.getHistoryMap(l),{month:n,year:h}=this.props,{darkmode:m}=o,{dogs:v,workoutSummaryCurrent:w}=s,x=s.findDogsByStatus([2,4,8,9]),k=s.findDogsWithNeeds(),S=t?c.findDogsFromHistory(t):[],D=v.filter(t?e=>S.indexOf(e.id)>-1:()=>!0);return Object(a.h)("div",{class:"container-fluid",style:`margin-bottom: ${j}; margin-top: ${O};`},Object(a.h)("div",{class:"row mb-4 fixed-top",style:`margin-top: ${u}; background-color: ${m?"#191d21":"#f8f9fa"};`},Object(a.h)("div",{class:"col text-center border-bottom border-primary"},Object(a.h)("nobr",null,Object(a.h)("a",{href:"/dogs",class:"text-primary stretched-link"},Object(a.h)("i",{class:"fas fa-chart-line"})," ",Object(a.h)(d.c,{id:"dogs.dashboard"},"Oversikt")))),Object(a.h)("div",{class:"col text-center"},Object(a.h)("nobr",null,Object(a.h)("a",{href:"/dogs/list",class:"text-secondary stretched-link"},Object(a.h)("i",{class:"fas fa-list"})," ",Object(a.h)(d.c,{id:"dogs.list"},"Liste")))),Object(a.h)("div",{class:"col text-center"},Object(a.h)("nobr",null,Object(a.h)("a",{href:"/dogs/feed",class:"text-secondary stretched-link"},Object(a.h)("i",{class:"fas fa-rss"})," ",Object(a.h)(d.c,{id:"dogs.feed"},"Feed")))),Object(a.h)("div",{class:"col text-center"},Object(a.h)("nobr",null,Object(a.h)("a",{href:"/dogs/todo",class:"text-secondary stretched-link"},Object(a.h)("i",{class:"fas fa-calendar-check"})," ",Object(a.h)(d.c,{id:"dogs.todo"},"Todo"))))),Object(a.h)("div",{class:"row"},Object(a.h)("div",{class:"col-12"},Object(a.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0 mb-2 border-bottom"},Object(a.h)(y,{stores:this.props.stores,callback:this.loadDogs})),Object(a.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0 pb-2 clearfix"},Object(a.h)("span",{class:"float-right"},Object(a.h)("a",{class:"btn btn-sm btn-primary ml-2",href:"/dogs/edit/new"},Object(a.h)("i",{class:"fas fa-plus"})," ",Object(a.h)(d.c,{id:"dogs.add-dogs"},"Legg til hunder"))),Object(a.h)(g.a,{stores:this.props.stores,dog:{},callback:this.loadDogs})),!e&&v&&0===v.length&&Object(a.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 text-muted"},Object(a.h)("div",{class:"text-center mb-5"},Object(a.h)("div",{class:"display-1"},Object(a.h)("i",{class:"fas fa-dog"})),Object(a.h)("h5",null,Object(a.h)(d.c,{id:"dogs.no-dogs-registered"},"Ingen hunder er registrert ennå."))),Object(a.h)(d.c,{id:"dogs.howto-add-1"},"Slik kommer du i gang:"),Object(a.h)("ol",null,Object(a.h)("li",null,Object(a.h)(d.c,{id:"dogs.howto-add-2"},'Trykk på knappen "Legg til hunder" rett nedenfor.')))),x&&x.length>0&&Object(a.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0 mb-4 clearfix"},Object(a.h)("h5",null,Object(a.h)(d.c,{id:"dogs.dog-with-follow-up"},"Hunder som trenger oppfølging")),Object(a.h)("div",{class:"row"},x&&x.map(e=>Object(a.h)(f.a,{stores:this.props.stores,dog:e})),!x||0===x.length&&Object(a.h)("div",{class:"col-12 text-center text-muted"},Object(a.h)("h3",null,Object(a.h)("i",{class:"fas fa-thumbs-up"})),Object(a.h)(d.c,{id:"dogs.no-dogs-with-follow-up"},"Ingen hunder som trenger ekstra oppfølging.")))),k&&k.length>0&&Object(a.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0 mb-4 clearfix"},Object(a.h)("h5",null,Object(a.h)(d.c,{id:"dogs.dog-with-special-needs"},"Hunder med spesielle behov")),Object(a.h)("div",{class:"row"},k&&k.map(e=>Object(a.h)(f.a,{stores:this.props.stores,dog:e})),!k||0===k.length&&Object(a.h)("div",{class:"col-12 text-center text-muted"},Object(a.h)("h3",null,Object(a.h)("i",{class:"fas fa-thumbs-up"})),Object(a.h)(d.c,{id:"dogs.no-dogs-with-special-needs"},"Ingen hunder med spesielle behov.")))),w&&w.length>0&&Object(a.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0 mb-4 clearfix"},Object(a.h)("h5",null,Object(a.h)(d.c,{id:"dogs.dog-with-workouts-last-day"},"Hunder som har trent siste døgn")),Object(a.h)("div",{class:"row"},w&&w.map(e=>{const t=s.findDog(e.dog);return Object(a.h)(f.a,{stores:this.props.stores,dog:t,showWorkout:!0})}))),Object(a.h)(p.a,{stores:this.props.stores,basehref:"/dogs/calendar/",month:n,year:h,callback:this.setHistoryType}),Object(a.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0 mb-4 clearfix"},Object(a.h)("h5",null,t?Object(a.h)("span",null,Object(a.h)(d.c,{id:"dogs.dogs-filtered-by"},"Filtrert på:")," ",i[t]):Object(a.h)("span",null,Object(a.h)(d.c,{id:"dogs.all-dogs",fields:{total:D.length}},"Alle hundene - ",D.length," stk"))),Object(a.h)("div",{class:"row"},D&&D.map(e=>Object(a.h)(f.a,{stores:this.props.stores,dog:e,hideTeam:!0})))))))}})||l;t.default=v}}]);
//# sourceMappingURL=route-dogs.chunk.9178b.esm.js.map