(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2021],{2427:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rest-api/authentication",function(){return t(87)}])},87:function(e,a,t){"use strict";t.r(a),t.d(a,{__toc:function(){return c},default:function(){return p}});var n=t(5893),i=t(2673),o=t(4294),r=t(9004);t(1392),t(4759);var s=t(2643),d={src:"/mbdb-docs//_next/static/media/api_token.3f3b8bc2.svg",height:459,width:975,blurWidth:0,blurHeight:0},l={src:"/mbdb-docs//_next/static/media/app_dev.24e1891a.svg",height:459,width:975,blurWidth:0,blurHeight:0};let c=[{depth:2,value:"Personal access tokens",id:"personal-access-tokens"},{depth:3,value:"Generate token",id:"generate-token"},{depth:3,value:"Use token",id:"use-token"},{depth:2,value:"Developer application",id:"developer-application"},{depth:3,value:"Disclaimer",id:"disclaimer"},{depth:3,value:"Registering your application",id:"registering-your-application"}];function m(e){let a=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",img:"img",pre:"pre",code:"code",span:"span",a:"a"},(0,s.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{children:"Authentication token"}),"\n",(0,n.jsx)(a.h2,{id:"personal-access-tokens",children:"Personal access tokens"}),"\n",(0,n.jsx)(a.h3,{id:"generate-token",children:"Generate token"}),"\n",(0,n.jsx)(a.p,{children:"An authentication token is required to use the API for deposition.\nThe token can be obtained by registering to the MBDB and then follow\nthe steps outlined in the figure below."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"api_token_img",src:d})}),"\n",(0,n.jsx)(a.h3,{id:"use-token",children:"Use token"}),"\n",(0,n.jsx)(a.p,{children:"The token should be included in the header of all of your requests like so:"}),"\n",(0,n.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(a.code,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Authorization: Bearer BtMgKKIxJl838fN25PHRQtacuTJwTan0GYvDbXDB7PXoPYSHcugjZSrXQu6Y"})})})}),"\n",(0,n.jsx)(a.p,{children:"It's important to keep the token secret (the one shown is an invalidated token) as it\ngrants admin rights to your account!"}),"\n",(0,n.jsx)(a.p,{children:"Example using curl:"}),"\n",(0,n.jsx)(a.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(a.code,{"data-language":"bash","data-theme":"default",children:[(0,n.jsxs)(a.span,{className:"line",children:[(0,n.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"curl"}),(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(a.span,{style:{color:"var(--shiki-token-string)"},children:"-k"}),(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(a.span,{style:{color:"var(--shiki-token-string)"},children:"-XPOST"}),(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(a.span,{className:"line",children:[(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(a.span,{style:{color:"var(--shiki-token-string)"},children:"-H"}),(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(a.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Authorization: Bearer BtMgKKIxJl838fN25PHRQtacuTJwTan0GYvDbXDB7PXoPYSHcugjZSrXQu6Y"'}),(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(a.span,{className:"line",children:[(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(a.span,{style:{color:"var(--shiki-token-string)"},children:"-H"}),(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(a.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Content-Type: application/json"'}),(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(a.span,{className:"line",children:[(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(a.span,{style:{color:"var(--shiki-token-string)"},children:"-d"}),(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(a.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"@test_mst.json"'}),(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(a.span,{className:"line",children:[(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(a.span,{style:{color:"var(--shiki-token-string)"},children:"https://mbdb-data.org/api/records/mst/"})]})]})}),"\n",(0,n.jsx)(a.h2,{id:"developer-application",children:"Developer application"}),"\n",(0,n.jsx)(a.h3,{id:"disclaimer",children:"Disclaimer"}),"\n",(0,n.jsxs)(a.p,{children:["This feature currently exists for testing purposes only, not production\nlevel builds! Please get into contact with ",(0,n.jsx)(a.a,{href:"mailto:mbdb@ibt.cas.czsubject=Developer%20application",children:"MBDB"})," and\noutline your use case and your needs."]}),"\n",(0,n.jsx)(a.h3,{id:"registering-your-application",children:"Registering your application"}),"\n",(0,n.jsx)(a.p,{children:"Follow the steps outlined below to register your application within the\nMBDB."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"app_dev_img",src:l})})]})}let u={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,s.a)(),e.components);return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(m,{...e})}):m(e)},pageOpts:{filePath:"pages/rest-api/authentication.md",route:"/rest-api/authentication",timestamp:1734014152e3,pageMap:[{kind:"Meta",data:{index:{title:"Home",type:"page"},"record-workflows":{title:"Deposition",type:"page"},datamodel:{title:"Data model",type:"page"},vocabularies:{title:"Vocabularies",type:"page"},technologies:{title:"Technologies",type:"page"},"rest-api":{title:"REST API",type:"page"},"terms-and-conditions":{title:"Terms and conditions",type:"page"},issues:{title:"Known Issues",type:"page"}}},{kind:"Folder",name:"datamodel",route:"/datamodel",children:[{kind:"Meta",data:{intro:"Introduction",general_params:"General parameters",reusable_elements:"Reusable elements",bli:"BLI",mst:"MST",spr:"SPR",itc:"ITC",files:"Files"}},{kind:"Folder",name:"bli",route:"/datamodel/bli",children:[{kind:"Meta",data:{intro:"Introduction",bli_specific:"Method specific parameters",plate:"Plate",sensor:"Sensor",measurement_protocol:"Measurement protocol",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"bli_specific",route:"/datamodel/bli/bli_specific"},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/bli/data_analysis"},{kind:"MdxPage",name:"intro",route:"/datamodel/bli/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/bli/measurement"},{kind:"MdxPage",name:"measurement_protocol",route:"/datamodel/bli/measurement_protocol"},{kind:"MdxPage",name:"plate",route:"/datamodel/bli/plate"},{kind:"MdxPage",name:"sensor",route:"/datamodel/bli/sensor"}]},{kind:"MdxPage",name:"files",route:"/datamodel/files"},{kind:"Folder",name:"general_params",route:"/datamodel/general_params",children:[{kind:"Meta",data:{intro:"Introduction",schema_version:"Schema version",record_information:"Record information",depositors:"Depositors (authors)",associated_publication:"Associated publication",funding:"Funding reference",technique:"Technique",collection_start_time:"Collection start time",instrument:"Instrument",entities_of_interest:"Entities of interest",chemical_environments:"Chemical environments",results:"Results",raw_measurements:"Raw measurements (files)"}},{kind:"MdxPage",name:"associated_publication",route:"/datamodel/general_params/associated_publication"},{kind:"MdxPage",name:"chemical_environments",route:"/datamodel/general_params/chemical_environments"},{kind:"MdxPage",name:"collection_start_time",route:"/datamodel/general_params/collection_start_time"},{kind:"MdxPage",name:"depositors",route:"/datamodel/general_params/depositors"},{kind:"MdxPage",name:"entities_of_interest",route:"/datamodel/general_params/entities_of_interest"},{kind:"MdxPage",name:"funding",route:"/datamodel/general_params/funding"},{kind:"MdxPage",name:"instrument",route:"/datamodel/general_params/instrument"},{kind:"MdxPage",name:"intro",route:"/datamodel/general_params/intro"},{kind:"MdxPage",name:"record_information",route:"/datamodel/general_params/record_information"},{kind:"MdxPage",name:"results",route:"/datamodel/general_params/results"},{kind:"MdxPage",name:"schema_version",route:"/datamodel/general_params/schema_version"},{kind:"MdxPage",name:"technique",route:"/datamodel/general_params/technique"}]},{kind:"MdxPage",name:"intro",route:"/datamodel/intro"},{kind:"Folder",name:"itc",route:"/datamodel/itc",children:[{kind:"Meta",data:{intro:"Introduction",itc_specific:"Method specific parameters",injection_mode:"Injection mode",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/itc/data_analysis"},{kind:"MdxPage",name:"injection_mode",route:"/datamodel/itc/injection_mode"},{kind:"MdxPage",name:"intro",route:"/datamodel/itc/intro"},{kind:"MdxPage",name:"itc_specific",route:"/datamodel/itc/itc_specific"},{kind:"MdxPage",name:"measurement",route:"/datamodel/itc/measurement"}]},{kind:"Folder",name:"mst",route:"/datamodel/mst",children:[{kind:"Meta",data:{intro:"Introduction",mst_specific:"MST specific fields",measurement:"Measurement",data_analysis:"Data analysis"}},{kind:"MdxPage",name:"data_analysis",route:"/datamodel/mst/data_analysis"},{kind:"MdxPage",name:"intro",route:"/datamodel/mst/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/mst/measurement"},{kind:"MdxPage",name:"mst_specific",route:"/datamodel/mst/mst_specific"}]},{kind:"Folder",name:"reusable_elements",route:"/datamodel/reusable_elements",children:[{kind:"MdxPage",name:"biological_origin",route:"/datamodel/reusable_elements/biological_origin"},{kind:"MdxPage",name:"chemical",route:"/datamodel/reusable_elements/chemical"},{kind:"MdxPage",name:"chemical_constituent",route:"/datamodel/reusable_elements/chemical_constituent"},{kind:"MdxPage",name:"chemical_origin",route:"/datamodel/reusable_elements/chemical_origin"},{kind:"MdxPage",name:"concentration",route:"/datamodel/reusable_elements/concentration"},{kind:"MdxPage",name:"constituent",route:"/datamodel/reusable_elements/constituent"},{kind:"MdxPage",name:"data_fitting",route:"/datamodel/reusable_elements/data_fitting"},{kind:"MdxPage",name:"duration",route:"/datamodel/reusable_elements/duration"},{kind:"MdxPage",name:"entity_constituent",route:"/datamodel/reusable_elements/entity_constituent"},{kind:"MdxPage",name:"environmental_origin",route:"/datamodel/reusable_elements/environmental_origin"},{kind:"MdxPage",name:"industrial_origin",route:"/datamodel/reusable_elements/industrial_origin"},{kind:"MdxPage",name:"modification",route:"/datamodel/reusable_elements/modification"},{kind:"MdxPage",name:"molecular_assembly",route:"/datamodel/reusable_elements/molecular_assembly"},{kind:"MdxPage",name:"molecular_weight",route:"/datamodel/reusable_elements/molecular_weight"},{kind:"MdxPage",name:"organism",route:"/datamodel/reusable_elements/organism"},{kind:"MdxPage",name:"person",route:"/datamodel/reusable_elements/person"},{kind:"MdxPage",name:"polymer",route:"/datamodel/reusable_elements/polymer"},{kind:"MdxPage",name:"processing_step",route:"/datamodel/reusable_elements/processing_step"},{kind:"MdxPage",name:"quality_controls",route:"/datamodel/reusable_elements/quality_controls"},{kind:"MdxPage",name:"shaking",route:"/datamodel/reusable_elements/shaking"},{kind:"MdxPage",name:"step",route:"/datamodel/reusable_elements/step"},{kind:"MdxPage",name:"storage",route:"/datamodel/reusable_elements/storage"},{kind:"MdxPage",name:"supplier",route:"/datamodel/reusable_elements/supplier"},{kind:"MdxPage",name:"temperature",route:"/datamodel/reusable_elements/temperature"},{kind:"MdxPage",name:"value_error",route:"/datamodel/reusable_elements/value_error"},{kind:"MdxPage",name:"vocabulary_title",route:"/datamodel/reusable_elements/vocabulary_title"},{kind:"MdxPage",name:"volume",route:"/datamodel/reusable_elements/volume"},{kind:"Meta",data:{biological_origin:"Biological Origin",chemical:"Chemical",chemical_constituent:"Chemical Constituent",chemical_origin:"Chemical Origin",concentration:"Concentration",constituent:"Constituent",data_fitting:"Data Fitting",duration:"Duration",entity_constituent:"Entity Constituent",environmental_origin:"Environmental Origin",industrial_origin:"Industrial Origin",modification:"Modification",molecular_assembly:"Molecular Assembly",molecular_weight:"Molecular Weight",organism:"Organism",person:"Person",polymer:"Polymer",processing_step:"Processing Step",quality_controls:"Quality Controls",shaking:"Shaking",step:"Step",storage:"Storage",supplier:"Supplier",temperature:"Temperature",value_error:"Value Error",vocabulary_title:"Vocabulary Title",volume:"Volume"}}]},{kind:"Folder",name:"spr",route:"/datamodel/spr",children:[{kind:"Meta",data:{intro:"Introduction",spr_specific:"Method specific parameters",sensor:"Sensor",measurement_position:"Measurement position",measurement_protocol:"Measurement protocol",measurement:"Measurement"}},{kind:"MdxPage",name:"intro",route:"/datamodel/spr/intro"},{kind:"MdxPage",name:"measurement",route:"/datamodel/spr/measurement"},{kind:"MdxPage",name:"measurement_position",route:"/datamodel/spr/measurement_position"},{kind:"MdxPage",name:"measurement_protocol",route:"/datamodel/spr/measurement_protocol"},{kind:"MdxPage",name:"sensor",route:"/datamodel/spr/sensor"},{kind:"MdxPage",name:"spr_specific",route:"/datamodel/spr/spr_specific"}]}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"issues",route:"/issues",children:[{kind:"Meta",data:{intro:"Introduction","app-issues":"Reported issues"}},{kind:"MdxPage",name:"app-issues",route:"/issues/app-issues"},{kind:"MdxPage",name:"intro",route:"/issues/intro"}]},{kind:"Folder",name:"record-workflows",route:"/record-workflows",children:[{kind:"Meta",data:{intro:"Introduction",prerequisites:"Prerequisites",publication:"Publication",deletion:"Deletion","mbdb-roles":"Roles"}},{kind:"MdxPage",name:"deletion",route:"/record-workflows/deletion"},{kind:"MdxPage",name:"intro",route:"/record-workflows/intro"},{kind:"MdxPage",name:"mbdb-roles",route:"/record-workflows/mbdb-roles"},{kind:"MdxPage",name:"prerequisites",route:"/record-workflows/prerequisites"},{kind:"MdxPage",name:"publication",route:"/record-workflows/publication"}]},{kind:"Folder",name:"rest-api",route:"/rest-api",children:[{kind:"Meta",data:{intro:"Introduction",authentication:"Authentication",records:"Records",vocabularies:"Vocabularies"}},{kind:"MdxPage",name:"authentication",route:"/rest-api/authentication"},{kind:"MdxPage",name:"intro",route:"/rest-api/intro"},{kind:"Folder",name:"records",route:"/rest-api/records",children:[{kind:"Meta",data:{retrieval:"Retrieval",deposition:"Deposition",search:"Search"}},{kind:"MdxPage",name:"deposition",route:"/rest-api/records/deposition"},{kind:"MdxPage",name:"retrieval",route:"/rest-api/records/retrieval"},{kind:"MdxPage",name:"search",route:"/rest-api/records/search"}]},{kind:"MdxPage",name:"vocabularies",route:"/rest-api/vocabularies"}]},{kind:"Folder",name:"technologies",route:"/technologies",children:[{kind:"Meta",data:{intro:"Introduction"}},{kind:"MdxPage",name:"intro",route:"/technologies/intro"}]},{kind:"Folder",name:"terms-and-conditions",route:"/terms-and-conditions",children:[{kind:"Meta",data:{users:"Users",reviewers:"Reviewers",licensing:"Licensing"}},{kind:"MdxPage",name:"licensing",route:"/terms-and-conditions/licensing"},{kind:"MdxPage",name:"reviewers",route:"/terms-and-conditions/reviewers"},{kind:"MdxPage",name:"users",route:"/terms-and-conditions/users"}]},{kind:"Folder",name:"vocabularies",route:"/vocabularies",children:[{kind:"Meta",data:{intro:"Introduction",affiliations:"Affiliations",chemicals:"Chemicals",grants:"Grants",instruments:"Instruments",languages:"Languages",organisms:"Organisms"}},{kind:"MdxPage",name:"affiliations",route:"/vocabularies/affiliations"},{kind:"MdxPage",name:"chemicals",route:"/vocabularies/chemicals"},{kind:"MdxPage",name:"grants",route:"/vocabularies/grants"},{kind:"MdxPage",name:"instruments",route:"/vocabularies/instruments"},{kind:"MdxPage",name:"intro",route:"/vocabularies/intro"},{kind:"MdxPage",name:"languages",route:"/vocabularies/languages"},{kind:"MdxPage",name:"organisms",route:"/vocabularies/organisms"}]}],flexsearch:{codeblocks:!0},title:"Authentication token",headings:c},pageNextRoute:"/rest-api/authentication",nextraLayout:o.ZP,themeConfig:r.Z};var p=(0,i.j)(u)},9004:function(e,a,t){"use strict";var n=t(5893),i=t(4294),o=t(1163);a.Z={logo:(0,n.jsx)("span",{children:"MBDB"}),logoLink:"https://mbdb.test.du.cesnet.cz/",project:{link:"https://github.com/Molecular-Biophysics-Database/mbdb-app"},sidebar:{defaultMenuCollapseLevel:1},footer:{text:(0,n.jsxs)("a",{href:"https://mbdb.test.du.cesnet.cz/",target:"_blank",children:["\xa9 ",new Date().getFullYear()," MBDB"]})},useNextSeoProps(){let{asPath:e}=(0,o.useRouter)();if("/"!==e)return{titleTemplate:"%s - MBDB Docs"}},docsRepositoryBase:"https://github.com/Molecular-Biophysics-Database/mbdb-docs/tree/main",head:()=>{let{frontMatter:e}=(0,i.ZR)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{property:"og:title",content:e.title||"MBDB Docs"}),(0,n.jsx)("meta",{property:"og:description",content:e.description||"The documentation for MBDB"})]})}}},5789:function(){}},function(e){e.O(0,[1321,2888,9774,179],function(){return e(e.s=2427)}),_N_E=e.O()}]);