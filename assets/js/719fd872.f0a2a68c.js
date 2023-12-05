"use strict";(self.webpackChunkmbdb_docs=self.webpackChunkmbdb_docs||[]).push([[386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="Technologies overview",l={unversionedId:"technologies/intro",id:"technologies/intro",title:"Technologies overview",description:"The MBDB relies on a number of technologies to accomplish the various tasks,",source:"@site/docs/technologies/intro.md",sourceDirName:"technologies",slug:"/technologies/intro",permalink:"/mbdb-docs/docs/technologies/intro",draft:!1,editUrl:"https://github.com/Molecular-Biophysics-Database/mbdb-docs/tree/main/docs/technologies/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"technologiesSidebar"},c={},s=[{value:"Frontend",id:"frontend",level:2},{value:"Backend",id:"backend",level:2},{value:"Development and deployment",id:"development-and-deployment",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"technologies-overview"},"Technologies overview"),(0,o.kt)("p",null,"The MBDB relies on a number of technologies to accomplish the various tasks,\nhowever, the overarching framework being used is ",(0,o.kt)("a",{parentName:"p",href:"https://invenio-software.org/"},"Invenio")," with added functionality from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oarepo"},"Open Access repository"),"  "),(0,o.kt)("h1",{id:"availability"},"Availability"),(0,o.kt)("p",null,"All software used for development is compatible with the MIT license and is publicly developed (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Molecular-Biophysics-Database"},"https://github.com/Molecular-Biophysics-Database"),"). As such the software that drives the MBDB is freely available for inspection, development, rebuilding, and redistribution. "),(0,o.kt)("h2",{id:"frontend"},"Frontend"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"JinjaX"),(0,o.kt)("li",{parentName:"ul"},"React"),(0,o.kt)("li",{parentName:"ul"},"less")),(0,o.kt)("h2",{id:"backend"},"Backend"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Python"),(0,o.kt)("li",{parentName:"ul"},"PostGreSQL"),(0,o.kt)("li",{parentName:"ul"},"OpenSearch"),(0,o.kt)("li",{parentName:"ul"},"S3 storage")),(0,o.kt)("h2",{id:"development-and-deployment"},"Development and deployment"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker"),(0,o.kt)("li",{parentName:"ul"},"Kubernetes")))}d.isMDXComponent=!0}}]);