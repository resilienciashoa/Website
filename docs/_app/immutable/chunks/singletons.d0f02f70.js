import{w as u}from"./index.0717f404.js";var _;const b=((_=globalThis.__sveltekit_1n69jox)==null?void 0:_.base)??"";var g;const v=((g=globalThis.__sveltekit_1n69jox)==null?void 0:g.assets)??b,k="1684473204584",A="sveltekit:snapshot",R="sveltekit:scroll",T="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function x(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function y(){return{x:pageXOffset,y:pageYOffset}}function i(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function h(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function I(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=h(e)}}function S(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,l=!n||!!a||E(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),r=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:l,target:a,download:r}}function O(e){let t=null,n=null,a=null,l=null,r=null,s=null,o=e;for(;o&&o!==document.documentElement;)a===null&&(a=i(o,"preload-code")),l===null&&(l=i(o,"preload-data")),t===null&&(t=i(o,"keepfocus")),n===null&&(n=i(o,"noscroll")),r===null&&(r=i(o,"reload")),s===null&&(s=i(o,"replacestate")),o=h(o);return{preload_code:d[a??"off"],preload_data:d[l??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:r==="off"?!1:r===""?!0:null,replace_state:s==="off"?!1:s===""?!0:null}}function p(e){const t=u(e);let n=!0;function a(){n=!0,t.update(s=>s)}function l(s){n=!1,t.set(s)}function r(s){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&s(o=c)})}return{notify:a,set:l,subscribe:r}}function m(){const{set:e,subscribe:t}=u(!1);let n;async function a(){clearTimeout(n);try{const l=await fetch(`${v}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!l.ok)return!1;const s=(await l.json()).version!==k;return s&&(e(!0),clearTimeout(n)),s}catch{return!1}}return{subscribe:t,check:a}}function E(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function U(e){e.client}const L={url:p({}),page:p({}),navigating:u(null),updated:m()};export{T as I,f as P,R as S,A as a,S as b,O as c,y as d,b as e,I as f,x as g,U as h,E as i,L as s};