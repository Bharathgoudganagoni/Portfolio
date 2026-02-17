(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Fm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Sc={exports:{}},Do={},yc={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function e_(){if(Cp)return ht;Cp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.iterator;function x(D){return D===null||typeof D!="object"?null:(D=g&&D[g]||D["@@iterator"],typeof D=="function"?D:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function S(D,se,Re){this.props=D,this.context=se,this.refs=C,this.updater=Re||M}S.prototype.isReactComponent={},S.prototype.setState=function(D,se){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,se,"setState")},S.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _(){}_.prototype=S.prototype;function N(D,se,Re){this.props=D,this.context=se,this.refs=C,this.updater=Re||M}var I=N.prototype=new _;I.constructor=N,T(I,S.prototype),I.isPureReactComponent=!0;var L=Array.isArray,U=Object.prototype.hasOwnProperty,F={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function $(D,se,Re){var Ye,$e={},J=null,ue=null;if(se!=null)for(Ye in se.ref!==void 0&&(ue=se.ref),se.key!==void 0&&(J=""+se.key),se)U.call(se,Ye)&&!O.hasOwnProperty(Ye)&&($e[Ye]=se[Ye]);var Se=arguments.length-2;if(Se===1)$e.children=Re;else if(1<Se){for(var Be=Array(Se),Ne=0;Ne<Se;Ne++)Be[Ne]=arguments[Ne+2];$e.children=Be}if(D&&D.defaultProps)for(Ye in Se=D.defaultProps,Se)$e[Ye]===void 0&&($e[Ye]=Se[Ye]);return{$$typeof:s,type:D,key:J,ref:ue,props:$e,_owner:F.current}}function A(D,se){return{$$typeof:s,type:D.type,key:se,ref:D.ref,props:D.props,_owner:D._owner}}function R(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function H(D){var se={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Re){return se[Re]})}var re=/\/+/g;function Z(D,se){return typeof D=="object"&&D!==null&&D.key!=null?H(""+D.key):se.toString(36)}function fe(D,se,Re,Ye,$e){var J=typeof D;(J==="undefined"||J==="boolean")&&(D=null);var ue=!1;if(D===null)ue=!0;else switch(J){case"string":case"number":ue=!0;break;case"object":switch(D.$$typeof){case s:case e:ue=!0}}if(ue)return ue=D,$e=$e(ue),D=Ye===""?"."+Z(ue,0):Ye,L($e)?(Re="",D!=null&&(Re=D.replace(re,"$&/")+"/"),fe($e,se,Re,"",function(Ne){return Ne})):$e!=null&&(R($e)&&($e=A($e,Re+(!$e.key||ue&&ue.key===$e.key?"":(""+$e.key).replace(re,"$&/")+"/")+D)),se.push($e)),1;if(ue=0,Ye=Ye===""?".":Ye+":",L(D))for(var Se=0;Se<D.length;Se++){J=D[Se];var Be=Ye+Z(J,Se);ue+=fe(J,se,Re,Be,$e)}else if(Be=x(D),typeof Be=="function")for(D=Be.call(D),Se=0;!(J=D.next()).done;)J=J.value,Be=Ye+Z(J,Se++),ue+=fe(J,se,Re,Be,$e);else if(J==="object")throw se=String(D),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return ue}function le(D,se,Re){if(D==null)return D;var Ye=[],$e=0;return fe(D,Ye,"","",function(J){return se.call(Re,J,$e++)}),Ye}function oe(D){if(D._status===-1){var se=D._result;se=se(),se.then(function(Re){(D._status===0||D._status===-1)&&(D._status=1,D._result=Re)},function(Re){(D._status===0||D._status===-1)&&(D._status=2,D._result=Re)}),D._status===-1&&(D._status=0,D._result=se)}if(D._status===1)return D._result.default;throw D._result}var Y={current:null},X={transition:null},de={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:X,ReactCurrentOwner:F};function ie(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:le,forEach:function(D,se,Re){le(D,function(){se.apply(this,arguments)},Re)},count:function(D){var se=0;return le(D,function(){se++}),se},toArray:function(D){return le(D,function(se){return se})||[]},only:function(D){if(!R(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},ht.Component=S,ht.Fragment=n,ht.Profiler=a,ht.PureComponent=N,ht.StrictMode=r,ht.Suspense=p,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,ht.act=ie,ht.cloneElement=function(D,se,Re){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Ye=T({},D.props),$e=D.key,J=D.ref,ue=D._owner;if(se!=null){if(se.ref!==void 0&&(J=se.ref,ue=F.current),se.key!==void 0&&($e=""+se.key),D.type&&D.type.defaultProps)var Se=D.type.defaultProps;for(Be in se)U.call(se,Be)&&!O.hasOwnProperty(Be)&&(Ye[Be]=se[Be]===void 0&&Se!==void 0?Se[Be]:se[Be])}var Be=arguments.length-2;if(Be===1)Ye.children=Re;else if(1<Be){Se=Array(Be);for(var Ne=0;Ne<Be;Ne++)Se[Ne]=arguments[Ne+2];Ye.children=Se}return{$$typeof:s,type:D.type,key:$e,ref:J,props:Ye,_owner:ue}},ht.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:u,_context:D},D.Consumer=D},ht.createElement=$,ht.createFactory=function(D){var se=$.bind(null,D);return se.type=D,se},ht.createRef=function(){return{current:null}},ht.forwardRef=function(D){return{$$typeof:d,render:D}},ht.isValidElement=R,ht.lazy=function(D){return{$$typeof:v,_payload:{_status:-1,_result:D},_init:oe}},ht.memo=function(D,se){return{$$typeof:m,type:D,compare:se===void 0?null:se}},ht.startTransition=function(D){var se=X.transition;X.transition={};try{D()}finally{X.transition=se}},ht.unstable_act=ie,ht.useCallback=function(D,se){return Y.current.useCallback(D,se)},ht.useContext=function(D){return Y.current.useContext(D)},ht.useDebugValue=function(){},ht.useDeferredValue=function(D){return Y.current.useDeferredValue(D)},ht.useEffect=function(D,se){return Y.current.useEffect(D,se)},ht.useId=function(){return Y.current.useId()},ht.useImperativeHandle=function(D,se,Re){return Y.current.useImperativeHandle(D,se,Re)},ht.useInsertionEffect=function(D,se){return Y.current.useInsertionEffect(D,se)},ht.useLayoutEffect=function(D,se){return Y.current.useLayoutEffect(D,se)},ht.useMemo=function(D,se){return Y.current.useMemo(D,se)},ht.useReducer=function(D,se,Re){return Y.current.useReducer(D,se,Re)},ht.useRef=function(D){return Y.current.useRef(D)},ht.useState=function(D){return Y.current.useState(D)},ht.useSyncExternalStore=function(D,se,Re){return Y.current.useSyncExternalStore(D,se,Re)},ht.useTransition=function(){return Y.current.useTransition()},ht.version="18.3.1",ht}var Rp;function Qf(){return Rp||(Rp=1,yc.exports=e_()),yc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function t_(){if(bp)return Do;bp=1;var s=Qf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var v,g={},x=null,M=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(M=p.ref);for(v in p)r.call(p,v)&&!u.hasOwnProperty(v)&&(g[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)g[v]===void 0&&(g[v]=p[v]);return{$$typeof:e,type:d,key:x,ref:M,props:g,_owner:a.current}}return Do.Fragment=n,Do.jsx=f,Do.jsxs=f,Do}var Pp;function n_(){return Pp||(Pp=1,Sc.exports=t_()),Sc.exports}var Oe=n_(),Tr=Qf();const Ar=Fm(Tr);var il={},Mc={exports:{}},Dn={},Ec={exports:{}},Tc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function i_(){return Lp||(Lp=1,(function(s){function e(X,de){var ie=X.length;X.push(de);e:for(;0<ie;){var D=ie-1>>>1,se=X[D];if(0<a(se,de))X[D]=de,X[ie]=se,ie=D;else break e}}function n(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var de=X[0],ie=X.pop();if(ie!==de){X[0]=ie;e:for(var D=0,se=X.length,Re=se>>>1;D<Re;){var Ye=2*(D+1)-1,$e=X[Ye],J=Ye+1,ue=X[J];if(0>a($e,ie))J<se&&0>a(ue,$e)?(X[D]=ue,X[J]=ie,D=J):(X[D]=$e,X[Ye]=ie,D=Ye);else if(J<se&&0>a(ue,ie))X[D]=ue,X[J]=ie,D=J;else break e}}return de}function a(X,de){var ie=X.sortIndex-de.sortIndex;return ie!==0?ie:X.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],v=1,g=null,x=3,M=!1,T=!1,C=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(X){for(var de=n(m);de!==null;){if(de.callback===null)r(m);else if(de.startTime<=X)r(m),de.sortIndex=de.expirationTime,e(p,de);else break;de=n(m)}}function L(X){if(C=!1,I(X),!T)if(n(p)!==null)T=!0,oe(U);else{var de=n(m);de!==null&&Y(L,de.startTime-X)}}function U(X,de){T=!1,C&&(C=!1,_($),$=-1),M=!0;var ie=x;try{for(I(de),g=n(p);g!==null&&(!(g.expirationTime>de)||X&&!H());){var D=g.callback;if(typeof D=="function"){g.callback=null,x=g.priorityLevel;var se=D(g.expirationTime<=de);de=s.unstable_now(),typeof se=="function"?g.callback=se:g===n(p)&&r(p),I(de)}else r(p);g=n(p)}if(g!==null)var Re=!0;else{var Ye=n(m);Ye!==null&&Y(L,Ye.startTime-de),Re=!1}return Re}finally{g=null,x=ie,M=!1}}var F=!1,O=null,$=-1,A=5,R=-1;function H(){return!(s.unstable_now()-R<A)}function re(){if(O!==null){var X=s.unstable_now();R=X;var de=!0;try{de=O(!0,X)}finally{de?Z():(F=!1,O=null)}}else F=!1}var Z;if(typeof N=="function")Z=function(){N(re)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,le=fe.port2;fe.port1.onmessage=re,Z=function(){le.postMessage(null)}}else Z=function(){S(re,0)};function oe(X){O=X,F||(F=!0,Z())}function Y(X,de){$=S(function(){X(s.unstable_now())},de)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(X){X.callback=null},s.unstable_continueExecution=function(){T||M||(T=!0,oe(U))},s.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<X?Math.floor(1e3/X):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(X){switch(x){case 1:case 2:case 3:var de=3;break;default:de=x}var ie=x;x=de;try{return X()}finally{x=ie}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(X,de){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ie=x;x=X;try{return de()}finally{x=ie}},s.unstable_scheduleCallback=function(X,de,ie){var D=s.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?D+ie:D):ie=D,X){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=ie+se,X={id:v++,callback:de,priorityLevel:X,startTime:ie,expirationTime:se,sortIndex:-1},ie>D?(X.sortIndex=ie,e(m,X),n(p)===null&&X===n(m)&&(C?(_($),$=-1):C=!0,Y(L,ie-D))):(X.sortIndex=se,e(p,X),T||M||(T=!0,oe(U))),X},s.unstable_shouldYield=H,s.unstable_wrapCallback=function(X){var de=x;return function(){var ie=x;x=de;try{return X.apply(this,arguments)}finally{x=ie}}}})(Tc)),Tc}var Dp;function r_(){return Dp||(Dp=1,Ec.exports=i_()),Ec.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function s_(){if(Np)return Dn;Np=1;var s=Qf(),e=r_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},g={};function x(t){return p.call(g,t)?!0:p.call(v,t)?!1:m.test(t)?g[t]=!0:(v[t]=!0,!1)}function M(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,l){if(i===null||typeof i>"u"||M(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,o,l,c,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,N);S[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,N);S[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,N);S[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function I(t,i,o,l){var c=S.hasOwnProperty(i)?S[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,c,l)&&(o=null),l||c===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),F=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),H=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),X=Symbol.iterator;function de(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var ie=Object.assign,D;function se(t){if(D===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+t}var Re=!1;function Ye(t,i){if(!t||Re)return"";Re=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var l=ee}Reflect.construct(t,[],i)}else{try{i.call()}catch(ee){l=ee}t.call(i.prototype)}else{try{throw Error()}catch(ee){l=ee}t()}}catch(ee){if(ee&&l&&typeof ee.stack=="string"){for(var c=ee.stack.split(`
`),h=l.stack.split(`
`),E=c.length-1,P=h.length-1;1<=E&&0<=P&&c[E]!==h[P];)P--;for(;1<=E&&0<=P;E--,P--)if(c[E]!==h[P]){if(E!==1||P!==1)do if(E--,P--,0>P||c[E]!==h[P]){var B=`
`+c[E].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=E&&0<=P);break}}}finally{Re=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?se(t):""}function $e(t){switch(t.tag){case 5:return se(t.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return t=Ye(t.type,!1),t;case 11:return t=Ye(t.type.render,!1),t;case 1:return t=Ye(t.type,!0),t;default:return""}}function J(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case F:return"Portal";case A:return"Profiler";case $:return"StrictMode";case Z:return"Suspense";case fe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case re:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case le:return i=t.displayName||null,i!==null?i:J(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return J(t(i))}catch{}}return null}function ue(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return J(i);case 8:return i===$?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Se(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Be(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ne(t){var i=Be(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function pt(t){t._valueTracker||(t._valueTracker=Ne(t))}function jt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Be(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function dt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vt(t,i){var o=i.checked;return ie({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Rt(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Se(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function lt(t,i){i=i.checked,i!=null&&I(t,"checked",i,!1)}function kt(t,i){lt(t,i);var o=Se(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?zt(t,i.type,o):i.hasOwnProperty("defaultValue")&&zt(t,i.type,Se(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function k(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function zt(t,i,o){(i!=="number"||dt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var mt=Array.isArray;function xt(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Se(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function We(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ie({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function b(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(mt(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Se(o)}}function y(t,i){var o=Se(i.value),l=Se(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function G(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ce(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ce(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ae,qe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(ae=ae||document.createElement("div"),ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ae.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ee(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var ke={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nt=["Webkit","ms","Moz","O"];Object.keys(ke).forEach(function(t){nt.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ke[i]=ke[t]})});function xe(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ke.hasOwnProperty(t)&&ke[t]?(""+i).trim():i+"px"}function Ce(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=xe(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var He=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xe(t,i){if(i){if(He[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function we(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var at=null;function z(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pe=null,ye=null,Le=null;function _e(t){if(t=_o(t)){if(typeof Pe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=va(i),Pe(t.stateNode,t.type,i))}}function he(t){ye?Le?Le.push(t):Le=[t]:ye=t}function Ae(){if(ye){var t=ye,i=Le;if(Le=ye=null,_e(t),i)for(t=0;t<i.length;t++)_e(i[t])}}function it(t,i){return t(i)}function Pt(){}var St=!1;function Fn(t,i,o){if(St)return t(i,o);St=!0;try{return it(t,i,o)}finally{St=!1,(ye!==null||Le!==null)&&(Pt(),Ae())}}function yn(t,i){var o=t.stateNode;if(o===null)return null;var l=va(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Ks=!1;if(d)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){Ks=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{Ks=!1}function $s(t,i,o,l,c,h,E,P,B){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(o,ee)}catch(ge){this.onError(ge)}}var Rr=!1,br=null,Pr=!1,ti=null,Zs={onError:function(t){Rr=!0,br=t}};function Zo(t,i,o,l,c,h,E,P,B){Rr=!1,br=null,$s.apply(Zs,arguments)}function Qo(t,i,o,l,c,h,E,P,B){if(Zo.apply(this,arguments),Rr){if(Rr){var ee=br;Rr=!1,br=null}else throw Error(n(198));Pr||(Pr=!0,ti=ee)}}function Gn(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Qs(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Lr(t){if(Gn(t)!==t)throw Error(n(188))}function Jo(t){var i=t.alternate;if(!i){if(i=Gn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Lr(c),t;if(h===l)return Lr(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=h;else{for(var E=!1,P=c.child;P;){if(P===o){E=!0,o=c,l=h;break}if(P===l){E=!0,l=c,o=h;break}P=P.sibling}if(!E){for(P=h.child;P;){if(P===o){E=!0,o=h,l=c;break}if(P===l){E=!0,l=h,o=c;break}P=P.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Js(t){return t=Jo(t),t!==null?ea(t):null}function ea(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ea(t);if(i!==null)return i;t=t.sibling}return null}var ta=e.unstable_scheduleCallback,na=e.unstable_cancelCallback,Gl=e.unstable_shouldYield,Wl=e.unstable_requestPaint,Ht=e.unstable_now,w=e.unstable_getCurrentPriorityLevel,W=e.unstable_ImmediatePriority,ne=e.unstable_UserBlockingPriority,Q=e.unstable_NormalPriority,q=e.unstable_LowPriority,be=e.unstable_IdlePriority,Ie=null,Te=null;function Ve(t){if(Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Ie,t,void 0,(t.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:ct,tt=Math.log,Ze=Math.LN2;function ct(t){return t>>>=0,t===0?32:31-(tt(t)/Ze|0)|0}var yt=64,Ut=4194304;function Nt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tt(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,E=o&268435455;if(E!==0){var P=E&~c;P!==0?l=Nt(P):(h&=E,h!==0&&(l=Nt(h)))}else E=o&~c,E!==0?l=Nt(E):h!==0&&(l=Nt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-Fe(i),c=1<<o,l|=t[o],i&=~c;return l}function Qe(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ct(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-Fe(h),P=1<<E,B=c[E];B===-1?((P&o)===0||(P&l)!==0)&&(c[E]=Qe(P,i)):B<=i&&(t.expiredLanes|=P),h&=~P}}function gt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hn(){var t=yt;return yt<<=1,(yt&4194240)===0&&(yt=64),t}function mi(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Qt(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Fe(i),t[i]=o}function Dr(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Fe(o),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~h}}function bt(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-Fe(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var st=0;function Mn(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var rn,sn,is,gi,ud,Xl=!1,ia=[],Qi=null,Ji=null,er=null,eo=new Map,to=new Map,tr=[],M0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cd(t,i){switch(t){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":eo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(i.pointerId)}}function no(t,i,o,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=_o(i),i!==null&&sn(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function E0(t,i,o,l,c){switch(i){case"focusin":return Qi=no(Qi,t,i,o,l,c),!0;case"dragenter":return Ji=no(Ji,t,i,o,l,c),!0;case"mouseover":return er=no(er,t,i,o,l,c),!0;case"pointerover":var h=c.pointerId;return eo.set(h,no(eo.get(h)||null,t,i,o,l,c)),!0;case"gotpointercapture":return h=c.pointerId,to.set(h,no(to.get(h)||null,t,i,o,l,c)),!0}return!1}function fd(t){var i=Nr(t.target);if(i!==null){var o=Gn(i);if(o!==null){if(i=o.tag,i===13){if(i=Qs(o),i!==null){t.blockedOn=i,ud(t.priority,function(){is(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ra(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Yl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);at=l,o.target.dispatchEvent(l),at=null}else return i=_o(o),i!==null&&sn(i),t.blockedOn=o,!1;i.shift()}return!0}function dd(t,i,o){ra(t)&&o.delete(i)}function T0(){Xl=!1,Qi!==null&&ra(Qi)&&(Qi=null),Ji!==null&&ra(Ji)&&(Ji=null),er!==null&&ra(er)&&(er=null),eo.forEach(dd),to.forEach(dd)}function io(t,i){t.blockedOn===i&&(t.blockedOn=null,Xl||(Xl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,T0)))}function ro(t){function i(c){return io(c,t)}if(0<ia.length){io(ia[0],t);for(var o=1;o<ia.length;o++){var l=ia[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Qi!==null&&io(Qi,t),Ji!==null&&io(Ji,t),er!==null&&io(er,t),eo.forEach(i),to.forEach(i),o=0;o<tr.length;o++)l=tr[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<tr.length&&(o=tr[0],o.blockedOn===null);)fd(o),o.blockedOn===null&&tr.shift()}var rs=L.ReactCurrentBatchConfig,sa=!0;function w0(t,i,o,l){var c=st,h=rs.transition;rs.transition=null;try{st=1,jl(t,i,o,l)}finally{st=c,rs.transition=h}}function A0(t,i,o,l){var c=st,h=rs.transition;rs.transition=null;try{st=4,jl(t,i,o,l)}finally{st=c,rs.transition=h}}function jl(t,i,o,l){if(sa){var c=Yl(t,i,o,l);if(c===null)cu(t,i,l,oa,o),cd(t,l);else if(E0(c,t,i,o,l))l.stopPropagation();else if(cd(t,l),i&4&&-1<M0.indexOf(t)){for(;c!==null;){var h=_o(c);if(h!==null&&rn(h),h=Yl(t,i,o,l),h===null&&cu(t,i,l,oa,o),h===c)break;c=h}c!==null&&l.stopPropagation()}else cu(t,i,l,null,o)}}var oa=null;function Yl(t,i,o,l){if(oa=null,t=z(l),t=Nr(t),t!==null)if(i=Gn(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Qs(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return oa=t,null}function hd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(w()){case W:return 1;case ne:return 4;case Q:case q:return 16;case be:return 536870912;default:return 16}default:return 16}}var nr=null,ql=null,aa=null;function pd(){if(aa)return aa;var t,i=ql,o=i.length,l,c="value"in nr?nr.value:nr.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var E=o-t;for(l=1;l<=E&&i[o-l]===c[h-l];l++);return aa=c.slice(t,1<l?1-l:void 0)}function la(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ua(){return!0}function md(){return!1}function On(t){function i(o,l,c,h,E){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var P in t)t.hasOwnProperty(P)&&(o=t[P],this[P]=o?o(h):h[P]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ua:md,this.isPropagationStopped=md,this}return ie(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ua)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ua)},persist:function(){},isPersistent:ua}),i}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=On(ss),so=ie({},ss,{view:0,detail:0}),C0=On(so),$l,Zl,oo,ca=ie({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?($l=t.screenX-oo.screenX,Zl=t.screenY-oo.screenY):Zl=$l=0,oo=t),$l)},movementY:function(t){return"movementY"in t?t.movementY:Zl}}),gd=On(ca),R0=ie({},ca,{dataTransfer:0}),b0=On(R0),P0=ie({},so,{relatedTarget:0}),Ql=On(P0),L0=ie({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),D0=On(L0),N0=ie({},ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),I0=On(N0),U0=ie({},ss,{data:0}),_d=On(U0),F0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=B0[t])?!!i[t]:!1}function Jl(){return k0}var z0=ie({},so,{key:function(t){if(t.key){var i=F0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=la(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?O0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jl,charCode:function(t){return t.type==="keypress"?la(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?la(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),V0=On(z0),H0=ie({},ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vd=On(H0),G0=ie({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jl}),W0=On(G0),X0=ie({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),j0=On(X0),Y0=ie({},ca,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),q0=On(Y0),K0=[9,13,27,32],eu=d&&"CompositionEvent"in window,ao=null;d&&"documentMode"in document&&(ao=document.documentMode);var $0=d&&"TextEvent"in window&&!ao,xd=d&&(!eu||ao&&8<ao&&11>=ao),Sd=" ",yd=!1;function Md(t,i){switch(t){case"keyup":return K0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ed(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function Z0(t,i){switch(t){case"compositionend":return Ed(i);case"keypress":return i.which!==32?null:(yd=!0,Sd);case"textInput":return t=i.data,t===Sd&&yd?null:t;default:return null}}function Q0(t,i){if(os)return t==="compositionend"||!eu&&Md(t,i)?(t=pd(),aa=ql=nr=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return xd&&i.locale!=="ko"?null:i.data;default:return null}}var J0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Td(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!J0[t.type]:i==="textarea"}function wd(t,i,o,l){he(l),i=ma(i,"onChange"),0<i.length&&(o=new Kl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var lo=null,uo=null;function eg(t){Gd(t,0)}function fa(t){var i=fs(t);if(jt(i))return t}function tg(t,i){if(t==="change")return i}var Ad=!1;if(d){var tu;if(d){var nu="oninput"in document;if(!nu){var Cd=document.createElement("div");Cd.setAttribute("oninput","return;"),nu=typeof Cd.oninput=="function"}tu=nu}else tu=!1;Ad=tu&&(!document.documentMode||9<document.documentMode)}function Rd(){lo&&(lo.detachEvent("onpropertychange",bd),uo=lo=null)}function bd(t){if(t.propertyName==="value"&&fa(uo)){var i=[];wd(i,uo,t,z(t)),Fn(eg,i)}}function ng(t,i,o){t==="focusin"?(Rd(),lo=i,uo=o,lo.attachEvent("onpropertychange",bd)):t==="focusout"&&Rd()}function ig(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fa(uo)}function rg(t,i){if(t==="click")return fa(i)}function sg(t,i){if(t==="input"||t==="change")return fa(i)}function og(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ni=typeof Object.is=="function"?Object.is:og;function co(t,i){if(ni(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!p.call(i,c)||!ni(t[c],i[c]))return!1}return!0}function Pd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ld(t,i){var o=Pd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Pd(o)}}function Dd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Dd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Nd(){for(var t=window,i=dt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=dt(t.document)}return i}function iu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function ag(t){var i=Nd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Dd(o.ownerDocument.documentElement,o)){if(l!==null&&iu(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=Ld(o,h);var E=Ld(o,l);c&&E&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lg=d&&"documentMode"in document&&11>=document.documentMode,as=null,ru=null,fo=null,su=!1;function Id(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;su||as==null||as!==dt(l)||(l=as,"selectionStart"in l&&iu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fo&&co(fo,l)||(fo=l,l=ma(ru,"onSelect"),0<l.length&&(i=new Kl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=as)))}function da(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ls={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionend:da("Transition","TransitionEnd")},ou={},Ud={};d&&(Ud=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function ha(t){if(ou[t])return ou[t];if(!ls[t])return t;var i=ls[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Ud)return ou[t]=i[o];return t}var Fd=ha("animationend"),Od=ha("animationiteration"),Bd=ha("animationstart"),kd=ha("transitionend"),zd=new Map,Vd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(t,i){zd.set(t,i),u(i,[t])}for(var au=0;au<Vd.length;au++){var lu=Vd[au],ug=lu.toLowerCase(),cg=lu[0].toUpperCase()+lu.slice(1);ir(ug,"on"+cg)}ir(Fd,"onAnimationEnd"),ir(Od,"onAnimationIteration"),ir(Bd,"onAnimationStart"),ir("dblclick","onDoubleClick"),ir("focusin","onFocus"),ir("focusout","onBlur"),ir(kd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function Hd(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Qo(l,i,void 0,t),t.currentTarget=null}function Gd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var P=l[E],B=P.instance,ee=P.currentTarget;if(P=P.listener,B!==h&&c.isPropagationStopped())break e;Hd(c,P,ee),h=B}else for(E=0;E<l.length;E++){if(P=l[E],B=P.instance,ee=P.currentTarget,P=P.listener,B!==h&&c.isPropagationStopped())break e;Hd(c,P,ee),h=B}}}if(Pr)throw t=ti,Pr=!1,ti=null,t}function Ot(t,i){var o=i[gu];o===void 0&&(o=i[gu]=new Set);var l=t+"__bubble";o.has(l)||(Wd(i,t,2,!1),o.add(l))}function uu(t,i,o){var l=0;i&&(l|=4),Wd(o,t,l,i)}var pa="_reactListening"+Math.random().toString(36).slice(2);function po(t){if(!t[pa]){t[pa]=!0,r.forEach(function(o){o!=="selectionchange"&&(fg.has(o)||uu(o,!1,t),uu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[pa]||(i[pa]=!0,uu("selectionchange",!1,i))}}function Wd(t,i,o,l){switch(hd(i)){case 1:var c=w0;break;case 4:c=A0;break;default:c=jl}o=c.bind(null,i,o,t),c=void 0,!Ks||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function cu(t,i,o,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var P=l.stateNode.containerInfo;if(P===c||P.nodeType===8&&P.parentNode===c)break;if(E===4)for(E=l.return;E!==null;){var B=E.tag;if((B===3||B===4)&&(B=E.stateNode.containerInfo,B===c||B.nodeType===8&&B.parentNode===c))return;E=E.return}for(;P!==null;){if(E=Nr(P),E===null)return;if(B=E.tag,B===5||B===6){l=h=E;continue e}P=P.parentNode}}l=l.return}Fn(function(){var ee=h,ge=z(o),ve=[];e:{var me=zd.get(t);if(me!==void 0){var Ue=Kl,Ge=t;switch(t){case"keypress":if(la(o)===0)break e;case"keydown":case"keyup":Ue=V0;break;case"focusin":Ge="focus",Ue=Ql;break;case"focusout":Ge="blur",Ue=Ql;break;case"beforeblur":case"afterblur":Ue=Ql;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=b0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=W0;break;case Fd:case Od:case Bd:Ue=D0;break;case kd:Ue=j0;break;case"scroll":Ue=C0;break;case"wheel":Ue=q0;break;case"copy":case"cut":case"paste":Ue=I0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=vd}var je=(i&4)!==0,Yt=!je&&t==="scroll",j=je?me!==null?me+"Capture":null:me;je=[];for(var V=ee,K;V!==null;){K=V;var Me=K.stateNode;if(K.tag===5&&Me!==null&&(K=Me,j!==null&&(Me=yn(V,j),Me!=null&&je.push(mo(V,Me,K)))),Yt)break;V=V.return}0<je.length&&(me=new Ue(me,Ge,null,o,ge),ve.push({event:me,listeners:je}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",Ue=t==="mouseout"||t==="pointerout",me&&o!==at&&(Ge=o.relatedTarget||o.fromElement)&&(Nr(Ge)||Ge[bi]))break e;if((Ue||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,Ue?(Ge=o.relatedTarget||o.toElement,Ue=ee,Ge=Ge?Nr(Ge):null,Ge!==null&&(Yt=Gn(Ge),Ge!==Yt||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Ue=null,Ge=ee),Ue!==Ge)){if(je=gd,Me="onMouseLeave",j="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(je=vd,Me="onPointerLeave",j="onPointerEnter",V="pointer"),Yt=Ue==null?me:fs(Ue),K=Ge==null?me:fs(Ge),me=new je(Me,V+"leave",Ue,o,ge),me.target=Yt,me.relatedTarget=K,Me=null,Nr(ge)===ee&&(je=new je(j,V+"enter",Ge,o,ge),je.target=K,je.relatedTarget=Yt,Me=je),Yt=Me,Ue&&Ge)t:{for(je=Ue,j=Ge,V=0,K=je;K;K=us(K))V++;for(K=0,Me=j;Me;Me=us(Me))K++;for(;0<V-K;)je=us(je),V--;for(;0<K-V;)j=us(j),K--;for(;V--;){if(je===j||j!==null&&je===j.alternate)break t;je=us(je),j=us(j)}je=null}else je=null;Ue!==null&&Xd(ve,me,Ue,je,!1),Ge!==null&&Yt!==null&&Xd(ve,Yt,Ge,je,!0)}}e:{if(me=ee?fs(ee):window,Ue=me.nodeName&&me.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&me.type==="file")var Ke=tg;else if(Td(me))if(Ad)Ke=sg;else{Ke=ig;var Je=ng}else(Ue=me.nodeName)&&Ue.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Ke=rg);if(Ke&&(Ke=Ke(t,ee))){wd(ve,Ke,o,ge);break e}Je&&Je(t,me,ee),t==="focusout"&&(Je=me._wrapperState)&&Je.controlled&&me.type==="number"&&zt(me,"number",me.value)}switch(Je=ee?fs(ee):window,t){case"focusin":(Td(Je)||Je.contentEditable==="true")&&(as=Je,ru=ee,fo=null);break;case"focusout":fo=ru=as=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,Id(ve,o,ge);break;case"selectionchange":if(lg)break;case"keydown":case"keyup":Id(ve,o,ge)}var et;if(eu)e:{switch(t){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else os?Md(t,o)&&(rt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(rt="onCompositionStart");rt&&(xd&&o.locale!=="ko"&&(os||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&os&&(et=pd()):(nr=ge,ql="value"in nr?nr.value:nr.textContent,os=!0)),Je=ma(ee,rt),0<Je.length&&(rt=new _d(rt,t,null,o,ge),ve.push({event:rt,listeners:Je}),et?rt.data=et:(et=Ed(o),et!==null&&(rt.data=et)))),(et=$0?Z0(t,o):Q0(t,o))&&(ee=ma(ee,"onBeforeInput"),0<ee.length&&(ge=new _d("onBeforeInput","beforeinput",null,o,ge),ve.push({event:ge,listeners:ee}),ge.data=et))}Gd(ve,i)})}function mo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ma(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=yn(t,o),h!=null&&l.unshift(mo(t,h,c)),h=yn(t,i),h!=null&&l.push(mo(t,h,c))),t=t.return}return l}function us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xd(t,i,o,l,c){for(var h=i._reactName,E=[];o!==null&&o!==l;){var P=o,B=P.alternate,ee=P.stateNode;if(B!==null&&B===l)break;P.tag===5&&ee!==null&&(P=ee,c?(B=yn(o,h),B!=null&&E.unshift(mo(o,B,P))):c||(B=yn(o,h),B!=null&&E.push(mo(o,B,P)))),o=o.return}E.length!==0&&t.push({event:i,listeners:E})}var dg=/\r\n?/g,hg=/\u0000|\uFFFD/g;function jd(t){return(typeof t=="string"?t:""+t).replace(dg,`
`).replace(hg,"")}function ga(t,i,o){if(i=jd(i),jd(t)!==i&&o)throw Error(n(425))}function _a(){}var fu=null,du=null;function hu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var pu=typeof setTimeout=="function"?setTimeout:void 0,pg=typeof clearTimeout=="function"?clearTimeout:void 0,Yd=typeof Promise=="function"?Promise:void 0,mg=typeof queueMicrotask=="function"?queueMicrotask:typeof Yd<"u"?function(t){return Yd.resolve(null).then(t).catch(gg)}:pu;function gg(t){setTimeout(function(){throw t})}function mu(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),ro(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);ro(i)}function rr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function qd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var cs=Math.random().toString(36).slice(2),_i="__reactFiber$"+cs,go="__reactProps$"+cs,bi="__reactContainer$"+cs,gu="__reactEvents$"+cs,_g="__reactListeners$"+cs,vg="__reactHandles$"+cs;function Nr(t){var i=t[_i];if(i)return i;for(var o=t.parentNode;o;){if(i=o[bi]||o[_i]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=qd(t);t!==null;){if(o=t[_i])return o;t=qd(t)}return i}t=o,o=t.parentNode}return null}function _o(t){return t=t[_i]||t[bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function va(t){return t[go]||null}var _u=[],ds=-1;function sr(t){return{current:t}}function Bt(t){0>ds||(t.current=_u[ds],_u[ds]=null,ds--)}function Ft(t,i){ds++,_u[ds]=t.current,t.current=i}var or={},pn=sr(or),Cn=sr(!1),Ir=or;function hs(t,i){var o=t.type.contextTypes;if(!o)return or;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function Rn(t){return t=t.childContextTypes,t!=null}function xa(){Bt(Cn),Bt(pn)}function Kd(t,i,o){if(pn.current!==or)throw Error(n(168));Ft(pn,i),Ft(Cn,o)}function $d(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,ue(t)||"Unknown",c));return ie({},o,l)}function Sa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,Ir=pn.current,Ft(pn,t),Ft(Cn,Cn.current),!0}function Zd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=$d(t,i,Ir),l.__reactInternalMemoizedMergedChildContext=t,Bt(Cn),Bt(pn),Ft(pn,t)):Bt(Cn),Ft(Cn,o)}var Pi=null,ya=!1,vu=!1;function Qd(t){Pi===null?Pi=[t]:Pi.push(t)}function xg(t){ya=!0,Qd(t)}function ar(){if(!vu&&Pi!==null){vu=!0;var t=0,i=st;try{var o=Pi;for(st=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Pi=null,ya=!1}catch(c){throw Pi!==null&&(Pi=Pi.slice(t+1)),ta(W,ar),c}finally{st=i,vu=!1}}return null}var ps=[],ms=0,Ma=null,Ea=0,Wn=[],Xn=0,Ur=null,Li=1,Di="";function Fr(t,i){ps[ms++]=Ea,ps[ms++]=Ma,Ma=t,Ea=i}function Jd(t,i,o){Wn[Xn++]=Li,Wn[Xn++]=Di,Wn[Xn++]=Ur,Ur=t;var l=Li;t=Di;var c=32-Fe(l)-1;l&=~(1<<c),o+=1;var h=32-Fe(i)+c;if(30<h){var E=c-c%5;h=(l&(1<<E)-1).toString(32),l>>=E,c-=E,Li=1<<32-Fe(i)+c|o<<c|l,Di=h+t}else Li=1<<h|o<<c|l,Di=t}function xu(t){t.return!==null&&(Fr(t,1),Jd(t,1,0))}function Su(t){for(;t===Ma;)Ma=ps[--ms],ps[ms]=null,Ea=ps[--ms],ps[ms]=null;for(;t===Ur;)Ur=Wn[--Xn],Wn[Xn]=null,Di=Wn[--Xn],Wn[Xn]=null,Li=Wn[--Xn],Wn[Xn]=null}var Bn=null,kn=null,Vt=!1,ii=null;function eh(t,i){var o=Kn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function th(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Bn=t,kn=rr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Bn=t,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Ur!==null?{id:Li,overflow:Di}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Kn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Bn=t,kn=null,!0):!1;default:return!1}}function yu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mu(t){if(Vt){var i=kn;if(i){var o=i;if(!th(t,i)){if(yu(t))throw Error(n(418));i=rr(o.nextSibling);var l=Bn;i&&th(t,i)?eh(l,o):(t.flags=t.flags&-4097|2,Vt=!1,Bn=t)}}else{if(yu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Vt=!1,Bn=t}}}function nh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bn=t}function Ta(t){if(t!==Bn)return!1;if(!Vt)return nh(t),Vt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!hu(t.type,t.memoizedProps)),i&&(i=kn)){if(yu(t))throw ih(),Error(n(418));for(;i;)eh(t,i),i=rr(i.nextSibling)}if(nh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){kn=rr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}kn=null}}else kn=Bn?rr(t.stateNode.nextSibling):null;return!0}function ih(){for(var t=kn;t;)t=rr(t.nextSibling)}function gs(){kn=Bn=null,Vt=!1}function Eu(t){ii===null?ii=[t]:ii.push(t)}var Sg=L.ReactCurrentBatchConfig;function vo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var P=c.refs;E===null?delete P[h]:P[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function wa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function rh(t){var i=t._init;return i(t._payload)}function sh(t){function i(j,V){if(t){var K=j.deletions;K===null?(j.deletions=[V],j.flags|=16):K.push(V)}}function o(j,V){if(!t)return null;for(;V!==null;)i(j,V),V=V.sibling;return null}function l(j,V){for(j=new Map;V!==null;)V.key!==null?j.set(V.key,V):j.set(V.index,V),V=V.sibling;return j}function c(j,V){return j=mr(j,V),j.index=0,j.sibling=null,j}function h(j,V,K){return j.index=K,t?(K=j.alternate,K!==null?(K=K.index,K<V?(j.flags|=2,V):K):(j.flags|=2,V)):(j.flags|=1048576,V)}function E(j){return t&&j.alternate===null&&(j.flags|=2),j}function P(j,V,K,Me){return V===null||V.tag!==6?(V=pc(K,j.mode,Me),V.return=j,V):(V=c(V,K),V.return=j,V)}function B(j,V,K,Me){var Ke=K.type;return Ke===O?ge(j,V,K.props.children,Me,K.key):V!==null&&(V.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===oe&&rh(Ke)===V.type)?(Me=c(V,K.props),Me.ref=vo(j,V,K),Me.return=j,Me):(Me=Ka(K.type,K.key,K.props,null,j.mode,Me),Me.ref=vo(j,V,K),Me.return=j,Me)}function ee(j,V,K,Me){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=mc(K,j.mode,Me),V.return=j,V):(V=c(V,K.children||[]),V.return=j,V)}function ge(j,V,K,Me,Ke){return V===null||V.tag!==7?(V=Wr(K,j.mode,Me,Ke),V.return=j,V):(V=c(V,K),V.return=j,V)}function ve(j,V,K){if(typeof V=="string"&&V!==""||typeof V=="number")return V=pc(""+V,j.mode,K),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case U:return K=Ka(V.type,V.key,V.props,null,j.mode,K),K.ref=vo(j,null,V),K.return=j,K;case F:return V=mc(V,j.mode,K),V.return=j,V;case oe:var Me=V._init;return ve(j,Me(V._payload),K)}if(mt(V)||de(V))return V=Wr(V,j.mode,K,null),V.return=j,V;wa(j,V)}return null}function me(j,V,K,Me){var Ke=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Ke!==null?null:P(j,V,""+K,Me);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case U:return K.key===Ke?B(j,V,K,Me):null;case F:return K.key===Ke?ee(j,V,K,Me):null;case oe:return Ke=K._init,me(j,V,Ke(K._payload),Me)}if(mt(K)||de(K))return Ke!==null?null:ge(j,V,K,Me,null);wa(j,K)}return null}function Ue(j,V,K,Me,Ke){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return j=j.get(K)||null,P(V,j,""+Me,Ke);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case U:return j=j.get(Me.key===null?K:Me.key)||null,B(V,j,Me,Ke);case F:return j=j.get(Me.key===null?K:Me.key)||null,ee(V,j,Me,Ke);case oe:var Je=Me._init;return Ue(j,V,K,Je(Me._payload),Ke)}if(mt(Me)||de(Me))return j=j.get(K)||null,ge(V,j,Me,Ke,null);wa(V,Me)}return null}function Ge(j,V,K,Me){for(var Ke=null,Je=null,et=V,rt=V=0,ln=null;et!==null&&rt<K.length;rt++){et.index>rt?(ln=et,et=null):ln=et.sibling;var wt=me(j,et,K[rt],Me);if(wt===null){et===null&&(et=ln);break}t&&et&&wt.alternate===null&&i(j,et),V=h(wt,V,rt),Je===null?Ke=wt:Je.sibling=wt,Je=wt,et=ln}if(rt===K.length)return o(j,et),Vt&&Fr(j,rt),Ke;if(et===null){for(;rt<K.length;rt++)et=ve(j,K[rt],Me),et!==null&&(V=h(et,V,rt),Je===null?Ke=et:Je.sibling=et,Je=et);return Vt&&Fr(j,rt),Ke}for(et=l(j,et);rt<K.length;rt++)ln=Ue(et,j,rt,K[rt],Me),ln!==null&&(t&&ln.alternate!==null&&et.delete(ln.key===null?rt:ln.key),V=h(ln,V,rt),Je===null?Ke=ln:Je.sibling=ln,Je=ln);return t&&et.forEach(function(gr){return i(j,gr)}),Vt&&Fr(j,rt),Ke}function je(j,V,K,Me){var Ke=de(K);if(typeof Ke!="function")throw Error(n(150));if(K=Ke.call(K),K==null)throw Error(n(151));for(var Je=Ke=null,et=V,rt=V=0,ln=null,wt=K.next();et!==null&&!wt.done;rt++,wt=K.next()){et.index>rt?(ln=et,et=null):ln=et.sibling;var gr=me(j,et,wt.value,Me);if(gr===null){et===null&&(et=ln);break}t&&et&&gr.alternate===null&&i(j,et),V=h(gr,V,rt),Je===null?Ke=gr:Je.sibling=gr,Je=gr,et=ln}if(wt.done)return o(j,et),Vt&&Fr(j,rt),Ke;if(et===null){for(;!wt.done;rt++,wt=K.next())wt=ve(j,wt.value,Me),wt!==null&&(V=h(wt,V,rt),Je===null?Ke=wt:Je.sibling=wt,Je=wt);return Vt&&Fr(j,rt),Ke}for(et=l(j,et);!wt.done;rt++,wt=K.next())wt=Ue(et,j,rt,wt.value,Me),wt!==null&&(t&&wt.alternate!==null&&et.delete(wt.key===null?rt:wt.key),V=h(wt,V,rt),Je===null?Ke=wt:Je.sibling=wt,Je=wt);return t&&et.forEach(function(Jg){return i(j,Jg)}),Vt&&Fr(j,rt),Ke}function Yt(j,V,K,Me){if(typeof K=="object"&&K!==null&&K.type===O&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case U:e:{for(var Ke=K.key,Je=V;Je!==null;){if(Je.key===Ke){if(Ke=K.type,Ke===O){if(Je.tag===7){o(j,Je.sibling),V=c(Je,K.props.children),V.return=j,j=V;break e}}else if(Je.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===oe&&rh(Ke)===Je.type){o(j,Je.sibling),V=c(Je,K.props),V.ref=vo(j,Je,K),V.return=j,j=V;break e}o(j,Je);break}else i(j,Je);Je=Je.sibling}K.type===O?(V=Wr(K.props.children,j.mode,Me,K.key),V.return=j,j=V):(Me=Ka(K.type,K.key,K.props,null,j.mode,Me),Me.ref=vo(j,V,K),Me.return=j,j=Me)}return E(j);case F:e:{for(Je=K.key;V!==null;){if(V.key===Je)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){o(j,V.sibling),V=c(V,K.children||[]),V.return=j,j=V;break e}else{o(j,V);break}else i(j,V);V=V.sibling}V=mc(K,j.mode,Me),V.return=j,j=V}return E(j);case oe:return Je=K._init,Yt(j,V,Je(K._payload),Me)}if(mt(K))return Ge(j,V,K,Me);if(de(K))return je(j,V,K,Me);wa(j,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,V!==null&&V.tag===6?(o(j,V.sibling),V=c(V,K),V.return=j,j=V):(o(j,V),V=pc(K,j.mode,Me),V.return=j,j=V),E(j)):o(j,V)}return Yt}var _s=sh(!0),oh=sh(!1),Aa=sr(null),Ca=null,vs=null,Tu=null;function wu(){Tu=vs=Ca=null}function Au(t){var i=Aa.current;Bt(Aa),t._currentValue=i}function Cu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function xs(t,i){Ca=t,Tu=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(bn=!0),t.firstContext=null)}function jn(t){var i=t._currentValue;if(Tu!==t)if(t={context:t,memoizedValue:i,next:null},vs===null){if(Ca===null)throw Error(n(308));vs=t,Ca.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return i}var Or=null;function Ru(t){Or===null?Or=[t]:Or.push(t)}function ah(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,Ru(i)):(o.next=c.next,c.next=o),i.interleaved=o,Ni(t,l)}function Ni(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var lr=!1;function bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ii(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function ur(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Mt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ni(t,o)}return c=l.interleaved,c===null?(i.next=i,Ru(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ni(t,o)}function Ra(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,bt(t,o)}}function uh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=E:h=h.next=E,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function ba(t,i,o,l){var c=t.updateQueue;lr=!1;var h=c.firstBaseUpdate,E=c.lastBaseUpdate,P=c.shared.pending;if(P!==null){c.shared.pending=null;var B=P,ee=B.next;B.next=null,E===null?h=ee:E.next=ee,E=B;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,P=ge.lastBaseUpdate,P!==E&&(P===null?ge.firstBaseUpdate=ee:P.next=ee,ge.lastBaseUpdate=B))}if(h!==null){var ve=c.baseState;E=0,ge=ee=B=null,P=h;do{var me=P.lane,Ue=P.eventTime;if((l&me)===me){ge!==null&&(ge=ge.next={eventTime:Ue,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var Ge=t,je=P;switch(me=i,Ue=o,je.tag){case 1:if(Ge=je.payload,typeof Ge=="function"){ve=Ge.call(Ue,ve,me);break e}ve=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=je.payload,me=typeof Ge=="function"?Ge.call(Ue,ve,me):Ge,me==null)break e;ve=ie({},ve,me);break e;case 2:lr=!0}}P.callback!==null&&P.lane!==0&&(t.flags|=64,me=c.effects,me===null?c.effects=[P]:me.push(P))}else Ue={eventTime:Ue,lane:me,tag:P.tag,payload:P.payload,callback:P.callback,next:null},ge===null?(ee=ge=Ue,B=ve):ge=ge.next=Ue,E|=me;if(P=P.next,P===null){if(P=c.shared.pending,P===null)break;me=P,P=me.next,me.next=null,c.lastBaseUpdate=me,c.shared.pending=null}}while(!0);if(ge===null&&(B=ve),c.baseState=B,c.firstBaseUpdate=ee,c.lastBaseUpdate=ge,i=c.shared.interleaved,i!==null){c=i;do E|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);zr|=E,t.lanes=E,t.memoizedState=ve}}function ch(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var xo={},vi=sr(xo),So=sr(xo),yo=sr(xo);function Br(t){if(t===xo)throw Error(n(174));return t}function Pu(t,i){switch(Ft(yo,i),Ft(So,t),Ft(vi,xo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:pe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=pe(i,t)}Bt(vi),Ft(vi,i)}function Ss(){Bt(vi),Bt(So),Bt(yo)}function fh(t){Br(yo.current);var i=Br(vi.current),o=pe(i,t.type);i!==o&&(Ft(So,t),Ft(vi,o))}function Lu(t){So.current===t&&(Bt(vi),Bt(So))}var Gt=sr(0);function Pa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Du=[];function Nu(){for(var t=0;t<Du.length;t++)Du[t]._workInProgressVersionPrimary=null;Du.length=0}var La=L.ReactCurrentDispatcher,Iu=L.ReactCurrentBatchConfig,kr=0,Wt=null,Jt=null,on=null,Da=!1,Mo=!1,Eo=0,yg=0;function mn(){throw Error(n(321))}function Uu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ni(t[o],i[o]))return!1;return!0}function Fu(t,i,o,l,c,h){if(kr=h,Wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,La.current=t===null||t.memoizedState===null?wg:Ag,t=o(l,c),Mo){h=0;do{if(Mo=!1,Eo=0,25<=h)throw Error(n(301));h+=1,on=Jt=null,i.updateQueue=null,La.current=Cg,t=o(l,c)}while(Mo)}if(La.current=Ua,i=Jt!==null&&Jt.next!==null,kr=0,on=Jt=Wt=null,Da=!1,i)throw Error(n(300));return t}function Ou(){var t=Eo!==0;return Eo=0,t}function xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Wt.memoizedState=on=t:on=on.next=t,on}function Yn(){if(Jt===null){var t=Wt.alternate;t=t!==null?t.memoizedState:null}else t=Jt.next;var i=on===null?Wt.memoizedState:on.next;if(i!==null)on=i,Jt=t;else{if(t===null)throw Error(n(310));Jt=t,t={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},on===null?Wt.memoizedState=on=t:on=on.next=t}return on}function To(t,i){return typeof i=="function"?i(t):i}function Bu(t){var i=Yn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Jt,c=l.baseQueue,h=o.pending;if(h!==null){if(c!==null){var E=c.next;c.next=h.next,h.next=E}l.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,l=l.baseState;var P=E=null,B=null,ee=h;do{var ge=ee.lane;if((kr&ge)===ge)B!==null&&(B=B.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),l=ee.hasEagerState?ee.eagerState:t(l,ee.action);else{var ve={lane:ge,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};B===null?(P=B=ve,E=l):B=B.next=ve,Wt.lanes|=ge,zr|=ge}ee=ee.next}while(ee!==null&&ee!==h);B===null?E=l:B.next=P,ni(l,i.memoizedState)||(bn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=B,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Wt.lanes|=h,zr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function ku(t){var i=Yn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var E=c=c.next;do h=t(h,E.action),E=E.next;while(E!==c);ni(h,i.memoizedState)||(bn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function dh(){}function hh(t,i){var o=Wt,l=Yn(),c=i(),h=!ni(l.memoizedState,c);if(h&&(l.memoizedState=c,bn=!0),l=l.queue,zu(gh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||on!==null&&on.memoizedState.tag&1){if(o.flags|=2048,wo(9,mh.bind(null,o,l,c,i),void 0,null),an===null)throw Error(n(349));(kr&30)!==0||ph(o,i,c)}return c}function ph(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function mh(t,i,o,l){i.value=o,i.getSnapshot=l,_h(i)&&vh(t)}function gh(t,i,o){return o(function(){_h(i)&&vh(t)})}function _h(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ni(t,o)}catch{return!0}}function vh(t){var i=Ni(t,1);i!==null&&ai(i,t,1,-1)}function xh(t){var i=xi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:t},i.queue=t,t=t.dispatch=Tg.bind(null,Wt,t),[i.memoizedState,t]}function wo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function Sh(){return Yn().memoizedState}function Na(t,i,o,l){var c=xi();Wt.flags|=t,c.memoizedState=wo(1|i,o,void 0,l===void 0?null:l)}function Ia(t,i,o,l){var c=Yn();l=l===void 0?null:l;var h=void 0;if(Jt!==null){var E=Jt.memoizedState;if(h=E.destroy,l!==null&&Uu(l,E.deps)){c.memoizedState=wo(i,o,h,l);return}}Wt.flags|=t,c.memoizedState=wo(1|i,o,h,l)}function yh(t,i){return Na(8390656,8,t,i)}function zu(t,i){return Ia(2048,8,t,i)}function Mh(t,i){return Ia(4,2,t,i)}function Eh(t,i){return Ia(4,4,t,i)}function Th(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function wh(t,i,o){return o=o!=null?o.concat([t]):null,Ia(4,4,Th.bind(null,i,t),o)}function Vu(){}function Ah(t,i){var o=Yn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Uu(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Ch(t,i){var o=Yn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Uu(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Rh(t,i,o){return(kr&21)===0?(t.baseState&&(t.baseState=!1,bn=!0),t.memoizedState=o):(ni(o,i)||(o=hn(),Wt.lanes|=o,zr|=o,t.baseState=!0),i)}function Mg(t,i){var o=st;st=o!==0&&4>o?o:4,t(!0);var l=Iu.transition;Iu.transition={};try{t(!1),i()}finally{st=o,Iu.transition=l}}function bh(){return Yn().memoizedState}function Eg(t,i,o){var l=hr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Ph(t))Lh(i,o);else if(o=ah(t,i,o,l),o!==null){var c=Tn();ai(o,t,l,c),Dh(o,i,l)}}function Tg(t,i,o){var l=hr(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ph(t))Lh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,P=h(E,o);if(c.hasEagerState=!0,c.eagerState=P,ni(P,E)){var B=i.interleaved;B===null?(c.next=c,Ru(i)):(c.next=B.next,B.next=c),i.interleaved=c;return}}catch{}finally{}o=ah(t,i,c,l),o!==null&&(c=Tn(),ai(o,t,l,c),Dh(o,i,l))}}function Ph(t){var i=t.alternate;return t===Wt||i!==null&&i===Wt}function Lh(t,i){Mo=Da=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Dh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,bt(t,o)}}var Ua={readContext:jn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},wg={readContext:jn,useCallback:function(t,i){return xi().memoizedState=[t,i===void 0?null:i],t},useContext:jn,useEffect:yh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Na(4194308,4,Th.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Na(4194308,4,t,i)},useInsertionEffect:function(t,i){return Na(4,2,t,i)},useMemo:function(t,i){var o=xi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=xi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=Eg.bind(null,Wt,t),[l.memoizedState,t]},useRef:function(t){var i=xi();return t={current:t},i.memoizedState=t},useState:xh,useDebugValue:Vu,useDeferredValue:function(t){return xi().memoizedState=t},useTransition:function(){var t=xh(!1),i=t[0];return t=Mg.bind(null,t[1]),xi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Wt,c=xi();if(Vt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),an===null)throw Error(n(349));(kr&30)!==0||ph(l,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,yh(gh.bind(null,l,h,t),[t]),l.flags|=2048,wo(9,mh.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=xi(),i=an.identifierPrefix;if(Vt){var o=Di,l=Li;o=(l&~(1<<32-Fe(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=Eo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=yg++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Ag={readContext:jn,useCallback:Ah,useContext:jn,useEffect:zu,useImperativeHandle:wh,useInsertionEffect:Mh,useLayoutEffect:Eh,useMemo:Ch,useReducer:Bu,useRef:Sh,useState:function(){return Bu(To)},useDebugValue:Vu,useDeferredValue:function(t){var i=Yn();return Rh(i,Jt.memoizedState,t)},useTransition:function(){var t=Bu(To)[0],i=Yn().memoizedState;return[t,i]},useMutableSource:dh,useSyncExternalStore:hh,useId:bh,unstable_isNewReconciler:!1},Cg={readContext:jn,useCallback:Ah,useContext:jn,useEffect:zu,useImperativeHandle:wh,useInsertionEffect:Mh,useLayoutEffect:Eh,useMemo:Ch,useReducer:ku,useRef:Sh,useState:function(){return ku(To)},useDebugValue:Vu,useDeferredValue:function(t){var i=Yn();return Jt===null?i.memoizedState=t:Rh(i,Jt.memoizedState,t)},useTransition:function(){var t=ku(To)[0],i=Yn().memoizedState;return[t,i]},useMutableSource:dh,useSyncExternalStore:hh,useId:bh,unstable_isNewReconciler:!1};function ri(t,i){if(t&&t.defaultProps){i=ie({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Hu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:ie({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Fa={isMounted:function(t){return(t=t._reactInternals)?Gn(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=Tn(),c=hr(t),h=Ii(l,c);h.payload=i,o!=null&&(h.callback=o),i=ur(t,h,c),i!==null&&(ai(i,t,c,l),Ra(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=Tn(),c=hr(t),h=Ii(l,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=ur(t,h,c),i!==null&&(ai(i,t,c,l),Ra(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Tn(),l=hr(t),c=Ii(o,l);c.tag=2,i!=null&&(c.callback=i),i=ur(t,c,l),i!==null&&(ai(i,t,l,o),Ra(i,t,l))}};function Nh(t,i,o,l,c,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!co(o,l)||!co(c,h):!0}function Ih(t,i,o){var l=!1,c=or,h=i.contextType;return typeof h=="object"&&h!==null?h=jn(h):(c=Rn(i)?Ir:pn.current,l=i.contextTypes,h=(l=l!=null)?hs(t,c):or),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Fa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Uh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Fa.enqueueReplaceState(i,i.state,null)}function Gu(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},bu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=jn(h):(h=Rn(i)?Ir:pn.current,c.context=hs(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Hu(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Fa.enqueueReplaceState(c,c.state,null),ba(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,i){try{var o="",l=i;do o+=$e(l),l=l.return;while(l);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Wu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Xu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Rg=typeof WeakMap=="function"?WeakMap:Map;function Fh(t,i,o){o=Ii(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Ga||(Ga=!0,oc=l),Xu(t,i)},o}function Oh(t,i,o){o=Ii(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){Xu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Xu(t,i),typeof l!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function Bh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new Rg;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=Hg.bind(null,t,i,o),i.then(t,t))}function kh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function zh(t,i,o,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ii(-1,1),i.tag=2,ur(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var bg=L.ReactCurrentOwner,bn=!1;function En(t,i,o,l){i.child=t===null?oh(i,null,o,l):_s(i,t.child,o,l)}function Vh(t,i,o,l,c){o=o.render;var h=i.ref;return xs(i,c),l=Fu(t,i,o,l,h,c),o=Ou(),t!==null&&!bn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ui(t,i,c)):(Vt&&o&&xu(i),i.flags|=1,En(t,i,l,c),i.child)}function Hh(t,i,o,l,c){if(t===null){var h=o.type;return typeof h=="function"&&!hc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Gh(t,i,h,l,c)):(t=Ka(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var E=h.memoizedProps;if(o=o.compare,o=o!==null?o:co,o(E,l)&&t.ref===i.ref)return Ui(t,i,c)}return i.flags|=1,t=mr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Gh(t,i,o,l,c){if(t!==null){var h=t.memoizedProps;if(co(h,l)&&t.ref===i.ref)if(bn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(bn=!0);else return i.lanes=t.lanes,Ui(t,i,c)}return ju(t,i,o,l,c)}function Wh(t,i,o){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(Es,zn),zn|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ft(Es,zn),zn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Ft(Es,zn),zn|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Ft(Es,zn),zn|=l;return En(t,i,c,o),i.child}function Xh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ju(t,i,o,l,c){var h=Rn(o)?Ir:pn.current;return h=hs(i,h),xs(i,c),o=Fu(t,i,o,l,h,c),l=Ou(),t!==null&&!bn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ui(t,i,c)):(Vt&&l&&xu(i),i.flags|=1,En(t,i,o,c),i.child)}function jh(t,i,o,l,c){if(Rn(o)){var h=!0;Sa(i)}else h=!1;if(xs(i,c),i.stateNode===null)Ba(t,i),Ih(i,o,l),Gu(i,o,l,c),l=!0;else if(t===null){var E=i.stateNode,P=i.memoizedProps;E.props=P;var B=E.context,ee=o.contextType;typeof ee=="object"&&ee!==null?ee=jn(ee):(ee=Rn(o)?Ir:pn.current,ee=hs(i,ee));var ge=o.getDerivedStateFromProps,ve=typeof ge=="function"||typeof E.getSnapshotBeforeUpdate=="function";ve||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(P!==l||B!==ee)&&Uh(i,E,l,ee),lr=!1;var me=i.memoizedState;E.state=me,ba(i,l,E,c),B=i.memoizedState,P!==l||me!==B||Cn.current||lr?(typeof ge=="function"&&(Hu(i,o,ge,l),B=i.memoizedState),(P=lr||Nh(i,o,P,l,me,B,ee))?(ve||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),E.props=l,E.state=B,E.context=ee,l=P):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,lh(t,i),P=i.memoizedProps,ee=i.type===i.elementType?P:ri(i.type,P),E.props=ee,ve=i.pendingProps,me=E.context,B=o.contextType,typeof B=="object"&&B!==null?B=jn(B):(B=Rn(o)?Ir:pn.current,B=hs(i,B));var Ue=o.getDerivedStateFromProps;(ge=typeof Ue=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(P!==ve||me!==B)&&Uh(i,E,l,B),lr=!1,me=i.memoizedState,E.state=me,ba(i,l,E,c);var Ge=i.memoizedState;P!==ve||me!==Ge||Cn.current||lr?(typeof Ue=="function"&&(Hu(i,o,Ue,l),Ge=i.memoizedState),(ee=lr||Nh(i,o,ee,l,me,Ge,B)||!1)?(ge||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,Ge,B),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,Ge,B)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||P===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ge),E.props=l,E.state=Ge,E.context=B,l=ee):(typeof E.componentDidUpdate!="function"||P===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return Yu(t,i,o,l,h,c)}function Yu(t,i,o,l,c,h){Xh(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return c&&Zd(i,o,!1),Ui(t,i,h);l=i.stateNode,bg.current=i;var P=E&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=_s(i,t.child,null,h),i.child=_s(i,null,P,h)):En(t,i,P,h),i.memoizedState=l.state,c&&Zd(i,o,!0),i.child}function Yh(t){var i=t.stateNode;i.pendingContext?Kd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Kd(t,i.context,!1),Pu(t,i.containerInfo)}function qh(t,i,o,l,c){return gs(),Eu(c),i.flags|=256,En(t,i,o,l),i.child}var qu={dehydrated:null,treeContext:null,retryLane:0};function Ku(t){return{baseLanes:t,cachePool:null,transitions:null}}function Kh(t,i,o){var l=i.pendingProps,c=Gt.current,h=!1,E=(i.flags&128)!==0,P;if((P=E)||(P=t!==null&&t.memoizedState===null?!1:(c&2)!==0),P?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Ft(Gt,c&1),t===null)return Mu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,h?(l=i.mode,h=i.child,E={mode:"hidden",children:E},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=$a(E,l,0,null),t=Wr(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Ku(o),i.memoizedState=qu,t):$u(i,E));if(c=t.memoizedState,c!==null&&(P=c.dehydrated,P!==null))return Pg(t,i,E,l,P,c,o);if(h){h=l.fallback,E=i.mode,c=t.child,P=c.sibling;var B={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=B,i.deletions=null):(l=mr(c,B),l.subtreeFlags=c.subtreeFlags&14680064),P!==null?h=mr(P,h):(h=Wr(h,E,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E=E===null?Ku(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~o,i.memoizedState=qu,l}return h=t.child,t=h.sibling,l=mr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function $u(t,i){return i=$a({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Oa(t,i,o,l){return l!==null&&Eu(l),_s(i,t.child,null,o),t=$u(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Pg(t,i,o,l,c,h,E){if(o)return i.flags&256?(i.flags&=-257,l=Wu(Error(n(422))),Oa(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=$a({mode:"visible",children:l.children},c,0,null),h=Wr(h,c,E,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&_s(i,t.child,null,E),i.child.memoizedState=Ku(E),i.memoizedState=qu,h);if((i.mode&1)===0)return Oa(t,i,E,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var P=l.dgst;return l=P,h=Error(n(419)),l=Wu(h,l,void 0),Oa(t,i,E,l)}if(P=(E&t.childLanes)!==0,bn||P){if(l=an,l!==null){switch(E&-E){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|E))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Ni(t,c),ai(l,t,c,-1))}return dc(),l=Wu(Error(n(421))),Oa(t,i,E,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=Gg.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,kn=rr(c.nextSibling),Bn=i,Vt=!0,ii=null,t!==null&&(Wn[Xn++]=Li,Wn[Xn++]=Di,Wn[Xn++]=Ur,Li=t.id,Di=t.overflow,Ur=i),i=$u(i,l.children),i.flags|=4096,i)}function $h(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Cu(t.return,i,o)}function Zu(t,i,o,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=c)}function Zh(t,i,o){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(En(t,i,l.children,o),l=Gt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$h(t,o,i);else if(t.tag===19)$h(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ft(Gt,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&Pa(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),Zu(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Pa(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Zu(i,!0,o,null,h);break;case"together":Zu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ba(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ui(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),zr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=mr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=mr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function Lg(t,i,o){switch(i.tag){case 3:Yh(i),gs();break;case 5:fh(i);break;case 1:Rn(i.type)&&Sa(i);break;case 4:Pu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Ft(Aa,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ft(Gt,Gt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Kh(t,i,o):(Ft(Gt,Gt.current&1),t=Ui(t,i,o),t!==null?t.sibling:null);Ft(Gt,Gt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Zh(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ft(Gt,Gt.current),l)break;return null;case 22:case 23:return i.lanes=0,Wh(t,i,o)}return Ui(t,i,o)}var Qh,Qu,Jh,ep;Qh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Qu=function(){},Jh=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Br(vi.current);var h=null;switch(o){case"input":c=vt(t,c),l=vt(t,l),h=[];break;case"select":c=ie({},c,{value:void 0}),l=ie({},l,{value:void 0}),h=[];break;case"textarea":c=We(t,c),l=We(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=_a)}Xe(o,l);var E;o=null;for(ee in c)if(!l.hasOwnProperty(ee)&&c.hasOwnProperty(ee)&&c[ee]!=null)if(ee==="style"){var P=c[ee];for(E in P)P.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(a.hasOwnProperty(ee)?h||(h=[]):(h=h||[]).push(ee,null));for(ee in l){var B=l[ee];if(P=c!=null?c[ee]:void 0,l.hasOwnProperty(ee)&&B!==P&&(B!=null||P!=null))if(ee==="style")if(P){for(E in P)!P.hasOwnProperty(E)||B&&B.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in B)B.hasOwnProperty(E)&&P[E]!==B[E]&&(o||(o={}),o[E]=B[E])}else o||(h||(h=[]),h.push(ee,o)),o=B;else ee==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,P=P?P.__html:void 0,B!=null&&P!==B&&(h=h||[]).push(ee,B)):ee==="children"?typeof B!="string"&&typeof B!="number"||(h=h||[]).push(ee,""+B):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(a.hasOwnProperty(ee)?(B!=null&&ee==="onScroll"&&Ot("scroll",t),h||P===B||(h=[])):(h=h||[]).push(ee,B))}o&&(h=h||[]).push("style",o);var ee=h;(i.updateQueue=ee)&&(i.flags|=4)}},ep=function(t,i,o,l){o!==l&&(i.flags|=4)};function Ao(t,i){if(!Vt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function gn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function Dg(t,i,o){var l=i.pendingProps;switch(Su(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Rn(i.type)&&xa(),gn(i),null;case 3:return l=i.stateNode,Ss(),Bt(Cn),Bt(pn),Nu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ta(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ii!==null&&(uc(ii),ii=null))),Qu(t,i),gn(i),null;case 5:Lu(i);var c=Br(yo.current);if(o=i.type,t!==null&&i.stateNode!=null)Jh(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return gn(i),null}if(t=Br(vi.current),Ta(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[_i]=i,l[go]=h,t=(i.mode&1)!==0,o){case"dialog":Ot("cancel",l),Ot("close",l);break;case"iframe":case"object":case"embed":Ot("load",l);break;case"video":case"audio":for(c=0;c<ho.length;c++)Ot(ho[c],l);break;case"source":Ot("error",l);break;case"img":case"image":case"link":Ot("error",l),Ot("load",l);break;case"details":Ot("toggle",l);break;case"input":Rt(l,h),Ot("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ot("invalid",l);break;case"textarea":b(l,h),Ot("invalid",l)}Xe(o,h),c=null;for(var E in h)if(h.hasOwnProperty(E)){var P=h[E];E==="children"?typeof P=="string"?l.textContent!==P&&(h.suppressHydrationWarning!==!0&&ga(l.textContent,P,t),c=["children",P]):typeof P=="number"&&l.textContent!==""+P&&(h.suppressHydrationWarning!==!0&&ga(l.textContent,P,t),c=["children",""+P]):a.hasOwnProperty(E)&&P!=null&&E==="onScroll"&&Ot("scroll",l)}switch(o){case"input":pt(l),k(l,h,!0);break;case"textarea":pt(l),G(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=_a)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ce(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(o,{is:l.is}):(t=E.createElement(o),o==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,o),t[_i]=i,t[go]=l,Qh(t,i,!1,!1),i.stateNode=t;e:{switch(E=we(o,l),o){case"dialog":Ot("cancel",t),Ot("close",t),c=l;break;case"iframe":case"object":case"embed":Ot("load",t),c=l;break;case"video":case"audio":for(c=0;c<ho.length;c++)Ot(ho[c],t);c=l;break;case"source":Ot("error",t),c=l;break;case"img":case"image":case"link":Ot("error",t),Ot("load",t),c=l;break;case"details":Ot("toggle",t),c=l;break;case"input":Rt(t,l),c=vt(t,l),Ot("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=ie({},l,{value:void 0}),Ot("invalid",t);break;case"textarea":b(t,l),c=We(t,l),Ot("invalid",t);break;default:c=l}Xe(o,c),P=c;for(h in P)if(P.hasOwnProperty(h)){var B=P[h];h==="style"?Ce(t,B):h==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&qe(t,B)):h==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&Ee(t,B):typeof B=="number"&&Ee(t,""+B):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?B!=null&&h==="onScroll"&&Ot("scroll",t):B!=null&&I(t,h,B,E))}switch(o){case"input":pt(t),k(t,l,!1);break;case"textarea":pt(t),G(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Se(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?xt(t,!!l.multiple,h,!1):l.defaultValue!=null&&xt(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=_a)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(t&&i.stateNode!=null)ep(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Br(yo.current),Br(vi.current),Ta(i)){if(l=i.stateNode,o=i.memoizedProps,l[_i]=i,(h=l.nodeValue!==o)&&(t=Bn,t!==null))switch(t.tag){case 3:ga(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ga(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[_i]=i,i.stateNode=l}return gn(i),null;case 13:if(Bt(Gt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Vt&&kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ih(),gs(),i.flags|=98560,h=!1;else if(h=Ta(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[_i]=i}else gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),h=!1}else ii!==null&&(uc(ii),ii=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Gt.current&1)!==0?en===0&&(en=3):dc())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return Ss(),Qu(t,i),t===null&&po(i.stateNode.containerInfo),gn(i),null;case 10:return Au(i.type._context),gn(i),null;case 17:return Rn(i.type)&&xa(),gn(i),null;case 19:if(Bt(Gt),h=i.memoizedState,h===null)return gn(i),null;if(l=(i.flags&128)!==0,E=h.rendering,E===null)if(l)Ao(h,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Pa(t),E!==null){for(i.flags|=128,Ao(h,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ft(Gt,Gt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Ht()>Ts&&(i.flags|=128,l=!0,Ao(h,!1),i.lanes=4194304)}else{if(!l)if(t=Pa(E),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Ao(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!Vt)return gn(i),null}else 2*Ht()-h.renderingStartTime>Ts&&o!==1073741824&&(i.flags|=128,l=!0,Ao(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(o=h.last,o!==null?o.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Ht(),i.sibling=null,o=Gt.current,Ft(Gt,l?o&1|2:o&1),i):(gn(i),null);case 22:case 23:return fc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(zn&1073741824)!==0&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Ng(t,i){switch(Su(i),i.tag){case 1:return Rn(i.type)&&xa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ss(),Bt(Cn),Bt(pn),Nu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Lu(i),null;case 13:if(Bt(Gt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));gs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Bt(Gt),null;case 4:return Ss(),null;case 10:return Au(i.type._context),null;case 22:case 23:return fc(),null;case 24:return null;default:return null}}var ka=!1,_n=!1,Ig=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Ms(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Xt(t,i,l)}else o.current=null}function Ju(t,i,o){try{o()}catch(l){Xt(t,i,l)}}var tp=!1;function Ug(t,i){if(fu=sa,t=Nd(),iu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var E=0,P=-1,B=-1,ee=0,ge=0,ve=t,me=null;t:for(;;){for(var Ue;ve!==o||c!==0&&ve.nodeType!==3||(P=E+c),ve!==h||l!==0&&ve.nodeType!==3||(B=E+l),ve.nodeType===3&&(E+=ve.nodeValue.length),(Ue=ve.firstChild)!==null;)me=ve,ve=Ue;for(;;){if(ve===t)break t;if(me===o&&++ee===c&&(P=E),me===h&&++ge===l&&(B=E),(Ue=ve.nextSibling)!==null)break;ve=me,me=ve.parentNode}ve=Ue}o=P===-1||B===-1?null:{start:P,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(du={focusedElem:t,selectionRange:o},sa=!1,ze=i;ze!==null;)if(i=ze,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ze=t;else for(;ze!==null;){i=ze;try{var Ge=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var je=Ge.memoizedProps,Yt=Ge.memoizedState,j=i.stateNode,V=j.getSnapshotBeforeUpdate(i.elementType===i.type?je:ri(i.type,je),Yt);j.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Me){Xt(i,i.return,Me)}if(t=i.sibling,t!==null){t.return=i.return,ze=t;break}ze=i.return}return Ge=tp,tp=!1,Ge}function Co(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Ju(i,o,h)}c=c.next}while(c!==l)}}function za(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function ec(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function np(t){var i=t.alternate;i!==null&&(t.alternate=null,np(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[_i],delete i[go],delete i[gu],delete i[_g],delete i[vg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ip(t){return t.tag===5||t.tag===3||t.tag===4}function rp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ip(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=_a));else if(l!==4&&(t=t.child,t!==null))for(tc(t,i,o),t=t.sibling;t!==null;)tc(t,i,o),t=t.sibling}function nc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(nc(t,i,o),t=t.sibling;t!==null;)nc(t,i,o),t=t.sibling}var cn=null,si=!1;function cr(t,i,o){for(o=o.child;o!==null;)sp(t,i,o),o=o.sibling}function sp(t,i,o){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Ie,o)}catch{}switch(o.tag){case 5:_n||Ms(o,i);case 6:var l=cn,c=si;cn=null,cr(t,i,o),cn=l,si=c,cn!==null&&(si?(t=cn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):cn.removeChild(o.stateNode));break;case 18:cn!==null&&(si?(t=cn,o=o.stateNode,t.nodeType===8?mu(t.parentNode,o):t.nodeType===1&&mu(t,o),ro(t)):mu(cn,o.stateNode));break;case 4:l=cn,c=si,cn=o.stateNode.containerInfo,si=!0,cr(t,i,o),cn=l,si=c;break;case 0:case 11:case 14:case 15:if(!_n&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&Ju(o,i,E),c=c.next}while(c!==l)}cr(t,i,o);break;case 1:if(!_n&&(Ms(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(P){Xt(o,i,P)}cr(t,i,o);break;case 21:cr(t,i,o);break;case 22:o.mode&1?(_n=(l=_n)||o.memoizedState!==null,cr(t,i,o),_n=l):cr(t,i,o);break;default:cr(t,i,o)}}function op(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Ig),i.forEach(function(l){var c=Wg.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function oi(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var h=t,E=i,P=E;e:for(;P!==null;){switch(P.tag){case 5:cn=P.stateNode,si=!1;break e;case 3:cn=P.stateNode.containerInfo,si=!0;break e;case 4:cn=P.stateNode.containerInfo,si=!0;break e}P=P.return}if(cn===null)throw Error(n(160));sp(h,E,c),cn=null,si=!1;var B=c.alternate;B!==null&&(B.return=null),c.return=null}catch(ee){Xt(c,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ap(i,t),i=i.sibling}function ap(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(oi(i,t),Si(t),l&4){try{Co(3,t,t.return),za(3,t)}catch(je){Xt(t,t.return,je)}try{Co(5,t,t.return)}catch(je){Xt(t,t.return,je)}}break;case 1:oi(i,t),Si(t),l&512&&o!==null&&Ms(o,o.return);break;case 5:if(oi(i,t),Si(t),l&512&&o!==null&&Ms(o,o.return),t.flags&32){var c=t.stateNode;try{Ee(c,"")}catch(je){Xt(t,t.return,je)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,E=o!==null?o.memoizedProps:h,P=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{P==="input"&&h.type==="radio"&&h.name!=null&&lt(c,h),we(P,E);var ee=we(P,h);for(E=0;E<B.length;E+=2){var ge=B[E],ve=B[E+1];ge==="style"?Ce(c,ve):ge==="dangerouslySetInnerHTML"?qe(c,ve):ge==="children"?Ee(c,ve):I(c,ge,ve,ee)}switch(P){case"input":kt(c,h);break;case"textarea":y(c,h);break;case"select":var me=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Ue=h.value;Ue!=null?xt(c,!!h.multiple,Ue,!1):me!==!!h.multiple&&(h.defaultValue!=null?xt(c,!!h.multiple,h.defaultValue,!0):xt(c,!!h.multiple,h.multiple?[]:"",!1))}c[go]=h}catch(je){Xt(t,t.return,je)}}break;case 6:if(oi(i,t),Si(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(je){Xt(t,t.return,je)}}break;case 3:if(oi(i,t),Si(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{ro(i.containerInfo)}catch(je){Xt(t,t.return,je)}break;case 4:oi(i,t),Si(t);break;case 13:oi(i,t),Si(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(sc=Ht())),l&4&&op(t);break;case 22:if(ge=o!==null&&o.memoizedState!==null,t.mode&1?(_n=(ee=_n)||ge,oi(i,t),_n=ee):oi(i,t),Si(t),l&8192){if(ee=t.memoizedState!==null,(t.stateNode.isHidden=ee)&&!ge&&(t.mode&1)!==0)for(ze=t,ge=t.child;ge!==null;){for(ve=ze=ge;ze!==null;){switch(me=ze,Ue=me.child,me.tag){case 0:case 11:case 14:case 15:Co(4,me,me.return);break;case 1:Ms(me,me.return);var Ge=me.stateNode;if(typeof Ge.componentWillUnmount=="function"){l=me,o=me.return;try{i=l,Ge.props=i.memoizedProps,Ge.state=i.memoizedState,Ge.componentWillUnmount()}catch(je){Xt(l,o,je)}}break;case 5:Ms(me,me.return);break;case 22:if(me.memoizedState!==null){cp(ve);continue}}Ue!==null?(Ue.return=me,ze=Ue):cp(ve)}ge=ge.sibling}e:for(ge=null,ve=t;;){if(ve.tag===5){if(ge===null){ge=ve;try{c=ve.stateNode,ee?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(P=ve.stateNode,B=ve.memoizedProps.style,E=B!=null&&B.hasOwnProperty("display")?B.display:null,P.style.display=xe("display",E))}catch(je){Xt(t,t.return,je)}}}else if(ve.tag===6){if(ge===null)try{ve.stateNode.nodeValue=ee?"":ve.memoizedProps}catch(je){Xt(t,t.return,je)}}else if((ve.tag!==22&&ve.tag!==23||ve.memoizedState===null||ve===t)&&ve.child!==null){ve.child.return=ve,ve=ve.child;continue}if(ve===t)break e;for(;ve.sibling===null;){if(ve.return===null||ve.return===t)break e;ge===ve&&(ge=null),ve=ve.return}ge===ve&&(ge=null),ve.sibling.return=ve.return,ve=ve.sibling}}break;case 19:oi(i,t),Si(t),l&4&&op(t);break;case 21:break;default:oi(i,t),Si(t)}}function Si(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(ip(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(Ee(c,""),l.flags&=-33);var h=rp(t);nc(t,h,c);break;case 3:case 4:var E=l.stateNode.containerInfo,P=rp(t);tc(t,P,E);break;default:throw Error(n(161))}}catch(B){Xt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Fg(t,i,o){ze=t,lp(t)}function lp(t,i,o){for(var l=(t.mode&1)!==0;ze!==null;){var c=ze,h=c.child;if(c.tag===22&&l){var E=c.memoizedState!==null||ka;if(!E){var P=c.alternate,B=P!==null&&P.memoizedState!==null||_n;P=ka;var ee=_n;if(ka=E,(_n=B)&&!ee)for(ze=c;ze!==null;)E=ze,B=E.child,E.tag===22&&E.memoizedState!==null?fp(c):B!==null?(B.return=E,ze=B):fp(c);for(;h!==null;)ze=h,lp(h),h=h.sibling;ze=c,ka=P,_n=ee}up(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,ze=h):up(t)}}function up(t){for(;ze!==null;){var i=ze;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:_n||za(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!_n)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:ri(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&ch(i,h,l);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}ch(i,E,o)}break;case 5:var P=i.stateNode;if(o===null&&i.flags&4){o=P;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var ge=ee.memoizedState;if(ge!==null){var ve=ge.dehydrated;ve!==null&&ro(ve)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}_n||i.flags&512&&ec(i)}catch(me){Xt(i,i.return,me)}}if(i===t){ze=null;break}if(o=i.sibling,o!==null){o.return=i.return,ze=o;break}ze=i.return}}function cp(t){for(;ze!==null;){var i=ze;if(i===t){ze=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ze=o;break}ze=i.return}}function fp(t){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{za(4,i)}catch(B){Xt(i,o,B)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(B){Xt(i,c,B)}}var h=i.return;try{ec(i)}catch(B){Xt(i,h,B)}break;case 5:var E=i.return;try{ec(i)}catch(B){Xt(i,E,B)}}}catch(B){Xt(i,i.return,B)}if(i===t){ze=null;break}var P=i.sibling;if(P!==null){P.return=i.return,ze=P;break}ze=i.return}}var Og=Math.ceil,Va=L.ReactCurrentDispatcher,ic=L.ReactCurrentOwner,qn=L.ReactCurrentBatchConfig,Mt=0,an=null,$t=null,fn=0,zn=0,Es=sr(0),en=0,Ro=null,zr=0,Ha=0,rc=0,bo=null,Pn=null,sc=0,Ts=1/0,Fi=null,Ga=!1,oc=null,fr=null,Wa=!1,dr=null,Xa=0,Po=0,ac=null,ja=-1,Ya=0;function Tn(){return(Mt&6)!==0?Ht():ja!==-1?ja:ja=Ht()}function hr(t){return(t.mode&1)===0?1:(Mt&2)!==0&&fn!==0?fn&-fn:Sg.transition!==null?(Ya===0&&(Ya=hn()),Ya):(t=st,t!==0||(t=window.event,t=t===void 0?16:hd(t.type)),t)}function ai(t,i,o,l){if(50<Po)throw Po=0,ac=null,Error(n(185));Qt(t,o,l),((Mt&2)===0||t!==an)&&(t===an&&((Mt&2)===0&&(Ha|=o),en===4&&pr(t,fn)),Ln(t,l),o===1&&Mt===0&&(i.mode&1)===0&&(Ts=Ht()+500,ya&&ar()))}function Ln(t,i){var o=t.callbackNode;Ct(t,i);var l=Tt(t,t===an?fn:0);if(l===0)o!==null&&na(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&na(o),i===1)t.tag===0?xg(hp.bind(null,t)):Qd(hp.bind(null,t)),mg(function(){(Mt&6)===0&&ar()}),o=null;else{switch(Mn(l)){case 1:o=W;break;case 4:o=ne;break;case 16:o=Q;break;case 536870912:o=be;break;default:o=Q}o=yp(o,dp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function dp(t,i){if(ja=-1,Ya=0,(Mt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(ws()&&t.callbackNode!==o)return null;var l=Tt(t,t===an?fn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=qa(t,l);else{i=l;var c=Mt;Mt|=2;var h=mp();(an!==t||fn!==i)&&(Fi=null,Ts=Ht()+500,Hr(t,i));do try{zg();break}catch(P){pp(t,P)}while(!0);wu(),Va.current=h,Mt=c,$t!==null?i=0:(an=null,fn=0,i=en)}if(i!==0){if(i===2&&(c=gt(t),c!==0&&(l=c,i=lc(t,c))),i===1)throw o=Ro,Hr(t,0),pr(t,l),Ln(t,Ht()),o;if(i===6)pr(t,l);else{if(c=t.current.alternate,(l&30)===0&&!Bg(c)&&(i=qa(t,l),i===2&&(h=gt(t),h!==0&&(l=h,i=lc(t,h))),i===1))throw o=Ro,Hr(t,0),pr(t,l),Ln(t,Ht()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Gr(t,Pn,Fi);break;case 3:if(pr(t,l),(l&130023424)===l&&(i=sc+500-Ht(),10<i)){if(Tt(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){Tn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=pu(Gr.bind(null,t,Pn,Fi),i);break}Gr(t,Pn,Fi);break;case 4:if(pr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var E=31-Fe(l);h=1<<E,E=i[E],E>c&&(c=E),l&=~h}if(l=c,l=Ht()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Og(l/1960))-l,10<l){t.timeoutHandle=pu(Gr.bind(null,t,Pn,Fi),l);break}Gr(t,Pn,Fi);break;case 5:Gr(t,Pn,Fi);break;default:throw Error(n(329))}}}return Ln(t,Ht()),t.callbackNode===o?dp.bind(null,t):null}function lc(t,i){var o=bo;return t.current.memoizedState.isDehydrated&&(Hr(t,i).flags|=256),t=qa(t,i),t!==2&&(i=Pn,Pn=o,i!==null&&uc(i)),t}function uc(t){Pn===null?Pn=t:Pn.push.apply(Pn,t)}function Bg(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],h=c.getSnapshot;c=c.value;try{if(!ni(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function pr(t,i){for(i&=~rc,i&=~Ha,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Fe(i),l=1<<o;t[o]=-1,i&=~l}}function hp(t){if((Mt&6)!==0)throw Error(n(327));ws();var i=Tt(t,0);if((i&1)===0)return Ln(t,Ht()),null;var o=qa(t,i);if(t.tag!==0&&o===2){var l=gt(t);l!==0&&(i=l,o=lc(t,l))}if(o===1)throw o=Ro,Hr(t,0),pr(t,i),Ln(t,Ht()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Gr(t,Pn,Fi),Ln(t,Ht()),null}function cc(t,i){var o=Mt;Mt|=1;try{return t(i)}finally{Mt=o,Mt===0&&(Ts=Ht()+500,ya&&ar())}}function Vr(t){dr!==null&&dr.tag===0&&(Mt&6)===0&&ws();var i=Mt;Mt|=1;var o=qn.transition,l=st;try{if(qn.transition=null,st=1,t)return t()}finally{st=l,qn.transition=o,Mt=i,(Mt&6)===0&&ar()}}function fc(){zn=Es.current,Bt(Es)}function Hr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,pg(o)),$t!==null)for(o=$t.return;o!==null;){var l=o;switch(Su(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&xa();break;case 3:Ss(),Bt(Cn),Bt(pn),Nu();break;case 5:Lu(l);break;case 4:Ss();break;case 13:Bt(Gt);break;case 19:Bt(Gt);break;case 10:Au(l.type._context);break;case 22:case 23:fc()}o=o.return}if(an=t,$t=t=mr(t.current,null),fn=zn=i,en=0,Ro=null,rc=Ha=zr=0,Pn=bo=null,Or!==null){for(i=0;i<Or.length;i++)if(o=Or[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,h=o.pending;if(h!==null){var E=h.next;h.next=c,l.next=E}o.pending=l}Or=null}return t}function pp(t,i){do{var o=$t;try{if(wu(),La.current=Ua,Da){for(var l=Wt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Da=!1}if(kr=0,on=Jt=Wt=null,Mo=!1,Eo=0,ic.current=null,o===null||o.return===null){en=1,Ro=i,$t=null;break}e:{var h=t,E=o.return,P=o,B=i;if(i=fn,P.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ee=B,ge=P,ve=ge.tag;if((ge.mode&1)===0&&(ve===0||ve===11||ve===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Ue=kh(E);if(Ue!==null){Ue.flags&=-257,zh(Ue,E,P,h,i),Ue.mode&1&&Bh(h,ee,i),i=Ue,B=ee;var Ge=i.updateQueue;if(Ge===null){var je=new Set;je.add(B),i.updateQueue=je}else Ge.add(B);break e}else{if((i&1)===0){Bh(h,ee,i),dc();break e}B=Error(n(426))}}else if(Vt&&P.mode&1){var Yt=kh(E);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),zh(Yt,E,P,h,i),Eu(ys(B,P));break e}}h=B=ys(B,P),en!==4&&(en=2),bo===null?bo=[h]:bo.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var j=Fh(h,B,i);uh(h,j);break e;case 1:P=B;var V=h.type,K=h.stateNode;if((h.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(fr===null||!fr.has(K)))){h.flags|=65536,i&=-i,h.lanes|=i;var Me=Oh(h,P,i);uh(h,Me);break e}}h=h.return}while(h!==null)}_p(o)}catch(Ke){i=Ke,$t===o&&o!==null&&($t=o=o.return);continue}break}while(!0)}function mp(){var t=Va.current;return Va.current=Ua,t===null?Ua:t}function dc(){(en===0||en===3||en===2)&&(en=4),an===null||(zr&268435455)===0&&(Ha&268435455)===0||pr(an,fn)}function qa(t,i){var o=Mt;Mt|=2;var l=mp();(an!==t||fn!==i)&&(Fi=null,Hr(t,i));do try{kg();break}catch(c){pp(t,c)}while(!0);if(wu(),Mt=o,Va.current=l,$t!==null)throw Error(n(261));return an=null,fn=0,en}function kg(){for(;$t!==null;)gp($t)}function zg(){for(;$t!==null&&!Gl();)gp($t)}function gp(t){var i=Sp(t.alternate,t,zn);t.memoizedProps=t.pendingProps,i===null?_p(t):$t=i,ic.current=null}function _p(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=Dg(o,i,zn),o!==null){$t=o;return}}else{if(o=Ng(o,i),o!==null){o.flags&=32767,$t=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{en=6,$t=null;return}}if(i=i.sibling,i!==null){$t=i;return}$t=i=t}while(i!==null);en===0&&(en=5)}function Gr(t,i,o){var l=st,c=qn.transition;try{qn.transition=null,st=1,Vg(t,i,o,l)}finally{qn.transition=c,st=l}return null}function Vg(t,i,o,l){do ws();while(dr!==null);if((Mt&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Dr(t,h),t===an&&($t=an=null,fn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Wa||(Wa=!0,yp(Q,function(){return ws(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=qn.transition,qn.transition=null;var E=st;st=1;var P=Mt;Mt|=4,ic.current=null,Ug(t,o),ap(o,t),ag(du),sa=!!fu,du=fu=null,t.current=o,Fg(o),Wl(),Mt=P,st=E,qn.transition=h}else t.current=o;if(Wa&&(Wa=!1,dr=t,Xa=c),h=t.pendingLanes,h===0&&(fr=null),Ve(o.stateNode),Ln(t,Ht()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(Ga)throw Ga=!1,t=oc,oc=null,t;return(Xa&1)!==0&&t.tag!==0&&ws(),h=t.pendingLanes,(h&1)!==0?t===ac?Po++:(Po=0,ac=t):Po=0,ar(),null}function ws(){if(dr!==null){var t=Mn(Xa),i=qn.transition,o=st;try{if(qn.transition=null,st=16>t?16:t,dr===null)var l=!1;else{if(t=dr,dr=null,Xa=0,(Mt&6)!==0)throw Error(n(331));var c=Mt;for(Mt|=4,ze=t.current;ze!==null;){var h=ze,E=h.child;if((ze.flags&16)!==0){var P=h.deletions;if(P!==null){for(var B=0;B<P.length;B++){var ee=P[B];for(ze=ee;ze!==null;){var ge=ze;switch(ge.tag){case 0:case 11:case 15:Co(8,ge,h)}var ve=ge.child;if(ve!==null)ve.return=ge,ze=ve;else for(;ze!==null;){ge=ze;var me=ge.sibling,Ue=ge.return;if(np(ge),ge===ee){ze=null;break}if(me!==null){me.return=Ue,ze=me;break}ze=Ue}}}var Ge=h.alternate;if(Ge!==null){var je=Ge.child;if(je!==null){Ge.child=null;do{var Yt=je.sibling;je.sibling=null,je=Yt}while(je!==null)}}ze=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,ze=E;else e:for(;ze!==null;){if(h=ze,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Co(9,h,h.return)}var j=h.sibling;if(j!==null){j.return=h.return,ze=j;break e}ze=h.return}}var V=t.current;for(ze=V;ze!==null;){E=ze;var K=E.child;if((E.subtreeFlags&2064)!==0&&K!==null)K.return=E,ze=K;else e:for(E=V;ze!==null;){if(P=ze,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:za(9,P)}}catch(Ke){Xt(P,P.return,Ke)}if(P===E){ze=null;break e}var Me=P.sibling;if(Me!==null){Me.return=P.return,ze=Me;break e}ze=P.return}}if(Mt=c,ar(),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Ie,t)}catch{}l=!0}return l}finally{st=o,qn.transition=i}}return!1}function vp(t,i,o){i=ys(o,i),i=Fh(t,i,1),t=ur(t,i,1),i=Tn(),t!==null&&(Qt(t,1,i),Ln(t,i))}function Xt(t,i,o){if(t.tag===3)vp(t,t,o);else for(;i!==null;){if(i.tag===3){vp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(fr===null||!fr.has(l))){t=ys(o,t),t=Oh(i,t,1),i=ur(i,t,1),t=Tn(),i!==null&&(Qt(i,1,t),Ln(i,t));break}}i=i.return}}function Hg(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=Tn(),t.pingedLanes|=t.suspendedLanes&o,an===t&&(fn&o)===o&&(en===4||en===3&&(fn&130023424)===fn&&500>Ht()-sc?Hr(t,0):rc|=o),Ln(t,i)}function xp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Ut,Ut<<=1,(Ut&130023424)===0&&(Ut=4194304)));var o=Tn();t=Ni(t,i),t!==null&&(Qt(t,i,o),Ln(t,o))}function Gg(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),xp(t,o)}function Wg(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),xp(t,o)}var Sp;Sp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Cn.current)bn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return bn=!1,Lg(t,i,o);bn=(t.flags&131072)!==0}else bn=!1,Vt&&(i.flags&1048576)!==0&&Jd(i,Ea,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ba(t,i),t=i.pendingProps;var c=hs(i,pn.current);xs(i,o),c=Fu(null,i,l,t,c,o);var h=Ou();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(l)?(h=!0,Sa(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,bu(i),c.updater=Fa,i.stateNode=c,c._reactInternals=i,Gu(i,l,t,o),i=Yu(null,i,l,!0,h,o)):(i.tag=0,Vt&&h&&xu(i),En(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Ba(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=jg(l),t=ri(l,t),c){case 0:i=ju(null,i,l,t,o);break e;case 1:i=jh(null,i,l,t,o);break e;case 11:i=Vh(null,i,l,t,o);break e;case 14:i=Hh(null,i,l,ri(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ri(l,c),ju(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ri(l,c),jh(t,i,l,c,o);case 3:e:{if(Yh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,lh(t,i),ba(i,l,null,o);var E=i.memoizedState;if(l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=ys(Error(n(423)),i),i=qh(t,i,l,o,c);break e}else if(l!==c){c=ys(Error(n(424)),i),i=qh(t,i,l,o,c);break e}else for(kn=rr(i.stateNode.containerInfo.firstChild),Bn=i,Vt=!0,ii=null,o=oh(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(gs(),l===c){i=Ui(t,i,o);break e}En(t,i,l,o)}i=i.child}return i;case 5:return fh(i),t===null&&Mu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,E=c.children,hu(l,c)?E=null:h!==null&&hu(l,h)&&(i.flags|=32),Xh(t,i),En(t,i,E,o),i.child;case 6:return t===null&&Mu(i),null;case 13:return Kh(t,i,o);case 4:return Pu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=_s(i,null,l,o):En(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ri(l,c),Vh(t,i,l,c,o);case 7:return En(t,i,i.pendingProps,o),i.child;case 8:return En(t,i,i.pendingProps.children,o),i.child;case 12:return En(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,E=c.value,Ft(Aa,l._currentValue),l._currentValue=E,h!==null)if(ni(h.value,E)){if(h.children===c.children&&!Cn.current){i=Ui(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var P=h.dependencies;if(P!==null){E=h.child;for(var B=P.firstContext;B!==null;){if(B.context===l){if(h.tag===1){B=Ii(-1,o&-o),B.tag=2;var ee=h.updateQueue;if(ee!==null){ee=ee.shared;var ge=ee.pending;ge===null?B.next=B:(B.next=ge.next,ge.next=B),ee.pending=B}}h.lanes|=o,B=h.alternate,B!==null&&(B.lanes|=o),Cu(h.return,o,i),P.lanes|=o;break}B=B.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=o,P=E.alternate,P!==null&&(P.lanes|=o),Cu(E,o,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}En(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,xs(i,o),c=jn(c),l=l(c),i.flags|=1,En(t,i,l,o),i.child;case 14:return l=i.type,c=ri(l,i.pendingProps),c=ri(l.type,c),Hh(t,i,l,c,o);case 15:return Gh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ri(l,c),Ba(t,i),i.tag=1,Rn(l)?(t=!0,Sa(i)):t=!1,xs(i,o),Ih(i,l,c),Gu(i,l,c,o),Yu(null,i,l,!0,t,o);case 19:return Zh(t,i,o);case 22:return Wh(t,i,o)}throw Error(n(156,i.tag))};function yp(t,i){return ta(t,i)}function Xg(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,i,o,l){return new Xg(t,i,o,l)}function hc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jg(t){if(typeof t=="function")return hc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===re)return 11;if(t===le)return 14}return 2}function mr(t,i){var o=t.alternate;return o===null?(o=Kn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ka(t,i,o,l,c,h){var E=2;if(l=t,typeof t=="function")hc(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case O:return Wr(o.children,c,h,i);case $:E=8,c|=8;break;case A:return t=Kn(12,o,i,c|2),t.elementType=A,t.lanes=h,t;case Z:return t=Kn(13,o,i,c),t.elementType=Z,t.lanes=h,t;case fe:return t=Kn(19,o,i,c),t.elementType=fe,t.lanes=h,t;case Y:return $a(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:E=10;break e;case H:E=9;break e;case re:E=11;break e;case le:E=14;break e;case oe:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Kn(E,o,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Wr(t,i,o,l){return t=Kn(7,t,l,i),t.lanes=o,t}function $a(t,i,o,l){return t=Kn(22,t,l,i),t.elementType=Y,t.lanes=o,t.stateNode={isHidden:!1},t}function pc(t,i,o){return t=Kn(6,t,null,i),t.lanes=o,t}function mc(t,i,o){return i=Kn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Yg(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mi(0),this.expirationTimes=mi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mi(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function gc(t,i,o,l,c,h,E,P,B){return t=new Yg(t,i,o,P,B),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Kn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},bu(h),t}function qg(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function Mp(t){if(!t)return or;t=t._reactInternals;e:{if(Gn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Rn(o))return $d(t,o,i)}return i}function Ep(t,i,o,l,c,h,E,P,B){return t=gc(o,l,!0,t,c,h,E,P,B),t.context=Mp(null),o=t.current,l=Tn(),c=hr(o),h=Ii(l,c),h.callback=i??null,ur(o,h,c),t.current.lanes=c,Qt(t,c,l),Ln(t,l),t}function Za(t,i,o,l){var c=i.current,h=Tn(),E=hr(c);return o=Mp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ii(h,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=ur(c,i,E),t!==null&&(ai(t,c,E,h),Ra(t,c,E)),E}function Qa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function _c(t,i){Tp(t,i),(t=t.alternate)&&Tp(t,i)}function Kg(){return null}var wp=typeof reportError=="function"?reportError:function(t){console.error(t)};function vc(t){this._internalRoot=t}Ja.prototype.render=vc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Za(t,i,null,null)},Ja.prototype.unmount=vc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Vr(function(){Za(null,t,null,null)}),i[bi]=null}};function Ja(t){this._internalRoot=t}Ja.prototype.unstable_scheduleHydration=function(t){if(t){var i=gi();t={blockedOn:null,target:t,priority:i};for(var o=0;o<tr.length&&i!==0&&i<tr[o].priority;o++);tr.splice(o,0,t),o===0&&fd(t)}};function xc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function el(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ap(){}function $g(t,i,o,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var ee=Qa(E);h.call(ee)}}var E=Ep(i,l,t,0,null,!1,!1,"",Ap);return t._reactRootContainer=E,t[bi]=E.current,po(t.nodeType===8?t.parentNode:t),Vr(),E}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var P=l;l=function(){var ee=Qa(B);P.call(ee)}}var B=gc(t,0,!1,null,null,!1,!1,"",Ap);return t._reactRootContainer=B,t[bi]=B.current,po(t.nodeType===8?t.parentNode:t),Vr(function(){Za(i,B,o,l)}),B}function tl(t,i,o,l,c){var h=o._reactRootContainer;if(h){var E=h;if(typeof c=="function"){var P=c;c=function(){var B=Qa(E);P.call(B)}}Za(i,E,t,c)}else E=$g(o,i,t,c,l);return Qa(E)}rn=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Nt(i.pendingLanes);o!==0&&(bt(i,o|1),Ln(i,Ht()),(Mt&6)===0&&(Ts=Ht()+500,ar()))}break;case 13:Vr(function(){var l=Ni(t,1);if(l!==null){var c=Tn();ai(l,t,1,c)}}),_c(t,1)}},sn=function(t){if(t.tag===13){var i=Ni(t,134217728);if(i!==null){var o=Tn();ai(i,t,134217728,o)}_c(t,134217728)}},is=function(t){if(t.tag===13){var i=hr(t),o=Ni(t,i);if(o!==null){var l=Tn();ai(o,t,i,l)}_c(t,i)}},gi=function(){return st},ud=function(t,i){var o=st;try{return st=t,i()}finally{st=o}},Pe=function(t,i,o){switch(i){case"input":if(kt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=va(l);if(!c)throw Error(n(90));jt(l),kt(l,c)}}}break;case"textarea":y(t,o);break;case"select":i=o.value,i!=null&&xt(t,!!o.multiple,i,!1)}},it=cc,Pt=Vr;var Zg={usingClientEntryPoint:!1,Events:[_o,fs,va,he,Ae,cc]},Lo={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qg={bundleType:Lo.bundleType,version:Lo.version,rendererPackageName:Lo.rendererPackageName,rendererConfig:Lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Js(t),t===null?null:t.stateNode},findFiberByHostInstance:Lo.findFiberByHostInstance||Kg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Ie=nl.inject(Qg),Te=nl}catch{}}return Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zg,Dn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xc(i))throw Error(n(200));return qg(t,i,null,o)},Dn.createRoot=function(t,i){if(!xc(t))throw Error(n(299));var o=!1,l="",c=wp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=gc(t,1,!1,null,null,o,!1,l,c),t[bi]=i.current,po(t.nodeType===8?t.parentNode:t),new vc(i)},Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Js(i),t=t===null?null:t.stateNode,t},Dn.flushSync=function(t){return Vr(t)},Dn.hydrate=function(t,i,o){if(!el(i))throw Error(n(200));return tl(null,t,i,!0,o)},Dn.hydrateRoot=function(t,i,o){if(!xc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,h="",E=wp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Ep(i,null,t,1,o??null,c,!1,h,E),t[bi]=i.current,po(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Ja(i)},Dn.render=function(t,i,o){if(!el(i))throw Error(n(200));return tl(null,t,i,!1,o)},Dn.unmountComponentAtNode=function(t){if(!el(t))throw Error(n(40));return t._reactRootContainer?(Vr(function(){tl(null,null,t,!1,function(){t._reactRootContainer=null,t[bi]=null})}),!0):!1},Dn.unstable_batchedUpdates=cc,Dn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!el(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return tl(t,i,o,!1,l)},Dn.version="18.3.1-next-f1338f8080-20240426",Dn}var Ip;function o_(){if(Ip)return Mc.exports;Ip=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Mc.exports=s_(),Mc.exports}var Up;function a_(){if(Up)return il;Up=1;var s=o_();return il.createRoot=s.createRoot,il.hydrateRoot=s.hydrateRoot,il}var l_=a_();const u_=Fm(l_),Fp=["Full Stack Developer | MERN | Python","UI/UX Focused Problem Solver","Building Scalable Applications"];function c_(){const[s,e]=Tr.useState(0),[n,r]=Tr.useState(""),[a,u]=Tr.useState(!1);return Tr.useEffect(()=>{const f=Fp[s],p=setTimeout(()=>{a?(r(f.substring(0,n.length-1)),n===""&&(u(!1),e(m=>(m+1)%Fp.length))):(r(f.substring(0,n.length+1)),n===f&&setTimeout(()=>u(!0),1200))},a?50:100);return()=>clearTimeout(p)},[n,a,s]),Oe.jsxs("header",{className:"hero",children:[Oe.jsxs("div",{className:"hero-left",children:[Oe.jsxs("h2",{className:"typing",children:[n,Oe.jsx("span",{className:"cursor",children:"|"})]}),Oe.jsx("h1",{className:"name",children:"Ganagoni Bharath Goud"}),Oe.jsx("p",{className:"bio",children:"Aspiring Full Stack Developer passionate about MERN, Python, and building scalable applications with strong UI/UX focus."}),Oe.jsx("div",{className:"hero-buttons"})]}),Oe.jsx("div",{className:"hero-right",children:Oe.jsx("div",{className:"profile-container",children:Oe.jsx("img",{src:"/Bharath_profile.png",alt:"Ganagoni Bharath Goud",className:"profile-img"})})})]})}function f_(){return Oe.jsxs("section",{className:"section","aria-labelledby":"about-heading",children:[Oe.jsx("h2",{id:"about-heading",children:"About Me"}),Oe.jsx("p",{className:"small",children:"I am Bharath Goud, a passionate and dedicated Computer Science student with strong skills in full-stack development and UI/UX design. I have hands-on experience building web applications using modern technologies like React, Node.js, Express, and MongoDB, and I enjoy creating clean, user-friendly interfaces. Alongside coding, I am skilled in designing intuitive user experiences in Figma and have a keen eye for detail. I thrive in problem-solving, learning new technologies, and delivering high-quality projects that combine functionality and aesthetics. My goal is to contribute to innovative projects that make a real impact while continuously growing as a developer."})]})}var Om={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Op=Ar.createContext&&Ar.createContext(Om),d_=["attr","size","title"];function h_(s,e){if(s==null)return{};var n=p_(s,e),r,a;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);for(a=0;a<u.length;a++)r=u[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(n[r]=s[r])}return n}function p_(s,e){if(s==null)return{};var n={};for(var r in s)if(Object.prototype.hasOwnProperty.call(s,r)){if(e.indexOf(r)>=0)continue;n[r]=s[r]}return n}function Nl(){return Nl=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=n[r])}return s},Nl.apply(this,arguments)}function Bp(s,e){var n=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(s,a).enumerable})),n.push.apply(n,r)}return n}function Il(s){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Bp(Object(n),!0).forEach(function(r){m_(s,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(n)):Bp(Object(n)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(n,r))})}return s}function m_(s,e,n){return e=g_(e),e in s?Object.defineProperty(s,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):s[e]=n,s}function g_(s){var e=__(s,"string");return typeof e=="symbol"?e:e+""}function __(s,e){if(typeof s!="object"||!s)return s;var n=s[Symbol.toPrimitive];if(n!==void 0){var r=n.call(s,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function Bm(s){return s&&s.map((e,n)=>Ar.createElement(e.tag,Il({key:n},e.attr),Bm(e.child)))}function ei(s){return e=>Ar.createElement(v_,Nl({attr:Il({},s.attr)},e),Bm(s.child))}function v_(s){var e=n=>{var{attr:r,size:a,title:u}=s,f=h_(s,d_),d=a||n.size||"1em",p;return n.className&&(p=n.className),s.className&&(p=(p?p+" ":"")+s.className),Ar.createElement("svg",Nl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,f,{className:p,style:Il(Il({color:s.color||n.color},n.style),s.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),u&&Ar.createElement("title",null,u),s.children)};return Op!==void 0?Ar.createElement(Op.Consumer,null,n=>e(n)):e(Om)}function x_(s){return ei({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"},child:[]}]})(s)}function S_(s){return ei({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z"},child:[]}]})(s)}function y_(s){return ei({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"},child:[]}]})(s)}function M_(s){return ei({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"},child:[]}]})(s)}function E_(s){return ei({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"},child:[]}]})(s)}function T_(s){return ei({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"},child:[]}]})(s)}function w_(s){return ei({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(s)}function A_(s){return ei({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z"},child:[]}]})(s)}function C_(s){return ei({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM6.962 7.68c.754 0 1.337.549 1.405 1.2.069.583-.171 1.097-.822 1.406-.343.171-.48.172-.549.069-.034-.069 0-.137.069-.206.617-.514.617-.926.548-1.508-.034-.378-.308-.618-.583-.618-1.2 0-2.914 2.674-2.674 4.629.103.754.549 1.646 1.509 1.646.308 0 .65-.103.96-.24.5-.264.799-.47 1.097-.8-.073-.885.704-2.046 1.851-2.046.515 0 .926.205.96.583.068.514-.377.582-.514.582s-.378-.034-.378-.17c-.034-.138.309-.07.275-.378-.035-.206-.24-.274-.446-.274-.72 0-1.131.994-1.029 1.611.035.275.172.549.447.549.205 0 .514-.31.617-.755.068-.308.343-.514.583-.514.102 0 .17.034.205.171v.138c-.034.137-.137.548-.102.651 0 .069.034.171.17.171.092 0 .436-.18.777-.459.117-.59.253-1.298.253-1.357.034-.24.137-.48.617-.48.103 0 .171.034.205.171v.138l-.136.617c.445-.583 1.097-.994 1.508-.994.172 0 .309.102.309.274 0 .103 0 .274-.069.446-.137.377-.309.96-.412 1.474 0 .137.035.274.207.274.171 0 .685-.206 1.096-.754l.007-.004c-.002-.068-.007-.134-.007-.202 0-.411.035-.754.104-.994.068-.274.411-.514.617-.514.103 0 .205.069.205.171 0 .035 0 .103-.034.137-.137.446-.24.857-.24 1.269 0 .24.034.582.102.788 0 .034.035.069.07.069.068 0 .548-.445.89-1.028-.308-.206-.48-.549-.48-.96 0-.72.446-1.097.858-1.097.343 0 .617.24.617.72 0 .308-.103.65-.274.96h.102a.77.77 0 0 0 .584-.24.293.293 0 0 1 .134-.117c.335-.425.83-.74 1.41-.74.48 0 .924.205.959.582.068.515-.378.618-.515.618l-.002-.002c-.138 0-.377-.035-.377-.172 0-.137.309-.068.274-.376-.034-.206-.24-.275-.446-.275-.686 0-1.13.891-1.028 1.611.034.275.171.583.445.583.206 0 .515-.308.652-.754.068-.274.343-.514.583-.514.103 0 .17.034.205.171 0 .069 0 .206-.137.652-.17.308-.171.48-.137.617.034.274.171.48.309.583.034.034.068.102.068.102 0 .069-.034.138-.137.138-.034 0-.068 0-.103-.035-.514-.205-.72-.548-.789-.891-.205.24-.445.377-.72.377-.445 0-.89-.411-.96-.926a1.609 1.609 0 0 1 .075-.649c-.203.13-.422.203-.623.203h-.17c-.447.652-.927 1.098-1.27 1.303a.896.896 0 0 1-.377.104c-.068 0-.171-.035-.205-.104-.095-.152-.156-.392-.193-.667-.481.527-1.145.805-1.453.805-.343 0-.548-.206-.582-.55v-.376c.102-.754.377-1.2.377-1.337a.074.074 0 0 0-.069-.07c-.24 0-1.028.824-1.166 1.373l-.103.445c-.068.309-.377.515-.582.515-.103 0-.172-.035-.206-.172v-.137l.046-.233c-.435.31-.87.508-1.075.508-.308 0-.48-.172-.514-.412-.206.274-.445.412-.754.412-.352 0-.696-.24-.862-.593-.244.275-.523.553-.852.764-.48.309-1.028.549-1.68.549-.582 0-1.097-.309-1.371-.583-.412-.377-.651-.96-.686-1.509-.205-1.68.823-3.84 2.4-4.8.378-.205.755-.343 1.132-.343zm9.77 3.291c-.104 0-.172.172-.172.343 0 .274.137.583.309.755a1.74 1.74 0 0 0 .102-.583c0-.343-.137-.515-.24-.515z"},child:[]}]})(s)}function R_(s){return ei({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"},child:[]}]})(s)}function b_(s){return ei({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},child:[]}]})(s)}function P_(s){return ei({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"},child:[]}]})(s)}function L_(){const s=[{icon:Oe.jsx(b_,{}),name:"JavaScript"},{icon:Oe.jsx(w_,{}),name:"React"},{icon:Oe.jsx(E_,{}),name:"Node.js"},{icon:Oe.jsx(R_,{}),name:"Express"},{icon:Oe.jsx(P_,{}),name:"MongoDB"},{icon:Oe.jsx(T_,{}),name:"Python"},{icon:Oe.jsx(M_,{}),name:"HTML"},{icon:Oe.jsx(x_,{}),name:"CSS"},{icon:Oe.jsx(S_,{}),name:"Figma"},{icon:Oe.jsx(y_,{}),name:"Git"},{icon:Oe.jsx(C_,{}),name:"Canva"},{icon:Oe.jsx(A_,{}),name:"Photoshop"}];return Oe.jsxs("section",{className:"section skills-section","aria-labelledby":"skills-heading",children:[Oe.jsx("h2",{id:"skills-heading",children:"Skills"}),Oe.jsx("div",{className:"orbit-container",children:s.map((e,n)=>Oe.jsx("div",{className:"orbit-item",style:{"--i":n},children:Oe.jsxs("div",{className:"icon-wrapper",children:[e.icon,Oe.jsx("span",{className:"tooltip",children:e.name})]})},e.name))})]})}const D_=[{title:"Gesture Control System",desc:`A real-time gesture recognition system that controls computer actions (media controls, cursor commands, app shortcuts) using hand signs.
Demo & prototype built with webcam input, real-time landmark detection, and customizable gesture-to-action mapping.`,tech:"Python · OpenCV · MediaPipe · TensorFlow (optional) · JavaScript (frontend demo)",link:"https://drive.google.com/file/d/1IMNEuqDxAF_q8LeBsghonXDGG8qhY9L_/view"},{title:"Netflix Clone",desc:"React, Node.js, Express, MongoDB, TMDB API. Custom auth & OTP verification.",tech:"React · Node.js · MongoDB · TMDB API",link:"https://mern-movie-app-n.onrender.com/"},{title:"Spotify Clone",desc:"A music streaming app clone built with React, Node.js, and Spotify API integration.",tech:"React · Node.js · Spotify API",link:""},{title:"WhatsApp Emergency Alert System",desc:"React frontend with Node.js + Express backend to send quick alerts via WhatsApp.",tech:"React · Node.js · Express",link:"#"},{title:"Calculator Web App",desc:"Vanilla JS calculator with voice input, theme toggle and animated background.",tech:"JavaScript · Web API",link:"https://Bharathgoudganagoni.github.io/calculator-project/"}];function N_(){return Oe.jsxs("section",{className:"section",id:"projects","aria-labelledby":"projects-heading",children:[Oe.jsx("h2",{id:"projects-heading",className:"section-title",children:"My Projects"}),Oe.jsx("div",{className:"projects-grid",children:D_.map((s,e)=>Oe.jsxs("article",{className:"project-card fade-in",style:{animationDelay:`${e*150}ms`},children:[Oe.jsx("h3",{children:s.title}),Oe.jsx("p",{className:"small",children:s.desc}),Oe.jsxs("div",{className:"project-meta",children:[Oe.jsx("strong",{children:"Tech:"})," ",s.tech]}),s.link&&s.link!=="#"&&Oe.jsx("div",{style:{marginTop:15},children:Oe.jsx("a",{className:"view-btn",href:s.link,target:"_blank",rel:"noreferrer",children:"View Project →"})})]},s.title))})]})}function I_(){return Oe.jsx("section",{className:"section contact-section",id:"contact","aria-labelledby":"contact-heading",children:Oe.jsxs("div",{className:"contact-container",children:[Oe.jsx("h2",{id:"contact-heading",className:"contact-title",children:"Contact Me"}),Oe.jsx("p",{className:"contact-description",children:"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let’s connect!"}),Oe.jsxs("div",{className:"contact-buttons",children:[Oe.jsx("a",{href:"mailto:bharathgoudganagoni123@gmail.com",className:"contact-button",children:"📧 Email Me"}),Oe.jsx("a",{href:"https://wa.me/919666809898",target:"_blank",rel:"noopener noreferrer",className:"contact-button",children:"💬 WhatsApp"}),Oe.jsx("a",{href:"https://www.linkedin.com/in/ganagoni-bharath-goud",target:"_blank",rel:"noopener noreferrer",className:"contact-button",children:"🔗 LinkedIn"})]})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jf="182",U_=0,kp=1,F_=2,Cl=1,O_=2,zo=3,Cr=0,In=1,Hi=2,Wi=0,zs=1,zp=2,Vp=3,Hp=4,B_=5,Qr=100,k_=101,z_=102,V_=103,H_=104,G_=200,W_=201,X_=202,j_=203,nf=204,rf=205,Y_=206,q_=207,K_=208,$_=209,Z_=210,Q_=211,J_=212,ev=213,tv=214,sf=0,of=1,af=2,Hs=3,lf=4,uf=5,cf=6,ff=7,km=0,nv=1,iv=2,wi=0,zm=1,Vm=2,Hm=3,Gm=4,Wm=5,Xm=6,jm=7,Ym=300,ns=301,Gs=302,df=303,hf=304,Bl=306,pf=1e3,Gi=1001,mf=1002,dn=1003,rv=1004,rl=1005,Sn=1006,wc=1007,es=1008,Jn=1009,qm=1010,Km=1011,Ho=1012,ed=1013,Ci=1014,Ei=1015,Yi=1016,td=1017,nd=1018,Go=1020,$m=35902,Zm=35899,Qm=1021,Jm=1022,di=1023,qi=1026,ts=1027,e0=1028,id=1029,Ws=1030,rd=1031,sd=1033,Rl=33776,bl=33777,Pl=33778,Ll=33779,gf=35840,_f=35841,vf=35842,xf=35843,Sf=36196,yf=37492,Mf=37496,Ef=37488,Tf=37489,wf=37490,Af=37491,Cf=37808,Rf=37809,bf=37810,Pf=37811,Lf=37812,Df=37813,Nf=37814,If=37815,Uf=37816,Ff=37817,Of=37818,Bf=37819,kf=37820,zf=37821,Vf=36492,Hf=36494,Gf=36495,Wf=36283,Xf=36284,jf=36285,Yf=36286,sv=3200,ov=0,av=1,Er="",Zn="srgb",Xs="srgb-linear",Ul="linear",Lt="srgb",As=7680,Gp=519,lv=512,uv=513,cv=514,od=515,fv=516,dv=517,ad=518,hv=519,Wp=35044,Xp="300 es",Ti=2e3,Fl=2001;function t0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ol(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pv(){const s=Ol("canvas");return s.style.display="block",s}const jp={};function Yp(...s){const e="THREE."+s.shift();console.log(e,...s)}function ot(...s){const e="THREE."+s.shift();console.warn(e,...s)}function At(...s){const e="THREE."+s.shift();console.error(e,...s)}function Wo(...s){const e=s.join(" ");e in jp||(jp[e]=!0,ot(...s))}function mv(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}class Ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ac=Math.PI/180,qf=180/Math.PI;function jo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[n&63|128]+vn[n>>8&255]+"-"+vn[n>>16&255]+vn[n>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function _t(s,e,n){return Math.max(e,Math.min(n,s))}function gv(s,e){return(s%e+e)%e}function Cc(s,e,n){return(1-n)*s+n*e}function No(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class It{constructor(e=0,n=0){It.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],v=r[a+2],g=r[a+3],x=u[f+0],M=u[f+1],T=u[f+2],C=u[f+3];if(d<=0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=g;return}if(d>=1){e[n+0]=x,e[n+1]=M,e[n+2]=T,e[n+3]=C;return}if(g!==C||p!==x||m!==M||v!==T){let S=p*x+m*M+v*T+g*C;S<0&&(x=-x,M=-M,T=-T,C=-C,S=-S);let _=1-d;if(S<.9995){const N=Math.acos(S),I=Math.sin(N);_=Math.sin(_*N)/I,d=Math.sin(d*N)/I,p=p*_+x*d,m=m*_+M*d,v=v*_+T*d,g=g*_+C*d}else{p=p*_+x*d,m=m*_+M*d,v=v*_+T*d,g=g*_+C*d;const N=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=N,m*=N,v*=N,g*=N}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=g}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],v=r[a+3],g=u[f],x=u[f+1],M=u[f+2],T=u[f+3];return e[n]=d*T+v*g+p*M-m*x,e[n+1]=p*T+v*x+m*g-d*M,e[n+2]=m*T+v*M+d*x-p*g,e[n+3]=v*T-d*g-p*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(a/2),g=d(u/2),x=p(r/2),M=p(a/2),T=p(u/2);switch(f){case"XYZ":this._x=x*v*g+m*M*T,this._y=m*M*g-x*v*T,this._z=m*v*T+x*M*g,this._w=m*v*g-x*M*T;break;case"YXZ":this._x=x*v*g+m*M*T,this._y=m*M*g-x*v*T,this._z=m*v*T-x*M*g,this._w=m*v*g+x*M*T;break;case"ZXY":this._x=x*v*g-m*M*T,this._y=m*M*g+x*v*T,this._z=m*v*T+x*M*g,this._w=m*v*g-x*M*T;break;case"ZYX":this._x=x*v*g-m*M*T,this._y=m*M*g+x*v*T,this._z=m*v*T-x*M*g,this._w=m*v*g+x*M*T;break;case"YZX":this._x=x*v*g+m*M*T,this._y=m*M*g+x*v*T,this._z=m*v*T-x*M*g,this._w=m*v*g-x*M*T;break;case"XZY":this._x=x*v*g-m*M*T,this._y=m*M*g-x*v*T,this._z=m*v*T+x*M*g,this._w=m*v*g+x*M*T;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],v=n[6],g=n[10],x=r+d+g;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-p)*M,this._y=(u-m)*M,this._z=(f-a)*M}else if(r>d&&r>g){const M=2*Math.sqrt(1+r-d-g);this._w=(v-p)/M,this._x=.25*M,this._y=(a+f)/M,this._z=(u+m)/M}else if(d>g){const M=2*Math.sqrt(1+d-r-g);this._w=(u-m)/M,this._x=(a+f)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+g-r-d);this._w=(f-a)/M,this._x=(u+m)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+f*d+a*m-u*p,this._y=a*v+f*p+u*d-r*m,this._z=u*v+f*m+r*p-a*d,this._w=f*v-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let r=e._x,a=e._y,u=e._z,f=e._w,d=this.dot(e);d<0&&(r=-r,a=-a,u=-u,f=-f,d=-d);let p=1-n;if(d<.9995){const m=Math.acos(d),v=Math.sin(m);p=Math.sin(p*m)/v,n=Math.sin(n*m)/v,this._x=this._x*p+r*n,this._y=this._y*p+a*n,this._z=this._z*p+u*n,this._w=this._w*p+f*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+a*n,this._z=this._z*p+u*n,this._w=this._w*p+f*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,n=0,r=0){te.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),v=2*(d*n-u*a),g=2*(u*r-f*n);return this.x=n+p*m+f*g-d*v,this.y=r+p*v+d*m-u*g,this.z=a+p*g+u*v-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Rc.copy(this).projectOnVector(e),this.sub(Rc)}reflect(e){return this.sub(Rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rc=new te,qp=new Yo;class ut{constructor(e,n,r,a,u,f,d,p,m){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=n,v[4]=u,v[5]=p,v[6]=r,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],v=r[4],g=r[7],x=r[2],M=r[5],T=r[8],C=a[0],S=a[3],_=a[6],N=a[1],I=a[4],L=a[7],U=a[2],F=a[5],O=a[8];return u[0]=f*C+d*N+p*U,u[3]=f*S+d*I+p*F,u[6]=f*_+d*L+p*O,u[1]=m*C+v*N+g*U,u[4]=m*S+v*I+g*F,u[7]=m*_+v*L+g*O,u[2]=x*C+M*N+T*U,u[5]=x*S+M*I+T*F,u[8]=x*_+M*L+T*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return n*f*v-n*d*m-r*u*v+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],g=v*f-d*m,x=d*p-v*u,M=m*u-f*p,T=n*g+r*x+a*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=g*C,e[1]=(a*m-v*r)*C,e[2]=(d*r-a*f)*C,e[3]=x*C,e[4]=(v*n-a*p)*C,e[5]=(a*u-d*n)*C,e[6]=M*C,e[7]=(r*p-m*n)*C,e[8]=(f*n-r*u)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(bc.makeScale(e,n)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,n){return this.premultiply(bc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bc=new ut,Kp=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$p=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _v(){const s={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(a,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Lt&&(a.r=Xi(a.r),a.g=Xi(a.g),a.b=Xi(a.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Lt&&(a.r=Vs(a.r),a.g=Vs(a.g),a.b=Vs(a.b))),a},workingToColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},colorSpaceToWorking:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Er?Ul:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,f){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,u){return Wo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,u)},toWorkingColorSpace:function(a,u){return Wo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,u)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Xs]:{primaries:e,whitePoint:r,transfer:Ul,toXYZ:Kp,fromXYZ:$p,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:e,whitePoint:r,transfer:Lt,toXYZ:Kp,fromXYZ:$p,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),s}const Et=_v();function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Cs;class vv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Cs===void 0&&(Cs=Ol("canvas")),Cs.width=e.width,Cs.height=e.height;const a=Cs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Cs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ol("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Xi(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Xi(n[r]/255)*255):n[r]=Xi(n[r]);return{data:n,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xv=0;class ld{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(Pc(a[f].image)):u.push(Pc(a[f]))}else u=Pc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Pc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let Sv=0;const Lc=new te;class An extends Ys{constructor(e=An.DEFAULT_IMAGE,n=An.DEFAULT_MAPPING,r=Gi,a=Gi,u=Sn,f=es,d=di,p=Jn,m=An.DEFAULT_ANISOTROPY,v=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=jo(),this.name="",this.source=new ld(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Lc).x}get height(){return this.source.getSize(Lc).y}get depth(){return this.source.getSize(Lc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ot(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){ot(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ym)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pf:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case mf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pf:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case mf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Ym;An.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,n=0,r=0,a=1){qt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],v=p[4],g=p[8],x=p[1],M=p[5],T=p[9],C=p[2],S=p[6],_=p[10];if(Math.abs(v-x)<.01&&Math.abs(g-C)<.01&&Math.abs(T-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+C)<.1&&Math.abs(T+S)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const I=(m+1)/2,L=(M+1)/2,U=(_+1)/2,F=(v+x)/4,O=(g+C)/4,$=(T+S)/4;return I>L&&I>U?I<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(I),a=F/r,u=O/r):L>U?L<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(L),r=F/a,u=$/a):U<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(U),r=O/u,a=$/u),this.set(r,a,u,n),this}let N=Math.sqrt((S-T)*(S-T)+(g-C)*(g-C)+(x-v)*(x-v));return Math.abs(N)<.001&&(N=1),this.x=(S-T)/N,this.y=(g-C)/N,this.z=(x-v)/N,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this.w=_t(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this.w=_t(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yv extends Ys{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new qt(0,0,e,n),this.scissorTest=!1,this.viewport=new qt(0,0,e,n);const a={width:e,height:n,depth:r.depth},u=new An(a);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new ld(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends yv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class n0 extends An{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=dn,this.minFilter=dn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mv extends An{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=dn,this.minFilter=dn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo{constructor(e=new te(1/0,1/0,1/0),n=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(li.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(li.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=li.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,li):li.fromBufferAttribute(u,f),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sl.copy(r.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),ol.subVectors(this.max,Io),Rs.subVectors(e.a,Io),bs.subVectors(e.b,Io),Ps.subVectors(e.c,Io),_r.subVectors(bs,Rs),vr.subVectors(Ps,bs),Xr.subVectors(Rs,Ps);let n=[0,-_r.z,_r.y,0,-vr.z,vr.y,0,-Xr.z,Xr.y,_r.z,0,-_r.x,vr.z,0,-vr.x,Xr.z,0,-Xr.x,-_r.y,_r.x,0,-vr.y,vr.x,0,-Xr.y,Xr.x,0];return!Dc(n,Rs,bs,Ps,ol)||(n=[1,0,0,0,1,0,0,0,1],!Dc(n,Rs,bs,Ps,ol))?!1:(al.crossVectors(_r,vr),n=[al.x,al.y,al.z],Dc(n,Rs,bs,Ps,ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oi=[new te,new te,new te,new te,new te,new te,new te,new te],li=new te,sl=new qo,Rs=new te,bs=new te,Ps=new te,_r=new te,vr=new te,Xr=new te,Io=new te,ol=new te,al=new te,jr=new te;function Dc(s,e,n,r,a){for(let u=0,f=s.length-3;u<=f;u+=3){jr.fromArray(s,u);const d=a.x*Math.abs(jr.x)+a.y*Math.abs(jr.y)+a.z*Math.abs(jr.z),p=e.dot(jr),m=n.dot(jr),v=r.dot(jr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const Ev=new qo,Uo=new te,Nc=new te;class kl{constructor(e=new te,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Ev.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const n=Uo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Uo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(Nc)),this.expandByPoint(Uo.copy(e.center).sub(Nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Bi=new te,Ic=new te,ll=new te,xr=new te,Uc=new te,ul=new te,Fc=new te;class i0{constructor(e=new te,n=new te(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,n),Bi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Ic.copy(e).add(n).multiplyScalar(.5),ll.copy(n).sub(e).normalize(),xr.copy(this.origin).sub(Ic);const u=e.distanceTo(n)*.5,f=-this.direction.dot(ll),d=xr.dot(this.direction),p=-xr.dot(ll),m=xr.lengthSq(),v=Math.abs(1-f*f);let g,x,M,T;if(v>0)if(g=f*p-d,x=f*d-p,T=u*v,g>=0)if(x>=-T)if(x<=T){const C=1/v;g*=C,x*=C,M=g*(g+f*x+2*d)+x*(f*g+x+2*p)+m}else x=u,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*p)+m;else x=-u,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*p)+m;else x<=-T?(g=Math.max(0,-(-f*u+d)),x=g>0?-u:Math.min(Math.max(-u,-p),u),M=-g*g+x*(x+2*p)+m):x<=T?(g=0,x=Math.min(Math.max(-u,-p),u),M=x*(x+2*p)+m):(g=Math.max(0,-(f*u+d)),x=g>0?u:Math.min(Math.max(-u,-p),u),M=-g*g+x*(x+2*p)+m);else x=f>0?-u:u,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Ic).addScaledVector(ll,x),M}intersectSphere(e,n){Bi.subVectors(e.center,this.origin);const r=Bi.dot(this.direction),a=Bi.dot(Bi)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),v>=0?(u=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(u=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),g>=0?(d=(e.min.z-x.z)*g,p=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,p=(e.min.z-x.z)*g),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,n,r,a,u){Uc.subVectors(n,e),ul.subVectors(r,e),Fc.crossVectors(Uc,ul);let f=this.direction.dot(Fc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;xr.subVectors(this.origin,e);const p=d*this.direction.dot(ul.crossVectors(xr,ul));if(p<0)return null;const m=d*this.direction.dot(Uc.cross(xr));if(m<0||p+m>f)return null;const v=-d*xr.dot(Fc);return v<0?null:this.at(v/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,n,r,a,u,f,d,p,m,v,g,x,M,T,C,S){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,v,g,x,M,T,C,S)}set(e,n,r,a,u,f,d,p,m,v,g,x,M,T,C,S){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=u,_[5]=f,_[9]=d,_[13]=p,_[2]=m,_[6]=v,_[10]=g,_[14]=x,_[3]=M,_[7]=T,_[11]=C,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,a=1/Ls.setFromMatrixColumn(e,0).length(),u=1/Ls.setFromMatrixColumn(e,1).length(),f=1/Ls.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),v=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const x=f*v,M=f*g,T=d*v,C=d*g;n[0]=p*v,n[4]=-p*g,n[8]=m,n[1]=M+T*m,n[5]=x-C*m,n[9]=-d*p,n[2]=C-x*m,n[6]=T+M*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*v,M=p*g,T=m*v,C=m*g;n[0]=x+C*d,n[4]=T*d-M,n[8]=f*m,n[1]=f*g,n[5]=f*v,n[9]=-d,n[2]=M*d-T,n[6]=C+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*v,M=p*g,T=m*v,C=m*g;n[0]=x-C*d,n[4]=-f*g,n[8]=T+M*d,n[1]=M+T*d,n[5]=f*v,n[9]=C-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*v,M=f*g,T=d*v,C=d*g;n[0]=p*v,n[4]=T*m-M,n[8]=x*m+C,n[1]=p*g,n[5]=C*m+x,n[9]=M*m-T,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,M=f*m,T=d*p,C=d*m;n[0]=p*v,n[4]=C-x*g,n[8]=T*g+M,n[1]=g,n[5]=f*v,n[9]=-d*v,n[2]=-m*v,n[6]=M*g+T,n[10]=x-C*g}else if(e.order==="XZY"){const x=f*p,M=f*m,T=d*p,C=d*m;n[0]=p*v,n[4]=-g,n[8]=m*v,n[1]=x*g+C,n[5]=f*v,n[9]=M*g-T,n[2]=T*g-M,n[6]=d*v,n[10]=C*g+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tv,e,wv)}lookAt(e,n,r){const a=this.elements;return Vn.subVectors(e,n),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Sr.crossVectors(r,Vn),Sr.lengthSq()===0&&(Math.abs(r.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Sr.crossVectors(r,Vn)),Sr.normalize(),cl.crossVectors(Vn,Sr),a[0]=Sr.x,a[4]=cl.x,a[8]=Vn.x,a[1]=Sr.y,a[5]=cl.y,a[9]=Vn.y,a[2]=Sr.z,a[6]=cl.z,a[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],v=r[1],g=r[5],x=r[9],M=r[13],T=r[2],C=r[6],S=r[10],_=r[14],N=r[3],I=r[7],L=r[11],U=r[15],F=a[0],O=a[4],$=a[8],A=a[12],R=a[1],H=a[5],re=a[9],Z=a[13],fe=a[2],le=a[6],oe=a[10],Y=a[14],X=a[3],de=a[7],ie=a[11],D=a[15];return u[0]=f*F+d*R+p*fe+m*X,u[4]=f*O+d*H+p*le+m*de,u[8]=f*$+d*re+p*oe+m*ie,u[12]=f*A+d*Z+p*Y+m*D,u[1]=v*F+g*R+x*fe+M*X,u[5]=v*O+g*H+x*le+M*de,u[9]=v*$+g*re+x*oe+M*ie,u[13]=v*A+g*Z+x*Y+M*D,u[2]=T*F+C*R+S*fe+_*X,u[6]=T*O+C*H+S*le+_*de,u[10]=T*$+C*re+S*oe+_*ie,u[14]=T*A+C*Z+S*Y+_*D,u[3]=N*F+I*R+L*fe+U*X,u[7]=N*O+I*H+L*le+U*de,u[11]=N*$+I*re+L*oe+U*ie,u[15]=N*A+I*Z+L*Y+U*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],v=e[2],g=e[6],x=e[10],M=e[14],T=e[3],C=e[7],S=e[11],_=e[15],N=p*M-m*x,I=d*M-m*g,L=d*x-p*g,U=f*M-m*v,F=f*x-p*v,O=f*g-d*v;return n*(C*N-S*I+_*L)-r*(T*N-S*U+_*F)+a*(T*I-C*U+_*O)-u*(T*L-C*F+S*O)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],g=e[9],x=e[10],M=e[11],T=e[12],C=e[13],S=e[14],_=e[15],N=g*S*m-C*x*m+C*p*M-d*S*M-g*p*_+d*x*_,I=T*x*m-v*S*m-T*p*M+f*S*M+v*p*_-f*x*_,L=v*C*m-T*g*m+T*d*M-f*C*M-v*d*_+f*g*_,U=T*g*p-v*C*p-T*d*x+f*C*x+v*d*S-f*g*S,F=n*N+r*I+a*L+u*U;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return e[0]=N*O,e[1]=(C*x*u-g*S*u-C*a*M+r*S*M+g*a*_-r*x*_)*O,e[2]=(d*S*u-C*p*u+C*a*m-r*S*m-d*a*_+r*p*_)*O,e[3]=(g*p*u-d*x*u-g*a*m+r*x*m+d*a*M-r*p*M)*O,e[4]=I*O,e[5]=(v*S*u-T*x*u+T*a*M-n*S*M-v*a*_+n*x*_)*O,e[6]=(T*p*u-f*S*u-T*a*m+n*S*m+f*a*_-n*p*_)*O,e[7]=(f*x*u-v*p*u+v*a*m-n*x*m-f*a*M+n*p*M)*O,e[8]=L*O,e[9]=(T*g*u-v*C*u-T*r*M+n*C*M+v*r*_-n*g*_)*O,e[10]=(f*C*u-T*d*u+T*r*m-n*C*m-f*r*_+n*d*_)*O,e[11]=(v*d*u-f*g*u-v*r*m+n*g*m+f*r*M-n*d*M)*O,e[12]=U*O,e[13]=(v*C*a-T*g*a+T*r*x-n*C*x-v*r*S+n*g*S)*O,e[14]=(T*d*a-f*C*a-T*r*p+n*C*p+f*r*S-n*d*S)*O,e[15]=(f*g*a-v*d*a+v*r*p-n*g*p-f*r*x+n*d*x)*O,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,v=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,v*d+r,v*p-a*f,0,m*p-a*d,v*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,v=f+f,g=d+d,x=u*m,M=u*v,T=u*g,C=f*v,S=f*g,_=d*g,N=p*m,I=p*v,L=p*g,U=r.x,F=r.y,O=r.z;return a[0]=(1-(C+_))*U,a[1]=(M+L)*U,a[2]=(T-I)*U,a[3]=0,a[4]=(M-L)*F,a[5]=(1-(x+_))*F,a[6]=(S+N)*F,a[7]=0,a[8]=(T+I)*O,a[9]=(S-N)*O,a[10]=(1-(x+C))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;if(e.x=a[12],e.y=a[13],e.z=a[14],this.determinant()===0)return r.set(1,1,1),n.identity(),this;let u=Ls.set(a[0],a[1],a[2]).length();const f=Ls.set(a[4],a[5],a[6]).length(),d=Ls.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),ui.copy(this);const m=1/u,v=1/f,g=1/d;return ui.elements[0]*=m,ui.elements[1]*=m,ui.elements[2]*=m,ui.elements[4]*=v,ui.elements[5]*=v,ui.elements[6]*=v,ui.elements[8]*=g,ui.elements[9]*=g,ui.elements[10]*=g,n.setFromRotationMatrix(ui),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Ti,p=!1){const m=this.elements,v=2*u/(n-e),g=2*u/(r-a),x=(n+e)/(n-e),M=(r+a)/(r-a);let T,C;if(p)T=u/(f-u),C=f*u/(f-u);else if(d===Ti)T=-(f+u)/(f-u),C=-2*f*u/(f-u);else if(d===Fl)T=-f/(f-u),C=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=g,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Ti,p=!1){const m=this.elements,v=2/(n-e),g=2/(r-a),x=-(n+e)/(n-e),M=-(r+a)/(r-a);let T,C;if(p)T=1/(f-u),C=f/(f-u);else if(d===Ti)T=-2/(f-u),C=-(f+u)/(f-u);else if(d===Fl)T=-1/(f-u),C=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=g,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ls=new te,ui=new Kt,Tv=new te(0,0,0),wv=new te(1,1,1),Sr=new te,cl=new te,Vn=new te,Zp=new Kt,Qp=new Yo;class Ki{constructor(e=0,n=0,r=0,a=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],v=a[9],g=a[2],x=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(_t(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-_t(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(_t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,M),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Zp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Qp.setFromEuler(this),this.setFromQuaternion(Qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class r0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Av=0;const Jp=new te,Ds=new Yo,ki=new Kt,fl=new te,Fo=new te,Cv=new te,Rv=new Yo,em=new te(1,0,0),tm=new te(0,1,0),nm=new te(0,0,1),im={type:"added"},bv={type:"removed"},Ns={type:"childadded",child:null},Oc={type:"childremoved",child:null};class Un extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new te,n=new Ki,r=new Yo,a=new te(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Kt},normalMatrix:{value:new ut}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new r0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(em,e)}rotateY(e){return this.rotateOnAxis(tm,e)}rotateZ(e){return this.rotateOnAxis(nm,e)}translateOnAxis(e,n){return Jp.copy(e).applyQuaternion(this.quaternion),this.position.add(Jp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(em,e)}translateY(e){return this.translateOnAxis(tm,e)}translateZ(e){return this.translateOnAxis(nm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?fl.copy(e):fl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(Fo,fl,this.up):ki.lookAt(fl,Fo,this.up),this.quaternion.setFromRotationMatrix(ki),a&&(ki.extractRotation(a.matrixWorld),Ds.setFromRotationMatrix(ki),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(im),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bv),Oc.child=e,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(im),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,Cv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,Rv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];u(e.shapes,g)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),v=f(e.images),g=f(e.shapes),x=f(e.skeletons),M=f(e.animations),T=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=a,r;function f(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Un.DEFAULT_UP=new te(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new te,zi=new te,Bc=new te,Vi=new te,Is=new te,Us=new te,rm=new te,kc=new te,zc=new te,Vc=new te,Hc=new qt,Gc=new qt,Wc=new qt;class fi{constructor(e=new te,n=new te,r=new te){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ci.subVectors(e,n),a.cross(ci);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ci.subVectors(a,n),zi.subVectors(r,n),Bc.subVectors(e,n);const f=ci.dot(ci),d=ci.dot(zi),p=ci.dot(Bc),m=zi.dot(zi),v=zi.dot(Bc),g=f*m-d*d;if(g===0)return u.set(0,0,0),null;const x=1/g,M=(m*p-d*v)*x,T=(f*v-d*p)*x;return u.set(1-M-T,T,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Vi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Vi.x),p.addScaledVector(f,Vi.y),p.addScaledVector(d,Vi.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return Hc.setScalar(0),Gc.setScalar(0),Wc.setScalar(0),Hc.fromBufferAttribute(e,n),Gc.fromBufferAttribute(e,r),Wc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Hc,u.x),f.addScaledVector(Gc,u.y),f.addScaledVector(Wc,u.z),f}static isFrontFacing(e,n,r,a){return ci.subVectors(r,n),zi.subVectors(e,n),ci.cross(zi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),ci.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return fi.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;Is.subVectors(a,r),Us.subVectors(u,r),kc.subVectors(e,r);const p=Is.dot(kc),m=Us.dot(kc);if(p<=0&&m<=0)return n.copy(r);zc.subVectors(e,a);const v=Is.dot(zc),g=Us.dot(zc);if(v>=0&&g<=v)return n.copy(a);const x=p*g-v*m;if(x<=0&&p>=0&&v<=0)return f=p/(p-v),n.copy(r).addScaledVector(Is,f);Vc.subVectors(e,u);const M=Is.dot(Vc),T=Us.dot(Vc);if(T>=0&&M<=T)return n.copy(u);const C=M*m-p*T;if(C<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(r).addScaledVector(Us,d);const S=v*T-M*g;if(S<=0&&g-v>=0&&M-T>=0)return rm.subVectors(u,a),d=(g-v)/(g-v+(M-T)),n.copy(a).addScaledVector(rm,d);const _=1/(S+C+x);return f=C*_,d=x*_,n.copy(r).addScaledVector(Is,f).addScaledVector(Us,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const s0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},dl={h:0,s:0,l:0};function Xc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Dt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,n),this}setRGB(e,n,r,a=Et.workingColorSpace){return this.r=e,this.g=n,this.b=r,Et.colorSpaceToWorking(this,a),this}setHSL(e,n,r,a=Et.workingColorSpace){if(e=gv(e,1),n=_t(n,0,1),r=_t(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Xc(f,u,e+1/3),this.g=Xc(f,u,e),this.b=Xc(f,u,e-1/3)}return Et.colorSpaceToWorking(this,a),this}setStyle(e,n=Zn){function r(u){u!==void 0&&parseFloat(u)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:ot("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Zn){const r=s0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return Et.workingToColorSpace(xn.copy(this),e),Math.round(_t(xn.r*255,0,255))*65536+Math.round(_t(xn.g*255,0,255))*256+Math.round(_t(xn.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.workingToColorSpace(xn.copy(this),n);const r=xn.r,a=xn.g,u=xn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const v=(d+f)/2;if(d===f)p=0,m=0;else{const g=f-d;switch(m=v<=.5?g/(f+d):g/(2-f-d),f){case r:p=(a-u)/g+(a<u?6:0);break;case a:p=(u-r)/g+2;break;case u:p=(r-a)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=Et.workingColorSpace){return Et.workingToColorSpace(xn.copy(this),n),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Zn){Et.workingToColorSpace(xn.copy(this),e);const n=xn.r,r=xn.g,a=xn.b;return e!==Zn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+n,yr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(yr),e.getHSL(dl);const r=Cc(yr.h,dl.h,n),a=Cc(yr.s,dl.s,n),u=Cc(yr.l,dl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Dt;Dt.NAMES=s0;let Pv=0;class Ko extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=zs,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nf,this.blendDst=rf,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ot(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){ot(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(r.blending=this.blending),this.side!==Cr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==nf&&(r.blendSrc=this.blendSrc),this.blendDst!==rf&&(r.blendDst=this.blendDst),this.blendEquation!==Qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class o0 extends Ko{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=km,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new te,hl=new It;let Lv=0;class hi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lv++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Wp,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)hl.fromBufferAttribute(this,n),hl.applyMatrix3(e),this.setXY(n,hl.x,hl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix3(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix4(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyNormalMatrix(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.transformDirection(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=No(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Nn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=No(n,this.array)),n}setX(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=No(n,this.array)),n}setY(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=No(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=No(n,this.array)),n}setW(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array),a=Nn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array),a=Nn(a,this.array),u=Nn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wp&&(e.usage=this.usage),e}}class a0 extends hi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class l0 extends hi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ji extends hi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Dv=0;const $n=new Kt,jc=new Un,Fs=new te,Hn=new qo,Oo=new qo,un=new te;class pi extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t0(e)?l0:a0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ut().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,n,r){return $n.makeTranslation(e,n,r),this.applyMatrix4($n),this}scale(e,n,r){return $n.makeScale(e,n,r),this.applyMatrix4($n),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ji(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Hn.setFromBufferAttribute(u),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Oo.setFromBufferAttribute(d),this.morphTargetsRelative?(un.addVectors(Hn.min,Oo.min),Hn.expandByPoint(un),un.addVectors(Hn.max,Oo.max),Hn.expandByPoint(un)):(Hn.expandByPoint(Oo.min),Hn.expandByPoint(Oo.max))}Hn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)un.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(un));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)un.fromBufferAttribute(d,m),p&&(Fs.fromBufferAttribute(e,m),un.add(Fs)),a=Math.max(a,r.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let $=0;$<r.count;$++)d[$]=new te,p[$]=new te;const m=new te,v=new te,g=new te,x=new It,M=new It,T=new It,C=new te,S=new te;function _($,A,R){m.fromBufferAttribute(r,$),v.fromBufferAttribute(r,A),g.fromBufferAttribute(r,R),x.fromBufferAttribute(u,$),M.fromBufferAttribute(u,A),T.fromBufferAttribute(u,R),v.sub(m),g.sub(m),M.sub(x),T.sub(x);const H=1/(M.x*T.y-T.x*M.y);isFinite(H)&&(C.copy(v).multiplyScalar(T.y).addScaledVector(g,-M.y).multiplyScalar(H),S.copy(g).multiplyScalar(M.x).addScaledVector(v,-T.x).multiplyScalar(H),d[$].add(C),d[A].add(C),d[R].add(C),p[$].add(S),p[A].add(S),p[R].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let $=0,A=N.length;$<A;++$){const R=N[$],H=R.start,re=R.count;for(let Z=H,fe=H+re;Z<fe;Z+=3)_(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const I=new te,L=new te,U=new te,F=new te;function O($){U.fromBufferAttribute(a,$),F.copy(U);const A=d[$];I.copy(A),I.sub(U.multiplyScalar(U.dot(A))).normalize(),L.crossVectors(F,A);const H=L.dot(p[$])<0?-1:1;f.setXYZW($,I.x,I.y,I.z,H)}for(let $=0,A=N.length;$<A;++$){const R=N[$],H=R.start,re=R.count;for(let Z=H,fe=H+re;Z<fe;Z+=3)O(e.getX(Z+0)),O(e.getX(Z+1)),O(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new hi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const a=new te,u=new te,f=new te,d=new te,p=new te,m=new te,v=new te,g=new te;if(e)for(let x=0,M=e.count;x<M;x+=3){const T=e.getX(x+0),C=e.getX(x+1),S=e.getX(x+2);a.fromBufferAttribute(n,T),u.fromBufferAttribute(n,C),f.fromBufferAttribute(n,S),v.subVectors(f,u),g.subVectors(a,u),v.cross(g),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,S),d.add(v),p.add(v),m.add(v),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,M=n.count;x<M;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),v.subVectors(f,u),g.subVectors(a,u),v.cross(g),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)un.fromBufferAttribute(e,n),un.normalize(),e.setXYZ(n,un.x,un.y,un.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,g=d.normalized,x=new m.constructor(p.length*v);let M=0,T=0;for(let C=0,S=p.length;C<S;C++){d.isInterleavedBufferAttribute?M=p[C]*d.data.stride+d.offset:M=p[C]*v;for(let _=0;_<v;_++)x[T++]=m[M++]}return new hi(x,v,g)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new pi,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let v=0,g=m.length;v<g;v++){const x=m[v],M=e(x,r);p.push(M)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,x=m.length;g<x;g++){const M=m[g];v.push(M.toJSON(e.data))}v.length>0&&(a[p]=v,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(n))}const u=e.morphAttributes;for(const m in u){const v=[],g=u[m];for(let x=0,M=g.length;x<M;x++)v.push(g[x].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,v=f.length;m<v;m++){const g=f[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sm=new Kt,Yr=new i0,pl=new kl,om=new te,ml=new te,gl=new te,_l=new te,Yc=new te,vl=new te,am=new te,xl=new te;class $i extends Un{constructor(e=new pi,n=new o0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){vl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=d[p],g=u[p];v!==0&&(Yc.fromBufferAttribute(g,e),f?vl.addScaledVector(Yc,v):vl.addScaledVector(Yc.sub(n),v))}n.add(vl)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pl.copy(r.boundingSphere),pl.applyMatrix4(u),Yr.copy(e.ray).recast(e.near),!(pl.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(pl,om)===null||Yr.origin.distanceToSquared(om)>(e.far-e.near)**2))&&(sm.copy(u).invert(),Yr.copy(e.ray).applyMatrix4(sm),!(r.boundingBox!==null&&Yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Yr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,C=x.length;T<C;T++){const S=x[T],_=f[S.materialIndex],N=Math.max(S.start,M.start),I=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let L=N,U=I;L<U;L+=3){const F=d.getX(L),O=d.getX(L+1),$=d.getX(L+2);a=Sl(this,_,e,r,m,v,g,F,O,$),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const T=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let S=T,_=C;S<_;S+=3){const N=d.getX(S),I=d.getX(S+1),L=d.getX(S+2);a=Sl(this,f,e,r,m,v,g,N,I,L),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let T=0,C=x.length;T<C;T++){const S=x[T],_=f[S.materialIndex],N=Math.max(S.start,M.start),I=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let L=N,U=I;L<U;L+=3){const F=L,O=L+1,$=L+2;a=Sl(this,_,e,r,m,v,g,F,O,$),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const T=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let S=T,_=C;S<_;S+=3){const N=S,I=S+1,L=S+2;a=Sl(this,f,e,r,m,v,g,N,I,L),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}}}function Nv(s,e,n,r,a,u,f,d){let p;if(e.side===In?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===Cr,d),p===null)return null;xl.copy(d),xl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(xl);return m<n.near||m>n.far?null:{distance:m,point:xl.clone(),object:s}}function Sl(s,e,n,r,a,u,f,d,p,m){s.getVertexPosition(d,ml),s.getVertexPosition(p,gl),s.getVertexPosition(m,_l);const v=Nv(s,e,n,r,ml,gl,_l,am);if(v){const g=new te;fi.getBarycoord(am,ml,gl,_l,g),a&&(v.uv=fi.getInterpolatedAttribute(a,d,p,m,g,new It)),u&&(v.uv1=fi.getInterpolatedAttribute(u,d,p,m,g,new It)),f&&(v.normal=fi.getInterpolatedAttribute(f,d,p,m,g,new te),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new te,materialIndex:0};fi.getNormal(ml,gl,_l,x.normal),v.face=x,v.barycoord=g}return v}class $o extends pi{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],v=[],g=[];let x=0,M=0;T("z","y","x",-1,-1,r,n,e,f,u,0),T("z","y","x",1,-1,r,n,-e,f,u,1),T("x","z","y",1,1,e,r,n,a,f,2),T("x","z","y",1,-1,e,r,-n,a,f,3),T("x","y","z",1,-1,e,n,r,a,u,4),T("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new ji(m,3)),this.setAttribute("normal",new ji(v,3)),this.setAttribute("uv",new ji(g,2));function T(C,S,_,N,I,L,U,F,O,$,A){const R=L/O,H=U/$,re=L/2,Z=U/2,fe=F/2,le=O+1,oe=$+1;let Y=0,X=0;const de=new te;for(let ie=0;ie<oe;ie++){const D=ie*H-Z;for(let se=0;se<le;se++){const Re=se*R-re;de[C]=Re*N,de[S]=D*I,de[_]=fe,m.push(de.x,de.y,de.z),de[C]=0,de[S]=0,de[_]=F>0?1:-1,v.push(de.x,de.y,de.z),g.push(se/O),g.push(1-ie/$),Y+=1}}for(let ie=0;ie<$;ie++)for(let D=0;D<O;D++){const se=x+D+le*ie,Re=x+D+le*(ie+1),Ye=x+(D+1)+le*(ie+1),$e=x+(D+1)+le*ie;p.push(se,Re,$e),p.push(Re,Ye,$e),X+=6}d.addGroup(M,X,A),M+=X,x+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function wn(s){const e={};for(let n=0;n<s.length;n++){const r=js(s[n]);for(const a in r)e[a]=r[a]}return e}function Iv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function u0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const Uv={clone:js,merge:wn};var Fv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ov=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Ko{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fv,this.fragmentShader=Ov,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=Iv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class c0 extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new te,lm=new It,um=new It;class Qn extends c0{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ac*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qf*2*Math.atan(Math.tan(Ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,n){return this.getViewBounds(e,lm,um),n.subVectors(um,lm)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ac*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Os=-90,Bs=1;class Bv extends Un{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Qn(Os,Bs,e,n);a.layers=this.layers,this.add(a);const u=new Qn(Os,Bs,e,n);u.layers=this.layers,this.add(u);const f=new Qn(Os,Bs,e,n);f.layers=this.layers,this.add(f);const d=new Qn(Os,Bs,e,n);d.layers=this.layers,this.add(d);const p=new Qn(Os,Bs,e,n);p.layers=this.layers,this.add(p);const m=new Qn(Os,Bs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===Ti)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Fl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(g,x,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class f0 extends An{constructor(e=[],n=ns,r,a,u,f,d,p,m,v){super(e,n,r,a,u,f,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class d0 extends Ai{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new f0(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new $o(5,5,5),u=new Ri({name:"CubemapFromEquirect",uniforms:js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:Wi});u.uniforms.tEquirect.value=n;const f=new $i(a,u),d=n.minFilter;return n.minFilter===es&&(n.minFilter=Sn),new Bv(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,r=!0,a=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}class yl extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kv={type:"move"};class qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const C of e.hand.values()){const S=n.getJointPose(C,r),_=this._getHandJoint(m,C);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],x=v.position.distanceTo(g.position),M=.02,T=.005;m.inputState.pinching&&x>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(kv)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new yl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class zv extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Vv extends An{constructor(e=null,n=1,r=1,a,u,f,d,p,m=dn,v=dn,g,x){super(null,f,d,p,m,v,a,u,g,x),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kc=new te,Hv=new te,Gv=new ut;class Zr{constructor(e=new te(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Kc.subVectors(r,n).cross(Hv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Kc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Gv.getNormalMatrix(e),a=this.coplanarPoint(Kc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new kl,Wv=new It(.5,.5),Ml=new te;class h0{constructor(e=new Zr,n=new Zr,r=new Zr,a=new Zr,u=new Zr,f=new Zr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ti,r=!1){const a=this.planes,u=e.elements,f=u[0],d=u[1],p=u[2],m=u[3],v=u[4],g=u[5],x=u[6],M=u[7],T=u[8],C=u[9],S=u[10],_=u[11],N=u[12],I=u[13],L=u[14],U=u[15];if(a[0].setComponents(m-f,M-v,_-T,U-N).normalize(),a[1].setComponents(m+f,M+v,_+T,U+N).normalize(),a[2].setComponents(m+d,M+g,_+C,U+I).normalize(),a[3].setComponents(m-d,M-g,_-C,U-I).normalize(),r)a[4].setComponents(p,x,S,L).normalize(),a[5].setComponents(m-p,M-x,_-S,U-L).normalize();else if(a[4].setComponents(m-p,M-x,_-S,U-L).normalize(),n===Ti)a[5].setComponents(m+p,M+x,_+S,U+L).normalize();else if(n===Fl)a[5].setComponents(p,x,S,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){qr.center.set(0,0,0);const n=Wv.distanceTo(e.center);return qr.radius=.7071067811865476+n,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Ml.x=a.normal.x>0?e.max.x:e.min.x,Ml.y=a.normal.y>0?e.max.y:e.min.y,Ml.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class p0 extends Ko{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cm=new Kt,Kf=new i0,El=new kl,Tl=new te;class Xv extends Un{constructor(e=new pi,n=new p0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),El.copy(r.boundingSphere),El.applyMatrix4(a),El.radius+=u,e.ray.intersectsSphere(El)===!1)return;cm.copy(a).invert(),Kf.copy(e.ray).applyMatrix4(cm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,g=r.attributes.position;if(m!==null){const x=Math.max(0,f.start),M=Math.min(m.count,f.start+f.count);for(let T=x,C=M;T<C;T++){const S=m.getX(T);Tl.fromBufferAttribute(g,S),fm(Tl,S,p,a,e,n,this)}}else{const x=Math.max(0,f.start),M=Math.min(g.count,f.start+f.count);for(let T=x,C=M;T<C;T++)Tl.fromBufferAttribute(g,T),fm(Tl,T,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function fm(s,e,n,r,a,u,f){const d=Kf.distanceSqToPoint(s);if(d<n){const p=new te;Kf.closestPointToPoint(s,p),p.applyMatrix4(r);const m=a.ray.origin.distanceTo(p);if(m<a.near||m>a.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class Xo extends An{constructor(e,n,r=Ci,a,u,f,d=dn,p=dn,m,v=qi,g=1){if(v!==qi&&v!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:g};super(x,a,u,f,d,p,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ld(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class jv extends Xo{constructor(e,n=Ci,r=ns,a,u,f=dn,d=dn,p,m=qi){const v={width:e,height:e,depth:1},g=[v,v,v,v,v,v];super(e,e,n,r,a,u,f,d,p,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class m0 extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zl extends pi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,v=p+1,g=e/d,x=n/p,M=[],T=[],C=[],S=[];for(let _=0;_<v;_++){const N=_*x-f;for(let I=0;I<m;I++){const L=I*g-u;T.push(L,-N,0),C.push(0,0,1),S.push(I/d),S.push(1-_/p)}}for(let _=0;_<p;_++)for(let N=0;N<d;N++){const I=N+m*_,L=N+m*(_+1),U=N+1+m*(_+1),F=N+1+m*_;M.push(I,L,F),M.push(L,U,F)}this.setIndex(M),this.setAttribute("position",new ji(T,3)),this.setAttribute("normal",new ji(C,3)),this.setAttribute("uv",new ji(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yv extends Ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qv extends Ko{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kv extends Ko{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class g0 extends c0{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class $v extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function dm(s,e,n,r){const a=Zv(r);switch(n){case Qm:return s*e;case e0:return s*e/a.components*a.byteLength;case id:return s*e/a.components*a.byteLength;case Ws:return s*e*2/a.components*a.byteLength;case rd:return s*e*2/a.components*a.byteLength;case Jm:return s*e*3/a.components*a.byteLength;case di:return s*e*4/a.components*a.byteLength;case sd:return s*e*4/a.components*a.byteLength;case Rl:case bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pl:case Ll:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _f:case xf:return Math.max(s,16)*Math.max(e,8)/4;case gf:case vf:return Math.max(s,8)*Math.max(e,8)/2;case Sf:case yf:case Ef:case Tf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Mf:case wf:case Af:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case bf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Df:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case If:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Uf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Of:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Bf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case kf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case zf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Vf:case Hf:case Gf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Wf:case Xf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case jf:case Yf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Zv(s){switch(s){case Jn:case qm:return{byteLength:1,components:1};case Ho:case Km:case Yi:return{byteLength:2,components:1};case td:case nd:return{byteLength:2,components:4};case Ci:case ed:case Ei:return{byteLength:4,components:1};case $m:case Zm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jf}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _0(){let s=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function Qv(s){const e=new WeakMap;function n(d,p){const m=d.array,v=d.usage,g=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,v),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,p,m){const v=p.array,g=p.updateRanges;if(s.bindBuffer(m,d),g.length===0)s.bufferSubData(m,0,v);else{g.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<g.length;M++){const T=g[x],C=g[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++x,g[x]=C)}g.length=x+1;for(let M=0,T=g.length;M<T;M++){const C=g[M];s.bufferSubData(m,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}var Jv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ex=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ix=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ox=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ax=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ux=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Mx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ex=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ax=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Px=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Nx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$x=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,e1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,l1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,m1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,v1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,M1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,R1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,U1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,F1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,O1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,B1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,z1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,H1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,j1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Y1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,K1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Z1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Q1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,lS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_S=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ES=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,CS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,PS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:Jv,alphahash_pars_fragment:ex,alphamap_fragment:tx,alphamap_pars_fragment:nx,alphatest_fragment:ix,alphatest_pars_fragment:rx,aomap_fragment:sx,aomap_pars_fragment:ox,batching_pars_vertex:ax,batching_vertex:lx,begin_vertex:ux,beginnormal_vertex:cx,bsdfs:fx,iridescence_fragment:dx,bumpmap_pars_fragment:hx,clipping_planes_fragment:px,clipping_planes_pars_fragment:mx,clipping_planes_pars_vertex:gx,clipping_planes_vertex:_x,color_fragment:vx,color_pars_fragment:xx,color_pars_vertex:Sx,color_vertex:yx,common:Mx,cube_uv_reflection_fragment:Ex,defaultnormal_vertex:Tx,displacementmap_pars_vertex:wx,displacementmap_vertex:Ax,emissivemap_fragment:Cx,emissivemap_pars_fragment:Rx,colorspace_fragment:bx,colorspace_pars_fragment:Px,envmap_fragment:Lx,envmap_common_pars_fragment:Dx,envmap_pars_fragment:Nx,envmap_pars_vertex:Ix,envmap_physical_pars_fragment:Xx,envmap_vertex:Ux,fog_vertex:Fx,fog_pars_vertex:Ox,fog_fragment:Bx,fog_pars_fragment:kx,gradientmap_pars_fragment:zx,lightmap_pars_fragment:Vx,lights_lambert_fragment:Hx,lights_lambert_pars_fragment:Gx,lights_pars_begin:Wx,lights_toon_fragment:jx,lights_toon_pars_fragment:Yx,lights_phong_fragment:qx,lights_phong_pars_fragment:Kx,lights_physical_fragment:$x,lights_physical_pars_fragment:Zx,lights_fragment_begin:Qx,lights_fragment_maps:Jx,lights_fragment_end:e1,logdepthbuf_fragment:t1,logdepthbuf_pars_fragment:n1,logdepthbuf_pars_vertex:i1,logdepthbuf_vertex:r1,map_fragment:s1,map_pars_fragment:o1,map_particle_fragment:a1,map_particle_pars_fragment:l1,metalnessmap_fragment:u1,metalnessmap_pars_fragment:c1,morphinstance_vertex:f1,morphcolor_vertex:d1,morphnormal_vertex:h1,morphtarget_pars_vertex:p1,morphtarget_vertex:m1,normal_fragment_begin:g1,normal_fragment_maps:_1,normal_pars_fragment:v1,normal_pars_vertex:x1,normal_vertex:S1,normalmap_pars_fragment:y1,clearcoat_normal_fragment_begin:M1,clearcoat_normal_fragment_maps:E1,clearcoat_pars_fragment:T1,iridescence_pars_fragment:w1,opaque_fragment:A1,packing:C1,premultiplied_alpha_fragment:R1,project_vertex:b1,dithering_fragment:P1,dithering_pars_fragment:L1,roughnessmap_fragment:D1,roughnessmap_pars_fragment:N1,shadowmap_pars_fragment:I1,shadowmap_pars_vertex:U1,shadowmap_vertex:F1,shadowmask_pars_fragment:O1,skinbase_vertex:B1,skinning_pars_vertex:k1,skinning_vertex:z1,skinnormal_vertex:V1,specularmap_fragment:H1,specularmap_pars_fragment:G1,tonemapping_fragment:W1,tonemapping_pars_fragment:X1,transmission_fragment:j1,transmission_pars_fragment:Y1,uv_pars_fragment:q1,uv_pars_vertex:K1,uv_vertex:$1,worldpos_vertex:Z1,background_vert:Q1,background_frag:J1,backgroundCube_vert:eS,backgroundCube_frag:tS,cube_vert:nS,cube_frag:iS,depth_vert:rS,depth_frag:sS,distance_vert:oS,distance_frag:aS,equirect_vert:lS,equirect_frag:uS,linedashed_vert:cS,linedashed_frag:fS,meshbasic_vert:dS,meshbasic_frag:hS,meshlambert_vert:pS,meshlambert_frag:mS,meshmatcap_vert:gS,meshmatcap_frag:_S,meshnormal_vert:vS,meshnormal_frag:xS,meshphong_vert:SS,meshphong_frag:yS,meshphysical_vert:MS,meshphysical_frag:ES,meshtoon_vert:TS,meshtoon_frag:wS,points_vert:AS,points_frag:CS,shadow_vert:RS,shadow_frag:bS,sprite_vert:PS,sprite_frag:LS},De={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Mi={basic:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Dt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:wn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:wn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Dt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:wn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:wn([De.points,De.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:wn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:wn([De.common,De.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:wn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:wn([De.sprite,De.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:wn([De.common,De.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:wn([De.lights,De.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Mi.physical={uniforms:wn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const wl={r:0,b:0,g:0},Kr=new Ki,DS=new Kt;function NS(s,e,n,r,a,u,f){const d=new Dt(0);let p=u===!0?0:1,m,v,g=null,x=0,M=null;function T(I){let L=I.isScene===!0?I.background:null;return L&&L.isTexture&&(L=(I.backgroundBlurriness>0?n:e).get(L)),L}function C(I){let L=!1;const U=T(I);U===null?_(d,p):U&&U.isColor&&(_(U,1),L=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,f):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(I,L){const U=T(L);U&&(U.isCubeTexture||U.mapping===Bl)?(v===void 0&&(v=new $i(new $o(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:js(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(F,O,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),Kr.copy(L.backgroundRotation),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),v.material.uniforms.envMap.value=U,v.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(DS.makeRotationFromEuler(Kr)),v.material.toneMapped=Et.getTransfer(U.colorSpace)!==Lt,(g!==U||x!==U.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,g=U,x=U.version,M=s.toneMapping),v.layers.enableAll(),I.unshift(v,v.geometry,v.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new $i(new zl(2,2),new Ri({name:"BackgroundMaterial",uniforms:js(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Et.getTransfer(U.colorSpace)!==Lt,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(g!==U||x!==U.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,g=U,x=U.version,M=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function _(I,L){I.getRGB(wl,u0(s)),r.buffers.color.setClear(wl.r,wl.g,wl.b,L,f)}function N(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(I,L=1){d.set(I),p=L,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,_(d,p)},render:C,addToRenderList:S,dispose:N}}function IS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(R,H,re,Z,fe){let le=!1;const oe=g(Z,re,H);u!==oe&&(u=oe,m(u.object)),le=M(R,Z,re,fe),le&&T(R,Z,re,fe),fe!==null&&e.update(fe,s.ELEMENT_ARRAY_BUFFER),(le||f)&&(f=!1,L(R,H,re,Z),fe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function p(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function v(R){return s.deleteVertexArray(R)}function g(R,H,re){const Z=re.wireframe===!0;let fe=r[R.id];fe===void 0&&(fe={},r[R.id]=fe);let le=fe[H.id];le===void 0&&(le={},fe[H.id]=le);let oe=le[Z];return oe===void 0&&(oe=x(p()),le[Z]=oe),oe}function x(R){const H=[],re=[],Z=[];for(let fe=0;fe<n;fe++)H[fe]=0,re[fe]=0,Z[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:re,attributeDivisors:Z,object:R,attributes:{},index:null}}function M(R,H,re,Z){const fe=u.attributes,le=H.attributes;let oe=0;const Y=re.getAttributes();for(const X in Y)if(Y[X].location>=0){const ie=fe[X];let D=le[X];if(D===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(D=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(D=R.instanceColor)),ie===void 0||ie.attribute!==D||D&&ie.data!==D.data)return!0;oe++}return u.attributesNum!==oe||u.index!==Z}function T(R,H,re,Z){const fe={},le=H.attributes;let oe=0;const Y=re.getAttributes();for(const X in Y)if(Y[X].location>=0){let ie=le[X];ie===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor));const D={};D.attribute=ie,ie&&ie.data&&(D.data=ie.data),fe[X]=D,oe++}u.attributes=fe,u.attributesNum=oe,u.index=Z}function C(){const R=u.newAttributes;for(let H=0,re=R.length;H<re;H++)R[H]=0}function S(R){_(R,0)}function _(R,H){const re=u.newAttributes,Z=u.enabledAttributes,fe=u.attributeDivisors;re[R]=1,Z[R]===0&&(s.enableVertexAttribArray(R),Z[R]=1),fe[R]!==H&&(s.vertexAttribDivisor(R,H),fe[R]=H)}function N(){const R=u.newAttributes,H=u.enabledAttributes;for(let re=0,Z=H.length;re<Z;re++)H[re]!==R[re]&&(s.disableVertexAttribArray(re),H[re]=0)}function I(R,H,re,Z,fe,le,oe){oe===!0?s.vertexAttribIPointer(R,H,re,fe,le):s.vertexAttribPointer(R,H,re,Z,fe,le)}function L(R,H,re,Z){C();const fe=Z.attributes,le=re.getAttributes(),oe=H.defaultAttributeValues;for(const Y in le){const X=le[Y];if(X.location>=0){let de=fe[Y];if(de===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),de!==void 0){const ie=de.normalized,D=de.itemSize,se=e.get(de);if(se===void 0)continue;const Re=se.buffer,Ye=se.type,$e=se.bytesPerElement,J=Ye===s.INT||Ye===s.UNSIGNED_INT||de.gpuType===ed;if(de.isInterleavedBufferAttribute){const ue=de.data,Se=ue.stride,Be=de.offset;if(ue.isInstancedInterleavedBuffer){for(let Ne=0;Ne<X.locationSize;Ne++)_(X.location+Ne,ue.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ne=0;Ne<X.locationSize;Ne++)S(X.location+Ne);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let Ne=0;Ne<X.locationSize;Ne++)I(X.location+Ne,D/X.locationSize,Ye,ie,Se*$e,(Be+D/X.locationSize*Ne)*$e,J)}else{if(de.isInstancedBufferAttribute){for(let ue=0;ue<X.locationSize;ue++)_(X.location+ue,de.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ue=0;ue<X.locationSize;ue++)S(X.location+ue);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let ue=0;ue<X.locationSize;ue++)I(X.location+ue,D/X.locationSize,Ye,ie,D*$e,D/X.locationSize*ue*$e,J)}}else if(oe!==void 0){const ie=oe[Y];if(ie!==void 0)switch(ie.length){case 2:s.vertexAttrib2fv(X.location,ie);break;case 3:s.vertexAttrib3fv(X.location,ie);break;case 4:s.vertexAttrib4fv(X.location,ie);break;default:s.vertexAttrib1fv(X.location,ie)}}}}N()}function U(){$();for(const R in r){const H=r[R];for(const re in H){const Z=H[re];for(const fe in Z)v(Z[fe].object),delete Z[fe];delete H[re]}delete r[R]}}function F(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const re in H){const Z=H[re];for(const fe in Z)v(Z[fe].object),delete Z[fe];delete H[re]}delete r[R.id]}function O(R){for(const H in r){const re=r[H];if(re[R.id]===void 0)continue;const Z=re[R.id];for(const fe in Z)v(Z[fe].object),delete Z[fe];delete re[R.id]}}function $(){A(),f=!0,u!==a&&(u=a,m(u.object))}function A(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:$,resetDefaultState:A,dispose:U,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:S,disableUnusedAttributes:N}}function US(s,e,n){let r;function a(m){r=m}function u(m,v){s.drawArrays(r,m,v),n.update(v,r,1)}function f(m,v,g){g!==0&&(s.drawArraysInstanced(r,m,v,g),n.update(v,r,g))}function d(m,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,g);let M=0;for(let T=0;T<g;T++)M+=v[T];n.update(M,r,1)}function p(m,v,g,x){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<m.length;T++)f(m[T],v[T],x[T]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,g);let T=0;for(let C=0;C<g;C++)T+=v[C]*x[C];n.update(T,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function FS(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(O){return!(O!==di&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const $=O===Yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Jn&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ei&&!$)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(ot("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),F=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:N,maxVaryings:I,maxFragmentUniforms:L,maxSamples:U,samples:F}}function OS(s){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Zr,d=new ut,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const M=g.length!==0||x||r!==0||a;return a=x,r=g.length,M},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,x){n=v(g,x,0)},this.setState=function(g,x,M){const T=g.clippingPlanes,C=g.clipIntersection,S=g.clipShadows,_=s.get(g);if(!a||T===null||T.length===0||u&&!S)u?v(null):m();else{const N=u?0:r,I=N*4;let L=_.clippingState||null;p.value=L,L=v(T,x,I,M);for(let U=0;U!==I;++U)L[U]=n[U];_.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,x,M,T){const C=g!==null?g.length:0;let S=null;if(C!==0){if(S=p.value,T!==!0||S===null){const _=M+C*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(S===null||S.length<_)&&(S=new Float32Array(_));for(let I=0,L=M;I!==C;++I,L+=4)f.copy(g[I]).applyMatrix4(N,d),f.normal.toArray(S,L),S[L+3]=f.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}function BS(s){let e=new WeakMap;function n(f,d){return d===df?f.mapping=ns:d===hf&&(f.mapping=Gs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===df||d===hf)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new d0(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const wr=4,hm=[.125,.215,.35,.446,.526,.582],Jr=20,kS=256,Bo=new g0,pm=new Dt;let $c=null,Zc=0,Qc=0,Jc=!1;const zS=new te;class mm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,a=100,u={}){const{size:f=256,position:d=zS}=u;$c=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,a,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($c,Zc,Qc),this._renderer.xr.enabled=Jc,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ns||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$c=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Yi,format:di,colorSpace:Xs,depthBuffer:!1},a=gm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gm(e,n,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=VS(u)),this._blurMaterial=GS(u,e,n),this._ggxMaterial=HS(u,e,n)}return a}_compileMaterial(e){const n=new $i(new pi,e);this._renderer.compile(n,Bo)}_sceneToCubeUV(e,n,r,a,u){const p=new Qn(90,1,n,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,M=g.toneMapping;g.getClearColor(pm),g.toneMapping=wi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(a),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $i(new $o,new o0({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let _=!1;const N=e.background;N?N.isColor&&(S.color.copy(N),e.background=null,_=!0):(S.color.copy(pm),_=!0);for(let I=0;I<6;I++){const L=I%3;L===0?(p.up.set(0,m[I],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+v[I],u.y,u.z)):L===1?(p.up.set(0,0,m[I]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+v[I],u.z)):(p.up.set(0,m[I],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+v[I]));const U=this._cubeSize;ks(a,L*U,I>2?U:0,U,U),g.setRenderTarget(a),_&&g.render(C,p),g.render(e,p)}g.toneMapping=M,g.autoClear=x,e.background=N}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===ns||e.mapping===Gs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_m());const u=a?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=u;const d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;ks(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,Bo)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let u=1;u<a;u++)this._applyGGXFilter(e,u-1,u);n.autoClear=r}_applyGGXFilter(e,n,r){const a=this._renderer,u=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[r];d.material=f;const p=f.uniforms,m=r/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),g=Math.sqrt(m*m-v*v),x=0+m*1.25,M=g*x,{_lodMax:T}=this,C=this._sizeLods[r],S=3*C*(r>T-wr?r-T+wr:0),_=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=T-n,ks(u,S,_,3*C,2*C),a.setRenderTarget(u),a.render(d,Bo),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=T-r,ks(e,S,_,3*C,2*C),a.setRenderTarget(e),a.render(d,Bo)}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[a];g.material=m;const x=m.uniforms,M=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Jr-1),C=u/T,S=isFinite(u)?1+Math.floor(v*C):Jr;S>Jr&&ot(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Jr}`);const _=[];let N=0;for(let O=0;O<Jr;++O){const $=O/C,A=Math.exp(-$*$/2);_.push(A),O===0?N+=A:O<S&&(N+=2*A)}for(let O=0;O<_.length;O++)_[O]=_[O]/N;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:I}=this;x.dTheta.value=T,x.mipInt.value=I-r;const L=this._sizeLods[a],U=3*L*(a>I-wr?a-I+wr:0),F=4*(this._cubeSize-L);ks(n,U,F,3*L,2*L),p.setRenderTarget(n),p.render(g,Bo)}}function VS(s){const e=[],n=[],r=[];let a=s;const u=s-wr+1+hm.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);e.push(d);let p=1/d;f>s-wr?p=hm[f-s+wr-1]:f===0&&(p=0),n.push(p);const m=1/(d-2),v=-m,g=1+m,x=[v,v,g,v,g,g,v,v,g,g,v,g],M=6,T=6,C=3,S=2,_=1,N=new Float32Array(C*T*M),I=new Float32Array(S*T*M),L=new Float32Array(_*T*M);for(let F=0;F<M;F++){const O=F%3*2/3-1,$=F>2?0:-1,A=[O,$,0,O+2/3,$,0,O+2/3,$+1,0,O,$,0,O+2/3,$+1,0,O,$+1,0];N.set(A,C*T*F),I.set(x,S*T*F);const R=[F,F,F,F,F,F];L.set(R,_*T*F)}const U=new pi;U.setAttribute("position",new hi(N,C)),U.setAttribute("uv",new hi(I,S)),U.setAttribute("faceIndex",new hi(L,_)),r.push(new $i(U,null)),a>wr&&a--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function gm(s,e,n){const r=new Ai(s,e,n);return r.texture.mapping=Bl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ks(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function HS(s,e,n){return new Ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function GS(s,e,n){const r=new Float32Array(Jr),a=new te(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function _m(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function vm(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function WS(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===df||p===hf,v=p===ns||p===Gs;if(m||v){let g=e.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new mm(s)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return m&&M&&M.height>0||v&&M&&a(M)?(n===null&&(n=new mm(s)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function a(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function XS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Wo("WebGLRenderer: "+r+" extension not supported."),a}}}function jS(s,e,n,r){const a={},u=new WeakMap;function f(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",f),delete a[x.id];const M=u.get(x);M&&(e.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(g,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(g){const x=g.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function m(g){const x=[],M=g.index,T=g.attributes.position;let C=0;if(M!==null){const N=M.array;C=M.version;for(let I=0,L=N.length;I<L;I+=3){const U=N[I+0],F=N[I+1],O=N[I+2];x.push(U,F,F,O,O,U)}}else if(T!==void 0){const N=T.array;C=T.version;for(let I=0,L=N.length/3-1;I<L;I+=3){const U=I+0,F=I+1,O=I+2;x.push(U,F,F,O,O,U)}}else return;const S=new(t0(x)?l0:a0)(x,1);S.version=C;const _=u.get(g);_&&e.remove(_),u.set(g,S)}function v(g){const x=u.get(g);if(x){const M=g.index;M!==null&&x.version<M.version&&m(g)}else m(g);return u.get(g)}return{get:d,update:p,getWireframeAttribute:v}}function YS(s,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,M){s.drawElements(r,M,u,x*f),n.update(M,r,1)}function m(x,M,T){T!==0&&(s.drawElementsInstanced(r,M,u,x*f,T),n.update(M,r,T))}function v(x,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,x,0,T);let S=0;for(let _=0;_<T;_++)S+=M[_];n.update(S,r,1)}function g(x,M,T,C){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)m(x[_]/f,M[_],C[_]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,C,0,T);let _=0;for(let N=0;N<T;N++)_+=M[N]*C[N];n.update(_,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function qS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:At("WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function KS(s,e,n){const r=new WeakMap,a=new qt;function u(f,d,p){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==g){let R=function(){$.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var M=R;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let L=0;T===!0&&(L=1),C===!0&&(L=2),S===!0&&(L=3);let U=d.attributes.position.count*L,F=1;U>e.maxTextureSize&&(F=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const O=new Float32Array(U*F*4*g),$=new n0(O,U,F,g);$.type=Ei,$.needsUpdate=!0;const A=L*4;for(let H=0;H<g;H++){const re=_[H],Z=N[H],fe=I[H],le=U*F*4*H;for(let oe=0;oe<re.count;oe++){const Y=oe*A;T===!0&&(a.fromBufferAttribute(re,oe),O[le+Y+0]=a.x,O[le+Y+1]=a.y,O[le+Y+2]=a.z,O[le+Y+3]=0),C===!0&&(a.fromBufferAttribute(Z,oe),O[le+Y+4]=a.x,O[le+Y+5]=a.y,O[le+Y+6]=a.z,O[le+Y+7]=0),S===!0&&(a.fromBufferAttribute(fe,oe),O[le+Y+8]=a.x,O[le+Y+9]=a.y,O[le+Y+10]=a.z,O[le+Y+11]=fe.itemSize===4?a.w:1)}}x={count:g,texture:$,size:new It(U,F)},r.set(d,x),d.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let T=0;for(let S=0;S<m.length;S++)T+=m[S];const C=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function $S(s,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,v=p.geometry,g=e.get(p,v);if(a.get(g)!==m&&(e.update(g),a.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return g}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}const ZS={[zm]:"LINEAR_TONE_MAPPING",[Vm]:"REINHARD_TONE_MAPPING",[Hm]:"CINEON_TONE_MAPPING",[Gm]:"ACES_FILMIC_TONE_MAPPING",[Xm]:"AGX_TONE_MAPPING",[jm]:"NEUTRAL_TONE_MAPPING",[Wm]:"CUSTOM_TONE_MAPPING"};function QS(s,e,n,r,a){const u=new Ai(e,n,{type:s,depthBuffer:r,stencilBuffer:a}),f=new Ai(e,n,{type:Yi,depthBuffer:!1,stencilBuffer:!1}),d=new pi;d.setAttribute("position",new ji([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ji([0,2,0,0,2,0],2));const p=new Yv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new $i(d,p),v=new g0(-1,1,1,-1,0,1);let g=null,x=null,M=!1,T,C=null,S=[],_=!1;this.setSize=function(N,I){u.setSize(N,I),f.setSize(N,I);for(let L=0;L<S.length;L++){const U=S[L];U.setSize&&U.setSize(N,I)}},this.setEffects=function(N){S=N,_=S.length>0&&S[0].isRenderPass===!0;const I=u.width,L=u.height;for(let U=0;U<S.length;U++){const F=S[U];F.setSize&&F.setSize(I,L)}},this.begin=function(N,I){if(M||N.toneMapping===wi&&S.length===0)return!1;if(C=I,I!==null){const L=I.width,U=I.height;(u.width!==L||u.height!==U)&&this.setSize(L,U)}return _===!1&&N.setRenderTarget(u),T=N.toneMapping,N.toneMapping=wi,!0},this.hasRenderPass=function(){return _},this.end=function(N,I){N.toneMapping=T,M=!0;let L=u,U=f;for(let F=0;F<S.length;F++){const O=S[F];if(O.enabled!==!1&&(O.render(N,U,L,I),O.needsSwap!==!1)){const $=L;L=U,U=$}}if(g!==N.outputColorSpace||x!==N.toneMapping){g=N.outputColorSpace,x=N.toneMapping,p.defines={},Et.getTransfer(g)===Lt&&(p.defines.SRGB_TRANSFER="");const F=ZS[x];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=L.texture,N.setRenderTarget(C),N.render(m,v),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.dispose(),f.dispose(),d.dispose(),p.dispose()}}const v0=new An,$f=new Xo(1,1),x0=new n0,S0=new Mv,y0=new f0,xm=[],Sm=[],ym=new Float32Array(16),Mm=new Float32Array(9),Em=new Float32Array(4);function qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=xm[a];if(u===void 0&&(u=new Float32Array(a),xm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(u,d)}return u}function tn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function nn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Hl(s,e){let n=Sm[e];n===void 0&&(n=new Int32Array(e),Sm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function JS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function ey(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;s.uniform2fv(this.addr,e),nn(n,e)}}function ty(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(tn(n,e))return;s.uniform3fv(this.addr,e),nn(n,e)}}function ny(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;s.uniform4fv(this.addr,e),nn(n,e)}}function iy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(tn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,r))return;Em.set(r),s.uniformMatrix2fv(this.addr,!1,Em),nn(n,r)}}function ry(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(tn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,r))return;Mm.set(r),s.uniformMatrix3fv(this.addr,!1,Mm),nn(n,r)}}function sy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(tn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,r))return;ym.set(r),s.uniformMatrix4fv(this.addr,!1,ym),nn(n,r)}}function oy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function ay(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;s.uniform2iv(this.addr,e),nn(n,e)}}function ly(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(tn(n,e))return;s.uniform3iv(this.addr,e),nn(n,e)}}function uy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;s.uniform4iv(this.addr,e),nn(n,e)}}function cy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function fy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;s.uniform2uiv(this.addr,e),nn(n,e)}}function dy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(tn(n,e))return;s.uniform3uiv(this.addr,e),nn(n,e)}}function hy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;s.uniform4uiv(this.addr,e),nn(n,e)}}function py(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?($f.compareFunction=n.isReversedDepthBuffer()?ad:od,u=$f):u=v0,n.setTexture2D(e||u,a)}function my(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||S0,a)}function gy(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||y0,a)}function _y(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||x0,a)}function vy(s){switch(s){case 5126:return JS;case 35664:return ey;case 35665:return ty;case 35666:return ny;case 35674:return iy;case 35675:return ry;case 35676:return sy;case 5124:case 35670:return oy;case 35667:case 35671:return ay;case 35668:case 35672:return ly;case 35669:case 35673:return uy;case 5125:return cy;case 36294:return fy;case 36295:return dy;case 36296:return hy;case 35678:case 36198:case 36298:case 36306:case 35682:return py;case 35679:case 36299:case 36307:return my;case 35680:case 36300:case 36308:case 36293:return gy;case 36289:case 36303:case 36311:case 36292:return _y}}function xy(s,e){s.uniform1fv(this.addr,e)}function Sy(s,e){const n=qs(e,this.size,2);s.uniform2fv(this.addr,n)}function yy(s,e){const n=qs(e,this.size,3);s.uniform3fv(this.addr,n)}function My(s,e){const n=qs(e,this.size,4);s.uniform4fv(this.addr,n)}function Ey(s,e){const n=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function Ty(s,e){const n=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function wy(s,e){const n=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function Ay(s,e){s.uniform1iv(this.addr,e)}function Cy(s,e){s.uniform2iv(this.addr,e)}function Ry(s,e){s.uniform3iv(this.addr,e)}function by(s,e){s.uniform4iv(this.addr,e)}function Py(s,e){s.uniform1uiv(this.addr,e)}function Ly(s,e){s.uniform2uiv(this.addr,e)}function Dy(s,e){s.uniform3uiv(this.addr,e)}function Ny(s,e){s.uniform4uiv(this.addr,e)}function Iy(s,e,n){const r=this.cache,a=e.length,u=Hl(n,a);tn(r,u)||(s.uniform1iv(this.addr,u),nn(r,u));let f;this.type===s.SAMPLER_2D_SHADOW?f=$f:f=v0;for(let d=0;d!==a;++d)n.setTexture2D(e[d]||f,u[d])}function Uy(s,e,n){const r=this.cache,a=e.length,u=Hl(n,a);tn(r,u)||(s.uniform1iv(this.addr,u),nn(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||S0,u[f])}function Fy(s,e,n){const r=this.cache,a=e.length,u=Hl(n,a);tn(r,u)||(s.uniform1iv(this.addr,u),nn(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||y0,u[f])}function Oy(s,e,n){const r=this.cache,a=e.length,u=Hl(n,a);tn(r,u)||(s.uniform1iv(this.addr,u),nn(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||x0,u[f])}function By(s){switch(s){case 5126:return xy;case 35664:return Sy;case 35665:return yy;case 35666:return My;case 35674:return Ey;case 35675:return Ty;case 35676:return wy;case 5124:case 35670:return Ay;case 35667:case 35671:return Cy;case 35668:case 35672:return Ry;case 35669:case 35673:return by;case 5125:return Py;case 36294:return Ly;case 36295:return Dy;case 36296:return Ny;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Uy;case 35680:case 36300:case 36308:case 36293:return Fy;case 36289:case 36303:case 36311:case 36292:return Oy}}class ky{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=vy(n.type)}}class zy{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=By(n.type)}}class Vy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const ef=/(\w+)(\])?(\[|\.)?/g;function Tm(s,e){s.seq.push(e),s.map[e.id]=e}function Hy(s,e,n){const r=s.name,a=r.length;for(ef.lastIndex=0;;){const u=ef.exec(r),f=ef.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){Tm(n,m===void 0?new ky(d,s,e):new zy(d,s,e));break}else{let g=n.map[d];g===void 0&&(g=new Vy(d),Tm(n,g)),n=g}}}class Dl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const d=e.getActiveUniform(n,f),p=e.getUniformLocation(n,d.name);Hy(d,p,this)}const a=[],u=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(f):u.push(f);a.length>0&&(this.seq=a.concat(u))}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function wm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const Gy=37297;let Wy=0;function Xy(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const Am=new ut;function jy(s){Et._getMatrix(Am,Et.workingColorSpace,s);const e=`mat3( ${Am.elements.map(n=>n.toFixed(4))} )`;switch(Et.getTransfer(s)){case Ul:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Cm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),u=(s.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return n.toUpperCase()+`

`+u+`

`+Xy(s.getShaderSource(e),d)}else return u}function Yy(s,e){const n=jy(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const qy={[zm]:"Linear",[Vm]:"Reinhard",[Hm]:"Cineon",[Gm]:"ACESFilmic",[Xm]:"AgX",[jm]:"Neutral",[Wm]:"Custom"};function Ky(s,e){const n=qy[e];return n===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Al=new te;function $y(){Et.getLuminanceCoefficients(Al);const s=Al.x.toFixed(4),e=Al.y.toFixed(4),n=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function Qy(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function Jy(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function Vo(s){return s!==""}function Rm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zf(s){return s.replace(eM,nM)}const tM=new Map;function nM(s,e){let n=ft[e];if(n===void 0){const r=tM.get(e);if(r!==void 0)n=ft[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Zf(n)}const iM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pm(s){return s.replace(iM,rM)}function rM(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Lm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const sM={[Cl]:"SHADOWMAP_TYPE_PCF",[zo]:"SHADOWMAP_TYPE_VSM"};function oM(s){return sM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aM={[ns]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[Bl]:"ENVMAP_TYPE_CUBE_UV"};function lM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":aM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const uM={[Gs]:"ENVMAP_MODE_REFRACTION"};function cM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":uM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fM={[km]:"ENVMAP_BLENDING_MULTIPLY",[nv]:"ENVMAP_BLENDING_MIX",[iv]:"ENVMAP_BLENDING_ADD"};function dM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":fM[s.combine]||"ENVMAP_BLENDING_NONE"}function hM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function pM(s,e,n,r){const a=s.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=oM(n),m=lM(n),v=cM(n),g=dM(n),x=hM(n),M=Zy(n),T=Qy(u),C=a.createProgram();let S,_,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Vo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Vo).join(`
`),_.length>0&&(_+=`
`)):(S=[Lm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),_=[Lm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wi?"#define TONE_MAPPING":"",n.toneMapping!==wi?ft.tonemapping_pars_fragment:"",n.toneMapping!==wi?Ky("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Yy("linearToOutputTexel",n.outputColorSpace),$y(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vo).join(`
`)),f=Zf(f),f=Rm(f,n),f=bm(f,n),d=Zf(d),d=Rm(d,n),d=bm(d,n),f=Pm(f),d=Pm(d),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",n.glslVersion===Xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const I=N+S+f,L=N+_+d,U=wm(a,a.VERTEX_SHADER,I),F=wm(a,a.FRAGMENT_SHADER,L);a.attachShader(C,U),a.attachShader(C,F),n.index0AttributeName!==void 0?a.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function O(H){if(s.debug.checkShaderErrors){const re=a.getProgramInfoLog(C)||"",Z=a.getShaderInfoLog(U)||"",fe=a.getShaderInfoLog(F)||"",le=re.trim(),oe=Z.trim(),Y=fe.trim();let X=!0,de=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,C,U,F);else{const ie=Cm(a,U,"vertex"),D=Cm(a,F,"fragment");At("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+le+`
`+ie+`
`+D)}else le!==""?ot("WebGLProgram: Program Info Log:",le):(oe===""||Y==="")&&(de=!1);de&&(H.diagnostics={runnable:X,programLog:le,vertexShader:{log:oe,prefix:S},fragmentShader:{log:Y,prefix:_}})}a.deleteShader(U),a.deleteShader(F),$=new Dl(a,C),A=Jy(a,C)}let $;this.getUniforms=function(){return $===void 0&&O(this),$};let A;this.getAttributes=function(){return A===void 0&&O(this),A};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(C,Gy)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Wy++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=U,this.fragmentShader=F,this}let mM=0;class gM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new _M(e),n.set(e,r)),r}}class _M{constructor(e){this.id=mM++,this.code=e,this.usedTimes=0}}function vM(s,e,n,r,a,u,f){const d=new r0,p=new gM,m=new Set,v=[],g=new Map,x=a.logarithmicDepthBuffer;let M=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(A){return m.add(A),A===0?"uv":`uv${A}`}function S(A,R,H,re,Z){const fe=re.fog,le=Z.geometry,oe=A.isMeshStandardMaterial?re.environment:null,Y=(A.isMeshStandardMaterial?n:e).get(A.envMap||oe),X=Y&&Y.mapping===Bl?Y.image.height:null,de=T[A.type];A.precision!==null&&(M=a.getMaxPrecision(A.precision),M!==A.precision&&ot("WebGLProgram.getParameters:",A.precision,"not supported, using",M,"instead."));const ie=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,D=ie!==void 0?ie.length:0;let se=0;le.morphAttributes.position!==void 0&&(se=1),le.morphAttributes.normal!==void 0&&(se=2),le.morphAttributes.color!==void 0&&(se=3);let Re,Ye,$e,J;if(de){const St=Mi[de];Re=St.vertexShader,Ye=St.fragmentShader}else Re=A.vertexShader,Ye=A.fragmentShader,p.update(A),$e=p.getVertexShaderID(A),J=p.getFragmentShaderID(A);const ue=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),Be=Z.isInstancedMesh===!0,Ne=Z.isBatchedMesh===!0,pt=!!A.map,jt=!!A.matcap,dt=!!Y,vt=!!A.aoMap,Rt=!!A.lightMap,lt=!!A.bumpMap,kt=!!A.normalMap,k=!!A.displacementMap,zt=!!A.emissiveMap,mt=!!A.metalnessMap,xt=!!A.roughnessMap,We=A.anisotropy>0,b=A.clearcoat>0,y=A.dispersion>0,G=A.iridescence>0,ce=A.sheen>0,pe=A.transmission>0,ae=We&&!!A.anisotropyMap,qe=b&&!!A.clearcoatMap,Ee=b&&!!A.clearcoatNormalMap,ke=b&&!!A.clearcoatRoughnessMap,nt=G&&!!A.iridescenceMap,xe=G&&!!A.iridescenceThicknessMap,Ce=ce&&!!A.sheenColorMap,He=ce&&!!A.sheenRoughnessMap,Xe=!!A.specularMap,we=!!A.specularColorMap,at=!!A.specularIntensityMap,z=pe&&!!A.transmissionMap,Pe=pe&&!!A.thicknessMap,ye=!!A.gradientMap,Le=!!A.alphaMap,_e=A.alphaTest>0,he=!!A.alphaHash,Ae=!!A.extensions;let it=wi;A.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(it=s.toneMapping);const Pt={shaderID:de,shaderType:A.type,shaderName:A.name,vertexShader:Re,fragmentShader:Ye,defines:A.defines,customVertexShaderID:$e,customFragmentShaderID:J,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:M,batching:Ne,batchingColor:Ne&&Z._colorsTexture!==null,instancing:Be,instancingColor:Be&&Z.instanceColor!==null,instancingMorph:Be&&Z.morphTexture!==null,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Xs,alphaToCoverage:!!A.alphaToCoverage,map:pt,matcap:jt,envMap:dt,envMapMode:dt&&Y.mapping,envMapCubeUVHeight:X,aoMap:vt,lightMap:Rt,bumpMap:lt,normalMap:kt,displacementMap:k,emissiveMap:zt,normalMapObjectSpace:kt&&A.normalMapType===av,normalMapTangentSpace:kt&&A.normalMapType===ov,metalnessMap:mt,roughnessMap:xt,anisotropy:We,anisotropyMap:ae,clearcoat:b,clearcoatMap:qe,clearcoatNormalMap:Ee,clearcoatRoughnessMap:ke,dispersion:y,iridescence:G,iridescenceMap:nt,iridescenceThicknessMap:xe,sheen:ce,sheenColorMap:Ce,sheenRoughnessMap:He,specularMap:Xe,specularColorMap:we,specularIntensityMap:at,transmission:pe,transmissionMap:z,thicknessMap:Pe,gradientMap:ye,opaque:A.transparent===!1&&A.blending===zs&&A.alphaToCoverage===!1,alphaMap:Le,alphaTest:_e,alphaHash:he,combine:A.combine,mapUv:pt&&C(A.map.channel),aoMapUv:vt&&C(A.aoMap.channel),lightMapUv:Rt&&C(A.lightMap.channel),bumpMapUv:lt&&C(A.bumpMap.channel),normalMapUv:kt&&C(A.normalMap.channel),displacementMapUv:k&&C(A.displacementMap.channel),emissiveMapUv:zt&&C(A.emissiveMap.channel),metalnessMapUv:mt&&C(A.metalnessMap.channel),roughnessMapUv:xt&&C(A.roughnessMap.channel),anisotropyMapUv:ae&&C(A.anisotropyMap.channel),clearcoatMapUv:qe&&C(A.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&C(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&C(A.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&C(A.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&C(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&C(A.sheenColorMap.channel),sheenRoughnessMapUv:He&&C(A.sheenRoughnessMap.channel),specularMapUv:Xe&&C(A.specularMap.channel),specularColorMapUv:we&&C(A.specularColorMap.channel),specularIntensityMapUv:at&&C(A.specularIntensityMap.channel),transmissionMapUv:z&&C(A.transmissionMap.channel),thicknessMapUv:Pe&&C(A.thicknessMap.channel),alphaMapUv:Le&&C(A.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(kt||We),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!le.attributes.uv&&(pt||Le),fog:!!fe,useFog:A.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Se,skinning:Z.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:se,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:pt&&A.map.isVideoTexture===!0&&Et.getTransfer(A.map.colorSpace)===Lt,decodeVideoTextureEmissive:zt&&A.emissiveMap.isVideoTexture===!0&&Et.getTransfer(A.emissiveMap.colorSpace)===Lt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Hi,flipSided:A.side===In,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ae&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&A.extensions.multiDraw===!0||Ne)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Pt.vertexUv1s=m.has(1),Pt.vertexUv2s=m.has(2),Pt.vertexUv3s=m.has(3),m.clear(),Pt}function _(A){const R=[];if(A.shaderID?R.push(A.shaderID):(R.push(A.customVertexShaderID),R.push(A.customFragmentShaderID)),A.defines!==void 0)for(const H in A.defines)R.push(H),R.push(A.defines[H]);return A.isRawShaderMaterial===!1&&(N(R,A),I(R,A),R.push(s.outputColorSpace)),R.push(A.customProgramCacheKey),R.join()}function N(A,R){A.push(R.precision),A.push(R.outputColorSpace),A.push(R.envMapMode),A.push(R.envMapCubeUVHeight),A.push(R.mapUv),A.push(R.alphaMapUv),A.push(R.lightMapUv),A.push(R.aoMapUv),A.push(R.bumpMapUv),A.push(R.normalMapUv),A.push(R.displacementMapUv),A.push(R.emissiveMapUv),A.push(R.metalnessMapUv),A.push(R.roughnessMapUv),A.push(R.anisotropyMapUv),A.push(R.clearcoatMapUv),A.push(R.clearcoatNormalMapUv),A.push(R.clearcoatRoughnessMapUv),A.push(R.iridescenceMapUv),A.push(R.iridescenceThicknessMapUv),A.push(R.sheenColorMapUv),A.push(R.sheenRoughnessMapUv),A.push(R.specularMapUv),A.push(R.specularColorMapUv),A.push(R.specularIntensityMapUv),A.push(R.transmissionMapUv),A.push(R.thicknessMapUv),A.push(R.combine),A.push(R.fogExp2),A.push(R.sizeAttenuation),A.push(R.morphTargetsCount),A.push(R.morphAttributeCount),A.push(R.numDirLights),A.push(R.numPointLights),A.push(R.numSpotLights),A.push(R.numSpotLightMaps),A.push(R.numHemiLights),A.push(R.numRectAreaLights),A.push(R.numDirLightShadows),A.push(R.numPointLightShadows),A.push(R.numSpotLightShadows),A.push(R.numSpotLightShadowsWithMaps),A.push(R.numLightProbes),A.push(R.shadowMapType),A.push(R.toneMapping),A.push(R.numClippingPlanes),A.push(R.numClipIntersection),A.push(R.depthPacking)}function I(A,R){d.disableAll(),R.instancing&&d.enable(0),R.instancingColor&&d.enable(1),R.instancingMorph&&d.enable(2),R.matcap&&d.enable(3),R.envMap&&d.enable(4),R.normalMapObjectSpace&&d.enable(5),R.normalMapTangentSpace&&d.enable(6),R.clearcoat&&d.enable(7),R.iridescence&&d.enable(8),R.alphaTest&&d.enable(9),R.vertexColors&&d.enable(10),R.vertexAlphas&&d.enable(11),R.vertexUv1s&&d.enable(12),R.vertexUv2s&&d.enable(13),R.vertexUv3s&&d.enable(14),R.vertexTangents&&d.enable(15),R.anisotropy&&d.enable(16),R.alphaHash&&d.enable(17),R.batching&&d.enable(18),R.dispersion&&d.enable(19),R.batchingColor&&d.enable(20),R.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),A.push(d.mask)}function L(A){const R=T[A.type];let H;if(R){const re=Mi[R];H=Uv.clone(re.uniforms)}else H=A.uniforms;return H}function U(A,R){let H=g.get(R);return H!==void 0?++H.usedTimes:(H=new pM(s,R,A,u),v.push(H),g.set(R,H)),H}function F(A){if(--A.usedTimes===0){const R=v.indexOf(A);v[R]=v[v.length-1],v.pop(),g.delete(A.cacheKey),A.destroy()}}function O(A){p.remove(A)}function $(){p.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:L,acquireProgram:U,releaseProgram:F,releaseShaderCache:O,programs:v,dispose:$}}function xM(){let s=new WeakMap;function e(f){return s.has(f)}function n(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function a(f,d,p){s.get(f)[d]=p}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function SM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Dm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Nm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(g,x,M,T,C,S){let _=s[e];return _===void 0?(_={id:g.id,object:g,geometry:x,material:M,groupOrder:T,renderOrder:g.renderOrder,z:C,group:S},s[e]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=M,_.groupOrder=T,_.renderOrder=g.renderOrder,_.z=C,_.group=S),e++,_}function d(g,x,M,T,C,S){const _=f(g,x,M,T,C,S);M.transmission>0?r.push(_):M.transparent===!0?a.push(_):n.push(_)}function p(g,x,M,T,C,S){const _=f(g,x,M,T,C,S);M.transmission>0?r.unshift(_):M.transparent===!0?a.unshift(_):n.unshift(_)}function m(g,x){n.length>1&&n.sort(g||SM),r.length>1&&r.sort(x||Dm),a.length>1&&a.sort(x||Dm)}function v(){for(let g=e,x=s.length;g<x;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:v,sort:m}}function yM(){let s=new WeakMap;function e(r,a){const u=s.get(r);let f;return u===void 0?(f=new Nm,s.set(r,[f])):a>=u.length?(f=new Nm,u.push(f)):f=u[a],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function MM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new te,color:new Dt};break;case"SpotLight":n={position:new te,direction:new te,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new te,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new te,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":n={color:new Dt,position:new te,halfWidth:new te,halfHeight:new te};break}return s[e.id]=n,n}}}function EM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let TM=0;function wM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function AM(s){const e=new MM,n=EM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new te);const a=new te,u=new Kt,f=new Kt;function d(m){let v=0,g=0,x=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let M=0,T=0,C=0,S=0,_=0,N=0,I=0,L=0,U=0,F=0,O=0;m.sort(wM);for(let A=0,R=m.length;A<R;A++){const H=m[A],re=H.color,Z=H.intensity,fe=H.distance;let le=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Ws?le=H.shadow.map.texture:le=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=re.r*Z,g+=re.g*Z,x+=re.b*Z;else if(H.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(H.sh.coefficients[oe],Z);O++}else if(H.isDirectionalLight){const oe=e.get(H);if(oe.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Y=H.shadow,X=n.get(H);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,r.directionalShadow[M]=X,r.directionalShadowMap[M]=le,r.directionalShadowMatrix[M]=H.shadow.matrix,N++}r.directional[M]=oe,M++}else if(H.isSpotLight){const oe=e.get(H);oe.position.setFromMatrixPosition(H.matrixWorld),oe.color.copy(re).multiplyScalar(Z),oe.distance=fe,oe.coneCos=Math.cos(H.angle),oe.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),oe.decay=H.decay,r.spot[C]=oe;const Y=H.shadow;if(H.map&&(r.spotLightMap[U]=H.map,U++,Y.updateMatrices(H),H.castShadow&&F++),r.spotLightMatrix[C]=Y.matrix,H.castShadow){const X=n.get(H);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,r.spotShadow[C]=X,r.spotShadowMap[C]=le,L++}C++}else if(H.isRectAreaLight){const oe=e.get(H);oe.color.copy(re).multiplyScalar(Z),oe.halfWidth.set(H.width*.5,0,0),oe.halfHeight.set(0,H.height*.5,0),r.rectArea[S]=oe,S++}else if(H.isPointLight){const oe=e.get(H);if(oe.color.copy(H.color).multiplyScalar(H.intensity),oe.distance=H.distance,oe.decay=H.decay,H.castShadow){const Y=H.shadow,X=n.get(H);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,r.pointShadow[T]=X,r.pointShadowMap[T]=le,r.pointShadowMatrix[T]=H.shadow.matrix,I++}r.point[T]=oe,T++}else if(H.isHemisphereLight){const oe=e.get(H);oe.skyColor.copy(H.color).multiplyScalar(Z),oe.groundColor.copy(H.groundColor).multiplyScalar(Z),r.hemi[_]=oe,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=x;const $=r.hash;($.directionalLength!==M||$.pointLength!==T||$.spotLength!==C||$.rectAreaLength!==S||$.hemiLength!==_||$.numDirectionalShadows!==N||$.numPointShadows!==I||$.numSpotShadows!==L||$.numSpotMaps!==U||$.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=S,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=L+U-F,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=O,$.directionalLength=M,$.pointLength=T,$.spotLength=C,$.rectAreaLength=S,$.hemiLength=_,$.numDirectionalShadows=N,$.numPointShadows=I,$.numSpotShadows=L,$.numSpotMaps=U,$.numLightProbes=O,r.version=TM++)}function p(m,v){let g=0,x=0,M=0,T=0,C=0;const S=v.matrixWorldInverse;for(let _=0,N=m.length;_<N;_++){const I=m[_];if(I.isDirectionalLight){const L=r.directional[g];L.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(S),g++}else if(I.isSpotLight){const L=r.spot[M];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(S),M++}else if(I.isRectAreaLight){const L=r.rectArea[T];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(S),f.identity(),u.copy(I.matrixWorld),u.premultiply(S),f.extractRotation(u),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),T++}else if(I.isPointLight){const L=r.point[x];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(S),x++}else if(I.isHemisphereLight){const L=r.hemi[C];L.direction.setFromMatrixPosition(I.matrixWorld),L.direction.transformDirection(S),C++}}}return{setup:d,setupView:p,state:r}}function Im(s){const e=new AM(s),n=[],r=[];function a(v){m.camera=v,n.length=0,r.length=0}function u(v){n.push(v)}function f(v){r.push(v)}function d(){e.setup(n)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function CM(s){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new Im(s),e.set(a,[d])):u>=f.length?(d=new Im(s),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const RM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,PM=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],LM=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],Um=new Kt,ko=new te,tf=new te;function DM(s,e,n){let r=new h0;const a=new It,u=new It,f=new qt,d=new qv,p=new Kv,m={},v=n.maxTextureSize,g={[Cr]:In,[In]:Cr,[Hi]:Hi},x=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:RM,fragmentShader:bM}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new pi;T.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new $i(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cl;let _=this.type;this.render=function(F,O,$){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;F.type===O_&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=Cl);const A=s.getRenderTarget(),R=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),re=s.state;re.setBlending(Wi),re.buffers.depth.getReversed()===!0?re.buffers.color.setClear(0,0,0,0):re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const Z=_!==this.type;Z&&O.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(le=>le.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,le=F.length;fe<le;fe++){const oe=F[fe],Y=oe.shadow;if(Y===void 0){ot("WebGLShadowMap:",oe,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;a.copy(Y.mapSize);const X=Y.getFrameExtents();if(a.multiply(X),u.copy(Y.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(u.x=Math.floor(v/X.x),a.x=u.x*X.x,Y.mapSize.x=u.x),a.y>v&&(u.y=Math.floor(v/X.y),a.y=u.y*X.y,Y.mapSize.y=u.y)),Y.map===null||Z===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===zo){if(oe.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Ai(a.x,a.y,{format:Ws,type:Yi,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),Y.map.texture.name=oe.name+".shadowMap",Y.map.depthTexture=new Xo(a.x,a.y,Ei),Y.map.depthTexture.name=oe.name+".shadowMapDepth",Y.map.depthTexture.format=qi,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=dn,Y.map.depthTexture.magFilter=dn}else{oe.isPointLight?(Y.map=new d0(a.x),Y.map.depthTexture=new jv(a.x,Ci)):(Y.map=new Ai(a.x,a.y),Y.map.depthTexture=new Xo(a.x,a.y,Ci)),Y.map.depthTexture.name=oe.name+".shadowMap",Y.map.depthTexture.format=qi;const ie=s.state.buffers.depth.getReversed();this.type===Cl?(Y.map.depthTexture.compareFunction=ie?ad:od,Y.map.depthTexture.minFilter=Sn,Y.map.depthTexture.magFilter=Sn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=dn,Y.map.depthTexture.magFilter=dn)}Y.camera.updateProjectionMatrix()}const de=Y.map.isWebGLCubeRenderTarget?6:1;for(let ie=0;ie<de;ie++){if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,ie),s.clear();else{ie===0&&(s.setRenderTarget(Y.map),s.clear());const D=Y.getViewport(ie);f.set(u.x*D.x,u.y*D.y,u.x*D.z,u.y*D.w),re.viewport(f)}if(oe.isPointLight){const D=Y.camera,se=Y.matrix,Re=oe.distance||D.far;Re!==D.far&&(D.far=Re,D.updateProjectionMatrix()),ko.setFromMatrixPosition(oe.matrixWorld),D.position.copy(ko),tf.copy(D.position),tf.add(PM[ie]),D.up.copy(LM[ie]),D.lookAt(tf),D.updateMatrixWorld(),se.makeTranslation(-ko.x,-ko.y,-ko.z),Um.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Um,D.coordinateSystem,D.reversedDepth)}else Y.updateMatrices(oe);r=Y.getFrustum(),L(O,$,Y.camera,oe,this.type)}Y.isPointLightShadow!==!0&&this.type===zo&&N(Y,$),Y.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(A,R,H)};function N(F,O){const $=e.update(C);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ai(a.x,a.y,{format:Ws,type:Yi})),x.uniforms.shadow_pass.value=F.map.depthTexture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(O,null,$,x,C,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(O,null,$,M,C,null)}function I(F,O,$,A){let R=null;const H=$.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)R=H;else if(R=$.isPointLight===!0?p:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const re=R.uuid,Z=O.uuid;let fe=m[re];fe===void 0&&(fe={},m[re]=fe);let le=fe[Z];le===void 0&&(le=R.clone(),fe[Z]=le,O.addEventListener("dispose",U)),R=le}if(R.visible=O.visible,R.wireframe=O.wireframe,A===zo?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:g[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,$.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const re=s.properties.get(R);re.light=$}return R}function L(F,O,$,A,R){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===zo)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,F.matrixWorld);const Z=e.update(F),fe=F.material;if(Array.isArray(fe)){const le=Z.groups;for(let oe=0,Y=le.length;oe<Y;oe++){const X=le[oe],de=fe[X.materialIndex];if(de&&de.visible){const ie=I(F,de,A,R);F.onBeforeShadow(s,F,O,$,Z,ie,X),s.renderBufferDirect($,null,Z,ie,F,X),F.onAfterShadow(s,F,O,$,Z,ie,X)}}}else if(fe.visible){const le=I(F,fe,A,R);F.onBeforeShadow(s,F,O,$,Z,le,null),s.renderBufferDirect($,null,Z,le,F,null),F.onAfterShadow(s,F,O,$,Z,le,null)}}const re=F.children;for(let Z=0,fe=re.length;Z<fe;Z++)L(re[Z],O,$,A,R)}function U(F){F.target.removeEventListener("dispose",U);for(const $ in m){const A=m[$],R=F.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}const NM={[sf]:of,[af]:cf,[lf]:ff,[Hs]:uf,[of]:sf,[cf]:af,[ff]:lf,[uf]:Hs};function IM(s,e){function n(){let z=!1;const Pe=new qt;let ye=null;const Le=new qt(0,0,0,0);return{setMask:function(_e){ye!==_e&&!z&&(s.colorMask(_e,_e,_e,_e),ye=_e)},setLocked:function(_e){z=_e},setClear:function(_e,he,Ae,it,Pt){Pt===!0&&(_e*=it,he*=it,Ae*=it),Pe.set(_e,he,Ae,it),Le.equals(Pe)===!1&&(s.clearColor(_e,he,Ae,it),Le.copy(Pe))},reset:function(){z=!1,ye=null,Le.set(-1,0,0,0)}}}function r(){let z=!1,Pe=!1,ye=null,Le=null,_e=null;return{setReversed:function(he){if(Pe!==he){const Ae=e.get("EXT_clip_control");he?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),Pe=he;const it=_e;_e=null,this.setClear(it)}},getReversed:function(){return Pe},setTest:function(he){he?ue(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(he){ye!==he&&!z&&(s.depthMask(he),ye=he)},setFunc:function(he){if(Pe&&(he=NM[he]),Le!==he){switch(he){case sf:s.depthFunc(s.NEVER);break;case of:s.depthFunc(s.ALWAYS);break;case af:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case lf:s.depthFunc(s.EQUAL);break;case uf:s.depthFunc(s.GEQUAL);break;case cf:s.depthFunc(s.GREATER);break;case ff:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Le=he}},setLocked:function(he){z=he},setClear:function(he){_e!==he&&(Pe&&(he=1-he),s.clearDepth(he),_e=he)},reset:function(){z=!1,ye=null,Le=null,_e=null,Pe=!1}}}function a(){let z=!1,Pe=null,ye=null,Le=null,_e=null,he=null,Ae=null,it=null,Pt=null;return{setTest:function(St){z||(St?ue(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(St){Pe!==St&&!z&&(s.stencilMask(St),Pe=St)},setFunc:function(St,Fn,yn){(ye!==St||Le!==Fn||_e!==yn)&&(s.stencilFunc(St,Fn,yn),ye=St,Le=Fn,_e=yn)},setOp:function(St,Fn,yn){(he!==St||Ae!==Fn||it!==yn)&&(s.stencilOp(St,Fn,yn),he=St,Ae=Fn,it=yn)},setLocked:function(St){z=St},setClear:function(St){Pt!==St&&(s.clearStencil(St),Pt=St)},reset:function(){z=!1,Pe=null,ye=null,Le=null,_e=null,he=null,Ae=null,it=null,Pt=null}}}const u=new n,f=new r,d=new a,p=new WeakMap,m=new WeakMap;let v={},g={},x=new WeakMap,M=[],T=null,C=!1,S=null,_=null,N=null,I=null,L=null,U=null,F=null,O=new Dt(0,0,0),$=0,A=!1,R=null,H=null,re=null,Z=null,fe=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,Y=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),oe=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),oe=Y>=2);let de=null,ie={};const D=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),Re=new qt().fromArray(D),Ye=new qt().fromArray(se);function $e(z,Pe,ye,Le){const _e=new Uint8Array(4),he=s.createTexture();s.bindTexture(z,he),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ae=0;Ae<ye;Ae++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(Pe+Ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return he}const J={};J[s.TEXTURE_2D]=$e(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=$e(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=$e(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=$e(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ue(s.DEPTH_TEST),f.setFunc(Hs),lt(!1),kt(kp),ue(s.CULL_FACE),vt(Wi);function ue(z){v[z]!==!0&&(s.enable(z),v[z]=!0)}function Se(z){v[z]!==!1&&(s.disable(z),v[z]=!1)}function Be(z,Pe){return g[z]!==Pe?(s.bindFramebuffer(z,Pe),g[z]=Pe,z===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Pe),z===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Ne(z,Pe){let ye=M,Le=!1;if(z){ye=x.get(Pe),ye===void 0&&(ye=[],x.set(Pe,ye));const _e=z.textures;if(ye.length!==_e.length||ye[0]!==s.COLOR_ATTACHMENT0){for(let he=0,Ae=_e.length;he<Ae;he++)ye[he]=s.COLOR_ATTACHMENT0+he;ye.length=_e.length,Le=!0}}else ye[0]!==s.BACK&&(ye[0]=s.BACK,Le=!0);Le&&s.drawBuffers(ye)}function pt(z){return T!==z?(s.useProgram(z),T=z,!0):!1}const jt={[Qr]:s.FUNC_ADD,[k_]:s.FUNC_SUBTRACT,[z_]:s.FUNC_REVERSE_SUBTRACT};jt[V_]=s.MIN,jt[H_]=s.MAX;const dt={[G_]:s.ZERO,[W_]:s.ONE,[X_]:s.SRC_COLOR,[nf]:s.SRC_ALPHA,[Z_]:s.SRC_ALPHA_SATURATE,[K_]:s.DST_COLOR,[Y_]:s.DST_ALPHA,[j_]:s.ONE_MINUS_SRC_COLOR,[rf]:s.ONE_MINUS_SRC_ALPHA,[$_]:s.ONE_MINUS_DST_COLOR,[q_]:s.ONE_MINUS_DST_ALPHA,[Q_]:s.CONSTANT_COLOR,[J_]:s.ONE_MINUS_CONSTANT_COLOR,[ev]:s.CONSTANT_ALPHA,[tv]:s.ONE_MINUS_CONSTANT_ALPHA};function vt(z,Pe,ye,Le,_e,he,Ae,it,Pt,St){if(z===Wi){C===!0&&(Se(s.BLEND),C=!1);return}if(C===!1&&(ue(s.BLEND),C=!0),z!==B_){if(z!==S||St!==A){if((_!==Qr||L!==Qr)&&(s.blendEquation(s.FUNC_ADD),_=Qr,L=Qr),St)switch(z){case zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zp:s.blendFunc(s.ONE,s.ONE);break;case Vp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:At("WebGLState: Invalid blending: ",z);break}else switch(z){case zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zp:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Vp:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hp:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",z);break}N=null,I=null,U=null,F=null,O.set(0,0,0),$=0,S=z,A=St}return}_e=_e||Pe,he=he||ye,Ae=Ae||Le,(Pe!==_||_e!==L)&&(s.blendEquationSeparate(jt[Pe],jt[_e]),_=Pe,L=_e),(ye!==N||Le!==I||he!==U||Ae!==F)&&(s.blendFuncSeparate(dt[ye],dt[Le],dt[he],dt[Ae]),N=ye,I=Le,U=he,F=Ae),(it.equals(O)===!1||Pt!==$)&&(s.blendColor(it.r,it.g,it.b,Pt),O.copy(it),$=Pt),S=z,A=!1}function Rt(z,Pe){z.side===Hi?Se(s.CULL_FACE):ue(s.CULL_FACE);let ye=z.side===In;Pe&&(ye=!ye),lt(ye),z.blending===zs&&z.transparent===!1?vt(Wi):vt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),f.setFunc(z.depthFunc),f.setTest(z.depthTest),f.setMask(z.depthWrite),u.setMask(z.colorWrite);const Le=z.stencilWrite;d.setTest(Le),Le&&(d.setMask(z.stencilWriteMask),d.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),d.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),zt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(z){R!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),R=z)}function kt(z){z!==U_?(ue(s.CULL_FACE),z!==H&&(z===kp?s.cullFace(s.BACK):z===F_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),H=z}function k(z){z!==re&&(oe&&s.lineWidth(z),re=z)}function zt(z,Pe,ye){z?(ue(s.POLYGON_OFFSET_FILL),(Z!==Pe||fe!==ye)&&(s.polygonOffset(Pe,ye),Z=Pe,fe=ye)):Se(s.POLYGON_OFFSET_FILL)}function mt(z){z?ue(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function xt(z){z===void 0&&(z=s.TEXTURE0+le-1),de!==z&&(s.activeTexture(z),de=z)}function We(z,Pe,ye){ye===void 0&&(de===null?ye=s.TEXTURE0+le-1:ye=de);let Le=ie[ye];Le===void 0&&(Le={type:void 0,texture:void 0},ie[ye]=Le),(Le.type!==z||Le.texture!==Pe)&&(de!==ye&&(s.activeTexture(ye),de=ye),s.bindTexture(z,Pe||J[z]),Le.type=z,Le.texture=Pe)}function b(){const z=ie[de];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function y(){try{s.compressedTexImage2D(...arguments)}catch(z){At("WebGLState:",z)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(z){At("WebGLState:",z)}}function ce(){try{s.texSubImage2D(...arguments)}catch(z){At("WebGLState:",z)}}function pe(){try{s.texSubImage3D(...arguments)}catch(z){At("WebGLState:",z)}}function ae(){try{s.compressedTexSubImage2D(...arguments)}catch(z){At("WebGLState:",z)}}function qe(){try{s.compressedTexSubImage3D(...arguments)}catch(z){At("WebGLState:",z)}}function Ee(){try{s.texStorage2D(...arguments)}catch(z){At("WebGLState:",z)}}function ke(){try{s.texStorage3D(...arguments)}catch(z){At("WebGLState:",z)}}function nt(){try{s.texImage2D(...arguments)}catch(z){At("WebGLState:",z)}}function xe(){try{s.texImage3D(...arguments)}catch(z){At("WebGLState:",z)}}function Ce(z){Re.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Re.copy(z))}function He(z){Ye.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),Ye.copy(z))}function Xe(z,Pe){let ye=m.get(Pe);ye===void 0&&(ye=new WeakMap,m.set(Pe,ye));let Le=ye.get(z);Le===void 0&&(Le=s.getUniformBlockIndex(Pe,z.name),ye.set(z,Le))}function we(z,Pe){const Le=m.get(Pe).get(z);p.get(Pe)!==Le&&(s.uniformBlockBinding(Pe,Le,z.__bindingPointIndex),p.set(Pe,Le))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},de=null,ie={},g={},x=new WeakMap,M=[],T=null,C=!1,S=null,_=null,N=null,I=null,L=null,U=null,F=null,O=new Dt(0,0,0),$=0,A=!1,R=null,H=null,re=null,Z=null,fe=null,Re.set(0,0,s.canvas.width,s.canvas.height),Ye.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:ue,disable:Se,bindFramebuffer:Be,drawBuffers:Ne,useProgram:pt,setBlending:vt,setMaterial:Rt,setFlipSided:lt,setCullFace:kt,setLineWidth:k,setPolygonOffset:zt,setScissorTest:mt,activeTexture:xt,bindTexture:We,unbindTexture:b,compressedTexImage2D:y,compressedTexImage3D:G,texImage2D:nt,texImage3D:xe,updateUBOMapping:Xe,uniformBlockBinding:we,texStorage2D:Ee,texStorage3D:ke,texSubImage2D:ce,texSubImage3D:pe,compressedTexSubImage2D:ae,compressedTexSubImage3D:qe,scissor:Ce,viewport:He,reset:at}}function UM(s,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new It,v=new WeakMap;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,y){return M?new OffscreenCanvas(b,y):Ol("canvas")}function C(b,y,G){let ce=1;const pe=We(b);if((pe.width>G||pe.height>G)&&(ce=G/Math.max(pe.width,pe.height)),ce<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ae=Math.floor(ce*pe.width),qe=Math.floor(ce*pe.height);g===void 0&&(g=T(ae,qe));const Ee=y?T(ae,qe):g;return Ee.width=ae,Ee.height=qe,Ee.getContext("2d").drawImage(b,0,0,ae,qe),ot("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ae+"x"+qe+")."),Ee}else return"data"in b&&ot("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),b;return b}function S(b){return b.generateMipmaps}function _(b){s.generateMipmap(b)}function N(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(b,y,G,ce,pe=!1){if(b!==null){if(s[b]!==void 0)return s[b];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ae=y;if(y===s.RED&&(G===s.FLOAT&&(ae=s.R32F),G===s.HALF_FLOAT&&(ae=s.R16F),G===s.UNSIGNED_BYTE&&(ae=s.R8)),y===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(ae=s.R8UI),G===s.UNSIGNED_SHORT&&(ae=s.R16UI),G===s.UNSIGNED_INT&&(ae=s.R32UI),G===s.BYTE&&(ae=s.R8I),G===s.SHORT&&(ae=s.R16I),G===s.INT&&(ae=s.R32I)),y===s.RG&&(G===s.FLOAT&&(ae=s.RG32F),G===s.HALF_FLOAT&&(ae=s.RG16F),G===s.UNSIGNED_BYTE&&(ae=s.RG8)),y===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(ae=s.RG8UI),G===s.UNSIGNED_SHORT&&(ae=s.RG16UI),G===s.UNSIGNED_INT&&(ae=s.RG32UI),G===s.BYTE&&(ae=s.RG8I),G===s.SHORT&&(ae=s.RG16I),G===s.INT&&(ae=s.RG32I)),y===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(ae=s.RGB8UI),G===s.UNSIGNED_SHORT&&(ae=s.RGB16UI),G===s.UNSIGNED_INT&&(ae=s.RGB32UI),G===s.BYTE&&(ae=s.RGB8I),G===s.SHORT&&(ae=s.RGB16I),G===s.INT&&(ae=s.RGB32I)),y===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(ae=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(ae=s.RGBA16UI),G===s.UNSIGNED_INT&&(ae=s.RGBA32UI),G===s.BYTE&&(ae=s.RGBA8I),G===s.SHORT&&(ae=s.RGBA16I),G===s.INT&&(ae=s.RGBA32I)),y===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(ae=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(ae=s.R11F_G11F_B10F)),y===s.RGBA){const qe=pe?Ul:Et.getTransfer(ce);G===s.FLOAT&&(ae=s.RGBA32F),G===s.HALF_FLOAT&&(ae=s.RGBA16F),G===s.UNSIGNED_BYTE&&(ae=qe===Lt?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(ae=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(ae=s.RGB5_A1)}return(ae===s.R16F||ae===s.R32F||ae===s.RG16F||ae===s.RG32F||ae===s.RGBA16F||ae===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function L(b,y){let G;return b?y===null||y===Ci||y===Go?G=s.DEPTH24_STENCIL8:y===Ei?G=s.DEPTH32F_STENCIL8:y===Ho&&(G=s.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ci||y===Go?G=s.DEPTH_COMPONENT24:y===Ei?G=s.DEPTH_COMPONENT32F:y===Ho&&(G=s.DEPTH_COMPONENT16),G}function U(b,y){return S(b)===!0||b.isFramebufferTexture&&b.minFilter!==dn&&b.minFilter!==Sn?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function F(b){const y=b.target;y.removeEventListener("dispose",F),$(y),y.isVideoTexture&&v.delete(y)}function O(b){const y=b.target;y.removeEventListener("dispose",O),R(y)}function $(b){const y=r.get(b);if(y.__webglInit===void 0)return;const G=b.source,ce=x.get(G);if(ce){const pe=ce[y.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&A(b),Object.keys(ce).length===0&&x.delete(G)}r.remove(b)}function A(b){const y=r.get(b);s.deleteTexture(y.__webglTexture);const G=b.source,ce=x.get(G);delete ce[y.__cacheKey],f.memory.textures--}function R(b){const y=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(y.__webglFramebuffer[ce]))for(let pe=0;pe<y.__webglFramebuffer[ce].length;pe++)s.deleteFramebuffer(y.__webglFramebuffer[ce][pe]);else s.deleteFramebuffer(y.__webglFramebuffer[ce]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[ce])}else{if(Array.isArray(y.__webglFramebuffer))for(let ce=0;ce<y.__webglFramebuffer.length;ce++)s.deleteFramebuffer(y.__webglFramebuffer[ce]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ce=0;ce<y.__webglColorRenderbuffer.length;ce++)y.__webglColorRenderbuffer[ce]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[ce]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const G=b.textures;for(let ce=0,pe=G.length;ce<pe;ce++){const ae=r.get(G[ce]);ae.__webglTexture&&(s.deleteTexture(ae.__webglTexture),f.memory.textures--),r.remove(G[ce])}r.remove(b)}let H=0;function re(){H=0}function Z(){const b=H;return b>=a.maxTextures&&ot("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),H+=1,b}function fe(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function le(b,y){const G=r.get(b);if(b.isVideoTexture&&mt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&G.__version!==b.version){const ce=b.image;if(ce===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{J(G,b,y);return}}else b.isExternalTexture&&(G.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+y)}function oe(b,y){const G=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){J(G,b,y);return}else b.isExternalTexture&&(G.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+y)}function Y(b,y){const G=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){J(G,b,y);return}n.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+y)}function X(b,y){const G=r.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&G.__version!==b.version){ue(G,b,y);return}n.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+y)}const de={[pf]:s.REPEAT,[Gi]:s.CLAMP_TO_EDGE,[mf]:s.MIRRORED_REPEAT},ie={[dn]:s.NEAREST,[rv]:s.NEAREST_MIPMAP_NEAREST,[rl]:s.NEAREST_MIPMAP_LINEAR,[Sn]:s.LINEAR,[wc]:s.LINEAR_MIPMAP_NEAREST,[es]:s.LINEAR_MIPMAP_LINEAR},D={[lv]:s.NEVER,[hv]:s.ALWAYS,[uv]:s.LESS,[od]:s.LEQUAL,[cv]:s.EQUAL,[ad]:s.GEQUAL,[fv]:s.GREATER,[dv]:s.NOTEQUAL};function se(b,y){if(y.type===Ei&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Sn||y.magFilter===wc||y.magFilter===rl||y.magFilter===es||y.minFilter===Sn||y.minFilter===wc||y.minFilter===rl||y.minFilter===es)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,de[y.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,de[y.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,de[y.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ie[y.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ie[y.minFilter]),y.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,D[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===dn||y.minFilter!==rl&&y.minFilter!==es||y.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function Re(b,y){let G=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",F));const ce=y.source;let pe=x.get(ce);pe===void 0&&(pe={},x.set(ce,pe));const ae=fe(y);if(ae!==b.__cacheKey){pe[ae]===void 0&&(pe[ae]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,G=!0),pe[ae].usedTimes++;const qe=pe[b.__cacheKey];qe!==void 0&&(pe[b.__cacheKey].usedTimes--,qe.usedTimes===0&&A(y)),b.__cacheKey=ae,b.__webglTexture=pe[ae].texture}return G}function Ye(b,y,G){return Math.floor(Math.floor(b/G)/y)}function $e(b,y,G,ce){const ae=b.updateRanges;if(ae.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,G,ce,y.data);else{ae.sort((xe,Ce)=>xe.start-Ce.start);let qe=0;for(let xe=1;xe<ae.length;xe++){const Ce=ae[qe],He=ae[xe],Xe=Ce.start+Ce.count,we=Ye(He.start,y.width,4),at=Ye(Ce.start,y.width,4);He.start<=Xe+1&&we===at&&Ye(He.start+He.count-1,y.width,4)===we?Ce.count=Math.max(Ce.count,He.start+He.count-Ce.start):(++qe,ae[qe]=He)}ae.length=qe+1;const Ee=s.getParameter(s.UNPACK_ROW_LENGTH),ke=s.getParameter(s.UNPACK_SKIP_PIXELS),nt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let xe=0,Ce=ae.length;xe<Ce;xe++){const He=ae[xe],Xe=Math.floor(He.start/4),we=Math.ceil(He.count/4),at=Xe%y.width,z=Math.floor(Xe/y.width),Pe=we,ye=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,at),s.pixelStorei(s.UNPACK_SKIP_ROWS,z),n.texSubImage2D(s.TEXTURE_2D,0,at,z,Pe,ye,G,ce,y.data)}b.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ee),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ke),s.pixelStorei(s.UNPACK_SKIP_ROWS,nt)}}function J(b,y,G){let ce=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ce=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ce=s.TEXTURE_3D);const pe=Re(b,y),ae=y.source;n.bindTexture(ce,b.__webglTexture,s.TEXTURE0+G);const qe=r.get(ae);if(ae.version!==qe.__version||pe===!0){n.activeTexture(s.TEXTURE0+G);const Ee=Et.getPrimaries(Et.workingColorSpace),ke=y.colorSpace===Er?null:Et.getPrimaries(y.colorSpace),nt=y.colorSpace===Er||Ee===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let xe=C(y.image,!1,a.maxTextureSize);xe=xt(y,xe);const Ce=u.convert(y.format,y.colorSpace),He=u.convert(y.type);let Xe=I(y.internalFormat,Ce,He,y.colorSpace,y.isVideoTexture);se(ce,y);let we;const at=y.mipmaps,z=y.isVideoTexture!==!0,Pe=qe.__version===void 0||pe===!0,ye=ae.dataReady,Le=U(y,xe);if(y.isDepthTexture)Xe=L(y.format===ts,y.type),Pe&&(z?n.texStorage2D(s.TEXTURE_2D,1,Xe,xe.width,xe.height):n.texImage2D(s.TEXTURE_2D,0,Xe,xe.width,xe.height,0,Ce,He,null));else if(y.isDataTexture)if(at.length>0){z&&Pe&&n.texStorage2D(s.TEXTURE_2D,Le,Xe,at[0].width,at[0].height);for(let _e=0,he=at.length;_e<he;_e++)we=at[_e],z?ye&&n.texSubImage2D(s.TEXTURE_2D,_e,0,0,we.width,we.height,Ce,He,we.data):n.texImage2D(s.TEXTURE_2D,_e,Xe,we.width,we.height,0,Ce,He,we.data);y.generateMipmaps=!1}else z?(Pe&&n.texStorage2D(s.TEXTURE_2D,Le,Xe,xe.width,xe.height),ye&&$e(y,xe,Ce,He)):n.texImage2D(s.TEXTURE_2D,0,Xe,xe.width,xe.height,0,Ce,He,xe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){z&&Pe&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Xe,at[0].width,at[0].height,xe.depth);for(let _e=0,he=at.length;_e<he;_e++)if(we=at[_e],y.format!==di)if(Ce!==null)if(z){if(ye)if(y.layerUpdates.size>0){const Ae=dm(we.width,we.height,y.format,y.type);for(const it of y.layerUpdates){const Pt=we.data.subarray(it*Ae/we.data.BYTES_PER_ELEMENT,(it+1)*Ae/we.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,it,we.width,we.height,1,Ce,Pt)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,we.width,we.height,xe.depth,Ce,we.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_e,Xe,we.width,we.height,xe.depth,0,we.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?ye&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,we.width,we.height,xe.depth,Ce,He,we.data):n.texImage3D(s.TEXTURE_2D_ARRAY,_e,Xe,we.width,we.height,xe.depth,0,Ce,He,we.data)}else{z&&Pe&&n.texStorage2D(s.TEXTURE_2D,Le,Xe,at[0].width,at[0].height);for(let _e=0,he=at.length;_e<he;_e++)we=at[_e],y.format!==di?Ce!==null?z?ye&&n.compressedTexSubImage2D(s.TEXTURE_2D,_e,0,0,we.width,we.height,Ce,we.data):n.compressedTexImage2D(s.TEXTURE_2D,_e,Xe,we.width,we.height,0,we.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?ye&&n.texSubImage2D(s.TEXTURE_2D,_e,0,0,we.width,we.height,Ce,He,we.data):n.texImage2D(s.TEXTURE_2D,_e,Xe,we.width,we.height,0,Ce,He,we.data)}else if(y.isDataArrayTexture)if(z){if(Pe&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Xe,xe.width,xe.height,xe.depth),ye)if(y.layerUpdates.size>0){const _e=dm(xe.width,xe.height,y.format,y.type);for(const he of y.layerUpdates){const Ae=xe.data.subarray(he*_e/xe.data.BYTES_PER_ELEMENT,(he+1)*_e/xe.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,xe.width,xe.height,1,Ce,He,Ae)}y.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ce,He,xe.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Xe,xe.width,xe.height,xe.depth,0,Ce,He,xe.data);else if(y.isData3DTexture)z?(Pe&&n.texStorage3D(s.TEXTURE_3D,Le,Xe,xe.width,xe.height,xe.depth),ye&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ce,He,xe.data)):n.texImage3D(s.TEXTURE_3D,0,Xe,xe.width,xe.height,xe.depth,0,Ce,He,xe.data);else if(y.isFramebufferTexture){if(Pe)if(z)n.texStorage2D(s.TEXTURE_2D,Le,Xe,xe.width,xe.height);else{let _e=xe.width,he=xe.height;for(let Ae=0;Ae<Le;Ae++)n.texImage2D(s.TEXTURE_2D,Ae,Xe,_e,he,0,Ce,He,null),_e>>=1,he>>=1}}else if(at.length>0){if(z&&Pe){const _e=We(at[0]);n.texStorage2D(s.TEXTURE_2D,Le,Xe,_e.width,_e.height)}for(let _e=0,he=at.length;_e<he;_e++)we=at[_e],z?ye&&n.texSubImage2D(s.TEXTURE_2D,_e,0,0,Ce,He,we):n.texImage2D(s.TEXTURE_2D,_e,Xe,Ce,He,we);y.generateMipmaps=!1}else if(z){if(Pe){const _e=We(xe);n.texStorage2D(s.TEXTURE_2D,Le,Xe,_e.width,_e.height)}ye&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,He,xe)}else n.texImage2D(s.TEXTURE_2D,0,Xe,Ce,He,xe);S(y)&&_(ce),qe.__version=ae.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function ue(b,y,G){if(y.image.length!==6)return;const ce=Re(b,y),pe=y.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+G);const ae=r.get(pe);if(pe.version!==ae.__version||ce===!0){n.activeTexture(s.TEXTURE0+G);const qe=Et.getPrimaries(Et.workingColorSpace),Ee=y.colorSpace===Er?null:Et.getPrimaries(y.colorSpace),ke=y.colorSpace===Er||qe===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const nt=y.isCompressedTexture||y.image[0].isCompressedTexture,xe=y.image[0]&&y.image[0].isDataTexture,Ce=[];for(let he=0;he<6;he++)!nt&&!xe?Ce[he]=C(y.image[he],!0,a.maxCubemapSize):Ce[he]=xe?y.image[he].image:y.image[he],Ce[he]=xt(y,Ce[he]);const He=Ce[0],Xe=u.convert(y.format,y.colorSpace),we=u.convert(y.type),at=I(y.internalFormat,Xe,we,y.colorSpace),z=y.isVideoTexture!==!0,Pe=ae.__version===void 0||ce===!0,ye=pe.dataReady;let Le=U(y,He);se(s.TEXTURE_CUBE_MAP,y);let _e;if(nt){z&&Pe&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Le,at,He.width,He.height);for(let he=0;he<6;he++){_e=Ce[he].mipmaps;for(let Ae=0;Ae<_e.length;Ae++){const it=_e[Ae];y.format!==di?Xe!==null?z?ye&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,0,0,it.width,it.height,Xe,it.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,at,it.width,it.height,0,it.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ye&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,0,0,it.width,it.height,Xe,we,it.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,at,it.width,it.height,0,Xe,we,it.data)}}}else{if(_e=y.mipmaps,z&&Pe){_e.length>0&&Le++;const he=We(Ce[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Le,at,he.width,he.height)}for(let he=0;he<6;he++)if(xe){z?ye&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ce[he].width,Ce[he].height,Xe,we,Ce[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,at,Ce[he].width,Ce[he].height,0,Xe,we,Ce[he].data);for(let Ae=0;Ae<_e.length;Ae++){const Pt=_e[Ae].image[he].image;z?ye&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,0,0,Pt.width,Pt.height,Xe,we,Pt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,at,Pt.width,Pt.height,0,Xe,we,Pt.data)}}else{z?ye&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Xe,we,Ce[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,at,Xe,we,Ce[he]);for(let Ae=0;Ae<_e.length;Ae++){const it=_e[Ae];z?ye&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,0,0,Xe,we,it.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,at,Xe,we,it.image[he])}}}S(y)&&_(s.TEXTURE_CUBE_MAP),ae.__version=pe.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Se(b,y,G,ce,pe,ae){const qe=u.convert(G.format,G.colorSpace),Ee=u.convert(G.type),ke=I(G.internalFormat,qe,Ee,G.colorSpace),nt=r.get(y),xe=r.get(G);if(xe.__renderTarget=y,!nt.__hasExternalTextures){const Ce=Math.max(1,y.width>>ae),He=Math.max(1,y.height>>ae);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?n.texImage3D(pe,ae,ke,Ce,He,y.depth,0,qe,Ee,null):n.texImage2D(pe,ae,ke,Ce,He,0,qe,Ee,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),zt(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,pe,xe.__webglTexture,0,k(y)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ce,pe,xe.__webglTexture,ae),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(b,y,G){if(s.bindRenderbuffer(s.RENDERBUFFER,b),y.depthBuffer){const ce=y.depthTexture,pe=ce&&ce.isDepthTexture?ce.type:null,ae=L(y.stencilBuffer,pe),qe=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;zt(y)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k(y),ae,y.width,y.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,k(y),ae,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ae,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,b)}else{const ce=y.textures;for(let pe=0;pe<ce.length;pe++){const ae=ce[pe],qe=u.convert(ae.format,ae.colorSpace),Ee=u.convert(ae.type),ke=I(ae.internalFormat,qe,Ee,ae.colorSpace);zt(y)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k(y),ke,y.width,y.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,k(y),ke,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ke,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ne(b,y,G){const ce=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(y.depthTexture);if(pe.__renderTarget=y,(!pe.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ce){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,y.depthTexture.addEventListener("dispose",F)),pe.__webglTexture===void 0){pe.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),se(s.TEXTURE_CUBE_MAP,y.depthTexture);const nt=u.convert(y.depthTexture.format),xe=u.convert(y.depthTexture.type);let Ce;y.depthTexture.format===qi?Ce=s.DEPTH_COMPONENT24:y.depthTexture.format===ts&&(Ce=s.DEPTH24_STENCIL8);for(let He=0;He<6;He++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Ce,y.width,y.height,0,nt,xe,null)}}else le(y.depthTexture,0);const ae=pe.__webglTexture,qe=k(y),Ee=ce?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,ke=y.depthTexture.format===ts?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===qi)zt(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ke,Ee,ae,0,qe):s.framebufferTexture2D(s.FRAMEBUFFER,ke,Ee,ae,0);else if(y.depthTexture.format===ts)zt(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ke,Ee,ae,0,qe):s.framebufferTexture2D(s.FRAMEBUFFER,ke,Ee,ae,0);else throw new Error("Unknown depthTexture format")}function pt(b){const y=r.get(b),G=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){const ce=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ce){const pe=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ce.removeEventListener("dispose",pe)};ce.addEventListener("dispose",pe),y.__depthDisposeCallback=pe}y.__boundDepthTexture=ce}if(b.depthTexture&&!y.__autoAllocateDepthBuffer)if(G)for(let ce=0;ce<6;ce++)Ne(y.__webglFramebuffer[ce],b,ce);else{const ce=b.texture.mipmaps;ce&&ce.length>0?Ne(y.__webglFramebuffer[0],b,0):Ne(y.__webglFramebuffer,b,0)}else if(G){y.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[ce]),y.__webglDepthbuffer[ce]===void 0)y.__webglDepthbuffer[ce]=s.createRenderbuffer(),Be(y.__webglDepthbuffer[ce],b,!1);else{const pe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=y.__webglDepthbuffer[ce];s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ae)}}else{const ce=b.texture.mipmaps;if(ce&&ce.length>0?n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Be(y.__webglDepthbuffer,b,!1);else{const pe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ae)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function jt(b,y,G){const ce=r.get(b);y!==void 0&&Se(ce.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&pt(b)}function dt(b){const y=b.texture,G=r.get(b),ce=r.get(y);b.addEventListener("dispose",O);const pe=b.textures,ae=b.isWebGLCubeRenderTarget===!0,qe=pe.length>1;if(qe||(ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture()),ce.__version=y.version,f.memory.textures++),ae){G.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[Ee]=[];for(let ke=0;ke<y.mipmaps.length;ke++)G.__webglFramebuffer[Ee][ke]=s.createFramebuffer()}else G.__webglFramebuffer[Ee]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let Ee=0;Ee<y.mipmaps.length;Ee++)G.__webglFramebuffer[Ee]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(qe)for(let Ee=0,ke=pe.length;Ee<ke;Ee++){const nt=r.get(pe[Ee]);nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture(),f.memory.textures++)}if(b.samples>0&&zt(b)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Ee=0;Ee<pe.length;Ee++){const ke=pe[Ee];G.__webglColorRenderbuffer[Ee]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[Ee]);const nt=u.convert(ke.format,ke.colorSpace),xe=u.convert(ke.type),Ce=I(ke.internalFormat,nt,xe,ke.colorSpace,b.isXRRenderTarget===!0),He=k(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,He,Ce,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,G.__webglColorRenderbuffer[Ee])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Be(G.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){n.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),se(s.TEXTURE_CUBE_MAP,y);for(let Ee=0;Ee<6;Ee++)if(y.mipmaps&&y.mipmaps.length>0)for(let ke=0;ke<y.mipmaps.length;ke++)Se(G.__webglFramebuffer[Ee][ke],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ke);else Se(G.__webglFramebuffer[Ee],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);S(y)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(qe){for(let Ee=0,ke=pe.length;Ee<ke;Ee++){const nt=pe[Ee],xe=r.get(nt);let Ce=s.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ce=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ce,xe.__webglTexture),se(Ce,nt),Se(G.__webglFramebuffer,b,nt,s.COLOR_ATTACHMENT0+Ee,Ce,0),S(nt)&&_(Ce)}n.unbindTexture()}else{let Ee=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ee=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ee,ce.__webglTexture),se(Ee,y),y.mipmaps&&y.mipmaps.length>0)for(let ke=0;ke<y.mipmaps.length;ke++)Se(G.__webglFramebuffer[ke],b,y,s.COLOR_ATTACHMENT0,Ee,ke);else Se(G.__webglFramebuffer,b,y,s.COLOR_ATTACHMENT0,Ee,0);S(y)&&_(Ee),n.unbindTexture()}b.depthBuffer&&pt(b)}function vt(b){const y=b.textures;for(let G=0,ce=y.length;G<ce;G++){const pe=y[G];if(S(pe)){const ae=N(b),qe=r.get(pe).__webglTexture;n.bindTexture(ae,qe),_(ae),n.unbindTexture()}}}const Rt=[],lt=[];function kt(b){if(b.samples>0){if(zt(b)===!1){const y=b.textures,G=b.width,ce=b.height;let pe=s.COLOR_BUFFER_BIT;const ae=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=r.get(b),Ee=y.length>1;if(Ee)for(let nt=0;nt<y.length;nt++)n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const ke=b.texture.mipmaps;ke&&ke.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let nt=0;nt<y.length;nt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),Ee){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[nt]);const xe=r.get(y[nt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,xe,0)}s.blitFramebuffer(0,0,G,ce,0,0,G,ce,pe,s.NEAREST),p===!0&&(Rt.length=0,lt.length=0,Rt.push(s.COLOR_ATTACHMENT0+nt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Rt.push(ae),lt.push(ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,lt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Rt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ee)for(let nt=0;nt<y.length;nt++){n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,qe.__webglColorRenderbuffer[nt]);const xe=r.get(y[nt]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,xe,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const y=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function k(b){return Math.min(a.maxSamples,b.samples)}function zt(b){const y=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function mt(b){const y=f.render.frame;v.get(b)!==y&&(v.set(b,y),b.update())}function xt(b,y){const G=b.colorSpace,ce=b.format,pe=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||G!==Xs&&G!==Er&&(Et.getTransfer(G)===Lt?(ce!==di||pe!==Jn)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",G)),y}function We(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=Z,this.resetTextureUnits=re,this.setTexture2D=le,this.setTexture2DArray=oe,this.setTexture3D=Y,this.setTextureCube=X,this.rebindTextures=jt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function FM(s,e){function n(r,a=Er){let u;const f=Et.getTransfer(a);if(r===Jn)return s.UNSIGNED_BYTE;if(r===td)return s.UNSIGNED_SHORT_4_4_4_4;if(r===nd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===$m)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Zm)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===qm)return s.BYTE;if(r===Km)return s.SHORT;if(r===Ho)return s.UNSIGNED_SHORT;if(r===ed)return s.INT;if(r===Ci)return s.UNSIGNED_INT;if(r===Ei)return s.FLOAT;if(r===Yi)return s.HALF_FLOAT;if(r===Qm)return s.ALPHA;if(r===Jm)return s.RGB;if(r===di)return s.RGBA;if(r===qi)return s.DEPTH_COMPONENT;if(r===ts)return s.DEPTH_STENCIL;if(r===e0)return s.RED;if(r===id)return s.RED_INTEGER;if(r===Ws)return s.RG;if(r===rd)return s.RG_INTEGER;if(r===sd)return s.RGBA_INTEGER;if(r===Rl||r===bl||r===Pl||r===Ll)if(f===Lt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Rl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ll)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Rl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ll)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gf||r===_f||r===vf||r===xf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===gf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_f)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sf||r===yf||r===Mf||r===Ef||r===Tf||r===wf||r===Af)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Sf||r===yf)return f===Lt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Mf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ef)return u.COMPRESSED_R11_EAC;if(r===Tf)return u.COMPRESSED_SIGNED_R11_EAC;if(r===wf)return u.COMPRESSED_RG11_EAC;if(r===Af)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Cf||r===Rf||r===bf||r===Pf||r===Lf||r===Df||r===Nf||r===If||r===Uf||r===Ff||r===Of||r===Bf||r===kf||r===zf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Cf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Pf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Lf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Df)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===If)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Uf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ff)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Of)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===kf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vf||r===Hf||r===Gf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Vf)return f===Lt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wf||r===Xf||r===jf||r===Yf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Wf)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Xf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===jf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Go?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const OM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new m0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Ri({vertexShader:OM,fragmentShader:BM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $i(new zl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zM extends Ys{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,v=null,g=null,x=null,M=null,T=null;const C=typeof XRWebGLBinding<"u",S=new kM,_={},N=n.getContextAttributes();let I=null,L=null;const U=[],F=[],O=new It;let $=null;const A=new Qn;A.viewport=new qt;const R=new Qn;R.viewport=new qt;const H=[A,R],re=new $v;let Z=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ue=U[J];return ue===void 0&&(ue=new qc,U[J]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(J){let ue=U[J];return ue===void 0&&(ue=new qc,U[J]=ue),ue.getGripSpace()},this.getHand=function(J){let ue=U[J];return ue===void 0&&(ue=new qc,U[J]=ue),ue.getHandSpace()};function le(J){const ue=F.indexOf(J.inputSource);if(ue===-1)return;const Se=U[ue];Se!==void 0&&(Se.update(J.inputSource,J.frame,m||f),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function oe(){a.removeEventListener("select",le),a.removeEventListener("selectstart",le),a.removeEventListener("selectend",le),a.removeEventListener("squeeze",le),a.removeEventListener("squeezestart",le),a.removeEventListener("squeezeend",le),a.removeEventListener("end",oe),a.removeEventListener("inputsourceschange",Y);for(let J=0;J<U.length;J++){const ue=F[J];ue!==null&&(F[J]=null,U[J].disconnect(ue))}Z=null,fe=null,S.reset();for(const J in _)delete _[J];e.setRenderTarget(I),M=null,x=null,g=null,a=null,L=null,$e.stop(),r.isPresenting=!1,e.setPixelRatio($),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(a,n)),g},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(I=e.getRenderTarget(),a.addEventListener("select",le),a.addEventListener("selectstart",le),a.addEventListener("selectend",le),a.addEventListener("squeeze",le),a.addEventListener("squeezestart",le),a.addEventListener("squeezeend",le),a.addEventListener("end",oe),a.addEventListener("inputsourceschange",Y),N.xrCompatible!==!0&&await n.makeXRCompatible(),$=e.getPixelRatio(),e.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Be=null,Ne=null;N.depth&&(Ne=N.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=N.stencil?ts:qi,Be=N.stencil?Go:Ci);const pt={colorFormat:n.RGBA8,depthFormat:Ne,scaleFactor:u};g=this.getBinding(),x=g.createProjectionLayer(pt),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new Ai(x.textureWidth,x.textureHeight,{format:di,type:Jn,depthTexture:new Xo(x.textureWidth,x.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Se={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(a,n,Se),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new Ai(M.framebufferWidth,M.framebufferHeight,{format:di,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),$e.setContext(a),$e.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Y(J){for(let ue=0;ue<J.removed.length;ue++){const Se=J.removed[ue],Be=F.indexOf(Se);Be>=0&&(F[Be]=null,U[Be].disconnect(Se))}for(let ue=0;ue<J.added.length;ue++){const Se=J.added[ue];let Be=F.indexOf(Se);if(Be===-1){for(let pt=0;pt<U.length;pt++)if(pt>=F.length){F.push(Se),Be=pt;break}else if(F[pt]===null){F[pt]=Se,Be=pt;break}if(Be===-1)break}const Ne=U[Be];Ne&&Ne.connect(Se)}}const X=new te,de=new te;function ie(J,ue,Se){X.setFromMatrixPosition(ue.matrixWorld),de.setFromMatrixPosition(Se.matrixWorld);const Be=X.distanceTo(de),Ne=ue.projectionMatrix.elements,pt=Se.projectionMatrix.elements,jt=Ne[14]/(Ne[10]-1),dt=Ne[14]/(Ne[10]+1),vt=(Ne[9]+1)/Ne[5],Rt=(Ne[9]-1)/Ne[5],lt=(Ne[8]-1)/Ne[0],kt=(pt[8]+1)/pt[0],k=jt*lt,zt=jt*kt,mt=Be/(-lt+kt),xt=mt*-lt;if(ue.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(xt),J.translateZ(mt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ne[10]===-1)J.projectionMatrix.copy(ue.projectionMatrix),J.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const We=jt+mt,b=dt+mt,y=k-xt,G=zt+(Be-xt),ce=vt*dt/b*We,pe=Rt*dt/b*We;J.projectionMatrix.makePerspective(y,G,ce,pe,We,b),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function D(J,ue){ue===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ue.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let ue=J.near,Se=J.far;S.texture!==null&&(S.depthNear>0&&(ue=S.depthNear),S.depthFar>0&&(Se=S.depthFar)),re.near=R.near=A.near=ue,re.far=R.far=A.far=Se,(Z!==re.near||fe!==re.far)&&(a.updateRenderState({depthNear:re.near,depthFar:re.far}),Z=re.near,fe=re.far),re.layers.mask=J.layers.mask|6,A.layers.mask=re.layers.mask&3,R.layers.mask=re.layers.mask&5;const Be=J.parent,Ne=re.cameras;D(re,Be);for(let pt=0;pt<Ne.length;pt++)D(Ne[pt],Be);Ne.length===2?ie(re,A,R):re.projectionMatrix.copy(A.projectionMatrix),se(J,re,Be)};function se(J,ue,Se){Se===null?J.matrix.copy(ue.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(ue.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ue.projectionMatrix),J.projectionMatrixInverse.copy(ue.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=qf*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return re},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(J){p=J,x!==null&&(x.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(re)},this.getCameraTexture=function(J){return _[J]};let Re=null;function Ye(J,ue){if(v=ue.getViewerPose(m||f),T=ue,v!==null){const Se=v.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let Be=!1;Se.length!==re.cameras.length&&(re.cameras.length=0,Be=!0);for(let dt=0;dt<Se.length;dt++){const vt=Se[dt];let Rt=null;if(M!==null)Rt=M.getViewport(vt);else{const kt=g.getViewSubImage(x,vt);Rt=kt.viewport,dt===0&&(e.setRenderTargetTextures(L,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(L))}let lt=H[dt];lt===void 0&&(lt=new Qn,lt.layers.enable(dt),lt.viewport=new qt,H[dt]=lt),lt.matrix.fromArray(vt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(vt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),dt===0&&(re.matrix.copy(lt.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale)),Be===!0&&re.cameras.push(lt)}const Ne=a.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&C){g=r.getBinding();const dt=g.getDepthInformation(Se[0]);dt&&dt.isValid&&dt.texture&&S.init(dt,a.renderState)}if(Ne&&Ne.includes("camera-access")&&C){e.state.unbindTexture(),g=r.getBinding();for(let dt=0;dt<Se.length;dt++){const vt=Se[dt].camera;if(vt){let Rt=_[vt];Rt||(Rt=new m0,_[vt]=Rt);const lt=g.getCameraImage(vt);Rt.sourceTexture=lt}}}}for(let Se=0;Se<U.length;Se++){const Be=F[Se],Ne=U[Se];Be!==null&&Ne!==void 0&&Ne.update(Be,ue,m||f)}Re&&Re(J,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),T=null}const $e=new _0;$e.setAnimationLoop(Ye),this.setAnimationLoop=function(J){Re=J},this.dispose=function(){}}}const $r=new Ki,VM=new Kt;function HM(s,e){function n(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,u0(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function a(S,_,N,I,L){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(S,_):_.isMeshToonMaterial?(u(S,_),g(S,_)):_.isMeshPhongMaterial?(u(S,_),v(S,_)):_.isMeshStandardMaterial?(u(S,_),x(S,_),_.isMeshPhysicalMaterial&&M(S,_,L)):_.isMeshMatcapMaterial?(u(S,_),T(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),C(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?p(S,_,N,I):_.isSpriteMaterial?m(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,n(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===In&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,n(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===In&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,n(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,n(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const N=e.get(_),I=N.envMap,L=N.envMapRotation;I&&(S.envMap.value=I,$r.copy(L),$r.x*=-1,$r.y*=-1,$r.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),S.envMapRotation.value.setFromMatrix4(VM.makeRotationFromEuler($r)),S.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function p(S,_,N,I){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*N,S.scale.value=I*.5,_.map&&(S.map.value=_.map,n(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,N){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===In&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,_){_.matcap&&(S.matcap.value=_.matcap)}function C(S,_){const N=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function GM(s,e,n,r){let a={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,I){const L=I.program;r.uniformBlockBinding(N,L)}function m(N,I){let L=a[N.id];L===void 0&&(T(N),L=v(N),a[N.id]=L,N.addEventListener("dispose",S));const U=I.program;r.updateUBOMapping(N,U);const F=e.render.frame;u[N.id]!==F&&(x(N),u[N.id]=F)}function v(N){const I=g();N.__bindingPointIndex=I;const L=s.createBuffer(),U=N.__size,F=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,U,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,L),L}function g(){for(let N=0;N<d;N++)if(f.indexOf(N)===-1)return f.push(N),N;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const I=a[N.id],L=N.uniforms,U=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let F=0,O=L.length;F<O;F++){const $=Array.isArray(L[F])?L[F]:[L[F]];for(let A=0,R=$.length;A<R;A++){const H=$[A];if(M(H,F,A,U)===!0){const re=H.__offset,Z=Array.isArray(H.value)?H.value:[H.value];let fe=0;for(let le=0;le<Z.length;le++){const oe=Z[le],Y=C(oe);typeof oe=="number"||typeof oe=="boolean"?(H.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,re+fe,H.__data)):oe.isMatrix3?(H.__data[0]=oe.elements[0],H.__data[1]=oe.elements[1],H.__data[2]=oe.elements[2],H.__data[3]=0,H.__data[4]=oe.elements[3],H.__data[5]=oe.elements[4],H.__data[6]=oe.elements[5],H.__data[7]=0,H.__data[8]=oe.elements[6],H.__data[9]=oe.elements[7],H.__data[10]=oe.elements[8],H.__data[11]=0):(oe.toArray(H.__data,fe),fe+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,re,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(N,I,L,U){const F=N.value,O=I+"_"+L;if(U[O]===void 0)return typeof F=="number"||typeof F=="boolean"?U[O]=F:U[O]=F.clone(),!0;{const $=U[O];if(typeof F=="number"||typeof F=="boolean"){if($!==F)return U[O]=F,!0}else if($.equals(F)===!1)return $.copy(F),!0}return!1}function T(N){const I=N.uniforms;let L=0;const U=16;for(let O=0,$=I.length;O<$;O++){const A=Array.isArray(I[O])?I[O]:[I[O]];for(let R=0,H=A.length;R<H;R++){const re=A[R],Z=Array.isArray(re.value)?re.value:[re.value];for(let fe=0,le=Z.length;fe<le;fe++){const oe=Z[fe],Y=C(oe),X=L%U,de=X%Y.boundary,ie=X+de;L+=de,ie!==0&&U-ie<Y.storage&&(L+=U-ie),re.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=L,L+=Y.storage}}}const F=L%U;return F>0&&(L+=U-F),N.__size=L,N.__cache={},this}function C(N){const I={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(I.boundary=4,I.storage=4):N.isVector2?(I.boundary=8,I.storage=8):N.isVector3||N.isColor?(I.boundary=16,I.storage=12):N.isVector4?(I.boundary=16,I.storage=16):N.isMatrix3?(I.boundary=48,I.storage=48):N.isMatrix4?(I.boundary=64,I.storage=64):N.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",N),I}function S(N){const I=N.target;I.removeEventListener("dispose",S);const L=f.indexOf(I.__bindingPointIndex);f.splice(L,1),s.deleteBuffer(a[I.id]),delete a[I.id],delete u[I.id]}function _(){for(const N in a)s.deleteBuffer(a[N]);f=[],a={},u={}}return{bind:p,update:m,dispose:_}}const WM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yi=null;function XM(){return yi===null&&(yi=new Vv(WM,16,16,Ws,Yi),yi.name="DFG_LUT",yi.minFilter=Sn,yi.magFilter=Sn,yi.wrapS=Gi,yi.wrapT=Gi,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}class jM{constructor(e={}){const{canvas:n=pv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:M=Jn}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=f;const C=M,S=new Set([sd,rd,id]),_=new Set([Jn,Ci,Ho,Go,td,nd]),N=new Uint32Array(4),I=new Int32Array(4);let L=null,U=null;const F=[],O=[];let $=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let R=!1;this._outputColorSpace=Zn;let H=0,re=0,Z=null,fe=-1,le=null;const oe=new qt,Y=new qt;let X=null;const de=new Dt(0);let ie=0,D=n.width,se=n.height,Re=1,Ye=null,$e=null;const J=new qt(0,0,D,se),ue=new qt(0,0,D,se);let Se=!1;const Be=new h0;let Ne=!1,pt=!1;const jt=new Kt,dt=new te,vt=new qt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function kt(){return Z===null?Re:1}let k=r;function zt(w,W){return n.getContext(w,W)}try{const w={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Jf}`),n.addEventListener("webglcontextlost",it,!1),n.addEventListener("webglcontextrestored",Pt,!1),n.addEventListener("webglcontextcreationerror",St,!1),k===null){const W="webgl2";if(k=zt(W,w),k===null)throw zt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw At("WebGLRenderer: "+w.message),w}let mt,xt,We,b,y,G,ce,pe,ae,qe,Ee,ke,nt,xe,Ce,He,Xe,we,at,z,Pe,ye,Le,_e;function he(){mt=new XS(k),mt.init(),ye=new FM(k,mt),xt=new FS(k,mt,e,ye),We=new IM(k,mt),xt.reversedDepthBuffer&&x&&We.buffers.depth.setReversed(!0),b=new qS(k),y=new xM,G=new UM(k,mt,We,y,xt,ye,b),ce=new BS(A),pe=new WS(A),ae=new Qv(k),Le=new IS(k,ae),qe=new jS(k,ae,b,Le),Ee=new $S(k,qe,ae,b),at=new KS(k,xt,G),He=new OS(y),ke=new vM(A,ce,pe,mt,xt,Le,He),nt=new HM(A,y),xe=new yM,Ce=new CM(mt),we=new NS(A,ce,pe,We,Ee,T,p),Xe=new DM(A,Ee,xt),_e=new GM(k,b,xt,We),z=new US(k,mt,b),Pe=new YS(k,mt,b),b.programs=ke.programs,A.capabilities=xt,A.extensions=mt,A.properties=y,A.renderLists=xe,A.shadowMap=Xe,A.state=We,A.info=b}he(),C!==Jn&&($=new QS(C,n.width,n.height,a,u));const Ae=new zM(A,k);this.xr=Ae,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(w){w!==void 0&&(Re=w,this.setSize(D,se,!1))},this.getSize=function(w){return w.set(D,se)},this.setSize=function(w,W,ne=!0){if(Ae.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}D=w,se=W,n.width=Math.floor(w*Re),n.height=Math.floor(W*Re),ne===!0&&(n.style.width=w+"px",n.style.height=W+"px"),$!==null&&$.setSize(n.width,n.height),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(D*Re,se*Re).floor()},this.setDrawingBufferSize=function(w,W,ne){D=w,se=W,Re=ne,n.width=Math.floor(w*ne),n.height=Math.floor(W*ne),this.setViewport(0,0,w,W)},this.setEffects=function(w){if(C===Jn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let W=0;W<w.length;W++)if(w[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}$.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(oe)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,W,ne,Q){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,W,ne,Q),We.viewport(oe.copy(J).multiplyScalar(Re).round())},this.getScissor=function(w){return w.copy(ue)},this.setScissor=function(w,W,ne,Q){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,W,ne,Q),We.scissor(Y.copy(ue).multiplyScalar(Re).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(w){We.setScissorTest(Se=w)},this.setOpaqueSort=function(w){Ye=w},this.setTransparentSort=function(w){$e=w},this.getClearColor=function(w){return w.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,ne=!0){let Q=0;if(w){let q=!1;if(Z!==null){const be=Z.texture.format;q=S.has(be)}if(q){const be=Z.texture.type,Ie=_.has(be),Te=we.getClearColor(),Ve=we.getClearAlpha(),Fe=Te.r,tt=Te.g,Ze=Te.b;Ie?(N[0]=Fe,N[1]=tt,N[2]=Ze,N[3]=Ve,k.clearBufferuiv(k.COLOR,0,N)):(I[0]=Fe,I[1]=tt,I[2]=Ze,I[3]=Ve,k.clearBufferiv(k.COLOR,0,I))}else Q|=k.COLOR_BUFFER_BIT}W&&(Q|=k.DEPTH_BUFFER_BIT),ne&&(Q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",it,!1),n.removeEventListener("webglcontextrestored",Pt,!1),n.removeEventListener("webglcontextcreationerror",St,!1),we.dispose(),xe.dispose(),Ce.dispose(),y.dispose(),ce.dispose(),pe.dispose(),Ee.dispose(),Le.dispose(),_e.dispose(),ke.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",br),Ae.removeEventListener("sessionend",Pr),ti.stop()};function it(w){w.preventDefault(),Yp("WebGLRenderer: Context Lost."),R=!0}function Pt(){Yp("WebGLRenderer: Context Restored."),R=!1;const w=b.autoReset,W=Xe.enabled,ne=Xe.autoUpdate,Q=Xe.needsUpdate,q=Xe.type;he(),b.autoReset=w,Xe.enabled=W,Xe.autoUpdate=ne,Xe.needsUpdate=Q,Xe.type=q}function St(w){At("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Fn(w){const W=w.target;W.removeEventListener("dispose",Fn),yn(W)}function yn(w){Ks(w),y.remove(w)}function Ks(w){const W=y.get(w).programs;W!==void 0&&(W.forEach(function(ne){ke.releaseProgram(ne)}),w.isShaderMaterial&&ke.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,ne,Q,q,be){W===null&&(W=Rt);const Ie=q.isMesh&&q.matrixWorld.determinant()<0,Te=ea(w,W,ne,Q,q);We.setMaterial(Q,Ie);let Ve=ne.index,Fe=1;if(Q.wireframe===!0){if(Ve=qe.getWireframeAttribute(ne),Ve===void 0)return;Fe=2}const tt=ne.drawRange,Ze=ne.attributes.position;let ct=tt.start*Fe,yt=(tt.start+tt.count)*Fe;be!==null&&(ct=Math.max(ct,be.start*Fe),yt=Math.min(yt,(be.start+be.count)*Fe)),Ve!==null?(ct=Math.max(ct,0),yt=Math.min(yt,Ve.count)):Ze!=null&&(ct=Math.max(ct,0),yt=Math.min(yt,Ze.count));const Ut=yt-ct;if(Ut<0||Ut===1/0)return;Le.setup(q,Q,Te,ne,Ve);let Nt,Tt=z;if(Ve!==null&&(Nt=ae.get(Ve),Tt=Pe,Tt.setIndex(Nt)),q.isMesh)Q.wireframe===!0?(We.setLineWidth(Q.wireframeLinewidth*kt()),Tt.setMode(k.LINES)):Tt.setMode(k.TRIANGLES);else if(q.isLine){let Qe=Q.linewidth;Qe===void 0&&(Qe=1),We.setLineWidth(Qe*kt()),q.isLineSegments?Tt.setMode(k.LINES):q.isLineLoop?Tt.setMode(k.LINE_LOOP):Tt.setMode(k.LINE_STRIP)}else q.isPoints?Tt.setMode(k.POINTS):q.isSprite&&Tt.setMode(k.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Wo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Qe=q._multiDrawStarts,Ct=q._multiDrawCounts,gt=q._multiDrawCount,hn=Ve?ae.get(Ve).bytesPerElement:1,mi=y.get(Q).currentProgram.getUniforms();for(let Qt=0;Qt<gt;Qt++)mi.setValue(k,"_gl_DrawID",Qt),Tt.render(Qe[Qt]/hn,Ct[Qt])}else if(q.isInstancedMesh)Tt.renderInstances(ct,Ut,q.count);else if(ne.isInstancedBufferGeometry){const Qe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ct=Math.min(ne.instanceCount,Qe);Tt.renderInstances(ct,Ut,Ct)}else Tt.render(ct,Ut)};function Zi(w,W,ne){w.transparent===!0&&w.side===Hi&&w.forceSinglePass===!1?(w.side=In,w.needsUpdate=!0,Lr(w,W,ne),w.side=Cr,w.needsUpdate=!0,Lr(w,W,ne),w.side=Hi):Lr(w,W,ne)}this.compile=function(w,W,ne=null){ne===null&&(ne=w),U=Ce.get(ne),U.init(W),O.push(U),ne.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(U.pushLight(q),q.castShadow&&U.pushShadow(q))}),w!==ne&&w.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(U.pushLight(q),q.castShadow&&U.pushShadow(q))}),U.setupLights();const Q=new Set;return w.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const be=q.material;if(be)if(Array.isArray(be))for(let Ie=0;Ie<be.length;Ie++){const Te=be[Ie];Zi(Te,ne,q),Q.add(Te)}else Zi(be,ne,q),Q.add(be)}),U=O.pop(),Q},this.compileAsync=function(w,W,ne=null){const Q=this.compile(w,W,ne);return new Promise(q=>{function be(){if(Q.forEach(function(Ie){y.get(Ie).currentProgram.isReady()&&Q.delete(Ie)}),Q.size===0){q(w);return}setTimeout(be,10)}mt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let $s=null;function Rr(w){$s&&$s(w)}function br(){ti.stop()}function Pr(){ti.start()}const ti=new _0;ti.setAnimationLoop(Rr),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(w){$s=w,Ae.setAnimationLoop(w),w===null?ti.stop():ti.start()},Ae.addEventListener("sessionstart",br),Ae.addEventListener("sessionend",Pr),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const ne=Ae.enabled===!0&&Ae.isPresenting===!0,Q=$!==null&&(Z===null||ne)&&$.begin(A,Z);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&($===null||$.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(W),W=Ae.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,W,Z),U=Ce.get(w,O.length),U.init(W),O.push(U),jt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Be.setFromProjectionMatrix(jt,Ti,W.reversedDepth),pt=this.localClippingEnabled,Ne=He.init(this.clippingPlanes,pt),L=xe.get(w,F.length),L.init(),F.push(L),Ae.enabled===!0&&Ae.isPresenting===!0){const Ie=A.xr.getDepthSensingMesh();Ie!==null&&Zs(Ie,W,-1/0,A.sortObjects)}Zs(w,W,0,A.sortObjects),L.finish(),A.sortObjects===!0&&L.sort(Ye,$e),lt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,lt&&we.addToRenderList(L,w),this.info.render.frame++,Ne===!0&&He.beginShadows();const q=U.state.shadowsArray;if(Xe.render(q,w,W),Ne===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Q&&$.hasRenderPass())===!1){const Ie=L.opaque,Te=L.transmissive;if(U.setupLights(),W.isArrayCamera){const Ve=W.cameras;if(Te.length>0)for(let Fe=0,tt=Ve.length;Fe<tt;Fe++){const Ze=Ve[Fe];Qo(Ie,Te,w,Ze)}lt&&we.render(w);for(let Fe=0,tt=Ve.length;Fe<tt;Fe++){const Ze=Ve[Fe];Zo(L,w,Ze,Ze.viewport)}}else Te.length>0&&Qo(Ie,Te,w,W),lt&&we.render(w),Zo(L,w,W)}Z!==null&&re===0&&(G.updateMultisampleRenderTarget(Z),G.updateRenderTargetMipmap(Z)),Q&&$.end(A),w.isScene===!0&&w.onAfterRender(A,w,W),Le.resetDefaultState(),fe=-1,le=null,O.pop(),O.length>0?(U=O[O.length-1],Ne===!0&&He.setGlobalState(A.clippingPlanes,U.state.camera)):U=null,F.pop(),F.length>0?L=F[F.length-1]:L=null};function Zs(w,W,ne,Q){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)ne=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)U.pushLight(w),w.castShadow&&U.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Be.intersectsSprite(w)){Q&&vt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(jt);const Ie=Ee.update(w),Te=w.material;Te.visible&&L.push(w,Ie,Te,ne,vt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Be.intersectsObject(w))){const Ie=Ee.update(w),Te=w.material;if(Q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),vt.copy(w.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),vt.copy(Ie.boundingSphere.center)),vt.applyMatrix4(w.matrixWorld).applyMatrix4(jt)),Array.isArray(Te)){const Ve=Ie.groups;for(let Fe=0,tt=Ve.length;Fe<tt;Fe++){const Ze=Ve[Fe],ct=Te[Ze.materialIndex];ct&&ct.visible&&L.push(w,Ie,ct,ne,vt.z,Ze)}}else Te.visible&&L.push(w,Ie,Te,ne,vt.z,null)}}const be=w.children;for(let Ie=0,Te=be.length;Ie<Te;Ie++)Zs(be[Ie],W,ne,Q)}function Zo(w,W,ne,Q){const{opaque:q,transmissive:be,transparent:Ie}=w;U.setupLightsView(ne),Ne===!0&&He.setGlobalState(A.clippingPlanes,ne),Q&&We.viewport(oe.copy(Q)),q.length>0&&Gn(q,W,ne),be.length>0&&Gn(be,W,ne),Ie.length>0&&Gn(Ie,W,ne),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Qo(w,W,ne,Q){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[Q.id]===void 0){const ct=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[Q.id]=new Ai(1,1,{generateMipmaps:!0,type:ct?Yi:Jn,minFilter:es,samples:xt.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const be=U.state.transmissionRenderTarget[Q.id],Ie=Q.viewport||oe;be.setSize(Ie.z*A.transmissionResolutionScale,Ie.w*A.transmissionResolutionScale);const Te=A.getRenderTarget(),Ve=A.getActiveCubeFace(),Fe=A.getActiveMipmapLevel();A.setRenderTarget(be),A.getClearColor(de),ie=A.getClearAlpha(),ie<1&&A.setClearColor(16777215,.5),A.clear(),lt&&we.render(ne);const tt=A.toneMapping;A.toneMapping=wi;const Ze=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),U.setupLightsView(Q),Ne===!0&&He.setGlobalState(A.clippingPlanes,Q),Gn(w,ne,Q),G.updateMultisampleRenderTarget(be),G.updateRenderTargetMipmap(be),mt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let yt=0,Ut=W.length;yt<Ut;yt++){const Nt=W[yt],{object:Tt,geometry:Qe,material:Ct,group:gt}=Nt;if(Ct.side===Hi&&Tt.layers.test(Q.layers)){const hn=Ct.side;Ct.side=In,Ct.needsUpdate=!0,Qs(Tt,ne,Q,Qe,Ct,gt),Ct.side=hn,Ct.needsUpdate=!0,ct=!0}}ct===!0&&(G.updateMultisampleRenderTarget(be),G.updateRenderTargetMipmap(be))}A.setRenderTarget(Te,Ve,Fe),A.setClearColor(de,ie),Ze!==void 0&&(Q.viewport=Ze),A.toneMapping=tt}function Gn(w,W,ne){const Q=W.isScene===!0?W.overrideMaterial:null;for(let q=0,be=w.length;q<be;q++){const Ie=w[q],{object:Te,geometry:Ve,group:Fe}=Ie;let tt=Ie.material;tt.allowOverride===!0&&Q!==null&&(tt=Q),Te.layers.test(ne.layers)&&Qs(Te,W,ne,Ve,tt,Fe)}}function Qs(w,W,ne,Q,q,be){w.onBeforeRender(A,W,ne,Q,q,be),w.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(A,W,ne,Q,w,be),q.transparent===!0&&q.side===Hi&&q.forceSinglePass===!1?(q.side=In,q.needsUpdate=!0,A.renderBufferDirect(ne,W,Q,q,w,be),q.side=Cr,q.needsUpdate=!0,A.renderBufferDirect(ne,W,Q,q,w,be),q.side=Hi):A.renderBufferDirect(ne,W,Q,q,w,be),w.onAfterRender(A,W,ne,Q,q,be)}function Lr(w,W,ne){W.isScene!==!0&&(W=Rt);const Q=y.get(w),q=U.state.lights,be=U.state.shadowsArray,Ie=q.state.version,Te=ke.getParameters(w,q.state,be,W,ne),Ve=ke.getProgramCacheKey(Te);let Fe=Q.programs;Q.environment=w.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(w.isMeshStandardMaterial?pe:ce).get(w.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Fe===void 0&&(w.addEventListener("dispose",Fn),Fe=new Map,Q.programs=Fe);let tt=Fe.get(Ve);if(tt!==void 0){if(Q.currentProgram===tt&&Q.lightsStateVersion===Ie)return Js(w,Te),tt}else Te.uniforms=ke.getUniforms(w),w.onBeforeCompile(Te,A),tt=ke.acquireProgram(Te,Ve),Fe.set(Ve,tt),Q.uniforms=Te.uniforms;const Ze=Q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ze.clippingPlanes=He.uniform),Js(w,Te),Q.needsLights=na(w),Q.lightsStateVersion=Ie,Q.needsLights&&(Ze.ambientLightColor.value=q.state.ambient,Ze.lightProbe.value=q.state.probe,Ze.directionalLights.value=q.state.directional,Ze.directionalLightShadows.value=q.state.directionalShadow,Ze.spotLights.value=q.state.spot,Ze.spotLightShadows.value=q.state.spotShadow,Ze.rectAreaLights.value=q.state.rectArea,Ze.ltc_1.value=q.state.rectAreaLTC1,Ze.ltc_2.value=q.state.rectAreaLTC2,Ze.pointLights.value=q.state.point,Ze.pointLightShadows.value=q.state.pointShadow,Ze.hemisphereLights.value=q.state.hemi,Ze.directionalShadowMap.value=q.state.directionalShadowMap,Ze.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ze.spotShadowMap.value=q.state.spotShadowMap,Ze.spotLightMatrix.value=q.state.spotLightMatrix,Ze.spotLightMap.value=q.state.spotLightMap,Ze.pointShadowMap.value=q.state.pointShadowMap,Ze.pointShadowMatrix.value=q.state.pointShadowMatrix),Q.currentProgram=tt,Q.uniformsList=null,tt}function Jo(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=Dl.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function Js(w,W){const ne=y.get(w);ne.outputColorSpace=W.outputColorSpace,ne.batching=W.batching,ne.batchingColor=W.batchingColor,ne.instancing=W.instancing,ne.instancingColor=W.instancingColor,ne.instancingMorph=W.instancingMorph,ne.skinning=W.skinning,ne.morphTargets=W.morphTargets,ne.morphNormals=W.morphNormals,ne.morphColors=W.morphColors,ne.morphTargetsCount=W.morphTargetsCount,ne.numClippingPlanes=W.numClippingPlanes,ne.numIntersection=W.numClipIntersection,ne.vertexAlphas=W.vertexAlphas,ne.vertexTangents=W.vertexTangents,ne.toneMapping=W.toneMapping}function ea(w,W,ne,Q,q){W.isScene!==!0&&(W=Rt),G.resetTextureUnits();const be=W.fog,Ie=Q.isMeshStandardMaterial?W.environment:null,Te=Z===null?A.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Xs,Ve=(Q.isMeshStandardMaterial?pe:ce).get(Q.envMap||Ie),Fe=Q.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,tt=!!ne.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ze=!!ne.morphAttributes.position,ct=!!ne.morphAttributes.normal,yt=!!ne.morphAttributes.color;let Ut=wi;Q.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ut=A.toneMapping);const Nt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Tt=Nt!==void 0?Nt.length:0,Qe=y.get(Q),Ct=U.state.lights;if(Ne===!0&&(pt===!0||w!==le)){const rn=w===le&&Q.id===fe;He.setState(Q,w,rn)}let gt=!1;Q.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Ct.state.version||Qe.outputColorSpace!==Te||q.isBatchedMesh&&Qe.batching===!1||!q.isBatchedMesh&&Qe.batching===!0||q.isBatchedMesh&&Qe.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Qe.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Qe.instancing===!1||!q.isInstancedMesh&&Qe.instancing===!0||q.isSkinnedMesh&&Qe.skinning===!1||!q.isSkinnedMesh&&Qe.skinning===!0||q.isInstancedMesh&&Qe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Qe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Qe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Qe.instancingMorph===!1&&q.morphTexture!==null||Qe.envMap!==Ve||Q.fog===!0&&Qe.fog!==be||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==He.numPlanes||Qe.numIntersection!==He.numIntersection)||Qe.vertexAlphas!==Fe||Qe.vertexTangents!==tt||Qe.morphTargets!==Ze||Qe.morphNormals!==ct||Qe.morphColors!==yt||Qe.toneMapping!==Ut||Qe.morphTargetsCount!==Tt)&&(gt=!0):(gt=!0,Qe.__version=Q.version);let hn=Qe.currentProgram;gt===!0&&(hn=Lr(Q,W,q));let mi=!1,Qt=!1,Dr=!1;const bt=hn.getUniforms(),st=Qe.uniforms;if(We.useProgram(hn.program)&&(mi=!0,Qt=!0,Dr=!0),Q.id!==fe&&(fe=Q.id,Qt=!0),mi||le!==w){We.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),bt.setValue(k,"projectionMatrix",w.projectionMatrix),bt.setValue(k,"viewMatrix",w.matrixWorldInverse);const sn=bt.map.cameraPosition;sn!==void 0&&sn.setValue(k,dt.setFromMatrixPosition(w.matrixWorld)),xt.logarithmicDepthBuffer&&bt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&bt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),le!==w&&(le=w,Qt=!0,Dr=!0)}if(Qe.needsLights&&(Ct.state.directionalShadowMap.length>0&&bt.setValue(k,"directionalShadowMap",Ct.state.directionalShadowMap,G),Ct.state.spotShadowMap.length>0&&bt.setValue(k,"spotShadowMap",Ct.state.spotShadowMap,G),Ct.state.pointShadowMap.length>0&&bt.setValue(k,"pointShadowMap",Ct.state.pointShadowMap,G)),q.isSkinnedMesh){bt.setOptional(k,q,"bindMatrix"),bt.setOptional(k,q,"bindMatrixInverse");const rn=q.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),bt.setValue(k,"boneTexture",rn.boneTexture,G))}q.isBatchedMesh&&(bt.setOptional(k,q,"batchingTexture"),bt.setValue(k,"batchingTexture",q._matricesTexture,G),bt.setOptional(k,q,"batchingIdTexture"),bt.setValue(k,"batchingIdTexture",q._indirectTexture,G),bt.setOptional(k,q,"batchingColorTexture"),q._colorsTexture!==null&&bt.setValue(k,"batchingColorTexture",q._colorsTexture,G));const Mn=ne.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&at.update(q,ne,hn),(Qt||Qe.receiveShadow!==q.receiveShadow)&&(Qe.receiveShadow=q.receiveShadow,bt.setValue(k,"receiveShadow",q.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(st.envMap.value=Ve,st.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&W.environment!==null&&(st.envMapIntensity.value=W.environmentIntensity),st.dfgLUT!==void 0&&(st.dfgLUT.value=XM()),Qt&&(bt.setValue(k,"toneMappingExposure",A.toneMappingExposure),Qe.needsLights&&ta(st,Dr),be&&Q.fog===!0&&nt.refreshFogUniforms(st,be),nt.refreshMaterialUniforms(st,Q,Re,se,U.state.transmissionRenderTarget[w.id]),Dl.upload(k,Jo(Qe),st,G)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Dl.upload(k,Jo(Qe),st,G),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&bt.setValue(k,"center",q.center),bt.setValue(k,"modelViewMatrix",q.modelViewMatrix),bt.setValue(k,"normalMatrix",q.normalMatrix),bt.setValue(k,"modelMatrix",q.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const rn=Q.uniformsGroups;for(let sn=0,is=rn.length;sn<is;sn++){const gi=rn[sn];_e.update(gi,hn),_e.bind(gi,hn)}}return hn}function ta(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function na(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(w,W,ne){const Q=y.get(w);Q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),y.get(w.texture).__webglTexture=W,y.get(w.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ne,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){const ne=y.get(w);ne.__webglFramebuffer=W,ne.__useDefaultFramebuffer=W===void 0};const Gl=k.createFramebuffer();this.setRenderTarget=function(w,W=0,ne=0){Z=w,H=W,re=ne;let Q=null,q=!1,be=!1;if(w){const Te=y.get(w);if(Te.__useDefaultFramebuffer!==void 0){We.bindFramebuffer(k.FRAMEBUFFER,Te.__webglFramebuffer),oe.copy(w.viewport),Y.copy(w.scissor),X=w.scissorTest,We.viewport(oe),We.scissor(Y),We.setScissorTest(X),fe=-1;return}else if(Te.__webglFramebuffer===void 0)G.setupRenderTarget(w);else if(Te.__hasExternalTextures)G.rebindTextures(w,y.get(w.texture).__webglTexture,y.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const tt=w.depthTexture;if(Te.__boundDepthTexture!==tt){if(tt!==null&&y.has(tt)&&(w.width!==tt.image.width||w.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(w)}}const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(be=!0);const Fe=y.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Fe[W])?Q=Fe[W][ne]:Q=Fe[W],q=!0):w.samples>0&&G.useMultisampledRTT(w)===!1?Q=y.get(w).__webglMultisampledFramebuffer:Array.isArray(Fe)?Q=Fe[ne]:Q=Fe,oe.copy(w.viewport),Y.copy(w.scissor),X=w.scissorTest}else oe.copy(J).multiplyScalar(Re).floor(),Y.copy(ue).multiplyScalar(Re).floor(),X=Se;if(ne!==0&&(Q=Gl),We.bindFramebuffer(k.FRAMEBUFFER,Q)&&We.drawBuffers(w,Q),We.viewport(oe),We.scissor(Y),We.setScissorTest(X),q){const Te=y.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,Te.__webglTexture,ne)}else if(be){const Te=W;for(let Ve=0;Ve<w.textures.length;Ve++){const Fe=y.get(w.textures[Ve]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ve,Fe.__webglTexture,ne,Te)}}else if(w!==null&&ne!==0){const Te=y.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Te.__webglTexture,ne)}fe=-1},this.readRenderTargetPixels=function(w,W,ne,Q,q,be,Ie,Te=0){if(!(w&&w.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ve=Ve[Ie]),Ve){We.bindFramebuffer(k.FRAMEBUFFER,Ve);try{const Fe=w.textures[Te],tt=Fe.format,Ze=Fe.type;if(!xt.textureFormatReadable(tt)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(Ze)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-Q&&ne>=0&&ne<=w.height-q&&(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Te),k.readPixels(W,ne,Q,q,ye.convert(tt),ye.convert(Ze),be))}finally{const Fe=Z!==null?y.get(Z).__webglFramebuffer:null;We.bindFramebuffer(k.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(w,W,ne,Q,q,be,Ie,Te=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ve=Ve[Ie]),Ve)if(W>=0&&W<=w.width-Q&&ne>=0&&ne<=w.height-q){We.bindFramebuffer(k.FRAMEBUFFER,Ve);const Fe=w.textures[Te],tt=Fe.format,Ze=Fe.type;if(!xt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ct),k.bufferData(k.PIXEL_PACK_BUFFER,be.byteLength,k.STREAM_READ),w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Te),k.readPixels(W,ne,Q,q,ye.convert(tt),ye.convert(Ze),0);const yt=Z!==null?y.get(Z).__webglFramebuffer:null;We.bindFramebuffer(k.FRAMEBUFFER,yt);const Ut=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await mv(k,Ut,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ct),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,be),k.deleteBuffer(ct),k.deleteSync(Ut),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,ne=0){const Q=Math.pow(2,-ne),q=Math.floor(w.image.width*Q),be=Math.floor(w.image.height*Q),Ie=W!==null?W.x:0,Te=W!==null?W.y:0;G.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,ne,0,0,Ie,Te,q,be),We.unbindTexture()};const Wl=k.createFramebuffer(),Ht=k.createFramebuffer();this.copyTextureToTexture=function(w,W,ne=null,Q=null,q=0,be=null){be===null&&(q!==0?(Wo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=q,q=0):be=0);let Ie,Te,Ve,Fe,tt,Ze,ct,yt,Ut;const Nt=w.isCompressedTexture?w.mipmaps[be]:w.image;if(ne!==null)Ie=ne.max.x-ne.min.x,Te=ne.max.y-ne.min.y,Ve=ne.isBox3?ne.max.z-ne.min.z:1,Fe=ne.min.x,tt=ne.min.y,Ze=ne.isBox3?ne.min.z:0;else{const Mn=Math.pow(2,-q);Ie=Math.floor(Nt.width*Mn),Te=Math.floor(Nt.height*Mn),w.isDataArrayTexture?Ve=Nt.depth:w.isData3DTexture?Ve=Math.floor(Nt.depth*Mn):Ve=1,Fe=0,tt=0,Ze=0}Q!==null?(ct=Q.x,yt=Q.y,Ut=Q.z):(ct=0,yt=0,Ut=0);const Tt=ye.convert(W.format),Qe=ye.convert(W.type);let Ct;W.isData3DTexture?(G.setTexture3D(W,0),Ct=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(G.setTexture2DArray(W,0),Ct=k.TEXTURE_2D_ARRAY):(G.setTexture2D(W,0),Ct=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const gt=k.getParameter(k.UNPACK_ROW_LENGTH),hn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),mi=k.getParameter(k.UNPACK_SKIP_PIXELS),Qt=k.getParameter(k.UNPACK_SKIP_ROWS),Dr=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Nt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Nt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Fe),k.pixelStorei(k.UNPACK_SKIP_ROWS,tt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ze);const bt=w.isDataArrayTexture||w.isData3DTexture,st=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const Mn=y.get(w),rn=y.get(W),sn=y.get(Mn.__renderTarget),is=y.get(rn.__renderTarget);We.bindFramebuffer(k.READ_FRAMEBUFFER,sn.__webglFramebuffer),We.bindFramebuffer(k.DRAW_FRAMEBUFFER,is.__webglFramebuffer);for(let gi=0;gi<Ve;gi++)bt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,y.get(w).__webglTexture,q,Ze+gi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,y.get(W).__webglTexture,be,Ut+gi)),k.blitFramebuffer(Fe,tt,Ie,Te,ct,yt,Ie,Te,k.DEPTH_BUFFER_BIT,k.NEAREST);We.bindFramebuffer(k.READ_FRAMEBUFFER,null),We.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(q!==0||w.isRenderTargetTexture||y.has(w)){const Mn=y.get(w),rn=y.get(W);We.bindFramebuffer(k.READ_FRAMEBUFFER,Wl),We.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ht);for(let sn=0;sn<Ve;sn++)bt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Mn.__webglTexture,q,Ze+sn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Mn.__webglTexture,q),st?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,rn.__webglTexture,be,Ut+sn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,rn.__webglTexture,be),q!==0?k.blitFramebuffer(Fe,tt,Ie,Te,ct,yt,Ie,Te,k.COLOR_BUFFER_BIT,k.NEAREST):st?k.copyTexSubImage3D(Ct,be,ct,yt,Ut+sn,Fe,tt,Ie,Te):k.copyTexSubImage2D(Ct,be,ct,yt,Fe,tt,Ie,Te);We.bindFramebuffer(k.READ_FRAMEBUFFER,null),We.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else st?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Ct,be,ct,yt,Ut,Ie,Te,Ve,Tt,Qe,Nt.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(Ct,be,ct,yt,Ut,Ie,Te,Ve,Tt,Nt.data):k.texSubImage3D(Ct,be,ct,yt,Ut,Ie,Te,Ve,Tt,Qe,Nt):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,be,ct,yt,Ie,Te,Tt,Qe,Nt.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,be,ct,yt,Nt.width,Nt.height,Tt,Nt.data):k.texSubImage2D(k.TEXTURE_2D,be,ct,yt,Ie,Te,Tt,Qe,Nt);k.pixelStorei(k.UNPACK_ROW_LENGTH,gt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,hn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,mi),k.pixelStorei(k.UNPACK_SKIP_ROWS,Qt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Dr),be===0&&W.generateMipmaps&&k.generateMipmap(Ct),We.unbindTexture()},this.initRenderTarget=function(w){y.get(w).__webglFramebuffer===void 0&&G.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?G.setTextureCube(w,0):w.isData3DTexture?G.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?G.setTexture2DArray(w,0):G.setTexture2D(w,0),We.unbindTexture()},this.resetState=function(){H=0,re=0,Z=null,We.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),n.unpackColorSpace=Et._getUnpackColorSpace()}}function YM(){const s=Tr.useRef(null);return Tr.useEffect(()=>{const e=s.current,n=new zv,r=new Qn(75,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=5;const a=new jM({alpha:!0,antialias:!0});a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(window.devicePixelRatio),a.domElement.style.pointerEvents="none",e.appendChild(a.domElement);const u=new pi,f=1500,d=new Float32Array(f*3);for(let C=0;C<f*3;C++)d[C]=(Math.random()-.5)*15;u.setAttribute("position",new hi(d,3));const p=new p0({size:.02,color:"#00d1b2"}),m=new Xv(u,p);n.add(m);let v=0,g=0;const x=C=>{v=C.clientX/window.innerWidth*2-1,g=-(C.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",x);const M=()=>{requestAnimationFrame(M),m.rotation.y+=.001,m.rotation.x+=.001,m.rotation.y+=v*.002,m.rotation.x+=g*.002,a.render(n,r)};M();const T=()=>{a.setSize(window.innerWidth,window.innerHeight),r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix()};return window.addEventListener("resize",T),()=>{window.removeEventListener("resize",T),window.removeEventListener("mousemove",x),e.removeChild(a.domElement)}},[]),Oe.jsx("div",{ref:s,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1,pointerEvents:"none"}})}const qM="/Portfolio/assets/dog-D9lAQ1PI.gif";function KM(){const[s,e]=Tr.useState(!1),n=()=>{const u=`https://wa.me/919666809898?text=${encodeURIComponent("Hi Bharath! I saw your portfolio and want to connect 🚀")}`;window.open(u,"_blank")};return Oe.jsxs("div",{className:`pet-wrapper ${s?"paused":""}`,onClick:n,onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),children:[Oe.jsx("div",{className:"tooltip",children:"Let’s Build Together 🚀"}),Oe.jsx("img",{src:qM,alt:"walking-pet",className:"pet-gif"})]})}function $M(){return Oe.jsxs(Oe.Fragment,{children:[Oe.jsx(YM,{}),Oe.jsxs("div",{className:"app-root",children:[Oe.jsx(c_,{}),Oe.jsxs("main",{id:"main",children:[Oe.jsx(f_,{}),Oe.jsx(L_,{}),Oe.jsx(N_,{}),Oe.jsx(I_,{})]}),Oe.jsx(KM,{}),Oe.jsxs("footer",{className:"site-footer",children:["© ",new Date().getFullYear()," Ganagoni Bharath Goud · Built with React"]})]})]})}u_.createRoot(document.getElementById("root")).render(Oe.jsx(Ar.StrictMode,{children:Oe.jsx($M,{})}));
