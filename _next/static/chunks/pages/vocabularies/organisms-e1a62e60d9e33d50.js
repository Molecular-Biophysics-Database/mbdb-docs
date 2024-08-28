(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2351],{6042:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vocabularies/organisms",function(){return t(7738)}])},7738:function(e,a,t){"use strict";t.r(a),t.d(a,{__toc:function(){return d}});var n=t(5893),i=t(2673),o=t(6231),s=t(1255);t(9488);var r=t(2643);let d=[{depth:2,value:"Source",id:"source"},{depth:2,value:"How is the information accessed?",id:"how-is-the-information-accessed"},{depth:2,value:"I can't find the organism I used, what should I do.",id:"i-cant-find-the-organism-i-used-what-should-i-do"},{depth:3,value:"The specific strain I used is not available",id:"the-specific-strain-i-used-is-not-available"},{depth:3,value:"The species, genus, etc.",id:"the-species-genus-etc"},{depth:2,value:"Fields available",id:"fields-available"},{depth:3,value:"id",id:"id"},{depth:3,value:"title",id:"title"},{depth:3,value:"rank",id:"rank"}];function l(e){let a=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",h3:"h3",code:"code",strong:"strong",br:"br"},(0,r.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{children:"Organisms"}),"\n",(0,n.jsx)(a.h2,{id:"source",children:"Source"}),"\n",(0,n.jsx)(a.p,{children:"We're using NCBI taxonomies to annotate biological organisms (including virus)."}),"\n",(0,n.jsx)(a.h2,{id:"how-is-the-information-accessed",children:"How is the information accessed?"}),"\n",(0,n.jsxs)(a.p,{children:["We're accessing the information from within the MBDB using their\n",(0,n.jsx)(a.a,{href:"https://www.ncbi.nlm.nih.gov/datasets/docs/v1/reference-docs/rest-api/",children:"REST API"}),'.\nIn particular, we\'re using the "taxon_suggest" endpoint for searching for\ntaxonomy ids, and then extracting the information associated with each\ntaxonomy id using the "taxon" endpoint.']}),"\n",(0,n.jsx)(a.h2,{id:"i-cant-find-the-organism-i-used-what-should-i-do",children:"I can't find the organism I used, what should I do."}),"\n",(0,n.jsx)(a.p,{children:"Depending on which taxa (level) information are unavailable for you should\ndo one of the two following things"}),"\n",(0,n.jsx)(a.h3,{id:"the-specific-strain-i-used-is-not-available",children:"The specific strain I used is not available"}),"\n",(0,n.jsx)(a.p,{children:"We want to have the information as precise as possible, and therefor would like\nto have the information to the strain level, especially if this is known to be\ncritical to the obtained results (in which case have a look at the\ninstructions below). Otherwise, it can be specified to the species level of\nprecision."}),"\n",(0,n.jsx)(a.h3,{id:"the-species-genus-etc",children:"The species, genus, etc."}),"\n",(0,n.jsxs)(a.p,{children:["Deposition genetic information to one of the sources that the NCBI taxonomy\ndraws it's information from is required. The NCBI taxonomy draws it's\ninformation from several sources under The International Nucleotide Sequence\nDatabase Collaboration (INSDC). Links to the deposition system that is most\nappropriate for you can be found ",(0,n.jsx)(a.a,{href:"https://www.insdc.org/",children:"here"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"fields-available",children:"Fields available"}),"\n",(0,n.jsx)(a.h3,{id:"id",children:"id"}),"\n",(0,n.jsxs)(a.p,{children:["The id prefix is ",(0,n.jsx)(a.code,{children:"taxid:"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Description"}),": NCBI taxid of the organism (e.g. 9606) to the lowest\npossible taxonomic rank (e.g. species)",(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.strong,{children:"Required"}),": yes ",(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.strong,{children:"Type"}),": string (keyword) ",(0,n.jsx)(a.br,{})]}),"\n",(0,n.jsx)(a.h3,{id:"title",children:"title"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Description"}),": Name of organism associated with the taxid (e.g. Mycobacterium phage PurpleHaze_DEM1",(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.strong,{children:"Required"}),": yes ",(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.strong,{children:"Type"}),": object (Title) ",(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.strong,{children:"Contains"}),": see ",(0,n.jsx)(a.a,{href:"../datamodel/reusable_elements/vocabulary_title",children:"Vocabulary title"})]}),"\n",(0,n.jsx)(a.h3,{id:"rank",children:"rank"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Description"}),": The taxonomic level the taxid is associated with (e.g. SPECIES)",(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.strong,{children:"Required"}),": yes ",(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.strong,{children:"Type"}),": string (keyword) ",(0,n.jsx)(a.br,{})]})]})}let m={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,r.a)(),e.components);return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/vocabularies/organisms.md",route:"/vocabularies/organisms",timestamp:1724849521e3,pageMap:[{kind:"Meta",data:{index:{title:"Home",type:"page"},datamodel:{title:"Data model",type:"page"},vocabularies:{title:"Vocabularies",type:"page"},technologies:{title:"Technologies",type:"page"},rest_api:{title:"REST API",type:"page"},license:{title:"Licensing",type:"page"},issues:{title:"Known Issues",type:"page"}}},{kind:"Folder",name:"datamodel",route:"/datamodel",children:[{kind:"Meta",data:{intro:"Introduction",general_params:"General parameters",reusable_elements:"Reusable elements",bli:"BLI",mst:"MST",spr:"SPR",itc:"ITC",files:"Files"}},{kind:"Folder",name:"bli",route:"/datamodel/bli",children:[{kind:"Meta",data:{intro:"Introduction",bli_specific:"Method specific parameters",plate:"Plate",sensor:"Sensor",measurement_protocol:"Measurement protocol",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"bli_specific",route:"/datamodel/bli/bli_specific"},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/bli/data_analysis"},{kind:"MdxPage",name:"intro",route:"/datamodel/bli/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/bli/measurement"},{kind:"MdxPage",name:"measurement_protocol",route:"/datamodel/bli/measurement_protocol"},{kind:"MdxPage",name:"plate",route:"/datamodel/bli/plate"},{kind:"MdxPage",name:"sensor",route:"/datamodel/bli/sensor"}]},{kind:"MdxPage",name:"files",route:"/datamodel/files"},{kind:"Folder",name:"general_params",route:"/datamodel/general_params",children:[{kind:"Meta",data:{intro:"Introduction",schema_version:"Schema version",record_information:"Record information",depositors:"Depositors (authors)",associated_publication:"Associated publication",funding:"Funding reference",technique:"Technique",collection_start_time:"Collection start time",instrument:"Instrument",entities_of_interest:"Entities of interest",chemical_environments:"Chemical environments",results:"Results",raw_measurements:"Raw measurements (files)"}},{kind:"MdxPage",name:"associated_publication",route:"/datamodel/general_params/associated_publication"},{kind:"MdxPage",name:"chemical_environments",route:"/datamodel/general_params/chemical_environments"},{kind:"MdxPage",name:"collection_start_time",route:"/datamodel/general_params/collection_start_time"},{kind:"MdxPage",name:"depositors",route:"/datamodel/general_params/depositors"},{kind:"MdxPage",name:"entities_of_interest",route:"/datamodel/general_params/entities_of_interest"},{kind:"MdxPage",name:"funding",route:"/datamodel/general_params/funding"},{kind:"MdxPage",name:"instrument",route:"/datamodel/general_params/instrument"},{kind:"MdxPage",name:"intro",route:"/datamodel/general_params/intro"},{kind:"MdxPage",name:"record_information",route:"/datamodel/general_params/record_information"},{kind:"MdxPage",name:"results",route:"/datamodel/general_params/results"},{kind:"MdxPage",name:"schema_version",route:"/datamodel/general_params/schema_version"},{kind:"MdxPage",name:"technique",route:"/datamodel/general_params/technique"}]},{kind:"MdxPage",name:"intro",route:"/datamodel/intro"},{kind:"Folder",name:"itc",route:"/datamodel/itc",children:[{kind:"Meta",data:{intro:"Introduction",itc_specific:"Method specific parameters",injection_mode:"Injection mode",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/itc/data_analysis"},{kind:"MdxPage",name:"injection_mode",route:"/datamodel/itc/injection_mode"},{kind:"MdxPage",name:"intro",route:"/datamodel/itc/intro"},{kind:"MdxPage",name:"itc_specific",route:"/datamodel/itc/itc_specific"},{kind:"MdxPage",name:"measurement",route:"/datamodel/itc/measurement"}]},{kind:"Folder",name:"mst",route:"/datamodel/mst",children:[{kind:"Meta",data:{intro:"Introduction",mst_specific:"MST specific fields",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/mst/data_analysis"},{kind:"MdxPage",name:"intro",route:"/datamodel/mst/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/mst/measurement"},{kind:"MdxPage",name:"mst_specific",route:"/datamodel/mst/mst_specific"}]},{kind:"Folder",name:"reusable_elements",route:"/datamodel/reusable_elements",children:[{kind:"MdxPage",name:"biological_origin",route:"/datamodel/reusable_elements/biological_origin"},{kind:"MdxPage",name:"chemical",route:"/datamodel/reusable_elements/chemical"},{kind:"MdxPage",name:"chemical_constituent",route:"/datamodel/reusable_elements/chemical_constituent"},{kind:"MdxPage",name:"chemical_origin",route:"/datamodel/reusable_elements/chemical_origin"},{kind:"MdxPage",name:"concentration",route:"/datamodel/reusable_elements/concentration"},{kind:"MdxPage",name:"constituent",route:"/datamodel/reusable_elements/constituent"},{kind:"MdxPage",name:"data_fitting",route:"/datamodel/reusable_elements/data_fitting"},{kind:"MdxPage",name:"duration",route:"/datamodel/reusable_elements/duration"},{kind:"MdxPage",name:"entity_constituent",route:"/datamodel/reusable_elements/entity_constituent"},{kind:"MdxPage",name:"environmental_origin",route:"/datamodel/reusable_elements/environmental_origin"},{kind:"MdxPage",name:"industrial_origin",route:"/datamodel/reusable_elements/industrial_origin"},{kind:"MdxPage",name:"modification",route:"/datamodel/reusable_elements/modification"},{kind:"MdxPage",name:"molecular_assembly",route:"/datamodel/reusable_elements/molecular_assembly"},{kind:"MdxPage",name:"molecular_weight",route:"/datamodel/reusable_elements/molecular_weight"},{kind:"MdxPage",name:"organism",route:"/datamodel/reusable_elements/organism"},{kind:"MdxPage",name:"person",route:"/datamodel/reusable_elements/person"},{kind:"MdxPage",name:"polymer",route:"/datamodel/reusable_elements/polymer"},{kind:"MdxPage",name:"processing_step",route:"/datamodel/reusable_elements/processing_step"},{kind:"MdxPage",name:"quality_controls",route:"/datamodel/reusable_elements/quality_controls"},{kind:"MdxPage",name:"shaking",route:"/datamodel/reusable_elements/shaking"},{kind:"MdxPage",name:"step",route:"/datamodel/reusable_elements/step"},{kind:"MdxPage",name:"storage",route:"/datamodel/reusable_elements/storage"},{kind:"MdxPage",name:"supplier",route:"/datamodel/reusable_elements/supplier"},{kind:"MdxPage",name:"temperature",route:"/datamodel/reusable_elements/temperature"},{kind:"MdxPage",name:"value_error",route:"/datamodel/reusable_elements/value_error"},{kind:"MdxPage",name:"vocabulary_title",route:"/datamodel/reusable_elements/vocabulary_title"},{kind:"MdxPage",name:"volume",route:"/datamodel/reusable_elements/volume"},{kind:"Meta",data:{biological_origin:"Biological Origin",chemical:"Chemical",chemical_constituent:"Chemical Constituent",chemical_origin:"Chemical Origin",concentration:"Concentration",constituent:"Constituent",data_fitting:"Data Fitting",duration:"Duration",entity_constituent:"Entity Constituent",environmental_origin:"Environmental Origin",industrial_origin:"Industrial Origin",modification:"Modification",molecular_assembly:"Molecular Assembly",molecular_weight:"Molecular Weight",organism:"Organism",person:"Person",polymer:"Polymer",processing_step:"Processing Step",quality_controls:"Quality Controls",shaking:"Shaking",step:"Step",storage:"Storage",supplier:"Supplier",temperature:"Temperature",value_error:"Value Error",vocabulary_title:"Vocabulary Title",volume:"Volume"}}]},{kind:"Folder",name:"spr",route:"/datamodel/spr",children:[{kind:"Meta",data:{intro:"Introduction",spr_specific:"Method specific parameters",sensor:"Sensor",measurement_position:"Measurement position",measurement_protocol:"Measurement protocol",measurement:"Measurement"}},{kind:"MdxPage",name:"intro",route:"/datamodel/spr/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/spr/measurement"},{kind:"MdxPage",name:"measurement_position",route:"/datamodel/spr/measurement_position"},{kind:"MdxPage",name:"measurement_protocol",route:"/datamodel/spr/measurement_protocol"},{kind:"MdxPage",name:"sensor",route:"/datamodel/spr/sensor"},{kind:"MdxPage",name:"spr_specific",route:"/datamodel/spr/spr_specific"}]}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"issues",route:"/issues",children:[{kind:"Meta",data:{intro:"Introduction","app-issues":"Reported issues"}},{kind:"MdxPage",name:"app-issues",route:"/issues/app-issues"},{kind:"MdxPage",name:"intro",route:"/issues/intro"}]},{kind:"Folder",name:"license",route:"/license",children:[{kind:"Meta",data:{intro:"Introduction"}},{kind:"MdxPage",name:"intro",route:"/license/intro"}]},{kind:"Folder",name:"rest_api",route:"/rest_api",children:[{kind:"Meta",data:{intro:"Introduction",authentication:"Authentication",records:"Records",vocabularies:"Vocabularies"}},{kind:"MdxPage",name:"authentication",route:"/rest_api/authentication"},{kind:"MdxPage",name:"intro",route:"/rest_api/intro"},{kind:"Folder",name:"records",route:"/rest_api/records",children:[{kind:"Meta",data:{retrieval:"Retrieval",deposition:"Deposition",search:"Search"}},{kind:"MdxPage",name:"deposition",route:"/rest_api/records/deposition"},{kind:"MdxPage",name:"retrieval",route:"/rest_api/records/retrieval"},{kind:"MdxPage",name:"search",route:"/rest_api/records/search"}]},{kind:"MdxPage",name:"vocabularies",route:"/rest_api/vocabularies"}]},{kind:"Folder",name:"technologies",route:"/technologies",children:[{kind:"Meta",data:{intro:"Introduction"}},{kind:"MdxPage",name:"intro",route:"/technologies/intro"}]},{kind:"Folder",name:"vocabularies",route:"/vocabularies",children:[{kind:"Meta",data:{intro:"Introduction",affiliations:"Affiliations",chemicals:"Chemicals",grants:"Grants",instruments:"Instruments",languages:"Languages",organisms:"Organisms"}},{kind:"MdxPage",name:"affiliations",route:"/vocabularies/affiliations"},{kind:"MdxPage",name:"chemicals",route:"/vocabularies/chemicals"},{kind:"MdxPage",name:"grants",route:"/vocabularies/grants"},{kind:"MdxPage",name:"instruments",route:"/vocabularies/instruments"},{kind:"MdxPage",name:"intro",route:"/vocabularies/intro"},{kind:"MdxPage",name:"languages",route:"/vocabularies/languages"},{kind:"MdxPage",name:"organisms",route:"/vocabularies/organisms"}]}],flexsearch:{codeblocks:!0},title:"Organisms",headings:d},pageNextRoute:"/vocabularies/organisms",nextraLayout:o.ZP,themeConfig:s.Z};a.default=(0,i.j)(m)},1255:function(e,a,t){"use strict";var n=t(5893),i=t(6231);a.Z={logo:(0,n.jsx)("span",{children:"MBDB"}),logoLink:"https://mbdb.test.du.cesnet.cz/",project:{link:"https://github.com/Molecular-Biophysics-Database/mbdb-app"},sidebar:{defaultMenuCollapseLevel:1},docsRepositoryBase:"https://github.com/Molecular-Biophysics-Database/mbdb-docs/tree/main",head:()=>{let{frontMatter:e}=(0,i.ZR)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{property:"og:title",content:e.title||"MBDB Docs"}),(0,n.jsx)("meta",{property:"og:description",content:e.description||"The documentation for MBDB"})]})}}},5789:function(){}},function(e){e.O(0,[4955,2888,9774,179],function(){return e(e.s=6042)}),_N_E=e.O()}]);