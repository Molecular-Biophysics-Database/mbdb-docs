(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1341],{7968:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datamodel/reusable_elements/polymer",function(){return i(4967)}])},4967:function(e,n,i){"use strict";i.r(n),i.d(n,{__toc:function(){return d}});var t=i(5893),a=i(2673),r=i(6231),o=i(1255);i(9488);var s=i(2643);let d=[{depth:2,value:"polymer_type",id:"polymer_type"},{depth:2,value:"sequence",id:"sequence"},{depth:2,value:"external_databases",id:"external_databases"},{depth:2,value:"molecular_weight",id:"molecular_weight"},{depth:2,value:"variant",id:"variant"},{depth:2,value:"source_organism",id:"source_organism"},{depth:2,value:"expression_source_type",id:"expression_source_type"},{depth:2,value:"expression_organism",id:"expression_organism"},{depth:2,value:"modifications",id:"modifications"},{depth:2,value:"Available fields in modifications",id:"available-fields-in-modifications"},{depth:3,value:"synthesis",id:"synthesis"},{depth:3,value:"biological_postprocessing",id:"biological_postprocessing"},{depth:3,value:"chemical",id:"chemical"},{depth:2,value:"additional_specifications",id:"additional_specifications"},{depth:2,value:"quality_controls",id:"quality_controls"}];function l(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",br:"br",a:"a",h3:"h3"},(0,s.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"Polymer"}),"\n",(0,t.jsx)(n.h2,{id:"polymer_type",children:"polymer_type"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Description"}),": The type of polymer (e.g. polypeptide(L)) ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Required"}),": yes ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Type"}),": enumerator (string) ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Options"}),": ('cyclic-pseudo-peptide',\n'peptide nucleic acid',\n'polydeoxyribonucleotide',\n'polydeoxyribonucleotide/polyribonucleotide\nhybrid',\n'polypeptide(D)',\n'polypeptide(L)',\n'polyribonucleotide') ",(0,t.jsx)(n.br,{})]}),"\n",(0,t.jsx)(n.h2,{id:"sequence",children:"sequence"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Description"}),": Primary sequence of the polymer, using single letter codes (e.g. SAGRELLE, AGTTA). In case of non-natural amino acids or nucleotides, please place the monomer in brackets ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Required"}),": no ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Type"}),": string (fulltext) ",(0,t.jsx)(n.br,{})]}),"\n",(0,t.jsx)(n.h2,{id:"external_databases",children:"external_databases"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Description"}),": List of identifiers to records in external databases containing information about the polymer can be specified here (e.g uniprot:Q8KRF6)",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Required"}),": no ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Type"}),": array of string ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Format"}),': "uniprot:XXXXX"']}),"\n",(0,t.jsx)(n.h2,{id:"molecular_weight",children:"molecular_weight"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Description"}),": The molecular weight of the polymer",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Required"}),": yes ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Type"}),": object (Molecular_weight) ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Contains"}),": see ",(0,t.jsx)(n.a,{href:"molecular_weight",children:"Molecular weight"})]}),"\n",(0,t.jsx)(n.h2,{id:"variant",children:"variant"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Description"}),": Descriptive name indicating differences of primary sequence of the polymer as compared to the most common form, or wildtype, including mutations,purification tags, etc. (A53T, C-terminal GFP, N-terminal 6xHis-tag)",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Required"}),": no ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Type"}),": string (fulltext) ",(0,t.jsx)(n.br,{})]}),"\n",(0,t.jsx)(n.h2,{id:"source_organism",children:"source_organism"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Description"}),": The biological species where the polymer naturally occurs. Note that this is based on the NCBI taxonomy",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Required"}),": no ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Type"}),": object (vocabulary)  ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Contains"})," see ",(0,t.jsx)(n.a,{href:"organism",children:"Organism"})]}),"\n",(0,t.jsx)(n.h2,{id:"expression_source_type",children:"expression_source_type"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Description"}),": How the polymer was produced",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Required"}),": yes ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Type"}),": enumerator (string) ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Options"}),": ('Natively', 'Recombinantly', 'Synthetically')"]}),"\n",(0,t.jsx)(n.h2,{id:"expression_organism",children:"expression_organism"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Description"}),": The biological species where the polymer naturally occurs. Note that this is based on the NCBI taxonomy",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Required"}),": yes ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Type"}),": object (vocabulary)  ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Contains"})," see ",(0,t.jsx)(n.a,{href:"organism",children:"Organism"})]}),"\n",(0,t.jsx)(n.h2,{id:"modifications",children:"modifications"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Description"}),": If the polymer contains modifications such as non-natural aminoacids, post translational modification, or chemically modifications like labeling, it can be specified here",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Required"}),": no ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Type"}),": object (vocabulary)  ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Contains"})," see ",(0,t.jsx)(n.a,{href:"#available-fields-in-modifications",children:"Available fields in modifications"})]}),"\n",(0,t.jsx)(n.h2,{id:"available-fields-in-modifications",children:"Available fields in modifications"}),"\n",(0,t.jsx)(n.h3,{id:"synthesis",children:"synthesis"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Description"}),": Modifications (e.g. non-natural amino acids) of the polymer made during synthesis (e.g. translation) of the polymer",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Required"}),": no ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Type"}),": array of object (Modification) ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Contains"})," see ",(0,t.jsx)(n.a,{href:"modification",children:"Modification"})]}),"\n",(0,t.jsx)(n.h3,{id:"biological_postprocessing",children:"biological_postprocessing"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Description"}),": Modifications of the polymer made after synthesis (e.g. posttranslational modifications, DNA methylation) by the organism where synthesis occurred (e.g. glycosylation)",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Required"}),": no ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Type"}),": array of object (Modification)  ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Contains"})," see ",(0,t.jsx)(n.a,{href:"modification",children:"Modification"})]}),"\n",(0,t.jsx)(n.h3,{id:"chemical",children:"chemical"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Description"}),": Modifications of the polymer introduced by chemical, biochemical, or physical means in vitro (e.g. lysine methylation, cysteine iodoacetamide labeling, deglycosylation, covalent fluorescent labeling)",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Required"}),": no ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Type"}),": array of object (Modification)  ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Contains"})," see ",(0,t.jsx)(n.a,{href:"modification",children:"Modification"})]}),"\n",(0,t.jsx)(n.h2,{id:"additional_specifications",children:"additional_specifications"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Description"}),": Additional information about the polymer can be specified here",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Required"}),": no ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Type"}),": array of string (fulltext) ",(0,t.jsx)(n.br,{})]}),"\n",(0,t.jsx)(n.h2,{id:"quality_controls",children:"quality_controls"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Description"}),": Information about if and how quality control of the polymer was performed",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Required"}),": no ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Type"}),": object (Quality_controls) ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Contains"})," see ",(0,t.jsx)(n.a,{href:"quality_controls",children:"Quality controls"})]})]})}let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.a)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/datamodel/reusable_elements/polymer.md",route:"/datamodel/reusable_elements/polymer",timestamp:172425259e4,pageMap:[{kind:"Meta",data:{index:{title:"Home",type:"page"},datamodel:{title:"Data model",type:"page"},external:{title:"External Resources",type:"page"},technologies:{title:"Technologies",type:"page"},rest_api:{title:"REST API",type:"page"},license:{title:"Licensing",type:"page"},issues:{title:"Known Issues",type:"page"}}},{kind:"Folder",name:"datamodel",route:"/datamodel",children:[{kind:"Meta",data:{intro:"Introduction",general_params:"General parameters",reusable_elements:"Reusable elements",bli:"BLI",mst:"MST",spr:"SPR",itc:"ITC"}},{kind:"Folder",name:"bli",route:"/datamodel/bli",children:[{kind:"Meta",data:{intro:"Introduction",bli_specific:"Method specific parameters",plate:"Plate",sensor:"Sensor",measurement_protocol:"Measurement protocol",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"bli_specific",route:"/datamodel/bli/bli_specific"},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/bli/data_analysis"},{kind:"MdxPage",name:"intro",route:"/datamodel/bli/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/bli/measurement"},{kind:"MdxPage",name:"measurement_protocol",route:"/datamodel/bli/measurement_protocol"},{kind:"MdxPage",name:"plate",route:"/datamodel/bli/plate"},{kind:"MdxPage",name:"sensor",route:"/datamodel/bli/sensor"}]},{kind:"Folder",name:"general_params",route:"/datamodel/general_params",children:[{kind:"Meta",data:{intro:"Introduction",schema_version:"Schema version",record_information:"Record information",depositors:"Depositors (authors)",associated_publication:"Associated publication",funding:"Funding reference",technique:"Technique",collection_start_time:"Collection start time",instrument:"Instrument",entities_of_interest:"Entities of interest",chemical_environments:"Chemical environments",results:"Results",raw_measurements:"Raw measurements (files)"}},{kind:"MdxPage",name:"associated_publication",route:"/datamodel/general_params/associated_publication"},{kind:"MdxPage",name:"chemical_environments",route:"/datamodel/general_params/chemical_environments"},{kind:"MdxPage",name:"collection_start_time",route:"/datamodel/general_params/collection_start_time"},{kind:"MdxPage",name:"depositors",route:"/datamodel/general_params/depositors"},{kind:"MdxPage",name:"entities_of_interest",route:"/datamodel/general_params/entities_of_interest"},{kind:"MdxPage",name:"funding",route:"/datamodel/general_params/funding"},{kind:"MdxPage",name:"instrument",route:"/datamodel/general_params/instrument"},{kind:"MdxPage",name:"intro",route:"/datamodel/general_params/intro"},{kind:"MdxPage",name:"raw_measurements",route:"/datamodel/general_params/raw_measurements"},{kind:"MdxPage",name:"record_information",route:"/datamodel/general_params/record_information"},{kind:"MdxPage",name:"results",route:"/datamodel/general_params/results"},{kind:"MdxPage",name:"schema_version",route:"/datamodel/general_params/schema_version"},{kind:"MdxPage",name:"technique",route:"/datamodel/general_params/technique"}]},{kind:"MdxPage",name:"intro",route:"/datamodel/intro"},{kind:"Folder",name:"itc",route:"/datamodel/itc",children:[{kind:"Meta",data:{intro:"Introduction",itc_specific:"Method specific parameters",injection_mode:"Injection mode",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/itc/data_analysis"},{kind:"MdxPage",name:"injection_mode",route:"/datamodel/itc/injection_mode"},{kind:"MdxPage",name:"intro",route:"/datamodel/itc/intro"},{kind:"MdxPage",name:"itc_specific",route:"/datamodel/itc/itc_specific"},{kind:"MdxPage",name:"measurement",route:"/datamodel/itc/measurement"}]},{kind:"Folder",name:"mst",route:"/datamodel/mst",children:[{kind:"Meta",data:{intro:"Introduction",mst_specific:"MST specific fields",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/mst/data_analysis"},{kind:"MdxPage",name:"intro",route:"/datamodel/mst/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/mst/measurement"},{kind:"MdxPage",name:"mst_specific",route:"/datamodel/mst/mst_specific"}]},{kind:"Folder",name:"reusable_elements",route:"/datamodel/reusable_elements",children:[{kind:"MdxPage",name:"biological_origin",route:"/datamodel/reusable_elements/biological_origin"},{kind:"MdxPage",name:"chemical",route:"/datamodel/reusable_elements/chemical"},{kind:"MdxPage",name:"chemical_constituent",route:"/datamodel/reusable_elements/chemical_constituent"},{kind:"MdxPage",name:"chemical_origin",route:"/datamodel/reusable_elements/chemical_origin"},{kind:"MdxPage",name:"concentration",route:"/datamodel/reusable_elements/concentration"},{kind:"MdxPage",name:"constituent",route:"/datamodel/reusable_elements/constituent"},{kind:"MdxPage",name:"data_fitting",route:"/datamodel/reusable_elements/data_fitting"},{kind:"MdxPage",name:"duration",route:"/datamodel/reusable_elements/duration"},{kind:"MdxPage",name:"entity_constituent",route:"/datamodel/reusable_elements/entity_constituent"},{kind:"MdxPage",name:"environmental_origin",route:"/datamodel/reusable_elements/environmental_origin"},{kind:"MdxPage",name:"files",route:"/datamodel/reusable_elements/files"},{kind:"MdxPage",name:"industrial_origin",route:"/datamodel/reusable_elements/industrial_origin"},{kind:"MdxPage",name:"modification",route:"/datamodel/reusable_elements/modification"},{kind:"MdxPage",name:"molecular_assembly",route:"/datamodel/reusable_elements/molecular_assembly"},{kind:"MdxPage",name:"molecular_weight",route:"/datamodel/reusable_elements/molecular_weight"},{kind:"MdxPage",name:"organism",route:"/datamodel/reusable_elements/organism"},{kind:"MdxPage",name:"person",route:"/datamodel/reusable_elements/person"},{kind:"MdxPage",name:"polymer",route:"/datamodel/reusable_elements/polymer"},{kind:"MdxPage",name:"processing_step",route:"/datamodel/reusable_elements/processing_step"},{kind:"MdxPage",name:"quality_controls",route:"/datamodel/reusable_elements/quality_controls"},{kind:"MdxPage",name:"shaking",route:"/datamodel/reusable_elements/shaking"},{kind:"MdxPage",name:"step",route:"/datamodel/reusable_elements/step"},{kind:"MdxPage",name:"storage",route:"/datamodel/reusable_elements/storage"},{kind:"MdxPage",name:"supplier",route:"/datamodel/reusable_elements/supplier"},{kind:"MdxPage",name:"temperature",route:"/datamodel/reusable_elements/temperature"},{kind:"MdxPage",name:"value_error",route:"/datamodel/reusable_elements/value_error"},{kind:"MdxPage",name:"volume",route:"/datamodel/reusable_elements/volume"},{kind:"Meta",data:{biological_origin:"Biological Origin",chemical:"Chemical",chemical_constituent:"Chemical Constituent",chemical_origin:"Chemical Origin",concentration:"Concentration",constituent:"Constituent",data_fitting:"Data Fitting",duration:"Duration",entity_constituent:"Entity Constituent",environmental_origin:"Environmental Origin",files:"Files",industrial_origin:"Industrial Origin",modification:"Modification",molecular_assembly:"Molecular Assembly",molecular_weight:"Molecular Weight",organism:"Organism",person:"Person",polymer:"Polymer",processing_step:"Processing Step",quality_controls:"Quality Controls",shaking:"Shaking",step:"Step",storage:"Storage",supplier:"Supplier",temperature:"Temperature",value_error:"Value Error",volume:"Volume"}}]},{kind:"Folder",name:"spr",route:"/datamodel/spr",children:[{kind:"Meta",data:{intro:"Introduction",spr_specific:"Method specific parameters",sensor:"Sensor",measurement_position:"Measurement position",measurement_protocol:"Measurement protocol",measurement:"Measurement"}},{kind:"MdxPage",name:"intro",route:"/datamodel/spr/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/spr/measurement"},{kind:"MdxPage",name:"measurement_position",route:"/datamodel/spr/measurement_position"},{kind:"MdxPage",name:"measurement_protocol",route:"/datamodel/spr/measurement_protocol"},{kind:"MdxPage",name:"sensor",route:"/datamodel/spr/sensor"},{kind:"MdxPage",name:"spr_specific",route:"/datamodel/spr/spr_specific"}]}]},{kind:"Folder",name:"external",route:"/external",children:[{kind:"Meta",data:{intro:"Introduction",affiliations:"Affiliations",chemicals:"Chemicals",grants:"Funding references",organisms:"Organisms"}},{kind:"MdxPage",name:"affiliations",route:"/external/affiliations"},{kind:"MdxPage",name:"chemicals",route:"/external/chemicals"},{kind:"MdxPage",name:"grants",route:"/external/grants"},{kind:"MdxPage",name:"intro",route:"/external/intro"},{kind:"MdxPage",name:"organisms",route:"/external/organisms"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"issues",route:"/issues",children:[{kind:"Meta",data:{intro:"Introduction","app-issues":"Reported issues"}},{kind:"MdxPage",name:"app-issues",route:"/issues/app-issues"},{kind:"MdxPage",name:"intro",route:"/issues/intro"}]},{kind:"Folder",name:"license",route:"/license",children:[{kind:"Meta",data:{intro:"Introduction"}},{kind:"MdxPage",name:"intro",route:"/license/intro"}]},{kind:"Folder",name:"rest_api",route:"/rest_api",children:[{kind:"Meta",data:{intro:"Introduction"}},{kind:"MdxPage",name:"intro",route:"/rest_api/intro"}]},{kind:"Folder",name:"technologies",route:"/technologies",children:[{kind:"Meta",data:{intro:"Introduction"}},{kind:"MdxPage",name:"intro",route:"/technologies/intro"}]}],flexsearch:{codeblocks:!0},title:"Polymer",headings:d},pageNextRoute:"/datamodel/reusable_elements/polymer",nextraLayout:r.ZP,themeConfig:o.Z};n.default=(0,a.j)(c)},1255:function(e,n,i){"use strict";var t=i(5893),a=i(6231);n.Z={logo:(0,t.jsx)("span",{children:"MBDB"}),logoLink:"https://mbdb.test.du.cesnet.cz/",project:{link:"https://github.com/Molecular-Biophysics-Database/mbdb-app"},sidebar:{defaultMenuCollapseLevel:1},docsRepositoryBase:"https://github.com/Molecular-Biophysics-Database/mbdb-docs/tree/main",head:()=>{let{frontMatter:e}=(0,a.ZR)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("meta",{property:"og:title",content:e.title||"MBDB Docs"}),(0,t.jsx)("meta",{property:"og:description",content:e.description||"The documentation for MBDB"})]})}}},5789:function(){}},function(e){e.O(0,[4955,2888,9774,179],function(){return e(e.s=7968)}),_N_E=e.O()}]);