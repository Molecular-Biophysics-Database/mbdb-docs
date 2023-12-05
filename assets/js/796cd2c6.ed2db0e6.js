"use strict";(self.webpackChunkmbdb_docs=self.webpackChunkmbdb_docs||[]).push([[344],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||r;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(7462),o=(n(7294),n(3905));const r={sidebar_position:3},a="NCBI taxonomies",s={unversionedId:"external/organisms",id:"external/organisms",title:"NCBI taxonomies",description:"We're using NCBI taxonomies to annotate biological organisms (including virus).",source:"@site/docs/external/organisms.md",sourceDirName:"external",slug:"/external/organisms",permalink:"/mbdb-docs/docs/external/organisms",draft:!1,editUrl:"https://github.com/Molecular-Biophysics-Database/mbdb-docs/tree/main/docs/external/organisms.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"externalSidebar",previous:{title:"Pubchem and InChI keys",permalink:"/mbdb-docs/docs/external/chemicals"},next:{title:"ROR",permalink:"/mbdb-docs/docs/external/affiliations"}},c={},l=[{value:"How is the information accessed?",id:"how-is-the-information-accessed",level:2},{value:"I can&#39;t find the organism I used, what should I do.",id:"i-cant-find-the-organism-i-used-what-should-i-do",level:2},{value:"The specific strain I used is not available",id:"the-specific-strain-i-used-is-not-available",level:3},{value:"The species, genus, etc.",id:"the-species-genus-etc",level:3}],d={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ncbi-taxonomies"},"NCBI taxonomies"),(0,o.kt)("p",null,"We're using NCBI taxonomies to annotate biological organisms (including virus).   "),(0,o.kt)("h2",{id:"how-is-the-information-accessed"},"How is the information accessed?"),(0,o.kt)("p",null,"We're accessing the information from within the MBDB using their ",(0,o.kt)("a",{parentName:"p",href:"https://www.ncbi.nlm.nih.gov/datasets/docs/v1/reference-docs/rest-api/"},"REST API"),'. In particular we\'re using the "taxon_suggest" endpoint for searching for taxonomy ids, and then extracting the information associated with each taxonomy id using the "taxon" endpoint.      '),(0,o.kt)("h2",{id:"i-cant-find-the-organism-i-used-what-should-i-do"},"I can't find the organism I used, what should I do."),(0,o.kt)("p",null,"Depending on which level the information is unavailable you should do one of three two things "),(0,o.kt)("h3",{id:"the-specific-strain-i-used-is-not-available"},"The specific strain I used is not available"),(0,o.kt)("p",null,"We want to have the information as precise as possible, and therefor would like to have the information to the strain level, especially if this is known to be critical to the results obtained. However if the strain is not available, it's can be specified to the species level precision.    "),(0,o.kt)("h3",{id:"the-species-genus-etc"},"The species, genus, etc."),(0,o.kt)("p",null,"Deposition genetic information to one of the sources that the NCBI taxonomy draws it's information from is required. The NCBI taxonomy draws it's information from several sources under The International Nucleotide Sequence Database Collaboration (INSDC). Links to the deposition system that is most appropriate you can be found ",(0,o.kt)("a",{parentName:"p",href:"https://www.insdc.org/"},"here"),"."))}p.isMDXComponent=!0}}]);