(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{RUc2:function(e,t,s){"use strict";function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.r(t);var c,n,l=s("hosL"),i=s("Utv1"),a=s("/eY4"),d=(s("cneo"),s("KDoM"));const p={isLoading:!1};let b=Object(a.a)(c=class extends l.Component{constructor(...e){super(...e),this.toggleTeam=e=>{const{callback:t}=this.props,{dogStore:s}=this.props.stores,{currentTeam:o}=s;s.setCurrentTeam(e===o?void 0:e),i.a.isDefined(t)&&t()}}render(){const{userStore:e,dogStore:t}=this.props.stores,{teams:s}=e,{currentTeam:o}=t;return Object(l.h)("div",{class:"container-fluid px-0"},Object(l.h)("div",{class:"row"},s&&s.map(e=>Object(l.h)("div",{class:"col-6 mb-2"},Object(l.h)("div",{class:"border rounded rounded-pill px-3 py-2 "+(o===e.id?"bg-success":""),style:"line-height: 0.9em; cursor: pointer; pointer-events: inherit;",onClick:()=>this.toggleTeam(e.id)},Object(l.h)("small",null,Object(l.h)("i",{class:"fas fa-users mr-2"}),e.name))))))}})||c,h=Object(a.a)(n=class extends l.Component{constructor(e){var t;super(e),t=this,this.loadDogs=async function(){t.setState({isLoading:!0});const{dogStore:e}=t.props.stores,{currentTeam:s}=e;await e.load({query:{team:s},addData:["workoutSummary"]}),t.setState({isLoading:!1})},this.state=function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},p),this.loadDogs()}render(){const{isLoading:e}=this.state,{dogStore:t}=this.props.stores,{dogs:s}=t;return Object(l.h)("div",{class:"container-fluid",style:"margin-bottom: 100px; margin-top: 60px;"},Object(l.h)("div",{class:"row"},Object(l.h)("div",{class:"col-12"},Object(l.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0 border-bottom"},Object(l.h)(b,{stores:this.props.stores,callback:this.loadDogs})),Object(l.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0 mt-4"},Object(l.h)("h5",null,"Hundene - ",s.length," stk")),!e&&s&&0===s.length&&Object(l.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 text-muted"},Object(l.h)("div",{class:"text-center mb-5"},Object(l.h)("div",{class:"display-1"},Object(l.h)("i",{class:"fas fa-dog"})),Object(l.h)("h5",null,"Ingen hunder er registrert ennå.")),"Slik kommer du i gang:",Object(l.h)("ol",null,Object(l.h)("li",null,'Trykk på knappen "Legg til hunder" rett nedenfor.'))),s&&s.map(e=>Object(l.h)(d.a,{stores:this.props.stores,dog:e})),Object(l.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3"},Object(l.h)("a",{class:"btn btn-primary mt-5 float-right",href:"/dogs/edit/new"},Object(l.h)("i",{class:"fas fa-plus"})," Legg til hunder")))))}})||n;t.default=h}}]);
//# sourceMappingURL=route-dogs.chunk.e0c81.esm.js.map