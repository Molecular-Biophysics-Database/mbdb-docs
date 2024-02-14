"use strict";(self.webpackChunkmbdb_docs=self.webpackChunkmbdb_docs||[]).push([[1944],{5644:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=s(7624),t=s(2172);const i={},o="Files metadata",d={id:"datamodel/reusable_elements/files",title:"Files metadata",description:"name",source:"@site/docs/datamodel/reusable_elements/files.md",sourceDirName:"datamodel/reusable_elements",slug:"/datamodel/reusable_elements/files",permalink:"/mbdb-docs/docs/datamodel/reusable_elements/files",draft:!1,unlisted:!1,editUrl:"https://github.com/Molecular-Biophysics-Database/mbdb-docs/tree/main/docs/datamodel/reusable_elements/files.md",tags:[],version:"current",frontMatter:{},sidebar:"dataModelSidebar",previous:{title:"Duration",permalink:"/mbdb-docs/docs/datamodel/reusable_elements/duration"},next:{title:"Modification",permalink:"/mbdb-docs/docs/datamodel/reusable_elements/modification"}},l={},c=[{value:"name",id:"name",level:2},{value:"content_type",id:"content_type",level:2},{value:"context",id:"context",level:2},{value:"originates_from",id:"originates_from",level:2},{value:"size",id:"size",level:2},{value:"description",id:"description",level:2},{value:"recommended_software",id:"recommended_software",level:2},{value:"processing step",id:"processing-step",level:2}];function a(e){const n={a:"a",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"files-metadata",children:"Files metadata"}),"\n",(0,r.jsx)(n.h2,{id:"name",children:"name"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Name of the file ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": string (keyword) ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(n.h2,{id:"content_type",children:"content_type"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Type of the file content in terms of how it can be read (text, binary, etc.) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": enumerator (keyword) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Options"}),": ('text', 'binary','text and binary')"]}),"\n",(0,r.jsx)(n.h2,{id:"context",children:"context"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": The context the file should be understood within (e.g. raw measurement data) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": enumerator (keyword) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Options"}),": ('raw measurement data',\n'derived measurement data',\n'quality control report')"]}),"\n",(0,r.jsx)(n.h2,{id:"originates_from",children:"originates_from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": What is the source of the file ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": enumerator (keyword) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Options"}),": ('Instrument software', 'User', 'MBDB')"]}),"\n",(0,r.jsx)(n.h2,{id:"size",children:"size"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Size of the file in bytes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": number (integer) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Minimum"}),": 0"]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Short description of what the file contains ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": no ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": string (fulltext) ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(n.h2,{id:"recommended_software",children:"recommended_software"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": The name of the software recommended for opening and working with the files ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": no ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": string (fulltext) ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(n.h2,{id:"processing-step",children:"processing step"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": List of the processing steps performed on the file before it was deposited (e.g. exported to xlsx) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": no ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": array of object (Processing_step) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Contains"}),": see ",(0,r.jsx)(n.a,{href:"/mbdb-docs/docs/datamodel/reusable_elements/processing_step",children:"Processing step"})]})]})}function x(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},2172:(e,n,s)=>{s.d(n,{I:()=>d,M:()=>o});var r=s(1504);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);