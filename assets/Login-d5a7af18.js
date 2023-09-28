import{r as o,x as Xe,y as Ge,z as _e,h as G,U as Qe,d as Y,a5 as Ke,a6 as Ye,S as Ue,E as Ze,D as pe,a7 as Je,a8 as ke,a9 as et,w as we,aa as tt,C as ge,B as nt,e as Se,Z as rt,a as Te,ab as ot,O as lt,P as it,G as at,ac as st,ad as ct,ae as ut,af as mt,ag as dt,ah as ft,ai as pt,aj as gt,ak as ht,al as bt,R as yt,a3 as xt,j as X,Q as Ct}from"./index-00d8e74e.js";import{q as $t,z as Le,s as he,t as Ee,v as k,F as be,h as vt,w as wt,i as St,u as Et,N as We,L as It,x as Ot,I as Ie,B as Ft}from"./index-dfcea766.js";const Oe=e=>typeof e=="object"&&e!=null&&e.nodeType===1,Fe=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",de=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const r=getComputedStyle(e,null);return Fe(r.overflowY,t)||Fe(r.overflowX,t)||(n=>{const l=(i=>{if(!i.ownerDocument||!i.ownerDocument.defaultView)return null;try{return i.ownerDocument.defaultView.frameElement}catch{return null}})(n);return!!l&&(l.clientHeight<n.scrollHeight||l.clientWidth<n.scrollWidth)})(e)}return!1},ie=(e,t,r,n,l,i,a,c)=>i<e&&a>t||i>e&&a<t?0:i<=e&&c<=r||a>=t&&c>=r?i-e-n:a>t&&c<r||i<e&&c>r?a-t+l:0,jt=e=>{const t=e.parentElement;return t??(e.getRootNode().host||null)},je=(e,t)=>{var r,n,l,i;if(typeof document>"u")return[];const{scrollMode:a,block:c,inline:u,boundary:d,skipOverflowHiddenElements:f}=t,R=typeof d=="function"?d:V=>V!==d;if(!Oe(e))throw new TypeError("Invalid target");const z=document.scrollingElement||document.documentElement,b=[];let m=e;for(;Oe(m)&&R(m);){if(m=jt(m),m===z){b.push(m);break}m!=null&&m===document.body&&de(m)&&!de(document.documentElement)||m!=null&&de(m,f)&&b.push(m)}const F=(n=(r=window.visualViewport)==null?void 0:r.width)!=null?n:innerWidth,S=(i=(l=window.visualViewport)==null?void 0:l.height)!=null?i:innerHeight,{scrollX:g,scrollY:s}=window,{height:y,width:x,top:p,right:v,bottom:w,left:_}=e.getBoundingClientRect();let E=c==="start"||c==="nearest"?p:c==="end"?w:p+y/2,I=u==="center"?_+x/2:u==="end"?v:_;const P=[];for(let V=0;V<b.length;V++){const h=b[V],{height:N,width:M,top:D,right:L,bottom:T,left:H}=h.getBoundingClientRect();if(a==="if-needed"&&p>=0&&_>=0&&w<=S&&v<=F&&p>=D&&w<=T&&_>=H&&v<=L)return P;const W=getComputedStyle(h),B=parseInt(W.borderLeftWidth,10),Q=parseInt(W.borderTopWidth,10),K=parseInt(W.borderRightWidth,10),C=parseInt(W.borderBottomWidth,10);let O=0,$=0;const q="offsetWidth"in h?h.offsetWidth-h.clientWidth-B-K:0,A="offsetHeight"in h?h.offsetHeight-h.clientHeight-Q-C:0,Z="offsetWidth"in h?h.offsetWidth===0?0:M/h.offsetWidth:0,ee="offsetHeight"in h?h.offsetHeight===0?0:N/h.offsetHeight:0;if(z===h)O=c==="start"?E:c==="end"?E-S:c==="nearest"?ie(s,s+S,S,Q,C,s+E,s+E+y,y):E-S/2,$=u==="start"?I:u==="center"?I-F/2:u==="end"?I-F:ie(g,g+F,F,B,K,g+I,g+I+x,x),O=Math.max(0,O+s),$=Math.max(0,$+g);else{O=c==="start"?E-D-Q:c==="end"?E-T+C+A:c==="nearest"?ie(D,T,N,Q,C+A,E,E+y,y):E-(D+N/2)+A/2,$=u==="start"?I-H-B:u==="center"?I-(H+M/2)+q/2:u==="end"?I-L+K+q:ie(H,L,M,B,K+q,I,I+x,x);const{scrollLeft:J,scrollTop:j}=h;O=Math.max(0,Math.min(j+O/ee,h.scrollHeight-N/ee+A)),$=Math.max(0,Math.min(J+$/Z,h.scrollWidth-M/Z+q)),E+=j-O,I+=J-$}P.push({el:h,top:O,left:$})}return P},Nt=e=>e===!1?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&Object.keys(t).length!==0)(e)?e:{block:"start",inline:"nearest"};function Pt(e,t){if(!e.isConnected||!(n=>{let l=n;for(;l&&l.parentNode;){if(l.parentNode===document)return!0;l=l.parentNode instanceof ShadowRoot?l.parentNode.host:l.parentNode}return!1})(e))return;if((n=>typeof n=="object"&&typeof n.behavior=="function")(t))return t.behavior(je(e,t));const r=typeof t=="boolean"||t==null?void 0:t.behavior;for(const{el:n,top:l,left:i}of je(e,Nt(t)))n.scroll({top:l,left:i,behavior:r})}function se(e){const[t,r]=o.useState(e);return o.useEffect(()=>{const n=setTimeout(()=>{r(e)},e.length?0:10);return()=>{clearTimeout(n)}},[e]),t}const Mt=e=>{const{componentCls:t}=e,r=`${t}-show-help`,n=`${t}-show-help-item`;return{[r]:{transition:`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&-appear, &-enter":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}},[n]:{overflow:"hidden",transition:`height ${e.motionDurationSlow} ${e.motionEaseInOut},
                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},
                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,[`&${n}-appear, &${n}-enter`]:{transform:"translateY(-5px)",opacity:0,["&-active"]:{transform:"translateY(0)",opacity:1}},[`&${n}-leave-active`]:{transform:"translateY(-5px)"}}}}},Rt=Mt,_t=e=>({legend:{display:"block",width:"100%",marginBottom:e.marginLG,padding:0,color:e.colorTextDescription,fontSize:e.fontSizeLG,lineHeight:"inherit",border:0,borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},label:{fontSize:e.fontSize},'input[type="search"]':{boxSizing:"border-box"},'input[type="radio"], input[type="checkbox"]':{lineHeight:"normal"},'input[type="file"]':{display:"block"},'input[type="range"]':{display:"block",width:"100%"},"select[multiple], select[size]":{height:"auto"},[`input[type='file']:focus,
  input[type='radio']:focus,
  input[type='checkbox']:focus`]:{outline:0,boxShadow:`0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`},output:{display:"block",paddingTop:15,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight}}),Ne=(e,t)=>{const{formItemCls:r}=e;return{[r]:{[`${r}-label > label`]:{height:t},[`${r}-control-input`]:{minHeight:t}}}},Tt=e=>{const{componentCls:t}=e;return{[e.componentCls]:Object.assign(Object.assign(Object.assign({},_e(e)),_t(e)),{[`${t}-text`]:{display:"inline-block",paddingInlineEnd:e.paddingSM},"&-small":Object.assign({},Ne(e,e.controlHeightSM)),"&-large":Object.assign({},Ne(e,e.controlHeightLG))})}},Lt=e=>{const{formItemCls:t,iconCls:r,componentCls:n,rootPrefixCls:l}=e;return{[t]:Object.assign(Object.assign({},_e(e)),{marginBottom:e.marginLG,verticalAlign:"top","&-with-help":{transition:"none"},[`&-hidden,
        &-hidden.${l}-row`]:{display:"none"},"&-has-warning":{[`${t}-split`]:{color:e.colorError}},"&-has-error":{[`${t}-split`]:{color:e.colorWarning}},[`${t}-label`]:{display:"inline-block",flexGrow:0,overflow:"hidden",whiteSpace:"nowrap",textAlign:"end",verticalAlign:"middle","&-left":{textAlign:"start"},"&-wrap":{overflow:"unset",lineHeight:`${e.lineHeight} - 0.25em`,whiteSpace:"unset"},"> label":{position:"relative",display:"inline-flex",alignItems:"center",maxWidth:"100%",height:e.controlHeight,color:e.colorTextHeading,fontSize:e.fontSize,[`> ${r}`]:{fontSize:e.fontSize,verticalAlign:"top"},[`&${t}-required:not(${t}-required-mark-optional)::before`]:{display:"inline-block",marginInlineEnd:e.marginXXS,color:e.colorError,fontSize:e.fontSize,fontFamily:"SimSun, sans-serif",lineHeight:1,content:'"*"',[`${n}-hide-required-mark &`]:{display:"none"}},[`${t}-optional`]:{display:"inline-block",marginInlineStart:e.marginXXS,color:e.colorTextDescription,[`${n}-hide-required-mark &`]:{display:"none"}},[`${t}-tooltip`]:{color:e.colorTextDescription,cursor:"help",writingMode:"horizontal-tb",marginInlineStart:e.marginXXS},"&::after":{content:'":"',position:"relative",marginBlock:0,marginInlineStart:e.marginXXS/2,marginInlineEnd:e.marginXS},[`&${t}-no-colon::after`]:{content:'" "'}}},[`${t}-control`]:{display:"flex",flexDirection:"column",flexGrow:1,[`&:first-child:not([class^="'${l}-col-'"]):not([class*="' ${l}-col-'"])`]:{width:"100%"},"&-input":{position:"relative",display:"flex",alignItems:"center",minHeight:e.controlHeight,"&-content":{flex:"auto",maxWidth:"100%"}}},[t]:{"&-explain, &-extra":{clear:"both",color:e.colorTextDescription,fontSize:e.fontSize,lineHeight:e.lineHeight},"&-explain-connected":{width:"100%"},"&-extra":{minHeight:e.controlHeightSM,transition:`color ${e.motionDurationMid} ${e.motionEaseOut}`},"&-explain":{"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning}}},[`&-with-help ${t}-explain`]:{height:"auto",opacity:1},[`${t}-feedback-icon`]:{fontSize:e.fontSize,textAlign:"center",visibility:"visible",animationName:Le,animationDuration:e.motionDurationMid,animationTimingFunction:e.motionEaseOutBack,pointerEvents:"none","&-success":{color:e.colorSuccess},"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning},"&-validating":{color:e.colorPrimary}}})}},Wt=e=>{const{componentCls:t,formItemCls:r,rootPrefixCls:n}=e;return{[`${t}-horizontal`]:{[`${r}-label`]:{flexGrow:0},[`${r}-control`]:{flex:"1 1 0",minWidth:0},[`${r}-label.${n}-col-24 + ${r}-control`]:{minWidth:"unset"}}}},zt=e=>{const{componentCls:t,formItemCls:r}=e;return{[`${t}-inline`]:{display:"flex",flexWrap:"wrap",[r]:{flex:"none",marginInlineEnd:e.margin,marginBottom:0,"&-row":{flexWrap:"nowrap"},"&-with-help":{marginBottom:e.marginLG},[`> ${r}-label,
        > ${r}-control`]:{display:"inline-block",verticalAlign:"top"},[`> ${r}-label`]:{flex:"none"},[`${t}-text`]:{display:"inline-block"},[`${r}-has-feedback`]:{display:"inline-block"}}}}},ne=e=>({margin:0,padding:`0 0 ${e.paddingXS}px`,whiteSpace:"initial",textAlign:"start","> label":{margin:0,"&::after":{display:"none"}}}),Vt=e=>{const{componentCls:t,formItemCls:r}=e;return{[`${r} ${r}-label`]:ne(e),[t]:{[r]:{flexWrap:"wrap",[`${r}-label,
          ${r}-control`]:{flex:"0 0 100%",maxWidth:"100%"}}}}},Ht=e=>{const{componentCls:t,formItemCls:r,rootPrefixCls:n}=e;return{[`${t}-vertical`]:{[r]:{"&-row":{flexDirection:"column"},"&-label > label":{height:"auto"},[`${t}-item-control`]:{width:"100%"}}},[`${t}-vertical ${r}-label,
      .${n}-col-24${r}-label,
      .${n}-col-xl-24${r}-label`]:ne(e),[`@media (max-width: ${e.screenXSMax}px)`]:[Vt(e),{[t]:{[`.${n}-col-xs-24${r}-label`]:ne(e)}}],[`@media (max-width: ${e.screenSMMax}px)`]:{[t]:{[`.${n}-col-sm-24${r}-label`]:ne(e)}},[`@media (max-width: ${e.screenMDMax}px)`]:{[t]:{[`.${n}-col-md-24${r}-label`]:ne(e)}},[`@media (max-width: ${e.screenLGMax}px)`]:{[t]:{[`.${n}-col-lg-24${r}-label`]:ne(e)}}}},ye=Xe("Form",(e,t)=>{let{rootPrefixCls:r}=t;const n=Ge(e,{formItemCls:`${e.componentCls}-item`,rootPrefixCls:r});return[Tt(n),Lt(n),Rt(n),Wt(n),zt(n),Ht(n),$t(n),Le]}),Pe=[];function fe(e,t,r){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return{key:typeof e=="string"?e:`${t}-${n}`,error:e,errorStatus:r}}function ze(e){let{help:t,helpStatus:r,errors:n=Pe,warnings:l=Pe,className:i,fieldId:a,onVisibleChanged:c}=e;const{prefixCls:u}=o.useContext(he),d=`${u}-item-explain`,[,f]=ye(u),R=o.useMemo(()=>Ee(u),[u]),z=se(n),b=se(l),m=o.useMemo(()=>t!=null?[fe(t,"help",r)]:[].concat(G(z.map((S,g)=>fe(S,"error","error",g))),G(b.map((S,g)=>fe(S,"warning","warning",g)))),[t,r,z,b]),F={};return a&&(F.id=`${a}_help`),o.createElement(Qe,{motionDeadline:R.motionDeadline,motionName:`${u}-show-help`,visible:!!m.length,onVisibleChanged:c},S=>{const{className:g,style:s}=S;return o.createElement("div",Object.assign({},F,{className:Y(d,g,i,f),style:s,role:"alert"}),o.createElement(Ke,Object.assign({keys:m},Ee(u),{motionName:`${u}-show-help-item`,component:!1}),y=>{const{key:x,error:p,errorStatus:v,className:w,style:_}=y;return o.createElement("div",{key:x,className:Y(w,{[`${d}-${v}`]:v}),style:_},p)}))})}const qt=["parentNode"],At="form_item";function re(e){return e===void 0||e===!1?[]:Array.isArray(e)?e:[e]}function Ve(e,t){if(!e.length)return;const r=e.join("_");return t?`${t}_${r}`:qt.includes(r)?`${At}_${r}`:r}function Me(e){return re(e).join("_")}function He(e){const[t]=Ye(),r=o.useRef({}),n=o.useMemo(()=>e??Object.assign(Object.assign({},t),{__INTERNAL__:{itemRef:l=>i=>{const a=Me(l);i?r.current[a]=i:delete r.current[a]}},scrollToField:function(l){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=re(l),c=Ve(a,n.__INTERNAL__.name),u=c?document.getElementById(c):null;u&&Pt(u,Object.assign({scrollMode:"if-needed",block:"nearest"},i))},getFieldInstance:l=>{const i=Me(l);return r.current[i]}}),[e,t]);return[n]}var Dt=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};const Bt=(e,t)=>{const r=o.useContext(Ue),n=o.useContext(Ze),{getPrefixCls:l,direction:i,form:a}=o.useContext(pe),{prefixCls:c,className:u,rootClassName:d,size:f=r,disabled:R=n,form:z,colon:b,labelAlign:m,labelWrap:F,labelCol:S,wrapperCol:g,hideRequiredMark:s,layout:y="horizontal",scrollToFirstError:x,requiredMark:p,onFinishFailed:v,name:w}=e,_=Dt(e,["prefixCls","className","rootClassName","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name"]),E=o.useMemo(()=>p!==void 0?p:a&&a.requiredMark!==void 0?a.requiredMark:!s,[s,p,a]),I=b??(a==null?void 0:a.colon),P=l("form",c),[V,h]=ye(P),N=Y(P,{[`${P}-${y}`]:!0,[`${P}-hide-required-mark`]:E===!1,[`${P}-rtl`]:i==="rtl",[`${P}-${f}`]:f},h,u,d),[M]=He(z),{__INTERNAL__:D}=M;D.name=w;const L=o.useMemo(()=>({name:w,labelAlign:m,labelCol:S,labelWrap:F,wrapperCol:g,vertical:y==="vertical",colon:I,requiredMark:E,itemRef:D.itemRef,form:M}),[w,m,S,g,y,I,E,M]);o.useImperativeHandle(t,()=>M);const T=(W,B)=>{if(W){let Q={block:"nearest"};typeof W=="object"&&(Q=W),M.scrollToField(B,Q)}},H=W=>{if(v==null||v(W),W.errorFields.length){const B=W.errorFields[0].name;if(x!==void 0){T(x,B);return}a&&a.scrollToFirstError!==void 0&&T(a.scrollToFirstError,B)}};return V(o.createElement(Je,{disabled:R},o.createElement(ke,{size:f},o.createElement(k.Provider,{value:L},o.createElement(et,Object.assign({id:w},_,{name:w,onFinishFailed:H,form:M,className:N}))))))},Xt=o.forwardRef(Bt),Gt=Xt,qe=()=>{const{status:e,errors:t=[],warnings:r=[]}=o.useContext(be);return{status:e,errors:t,warnings:r}};qe.Context=be;const Qt=qe;function Kt(e){const[t,r]=o.useState(e),n=o.useRef(null),l=o.useRef([]),i=o.useRef(!1);o.useEffect(()=>(i.current=!1,()=>{i.current=!0,we.cancel(n.current),n.current=null}),[]);function a(c){i.current||(n.current===null&&(l.current=[],n.current=we(()=>{n.current=null,r(u=>{let d=u;return l.current.forEach(f=>{d=f(d)}),d})})),l.current.push(c))}return[t,a]}function Yt(){const{itemRef:e}=o.useContext(k),t=o.useRef({});function r(n,l){const i=l&&typeof l=="object"&&l.ref,a=n.join("_");return(t.current.name!==a||t.current.originRef!==i)&&(t.current.name=a,t.current.originRef=i,t.current.ref=tt(e(n),i)),t.current.ref}return r}const Ut=e=>{const{prefixCls:t,status:r,wrapperCol:n,children:l,errors:i,warnings:a,_internalItemRender:c,extra:u,help:d,fieldId:f,marginBottom:R,onErrorVisibleChanged:z}=e,b=`${t}-item`,m=o.useContext(k),F=n||m.wrapperCol||{},S=Y(`${b}-control`,F.className),g=o.useMemo(()=>Object.assign({},m),[m]);delete g.labelCol,delete g.wrapperCol;const s=o.createElement("div",{className:`${b}-control-input`},o.createElement("div",{className:`${b}-control-input-content`},l)),y=o.useMemo(()=>({prefixCls:t,status:r}),[t,r]),x=R!==null||i.length||a.length?o.createElement("div",{style:{display:"flex",flexWrap:"nowrap"}},o.createElement(he.Provider,{value:y},o.createElement(ze,{fieldId:f,errors:i,warnings:a,help:d,helpStatus:r,className:`${b}-explain-connected`,onVisibleChanged:z})),!!R&&o.createElement("div",{style:{width:0,height:R}})):null,p={};f&&(p.id=`${f}_extra`);const v=u?o.createElement("div",Object.assign({},p,{className:`${b}-extra`}),u):null,w=c&&c.mark==="pro_table_render"&&c.render?c.render(e,{input:s,errorList:x,extra:v}):o.createElement(o.Fragment,null,s,x,v);return o.createElement(k.Provider,{value:g},o.createElement(ge,Object.assign({},F,{className:S}),w))},Zt=Ut;var Jt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"};const kt=Jt;var Ae=function(t,r){return o.createElement(nt,Se(Se({},t),{},{ref:r,icon:kt}))};Ae.displayName="QuestionCircleOutlined";const en=o.forwardRef(Ae);var tn=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};function nn(e){return e?typeof e=="object"&&!o.isValidElement(e)?e:{title:e}:null}const rn=e=>{let{prefixCls:t,label:r,htmlFor:n,labelCol:l,labelAlign:i,colon:a,required:c,requiredMark:u,tooltip:d}=e;var f;const[R]=vt("Form"),{vertical:z,labelAlign:b,labelCol:m,labelWrap:F,colon:S}=o.useContext(k);if(!r)return null;const g=l||m||{},s=i||b,y=`${t}-item-label`,x=Y(y,s==="left"&&`${y}-left`,g.className,{[`${y}-wrap`]:!!F});let p=r;const v=a===!0||S!==!1&&a!==!1;v&&!z&&typeof r=="string"&&r.trim()!==""&&(p=r.replace(/[:|：]\s*$/,""));const _=nn(d);if(_){const{icon:I=o.createElement(en,null)}=_,P=tn(_,["icon"]),V=o.createElement(wt,Object.assign({},P),o.cloneElement(I,{className:`${t}-item-tooltip`,title:""}));p=o.createElement(o.Fragment,null,p,V)}u==="optional"&&!c&&(p=o.createElement(o.Fragment,null,p,o.createElement("span",{className:`${t}-item-optional`,title:""},(R==null?void 0:R.optional)||((f=rt.Form)===null||f===void 0?void 0:f.optional))));const E=Y({[`${t}-item-required`]:c,[`${t}-item-required-mark-optional`]:u==="optional",[`${t}-item-no-colon`]:!v});return o.createElement(ge,Object.assign({},g,{className:x}),o.createElement("label",{htmlFor:n,className:E,title:typeof r=="string"?r:""},p))},on=rn;var ln=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};const an={success:lt,warning:it,error:at,validating:It};function sn(e){const{prefixCls:t,className:r,rootClassName:n,style:l,help:i,errors:a,warnings:c,validateStatus:u,meta:d,hasFeedback:f,hidden:R,children:z,fieldId:b,required:m,isRequired:F,onSubItemMetaChange:S}=e,g=ln(e,["prefixCls","className","rootClassName","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","required","isRequired","onSubItemMetaChange"]),s=`${t}-item`,{requiredMark:y}=o.useContext(k),x=o.useRef(null),p=se(a),v=se(c),w=i!=null,_=!!(w||a.length||c.length),E=!!x.current&&St(x.current),[I,P]=o.useState(null);Et(()=>{if(_&&x.current){const L=getComputedStyle(x.current);P(parseInt(L.marginBottom,10))}},[_,E]);const V=L=>{L||P(null)},N=function(){let L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,T="";const H=L?p:d.errors,W=L?v:d.warnings;return u!==void 0?T=u:d.validating?T="validating":H.length?T="error":W.length?T="warning":(d.touched||f&&d.validated)&&(T="success"),T}(),M=o.useMemo(()=>{let L;if(f){const T=N&&an[N];L=T?o.createElement("span",{className:Y(`${s}-feedback-icon`,`${s}-feedback-icon-${N}`)},o.createElement(T,null)):null}return{status:N,errors:a,warnings:c,hasFeedback:f,feedbackIcon:L,isFormItemInput:!0}},[N,f]),D=Y(s,r,n,{[`${s}-with-help`]:w||p.length||v.length,[`${s}-has-feedback`]:N&&f,[`${s}-has-success`]:N==="success",[`${s}-has-warning`]:N==="warning",[`${s}-has-error`]:N==="error",[`${s}-is-validating`]:N==="validating",[`${s}-hidden`]:R});return o.createElement("div",{className:D,style:l,ref:x},o.createElement(Te,Object.assign({className:`${s}-row`},ot(g,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol"])),o.createElement(on,Object.assign({htmlFor:b},e,{requiredMark:y,required:m??F,prefixCls:t})),o.createElement(Zt,Object.assign({},e,d,{errors:p,warnings:v,prefixCls:t,status:N,help:i,marginBottom:I,onErrorVisibleChanged:V}),o.createElement(We.Provider,{value:S},o.createElement(be.Provider,{value:M},z)))),!!I&&o.createElement("div",{className:`${s}-margin-offset`,style:{marginBottom:-I}}))}function cn(e){if(typeof e=="function")return e;const t=st(e);return t.length<=1?t[0]:t}const un="__SPLIT__",mn=o.memo(e=>{let{children:t}=e;return t},(e,t)=>e.value===t.value&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every((r,n)=>r===t.childProps[n]));function dn(e){return e!=null}function Re(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}}function fn(e){const{name:t,noStyle:r,className:n,dependencies:l,prefixCls:i,shouldUpdate:a,rules:c,children:u,required:d,label:f,messageVariables:R,trigger:z="onChange",validateTrigger:b,hidden:m,help:F}=e,{getPrefixCls:S}=o.useContext(pe),{name:g}=o.useContext(k),s=cn(u),y=typeof s=="function",x=o.useContext(We),{validateTrigger:p}=o.useContext(ct),v=b!==void 0?b:p,w=dn(t),_=S("form",i),[E,I]=ye(_),P=o.useContext(ut),V=o.useRef(),[h,N]=Kt({}),[M,D]=mt(()=>Re()),L=C=>{const O=P==null?void 0:P.getKey(C.name);if(D(C.destroy?Re():C,!0),r&&F!==!1&&x){let $=C.name;if(C.destroy)$=V.current||$;else if(O!==void 0){const[q,A]=O;$=[q].concat(G(A)),V.current=$}x(C,$)}},T=(C,O)=>{N($=>{const q=Object.assign({},$),Z=[].concat(G(C.name.slice(0,-1)),G(O)).join(un);return C.destroy?delete q[Z]:q[Z]=C,q})},[H,W]=o.useMemo(()=>{const C=G(M.errors),O=G(M.warnings);return Object.values(h).forEach($=>{C.push.apply(C,G($.errors||[])),O.push.apply(O,G($.warnings||[]))}),[C,O]},[h,M.errors,M.warnings]),B=Yt();function Q(C,O,$){return r&&!m?C:o.createElement(sn,Object.assign({key:"row"},e,{className:Y(n,I),prefixCls:_,fieldId:O,isRequired:$,errors:H,warnings:W,meta:M,onSubItemMetaChange:T}),C)}if(!w&&!y&&!l)return E(Q(s));let K={};return typeof f=="string"?K.label=f:t&&(K.label=String(t)),R&&(K=Object.assign(Object.assign({},K),R)),E(o.createElement(dt,Object.assign({},e,{messageVariables:K,trigger:z,validateTrigger:v,onMetaChange:L}),(C,O,$)=>{const q=re(t).length&&O?O.name:[],A=Ve(q,g),Z=d!==void 0?d:!!(c&&c.some(j=>{if(j&&typeof j=="object"&&j.required&&!j.warningOnly)return!0;if(typeof j=="function"){const oe=j($);return oe&&oe.required&&!oe.warningOnly}return!1})),ee=Object.assign({},C);let J=null;if(Array.isArray(s)&&w)J=s;else if(!(y&&(!(a||l)||w))){if(!(l&&!y&&!w))if(ft(s)){const j=Object.assign(Object.assign({},s.props),ee);if(j.id||(j.id=A),F||H.length>0||W.length>0||e.extra){const te=[];(F||H.length>0)&&te.push(`${A}_help`),e.extra&&te.push(`${A}_extra`),j["aria-describedby"]=te.join(" ")}H.length>0&&(j["aria-invalid"]="true"),Z&&(j["aria-required"]="true"),pt(s)&&(j.ref=B(q,s)),new Set([].concat(G(re(z)),G(re(v)))).forEach(te=>{j[te]=function(){for(var xe,Ce,ce,$e,ue,ve=arguments.length,me=new Array(ve),le=0;le<ve;le++)me[le]=arguments[le];(ce=ee[te])===null||ce===void 0||(xe=ce).call.apply(xe,[ee].concat(me)),(ue=($e=s.props)[te])===null||ue===void 0||(Ce=ue).call.apply(Ce,[$e].concat(me))}});const Be=[j["aria-required"],j["aria-invalid"],j["aria-describedby"]];J=o.createElement(mn,{value:ee[e.valuePropName||"value"],update:s,childProps:Be},gt(s,j))}else y&&(a||l)&&!w?J=s($):J=s}return Q(J,A,Z)}))}const De=fn;De.useStatus=Qt;const pn=De;var gn=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};const hn=e=>{var{prefixCls:t,children:r}=e,n=gn(e,["prefixCls","children"]);const{getPrefixCls:l}=o.useContext(pe),i=l("form",t),a=o.useMemo(()=>({prefixCls:i,status:"error"}),[i]);return o.createElement(ht,Object.assign({},n),(c,u,d)=>o.createElement(he.Provider,{value:a},r(c.map(f=>Object.assign(Object.assign({},f),{fieldKey:f.key})),u,{errors:d.errors,warnings:d.warnings})))},bn=hn;function yn(){const{form:e}=o.useContext(k);return e}const U=Gt;U.Item=pn;U.List=bn;U.ErrorList=ze;U.useForm=He;U.useFormInstance=yn;U.useWatch=bt;U.Provider=Ot;U.create=()=>{};const ae=U,xn=()=>{const{loading:e,login:t,errors:r}=xt(),n=i=>{t(i)},l=i=>{console.log("Failed:",i)};return X.jsx(Te,{children:X.jsxs(ge,{span:12,offset:6,children:[r!==null&&X.jsxs("p",{children:[" ",r.mess]}),X.jsxs(ae,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},style:{marginTop:"20px",maxWidth:600,padding:"5px",border:"1px solid #ccc"},onFinish:n,onFinishFailed:l,autoComplete:"off",children:[X.jsx(ae.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:X.jsx(Ie,{})}),X.jsx(ae.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:X.jsx(Ie.Password,{})}),X.jsxs(ae.Item,{wrapperCol:{offset:8,span:16},children:[X.jsx(Ft,{loading:e,type:"primary",htmlType:"submit",children:"Submit"}),X.jsx(Ct,{to:"/",children:" Quay ve trang chu"})]})]})]})})},vn=yt.memo(xn);export{vn as default};
