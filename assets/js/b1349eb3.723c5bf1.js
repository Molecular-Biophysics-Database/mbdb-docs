"use strict";(self.webpackChunkmbdb_docs=self.webpackChunkmbdb_docs||[]).push([[7504],{851:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=s(7624),t=s(2172);const i={sidebar_position:11},a="Results",l={id:"datamodel/general_params/results",title:"Results",description:"Result",source:"@site/docs/datamodel/general_params/results.md",sourceDirName:"datamodel/general_params",slug:"/datamodel/general_params/results",permalink:"/mbdb-docs/docs/datamodel/general_params/results",draft:!1,unlisted:!1,editUrl:"https://github.com/Molecular-Biophysics-Database/mbdb-docs/tree/main/docs/datamodel/general_params/results.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"dataModelSidebar",previous:{title:"Chemical environments",permalink:"/mbdb-docs/docs/datamodel/general_params/chemical_environments"},next:{title:"Raw measurements",permalink:"/mbdb-docs/docs/datamodel/general_params/raw_measurements"}},o={},d=[{value:"Result",id:"result",level:2},{value:"Fields available in result",id:"fields-available-in-result",level:2},{value:"id",id:"id",level:2},{value:"name",id:"name",level:2},{value:"type",id:"type",level:2},{value:"value",id:"value",level:2},{value:"value_error",id:"value_error",level:2},{value:"unit",id:"unit",level:2},{value:"One of the following depending on the result type",id:"one-of-the-following-depending-on-the-result-type",level:3},{value:"Concentration",id:"concentration",level:3},{value:"Stoichiometry",id:"stoichiometry",level:3},{value:"Constant of association",id:"constant-of-association",level:3},{value:"Constant of dissociation",id:"constant-of-dissociation",level:3},{value:"Association rate constant",id:"association-rate-constant",level:3},{value:"Dissociation rate constant",id:"dissociation-rate-constant",level:3},{value:"Change in enthalpy",id:"change-in-enthalpy",level:3},{value:"Change in entropy",id:"change-in-entropy",level:3},{value:"Change in Gibbs free energy",id:"change-in-gibbs-free-energy",level:3},{value:"Molecular weight",id:"molecular-weight",level:3},{value:"Half maximal effective concentration",id:"half-maximal-effective-concentration",level:3},{value:"Hill coefficient",id:"hill-coefficient",level:3},{value:"entities_involved",id:"entities_involved",level:2},{value:"Fields available in entity and stoichiometry",id:"fields-available-in-entity-and-stoichiometry",level:2},{value:"entity",id:"entity",level:3},{value:"copy_number",id:"copy_number",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"results",children:"Results"}),"\n",(0,r.jsx)(n.h2,{id:"result",children:"Result"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": List of the results (parameter) that were derived by analyzing the raw data, and which steps were taken to obtain them ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Path"}),": ",(0,r.jsx)(n.code,{children:"metadata.general_parameters.results"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": array of polymorphic object (Result) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type_field"}),": type\n",(0,r.jsx)(n.strong,{children:"Contains"}),": see ",(0,r.jsx)(n.a,{href:"#fields-available-in-result",children:"Fields available result"})]}),"\n",(0,r.jsx)(n.h2,{id:"fields-available-in-result",children:"Fields available in result"}),"\n",(0,r.jsx)(n.h2,{id:"id",children:"id"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Unique ID for the result to be used as a link ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Path"}),": ",(0,r.jsx)(n.code,{children:"metadata.general_parameters.results.id"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": string (keyword) ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(n.h2,{id:"name",children:"name"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Descriptive name (id) of the result (e.g. Kd of Lysozyme and VHH2). Must be unique within a record ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Path"}),": ",(0,r.jsx)(n.code,{children:"metadata.general_parameters.results.name"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": string (fulltext) ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(n.h2,{id:"type",children:"type"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": The type of physical parameter the result represents ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Path"}),": ",(0,r.jsx)(n.code,{children:"metadata.general_parameters.results.type"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": enumerator (string) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"options"}),": ('Concentration',\n'Stoichiometry',\n'Constant of association KA',\n'Constant of dissociation KD',\n'Half maximal effective concentration EC50',\n'Hill coefficient',\n'Association rate kOn',\n'Dissociation rate kOff',\n'Change in enthalpy deltaH',\n'Change in entropy deltaS',\n'Change in Gibbs free energy deltaG',\n'Molecular weight')"]}),"\n",(0,r.jsx)(n.h2,{id:"value",children:"value"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Numerical value of the result ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Path"}),": ",(0,r.jsx)(n.code,{children:"metadata.general_parameters.results.value"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": number (float) ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(n.h2,{id:"value_error",children:"value_error"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": The expected error of the result in terms of a 95 % confidence interval ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Path"}),": ",(0,r.jsx)(n.code,{children:"metadata.general_parameters.results.value_error"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": object (Value_error) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Contains"})," see ",(0,r.jsx)(n.a,{href:"/mbdb-docs/docs/datamodel/reusable_elements/value_error",children:"Value error"})]}),"\n",(0,r.jsx)(n.h2,{id:"unit",children:"unit"}),"\n",(0,r.jsx)(n.h3,{id:"one-of-the-following-depending-on-the-result-type",children:"One of the following depending on the result type"}),"\n",(0,r.jsx)(n.h3,{id:"concentration",children:"Concentration"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Unit of the concentration ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Path"}),": ",(0,r.jsx)(n.code,{children:"metadata.general_parameters.results.unit"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": enumerator (string) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Options"}),": ('M', 'mM', '\xb5M', 'nM', 'pM', 'fM', 'aM',\n'g/L', 'mg/mL', '\xb5g/mL', 'ng/mL',\n'mol/kg', 'mmol/kg',\n'v/v %','w/w %', 'v/w %', 'w/v %',\n'U/ml','% saturated')"]}),"\n",(0,r.jsx)(n.h3,{id:"stoichiometry",children:"Stoichiometry"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Unit of the stoichiometry",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Path"}),": ",(0,r.jsx)(n.code,{children:"metadata.general_parameters.results.unit"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": enumerator (string) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Options"}),": ('per complex')"]}),"\n",(0,r.jsx)(n.h3,{id:"constant-of-association",children:"Constant of association"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Unit of the constant of association",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Path"}),": ",(0,r.jsx)(n.code,{children:"metadata.general_parameters.results.unit"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": enumerator (string) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Options"}),": ('M^-1', 'M^-2',\n'mM^-1', 'mM^-2',\n'\xb5M^-1', '\xb5M^-2',\n'nM^-1', 'nM^-2')"]}),"\n",(0,r.jsx)(n.h3,{id:"constant-of-dissociation",children:"Constant of dissociation"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Unit of the constant of association",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Path"}),": ",(0,r.jsx)(n.code,{children:"metadata.general_parameters.results.unit"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": enumerator (string) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Options"}),": ('M', 'M^2',\n'mM', 'mM^2',\n'\xb5M', '\xb5M^2',\n'nM', 'nM^2')"]}),"\n",(0,r.jsx)(n.h3,{id:"association-rate-constant",children:"Association rate constant"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Unit of the association rate constant ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Path"}),": ",(0,r.jsx)(n.code,{children:"metadata.general_parameters.results.unit"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": enumerator (string) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Options"}),": ('M^-1 s^-1', 'M^-2 s^-1',\n'mM^-1 s^-1', 'mM^-2 s^-1',\n'\xb5M^-1 s^-1', '\xb5M^-2 s^-1',\n'nM^-1 s^-1', 'nM^-2 s^-1')"]}),"\n",(0,r.jsx)(n.h3,{id:"dissociation-rate-constant",children:"Dissociation rate constant"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Unit of the dissociation rate constant ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Path"}),": ",(0,r.jsx)(n.code,{children:"metadata.general_parameters.results.unit"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": enumerator (string) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Options"}),": ('s^-1')"]}),"\n",(0,r.jsx)(n.h3,{id:"change-in-enthalpy",children:"Change in enthalpy"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Unit of the change in enthalpy ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Path"}),": ",(0,r.jsx)(n.code,{children:"metadata.general_parameters.results.unit"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": enumerator (string) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Options"}),": ('kcal/mol','kJ/mol')"]}),"\n",(0,r.jsx)(n.h3,{id:"change-in-entropy",children:"Change in entropy"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Unit of the change in entropy ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Path"}),": ",(0,r.jsx)(n.code,{children:"metadata.general_parameters.results.unit"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": enumerator (string) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Options"}),": ('kcal/molK','kJ/molK')"]}),"\n",(0,r.jsx)(n.h3,{id:"change-in-gibbs-free-energy",children:"Change in Gibbs free energy"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Unit of the change in Gibbs free energy ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Path"}),": ",(0,r.jsx)(n.code,{children:"metadata.general_parameters.results.unit"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": enumerator (string) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Options"}),": ('kcal/mol','kJ/mol')"]}),"\n",(0,r.jsx)(n.h3,{id:"molecular-weight",children:"Molecular weight"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Unit of the molecular weight ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Path"}),": ",(0,r.jsx)(n.code,{children:"metadata.general_parameters.results.unit"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": enumerator (string) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Options"}),": ('g/mol', 'Da', 'kDa', 'MDa')"]}),"\n",(0,r.jsx)(n.h3,{id:"half-maximal-effective-concentration",children:"Half maximal effective concentration"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Unit of the molecular weight ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Path"}),": ",(0,r.jsx)(n.code,{children:"metadata.general_parameters.results.unit"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": enumerator (string) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Options"}),": ('g/mol', 'Da', 'kDa', 'MDa')"]}),"\n",(0,r.jsx)(n.h3,{id:"hill-coefficient",children:"Hill coefficient"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Unit of the molecular weight ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Path"}),": ",(0,r.jsx)(n.code,{children:"metadata.general_parameters.results.unit"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": enumerator (string) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Options"}),": ('unitless')"]}),"\n",(0,r.jsx)(n.h2,{id:"entities_involved",children:"entities_involved"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": List of chemical or molecular assemblies the result describes and how many copies of each are involved ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Path"}),": ",(0,r.jsx)(n.code,{children:"metadata.general_parameters.results.entities_involved"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": array of object (Entity_and_stoichiometry) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"contains"}),": see ",(0,r.jsx)(n.a,{href:"#fields-available-in-entity-and-stoichiometry",children:"Fields available in entity and stoichiometry"})]}),"\n",(0,r.jsx)(n.h2,{id:"fields-available-in-entity-and-stoichiometry",children:"Fields available in entity and stoichiometry"}),"\n",(0,r.jsx)(n.h3,{id:"entity",children:"entity"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Name (ids) of the entity (from the entities of interest defined in the general parameters) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Path"}),": ",(0,r.jsx)(n.code,{children:"metadata.general_parameters.results.entities_involved.entity"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": string (fulltext) ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(n.h3,{id:"copy_number",children:"copy_number"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Number of copies of the entity that contribute to the result, -1 if unknown (e.g. if two individual copies of a polymer binds to another, the copy number would be 2) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Required"}),": yes ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Path"}),": ",(0,r.jsx)(n.code,{children:"metadata.general_parameters.results.entities_involved.entity"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Type"}),": number (float) ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Minimum"}),": -1"]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},2172:(e,n,s)=>{s.d(n,{I:()=>l,M:()=>a});var r=s(1504);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);