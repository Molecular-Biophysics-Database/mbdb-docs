(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5796],{9569:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datamodel/bli/measurement",function(){return t(6031)}])},6031:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return d}});var a=t(5893),r=t(2673),s=t(6231),i=t(1255);t(9488);var o=t(2643);let d=[{depth:2,value:"id",id:"id"},{depth:2,value:"name",id:"name"},{depth:2,value:"sensor",id:"sensor"},{depth:2,value:"measurement_protocol_step",id:"measurement_protocol_step"},{depth:2,value:"sample",id:"sample"},{depth:2,value:"Fields available in sample",id:"fields-available-in-sample"},{depth:2,value:"plate",id:"plate"},{depth:2,value:"well_position",id:"well_position"},{depth:2,value:"chemical_environment",id:"chemical_environment"},{depth:2,value:"analytes",id:"analytes"},{depth:2,value:"temperature",id:"temperature"},{depth:2,value:"preparation_protocol",id:"preparation_protocol"}];function l(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",br:"br",code:"code",a:"a"},(0,o.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"Measurement"}),"\n",(0,a.jsx)(n.h2,{id:"id",children:"id"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Description"}),": Unique ID to be used as a link target",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Required"}),": yes ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Path"}),": ",(0,a.jsx)(n.code,{children:"metadata.method_specific_parameters.measurements.id"})," ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Type"}),": link target (string) ",(0,a.jsx)(n.br,{})]}),"\n",(0,a.jsx)(n.h2,{id:"name",children:"name"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Description"}),": Name (id) of the measurement which must be\nunique within a record (i.e. triplicates\nmust be named individually in the raw data\nfile). The name must allow location of the\nmeasurement data within the raw data file\nas well as processed data files if these\nare present",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Required"}),": yes ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Path"}),": ",(0,a.jsx)(n.code,{children:"metadata.method_specific_parameters.measurements.name"})," ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Type"}),": string ",(0,a.jsx)(n.br,{})]}),"\n",(0,a.jsx)(n.h2,{id:"sensor",children:"sensor"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Description"}),": link to the sensor used for the measurement",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Required"}),": yes ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Path"}),": ",(0,a.jsx)(n.code,{children:"metadata.method_specific_parameters.measurements.sensor"})," ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Type"}),": link (sensor) ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Target"}),": ",(0,a.jsx)(n.code,{children:"metadata.method_specific_parameters.sensors.id"})]}),"\n",(0,a.jsx)(n.h2,{id:"measurement_protocol_step",children:"measurement_protocol_step"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Description"}),": link to one of the measurement steps",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Required"}),": yes ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Path"}),": ",(0,a.jsx)(n.code,{children:"metadata.method_specific_parameters.measurements.measurement_protocol_step"})," ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Type"}),": link (sensor) ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Target"}),": ",(0,a.jsx)(n.code,{children:"metadata.method_specific_parameters.measurement_protocol.id"})]}),"\n",(0,a.jsx)(n.h2,{id:"sample",children:"sample"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Description"}),": Sample the sensor was in contact with during the measurement",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Required"}),": yes ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Path"}),": ",(0,a.jsx)(n.code,{children:"metadata.method_specific_parameters.measurements.sample"})," ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Type"}),": object (Sample) ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Contains"}),": see ",(0,a.jsx)(n.a,{href:"#fields-available-in-sample",children:"Fields available in sample"})]}),"\n",(0,a.jsx)(n.h2,{id:"fields-available-in-sample",children:"Fields available in sample"}),"\n",(0,a.jsx)(n.h2,{id:"plate",children:"plate"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Description"}),": link to one of the plates",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Required"}),": yes ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Path"}),": ",(0,a.jsx)(n.code,{children:"metadata.method_specific_parameters.measurements.sample.plate"})," ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Type"}),": link (sensor) ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Target"}),": ",(0,a.jsx)(n.code,{children:"metadata.method_specific_parameters.plates.id"})]}),"\n",(0,a.jsx)(n.h2,{id:"well_position",children:"well_position"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Description"}),": The position the well (in the plate) where\nthe sample was during the measurement",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Required"}),": yes ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Path"}),": ",(0,a.jsx)(n.code,{children:"metadata.method_specific_parameters.measurements.sample.well_position"})," ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Type"}),": string (keyword) ",(0,a.jsx)(n.br,{})]}),"\n",(0,a.jsx)(n.h2,{id:"chemical_environment",children:"chemical_environment"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Description"}),": Name (id) of the chemical environment of\nthe sample (from the chemical environments defined in the general parameters)",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Required"}),": yes ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Path"}),": ",(0,a.jsx)(n.code,{children:"metadata.method_specific_parameters.measurements.sample.chemical_environment"})," ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Type"}),": link (chemical_environment) ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Target"}),": ",(0,a.jsx)(n.code,{children:"metadata.general_parameters.chemical_environments.id"})]}),"\n",(0,a.jsx)(n.h2,{id:"analytes",children:"analytes"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Description"}),": List of names (ids) of entities (from the\nentities of interest defined in the\ngeneral parameters) that was used to alter\nthe behavior of the target(s) or entities\npresent at varying concentrations for a\nseries of measurements and their concentrations",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Required"}),": no ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Path"}),": ",(0,a.jsx)(n.code,{children:"metadata.method_specific_parameters.measurements.analytes"})," ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Type"}),": object (Entity_constituent) ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Contains"}),": see ",(0,a.jsx)(n.a,{href:"../reusable_elements/entity_constituent",children:"Entity_constituent"})," ",(0,a.jsx)(n.br,{})]}),"\n",(0,a.jsx)(n.h2,{id:"temperature",children:"temperature"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Description"}),": Temperature of the sample while being measured",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Required"}),": no ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Path"}),": ",(0,a.jsx)(n.code,{children:"metadata.method_specific_parameters.measurements.temperature"})," ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Type"}),": object (Temperature) ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Contains"}),": see ",(0,a.jsx)(n.a,{href:"../reusable_elements/temperature",children:"Temperature"})," ",(0,a.jsx)(n.br,{})]}),"\n",(0,a.jsx)(n.h2,{id:"preparation_protocol",children:"preparation_protocol"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Description"}),": List of steps taken to prepare the sample",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Required"}),": no ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Path"}),": ",(0,a.jsx)(n.code,{children:"metadata.method_specific_parameters.measurements.preparation_protocol"})," ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Type"}),": array of object (Step) ",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Contains"}),": see ",(0,a.jsx)(n.a,{href:"../reusable_elements/step",children:"Step"})," ",(0,a.jsx)(n.br,{})]})]})}let m={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.a)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/datamodel/bli/measurement.md",route:"/datamodel/bli/measurement",timestamp:1721125719e3,pageMap:[{kind:"Meta",data:{index:{title:"Home",type:"page"},datamodel:{title:"Data model",type:"page"},external:{title:"External Resources",type:"page"},technologies:{title:"Technologies",type:"page"},rest_api:{title:"REST API",type:"page"},issues:{title:"Known Issues",type:"page"}}},{kind:"Folder",name:"datamodel",route:"/datamodel",children:[{kind:"Meta",data:{intro:"Introduction",general_params:"General parameters",reusable_elements:"Reusable elements",bli:"BLI",mst:"MST",spr:"SPR",itc:"ITC"}},{kind:"Folder",name:"bli",route:"/datamodel/bli",children:[{kind:"Meta",data:{intro:"Introduction",bli_specific:"Method specific parameters",plate:"Plate",sensor:"Sensor",measurement_protocol:"Measurement protocol",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"bli_specific",route:"/datamodel/bli/bli_specific"},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/bli/data_analysis"},{kind:"MdxPage",name:"intro",route:"/datamodel/bli/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/bli/measurement"},{kind:"MdxPage",name:"measurement_protocol",route:"/datamodel/bli/measurement_protocol"},{kind:"MdxPage",name:"plate",route:"/datamodel/bli/plate"},{kind:"MdxPage",name:"sensor",route:"/datamodel/bli/sensor"}]},{kind:"Folder",name:"general_params",route:"/datamodel/general_params",children:[{kind:"Meta",data:{intro:"Introduction",schema_version:"Schema version",record_information:"Record information",depositors:"Depositors (authors)",associated_publication:"Associated publication",funding:"Funding reference",technique:"Technique",collection_start_time:"Collection start time",instrument:"Instrument",entities_of_interest:"Entities of interest",chemical_environments:"Chemical environments",results:"Results",raw_measurements:"Raw measurements (files)"}},{kind:"MdxPage",name:"associated_publication",route:"/datamodel/general_params/associated_publication"},{kind:"MdxPage",name:"chemical_environments",route:"/datamodel/general_params/chemical_environments"},{kind:"MdxPage",name:"collection_start_time",route:"/datamodel/general_params/collection_start_time"},{kind:"MdxPage",name:"depositors",route:"/datamodel/general_params/depositors"},{kind:"MdxPage",name:"entities_of_interest",route:"/datamodel/general_params/entities_of_interest"},{kind:"MdxPage",name:"funding",route:"/datamodel/general_params/funding"},{kind:"MdxPage",name:"instrument",route:"/datamodel/general_params/instrument"},{kind:"MdxPage",name:"intro",route:"/datamodel/general_params/intro"},{kind:"MdxPage",name:"raw_measurements",route:"/datamodel/general_params/raw_measurements"},{kind:"MdxPage",name:"record_information",route:"/datamodel/general_params/record_information"},{kind:"MdxPage",name:"results",route:"/datamodel/general_params/results"},{kind:"MdxPage",name:"schema_version",route:"/datamodel/general_params/schema_version"},{kind:"MdxPage",name:"technique",route:"/datamodel/general_params/technique"}]},{kind:"MdxPage",name:"intro",route:"/datamodel/intro"},{kind:"Folder",name:"itc",route:"/datamodel/itc",children:[{kind:"Meta",data:{intro:"Introduction"}},{kind:"MdxPage",name:"intro",route:"/datamodel/itc/intro"}]},{kind:"Folder",name:"mst",route:"/datamodel/mst",children:[{kind:"Meta",data:{intro:"Introduction",mst_specific:"MST specific fields",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/mst/data_analysis"},{kind:"MdxPage",name:"intro",route:"/datamodel/mst/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/mst/measurement"},{kind:"MdxPage",name:"mst_specific",route:"/datamodel/mst/mst_specific"}]},{kind:"Folder",name:"reusable_elements",route:"/datamodel/reusable_elements",children:[{kind:"MdxPage",name:"biological_origin",route:"/datamodel/reusable_elements/biological_origin"},{kind:"MdxPage",name:"chemical",route:"/datamodel/reusable_elements/chemical"},{kind:"MdxPage",name:"chemical_constituent",route:"/datamodel/reusable_elements/chemical_constituent"},{kind:"MdxPage",name:"chemical_origin",route:"/datamodel/reusable_elements/chemical_origin"},{kind:"MdxPage",name:"concentration",route:"/datamodel/reusable_elements/concentration"},{kind:"MdxPage",name:"constituent",route:"/datamodel/reusable_elements/constituent"},{kind:"MdxPage",name:"data_fitting",route:"/datamodel/reusable_elements/data_fitting"},{kind:"MdxPage",name:"duration",route:"/datamodel/reusable_elements/duration"},{kind:"MdxPage",name:"entity_constituent",route:"/datamodel/reusable_elements/entity_constituent"},{kind:"MdxPage",name:"environmental_origin",route:"/datamodel/reusable_elements/environmental_origin"},{kind:"MdxPage",name:"files",route:"/datamodel/reusable_elements/files"},{kind:"MdxPage",name:"industrial_origin",route:"/datamodel/reusable_elements/industrial_origin"},{kind:"MdxPage",name:"modification",route:"/datamodel/reusable_elements/modification"},{kind:"MdxPage",name:"molecular_assembly",route:"/datamodel/reusable_elements/molecular_assembly"},{kind:"MdxPage",name:"molecular_weight",route:"/datamodel/reusable_elements/molecular_weight"},{kind:"MdxPage",name:"organism",route:"/datamodel/reusable_elements/organism"},{kind:"MdxPage",name:"person",route:"/datamodel/reusable_elements/person"},{kind:"MdxPage",name:"polymer",route:"/datamodel/reusable_elements/polymer"},{kind:"MdxPage",name:"processing_step",route:"/datamodel/reusable_elements/processing_step"},{kind:"MdxPage",name:"quality_controls",route:"/datamodel/reusable_elements/quality_controls"},{kind:"MdxPage",name:"shaking",route:"/datamodel/reusable_elements/shaking"},{kind:"MdxPage",name:"step",route:"/datamodel/reusable_elements/step"},{kind:"MdxPage",name:"storage",route:"/datamodel/reusable_elements/storage"},{kind:"MdxPage",name:"supplier",route:"/datamodel/reusable_elements/supplier"},{kind:"MdxPage",name:"temperature",route:"/datamodel/reusable_elements/temperature"},{kind:"MdxPage",name:"value_error",route:"/datamodel/reusable_elements/value_error"},{kind:"Meta",data:{biological_origin:"Biological Origin",chemical:"Chemical",chemical_constituent:"Chemical Constituent",chemical_origin:"Chemical Origin",concentration:"Concentration",constituent:"Constituent",data_fitting:"Data Fitting",duration:"Duration",entity_constituent:"Entity Constituent",environmental_origin:"Environmental Origin",files:"Files",industrial_origin:"Industrial Origin",modification:"Modification",molecular_assembly:"Molecular Assembly",molecular_weight:"Molecular Weight",organism:"Organism",person:"Person",polymer:"Polymer",processing_step:"Processing Step",quality_controls:"Quality Controls",shaking:"Shaking",step:"Step",storage:"Storage",supplier:"Supplier",temperature:"Temperature",value_error:"Value Error"}}]},{kind:"Folder",name:"spr",route:"/datamodel/spr",children:[{kind:"Meta",data:{intro:"Introduction",spr_specific:"Method specific parameters",sensor:"Sensor",measurement_position:"Measurement position",measurement_protocol:"Measurement protocol",measurement:"Measurement"}},{kind:"MdxPage",name:"intro",route:"/datamodel/spr/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/spr/measurement"},{kind:"MdxPage",name:"measurement_position",route:"/datamodel/spr/measurement_position"},{kind:"MdxPage",name:"measurement_protocol",route:"/datamodel/spr/measurement_protocol"},{kind:"MdxPage",name:"sensor",route:"/datamodel/spr/sensor"},{kind:"MdxPage",name:"spr_specific",route:"/datamodel/spr/spr_specific"}]}]},{kind:"Folder",name:"external",route:"/external",children:[{kind:"Meta",data:{intro:"Introduction",affiliations:"Affiliations",chemicals:"Chemicals",grants:"Funding references",organisms:"Organisms"}},{kind:"MdxPage",name:"affiliations",route:"/external/affiliations"},{kind:"MdxPage",name:"chemicals",route:"/external/chemicals"},{kind:"MdxPage",name:"grants",route:"/external/grants"},{kind:"MdxPage",name:"intro",route:"/external/intro"},{kind:"MdxPage",name:"organisms",route:"/external/organisms"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"issues",route:"/issues",children:[{kind:"Meta",data:{intro:"Introduction","app-issues":"Reported issues"}},{kind:"MdxPage",name:"app-issues",route:"/issues/app-issues"},{kind:"MdxPage",name:"intro",route:"/issues/intro"}]},{kind:"Folder",name:"rest_api",route:"/rest_api",children:[{kind:"Meta",data:{intro:"Introduction"}},{kind:"MdxPage",name:"intro",route:"/rest_api/intro"}]},{kind:"Folder",name:"technologies",route:"/technologies",children:[{kind:"Meta",data:{intro:"Introduction"}},{kind:"MdxPage",name:"intro",route:"/technologies/intro"}]}],flexsearch:{codeblocks:!0},title:"Measurement",headings:d},pageNextRoute:"/datamodel/bli/measurement",nextraLayout:s.ZP,themeConfig:i.Z};n.default=(0,r.j)(m)},1255:function(e,n,t){"use strict";var a=t(5893);n.Z={logo:(0,a.jsx)("span",{children:"MBDB"}),logoLink:"https://mbdb.test.du.cesnet.cz/",project:{link:"https://github.com/Molecular-Biophysics-Database/mbdb-app"},sidebar:{defaultMenuCollapseLevel:1},docsRepositoryBase:"https://github.com/Molecular-Biophysics-Database/mbdb-docs/tree/main"}},5789:function(){}},function(e){e.O(0,[4955,2888,9774,179],function(){return e(e.s=9569)}),_N_E=e.O()}]);