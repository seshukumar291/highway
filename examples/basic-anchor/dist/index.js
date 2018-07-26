!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){var n;window,n=function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e){function i(){}i.prototype={on:function(t,e,i){var n=this.e||(this.e={});return(n[t]||(n[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var n=this;function r(){n.off(t,r),e.apply(i,arguments)}return r._=e,this.on(t,r,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),n=0,r=i.length;n<r;n++)i[n].fn.apply(i[n].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),n=i[t],r=[];if(n&&e)for(var s=0,o=n.length;s<o;s++)n[s].fn!==e&&n[s].fn._!==e&&r.push(n[s]);return r.length?i[t]=r:delete i[t],this}},t.exports=i},function(t,e,i){"use strict";i.r(e);var n=i(0),r=i.n(n);class s{constructor(t){this.root=document.querySelector("[router-view]"),this.page=t.page,this.view=t.view,this.slug=t.slug,this.Transition=t.transition?new t.transition(this.root):null}setup(){this.onEnter&&this.onEnter(),this.onEnterCompleted&&this.onEnterCompleted()}add(){this.root.setAttribute("router-view",this.slug),this.root.innerHTML=this.view.innerHTML}remove(){this.root.innerHTML=""}update(){document.title=this.page.title}show(){return new Promise(async t=>{this.update(),this.onEnter&&this.onEnter(),this.Transition&&await this.Transition.show(),this.onEnterCompleted&&this.onEnterCompleted(),t()})}hide(){return new Promise(async t=>{this.onLeave&&this.onLeave(),this.Transition&&await this.Transition.hide(),this.remove(),this.onLeaveCompleted&&this.onLeaveCompleted(),t()})}}const o=new window.DOMParser;class a{static getOrigin(t){const e=t.match(/(https?:\/\/[\w\-.]+)/);return e?e[1]:null}static getPathname(t){const e=t.match(/https?:\/\/.*?(\/[\w_\-./]+)/);return e?e[1]:"/"}static getAnchor(t){const e=t.match(/(#.*)$/);return e?e[1]:null}static getParams(t){const e=t.match(/\?([\w_\-.=&]+)/);if(!e)return null;const i=e[1].split("&"),n={};for(let t=0;t<i.length;t++){const e=i[t].split("="),{0:r}=e,{1:s}=e;n[r]=s}return n}static getDOM(t){return"string"==typeof t?o.parseFromString(t,"text/html"):t}static getView(t){return t.querySelector("[router-view]")}static getSlug(t){return t.getAttribute("router-view")}static getRenderer(t,e){return void 0!==e&&e&&t in e?e[t]:s}static getTransition(t,e){return void 0!==e&&e?t in e?e[t]:"default"in e?e.default:null:null}}e.default={Core:class extends r.a{constructor({renderers:t,transitions:e}={}){super(),this.renderers=t,this.transitions=e,this.state=this.getState(window.location.href),this.props=this.getProps(document.cloneNode(!0)),this.link=null,this.cache=new Map,this.navigating=!1,this.From=new(a.getRenderer(this.props.slug,this.renderers))(this.props),this.From.setup(),this._click=this.click.bind(this),window.addEventListener("popstate",this.popState.bind(this)),this.bind()}getProps(t){const e=a.getDOM(t),i=a.getView(e),n=a.getSlug(i);return{page:e,view:i,slug:n,transition:a.getTransition(n,this.transitions)}}getState(t){return{url:t,anchor:a.getAnchor(t),origin:a.getOrigin(t),params:a.getParams(t),pathname:a.getPathname(t)}}bind(){this.links=document.querySelectorAll('a:not([target]):not([href*="javascript"])');for(const t of this.links)t.addEventListener("click",this._click)}unbind(){for(const t of this.links)t.removeEventListener("click",this._click)}click(t){t.preventDefault();const{href:e}=t.currentTarget,i=a.getAnchor(e),n=a.getParams(e),r=a.getPathname(e);this.navigating||r===this.state.pathname||n?(i||n)&&(window.location.href=e):(this.link=t.currentTarget,this.pushState())}popState(){const t=this.getState(window.location.href);t.pathname!==this.state.pathname&&this.beforeFetch(t)}pushState(){const t=this.getState(this.link.href);t.pathname&&window.history.pushState(t,"",t.url),this.beforeFetch(t)}async beforeFetch(t){if(this.navigating=!0,this.emit("NAVIGATE_OUT",{page:this.From.page,view:this.From.view},this.state),this.unbind(),await this.From.hide(),this.state=t,this.cache.has(this.state.pathname))this.props=this.cache.get(this.state.pathname);else{const t=await this.fetch();this.props=this.getProps(t),this.cache.set(this.state.pathname,this.props)}this.afterFetch()}async fetch(){const t=await fetch(this.state.url,{mode:"same-origin",method:"GET",headers:{"X-Requested-With":"Highway"},credentials:"same-origin"});if(t.status>=200&&t.status<300)return t.text();throw this.emit("NAVIGATE_ERROR",t),new Error(t.statusText)}async afterFetch(){window.scrollTo(0,0),this.To=new(a.getRenderer(this.props.slug,this.renderers))(this.props),this.To.add(),this.emit("NAVIGATE_IN",{page:this.To.page,view:this.To.root},this.state),await this.To.show(),this.bind(),this.navigating=!1,this.emit("NAVIGATE_END",{page:this.From.page,view:this.From.view},{page:this.To.page,view:this.To.root},this.state),this.From=this.To}},Helpers:a,Renderer:s,Transition:class{constructor(t){this.view=t}show(){return new Promise(t=>{this.in&&this.in(this.view,t)})}hide(){return new Promise(t=>{this.out&&this.out(this.view,t)})}}}}])},t.exports=n()},function(t,e,i){"use strict";i.r(e);var n=i(0);(new(i.n(n).a.Core)).on("NAVIGATE_END",(t,e,i)=>{if(i.anchor){const t=document.getElementById(i.anchor);t&&window.scrollTo(t.offsetLeft,t.offsetTop)}})}]);