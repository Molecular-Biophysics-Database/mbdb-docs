"use strict";(self.webpackChunkmbdb_docs=self.webpackChunkmbdb_docs||[]).push([[1328],{1764:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var i=s(7624),o=s(2172);const t={sidebar_position:4},r="Molecular assembly",a={id:"datamodel/general_params/entities_of_interest/molecular_assembly",title:"Molecular assembly",description:"external_databases",source:"@site/docs/datamodel/general_params/entities_of_interest/molecular_assembly.md",sourceDirName:"datamodel/general_params/entities_of_interest",slug:"/datamodel/general_params/entities_of_interest/molecular_assembly",permalink:"/mbdb-docs/docs/datamodel/general_params/entities_of_interest/molecular_assembly",draft:!1,unlisted:!1,editUrl:"https://github.com/Molecular-Biophysics-Database/mbdb-docs/tree/main/docs/datamodel/general_params/entities_of_interest/molecular_assembly.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"dataModelSidebar",previous:{title:"Polymer",permalink:"/mbdb-docs/docs/datamodel/general_params/entities_of_interest/polymer"},next:{title:"Reuseable elements",permalink:"/mbdb-docs/docs/category/reuseable-elements"}},l={},c=[{value:"external_databases",id:"external_databases",level:2},{value:"components",id:"components",level:2},{value:"molecular_weight",id:"molecular_weight",level:2},{value:"chemical_modifications",id:"chemical_modifications",level:2},{value:"additional_specifications",id:"additional_specifications",level:2},{value:"Fields available in assembly components",id:"fields-available-in-assembly-components",level:2},{value:"name",id:"name",level:3},{value:"type",id:"type",level:3},{value:"copy_number",id:"copy_number",level:3},{value:"The fields from one of the following:",id:"the-fields-from-one-of-the-following",level:2},{value:"Polymer",id:"polymer",level:3},{value:"Chemical",id:"chemical",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"molecular-assembly",children:"Molecular assembly"}),"\n",(0,i.jsx)(n.h2,{id:"external_databases",children:"external_databases"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": List of identifiers to records in external databases containing information about the molecular assembly as a whole can be specified here (e.g. PDB:1YQ2 ); information about the individual components should be specified in the details of the individual components ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Required"}),": no ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Path"}),": ",(0,i.jsx)(n.code,{children:"metadata.general_parameters.entities_of_interest.external_databases"})," ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Type"}),": string (keyword) ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Format"}),": ('pdb",":XXXX","','uniprot",":XXXXX","')"]}),"\n",(0,i.jsx)(n.h2,{id:"components",children:"components"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": Description of the individual components (e.g. polypeptide, heme, lipids, metal ions etc.) the molecular assembly is composed of (e.g. Hemoglobin alpha) and how many copies of each component were present ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Required"}),": yes ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Path"}),": ",(0,i.jsx)(n.code,{children:"metadata.general_parameters.entities_of_interest.components"})," ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Type"}),": array of polymorphic object (Assembly_component) ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Type_field"}),": type\n",(0,i.jsx)(n.strong,{children:"Contains"}),": see ",(0,i.jsx)(n.a,{href:"#fields-available-in-assembly-components",children:"Fields available in assembly components"})]}),"\n",(0,i.jsx)(n.h2,{id:"molecular_weight",children:"molecular_weight"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": The molecular weight of the molecular assembly",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Required"}),": yes ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Type"}),": object (Molecular_weight) ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Contains"}),": see ",(0,i.jsx)(n.a,{href:"/mbdb-docs/docs/datamodel/reusable_elements/molecular_weight",children:"Molecular weight"})]}),"\n",(0,i.jsx)(n.h2,{id:"chemical_modifications",children:"chemical_modifications"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": List describing deliberate modifications made to the molecular assembly through chemical, biochemical, or physical means'",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Required"}),": no ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Type"}),": array of object (Modification)  ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Contains"})," see ",(0,i.jsx)(n.a,{href:"/mbdb-docs/docs/datamodel/reusable_elements/modification",children:"Modification"})]}),"\n",(0,i.jsx)(n.h2,{id:"additional_specifications",children:"additional_specifications"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": Additional information about the macromolecular assembly can be specified here",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Required"}),": no ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Type"}),": array of string (fulltext) ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h2,{id:"fields-available-in-assembly-components",children:"Fields available in assembly components"}),"\n",(0,i.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": Description of the individual components (e.g. polypeptide, heme, lipids, metal ions etc.) the molecular assembly is composed of (e.g. Hemoglobin alpha) and how many copies of each component were present ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Required"}),": yes ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Path"}),": ",(0,i.jsx)(n.code,{children:"metadata.general_parameters.entities_of_interest.components.name"})," ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Type"}),": string (keyword) ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h3,{id:"type",children:"type"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": The type of component, options are (biological) Polymer and Chemical ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Required"}),": yes ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Path"}),": ",(0,i.jsx)(n.code,{children:"metadata.general_parameters.entities_of_interest.components.type"})," ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Type"}),": enumerator (string) ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Options"}),": ('Polymer', 'Chemical')"]}),"\n",(0,i.jsx)(n.h3,{id:"copy_number",children:"copy_number"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": Number of copies of the component within the assembly, -1 if unknown ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Required"}),": yes ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Path"}),": ",(0,i.jsx)(n.code,{children:"metadata.general_parameters.entities_of_interest.components.type"})," ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Type"}),": number (float) ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Minimum"}),": -1 ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h2,{id:"the-fields-from-one-of-the-following",children:"The fields from one of the following:"}),"\n",(0,i.jsx)(n.h3,{id:"polymer",children:"Polymer"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/mbdb-docs/docs/datamodel/general_params/entities_of_interest/polymer",children:"Polymer"})]}),"\n",(0,i.jsx)(n.h3,{id:"chemical",children:"Chemical"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/mbdb-docs/docs/datamodel/general_params/entities_of_interest/chemical",children:"Chemical"})]})]})}function m(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2172:(e,n,s)=>{s.d(n,{I:()=>a,M:()=>r});var i=s(1504);const o={},t=i.createContext(o);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);