"use strict";(self.webpackChunkmbdb_docs=self.webpackChunkmbdb_docs||[]).push([[432],{9167:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=s(4848),r=s(8453);const t={},l="Person",o={id:"datamodel/reusable_elements/person",title:"Person",description:"given_name",source:"@site/docs/datamodel/reusable_elements/person.md",sourceDirName:"datamodel/reusable_elements",slug:"/datamodel/reusable_elements/person",permalink:"/mbdb-docs/docs/datamodel/reusable_elements/person",draft:!1,unlisted:!1,editUrl:"https://github.com/Molecular-Biophysics-Database/mbdb-docs/tree/main/docs/datamodel/reusable_elements/person.md",tags:[],version:"current",frontMatter:{},sidebar:"dataModelSidebar",previous:{title:"Organism",permalink:"/mbdb-docs/docs/datamodel/reusable_elements/organism"},next:{title:"Processing step",permalink:"/mbdb-docs/docs/datamodel/reusable_elements/processing_step"}},a={},d=[{value:"given_name",id:"given_name",level:2},{value:"family_name",id:"family_name",level:2},{value:"identifiers",id:"identifiers",level:2},{value:"affiliations",id:"affiliations",level:2},{value:"Fields available in affiliations",id:"fields-available-in-affiliations",level:2},{value:"id",id:"id",level:3},{value:"title",id:"title",level:3},{value:"props.city",id:"propscity",level:3},{value:"props.state",id:"propsstate",level:3},{value:"props.country",id:"propscountry",level:3}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"person",children:"Person"}),"\n",(0,i.jsx)(n.h2,{id:"given_name",children:"given_name"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": The given name(s), including middlename(s), of the person ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Required"}),": yes ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Type"}),": string (fulltext)"]}),"\n",(0,i.jsx)(n.h2,{id:"family_name",children:"family_name"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": The family name(s) the person ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Required"}),": yes ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Type"}),": string (fulltext)"]}),"\n",(0,i.jsx)(n.h2,{id:"identifiers",children:"identifiers"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": Persistent personal identifiers, currently only ORCIDs are allowed ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Required"}),": yes ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Type"}),": array of string (keyword) ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"format"}),": orcid:123-XXX"]}),"\n",(0,i.jsx)(n.h2,{id:"affiliations",children:"affiliations"}),"\n",(0,i.jsxs)(n.p,{children:["Note that organisms are fetched as a ",(0,i.jsx)(n.a,{href:"/mbdb-docs/docs/external/affiliations",children:"ROR id"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": The affiliation of the person. Note that this is based on the Research Organization Registry (ROR) ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Required"}),": yes ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Type"}),": array of object (vocabulary) ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"contains"})," see ",(0,i.jsx)(n.a,{href:"#fields-available-in-affiliations",children:"fields available in affiliations"})]}),"\n",(0,i.jsx)(n.h2,{id:"fields-available-in-affiliations",children:"Fields available in affiliations"}),"\n",(0,i.jsx)(n.h3,{id:"id",children:"id"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": The ROR id of the affiliation ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Required"}),": yes ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Type"}),": string (keyword) ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Format"})," ror",":XXXX"]}),"\n",(0,i.jsx)(n.h3,{id:"title",children:"title"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": The title of the affiliation ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Required"}),": yes ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Type"}),": string (fulltext)"]}),"\n",(0,i.jsx)(n.h3,{id:"propscity",children:"props.city"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": The city of the affiliation",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Required"}),": no ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Type"}),": string (fulltext) ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h3,{id:"propsstate",children:"props.state"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": The state of of the affiliation",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Required"}),": no ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Type"}),": string (fulltext) ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h3,{id:"propscountry",children:"props.country"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": The country of of the affiliation",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Required"}),": no ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Type"}),": string (fulltext) ",(0,i.jsx)("br",{})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var i=s(6540);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);