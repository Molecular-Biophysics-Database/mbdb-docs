(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6132],{5114:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/issues/app-issues",function(){return t(1741)}])},1741:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return l}});var a=t(5893),i=t(2673),o=t(4294),s=t(9004);t(4759);var r=t(2643);let l=[{depth:3,value:"Propagate changes made to entity.name",id:"propagate-changes-made-to-entityname"},{depth:3,value:"More Results needed",id:"more-results-needed"},{depth:3,value:"copy_number is not clear nomenclature",id:"copy_number-is-not-clear-nomenclature"},{depth:3,value:"Incorporate reviewing workflow into the publication process",id:"incorporate-reviewing-workflow-into-the-publication-process"},{depth:3,value:"The user doesn't know when file uploading has completed",id:"the-user-doesnt-know-when-file-uploading-has-completed"},{depth:3,value:"SPR Data analysis, tooltip",id:"spr-data-analysis-tooltip"},{depth:3,value:"SPR Meas protocol Flow Path - graphics misbehaviour",id:"spr-meas-protocol-flow-path---graphics-misbehaviour"},{depth:3,value:"CommunityInclusionComponent has to be manually removed on model rebuilds",id:"communityinclusioncomponent-has-to-be-manually-removed-on-model-rebuilds"},{depth:3,value:"Record view - width of the graphical representation",id:"record-view---width-of-the-graphical-representation"},{depth:3,value:"Search results filter",id:"search-results-filter"},{depth:3,value:"Searching for a particular expression",id:"searching-for-a-particular-expression"},{depth:3,value:"Measurements are tedious to input",id:"measurements-are-tedious-to-input"},{depth:3,value:"MST datanalysis define Fhot and Fcold in single line",id:"mst-datanalysis-define-fhot-and-fcold-in-single-line"},{depth:3,value:"Include option reuse person information in more sections",id:"include-option-reuse-person-information-in-more-sections"},{depth:3,value:"Vocabulary API performance",id:"vocabulary-api-performance"},{depth:3,value:"Deposition form - autofilling owner infomation and usage information",id:"deposition-form---autofilling-owner-infomation-and-usage-information"},{depth:3,value:"Recordview - Results listing should show associated measurements",id:"recordview---results-listing-should-show-associated-measurements"}];function d(e){let n=Object.assign({h1:"h1",p:"p",h3:"h3",a:"a",code:"code",model:"model",pre:"pre",span:"span",ul:"ul",li:"li"},(0,r.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"App Issues"}),"\n",(0,a.jsx)(n.p,{children:"(list updates daily)"}),"\n",(0,a.jsx)(n.h3,{id:"propagate-changes-made-to-entityname",children:"Propagate changes made to entity.name"}),"\n",(0,a.jsx)(n.p,{children:"If a user changes the name of an entity after filling out related fields, the fields associated with this entity are removed. Retaining this data after a name change would enhance usability."}),"\n",(0,a.jsx)(n.p,{children:"It should be possible to achievable by updating entity.name (through the id field which the user can't change)."}),"\n",(0,a.jsx)(n.h3,{id:"more-results-needed",children:"More Results needed"}),"\n",(0,a.jsx)(n.p,{children:"We noticed the absence of certain result types, such as Qdil, rA, and rM"}),"\n",(0,a.jsx)(n.h3,{id:"copy_number-is-not-clear-nomenclature",children:"copy_number is not clear nomenclature"}),"\n",(0,a.jsx)(n.p,{children:"considering using a different word or longer description."}),"\n",(0,a.jsx)(n.h3,{id:"incorporate-reviewing-workflow-into-the-publication-process",children:"Incorporate reviewing workflow into the publication process"}),"\n",(0,a.jsxs)(n.p,{children:["Currently the record is directly published, however we need the publication system (see ",(0,a.jsx)(n.a,{href:"https://github.com/Molecular-Biophysics-Database/mbdb-docs/tree/workflow-descriptions",children:"here"})," for details)"]}),"\n",(0,a.jsx)(n.h3,{id:"the-user-doesnt-know-when-file-uploading-has-completed",children:"The user doesn't know when file uploading has completed"}),"\n",(0,a.jsx)(n.p,{children:"When attaching a 73 MB binary file, everything worked fine (an .mtz type but I guess it does not matter here).\r\nIt could provide back the file upon request."}),"\n",(0,a.jsx)(n.p,{children:"When attaching a ~ 50 MB binary file (.mrc type), it \"saved\" not saying a word but then in preview when attempting to download, it says\r\nstatus	404\r\nmessage	\"Record 'qan39-t3775' has no file 'run_class001_jakoStateII.mrc'.\""}),"\n",(0,a.jsx)(n.p,{children:'Is there an internal frontend, backend check in place which filters "dangerous" files, i.e. with code in it?\r\nThis does not seem to be connected to file size but rather perhaps to its typ/content?\r\nDo we have a size limit? If yes, the tooltip should mention that.'}),"\n",(0,a.jsx)(n.p,{children:"NOT CRITICAL NOW - I did not see this with the usual file sizes we produce ..."}),"\n",(0,a.jsx)(n.h3,{id:"spr-data-analysis-tooltip",children:"SPR Data analysis, tooltip"}),"\n",(0,a.jsx)(n.p,{children:'In SPR\r\nData Analysis\r\nThe first drop-down Data analysis 1 Measurement 1 has tooltip\r\n"List of measurement links that was analyzed together"'}),"\n",(0,a.jsx)(n.p,{children:'Should this read rather\r\n"Measurements that were analyzed together" ?'}),"\n",(0,a.jsx)(n.p,{children:"NOT Critical"}),"\n",(0,a.jsx)(n.h3,{id:"spr-meas-protocol-flow-path---graphics-misbehaviour",children:"SPR Meas protocol Flow Path - graphics misbehaviour"}),"\n",(0,a.jsx)(n.p,{children:"When adding under SPR method\r\nMeasurement protocol\r\nFlow\r\nPath\r\nPicking a path from the list, OK, then click into the next field and the title of the Path field goes back into the main field instead of staying minimized on the top frame."}),"\n",(0,a.jsx)(n.p,{children:"NOT Critical"}),"\n",(0,a.jsx)(n.h3,{id:"communityinclusioncomponent-has-to-be-manually-removed-on-model-rebuilds",children:"CommunityInclusionComponent has to be manually removed on model rebuilds"}),"\n",(0,a.jsx)(n.p,{children:"Currently we're using communities due to missing functionality, however they will eventually be used, and workflows currently assumes their presences, so communities are partly incorporated backend."}),"\n",(0,a.jsxs)(n.p,{children:["However, to make this partly implemented state work, the ",(0,a.jsx)(n.code,{children:"CommunityInclusionComponent"})," has to be commented out inside\r\n",(0,a.jsx)(n.model,{children:"/services/records/config.py as shown below:"})]}),"\n",(0,a.jsx)(n.pre,{"data-language":"python","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"python","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:" "}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" components "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"PermissionsPresetsConfigMixin"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"components"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"InvenioRecordDraftsServiceConfig"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"components"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" AuthorityComponent"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" CommunityDefaultWorkflowComponent"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"#CommunityInclusionComponent,"})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" OwnersComponent"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" DraftFilesComponent"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" CustomFieldsComponent"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" FilesComponent"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" WorkflowComponent"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" ]"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:" "}),"\n",(0,a.jsx)(n.span,{className:"line",children:" "})]})}),"\n",(0,a.jsx)(n.h3,{id:"record-view---width-of-the-graphical-representation",children:"Record view - width of the graphical representation"}),"\n",(0,a.jsx)(n.p,{children:"The width is now dynamically adjusted according to the content.\r\nThis is generally fine.\r\nHowever, I would suggest that by default it should not shrink below a certain width."}),"\n",(0,a.jsx)(n.p,{children:"NOT CRITICAL - JUST DISTURBING when I compare two or more records."}),"\n",(0,a.jsx)(n.h3,{id:"search-results-filter",children:"Search results filter"}),"\n",(0,a.jsx)(n.p,{children:'The facet in the search results listing seems to be offering "all" of the possible values MBDB has rather than those in the already displayed results.'}),"\n",(0,a.jsx)(n.p,{children:"I can see that when I get only one result filtered out but still have e.g. three Journals available to pick from.\r\nThis may be intended?"}),"\n",(0,a.jsx)(n.h3,{id:"searching-for-a-particular-expression",children:"Searching for a particular expression"}),"\n",(0,a.jsx)(n.p,{children:"Searching for an exact phrase - probably not implemented yet."}),"\n",(0,a.jsx)(n.p,{children:"E.g. I have my favourite record and I want to use its title to get back to it, but the search actually regards individual words in the phrase as separate search items.\r\nTried \" and '."}),"\n",(0,a.jsx)(n.h3,{id:"measurements-are-tedious-to-input",children:"Measurements are tedious to input"}),"\n",(0,a.jsx)(n.p,{children:"It is annoying to always repeat the same values in the case of the measurements. For example, the name is the same, the concentration of the target, the chemical environment and the ‘container’ ..."}),"\n",(0,a.jsx)(n.h3,{id:"mst-datanalysis-define-fhot-and-fcold-in-single-line",children:"MST datanalysis define Fhot and Fcold in single line"}),"\n",(0,a.jsx)(n.p,{children:"In ‘Data analysis’, we believe that using Cold and Hot region a single line for each value would be more appropriate than F cold or F hot:\r\nCold region: start (field to fill) end (field to fill)\r\nHot region: start (field to fill) end (field to fill)"}),"\n",(0,a.jsx)(n.h3,{id:"include-option-reuse-person-information-in-more-sections",children:"Include option reuse person information in more sections"}),"\n",(0,a.jsx)(n.p,{children:"It could be great to include an option to indicate that the ‘principal contact’ is the same as the ‘depositor’ in order to not repeat information and reduce the number of fields the user has to complete manually."}),"\n",(0,a.jsx)(n.h3,{id:"vocabulary-api-performance",children:"Vocabulary API performance"}),"\n",(0,a.jsx)(n.p,{children:"Performance of the vocabulary API appears to be slow, particularly when a larger number of items is requested."}),"\n",(0,a.jsxs)(n.p,{children:['On the testing setup that I have available there are 1003 items present in the "organisms" vocabulary. mbdb-app is running in development mode in a VM form a mechanical disk. The VM is accessed via a guest-host network bridge. A request to fetch all 1003 items from the vocabulary often fails with a timeout error. The timeout is set 15 (fifteen) seconds, which should be more than enough to retrieve around ~1000 entries. If the timeout is reduced even further, (say to 1500 ms) even queries with the ',(0,a.jsx)(n.code,{children:"?suggest"}),' parameter begin to time out.\r\nThe "affiliations" vocabulary (with 1000 entries) fares a little better but a fetch of the entire vocabulary still takes over 5 secs.']}),"\n",(0,a.jsx)(n.p,{children:"These results are very well reproducible."}),"\n",(0,a.jsx)(n.p,{children:"The questions that should probably be asked:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Why is there such a performance disparity between two vocabularies that have the same number of entries?"}),"\n",(0,a.jsx)(n.li,{children:"Is this performance expected or is this some defect of the development setup?"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"deposition-form---autofilling-owner-infomation-and-usage-information",children:"Deposition form - autofilling owner infomation and usage information"}),"\n",(0,a.jsx)(n.p,{children:"Tester notes that:"}),"\n",(0,a.jsx)(n.p,{children:"Depositor and Principal Contact"}),"\n",(0,a.jsx)(n.p,{children:"Is it possible to have a button to autofill the information from the owner information? It would save time!"}),"\n",(0,a.jsx)(n.p,{children:"I wonder if people will really fill out all of these (owner, depositor, principal contact) with different information… how do you see this information being used?"}),"\n",(0,a.jsx)(n.p,{children:"Once someone is registered in the database, will they be searchable to include automatically, or are you relying on them entering orcid to be able to link all of the records associated with that person?"}),"\n",(0,a.jsx)(n.h3,{id:"recordview---results-listing-should-show-associated-measurements",children:"Recordview - Results listing should show associated measurements"}),"\n",(0,a.jsx)(n.p,{children:"Currently the gp.derived_parameters are iterated over to display results listing. It would be preferable to combine this with information found in msp.data_analysis.measurements, as msp.data_analysis have a derived_parameter that can be used establish the connection."})]})}let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.a)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/issues/app-issues.md",route:"/issues/app-issues",timestamp:1734002057e3,pageMap:[{kind:"Meta",data:{index:{title:"Home",type:"page"},record_workflows:{title:"Publication and deletion",type:"page"},datamodel:{title:"Data model",type:"page"},vocabularies:{title:"Vocabularies",type:"page"},technologies:{title:"Technologies",type:"page"},"rest-api":{title:"REST API",type:"page"},"terms-and-conditions":{title:"Terms and conditions",type:"page"},issues:{title:"Known Issues",type:"page"}}},{kind:"Folder",name:"datamodel",route:"/datamodel",children:[{kind:"Meta",data:{intro:"Introduction",general_params:"General parameters",reusable_elements:"Reusable elements",bli:"BLI",mst:"MST",spr:"SPR",itc:"ITC",files:"Files"}},{kind:"Folder",name:"bli",route:"/datamodel/bli",children:[{kind:"Meta",data:{intro:"Introduction",bli_specific:"Method specific parameters",plate:"Plate",sensor:"Sensor",measurement_protocol:"Measurement protocol",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"bli_specific",route:"/datamodel/bli/bli_specific"},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/bli/data_analysis"},{kind:"MdxPage",name:"intro",route:"/datamodel/bli/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/bli/measurement"},{kind:"MdxPage",name:"measurement_protocol",route:"/datamodel/bli/measurement_protocol"},{kind:"MdxPage",name:"plate",route:"/datamodel/bli/plate"},{kind:"MdxPage",name:"sensor",route:"/datamodel/bli/sensor"}]},{kind:"MdxPage",name:"files",route:"/datamodel/files"},{kind:"Folder",name:"general_params",route:"/datamodel/general_params",children:[{kind:"Meta",data:{intro:"Introduction",schema_version:"Schema version",record_information:"Record information",depositors:"Depositors (authors)",associated_publication:"Associated publication",funding:"Funding reference",technique:"Technique",collection_start_time:"Collection start time",instrument:"Instrument",entities_of_interest:"Entities of interest",chemical_environments:"Chemical environments",results:"Results",raw_measurements:"Raw measurements (files)"}},{kind:"MdxPage",name:"associated_publication",route:"/datamodel/general_params/associated_publication"},{kind:"MdxPage",name:"chemical_environments",route:"/datamodel/general_params/chemical_environments"},{kind:"MdxPage",name:"collection_start_time",route:"/datamodel/general_params/collection_start_time"},{kind:"MdxPage",name:"depositors",route:"/datamodel/general_params/depositors"},{kind:"MdxPage",name:"entities_of_interest",route:"/datamodel/general_params/entities_of_interest"},{kind:"MdxPage",name:"funding",route:"/datamodel/general_params/funding"},{kind:"MdxPage",name:"instrument",route:"/datamodel/general_params/instrument"},{kind:"MdxPage",name:"intro",route:"/datamodel/general_params/intro"},{kind:"MdxPage",name:"record_information",route:"/datamodel/general_params/record_information"},{kind:"MdxPage",name:"results",route:"/datamodel/general_params/results"},{kind:"MdxPage",name:"schema_version",route:"/datamodel/general_params/schema_version"},{kind:"MdxPage",name:"technique",route:"/datamodel/general_params/technique"}]},{kind:"MdxPage",name:"intro",route:"/datamodel/intro"},{kind:"Folder",name:"itc",route:"/datamodel/itc",children:[{kind:"Meta",data:{intro:"Introduction",itc_specific:"Method specific parameters",injection_mode:"Injection mode",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/itc/data_analysis"},{kind:"MdxPage",name:"injection_mode",route:"/datamodel/itc/injection_mode"},{kind:"MdxPage",name:"intro",route:"/datamodel/itc/intro"},{kind:"MdxPage",name:"itc_specific",route:"/datamodel/itc/itc_specific"},{kind:"MdxPage",name:"measurement",route:"/datamodel/itc/measurement"}]},{kind:"Folder",name:"mst",route:"/datamodel/mst",children:[{kind:"Meta",data:{intro:"Introduction",mst_specific:"MST specific fields",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/mst/data_analysis"},{kind:"MdxPage",name:"intro",route:"/datamodel/mst/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/mst/measurement"},{kind:"MdxPage",name:"mst_specific",route:"/datamodel/mst/mst_specific"}]},{kind:"Folder",name:"reusable_elements",route:"/datamodel/reusable_elements",children:[{kind:"MdxPage",name:"biological_origin",route:"/datamodel/reusable_elements/biological_origin"},{kind:"MdxPage",name:"chemical",route:"/datamodel/reusable_elements/chemical"},{kind:"MdxPage",name:"chemical_constituent",route:"/datamodel/reusable_elements/chemical_constituent"},{kind:"MdxPage",name:"chemical_origin",route:"/datamodel/reusable_elements/chemical_origin"},{kind:"MdxPage",name:"concentration",route:"/datamodel/reusable_elements/concentration"},{kind:"MdxPage",name:"constituent",route:"/datamodel/reusable_elements/constituent"},{kind:"MdxPage",name:"data_fitting",route:"/datamodel/reusable_elements/data_fitting"},{kind:"MdxPage",name:"duration",route:"/datamodel/reusable_elements/duration"},{kind:"MdxPage",name:"entity_constituent",route:"/datamodel/reusable_elements/entity_constituent"},{kind:"MdxPage",name:"environmental_origin",route:"/datamodel/reusable_elements/environmental_origin"},{kind:"MdxPage",name:"industrial_origin",route:"/datamodel/reusable_elements/industrial_origin"},{kind:"MdxPage",name:"modification",route:"/datamodel/reusable_elements/modification"},{kind:"MdxPage",name:"molecular_assembly",route:"/datamodel/reusable_elements/molecular_assembly"},{kind:"MdxPage",name:"molecular_weight",route:"/datamodel/reusable_elements/molecular_weight"},{kind:"MdxPage",name:"organism",route:"/datamodel/reusable_elements/organism"},{kind:"MdxPage",name:"person",route:"/datamodel/reusable_elements/person"},{kind:"MdxPage",name:"polymer",route:"/datamodel/reusable_elements/polymer"},{kind:"MdxPage",name:"processing_step",route:"/datamodel/reusable_elements/processing_step"},{kind:"MdxPage",name:"quality_controls",route:"/datamodel/reusable_elements/quality_controls"},{kind:"MdxPage",name:"shaking",route:"/datamodel/reusable_elements/shaking"},{kind:"MdxPage",name:"step",route:"/datamodel/reusable_elements/step"},{kind:"MdxPage",name:"storage",route:"/datamodel/reusable_elements/storage"},{kind:"MdxPage",name:"supplier",route:"/datamodel/reusable_elements/supplier"},{kind:"MdxPage",name:"temperature",route:"/datamodel/reusable_elements/temperature"},{kind:"MdxPage",name:"value_error",route:"/datamodel/reusable_elements/value_error"},{kind:"MdxPage",name:"vocabulary_title",route:"/datamodel/reusable_elements/vocabulary_title"},{kind:"MdxPage",name:"volume",route:"/datamodel/reusable_elements/volume"},{kind:"Meta",data:{biological_origin:"Biological Origin",chemical:"Chemical",chemical_constituent:"Chemical Constituent",chemical_origin:"Chemical Origin",concentration:"Concentration",constituent:"Constituent",data_fitting:"Data Fitting",duration:"Duration",entity_constituent:"Entity Constituent",environmental_origin:"Environmental Origin",industrial_origin:"Industrial Origin",modification:"Modification",molecular_assembly:"Molecular Assembly",molecular_weight:"Molecular Weight",organism:"Organism",person:"Person",polymer:"Polymer",processing_step:"Processing Step",quality_controls:"Quality Controls",shaking:"Shaking",step:"Step",storage:"Storage",supplier:"Supplier",temperature:"Temperature",value_error:"Value Error",vocabulary_title:"Vocabulary Title",volume:"Volume"}}]},{kind:"Folder",name:"spr",route:"/datamodel/spr",children:[{kind:"Meta",data:{intro:"Introduction",spr_specific:"Method specific parameters",sensor:"Sensor",measurement_position:"Measurement position",measurement_protocol:"Measurement protocol",measurement:"Measurement"}},{kind:"MdxPage",name:"intro",route:"/datamodel/spr/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/spr/measurement"},{kind:"MdxPage",name:"measurement_position",route:"/datamodel/spr/measurement_position"},{kind:"MdxPage",name:"measurement_protocol",route:"/datamodel/spr/measurement_protocol"},{kind:"MdxPage",name:"sensor",route:"/datamodel/spr/sensor"},{kind:"MdxPage",name:"spr_specific",route:"/datamodel/spr/spr_specific"}]}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"issues",route:"/issues",children:[{kind:"Meta",data:{intro:"Introduction","app-issues":"Reported issues"}},{kind:"MdxPage",name:"app-issues",route:"/issues/app-issues"},{kind:"MdxPage",name:"intro",route:"/issues/intro"}]},{kind:"Folder",name:"record_workflows",route:"/record_workflows",children:[{kind:"Meta",data:{intro:"Introduction",publication:"Publication",deletion:"Deletion",mbdb_roles:"Roles"}},{kind:"MdxPage",name:"deletion",route:"/record_workflows/deletion"},{kind:"MdxPage",name:"intro",route:"/record_workflows/intro"},{kind:"MdxPage",name:"mbdb_roles",route:"/record_workflows/mbdb_roles"},{kind:"MdxPage",name:"publication",route:"/record_workflows/publication"}]},{kind:"Folder",name:"rest-api",route:"/rest-api",children:[{kind:"Meta",data:{intro:"Introduction",authentication:"Authentication",records:"Records",vocabularies:"Vocabularies"}},{kind:"MdxPage",name:"authentication",route:"/rest-api/authentication"},{kind:"MdxPage",name:"intro",route:"/rest-api/intro"},{kind:"Folder",name:"records",route:"/rest-api/records",children:[{kind:"Meta",data:{retrieval:"Retrieval",deposition:"Deposition",search:"Search"}},{kind:"MdxPage",name:"deposition",route:"/rest-api/records/deposition"},{kind:"MdxPage",name:"retrieval",route:"/rest-api/records/retrieval"},{kind:"MdxPage",name:"search",route:"/rest-api/records/search"}]},{kind:"MdxPage",name:"vocabularies",route:"/rest-api/vocabularies"}]},{kind:"Folder",name:"technologies",route:"/technologies",children:[{kind:"Meta",data:{intro:"Introduction"}},{kind:"MdxPage",name:"intro",route:"/technologies/intro"}]},{kind:"Folder",name:"terms-and-conditions",route:"/terms-and-conditions",children:[{kind:"Meta",data:{users:"Users",reviewers:"Reviewers",licensing:"Licensing"}},{kind:"MdxPage",name:"licensing",route:"/terms-and-conditions/licensing"},{kind:"MdxPage",name:"reviewers",route:"/terms-and-conditions/reviewers"},{kind:"MdxPage",name:"users",route:"/terms-and-conditions/users"}]},{kind:"Folder",name:"vocabularies",route:"/vocabularies",children:[{kind:"Meta",data:{intro:"Introduction",affiliations:"Affiliations",chemicals:"Chemicals",grants:"Grants",instruments:"Instruments",languages:"Languages",organisms:"Organisms"}},{kind:"MdxPage",name:"affiliations",route:"/vocabularies/affiliations"},{kind:"MdxPage",name:"chemicals",route:"/vocabularies/chemicals"},{kind:"MdxPage",name:"grants",route:"/vocabularies/grants"},{kind:"MdxPage",name:"instruments",route:"/vocabularies/instruments"},{kind:"MdxPage",name:"intro",route:"/vocabularies/intro"},{kind:"MdxPage",name:"languages",route:"/vocabularies/languages"},{kind:"MdxPage",name:"organisms",route:"/vocabularies/organisms"}]}],flexsearch:{codeblocks:!0},title:"App Issues",headings:l},pageNextRoute:"/issues/app-issues",nextraLayout:o.ZP,themeConfig:s.Z};n.default=(0,i.j)(c)},9004:function(e,n,t){"use strict";var a=t(5893),i=t(4294),o=t(1163);n.Z={logo:(0,a.jsx)("span",{children:"MBDB"}),logoLink:"https://mbdb.test.du.cesnet.cz/",project:{link:"https://github.com/Molecular-Biophysics-Database/mbdb-app"},sidebar:{defaultMenuCollapseLevel:1},footer:{text:(0,a.jsxs)("a",{href:"https://mbdb.test.du.cesnet.cz/",target:"_blank",children:["\xa9 ",new Date().getFullYear()," MBDB"]})},useNextSeoProps(){let{asPath:e}=(0,o.useRouter)();if("/"!==e)return{titleTemplate:"%s - MBDB Docs"}},docsRepositoryBase:"https://github.com/Molecular-Biophysics-Database/mbdb-docs/tree/main",head:()=>{let{frontMatter:e}=(0,i.ZR)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{property:"og:title",content:e.title||"MBDB Docs"}),(0,a.jsx)("meta",{property:"og:description",content:e.description||"The documentation for MBDB"})]})}}},5789:function(){}},function(e){e.O(0,[7359,2888,9774,179],function(){return e(e.s=5114)}),_N_E=e.O()}]);