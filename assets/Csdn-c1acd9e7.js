import{e as r,f as E,j as e,g as v,h as w,i as y,k as H,l as L,m as M,n as p,r as n,o as S}from"./vendor-53f47927.js";import{a as x}from"./index-6104aa1a.js";import{P as T,S as b}from"./Spinner-76373acc.js";import{H as q,C as B}from"./Header-4c31d714.js";const j=l=>{const{title:c="",close:a,cancel:u,confirm:i,children:h,hideClose:d=!1,hideCancel:f=!1,cancelText:g="取消",confirmText:m="确认",hideFooter:t=!1}=l;return r(E,{isOpen:!0,onClose:()=>!d&&a,isCentered:!0,children:[e(v,{}),r(w,{children:[c&&e(y,{children:c}),!d&&e(H,{}),e(L,{children:h}),!t&&r(M,{children:[!f&&e(p,{variant:"ghost",mr:3,onClick:u||a,children:g}),e(p,{colorScheme:"blue",onClick:i,children:m})]})]})]})},A=()=>{const[l,c]=n.useState([]),[a,u]=n.useState(1),[i,h]=n.useState(!1),[d,f]=n.useState(!1),g=S();n.useEffect(()=>{m()},[]),n.useEffect(()=>{const t=()=>{const o=document.documentElement.scrollTop||document.body.scrollTop,s=document.documentElement.scrollHeight||document.body.scrollHeight,C=document.documentElement.clientHeight||window.innerHeight;o+C>=s-20&&m()};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[l]);const m=async()=>{var o;if(i)return;const t={businessType:"lately",noMore:!1,username:"qq_37034928"};try{const{data:s}=await x({page:a,size:10,...t});(o=s==null?void 0:s.list)!=null&&o.length?(u(a+1),c([...l,...s.list])):h(!0)}catch{f(!0)}};return r("div",{children:[e(q,{}),d?e(j,{title:"提示",hideClose:!0,cancelText:"🎄去CSDN",cancel:()=>window.location.href="https://blog.csdn.net/qq_37034928",confirmText:"🔥热搜",confirm:()=>g("/hot"),children:"😭数据加载失败了"}):r(B,{children:[l.map((t,o)=>e("div",{className:"py-4",children:e(T,{...t})},o)),e(b,{loading:!i})]})]})};export{A as default};