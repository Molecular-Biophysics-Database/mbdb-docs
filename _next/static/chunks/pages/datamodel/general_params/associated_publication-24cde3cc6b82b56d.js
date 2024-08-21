(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8624],{4500:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datamodel/general_params/associated_publication",function(){return a(2128)}])},2128:function(e,t,a){"use strict";a.r(t),a.d(t,{__toc:function(){return d}});var n=a(5893),i=a(2673),r=a(6231),s=a(1255);a(9488);var o=a(2643);let d=[{depth:2,value:"Available fields",id:"available-fields"},{depth:3,value:"pid",id:"pid"},{depth:3,value:"title",id:"title"},{depth:3,value:"type",id:"type"},{depth:2,value:"One of the following",id:"one-of-the-following"},{depth:3,value:"Fields if type is Article",id:"fields-if-type-is-article"},{depth:4,value:"journal",id:"journal"},{depth:3,value:"Fields if type is Book",id:"fields-if-type-is-book"},{depth:4,value:"publisher",id:"publisher"},{depth:3,value:"Fields if type is Thesis",id:"fields-if-type-is-thesis"},{depth:4,value:"degree_type",id:"degree_type"}];function l(e){let t=Object.assign({h1:"h1",p:"p",strong:"strong",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4"},(0,o.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{children:"Associated publication"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": If the data in this record is described in published literature (article, journal, thesis), information about the literature can be specified here ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Required"}),": yes ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Path"}),": ",(0,n.jsx)(t.code,{children:"metadata.general_parameters.associated_publication"})," ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Type"}),": polymorphic object ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Type_field"})," : type\n",(0,n.jsx)(t.strong,{children:"Contains"}),": see available fields ",(0,n.jsx)(t.br,{})]}),"\n",(0,n.jsx)(t.h2,{id:"available-fields",children:"Available fields"}),"\n",(0,n.jsx)(t.h3,{id:"pid",children:"pid"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": Persistent identifier associated with the publication (e.g. DOI, ISBN, URN) ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Required"}),": yes ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Path"}),": ",(0,n.jsx)(t.code,{children:"metadata.general_parameters.associated_publication.pid"})," ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Type"}),": string ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"format"}),": ('doi:10.xxx', 'isbn:xxx', 'urn:xxx' ) ",(0,n.jsx)(t.br,{})]}),"\n",(0,n.jsx)(t.h3,{id:"title",children:"title"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": The title of the publication ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Required"}),": no ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Path"}),": ",(0,n.jsx)(t.code,{children:"metadata.general_parameters.associated_publication.title"})," ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Type"}),": string (fulltext) ",(0,n.jsx)(t.br,{})]}),"\n",(0,n.jsx)(t.h3,{id:"type",children:"type"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": The type of the publication ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Required"}),": yes ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Path"}),": ",(0,n.jsx)(t.code,{children:"metadata.general_parameters.associated_publication.type"})," ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Type"}),": enumerator (string) ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Options"}),": ('Article', 'Book', 'Thesis') ",(0,n.jsx)(t.br,{})]}),"\n",(0,n.jsx)(t.h2,{id:"one-of-the-following",children:"One of the following"}),"\n",(0,n.jsx)(t.h3,{id:"fields-if-type-is-article",children:"Fields if type is Article"}),"\n",(0,n.jsx)(t.h4,{id:"journal",children:"journal"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": The full name of the journal the article appears in ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Required"}),": yes ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Path"}),": ",(0,n.jsx)(t.code,{children:"metadata.general_parameters.associated_publication.journal"})," ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Type"}),": string (fulltext) ",(0,n.jsx)(t.br,{})]}),"\n",(0,n.jsx)(t.h3,{id:"fields-if-type-is-book",children:"Fields if type is Book"}),"\n",(0,n.jsx)(t.h4,{id:"publisher",children:"publisher"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": The full name of the publisher of the book ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Required"}),": yes ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Path"}),": ",(0,n.jsx)(t.code,{children:"metadata.general_parameters.associated_publication.publisher"})," ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Type"}),": string (fulltext) ",(0,n.jsx)(t.br,{})]}),"\n",(0,n.jsx)(t.h3,{id:"fields-if-type-is-thesis",children:"Fields if type is Thesis"}),"\n",(0,n.jsx)(t.h4,{id:"degree_type",children:"degree_type"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": The full name of the publisher of the book ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Required"}),": yes ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Path"}),": ",(0,n.jsx)(t.code,{children:"metadata.general_parameters.associated_publication.degree_type"})," ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Type"}),": Enumerator ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Options"}),': ("PhD", "Habilitation", "Master", "Bachelor") ',(0,n.jsx)(t.br,{})]})]})}let m={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,o.a)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/datamodel/general_params/associated_publication.md",route:"/datamodel/general_params/associated_publication",timestamp:1724256236e3,pageMap:[{kind:"Meta",data:{index:{title:"Home",type:"page"},datamodel:{title:"Data model",type:"page"},external:{title:"External Resources",type:"page"},technologies:{title:"Technologies",type:"page"},rest_api:{title:"REST API",type:"page"},license:{title:"Licensing",type:"page"},issues:{title:"Known Issues",type:"page"}}},{kind:"Folder",name:"datamodel",route:"/datamodel",children:[{kind:"Meta",data:{intro:"Introduction",general_params:"General parameters",reusable_elements:"Reusable elements",bli:"BLI",mst:"MST",spr:"SPR",itc:"ITC",files:"Files"}},{kind:"Folder",name:"bli",route:"/datamodel/bli",children:[{kind:"Meta",data:{intro:"Introduction",bli_specific:"Method specific parameters",plate:"Plate",sensor:"Sensor",measurement_protocol:"Measurement protocol",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"bli_specific",route:"/datamodel/bli/bli_specific"},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/bli/data_analysis"},{kind:"MdxPage",name:"intro",route:"/datamodel/bli/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/bli/measurement"},{kind:"MdxPage",name:"measurement_protocol",route:"/datamodel/bli/measurement_protocol"},{kind:"MdxPage",name:"plate",route:"/datamodel/bli/plate"},{kind:"MdxPage",name:"sensor",route:"/datamodel/bli/sensor"}]},{kind:"MdxPage",name:"files",route:"/datamodel/files"},{kind:"Folder",name:"general_params",route:"/datamodel/general_params",children:[{kind:"Meta",data:{intro:"Introduction",schema_version:"Schema version",record_information:"Record information",depositors:"Depositors (authors)",associated_publication:"Associated publication",funding:"Funding reference",technique:"Technique",collection_start_time:"Collection start time",instrument:"Instrument",entities_of_interest:"Entities of interest",chemical_environments:"Chemical environments",results:"Results",raw_measurements:"Raw measurements (files)"}},{kind:"MdxPage",name:"associated_publication",route:"/datamodel/general_params/associated_publication"},{kind:"MdxPage",name:"chemical_environments",route:"/datamodel/general_params/chemical_environments"},{kind:"MdxPage",name:"collection_start_time",route:"/datamodel/general_params/collection_start_time"},{kind:"MdxPage",name:"depositors",route:"/datamodel/general_params/depositors"},{kind:"MdxPage",name:"entities_of_interest",route:"/datamodel/general_params/entities_of_interest"},{kind:"MdxPage",name:"funding",route:"/datamodel/general_params/funding"},{kind:"MdxPage",name:"instrument",route:"/datamodel/general_params/instrument"},{kind:"MdxPage",name:"intro",route:"/datamodel/general_params/intro"},{kind:"MdxPage",name:"record_information",route:"/datamodel/general_params/record_information"},{kind:"MdxPage",name:"results",route:"/datamodel/general_params/results"},{kind:"MdxPage",name:"schema_version",route:"/datamodel/general_params/schema_version"},{kind:"MdxPage",name:"technique",route:"/datamodel/general_params/technique"}]},{kind:"MdxPage",name:"intro",route:"/datamodel/intro"},{kind:"Folder",name:"itc",route:"/datamodel/itc",children:[{kind:"Meta",data:{intro:"Introduction",itc_specific:"Method specific parameters",injection_mode:"Injection mode",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/itc/data_analysis"},{kind:"MdxPage",name:"injection_mode",route:"/datamodel/itc/injection_mode"},{kind:"MdxPage",name:"intro",route:"/datamodel/itc/intro"},{kind:"MdxPage",name:"itc_specific",route:"/datamodel/itc/itc_specific"},{kind:"MdxPage",name:"measurement",route:"/datamodel/itc/measurement"}]},{kind:"Folder",name:"mst",route:"/datamodel/mst",children:[{kind:"Meta",data:{intro:"Introduction",mst_specific:"MST specific fields",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/mst/data_analysis"},{kind:"MdxPage",name:"intro",route:"/datamodel/mst/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/mst/measurement"},{kind:"MdxPage",name:"mst_specific",route:"/datamodel/mst/mst_specific"}]},{kind:"Folder",name:"reusable_elements",route:"/datamodel/reusable_elements",children:[{kind:"MdxPage",name:"biological_origin",route:"/datamodel/reusable_elements/biological_origin"},{kind:"MdxPage",name:"chemical",route:"/datamodel/reusable_elements/chemical"},{kind:"MdxPage",name:"chemical_constituent",route:"/datamodel/reusable_elements/chemical_constituent"},{kind:"MdxPage",name:"chemical_origin",route:"/datamodel/reusable_elements/chemical_origin"},{kind:"MdxPage",name:"concentration",route:"/datamodel/reusable_elements/concentration"},{kind:"MdxPage",name:"constituent",route:"/datamodel/reusable_elements/constituent"},{kind:"MdxPage",name:"data_fitting",route:"/datamodel/reusable_elements/data_fitting"},{kind:"MdxPage",name:"duration",route:"/datamodel/reusable_elements/duration"},{kind:"MdxPage",name:"entity_constituent",route:"/datamodel/reusable_elements/entity_constituent"},{kind:"MdxPage",name:"environmental_origin",route:"/datamodel/reusable_elements/environmental_origin"},{kind:"MdxPage",name:"industrial_origin",route:"/datamodel/reusable_elements/industrial_origin"},{kind:"MdxPage",name:"modification",route:"/datamodel/reusable_elements/modification"},{kind:"MdxPage",name:"molecular_assembly",route:"/datamodel/reusable_elements/molecular_assembly"},{kind:"MdxPage",name:"molecular_weight",route:"/datamodel/reusable_elements/molecular_weight"},{kind:"MdxPage",name:"organism",route:"/datamodel/reusable_elements/organism"},{kind:"MdxPage",name:"person",route:"/datamodel/reusable_elements/person"},{kind:"MdxPage",name:"polymer",route:"/datamodel/reusable_elements/polymer"},{kind:"MdxPage",name:"processing_step",route:"/datamodel/reusable_elements/processing_step"},{kind:"MdxPage",name:"quality_controls",route:"/datamodel/reusable_elements/quality_controls"},{kind:"MdxPage",name:"shaking",route:"/datamodel/reusable_elements/shaking"},{kind:"MdxPage",name:"step",route:"/datamodel/reusable_elements/step"},{kind:"MdxPage",name:"storage",route:"/datamodel/reusable_elements/storage"},{kind:"MdxPage",name:"supplier",route:"/datamodel/reusable_elements/supplier"},{kind:"MdxPage",name:"temperature",route:"/datamodel/reusable_elements/temperature"},{kind:"MdxPage",name:"value_error",route:"/datamodel/reusable_elements/value_error"},{kind:"MdxPage",name:"volume",route:"/datamodel/reusable_elements/volume"},{kind:"Meta",data:{biological_origin:"Biological Origin",chemical:"Chemical",chemical_constituent:"Chemical Constituent",chemical_origin:"Chemical Origin",concentration:"Concentration",constituent:"Constituent",data_fitting:"Data Fitting",duration:"Duration",entity_constituent:"Entity Constituent",environmental_origin:"Environmental Origin",industrial_origin:"Industrial Origin",modification:"Modification",molecular_assembly:"Molecular Assembly",molecular_weight:"Molecular Weight",organism:"Organism",person:"Person",polymer:"Polymer",processing_step:"Processing Step",quality_controls:"Quality Controls",shaking:"Shaking",step:"Step",storage:"Storage",supplier:"Supplier",temperature:"Temperature",value_error:"Value Error",volume:"Volume"}}]},{kind:"Folder",name:"spr",route:"/datamodel/spr",children:[{kind:"Meta",data:{intro:"Introduction",spr_specific:"Method specific parameters",sensor:"Sensor",measurement_position:"Measurement position",measurement_protocol:"Measurement protocol",measurement:"Measurement"}},{kind:"MdxPage",name:"intro",route:"/datamodel/spr/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/spr/measurement"},{kind:"MdxPage",name:"measurement_position",route:"/datamodel/spr/measurement_position"},{kind:"MdxPage",name:"measurement_protocol",route:"/datamodel/spr/measurement_protocol"},{kind:"MdxPage",name:"sensor",route:"/datamodel/spr/sensor"},{kind:"MdxPage",name:"spr_specific",route:"/datamodel/spr/spr_specific"}]}]},{kind:"Folder",name:"external",route:"/external",children:[{kind:"Meta",data:{intro:"Introduction",affiliations:"Affiliations",chemicals:"Chemicals",grants:"Funding references",organisms:"Organisms"}},{kind:"MdxPage",name:"affiliations",route:"/external/affiliations"},{kind:"MdxPage",name:"chemicals",route:"/external/chemicals"},{kind:"MdxPage",name:"grants",route:"/external/grants"},{kind:"MdxPage",name:"intro",route:"/external/intro"},{kind:"MdxPage",name:"organisms",route:"/external/organisms"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"issues",route:"/issues",children:[{kind:"Meta",data:{intro:"Introduction","app-issues":"Reported issues"}},{kind:"MdxPage",name:"app-issues",route:"/issues/app-issues"},{kind:"MdxPage",name:"intro",route:"/issues/intro"}]},{kind:"Folder",name:"license",route:"/license",children:[{kind:"Meta",data:{intro:"Introduction"}},{kind:"MdxPage",name:"intro",route:"/license/intro"}]},{kind:"Folder",name:"rest_api",route:"/rest_api",children:[{kind:"Meta",data:{intro:"Introduction"}},{kind:"MdxPage",name:"intro",route:"/rest_api/intro"}]},{kind:"Folder",name:"technologies",route:"/technologies",children:[{kind:"Meta",data:{intro:"Introduction"}},{kind:"MdxPage",name:"intro",route:"/technologies/intro"}]}],flexsearch:{codeblocks:!0},title:"Associated publication",headings:d},pageNextRoute:"/datamodel/general_params/associated_publication",nextraLayout:r.ZP,themeConfig:s.Z};t.default=(0,i.j)(m)},1255:function(e,t,a){"use strict";var n=a(5893),i=a(6231);t.Z={logo:(0,n.jsx)("span",{children:"MBDB"}),logoLink:"https://mbdb.test.du.cesnet.cz/",project:{link:"https://github.com/Molecular-Biophysics-Database/mbdb-app"},sidebar:{defaultMenuCollapseLevel:1},docsRepositoryBase:"https://github.com/Molecular-Biophysics-Database/mbdb-docs/tree/main",head:()=>{let{frontMatter:e}=(0,i.ZR)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{property:"og:title",content:e.title||"MBDB Docs"}),(0,n.jsx)("meta",{property:"og:description",content:e.description||"The documentation for MBDB"})]})}}},5789:function(){}},function(e){e.O(0,[4955,2888,9774,179],function(){return e(e.s=4500)}),_N_E=e.O()}]);