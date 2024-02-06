"use strict";(self.webpackChunkmbdb_docs=self.webpackChunkmbdb_docs||[]).push([[503],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),u=n,g=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return r?a.createElement(g,o(o({ref:t},d),{},{components:r})):a.createElement(g,o({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7718:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:2},o="Record Information",s={unversionedId:"datamodel/general-params/record_information",id:"datamodel/general-params/record_information",title:"Record Information",description:"Overview",source:"@site/docs/datamodel/general-params/record_information.md",sourceDirName:"datamodel/general-params",slug:"/datamodel/general-params/record_information",permalink:"/mbdb-docs/docs/datamodel/general-params/record_information",draft:!1,editUrl:"https://github.com/Molecular-Biophysics-Database/mbdb-docs/tree/main/docs/datamodel/general-params/record_information.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"dataModelSidebar",previous:{title:"Introduction",permalink:"/mbdb-docs/docs/datamodel/general-params/intro"},next:{title:"Data model - MST",permalink:"/mbdb-docs/docs/category/data-model---mst"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Fields available",id:"fields-available",level:2},{value:"title",id:"title",level:2},{value:"access_rights",id:"access_rights",level:2},{value:"metadata_access_rights",id:"metadata_access_rights",level:2},{value:"publisher",id:"publisher",level:2},{value:"resource_type_general",id:"resource_type_general",level:2},{value:"resource_type",id:"resource_type",level:2},{value:"external_identifier",id:"external_identifier",level:2},{value:"subject_category",id:"subject_category",level:2},{value:"deposition_date",id:"deposition_date",level:2},{value:"date_available",id:"date_available",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"record-information"},"Record Information"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Path"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata.general_parameters.record_information")," ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Required"),": yes ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Type"),": object ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Description"),": Information about the record itself "),(0,n.kt)("h2",{id:"fields-available"},"Fields available"),(0,n.kt)("h2",{id:"title"},"title"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Path"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata.general_parameters.record_information.title")," ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Required"),": yes ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Type"),": keyword (string) ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Description"),": Short descriptive title of the record"),(0,n.kt)("h2",{id:"access_rights"},"access_rights"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Path"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata.general_parameters.record_information.access_rights")," ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Required"),": yes ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Type"),": enumerator (string) ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Options"),": ('open access', 'embargoed access', 'restricted access') ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Description"),': The access rights to the uploaded files. There are three options, 1) "open access" where the files are accessible immediately when the deposition is published, 2)\n"embargoed access" where the files will only become available after a specified\ndate, 3) "restricted access" where depositors are of the record are the only ones who has access'),(0,n.kt)("h2",{id:"metadata_access_rights"},"metadata_access_rights"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Path"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata.general_parameters.record_information.metadata_access_rights")," ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Required"),": yes ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Type"),": enumerator (string) ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Options"),": ('open access', 'embargoed access', 'restricted access') ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Description"),': The access rights to the metadata. Minimal metadata that includes title and depositors is accessible regardless of which type is chosen as it is required to\nobtain a DOI. There are three options, 1) "open access" where the complete metadata\nare accessible immediately when the deposition is published, 2) "embargoed access" where the files will only become available after a specified date, 3) "restricted access" where\ndepositors are of the record are the only ones who has access'),(0,n.kt)("h2",{id:"publisher"},"publisher"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Path"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata.general_parameters.record_information.publisher")," ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Required"),": yes ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Type"),": enumerator (string) ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Options"),": ('MBDB') ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Description"),": When made available MBDB is to be considered the publisher, however, the\ndepositors are still the owners (Datacite requirement field to get DOI). This is automatically generated during deposition"),(0,n.kt)("h2",{id:"resource_type_general"},"resource_type_general"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Path"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata.general_parameters.record_information.resource_type_general")," ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Required"),": yes ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Type"),": enumerator (string) ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Options"),": ('Dataset') ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Description"),": All records are considered to be datasets (Datacite requirement field to get DOI). This is automatically generated during deposition"),(0,n.kt)("h2",{id:"resource_type"},"resource_type"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Path"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata.general_parameters.record_information.resource_type")," ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Required"),": yes ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Type"),": enumerator (string) ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Options"),": ('MST', 'BLI', 'SPR') ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Description"),": DataCite item which shows type of dataset the record is, and corresponds directly to which kind of technique was used (MST/BLI/SPR) (Datacite recommended field to get DOI). This is automatically generated during deposition"),(0,n.kt)("h2",{id:"external_identifier"},"external_identifier"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Path"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata.general_parameters.record_information.external_identifier")," ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Required"),": yes ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Type"),": enumerator (string) ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Options"),": ('doi:10.XXXX/XXXX-XXXX') ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Description"),": The (external) identifier of the record which is a DOI generated by Datacite. This will automatically be generated when the record is published "),(0,n.kt)("h2",{id:"subject_category"},"subject_category"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Path"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata.general_parameters.record_information.subject_category")," ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Required"),": yes ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Type"),": enumerator (string) ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Options"),": ('Biophysics') ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Description"),": DataCite subject category the record data belongs to default is Biophysics (Datacite recommended field to get DOI). This is automatically generated during deposition "),(0,n.kt)("h2",{id:"deposition_date"},"deposition_date"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Path"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata.general_parameters.record_information.deposition_date")," ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Required"),": yes ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Type"),": string ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Format"),": YYYY-MM-DD ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Description"),": The date when the data was deposited; automatically generated "),(0,n.kt)("h2",{id:"date_available"},"date_available"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Path"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata.general_parameters.record_information.deposition_date")," ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Required"),": yes ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Type"),": string  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Format"),": YYYY-MM-DD ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Description"),": The date when the data was/will be made publicly available. Will be automatically generated"))}m.isMDXComponent=!0}}]);