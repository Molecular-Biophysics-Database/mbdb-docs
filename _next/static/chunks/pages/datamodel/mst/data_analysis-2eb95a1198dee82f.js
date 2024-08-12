(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9536],{1253:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datamodel/mst/data_analysis",function(){return a(8727)}])},8727:function(e,t,a){"use strict";a.r(t),a.d(t,{__toc:function(){return d}});var n=a(5893),i=a(2673),s=a(6231),r=a(1255);a(9488);var o=a(2643);let d=[{depth:2,value:"results",id:"results"},{depth:2,value:"measurements",id:"measurements"},{depth:2,value:"data_processing_steps",id:"data_processing_steps"},{depth:2,value:"data_fitting",id:"data_fitting"},{depth:2,value:"f_cold_and_hot",id:"f_cold_and_hot"},{depth:2,value:"Fields available in F cold and hot",id:"fields-available-in-f-cold-and-hot"},{depth:2,value:"time_unit",id:"time_unit"},{depth:2,value:"f_cold_start",id:"f_cold_start"},{depth:2,value:"f_cold_end",id:"f_cold_end"},{depth:2,value:"f_hot_start",id:"f_hot_start"},{depth:2,value:"f_hot_end",id:"f_hot_end"}];function l(e){let t=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",br:"br",code:"code",a:"a"},(0,o.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{children:"MST data analysis"}),"\n",(0,n.jsx)(t.h2,{id:"results",children:"results"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),":Link to the result(s) that was obtained\nby the data analysis. The link is to the results defined in the general parameters ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Required"}),": no ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Path"}),": ",(0,n.jsx)(t.code,{children:"metadata.method_specific_parameters.data_analysis.results"})," ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Type"}),": array of links ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Link Target"}),": see ",(0,n.jsx)(t.a,{href:"../general_params/results",children:"Result"})]}),"\n",(0,n.jsx)(t.h2,{id:"measurements",children:"measurements"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": List of the measurements that was analyzed together for a specific parameter ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Required"}),": no ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Path"}),": ",(0,n.jsx)(t.code,{children:"metadata.method_specific_parameters.data_analysis.measurements"})," ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Type"}),": array of links ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Link Target"}),": see ",(0,n.jsx)(t.a,{href:"measurement",children:"Measurement"})]}),"\n",(0,n.jsx)(t.h2,{id:"data_processing_steps",children:"data_processing_steps"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": Describe the steps in the data analysis prior to fitting (removing outliers in the\nraw data, applying smoothing filters, etc.) ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Required"}),": no ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Path"}),": ",(0,n.jsx)(t.code,{children:"metadata.method_specific_parameters.data_analysis.data_processing_steps"})," ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Type"}),": array of object (Processing_step) ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Contains"}),": see ",(0,n.jsx)(t.a,{href:"../reusable_elements/processing_step",children:"Processing step"})]}),"\n",(0,n.jsx)(t.h2,{id:"data_fitting",children:"data_fitting"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": The details of how data fitting was performed to obtain the result",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Required"}),": no ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Path"}),": ",(0,n.jsx)(t.code,{children:"metadata.method_specific_parameters.data_analysis.data_fitting"})," ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Type"}),": object (Data_fitting) ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Contains"}),": see ",(0,n.jsx)(t.a,{href:"../reusable_elements/data_fitting",children:"Data fitting"})]}),"\n",(0,n.jsx)(t.h2,{id:"f_cold_and_hot",children:"f_cold_and_hot"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": If the data was analyzed with time windows corresponding to fluorescence before and\nafter an IR laser was heating the sample the edges of the time windows can be specified here ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Required"}),": no ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Path"}),": ",(0,n.jsx)(t.code,{children:"metadata.method_specific_parameters.data_analysis.f_cold_and_hot"})," ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Type"}),": object (f_cold_and_hot) ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Contains"}),": see ",(0,n.jsx)(t.a,{href:"#fields-available-in-f-cold-and-hot",children:"Fields available in f cold and hot"})]}),"\n",(0,n.jsx)(t.h2,{id:"fields-available-in-f-cold-and-hot",children:"Fields available in F cold and hot"}),"\n",(0,n.jsx)(t.h2,{id:"time_unit",children:"time_unit"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": The unit of time used for reporting measurement data ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Required"}),": no ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Path"}),": ",(0,n.jsx)(t.code,{children:"metadata.method_specific_parameters.data_analysis.f_cold_and_hot.time_unit"})," ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Type"}),": enumerator (string) ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Options"}),": ('nanoseconds','microseconds', 'milliseconds', ",(0,n.jsx)(t.br,{}),"\n'seconds','minutes', 'hours', 'days', 'months', 'years')"]}),"\n",(0,n.jsx)(t.h2,{id:"f_cold_start",children:"f_cold_start"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": Numerical value of the start-point of time\ninterval used to establish the initial fluorescence, F_cold",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Required"}),": no ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Path"}),": ",(0,n.jsx)(t.code,{children:"metadata.method_specific_parameters.data_analysis.f_cold_and_hot.f_cold_start"})," ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Type"}),": number (float) ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Min"}),": -100"]}),"\n",(0,n.jsx)(t.h2,{id:"f_cold_end",children:"f_cold_end"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": Numerical value of the end-point of time\ninterval used to establish the initial fluorescence, F_cold ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Required"}),": no ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Path"}),": ",(0,n.jsx)(t.code,{children:"metadata.method_specific_parameters.data_analysis.f_cold_and_hot.f_cold_end"})," ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Type"}),": number (float) ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Min"}),": -100"]}),"\n",(0,n.jsx)(t.h2,{id:"f_hot_start",children:"f_hot_start"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": Numerical value of the start-point of time\ninterval used to establish the fluorescence temperature\ninduced change in fluorescence, F_hot ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Required"}),": no ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Path"}),": ",(0,n.jsx)(t.code,{children:"metadata.method_specific_parameters.data_analysis.f_cold_and_hot.f_hot_start"})," ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Type"}),": number (float) ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Min"}),": 0"]}),"\n",(0,n.jsx)(t.h2,{id:"f_hot_end",children:"f_hot_end"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": Numerical value of the end-point of time\ninterval used to establish the fluorescence temperature\ninduced change in fluorescence, F_hot ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Required"}),": no ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Path"}),": ",(0,n.jsx)(t.code,{children:"metadata.method_specific_parameters.data_analysis.f_cold_and_hot.f_hot_end"})," ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Type"}),": number (float) ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Min"}),": 0"]})]})}let m={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,o.a)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/datamodel/mst/data_analysis.md",route:"/datamodel/mst/data_analysis",timestamp:1723450964e3,pageMap:[{kind:"Meta",data:{index:{title:"Home",type:"page"},datamodel:{title:"Data model",type:"page"},external:{title:"External Resources",type:"page"},technologies:{title:"Technologies",type:"page"},rest_api:{title:"REST API",type:"page"},license:{title:"Licensing",type:"page"},issues:{title:"Known Issues",type:"page"}}},{kind:"Folder",name:"datamodel",route:"/datamodel",children:[{kind:"Meta",data:{intro:"Introduction",general_params:"General parameters",reusable_elements:"Reusable elements",bli:"BLI",mst:"MST",spr:"SPR",itc:"ITC"}},{kind:"Folder",name:"bli",route:"/datamodel/bli",children:[{kind:"Meta",data:{intro:"Introduction",bli_specific:"Method specific parameters",plate:"Plate",sensor:"Sensor",measurement_protocol:"Measurement protocol",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"bli_specific",route:"/datamodel/bli/bli_specific"},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/bli/data_analysis"},{kind:"MdxPage",name:"intro",route:"/datamodel/bli/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/bli/measurement"},{kind:"MdxPage",name:"measurement_protocol",route:"/datamodel/bli/measurement_protocol"},{kind:"MdxPage",name:"plate",route:"/datamodel/bli/plate"},{kind:"MdxPage",name:"sensor",route:"/datamodel/bli/sensor"}]},{kind:"Folder",name:"general_params",route:"/datamodel/general_params",children:[{kind:"Meta",data:{intro:"Introduction",schema_version:"Schema version",record_information:"Record information",depositors:"Depositors (authors)",associated_publication:"Associated publication",funding:"Funding reference",technique:"Technique",collection_start_time:"Collection start time",instrument:"Instrument",entities_of_interest:"Entities of interest",chemical_environments:"Chemical environments",results:"Results",raw_measurements:"Raw measurements (files)"}},{kind:"MdxPage",name:"associated_publication",route:"/datamodel/general_params/associated_publication"},{kind:"MdxPage",name:"chemical_environments",route:"/datamodel/general_params/chemical_environments"},{kind:"MdxPage",name:"collection_start_time",route:"/datamodel/general_params/collection_start_time"},{kind:"MdxPage",name:"depositors",route:"/datamodel/general_params/depositors"},{kind:"MdxPage",name:"entities_of_interest",route:"/datamodel/general_params/entities_of_interest"},{kind:"MdxPage",name:"funding",route:"/datamodel/general_params/funding"},{kind:"MdxPage",name:"instrument",route:"/datamodel/general_params/instrument"},{kind:"MdxPage",name:"intro",route:"/datamodel/general_params/intro"},{kind:"MdxPage",name:"raw_measurements",route:"/datamodel/general_params/raw_measurements"},{kind:"MdxPage",name:"record_information",route:"/datamodel/general_params/record_information"},{kind:"MdxPage",name:"results",route:"/datamodel/general_params/results"},{kind:"MdxPage",name:"schema_version",route:"/datamodel/general_params/schema_version"},{kind:"MdxPage",name:"technique",route:"/datamodel/general_params/technique"}]},{kind:"MdxPage",name:"intro",route:"/datamodel/intro"},{kind:"Folder",name:"itc",route:"/datamodel/itc",children:[{kind:"Meta",data:{intro:"Introduction",itc_specific:"Method specific parameters",injection_mode:"Injection mode",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/itc/data_analysis"},{kind:"MdxPage",name:"injection_mode",route:"/datamodel/itc/injection_mode"},{kind:"MdxPage",name:"intro",route:"/datamodel/itc/intro"},{kind:"MdxPage",name:"itc_specific",route:"/datamodel/itc/itc_specific"},{kind:"MdxPage",name:"measurement",route:"/datamodel/itc/measurement"}]},{kind:"Folder",name:"mst",route:"/datamodel/mst",children:[{kind:"Meta",data:{intro:"Introduction",mst_specific:"MST specific fields",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/mst/data_analysis"},{kind:"MdxPage",name:"intro",route:"/datamodel/mst/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/mst/measurement"},{kind:"MdxPage",name:"mst_specific",route:"/datamodel/mst/mst_specific"}]},{kind:"Folder",name:"reusable_elements",route:"/datamodel/reusable_elements",children:[{kind:"MdxPage",name:"biological_origin",route:"/datamodel/reusable_elements/biological_origin"},{kind:"MdxPage",name:"chemical",route:"/datamodel/reusable_elements/chemical"},{kind:"MdxPage",name:"chemical_constituent",route:"/datamodel/reusable_elements/chemical_constituent"},{kind:"MdxPage",name:"chemical_origin",route:"/datamodel/reusable_elements/chemical_origin"},{kind:"MdxPage",name:"concentration",route:"/datamodel/reusable_elements/concentration"},{kind:"MdxPage",name:"constituent",route:"/datamodel/reusable_elements/constituent"},{kind:"MdxPage",name:"data_fitting",route:"/datamodel/reusable_elements/data_fitting"},{kind:"MdxPage",name:"duration",route:"/datamodel/reusable_elements/duration"},{kind:"MdxPage",name:"entity_constituent",route:"/datamodel/reusable_elements/entity_constituent"},{kind:"MdxPage",name:"environmental_origin",route:"/datamodel/reusable_elements/environmental_origin"},{kind:"MdxPage",name:"files",route:"/datamodel/reusable_elements/files"},{kind:"MdxPage",name:"industrial_origin",route:"/datamodel/reusable_elements/industrial_origin"},{kind:"MdxPage",name:"modification",route:"/datamodel/reusable_elements/modification"},{kind:"MdxPage",name:"molecular_assembly",route:"/datamodel/reusable_elements/molecular_assembly"},{kind:"MdxPage",name:"molecular_weight",route:"/datamodel/reusable_elements/molecular_weight"},{kind:"MdxPage",name:"organism",route:"/datamodel/reusable_elements/organism"},{kind:"MdxPage",name:"person",route:"/datamodel/reusable_elements/person"},{kind:"MdxPage",name:"polymer",route:"/datamodel/reusable_elements/polymer"},{kind:"MdxPage",name:"processing_step",route:"/datamodel/reusable_elements/processing_step"},{kind:"MdxPage",name:"quality_controls",route:"/datamodel/reusable_elements/quality_controls"},{kind:"MdxPage",name:"shaking",route:"/datamodel/reusable_elements/shaking"},{kind:"MdxPage",name:"step",route:"/datamodel/reusable_elements/step"},{kind:"MdxPage",name:"storage",route:"/datamodel/reusable_elements/storage"},{kind:"MdxPage",name:"supplier",route:"/datamodel/reusable_elements/supplier"},{kind:"MdxPage",name:"temperature",route:"/datamodel/reusable_elements/temperature"},{kind:"MdxPage",name:"value_error",route:"/datamodel/reusable_elements/value_error"},{kind:"MdxPage",name:"volume",route:"/datamodel/reusable_elements/volume"},{kind:"Meta",data:{biological_origin:"Biological Origin",chemical:"Chemical",chemical_constituent:"Chemical Constituent",chemical_origin:"Chemical Origin",concentration:"Concentration",constituent:"Constituent",data_fitting:"Data Fitting",duration:"Duration",entity_constituent:"Entity Constituent",environmental_origin:"Environmental Origin",files:"Files",industrial_origin:"Industrial Origin",modification:"Modification",molecular_assembly:"Molecular Assembly",molecular_weight:"Molecular Weight",organism:"Organism",person:"Person",polymer:"Polymer",processing_step:"Processing Step",quality_controls:"Quality Controls",shaking:"Shaking",step:"Step",storage:"Storage",supplier:"Supplier",temperature:"Temperature",value_error:"Value Error",volume:"Volume"}}]},{kind:"Folder",name:"spr",route:"/datamodel/spr",children:[{kind:"Meta",data:{intro:"Introduction",spr_specific:"Method specific parameters",sensor:"Sensor",measurement_position:"Measurement position",measurement_protocol:"Measurement protocol",measurement:"Measurement"}},{kind:"MdxPage",name:"intro",route:"/datamodel/spr/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/spr/measurement"},{kind:"MdxPage",name:"measurement_position",route:"/datamodel/spr/measurement_position"},{kind:"MdxPage",name:"measurement_protocol",route:"/datamodel/spr/measurement_protocol"},{kind:"MdxPage",name:"sensor",route:"/datamodel/spr/sensor"},{kind:"MdxPage",name:"spr_specific",route:"/datamodel/spr/spr_specific"}]}]},{kind:"Folder",name:"external",route:"/external",children:[{kind:"Meta",data:{intro:"Introduction",affiliations:"Affiliations",chemicals:"Chemicals",grants:"Funding references",organisms:"Organisms"}},{kind:"MdxPage",name:"affiliations",route:"/external/affiliations"},{kind:"MdxPage",name:"chemicals",route:"/external/chemicals"},{kind:"MdxPage",name:"grants",route:"/external/grants"},{kind:"MdxPage",name:"intro",route:"/external/intro"},{kind:"MdxPage",name:"organisms",route:"/external/organisms"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"issues",route:"/issues",children:[{kind:"Meta",data:{intro:"Introduction","app-issues":"Reported issues"}},{kind:"MdxPage",name:"app-issues",route:"/issues/app-issues"},{kind:"MdxPage",name:"intro",route:"/issues/intro"}]},{kind:"Folder",name:"license",route:"/license",children:[{kind:"Meta",data:{intro:"Introduction"}},{kind:"MdxPage",name:"intro",route:"/license/intro"}]},{kind:"Folder",name:"rest_api",route:"/rest_api",children:[{kind:"Meta",data:{intro:"Introduction"}},{kind:"MdxPage",name:"intro",route:"/rest_api/intro"}]},{kind:"Folder",name:"technologies",route:"/technologies",children:[{kind:"Meta",data:{intro:"Introduction"}},{kind:"MdxPage",name:"intro",route:"/technologies/intro"}]}],flexsearch:{codeblocks:!0},title:"MST data analysis",headings:d},pageNextRoute:"/datamodel/mst/data_analysis",nextraLayout:s.ZP,themeConfig:r.Z};t.default=(0,i.j)(m)},1255:function(e,t,a){"use strict";var n=a(5893),i=a(6231);t.Z={logo:(0,n.jsx)("span",{children:"MBDB"}),logoLink:"https://mbdb.test.du.cesnet.cz/",project:{link:"https://github.com/Molecular-Biophysics-Database/mbdb-app"},sidebar:{defaultMenuCollapseLevel:1},docsRepositoryBase:"https://github.com/Molecular-Biophysics-Database/mbdb-docs/tree/main",head:()=>{let{frontMatter:e}=(0,i.ZR)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{property:"og:title",content:e.title||"MBDB Docs"}),(0,n.jsx)("meta",{property:"og:description",content:e.description||"The documentation for MBDB"})]})}}},5789:function(){}},function(e){e.O(0,[4955,2888,9774,179],function(){return e(e.s=1253)}),_N_E=e.O()}]);