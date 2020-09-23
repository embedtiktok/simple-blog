(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+sdk":function(e,t,s){"use strict";function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function c(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.r(t);var o,r=s("hosL"),l=s("Gblv"),n=s("/eY4"),i=s("OhSV"),m=s("ZOvn"),b=s.n(m);var h,d=Object(n.a)(o=class extends r.Component{render(){const{team:e}=this.props,{teamStore:t}=this.props.stores,s=t.findWorkoutSummary(e.id,2020)||{};return Object(r.h)("div",{class:"w-100 mb-3"},Object(r.h)("div",{class:"row"},Object(r.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 d-flex mb-0 position-relative"},Object(r.h)("div",{class:"text-center border rounded-circle imageRounded",style:e.image?`background-image: url("${e.image.s3SmallLink}");`:""},!e.image&&Object(r.h)("i",{class:"fas fa-users text-muted mt-3",style:"font-size: 40px;"})),Object(r.h)("div",{class:"flex-grow-1 pl-3",style:"line-height: 1.2em;"},Object(r.h)("a",{class:"stretched-link",href:"/teams/"+e.id},Object(r.h)("h5",{class:"mb-1",style:"line-height: 1.0em;"},e.name)),Object(r.h)("small",{class:"text-muted"},e&&e.dogs&&Object(r.h)("span",{class:""},Object(r.h)("i",{class:"fas fa-dog"})," ",e.dogs.length),e&&e.members&&Object(r.h)("span",{class:"ml-2"},Object(r.h)("i",{class:"fas fa-user"})," ",e.members.length),s&&s.distanceKm>0&&Object(r.h)("span",{class:"ml-2"},Object(r.h)("i",{class:"fas fa-road"})," ",l.a.format(s.distanceKm,0),"km"),s&&s.elevation>0&&Object(r.h)("span",{class:"ml-2"},Object(r.h)("i",{class:"fas fa-mountain"})," ",l.a.format(s.elevation,0),"m"),s&&s.duration>0&&Object(r.h)("span",{class:"ml-2"},Object(r.h)("i",{class:"fas fa-clock"})," ",l.a.secToHms(s.duration)),s&&s.speedAvg>0&&Object(r.h)("span",{class:"ml-2"},Object(r.h)("i",{class:"fas fa-tachometer-alt"})," ",l.a.format(s.speedAvg,1),"km/t"))))))}})||o;const f=b.a.marginTop(!1),p=(b.a.marginTopBack(!1),b.a.marginBottom()),O={isLoading:!1};let j=Object(n.a)(h=class extends r.Component{constructor(e){super(e),this.state=function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){c(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},O)}async loadTeams(){this.setState({isLoading:!0});const{teamStore:e}=this.props.stores;await e.load(void 0,!1,{addData:["workoutSummary"]}),this.setState({isLoading:!1})}componentDidMount(){this.loadTeams()}render(){const{teamStore:e,userStore:t}=this.props.stores,{teams:s}=e;return Object(r.h)("div",{class:"container-fluid",style:`margin-bottom: ${p}; margin-top: ${f};`},Object(r.h)("div",{class:"row"},Object(r.h)("div",{class:"col-12"},Object(r.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0"},Object(r.h)("h5",null,Object(r.h)(i.c,{id:"teams.all-teams",fields:{total:s.length}},"Teamene dine - ",s.length," stk"))),Object(r.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0 clearfix mb-2"},Object(r.h)("a",{class:"btn btn-sm btn-primary float-right",href:"/teams/edit/new"},Object(r.h)("i",{class:"fas fa-plus"})," ",Object(r.h)(i.c,{id:"teams.add-new"},"Legg til team"))),s&&s.map(e=>Object(r.h)(d,{stores:this.props.stores,team:e})))))}})||h;t.default=j}}]);
//# sourceMappingURL=route-teams.chunk.47b40.esm.js.map