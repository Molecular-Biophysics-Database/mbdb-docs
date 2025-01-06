(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2021],{2427:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rest-api/authentication",function(){return n(7197)}])},7197:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return c},useTOC:function(){return o}});var t=n(5893),s=n(7812),a=n(2848),h=n(9299),r={src:"/mbdb-docs//_next/static/media/api_token.3f3b8bc2.svg",height:459,width:975,blurWidth:0,blurHeight:0},l={src:"/mbdb-docs//_next/static/media/app_dev.24e1891a.svg",height:459,width:975,blurWidth:0,blurHeight:0},d=n(5192);function o(e){return[{value:"Personal access tokens",id:"personal-access-tokens",depth:2},{value:"Generate token",id:"generate-token",depth:3},{value:"Use token",id:"use-token",depth:3},{value:"Developer application",id:"developer-application",depth:2},{value:"Disclaimer",id:"disclaimer",depth:3},{value:"Registering your application",id:"registering-your-application",depth:3}]}var c=(0,s.c)(function(e){let{toc:i=o(e)}=e,n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",span:"span",...(0,h.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"Authentication token"}),"\n",(0,t.jsx)(n.h2,{id:i[0].id,children:i[0].value}),"\n",(0,t.jsx)(n.h3,{id:i[1].id,children:i[1].value}),"\n",(0,t.jsx)(n.p,{children:"An authentication token is required to use the API for deposition.\nThe token can be obtained by registering to the MBDB and then follow\nthe steps outlined in the figure below."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"api_token_img",src:r})}),"\n",(0,t.jsx)(n.h3,{id:i[2].id,children:i[2].value}),"\n",(0,t.jsx)(n.p,{children:"The token should be included in the header of all of your requests like so:"}),"\n",(0,t.jsx)(n.pre,{tabIndex:"0","data-language":"plaintext","data-word-wrap":"",children:(0,t.jsx)(n.code,{children:(0,t.jsx)(n.span,{children:(0,t.jsx)(n.span,{children:"Authorization: Bearer BtMgKKIxJl838fN25PHRQtacuTJwTan0GYvDbXDB7PXoPYSHcugjZSrXQu6Y"})})})}),"\n",(0,t.jsx)(n.p,{children:"It’s important to keep the token secret (the one shown is an invalidated token) as it\ngrants admin rights to your account!"}),"\n",(0,t.jsx)(n.p,{children:"Example using curl:"}),"\n",(0,t.jsx)(n.pre,{icon:d.Fx,tabIndex:"0","data-language":"bash","data-word-wrap":"",children:(0,t.jsxs)(n.code,{children:[(0,t.jsxs)(n.span,{children:[(0,t.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"curl"}),(0,t.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -k"}),(0,t.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -XPOST"}),(0,t.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,t.jsxs)(n.span,{children:[(0,t.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  -H"}),(0,t.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "Authorization: Bearer BtMgKKIxJl838fN25PHRQtacuTJwTan0GYvDbXDB7PXoPYSHcugjZSrXQu6Y"'}),(0,t.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,t.jsxs)(n.span,{children:[(0,t.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  -H"}),(0,t.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "Content-Type: application/json"'}),(0,t.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,t.jsxs)(n.span,{children:[(0,t.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  -d"}),(0,t.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "@test_mst.json"'}),(0,t.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,t.jsx)(n.span,{children:(0,t.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"  https://mbdb-data.org/api/records/mst/"})})]})}),"\n",(0,t.jsx)(n.h2,{id:i[3].id,children:i[3].value}),"\n",(0,t.jsx)(n.h3,{id:i[4].id,children:i[4].value}),"\n",(0,t.jsxs)(n.p,{children:["This feature currently exists for testing purposes only, not production\nlevel builds! Please get into contact with ",(0,t.jsx)(n.a,{href:"mailto:mbdb@ibt.cas.czsubject=Developer%20application",children:"MBDB"})," and\noutline your use case and your needs."]}),"\n",(0,t.jsx)(n.h3,{id:i[5].id,children:i[5].value}),"\n",(0,t.jsx)(n.p,{children:"Follow the steps outlined below to register your application within the\nMBDB."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"app_dev_img",src:l})})]})},"/rest-api/authentication",{filePath:"pages/rest-api/authentication.md",timestamp:1736155546e3,pageMap:a.v,frontMatter:{},title:"Authentication token"},"undefined"==typeof RemoteContent?o:RemoteContent.useTOC)}},function(e){e.O(0,[7812,2848,2888,9774,179],function(){return e(e.s=2427)}),_N_E=e.O()}]);