/*! For license information please see route-home.chunk.411b0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+1Jk":function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t.indexOf(n=i[o])>=0||(r[n]=e[n]);return r}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){N.options.__h&&N.options.__h(V);var t=V.__H||(V.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function u(e){return s(v,e)}function s(e,t,n){var o=l(Z++);return o.__c||(o.__c=V,o.__=[n?n(t):v(void 0,t),function(t){var n=e(o.__[0],t);o.__[0]!==n&&(o.__[0]=n,o.__c.setState({}))}]),o.__}function p(e,t){var n=l(Z++);y(n.__H,t)&&(n.__=e,n.__H=t,V.__h.push(n))}function c(e,t){var n=l(Z++);return y(n.__H,t)?(n.__H=t,n.__h=e,n.__=e()):n.__}function f(e){var t=V.context[e.__c];if(!t)return e.__;var n=l(Z++);return null==n.__&&(n.__=!0,t.sub(V)),t.props.value}function h(){F.some((function(e){if(e.__P)try{e.__H.__h.forEach(m),e.__H.__h.forEach(d),e.__H.__h=[]}catch(t){return N.options.__e(t,e.__v),!0}})),F=[]}function m(e){e.t&&e.t()}function d(e){var t=e.__();"function"==typeof t&&(e.t=t)}function y(e,t){return!e||t.some((function(t,n){return t!==e[n]}))}function v(e,t){return"function"==typeof t?t(e):t}function b(e,t){for(var n in t)e[n]=t[n];return e}function _(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var o in t)if("__source"!==o&&e[o]!==t[o])return!0;return!1}function g(e){function t(t){var n=b({},t);return delete n.ref,e(n,t.ref)}return t.prototype.isReactComponent=t.t=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}function O(e){return e&&((e=b({},e)).__c=null,e.__k=e.__k&&e.__k.map(O)),e}function E(){this.__u=0,this.o=null,this.__b=null}function C(e){var t=e.__.__c;return t&&t.u&&t.u(e)}function L(){this.i=null,this.l=null}function w(e){var t=this,n=e.container,o=Object(N.createElement)(Q,{context:t.context},e.vnode);return t.s&&t.s!==n&&(t.v.parentNode&&t.s.removeChild(t.v),Object(N._unmount)(t.h),t.p=!1),e.vnode?t.p?(n.__k=t.__k,Object(N.render)(o,n),t.__k=n.__k):(t.v=document.createTextNode(""),Object(N.hydrate)("",n),n.appendChild(t.v),t.p=!0,t.s=n,Object(N.render)(o,n,t.v),t.__k=t.v.__k):t.p&&(t.v.parentNode&&t.s.removeChild(t.v),Object(N._unmount)(t.h)),t.h=o,t.componentWillUnmount=function(){t.v.parentNode&&t.s.removeChild(t.v),Object(N._unmount)(t.h)},null}function j(e,t){return Object(N.createElement)(w,{vnode:e,container:t})}function x(e,t,n){if(null==t.__k)for(;t.firstChild;)t.removeChild(t.firstChild);return Object(N.render)(e,t),"function"==typeof n&&n(),e?e.__c:null}function S(e,t){e["UNSAFE_"+t]&&!e[t]&&Object.defineProperty(e,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(e){this["UNSAFE_"+t]=e}})}function k(e){return!!e&&e.$$typeof===ee}function P(e){return k(e)?N.cloneElement.apply(null,arguments):e}function M(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return Object.keys(e).reduce((function(t,o){return-1===n.indexOf(o)&&(t[o]=e[o]),t}),{})}function U(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.r(t);var Z,V,D,N=n("hosL"),A=n("/eY4"),z=(n("Gblv"),n("Fcif")),R=n("ivZ3"),$=n.n(R),F=[],B=N.options.__r,W=N.options.diffed,T=N.options.__c,H=N.options.unmount;N.options.__r=function(e){B&&B(e),Z=0,(V=e.__c).__H&&(V.__H.__h.forEach(m),V.__H.__h.forEach(d),V.__H.__h=[])},N.options.diffed=function(e){W&&W(e);var t=e.__c;if(t){var n=t.__H;n&&n.__h.length&&(1!==F.push(t)&&D===N.options.requestAnimationFrame||((D=N.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(o),cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);"undefined"!=typeof window&&(t=requestAnimationFrame(n))})(h))}},N.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(m),e.__h=e.__h.filter((function(e){return!e.__||d(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],N.options.__e(n,e.__v)}})),T&&T(e,t)},N.options.unmount=function(e){H&&H(e);var t=e.__c;if(t){var n=t.__H;if(n)try{n.__.forEach((function(e){return e.t&&e.t()}))}catch(e){N.options.__e(e,t.__v)}}};var I=function(e){function t(t){var n;return(n=e.call(this,t)||this).isPureReactComponent=!0,n}var n,o;return o=e,(n=t).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o,t.prototype.shouldComponentUpdate=function(e,t){return _(this.props,e)||_(this.state,t)},t}(N.Component),G=N.options.__b;N.options.__b=function(e){e.type&&e.type.t&&e.ref&&(e.props.ref=e.ref,e.ref=null),G&&G(e)};var J=function(e,t){return e?Object(N.toChildArray)(e).reduce((function(e,n,o){return e.concat(t(n,o))}),[]):null},q={map:J,forEach:J,count:function(e){return e?Object(N.toChildArray)(e).length:0},only:function(e){if(1!==(e=Object(N.toChildArray)(e)).length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:N.toChildArray},K=N.options.__e;N.options.__e=function(e,t,n){if(e.then)for(var o,r=t;r=r.__;)if((o=r.__c)&&o.__c)return o.__c(e,t.__c);K(e,t,n)},(E.prototype=new N.Component).__c=function(e,t){var n=this;null==n.o&&(n.o=[]),n.o.push(t);var o=C(n.__v),r=!1,i=function(){r||(r=!0,o?o(a):a())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){i(),t.__c&&t.__c()};var a=function(){var e;if(!--n.__u)for(n.__v.__k[0]=n.state.u,n.setState({u:n.__b=null});e=n.o.pop();)e.forceUpdate()};n.__u++||n.setState({u:n.__b=n.__v.__k[0]}),e.then(i,i)},E.prototype.render=function(e,t){return this.__b&&(this.__v.__k[0]=O(this.__b),this.__b=null),[Object(N.createElement)(N.Component,null,t.u?null:e.children),t.u&&e.fallback]};var Y=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};(L.prototype=new N.Component).u=function(e){var t=this,n=C(t.__v),o=t.l.get(e);return o[0]++,function(r){var i=function(){t.props.revealOrder?(o.push(r),Y(t,e,o)):r()};n?n(i):i()}},L.prototype.render=function(e){this.i=null,this.l=new Map;var t=Object(N.toChildArray)(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},L.prototype.componentDidUpdate=L.prototype.componentDidMount=function(){var e=this;e.l.forEach((function(t,n){Y(e,n,t)}))};var Q=function(){function e(){}var t=e.prototype;return t.getChildContext=function(){return this.props.context},t.render=function(e){return e.children},e}(),X=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;N.Component.prototype.isReactComponent={};var ee="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,te=N.options.event;N.options.event=function(e){te&&(e=te(e)),e.persist=function(){};var t=!1,n=!1,o=e.stopPropagation;e.stopPropagation=function(){o.call(e),t=!0};var r=e.preventDefault;return e.preventDefault=function(){r.call(e),n=!0},e.isPropagationStopped=function(){return t},e.isDefaultPrevented=function(){return n},e.nativeEvent=e};var ne={configurable:!0,get:function(){return this.class}},oe=N.options.vnode;N.options.vnode=function(e){e.$$typeof=ee;var t=e.type,n=e.props;if(n.class!=n.className&&(ne.enumerable="className"in n,null!=n.className&&(n.class=n.className),Object.defineProperty(n,"className",ne)),"function"!=typeof t){var o,r,i;for(i in n.defaultValue&&void 0!==n.value&&(n.value||0===n.value||(n.value=n.defaultValue),delete n.defaultValue),Array.isArray(n.value)&&n.multiple&&"select"===t&&(Object(N.toChildArray)(n.children).forEach((function(e){-1!=n.value.indexOf(e.props.value)&&(e.props.selected=!0)})),delete n.value),n)if(o=X.test(i))break;if(o)for(i in r=e.props={},n)r[X.test(i)?i.replace(/([A-Z0-9])/,"-$1").toLowerCase():i]=n[i]}!function(){var t=e.type,n=e.props;if(n&&"string"==typeof t){var o={};for(var r in n)/^on(Ani|Tra|Tou)/.test(r)&&(n[r.toLowerCase()]=n[r],delete n[r]),o[r.toLowerCase()]=r;if(o.ondoubleclick&&(n.ondblclick=n[o.ondoubleclick],delete n[o.ondoubleclick]),o.onbeforeinput&&(n.onbeforeinput=n[o.onbeforeinput],delete n[o.onbeforeinput]),o.onchange&&("textarea"===t||"input"===t.toLowerCase()&&!/^fil|che|ra/i.test(n.type))){var i=o.oninput||"oninput";n[i]||(n[i]=n[o.onchange],delete n[o.onchange])}}}(),"function"==typeof t&&!t.m&&t.prototype&&(S(t.prototype,"componentWillMount"),S(t.prototype,"componentWillReceiveProps"),S(t.prototype,"componentWillUpdate"),t.m=!0),oe&&oe(e)};var re={useState:u,useReducer:s,useEffect:function(e,t){var n=l(Z++);y(n.__H,t)&&(n.__=e,n.__H=t,V.__H.__h.push(n))},useLayoutEffect:p,useRef:function(e){return c((function(){return{current:e}}),[])},useImperativeHandle:function(e,t,n){p((function(){"function"==typeof e?e(t()):e&&(e.current=t())}),null==n?n:n.concat(e))},useMemo:c,useCallback:function(e,t){return c((function(){return e}),t)},useContext:f,useDebugValue:function(e,t){N.options.useDebugValue&&N.options.useDebugValue(t?t(e):e)},version:"16.8.0",Children:q,render:x,hydrate:x,unmountComponentAtNode:function(e){return!!e.__k&&(Object(N.render)(null,e),!0)},createPortal:j,createElement:N.createElement,createContext:N.createContext,createFactory:function(e){return N.createElement.bind(null,e)},cloneElement:P,createRef:N.createRef,Fragment:N.Fragment,isValidElement:k,findDOMNode:function(e){return e&&(e.base||1===e.nodeType&&e)||null},Component:N.Component,PureComponent:I,memo:function(e,t){function n(e){var n=this.props.ref,o=n==e.ref;return!o&&n&&(n.call?n(null):n.current=null),t?!t(this.props,e)||!o:_(this.props,e)}function o(t){return this.shouldComponentUpdate=n,Object(N.createElement)(e,b({},t))}return o.prototype.isReactComponent=!0,o.displayName="Memo("+(e.displayName||e.name)+")",o.t=!0,o},forwardRef:g,unstable_batchedUpdates:function(e,t){return e(t)},Suspense:E,SuspenseList:L,lazy:function(e){function t(t){if(n||(n=e()).then((function(e){o=e.default||e}),(function(e){r=e})),r)throw r;if(!o)throw n;return Object(N.createElement)(o,t)}var n,o,r;return t.displayName="Lazy",t.t=!0,t}},ie=n("GeWT"),ae=n.n(ie),le=Object(N.createContext)({}),ue=le.Consumer,se=le.Provider,pe=function(e){var t=function(t,n){return re.createElement(ue,null,(function(o){return re.createElement(e,Object(z.a)({},t,{leaflet:o,ref:n}))}))};t.displayName="Leaflet("+(e.displayName||e.name||"Component")+")";var n=g(t);return ae()(n,e),n},ce=function(e){function t(t){var n;return a(r(n=e.call(this,t)||this),"leafletElement",void 0),n.leafletElement=n.createLeafletElement(n.props),n}i(t,e);var n=t.prototype;return n.createLeafletElement=function(){throw new Error("createLeafletElement() must be implemented")},n.updateLeafletElement=function(e,t){t.position!==e.position&&this.leafletElement.setPosition(t.position)},n.componentDidMount=function(){this.leafletElement.addTo(this.props.leaflet.map)},n.componentDidUpdate=function(e){this.updateLeafletElement(e,this.props)},n.componentWillUnmount=function(){this.leafletElement.remove()},n.render=function(){return null},t}(N.Component),fe=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return a(r(t=e.call.apply(e,[this].concat(o))||this),"contextValue",void 0),a(r(t),"layer",void 0),t}i(t,e);var n=t.prototype;return n.componentDidUpdate=function(e){var t=e.checked;null!=this.props.leaflet.map&&(!0!==this.props.checked||null!=t&&!1!==t?!0!==t||null!=this.props.checked&&!1!==this.props.checked||this.props.leaflet.map.removeLayer(this.layer):this.props.leaflet.map.addLayer(this.layer))},n.componentWillUnmount=function(){this.props.removeLayerControl(this.layer)},n.addLayer=function(){throw new Error("Must be implemented in extending class")},n.removeLayer=function(e){this.props.removeLayer(e)},n.render=function(){var e=this.props.children;return e?re.createElement(se,{value:this.contextValue},e):null},t}(N.Component),he=function(e){function t(t){var n;return a(r(n=e.call(this,t)||this),"addLayer",(function(e){n.layer=e;var t=n.props;(0,t.addBaseLayer)(e,t.name,t.checked)})),n.contextValue=Object(z.a)({},t.leaflet,{layerContainer:{addLayer:n.addLayer.bind(r(n)),removeLayer:n.removeLayer.bind(r(n))}}),n}return i(t,e),t}(fe),me=function(e){function t(t){var n;return a(r(n=e.call(this,t)||this),"addLayer",(function(e){n.layer=e;var t=n.props;(0,t.addOverlay)(e,t.name,t.checked)})),n.contextValue=Object(z.a)({},t.leaflet,{layerContainer:{addLayer:n.addLayer.bind(r(n)),removeLayer:n.removeLayer.bind(r(n))}}),n}return i(t,e),t}(fe),de=pe(function(e){function t(t){var n;return a(r(n=e.call(this,t)||this),"controlProps",void 0),n.controlProps={addBaseLayer:n.addBaseLayer.bind(r(n)),addOverlay:n.addOverlay.bind(r(n)),leaflet:t.leaflet,removeLayer:n.removeLayer.bind(r(n)),removeLayerControl:n.removeLayerControl.bind(r(n))},n}i(t,e);var n=t.prototype;return n.createLeafletElement=function(e){var t=o(e,["children"]);return new R.Control.Layers(void 0,void 0,t)},n.updateLeafletElement=function(t,n){e.prototype.updateLeafletElement.call(this,t,n),n.collapsed!==t.collapsed&&(!0===n.collapsed?this.leafletElement.collapse():this.leafletElement.expand())},n.componentWillUnmount=function(){var t=this;setTimeout((function(){e.prototype.componentWillUnmount.call(t)}),0)},n.addBaseLayer=function(e,t,n){void 0===n&&(n=!1),n&&null!=this.props.leaflet.map&&this.props.leaflet.map.addLayer(e),this.leafletElement.addBaseLayer(e,t)},n.addOverlay=function(e,t,n){void 0===n&&(n=!1),n&&null!=this.props.leaflet.map&&this.props.leaflet.map.addLayer(e),this.leafletElement.addOverlay(e,t)},n.removeLayer=function(e){null!=this.props.leaflet.map&&this.props.leaflet.map.removeLayer(e)},n.removeLayerControl=function(e){this.leafletElement.removeLayer(e)},n.render=function(){var e=this,t=q.map(this.props.children,(function(t){return t?P(t,e.controlProps):null}));return re.createElement(N.Fragment,null,t)},t}(ce));de.BaseLayer=he,de.Overlay=me;var ye=de,ve=/^on(.+)$/i,be=function(e){function t(t){var n;return a(r(n=e.call(this,t)||this),"_leafletEvents",void 0),a(r(n),"leafletElement",void 0),n._leafletEvents=n.extractLeafletEvents(t),n}i(t,e);var n=t.prototype;return n.componentDidMount=function(){this.bindLeafletEvents(this._leafletEvents)},n.componentDidUpdate=function(){this._leafletEvents=this.bindLeafletEvents(this.extractLeafletEvents(this.props),this._leafletEvents)},n.componentWillUnmount=function(){var e=this,t=this.leafletElement;t&&Object.keys(this._leafletEvents).forEach((function(n){t.off(n,e._leafletEvents[n])}))},n.extractLeafletEvents=function(e){return Object.keys(e).reduce((function(t,n){ve.test(n)&&(null!=e[n]&&(t[n.replace(ve,(function(e,t){return t.toLowerCase()}))]=e[n]));return t}),{})},n.bindLeafletEvents=function(e,t){void 0===e&&(e={}),void 0===t&&(t={});var n=this.leafletElement;if(null==n||null==n.on)return{};var o=Object(z.a)({},t);return Object.keys(t).forEach((function(r){null!=e[r]&&t[r]===e[r]||(delete o[r],n.off(r,t[r]))})),Object.keys(e).forEach((function(r){null!=t[r]&&e[r]===t[r]||(o[r]=e[r],n.on(r,e[r]))})),o},n.fireLeafletEvent=function(e,t){var n=this.leafletElement;n&&n.fire(e,t)},t}(N.Component),_e=function(e){return void 0===e&&(e=""),e.split(" ").filter(Boolean)},ge=function(e,t,n){null!=e&&n!==t&&(null!=t&&t.length>0&&function(e,t){_e(t).forEach((function(t){R.DomUtil.removeClass(e,t)}))}(e,t),null!=n&&n.length>0&&function(e,t){_e(t).forEach((function(t){R.DomUtil.addClass(e,t)}))}(e,n))},Oe=["children","className","id","style","useFlyTo","whenReady"],Ee=function(e){return Array.isArray(e)?[e[0],e[1]]:[e.lat,e.lon?e.lon:e.lng]},Ce=function(e){function t(t){var n;return a(r(n=e.call(this,t)||this),"className",void 0),a(r(n),"contextValue",void 0),a(r(n),"container",void 0),a(r(n),"viewport",{center:void 0,zoom:void 0}),a(r(n),"_ready",!1),a(r(n),"_updating",!1),a(r(n),"onViewportChange",(function(){var e=n.leafletElement.getCenter();n.viewport={center:e?[e.lat,e.lng]:void 0,zoom:n.leafletElement.getZoom()},n.props.onViewportChange&&!n._updating&&n.props.onViewportChange(n.viewport)})),a(r(n),"onViewportChanged",(function(){n.props.onViewportChanged&&!n._updating&&n.props.onViewportChanged(n.viewport)})),a(r(n),"bindContainer",(function(e){n.container=e})),n.className=t.className,n}i(t,e);var n=t.prototype;return n.createLeafletElement=function(e){var t=e.viewport,n=o(e,["viewport"]);return t&&(t.center&&(n.center=t.center),"number"==typeof t.zoom&&(n.zoom=t.zoom)),new R.Map(this.container,n)},n.updateLeafletElement=function(e,t){this._updating=!0;var n=t.bounds,o=t.boundsOptions,r=t.boxZoom,i=t.center,a=t.doubleClickZoom,l=t.dragging,u=t.keyboard,s=t.maxBounds,p=t.scrollWheelZoom,c=t.tap,f=t.touchZoom,h=t.useFlyTo,m=t.viewport,d=t.zoom;if(ge(this.container,e.className,t.className),m&&m!==e.viewport){var y=m.center?m.center:i,v=null==m.zoom?d:m.zoom;!0===h?this.leafletElement.flyTo(y,v,this.getZoomPanOptions(t)):this.leafletElement.setView(y,v,this.getZoomPanOptions(t))}else i&&this.shouldUpdateCenter(i,e.center)?!0===h?this.leafletElement.flyTo(i,d,this.getZoomPanOptions(t)):this.leafletElement.setView(i,d,this.getZoomPanOptions(t)):"number"==typeof d&&d!==e.zoom&&(null==e.zoom?this.leafletElement.setView(i,d,this.getZoomPanOptions(t)):this.leafletElement.setZoom(d,this.getZoomPanOptions(t)));s&&this.shouldUpdateBounds(s,e.maxBounds)&&this.leafletElement.setMaxBounds(s),n&&(this.shouldUpdateBounds(n,e.bounds)||o!==e.boundsOptions)&&(!0===h?this.leafletElement.flyToBounds(n,this.getFitBoundsOptions(t)):this.leafletElement.fitBounds(n,this.getFitBoundsOptions(t))),r!==e.boxZoom&&(!0===r?this.leafletElement.boxZoom.enable():this.leafletElement.boxZoom.disable()),a!==e.doubleClickZoom&&(!0===a||"string"==typeof a?(this.leafletElement.options.doubleClickZoom=a,this.leafletElement.doubleClickZoom.enable()):this.leafletElement.doubleClickZoom.disable()),l!==e.dragging&&(!0===l?this.leafletElement.dragging.enable():this.leafletElement.dragging.disable()),u!==e.keyboard&&(!0===u?this.leafletElement.keyboard.enable():this.leafletElement.keyboard.disable()),p!==e.scrollWheelZoom&&(!0===p||"string"==typeof p?(this.leafletElement.options.scrollWheelZoom=p,this.leafletElement.scrollWheelZoom.enable()):this.leafletElement.scrollWheelZoom.disable()),c!==e.tap&&(!0===c?this.leafletElement.tap.enable():this.leafletElement.tap.disable()),f!==e.touchZoom&&(!0===f||"string"==typeof f?(this.leafletElement.options.touchZoom=f,this.leafletElement.touchZoom.enable()):this.leafletElement.touchZoom.disable()),this._updating=!1},n.getZoomPanOptions=function(e){return{animate:e.animate,duration:e.duration,easeLinearity:e.easeLinearity,noMoveStart:e.noMoveStart}},n.getFitBoundsOptions=function(e){var t=this.getZoomPanOptions(e);return Object(z.a)({},t,{},e.boundsOptions)},n.componentDidMount=function(){var t=M.apply(void 0,[this.props].concat(Oe));this.leafletElement=this.createLeafletElement(t),this.leafletElement.on("move",this.onViewportChange),this.leafletElement.on("moveend",this.onViewportChanged),null!=t.bounds&&this.leafletElement.fitBounds(t.bounds,this.getFitBoundsOptions(t)),this.contextValue={layerContainer:this.leafletElement,map:this.leafletElement},e.prototype.componentDidMount.call(this),this.forceUpdate()},n.componentDidUpdate=function(t){!1===this._ready&&(this._ready=!0,this.props.whenReady&&this.leafletElement.whenReady(this.props.whenReady)),e.prototype.componentDidUpdate.call(this,t),this.updateLeafletElement(t,this.props)},n.componentWillUnmount=function(){e.prototype.componentWillUnmount.call(this),this.leafletElement.off("move",this.onViewportChange),this.leafletElement.off("moveend",this.onViewportChanged),!0===this.props.preferCanvas?(this.leafletElement._initEvents(!0),this.leafletElement._stop()):this.leafletElement.remove()},n.shouldUpdateCenter=function(e,t){return!t||(e=Ee(e),t=Ee(t),e[0]!==t[0]||e[1]!==t[1])},n.shouldUpdateBounds=function(e,t){return!t||!Object(R.latLngBounds)(e).equals(Object(R.latLngBounds)(t))},n.render=function(){return re.createElement("div",{className:this.className,id:this.props.id,ref:this.bindContainer,style:this.props.style},this.contextValue?re.createElement(se,{value:this.contextValue},this.props.children):null)},t}(be),Le=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t.prototype.getOptions=function(e){return null!=e.pane?e:null!=e.leaflet&&null!=e.leaflet.pane?Object(z.a)({},e,{pane:e.leaflet.pane}):e},t}(be),we=function(e){function t(t){var n;return a(r(n=e.call(this,t)||this),"contextValue",void 0),a(r(n),"leafletElement",void 0),n.leafletElement=n.createLeafletElement(t),n}i(t,e);var n,o,l,u=t.prototype;return u.createLeafletElement=function(){throw new Error("createLeafletElement() must be implemented")},u.updateLeafletElement=function(){},u.componentDidMount=function(){e.prototype.componentDidMount.call(this),this.layerContainer.addLayer(this.leafletElement)},u.componentDidUpdate=function(t){if(e.prototype.componentDidUpdate.call(this,t),this.props.attribution!==t.attribution){var n=this.props.leaflet.map;null!=n&&null!=n.attributionControl&&(n.attributionControl.removeAttribution(t.attribution),n.attributionControl.addAttribution(this.props.attribution))}this.updateLeafletElement(t,this.props)},u.componentWillUnmount=function(){e.prototype.componentWillUnmount.call(this),this.layerContainer.removeLayer(this.leafletElement)},u.render=function(){var e=this.props.children;return null==e?null:null==this.contextValue?re.createElement(N.Fragment,null,e):re.createElement(se,{value:this.contextValue},e)},n=t,(o=[{key:"layerContainer",get:function(){return this.props.leaflet.layerContainer||this.props.leaflet.map}}])&&U(n.prototype,o),l&&U(n,l),t}(Le),je=function(e){function t(){return e.apply(this,arguments)||this}i(t,e);var n=t.prototype;return n.createLeafletElement=function(e){return new R.GridLayer(this.getOptions(e))},n.updateLeafletElement=function(e,t){var n=t.opacity,o=t.zIndex;n!==e.opacity&&this.leafletElement.setOpacity(n),o!==e.zIndex&&this.leafletElement.setZIndex(o)},n.getOptions=function(t){var n=Object(z.a)({},e.prototype.getOptions.call(this,t)),o=t.leaflet.map;return null!=o&&(null==n.maxZoom&&null!=o.options.maxZoom&&(n.maxZoom=o.options.maxZoom),null==n.minZoom&&null!=o.options.minZoom&&(n.minZoom=o.options.minZoom)),n},n.render=function(){return null},t}(we),xe=pe(function(e){function t(){return e.apply(this,arguments)||this}i(t,e);var n=t.prototype;return n.createLeafletElement=function(e){return new R.TileLayer(e.url,this.getOptions(e))},n.updateLeafletElement=function(t,n){e.prototype.updateLeafletElement.call(this,t,n),n.url!==t.url&&this.leafletElement.setUrl(n.url)},t}(je)),Se=pe(function(e){function t(){return e.apply(this,arguments)||this}i(t,e);var n=t.prototype;return n.createLeafletElement=function(e){var t=new R.Marker(e.position,this.getOptions(e));return this.contextValue=Object(z.a)({},e.leaflet,{popupContainer:t}),t},n.updateLeafletElement=function(e,t){t.position!==e.position&&this.leafletElement.setLatLng(t.position),t.icon!==e.icon&&this.leafletElement.setIcon(t.icon),t.zIndexOffset!==e.zIndexOffset&&this.leafletElement.setZIndexOffset(t.zIndexOffset),t.opacity!==e.opacity&&this.leafletElement.setOpacity(t.opacity),t.draggable!==e.draggable&&(!0===t.draggable?this.leafletElement.dragging.enable():this.leafletElement.dragging.disable())},n.render=function(){var e=this.props.children;return null==e||null==this.contextValue?null:re.createElement(se,{value:this.contextValue},e)},t}(we)),ke=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return a(r(t=e.call.apply(e,[this].concat(o))||this),"onPopupOpen",(function(e){e.popup===t.leafletElement&&t.onOpen()})),a(r(t),"onPopupClose",(function(e){e.popup===t.leafletElement&&t.onClose()})),a(r(t),"onRender",(function(){!1!==t.props.autoPan&&t.leafletElement.isOpen()&&(t.leafletElement._map&&t.leafletElement._map._panAnim&&(t.leafletElement._map._panAnim=void 0),t.leafletElement._adjustPan())})),t}i(t,e);var n=t.prototype;return n.getOptions=function(t){return Object(z.a)({},e.prototype.getOptions.call(this,t),{autoPan:!1})},n.createLeafletElement=function(e){var t=this.getOptions(e);return t.autoPan=!1!==e.autoPan,new R.Popup(t,e.leaflet.popupContainer)},n.updateLeafletElement=function(e,t){t.position!==e.position&&this.leafletElement.setLatLng(t.position)},n.componentDidMount=function(){var e=this.props.position,t=this.props.leaflet,n=t.map,o=t.popupContainer,r=this.leafletElement;null!=n&&n.on({popupopen:this.onPopupOpen,popupclose:this.onPopupClose}),o?o.bindPopup(r):(e&&r.setLatLng(e),r.openOn(n))},n.componentWillUnmount=function(){var t=this.props.leaflet.map;null!=t&&(t.off({popupopen:this.onPopupOpen,popupclose:this.onPopupClose}),t.removeLayer(this.leafletElement)),e.prototype.componentWillUnmount.call(this)},t}(function(e){function t(t){var n;return a(r(n=e.call(this,t)||this),"onClose",(function(){n.props.onClose&&n.props.onClose()})),a(r(n),"onOpen",(function(){n.forceUpdate(),n.props.onOpen&&n.props.onOpen()})),n.leafletElement=n.createLeafletElement(t),n}i(t,e);var n=t.prototype;return n.createLeafletElement=function(){throw new Error("createLeafletElement() must be implemented")},n.updateLeafletElement=function(){},n.componentDidUpdate=function(e){ge(this.leafletElement._container,e.className,this.props.className),this.updateLeafletElement(e,this.props),this.leafletElement.isOpen()&&(this.leafletElement.update(),this.onRender())},n.onRender=function(){},n.render=function(){return this.leafletElement._contentNode?j(this.props.children,this.leafletElement._contentNode):null},t}(Le));a(ke,"defaultProps",{pane:"popupPane"});var Pe,Me=pe(ke),Ue=pe(function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t.prototype.createLeafletElement=function(e){var t=new R.LayerGroup([],this.getOptions(e));return this.contextValue=Object(z.a)({},e.leaflet,{layerContainer:t}),t},t}(we)),Ze=n("OoM2"),Ve=n.n(Ze),De=["stroke","color","weight","opacity","lineCap","lineJoin","dashArray","dashOffset","fill","fillColor","fillOpacity","fillRule","bubblingMouseEvents","renderer","className","interactive","pane","attribution"],Ne=function(e){function t(t){var n;return null==(n=e.call(this,t)||this).contextValue&&(n.contextValue=Object(z.a)({},t.leaflet,{popupContainer:n.leafletElement})),n}i(t,e);var n=t.prototype;return n.componentDidUpdate=function(t){e.prototype.componentDidUpdate.call(this,t),this.setStyleIfChanged(t,this.props)},n.getPathOptions=function(e){return t=e,De.reduce((function(e,n){return void 0!==t[n]&&(e[n]=t[n]),e}),{});var t},n.setStyle=function(e){void 0===e&&(e={}),this.leafletElement.setStyle(e)},n.setStyleIfChanged=function(e,t){var n=this.getPathOptions(t);Ve()(n,this.getPathOptions(e))||this.setStyle(n)},t}(we),Ae=pe(function(e){function t(){return e.apply(this,arguments)||this}i(t,e);var n=t.prototype;return n.createLeafletElement=function(e){var t=e.center,n=e.radius,r=o(e,["center","radius"]);return new R.Circle(t,n,this.getOptions(r))},n.updateLeafletElement=function(e,t){t.center!==e.center&&this.leafletElement.setLatLng(t.center),t.radius!==e.radius&&this.leafletElement.setRadius(t.radius)},t}(Ne)),ze=pe(function(e){function t(){return e.apply(this,arguments)||this}i(t,e);var n=t.prototype;return n.createLeafletElement=function(e){var t=new R.FeatureGroup(this.getOptions(e));return this.contextValue=Object(z.a)({},e.leaflet,{layerContainer:t,popupContainer:t}),t},n.componentDidMount=function(){e.prototype.componentDidMount.call(this),this.setStyle(this.props)},t}(Ne)),Re=pe(function(e){function t(){return e.apply(this,arguments)||this}i(t,e);var n=t.prototype;return n.createLeafletElement=function(e){return new R.Rectangle(e.bounds,this.getOptions(e))},n.updateLeafletElement=function(e,t){t.bounds!==e.bounds&&this.leafletElement.setBounds(t.bounds),this.setStyleIfChanged(e,t)},t}(Ne)),$e=pe(function(e){function t(){return e.apply(this,arguments)||this}i(t,e);var n=t.prototype;return n.createLeafletElement=function(e){var t=e.url,n=o(e,["url"]),r=this.getOptions(n),i=o(r,["leaflet"]);return new R.TileLayer.WMS(t,i)},n.updateLeafletElement=function(t,n){e.prototype.updateLeafletElement.call(this,t,n);var r=t.url,i=o(t,["url","opacity","zIndex"]),a=this.getOptions(i),l=o(a,["leaflet"]),u=n.url,s=o(n,["url","opacity","zIndex"]),p=this.getOptions(s),c=o(p,["leaflet"]);u!==r&&this.leafletElement.setUrl(u),Ve()(c,l)||this.leafletElement.setParams(c)},n.getOptions=function(t){var n=e.prototype.getOptions.call(this,t);return Object.keys(n).reduce((function(e,t){return ve.test(t)||(e[t]=n[t]),e}),{})},t}(je)),Fe=pe(function(e){function t(){return e.apply(this,arguments)||this}i(t,e);var n=t.prototype;return n.createLeafletElement=function(e){var t=new R.ImageOverlay(e.url,e.bounds,this.getOptions(e));return this.contextValue=Object(z.a)({},e.leaflet,{popupContainer:t}),t},n.updateLeafletElement=function(e,t){t.url!==e.url&&this.leafletElement.setUrl(t.url),t.bounds!==e.bounds&&this.leafletElement.setBounds(Object(R.latLngBounds)(t.bounds)),t.opacity!==e.opacity&&this.leafletElement.setOpacity(t.opacity),t.zIndex!==e.zIndex&&this.leafletElement.setZIndex(t.zIndex)},t}(we)),Be=n("68RK"),We=(n("A1fj"),n("FA6U")),Te=n.n(We),He=ye.BaseLayer,Ie=ye.Overlay;delete $.a.Icon.Default.prototype._getIconUrl,$.a.Icon.Default.mergeOptions({iconRetinaUrl:n("sqja"),iconUrl:n("Drvj"),shadowUrl:n("K5o1")});var Ge=[52.051959,15.085487],Je=Ge,qe=[[52.051959,15.085487],[52.061959,15.095487]],Ke=[52.061959,15.085487],Ye=Object(A.a)(Pe=function(e){function t(t){var n;return(n=e.call(this,t)||this).mapRef=Object(N.createRef)(),n.onViewportChanged=function(e){console.log("onViewportChanged",e)},n.handleLocationFound=function(e){n.setState({hasLocation:!0,latlng:e.latlng})},n.handleClick=function(e){n.props.stores.appState.setLatlng(e.latlng)},n.state={hasLocation:!1},n.props.stores.waypointStore.load(),n}var n,o;o=e,(n=t).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o;r=t;var r,i=t.prototype;return i.geoJSONStyle=function(){return{color:"#1f2021",weight:1,fillOpacity:.5,fillColor:"#fff2af"}},i.onEachFeature=function(e,t){var n=" <Popup><p>Customizable Popups <br />with feature information.</p><pre>Borough: <br />"+e.properties.name+" "+JSON.stringify(e)+"</pre></Popup>";t.bindPopup(n)},i.render=function(){var e=this.props.stores,t=e.appState.latlng,n=e.waypointStore.waypoints;return Object(N.h)("div",{class:""+Te.a.home,style:"height: 100%;"},Object(N.h)(Ce,{minZoom:6,center:Ge,onClick:this.handleClick,onLocationfound:this.handleLocationFound,ref:this.mapRef,zoom:16,zoomControl:!0,doubleClickZoom:!0,scrollWheelZoom:!0,dragging:!0,animate:!0,easeLinearity:.35,style:"width: 100%; min-height: 500px; height: 100%;",className:"h-100"},Object(N.h)(ye,{position:"topright"},Object(N.h)(He,{checked:!0,name:"OpenStreetMap.Mapnik"},Object(N.h)(xe,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})),Object(N.h)(He,{name:"OpenStreetMap.BlackAndWhite"},Object(N.h)(xe,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"})),Object(N.h)(He,{name:"OpenStreetMap.Carto"},Object(N.h)(xe,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, © <a href="https://carto.com/attribution">CARTO</a>',url:"https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"})),Object(N.h)(He,{name:"OpenStreetMap.Hikemap"},Object(N.h)(xe,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, © wmflabs Hike & Bike',url:"https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png"})),Object(N.h)(He,{name:"OpenStreetMap.Dark"},Object(N.h)(xe,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, © Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',url:"https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"})),Object(N.h)(He,{name:"OpenStreetMap.Hiking"},Object(N.h)(xe,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, © Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',url:" http://{s}.tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png"})),Object(N.h)(Ie,{name:"Marker with popup"},Object(N.h)(Se,{position:Je,icon:Be.a.get("buddhism")},Object(N.h)(Me,null,"A pretty CSS3 popup. ",Object(N.h)("br",null)," Easily customizable."))),Object(N.h)(Ie,{checked:!0,name:"Layer group with circles"},Object(N.h)(Ue,null,Object(N.h)(Ae,{center:Je,fillColor:"blue",radius:200}),Object(N.h)(Ae,{center:Je,fillColor:"red",radius:100,stroke:!1}),Object(N.h)(Ue,null,Object(N.h)(Ae,{center:Ke,color:"green",fillColor:"green",radius:100})))),Object(N.h)(Ie,{name:"Feature group"},Object(N.h)(ze,{color:"purple"},Object(N.h)(Me,null,"Popup in FeatureGroup"),Object(N.h)(Ae,{center:Ke,radius:200}),Object(N.h)(Re,{bounds:qe}))),Object(N.h)(Ie,{name:"Geoportal.gov.pl"},Object(N.h)($e,{layers:"Raster",format:"image/png",transparent:!0,url:"http://mapy.geoportal.gov.pl/wss/service/img/guest/ORTO/MapServer/WMSServer?"})),Object(N.h)(Ie,{name:"Wildfire"},Object(N.h)($e,{layers:"GWIS",format:"image/png",transparent:!0,url:"https://ies-ows.jrc.ec.europa.eu/gwis?language=eng&",attribution:"European Commission, Joint Research Centre"}))),Object(N.h)(Fe,{url:"./assets/515-overlay-v2.png",bounds:[[52.056765505175235,15.068457126617433],[52.04421634105194,15.105557441711428]]}),t&&Object(N.h)(Se,{position:t,draggable:!0,icon:Be.a.get("marker")},Object(N.h)(Me,{position:t},"Current location: ",Object(N.h)("pre",null,JSON.stringify(t,null,2)),Object(N.h)("a",{href:"/profile"},"Add new location"))),n.length>0&&n.map((function(e){return Object(N.h)(Se,{position:[e.lat,e.lng],draggable:!1,icon:Be.a.get(e.icon||"marker")},Object(N.h)(Me,{position:[e.lat,e.lng]},"Ping location: ",Object(N.h)("pre",null,JSON.stringify(e,null,2))))}))))},t}(N.Component))||Pe;t.default=Ye},"9K2m":function(e,t){"use strict";function n(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case i:switch(e=e.type){case f:case h:case l:case s:case u:case d:return e;default:switch(e=e&&e.$$typeof){case c:case m:case b:case v:case p:return e;default:return t}}case a:return t}}}function o(e){return n(e)===h}var r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,l=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,p=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,h=r?Symbol.for("react.concurrent_mode"):60111,m=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,v=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,_=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,O=r?Symbol.for("react.responder"):60118,E=r?Symbol.for("react.scope"):60119;t.AsyncMode=f,t.ConcurrentMode=h,t.ContextConsumer=c,t.ContextProvider=p,t.Element=i,t.ForwardRef=m,t.Fragment=l,t.Lazy=b,t.Memo=v,t.Portal=a,t.Profiler=s,t.StrictMode=u,t.Suspense=d,t.isAsyncMode=function(e){return o(e)||n(e)===f},t.isConcurrentMode=o,t.isContextConsumer=function(e){return n(e)===c},t.isContextProvider=function(e){return n(e)===p},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===i},t.isForwardRef=function(e){return n(e)===m},t.isFragment=function(e){return n(e)===l},t.isLazy=function(e){return n(e)===b},t.isMemo=function(e){return n(e)===v},t.isPortal=function(e){return n(e)===a},t.isProfiler=function(e){return n(e)===s},t.isStrictMode=function(e){return n(e)===u},t.isSuspense=function(e){return n(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===l||e===h||e===s||e===u||e===d||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===v||e.$$typeof===p||e.$$typeof===c||e.$$typeof===m||e.$$typeof===g||e.$$typeof===O||e.$$typeof===E||e.$$typeof===_)},t.typeOf=n},A1fj:function(){},Drvj:function(e,t,n){e.exports=n.p+"2273e3d8ad9264b7daa5bdbf8e6b47f8.png"},FA6U:function(e){e.exports={home:"home__MseGd"}},GeWT:function(e,t,n){"use strict";function o(e){return r.isMemo(e)?l:u[e.$$typeof]||i}var r=n("xVO4"),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};u[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u[r.Memo]=l;var s=Object.defineProperty,p=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(m){var i=h(n);i&&i!==m&&e(t,i,r)}var l=p(n);c&&(l=l.concat(c(n)));for(var u=o(t),d=o(n),y=0;y<l.length;++y){var v=l[y];if(!(a[v]||r&&r[v]||d&&d[v]||u&&u[v])){var b=f(n,v);try{s(t,v,b)}catch(e){}}}}return t}},K5o1:function(e,t,n){e.exports=n.p+"44a526eed258222515aa21eaffd14a96.png"},OoM2:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var o,r,i;if(Array.isArray(t)){if((o=t.length)!=n.length)return!1;for(r=o;0!=r--;)if(!e(t[r],n[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((o=(i=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(r=o;0!=r--;)if(!Object.prototype.hasOwnProperty.call(n,i[r]))return!1;for(r=o;0!=r--;){var a=i[r];if(!e(t[a],n[a]))return!1}return!0}return t!=t&&n!=n}},sqja:function(e,t,n){e.exports=n.p+"401d815dc206b8dc1b17cd0e37695975.png"},xVO4:function(e,t,n){"use strict";e.exports=n("9K2m")}}]);
//# sourceMappingURL=route-home.chunk.411b0.js.map