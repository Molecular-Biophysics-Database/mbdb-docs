(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6132],{5114:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/issues/app-issues",function(){return t(1701)}])},1701:function(e,a,t){"use strict";t.r(a),t.d(a,{__toc:function(){return d}});var n=t(5893),i=t(2673),r=t(6231),o=t(1255);t(9488);var s=t(2643);let d=[{depth:3,value:"Record view - width of the graphical representation",id:"record-view---width-of-the-graphical-representation"},{depth:3,value:"Search results filter",id:"search-results-filter"},{depth:3,value:"Record view - Results",id:"record-view---results"},{depth:3,value:"Searching for a particular expression",id:"searching-for-a-particular-expression"},{depth:3,value:"Measurements are tedious to input",id:"measurements-are-tedious-to-input"},{depth:3,value:"MST datanalysis define Fhot and Fcold in single line",id:"mst-datanalysis-define-fhot-and-fcold-in-single-line"},{depth:3,value:"Unclear location of derived parameters",id:"unclear-location-of-derived-parameters"},{depth:3,value:"Include option reuse person information in more sections",id:"include-option-reuse-person-information-in-more-sections"},{depth:3,value:"Vocabulary API performance",id:"vocabulary-api-performance"},{depth:3,value:"Deposition form - autofilling owner infomation and usage information",id:"deposition-form---autofilling-owner-infomation-and-usage-information"},{depth:3,value:"Search listing - Use source organism from all of the entities of interest",id:"search-listing---use-source-organism-from-all-of-the-entities-of-interest"},{depth:3,value:"Search behaviour - partial match of word",id:"search-behaviour---partial-match-of-word"},{depth:3,value:"Search behaviour - More meaningful link when no results are found",id:"search-behaviour---more-meaningful-link-when-no-results-are-found"},{depth:3,value:"Recordview - Results listing should show associated measurements",id:"recordview---results-listing-should-show-associated-measurements"},{depth:3,value:"Searching across different types of records",id:"searching-across-different-types-of-records"},{depth:3,value:"Extraction and loading metadata from files",id:"extraction-and-loading-metadata-from-files"},{depth:3,value:"Acquiring DOI",id:"acquiring-doi"}];function l(e){let a=Object.assign({h1:"h1",p:"p",h3:"h3",code:"code",ul:"ul",li:"li"},(0,s.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{children:"App Issues"}),"\n",(0,n.jsx)(a.p,{children:"(list updates daily)"}),"\n",(0,n.jsx)(a.h3,{id:"record-view---width-of-the-graphical-representation",children:"Record view - width of the graphical representation"}),"\n",(0,n.jsx)(a.p,{children:"The width is now dynamically adjusted according to the content.\r\nThis is generally fine.\r\nHowever, I would suggest that by default it should not shrink below a certain width."}),"\n",(0,n.jsx)(a.p,{children:"NOT CRITICAL - JUST DISTURBING when I compare two or more records."}),"\n",(0,n.jsx)(a.h3,{id:"search-results-filter",children:"Search results filter"}),"\n",(0,n.jsx)(a.p,{children:'The facet in the search results listing seems to be offering "all" of the possible values MBDB has rather than those in the already displayed results.'}),"\n",(0,n.jsx)(a.p,{children:"I can see that when I get only one result filtered out but still have e.g. three Journals available to pick from.\r\nThis may be intended?"}),"\n",(0,n.jsx)(a.h3,{id:"record-view---results",children:"Record view - Results"}),"\n",(0,n.jsx)(a.p,{children:"The name of the result displayed takes the whole free text the depositor puts in.\r\nThere may be a good reason why the title is a longer sentence but we should display perhaps only the first 100 characters of it?"}),"\n",(0,n.jsx)(a.h3,{id:"searching-for-a-particular-expression",children:"Searching for a particular expression"}),"\n",(0,n.jsx)(a.p,{children:"Searching for an exact phrase - probably not implemented yet."}),"\n",(0,n.jsx)(a.p,{children:"E.g. I have my favourite record and I want to use its title to get back to it, but the search actually regards individual words in the phrase as separate search items.\r\nTried \" and '."}),"\n",(0,n.jsx)(a.h3,{id:"measurements-are-tedious-to-input",children:"Measurements are tedious to input"}),"\n",(0,n.jsx)(a.p,{children:"It is annoying to always repeat the same values in the case of the measurements. For example, the name is the same, the concentration of the target, the chemical environment and the ‘container’ ..."}),"\n",(0,n.jsx)(a.h3,{id:"mst-datanalysis-define-fhot-and-fcold-in-single-line",children:"MST datanalysis define Fhot and Fcold in single line"}),"\n",(0,n.jsx)(a.p,{children:"In ‘Data analysis’, we believe that using Cold and Hot region a single line for each value would be more appropriate than F cold or F hot:\r\nCold region: start (field to fill) end (field to fill)\r\nHot region: start (field to fill) end (field to fill)"}),"\n",(0,n.jsx)(a.h3,{id:"unclear-location-of-derived-parameters",children:"Unclear location of derived parameters"}),"\n",(0,n.jsx)(a.p,{children:"Derived parameters: why is this here? Why is it not introduced within ‘data analysis’? I think we are repeating information."}),"\n",(0,n.jsx)(a.h3,{id:"include-option-reuse-person-information-in-more-sections",children:"Include option reuse person information in more sections"}),"\n",(0,n.jsx)(a.p,{children:"It could be great to include an option to indicate that the ‘principal contact’ is the same as the ‘depositor’ in order to not repeat information and reduce the number of fields the user has to complete manually."}),"\n",(0,n.jsx)(a.h3,{id:"vocabulary-api-performance",children:"Vocabulary API performance"}),"\n",(0,n.jsx)(a.p,{children:"Performance of the vocabulary API appears to be slow, particularly when a larger number of items is requested."}),"\n",(0,n.jsxs)(a.p,{children:['On the testing setup that I have available there are 1003 items present in the "organisms" vocabulary. mbdb-app is running in development mode in a VM form a mechanical disk. The VM is accessed via a guest-host network bridge. A request to fetch all 1003 items from the vocabulary often fails with a timeout error. The timeout is set 15 (fifteen) seconds, which should be more than enough to retrieve around ~1000 entries. If the timeout is reduced even further, (say to 1500 ms) even queries with the ',(0,n.jsx)(a.code,{children:"?suggest"}),' parameter begin to time out.\r\nThe "affiliations" vocabulary (with 1000 entries) fares a little better but a fetch of the entire vocabulary still takes over 5 secs.']}),"\n",(0,n.jsx)(a.p,{children:"These results are very well reproducible."}),"\n",(0,n.jsx)(a.p,{children:"The questions that should probably be asked:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Why is there such a performance disparity between two vocabularies that have the same number of entries?"}),"\n",(0,n.jsx)(a.li,{children:"Is this performance expected or is this some defect of the development setup?"}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"deposition-form---autofilling-owner-infomation-and-usage-information",children:"Deposition form - autofilling owner infomation and usage information"}),"\n",(0,n.jsx)(a.p,{children:"Tester notes that:"}),"\n",(0,n.jsx)(a.p,{children:"Depositor and Principal Contact"}),"\n",(0,n.jsx)(a.p,{children:"Is it possible to have a button to autofill the information from the owner information? It would save time!"}),"\n",(0,n.jsx)(a.p,{children:"I wonder if people will really fill out all of these (owner, depositor, principal contact) with different information… how do you see this information being used?"}),"\n",(0,n.jsx)(a.p,{children:"Once someone is registered in the database, will they be searchable to include automatically, or are you relying on them entering orcid to be able to link all of the records associated with that person?"}),"\n",(0,n.jsx)(a.h3,{id:"search-listing---use-source-organism-from-all-of-the-entities-of-interest",children:"Search listing - Use source organism from all of the entities of interest"}),"\n",(0,n.jsx)(a.p,{children:"display source organism from all of the entities of interest instead of only the first one"}),"\n",(0,n.jsx)(a.h3,{id:"search-behaviour---partial-match-of-word",children:"Search behaviour - partial match of word"}),"\n",(0,n.jsx)(a.p,{children:"It may be a current feature but searching for a partial word\r\nSCV\r\n(SCV50) is present in the inhibitor name\r\ngave nothing\r\nso I had to search for SCV50 to find the records .."}),"\n",(0,n.jsx)(a.h3,{id:"search-behaviour---more-meaningful-link-when-no-results-are-found",children:"Search behaviour - More meaningful link when no results are found"}),"\n",(0,n.jsx)(a.p,{children:"When I did not find the search key and pressed start over - it put me to the complete listing instead of the search page."}),"\n",(0,n.jsx)(a.h3,{id:"recordview---results-listing-should-show-associated-measurements",children:"Recordview - Results listing should show associated measurements"}),"\n",(0,n.jsx)(a.p,{children:"Currently the gp.derived_parameters are iterated over to display results listing. It would be preferable to combine this with information found in msp.data_analysis.measurements, as msp.data_analysis have a derived_parameter that can be used establish the connection."}),"\n",(0,n.jsx)(a.h3,{id:"searching-across-different-types-of-records",children:"Searching across different types of records"}),"\n",(0,n.jsx)(a.p,{children:"Configure searches to be across all types of records (currently MST, BLI, and SPR)"}),"\n",(0,n.jsx)(a.h3,{id:"extraction-and-loading-metadata-from-files",children:"Extraction and loading metadata from files"}),"\n",(0,n.jsx)(a.p,{children:"Extraction of metadata from instrument provided data files in away that can be accessed by the frontend"}),"\n",(0,n.jsx)(a.h3,{id:"acquiring-doi",children:"Acquiring DOI"}),"\n",(0,n.jsx)(a.p,{children:"Provide Invenio mechanism to trigger DOI generation through DataCite"})]})}let m={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,s.a)(),e.components);return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/issues/app-issues.md",route:"/issues/app-issues",timestamp:1721053418e3,pageMap:[{kind:"Meta",data:{index:{title:"Home",type:"page"},datamodel:{title:"Data model",type:"page"},external:{title:"External Resources",type:"page"},technologies:{title:"Technologies",type:"page"},rest_api:{title:"REST API",type:"page"},issues:{title:"Known Issues",type:"page"}}},{kind:"Folder",name:"datamodel",route:"/datamodel",children:[{kind:"Meta",data:{intro:"Introduction",general_params:"General parameters",reusable_elements:"Reusable elements",bli:"BLI",mst:"MST",spr:"SPR",itc:"ITC"}},{kind:"Folder",name:"bli",route:"/datamodel/bli",children:[{kind:"Meta",data:{intro:"Introduction",bli_specific:"Method specific parameters",plate:"Plate",sensor:"Sensor",measurement_protocol:"Measurement protocol",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"bli_specific",route:"/datamodel/bli/bli_specific"},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/bli/data_analysis"},{kind:"MdxPage",name:"intro",route:"/datamodel/bli/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/bli/measurement"},{kind:"MdxPage",name:"measurement_protocol",route:"/datamodel/bli/measurement_protocol"},{kind:"MdxPage",name:"plate",route:"/datamodel/bli/plate"},{kind:"MdxPage",name:"sensor",route:"/datamodel/bli/sensor"}]},{kind:"Folder",name:"general_params",route:"/datamodel/general_params",children:[{kind:"Meta",data:{intro:"Introduction",schema_version:"Schema version",record_information:"Record information",depositors:"Depositors (authors)",associated_publication:"Associated publication",funding:"Funding reference",technique:"Technique",collection_start_time:"Collection start time",instrument:"Instrument",entities_of_interest:"Entities of interest",chemical_environments:"Chemical environments",results:"Results",raw_measurements:"Raw measurements (files)"}},{kind:"MdxPage",name:"associated_publication",route:"/datamodel/general_params/associated_publication"},{kind:"MdxPage",name:"chemical_environments",route:"/datamodel/general_params/chemical_environments"},{kind:"MdxPage",name:"collection_start_time",route:"/datamodel/general_params/collection_start_time"},{kind:"MdxPage",name:"depositors",route:"/datamodel/general_params/depositors"},{kind:"MdxPage",name:"entities_of_interest",route:"/datamodel/general_params/entities_of_interest"},{kind:"MdxPage",name:"funding",route:"/datamodel/general_params/funding"},{kind:"MdxPage",name:"instrument",route:"/datamodel/general_params/instrument"},{kind:"MdxPage",name:"intro",route:"/datamodel/general_params/intro"},{kind:"MdxPage",name:"raw_measurements",route:"/datamodel/general_params/raw_measurements"},{kind:"MdxPage",name:"record_information",route:"/datamodel/general_params/record_information"},{kind:"MdxPage",name:"results",route:"/datamodel/general_params/results"},{kind:"MdxPage",name:"schema_version",route:"/datamodel/general_params/schema_version"},{kind:"MdxPage",name:"technique",route:"/datamodel/general_params/technique"}]},{kind:"MdxPage",name:"intro",route:"/datamodel/intro"},{kind:"Folder",name:"itc",route:"/datamodel/itc",children:[{kind:"Meta",data:{intro:"Introduction"}},{kind:"MdxPage",name:"intro",route:"/datamodel/itc/intro"}]},{kind:"Folder",name:"mst",route:"/datamodel/mst",children:[{kind:"Meta",data:{intro:"Introduction",mst_specific:"MST specific fields",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/mst/data_analysis"},{kind:"MdxPage",name:"intro",route:"/datamodel/mst/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/mst/measurement"},{kind:"MdxPage",name:"mst_specific",route:"/datamodel/mst/mst_specific"}]},{kind:"Folder",name:"reusable_elements",route:"/datamodel/reusable_elements",children:[{kind:"MdxPage",name:"biological_origin",route:"/datamodel/reusable_elements/biological_origin"},{kind:"MdxPage",name:"chemical",route:"/datamodel/reusable_elements/chemical"},{kind:"MdxPage",name:"chemical_constituent",route:"/datamodel/reusable_elements/chemical_constituent"},{kind:"MdxPage",name:"chemical_origin",route:"/datamodel/reusable_elements/chemical_origin"},{kind:"MdxPage",name:"concentration",route:"/datamodel/reusable_elements/concentration"},{kind:"MdxPage",name:"constituent",route:"/datamodel/reusable_elements/constituent"},{kind:"MdxPage",name:"data_fitting",route:"/datamodel/reusable_elements/data_fitting"},{kind:"MdxPage",name:"duration",route:"/datamodel/reusable_elements/duration"},{kind:"MdxPage",name:"entity_constituent",route:"/datamodel/reusable_elements/entity_constituent"},{kind:"MdxPage",name:"environmental_origin",route:"/datamodel/reusable_elements/environmental_origin"},{kind:"MdxPage",name:"files",route:"/datamodel/reusable_elements/files"},{kind:"MdxPage",name:"industrial_origin",route:"/datamodel/reusable_elements/industrial_origin"},{kind:"MdxPage",name:"modification",route:"/datamodel/reusable_elements/modification"},{kind:"MdxPage",name:"molecular_assembly",route:"/datamodel/reusable_elements/molecular_assembly"},{kind:"MdxPage",name:"molecular_weight",route:"/datamodel/reusable_elements/molecular_weight"},{kind:"MdxPage",name:"organism",route:"/datamodel/reusable_elements/organism"},{kind:"MdxPage",name:"person",route:"/datamodel/reusable_elements/person"},{kind:"MdxPage",name:"polymer",route:"/datamodel/reusable_elements/polymer"},{kind:"MdxPage",name:"processing_step",route:"/datamodel/reusable_elements/processing_step"},{kind:"MdxPage",name:"quality_controls",route:"/datamodel/reusable_elements/quality_controls"},{kind:"MdxPage",name:"shaking",route:"/datamodel/reusable_elements/shaking"},{kind:"MdxPage",name:"step",route:"/datamodel/reusable_elements/step"},{kind:"MdxPage",name:"storage",route:"/datamodel/reusable_elements/storage"},{kind:"MdxPage",name:"supplier",route:"/datamodel/reusable_elements/supplier"},{kind:"MdxPage",name:"temperature",route:"/datamodel/reusable_elements/temperature"},{kind:"MdxPage",name:"value_error",route:"/datamodel/reusable_elements/value_error"},{kind:"Meta",data:{biological_origin:"Biological Origin",chemical:"Chemical",chemical_constituent:"Chemical Constituent",chemical_origin:"Chemical Origin",concentration:"Concentration",constituent:"Constituent",data_fitting:"Data Fitting",duration:"Duration",entity_constituent:"Entity Constituent",environmental_origin:"Environmental Origin",files:"Files",industrial_origin:"Industrial Origin",modification:"Modification",molecular_assembly:"Molecular Assembly",molecular_weight:"Molecular Weight",organism:"Organism",person:"Person",polymer:"Polymer",processing_step:"Processing Step",quality_controls:"Quality Controls",shaking:"Shaking",step:"Step",storage:"Storage",supplier:"Supplier",temperature:"Temperature",value_error:"Value Error"}}]},{kind:"Folder",name:"spr",route:"/datamodel/spr",children:[{kind:"Meta",data:{intro:"Introduction"}},{kind:"MdxPage",name:"intro",route:"/datamodel/spr/intro"}]}]},{kind:"Folder",name:"external",route:"/external",children:[{kind:"Meta",data:{intro:"Introduction",affiliations:"Affiliations",chemicals:"Chemicals",grants:"Funding references",organisms:"Organisms"}},{kind:"MdxPage",name:"affiliations",route:"/external/affiliations"},{kind:"MdxPage",name:"chemicals",route:"/external/chemicals"},{kind:"MdxPage",name:"grants",route:"/external/grants"},{kind:"MdxPage",name:"intro",route:"/external/intro"},{kind:"MdxPage",name:"organisms",route:"/external/organisms"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"issues",route:"/issues",children:[{kind:"Meta",data:{intro:"Introduction","app-issues":"Reported issues"}},{kind:"MdxPage",name:"app-issues",route:"/issues/app-issues"},{kind:"MdxPage",name:"intro",route:"/issues/intro"}]},{kind:"Folder",name:"rest_api",route:"/rest_api",children:[{kind:"Meta",data:{intro:"Introduction"}},{kind:"MdxPage",name:"intro",route:"/rest_api/intro"}]},{kind:"Folder",name:"technologies",route:"/technologies",children:[{kind:"Meta",data:{intro:"Introduction"}},{kind:"MdxPage",name:"intro",route:"/technologies/intro"}]}],flexsearch:{codeblocks:!0},title:"App Issues",headings:d},pageNextRoute:"/issues/app-issues",nextraLayout:r.ZP,themeConfig:o.Z};a.default=(0,i.j)(m)},1255:function(e,a,t){"use strict";var n=t(5893);a.Z={logo:(0,n.jsx)("span",{children:"MBDB"}),logoLink:"https://mbdb.test.du.cesnet.cz/",project:{link:"https://github.com/Molecular-Biophysics-Database/mbdb-app"},sidebar:{defaultMenuCollapseLevel:1},docsRepositoryBase:"https://github.com/Molecular-Biophysics-Database/mbdb-docs/tree/main"}},5789:function(){}},function(e){e.O(0,[4955,2888,9774,179],function(){return e(e.s=5114)}),_N_E=e.O()}]);