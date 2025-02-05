(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8914],{5721:function(i,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rest-api/vocabularies",function(){return e(7986)}])},7986:function(i,s,e){"use strict";e.r(s),e.d(s,{useTOC:function(){return d}});var n=e(5893),l=e(7812),h=e(2848),r=e(9299),t=e(5192);function d(i){return[{value:"Introduction",id:"introduction",depth:2},{value:"Retrieve vocabulary",id:"retrieve-vocabulary",depth:3},{value:"Search vocabularies",id:"search-vocabularies",depth:3},{value:"Parameters",id:"parameters",depth:4},{value:"Using vocabulary items in API depositions",id:"using-vocabulary-items-in-api-depositions",depth:3},{value:"Example",id:"example",depth:4}]}s.default=(0,l.c)(function(i){let{toc:s=d(i)}=i,e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{children:"Vocabularies"}),"\n",(0,n.jsx)(e.h2,{id:s[0].id,children:s[0].value}),"\n",(0,n.jsx)(e.p,{children:"Although the vocabularies are embedded, they’re also available exposed to API users."}),"\n",(0,n.jsxs)(e.p,{children:["It should be noted that for a number of vocabularies, MBDB relies on external resources,\nso for general searching purposes you should ",(0,n.jsx)(e.a,{href:"../external/intro",children:"use those directly"})," rather\nthan going through MBDB."]}),"\n",(0,n.jsx)(e.h3,{id:s[1].id,children:s[1].value}),"\n",(0,n.jsx)(e.p,{children:"The endpoint is:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.code,{children:"https://mbdb-data.org/api/vocabularies/<vocabulary>/<vocabulary-id>"})}),"\n",(0,n.jsx)(e.p,{children:"Where"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"<vocabulary>"})," is one of ",(0,n.jsx)(e.code,{children:"affiliations"}),", ",(0,n.jsx)(e.code,{children:"chemicals"}),", ",(0,n.jsx)(e.code,{children:"grants"}),", ",(0,n.jsx)(e.code,{children:"instruments"}),", ",(0,n.jsx)(e.code,{children:"languages"}),", ",(0,n.jsx)(e.code,{children:"organisms"})]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"<vocabulary-id>"})," is the id of the vocabulary. Note that different vocabularies have different ID structures."]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"Example:"}),"\n",(0,n.jsx)(e.pre,{icon:t.Fx,tabIndex:"0","data-language":"bash","data-word-wrap":"",children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"curl"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -k"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  \\"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  -H"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "Content-Type: application/json"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"  https://mbdb-data.org/api/vocabularies/organisms/taxid:562"})})]})}),"\n",(0,n.jsx)(e.h3,{id:s[2].id,children:s[2].value}),"\n",(0,n.jsx)(e.h4,{id:s[3].id,children:s[3].value}),"\n",(0,n.jsx)(e.p,{children:"For all endpoints, the following search parameters are available:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"Name"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"Description"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"Value options"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"Default value"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"q"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"The query string"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"string"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:(0,n.jsx)(e.code,{children:'""'})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"l"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"layout"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:(0,n.jsx)(e.code,{children:"list"})}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:(0,n.jsx)(e.code,{children:"list"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"p"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"The page number"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"positive integer"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:(0,n.jsx)(e.code,{children:"1"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"s"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"The page size"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"positive integer"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:(0,n.jsx)(e.code,{children:"10"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"sort"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"The sorting order"}),(0,n.jsxs)(e.td,{style:{textAlign:"center"},children:[(0,n.jsx)(e.code,{children:"newest"}),", ",(0,n.jsx)(e.code,{children:"title"}),", ",(0,n.jsx)(e.code,{children:"oldest"}),", ",(0,n.jsx)(e.code,{children:"bestmatch"})]}),(0,n.jsxs)(e.td,{style:{textAlign:"center"},children:[(0,n.jsx)(e.code,{children:"title"})," if empty query, else ",(0,n.jsx)(e.code,{children:"bestmatch"})]})]})]})]}),"\n",(0,n.jsxs)(e.p,{children:["Each parameter are set with ",(0,n.jsx)(e.code,{children:"="})," and parameters should be separated by ",(0,n.jsx)(e.code,{children:"&"}),"."]}),"\n",(0,n.jsx)(e.p,{children:"The endpoint is:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.code,{children:"https://mbdb-data.org/api/vocabularies/<vocabulary>?"})}),"\n",(0,n.jsx)(e.p,{children:"Where"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"<vocabulary>"})," is one of ",(0,n.jsx)(e.code,{children:"affiliations"}),", ",(0,n.jsx)(e.code,{children:"chemicals"}),", ",(0,n.jsx)(e.code,{children:"grants"}),", ",(0,n.jsx)(e.code,{children:"instruments"}),", ",(0,n.jsx)(e.code,{children:"languages"}),", ",(0,n.jsx)(e.code,{children:"organisms"})]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"Example:"}),"\n",(0,n.jsx)(e.pre,{icon:t.Fx,tabIndex:"0","data-language":"bash","data-word-wrap":"",children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"curl"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -k"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  \\"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  -H"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "Content-Type: application/json"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'  https://mbdb-data.org/api/vocabularies/organisms?q="coli"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"&s"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"2"})]})]})}),"\n",(0,n.jsx)(e.h3,{id:s[4].id,children:s[4].value}),"\n",(0,n.jsxs)(e.p,{children:["As each vocabulary item refers to a single global item\n(see ",(0,n.jsx)(e.a,{href:"../vocabularies/intro#implementation",children:"Vocabularies"}),"), it is enough\ninclude the ",(0,n.jsx)(e.code,{children:"id"})," of the item you want. The rest of the fields are fetched\nautomatically and ",(0,n.jsx)(e.strong,{children:"overwrites"})," their corresponding fields\nif they are supplied."]}),"\n",(0,n.jsx)(e.h4,{id:s[5].id,children:s[5].value}),"\n",(0,n.jsx)(e.p,{children:"If the following (truncated) record is deposited:"}),"\n",(0,n.jsx)(e.pre,{tabIndex:"0","data-language":"json","data-word-wrap":"",children:(0,n.jsxs)(e.code,{children:[(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"{"})}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'  "metadata"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:":{"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'    "general_parameters"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": {"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'      "funding_references"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": ["})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        {"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'"id"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"oa:corda__h2020::f219b1de6eeb4e5c5b2ad39010832d79"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})]}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"      ]"})}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  }"})}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n",(0,n.jsx)(e.p,{children:"The following will be the resulting (truncated) record:"}),"\n",(0,n.jsx)(e.pre,{tabIndex:"0","data-language":"json","data-word-wrap":"",children:(0,n.jsxs)(e.code,{children:[(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"{"})}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'  "metadata"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:":{"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'    "general_parameters"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": {"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'      "funding_references"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": ["})]}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        {"})}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'          "@v"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"525aefc7-3183-457b-bf48-2c97c3aa4525::1"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'          "funder_name"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"European Commission"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'          "grant_id"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"101004806"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'          "id"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"oa:corda__h2020::f219b1de6eeb4e5c5b2ad39010832d79"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'          "title"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": {"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'            "en"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"MOlecular-Scale Biophysics Research Infrastructure"'})]}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"          }"})}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        }"})}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"      ]"})}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  }"})}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})})]})},"/rest-api/vocabularies",{filePath:"pages/rest-api/vocabularies.md",timestamp:1738753414e3,pageMap:h.v,frontMatter:{},title:"Vocabularies"},"undefined"==typeof RemoteContent?d:RemoteContent.useTOC)}},function(i){i.O(0,[7812,2848,2888,9774,179],function(){return i(i.s=5721)}),_N_E=i.O()}]);