import{c as Te,r as c,j as e,u as Re,S as Ue,M as ze,a as L,b as oe,F as h,d as ce,e as E,I as re,V as He,L as Fe,f as Oe,g as i,h as ie,H as Qe,D as _e,i as Ke,k as I,C as We,l as le,m as de,n as Pe,T as $e,o as Ze,B as k,p as R,q as qe,s as me,t as ue,v as ge,w as he,x as Ae,y as fe,z as Ve,A as Je,E as j,G as X,J as O,K as Xe,N as et,O as tt,P as nt,Q as K,R as pe,U as we,W as st,X as at,Y as ve,Z as xe,_ as ot,$ as ct,a0 as rt,a1 as it,a2 as be,a3 as lt,a4 as ye,a5 as dt,a6 as mt,a7 as ut,a8 as gt,a9 as ht,aa as Be,ab as Ne,ac as At,ad as ft,ae as pt,af as wt,ag as F,ah as vt,ai as xt,aj as bt,ak as yt,al as W,am as Ce,an as Bt,ao as Nt,ap as Ct,aq as Mt}from"./vendor-0e463b1f.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const Me="set_user",Ie="container_width",Q="watermark_bg_status",It={username:"",email:"",user:void 0},kt=(t=It,n)=>{switch(n.type){case Me:return n.value}return t},St={containerWidth:0},Et=(t=St,n)=>{switch(n.type){case Ie:return{containerWidth:n.value}}return t},Yt={open:!0},Gt=(t=Yt,n)=>{switch(n.type){case Q:return{open:n.value}}return t},P=Te({reducer:{user:kt,containerWidth:Et,watermarkBg:Gt}}),Dt=t=>{P.dispatch({type:Ie,value:t})},G=({children:t,className:n=""})=>{const s=document.getElementsByClassName("bg")[0],[o,a]=c.useState(0);return c.useEffect(()=>(window.addEventListener("resize",()=>{s!=null&&s.offsetWidth&&a(s.offsetWidth)}),window.removeEventListener("resize",()=>{})),[s]),c.useEffect(()=>{Dt(o)},[o]),e("div",{className:`${n} w-full bg`,children:e("div",{className:`${n} mx-auto px-4 sm:px-6 lg:max-w-4xl xl:max-w-5xl xl:px-0`,children:t})})},jt=()=>{const{colorMode:t,toggleColorMode:n}=Re();return e("div",{className:"cursor-pointer",onClick:()=>n(),children:t==="dark"?e(Ue,{}):e(ze,{})})},Lt=""+new URL("1-2cc23b73.gif",import.meta.url).href,Tt=""+new URL("2-89e3714d.gif",import.meta.url).href,Rt=""+new URL("3-e970c1f6.gif",import.meta.url).href,Ut=""+new URL("4-c0bfb110.gif",import.meta.url).href,zt=""+new URL("5-3b3ea8c0.gif",import.meta.url).href,Ht=""+new URL("6-11988ec0.gif",import.meta.url).href,Ft=""+new URL("7-763ba872.gif",import.meta.url).href,Ot=""+new URL("fire-f1f6c407.gif",import.meta.url).href,Qt=Math.floor(Math.random()*7+1),_t=t=>new URL(Object.assign({"../assets/images/1.gif":Lt,"../assets/images/2.gif":Tt,"../assets/images/3.gif":Rt,"../assets/images/4.gif":Ut,"../assets/images/5.gif":zt,"../assets/images/6.gif":Ht,"../assets/images/7.gif":Ft,"../assets/images/fire.gif":Ot})[`../assets/images/${t}.gif`],self.location).href,Kt={backgroundImage:`url(${_t(Qt)})`},Wt=()=>{const t=L(),n=oe(s=>s.user);return e(h,{children:n.avatar?e("div",{className:"logo-bg rounded-full overflow-hidden w-16 h-8 md:w-20 md:h-10 cursor-pointer text-xl md:text-2xl font-bold flex justify-center items-center",style:Kt,onClick:()=>t("/"),children:"讨口子"}):e(ce,{className:"w-16 h-8 md:w-20 md:h-10"})})},$="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAAEEAQMAAAARWB0lAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACNJREFUaN7twTEBAAAAwiD7pzbFPmAAAAAAAAAAAAAAAADkDjHEAAHC6Y9+AAAAAElFTkSuQmCC",Pt=()=>{const t=L(),n=oe(o=>o.user),s=E(n.avatar,n.avatarWithe);return e(h,{children:n.avatar?e(re,{className:"inline-block rounded-full overflow-hidden w-16 h-8 md:w-20 md:h-10 cursor-pointer",src:s,fallbackSrc:$,onClick:()=>t("/")}):e(ce,{className:"w-16 h-8 md:w-20 md:h-10"})})},$t=Math.floor(Math.random()*100+1),ee=()=>(He.init(document.querySelector(".avatar"),{max:20,speed:3e3}),e("div",{className:"avatar","data-tilt":!0,"data-tilt-scale":1.1,children:$t%2?e(Pt,{}):e(Wt,{})})),Zt=({to:t,children:n,target:s="_self"})=>e(Fe,{to:t,target:s,className:"px-3 hover:opacity-80 ease-in-out cursor-pointer transition flex justify-center items-center",rel:"noreferrer",children:n}),qt=""+new URL("fire-f1f6c407.gif",import.meta.url).href,te=()=>{const{pathname:t}=Oe();return e(h,{children:[{link:"/",title:"首页",icon:"icon-shouye"},{link:"/remove-watermark",title:"消除水印",icon:"icon-quchushuiyin",isFire:!0},{link:"/hot",title:"热搜",icon:"icon-resou"},{link:"/random",title:"随机",icon:"icon-a-love"},{link:"/image",title:"美图",icon:"icon-tupian"},{link:"https://blog.csdn.net/qq_37034928",target:"_blank",title:"CSDN",icon:"icon-csdn"}].map(s=>e(Zt,{to:s.link,target:s.target||"_self",children:i("div",{className:`bg-[#fff] text-[#333] lg:text-current lg:bg-transparent hover:bg-[#e4e9ed] hover:text-[#333] w-full relative text-center overflow-hidden my-[5px] lg:my-0 lg:w-auto py-5 px-4 lg:py-2 font-normal rounded-md transform -skew-x-6  ${s.link===t&&"menu-active"}`,children:[i("div",{className:"lg:skew-x-6 transform text-base lg:text-base text-left lg:text-center relative -top-2 lg:top-0",children:[s.title,s.isFire&&s.link!==t&&e("img",{className:"hidden lg:block absolute -right-3 -top-1 h-[12px]",src:qt,alt:""})]}),e("div",{className:`lg:hidden text-5xl text-[#d4d4d8] absolute -right-2 -bottom-2 opacity-40 iconfont ${s.icon}`})]})},s.title))})};function Vt(){const[t,n]=c.useState(!1);return{loading:t,requestLoading:async o=>{n(!0),await o(),n(!1)}}}const Z=(t="smooth")=>{window.scrollTo({top:0,behavior:t})};function ke(){const[t,n]=c.useState(!1);return[t,o=>{var a;(a=navigator==null?void 0:navigator.clipboard)==null||a.writeText(o).then(()=>n(!0)).catch(r=>console.error("Failed to copy: ",r))}]}const _=(t,n={})=>{const s=Object.assign({color:"#1abf6a"},n);let o="";for(const a in s)o+=`${a}:${s[a]};`;return t=String(t).replace(/</g,"&lt;").replace(/>/g,"&gt;"),`<span style="${o}">${t}</span>`},Jt=t=>{if(!t)return t;const n=/(https?:\/\/[^\s]+)/g,s=t.match(n);return((s==null?void 0:s[0])||"").split("，")[0]||""},Se=async(t="",n=t)=>{try{const o=await(await fetch(t)).blob(),a=document.createElement("a");document.body.appendChild(a),a.style.display="none";const r=window.URL.createObjectURL(o);a.href=r,a.download=n,a.click(),document.body.removeChild(a),window.URL.revokeObjectURL(r)}catch(s){console.error("下载失败：",s)}},Y=t=>{const{hideLink:n=!1}=t,{isOpen:s,onOpen:o,onClose:a}=ie();return e(G,{className:`sticky top-0 z-50 ${t.className}`,children:i("nav",{className:"flex justify-between items-center  py-3 md:py-5 font-bold",onDoubleClick:()=>Z(),children:[i("div",{className:"items-center hidden lg:flex",children:[e(ee,{}),!n&&e("div",{className:"flex items-center ml-8",children:e(te,{})})]}),i("div",{className:"lg:hidden",children:[e(Qe,{onClick:o}),e(_e,{size:"full",placement:"left",onClose:a,isOpen:s,children:e(Ke,{className:"bg-transparent",onClick:a,children:e("div",{className:"w-full h-full tao-filter",children:i("div",{className:"px-2 py-3",children:[e(I,{className:"scale-[.6]",colorScheme:"red","aria-label":"Search database",icon:e(We,{})}),e("div",{className:"w-[150px]",children:e(te,{})})]})})})})]}),e("div",{className:"items-center flex lg:hidden",children:e(ee,{})}),i("div",{className:"flex items-center text-base text-gray-500 leading-5  py-1",children:[t.children,e(jt,{})]})]})})},ne={display:"-webkit-box",overflow:"hidden",textOverflow:"ellipsis",WebkitBoxOrient:"vertical"},q=t=>{const n=L(),s=c.useCallback(()=>{t.url?window.open(t.url):n(`/${t.id}`)},[]),o=c.useMemo(()=>({1:"text-[#a82e2e] pr-2",2:"text-[#f04142] pr-2",3:"text-[#ff9a03] pr-2"}),[]),a=c.useCallback(r=>({WebkitLineClamp:String(r)}),[]);return i(le,{direction:{base:"column",md:"row"},overflow:"hidden",variant:"outline",children:[t.img&&e(re,{objectFit:"cover",className:"w-full object-cover md:w-[240px] xl:w-[300px] h-[150px] md:h-auto md:max-h-[300px]",src:t.img,fallbackSrc:$,alt:""}),i(de,{className:"flex-1",children:[i(Pe,{children:[i("div",{style:{...ne,...a(2)},className:"text-lg font-bold md:text-2xl cursor-pointer",onClick:()=>{var r;return(r=t==null?void 0:t.handlerClick)==null?void 0:r.call(t,t.title,t.url)},children:[t.rank&&i("span",{className:t.rank<=3?o[t.rank]:"text-[#999] pr-2",children:[t.rank,"."]}),t.title]}),e($e,{my:"2",className:"text-[15px] leading-[26px]",style:{...ne,...a(3)},children:t.description}),i("div",{className:"text-xs opacity-80 flex items-center",children:[t.viewCount!==void 0&&i("span",{className:"pr-4 flex items-center",children:[t.type=="hot"?e("div",{className:"iconfont icon-hot-for-ux-fill text-[#f00] text-[12px] pr-[2px]"}):"阅读",t.viewCount||"....."]}),e("span",{children:t.formatTime})]})]}),e(Ze,{children:e(k,{variant:"outline",colorScheme:"blue",onClick:s,children:t.btnText||"更多"})})]})]})},U=({loading:t})=>e("div",{className:"flex justify-center items-center py-4",children:t?i(h,{children:[e(R,{size:"sm"}),e("div",{className:"pl-2",children:"加载中"})]}):e("div",{children:"没有了"})}),V=qe.create({baseURL:"",timeout:1e4});V.interceptors.request.use(t=>t,t=>(console.error("request=>",t),Promise.reject(t)));V.interceptors.response.use(t=>t.data,t=>(console.log("response=>",t),Promise.reject(t)));const v=({url:t,data:n={},method:s="post"})=>{const o={url:t,method:s};return s=="get"?Object.assign(o,{params:n}):Object.assign(o,{data:n}),V({...o})},Xt="https://blog.csdn.net/community/home-api/v1",y="https://tenapi.cn/v2",en="https://api.uomg.com/api",tn="https://unsplash.com/napi",nn=(t={})=>v({url:"/getList",data:t}),sn=()=>v({url:"/getUserInfo",method:"get"}),an=(t={})=>v({url:`${Xt}/get-business-list`,data:t,method:"get"}),on=(t={})=>v({url:`${y}/baiduhot`,data:t,method:"get"}),cn=(t={})=>v({url:`${y}/weibohot`,data:t,method:"get"}),rn=(t={})=>v({url:`${y}/douyinhot`,data:t,method:"get"}),ln=(t={})=>v({url:`${y}/zhihuhot`,data:t,method:"get"}),dn=(t={})=>v({url:`${y}/toutiaohot`,data:t,method:"get"}),mn=(t={})=>v({url:`${y}/bilihot`,data:t,method:"get"}),un=(t={})=>v({url:`${y}/yiyan?format=json`,data:t,method:"get"}),gn=(t={})=>v({url:`${y}/Dog?format=json`,data:t,method:"get"}),hn=(t={})=>v({url:`${y}/WaSentence?format=json`,data:t,method:"get"}),An=(t={})=>v({url:`${y}/LoveSentence?format=json`,data:t,method:"get"}),fn=(t={})=>v({url:`${y}/Xiaohua?format=json`,data:t,method:"get"}),pn=(t={})=>v({url:`${y}/video`,data:t,method:"get"}),wn=(t={})=>v({url:`${y}/images`,data:t,method:"get"}),vn=(t={})=>v({url:`${y}/acg?format=json`,data:t,method:"get"}),xn=(t="",n={})=>v({url:`${tn}${t}`,data:n,method:"get"}),bn=(t={})=>v({url:`${en}/rand.img3?format=json`,data:t,method:"get"}),yn=()=>{const[t,n]=c.useState([]),{loading:s,requestLoading:o}=Vt(),[a,r]=c.useState(1),l=()=>{s||o(async()=>{const{data:d}=await nn({page:a,pageSize:10});n([...t,...d])})};c.useEffect(()=>{l()},[a]);const m=()=>{const{scrollTop:d,scrollHeight:g}=document.documentElement;window.innerHeight+d>=g&&!s&&r(B=>B+1)};return c.useEffect(()=>(window.addEventListener("scroll",m),()=>{window.removeEventListener("scroll",()=>{})}),[t]),i("div",{children:[e(Y,{}),i(G,{children:[t.map((d,g)=>e("div",{className:"py-4",children:e(q,{...d})},d.id+g)),e(U,{loading:s})]})]})},Bn="https://cdn.jsdelivr.net/gh/sun0225SUN/sun0225SUN/assets/images/man.png",Ee=({className:t="fixed  right-8 bottom-60 mb-1.5"})=>{const n=L(),s=()=>{n("/me")};return e("img",{src:Bn,className:`w-10 h-10 z-50 cursor-pointer ${t}`,alt:"",onClick:s})},D=t=>{const{isOpen:n,onOpen:s,onClose:o}=ie(),[a,r]=ke(),l=window.location.href,m=()=>{r(l),o()};return i("div",{className:t.className,children:[!t.hideIcon&&e(Ee,{}),e(k,{className:"fixed w-10 z-50 bottom-52 right-8",onClick:s,children:e("div",{className:"iconfont icon-erweima"})}),i(me,{size:"xs",onClose:o,isOpen:n,isCentered:!0,children:[e(ue,{}),i(ge,{maxW:"15rem",children:[e(he,{children:"分享"}),e(Ae,{}),i(fe,{className:"text-center pb-5",children:[e("div",{className:"p-2 w-48 h-48 m-auto bg-slate-100 rounded-lg overflow-hidden",children:e("img",{className:"w-full rounded-lg overflow-hidden",src:`${y}/qrcode?text=${l}`,alt:""})}),e("div",{className:"my-4 w-9/10 m-auto overflow-hidden whitespace-nowrap overflow-ellipsis text-xs",children:l}),i(k,{size:"sm",className:"font-normal",variant:"outline",onClick:m,children:[e(Ve,{className:"mr-1"})," 复制链接"]})]})]})]})]})},z=t=>{const{className:n="",title:s="",close:o,cancel:a,confirm:r,children:l,hideClose:m=!1,hideCancel:d=!1,cancelText:g="取消",confirmText:w="确认",hideFooter:B=!1,size:u="md"}=t;return i(me,{isOpen:!0,size:u,onClose:()=>{!m&&o&&o()},isCentered:!0,children:[e(ue,{}),i(ge,{children:[s&&e(he,{children:s}),!m&&e(Ae,{}),e(fe,{className:n,children:l}),!B&&i(Je,{children:[!d&&e(k,{variant:"ghost",mr:3,onClick:a||o,children:g}),e(k,{colorScheme:"blue",onClick:r,children:w})]})]})]})},Nn=({title:t,url:n,close:s})=>e(z,{size:"full",title:t,hideFooter:!0,close:s,children:e("iframe",{src:n,style:{width:"100%",height:"calc(100vh - 80px)"}})}),Ye=({length:t=4})=>{const n=Array.from({length:t},(s,o)=>o);return e(h,{children:n.map(s=>e("div",{className:"py-4",children:e(le,{direction:{base:"column",md:"row"},overflow:"hidden",variant:"outline",className:"p-4",children:e(de,{className:"w-full flex md:items-start md:flex-row",children:i("div",{className:"md:w-full",children:[i("div",{className:"flex mb-3",children:[e(j,{className:"h-[28px] w-[28px] mr-2"}),e(j,{className:"h-[28px] w-full"})]}),e(j,{className:"h-[28px] w-4/5 mb-5"}),e(j,{className:"h-[16px] w-[150px] mb-8"}),e(j,{className:"h-[40px] w-[97px]"})]})})})},s))})},Cn=""+new URL("not-8a71ec34.png",import.meta.url).href,Ge=t=>{const n=()=>{t.refresh()};return e("div",{className:"flex justify-center items-center h-screen absolute top-0 left-0 right-0 bottom-0",children:i("div",{className:"text-center",children:[e("img",{className:"w-[200px] mx-auto",src:Cn}),e("div",{className:"text-sm mt-4 flex",children:(o=>{if(o===1)return i(h,{children:["刚刚出了点小问题，点击",e("p",{className:"cursor-pointer pl-1 text-green-400",onClick:n,children:"刷新"})]});if(o===2)return i(h,{children:["咦，关键时刻掉链子？ 不行！我要",e("p",{className:"cursor-pointer pl-1 text-teal-300",onClick:n,children:"再试试"})]});if(o===3)return e(h,{children:"今日不凑巧，服务器离家出走了，改天再来吧~"})})(t.step)})]})})},Mn=()=>{const[t,n]=c.useState([]),[s,o]=c.useState(!1),a=c.useRef(!1),r=c.useRef(!1),l=c.useRef(1),[m,d]=c.useState(1),[g,w]=c.useState(!1),[B,u]=c.useState({title:"",url:""});c.useEffect(()=>{A()},[]),c.useEffect(()=>{const b=()=>{const p=document.documentElement.scrollTop||document.body.scrollTop,M=document.documentElement.scrollHeight||document.body.scrollHeight,H=document.documentElement.clientHeight||window.innerHeight;p+H>=M-20&&A()};return window.addEventListener("scroll",b),()=>{window.removeEventListener("scroll",b)}},[t]);const A=async()=>{var p;if(r.current||a.current)return;const b={businessType:"lately",noMore:!1,username:"qq_37034928"};try{r.current=!0;const{data:M}=await an({page:l.current,size:10,...b});if(!((p=M==null?void 0:M.list)!=null&&p.length)){a.current=!0;return}l.current+=1,n([...t,...M.list])}catch{o(!0)}finally{r.current=!1}},N=c.useCallback((b,p)=>{w(!0),u({title:b,url:p})},[]),x=()=>{o(!1),d(b=>b+1),l.current=1,A()};return i("div",{children:[e(Y,{}),g?e(Nn,{...B,close:()=>w(!1)}):null,s?e(Ge,{refresh:x,step:m}):i(G,{children:[t.map((b,p)=>e("div",{className:"py-4",children:e(q,{...b,handlerClick:N})},p)),l.current==1?e(Ye,{}):e(U,{loading:!a.current})]}),e(D,{})]})},In=()=>{const t=L(),n=[{id:1,name:"一"},{id:2,name:"二"},{id:3,name:"三"},{id:4,name:"四"},{id:5,name:"五"},{id:6,name:"六"},{id:0,name:"日"}],s=c.useMemo(()=>{var m;return(m=n.find(({id:d})=>d===X().day()))==null?void 0:m.name},[]),[o,a]=c.useState(""),r=c.useRef(null),l=()=>{a(X().format("YYYY-MM-DD HH:mm:ss"))};return c.useEffect(()=>(r.current=setInterval(()=>{l()},1e3),()=>{r.current&&clearInterval(r.current)}),[]),i(h,{children:[e(Y,{hideAvatar:!0,hideLink:!0}),e("div",{className:"flex justify-center items-center",style:{height:"calc(100vh - 200px)"},children:i("div",{className:"text-center",children:[i(O,{colorScheme:"yellow",children:["周",s," ",o||e(R,{size:"xs",className:"relative top-[2px]"})]}),e("div",{className:"pb-6 pt-4",children:e(O,{colorScheme:"red",children:"伙计，你迷路了"})}),e(I,{"aria-label":"go home",icon:e(Xe,{}),onClick:()=>t(-1)})]})})]})},kn=({data:t,actionIndex:n=0,change:s})=>{const o=l=>l===n,a=E("bg-[#fff]","bg-[#edf2f7]"),r=E("text-[#4a5568]","text-[#eee]");return e(et,{variant:"soft-rounded",defaultIndex:n,colorScheme:"gray",onChange:l=>s(l),children:e(tt,{children:t.map((l,m)=>e(nt,{className:o(m)?a:"",children:e("div",{className:`iconfont text-2xl ${l.icon} ${o(m)?l.active:r}`})},l.id))})})},Sn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAAEEBAMAAADZuJJVAAAAIVBMVEX////m5ubr6+v5+fn7+/vz8/P19fXv7+/t7e39/f3o6Oi7Ol+uAAAES0lEQVR42u3bu2/TUBgF8I8kBNyJE2hSOmGEeE2EAgImIx4CpmaAwpaAgLVBqspIEM+NQBc2AhIS/JXUieNb27GdMKBT6fwm6EM6uv58few6JiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiTLyHge1jF4EfW08/G7VvO7fW1q48f/7gwcb29sePFqtj4szDa0aq+hJJnyzWR6zx7injHN32kbTiRuUuks5usR2Eg0g750ZnhIz3RqWDlEZgzs0NHymnjUgdaacsqXY5dW68NR7XMbX65+TJj9vbW4Fl3dk4j1iDaBsdAPjw9NKtb2WZdp69HGHitbEIZ6dpc/KuTA5C01gcAhAsus2u0kxPBWjZnNyloGskhsAxW4wPbBqJG8B3W0wn/BUSbeCELeZAeMBI/Fv8o0Zin8e/MU/8jfM/tgL3K/ss/rg1/3IHjGj23c5T1qjXLdIDjhiJYXn8NkJuxTvhASMxR3wfYysWGRB1tqGbhOLZcdPjh/8kcaA0/mGkajJT59mNf9wKLSESDZkH4IKRWHLxvdy9KXHuVgHQPDDZE/9qtyS+u8ExFktxrINozjU8B4GGsajE8TvA+jyn7qFwD2URxo9nYrlk43T3Zywq0/7Vw67NOS5bS0y36tP4dYRac5SGIVHhtMNRmB7GNgsqG2HhnMavYmIlvzAzFs5p/Ha6GSQ8Gq1+CBgLpx0an4jVUfHzy1pgsT5R4Yzi30fs3H56zDOJX/MzT/fzjYgK5yT+F+zx04oxFc5wV1z2fDhl4WpMhXMcv4KEphWpMhXOcfwBEvJGm7BwhmlWgOLlr64FtouwcFodM6wn0w/QeGxmhIVzRvxMce5PtlPGwpmJn21uFxE6yviANi9+K3u3YpEhU+G0KhKyzW2AkKtpbabCmRd/xS1+6nzoMRXOnPguojdAJCAsnLnxG8kzF/HIDJgKp9VQsvz1eJ4IC2d+/NXMCzNdvsKZHx/fXUuA2/o9qsLp4md9jn7Cj79AVzjNQ65jbqd31+I6VeEsio8gtfU3w/9QFc6C+K7b9Pfchx2mKpxmyOO2mC+I/DarUBXO4vjd1PC32ApnYfxm5kXPdarXSUKli+8N9p4NN6gKp9mobPGvw2kEXIWzKP56PDrOZoeqcBbEX3aj4yz3qQqnmV+8+NeRxPRGQFH85ezohLgKZ178aERqfaRwFc7c+C03OglchTM3/uuc0eEqnGEfy81YGyCDq3CadfLvdJ8gi6xwWhszrOaMDtfb76EKMia1xutjpuPGZOYaxw94Msguuub5sxe4jhD7Vcush4wg2pH4981oerL3uDuXX/mY4aeRaSPvT3M3X7xhn51ssWkmvnnllc+7baY+Mfpn95NnZ7qWcvNZfBBadIsf2llbu3Xv2+fST2y1qNrmYr5eumciIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIvK//QX3ofxfIUPIQgAAAABJRU5ErkJggg==",En=()=>{const[t,n]=c.useState(3),[s,o]=c.useState([]),[a,r]=c.useState(!1),l=[{id:1,name:"百度",icon:"icon-icon_baidulogo",active:"text-[#2932e1]",api:on},{id:2,name:"抖音",icon:"icon-douyin1",active:"text-[#111111]",api:rn},{id:3,name:"微博",icon:"icon-weibo",active:"text-[#e71f19]",api:cn},{id:4,name:"知乎",icon:"icon-zhihu",active:"text-[#0461cf]",api:ln},{id:5,name:"今日头条",icon:"icon-hotfill",active:"text-[#f04142]",api:dn},{id:6,name:"哔哩哔哩",icon:"icon-icon_bilibili",active:"text-[#00aeec]",api:mn}],m=E("bg-slate-200/[.5] hover:bg-slate-200","bg-gray-700/[.5] hover:bg-gray-700");c.useEffect(()=>{Z("instant"),d()},[t]);const d=async()=>{try{r(!0),o([]);const{data:g}=await l[t].api(),w=g.some(({image:u})=>u),B=g.map((u,A)=>({id:u.id,title:u.name,description:u.description,url:u.url,img:w?u.image||Sn:"",formatTime:u.updatetime,viewCount:u.hot,type:"hot",rank:A+1}));o(B)}finally{r(!1)}};return i(h,{children:[e(Y,{}),e(G,{children:e("div",{className:"pb-36",children:a&&!s.length?e(Ye,{}):i(h,{children:[s.map(g=>e("div",{className:"py-4",children:e(q,{...g,btnText:"查看详情"})},g.rank)),e(U,{loading:!1})]})})}),e("div",{className:"fixed w-full bottom-16 z-50 flex items-center justify-center",children:e("div",{className:`${m} p-1 rounded-full transition duration-700 ease-in-out`,children:e(kn,{data:l,actionIndex:t,change:g=>n(g)})})}),e(D,{})]})},De=({data:t,changeCheckId:n})=>{const s=K();return e("div",{className:"mr-4 max-sm:mr-2",children:e(pe,{placement:"bottom-end",children:({isOpen:o})=>i(h,{children:[e(we,{className:"mr-1",children:o?e(st,{}):e(at,{})}),e(ve,{className:"min-w-[120px]",children:t.map(a=>e(xe,{onClick:()=>{if(a.disabled)return s({duration:3e3,render:()=>i(ot,{bg:"#d5dadf",w:"100%",p:4,color:"#000",className:"rounded-md py-3",children:["当前",e(O,{className:"mx-1 rounded-xl py-1 px-2",colorScheme:a.color,children:a.icon+a.name}),"已禁用"]})});n(a.id)},command:a.disabled?"🚫":"",children:i(ct,{size:"md",colorScheme:a.color,borderRadius:"full",children:[a.icon,a.name]})},a.name))})]})})})},Yn=()=>{const[t,n]=c.useState(!1),[s,o]=c.useState(""),[a,r]=c.useState(2),l=[{id:1,icon:"😂",color:"red",name:"笑话",disabled:!0,api:fn},{id:2,icon:"🍕",color:"teal",name:"一言",api:un},{id:3,icon:"👄",color:"cyan",name:"舔狗日记",disabled:!0,api:gn},{id:4,icon:"🌴",color:"blue",name:"文案",disabled:!0,api:hn},{id:5,icon:"🤞",color:"green",name:"土味情话",disabled:!0,api:An}],m=async()=>{try{n(!0);const{data:g}=await l.find(({id:w})=>w===a).api();o(g.hitokoto)}finally{n(!1)}},d=g=>{r(g)};return c.useEffect(()=>{m()},[a]),i(h,{children:[e(Y,{children:e(De,{data:l,changeCheckId:d})}),e(G,{children:e("div",{className:"flex justify-center items-center",style:{height:"calc(100vh - 300px)"},children:i("div",{className:"text-center  w-full",children:[e("div",{className:"md:w-4/5 m-auto mb-8 text-md tracking-wider min-h-[40px] opacity-80",children:t?e(rt,{noOfLines:2,spacing:"3",skeletonHeight:"6",className:"skeleton-center"}):e(it,{type:"left",mode:"smooth",interval:30,className:"leading-6 md:leading-10 text-md md:text-xl",children:s})}),e(I,{isLoading:t,"aria-label":"换一个",icon:e(be,{}),onClick:()=>m()})]})})}),e(D,{})]})},T=["📺视频","🎴图片"],Gn=[{type:1,text:`支持列表: 皮皮虾, 抖音, 微视, 快手, 6间房, 哔哩哔哩, 微博, 绿洲, 度小视, 开眼, 陌陌, 皮皮搞笑, 全民k歌, 逗拍, 虎牙, 新片场, 哔哩哔哩, Acfun, 美拍, 西瓜视频, 火山小视频, 网易云Mlog, 好看视频
      <br />温馨提示: 哔哩哔哩/6间房/微博仅支持下载无法去除水印`},{type:1,text:"作者：讨口子"},{type:1,text:"版本：v2.0.3"},{type:1,text:`请先确认${_("文件类型")}【${T}】`}],Dn=({send:t})=>{const[n,s]=c.useState(""),[o,a]=c.useState(!0),[r,l]=c.useState(0),[m,d]=c.useState(!1),g=c.useMemo(()=>({0:pn,1:wn}),[]);c.useEffect(()=>{a(n.trim()==="")},[n]);const w=()=>{navigator.clipboard.readText().then(x=>{s(x)})},B=async()=>{t({type:2,text:String(n)}),d(!0);try{const x=Jt(n);if(!x){t({type:1,text:`❌没有找到 ${_(n)} 中有效的链接`});return}t({type:1,text:'<div class="_loading">🕑解析中</div>'});const{code:b,data:p,msg:M}=await g[r]({url:x});b===200?(r==0&&t({type:1,state:"video",text:p||{}},!0),r==1&&t({type:1,state:"img",text:{images:(p==null?void 0:p.images)||[],video:(p==null?void 0:p.video)||[]}},!0)):t({type:1,text:`😭${M||"解析失败"}`},!0)}catch{t({type:1,text:"🔴服务器链接失败"},!0)}finally{d(!1),s("")}},u=x=>x.slice(0,2),A=x=>{s(x.target.value)},N=x=>{x!==r&&(l(x),t({type:1,text:`选择 ${_(T[x])}`}))};return e("div",{className:"absolute bottom-2 left-2 right-2 p-2 bg rounded-xl",children:i("div",{className:"flex",children:[i(lt,{children:[i(pe,{placement:"top-start",children:[e(we,{as:k,rightIcon:e(ye,{}),className:"px-2",width:70,children:u(T[r])}),e(dt,{children:e(ve,{className:"min-w-[90px]",children:T.map((x,b)=>e(xe,{value:b,onClick:()=>N(b),children:x},b))})})]}),e(mt,{isDisabled:m,placeholder:"此处粘贴链接",color:"teal",focusBorderColor:"#319795",errorBorderColor:"#319795",isInvalid:!!n,value:n,onChange:A,className:"mx-1",_placeholder:{color:"teal"}}),n!==""&&e(ut,{className:"w-12",children:e(gt,{isDisabled:m,size:"sm",onClick:()=>s("")})})]}),o?e(k,{isLoading:m,colorScheme:"teal",onClick:w,children:"粘贴"}):e(k,{isLoading:m,colorScheme:"teal",variant:"outline",border:"2px",onClick:()=>B(),children:"解析"})]})})},se=t=>{const{isTrends:n=!1}=t,s=document,o=()=>{const a=s.webkitIsFullScreen||s.mozFullScreen||!1,r=document.getElementsByClassName("_video")[0];a?document.exitFullscreen():r.requestFullscreen()};return i("div",{className:"_video relative",children:[e(ht.Player,{width:112,height:112,poster:t.cover,fluid:!n,autoPlay:n,loop:n,muted:n,controls:!n,children:e("source",{src:t.src})}),i("div",{className:"absolute top-1 right-1",children:[e(I,{size:"xs","aria-label":"下载",className:"mr-1.5",icon:e(Be,{}),onClick:()=>Se(t.src)}),e(I,{size:"xs","aria-label":"全屏",icon:e(Ne,{}),onClick:o})]})]})},jn=t=>e(At,{children:e(ft,{src:t.src,children:e("img",{className:t.className,src:t.src,alt:""})})}),Ln=t=>{const n=t.data.text,s=t.data.state,o=()=>({__html:n}),r=e("div",{className:"block pr-[10%] pl-3 text-left",children:e("div",{className:`relative break-all inline-block px-3 py-2 mt-3 text-justify bg message-left rounded ${(()=>s==="img"?"w-[24rem]":s==="video"&&n.url?"w-full":"")()}`,children:s==="video"?i(h,{children:[e(se,{src:n.url,cover:n.cover}),n.title&&e("div",{children:n.title})]}):s==="img"?i(h,{children:[((n==null?void 0:n.images)||[]).map(m=>e(jn,{src:m,className:"w-28 h-28 object-cover inline-block m-1 bg-gray-100"},m)),((n==null?void 0:n.video)||[]).map(m=>e("div",{className:"w-28 h-28 object-cover inline-block m-1 bg-gray-100 align-middle",children:e(se,{src:m,isTrends:!0})},m))]}):e("div",{dangerouslySetInnerHTML:o()})})}),l=e("div",{className:"block pl-[10%] pr-3 text-right",children:e("div",{className:`relative break-all inline-block px-3 py-2 mt-3 text-justify message-right rounded ${E("msg-bg-light","msg-bg-dark")}`,children:n})});return t.type==="left"?r:l},Tn=()=>{const[t,n]=c.useState(Gn),[s,o]=c.useState(window.localStorage.getItem(Q)!=="1"),[a,r]=c.useState(!1),[l,m]=c.useState({}),d=(u="container")=>{const A=document.getElementById(u),N=A==null?void 0:A.scrollHeight;A==null||A.scrollTo({top:N,behavior:"smooth"})},g=(u,A=!1)=>{n(A?N=>[...N.slice(0,N.length-1),u]:N=>[...N,u])};c.useEffect(()=>{d()},[t]);const w=async()=>{if(!a)try{r(!0);const{data:u}=await vn();u!=null&&u.url&&m({backgroundImage:`url(${u.url})`})}finally{r(!1)}};c.useEffect(()=>{w()},[]);const B=()=>{o(u=>u=!u),window.localStorage.setItem(Q,s===!0?"1":"2")};return i("div",{className:"bg-filter overflow-hidden",style:s?l:{},children:[e(Y,{className:s?"mh":""}),i("div",{className:`m-auto rw w-full sm:w-[500px] relative z-10 bg-cover rounded-0 sm:rounded-lg ${E("bg-[#f0edf1]","bg-[#000]/[.7]")}`,style:s?l:{},children:[e("div",{className:"rw-c overflow-auto pb-24",id:"container",children:t.map((u,A)=>e(Ln,{type:u.type===1?"left":"right",data:u},A))}),e(Dn,{send:g}),i("div",{className:"hidden sm:block fixed w-10 z-50 bottom-64 right-8",children:[e(Ee,{className:"relative top-1"}),e(I,{"aria-label":"",onClick:B,icon:s?e(pt,{}):e(wt,{})}),s&&e(I,{"aria-label":"",className:"mt-2",isLoading:a,onClick:w,icon:e(be,{})})]})]}),e(D,{hideIcon:!0,className:"hidden sm:block"})]})},Rn=()=>{F.registerPlugin(vt);const t=c.useRef(null),n=o=>{const a=t.current;return a?a.querySelector(o):null},s=()=>{F.fromTo(n(".first-paragraph"),{opacity:1,scale:3,duration:1},{opacity:0,scale:2,ease:"none",scrollTrigger:{trigger:n(".first"),start:"top top",end:"bottom center",scrub:!0}}),F.fromTo(n(".first2-paragraph"),{opacity:1,scale:3,duration:1},{opacity:0,scale:2,ease:"none",scrollTrigger:{trigger:n(".first2"),start:"top top",end:"bottom center",scrub:!0}})};return c.useEffect(()=>{s()},[]),i("div",{className:"h-[400vh] overflow-x-hidden",ref:t,children:[e("div",{className:"first h-[100vh]",children:e("p",{className:"first-paragraph h-full text-[#023047] text-center font-bold text-4xl flex justify-center items-center",children:"1"})}),e("div",{className:"first2 h-[100vh]",children:e("p",{className:"first2-paragraph h-full text-[#023047] text-center font-bold text-4xl flex justify-center items-center",children:"2"})})]})},J=({src:t,smallSrc:n=$,className:s,click:o})=>{const[a,r]=c.useState(!1);return c.useEffect(()=>{const l=new Image;l.src=t,l.onload=()=>{r(!0)}},[t]),e(h,{children:n?e("img",{src:a?t:n,className:`${s} ${!a&&"blur-[2px]"}`,alt:""}):e(h,{children:a?e("img",{onClick:o,src:t,className:s,alt:""}):e(R,{})})})},Un="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAADvAQMAAACT9jngAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAB1JREFUWMPtwYEAAAAAw6D7U19gCNUAAAAAAADSARhGAAELLd84AAAAAElFTkSuQmCC",zn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADgAQMAAACaQHDCAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABxJREFUWMPtwTEBAAAAwiD7p7bFLmAAAAAAAEDuF6AAAcsFQgsAAAAASUVORK5CYII=",Hn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAAGZAQMAAACXK855AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACRJREFUaN7twTEBAAAAwiD7p7bETmAAAAAAAAAAAAAAAAAAtQM0uQABL/ou5wAAAABJRU5ErkJggg==",Fn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAACGCAYAAACMn1tjAAABHElEQVR42u3SMREAAAjEsFfDiAL860IFExlioNdUT+AjETA/mB/MD+YH84P5wfxgfjA/mB/MD+YH84P5wfxgfjA/mB/MD+YH84P5wfxgfjA/mB/MD+bH/CJgfjA/mB/MD+YH84P5wfxgfjA/mB/MD+YH84P5wfxgfjA/mB/MD+YH84P5wfxgfjA/mB/Mj/nB/GB+MD+YH8wP5gfzg/nB/GB+MD+YH8wP5gfzg/nB/GB+MD+YH8wP5gfzg/nB/GB+MD+IgPnB/GB+MD+YH8wP5gfzg/nB/GB+MD+YH8wP5gfzg/nB/GB+MD+YH8wP5gfzg/nB/GB+MD/mFwHzg/nB/GB+MD+YH8wP5gfzg/nB/GB+MD+YH8wP5gfzw6kFATc/6YWI6TcAAAAASUVORK5CYII=",On="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAAEiCAYAAACBYvyoAAACV0lEQVR42u3TMQ0AAAgEsVfDiAL86wIRjB1q4JJL9QT4IQIYCgwFhgIMBYYCQwGGAkOBocBQgKHAUGAowFBgKDAUGAowFBgKDAUYCgwFhgJDAYYCQ4GhAEOBocBQgKHAUGAoMBRgKDAUGAowFBgKDAWGAgwFhgJDAYYCQ4GhwFCAocBQYCjAUGAoMBQYSgQwFBgKDAUYCgwFhgIMBYYCQ4GhAEOBocBQgKHAUGAoMBRgKDAUGAowFBgKDAWGAgwFhgJDAYYCQ4GhABHAUGAoMBRgKDAUGAowFBgKDAWGAgwFhgJDAYYCQ4GhwFCAocBQYCjAUGAoMBQYCjAUGAoMBRgKDAWGAgwFhgJDgaEAQ4GhwFCAocBQYCgwFGAoMBQYCjAUGAoMBYYCDAWGAkMBhgJDgaHAUCKAocBQYCjAUGAoMBRgKDAUGAoMBRgKDAWGAgwFhgJDgaEAQ4GhwFCAocBQYCgwFGAoMBQYCjAUGAoMBYgAhgJDgaEAQ4GhwFCAocBQYCgwFGAoMBQYCjAUGAoMBYYCDAWGAkMBhgJDgaHAUIChwFBgKMBQYCgwFGAoMBQYCgwFGAoMBYYCDAWGAkOBoQBDgaHAUIChwFBgKDAUYCgwFBgKMBQYCgwFhhIBDAWGAkMBhgJDgaEAQ4GhwFBgKMBQYCgwFGAoMBQYCgwFGAoMBYYCDAWGAkOBoQBDgaHAUIChwFBgKEAEMBQYCgwFGAoMBYYCDAWGAkOBoQBDgaHAUIChwFBgKDAUYCgwFBgKMBQYCgwFhgIMBYYCQwGGAkOBoYCzn9Yeah6pkm4AAAAASUVORK5CYII=",Qn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAC0CAYAAADfER1LAAABaklEQVR42u3SMQ0AAAgEsVfDiAL860IGCelQA5dL9QQ+EAEzg5nBzGBmzAxmBjODmcHMmBnMDGYGM2NmMDOYGcwMZsbMYGYwM5gZM4OZwcxgZjAzZgYzg5nBzJgZzAxmBjODmTEzmBnMDGbGzGBmMDOYGcyMmcHMYGYwM2YGM4OZwcxgZswMZgYzg5kxM5gZzAxmBjNjZjAzmBnMjJnBzGBmMDOYGTODmcHMYGbMLAJmBjODmcHMmBnMDGYGM4MImBnMDGYGM2NmMDOYGcwMZsbMYGYwM5gZM4OZwcxgZjAzZgYzg5nBzJgZzAxmBjODmTEzmBnMDGbGzGBmMDOYGcyMmcHMYGYwM2YGM4OZwcxgZswMZgYzg5kxM5gZzAxmBjNjZjAzmBnMjJnBzGBmMDOYGTODmcHMYGbMDGYGM4OZwcyYGcwMZgYzY2YRMDOYGcwMZsbMYGYwM5gZRMDMYGYwM5gZM4OZ4cQCwpHP2yvaOewAAAAASUVORK5CYII=",_n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAAGDAQMAAABgBwzaAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACFJREFUaN7twTEBAAAAwiD7pzbGHmAAAAAAAAAAAAAAtQMo0QABH+fQOQAAAABJRU5ErkJggg==",Kn=()=>{const[t,n]=c.useState([]),[s,o]=c.useState(17),[a,r]=c.useState(""),[l,m]=c.useState(!1),d=c.useRef(!1),g=c.useRef(!1),w=c.useRef(1),B=30,[u,A]=c.useState(1),N=[{id:1,name:"壁纸",api:"/topics/wallpapers/photos"},{id:2,name:"自然界",api:"/topics/nature/photos"},{id:3,name:"纹理和图案",api:"/topics/textures-patterns/photos"},{id:4,name:"建筑与室内设计",api:"/topics/architecture-interior/photos"},{id:5,name:"影片",api:"/topics/film/photos"},{id:6,name:"街头摄影",api:"/topics/street-photography/photos"},{id:7,name:"实验的",api:"/topics/experimental/photos"},{id:8,name:"动物",api:"/topics/animals/photos"},{id:9,name:"时尚与美容",api:"/topics/fashion-beauty/photos"},{id:10,name:"商业与工作",api:"/topics/business-work/photos"},{id:11,name:"食物与饮料",api:"/topics/food-drink/photos"},{id:12,name:"旅行",api:"/topics/travel/photos"},{id:13,name:"人",api:"/topics/people/photos"},{id:14,name:"灵性",api:"/topics/spirituality/photos"},{id:15,name:"运动",api:"/topics/athletics/photos"},{id:16,name:"健康",api:"/topics/health/photos"},{id:17,name:"时事",api:"/topics/current-events/photos"},{id:18,name:"艺术与文化",api:"/topics/arts-culture/photos"}],x={default:8,1400:7,1300:6,1200:5,1e3:4,800:3,600:2},b=async()=>{var f;if(!(g.current||d.current))try{g.current=!0;let C=await xn((f=N.find(({id:S})=>S==s))==null?void 0:f.api,{page:w.current,per_page:B});if(!(C!=null&&C.length)){d.current=!0;return}C=C.map(S=>({id:String(S.id).replace(/-/g,"blog"),cover:S.urls.raw,smallSrc:S.urls.thumb})),w.current++,n([...t,...C])}catch{m(!0)}finally{g.current=!1}},p=()=>{b()},M=f=>{w.current=1,m(!1),o(f),A(1),n([])};c.useEffect(()=>{p()},[s]),c.useEffect(()=>{const f=()=>{const C=document.documentElement.scrollTop||document.body.scrollTop,S=document.documentElement.scrollHeight||document.body.scrollHeight,Le=document.documentElement.clientHeight||window.innerHeight;C+Le>=S-20&&p()};return window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f)}},[t]);const H=()=>{m(!1),A(f=>f+1),p()},je={backgroundColor:E("#e9edf0","#323a4a")};return i(h,{children:[e(Y,{children:e(De,{data:N,changeCheckId:M})}),l?e(Ge,{refresh:H,step:u}):i(h,{children:[e(xt,{breakpointCols:x,className:"flex px-1.5 ",columnClassName:"px-1.5",children:w.current==1?Array.from({length:B},(f,C)=>C).map(f=>{const C=Math.floor(Math.random()*4)+1;return e("div",{className:"my-3",children:e("img",{src:{1:Un,2:zn,3:Hn,4:Fn,5:On,6:Qn,7:_n}[C],className:"w-screen rounded overflow-hidden",style:je})},f)}):t.map(f=>i("div",{className:"my-3 relative _flow",children:[i("div",{className:"p-2 absolute right-0 top-0",children:[e(I,{size:"xs","aria-label":"下载",className:"mr-1.5",icon:e(Be,{}),onClick:()=>Se(f.cover,f.id)}),e(I,{size:"xs","aria-label":"预览",icon:e(Ne,{}),onClick:()=>r(f.cover)})]}),e(J,{src:f.cover,smallSrc:f.smallSrc,className:"w-screen rounded overflow-hidden"}),f.title&&e("div",{className:"text-xs text-center py-1",children:f.title})]},f.cover))}),e(U,{loading:!d.current})]}),e(D,{}),a&&e(z,{title:"",size:window.innerWidth>375?"xl":"xs",className:"p-0 max-w-[90vw] max-h-[90vh] overflow-hidden",hideFooter:!0,close:()=>r(""),children:e("img",{src:a,className:"object-cover max-h-full max-w-full"})})]})},Wn=[{name:"书栈网",img:"https://static.sitestack.cn/static/images/logo.png",url:"https://www.bookstack.cn/"},{name:"Lodash-es",img:"https://lodash.com/assets/img/lodash.svg",url:"https://www.lodashjs.com/"},{name:"tailwindcss",img:"https://avatars.githubusercontent.com/u/67109815",url:"https://www.tailwindcss.cn/"},{name:"tinypng",img:"https://tinypng.com/images/panda-chewing.png",url:"https://tinypng.com/"},{name:"文心一言",img:"https://nlp-eb.cdn.bcebos.com/logo/favicon.ico",url:"https://yiyan.baidu.com/"},{name:"phind",img:"https://www.phind.com/favicon.ico",url:"https://www.phind.com/"},{name:"unDraw",img:"https://undraw.co/favicon.ico",url:"https://undraw.co/illustrations"}],ae=""+new URL("wx-9b7108ef.jpg",import.meta.url).href,Pn=()=>{const[t,n]=c.useState(""),s=K(),[o,a]=ke(),r=E("bg-slate-300","bg-white"),l=d=>{a(d),s({description:"已复制",status:"success"})},m=[{title:"初衷",context:"`好记性不如烂笔头` 我始终相信这一点，所以博客只为更好更方便的找到自己的笔记"},{title:"微信",context:e("img",{className:"bg-slate-100 rounded-lg w-32",src:ae,onClick:()=>n(ae)})},{title:"邮箱",context:e("div",{className:"cursor-pointer hover:opacity-80 transition duration-200 ease-in-out",onClick:()=>l("real_taokouzi@qq.com"),children:"real_taokouzi@qq.com"})},{title:"友情链接",context:e("div",{className:"",children:Wn.map(d=>i("a",{href:d.url,className:"mr-4 mb-4 sm:mr-10 sm:mb-8 text-center inline-block yq-href",target:"_blank",title:d.name,rel:"noreferrer",children:[e("img",{className:`w-12 h-12 sm:w-16 sm:h-16 ${r} rounded-lg m-auto overflow-hidden object-cover`,src:d.img,alt:""}),e("div",{className:"w-14 sm:w-18 num-height-1 pt-2 text-sm",children:d.name})]},d.name))})}];return i(h,{children:[e(Y,{}),e(G,{children:m.map((d,g)=>i("div",{className:"my-12 sm:my-20",children:[e("div",{className:"text-2xl pb-4",children:d.title}),e("div",{className:"text-sm",children:d.context})]},g))}),e(D,{hideIcon:!0}),t&&e(z,{title:"扫一扫，联系我",size:"xs",className:"p-0 max-w-[90vw] max-h-[90vh] overflow-hidden",hideFooter:!0,close:()=>n(""),children:e(J,{src:t,className:"object-cover max-h-full max-w-full"})})]})},$n=()=>{const[t,n]=c.useState(""),[s,o]=c.useState(""),a=["随机","胖次猫","七了个三"],r=K(),l=d=>{r({description:d,status:"error"})},m=async()=>{if(t)try{const{imgurl:d=""}=await bn({sort:t=="随机"?void 0:t});o(d),d||l("暂无数据")}catch{o(""),l("系统错误")}};return i(h,{children:[e("div",{className:"flex w-screen h-screen justify-center items-center",children:i("div",{className:"flex items-center",children:[e("div",{className:"w-36 mx-4",children:e(bt,{placeholder:"请选择",value:t,onChange:d=>n(d.target.value),children:a.map(d=>e("option",{value:d,children:d},d))})}),e(k,{colorScheme:"teal",onClick:m,children:"查看"})]})}),s&&e(z,{title:t,size:"xs",className:"p-0 max-w-[90vw] max-h-[90vh] overflow-hidden flex justify-center items-center min-h-[100px]",hideFooter:!0,close:()=>o(""),children:e(J,{src:s,smallSrc:"",click:m,className:"object-cover max-h-full max-w-full cursor-pointer"})})]})},Zn=[{path:"/",element:e(Mn,{})},{path:"/mock",element:e(yn,{})},{path:"/hot",element:e(En,{})},{path:"/random",element:e(Yn,{})},{path:"/remove-watermark",element:e(Tn,{})},{path:"/gsap",element:e(Rn,{})},{path:"/image",element:e(Kn,{})},{path:"/me",element:e(Pn,{})},{path:"/tb",element:e($n,{})},{path:"*",element:e(In,{})}],qn=()=>e("div",{className:"w-full h-screen flex justify-center items-center",children:e(R,{size:"sm",className:"text-[#f00]"})});function Vn(){return e(c.Suspense,{fallback:e(qn,{}),children:yt(Zn)})}const Jn=()=>{const[t,n]=c.useState(!1);return c.useEffect(()=>(document.addEventListener("scroll",()=>{const s=document.documentElement.scrollTop;n(!(s<120))}),()=>document.removeEventListener("scroll",()=>{})),[]),e(h,{children:t&&e("div",{className:"fixed z-50 bottom-40 right-8",children:e(I,{"aria-label":"To up",icon:e(ye,{}),onClick:()=>Z()})})})},Xn=""+new URL("tao-7c285a31.png",import.meta.url).href,es=""+new URL("tao1-120f8092.png",import.meta.url).href;W.setup({timeout:"500-2000"});W.mock("/getList",{code:0,message:"操作成功",success:!0,"data|5":[{"id|+1":1,formatTime:"@datetime",title:"@ctitle(4,15)",description:"@cparagraph",viewCount:0,url:"",img:"@image('200x100')"}]});W.mock("/getUserInfo",{code:0,message:"操作成功",success:!0,data:{username:"讨口子",email:"real_taokouzi@qq.com",avatar:Xn,avatarWithe:es}});const ts=t=>{P.dispatch({type:Me,value:t})};(async()=>{const t=await sn();ts(t.data)})();Ce.config.initialColorMode="dark";Bt.createRoot(document.getElementById("root")).render(e(Nt,{children:e(Ct,{theme:Ce,children:i(Mt,{store:P,children:[e(Vn,{}),e(Jn,{})]})})}));
