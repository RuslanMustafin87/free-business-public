/*! For license information please see index.js.LICENSE.txt */
!function(){var e={695:function(e,t,n){e.exports=function(e,t,n,i){"use strict";const r=e=>e&&"object"==typeof e&&"default"in e?e:{default:e},s=r(e),o=r(n),l=r(i),a="5.2.0";class c extends l.default{constructor(e,n){super(),(e=t.getElement(e))&&(this._element=e,this._config=this._getConfig(n),s.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){s.default.remove(this._element,this.constructor.DATA_KEY),o.default.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,n,i=!0){t.executeAfterTransition(e,n,i)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return s.default.get(t.getElement(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return a}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}return c}(n(493),n(72),n(286),n(705))},48:function(e,t,n){e.exports=function(e,t,n,i,r,s){"use strict";const o=e=>e&&"object"==typeof e&&"default"in e?e:{default:e},l=o(t),a=o(n),c=o(i),u=o(r),d=o(s),f="carousel",h=".bs.carousel",p=".data-api",g=500,m="next",_="prev",b="left",v="right",y=`slide${h}`,E=`slid${h}`,w=`keydown${h}`,A=`mouseenter${h}`,T=`mouseleave${h}`,C=`dragstart${h}`,S=`load${h}${p}`,x=`click${h}${p}`,I="carousel",O="active",k="slide",L="carousel-item-end",D="carousel-item-start",N="carousel-item-next",$="carousel-item-prev",j=".active",M=".carousel-item",P=j+M,X=".carousel-item img",R=".carousel-indicators",q="[data-bs-slide], [data-bs-slide-to]",B='[data-bs-ride="carousel"]',V={ArrowLeft:v,ArrowRight:b},F={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Q={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Y extends d.default{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=c.default.findOne(R,this._element),this._addEventListeners(),this._config.ride===I&&this.cycle()}static get Default(){return F}static get DefaultType(){return Q}static get NAME(){return f}next(){this._slide(m)}nextWhenVisible(){!document.hidden&&e.isVisible(this._element)&&this.next()}prev(){this._slide(_)}pause(){this._isSliding&&e.triggerTransitionEnd(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?l.default.one(this._element,E,(()=>this.cycle())):this.cycle())}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding)return void l.default.one(this._element,E,(()=>this.to(e)));const n=this._getItemIndex(this._getActive());if(n===e)return;const i=e>n?m:_;this._slide(i,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&l.default.on(this._element,w,(e=>this._keydown(e))),"hover"===this._config.pause&&(l.default.on(this._element,A,(()=>this.pause())),l.default.on(this._element,T,(()=>this._maybeEnableCycle()))),this._config.touch&&u.default.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const e of c.default.find(X,this._element))l.default.on(e,C,(e=>e.preventDefault()));const e={leftCallback:()=>this._slide(this._directionToOrder(b)),rightCallback:()=>this._slide(this._directionToOrder(v)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),g+this._config.interval))}};this._swipeHelper=new u.default(this._element,e)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=V[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=c.default.findOne(j,this._indicatorsElement);t.classList.remove(O),t.removeAttribute("aria-current");const n=c.default.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(O),n.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(t,n=null){if(this._isSliding)return;const i=this._getActive(),r=t===m,s=n||e.getNextActiveElement(this._getItems(),i,r,this._config.wrap);if(s===i)return;const o=this._getItemIndex(s),a=e=>l.default.trigger(this._element,e,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(a(y).defaultPrevented)return;if(!i||!s)return;const c=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=s;const u=r?D:L,d=r?N:$;s.classList.add(d),e.reflow(s),i.classList.add(u),s.classList.add(u);const f=()=>{s.classList.remove(u,d),s.classList.add(O),i.classList.remove(O,d,u),this._isSliding=!1,a(E)};this._queueCallback(f,i,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(k)}_getActive(){return c.default.findOne(P,this._element)}_getItems(){return c.default.find(M,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return e.isRTL()?t===b?_:m:t===b?m:_}_orderToDirection(t){return e.isRTL()?t===_?b:v:t===_?v:b}static jQueryInterface(e){return this.each((function(){const t=Y.getOrCreateInstance(this,e);if("number"!=typeof e){if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}else t.to(e)}))}}return l.default.on(document,x,q,(function(t){const n=e.getElementFromSelector(this);if(!n||!n.classList.contains(I))return;t.preventDefault();const i=Y.getOrCreateInstance(n),r=this.getAttribute("data-bs-slide-to");return r?(i.to(r),void i._maybeEnableCycle()):"next"===a.default.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),l.default.on(window,S,(()=>{const e=c.default.find(B);for(const t of e)Y.getOrCreateInstance(t)})),e.defineJQueryPlugin(Y),Y}(n(72),n(286),n(175),n(737),n(814),n(695))},493:function(e){e.exports=function(){"use strict";const e=new Map;return{set(t,n,i){e.has(t)||e.set(t,new Map);const r=e.get(t);r.has(n)||0===r.size?r.set(n,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get(t,n){return e.has(t)&&e.get(t).get(n)||null},remove(t,n){if(!e.has(t))return;const i=e.get(t);i.delete(n),0===i.size&&e.delete(t)}}}()},286:function(e,t,n){e.exports=function(e){"use strict";const t=/[^.]*(?=\..*)\.|.*/,n=/\..*/,i=/::\d+$/,r={};let s=1;const o={mouseenter:"mouseover",mouseleave:"mouseout"},l=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function a(e,t){return t&&`${t}::${s++}`||e.uidEvent||s++}function c(e){const t=a(e);return e.uidEvent=t,r[t]=r[t]||{},r[t]}function u(e,t){return function n(i){return v(i,{delegateTarget:e}),n.oneOff&&b.off(e,i.type,t),t.apply(e,[i])}}function d(e,t,n){return function i(r){const s=e.querySelectorAll(t);for(let{target:o}=r;o&&o!==this;o=o.parentNode)for(const l of s)if(l===o)return v(r,{delegateTarget:o}),i.oneOff&&b.off(e,r.type,t,n),n.apply(o,[r])}}function f(e,t,n=null){return Object.values(e).find((e=>e.callable===t&&e.delegationSelector===n))}function h(e,t,n){const i="string"==typeof t,r=i?n:t||n;let s=_(e);return l.has(s)||(s=e),[i,r,s]}function p(e,n,i,r,s){if("string"!=typeof n||!e)return;let[l,p,g]=h(n,i,r);if(n in o){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};p=e(p)}const m=c(e),_=m[g]||(m[g]={}),b=f(_,p,l?i:null);if(b)return void(b.oneOff=b.oneOff&&s);const v=a(p,n.replace(t,"")),y=l?d(e,i,p):u(e,p);y.delegationSelector=l?i:null,y.callable=p,y.oneOff=s,y.uidEvent=v,_[v]=y,e.addEventListener(g,y,l)}function g(e,t,n,i,r){const s=f(t[n],i,r);s&&(e.removeEventListener(n,s,Boolean(r)),delete t[n][s.uidEvent])}function m(e,t,n,i){const r=t[n]||{};for(const s of Object.keys(r))if(s.includes(i)){const i=r[s];g(e,t,n,i.callable,i.delegationSelector)}}function _(e){return e=e.replace(n,""),o[e]||e}const b={on(e,t,n,i){p(e,t,n,i,!1)},one(e,t,n,i){p(e,t,n,i,!0)},off(e,t,n,r){if("string"!=typeof t||!e)return;const[s,o,l]=h(t,n,r),a=l!==t,u=c(e),d=u[l]||{},f=t.startsWith(".");if(void 0===o){if(f)for(const n of Object.keys(u))m(e,u,n,t.slice(1));for(const n of Object.keys(d)){const r=n.replace(i,"");if(!a||t.includes(r)){const t=d[n];g(e,u,l,t.callable,t.delegationSelector)}}}else{if(!Object.keys(d).length)return;g(e,u,l,o,s?n:null)}},trigger(t,n,i){if("string"!=typeof n||!t)return null;const r=e.getjQuery();let s=null,o=!0,l=!0,a=!1;n!==_(n)&&r&&(s=r.Event(n,i),r(t).trigger(s),o=!s.isPropagationStopped(),l=!s.isImmediatePropagationStopped(),a=s.isDefaultPrevented());let c=new Event(n,{bubbles:o,cancelable:!0});return c=v(c,i),a&&c.preventDefault(),l&&t.dispatchEvent(c),c.defaultPrevented&&s&&s.preventDefault(),c}};function v(e,t){for(const[n,i]of Object.entries(t||{}))try{e[n]=i}catch(t){Object.defineProperty(e,n,{configurable:!0,get(){return i}})}return e}return b}(n(72))},175:function(e){e.exports=function(){"use strict";function e(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!=typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function t(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}return{setDataAttribute(e,n,i){e.setAttribute(`data-bs-${t(n)}`,i)},removeDataAttribute(e,n){e.removeAttribute(`data-bs-${t(n)}`)},getDataAttributes(t){if(!t)return{};const n={},i=Object.keys(t.dataset).filter((e=>e.startsWith("bs")&&!e.startsWith("bsConfig")));for(const r of i){let i=r.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),n[i]=e(t.dataset[r])}return n},getDataAttribute(n,i){return e(n.getAttribute(`data-bs-${t(i)}`))}}}()},737:function(e,t,n){e.exports=function(e){"use strict";return{find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter((e=>e.matches(t)))},parents(e,t){const n=[];let i=e.parentNode.closest(t);for(;i;)n.push(i),i=i.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const n=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(",");return this.find(n,t).filter((t=>!e.isDisabled(t)&&e.isVisible(t)))}}}(n(72))},705:function(e,t,n){e.exports=function(e,t){"use strict";const n=(e=>e&&"object"==typeof e&&"default"in e?e:{default:e})(t);class i{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(t,i){const r=e.isElement(i)?n.default.getDataAttribute(i,"config"):{};return{...this.constructor.Default,..."object"==typeof r?r:{},...e.isElement(i)?n.default.getDataAttributes(i):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,n=this.constructor.DefaultType){for(const i of Object.keys(n)){const r=n[i],s=t[i],o=e.isElement(s)?"element":e.toType(s);if(!new RegExp(r).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${r}".`)}}}return i}(n(72),n(175))},72:function(e,t){!function(e){"use strict";const t=1e6,n=1e3,i="transitionend",r=e=>null==e?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),s=e=>{do{e+=Math.floor(Math.random()*t)}while(document.getElementById(e));return e},o=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t},l=e=>{const t=o(e);return t&&document.querySelector(t)?t:null},a=e=>{const t=o(e);return t?document.querySelector(t):null},c=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:i}=window.getComputedStyle(e);const r=Number.parseFloat(t),s=Number.parseFloat(i);return r||s?(t=t.split(",")[0],i=i.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(i))*n):0},u=e=>{e.dispatchEvent(new Event(i))},d=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),f=e=>d(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,h=e=>{if(!d(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const t=e.closest("summary");if(t&&t.parentNode!==n)return!1;if(null===t)return!1}return t},p=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),g=e=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?g(e.parentNode):null},m=()=>{},_=e=>{e.offsetHeight},b=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,v=[],y=e=>{"loading"===document.readyState?(v.length||document.addEventListener("DOMContentLoaded",(()=>{for(const e of v)e()})),v.push(e)):e()},E=()=>"rtl"===document.documentElement.dir,w=e=>{y((()=>{const t=b();if(t){const n=e.NAME,i=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=i,e.jQueryInterface)}}))},A=e=>{"function"==typeof e&&e()},T=(e,t,n=!0)=>{if(!n)return void A(e);const r=5,s=c(t)+r;let o=!1;const l=({target:n})=>{n===t&&(o=!0,t.removeEventListener(i,l),A(e))};t.addEventListener(i,l),setTimeout((()=>{o||u(t)}),s)},C=(e,t,n,i)=>{const r=e.length;let s=e.indexOf(t);return-1===s?!n&&i?e[r-1]:e[0]:(s+=n?1:-1,i&&(s=(s+r)%r),e[Math.max(0,Math.min(s,r-1))])};e.defineJQueryPlugin=w,e.execute=A,e.executeAfterTransition=T,e.findShadowRoot=g,e.getElement=f,e.getElementFromSelector=a,e.getNextActiveElement=C,e.getSelectorFromElement=l,e.getTransitionDurationFromElement=c,e.getUID=s,e.getjQuery=b,e.isDisabled=p,e.isElement=d,e.isRTL=E,e.isVisible=h,e.noop=m,e.onDOMContentLoaded=y,e.reflow=_,e.toType=r,e.triggerTransitionEnd=u,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}(t)},814:function(e,t,n){e.exports=function(e,t,n){"use strict";const i=e=>e&&"object"==typeof e&&"default"in e?e:{default:e},r=i(e),s=i(t),o="swipe",l=".bs.swipe",a=`touchstart${l}`,c=`touchmove${l}`,u=`touchend${l}`,d=`pointerdown${l}`,f=`pointerup${l}`,h="touch",p="pen",g="pointer-event",m=40,_={endCallback:null,leftCallback:null,rightCallback:null},b={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class v extends r.default{constructor(e,t){super(),this._element=e,e&&v.isSupported()&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return _}static get DefaultType(){return b}static get NAME(){return o}dispose(){s.default.off(this._element,l)}_start(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),n.execute(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=m)return;const t=e/this._deltaX;this._deltaX=0,t&&n.execute(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(s.default.on(this._element,d,(e=>this._start(e))),s.default.on(this._element,f,(e=>this._end(e))),this._element.classList.add(g)):(s.default.on(this._element,a,(e=>this._start(e))),s.default.on(this._element,c,(e=>this._move(e))),s.default.on(this._element,u,(e=>this._end(e))))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===p||e.pointerType===h)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}return v}(n(705),n(286),n(72))}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,n),s.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"}(),function(){"use strict";n(48);var e=n.p+"images/brand.b6ec20e5.svg",t=n.p+"images/laptop.e88e8623.png",i=n.p+"images/laptop1.c3f5a4b7.webp",r=n.p+"images/laptop2.075a4ef7.webp",s=n.p+"images/Layer26.cb5c3e39.webp",o=n.p+"images/Layer22.73b685ab.webp",l=n.p+"images/Layer25.9954f63c.webp",a=n.p+"images/Layer23.60465817.webp";brandImg.src=e,laptopImg0.src=t,laptopImg1.src=i,laptopImg2.src=r,client1.src=s,client2.src=o,client3.src=l,client4.src=a;const c=document.getElementById("buttonOpenNav"),u=document.getElementById("buttonCloseNav"),d=document.getElementById("navbarContent");c.onclick=function(){d.classList.add("show-collapse")},u.onclick=function(){d.classList.remove("show-collapse")};Array.from(document.querySelectorAll(".nav__link")).forEach((e=>{e.addEventListener("click",(e=>{d.classList.remove("show-collapse")}))}))}()}();