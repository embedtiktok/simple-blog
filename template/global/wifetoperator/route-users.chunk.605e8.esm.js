(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{ztHd:function(e,s,r){"use strict";r.r(s);var t,o=r("hosL"),i=(r("Utv1"),r("/eY4")),a=r("tJLP"),n=r("Cjoz");let l=Object(i.a)(t=class extends o.Component{constructor(e){super(e),this.resetEmailMessage=()=>{const{userStore:e}=this.props.stores;e.updateField("emailMessage",""),e.updateField("emailMessageIcon","")},this.resetEmailError=()=>{const{userStore:e}=this.props.stores;e.updateField("emailError",""),e.updateField("emailErrorIcon","")},this.state={time:Date.now(),count:10}}componentDidMount(){const{userStore:e}=this.props.stores;this.props.verifyEmailToken&&e.verifyEmail({token:this.props.verifyEmailToken})}render(){const{userStore:e}=this.props.stores,{user:s,emailMessage:r,emailError:t,emailMessageIcon:i,emailErrorIcon:l}=e,{email:c}=s;return Object(o.h)("div",{class:"container-fluid"},Object(o.h)("div",{class:"row"},Object(o.h)("div",{class:"col-12"},Object(o.h)(a.a,{message:t,icon:l,remove:this.resetEmailError}),Object(o.h)(n.a,{message:r,icon:i,remove:this.resetEmailMessage}),Object(o.h)("h1",null,"Users: ",c),Object(o.h)("p",null,"This is the user profile for a user named ",c,"."))))}})||t;s.default=l}}]);
//# sourceMappingURL=route-users.chunk.605e8.esm.js.map