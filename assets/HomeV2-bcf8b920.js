import{R as v,r as n,u as x,g as P,j as t,a as c,C as g}from"./index-00d8e74e.js";import{c as o,u as j,a as f,L as h}from"./Layout-01be3b1a.js";import{L as R}from"./ListMovies-0d4cf54f.js";import{P as D}from"./Pagination-0e69a43f.js";import{S}from"./Skeleton-ff4529c4.js";import"./index-dfcea766.js";const s=e=>e.home,M=o(s,e=>e.dataMovies.map(a=>({id:a.id,title:a.title,original_title:a.original_title,poster_path:a.poster_path}))),H=o(s,e=>e.loading),L=o(s,e=>e.totalPage),T=o(s,e=>e.totalResult),_=()=>{const[e,i]=n.useState(1),a=j(),{loading:m,movies:r,totalPage:u,totalResult:d}=x(f({loading:H,movies:M,totalPage:L,totalResult:T})),p=l=>{l>=1&&l<=u&&i(l)};return n.useEffect(()=>{a(P(e))},[a,e]),m?t.jsx(h,{level1:"Trang chu",level2:"Danh sach",level3:"Phim xem nhieu",children:t.jsx(c,{children:t.jsx(g,{span:24,children:t.jsx(S,{active:!0})})})}):t.jsx(h,{level1:"Trang chu",level2:"Danh sach",level3:"Phim xem nhieu",children:t.jsx(c,{children:t.jsxs(g,{span:24,children:[t.jsx(R,{movies:r}),r.length>0&&t.jsx(D,{current:e,total:d,changePage:p})]})})})},V=v.memo(_);export{V as default};
