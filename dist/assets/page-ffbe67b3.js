import{c as d,g as F,m as G,t as p,C as E,i as m,o as N,u as I,a as R,j as V,F as M,b as n,P as k,T as z}from"./index-9730dd99.js";import{P as u}from"./ParagraphTitle-ab75bdea.js";import{T as A}from"./index-e92ec54c.js";const x=["wrap","nowrap","wrap-reverse"],y=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],h=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],J=(e,r)=>{const l={};return x.forEach(t=>{l[`${e}-wrap-${t}`]=r.wrap===t}),l},L=(e,r)=>{const l={};return h.forEach(t=>{l[`${e}-align-${t}`]=r.align===t}),l[`${e}-align-stretch`]=!r.align&&!!r.vertical,l},W=(e,r)=>{const l={};return y.forEach(t=>{l[`${e}-justify-${t}`]=r.justify===t}),l};function H(e,r){return d(Object.assign(Object.assign(Object.assign({},J(e,r)),L(e,r)),W(e,r)))}const D=e=>{const{componentCls:r}=e;return{[r]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},U=e=>{const{componentCls:r}=e;return{[r]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},X=e=>{const{componentCls:r}=e,l={};return x.forEach(t=>{l[`${r}-wrap-${t}`]={flexWrap:t}}),l},q=e=>{const{componentCls:r}=e,l={};return h.forEach(t=>{l[`${r}-align-${t}`]={alignItems:t}}),l},B=e=>{const{componentCls:r}=e,l={};return y.forEach(t=>{l[`${r}-justify-${t}`]={justifyContent:t}}),l},Q=()=>({}),Y=F("Flex",e=>{const{paddingXS:r,padding:l,paddingLG:t}=e,s=G(e,{flexGapSM:r,flexGap:l,flexGapLG:t});return[D(s),U(s),X(s),q(s),B(s)]},Q,{resetStyle:!1});var Z=globalThis&&globalThis.__rest||function(e,r){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)r.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(l[t[s]]=e[t[s]]);return l};const K=p.forwardRef((e,r)=>{const{prefixCls:l,rootClassName:t,className:s,style:C,flex:f,gap:c,children:S,vertical:i=!1,component:b="div"}=e,v=Z(e,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:a,direction:j,getPrefixCls:w}=p.useContext(E),o=w("flex",l),[$,P,O]=Y(o),_=i??(a==null?void 0:a.vertical),T=d(s,t,a==null?void 0:a.className,o,P,O,H(o,e),{[`${o}-rtl`]:j==="rtl",[`${o}-gap-${c}`]:m(c),[`${o}-vertical`]:_}),g=Object.assign(Object.assign({},a==null?void 0:a.style),C);return f&&(g.flex=f),c&&!m(c)&&(g.gap=c),$(p.createElement(b,Object.assign({ref:r,className:T,style:g},N(v,["justify","wrap","align"])),S))}),ee=K,te="_paragraph_7fv3v_1",re="_space_7fv3v_5",le="_title_7fv3v_9",se={paragraph:te,space:re,title:le},{Paragraph:ae}=z,oe=[{title:"HTML5",progress:80,color:"blue"},{title:"CSS3",progress:80,color:"blue"},{title:"SCSS",progress:50,color:"blue"},{title:"JavaScript",progress:70,color:"blue"},{title:"TypeScript",progress:50,color:"blue"}],ne=[{title:"React",progress:70,color:"magenta"},{title:"Redux-toolkit",progress:60,color:"magenta"},{title:"Effector",progress:60,color:"magenta"},{title:"React-router",progress:80,color:"magenta"},{title:"Atomic-router",progress:80,color:"magenta"}],ce=[{title:"Jira",color:"green"},{title:"Ant design",color:"green"},{title:"Material UI",color:"green"}],fe=()=>{const{t:e}=I(),{isScreenMd:r}=R(),l=[{title:"Code Review",color:"orange"},{title:e("homePage.skills.english"),color:"orange"}];return V(M,{children:[!r&&n(k,{isScreenMd:r}),n(u,{children:e("homePage.about.title")}),n(ae,{className:se.paragraph,children:e("homePage.about.text")}),n(u,{children:e("homePage.skills.title")}),n(ee,{gap:"8px 0",wrap:"wrap",children:[...oe,...ne,...ce,...l].map(t=>n(A,{color:t.color,style:{fontSize:14},children:t.title}))})]})};export{fe as HomePage};