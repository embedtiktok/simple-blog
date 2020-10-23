(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{IQw1:function(t,e,a){"use strict";function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.r(e);var n,i=a("hosL"),l=a("Utv1"),c=a("/eY4"),o=(a("Y3FI"),a("wgWz")),b=(a("bbv7"),{}),d=Object(c.a)(n=function(t){function e(e){var a;return(a=t.call(this,e)||this).setWindpark=function(t){a.props.stores.windmillStore.setCurrentWindparkName(t.target.dataset.windpark),a.loadAll()},a.setWindparkStrategy=function(t){a.props.stores.windmillStore.setWindparkStrategy(t.target.dataset.name,t.target.dataset.strategy)},a.setWindparkLifetimeControl=function(t){a.props.stores.windmillStore.setWindparkLifetimeControl(t.target.dataset.name,t.target.value)},a.setWindmillLifetimeControl=function(t){a.props.stores.windmillStore.setWindmillLifetimeControl(t.target.dataset.name,t.target.dataset.mill,t.target.value)},a.state=function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},b),a}var a,n;n=t,(a=e).prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n;var c=e.prototype;return c.loadAll=function(){return new Promise(function(t){this.props.stores.wearStore.generateData();var e=Math.floor((new Date).getTime()/1e3),a=o.a.timeRangeDays(-4,11);return this.setState({now:e,markerDays:a}),t()}.bind(this))},c.componentDidMount=function(){this.loadAll()},c.render=function(){var t=this,e=this.props.stores,a=e.windmillStore,r=a.windparks,s=a.currentWindparkName,n=a.currentWindpark;return Object(i.h)("div",{class:"container-fluid mt-5 pt-2",style:"margin-bottom: 200px;"},Object(i.h)("div",{class:"row"},Object(i.h)("div",{class:"col-4"},Object(i.h)("h1",null,Object(i.h)("i",{class:"fas fa-thermometer"})," Park management")),Object(i.h)("div",{class:"col-8 pt-2"},Object(i.h)("ul",{class:"nav nav-pills float-right"},r&&r.map((function(e){return Object(i.h)("li",{class:"nav-item"},Object(i.h)("button",{class:"btn btn-link nav-link "+(e.name===s?"active":""),onClick:t.setWindpark,"data-windpark":e.name},e.name))})))),Object(i.h)("div",{class:"col-2"},Object(i.h)("button",{type:"button",class:"btn btn-"+("lifetimeControl"===n.strategy?"":"outline-")+"success","data-name":s,"data-strategy":"lifetimeControl"===n.strategy?"default":"lifetimeControl",onClick:this.setWindparkStrategy},"Lifetime control"),Object(i.h)("br",null),Object(i.h)("div",{class:"form-group"},Object(i.h)("label",{for:"lifetimeControl"},"Years (",n.lifetimeControl,")"),Object(i.h)("input",{type:"range",class:"form-control-range",id:"lifetimeControl",min:"-10",max:"10",step:"1","data-name":s,value:n.lifetimeControl,onInput:this.setWindparkLifetimeControl}))),Object(i.h)("div",{class:"col-10"}," "),Object(i.h)("div",{class:"col-12"},Object(i.h)("table",{class:"table table-sm table-striped"},Object(i.h)("thead",null,Object(i.h)("tr",null,Object(i.h)("th",{class:"w-25"},"Windmill"),Object(i.h)("th",{class:""},"Installed"),Object(i.h)("th",{class:""},"Maintainance"),Object(i.h)("th",{class:"text-center"},"Up/down rating"),Object(i.h)("th",{class:"text-center"},"Rating (default)"),Object(i.h)("th",{class:"text-center"},"Production"),Object(i.h)("th",{class:"text-center"},"Wear"),Object(i.h)("th",{class:"text-center"},"Burnrate"),Object(i.h)("th",{class:"text-center"},"EOL"),Object(i.h)("th",{class:"text-center"},"Location"))),Object(i.h)("tbody",null,n&&n.windmills&&n.windmills.map((function(e,a){var r,s,c,o,b,d,h,p,m,u=e.lifetimeControl||n.lifetimeControl,O=365*u*86400,f=!1;if((e.lifetimeControl||"lifetimeControl"===n.strategy)&&(f=!0),e.installed){var g=365*n.lifetime*86400,j=Math.floor(new Date(e.installed).getTime()/1e3),v=Math.floor((new Date).getTime()/1e3);c=(s=g-g*e.wear/100)*(100/(b=e.wear/((o=v-j)/g*100)*100)),(r=new Date(0)).setUTCSeconds(v+c);var w=365*n.lifetime*86400+O;d=w-o,h=e.wear/(o/w*100)*100,p=Math.floor(s/d*100),d*(100/h),(m=new Date(0)).setUTCSeconds(v+d)}return Object(i.h)("tr",null,Object(i.h)("td",null,e.title),Object(i.h)("td",null,e.installed),Object(i.h)("td",null,e.maintainance),Object(i.h)("td",{class:"text-center"},u," years",Object(i.h)("div",{class:"form-group"},Object(i.h)("input",{type:"range",class:"form-control-range",id:"lifeTimeRange"+e.title,min:"-10",max:"10",step:"1","data-name":n.name,"data-mill":a,value:u,onInput:t.setWindmillLifetimeControl}))),Object(i.h)("td",{class:"text-right"},l.a.format(p*e.capacity/100,1)," ",Object(i.h)("span",{class:"text-muted"},"(",e.capacity,")")," MW",Object(i.h)("br",null),f&&Object(i.h)("div",{class:"progress mt-2"},Object(i.h)("div",{class:"progress-bar progress-bar-striped bg-"+(p>100?"danger":"success"),role:"progressbar",style:"width: "+p+"%","aria-valuenow":p,"aria-valuemin":"0","aria-valuemax":"100"},l.a.format(p,0),"%"))),Object(i.h)("td",{class:"text-right "+(e.production?"text-success":"text-danger")},e.production?Object(i.h)("i",{class:"fas fa-check mr-4"}):Object(i.h)("i",{class:"fas fa-exclamation-triangle mr-4"})),Object(i.h)("td",{class:"text-right"},Object(i.h)("div",{class:"progress"},Object(i.h)("div",{class:"progress-bar",role:"progressbar",style:"width: "+e.wear+"%","aria-valuenow":e.wear,"aria-valuemin":"0","aria-valuemax":"100"},e.wear,"%"))),Object(i.h)("td",{class:"text-right"},Object(i.h)("div",{class:"progress"},Object(i.h)("div",{class:"progress-bar progress-bar-striped bg-"+(b>100?"danger":"success"),role:"progressbar",style:"width: "+b+"%","aria-valuenow":b,"aria-valuemin":"0","aria-valuemax":"100"},l.a.format(b,0),"%")),f&&Object(i.h)("div",{class:"progress mt-2"},Object(i.h)("div",{class:"progress-bar progress-bar-striped bg-"+(h>100?"danger":"success"),role:"progressbar",style:"width: "+h+"%","aria-valuenow":h,"aria-valuemin":"0","aria-valuemax":"100"},l.a.format(h,0),"%"))),Object(i.h)("td",{class:"text-right"},e.installed?l.a.isoDate(r,!1,!1,!0):"n/a",Object(i.h)("br",null),f&&Object(i.h)("span",{class:"text-muted"},e.installed?l.a.isoDate(m,!1,!1,!0):"n/a")),Object(i.h)("td",{class:"text-right"},e.lat,", ",e.lng))})))))))},e}(i.Component))||n;e.default=d}}]);
//# sourceMappingURL=route-parkmanagement.chunk.03086.js.map