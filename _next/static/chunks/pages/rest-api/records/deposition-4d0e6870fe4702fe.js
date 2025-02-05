(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8090],{9887:function(i,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rest-api/records/deposition",function(){return e(9566)}])},9566:function(i,s,e){"use strict";e.r(s),e.d(s,{useTOC:function(){return a}});var n=e(5893),l=e(7812),d=e(2848),h=e(9299),r=e(5192);function a(i){return[{value:"Metadata",id:"metadata",depth:2},{value:"Associated files",id:"associated-files",depth:2},{value:"Create file entry",id:"create-file-entry",depth:3},{value:"Upload file content",id:"upload-file-content",depth:3},{value:"Add metadata to file",id:"add-metadata-to-file",depth:3},{value:"Commit changes to file",id:"commit-changes-to-file",depth:3}]}s.default=(0,l.c)(function(i){let{toc:s=a(i)}=i,e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...(0,h.a)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{children:"Deposition"}),"\n",(0,n.jsx)(e.h2,{id:s[0].id,children:s[0].value}),"\n",(0,n.jsx)(e.p,{children:"The endpoint is:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.code,{children:"https://mbdb-data.org/api/records/<model>/"})}),"\n",(0,n.jsx)(e.p,{children:"Where:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"<model>"})," is one of ",(0,n.jsx)(e.code,{children:"bli, itc, mst, spr"})]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"Example using curl:"}),"\n",(0,n.jsx)(e.pre,{icon:r.Fx,tabIndex:"0","data-language":"bash","data-word-wrap":"",children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"curl"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -XPOST"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  -H"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "Authorization: Bearer BtMgKKIxJl838fN25PHRQtacuTJwTan0GYvDbXDB7PXoPYSHcugjZSrXQu6Y"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  -H"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "Content-Type: application/json"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  -d"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "@test_mst.json"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"  https://mbdb-data.org/api/records/mst/"})})]})}),"\n",(0,n.jsx)(e.h2,{id:s[1].id,children:s[1].value}),"\n",(0,n.jsx)(e.p,{children:"In order to upload a file, a (minimal) metadata record already needs to exist.\nUnlike with the metadata record, it takes multiple steps to upload each file:"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"Create file entry"}),"\n",(0,n.jsx)(e.li,{children:"Upload the file"}),"\n",(0,n.jsx)(e.li,{children:"Upload file metadata"}),"\n",(0,n.jsx)(e.li,{children:"Commit the changes"}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:s[2].id,children:s[2].value}),"\n",(0,n.jsx)(e.p,{children:"The endpoint is:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.code,{children:"https://mbdb-data.org/api/records/<model>/<record-id>/draft/files"})}),"\n",(0,n.jsx)(e.p,{children:"Where:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"<model>"})," is one of ",(0,n.jsx)(e.code,{children:"bli, itc, mst, spr"})]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"<record-id>"})," is the record id"]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"The filename(s) should be supplied in the body of the request as\nthe following JSON array:"}),"\n",(0,n.jsx)(e.pre,{tabIndex:"0","data-language":"json","data-word-wrap":"",children:(0,n.jsx)(e.code,{children:(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"[{"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'"key"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"<file-name>"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}]"})]})})}),"\n",(0,n.jsx)(e.p,{children:"Where:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"<file-name>"})," is the filename (including extension)"]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"Example using curl:"}),"\n",(0,n.jsx)(e.pre,{icon:r.Fx,tabIndex:"0","data-language":"bash","data-word-wrap":"",children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"curl"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -XPOST"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  -H"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "Authorization: Bearer BtMgKKIxJl838fN25PHRQtacuTJwTan0GYvDbXDB7PXoPYSHcugjZSrXQu6Y"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  -H"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "Content-Type: application/json"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  -d"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' \'[{"key": "example.txt"}]\''}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"  https://mbdb-data.org/api/records/mst/zv0gv-btp27/draft/files"})}),"\n",(0,n.jsx)(e.span,{children:" "})]})}),"\n",(0,n.jsx)(e.h3,{id:s[3].id,children:s[3].value}),"\n",(0,n.jsx)(e.p,{children:"The endpoint is:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.code,{children:"https://mbdb-data.org/api/records/<model>/<record-id>/draft/files/<file-name>/content"})}),"\n",(0,n.jsx)(e.p,{children:"Where:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"<model>"})," is one of ",(0,n.jsx)(e.code,{children:"bli, itc, mst, spr"})]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"<record-id>"})," is the record id"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"<file-name>"})," is the filename (including extension)"]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"The file content should be uploaded as an octet-stream and include the content\nof the file in the request of the body"}),"\n",(0,n.jsx)(e.p,{children:"Example using curl:"}),"\n",(0,n.jsx)(e.pre,{icon:r.Fx,tabIndex:"0","data-language":"bash","data-word-wrap":"",children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"curl"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -XPUT"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  -H"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "Authorization: Bearer BtMgKKIxJl838fN25PHRQtacuTJwTan0GYvDbXDB7PXoPYSHcugjZSrXQu6Y"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  -H"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "Content-Type: application/octet-stream"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  -d"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '@example.txt'"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"  https://mbdb-data.org/api/records/mst/zv0gv-btp27/draft/files/example.txt/content"})})]})}),"\n",(0,n.jsx)(e.h3,{id:s[4].id,children:s[4].value}),"\n",(0,n.jsxs)(e.p,{children:["The endpoint is:\n",(0,n.jsx)(e.code,{children:"https://mbdb-data.org/api/records/<model>/<record-id>/draft/files/<file-name>"})]}),"\n",(0,n.jsx)(e.p,{children:"Where:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"<model>"})," is one of ",(0,n.jsx)(e.code,{children:"bli, itc, mst, spr"})]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"<record-id>"})," is the record id"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"<file-name>"})," is the filename (including extension)"]}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["The file meta should be uploaded as a JSON and include the metadata\nin the request of the body (see ",(0,n.jsx)(e.a,{href:"../../datamodel/files#fields-available-in-files-metadata",children:"Files"}),"\nfor available metadata fields)."]}),"\n",(0,n.jsx)(e.p,{children:"Example using curl:"}),"\n",(0,n.jsx)(e.pre,{icon:r.Fx,tabIndex:"0","data-language":"bash","data-word-wrap":"",children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"curl"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -XPUT"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  -H"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "Authorization: Bearer BtMgKKIxJl838fN25PHRQtacuTJwTan0GYvDbXDB7PXoPYSHcugjZSrXQu6Y"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  -H"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "Content-Type: application/json"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  -d"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' \'{"description": "Example of a description"}\''}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"  https://mbdb-data.org/api/records/mst/zv0gv-btp27/draft/files/example.txt"})})]})}),"\n",(0,n.jsx)(e.h3,{id:s[5].id,children:s[5].value}),"\n",(0,n.jsxs)(e.p,{children:["The endpoint is:\n",(0,n.jsx)(e.code,{children:"https://mbdb-data.org/api/records/<model>/<record-id>/draft/files/<file-name>/commit"})]}),"\n",(0,n.jsx)(e.p,{children:"Where:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"<model>"})," is one of ",(0,n.jsx)(e.code,{children:"bli, itc, mst, spr"})]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"<record-id>"})," is the record id"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"<file-name>"})," is the filename (including extension)"]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"Example using curl:"}),"\n",(0,n.jsx)(e.pre,{icon:r.Fx,tabIndex:"0","data-language":"bash","data-word-wrap":"",children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" curl"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -XPOST"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  -H"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "Authorization: Bearer BtMgKKIxJl838fN25PHRQtacuTJwTan0GYvDbXDB7PXoPYSHcugjZSrXQu6Y"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"  https://mbdb-data.org/api/records/mst/zv0gv-btp27/draft/files/example.txt/commit"})})]})})]})},"/rest-api/records/deposition",{filePath:"pages/rest-api/records/deposition.md",timestamp:1738753414e3,pageMap:d.v,frontMatter:{},title:"Deposition"},"undefined"==typeof RemoteContent?a:RemoteContent.useTOC)}},function(i){i.O(0,[7812,2848,2888,9774,179],function(){return i(i.s=9887)}),_N_E=i.O()}]);