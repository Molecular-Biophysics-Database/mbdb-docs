"use strict";(self.webpackChunkmbdb_docs=self.webpackChunkmbdb_docs||[]).push([[544],{7467:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=n(7624),s=n(2172);const o={sidebar_position:3},a="NCBI taxonomies",r={id:"external/organisms",title:"NCBI taxonomies",description:"We're using NCBI taxonomies to annotate biological organisms (including virus).",source:"@site/docs/external/organisms.md",sourceDirName:"external",slug:"/external/organisms",permalink:"/mbdb-docs/docs/external/organisms",draft:!1,unlisted:!1,editUrl:"https://github.com/Molecular-Biophysics-Database/mbdb-docs/tree/main/docs/external/organisms.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"externalSidebar",previous:{title:"Pubchem and InChI keys",permalink:"/mbdb-docs/docs/external/chemicals"},next:{title:"ROR",permalink:"/mbdb-docs/docs/external/affiliations"}},c={},d=[{value:"How is the information accessed?",id:"how-is-the-information-accessed",level:2},{value:"I can&#39;t find the organism I used, what should I do.",id:"i-cant-find-the-organism-i-used-what-should-i-do",level:2},{value:"The specific strain I used is not available",id:"the-specific-strain-i-used-is-not-available",level:3},{value:"The species, genus, etc.",id:"the-species-genus-etc",level:3}];function h(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"ncbi-taxonomies",children:"NCBI taxonomies"}),"\n",(0,t.jsx)(i.p,{children:"We're using NCBI taxonomies to annotate biological organisms (including virus)."}),"\n",(0,t.jsx)(i.h2,{id:"how-is-the-information-accessed",children:"How is the information accessed?"}),"\n",(0,t.jsxs)(i.p,{children:["We're accessing the information from within the MBDB using their ",(0,t.jsx)(i.a,{href:"https://www.ncbi.nlm.nih.gov/datasets/docs/v1/reference-docs/rest-api/",children:"REST API"}),'. In particular we\'re using the "taxon_suggest" endpoint for searching for taxonomy ids, and then extracting the information associated with each taxonomy id using the "taxon" endpoint.']}),"\n",(0,t.jsx)(i.h2,{id:"i-cant-find-the-organism-i-used-what-should-i-do",children:"I can't find the organism I used, what should I do."}),"\n",(0,t.jsx)(i.p,{children:"Depending on which level the information is unavailable you should do one of three two things"}),"\n",(0,t.jsx)(i.h3,{id:"the-specific-strain-i-used-is-not-available",children:"The specific strain I used is not available"}),"\n",(0,t.jsx)(i.p,{children:"We want to have the information as precise as possible, and therefor would like to have the information to the strain level, especially if this is known to be critical to the results obtained. However if the strain is not available, it's can be specified to the species level precision."}),"\n",(0,t.jsx)(i.h3,{id:"the-species-genus-etc",children:"The species, genus, etc."}),"\n",(0,t.jsxs)(i.p,{children:["Deposition genetic information to one of the sources that the NCBI taxonomy draws it's information from is required. The NCBI taxonomy draws it's information from several sources under The International Nucleotide Sequence Database Collaboration (INSDC). Links to the deposition system that is most appropriate you can be found ",(0,t.jsx)(i.a,{href:"https://www.insdc.org/",children:"here"}),"."]})]})}function l(e={}){const{wrapper:i}={...(0,s.M)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},2172:(e,i,n)=>{n.d(i,{I:()=>r,M:()=>a});var t=n(1504);const s={},o=t.createContext(s);function a(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);