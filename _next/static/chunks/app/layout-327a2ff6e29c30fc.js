(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8524:function(t,e,n){Promise.resolve().then(n.bind(n,3586)),Promise.resolve().then(n.t.bind(n,1786,23)),Promise.resolve().then(n.t.bind(n,5605,23)),Promise.resolve().then(n.t.bind(n,986,23))},3586:function(t,e,n){"use strict";n.r(e),n.d(e,{SettingsContext:function(){return y},default:function(){return k}});var o,r,s=n(7437),a=n(2265),i=n(9910),E=n(9136),c=n(7155),l=n(3269),T=n(4086),u=n(470),d=n(4332),N=n(6285),O=n(7658),_=n(6810),A=n(3971),x=n(1519),S=n(2685),h=n(363),f=n(7049),C=n(6507),m=t=>{let{position:e,closeContextMenu:n}=t,{event_Emitter:o}=(0,O.X)(),{clientX:r,clientY:a,display:i}=e;return(0,s.jsx)(T.d,{onClickAway:()=>n(),children:(0,s.jsx)(u.Z,{sx:{position:"absolute",left:r+2,top:a-6,zIndex:999,display:i?"block":"none",backgroundColor:"#121212",borderRadius:2},children:(0,s.jsxs)(d.Z,{width:175,children:[(0,s.jsx)(N.Z,{startIcon:(0,s.jsx)(_.Z,{}),variant:"text",onClick:()=>{o.emit("statechange","cursor"),n()},children:"Cursor"}),(0,s.jsx)(N.Z,{startIcon:(0,s.jsx)(A.Z,{sx:{rotate:"90deg"}}),variant:"text",onClick:()=>{o.emit("statechange","select"),n()},children:"region"}),(0,s.jsx)(N.Z,{startIcon:(0,s.jsx)(x.Z,{}),variant:"text",onClick:()=>{o.emit("statechange","shift"),n()},children:"shift"}),(0,s.jsx)(N.Z,{startIcon:(0,s.jsx)(S.Z,{}),variant:"text",onClick:()=>{o.emit("statechange","fadein"),n()},children:"fade in"}),(0,s.jsx)(N.Z,{startIcon:(0,s.jsx)(h.Z,{}),variant:"text",onClick:()=>{o.emit("statechange","fadeout"),n()},children:"fade out"}),(0,s.jsx)(N.Z,{startIcon:(0,s.jsx)(f.Z,{}),variant:"text",onClick:()=>{o.emit("zoomin"),n()},children:"zoom in"}),(0,s.jsx)(N.Z,{startIcon:(0,s.jsx)(C.Z,{}),variant:"text",onClick:()=>{o.emit("zoomout"),n()},children:"zoom out"})]})})})};let I={podcast:"Audio Editor for Stella",theme:{mode:"dark",backgroundColor:i._,textColor:"white"},contextMenu:{clientX:0,clientY:0,display:!1},keyPress:{key:"",shiftKey:!1},showAnnotations:!1,enableAnnotations:!0,annotations:[],dialogBox:!1,event_Emitter:{},setEventEmitter:()=>{},themeMode:()=>{},closeContextMenu:()=>{},changeTitle:()=>{},setAnnotations:()=>{},setShowAnnotations:()=>{},setEnableAnnotations:()=>{},setDialogBox:()=>{}};function p(t,e){let{type:n,payload:o}=e;switch(n){case"THEME_DARK":return{...t,theme:{mode:"dark",backgroundColor:i._,textColor:"white"}};case"THEME_LIGHT":return{...t,theme:{mode:"light",backgroundColor:i.R,textColor:"black"}};case"CONTEXT_MENU":return{...t,contextMenu:o};case"CLOSE_CONTEXT_MENU":return{...t,contextMenu:{...t.contextMenu,display:!1}};case"KEY_PRESS":return{...t,keyPress:o};case"EVENT_EMITTER":return{...t,event_Emitter:o};case"PODCAST_TITLE":return{...t,podcast:o};case"ANNOTATIONS":return{...t,annotations:o};case"SETSHOWANNOTATIONS":return{...t,showAnnotations:o};case"SETENEABLEANNOTATIONS":return{...t,enableAnnotations:o};case"SETDIALOGBOX":return{...t,dialogBox:o};default:return t}}(o=r||(r={})).THEME_DARK="THEME_DARK",o.THEME_LIGHT="THEME_LIGHT",o.CONTEXT_MENU="CONTEXT_MENU",o.CLOSE_CONTEXT_MENU="CLOSE_CONTEXT_MENU",o.KEY_PRESS="KEY_PRESS",o.EVENT_EMITTER="EVENT_EMITTER",o.PODCAST_TITLE="PODCAST_TITLE",o.SETSHOWANNOTATIONS="SETSHOWANNOTATIONS",o.SETENEABLEANNOTATIONS="SETENEABLEANNOTATIONS",o.ANNOTATIONS="ANNOTATIONS",o.SETDIALOGBOX="SETDIALOGBOX";let M=(0,a.createContext)({...I}),y=t=>{let{children:e}=t,[n,o]=(0,a.useReducer)(p,I),r=()=>{o({type:"CLOSE_CONTEXT_MENU",payload:null})};(0,a.useEffect)(()=>{let t=document.getElementById("editor");t&&(t.oncontextmenu=t=>{t.preventDefault();let{clientX:e,clientY:n}=t;o({type:"CONTEXT_MENU",payload:{clientX:e,clientY:n,display:!0}})}),window.onkeydown=t=>{let{key:e,shiftKey:n,code:r}=t;o({type:"KEY_PRESS",payload:{key:e,shiftKey:n,code:r}})}},[]);let{theme:{mode:i,backgroundColor:T}}=n,u=(0,E.Z)({palette:{mode:i,background:{default:T}}});return(0,s.jsx)(M.Provider,{value:{...n,themeMode:()=>{let{mode:t}=n.theme;if("dark"===t)return o({type:"THEME_LIGHT",payload:null});o({type:"THEME_DARK",payload:null})},closeContextMenu:r,setEventEmitter:t=>o({type:"EVENT_EMITTER",payload:t}),changeTitle:t=>{o({type:"PODCAST_TITLE",payload:t})},setShowAnnotations:function(t){o({type:"SETSHOWANNOTATIONS",payload:t})},setEnableAnnotations:function(t){o({type:"SETENEABLEANNOTATIONS",payload:t})},setAnnotations:function(t){o({type:"ANNOTATIONS",payload:t})},setDialogBox:function(t){o({type:"SETDIALOGBOX",payload:t})}},children:(0,s.jsxs)(c.Z,{theme:u,children:[(0,s.jsx)(l.ZP,{}),(0,s.jsx)(m,{position:n.contextMenu,closeContextMenu:r}),e]})})};var k=M},7658:function(t,e,n){"use strict";n.d(e,{X:function(){return s}});var o=n(2265),r=n(3586);let s=()=>(0,o.useContext)(r.default)},9910:function(t,e,n){"use strict";n.d(e,{R:function(){return r},_:function(){return o}});let o="#11161a",r="#f3f4f9"},986:function(){},1786:function(){},5605:function(t){t.exports={style:{fontFamily:"'__Montserrat_92deb5', '__Montserrat_Fallback_92deb5'",fontStyle:"normal"},className:"__className_92deb5"}}},function(t){t.O(0,[895,971,69,744],function(){return t(t.s=8524)}),_N_E=t.O()}]);