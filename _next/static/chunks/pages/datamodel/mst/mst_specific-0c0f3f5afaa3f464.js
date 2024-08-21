(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3259],{2494:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datamodel/mst/mst_specific",function(){return t(8099)}])},8099:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return d}});var a=t(5893),i=t(2673),r=t(6231),s=t(1255);t(9488);var o=t(2643);let d=[{depth:2,value:"schema_version",id:"schema_version"},{depth:2,value:"experiment_type",id:"experiment_type"},{depth:2,value:"signal_type",id:"signal_type"},{depth:2,value:"excitation_led_color",id:"excitation_led_color"},{depth:2,value:"excitation_led_power",id:"excitation_led_power"},{depth:2,value:"ir_mst_laser_power",id:"ir_mst_laser_power"},{depth:2,value:"temperature",id:"temperature"},{depth:2,value:"measurements",id:"measurements"},{depth:2,value:"data_analysis",id:"data_analysis"}];function l(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",br:"br",code:"code",a:"a"},(0,o.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"Fields specific to MST"}),"\n",(0,a.jsx)(n.h2,{id:"schema_version",children:"schema_version"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Description"}),": The schema version used to annotate the MST method specific parameters ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Required"}),": yes ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Path"}),": ",(0,a.jsx)(n.code,{children:"metadata.method_specific_parameters.schema_version"})," ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Type"}),": enumerator (string) ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Options"}),": ('0.9.10') ",(0,a.jsx)(n.br,{})]}),"\n",(0,a.jsx)(n.h2,{id:"experiment_type",children:"experiment_type"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Description"}),": The type of physical parameter that was sought ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Required"}),": yes ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Path"}),": ",(0,a.jsx)(n.code,{children:"metadata.method_specific_parameters.experiment_type"})," ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Type"}),": enumerator (string) ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Options"}),": ('Affinity','Concentration', 'Other') ",(0,a.jsx)(n.br,{})]}),"\n",(0,a.jsx)(n.h2,{id:"signal_type",children:"signal_type"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Description"}),": The type of signal that was being measured ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Required"}),": yes ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Path"}),": ",(0,a.jsx)(n.code,{children:"metadata.method_specific_parameters.signal_type"})," ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Type"}),": enumerator (string) ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Options"}),": ('Initial intensity', 'TRIC/MST', 'Spectral shift') ",(0,a.jsx)(n.br,{})]}),"\n",(0,a.jsx)(n.h2,{id:"excitation_led_color",children:"excitation_led_color"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Description"}),": The color of the excitation LED used for the experiment.\nNOTE that colors are specific to the combination in which it occurs,\ne.g. the GREEN in a BLUE/GREEN instrument, is not the same as the GREEN in a GREEN/RED instrument",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Required"}),": yes ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Path"}),": ",(0,a.jsx)(n.code,{children:"metadata.method_specific_parameters.excitation_led_color"})," ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Type"}),": enumerator (string) ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Options"}),": (\n'RED (ex 605-645nm, em 660-720nm)',",(0,a.jsx)(n.br,{}),"\n'RED (ex 610-645nm, em 680-720nm)',",(0,a.jsx)(n.br,{}),"\n'GREEN (ex 555-585nm, em 605-690nm)',",(0,a.jsx)(n.br,{}),"\n'GREEN (ex 515-550nm, em 565-600nm)',",(0,a.jsx)(n.br,{}),"\n'BLUE (ex 480-500nm, em 515-550nm)',",(0,a.jsx)(n.br,{}),"\n'BLUE (ex 460-500nm, em 515-560nm)',",(0,a.jsx)(n.br,{}),"\n'UV (ex 260-300nm, em 330-380nm)',",(0,a.jsx)(n.br,{}),"\n'Spectral shift') ",(0,a.jsx)(n.br,{})]}),"\n",(0,a.jsx)(n.h2,{id:"excitation_led_power",children:"excitation_led_power"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Description"}),":The power, in percent, of the excitation LED used in experiment",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Required"}),": yes ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Path"}),": ",(0,a.jsx)(n.code,{children:"metadata.method_specific_parameters.excitation_led_power"})," ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Type"}),": number (float) ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Min"}),": 0 ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Max"}),": 100 ",(0,a.jsx)(n.br,{})]}),"\n",(0,a.jsx)(n.h2,{id:"ir_mst_laser_power",children:"ir_mst_laser_power"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Description"}),":The power of the infrared LASER used in the experiment\nin percentages. Even though a change in nomenclature occurred in\nNanotemper's control software, the underlying data is still stored in\npercentages. Use the following conversion;\nLow = 20, Medium = 40, High = 60 ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Required"}),": yes ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Path"}),": ",(0,a.jsx)(n.code,{children:"metadata.method_specific_parameters.ir_mst_laser_power"})," ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Type"}),": number (float) ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Min"}),": 0 ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Max"}),": 100 ",(0,a.jsx)(n.br,{})]}),"\n",(0,a.jsx)(n.h2,{id:"temperature",children:"temperature"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Description"}),":The power of the infrared LASER used in the experiment\nin percentages. Even though a change in nomenclature occurred in\nNanotemper's control software, the underlying data is still stored in\npercentages. Use the following conversion;\nLow = 20, Medium = 40, High = 60 ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Required"}),": yes ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Path"}),": ",(0,a.jsx)(n.code,{children:"metadata.method_specific_parameters.temperature"})," ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Type"}),": object (Temperature) ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Contains"}),": see ",(0,a.jsx)(n.a,{href:"../reusable_elements/temperature",children:"Temperature"})]}),"\n",(0,a.jsx)(n.h2,{id:"measurements",children:"measurements"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Description"}),":List of the information about each\nmeasurement. This includes target(s),\nligand(s), chemical environment, and the\nposition of the sample within the instrument ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Required"}),": yes ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Path"}),": ",(0,a.jsx)(n.code,{children:"metadata.method_specific_parameters.measurements"})," ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Type"}),": array of object (Measurement) ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Contains"}),": see ",(0,a.jsx)(n.a,{href:"measurement",children:"Measurement"})]}),"\n",(0,a.jsx)(n.h2,{id:"data_analysis",children:"data_analysis"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Description"}),":The details of how data analysis was performed to obtain results ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Required"}),": yes ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Path"}),": ",(0,a.jsx)(n.code,{children:"metadata.method_specific_parameters.data_analysis"})," ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Type"}),": array of object (MST_data_analysis) ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Contains"}),": see ",(0,a.jsx)(n.a,{href:"data_analysis",children:"MST_data_analysis"})]})]})}let m={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.a)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/datamodel/mst/mst_specific.md",route:"/datamodel/mst/mst_specific",timestamp:1724256236e3,pageMap:[{kind:"Meta",data:{index:{title:"Home",type:"page"},datamodel:{title:"Data model",type:"page"},external:{title:"External Resources",type:"page"},technologies:{title:"Technologies",type:"page"},rest_api:{title:"REST API",type:"page"},license:{title:"Licensing",type:"page"},issues:{title:"Known Issues",type:"page"}}},{kind:"Folder",name:"datamodel",route:"/datamodel",children:[{kind:"Meta",data:{intro:"Introduction",general_params:"General parameters",reusable_elements:"Reusable elements",bli:"BLI",mst:"MST",spr:"SPR",itc:"ITC",files:"Files"}},{kind:"Folder",name:"bli",route:"/datamodel/bli",children:[{kind:"Meta",data:{intro:"Introduction",bli_specific:"Method specific parameters",plate:"Plate",sensor:"Sensor",measurement_protocol:"Measurement protocol",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"bli_specific",route:"/datamodel/bli/bli_specific"},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/bli/data_analysis"},{kind:"MdxPage",name:"intro",route:"/datamodel/bli/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/bli/measurement"},{kind:"MdxPage",name:"measurement_protocol",route:"/datamodel/bli/measurement_protocol"},{kind:"MdxPage",name:"plate",route:"/datamodel/bli/plate"},{kind:"MdxPage",name:"sensor",route:"/datamodel/bli/sensor"}]},{kind:"MdxPage",name:"files",route:"/datamodel/files"},{kind:"Folder",name:"general_params",route:"/datamodel/general_params",children:[{kind:"Meta",data:{intro:"Introduction",schema_version:"Schema version",record_information:"Record information",depositors:"Depositors (authors)",associated_publication:"Associated publication",funding:"Funding reference",technique:"Technique",collection_start_time:"Collection start time",instrument:"Instrument",entities_of_interest:"Entities of interest",chemical_environments:"Chemical environments",results:"Results",raw_measurements:"Raw measurements (files)"}},{kind:"MdxPage",name:"associated_publication",route:"/datamodel/general_params/associated_publication"},{kind:"MdxPage",name:"chemical_environments",route:"/datamodel/general_params/chemical_environments"},{kind:"MdxPage",name:"collection_start_time",route:"/datamodel/general_params/collection_start_time"},{kind:"MdxPage",name:"depositors",route:"/datamodel/general_params/depositors"},{kind:"MdxPage",name:"entities_of_interest",route:"/datamodel/general_params/entities_of_interest"},{kind:"MdxPage",name:"funding",route:"/datamodel/general_params/funding"},{kind:"MdxPage",name:"instrument",route:"/datamodel/general_params/instrument"},{kind:"MdxPage",name:"intro",route:"/datamodel/general_params/intro"},{kind:"MdxPage",name:"record_information",route:"/datamodel/general_params/record_information"},{kind:"MdxPage",name:"results",route:"/datamodel/general_params/results"},{kind:"MdxPage",name:"schema_version",route:"/datamodel/general_params/schema_version"},{kind:"MdxPage",name:"technique",route:"/datamodel/general_params/technique"}]},{kind:"MdxPage",name:"intro",route:"/datamodel/intro"},{kind:"Folder",name:"itc",route:"/datamodel/itc",children:[{kind:"Meta",data:{intro:"Introduction",itc_specific:"Method specific parameters",injection_mode:"Injection mode",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/itc/data_analysis"},{kind:"MdxPage",name:"injection_mode",route:"/datamodel/itc/injection_mode"},{kind:"MdxPage",name:"intro",route:"/datamodel/itc/intro"},{kind:"MdxPage",name:"itc_specific",route:"/datamodel/itc/itc_specific"},{kind:"MdxPage",name:"measurement",route:"/datamodel/itc/measurement"}]},{kind:"Folder",name:"mst",route:"/datamodel/mst",children:[{kind:"Meta",data:{intro:"Introduction",mst_specific:"MST specific fields",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/mst/data_analysis"},{kind:"MdxPage",name:"intro",route:"/datamodel/mst/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/mst/measurement"},{kind:"MdxPage",name:"mst_specific",route:"/datamodel/mst/mst_specific"}]},{kind:"Folder",name:"reusable_elements",route:"/datamodel/reusable_elements",children:[{kind:"MdxPage",name:"biological_origin",route:"/datamodel/reusable_elements/biological_origin"},{kind:"MdxPage",name:"chemical",route:"/datamodel/reusable_elements/chemical"},{kind:"MdxPage",name:"chemical_constituent",route:"/datamodel/reusable_elements/chemical_constituent"},{kind:"MdxPage",name:"chemical_origin",route:"/datamodel/reusable_elements/chemical_origin"},{kind:"MdxPage",name:"concentration",route:"/datamodel/reusable_elements/concentration"},{kind:"MdxPage",name:"constituent",route:"/datamodel/reusable_elements/constituent"},{kind:"MdxPage",name:"data_fitting",route:"/datamodel/reusable_elements/data_fitting"},{kind:"MdxPage",name:"duration",route:"/datamodel/reusable_elements/duration"},{kind:"MdxPage",name:"entity_constituent",route:"/datamodel/reusable_elements/entity_constituent"},{kind:"MdxPage",name:"environmental_origin",route:"/datamodel/reusable_elements/environmental_origin"},{kind:"MdxPage",name:"industrial_origin",route:"/datamodel/reusable_elements/industrial_origin"},{kind:"MdxPage",name:"modification",route:"/datamodel/reusable_elements/modification"},{kind:"MdxPage",name:"molecular_assembly",route:"/datamodel/reusable_elements/molecular_assembly"},{kind:"MdxPage",name:"molecular_weight",route:"/datamodel/reusable_elements/molecular_weight"},{kind:"MdxPage",name:"organism",route:"/datamodel/reusable_elements/organism"},{kind:"MdxPage",name:"person",route:"/datamodel/reusable_elements/person"},{kind:"MdxPage",name:"polymer",route:"/datamodel/reusable_elements/polymer"},{kind:"MdxPage",name:"processing_step",route:"/datamodel/reusable_elements/processing_step"},{kind:"MdxPage",name:"quality_controls",route:"/datamodel/reusable_elements/quality_controls"},{kind:"MdxPage",name:"shaking",route:"/datamodel/reusable_elements/shaking"},{kind:"MdxPage",name:"step",route:"/datamodel/reusable_elements/step"},{kind:"MdxPage",name:"storage",route:"/datamodel/reusable_elements/storage"},{kind:"MdxPage",name:"supplier",route:"/datamodel/reusable_elements/supplier"},{kind:"MdxPage",name:"temperature",route:"/datamodel/reusable_elements/temperature"},{kind:"MdxPage",name:"value_error",route:"/datamodel/reusable_elements/value_error"},{kind:"MdxPage",name:"volume",route:"/datamodel/reusable_elements/volume"},{kind:"Meta",data:{biological_origin:"Biological Origin",chemical:"Chemical",chemical_constituent:"Chemical Constituent",chemical_origin:"Chemical Origin",concentration:"Concentration",constituent:"Constituent",data_fitting:"Data Fitting",duration:"Duration",entity_constituent:"Entity Constituent",environmental_origin:"Environmental Origin",industrial_origin:"Industrial Origin",modification:"Modification",molecular_assembly:"Molecular Assembly",molecular_weight:"Molecular Weight",organism:"Organism",person:"Person",polymer:"Polymer",processing_step:"Processing Step",quality_controls:"Quality Controls",shaking:"Shaking",step:"Step",storage:"Storage",supplier:"Supplier",temperature:"Temperature",value_error:"Value Error",volume:"Volume"}}]},{kind:"Folder",name:"spr",route:"/datamodel/spr",children:[{kind:"Meta",data:{intro:"Introduction",spr_specific:"Method specific parameters",sensor:"Sensor",measurement_position:"Measurement position",measurement_protocol:"Measurement protocol",measurement:"Measurement"}},{kind:"MdxPage",name:"intro",route:"/datamodel/spr/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/spr/measurement"},{kind:"MdxPage",name:"measurement_position",route:"/datamodel/spr/measurement_position"},{kind:"MdxPage",name:"measurement_protocol",route:"/datamodel/spr/measurement_protocol"},{kind:"MdxPage",name:"sensor",route:"/datamodel/spr/sensor"},{kind:"MdxPage",name:"spr_specific",route:"/datamodel/spr/spr_specific"}]}]},{kind:"Folder",name:"external",route:"/external",children:[{kind:"Meta",data:{intro:"Introduction",affiliations:"Affiliations",chemicals:"Chemicals",grants:"Funding references",organisms:"Organisms"}},{kind:"MdxPage",name:"affiliations",route:"/external/affiliations"},{kind:"MdxPage",name:"chemicals",route:"/external/chemicals"},{kind:"MdxPage",name:"grants",route:"/external/grants"},{kind:"MdxPage",name:"intro",route:"/external/intro"},{kind:"MdxPage",name:"organisms",route:"/external/organisms"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"issues",route:"/issues",children:[{kind:"Meta",data:{intro:"Introduction","app-issues":"Reported issues"}},{kind:"MdxPage",name:"app-issues",route:"/issues/app-issues"},{kind:"MdxPage",name:"intro",route:"/issues/intro"}]},{kind:"Folder",name:"license",route:"/license",children:[{kind:"Meta",data:{intro:"Introduction"}},{kind:"MdxPage",name:"intro",route:"/license/intro"}]},{kind:"Folder",name:"rest_api",route:"/rest_api",children:[{kind:"Meta",data:{intro:"Introduction"}},{kind:"MdxPage",name:"intro",route:"/rest_api/intro"}]},{kind:"Folder",name:"technologies",route:"/technologies",children:[{kind:"Meta",data:{intro:"Introduction"}},{kind:"MdxPage",name:"intro",route:"/technologies/intro"}]}],flexsearch:{codeblocks:!0},title:"Fields specific to MST",headings:d},pageNextRoute:"/datamodel/mst/mst_specific",nextraLayout:r.ZP,themeConfig:s.Z};n.default=(0,i.j)(m)},1255:function(e,n,t){"use strict";var a=t(5893),i=t(6231);n.Z={logo:(0,a.jsx)("span",{children:"MBDB"}),logoLink:"https://mbdb.test.du.cesnet.cz/",project:{link:"https://github.com/Molecular-Biophysics-Database/mbdb-app"},sidebar:{defaultMenuCollapseLevel:1},docsRepositoryBase:"https://github.com/Molecular-Biophysics-Database/mbdb-docs/tree/main",head:()=>{let{frontMatter:e}=(0,i.ZR)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{property:"og:title",content:e.title||"MBDB Docs"}),(0,a.jsx)("meta",{property:"og:description",content:e.description||"The documentation for MBDB"})]})}}},5789:function(){}},function(e){e.O(0,[4955,2888,9774,179],function(){return e(e.s=2494)}),_N_E=e.O()}]);