(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Sa(t,e){const n=new Set(t.split(","));return e?i=>n.has(i.toLowerCase()):i=>n.has(i)}const ge={},ui=[],rt=()=>{},fm=()=>!1,co=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ra=t=>t.startsWith("onUpdate:"),Oe=Object.assign,Aa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},dm=Object.prototype.hasOwnProperty,J=(t,e)=>dm.call(t,e),W=Array.isArray,hi=t=>uo(t)==="[object Map]",Ff=t=>uo(t)==="[object Set]",K=t=>typeof t=="function",Se=t=>typeof t=="string",Ni=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",Uf=t=>(_e(t)||K(t))&&K(t.then)&&K(t.catch),Hf=Object.prototype.toString,uo=t=>Hf.call(t),pm=t=>uo(t).slice(8,-1),Bf=t=>uo(t)==="[object Object]",ba=t=>Se(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ss=Sa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ho=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gm=/-(\w)/g,xt=ho(t=>t.replace(gm,(e,n)=>n?n.toUpperCase():"")),_m=/\B([A-Z])/g,Oi=ho(t=>t.replace(_m,"-$1").toLowerCase()),fo=ho(t=>t.charAt(0).toUpperCase()+t.slice(1)),Yo=ho(t=>t?`on${fo(t)}`:""),In=(t,e)=>!Object.is(t,e),Xo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Pr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},mm=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ru;const jf=()=>ru||(ru=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ka(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Se(i)?wm(i):ka(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Se(t)||_e(t))return t}const ym=/;(?![^(]*\))/g,vm=/:([^]+)/,Em=/\/\*[^]*?\*\//g;function wm(t){const e={};return t.replace(Em,"").split(ym).forEach(n=>{if(n){const i=n.split(vm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Pa(t){let e="";if(Se(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const i=Pa(t[n]);i&&(e+=i+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Im="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tm=Sa(Im);function Vf(t){return!!t||t===""}const Cm=t=>Se(t)?t:t==null?"":W(t)||_e(t)&&(t.toString===Hf||!K(t.toString))?JSON.stringify(t,$f,2):String(t),$f=(t,e)=>e&&e.__v_isRef?$f(t,e.value):hi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[Jo(i,r)+" =>"]=s,n),{})}:Ff(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Jo(n))}:Ni(e)?Jo(e):_e(e)&&!W(e)&&!Bf(e)?String(e):e,Jo=(t,e="")=>{var n;return Ni(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ht;class Wf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ht,!e&&ht&&(this.index=(ht.scopes||(ht.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ht;try{return ht=this,e()}finally{ht=n}}}on(){ht=this}off(){ht=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Sm(t){return new Wf(t)}function Rm(t,e=ht){e&&e.active&&e.effects.push(t)}function Am(){return ht}let xn;class Na{constructor(e,n,i,s){this.fn=e,this.trigger=n,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Rm(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,qn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(bm(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Yn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=mn,n=xn;try{return mn=!0,xn=this,this._runnings++,ou(this),this.fn()}finally{lu(this),this._runnings--,xn=n,mn=e}}stop(){var e;this.active&&(ou(this),lu(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function bm(t){return t.value}function ou(t){t._trackId++,t._depsLength=0}function lu(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Kf(t.deps[e],t);t.deps.length=t._depsLength}}function Kf(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let mn=!0,bl=0;const Gf=[];function qn(){Gf.push(mn),mn=!1}function Yn(){const t=Gf.pop();mn=t===void 0?!0:t}function Oa(){bl++}function Da(){for(bl--;!bl&&kl.length;)kl.shift()()}function zf(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const i=t.deps[t._depsLength];i!==e?(i&&Kf(i,t),t.deps[t._depsLength++]=e):t._depsLength++}}const kl=[];function qf(t,e,n){Oa();for(const i of t.keys()){let s;i._dirtyLevel<e&&(s??(s=t.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(s??(s=t.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&kl.push(i.scheduler)))}Da()}const Yf=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Pl=new WeakMap,Fn=Symbol(""),Nl=Symbol("");function Qe(t,e,n){if(mn&&xn){let i=Pl.get(t);i||Pl.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Yf(()=>i.delete(n))),zf(xn,s)}}function Yt(t,e,n,i,s,r){const o=Pl.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&W(t)){const a=Number(i);o.forEach((c,u)=>{(u==="length"||!Ni(u)&&u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":W(t)?ba(n)&&l.push(o.get("length")):(l.push(o.get(Fn)),hi(t)&&l.push(o.get(Nl)));break;case"delete":W(t)||(l.push(o.get(Fn)),hi(t)&&l.push(o.get(Nl)));break;case"set":hi(t)&&l.push(o.get(Fn));break}Oa();for(const a of l)a&&qf(a,4);Da()}const km=Sa("__proto__,__v_isRef,__isVue"),Xf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ni)),au=Pm();function Pm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=Z(this);for(let r=0,o=this.length;r<o;r++)Qe(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(Z)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){qn(),Oa();const i=Z(this)[e].apply(this,n);return Da(),Yn(),i}}),t}function Nm(t){const e=Z(this);return Qe(e,"has",t),e.hasOwnProperty(t)}class Jf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?Wm:td:r?ed:Zf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=W(e);if(!s){if(o&&J(au,n))return Reflect.get(au,n,i);if(n==="hasOwnProperty")return Nm}const l=Reflect.get(e,n,i);return(Ni(n)?Xf.has(n):km(n))||(s||Qe(e,"get",n),r)?l:qe(l)?o&&ba(n)?l:l.value:_e(l)?s?id(l):go(l):l}}class Qf extends Jf{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const a=wi(r);if(!Nr(i)&&!wi(i)&&(r=Z(r),i=Z(i)),!W(e)&&qe(r)&&!qe(i))return a?!1:(r.value=i,!0)}const o=W(e)&&ba(n)?Number(n)<e.length:J(e,n),l=Reflect.set(e,n,i,s);return e===Z(s)&&(o?In(i,r)&&Yt(e,"set",n,i):Yt(e,"add",n,i)),l}deleteProperty(e,n){const i=J(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Yt(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Ni(n)||!Xf.has(n))&&Qe(e,"has",n),i}ownKeys(e){return Qe(e,"iterate",W(e)?"length":Fn),Reflect.ownKeys(e)}}class Om extends Jf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Dm=new Qf,Mm=new Om,Lm=new Qf(!0),Ma=t=>t,po=t=>Reflect.getPrototypeOf(t);function sr(t,e,n=!1,i=!1){t=t.__v_raw;const s=Z(t),r=Z(e);n||(In(e,r)&&Qe(s,"get",e),Qe(s,"get",r));const{has:o}=po(s),l=i?Ma:n?Fa:_s;if(o.call(s,e))return l(t.get(e));if(o.call(s,r))return l(t.get(r));t!==s&&t.get(e)}function rr(t,e=!1){const n=this.__v_raw,i=Z(n),s=Z(t);return e||(In(t,s)&&Qe(i,"has",t),Qe(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function or(t,e=!1){return t=t.__v_raw,!e&&Qe(Z(t),"iterate",Fn),Reflect.get(t,"size",t)}function cu(t){t=Z(t);const e=Z(this);return po(e).has.call(e,t)||(e.add(t),Yt(e,"add",t,t)),this}function uu(t,e){e=Z(e);const n=Z(this),{has:i,get:s}=po(n);let r=i.call(n,t);r||(t=Z(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?In(e,o)&&Yt(n,"set",t,e):Yt(n,"add",t,e),this}function hu(t){const e=Z(this),{has:n,get:i}=po(e);let s=n.call(e,t);s||(t=Z(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&Yt(e,"delete",t,void 0),r}function fu(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&Yt(t,"clear",void 0,void 0),n}function lr(t,e){return function(i,s){const r=this,o=r.__v_raw,l=Z(o),a=e?Ma:t?Fa:_s;return!t&&Qe(l,"iterate",Fn),o.forEach((c,u)=>i.call(s,a(c),a(u),r))}}function ar(t,e,n){return function(...i){const s=this.__v_raw,r=Z(s),o=hi(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=s[t](...i),u=n?Ma:e?Fa:_s;return!e&&Qe(r,"iterate",a?Nl:Fn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function rn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function xm(){const t={get(r){return sr(this,r)},get size(){return or(this)},has:rr,add:cu,set:uu,delete:hu,clear:fu,forEach:lr(!1,!1)},e={get(r){return sr(this,r,!1,!0)},get size(){return or(this)},has:rr,add:cu,set:uu,delete:hu,clear:fu,forEach:lr(!1,!0)},n={get(r){return sr(this,r,!0)},get size(){return or(this,!0)},has(r){return rr.call(this,r,!0)},add:rn("add"),set:rn("set"),delete:rn("delete"),clear:rn("clear"),forEach:lr(!0,!1)},i={get(r){return sr(this,r,!0,!0)},get size(){return or(this,!0)},has(r){return rr.call(this,r,!0)},add:rn("add"),set:rn("set"),delete:rn("delete"),clear:rn("clear"),forEach:lr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ar(r,!1,!1),n[r]=ar(r,!0,!1),e[r]=ar(r,!1,!0),i[r]=ar(r,!0,!0)}),[t,n,e,i]}const[Fm,Um,Hm,Bm]=xm();function La(t,e){const n=e?t?Bm:Hm:t?Um:Fm;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(J(n,s)&&s in i?n:i,s,r)}const jm={get:La(!1,!1)},Vm={get:La(!1,!0)},$m={get:La(!0,!1)},Zf=new WeakMap,ed=new WeakMap,td=new WeakMap,Wm=new WeakMap;function Km(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gm(t){return t.__v_skip||!Object.isExtensible(t)?0:Km(pm(t))}function go(t){return wi(t)?t:xa(t,!1,Dm,jm,Zf)}function nd(t){return xa(t,!1,Lm,Vm,ed)}function id(t){return xa(t,!0,Mm,$m,td)}function xa(t,e,n,i,s){if(!_e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=Gm(t);if(o===0)return t;const l=new Proxy(t,o===2?i:n);return s.set(t,l),l}function fi(t){return wi(t)?fi(t.__v_raw):!!(t&&t.__v_isReactive)}function wi(t){return!!(t&&t.__v_isReadonly)}function Nr(t){return!!(t&&t.__v_isShallow)}function sd(t){return fi(t)||wi(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function rd(t){return Object.isExtensible(t)&&Pr(t,"__v_skip",!0),t}const _s=t=>_e(t)?go(t):t,Fa=t=>_e(t)?id(t):t;class od{constructor(e,n,i,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Na(()=>e(this._value),()=>wr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Z(this);return(!e._cacheable||e.effect.dirty)&&In(e._value,e._value=e.effect.run())&&wr(e,4),ld(e),e.effect._dirtyLevel>=2&&wr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function zm(t,e,n=!1){let i,s;const r=K(t);return r?(i=t,s=rt):(i=t.get,s=t.set),new od(i,s,r||!s,n)}function ld(t){var e;mn&&xn&&(t=Z(t),zf(xn,(e=t.dep)!=null?e:t.dep=Yf(()=>t.dep=void 0,t instanceof od?t:void 0)))}function wr(t,e=4,n){t=Z(t);const i=t.dep;i&&qf(i,e)}function qe(t){return!!(t&&t.__v_isRef===!0)}function Ua(t){return ad(t,!1)}function qm(t){return ad(t,!0)}function ad(t,e){return qe(t)?t:new Ym(t,e)}class Ym{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:_s(e)}get value(){return ld(this),this._value}set value(e){const n=this.__v_isShallow||Nr(e)||wi(e);e=n?e:Z(e),In(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:_s(e),wr(this,4))}}function Un(t){return qe(t)?t.value:t}const Xm={get:(t,e,n)=>Un(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return qe(s)&&!qe(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function cd(t){return fi(t)?t:new Proxy(t,Xm)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yn(t,e,n,i){try{return i?t(...i):t()}catch(s){_o(s,e,n)}}function yt(t,e,n,i){if(K(t)){const r=yn(t,e,n,i);return r&&Uf(r)&&r.catch(o=>{_o(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(yt(t[r],e,n,i));return s}function _o(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){yn(a,null,10,[t,o,l]);return}}Jm(t,n,s,i)}function Jm(t,e,n,i=!0){console.error(t)}let ms=!1,Ol=!1;const Fe=[];let bt=0;const di=[];let an=null,On=0;const ud=Promise.resolve();let Ha=null;function hd(t){const e=Ha||ud;return t?e.then(this?t.bind(this):t):e}function Qm(t){let e=bt+1,n=Fe.length;for(;e<n;){const i=e+n>>>1,s=Fe[i],r=ys(s);r<t||r===t&&s.pre?e=i+1:n=i}return e}function Ba(t){(!Fe.length||!Fe.includes(t,ms&&t.allowRecurse?bt+1:bt))&&(t.id==null?Fe.push(t):Fe.splice(Qm(t.id),0,t),fd())}function fd(){!ms&&!Ol&&(Ol=!0,Ha=ud.then(pd))}function Zm(t){const e=Fe.indexOf(t);e>bt&&Fe.splice(e,1)}function ey(t){W(t)?di.push(...t):(!an||!an.includes(t,t.allowRecurse?On+1:On))&&di.push(t),fd()}function du(t,e,n=ms?bt+1:0){for(;n<Fe.length;n++){const i=Fe[n];if(i&&i.pre){if(t&&i.id!==t.uid)continue;Fe.splice(n,1),n--,i()}}}function dd(t){if(di.length){const e=[...new Set(di)].sort((n,i)=>ys(n)-ys(i));if(di.length=0,an){an.push(...e);return}for(an=e,On=0;On<an.length;On++)an[On]();an=null,On=0}}const ys=t=>t.id==null?1/0:t.id,ty=(t,e)=>{const n=ys(t)-ys(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function pd(t){Ol=!1,ms=!0,Fe.sort(ty);try{for(bt=0;bt<Fe.length;bt++){const e=Fe[bt];e&&e.active!==!1&&yn(e,null,14)}}finally{bt=0,Fe.length=0,dd(),ms=!1,Ha=null,(Fe.length||di.length)&&pd()}}function ny(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ge;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||ge;d&&(s=n.map(g=>Se(g)?g.trim():g)),h&&(s=n.map(mm))}let l,a=i[l=Yo(e)]||i[l=Yo(xt(e))];!a&&r&&(a=i[l=Yo(Oi(e))]),a&&yt(a,t,6,s);const c=i[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,yt(c,t,6,s)}}function gd(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},l=!1;if(!K(t)){const a=c=>{const u=gd(c,e,!0);u&&(l=!0,Oe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(_e(t)&&i.set(t,null),null):(W(r)?r.forEach(a=>o[a]=null):Oe(o,r),_e(t)&&i.set(t,o),o)}function mo(t,e){return!t||!co(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,Oi(e))||J(t,e))}let Be=null,_d=null;function Or(t){const e=Be;return Be=t,_d=t&&t.type.__scopeId||null,e}function iy(t,e=Be,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Cu(-1);const r=Or(e);let o;try{o=t(...s)}finally{Or(r),i._d&&Cu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Qo(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:d,setupState:g,ctx:y,inheritAttrs:C}=t;let b,N;const x=Or(t);try{if(n.shapeFlag&4){const B=s||i,re=B;b=At(u.call(re,B,h,r,g,d,y)),N=a}else{const B=e;b=At(B.length>1?B(r,{attrs:a,slots:l,emit:c}):B(r,null)),N=e.props?a:sy(a)}}catch(B){as.length=0,_o(B,t,1),b=Ge(Ii)}let L=b;if(N&&C!==!1){const B=Object.keys(N),{shapeFlag:re}=L;B.length&&re&7&&(o&&B.some(Ra)&&(N=ry(N,o)),L=Ti(L,N))}return n.dirs&&(L=Ti(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),b=L,Or(x),b}const sy=t=>{let e;for(const n in t)(n==="class"||n==="style"||co(n))&&((e||(e={}))[n]=t[n]);return e},ry=(t,e)=>{const n={};for(const i in t)(!Ra(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function oy(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?pu(i,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!mo(c,d))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===o?!1:i?o?pu(i,o,c):!0:!!o;return!1}function pu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!mo(n,r))return!0}return!1}function ly({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const md="components";function ay(t,e){return uy(md,t,!0,e)||t}const cy=Symbol.for("v-ndc");function uy(t,e,n=!0,i=!1){const s=Be||ke;if(s){const r=s.type;if(t===md){const l=ov(r,!1);if(l&&(l===e||l===xt(e)||l===fo(xt(e))))return r}const o=gu(s[t]||r[t],e)||gu(s.appContext[t],e);return!o&&i?r:o}}function gu(t,e){return t&&(t[e]||t[xt(e)]||t[fo(xt(e))])}const hy=t=>t.__isSuspense;function fy(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):ey(t)}const dy=Symbol.for("v-scx"),py=()=>Dt(dy),cr={};function Ir(t,e,n){return yd(t,e,n)}function yd(t,e,{immediate:n,deep:i,flush:s,once:r,onTrack:o,onTrigger:l}=ge){if(e&&r){const H=e;e=(...ye)=>{H(...ye),re()}}const a=ke,c=H=>i===!0?H:ri(H,i===!1?1:void 0);let u,h=!1,d=!1;if(qe(t)?(u=()=>t.value,h=Nr(t)):fi(t)?(u=()=>c(t),h=!0):W(t)?(d=!0,h=t.some(H=>fi(H)||Nr(H)),u=()=>t.map(H=>{if(qe(H))return H.value;if(fi(H))return c(H);if(K(H))return yn(H,a,2)})):K(t)?e?u=()=>yn(t,a,2):u=()=>(g&&g(),yt(t,a,3,[y])):u=rt,e&&i){const H=u;u=()=>ri(H())}let g,y=H=>{g=L.onStop=()=>{yn(H,a,4),g=L.onStop=void 0}},C;if(To)if(y=rt,e?n&&yt(e,a,3,[u(),d?[]:void 0,y]):u(),s==="sync"){const H=py();C=H.__watcherHandles||(H.__watcherHandles=[])}else return rt;let b=d?new Array(t.length).fill(cr):cr;const N=()=>{if(!(!L.active||!L.dirty))if(e){const H=L.run();(i||h||(d?H.some((ye,ve)=>In(ye,b[ve])):In(H,b)))&&(g&&g(),yt(e,a,3,[H,b===cr?void 0:d&&b[0]===cr?[]:b,y]),b=H)}else L.run()};N.allowRecurse=!!e;let x;s==="sync"?x=N:s==="post"?x=()=>Xe(N,a&&a.suspense):(N.pre=!0,a&&(N.id=a.uid),x=()=>Ba(N));const L=new Na(u,rt,x),B=Am(),re=()=>{L.stop(),B&&Aa(B.effects,L)};return e?n?N():b=L.run():s==="post"?Xe(L.run.bind(L),a&&a.suspense):L.run(),C&&C.push(re),re}function gy(t,e,n){const i=this.proxy,s=Se(t)?t.includes(".")?vd(i,t):()=>i[t]:t.bind(i,i);let r;K(e)?r=e:(r=e.handler,n=e);const o=Us(this),l=yd(s,r.bind(i),n);return o(),l}function vd(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function ri(t,e,n=0,i){if(!_e(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(i=i||new Set,i.has(t))return t;if(i.add(t),qe(t))ri(t.value,e,n,i);else if(W(t))for(let s=0;s<t.length;s++)ri(t[s],e,n,i);else if(Ff(t)||hi(t))t.forEach(s=>{ri(s,e,n,i)});else if(Bf(t))for(const s in t)ri(t[s],e,n,i);return t}function bn(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];r&&(l.oldValue=r[o].value);let a=l.dir[i];a&&(qn(),yt(a,n,8,[t.el,l,t,e]),Yn())}}/*! #__NO_SIDE_EFFECTS__ */function yo(t,e){return K(t)?Oe({name:t.name},e,{setup:t}):t}const rs=t=>!!t.type.__asyncLoader,Ed=t=>t.type.__isKeepAlive;function _y(t,e){wd(t,"a",e)}function my(t,e){wd(t,"da",e)}function wd(t,e,n=ke){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(vo(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Ed(s.parent.vnode)&&yy(i,e,n,s),s=s.parent}}function yy(t,e,n,i){const s=vo(e,t,i,!0);Id(()=>{Aa(i[e],s)},n)}function vo(t,e,n=ke,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;qn();const l=Us(n),a=yt(e,n,t,o);return l(),Yn(),a});return i?s.unshift(r):s.push(r),r}}const en=t=>(e,n=ke)=>(!To||t==="sp")&&vo(t,(...i)=>e(...i),n),vy=en("bm"),Ey=en("m"),wy=en("bu"),Iy=en("u"),Ty=en("bum"),Id=en("um"),Cy=en("sp"),Sy=en("rtg"),Ry=en("rtc");function Ay(t,e=ke){vo("ec",t,e)}function by(t,e,n={},i,s){if(Be.isCE||Be.parent&&rs(Be.parent)&&Be.parent.isCE)return e!=="default"&&(n.name=e),Ge("slot",n,i&&i());let r=t[e];r&&r._c&&(r._d=!1),Fs();const o=r&&Td(r(n)),l=Md(ft,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function Td(t){return t.some(e=>Mr(e)?!(e.type===Ii||e.type===ft&&!Td(e.children)):!0)?t:null}const Dl=t=>t?xd(t)?Ka(t)||t.proxy:Dl(t.parent):null,os=Oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Dl(t.parent),$root:t=>Dl(t.root),$emit:t=>t.emit,$options:t=>ja(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Ba(t.update)}),$nextTick:t=>t.n||(t.n=hd.bind(t.proxy)),$watch:t=>gy.bind(t)}),Zo=(t,e)=>t!==ge&&!t.__isScriptSetup&&J(t,e),ky={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Zo(i,e))return o[e]=1,i[e];if(s!==ge&&J(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&J(c,e))return o[e]=3,r[e];if(n!==ge&&J(n,e))return o[e]=4,n[e];Ml&&(o[e]=0)}}const u=os[e];let h,d;if(u)return e==="$attrs"&&Qe(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==ge&&J(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,J(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Zo(s,e)?(s[e]=n,!0):i!==ge&&J(i,e)?(i[e]=n,!0):J(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let l;return!!n[o]||t!==ge&&J(t,o)||Zo(e,o)||(l=r[0])&&J(l,o)||J(i,o)||J(os,o)||J(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function _u(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ml=!0;function Py(t){const e=ja(t),n=t.proxy,i=t.ctx;Ml=!1,e.beforeCreate&&mu(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:y,activated:C,deactivated:b,beforeDestroy:N,beforeUnmount:x,destroyed:L,unmounted:B,render:re,renderTracked:H,renderTriggered:ye,errorCaptured:ve,serverPrefetch:ct,expose:it,inheritAttrs:nn,components:An,directives:Tt,filters:Wi}=e;if(c&&Ny(c,i,null),o)for(const oe in o){const ee=o[oe];K(ee)&&(i[oe]=ee.bind(n))}if(s){const oe=s.call(n,n);_e(oe)&&(t.data=go(oe))}if(Ml=!0,r)for(const oe in r){const ee=r[oe],Vt=K(ee)?ee.bind(n,n):K(ee.get)?ee.get.bind(n,n):rt,sn=!K(ee)&&K(ee.set)?ee.set.bind(n):rt,Ct=dt({get:Vt,set:sn});Object.defineProperty(i,oe,{enumerable:!0,configurable:!0,get:()=>Ct.value,set:Ye=>Ct.value=Ye})}if(l)for(const oe in l)Cd(l[oe],i,n,oe);if(a){const oe=K(a)?a.call(n):a;Reflect.ownKeys(oe).forEach(ee=>{Tr(ee,oe[ee])})}u&&mu(u,t,"c");function Ee(oe,ee){W(ee)?ee.forEach(Vt=>oe(Vt.bind(n))):ee&&oe(ee.bind(n))}if(Ee(vy,h),Ee(Ey,d),Ee(wy,g),Ee(Iy,y),Ee(_y,C),Ee(my,b),Ee(Ay,ve),Ee(Ry,H),Ee(Sy,ye),Ee(Ty,x),Ee(Id,B),Ee(Cy,ct),W(it))if(it.length){const oe=t.exposed||(t.exposed={});it.forEach(ee=>{Object.defineProperty(oe,ee,{get:()=>n[ee],set:Vt=>n[ee]=Vt})})}else t.exposed||(t.exposed={});re&&t.render===rt&&(t.render=re),nn!=null&&(t.inheritAttrs=nn),An&&(t.components=An),Tt&&(t.directives=Tt)}function Ny(t,e,n=rt){W(t)&&(t=Ll(t));for(const i in t){const s=t[i];let r;_e(s)?"default"in s?r=Dt(s.from||i,s.default,!0):r=Dt(s.from||i):r=Dt(s),qe(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function mu(t,e,n){yt(W(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Cd(t,e,n,i){const s=i.includes(".")?vd(n,i):()=>n[i];if(Se(t)){const r=e[t];K(r)&&Ir(s,r)}else if(K(t))Ir(s,t.bind(n));else if(_e(t))if(W(t))t.forEach(r=>Cd(r,e,n,i));else{const r=K(t.handler)?t.handler.bind(n):e[t.handler];K(r)&&Ir(s,r,t)}}function ja(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!s.length&&!n&&!i?a=e:(a={},s.length&&s.forEach(c=>Dr(a,c,o,!0)),Dr(a,e,o)),_e(e)&&r.set(e,a),a}function Dr(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Dr(t,r,n,!0),s&&s.forEach(o=>Dr(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const l=Oy[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Oy={data:yu,props:vu,emits:vu,methods:es,computed:es,beforeCreate:Ke,created:Ke,beforeMount:Ke,mounted:Ke,beforeUpdate:Ke,updated:Ke,beforeDestroy:Ke,beforeUnmount:Ke,destroyed:Ke,unmounted:Ke,activated:Ke,deactivated:Ke,errorCaptured:Ke,serverPrefetch:Ke,components:es,directives:es,watch:My,provide:yu,inject:Dy};function yu(t,e){return e?t?function(){return Oe(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function Dy(t,e){return es(Ll(t),Ll(e))}function Ll(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ke(t,e){return t?[...new Set([].concat(t,e))]:e}function es(t,e){return t?Oe(Object.create(null),t,e):e}function vu(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:Oe(Object.create(null),_u(t),_u(e??{})):e}function My(t,e){if(!t)return e;if(!e)return t;const n=Oe(Object.create(null),t);for(const i in e)n[i]=Ke(t[i],e[i]);return n}function Sd(){return{app:null,config:{isNativeTag:fm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ly=0;function xy(t,e){return function(i,s=null){K(i)||(i=Oe({},i)),s!=null&&!_e(s)&&(s=null);const r=Sd(),o=new WeakSet;let l=!1;const a=r.app={_uid:Ly++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:av,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&K(c.install)?(o.add(c),c.install(a,...u)):K(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const d=Ge(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),l=!0,a._container=c,c.__vue_app__=a,Ka(d.component)||d.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a},runWithContext(c){const u=ls;ls=a;try{return c()}finally{ls=u}}};return a}}let ls=null;function Tr(t,e){if(ke){let n=ke.provides;const i=ke.parent&&ke.parent.provides;i===n&&(n=ke.provides=Object.create(i)),n[t]=e}}function Dt(t,e,n=!1){const i=ke||Be;if(i||ls){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:ls._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&K(e)?e.call(i&&i.proxy):e}}function Fy(t,e,n,i=!1){const s={},r={};Pr(r,wo,1),t.propsDefaults=Object.create(null),Rd(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:nd(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Uy(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,l=Z(s),[a]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(mo(t.emitsOptions,d))continue;const g=e[d];if(a)if(J(r,d))g!==r[d]&&(r[d]=g,c=!0);else{const y=xt(d);s[y]=xl(a,l,y,g,t,!1)}else g!==r[d]&&(r[d]=g,c=!0)}}}else{Rd(t,e,s,r)&&(c=!0);let u;for(const h in l)(!e||!J(e,h)&&((u=Oi(h))===h||!J(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=xl(a,l,h,void 0,t,!0)):delete s[h]);if(r!==l)for(const h in r)(!e||!J(e,h))&&(delete r[h],c=!0)}c&&Yt(t,"set","$attrs")}function Rd(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(ss(a))continue;const c=e[a];let u;s&&J(s,u=xt(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:mo(t.emitsOptions,a)||(!(a in i)||c!==i[a])&&(i[a]=c,o=!0)}if(r){const a=Z(n),c=l||ge;for(let u=0;u<r.length;u++){const h=r[u];n[h]=xl(s,a,h,c[h],t,!J(c,h))}}return o}function xl(t,e,n,i,s,r){const o=t[n];if(o!=null){const l=J(o,"default");if(l&&i===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&K(a)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=Us(s);i=c[n]=a.call(null,e),u()}}else i=a}o[0]&&(r&&!l?i=!1:o[1]&&(i===""||i===Oi(n))&&(i=!0))}return i}function Ad(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},l=[];let a=!1;if(!K(t)){const u=h=>{a=!0;const[d,g]=Ad(h,e,!0);Oe(o,d),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return _e(t)&&i.set(t,ui),ui;if(W(r))for(let u=0;u<r.length;u++){const h=xt(r[u]);Eu(h)&&(o[h]=ge)}else if(r)for(const u in r){const h=xt(u);if(Eu(h)){const d=r[u],g=o[h]=W(d)||K(d)?{type:d}:Oe({},d);if(g){const y=Tu(Boolean,g.type),C=Tu(String,g.type);g[0]=y>-1,g[1]=C<0||y<C,(y>-1||J(g,"default"))&&l.push(h)}}}const c=[o,l];return _e(t)&&i.set(t,c),c}function Eu(t){return t[0]!=="$"&&!ss(t)}function wu(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Iu(t,e){return wu(t)===wu(e)}function Tu(t,e){return W(e)?e.findIndex(n=>Iu(n,t)):K(e)&&Iu(e,t)?0:-1}const bd=t=>t[0]==="_"||t==="$stable",Va=t=>W(t)?t.map(At):[At(t)],Hy=(t,e,n)=>{if(e._n)return e;const i=iy((...s)=>Va(e(...s)),n);return i._c=!1,i},kd=(t,e,n)=>{const i=t._ctx;for(const s in t){if(bd(s))continue;const r=t[s];if(K(r))e[s]=Hy(s,r,i);else if(r!=null){const o=Va(r);e[s]=()=>o}}},Pd=(t,e)=>{const n=Va(e);t.slots.default=()=>n},By=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),Pr(e,"_",n)):kd(e,t.slots={})}else t.slots={},e&&Pd(t,e);Pr(t.slots,wo,1)},jy=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=ge;if(i.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Oe(s,e),!n&&l===1&&delete s._):(r=!e.$stable,kd(e,s)),o=e}else e&&(Pd(t,e),o={default:1});if(r)for(const l in s)!bd(l)&&o[l]==null&&delete s[l]};function Fl(t,e,n,i,s=!1){if(W(t)){t.forEach((d,g)=>Fl(d,e&&(W(e)?e[g]:e),n,i,s));return}if(rs(i)&&!s)return;const r=i.shapeFlag&4?Ka(i.component)||i.component.proxy:i.el,o=s?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===ge?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(Se(c)?(u[c]=null,J(h,c)&&(h[c]=null)):qe(c)&&(c.value=null)),K(a))yn(a,l,12,[o,u]);else{const d=Se(a),g=qe(a);if(d||g){const y=()=>{if(t.f){const C=d?J(h,a)?h[a]:u[a]:a.value;s?W(C)&&Aa(C,r):W(C)?C.includes(r)||C.push(r):d?(u[a]=[r],J(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else d?(u[a]=o,J(h,a)&&(h[a]=o)):g&&(a.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,Xe(y,n)):y()}}}const Xe=fy;function Vy(t){return $y(t)}function $y(t,e){const n=jf();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=rt,insertStaticContent:y}=t,C=(f,p,_,E=null,m=null,T=null,P=void 0,I=null,S=!!p.dynamicChildren)=>{if(f===p)return;f&&!Gi(f,p)&&(E=v(f),Ye(f,m,T,!0),f=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:w,ref:D,shapeFlag:U}=p;switch(w){case Eo:b(f,p,_,E);break;case Ii:N(f,p,_,E);break;case tl:f==null&&x(p,_,E,P);break;case ft:An(f,p,_,E,m,T,P,I,S);break;default:U&1?re(f,p,_,E,m,T,P,I,S):U&6?Tt(f,p,_,E,m,T,P,I,S):(U&64||U&128)&&w.process(f,p,_,E,m,T,P,I,S,M)}D!=null&&m&&Fl(D,f&&f.ref,T,p||f,!p)},b=(f,p,_,E)=>{if(f==null)i(p.el=l(p.children),_,E);else{const m=p.el=f.el;p.children!==f.children&&c(m,p.children)}},N=(f,p,_,E)=>{f==null?i(p.el=a(p.children||""),_,E):p.el=f.el},x=(f,p,_,E)=>{[f.el,f.anchor]=y(f.children,p,_,E,f.el,f.anchor)},L=({el:f,anchor:p},_,E)=>{let m;for(;f&&f!==p;)m=d(f),i(f,_,E),f=m;i(p,_,E)},B=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),s(f),f=_;s(p)},re=(f,p,_,E,m,T,P,I,S)=>{p.type==="svg"?P="svg":p.type==="math"&&(P="mathml"),f==null?H(p,_,E,m,T,P,I,S):ct(f,p,m,T,P,I,S)},H=(f,p,_,E,m,T,P,I)=>{let S,w;const{props:D,shapeFlag:U,transition:F,dirs:V}=f;if(S=f.el=o(f.type,T,D&&D.is,D),U&8?u(S,f.children):U&16&&ve(f.children,S,null,E,m,el(f,T),P,I),V&&bn(f,null,E,"created"),ye(S,f,f.scopeId,P,E),D){for(const le in D)le!=="value"&&!ss(le)&&r(S,le,null,D[le],T,f.children,E,m,De);"value"in D&&r(S,"value",null,D.value,T),(w=D.onVnodeBeforeMount)&&Rt(w,E,f)}V&&bn(f,null,E,"beforeMount");const G=Wy(m,F);G&&F.beforeEnter(S),i(S,p,_),((w=D&&D.onVnodeMounted)||G||V)&&Xe(()=>{w&&Rt(w,E,f),G&&F.enter(S),V&&bn(f,null,E,"mounted")},m)},ye=(f,p,_,E,m)=>{if(_&&g(f,_),E)for(let T=0;T<E.length;T++)g(f,E[T]);if(m){let T=m.subTree;if(p===T){const P=m.vnode;ye(f,P,P.scopeId,P.slotScopeIds,m.parent)}}},ve=(f,p,_,E,m,T,P,I,S=0)=>{for(let w=S;w<f.length;w++){const D=f[w]=I?cn(f[w]):At(f[w]);C(null,D,p,_,E,m,T,P,I)}},ct=(f,p,_,E,m,T,P)=>{const I=p.el=f.el;let{patchFlag:S,dynamicChildren:w,dirs:D}=p;S|=f.patchFlag&16;const U=f.props||ge,F=p.props||ge;let V;if(_&&kn(_,!1),(V=F.onVnodeBeforeUpdate)&&Rt(V,_,p,f),D&&bn(p,f,_,"beforeUpdate"),_&&kn(_,!0),w?it(f.dynamicChildren,w,I,_,E,el(p,m),T):P||ee(f,p,I,null,_,E,el(p,m),T,!1),S>0){if(S&16)nn(I,p,U,F,_,E,m);else if(S&2&&U.class!==F.class&&r(I,"class",null,F.class,m),S&4&&r(I,"style",U.style,F.style,m),S&8){const G=p.dynamicProps;for(let le=0;le<G.length;le++){const pe=G[le],we=U[pe],ut=F[pe];(ut!==we||pe==="value")&&r(I,pe,we,ut,m,f.children,_,E,De)}}S&1&&f.children!==p.children&&u(I,p.children)}else!P&&w==null&&nn(I,p,U,F,_,E,m);((V=F.onVnodeUpdated)||D)&&Xe(()=>{V&&Rt(V,_,p,f),D&&bn(p,f,_,"updated")},E)},it=(f,p,_,E,m,T,P)=>{for(let I=0;I<p.length;I++){const S=f[I],w=p[I],D=S.el&&(S.type===ft||!Gi(S,w)||S.shapeFlag&70)?h(S.el):_;C(S,w,D,null,E,m,T,P,!0)}},nn=(f,p,_,E,m,T,P)=>{if(_!==E){if(_!==ge)for(const I in _)!ss(I)&&!(I in E)&&r(f,I,_[I],null,P,p.children,m,T,De);for(const I in E){if(ss(I))continue;const S=E[I],w=_[I];S!==w&&I!=="value"&&r(f,I,w,S,P,p.children,m,T,De)}"value"in E&&r(f,"value",_.value,E.value,P)}},An=(f,p,_,E,m,T,P,I,S)=>{const w=p.el=f?f.el:l(""),D=p.anchor=f?f.anchor:l("");let{patchFlag:U,dynamicChildren:F,slotScopeIds:V}=p;V&&(I=I?I.concat(V):V),f==null?(i(w,_,E),i(D,_,E),ve(p.children||[],_,D,m,T,P,I,S)):U>0&&U&64&&F&&f.dynamicChildren?(it(f.dynamicChildren,F,_,m,T,P,I),(p.key!=null||m&&p===m.subTree)&&Nd(f,p,!0)):ee(f,p,_,D,m,T,P,I,S)},Tt=(f,p,_,E,m,T,P,I,S)=>{p.slotScopeIds=I,f==null?p.shapeFlag&512?m.ctx.activate(p,_,E,P,S):Wi(p,_,E,m,T,P,S):Qn(f,p,S)},Wi=(f,p,_,E,m,T,P)=>{const I=f.component=ev(f,E,m);if(Ed(f)&&(I.ctx.renderer=M),nv(I),I.asyncDep){if(m&&m.registerDep(I,Ee),!f.el){const S=I.subTree=Ge(Ii);N(null,S,p,_)}}else Ee(I,f,p,_,m,T,P)},Qn=(f,p,_)=>{const E=p.component=f.component;if(oy(f,p,_))if(E.asyncDep&&!E.asyncResolved){oe(E,p,_);return}else E.next=p,Zm(E.update),E.effect.dirty=!0,E.update();else p.el=f.el,E.vnode=p},Ee=(f,p,_,E,m,T,P)=>{const I=()=>{if(f.isMounted){let{next:D,bu:U,u:F,parent:V,vnode:G}=f;{const ti=Od(f);if(ti){D&&(D.el=G.el,oe(f,D,P)),ti.asyncDep.then(()=>{f.isUnmounted||I()});return}}let le=D,pe;kn(f,!1),D?(D.el=G.el,oe(f,D,P)):D=G,U&&Xo(U),(pe=D.props&&D.props.onVnodeBeforeUpdate)&&Rt(pe,V,D,G),kn(f,!0);const we=Qo(f),ut=f.subTree;f.subTree=we,C(ut,we,h(ut.el),v(ut),f,m,T),D.el=we.el,le===null&&ly(f,we.el),F&&Xe(F,m),(pe=D.props&&D.props.onVnodeUpdated)&&Xe(()=>Rt(pe,V,D,G),m)}else{let D;const{el:U,props:F}=p,{bm:V,m:G,parent:le}=f,pe=rs(p);if(kn(f,!1),V&&Xo(V),!pe&&(D=F&&F.onVnodeBeforeMount)&&Rt(D,le,p),kn(f,!0),U&&de){const we=()=>{f.subTree=Qo(f),de(U,f.subTree,f,m,null)};pe?p.type.__asyncLoader().then(()=>!f.isUnmounted&&we()):we()}else{const we=f.subTree=Qo(f);C(null,we,_,E,f,m,T),p.el=we.el}if(G&&Xe(G,m),!pe&&(D=F&&F.onVnodeMounted)){const we=p;Xe(()=>Rt(D,le,we),m)}(p.shapeFlag&256||le&&rs(le.vnode)&&le.vnode.shapeFlag&256)&&f.a&&Xe(f.a,m),f.isMounted=!0,p=_=E=null}},S=f.effect=new Na(I,rt,()=>Ba(w),f.scope),w=f.update=()=>{S.dirty&&S.run()};w.id=f.uid,kn(f,!0),w()},oe=(f,p,_)=>{p.component=f;const E=f.vnode.props;f.vnode=p,f.next=null,Uy(f,p.props,E,_),jy(f,p.children,_),qn(),du(f),Yn()},ee=(f,p,_,E,m,T,P,I,S=!1)=>{const w=f&&f.children,D=f?f.shapeFlag:0,U=p.children,{patchFlag:F,shapeFlag:V}=p;if(F>0){if(F&128){sn(w,U,_,E,m,T,P,I,S);return}else if(F&256){Vt(w,U,_,E,m,T,P,I,S);return}}V&8?(D&16&&De(w,m,T),U!==w&&u(_,U)):D&16?V&16?sn(w,U,_,E,m,T,P,I,S):De(w,m,T,!0):(D&8&&u(_,""),V&16&&ve(U,_,E,m,T,P,I,S))},Vt=(f,p,_,E,m,T,P,I,S)=>{f=f||ui,p=p||ui;const w=f.length,D=p.length,U=Math.min(w,D);let F;for(F=0;F<U;F++){const V=p[F]=S?cn(p[F]):At(p[F]);C(f[F],V,_,null,m,T,P,I,S)}w>D?De(f,m,T,!0,!1,U):ve(p,_,E,m,T,P,I,S,U)},sn=(f,p,_,E,m,T,P,I,S)=>{let w=0;const D=p.length;let U=f.length-1,F=D-1;for(;w<=U&&w<=F;){const V=f[w],G=p[w]=S?cn(p[w]):At(p[w]);if(Gi(V,G))C(V,G,_,null,m,T,P,I,S);else break;w++}for(;w<=U&&w<=F;){const V=f[U],G=p[F]=S?cn(p[F]):At(p[F]);if(Gi(V,G))C(V,G,_,null,m,T,P,I,S);else break;U--,F--}if(w>U){if(w<=F){const V=F+1,G=V<D?p[V].el:E;for(;w<=F;)C(null,p[w]=S?cn(p[w]):At(p[w]),_,G,m,T,P,I,S),w++}}else if(w>F)for(;w<=U;)Ye(f[w],m,T,!0),w++;else{const V=w,G=w,le=new Map;for(w=G;w<=F;w++){const Ze=p[w]=S?cn(p[w]):At(p[w]);Ze.key!=null&&le.set(Ze.key,w)}let pe,we=0;const ut=F-G+1;let ti=!1,nu=0;const Ki=new Array(ut);for(w=0;w<ut;w++)Ki[w]=0;for(w=V;w<=U;w++){const Ze=f[w];if(we>=ut){Ye(Ze,m,T,!0);continue}let St;if(Ze.key!=null)St=le.get(Ze.key);else for(pe=G;pe<=F;pe++)if(Ki[pe-G]===0&&Gi(Ze,p[pe])){St=pe;break}St===void 0?Ye(Ze,m,T,!0):(Ki[St-G]=w+1,St>=nu?nu=St:ti=!0,C(Ze,p[St],_,null,m,T,P,I,S),we++)}const iu=ti?Ky(Ki):ui;for(pe=iu.length-1,w=ut-1;w>=0;w--){const Ze=G+w,St=p[Ze],su=Ze+1<D?p[Ze+1].el:E;Ki[w]===0?C(null,St,_,su,m,T,P,I,S):ti&&(pe<0||w!==iu[pe]?Ct(St,_,su,2):pe--)}}},Ct=(f,p,_,E,m=null)=>{const{el:T,type:P,transition:I,children:S,shapeFlag:w}=f;if(w&6){Ct(f.component.subTree,p,_,E);return}if(w&128){f.suspense.move(p,_,E);return}if(w&64){P.move(f,p,_,M);return}if(P===ft){i(T,p,_);for(let U=0;U<S.length;U++)Ct(S[U],p,_,E);i(f.anchor,p,_);return}if(P===tl){L(f,p,_);return}if(E!==2&&w&1&&I)if(E===0)I.beforeEnter(T),i(T,p,_),Xe(()=>I.enter(T),m);else{const{leave:U,delayLeave:F,afterLeave:V}=I,G=()=>i(T,p,_),le=()=>{U(T,()=>{G(),V&&V()})};F?F(T,G,le):le()}else i(T,p,_)},Ye=(f,p,_,E=!1,m=!1)=>{const{type:T,props:P,ref:I,children:S,dynamicChildren:w,shapeFlag:D,patchFlag:U,dirs:F}=f;if(I!=null&&Fl(I,null,_,f,!0),D&256){p.ctx.deactivate(f);return}const V=D&1&&F,G=!rs(f);let le;if(G&&(le=P&&P.onVnodeBeforeUnmount)&&Rt(le,p,f),D&6)ir(f.component,_,E);else{if(D&128){f.suspense.unmount(_,E);return}V&&bn(f,null,p,"beforeUnmount"),D&64?f.type.remove(f,p,_,m,M,E):w&&(T!==ft||U>0&&U&64)?De(w,p,_,!1,!0):(T===ft&&U&384||!m&&D&16)&&De(S,p,_),E&&Zn(f)}(G&&(le=P&&P.onVnodeUnmounted)||V)&&Xe(()=>{le&&Rt(le,p,f),V&&bn(f,null,p,"unmounted")},_)},Zn=f=>{const{type:p,el:_,anchor:E,transition:m}=f;if(p===ft){ei(_,E);return}if(p===tl){B(f);return}const T=()=>{s(_),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:P,delayLeave:I}=m,S=()=>P(_,T);I?I(f.el,T,S):S()}else T()},ei=(f,p)=>{let _;for(;f!==p;)_=d(f),s(f),f=_;s(p)},ir=(f,p,_)=>{const{bum:E,scope:m,update:T,subTree:P,um:I}=f;E&&Xo(E),m.stop(),T&&(T.active=!1,Ye(P,f,p,_)),I&&Xe(I,p),Xe(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},De=(f,p,_,E=!1,m=!1,T=0)=>{for(let P=T;P<f.length;P++)Ye(f[P],p,_,E,m)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let O=!1;const k=(f,p,_)=>{f==null?p._vnode&&Ye(p._vnode,null,null,!0):C(p._vnode||null,f,p,null,null,null,_),O||(O=!0,du(),dd(),O=!1),p._vnode=f},M={p:C,um:Ye,m:Ct,r:Zn,mt:Wi,mc:ve,pc:ee,pbc:it,n:v,o:t};let te,de;return e&&([te,de]=e(M)),{render:k,hydrate:te,createApp:xy(k,te)}}function el({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function kn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Wy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Nd(t,e,n=!1){const i=t.children,s=e.children;if(W(i)&&W(s))for(let r=0;r<i.length;r++){const o=i[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=cn(s[r]),l.el=o.el),n||Nd(o,l)),l.type===Eo&&(l.el=o.el)}}function Ky(t){const e=t.slice(),n=[0];let i,s,r,o,l;const a=t.length;for(i=0;i<a;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Od(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Od(e)}const Gy=t=>t.__isTeleport,ft=Symbol.for("v-fgt"),Eo=Symbol.for("v-txt"),Ii=Symbol.for("v-cmt"),tl=Symbol.for("v-stc"),as=[];let gt=null;function Fs(t=!1){as.push(gt=t?null:[])}function zy(){as.pop(),gt=as[as.length-1]||null}let vs=1;function Cu(t){vs+=t}function Dd(t){return t.dynamicChildren=vs>0?gt||ui:null,zy(),vs>0&&gt&&gt.push(t),t}function $a(t,e,n,i,s,r){return Dd(Io(t,e,n,i,s,r,!0))}function Md(t,e,n,i,s){return Dd(Ge(t,e,n,i,s,!0))}function Mr(t){return t?t.__v_isVNode===!0:!1}function Gi(t,e){return t.type===e.type&&t.key===e.key}const wo="__vInternal",Ld=({key:t})=>t??null,Cr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Se(t)||qe(t)||K(t)?{i:Be,r:t,k:e,f:!!n}:t:null);function Io(t,e=null,n=null,i=0,s=null,r=t===ft?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ld(e),ref:e&&Cr(e),scopeId:_d,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Be};return l?(Wa(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=Se(n)?8:16),vs>0&&!o&&gt&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&gt.push(a),a}const Ge=qy;function qy(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===cy)&&(t=Ii),Mr(t)){const l=Ti(t,e,!0);return n&&Wa(l,n),vs>0&&!r&&gt&&(l.shapeFlag&6?gt[gt.indexOf(t)]=l:gt.push(l)),l.patchFlag|=-2,l}if(lv(t)&&(t=t.__vccOpts),e){e=Yy(e);let{class:l,style:a}=e;l&&!Se(l)&&(e.class=Pa(l)),_e(a)&&(sd(a)&&!W(a)&&(a=Oe({},a)),e.style=ka(a))}const o=Se(t)?1:hy(t)?128:Gy(t)?64:_e(t)?4:K(t)?2:0;return Io(t,e,n,i,s,o,r,!0)}function Yy(t){return t?sd(t)||wo in t?Oe({},t):t:null}function Ti(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,l=e?Jy(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ld(l),ref:e&&e.ref?n&&s?W(s)?s.concat(Cr(e)):[s,Cr(e)]:Cr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ft?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ti(t.ssContent),ssFallback:t.ssFallback&&Ti(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Xy(t=" ",e=0){return Ge(Eo,null,t,e)}function At(t){return t==null||typeof t=="boolean"?Ge(Ii):W(t)?Ge(ft,null,t.slice()):typeof t=="object"?cn(t):Ge(Eo,null,String(t))}function cn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ti(t)}function Wa(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Wa(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(wo in e)?e._ctx=Be:s===3&&Be&&(Be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:Be},n=32):(e=String(e),i&64?(n=16,e=[Xy(e)]):n=8);t.children=e,t.shapeFlag|=n}function Jy(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Pa([e.class,i.class]));else if(s==="style")e.style=ka([e.style,i.style]);else if(co(s)){const r=e[s],o=i[s];o&&r!==o&&!(W(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Rt(t,e,n,i=null){yt(t,e,7,[n,i])}const Qy=Sd();let Zy=0;function ev(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Qy,r={uid:Zy++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Wf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ad(i,s),emitsOptions:gd(i,s),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:i.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ny.bind(null,r),t.ce&&t.ce(r),r}let ke=null;const tv=()=>ke||Be;let Lr,Ul;{const t=jf(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Lr=e("__VUE_INSTANCE_SETTERS__",n=>ke=n),Ul=e("__VUE_SSR_SETTERS__",n=>To=n)}const Us=t=>{const e=ke;return Lr(t),t.scope.on(),()=>{t.scope.off(),Lr(e)}},Su=()=>{ke&&ke.scope.off(),Lr(null)};function xd(t){return t.vnode.shapeFlag&4}let To=!1;function nv(t,e=!1){e&&Ul(e);const{props:n,children:i}=t.vnode,s=xd(t);Fy(t,n,s,e),By(t,i);const r=s?iv(t,e):void 0;return e&&Ul(!1),r}function iv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=rd(new Proxy(t.ctx,ky));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?rv(t):null,r=Us(t);qn();const o=yn(i,t,0,[t.props,s]);if(Yn(),r(),Uf(o)){if(o.then(Su,Su),e)return o.then(l=>{Ru(t,l,e)}).catch(l=>{_o(l,t,0)});t.asyncDep=o}else Ru(t,o,e)}else Fd(t,e)}function Ru(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)&&(t.setupState=cd(e)),Fd(t,n)}let Au;function Fd(t,e,n){const i=t.type;if(!t.render){if(!e&&Au&&!i.render){const s=i.template||ja(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=i,c=Oe(Oe({isCustomElement:r,delimiters:l},o),a);i.render=Au(s,c)}}t.render=i.render||rt}{const s=Us(t);qn();try{Py(t)}finally{Yn(),s()}}}function sv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Qe(t,"get","$attrs"),e[n]}}))}function rv(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return sv(t)},slots:t.slots,emit:t.emit,expose:e}}function Ka(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(cd(rd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in os)return os[n](t)},has(e,n){return n in e||n in os}}))}function ov(t,e=!0){return K(t)?t.displayName||t.name:t.name||e&&t.__name}function lv(t){return K(t)&&"__vccOpts"in t}const dt=(t,e)=>zm(t,e,To);function Ud(t,e,n){const i=arguments.length;return i===2?_e(e)&&!W(e)?Mr(e)?Ge(t,null,[e]):Ge(t,e):Ge(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Mr(n)&&(n=[n]),Ge(t,e,n))}const av="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const cv="http://www.w3.org/2000/svg",uv="http://www.w3.org/1998/Math/MathML",un=typeof document<"u"?document:null,bu=un&&un.createElement("template"),hv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?un.createElementNS(cv,t):e==="mathml"?un.createElementNS(uv,t):un.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>un.createTextNode(t),createComment:t=>un.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>un.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{bu.innerHTML=i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t;const l=bu.content;if(i==="svg"||i==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},fv=Symbol("_vtc");function dv(t,e,n){const i=t[fv];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ku=Symbol("_vod"),pv=Symbol("_vsh"),gv=Symbol(""),_v=/(^|;)\s*display\s*:/;function mv(t,e,n){const i=t.style,s=Se(n);let r=!1;if(n&&!s){if(e)if(Se(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Sr(i,l,"")}else for(const o in e)n[o]==null&&Sr(i,o,"");for(const o in n)o==="display"&&(r=!0),Sr(i,o,n[o])}else if(s){if(e!==n){const o=i[gv];o&&(n+=";"+o),i.cssText=n,r=_v.test(n)}}else e&&t.removeAttribute("style");ku in t&&(t[ku]=r?i.display:"",t[pv]&&(i.display="none"))}const Pu=/\s*!important$/;function Sr(t,e,n){if(W(n))n.forEach(i=>Sr(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=yv(t,e);Pu.test(n)?t.setProperty(Oi(i),n.replace(Pu,""),"important"):t[i]=n}}const Nu=["Webkit","Moz","ms"],nl={};function yv(t,e){const n=nl[e];if(n)return n;let i=xt(e);if(i!=="filter"&&i in t)return nl[e]=i;i=fo(i);for(let s=0;s<Nu.length;s++){const r=Nu[s]+i;if(r in t)return nl[e]=r}return e}const Ou="http://www.w3.org/1999/xlink";function vv(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ou,e.slice(6,e.length)):t.setAttributeNS(Ou,e,n);else{const r=Tm(e);n==null||r&&!Vf(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Ev(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){const c=l==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Vf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function wv(t,e,n,i){t.addEventListener(e,n,i)}function Iv(t,e,n,i){t.removeEventListener(e,n,i)}const Du=Symbol("_vei");function Tv(t,e,n,i,s=null){const r=t[Du]||(t[Du]={}),o=r[e];if(i&&o)o.value=i;else{const[l,a]=Cv(e);if(i){const c=r[e]=Av(i,s);wv(t,l,c,a)}else o&&(Iv(t,l,o,a),r[e]=void 0)}}const Mu=/(?:Once|Passive|Capture)$/;function Cv(t){let e;if(Mu.test(t)){e={};let i;for(;i=t.match(Mu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Oi(t.slice(2)),e]}let il=0;const Sv=Promise.resolve(),Rv=()=>il||(Sv.then(()=>il=0),il=Date.now());function Av(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;yt(bv(i,n.value),e,5,[i])};return n.value=t,n.attached=Rv(),n}function bv(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Lu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,kv=(t,e,n,i,s,r,o,l,a)=>{const c=s==="svg";e==="class"?dv(t,i,c):e==="style"?mv(t,n,i):co(e)?Ra(e)||Tv(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pv(t,e,i,c))?Ev(t,e,i,r,o,l,a):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),vv(t,e,i,c))};function Pv(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Lu(e)&&K(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Lu(e)&&Se(n)?!1:e in t}const Nv=Oe({patchProp:kv},hv);let xu;function Ov(){return xu||(xu=Vy(Nv))}const Dv=(...t)=>{const e=Ov().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Lv(i);if(!s)return;const r=e._component;!K(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Mv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Mv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Lv(t){return Se(t)?document.querySelector(t):t}const Hd=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},xv={};function Fv(t,e){const n=ay("RouterView");return Fs(),Md(n)}const Uv=Hd(xv,[["render",Fv]]);/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const si=typeof document<"u";function Hv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ie=Object.assign;function sl(t,e){const n={};for(const i in e){const s=e[i];n[i]=Et(s)?s.map(t):t(s)}return n}const cs=()=>{},Et=Array.isArray,Bd=/#/g,Bv=/&/g,jv=/\//g,Vv=/=/g,$v=/\?/g,jd=/\+/g,Wv=/%5B/g,Kv=/%5D/g,Vd=/%5E/g,Gv=/%60/g,$d=/%7B/g,zv=/%7C/g,Wd=/%7D/g,qv=/%20/g;function Ga(t){return encodeURI(""+t).replace(zv,"|").replace(Wv,"[").replace(Kv,"]")}function Yv(t){return Ga(t).replace($d,"{").replace(Wd,"}").replace(Vd,"^")}function Hl(t){return Ga(t).replace(jd,"%2B").replace(qv,"+").replace(Bd,"%23").replace(Bv,"%26").replace(Gv,"`").replace($d,"{").replace(Wd,"}").replace(Vd,"^")}function Xv(t){return Hl(t).replace(Vv,"%3D")}function Jv(t){return Ga(t).replace(Bd,"%23").replace($v,"%3F")}function Qv(t){return t==null?"":Jv(t).replace(jv,"%2F")}function Es(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Zv=/\/$/,eE=t=>t.replace(Zv,"");function rl(t,e,n="/"){let i,s={},r="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(i=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),s=t(r)),l>-1&&(i=i||e.slice(0,l),o=e.slice(l,e.length)),i=sE(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:Es(o)}}function tE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Fu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function nE(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Ci(e.matched[i],n.matched[s])&&Kd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ci(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Kd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!iE(t[n],e[n]))return!1;return!0}function iE(t,e){return Et(t)?Uu(t,e):Et(e)?Uu(e,t):t===e}function Uu(t,e){return Et(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function sE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,l;for(o=0;o<i.length;o++)if(l=i[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}var ws;(function(t){t.pop="pop",t.push="push"})(ws||(ws={}));var us;(function(t){t.back="back",t.forward="forward",t.unknown=""})(us||(us={}));function rE(t){if(!t)if(si){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),eE(t)}const oE=/^[^#]+#/;function lE(t,e){return t.replace(oE,"#")+e}function aE(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Co=()=>({left:window.scrollX,top:window.scrollY});function cE(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=aE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Hu(t,e){return(history.state?history.state.position-e:-1)+t}const Bl=new Map;function uE(t,e){Bl.set(t,e)}function hE(t){const e=Bl.get(t);return Bl.delete(t),e}let fE=()=>location.protocol+"//"+location.host;function Gd(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let l=s.includes(t.slice(r))?t.slice(r).length:1,a=s.slice(l);return a[0]!=="/"&&(a="/"+a),Fu(a,"")}return Fu(n,t)+i+s}function dE(t,e,n,i){let s=[],r=[],o=null;const l=({state:d})=>{const g=Gd(t,location),y=n.value,C=e.value;let b=0;if(d){if(n.value=g,e.value=d,o&&o===y){o=null;return}b=C?d.position-C.position:0}else i(g);s.forEach(N=>{N(n.value,y,{delta:b,type:ws.pop,direction:b?b>0?us.forward:us.back:us.unknown})})};function a(){o=n.value}function c(d){s.push(d);const g=()=>{const y=s.indexOf(d);y>-1&&s.splice(y,1)};return r.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(ie({},d.state,{scroll:Co()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:c,destroy:h}}function Bu(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Co():null}}function pE(t){const{history:e,location:n}=window,i={value:Gd(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:fE()+t+a;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(a,c){const u=ie({},e.state,Bu(s.value.back,a,s.value.forward,!0),c,{position:s.value.position});r(a,u,!0),i.value=a}function l(a,c){const u=ie({},s.value,e.state,{forward:a,scroll:Co()});r(u.current,u,!0);const h=ie({},Bu(i.value,a,null),{position:u.position+1},c);r(a,h,!1),i.value=a}return{location:i,state:s,push:l,replace:o}}function gE(t){t=rE(t);const e=pE(t),n=dE(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=ie({location:"",base:t,go:i,createHref:lE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function _E(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),gE(t)}function mE(t){return typeof t=="string"||t&&typeof t=="object"}function zd(t){return typeof t=="string"||typeof t=="symbol"}const on={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qd=Symbol("");var ju;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ju||(ju={}));function Si(t,e){return ie(new Error,{type:t,[qd]:!0},e)}function $t(t,e){return t instanceof Error&&qd in t&&(e==null||!!(t.type&e))}const Vu="[^/]+?",yE={sensitive:!1,strict:!1,start:!0,end:!0},vE=/[.+*?^${}()[\]/\\]/g;function EE(t,e){const n=ie({},yE,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(vE,"\\$&"),g+=40;else if(d.type===1){const{value:y,repeatable:C,optional:b,regexp:N}=d;r.push({name:y,repeatable:C,optional:b});const x=N||Vu;if(x!==Vu){g+=10;try{new RegExp(`(${x})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${y}" (${x}): `+B.message)}}let L=C?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(L=b&&c.length<2?`(?:/${L})`:"/"+L),b&&(L+="?"),s+=L,g+=20,b&&(g+=-8),C&&(g+=-20),x===".*"&&(g+=-50)}u.push(g)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",y=r[d-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function a(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:C,optional:b}=g,N=y in c?c[y]:"";if(Et(N)&&!C)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const x=Et(N)?N.join("/"):N;if(!x)if(b)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=x}}return u||"/"}return{re:o,score:i,keys:r,parse:l,stringify:a}}function wE(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function IE(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=wE(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if($u(i))return 1;if($u(s))return-1}return s.length-i.length}function $u(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const TE={type:0,value:""},CE=/[a-zA-Z0-9_]/;function SE(t){if(!t)return[[]];if(t==="/")return[[TE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let l=0,a,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:a==="("?n=2:CE.test(a)?d():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function RE(t,e,n){const i=EE(SE(t.path),n),s=ie(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function AE(t,e){const n=[],i=new Map;e=Gu({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,d){const g=!d,y=bE(u);y.aliasOf=d&&d.record;const C=Gu(e,u),b=[y];if("alias"in u){const L=typeof u.alias=="string"?[u.alias]:u.alias;for(const B of L)b.push(ie({},y,{components:d?d.record.components:y.components,path:B,aliasOf:d?d.record:y}))}let N,x;for(const L of b){const{path:B}=L;if(h&&B[0]!=="/"){const re=h.record.path,H=re[re.length-1]==="/"?"":"/";L.path=h.record.path+(B&&H+B)}if(N=RE(L,h,C),d?d.alias.push(N):(x=x||N,x!==N&&x.alias.push(N),g&&u.name&&!Ku(N)&&o(u.name)),y.children){const re=y.children;for(let H=0;H<re.length;H++)r(re[H],N,d&&d.children[H])}d=d||N,(N.record.components&&Object.keys(N.record.components).length||N.record.name||N.record.redirect)&&a(N)}return x?()=>{o(x)}:cs}function o(u){if(zd(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let h=0;for(;h<n.length&&IE(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Yd(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Ku(u)&&i.set(u.record.name,u)}function c(u,h){let d,g={},y,C;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw Si(1,{location:u});C=d.record.name,g=ie(Wu(h.params,d.keys.filter(x=>!x.optional).concat(d.parent?d.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),u.params&&Wu(u.params,d.keys.map(x=>x.name))),y=d.stringify(g)}else if(u.path!=null)y=u.path,d=n.find(x=>x.re.test(y)),d&&(g=d.parse(y),C=d.record.name);else{if(d=h.name?i.get(h.name):n.find(x=>x.re.test(h.path)),!d)throw Si(1,{location:u,currentLocation:h});C=d.record.name,g=ie({},h.params,u.params),y=d.stringify(g)}const b=[];let N=d;for(;N;)b.unshift(N.record),N=N.parent;return{name:C,path:y,params:g,matched:b,meta:PE(b)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:s}}function Wu(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function bE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:kE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function kE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Ku(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function PE(t){return t.reduce((e,n)=>ie(e,n.meta),{})}function Gu(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Yd(t,e){return e.children.some(n=>n===t||Yd(t,n))}function NE(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(jd," "),o=r.indexOf("="),l=Es(o<0?r:r.slice(0,o)),a=o<0?null:Es(r.slice(o+1));if(l in e){let c=e[l];Et(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function zu(t){let e="";for(let n in t){const i=t[n];if(n=Xv(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Et(i)?i.map(r=>r&&Hl(r)):[i&&Hl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function OE(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Et(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const DE=Symbol(""),qu=Symbol(""),za=Symbol(""),Xd=Symbol(""),jl=Symbol("");function zi(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function hn(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((l,a)=>{const c=d=>{d===!1?a(Si(4,{from:n,to:e})):d instanceof Error?a(d):mE(d)?a(Si(2,{from:e,to:d})):(o&&i.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),l())},u=r(()=>t.call(i&&i.instances[s],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>a(d))})}function ol(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const l in o.components){let a=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(ME(a)){const u=(a.__vccOpts||a)[e];u&&r.push(hn(u,n,i,o,l,s))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${o.path}"`));const h=Hv(u)?u.default:u;o.components[l]=h;const g=(h.__vccOpts||h)[e];return g&&hn(g,n,i,o,l,s)()}))}}return r}function ME(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Yu(t){const e=Dt(za),n=Dt(Xd),i=dt(()=>e.resolve(Un(t.to))),s=dt(()=>{const{matched:a}=i.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Ci.bind(null,u));if(d>-1)return d;const g=Xu(a[c-2]);return c>1&&Xu(u)===g&&h[h.length-1].path!==g?h.findIndex(Ci.bind(null,a[c-2])):d}),r=dt(()=>s.value>-1&&UE(n.params,i.value.params)),o=dt(()=>s.value>-1&&s.value===n.matched.length-1&&Kd(n.params,i.value.params));function l(a={}){return FE(a)?e[Un(t.replace)?"replace":"push"](Un(t.to)).catch(cs):Promise.resolve()}return{route:i,href:dt(()=>i.value.href),isActive:r,isExactActive:o,navigate:l}}const LE=yo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yu,setup(t,{slots:e}){const n=go(Yu(t)),{options:i}=Dt(za),s=dt(()=>({[Ju(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ju(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Ud("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),xE=LE;function FE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function UE(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Et(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Xu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ju=(t,e,n)=>t??e??n,HE=yo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Dt(jl),s=dt(()=>t.route||i.value),r=Dt(qu,0),o=dt(()=>{let c=Un(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),l=dt(()=>s.value.matched[o.value]);Tr(qu,dt(()=>o.value+1)),Tr(DE,l),Tr(jl,s);const a=Ua();return Ir(()=>[a.value,l.value,t.name],([c,u,h],[d,g,y])=>{u&&(u.instances[h]=c,g&&g!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!Ci(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(C=>C(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=l.value,d=h&&h.components[u];if(!d)return Qu(n.default,{Component:d,route:c});const g=h.props[u],y=g?g===!0?c.params:typeof g=="function"?g(c):g:null,b=Ud(d,ie({},y,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return Qu(n.default,{Component:b,route:c})||b}}});function Qu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const BE=HE;function jE(t){const e=AE(t.routes,t),n=t.parseQuery||NE,i=t.stringifyQuery||zu,s=t.history,r=zi(),o=zi(),l=zi(),a=qm(on);let c=on;si&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=sl.bind(null,v=>""+v),h=sl.bind(null,Qv),d=sl.bind(null,Es);function g(v,O){let k,M;return zd(v)?(k=e.getRecordMatcher(v),M=O):M=v,e.addRoute(M,k)}function y(v){const O=e.getRecordMatcher(v);O&&e.removeRoute(O)}function C(){return e.getRoutes().map(v=>v.record)}function b(v){return!!e.getRecordMatcher(v)}function N(v,O){if(O=ie({},O||a.value),typeof v=="string"){const p=rl(n,v,O.path),_=e.resolve({path:p.path},O),E=s.createHref(p.fullPath);return ie(p,_,{params:d(_.params),hash:Es(p.hash),redirectedFrom:void 0,href:E})}let k;if(v.path!=null)k=ie({},v,{path:rl(n,v.path,O.path).path});else{const p=ie({},v.params);for(const _ in p)p[_]==null&&delete p[_];k=ie({},v,{params:h(p)}),O.params=h(O.params)}const M=e.resolve(k,O),te=v.hash||"";M.params=u(d(M.params));const de=tE(i,ie({},v,{hash:Yv(te),path:M.path})),f=s.createHref(de);return ie({fullPath:de,hash:te,query:i===zu?OE(v.query):v.query||{}},M,{redirectedFrom:void 0,href:f})}function x(v){return typeof v=="string"?rl(n,v,a.value.path):ie({},v)}function L(v,O){if(c!==v)return Si(8,{from:O,to:v})}function B(v){return ye(v)}function re(v){return B(ie(x(v),{replace:!0}))}function H(v){const O=v.matched[v.matched.length-1];if(O&&O.redirect){const{redirect:k}=O;let M=typeof k=="function"?k(v):k;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=x(M):{path:M},M.params={}),ie({query:v.query,hash:v.hash,params:M.path!=null?{}:v.params},M)}}function ye(v,O){const k=c=N(v),M=a.value,te=v.state,de=v.force,f=v.replace===!0,p=H(k);if(p)return ye(ie(x(p),{state:typeof p=="object"?ie({},te,p.state):te,force:de,replace:f}),O||k);const _=k;_.redirectedFrom=O;let E;return!de&&nE(i,M,k)&&(E=Si(16,{to:_,from:M}),Ct(M,M,!0,!1)),(E?Promise.resolve(E):it(_,M)).catch(m=>$t(m)?$t(m,2)?m:sn(m):ee(m,_,M)).then(m=>{if(m){if($t(m,2))return ye(ie({replace:f},x(m.to),{state:typeof m.to=="object"?ie({},te,m.to.state):te,force:de}),O||_)}else m=An(_,M,!0,f,te);return nn(_,M,m),m})}function ve(v,O){const k=L(v,O);return k?Promise.reject(k):Promise.resolve()}function ct(v){const O=ei.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(v):v()}function it(v,O){let k;const[M,te,de]=VE(v,O);k=ol(M.reverse(),"beforeRouteLeave",v,O);for(const p of M)p.leaveGuards.forEach(_=>{k.push(hn(_,v,O))});const f=ve.bind(null,v,O);return k.push(f),De(k).then(()=>{k=[];for(const p of r.list())k.push(hn(p,v,O));return k.push(f),De(k)}).then(()=>{k=ol(te,"beforeRouteUpdate",v,O);for(const p of te)p.updateGuards.forEach(_=>{k.push(hn(_,v,O))});return k.push(f),De(k)}).then(()=>{k=[];for(const p of de)if(p.beforeEnter)if(Et(p.beforeEnter))for(const _ of p.beforeEnter)k.push(hn(_,v,O));else k.push(hn(p.beforeEnter,v,O));return k.push(f),De(k)}).then(()=>(v.matched.forEach(p=>p.enterCallbacks={}),k=ol(de,"beforeRouteEnter",v,O,ct),k.push(f),De(k))).then(()=>{k=[];for(const p of o.list())k.push(hn(p,v,O));return k.push(f),De(k)}).catch(p=>$t(p,8)?p:Promise.reject(p))}function nn(v,O,k){l.list().forEach(M=>ct(()=>M(v,O,k)))}function An(v,O,k,M,te){const de=L(v,O);if(de)return de;const f=O===on,p=si?history.state:{};k&&(M||f?s.replace(v.fullPath,ie({scroll:f&&p&&p.scroll},te)):s.push(v.fullPath,te)),a.value=v,Ct(v,O,k,f),sn()}let Tt;function Wi(){Tt||(Tt=s.listen((v,O,k)=>{if(!ir.listening)return;const M=N(v),te=H(M);if(te){ye(ie(te,{replace:!0}),M).catch(cs);return}c=M;const de=a.value;si&&uE(Hu(de.fullPath,k.delta),Co()),it(M,de).catch(f=>$t(f,12)?f:$t(f,2)?(ye(f.to,M).then(p=>{$t(p,20)&&!k.delta&&k.type===ws.pop&&s.go(-1,!1)}).catch(cs),Promise.reject()):(k.delta&&s.go(-k.delta,!1),ee(f,M,de))).then(f=>{f=f||An(M,de,!1),f&&(k.delta&&!$t(f,8)?s.go(-k.delta,!1):k.type===ws.pop&&$t(f,20)&&s.go(-1,!1)),nn(M,de,f)}).catch(cs)}))}let Qn=zi(),Ee=zi(),oe;function ee(v,O,k){sn(v);const M=Ee.list();return M.length?M.forEach(te=>te(v,O,k)):console.error(v),Promise.reject(v)}function Vt(){return oe&&a.value!==on?Promise.resolve():new Promise((v,O)=>{Qn.add([v,O])})}function sn(v){return oe||(oe=!v,Wi(),Qn.list().forEach(([O,k])=>v?k(v):O()),Qn.reset()),v}function Ct(v,O,k,M){const{scrollBehavior:te}=t;if(!si||!te)return Promise.resolve();const de=!k&&hE(Hu(v.fullPath,0))||(M||!k)&&history.state&&history.state.scroll||null;return hd().then(()=>te(v,O,de)).then(f=>f&&cE(f)).catch(f=>ee(f,v,O))}const Ye=v=>s.go(v);let Zn;const ei=new Set,ir={currentRoute:a,listening:!0,addRoute:g,removeRoute:y,hasRoute:b,getRoutes:C,resolve:N,options:t,push:B,replace:re,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:Ee.add,isReady:Vt,install(v){const O=this;v.component("RouterLink",xE),v.component("RouterView",BE),v.config.globalProperties.$router=O,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Un(a)}),si&&!Zn&&a.value===on&&(Zn=!0,B(s.location).catch(te=>{}));const k={};for(const te in on)Object.defineProperty(k,te,{get:()=>a.value[te],enumerable:!0});v.provide(za,O),v.provide(Xd,nd(k)),v.provide(jl,a);const M=v.unmount;ei.add(v),v.unmount=function(){ei.delete(v),ei.size<1&&(c=on,Tt&&Tt(),Tt=null,a.value=on,Zn=!1,oe=!1),M()}}};function De(v){return v.reduce((O,k)=>O.then(()=>ct(k)),Promise.resolve())}return ir}function VE(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(c=>Ci(c,l))?i.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>Ci(c,a))||s.push(a))}return[n,i,s]}const $E={};function WE(t,e){return Fs(),$a("div",null,"Home Page")}const KE=Hd($E,[["render",WE]]),GE={class:""},Zu=yo({__name:"VoteCard",setup(t){let e=Ua(0);return(n,i)=>(Fs(),$a("div",{class:"w-96 h-96 flex justify-center items-center border rounded-2xl select-none hover:bg-cyan-700 transition-all duration-150",onClick:i[0]||(i[0]=s=>qe(e)?e.value++:e++)},[by(n.$slots,"default"),Io("span",GE,Cm(Un(e)),1)]))}}),zE={class:"flex justify-around items-center"},qE=Io("div",{class:"w-32 h-32"},null,-1),YE=yo({__name:"VoteView",setup(t){return(e,n)=>(Fs(),$a("div",zE,[Ge(Zu),qE,Ge(Zu)]))}}),XE=jE({history:_E(),routes:[{path:"/",name:"home",component:KE},{path:"/vote",name:"vote",component:YE}]});var eh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(t,e){if(!t)throw Di(e)},Di=function(t){return new Error("Firebase Database ("+Jd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},JE=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],l=t[n++],a=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},So={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,l=o?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(d=64)),i.push(n[u],n[h],n[d],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):JE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||l==null||c==null||h==null)throw new QE;const d=r<<2|l>>4;if(i.push(d),c!==64){const g=l<<4&240|c>>2;if(i.push(g),h!==64){const y=c<<6&192|h;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class QE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zd=function(t){const e=Qd(t);return So.encodeByteArray(e,!0)},xr=function(t){return Zd(t).replace(/\./g,"")},Fr=function(t){try{return So.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(t){return ep(void 0,t)}function ep(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ew(n)||(t[n]=ep(t[n],e[n]));return t}function ew(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=()=>tw().__FIREBASE_DEFAULTS__,iw=()=>{if(typeof process>"u"||typeof eh>"u")return;const t=eh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fr(t[1]);return e&&JSON.parse(e)},qa=()=>{try{return nw()||iw()||sw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rw=t=>{var e,n;return(n=(e=qa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ow=t=>{const e=rw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},tp=()=>{var t;return(t=qa())===null||t===void 0?void 0:t.config},lw=t=>{var e;return(e=qa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[xr(JSON.stringify(n)),xr(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ya(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function cw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function np(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uw(){const t=We();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ip(){return Jd.NODE_ADMIN===!0}function sp(){try{return typeof indexedDB=="object"}catch{return!1}}function hw(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw="FirebaseError";class Bt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=fw,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mi.prototype.create)}}class Mi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?dw(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Bt(s,l,i)}}function dw(t,e){return t.replace(pw,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const pw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t){return JSON.parse(t)}function Pe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=Ts(Fr(r[0])||""),n=Ts(Fr(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},gw=function(t){const e=rp(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},_w=function(t){const e=rp(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ri(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Vl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ur(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Hr(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(th(r)&&th(o)){if(!Hr(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function th(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(s<<5|s>>>27)+c+a+u+i[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function yw(t,e){const n=new vw(t,e);return n.subscribe.bind(n)}class vw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Ew(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=ll),s.error===void 0&&(s.error=ll),s.complete===void 0&&(s.complete=ll);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ew(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ll(){}function ww(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,R(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ro=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t){return t&&t._delegate?t._delegate:t}class wt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Is;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sw(e))try{this.getOrInitializeService({instanceIdentifier:Pn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pn){return this.instances.has(e)}getOptions(e=Pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Cw(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Pn){return this.component?this.component.multipleInstances?e:Pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cw(t){return t===Pn?void 0:t}function Sw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Tw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const Aw={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},bw=Q.INFO,kw={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Pw=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=kw[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hs{constructor(e){this.name=e,this._logLevel=bw,this._logHandler=Pw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Aw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const Nw=(t,e)=>e.some(n=>t instanceof n);let nh,ih;function Ow(){return nh||(nh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dw(){return ih||(ih=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const op=new WeakMap,$l=new WeakMap,lp=new WeakMap,al=new WeakMap,Xa=new WeakMap;function Mw(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(vn(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&op.set(n,t)}).catch(()=>{}),Xa.set(e,t),e}function Lw(t){if($l.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});$l.set(t,e)}let Wl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $l.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xw(t){Wl=t(Wl)}function Fw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(cl(this),e,...n);return lp.set(i,e.sort?e.sort():[e]),vn(i)}:Dw().includes(t)?function(...e){return t.apply(cl(this),e),vn(op.get(this))}:function(...e){return vn(t.apply(cl(this),e))}}function Uw(t){return typeof t=="function"?Fw(t):(t instanceof IDBTransaction&&Lw(t),Nw(t,Ow())?new Proxy(t,Wl):t)}function vn(t){if(t instanceof IDBRequest)return Mw(t);if(al.has(t))return al.get(t);const e=Uw(t);return e!==t&&(al.set(t,e),Xa.set(e,t)),e}const cl=t=>Xa.get(t);function Hw(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),l=vn(o);return i&&o.addEventListener("upgradeneeded",a=>{i(vn(o.result),a.oldVersion,a.newVersion,vn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),s&&a.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Bw=["get","getKey","getAll","getAllKeys","count"],jw=["put","add","delete","clear"],ul=new Map;function sh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ul.get(e))return ul.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=jw.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Bw.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let c=a.store;return i&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&a.done]))[0]};return ul.set(e,r),r}xw(t=>({...t,get:(e,n,i)=>sh(e,n)||t.get(e,n,i),has:(e,n)=>!!sh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($w(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function $w(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kl="@firebase/app",rh="0.10.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new Hs("@firebase/app"),Ww="@firebase/app-compat",Kw="@firebase/analytics-compat",Gw="@firebase/analytics",zw="@firebase/app-check-compat",qw="@firebase/app-check",Yw="@firebase/auth",Xw="@firebase/auth-compat",Jw="@firebase/database",Qw="@firebase/database-compat",Zw="@firebase/functions",eI="@firebase/functions-compat",tI="@firebase/installations",nI="@firebase/installations-compat",iI="@firebase/messaging",sI="@firebase/messaging-compat",rI="@firebase/performance",oI="@firebase/performance-compat",lI="@firebase/remote-config",aI="@firebase/remote-config-compat",cI="@firebase/storage",uI="@firebase/storage-compat",hI="@firebase/firestore",fI="@firebase/firestore-compat",dI="firebase",pI="10.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl="[DEFAULT]",gI={[Kl]:"fire-core",[Ww]:"fire-core-compat",[Gw]:"fire-analytics",[Kw]:"fire-analytics-compat",[qw]:"fire-app-check",[zw]:"fire-app-check-compat",[Yw]:"fire-auth",[Xw]:"fire-auth-compat",[Jw]:"fire-rtdb",[Qw]:"fire-rtdb-compat",[Zw]:"fire-fn",[eI]:"fire-fn-compat",[tI]:"fire-iid",[nI]:"fire-iid-compat",[iI]:"fire-fcm",[sI]:"fire-fcm-compat",[rI]:"fire-perf",[oI]:"fire-perf-compat",[lI]:"fire-rc",[aI]:"fire-rc-compat",[cI]:"fire-gcs",[uI]:"fire-gcs-compat",[hI]:"fire-fst",[fI]:"fire-fst-compat","fire-js":"fire-js",[dI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new Map,_I=new Map,zl=new Map;function oh(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ft(t){const e=t.name;if(zl.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;zl.set(e,t);for(const n of Br.values())oh(n,t);for(const n of _I.values())oh(n,t);return!0}function ap(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _n(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},En=new Mi("app","Firebase",mI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw En.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=pI;function cp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Gl,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw En.create("bad-app-name",{appName:String(s)});if(n||(n=tp()),!n)throw En.create("no-options");const r=Br.get(s);if(r){if(Hr(n,r.options)&&Hr(i,r.config))return r;throw En.create("duplicate-app",{appName:s})}const o=new Rw(s);for(const a of zl.values())o.addComponent(a);const l=new yI(n,i,o);return Br.set(s,l),l}function up(t=Gl){const e=Br.get(t);if(!e&&t===Gl&&tp())return cp();if(!e)throw En.create("no-app",{appName:t});return e}function tt(t,e,n){var i;let s=(i=gI[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(l.join(" "));return}Ft(new wt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="firebase-heartbeat-database",EI=1,Cs="firebase-heartbeat-store";let hl=null;function hp(){return hl||(hl=Hw(vI,EI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Cs)}catch(n){console.warn(n)}}}}).catch(t=>{throw En.create("idb-open",{originalErrorMessage:t.message})})),hl}async function wI(t){try{const n=(await hp()).transaction(Cs),i=await n.objectStore(Cs).get(fp(t));return await n.done,i}catch(e){if(e instanceof Bt)Vn.warn(e.message);else{const n=En.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(n.message)}}}async function lh(t,e){try{const i=(await hp()).transaction(Cs,"readwrite");await i.objectStore(Cs).put(e,fp(t)),await i.done}catch(n){if(n instanceof Bt)Vn.warn(n.message);else{const i=En.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vn.warn(i.message)}}}function fp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=1024,TI=30*24*60*60*1e3;class CI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RI(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ah();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=TI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ah(),{heartbeatsToSend:i,unsentEntries:s}=SI(this._heartbeatsCache.heartbeats),r=xr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ah(){return new Date().toISOString().substring(0,10)}function SI(t,e=II){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),ch(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ch(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class RI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sp()?hw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ch(t){return xr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(t){Ft(new wt("platform-logger",e=>new Vw(e),"PRIVATE")),Ft(new wt("heartbeat",e=>new CI(e),"PRIVATE")),tt(Kl,rh,t),tt(Kl,rh,"esm2017"),tt("fire-js","")}AI("");function Ja(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function dp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bI=dp,pp=new Mi("auth","Firebase",dp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new Hs("@firebase/auth");function kI(t,...e){jr.logLevel<=Q.WARN&&jr.warn(`Auth (${Cn}): ${t}`,...e)}function Rr(t,...e){jr.logLevel<=Q.ERROR&&jr.error(`Auth (${Cn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,...e){throw Qa(t,...e)}function Mt(t,...e){return Qa(t,...e)}function gp(t,e,n){const i=Object.assign(Object.assign({},bI()),{[e]:n});return new Mi("auth","Firebase",i).create(e,{appName:t.name})}function Hn(t){return gp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qa(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return pp.create(t,...e)}function $(t,e,...n){if(!t)throw Qa(e,...n)}function Wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Rr(e),new Error(e)}function Qt(t,e){t||Wt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function PI(){return uh()==="http:"||uh()==="https:"}function uh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PI()||cw()||"connection"in navigator)?navigator.onLine:!0}function OI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ya()||np()}get(){return NI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(t,e){Qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=new Bs(3e4,6e4);function ec(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fi(t,e,n,i,s={}){return mp(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const l=Li(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),_p.fetch()(yp(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))})}async function mp(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},DI),e);try{const s=new xI(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ur(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw ur(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw ur(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw ur(t,"user-disabled",o);const u=i[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw gp(t,u,c);Jt(t,u)}}catch(s){if(s instanceof Bt)throw s;Jt(t,"network-request-failed",{message:String(s)})}}async function LI(t,e,n,i,s={}){const r=await Fi(t,e,n,i,s);return"mfaPendingCredential"in r&&Jt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function yp(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Za(t.config,s):`${t.config.apiScheme}://${s}`}class xI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Mt(this.auth,"network-request-failed")),MI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ur(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Mt(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FI(t,e){return Fi(t,"POST","/v1/accounts:delete",e)}async function vp(t,e){return Fi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UI(t,e=!1){const n=xi(t),i=await n.getIdToken(e),s=tc(i);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:hs(fl(s.auth_time)),issuedAtTime:hs(fl(s.iat)),expirationTime:hs(fl(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function fl(t){return Number(t)*1e3}function tc(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Rr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Fr(n);return s?JSON.parse(s):(Rr("Failed to decode base64 JWT payload"),null)}catch(s){return Rr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function hh(t){const e=tc(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Bt&&HI(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function HI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hs(this.lastLoginAt),this.creationTime=hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Ss(t,vp(n,{idToken:i}));$(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Ep(r.providerUserInfo):[],l=VI(t.providerData,o),a=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(l!=null&&l.length),u=a?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new Yl(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function jI(t){const e=xi(t);await Vr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VI(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Ep(t){return t.map(e=>{var{providerId:n}=e,i=Ja(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $I(t,e){const n=await mp(t,{},async()=>{const i=Li({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=yp(t,s,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",_p.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function WI(t,e){return Fi(t,"POST","/v2/accounts:revokeToken",ec(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=hh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await $I(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new pi;return i&&($(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&($(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pi,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kt{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=Ja(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Yl(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ss(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return UI(this,e)}reload(){return jI(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Vr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject(Hn(this.auth));const e=await this.getIdToken();return await Ss(this,FI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,l,a,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,N=(c=n.createdAt)!==null&&c!==void 0?c:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:L,emailVerified:B,isAnonymous:re,providerData:H,stsTokenManager:ye}=n;$(L&&ye,e,"internal-error");const ve=pi.fromJSON(this.name,ye);$(typeof L=="string",e,"internal-error"),ln(h,e.name),ln(d,e.name),$(typeof B=="boolean",e,"internal-error"),$(typeof re=="boolean",e,"internal-error"),ln(g,e.name),ln(y,e.name),ln(C,e.name),ln(b,e.name),ln(N,e.name),ln(x,e.name);const ct=new Kt({uid:L,auth:e,email:d,emailVerified:B,displayName:h,isAnonymous:re,photoURL:y,phoneNumber:g,tenantId:C,stsTokenManager:ve,createdAt:N,lastLoginAt:x});return H&&Array.isArray(H)&&(ct.providerData=H.map(it=>Object.assign({},it))),b&&(ct._redirectEventId=b),ct}static async _fromIdTokenResponse(e,n,i=!1){const s=new pi;s.updateFromServerResponse(n);const r=new Kt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Vr(r),r}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];$(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Ep(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),l=new pi;l.updateFromIdToken(i);const a=new Kt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Yl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(a,c),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=new Map;function Gt(t){Qt(t instanceof Function,"Expected a class definition");let e=fh.get(t);return e?(Qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fh.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wp.type="NONE";const dh=wp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t,e,n){return`firebase:${t}:${e}:${n}`}class gi{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Ar(this.userKey,s.apiKey,r),this.fullPersistenceKey=Ar("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new gi(Gt(dh),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Gt(dh);const o=Ar(i,e.config.apiKey,e.name);let l=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Kt._fromJSON(e,u);c!==r&&(l=h),r=c;break}}catch{}const a=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!a.length?new gi(r,e,i):(r=a[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new gi(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ip(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rp(e))return"Blackberry";if(Ap(e))return"Webos";if(nc(e))return"Safari";if((e.includes("chrome/")||Tp(e))&&!e.includes("edge/"))return"Chrome";if(Sp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Ip(t=We()){return/firefox\//i.test(t)}function nc(t=We()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tp(t=We()){return/crios\//i.test(t)}function Cp(t=We()){return/iemobile/i.test(t)}function Sp(t=We()){return/android/i.test(t)}function Rp(t=We()){return/blackberry/i.test(t)}function Ap(t=We()){return/webos/i.test(t)}function Ao(t=We()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KI(t=We()){var e;return Ao(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function GI(){return uw()&&document.documentMode===10}function bp(t=We()){return Ao(t)||Sp(t)||Ap(t)||Rp(t)||/windows phone/i.test(t)||Cp(t)}function zI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(t,e=[]){let n;switch(t){case"Browser":n=ph(We());break;case"Worker":n=`${ph(We())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cn}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,l)=>{try{const a=e(r);o(a)}catch(a){l(a)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YI(t,e={}){return Fi(t,"GET","/v2/passwordPolicy",ec(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=6;class JI{constructor(e){var n,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:XI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,r,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(i=a.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(r=a.containsUppercaseLetter)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gh(this),this.idTokenSubscription=new gh(this),this.beforeStateQueue=new qI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gt(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await gi.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await vp(this,{idToken:e}),i=await Kt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(_n(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_n(this.app))return Promise.reject(Hn(this));const n=e?xi(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject(Hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _n(this.app)?Promise.reject(Hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await YI(this),n=new JI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mi("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await WI(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await gi.create(this,[Gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if($(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,i,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&kI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pp(t){return xi(t)}class gh{constructor(e){this.auth=e,this.observer=null,this.addObserver=yw(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ic={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ZI(t){ic=t}function eT(t){return ic.loadJS(t)}function tT(){return ic.gapiScript}function nT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(t,e){const n=ap(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Hr(r,e??{}))return s;Jt(s,"already-initialized")}return n.initialize({options:e})}function sT(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,n){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t,e){return LI(t,"POST","/v1/accounts:signInWithIdp",ec(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT="http://localhost";class $n extends Np{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=Ja(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new $n(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _i(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,_i(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_i(e,n)}buildRequest(){const e={requestUri:rT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Li(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js extends Op{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends js{constructor(){super("facebook.com")}static credential(e){return $n._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends js{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $n._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return dn.credential(n,i)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends js{constructor(){super("github.com")}static credential(e){return $n._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends js{constructor(){super("twitter.com")}static credential(e,n){return $n._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return gn.credential(n,i)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await Kt._fromIdTokenResponse(e,i,s),o=_h(i);return new Ai({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=_h(i);return new Ai({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function _h(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends Bt{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,$r.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new $r(e,n,i,s)}}function Dp(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?$r._fromErrorAndOperation(t,r,e,i):r})}async function oT(t,e,n=!1){const i=await Ss(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ai._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lT(t,e,n=!1){const{auth:i}=t;if(_n(i.app))return Promise.reject(Hn(i));const s="reauthenticate";try{const r=await Ss(t,Dp(i,s,e,t),n);$(r.idToken,i,"internal-error");const o=tc(r.idToken);$(o,i,"internal-error");const{sub:l}=o;return $(t.uid===l,i,"user-mismatch"),Ai._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Jt(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aT(t,e,n=!1){if(_n(t.app))return Promise.reject(Hn(t));const i="signIn",s=await Dp(t,i,e),r=await Ai._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function cT(t,e,n,i){return xi(t).onIdTokenChanged(e,n,i)}const Wr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wr,"1"),this.storage.removeItem(Wr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(){const t=We();return nc(t)||Ao(t)}const hT=1e3,fT=10;class Lp extends Mp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=uT()&&zI(),this.fallbackToPolling=bp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);GI()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,fT):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},hT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lp.type="LOCAL";const dT=Lp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp extends Mp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xp.type="SESSION";const Fp=xp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new bo(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,r)),a=await pT(l);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((l,a)=>{const c=sc("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(d.data.response);break;default:clearTimeout(u),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return window}function _T(t){Lt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function mT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vT(){return Up()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="firebaseLocalStorageDb",ET=1,Kr="firebaseLocalStorage",Bp="fbase_key";class Vs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ko(t,e){return t.transaction([Kr],e?"readwrite":"readonly").objectStore(Kr)}function wT(){const t=indexedDB.deleteDatabase(Hp);return new Vs(t).toPromise()}function Xl(){const t=indexedDB.open(Hp,ET);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Kr,{keyPath:Bp})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Kr)?e(i):(i.close(),await wT(),e(await Xl()))})})}async function mh(t,e,n){const i=ko(t,!0).put({[Bp]:e,value:n});return new Vs(i).toPromise()}async function IT(t,e){const n=ko(t,!1).get(e),i=await new Vs(n).toPromise();return i===void 0?null:i.value}function yh(t,e){const n=ko(t,!0).delete(e);return new Vs(n).toPromise()}const TT=800,CT=3;class jp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>CT)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Up()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bo._getInstance(vT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mT(),!this.activeServiceWorker)return;this.sender=new gT(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xl();return await mh(e,Wr,"1"),await yh(e,Wr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>mh(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>IT(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=ko(s,!1).getAll();return new Vs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jp.type="LOCAL";const ST=jp;new Bs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(t,e){return e?Gt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc extends Np{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AT(t){return aT(t.auth,new rc(t),t.bypassAuthState)}function bT(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),lT(n,new rc(t),t.bypassAuthState)}async function kT(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),oT(n,new rc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AT;case"linkViaPopup":case"linkViaRedirect":return kT;case"reauthViaPopup":case"reauthViaRedirect":return bT;default:Jt(this.auth,"internal-error")}}resolve(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT=new Bs(2e3,1e4);class oi extends Vp{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,oi.currentPopupAction&&oi.currentPopupAction.cancel(),oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const e=sc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PT.get())};e()}}oi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT="pendingRedirect",br=new Map;class OT extends Vp{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=br.get(this.auth._key());if(!e){try{const i=await DT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}br.set(this.auth._key(),e)}return this.bypassAuthState||br.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DT(t,e){const n=xT(e),i=LT(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function MT(t,e){br.set(t._key(),e)}function LT(t){return Gt(t._redirectPersistence)}function xT(t){return Ar(NT,t.config.apiKey,t.name)}async function FT(t,e,n=!1){if(_n(t.app))return Promise.reject(Hn(t));const i=Pp(t),s=RT(i,e),o=await new OT(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=10*60*1e3;class HT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!$p(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Mt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UT&&this.cachedEventUids.clear(),this.cachedEventUids.has(vh(e))}saveEventToCache(e){this.cachedEventUids.add(vh(e)),this.lastProcessedEventTime=Date.now()}}function vh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $p({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $p(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(t,e={}){return Fi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$T=/^https?/;async function WT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jT(t);for(const n of e)try{if(KT(n))return}catch{}Jt(t,"unauthorized-domain")}function KT(t){const e=ql(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!$T.test(n))return!1;if(VT.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=new Bs(3e4,6e4);function Eh(){const t=Lt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zT(t){return new Promise((e,n)=>{var i,s,r;function o(){Eh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Eh(),n(Mt(t,"network-request-failed"))},timeout:GT.get()})}if(!((s=(i=Lt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Lt().gapi)===null||r===void 0)&&r.load)o();else{const l=nT("iframefcb");return Lt()[l]=()=>{gapi.load?o():n(Mt(t,"network-request-failed"))},eT(`${tT()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw kr=null,e})}let kr=null;function qT(t){return kr=kr||zT(t),kr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=new Bs(5e3,15e3),XT="__/auth/iframe",JT="emulator/auth/iframe",QT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function e0(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Za(e,JT):`https://${t.config.authDomain}/${XT}`,i={apiKey:e.apiKey,appName:t.name,v:Cn},s=ZT.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Li(i).slice(1)}`}async function t0(t){const e=await qT(t),n=Lt().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:e0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QT,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Mt(t,"network-request-failed"),l=Lt().setTimeout(()=>{r(o)},YT.get());function a(){Lt().clearTimeout(l),s(i)}i.ping(a).then(a,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},i0=500,s0=600,r0="_blank",o0="http://localhost";class wh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function l0(t,e,n,i=i0,s=s0){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const a=Object.assign(Object.assign({},n0),{width:i.toString(),height:s.toString(),top:r,left:o}),c=We().toLowerCase();n&&(l=Tp(c)?r0:n),Ip(c)&&(e=e||o0,a.scrollbars="yes");const u=Object.entries(a).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(KI(c)&&l!=="_self")return a0(e||"",l),new wh(null);const h=window.open(e||"",l,u);$(h,t,"popup-blocked");try{h.focus()}catch{}return new wh(h)}function a0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0="__/auth/handler",u0="emulator/auth/handler",h0=encodeURIComponent("fac");async function Ih(t,e,n,i,s,r){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Cn,eventId:s};if(e instanceof Op){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Vl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof js){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const u of Object.keys(l))l[u]===void 0&&delete l[u];const a=await t._getAppCheckToken(),c=a?`#${h0}=${encodeURIComponent(a)}`:"";return`${f0(t)}?${Li(l).slice(1)}${c}`}function f0({config:t}){return t.emulator?Za(t,u0):`https://${t.authDomain}/${c0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl="webStorageSupport";class d0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fp,this._completeRedirectFn=FT,this._overrideRedirectResult=MT}async _openPopup(e,n,i,s){var r;Qt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Ih(e,n,i,ql(),s);return l0(e,o,sc())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await Ih(e,n,i,ql(),s);return _T(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Qt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await t0(e),i=new HT(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dl,{type:dl},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[dl];o!==void 0&&n(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bp()||nc()||Ao()}}const p0=d0;var Th="@firebase/auth",Ch="1.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function m0(t){Ft(new wt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=i.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kp(t)},c=new QI(i,s,r,a);return sT(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Ft(new wt("auth-internal",e=>{const n=Pp(e.getProvider("auth").getImmediate());return(i=>new g0(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tt(Th,Ch,_0(t)),tt(Th,Ch,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=5*60;lw("authIdTokenMaxAge");function v0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ZI({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=Mt("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",v0().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});m0("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=new Map,w0={activated:!1,tokenObservers:[]};function It(t){return E0.get(t)||Object.assign({},w0)}const Sh={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Is,this.pending.promise.catch(n=>{}),await T0(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Is,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function T0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Gr=new Mi("appCheck","AppCheck",C0);function Wp(t){if(!It(t).activated)throw Gr.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0="firebase-app-check-database",R0=1,Jl="firebase-app-check-store";let hr=null;function A0(){return hr||(hr=new Promise((t,e)=>{try{const n=indexedDB.open(S0,R0);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(Gr.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(Jl,{keyPath:"compositeKey"})}}}catch(n){e(Gr.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),hr)}function b0(t,e){return k0(P0(t),e)}async function k0(t,e){const i=(await A0()).transaction(Jl,"readwrite"),r=i.objectStore(Jl).put({compositeKey:t,value:e});return new Promise((o,l)=>{r.onsuccess=a=>{o()},i.onerror=a=>{var c;l(Gr.create("storage-set",{originalErrorMessage:(c=a.target.error)===null||c===void 0?void 0:c.message}))}})}function P0(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=new Hs("@firebase/app-check");function Rh(t,e){return sp()?b0(t,e).catch(n=>{Ql.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0={error:"UNKNOWN_ERROR"};function O0(t){return So.encodeString(JSON.stringify(t),!1)}async function Zl(t,e=!1){const n=t.app;Wp(n);const i=It(n);let s=i.token,r;if(s&&!ts(s)&&(i.token=void 0,s=void 0),!s){const a=await i.cachedTokenPromise;a&&(ts(a)?s=a:await Rh(n,void 0))}if(!e&&s&&ts(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await It(n).exchangeTokenPromise}catch(a){a.code==="appCheck/throttled"?Ql.warn(a.message):Ql.error(a),r=a}let l;return s?r?ts(s)?l={token:s.token,internalError:r}:l=bh(r):(l={token:s.token},i.token=s,await Rh(n,s)):l=bh(r),o&&x0(n,l),l}async function D0(t){const e=t.app;Wp(e);const{provider:n}=It(e);{const{token:i}=await n.getToken();return{token:i}}}function M0(t,e,n,i){const{app:s}=t,r=It(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&ts(r.token)){const l=r.token;Promise.resolve().then(()=>{n({token:l.token}),Ah(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Ah(t))}function Kp(t,e){const n=It(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Ah(t){const{app:e}=t,n=It(e);let i=n.tokenRefresher;i||(i=L0(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function L0(t){const{app:e}=t;return new I0(async()=>{const n=It(e);let i;if(n.token?i=await Zl(t,!0):i=await Zl(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=It(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},Sh.RETRIAL_MIN_WAIT,Sh.RETRIAL_MAX_WAIT)}function x0(t,e){const n=It(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function ts(t){return t.expireTimeMillis-Date.now()>0}function bh(t){return{token:O0(N0),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=It(this.app);for(const n of e)Kp(this.app,n.next);return Promise.resolve()}}function U0(t,e){return new F0(t,e)}function H0(t){return{getToken:e=>Zl(t,e),getLimitedUseToken:()=>D0(t),addTokenListener:e=>M0(t,"INTERNAL",e),removeTokenListener:e=>Kp(t.app,e)}}const B0="@firebase/app-check",j0="0.8.3",V0="app-check",kh="app-check-internal";function $0(){Ft(new wt(V0,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return U0(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(kh).initialize()})),Ft(new wt(kh,t=>{const e=t.getProvider("app-check").getImmediate();return H0(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),tt(B0,j0)}$0();var W0="firebase",K0="10.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tt(W0,K0,"app");const Gp=Symbol("firebaseApp");function G0(t){return tv()&&Dt(Gp,null)||up(t)}const fr=new WeakMap;function z0(t,e){if(!fr.has(t)){const n=Sm(!0);fr.set(t,n);const{unmount:i}=e;e.unmount=()=>{i.call(e),n.stop(),fr.delete(t)}}return fr.get(t)}const q0=new WeakMap,dr=new WeakMap;function Y0(t){const e=G0(t);if(!dr.has(e)){let n;const s=[new Promise(r=>{n=r}),r=>{dr.set(e,r),n(r.value)}];dr.set(e,s)}return dr.get(e)}function X0(t,e){cT(e,n=>{const i=Y0();t.value=n,Array.isArray(i)&&i[1](t)})}var Ph={};const Nh="@firebase/database",Oh="1.0.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zp="";function J0(t){zp=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ts(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return tn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Q0(e)}}catch{}return new Z0},Dn=qp("localStorage"),ea=qp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new Hs("@firebase/database"),eC=function(){let t=1;return function(){return t++}}(),Yp=function(t){const e=Iw(t),n=new mw;n.update(e);const i=n.digest();return So.encodeByteArray(i)},$s=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=$s.apply(null,i):typeof i=="object"?e+=Pe(i):e+=i,e+=" "}return e};let Bn=null,Dh=!0;const tC=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(mi.logLevel=Q.VERBOSE,Bn=mi.log.bind(mi),e&&ea.set("logging_enabled",!0)):typeof t=="function"?Bn=t:(Bn=null,ea.remove("logging_enabled"))},Le=function(...t){if(Dh===!0&&(Dh=!1,Bn===null&&ea.get("logging_enabled")===!0&&tC(!0)),Bn){const e=$s.apply(null,t);Bn(e)}},Ws=function(t){return function(...e){Le(t,...e)}},ta=function(...t){const e="FIREBASE INTERNAL ERROR: "+$s(...t);mi.error(e)},Wn=function(...t){const e=`FIREBASE FATAL ERROR: ${$s(...t)}`;throw mi.error(e),new Error(e)},nt=function(...t){const e="FIREBASE WARNING: "+$s(...t);mi.warn(e)},nC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&nt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Xp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},iC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},bi="[MIN_NAME]",Kn="[MAX_NAME]",Ui=function(t,e){if(t===e)return 0;if(t===bi||e===Kn)return-1;if(e===bi||t===Kn)return 1;{const n=Mh(t),i=Mh(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},sC=function(t,e){return t===e?0:t<e?-1:1},qi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Pe(e))},oc=function(t){if(typeof t!="object"||t===null)return Pe(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Pe(e[i]),n+=":",n+=oc(t[e[i]]);return n+="}",n},Jp=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function lt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Qp=function(t){R(!Xp(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,l,a;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=l+i,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},rC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},oC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},lC=new RegExp("^-?(0*)\\d{1,10}$"),aC=-2147483648,cC=2147483647,Mh=function(t){if(lC.test(t)){const e=Number(t);if(e>=aC&&e<=cC)return e}return null},Ks=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw nt("Exception was thrown by user callback.",n),e},Math.floor(0))}},uC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){nt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',nt(e)}}class na{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}na.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="5",Zp="v",eg="s",tg="r",ng="f",ig=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,sg="ls",rg="p",ia="ac",og="websocket",lg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,n,i,s,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Dn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Dn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function pC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ag(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let i;if(e===og)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===lg)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);pC(t)&&(n.ns=t.namespace);const s=[];return lt(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(){this.counters_={}}incrementCounter(e,n=1){tn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ZE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl={},gl={};function ac(t){const e=t.toString();return pl[e]||(pl[e]=new gC),pl[e]}function _C(t,e){const n=t.toString();return gl[n]||(gl[n]=e()),gl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Ks(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh="start",yC="close",vC="pLPCommand",EC="pRTLPCB",cg="id",ug="pw",hg="ser",wC="cb",IC="seg",TC="ts",CC="d",SC="dframe",fg=1870,dg=30,RC=fg-dg,AC=25e3,bC=3e4;class li{constructor(e,n,i,s,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ws(e),this.stats_=ac(n),this.urlFn=a=>(this.appCheckToken&&(a[ia]=this.appCheckToken),ag(n,lg,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new mC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(bC)),iC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new cc((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Lh)this.id=l,this.password=a;else if(o===yC)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[Lh]="t",i[hg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[wC]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Zp]=lc,this.transportSessionId&&(i[eg]=this.transportSessionId),this.lastSessionId&&(i[sg]=this.lastSessionId),this.applicationId&&(i[rg]=this.applicationId),this.appCheckToken&&(i[ia]=this.appCheckToken),typeof location<"u"&&location.hostname&&ig.test(location.hostname)&&(i[tg]=ng);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){li.forceAllow_=!0}static forceDisallow(){li.forceDisallow_=!0}static isAvailable(){return li.forceAllow_?!0:!li.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rC()&&!oC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Zd(n),s=Jp(i,RC);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[SC]="t",i[cg]=e,i[ug]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class cc{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=eC(),window[vC+this.uniqueCallbackIdentifier]=e,window[EC+this.uniqueCallbackIdentifier]=n,this.myIFrame=cc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Le("frame writing exception"),l.stack&&Le(l.stack),Le(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Le("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[cg]=this.myID,e[ug]=this.myPW,e[hg]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+dg+i.length<=fg;){const o=this.pendingSegs.shift();i=i+"&"+IC+s+"="+o.seg+"&"+TC+s+"="+o.ts+"&"+CC+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(AC)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=16384,PC=45e3;let zr=null;typeof MozWebSocket<"u"?zr=MozWebSocket:typeof WebSocket<"u"&&(zr=WebSocket);class pt{constructor(e,n,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ws(this.connId),this.stats_=ac(n),this.connURL=pt.connectionURL_(n,o,l,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Zp]=lc,typeof location<"u"&&location.hostname&&ig.test(location.hostname)&&(o[tg]=ng),n&&(o[eg]=n),i&&(o[sg]=i),s&&(o[ia]=s),r&&(o[rg]=r),ag(e,og,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Dn.set("previous_websocket_failure",!0);try{let i;ip(),this.mySock=new zr(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){pt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&zr!==null&&!pt.forceDisallow_}static previouslyFailed(){return Dn.isInMemoryStorage||Dn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Dn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Ts(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Jp(n,kC);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(PC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pt.responsesRequiredToBeHealthy=2;pt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[li,pt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=pt&&pt.isAvailable();let i=n&&!pt.previouslyFailed();if(e.webSocketOnly&&(n||nt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[pt];else{const s=this.transports_=[];for(const r of Rs.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Rs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Rs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=6e4,OC=5e3,DC=10*1024,MC=100*1024,_l="t",xh="d",LC="s",Fh="r",xC="e",Uh="o",Hh="a",Bh="n",jh="p",FC="h";class UC{constructor(e,n,i,s,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ws("c:"+this.id+":"),this.transportManager_=new Rs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=fs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>MC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>DC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(_l in e){const n=e[_l];n===Hh?this.upgradeIfSecondaryHealthy_():n===Fh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Uh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=qi("t",e),i=qi("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:jh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Hh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=qi("t",e),i=qi("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=qi(_l,e);if(xh in e){const i=e[xh];if(n===FC){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Bh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===LC?this.onConnectionShutdown_(i):n===Fh?this.onReset_(i):n===xC?ta("Server Error: "+i):n===Uh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ta("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),lc!==i&&nt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),fs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(NC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(OC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:jh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Dn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends gg{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ya()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new qr}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=32,$h=768;class fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ae(){return new fe("")}function Y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Tn(t){return t.pieces_.length-t.pieceNum_}function ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new fe(t.pieces_,e)}function _g(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function HC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function mg(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function yg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new fe(e,0)}function Ce(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof fe)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new fe(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function ot(t,e){const n=Y(t),i=Y(e);if(n===null)return e;if(n===i)return ot(ue(t),ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function vg(t,e){if(Tn(t)!==Tn(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function _t(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Tn(t)>Tn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class BC{constructor(e,n){this.errorPrefix_=n,this.parts_=mg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ro(this.parts_[i]);Eg(this)}}function jC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ro(e),Eg(t)}function VC(t){const e=t.parts_.pop();t.byteLength_-=Ro(e),t.parts_.length>0&&(t.byteLength_-=1)}function Eg(t){if(t.byteLength_>$h)throw new Error(t.errorPrefix_+"has a key path longer than "+$h+" bytes ("+t.byteLength_+").");if(t.parts_.length>Vh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Vh+") or object contains a cycle "+Nn(t))}function Nn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc extends gg{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new uc}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=1e3,$C=60*5*1e3,Wh=30*1e3,WC=1.3,KC=3e4,GC="server_kill",Kh=3;class Xt extends pg{constructor(e,n,i,s,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Xt.nextPersistentConnectionId_++,this.log_=Ws("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Yi,this.maxReconnectDelay_=$C,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ip())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");uc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(Pe(r)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Is,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Xt.warnOnListenWarnings_(a,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&tn(e,"w")){const i=Ri(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();nt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_w(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Wh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=gw(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pe(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ta("Unrecognized action received from server: "+Pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Yi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Yi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>KC&&(this.reconnectDelay_=Yi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*WC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Xt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,i())},c=function(h){R(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new UC(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,g=>{nt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(GC)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&nt(h),a())}}}interrupt(e){Le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Vl(this.interruptReasons_)&&(this.reconnectDelay_=Yi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>oc(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new fe(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Le("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Kh&&(this.reconnectDelay_=Wh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Le("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Kh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+zp.replace(/\./g,"-")]=1,Ya()?e["framework.cordova"]=1:np()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qr.getInstance().currentlyOnline();return Vl(this.interruptReasons_)&&e}}Xt.nextPersistentConnectionId_=0;Xt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new X(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new X(bi,e),s=new X(bi,n);return this.compare(i,s)!==0}minPost(){return X.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pr;class wg extends Po{static get __EMPTY_NODE(){return pr}static set __EMPTY_NODE(e){pr=e}compare(e,n){return Ui(e.name,n.name)}isDefinedOn(e){throw Di("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return X.MIN}maxPost(){return new X(Kn,pr)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new X(e,pr)}toString(){return".key"}}const yi=new wg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Te{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Te.RED,this.left=s??Je.EMPTY_NODE,this.right=r??Je.EMPTY_NODE}copy(e,n,i,s,r){return new Te(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Je.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Te.RED=!0;Te.BLACK=!1;class zC{copy(e,n,i,s,r){return this}insert(e,n,i){return new Te(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Je{constructor(e,n=Je.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Je(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Te.BLACK,null,null))}remove(e){return new Je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Te.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new gr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new gr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new gr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new gr(this.root_,null,this.comparator_,!0,e)}}Je.EMPTY_NODE=new zC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(t,e){return Ui(t.name,e.name)}function hc(t,e){return Ui(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa;function YC(t){sa=t}const Ig=function(t){return typeof t=="number"?"number:"+Qp(t):"string:"+t},Tg=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&tn(e,".sv"),"Priority must be a string or number.")}else R(t===sa||t.isEmpty(),"priority of unexpected type.");R(t===sa||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gh;class Ie{constructor(e,n=Ie.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Tg(this.priorityNode_)}static set __childrenNodeConstructor(e){Gh=e}static get __childrenNodeConstructor(){return Gh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ie(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ie.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:Y(e)===".priority"?this.priorityNode_:Ie.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ie.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=Y(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(R(i!==".priority"||Tn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ie.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ig(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Qp(this.value_):e+=this.value_,this.lazyHash_=Yp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ie.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ie.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Ie.VALUE_TYPE_ORDER.indexOf(n),r=Ie.VALUE_TYPE_ORDER.indexOf(i);return R(s>=0,"Unknown leaf type: "+n),R(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ie.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cg,Sg;function XC(t){Cg=t}function JC(t){Sg=t}class QC extends Po{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Ui(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return X.MIN}maxPost(){return new X(Kn,new Ie("[PRIORITY-POST]",Sg))}makePost(e,n){const i=Cg(e);return new X(n,new Ie("[PRIORITY-POST]",i))}toString(){return".priority"}}const je=new QC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=Math.log(2);class eS{constructor(e){const n=r=>parseInt(Math.log(r)/ZC,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Yr=function(t,e,n,i){t.sort(e);const s=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new Te(d,h.node,Te.BLACK,null,null);{const g=parseInt(u/2,10)+a,y=s(a,g),C=s(g+1,c);return h=t[g],d=n?n(h):h,new Te(d,h.node,Te.BLACK,y,C)}},r=function(a){let c=null,u=null,h=t.length;const d=function(y,C){const b=h-y,N=h;h-=y;const x=s(b+1,N),L=t[b],B=n?n(L):L;g(new Te(B,L.node,C,null,x))},g=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<a.count;++y){const C=a.nextBitIsOne(),b=Math.pow(2,a.count-(y+1));C?d(b,Te.BLACK):(d(b,Te.BLACK),d(b,Te.RED))}return u},o=new eS(t.length),l=r(o);return new Je(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ml;const ni={};class zt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(ni&&je,"ChildrenNode.ts has not been loaded"),ml=ml||new zt({".priority":ni},{".priority":je}),ml}get(e){const n=Ri(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Je?n:null}hasIndex(e){return tn(this.indexSet_,e.toString())}addIndex(e,n){R(e!==yi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(X.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=Yr(i,e.getCompare()):l=ni;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new zt(u,c)}addToIndexes(e,n){const i=Ur(this.indexes_,(s,r)=>{const o=Ri(this.indexSet_,r);if(R(o,"Missing index implementation for "+r),s===ni)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(X.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Yr(l,o.getCompare())}else return ni;else{const l=n.get(e.name);let a=s;return l&&(a=a.remove(new X(e.name,l))),a.insert(e,e.node)}});return new zt(i,this.indexSet_)}removeFromIndexes(e,n){const i=Ur(this.indexes_,s=>{if(s===ni)return s;{const r=n.get(e.name);return r?s.remove(new X(e.name,r)):s}});return new zt(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xi;class ne{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Tg(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Xi||(Xi=new ne(new Je(hc),null,zt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xi}updatePriority(e){return this.children_.isEmpty()?this:new ne(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Xi:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new X(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Xi:this.priorityNode_;return new ne(s,o,r)}}updateChild(e,n){const i=Y(e);if(i===null)return n;{R(Y(e)!==".priority"||Tn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(ue(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(je,(o,l)=>{n[o]=l.val(e),i++,r&&ne.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ig(this.getPriority().val())+":"),this.forEachChild(je,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Yp(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new X(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new X(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new X(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,X.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,X.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Gs?-1:0}withIndex(e){if(e===yi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ne(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===yi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(je),s=n.getIterator(je);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===yi?null:this.indexMap_.get(e.toString())}}ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class tS extends ne{constructor(){super(new Je(hc),ne.EMPTY_NODE,zt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ne.EMPTY_NODE}isEmpty(){return!1}}const Gs=new tS;Object.defineProperties(X,{MIN:{value:new X(bi,ne.EMPTY_NODE)},MAX:{value:new X(Kn,Gs)}});wg.__EMPTY_NODE=ne.EMPTY_NODE;Ie.__childrenNodeConstructor=ne;YC(Gs);JC(Gs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=!0;function xe(t,e=null){if(t===null)return ne.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ie(n,xe(e))}if(!(t instanceof Array)&&nS){const n=[];let i=!1;if(lt(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=xe(l);a.isEmpty()||(i=i||!a.getPriority().isEmpty(),n.push(new X(o,a)))}}),n.length===0)return ne.EMPTY_NODE;const r=Yr(n,qC,o=>o.name,hc);if(i){const o=Yr(n,je.getCompare());return new ne(r,xe(e),new zt({".priority":o},{".priority":je}))}else return new ne(r,xe(e),zt.Default)}else{let n=ne.EMPTY_NODE;return lt(t,(i,s)=>{if(tn(t,i)&&i.substring(0,1)!=="."){const r=xe(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(xe(e))}}XC(xe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS extends Po{constructor(e){super(),this.indexPath_=e,R(!z(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Ui(e.name,n.name):r}makePost(e,n){const i=xe(e),s=ne.EMPTY_NODE.updateChild(this.indexPath_,i);return new X(n,s)}maxPost(){const e=ne.EMPTY_NODE.updateChild(this.indexPath_,Gs);return new X(Kn,e)}toString(){return mg(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS extends Po{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Ui(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return X.MIN}maxPost(){return X.MAX}makePost(e,n){const i=xe(e);return new X(n,i)}toString(){return".value"}}const rS=new sS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(t){return{type:"value",snapshotNode:t}}function lS(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function aS(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function zh(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function cS(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=je}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bi}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Kn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===je}copy(){const e=new fc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function qh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===je?n="$priority":t.index_===rS?n="$value":t.index_===yi?n="$key":(R(t.index_ instanceof iS,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Pe(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Pe(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Pe(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Pe(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Yh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==je&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends pg{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Ws("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Xr.getListenId_(e,i),l={};this.listens_[o]=l;const a=qh(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),Ri(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const i=Xr.getListenId_(e,n);delete this.listens_[i]}get(e){const n=qh(e._queryParams),i=e._path.toString(),s=new Is;return this.restRequest_(i+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Li(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ts(l.responseText)}catch{nt("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,a)}else l.status!==401&&l.status!==404&&nt("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(){this.rootNode_=ne.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(){return{value:null,children:new Map}}function Rg(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=Y(e);t.children.has(i)||t.children.set(i,Jr());const s=t.children.get(i);e=ue(e),Rg(s,e,n)}}function ra(t,e,n){t.value!==null?n(e,t.value):hS(t,(i,s)=>{const r=new fe(e.toString()+"/"+i);ra(s,r,n)})}function hS(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&lt(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=10*1e3,dS=30*1e3,pS=5*60*1e3;class gS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new fS(e);const i=Xh+(dS-Xh)*Math.random();fs(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;lt(e,(s,r)=>{r>0&&tn(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),fs(this.reportStats_.bind(this),Math.floor(Math.random()*2*pS))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pt||(Pt={}));function Ag(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function bg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function kg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Pt.ACK_USER_WRITE,this.source=Ag()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new fe(e));return new Qr(ae(),n,this.revert)}}else return R(Y(this.path)===e,"operationForChild called for unrelated child."),new Qr(ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Pt.OVERWRITE}operationForChild(e){return z(this.path)?new Gn(this.source,ae(),this.snap.getImmediateChild(e)):new Gn(this.source,ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Pt.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new fe(e));return n.isEmpty()?null:n.value?new Gn(this.source,ae(),n.value):new As(this.source,ae(),n)}else return R(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new As(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=Y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function _S(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(cS(o.childName,o.snapshotNode))}),Ji(t,s,"child_removed",e,i,n),Ji(t,s,"child_added",e,i,n),Ji(t,s,"child_moved",r,i,n),Ji(t,s,"child_changed",e,i,n),Ji(t,s,"value",e,i,n),s}function Ji(t,e,n,i,s,r){const o=i.filter(l=>l.type===n);o.sort((l,a)=>yS(t,l,a)),o.forEach(l=>{const a=mS(t,l,r);s.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function mS(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function yS(t,e,n){if(e.childName==null||n.childName==null)throw Di("Should only compare child_ events.");const i=new X(e.childName,e.snapshotNode),s=new X(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t,e){return{eventCache:t,serverCache:e}}function ds(t,e,n,i){return Pg(new dc(e,n,i),t.serverCache)}function Ng(t,e,n,i){return Pg(t.eventCache,new dc(e,n,i))}function oa(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function zn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl;const vS=()=>(yl||(yl=new Je(sC)),yl);class ce{constructor(e,n=vS()){this.value=e,this.children=n}static fromObject(e){let n=new ce(null);return lt(e,(i,s)=>{n=n.set(new fe(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ae(),value:this.value};if(z(e))return null;{const i=Y(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(ue(e),n);return r!=null?{path:Ce(new fe(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=Y(e),i=this.children.get(n);return i!==null?i.subtree(ue(e)):new ce(null)}}set(e,n){if(z(e))return new ce(n,this.children);{const i=Y(e),r=(this.children.get(i)||new ce(null)).set(ue(e),n),o=this.children.insert(i,r);return new ce(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new ce(null):new ce(null,this.children);{const n=Y(e),i=this.children.get(n);if(i){const s=i.remove(ue(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new ce(null):new ce(this.value,r)}else return this}}get(e){if(z(e))return this.value;{const n=Y(e),i=this.children.get(n);return i?i.get(ue(e)):null}}setTree(e,n){if(z(e))return n;{const i=Y(e),r=(this.children.get(i)||new ce(null)).setTree(ue(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new ce(this.value,o)}}fold(e){return this.fold_(ae(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Ce(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,ae(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(z(e))return null;{const r=Y(e),o=this.children.get(r);return o?o.findOnPath_(ue(e),Ce(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ae(),n)}foreachOnPath_(e,n,i){if(z(e))return this;{this.value&&i(n,this.value);const s=Y(e),r=this.children.get(s);return r?r.foreachOnPath_(ue(e),Ce(n,s),i):new ce(null)}}foreach(e){this.foreach_(ae(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Ce(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.writeTree_=e}static empty(){return new vt(new ce(null))}}function ps(t,e,n){if(z(e))return new vt(new ce(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=ot(s,e);return r=r.updateChild(o,n),new vt(t.writeTree_.set(s,r))}else{const s=new ce(n),r=t.writeTree_.setTree(e,s);return new vt(r)}}}function Jh(t,e,n){let i=t;return lt(n,(s,r)=>{i=ps(i,Ce(e,s),r)}),i}function Qh(t,e){if(z(e))return vt.empty();{const n=t.writeTree_.setTree(e,new ce(null));return new vt(n)}}function la(t,e){return Xn(t,e)!=null}function Xn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ot(n.path,e)):null}function Zh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(je,(i,s)=>{e.push(new X(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new X(i,s.value))}),e}function wn(t,e){if(z(e))return t;{const n=Xn(t,e);return n!=null?new vt(new ce(n)):new vt(t.writeTree_.subtree(e))}}function aa(t){return t.writeTree_.isEmpty()}function ki(t,e){return Og(ae(),t.writeTree_,e)}function Og(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(R(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Og(Ce(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Ce(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(t,e){return Ug(e,t)}function ES(t,e,n,i,s){R(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=ps(t.visibleWrites,e,n)),t.lastWriteId=i}function wS(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function IS(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&TS(l,i.path)?s=!1:_t(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return CS(t),!0;if(i.snap)t.visibleWrites=Qh(t.visibleWrites,i.path);else{const l=i.children;lt(l,a=>{t.visibleWrites=Qh(t.visibleWrites,Ce(i.path,a))})}return!0}else return!1}function TS(t,e){if(t.snap)return _t(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&_t(Ce(t.path,n),e))return!0;return!1}function CS(t){t.visibleWrites=Mg(t.allWrites,SS,ae()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function SS(t){return t.visible}function Mg(t,e,n){let i=vt.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let l;if(r.snap)_t(n,o)?(l=ot(n,o),i=ps(i,l,r.snap)):_t(o,n)&&(l=ot(o,n),i=ps(i,ae(),r.snap.getChild(l)));else if(r.children){if(_t(n,o))l=ot(n,o),i=Jh(i,l,r.children);else if(_t(o,n))if(l=ot(o,n),z(l))i=Jh(i,ae(),r.children);else{const a=Ri(r.children,Y(l));if(a){const c=a.getChild(ue(l));i=ps(i,ae(),c)}}}else throw Di("WriteRecord should have .snap or .children")}}return i}function Lg(t,e,n,i,s){if(!i&&!s){const r=Xn(t.visibleWrites,e);if(r!=null)return r;{const o=wn(t.visibleWrites,e);if(aa(o))return n;if(n==null&&!la(o,ae()))return null;{const l=n||ne.EMPTY_NODE;return ki(o,l)}}}else{const r=wn(t.visibleWrites,e);if(!s&&aa(r))return n;if(!s&&n==null&&!la(r,ae()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(_t(c.path,e)||_t(e,c.path))},l=Mg(t.allWrites,o,e),a=n||ne.EMPTY_NODE;return ki(l,a)}}}function RS(t,e,n){let i=ne.EMPTY_NODE;const s=Xn(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(je,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=wn(t.visibleWrites,e);return n.forEachChild(je,(o,l)=>{const a=ki(wn(r,new fe(o)),l);i=i.updateImmediateChild(o,a)}),Zh(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=wn(t.visibleWrites,e);return Zh(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function AS(t,e,n,i,s){R(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Ce(e,n);if(la(t.visibleWrites,r))return null;{const o=wn(t.visibleWrites,r);return aa(o)?s.getChild(n):ki(o,s.getChild(n))}}function bS(t,e,n,i){const s=Ce(e,n),r=Xn(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=wn(t.visibleWrites,s);return ki(o,i.getNode().getImmediateChild(n))}else return null}function kS(t,e){return Xn(t.visibleWrites,e)}function PS(t,e,n,i,s,r,o){let l;const a=wn(t.visibleWrites,e),c=Xn(a,ae());if(c!=null)l=c;else if(n!=null)l=ki(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let g=d.getNext();for(;g&&u.length<s;)h(g,i)!==0&&u.push(g),g=d.getNext();return u}else return[]}function NS(){return{visibleWrites:vt.empty(),allWrites:[],lastWriteId:-1}}function ca(t,e,n,i){return Lg(t.writeTree,t.treePath,e,n,i)}function xg(t,e){return RS(t.writeTree,t.treePath,e)}function ef(t,e,n,i){return AS(t.writeTree,t.treePath,e,n,i)}function Zr(t,e){return kS(t.writeTree,Ce(t.treePath,e))}function OS(t,e,n,i,s,r){return PS(t.writeTree,t.treePath,e,n,i,s,r)}function pc(t,e,n){return bS(t.writeTree,t.treePath,e,n)}function Fg(t,e){return Ug(Ce(t.treePath,e),t.writeTree)}function Ug(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,zh(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,aS(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,lS(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,zh(i,e.snapshotNode,s.oldSnap));else throw Di("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Hg=new MS;class gc{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new dc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return pc(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:zn(this.viewCache_),r=OS(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function LS(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function xS(t,e,n,i,s){const r=new DS;let o,l;if(n.type===Pt.OVERWRITE){const c=n;c.source.fromUser?o=ua(t,e,c.path,c.snap,i,s,r):(R(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!z(c.path),o=eo(t,e,c.path,c.snap,i,s,l,r))}else if(n.type===Pt.MERGE){const c=n;c.source.fromUser?o=US(t,e,c.path,c.children,i,s,r):(R(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=ha(t,e,c.path,c.children,i,s,l,r))}else if(n.type===Pt.ACK_USER_WRITE){const c=n;c.revert?o=jS(t,e,c.path,i,s,r):o=HS(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===Pt.LISTEN_COMPLETE)o=BS(t,e,n.path,i,r);else throw Di("Unknown operation type: "+n.type);const a=r.getChanges();return FS(e,o,a),{viewCache:o,changes:a}}function FS(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=oa(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(oS(oa(e)))}}function Bg(t,e,n,i,s,r){const o=e.eventCache;if(Zr(i,n)!=null)return e;{let l,a;if(z(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=zn(e),u=c instanceof ne?c:ne.EMPTY_NODE,h=xg(i,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=ca(i,zn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Y(n);if(c===".priority"){R(Tn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=ef(i,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ue(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=ef(i,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=pc(i,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,s,r):l=o.getNode()}}return ds(e,l,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function eo(t,e,n,i,s,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(z(n))c=u.updateFullNode(a.getNode(),i,null);else if(u.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,i);c=u.updateFullNode(a.getNode(),g,null)}else{const g=Y(n);if(!a.isCompleteForPath(n)&&Tn(n)>1)return e;const y=ue(n),b=a.getNode().getImmediateChild(g).updateChild(y,i);g===".priority"?c=u.updatePriority(a.getNode(),b):c=u.updateChild(a.getNode(),g,b,y,Hg,null)}const h=Ng(e,c,a.isFullyInitialized()||z(n),u.filtersNodes()),d=new gc(s,h,r);return Bg(t,h,n,s,d,l)}function ua(t,e,n,i,s,r,o){const l=e.eventCache;let a,c;const u=new gc(s,e,r);if(z(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),a=ds(e,c,!0,t.filter.filtersNodes());else{const h=Y(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),a=ds(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=ue(n),g=l.getNode().getImmediateChild(h);let y;if(z(d))y=i;else{const C=u.getCompleteChild(h);C!=null?_g(d)===".priority"&&C.getChild(yg(d)).isEmpty()?y=C:y=C.updateChild(d,i):y=ne.EMPTY_NODE}if(g.equals(y))a=e;else{const C=t.filter.updateChild(l.getNode(),h,y,d,u,o);a=ds(e,C,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function tf(t,e){return t.eventCache.isCompleteForChild(e)}function US(t,e,n,i,s,r,o){let l=e;return i.foreach((a,c)=>{const u=Ce(n,a);tf(e,Y(u))&&(l=ua(t,l,u,c,s,r,o))}),i.foreach((a,c)=>{const u=Ce(n,a);tf(e,Y(u))||(l=ua(t,l,u,c,s,r,o))}),l}function nf(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ha(t,e,n,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;z(n)?c=i:c=new ce(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),y=nf(t,g,d);a=eo(t,a,new fe(h),y,s,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!g){const y=e.serverCache.getNode().getImmediateChild(h),C=nf(t,y,d);a=eo(t,a,new fe(h),C,s,r,o,l)}}),a}function HS(t,e,n,i,s,r,o){if(Zr(s,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(i.value!=null){if(z(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return eo(t,e,n,a.getNode().getChild(n),s,r,l,o);if(z(n)){let c=new ce(null);return a.getNode().forEachChild(yi,(u,h)=>{c=c.set(new fe(u),h)}),ha(t,e,n,c,s,r,l,o)}else return e}else{let c=new ce(null);return i.foreach((u,h)=>{const d=Ce(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),ha(t,e,n,c,s,r,l,o)}}function BS(t,e,n,i,s){const r=e.serverCache,o=Ng(e,r.getNode(),r.isFullyInitialized()||z(n),r.isFiltered());return Bg(t,o,n,i,Hg,s)}function jS(t,e,n,i,s,r){let o;if(Zr(i,n)!=null)return e;{const l=new gc(i,e,s),a=e.eventCache.getNode();let c;if(z(n)||Y(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ca(i,zn(e));else{const h=e.serverCache.getNode();R(h instanceof ne,"serverChildren would be complete if leaf node"),u=xg(i,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=Y(n);let h=pc(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,ue(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,ne.EMPTY_NODE,ue(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ca(i,zn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Zr(i,ae())!=null,ds(e,c,o,t.filter.filtersNodes())}}function VS(t,e){const n=zn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function sf(t,e,n,i){e.type===Pt.MERGE&&e.source.queryId!==null&&(R(zn(t.viewCache_),"We should always have a full cache before handling merges"),R(oa(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=xS(t.processor_,s,e,n,i);return LS(t.processor_,r.viewCache),R(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,$S(t,r.changes,r.viewCache.eventCache.getNode(),null)}function $S(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return _S(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rf;function WS(t){R(!rf,"__referenceConstructor has already been defined"),rf=t}function _c(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return R(r!=null,"SyncTree gave us an op for an invalid query."),sf(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(sf(o,e,n,i));return r}}function mc(t,e){let n=null;for(const i of t.views.values())n=n||VS(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let of;function KS(t){R(!of,"__referenceConstructor has already been defined"),of=t}class lf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ce(null),this.pendingWriteTree_=NS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function GS(t,e,n,i,s){return ES(t.pendingWriteTree_,e,n,i,s),s?Oo(t,new Gn(Ag(),e,n)):[]}function ai(t,e,n=!1){const i=wS(t.pendingWriteTree_,e);if(IS(t.pendingWriteTree_,e)){let r=new ce(null);return i.snap!=null?r=r.set(ae(),!0):lt(i.children,o=>{r=r.set(new fe(o),!0)}),Oo(t,new Qr(i.path,r,n))}else return[]}function No(t,e,n){return Oo(t,new Gn(bg(),e,n))}function zS(t,e,n){const i=ce.fromObject(n);return Oo(t,new As(bg(),e,i))}function qS(t,e,n,i){const s=Wg(t,i);if(s!=null){const r=Kg(s),o=r.path,l=r.queryId,a=ot(o,e),c=new Gn(kg(l),a,n);return Gg(t,o,c)}else return[]}function YS(t,e,n,i){const s=Wg(t,i);if(s){const r=Kg(s),o=r.path,l=r.queryId,a=ot(o,e),c=ce.fromObject(n),u=new As(kg(l),a,c);return Gg(t,o,u)}else return[]}function jg(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=ot(o,e),c=mc(l,a);if(c)return c});return Lg(s,e,r,n,!0)}function Oo(t,e){return Vg(e,t.syncPointTree_,null,Dg(t.pendingWriteTree_,ae()))}function Vg(t,e,n,i){if(z(t.path))return $g(t,e,n,i);{const s=e.get(ae());n==null&&s!=null&&(n=mc(s,ae()));let r=[];const o=Y(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Fg(i,o);r=r.concat(Vg(l,a,c,u))}return s&&(r=r.concat(_c(s,t,i,n))),r}}function $g(t,e,n,i){const s=e.get(ae());n==null&&s!=null&&(n=mc(s,ae()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Fg(i,o),u=t.operationForChild(o);u&&(r=r.concat($g(u,l,a,c)))}),s&&(r=r.concat(_c(s,t,i,n))),r}function Wg(t,e){return t.tagToQueryMap.get(e)}function Kg(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new fe(t.substr(0,e))}}function Gg(t,e,n){const i=t.syncPointTree_.get(e);R(i,"Missing sync point for query tag that we're tracking");const s=Dg(t.pendingWriteTree_,e);return _c(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new yc(n)}node(){return this.node_}}class vc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ce(this.path_,e);return new vc(this.syncTree_,n)}node(){return jg(this.syncTree_,this.path_)}}const XS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},af=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return JS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return QS(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},JS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},QS=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&R(!1,"Unexpected increment value: "+i);const s=e.node();if(R(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},ZS=function(t,e,n,i){return Ec(e,new vc(n,t),i)},eR=function(t,e,n){return Ec(t,new yc(e),n)};function Ec(t,e,n){const i=t.getPriority().val(),s=af(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=af(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new Ie(l,xe(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Ie(s))),o.forEachChild(je,(l,a)=>{const c=Ec(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Ic(t,e){let n=e instanceof fe?e:new fe(e),i=t,s=Y(n);for(;s!==null;){const r=Ri(i.node.children,s)||{children:{},childCount:0};i=new wc(s,i,r),n=ue(n),s=Y(n)}return i}function Hi(t){return t.node.value}function zg(t,e){t.node.value=e,fa(t)}function qg(t){return t.node.childCount>0}function tR(t){return Hi(t)===void 0&&!qg(t)}function Do(t,e){lt(t.node.children,(n,i)=>{e(new wc(n,t,i))})}function Yg(t,e,n,i){n&&!i&&e(t),Do(t,s=>{Yg(s,e,!0,i)}),n&&i&&e(t)}function nR(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function zs(t){return new fe(t.parent===null?t.name:zs(t.parent)+"/"+t.name)}function fa(t){t.parent!==null&&iR(t.parent,t.name,t)}function iR(t,e,n){const i=tR(n),s=tn(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,fa(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,fa(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=/[\[\].#$\/\u0000-\u001F\u007F]/,rR=/[\[\].#$\u0000-\u001F\u007F]/,vl=10*1024*1024,Xg=function(t){return typeof t=="string"&&t.length!==0&&!sR.test(t)},oR=function(t){return typeof t=="string"&&t.length!==0&&!rR.test(t)},lR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),oR(t)},Jg=function(t,e,n){const i=n instanceof fe?new BC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Nn(i));if(typeof e=="function")throw new Error(t+"contains a function "+Nn(i)+" with contents = "+e.toString());if(Xp(e))throw new Error(t+"contains "+e.toString()+" "+Nn(i));if(typeof e=="string"&&e.length>vl/3&&Ro(e)>vl)throw new Error(t+"contains a string greater than "+vl+" utf8 bytes "+Nn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(lt(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Xg(o)))throw new Error(t+" contains an invalid key ("+o+") "+Nn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);jC(i,o),Jg(t,l,i),VC(i)}),s&&r)throw new Error(t+' contains ".value" child '+Nn(i)+" in addition to actual children.")}},aR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Xg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!lR(n))throw new Error(ww(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function uR(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!vg(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Jn(t,e,n){uR(t,n),hR(t,i=>_t(i,e)||_t(e,i))}function hR(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(fR(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function fR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Bn&&Le("event: "+n.toString()),Ks(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR="repo_interrupt",pR=25;class gR{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new cR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Jr(),this.transactionQueueTree_=new wc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function _R(t,e,n){if(t.stats_=ac(t.repoInfo_),t.forceRestClient_||uC())t.server_=new Xr(t.repoInfo_,(i,s,r,o)=>{cf(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>uf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pe(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Xt(t.repoInfo_,e,(i,s,r,o)=>{cf(t,i,s,r,o)},i=>{uf(t,i)},i=>{yR(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=_C(t.repoInfo_,()=>new gS(t.stats_,t.server_)),t.infoData_=new uS,t.infoSyncTree_=new lf({startListening:(i,s,r,o)=>{let l=[];const a=t.infoData_.getNode(i._path);return a.isEmpty()||(l=No(t.infoSyncTree_,i._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Tc(t,"connected",!1),t.serverSyncTree_=new lf({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(l,a)=>{const c=o(l,a);Jn(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function mR(t){const n=t.infoData_.getNode(new fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Qg(t){return XS({timestamp:mR(t)})}function cf(t,e,n,i,s){t.dataUpdateCount++;const r=new fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const a=Ur(n,c=>xe(c));o=YS(t.serverSyncTree_,r,a,s)}else{const a=xe(n);o=qS(t.serverSyncTree_,r,a,s)}else if(i){const a=Ur(n,c=>xe(c));o=zS(t.serverSyncTree_,r,a)}else{const a=xe(n);o=No(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Sc(t,r)),Jn(t.eventQueue_,l,o)}function uf(t,e){Tc(t,"connected",e),e===!1&&ER(t)}function yR(t,e){lt(e,(n,i)=>{Tc(t,n,i)})}function Tc(t,e,n){const i=new fe("/.info/"+e),s=xe(n);t.infoData_.updateSnapshot(i,s);const r=No(t.infoSyncTree_,i,s);Jn(t.eventQueue_,i,r)}function vR(t){return t.nextWriteId_++}function ER(t){Zg(t,"onDisconnectEvents");const e=Qg(t),n=Jr();ra(t.onDisconnect_,ae(),(s,r)=>{const o=ZS(s,r,t.serverSyncTree_,e);Rg(n,s,o)});let i=[];ra(n,ae(),(s,r)=>{i=i.concat(No(t.serverSyncTree_,s,r));const o=CR(t,s);Sc(t,o)}),t.onDisconnect_=Jr(),Jn(t.eventQueue_,ae(),i)}function wR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(dR)}function Zg(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Le(n,...e)}function e_(t,e,n){return jg(t.serverSyncTree_,e,n)||ne.EMPTY_NODE}function Cc(t,e=t.transactionQueueTree_){if(e||Mo(t,e),Hi(e)){const n=n_(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&IR(t,zs(e),n)}else qg(e)&&Do(e,n=>{Cc(t,n)})}function IR(t,e,n){const i=n.map(c=>c.currentWriteId),s=e_(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];R(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=ot(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Zg(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(ai(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Mo(t,Ic(t.transactionQueueTree_,e)),Cc(t,t.transactionQueueTree_),Jn(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ks(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{nt("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Sc(t,e)}},o)}function Sc(t,e){const n=t_(t,e),i=zs(n),s=n_(t,n);return TR(t,s,i),i}function TR(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=ot(n,a.path);let u=!1,h;if(R(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,s=s.concat(ai(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=pR)u=!0,h="maxretry",s=s.concat(ai(t.serverSyncTree_,a.currentWriteId,!0));else{const d=e_(t,a.path,o);a.currentInputSnapshot=d;const g=e[l].update(d.val());if(g!==void 0){Jg("transaction failed: Data returned ",g,a.path);let y=xe(g);typeof g=="object"&&g!=null&&tn(g,".priority")||(y=y.updatePriority(d.getPriority()));const b=a.currentWriteId,N=Qg(t),x=eR(y,d,N);a.currentOutputSnapshotRaw=y,a.currentOutputSnapshotResolved=x,a.currentWriteId=vR(t),o.splice(o.indexOf(b),1),s=s.concat(GS(t.serverSyncTree_,a.path,x,a.currentWriteId,a.applyLocally)),s=s.concat(ai(t.serverSyncTree_,b,!0))}else u=!0,h="nodata",s=s.concat(ai(t.serverSyncTree_,a.currentWriteId,!0))}Jn(t.eventQueue_,n,s),s=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(h),!1,null))))}Mo(t,t.transactionQueueTree_);for(let l=0;l<i.length;l++)Ks(i[l]);Cc(t,t.transactionQueueTree_)}function t_(t,e){let n,i=t.transactionQueueTree_;for(n=Y(e);n!==null&&Hi(i)===void 0;)i=Ic(i,n),e=ue(e),n=Y(e);return i}function n_(t,e){const n=[];return i_(t,e,n),n.sort((i,s)=>i.order-s.order),n}function i_(t,e,n){const i=Hi(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Do(e,s=>{i_(t,s,n)})}function Mo(t,e){const n=Hi(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,zg(e,n.length>0?n:void 0)}Do(e,i=>{Mo(t,i)})}function CR(t,e){const n=zs(t_(t,e)),i=Ic(t.transactionQueueTree_,e);return nR(i,s=>{El(t,s)}),El(t,i),Yg(i,s=>{El(t,s)}),n}function El(t,e){const n=Hi(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(ai(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?zg(e,void 0):n.length=r+1,Jn(t.eventQueue_,zs(e),s);for(let o=0;o<i.length;o++)Ks(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function RR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):nt(`Invalid query segment '${n}' in query '${t}'`)}return e}const hf=function(t,e){const n=AR(t),i=n.namespace;n.domain==="firebase.com"&&Wn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Wn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||nC();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new dC(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new fe(n.pathString)}},AR=function(t){let e="",n="",i="",s="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=SR(t.substring(u,h)));const d=RR(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const y=e.indexOf(".");i=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return z(this._path)?null:_g(this._path)}get ref(){return new Bi(this._repo,this._path)}get _queryIdentifier(){const e=Yh(this._queryParams),n=oc(e);return n==="{}"?"default":n}get _queryObject(){return Yh(this._queryParams)}isEqual(e){if(e=xi(e),!(e instanceof Rc))return!1;const n=this._repo===e._repo,i=vg(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+HC(this._path)}}class Bi extends Rc{constructor(e,n){super(e,n,new fc,!1)}get parent(){const e=yg(this._path);return e===null?null:new Bi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}WS(Bi);KS(Bi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR="FIREBASE_DATABASE_EMULATOR_HOST",da={};let kR=!1;function PR(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Wn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=hf(r,s),l=o.repoInfo,a,c;typeof process<"u"&&Ph&&(c=Ph[bR]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=hf(r,s),l=o.repoInfo):a=!o.repoInfo.secure;const u=s&&a?new na(na.OWNER):new fC(t.name,t.options,e);aR("Invalid Firebase Database URL",o),z(o.path)||Wn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=OR(l,t,u,new hC(t.name,n));return new DR(h,t)}function NR(t,e){const n=da[e];(!n||n[t.key]!==t)&&Wn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),wR(t),delete n[t.key]}function OR(t,e,n,i){let s=da[e.name];s||(s={},da[e.name]=s);let r=s[t.toURLString()];return r&&Wn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new gR(t,kR,n,i),s[t.toURLString()]=r,r}class DR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(_R(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Bi(this._repo,ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(NR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Wn("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(t){J0(Cn),Ft(new wt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return PR(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),tt(Nh,Oh,t),tt(Nh,Oh,"esm2017")}Xt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Xt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};MR();var LR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,Ac=Ac||{},j=LR||self;function Lo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function qs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function xR(t){return Object.prototype.hasOwnProperty.call(t,wl)&&t[wl]||(t[wl]=++FR)}var wl="closure_uid_"+(1e9*Math.random()>>>0),FR=0;function UR(t,e,n){return t.call.apply(t.bind,arguments)}function HR(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Ve(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ve=UR:Ve=HR,Ve.apply(null,arguments)}function _r(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Ae(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return e.prototype[s].apply(i,o)}}function Sn(){this.s=this.s,this.o=this.o}var BR=0;Sn.prototype.s=!1;Sn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),BR!=0)&&xR(this)};Sn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const s_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function bc(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function ff(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Lo(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function $e(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var jR=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};j.addEventListener("test",n,e),j.removeEventListener("test",n,e)}catch{}return t}();function bs(t){return/^[\s\xa0]*$/.test(t)}function xo(){var t=j.navigator;return t&&(t=t.userAgent)?t:""}function kt(t){return xo().indexOf(t)!=-1}function kc(t){return kc[" "](t),t}kc[" "]=function(){};function VR(t,e){var n=LA;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var $R=kt("Opera"),ks=kt("Trident")||kt("MSIE"),r_=kt("Edge"),pa=r_||ks,o_=kt("Gecko")&&!(xo().toLowerCase().indexOf("webkit")!=-1&&!kt("Edge"))&&!(kt("Trident")||kt("MSIE"))&&!kt("Edge"),WR=xo().toLowerCase().indexOf("webkit")!=-1&&!kt("Edge");function l_(){var t=j.document;return t?t.documentMode:void 0}e:{var df="",Il=function(){var t=xo();if(o_)return/rv:([^\);]+)(\)|;)/.exec(t);if(r_)return/Edge\/([\d\.]+)/.exec(t);if(ks)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(WR)return/WebKit\/(\S+)/.exec(t);if($R)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Il&&(df=Il?Il[1]:""),ks){var pf=l_();if(pf!=null&&pf>parseFloat(df))break e}}j.document&&ks&&l_();function Ps(t,e){if($e.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(o_){e:{try{kc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:KR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ps.$.h.call(this)}}Ae(Ps,$e);var KR={2:"touch",3:"pen",4:"mouse"};Ps.prototype.h=function(){Ps.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ys="closure_listenable_"+(1e6*Math.random()|0),GR=0;function zR(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++GR,this.fa=this.ia=!1}function Fo(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Pc(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function qR(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function a_(t){const e={};for(const n in t)e[n]=t[n];return e}const gf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function c_(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<gf.length;r++)n=gf[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Uo(t){this.src=t,this.g={},this.h=0}Uo.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=_a(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new zR(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function ga(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=s_(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Fo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function _a(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var Nc="closure_lm_"+(1e6*Math.random()|0),Tl={};function u_(t,e,n,i,s){if(i&&i.once)return f_(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)u_(t,e[r],n,i,s);return null}return n=Mc(n),t&&t[Ys]?t.O(e,n,qs(i)?!!i.capture:!!i,s):h_(t,e,n,!1,i,s)}function h_(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=qs(s)?!!s.capture:!!s,l=Dc(t);if(l||(t[Nc]=l=new Uo(t)),n=l.add(e,n,i,o,r),n.proxy)return n;if(i=YR(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)jR||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(p_(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function YR(){function t(n){return e.call(t.src,t.listener,n)}const e=XR;return t}function f_(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)f_(t,e[r],n,i,s);return null}return n=Mc(n),t&&t[Ys]?t.P(e,n,qs(i)?!!i.capture:!!i,s):h_(t,e,n,!0,i,s)}function d_(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)d_(t,e[r],n,i,s);else i=qs(i)?!!i.capture:!!i,n=Mc(n),t&&t[Ys]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=_a(r,n,i,s),-1<n&&(Fo(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Dc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=_a(e,n,i,s)),(n=-1<t?e[t]:null)&&Oc(n))}function Oc(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ys])ga(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(p_(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Dc(e))?(ga(n,t),n.h==0&&(n.src=null,e[Nc]=null)):Fo(t)}}}function p_(t){return t in Tl?Tl[t]:Tl[t]="on"+t}function XR(t,e){if(t.fa)t=!0;else{e=new Ps(e,this);var n=t.listener,i=t.la||t.src;t.ia&&Oc(t),t=n.call(i,e)}return t}function Dc(t){return t=t[Nc],t instanceof Uo?t:null}var Cl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mc(t){return typeof t=="function"?t:(t[Cl]||(t[Cl]=function(e){return t.handleEvent(e)}),t[Cl])}function Re(){Sn.call(this),this.i=new Uo(this),this.S=this,this.J=null}Ae(Re,Sn);Re.prototype[Ys]=!0;Re.prototype.removeEventListener=function(t,e,n,i){d_(this,t,e,n,i)};function Ne(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new $e(e,t);else if(e instanceof $e)e.target=e.target||t;else{var s=e;e=new $e(i,t),c_(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=mr(o,i,!0,e)&&s}if(o=e.g=t,s=mr(o,i,!0,e)&&s,s=mr(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=mr(o,i,!1,e)&&s}Re.prototype.N=function(){if(Re.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Fo(n[i]);delete t.g[e],t.h--}}this.J=null};Re.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Re.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function mr(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var l=o.listener,a=o.la||o.src;o.ia&&ga(t.i,o),s=l.call(a,i)!==!1&&s}}return s&&!i.defaultPrevented}var Lc=j.JSON.stringify;class JR{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function QR(){var t=xc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ZR{constructor(){this.h=this.g=null}add(e,n){const i=g_.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var g_=new JR(()=>new eA,t=>t.reset());class eA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function tA(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function nA(t){j.setTimeout(()=>{throw t},0)}let Ns,Os=!1,xc=new ZR,__=()=>{const t=j.Promise.resolve(void 0);Ns=()=>{t.then(iA)}};var iA=()=>{for(var t;t=QR();){try{t.h.call(t.g)}catch(n){nA(n)}var e=g_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Os=!1};function Ho(t,e){Re.call(this),this.h=t||1,this.g=e||j,this.j=Ve(this.qb,this),this.l=Date.now()}Ae(Ho,Re);A=Ho.prototype;A.ga=!1;A.T=null;A.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ne(this,"tick"),this.ga&&(Fc(this),this.start()))}};A.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Fc(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}A.N=function(){Ho.$.N.call(this),Fc(this),delete this.g};function Uc(t,e,n){if(typeof t=="function")n&&(t=Ve(t,n));else if(t&&typeof t.handleEvent=="function")t=Ve(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function m_(t){t.g=Uc(()=>{t.g=null,t.i&&(t.i=!1,m_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class sA extends Sn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:m_(this)}N(){super.N(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ds(t){Sn.call(this),this.h=t,this.g={}}Ae(Ds,Sn);var _f=[];function y_(t,e,n,i){Array.isArray(n)||(n&&(_f[0]=n.toString()),n=_f);for(var s=0;s<n.length;s++){var r=u_(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function v_(t){Pc(t.g,function(e,n){this.g.hasOwnProperty(n)&&Oc(e)},t),t.g={}}Ds.prototype.N=function(){Ds.$.N.call(this),v_(this)};Ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Bo(){this.g=!0}Bo.prototype.Ea=function(){this.g=!1};function rA(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",l=r.split("&"),a=0;a<l.length;a++){var c=l[a].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function oA(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function ci(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+aA(t,n)+(i?" "+i:"")})}function lA(t,e){t.info(function(){return"TIMEOUT: "+e})}Bo.prototype.info=function(){};function aA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Lc(n)}catch{return e}}var ji={},mf=null;function Hc(){return mf=mf||new Re}ji.Ta="serverreachability";function E_(t){$e.call(this,ji.Ta,t)}Ae(E_,$e);function Ms(t){const e=Hc();Ne(e,new E_(e))}ji.STAT_EVENT="statevent";function w_(t,e){$e.call(this,ji.STAT_EVENT,t),this.stat=e}Ae(w_,$e);function ze(t){const e=Hc();Ne(e,new w_(e,t))}ji.Ua="timingevent";function I_(t,e){$e.call(this,ji.Ua,t),this.size=e}Ae(I_,$e);function Xs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var Bc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},cA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function jc(){}jc.prototype.h=null;function yf(t){return t.h||(t.h=t.i())}function uA(){}var Js={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Vc(){$e.call(this,"d")}Ae(Vc,$e);function $c(){$e.call(this,"c")}Ae($c,$e);var ma;function jo(){}Ae(jo,jc);jo.prototype.g=function(){return new XMLHttpRequest};jo.prototype.i=function(){return{}};ma=new jo;function Qs(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Ds(this),this.P=hA,t=pa?125:void 0,this.V=new Ho(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new T_}function T_(){this.i=null,this.g="",this.h=!1}var hA=45e3,C_={},ya={};A=Qs.prototype;A.setTimeout=function(t){this.P=t};function va(t,e,n){t.L=1,t.A=$o(Zt(e)),t.u=n,t.S=!0,S_(t,null)}function S_(t,e){t.G=Date.now(),Zs(t),t.B=Zt(t.A);var n=t.B,i=t.W;Array.isArray(i)||(i=[String(i)]),D_(n.i,"t",i),t.o=0,n=t.l.J,t.h=new T_,t.g=em(t.l,n?e:null,!t.u),0<t.O&&(t.M=new sA(Ve(t.Pa,t,t.g),t.O)),y_(t.U,t.g,"readystatechange",t.nb),e=t.I?a_(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Ms(),rA(t.j,t.v,t.B,t.m,t.W,t.u)}A.nb=function(t){t=t.target;const e=this.M;e&&Nt(t)==3?e.l():this.Pa(t)};A.Pa=function(t){try{if(t==this.g)e:{const u=Nt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||pa||this.g&&(this.h.h||this.g.ja()||If(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ms(3):Ms(2)),Vo(this);var n=this.g.da();this.ca=n;t:if(R_(this)){var i=If(this.g);t="";var s=i.length,r=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mn(this),gs(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,oA(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!bs(l)){var c=l;break t}}c=null}if(n=c)ci(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ea(this,n);else{this.i=!1,this.s=3,ze(12),Mn(this),gs(this);break e}}this.S?(A_(this,u,o),pa&&this.i&&u==3&&(y_(this.U,this.V,"tick",this.mb),this.V.start())):(ci(this.j,this.m,o,null),Ea(this,o)),u==4&&Mn(this),this.i&&!this.J&&(u==4?X_(this.l,this):(this.i=!1,Zs(this)))}else OA(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ze(12)):(this.s=0,ze(13)),Mn(this),gs(this)}}}catch{}finally{}};function R_(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function A_(t,e,n){let i=!0,s;for(;!t.J&&t.o<n.length;)if(s=fA(t,n),s==ya){e==4&&(t.s=4,ze(14),i=!1),ci(t.j,t.m,null,"[Incomplete Response]");break}else if(s==C_){t.s=4,ze(15),ci(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else ci(t.j,t.m,s,null),Ea(t,s);R_(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,ze(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Yc(e),e.M=!0,ze(11))):(ci(t.j,t.m,n,"[Invalid Chunked Response]"),Mn(t),gs(t))}A.mb=function(){if(this.g){var t=Nt(this.g),e=this.g.ja();this.o<e.length&&(Vo(this),A_(this,t,e),this.i&&t!=4&&Zs(this))}};function fA(t,e){var n=t.o,i=e.indexOf(`
`,n);return i==-1?ya:(n=Number(e.substring(n,i)),isNaN(n)?C_:(i+=1,i+n>e.length?ya:(e=e.slice(i,i+n),t.o=i+n,e)))}A.cancel=function(){this.J=!0,Mn(this)};function Zs(t){t.Y=Date.now()+t.P,b_(t,t.P)}function b_(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Xs(Ve(t.lb,t),e)}function Vo(t){t.C&&(j.clearTimeout(t.C),t.C=null)}A.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(lA(this.j,this.B),this.L!=2&&(Ms(),ze(17)),Mn(this),this.s=2,gs(this)):b_(this,this.Y-t)};function gs(t){t.l.H==0||t.J||X_(t.l,t)}function Mn(t){Vo(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Fc(t.V),v_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ea(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||wa(n.i,t))){if(!t.K&&wa(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)io(n),zo(n);else break e;qc(n),ze(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Xs(Ve(n.ib,n),6e3));if(1>=x_(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ln(n,11)}else if((t.K||n.g==t)&&io(n),!bs(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var r=i.i;r.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Wc(r,r.h),r.h=null))}if(i.F){const C=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(i.Da=C,he(i.I,i.F,C))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=Z_(i,i.J?i.pa:null,i.Y),o.K){F_(i.i,o);var l=o,a=i.L;a&&l.setTimeout(a),l.C&&(Vo(l),Zs(l)),i.g=o}else q_(i);0<n.j.length&&qo(n)}else c[0]!="stop"&&c[0]!="close"||Ln(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ln(n,7):zc(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Ms(4)}catch{}}function dA(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Lo(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function pA(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Lo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function k_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Lo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=pA(t),i=dA(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var P_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function jn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof jn){this.h=t.h,to(this,t.j),this.s=t.s,this.g=t.g,no(this,t.m),this.l=t.l;var e=t.i,n=new Ls;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),vf(this,n),this.o=t.o}else t&&(e=String(t).match(P_))?(this.h=!1,to(this,e[1]||"",!0),this.s=ns(e[2]||""),this.g=ns(e[3]||"",!0),no(this,e[4]),this.l=ns(e[5]||"",!0),vf(this,e[6]||"",!0),this.o=ns(e[7]||"")):(this.h=!1,this.i=new Ls(null,this.h))}jn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(is(e,Ef,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(is(e,Ef,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(is(n,n.charAt(0)=="/"?yA:mA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",is(n,EA)),t.join("")};function Zt(t){return new jn(t)}function to(t,e,n){t.j=n?ns(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function no(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function vf(t,e,n){e instanceof Ls?(t.i=e,wA(t.i,t.h)):(n||(e=is(e,vA)),t.i=new Ls(e,t.h))}function he(t,e,n){t.i.set(e,n)}function $o(t){return he(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ns(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function is(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,_A),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function _A(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ef=/[#\/\?@]/g,mA=/[#\?:]/g,yA=/[#\?]/g,vA=/[#\?@]/g,EA=/#/g;function Ls(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Rn(t){t.g||(t.g=new Map,t.h=0,t.i&&gA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}A=Ls.prototype;A.add=function(t,e){Rn(this),this.i=null,t=Vi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function N_(t,e){Rn(t),e=Vi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function O_(t,e){return Rn(t),e=Vi(t,e),t.g.has(e)}A.forEach=function(t,e){Rn(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};A.ta=function(){Rn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};A.Z=function(t){Rn(this);let e=[];if(typeof t=="string")O_(this,t)&&(e=e.concat(this.g.get(Vi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};A.set=function(t,e){return Rn(this),this.i=null,t=Vi(this,t),O_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};A.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function D_(t,e,n){N_(t,e),0<n.length&&(t.i=null,t.g.set(Vi(t,e),bc(n)),t.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function Vi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function wA(t,e){e&&!t.j&&(Rn(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(N_(this,i),D_(this,s,n))},t)),t.j=e}var IA=class{constructor(t,e){this.g=t,this.map=e}};function M_(t){this.l=t||TA,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ka&&j.g.Ka()&&j.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var TA=10;function L_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function x_(t){return t.h?1:t.g?t.g.size:0}function wa(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Wc(t,e){t.g?t.g.add(e):t.h=e}function F_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}M_.prototype.cancel=function(){if(this.i=U_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function U_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return bc(t.i)}var CA=class{stringify(t){return j.JSON.stringify(t,void 0)}parse(t){return j.JSON.parse(t,void 0)}};function SA(){this.g=new CA}function RA(t,e,n){const i=n||"";try{k_(t,function(s,r){let o=s;qs(s)&&(o=Lc(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function AA(t,e){const n=new Bo;if(j.Image){const i=new Image;i.onload=_r(yr,n,i,"TestLoadImage: loaded",!0,e),i.onerror=_r(yr,n,i,"TestLoadImage: error",!1,e),i.onabort=_r(yr,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=_r(yr,n,i,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function yr(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Wo(t){this.l=t.ec||null,this.j=t.ob||!1}Ae(Wo,jc);Wo.prototype.g=function(){return new Ko(this.l,this.j)};Wo.prototype.i=function(t){return function(){return t}}({});function Ko(t,e){Re.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Kc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ae(Ko,Re);var Kc=0;A=Ko.prototype;A.open=function(t,e){if(this.readyState!=Kc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xs(this)};A.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||j).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,er(this)),this.readyState=Kc};A.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xs(this)),this.g&&(this.readyState=3,xs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;H_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function H_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}A.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?er(this):xs(this),this.readyState==3&&H_(this)}};A.Za=function(t){this.g&&(this.response=this.responseText=t,er(this))};A.Ya=function(t){this.g&&(this.response=t,er(this))};A.ka=function(){this.g&&er(this)};function er(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xs(t)}A.setRequestHeader=function(t,e){this.v.append(t,e)};A.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function xs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ko.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var bA=j.JSON.parse;function me(t){Re.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=B_,this.L=this.M=!1}Ae(me,Re);var B_="",kA=/^https?$/i,PA=["POST","PUT"];A=me.prototype;A.Oa=function(t){this.M=t};A.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ma.g(),this.C=this.u?yf(this.u):yf(ma),this.g.onreadystatechange=Ve(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){wf(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=j.FormData&&t instanceof j.FormData,!(0<=s_(PA,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{$_(this),0<this.B&&((this.L=NA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ve(this.ua,this)):this.A=Uc(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){wf(this,r)}};function NA(t){return ks&&typeof t.timeout=="number"&&t.ontimeout!==void 0}A.ua=function(){typeof Ac<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ne(this,"timeout"),this.abort(8))};function wf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,j_(t),Go(t)}function j_(t){t.F||(t.F=!0,Ne(t,"complete"),Ne(t,"error"))}A.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ne(this,"complete"),Ne(this,"abort"),Go(this))};A.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Go(this,!0)),me.$.N.call(this)};A.La=function(){this.s||(this.G||this.v||this.l?V_(this):this.kb())};A.kb=function(){V_(this)};function V_(t){if(t.h&&typeof Ac<"u"&&(!t.C[1]||Nt(t)!=4||t.da()!=2)){if(t.v&&Nt(t)==4)Uc(t.La,0,t);else if(Ne(t,"readystatechange"),Nt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.I).match(P_)[1]||null;!s&&j.self&&j.self.location&&(s=j.self.location.protocol.slice(0,-1)),i=!kA.test(s?s.toLowerCase():"")}n=i}if(n)Ne(t,"complete"),Ne(t,"success");else{t.m=6;try{var r=2<Nt(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",j_(t)}}finally{Go(t)}}}}function Go(t,e){if(t.g){$_(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ne(t,"ready");try{n.onreadystatechange=i}catch{}}}function $_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}A.isActive=function(){return!!this.g};function Nt(t){return t.g?t.g.readyState:0}A.da=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}};A.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),bA(e)}};function If(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case B_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function OA(t){const e={};t=(t.g&&2<=Nt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(bs(t[i]))continue;var n=tA(t[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}qR(e,function(i){return i.join(", ")})}A.Ia=function(){return this.m};A.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function W_(t){let e="";return Pc(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Gc(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=W_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):he(t,e,n))}function Qi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function K_(t){this.Ga=0,this.j=[],this.l=new Bo,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Qi("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Qi("baseRetryDelayMs",5e3,t),this.hb=Qi("retryDelaySeedMs",1e4,t),this.eb=Qi("forwardChannelMaxRetries",2,t),this.xa=Qi("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new M_(t&&t.concurrentRequestLimit),this.Ja=new SA,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}A=K_.prototype;A.ra=8;A.H=1;function zc(t){if(G_(t),t.H==3){var e=t.W++,n=Zt(t.I);if(he(n,"SID",t.K),he(n,"RID",e),he(n,"TYPE","terminate"),tr(t,n),e=new Qs(t,t.l,e),e.L=2,e.A=$o(Zt(n)),n=!1,j.navigator&&j.navigator.sendBeacon)try{n=j.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&j.Image&&(new Image().src=e.A,n=!0),n||(e.g=em(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Zs(e)}Q_(t)}function zo(t){t.g&&(Yc(t),t.g.cancel(),t.g=null)}function G_(t){zo(t),t.u&&(j.clearTimeout(t.u),t.u=null),io(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function qo(t){if(!L_(t.i)&&!t.m){t.m=!0;var e=t.Na;Ns||__(),Os||(Ns(),Os=!0),xc.add(e,t),t.C=0}}function DA(t,e){return x_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Xs(Ve(t.Na,t,e),J_(t,t.C)),t.C++,!0)}A.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Qs(this,this.l,t);let r=this.s;if(this.U&&(r?(r=a_(r),c_(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=z_(this,s,e),n=Zt(this.I),he(n,"RID",t),he(n,"CVER",22),this.F&&he(n,"X-HTTP-Session-Id",this.F),tr(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(W_(r)))+"&"+e:this.o&&Gc(n,this.o,r)),Wc(this.i,s),this.bb&&he(n,"TYPE","init"),this.P?(he(n,"$req",e),he(n,"SID","null"),s.aa=!0,va(s,n,null)):va(s,n,e),this.H=2}}else this.H==3&&(t?Tf(this,t):this.j.length==0||L_(this.i)||Tf(this))};function Tf(t,e){var n;e?n=e.m:n=t.W++;const i=Zt(t.I);he(i,"SID",t.K),he(i,"RID",n),he(i,"AID",t.V),tr(t,i),t.o&&t.s&&Gc(i,t.o,t.s),n=new Qs(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=z_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Wc(t.i,n),va(n,i,e)}function tr(t,e){t.na&&Pc(t.na,function(n,i){he(e,i,n)}),t.h&&k_({},function(n,i){he(e,i,n)})}function z_(t,e,n){n=Math.min(t.j.length,n);var i=t.h?Ve(t.h.Va,t.h,t):null;e:{var s=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let l=!0;for(let a=0;a<n;a++){let c=s[a].g;const u=s[a].map;if(c-=r,0>c)r=Math.max(0,s[a].g-100),l=!1;else try{RA(u,o,"req"+c+"_")}catch{i&&i(u)}}if(l){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function q_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ns||__(),Os||(Ns(),Os=!0),xc.add(e,t),t.A=0}}function qc(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Xs(Ve(t.Ma,t),J_(t,t.A)),t.A++,!0)}A.Ma=function(){if(this.u=null,Y_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Xs(Ve(this.jb,this),t)}};A.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ze(10),zo(this),Y_(this))};function Yc(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function Y_(t){t.g=new Qs(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Zt(t.wa);he(e,"RID","rpc"),he(e,"SID",t.K),he(e,"AID",t.V),he(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&he(e,"TO",t.qa),he(e,"TYPE","xmlhttp"),tr(t,e),t.o&&t.s&&Gc(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=$o(Zt(e)),n.u=null,n.S=!0,S_(n,t)}A.ib=function(){this.v!=null&&(this.v=null,zo(this),qc(this),ze(19))};function io(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function X_(t,e){var n=null;if(t.g==e){io(t),Yc(t),t.g=null;var i=2}else if(wa(t.i,e))n=e.F,F_(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;i=Hc(),Ne(i,new I_(i,n)),qo(t)}else q_(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(i==1&&DA(t,e)||i==2&&qc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Ln(t,5);break;case 4:Ln(t,10);break;case 3:Ln(t,6);break;default:Ln(t,2)}}}function J_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ln(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=Ve(t.pb,t);n||(n=new jn("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||to(n,"https"),$o(n)),AA(n.toString(),i)}else ze(2);t.H=0,t.h&&t.h.za(e),Q_(t),G_(t)}A.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ze(2)):(this.l.info("Failed to ping google.com"),ze(1))};function Q_(t){if(t.H=0,t.ma=[],t.h){const e=U_(t.i);(e.length!=0||t.j.length!=0)&&(ff(t.ma,e),ff(t.ma,t.j),t.i.i.length=0,bc(t.j),t.j.length=0),t.h.ya()}}function Z_(t,e,n){var i=n instanceof jn?Zt(n):new jn(n);if(i.g!="")e&&(i.g=e+"."+i.g),no(i,i.m);else{var s=j.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new jn(null);i&&to(r,i),e&&(r.g=e),s&&no(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&he(i,n,e),he(i,"VER",t.ra),tr(t,i),i}function em(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new me(new Wo({ob:n})):new me(t.va),e.Oa(t.J),e}A.isActive=function(){return!!this.h&&this.h.isActive(this)};function tm(){}A=tm.prototype;A.Ba=function(){};A.Aa=function(){};A.za=function(){};A.ya=function(){};A.isActive=function(){return!0};A.Va=function(){};function at(t,e){Re.call(this),this.g=new K_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!bs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!bs(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new $i(this)}Ae(at,Re);at.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ze(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Z_(t,null,t.Y),qo(t)};at.prototype.close=function(){zc(this.g)};at.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Lc(t),t=n);e.j.push(new IA(e.fb++,t)),e.H==3&&qo(e)};at.prototype.N=function(){this.g.h=null,delete this.j,zc(this.g),delete this.g,at.$.N.call(this)};function nm(t){Vc.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ae(nm,Vc);function im(){$c.call(this),this.status=1}Ae(im,$c);function $i(t){this.g=t}Ae($i,tm);$i.prototype.Ba=function(){Ne(this.g,"a")};$i.prototype.Aa=function(t){Ne(this.g,new nm(t))};$i.prototype.za=function(t){Ne(this.g,new im)};$i.prototype.ya=function(){Ne(this.g,"b")};function MA(){this.blockSize=-1}function Ut(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ae(Ut,MA);Ut.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Sl(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}Ut.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)Sl(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){Sl(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){Sl(this,i),s=0;break}}this.h=s,this.i+=e};Ut.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function se(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var LA={};function Xc(t){return-128<=t&&128>t?VR(t,function(e){return new se([e|0],0>e?-1:0)}):new se([t|0],0>t?-1:0)}function Ot(t){if(isNaN(t)||!isFinite(t))return vi;if(0>t)return be(Ot(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Ia;return new se(e,0)}function sm(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return be(sm(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ot(Math.pow(e,8)),i=vi,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=Ot(Math.pow(e,r)),i=i.R(r).add(Ot(o))):(i=i.R(n),i=i.add(Ot(o)))}return i}var Ia=4294967296,vi=Xc(0),Ta=Xc(1),Cf=Xc(16777216);A=se.prototype;A.ea=function(){if(st(this))return-be(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Ia+i)*e,e*=Ia}return t};A.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(qt(this))return"0";if(st(this))return"-"+be(this).toString(t);for(var e=Ot(Math.pow(t,6)),n=this,i="";;){var s=ro(n,e).g;n=so(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,qt(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};A.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function qt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function st(t){return t.h==-1}A.X=function(t){return t=so(this,t),st(t)?-1:qt(t)?0:1};function be(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new se(n,~t.h).add(Ta)}A.abs=function(){return st(this)?be(this):this};A.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new se(n,n[n.length-1]&-2147483648?-1:0)};function so(t,e){return t.add(be(e))}A.R=function(t){if(qt(this)||qt(t))return vi;if(st(this))return st(t)?be(this).R(be(t)):be(be(this).R(t));if(st(t))return be(this.R(be(t)));if(0>this.X(Cf)&&0>t.X(Cf))return Ot(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,l=t.D(s)>>>16,a=t.D(s)&65535;n[2*i+2*s]+=o*a,vr(n,2*i+2*s),n[2*i+2*s+1]+=r*a,vr(n,2*i+2*s+1),n[2*i+2*s+1]+=o*l,vr(n,2*i+2*s+1),n[2*i+2*s+2]+=r*l,vr(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new se(n,0)};function vr(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Zi(t,e){this.g=t,this.h=e}function ro(t,e){if(qt(e))throw Error("division by zero");if(qt(t))return new Zi(vi,vi);if(st(t))return e=ro(be(t),e),new Zi(be(e.g),be(e.h));if(st(e))return e=ro(t,be(e)),new Zi(be(e.g),e.h);if(30<t.g.length){if(st(t)||st(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ta,i=e;0>=i.X(t);)n=Sf(n),i=Sf(i);var s=ii(n,1),r=ii(i,1);for(i=ii(i,2),n=ii(n,2);!qt(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=ii(i,1),n=ii(n,1)}return e=so(t,s.R(e)),new Zi(s,e)}for(s=vi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=Ot(n),o=r.R(e);st(o)||0<o.X(t);)n-=i,r=Ot(n),o=r.R(e);qt(r)&&(r=Ta),s=s.add(r),t=so(t,o)}return new Zi(s,t)}A.gb=function(t){return ro(this,t).h};A.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new se(n,this.h&t.h)};A.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new se(n,this.h|t.h)};A.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new se(n,this.h^t.h)};function Sf(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new se(n,t.h)}function ii(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new se(s,t.h)}at.prototype.send=at.prototype.u;at.prototype.open=at.prototype.m;at.prototype.close=at.prototype.close;Bc.NO_ERROR=0;Bc.TIMEOUT=8;Bc.HTTP_ERROR=6;cA.COMPLETE="complete";uA.EventType=Js;Js.OPEN="a";Js.CLOSE="b";Js.ERROR="c";Js.MESSAGE="d";Re.prototype.listen=Re.prototype.O;me.prototype.listenOnce=me.prototype.P;me.prototype.getLastError=me.prototype.Sa;me.prototype.getLastErrorCode=me.prototype.Ia;me.prototype.getStatus=me.prototype.da;me.prototype.getResponseJson=me.prototype.Wa;me.prototype.getResponseText=me.prototype.ja;me.prototype.send=me.prototype.ha;me.prototype.setWithCredentials=me.prototype.Oa;Ut.prototype.digest=Ut.prototype.l;Ut.prototype.reset=Ut.prototype.reset;Ut.prototype.update=Ut.prototype.j;se.prototype.add=se.prototype.add;se.prototype.multiply=se.prototype.R;se.prototype.modulo=se.prototype.gb;se.prototype.compare=se.prototype.X;se.prototype.toNumber=se.prototype.ea;se.prototype.toString=se.prototype.toString;se.prototype.getBits=se.prototype.D;se.fromNumber=Ot;se.fromString=sm;var xA=se;const Rf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Me.UNAUTHENTICATED=new Me(null),Me.GOOGLE_CREDENTIALS=new Me("google-credentials-uid"),Me.FIRST_PARTY=new Me("first-party-uid"),Me.MOCK_USER=new Me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nr="10.11.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new Hs("@firebase/firestore");function et(t,...e){if(Pi.logLevel<=Q.DEBUG){const n=e.map(Qc);Pi.debug(`Firestore (${nr}): ${t}`,...n)}}function Jc(t,...e){if(Pi.logLevel<=Q.ERROR){const n=e.map(Qc);Pi.error(`Firestore (${nr}): ${t}`,...n)}}function FA(t,...e){if(Pi.logLevel<=Q.WARN){const n=e.map(Qc);Pi.warn(`Firestore (${nr}): ${t}`,...n)}}function Qc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(t="Unexpected state"){const e=`FIRESTORE (${nr}) INTERNAL ASSERTION FAILED: `+t;throw Jc(e),new Error(e)}function Ca(t,e){t||Zc()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class He extends Bt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Me.UNAUTHENTICATED))}shutdown(){}}class HA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class BA{constructor(e){this.t=e,this.currentUser=Me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=a=>this.i!==i?(i=this.i,n(a)):Promise.resolve();let r=new Ei;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ei,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const a=r;e.enqueueRetryable(async()=>{await a.promise,await s(this.currentUser)})},l=a=>{et("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(et("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ei)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(et("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ca(typeof i.accessToken=="string"),new rm(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ca(e===null||typeof e=="string"),new Me(e)}}class jA{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=Me.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class VA{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new jA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $A{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=r=>{r.error!=null&&et("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,et("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{et("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):et("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ca(typeof n.token=="string"),this.R=n.token,new $A(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=KA(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function om(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n,i,s,r,o,l,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=a,this.useFetchStreams=c}}class oo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new oo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof oo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Af,q;(q=Af||(Af={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new xA([4294967295,4294967295],0);function Rl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,n,i=1e3,s=1.5,r=6e4){this.oi=e,this.timerId=n,this.Mo=i,this.xo=s,this.Oo=r,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),i=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-i);s>0&&et("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Ei,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,l=new eu(e,n,o,s,r);return l.start(i),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new He(Ue.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function YA(t,e){if(Jc("AsyncQueue",`${e}: ${t}`),om(t))return new He(Ue.UNAVAILABLE,`${e}: ${t}`);throw t}var bf,kf;(kf=bf||(bf={})).j_="default",kf.Cache="cache";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=Me.UNAUTHENTICATED,this.clientId=GA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{et("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(et("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new He(Ue.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ei;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=YA(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new Map;function JA(t,e,n,i){if(e===!0&&i===!0)throw new He(Ue.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function QA(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Zc()}function ZA(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new He(Ue.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=QA(t);throw new He(Ue.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new He(Ue.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new He(Ue.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lm((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new He(Ue.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new He(Ue.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new He(Ue.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class am{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new He(Ue.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new He(Ue.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nf(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new UA;switch(i.type){case"firstParty":return new VA(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new He(Ue.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Pf.get(n);i&&(et("ComponentProvider","Removing Datastore"),Pf.delete(n),i.terminate())}(this),Promise.resolve()}}function eb(t,e,n,i={}){var s;const r=(t=ZA(t,am))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&FA("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let l,a;if(typeof i.mockUserToken=="string")l=i.mockUserToken,a=Me.MOCK_USER;else{l=aw(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new He(Ue.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Me(c)}t._authCredentials=new HA(new rm(l,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new qA(this,"async_queue_retry"),this.cu=()=>{const n=Rl();n&&et("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Rl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=Rl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new Ei;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!om(e))throw e;et("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(i=>{this.ou=i,this._u=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(i);throw Jc("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this._u=!1,i))));return this.nu=n,n}enqueueAfterDelay(e,n,i){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const s=eu.createAndSchedule(this,e,n,i,r=>this.Iu(r));return this.su.push(s),s}lu(){this.ou&&Zc()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}class nb extends am{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=function(){return new tb}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||sb(this),this._firestoreClient.terminate()}}function ib(t,e){const n=typeof t=="object"?t:up(),i=typeof t=="string"?t:e||"(default)",s=ap(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=ow("firestore");r&&eb(s,...r)}return s}function sb(t){var e,n,i;const s=t._freezeSettings(),r=function(l,a,c,u){return new zA(l,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,lm(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new XA(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}(function(e,n=!0){(function(s){nr=s})(Cn),Ft(new wt("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),l=new nb(new BA(i.getProvider("auth-internal")),new WA(i.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new He(Ue.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oo(c.options.projectId,u)}(o,s),o);return r=Object.assign({useFetchStreams:n},r),l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),tt(Rf,"4.6.0",e),tt(Rf,"4.6.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="firebasestorage.googleapis.com",rb="storageBucket",ob=2*60*1e3,lb=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Bt{constructor(e,n,i=0){super(Al(e),`Firebase Storage: ${n} (${Al(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,jt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Al(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ht;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ht||(Ht={}));function Al(t){return"storage/"+t}function ab(){const t="An unknown error occurred, please check the error payload for server response.";return new jt(Ht.UNKNOWN,t)}function cb(){return new jt(Ht.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ub(){return new jt(Ht.CANCELED,"User canceled the upload/download.")}function hb(t){return new jt(Ht.INVALID_URL,"Invalid URL '"+t+"'.")}function fb(t){return new jt(Ht.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Of(t){return new jt(Ht.INVALID_ARGUMENT,t)}function um(){return new jt(Ht.APP_DELETED,"The Firebase app was deleted.")}function db(t){return new jt(Ht.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=mt.makeFromUrl(e,n)}catch{return new mt(e,"")}if(i.path==="")return i;throw fb(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),a={bucket:1,path:3};function c(B){B.path_=decodeURIComponent(B.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),y={bucket:1,path:3},C=n===cm?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",N=new RegExp(`^https?://${C}/${s}/${b}`,"i"),L=[{regex:l,indices:a,postModify:r},{regex:g,indices:y,postModify:c},{regex:N,indices:{bucket:1,path:2},postModify:c}];for(let B=0;B<L.length;B++){const re=L[B],H=re.regex.exec(e);if(H){const ye=H[re.indices.bucket];let ve=H[re.indices.path];ve||(ve=""),i=new mt(ye,ve),re.postModify(i);break}}if(i==null)throw hb(e);return i}}class pb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(t,e,n){let i=1,s=null,r=null,o=!1,l=0;function a(){return l===2}let c=!1;function u(...b){c||(c=!0,e.apply(null,b))}function h(b){s=setTimeout(()=>{s=null,t(g,a())},b)}function d(){r&&clearTimeout(r)}function g(b,...N){if(c){d();return}if(b){d(),u.call(null,b,...N);return}if(a()||o){d(),u.call(null,b,...N);return}i<64&&(i*=2);let L;l===1?(l=2,L=0):L=(i+Math.random())*1e3,h(L)}let y=!1;function C(b){y||(y=!0,d(),!c&&(s!==null?(b||(l=2),clearTimeout(s),h(0)):b||(l=1)))}return h(0),r=setTimeout(()=>{o=!0,C(!0)},n),C}function _b(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(t){return t!==void 0}function Df(t,e,n,i){if(i<e)throw Of(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Of(`Invalid value for '${t}'. Expected ${n} or less.`)}function yb(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lo;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(lo||(lo={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n,i,s,r,o,l,a,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,y)=>{this.resolve_=g,this.reject_=y,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Er(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=l=>{const a=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const l=r.getErrorCode()===lo.NO_ERROR,a=r.getStatus();if(!l||vb(a,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===lo.ABORT;i(!1,new Er(!1,null,u));return}const c=this.successCodes_.indexOf(a)!==-1;i(!0,new Er(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());mb(a)?r(a):r()}catch(a){o(a)}else if(l!==null){const a=ab();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(s.canceled){const a=this.appDelete_?um():ub();o(a)}else{const a=cb();o(a)}};this.canceled_?n(!1,new Er(!1,null,!0)):this.backoffId_=gb(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&_b(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Er{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function wb(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ib(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Tb(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Cb(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Sb(t,e,n,i,s,r,o=!0){const l=yb(t.urlParams),a=t.url+l,c=Object.assign({},t.headers);return Tb(c,e),wb(c,n),Ib(c,r),Cb(c,i),new Eb(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ab(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n){this._service=e,n instanceof mt?this._location=n:this._location=mt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ao(e,n)}get root(){const e=new mt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ab(this._location.path)}get storage(){return this._service}get parent(){const e=Rb(this._location.path);if(e===null)return null;const n=new mt(this._location.bucket,e);return new ao(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw db(e)}}function Mf(t,e){const n=e==null?void 0:e[rb];return n==null?null:mt.makeFromBucketSpec(n,t)}class bb{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=cm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ob,this._maxUploadRetryTime=lb,this._requests=new Set,s!=null?this._bucket=mt.makeFromBucketSpec(s,this._host):this._bucket=Mf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mt.makeFromBucketSpec(this._url,e):this._bucket=Mf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Df("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Df("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ao(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new pb(um());{const o=Sb(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const Lf="@firebase/storage",xf="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="storage";function Pb(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new bb(n,i,s,e,Cn)}function Nb(){Ft(new wt(kb,Pb,"PUBLIC").setMultipleInstances(!0)),tt(Lf,xf,""),tt(Lf,xf,"esm2017")}Nb();function Ob(t){return Mb({initialUser:t,dependencies:{popupRedirectResolver:p0,persistence:[ST,dT,Fp]}})}const Db=Symbol("VueFireAuth");function Mb({dependencies:t,initialUser:e}){return(n,i)=>{const[s,r]=Lb(n,i,e,t);X0(s,r)}}function Lb(t,e,n,i,s=iT(t,i)){const r=z0(t,e).run(()=>Ua(n));return q0.set(t,r),e.provide(Db,s),[r,s]}function xb(t,{firebaseApp:e,modules:n=[]}){t.provide(Gp,e);for(const i of n)i(e,t)}const hm=cp({apiKey:"AIzaSyBB2uOAwtqemsqClsjcFSMubP5bnW8uO28",authDomain:"chanadu-class-ranker.firebaseapp.com",projectId:"chanadu-class-ranker",storageBucket:"chanadu-class-ranker.appspot.com",messagingSenderId:"654875362146",appId:"1:654875362146:web:11cc0d2c6d574ae51fa23b",measurementId:"G-MFTJP84Y1K"});ib(hm);const tu=Dv(Uv);tu.use(XE);tu.use(xb,{firebaseApp:hm,modules:[Ob()]});tu.mount("#app");
