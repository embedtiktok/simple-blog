(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{ztHd:function(e,t,s){"use strict";s.r(t),function(e){var c,i=s("hosL"),a=s("Utv1"),r=s("/eY4"),n=s("OhSV"),l=s("ZOvn"),o=s.n(l),h=s("tJLP"),d=s("Cjoz"),u=o.a.marginTop(!1),b=o.a.marginBottom(),m=Object(r.a)(c=function(t){function s(e){var s;return(s=t.call(this,e)||this).resetEmailMessage=function(){var e=s.props.stores.userStore;e.updateField("emailMessage",""),e.updateField("emailMessageIcon","")},s.resetEmailError=function(){var e=s.props.stores.userStore;e.updateField("emailError",""),e.updateField("emailErrorIcon","")},s.toggleSetting=function(e){return new Promise((function(t,c){var i,a;return a=s.props.stores.userStore,Promise.resolve(a.updateSetting((i={},i["settings."+e]=1===a.user.settings[e]?0:1,i))).then((function(){try{return t()}catch(e){return c(e)}}),c)}))},s.state={time:Date.now(),count:10},s}var c,r;r=t,(c=s).prototype=Object.create(r.prototype),c.prototype.constructor=c,c.__proto__=r;var l=s.prototype;return l.componentDidMount=function(){this.props.verifyEmailToken&&this.props.stores.userStore.verifyEmail({token:this.props.verifyEmailToken})},l.render=function(){var t=this,s=this.props.stores.userStore,c=s.user,r=s.emailMessage,l=s.emailError,o=s.emailMessageIcon,m=s.emailErrorIcon,j=c.settings,O=void 0===j?{}:j,v=s.findTeams(c.teams),p=a.a.getApiServer(),g=a.a.getJwtToken();return Object(i.h)("div",{class:"container-fluid",style:"margin-bottom: "+b+"; margin-top: "+u+";"},Object(i.h)("div",{class:"row"},Object(i.h)("div",{class:"col-12"},Object(i.h)(h.a,{message:l,icon:m,remove:this.resetEmailError}),Object(i.h)(d.a,{message:r,icon:o,remove:this.resetEmailMessage}),Object(i.h)("a",{href:"/users/edit",class:"btn btn-primary btn-sm float-right"},Object(i.h)(n.c,{id:"users.edit"},"Endre")),Object(i.h)("h5",null,Object(i.h)(n.c,{id:"users.title"},"Din profil"))),Object(i.h)("div",{class:"col-4 text-muted text-right"},Object(i.h)(n.c,{id:"users.email"},"E-post")),Object(i.h)("div",{class:"col-8"},c.email),c.team&&Object(i.h)(e,null,Object(i.h)("div",{class:"col-4 text-muted text-right"},Object(i.h)(n.c,{id:"users.main-team"},"Hovedteam")),Object(i.h)("div",{class:"col-8"},s.findTeam(c.team))),c.teams&&Object(i.h)(e,null,Object(i.h)("div",{class:"col-4 text-muted text-right"},Object(i.h)(n.c,{id:"users.all-teams"},"Alle teamene")),Object(i.h)("div",{class:"col-8"},v.map((function(e){return Object(i.h)("div",null,e.name)})))),c.username&&Object(i.h)(e,null,Object(i.h)("div",{class:"col-4 text-muted text-right"},Object(i.h)(n.c,{id:"users.username"},"Brukernavn")),Object(i.h)("div",{class:"col-8"},c.username)),c.firstname&&Object(i.h)(e,null,Object(i.h)("div",{class:"col-4 text-muted text-right"},Object(i.h)(n.c,{id:"users.firstname"},"Fornavn")),Object(i.h)("div",{class:"col-8"},c.firstname)),c.lastname&&Object(i.h)(e,null,Object(i.h)("div",{class:"col-4 text-muted text-right"},Object(i.h)(n.c,{id:"users.lastname"},"Etternavn")),Object(i.h)("div",{class:"col-8"},c.lastname)),c.cellphone&&Object(i.h)(e,null,Object(i.h)("div",{class:"col-4 text-muted text-right"},Object(i.h)(n.c,{id:"users.cellphone"},"Mobil")),Object(i.h)("div",{class:"col-8"},c.cellphone)),c.url&&Object(i.h)(e,null,Object(i.h)("div",{class:"col-4 text-muted text-right"},Object(i.h)(n.c,{id:"users.homepage"},"Hjemmeside")),Object(i.h)("div",{class:"col-8"},c.url)),c.facebook&&Object(i.h)(e,null,Object(i.h)("div",{class:"col-4 text-muted text-right"},Object(i.h)(n.c,{id:"users.facebook"},"Facebook")),Object(i.h)("div",{class:"col-8"},c.facebook)),c.instagram&&Object(i.h)(e,null,Object(i.h)("div",{class:"col-4 text-muted text-right"},Object(i.h)(n.c,{id:"users.instagram"},"Instagram")),Object(i.h)("div",{class:"col-8"},c.instagram)),c.snapchat&&Object(i.h)(e,null,Object(i.h)("div",{class:"col-4 text-muted text-right"},Object(i.h)(n.c,{id:"users.snapchat"},"Snapchat")),Object(i.h)("div",{class:"col-8"},c.snapchat)),Object(i.h)("div",{class:"col-4 text-muted text-right"},Object(i.h)(n.c,{id:"users.settings-hide-profile"},"Skjul profilen")),Object(i.h)("div",{class:"col-8"},Object(i.h)("div",{class:"custom-control custom-switch"},Object(i.h)("input",{type:"checkbox",class:"custom-control-input",id:"settingsHideProfile",onInput:function(){return t.toggleSetting("hideProfile")},checked:O.hideProfile}),Object(i.h)("label",{class:"custom-control-label",for:"settingsHideProfile"})),Object(i.h)("small",{class:"text-muted"},Object(i.h)(n.c,{id:"users.settings-hide-profile-help"},"Det vil snart være mulig å bli venner med andre her på The Musher. Dersom du ikke vil at andre skal kunne finne deg, så kan du skjule profilen din her."))),Object(i.h)("div",{class:"col-4 text-muted text-right"},Object(i.h)(n.c,{id:"users.settings-hide-invite"},"Skjul invitasjonsboks")),Object(i.h)("div",{class:"col-8"},Object(i.h)("div",{class:"custom-control custom-switch"},Object(i.h)("input",{type:"checkbox",class:"custom-control-input",id:"settingsHideInvitation",onInput:function(){return t.toggleSetting("hideInvite")},checked:O.hideInvite}),Object(i.h)("label",{class:"custom-control-label",for:"settingsHideInvitation"})),Object(i.h)("small",{class:"text-muted"},Object(i.h)(n.c,{id:"users.settings-hide-invite-help"},"Skjul invitasjonsboksen på forsiden.")))),Object(i.h)("div",{class:"row border-top mt-5 pt-5"},Object(i.h)("div",{class:"col-12"},Object(i.h)("div",null,Object(i.h)("img",{src:"./assets/strava_logo_orange.png",style:"max-height: 100px;"}))),c.strava&&c.strava.access_token?Object(i.h)(e,null,Object(i.h)("div",{class:"col-12"},Object(i.h)("h5",null,Object(i.h)(n.c,{id:"users.strava-connected"},"Connected to Strava!"))),Object(i.h)("div",{class:"col-4 text-right text-muted"},Object(i.h)(n.c,{id:"users.strava-id"},"id"),":"),Object(i.h)("div",{class:"col-8"}," ",c.strava.athlete.id),Object(i.h)("div",{class:"col-4 text-right text-muted"},Object(i.h)(n.c,{id:"users.strava-username"},"username"),":"),Object(i.h)("div",{class:"col-8"}," ",c.strava.athlete.username),Object(i.h)("div",{class:"col-4 text-right text-muted"},Object(i.h)(n.c,{id:"users.strava-profile"},"profile"),":"),Object(i.h)("div",{class:"col-8"}," ",Object(i.h)("img",{src:c.strava.athlete.profile})),Object(i.h)("div",{class:"col-12 mt-2"},Object(i.h)("a",{href:p+"/api/strava/request-access?token="+g,native:!0},Object(i.h)(n.c,{id:"users.strava-reconnect"},"Reconnect to Strava")))):Object(i.h)(e,null,Object(i.h)("div",{class:"col-12 mt-2"},Object(i.h)("a",{class:"btn btn-primary",href:p+"/api/strava/request-access?token="+g,native:!0},Object(i.h)(n.c,{id:"users.strava-connect"},"Connect to Strava"))))),Object(i.h)("div",{class:"row border-top mt-5 pt-5"},Object(i.h)("div",{class:"col-12"},Object(i.h)("div",null,Object(i.h)("img",{src:"./assets/garmin-connect.png",style:"height: 100px;"}))),c.garmin&&c.garmin.access&&c.garmin.access.oauth_token?Object(i.h)(e,null,Object(i.h)("div",{class:"col-12"},Object(i.h)("h5",null,Object(i.h)(n.c,{id:"users.garmin-connected"},"Connected to Garmin Connect!"))),Object(i.h)("div",{class:"col-12 mt-2"},Object(i.h)("a",{href:p+"/api/garmin/request-access?token="+g,native:!0},Object(i.h)(n.c,{id:"users.garmin-reconnect"},"Reconnect to Garmin Connect")))):Object(i.h)(e,null,Object(i.h)("div",{class:"col-12 mt-2"},Object(i.h)("a",{class:"btn btn-primary",href:p+"/api/garmin/request-access?token="+g,native:!0},Object(i.h)(n.c,{id:"users.garmin-connect"},"Connect to Garmin Connect"))))))},s}(i.Component))||c;t.default=m}.call(this,s("hosL").Fragment)}}]);
//# sourceMappingURL=route-users.chunk.85cad.js.map