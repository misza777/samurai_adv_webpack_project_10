!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!w[e]||!b[e])return;for(var t in b[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(h[t]=n[t]);0==--y&&0===m&&j()}(e,t),n&&n(e,t)};var t,r=!0,o="59f6f3492ee1da175de6",i={},c=[],a=[];function d(e){var n=I[e];if(!n)return P;var r=function(r){return n.hot.active?(I[r]?-1===I[r].parents.indexOf(e)&&I[r].parents.push(e):(c=[e],t=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),P(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(n){P[e]=n}}};for(var i in P)Object.prototype.hasOwnProperty.call(P,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===u&&f("prepare"),m++,P.e(e).then(n,(function(e){throw n(),e}));function n(){m--,"prepare"===u&&(g[e]||O(e),0===m&&0===y&&j())}},r.t=function(e,n){return 1&n&&(e=r(e)),P.t(e,-2&n)},r}function s(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:_,apply:D,status:function(e){if(!e)return u;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:i[e]};return t=void 0,n}var l=[],u="idle";function f(e){u=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var p,h,v,y=0,m=0,g={},b={},w={};function E(e){return+e+""===e?+e:e}function _(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=e,f("check"),(n=1e4,n=n||1e4,new Promise((function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,i=P.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=n,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+i+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(e){return void t(e)}e(n)}}}))).then((function(e){if(!e)return f("idle"),null;b={},g={},w=e.c,v=e.h,f("prepare");var n=new Promise((function(e,n){p={resolve:e,reject:n}}));h={};return O(0),"prepare"===u&&0===m&&0===y&&j(),n}));var n}function O(e){w[e]?(b[e]=!0,y++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=P.p+""+e+"."+o+".hot-update.js",document.head.appendChild(n)}(e)):g[e]=!0}function j(){f("ready");var e=p;if(p=null,e)if(r)Promise.resolve().then((function(){return D(r)})).then((function(n){e.resolve(n)}),(function(n){e.reject(n)}));else{var n=[];for(var t in h)Object.prototype.hasOwnProperty.call(h,t)&&n.push(E(t));e.resolve(n)}}function D(n){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var t,r,a,d,s;function l(e){for(var n=[e],t={},r=n.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((d=I[i])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var a=0;a<d.parents.length;a++){var s=d.parents[a],l=I[s];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===n.indexOf(s)&&(l.hot._acceptedDependencies[i]?(t[s]||(t[s]=[]),p(t[s],[i])):(delete t[s],n.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var y={},m=[],g={},b=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var _ in h)if(Object.prototype.hasOwnProperty.call(h,_)){var O;s=E(_);var j=!1,D=!1,x=!1,k="";switch((O=h[_]?l(s):{type:"disposed",moduleId:_}).chain&&(k="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(j=new Error("Aborted because of self decline: "+O.moduleId+k));break;case"declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+k));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(O),n.ignoreUnaccepted||(j=new Error("Aborted because "+s+" is not accepted"+k));break;case"accepted":n.onAccepted&&n.onAccepted(O),D=!0;break;case"disposed":n.onDisposed&&n.onDisposed(O),x=!0;break;default:throw new Error("Unexception type "+O.type)}if(j)return f("abort"),Promise.reject(j);if(D)for(s in g[s]=h[s],p(m,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,s)&&(y[s]||(y[s]=[]),p(y[s],O.outdatedDependencies[s]));x&&(p(m,[O.moduleId]),g[s]=b)}var H,A=[];for(r=0;r<m.length;r++)s=m[r],I[s]&&I[s].hot._selfAccepted&&g[s]!==b&&A.push({module:s,errorHandler:I[s].hot._selfAccepted});f("dispose"),Object.keys(w).forEach((function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)}));for(var L,S,M=m.slice();M.length>0;)if(s=M.pop(),d=I[s]){var U={},q=d.hot._disposeHandlers;for(a=0;a<q.length;a++)(t=q[a])(U);for(i[s]=U,d.hot.active=!1,delete I[s],delete y[s],a=0;a<d.children.length;a++){var B=I[d.children[a]];B&&((H=B.parents.indexOf(s))>=0&&B.parents.splice(H,1))}}for(s in y)if(Object.prototype.hasOwnProperty.call(y,s)&&(d=I[s]))for(S=y[s],a=0;a<S.length;a++)L=S[a],(H=d.children.indexOf(L))>=0&&d.children.splice(H,1);for(s in f("apply"),o=v,g)Object.prototype.hasOwnProperty.call(g,s)&&(e[s]=g[s]);var R=null;for(s in y)if(Object.prototype.hasOwnProperty.call(y,s)&&(d=I[s])){S=y[s];var T=[];for(r=0;r<S.length;r++)if(L=S[r],t=d.hot._acceptedDependencies[L]){if(-1!==T.indexOf(t))continue;T.push(t)}for(r=0;r<T.length;r++){t=T[r];try{t(S)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:s,dependencyId:S[r],error:e}),n.ignoreErrored||R||(R=e)}}}for(r=0;r<A.length;r++){var C=A[r];s=C.module,c=[s];try{P(s)}catch(e){if("function"==typeof C.errorHandler)try{C.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:t,originalError:e}),n.ignoreErrored||R||(R=t),R||(R=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:s,error:e}),n.ignoreErrored||R||(R=e)}}return R?(f("fail"),Promise.reject(R)):(f("idle"),new Promise((function(e){e(m)})))}var I={};function P(n){if(I[n])return I[n].exports;var t=I[n]={i:n,l:!1,exports:{},hot:s(n),parents:(a=c,c=[],a),children:[]};return e[n].call(t.exports,t,t.exports,d(n)),t.l=!0,t.exports}P.m=e,P.c=I,P.d=function(e,n,t){P.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,n){if(1&n&&(e=P(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(P.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)P.d(t,r,function(n){return e[n]}.bind(null,r));return t},P.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(n,"a",n),n},P.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},P.p="./",P.h=function(){return o},d(0)(P.s=0)}([function(e,n,t){"use strict";t.r(n);t(1);function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){var n=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.showLoading=function(){n.spinnerEl.classList.add("spinner--visible")},this.hideLoading=function(){n.spinnerEl.classList.remove("spinner--visible")},this.listBreeds=function(){var e="".concat(n.apiUrl,"/breeds/list/all");fetch(e).then((function(e){return e.json()})).then((function(e){e.message})).catch((function(e){return console.error("masz kurwa error:",e)}))},this.getRandomImage=function(){fetch("".concat(n.apiUrl,"/breeds/image/random")).then((function(e){return e.json()})).then((function(e){e.message,n.imgEl.setAttribute("src",e.message),n.bcgEl.style.backgroundImage="url('".concat(e.message,"')")})).catch((function(e){return console.log(e)}))},this.getRandomImageByBreed=function(e){fetch("".concat(n.apiUrl,"/breed/").concat(e,"/images/random")).then((function(e){return e.json()})).then((function(e){e.message,n.imgEl.setAttribute("src",e.message),n.bcgEl.style.backgroundImage="url('".concat(e.message,"')")}))},this.addBreed=function(e,t){var r,o;void 0===t?(r=e,o=e):(r="".concat(e,"/").concat(t),o="".concat(e,"/").concat(t));var i=document.createElement("div"),c=document.createElement("div");i.classList.add("tiles__tile"),c.classList.add("tiles__tile-content"),c.innerText=r,c.addEventListener("click",(function(){window.scrollTo(0,0),n.showLoading(),n.getRandomImageByBreed(o),n.hideLoading()})),i.appendChild(c),n.tilesEl.appendChild(i)},this.showAllBreeds=function(){var e="".concat(n.apiUrl,"/breeds/list/all");fetch(e).then((function(e){return e.json()})).then((function(e){var t=e.message;for(var r in t)if(0===t[r].length)n.addBreed(r);else{var o=!0,i=!1,c=void 0;try{for(var a,d=t[r][Symbol.iterator]();!(o=(a=d.next()).done);o=!0){var s=a.value;n.addBreed(r,s)}}catch(e){i=!0,c=e}finally{try{o||null==d.return||d.return()}finally{if(i)throw c}}}}))},this.apiUrl="https://dog.ceo/api",this.imgEl=document.querySelector(".featured-dog img"),this.bcgEl=document.querySelector(".featured-dog__background"),this.tilesEl=document.querySelector(".tiles"),this.spinnerEl=document.querySelector(".spinner"),this.init()}var n,t,o;return n=e,(t=[{key:"init",value:function(){this.showLoading(),this.getRandomImage(),this.hideLoading(),this.showAllBreeds()}}])&&r(n.prototype,t),o&&r(n,o),e}();document.addEventListener("DOMContentLoaded",(function(){new o}))},function(e,n,t){}]);