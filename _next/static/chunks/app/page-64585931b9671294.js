(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5564:function(e,t,n){Promise.resolve().then(n.bind(n,3978))},3978:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return J}});var o=n(7437),a=n(2265),r=n(6219),i=n.n(r),s=n(1962),l=n(6982),c=n.n(l),u=n(2599),d=n(1231),h=n(304),p=n(470),x=n(5826),f=n(7144);let g={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"transparent",p:4};var m=e=>{let{open:t}=e;return(0,o.jsx)(x.Z,{in:t,children:(0,o.jsx)(h.Z,{sx:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(8,10,13, 0.8)",zIndex:9999},children:(0,o.jsx)(h.Z,{sx:{...g,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)(f.Ll,{height:"80",width:"80",color:"#9c27b0",ariaLabel:"bars-loading",wrapperStyle:{},visible:t})})})})},E=n(4940),T=n(8888),S=n(4332),b=n(5397),w=n(3206),A=n(9835),j=n(7658);function N(e){let t=Math.floor(e%3600/60);t>60&&(t=parseFloat(String(0)));let n=parseFloat(String(e%60)).toFixed(2);Number(n)>60&&(n=String(parseFloat(String(.01))));let o=Math.floor(e/3600).toString().padStart(2,"0"),a=t.toString().padStart(2,"0"),r=n.toString().padStart(2,"0");return"".concat(o,":").concat(a,":").concat(r)}var C=e=>{let{bottom:t,ee:n}=e,{theme:r,keyPress:i}=(0,j.X)(),{key:s,shiftKey:l,code:c}=i,{textColor:u}=r,[d,p]=(0,a.useState)("00:00:00"),[x,f]=(0,a.useState)(0),[g,m]=(0,a.useState)(0),[C,v]=(0,a.useState)("00:00:00"),[y,k]=(0,a.useState)(!1),Z=(0,a.useRef)(null);return(0,a.useEffect)(()=>{n.on("getTrackDuration",e=>{var t=N(e);p(()=>t),f(()=>e)}),n.on("newTimeDurationAfterEdit",e=>{var t=N(e);p(()=>t),f(()=>e)}),n.on("timeupdate",e=>{m(()=>Number(parseFloat(String(e)).toFixed(4)));var t=N(e);v(()=>t)}),n.on("fnishedPlaying",()=>{v(()=>"00:00:00"),m(()=>0),k(!y)}),0!==t&&(p(()=>"00:00:00"),v(()=>"00:00:00"),m(()=>0),k(()=>!y))},[n,t]),(0,a.useEffect)(()=>{"Space"===c&&l&&(y?n.emit("play"):n.emit("pause"),k(!y))},[s,c,l,n,y]),(0,o.jsx)(h.Z,{sx:{width:"100%",position:"fixed",left:0,bottom:t,paddingLeft:"32px",paddingRight:"32px"},children:(0,o.jsxs)(S.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:2,sx:{height:75,backgroundColor:0===t?"transparent":"white",backdropFilter:"blur(10px)",borderRadius:16,padding:0===t?"0 8px":"0 300px",transition:".7s ease"},children:[(0,o.jsx)(b.Z,{title:y?"Play(shft + space)":"Pause(shft + space)",children:(0,o.jsx)(w.Z,{ref:Z,onClick:()=>{k(!y),y?n.emit("play"):n.emit("pause")},children:y?(0,o.jsx)(E.Z,{fontSize:"large",sx:{color:u}}):(0,o.jsx)(T.Z,{fontSize:"large",sx:{color:u}})})}),(0,o.jsx)(h.Z,{sx:{width:"95px"},children:(0,o.jsx)(A.Z,{sx:{fontWeight:"bold"},children:C})}),(0,o.jsx)(h.Z,{sx:{flex:1,input:{width:"100%","::-webkit-slider-thumb":{width:"16px",height:"16px",cursor:"pointer",position:"relative",bottom:"7px"},"::-webkit-slider-runnable-track":{height:"2px",cursor:"pointer"}}},children:(0,o.jsx)("input",{className:"audioBar",type:"range",min:0,max:x,step:1e-4,value:g,onChange:e=>{let{target:{value:t}}=e;n.emit("sliderTimeUpdate",t)}})}),(0,o.jsx)(h.Z,{sx:{width:"95px"},children:(0,o.jsx)(A.Z,{sx:{fontWeight:"bold"},children:d})})]})})},v=n(9910),y=n(278),k=n(6676),Z=n(7329),O=n(6285),L=n(8836),I=n(4466),_=()=>{let{theme:e,themeMode:t}=(0,j.X)(),{mode:n}=e,a=(0,L.ZP)(I.Z)(e=>{let{theme:t}=e;return{width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>\')')},"& + .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===n?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:"light"===n?"#003892":"#001e3c",width:32,height:32,"&:before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>\')')}},"& .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===n?"#8796A5":"#aab4be",borderRadius:10}}});return(0,o.jsx)(a,{onChange:()=>t(),checked:"dark"===n})};function M(){let{theme:{mode:e,textColor:t},changeTitle:n,podcast:r,event_Emitter:i,setShowAnnotations:s,setEnableAnnotations:l,setAnnotations:c,setDialogBox:u}=(0,j.X)(),[p,x]=a.useState(!1);async function g(){x(()=>!0),i.emit("clear"),i.emit("clearAnnotations"),u(!0);try{let e=await fetch("https://raw.githubusercontent.com/TareqFl/samples_data/main/Podcast.wav"),t=await e.blob(),n=new Blob([t],{type:"audio/wav"});i.emit("newtrack",{src:n,name:"Demo",id:(0,d.Z)(),url:!0});let o=await fetch("https://raw.githubusercontent.com/TareqFl/samples_data/main/annotations.json"),a=await o.json();i.emit("addAnnotation",a),c(a),s(!0),l(!1),x(()=>!1)}catch(e){e instanceof Error?console.log(e.message):console.log("An unknown error occurred:",e)}}return(0,o.jsx)(h.Z,{sx:{flexGrow:1},children:(0,o.jsx)(y.Z,{position:"fixed",elevation:1,sx:{backgroundColor:"light"===e?v.R:v._,borderBottomRightRadius:0,borderBottomLeftRadius:0,svg:{width:"20px",height:"20px"}},children:(0,o.jsxs)(k.Z,{children:[(0,o.jsxs)(S.Z,{flexDirection:"row",alignItems:"center",justifyContent:"start",gap:.5,children:[(0,o.jsx)(f.Ll,{height:"80",width:"80",color:"#9c27b0",ariaLabel:"bars-loading",visible:!0}),(0,o.jsx)(A.Z,{color:"light"===e?v._:v.R,children:"First Lover"})]}),(0,o.jsx)(S.Z,{flexGrow:1,direction:"row",alignItems:"center",justifyContent:"center",children:(0,o.jsx)(b.Z,{title:"Click to edit",children:(0,o.jsx)(Z.ZP,{sx:{color:"light"===e?v._:v.R,fontWeight:"bold"},value:r,onChange:e=>{let{target:{value:t}}=e;n(t.slice(0,19))},multiline:!0})})}),p?(0,o.jsx)(f.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#1860aa","#1860aa","#1860aa","#1860aa","#1860aa"]}):(0,o.jsx)(O.Z,{onClick:g,children:"Load Demo"}),(0,o.jsx)(_,{})]})})})}var R=n(6810),B=n(1519),P=n(3971),z=n(7584),D=n(4338),X=n(2685),U=n(363),H=n(7049),G=n(6507),F=n(8479),Y=n(4342),K=n(6595),W=n(6343),V=n(6889),q=e=>{let{handleClick:t,cutButton:n,disabled:a,splitButton:r,enableAnnotations:i}=e,{theme:{mode:s}}=(0,j.X)(),l=[{name:"cursor",icon:(0,o.jsx)(R.Z,{})},{name:"shift",icon:(0,o.jsx)(B.Z,{})},{name:"region",icon:(0,o.jsx)(P.Z,{sx:{rotate:"90deg"}})},{name:"cut",icon:(0,o.jsx)(z.Z,{})},{name:"split",icon:(0,o.jsx)(D.Z,{})},{name:"fadein",icon:(0,o.jsx)(X.Z,{})},{name:"fadeout",icon:(0,o.jsx)(U.Z,{})},{name:"zoomin",icon:(0,o.jsx)(H.Z,{})},{name:"zoomout",icon:(0,o.jsx)(G.Z,{})},{name:"addAnnotation",icon:(0,o.jsx)(F.Z,{})},{name:"downloadAnnotation",icon:(0,o.jsx)(Y.Z,{})},{name:"clearAnnotations",icon:(0,o.jsx)(K.Z,{})},{name:"upload",icon:(0,o.jsx)(W.Z,{})},{name:"download",icon:(0,o.jsx)(V.Z,{})}];return(0,o.jsx)(S.Z,{direction:"row",justifyContent:"center",flexWrap:"wrap",gap:1,mb:2,flexGrow:1,children:l.map((e,l)=>{let{name:c,icon:u}=e,d=a;if("upload"===c&&(d=!1),"cut"===c&&(d=n),"split"===c){if(a)return;d=r}return("downloadAnnotation"===c||"clearAnnotations"===c)&&(d=i),(0,o.jsx)(b.Z,{title:c,children:(0,o.jsx)("span",{children:(0,o.jsx)(O.Z,{disabled:d,name:c,variant:"text",onClick:()=>{t({target:{name:c}})},color:"info",sx:{":hover":{transform:"scale(1.2)",outline:"1px solid ".concat("light"===s?"#0088d1":"#9c27b0")},transition:"0.25s"},children:u})})},l)})})},J=()=>{var e;let t;let n=(0,a.useRef)(null),{theme:r,setEventEmitter:l,podcast:x,showAnnotations:f,setShowAnnotations:g,enableAnnotations:E,setEnableAnnotations:T,dialogBox:S,setDialogBox:b}=(0,j.X)(),{backgroundColor:w,textColor:A}=r;(e=t||(t={})).SETBUTTONS="SETBUTTONS",e.SETENABLECUT="SETENABLECUT",e.SETENEABLESPLIT="SETENEABLESPLIT",e.PLAYLIST="PLAYLIST";let N={ee:new(c()),toneCtx:s.Sy(),uploadRef:a.createRef(),uploadAnnRef:a.createRef(),allbuttons:!0,enableCut:!0,enableSplit:!0,playlist:()=>{}},[y,k]=(0,a.useReducer)(function(e,t){let{type:n,payload:o}=t;switch(n){case"SETBUTTONS":return{...e,allbuttons:o};case"SETENABLECUT":return{...e,enableCut:o};case"SETENEABLESPLIT":return{...e,enableSplit:o};case"PLAYLIST":return{...e,playlist:o};default:return e}},N),{ee:Z,toneCtx:O,uploadRef:L,uploadAnnRef:I,allbuttons:_,enableCut:R,enableSplit:B}=y,P=[{class:"fas.fa-play",title:"Play Annotation",action:e=>{Z&&Z.emit("play",e.start,e.end)}},{class:"fas.fa-plus",title:"Insert New Annotation",action:(e,t,n,o)=>{if(t===n.length-1)return console.log("not possible");let a=t+1,r={id:String(a),start:e.end,end:n[t+1].start,lines:["New Draft"],lang:"en"};n.forEach((e,t)=>{if(t>=a)return e.id=String(t+1)}),n.splice(t+1,0,r)}},{class:"fas.fa-trash",title:"Delete annotation",action:(e,t,n)=>{n.splice(t,1)}}],z=(0,a.useCallback)(e=>{if(null!==e&&null!==O){let t=i()({ac:O.rawContext,container:e,state:"cursor",mono:!0,samplesPerPixel:500,waveHeight:100,isAutomaticScroll:!0,timescale:!1,barGap:1,colors:{waveOutlineColor:"#222B36",timeColor:"grey",fadeColor:"black"},controls:{show:!0,width:175,widgets:{collapse:!1,muteOrSolo:!0,volume:!0,stereoPan:!0,remove:!0}},annotationList:{annotations:[],controls:P,editable:!1,isContinuousPlay:!1,linkEndpoints:!1},zoomLevels:[500,1e3,2e3],seekStyle:"fill"},Z);k({type:"PLAYLIST",payload:t}),Z.on("audiorenderingstarting",function(e,t){let o=new s.nL(e);s.v(o),n.current=t}),Z.on("audiorenderingfinished",function(e,t){s.v(O),"wav"===e&&(0,u.saveAs)(t,"".concat(x,".wav"))}),Z.on("audiosources_rendering",()=>b(!0)),Z.on("audiosourcesrendered",()=>{b(!1)}),Z.on("tracksUpdated",e=>k({type:"SETBUTTONS",payload:e})),Z.on("tracksLeft",e=>0===e&&k({type:"SETBUTTONS",payload:!0})),Z.on("audiosourceserror",e=>alert(e.message+" please only use type mp3")),Z.on("enableCut",e=>k({type:"SETENABLECUT",payload:e})),Z.on("enableSplit",e=>k({type:"SETENEABLESPLIT",payload:e})),Z.on("clearAnnotations",()=>{T(!0),g(!1)}),t.initExporter(),l(Z)}},[Z,O]);return(0,o.jsxs)(h.Z,{sx:{p:2,backgroundColor:w,color:A,paddingTop:10,overflowY:"auto",overflowX:"hidden"},children:[(0,o.jsx)(M,{}),(0,o.jsx)(m,{open:S}),(0,o.jsxs)(h.Z,{children:[(0,o.jsx)(q,{handleClick:function(e){let{target:{name:t}}=e;switch(t){case"play":return Z.emit("play");case"pause":return Z.emit("pause");case"cursor":return Z.emit("statechange","cursor");case"region":return Z.emit("statechange","select");case"shift":return Z.emit("statechange","shift");case"trim":return Z.emit("trim");case"cut":return Z.emit("cut"),k({type:"SETENABLECUT",payload:!0});case"split":return Z.emit("split");case"fadein":return Z.emit("statechange","fadein");case"fadeout":return Z.emit("statechange","fadeout");case"zoomin":return Z.emit("zoomin");case"zoomout":return Z.emit("zoomout");case"upload":if(L.current)return L.current.click();case"download":return Z.emit("startaudiorendering","wav");case"addAnnotation":if(I.current)return I.current.click();case"downloadAnnotation":return Z.emit("annotationsrequest");case"clearAnnotations":return Z.emit("clearAnnotations")}},cutButton:R,disabled:_,splitButton:B,enableAnnotations:E}),(0,o.jsxs)(h.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,o.jsx)("input",{ref:L,type:"file",accept:".mp3, .wav",multiple:!1,onChange:function(e){if(!e.target.files)return;let t=e.target.files[0];t&&(Z.emit("newtrack",{file:t,name:t.name,id:(0,d.Z)()}),L.current&&(L.current.value=""))},style:{display:"none"}}),(0,o.jsx)("input",{ref:I,type:"file",accept:".json",onChange:function(e){if(!e.target.files)return;let t=e.target.files[0];if(!t)return;let n=new FileReader;n.onload=async e=>{try{var t;if(!(null===(t=e.target)||void 0===t?void 0:t.result))return;let n=e.target.result,o=JSON.parse(n);Z.emit("addAnnotation",o),g(!0),T(!1),I.current&&(I.current.value="")}catch(e){console.log(e)}},n.readAsText(t)},style:{display:"none"}}),(0,o.jsx)(p.Z,{elevation:16,ref:z,onDragOver:()=>console.log("ure dragging"),id:"editor",sx:{backgroundColor:"transparent",borderRadius:"32px",mb:8,input:{backgroundColor:"transparent"},"#remove":{borderRadius:"6px",position:"relative",":after":{position:"absolute",content:'""',width:"3px",height:"65%",backgroundColor:"white",borderRadius:"1px",left:"45%",translate:"-50%",transform:"rotate(45deg)"},":before":{position:"absolute",content:'""',width:"3px",height:"65%",backgroundColor:"white",borderRadius:"1px",left:"45%",translate:"-50%",transform:"rotate(-45deg)"}},".annotations":{height:f?215:0,overflow:"hidden",transition:"0.35s",".current":{transition:"0.65s"},span:{color:v._,fontWeight:"bold"}}}})]})]}),(0,o.jsx)(C,{bottom:_?-100:0,ee:Z})]})}},3586:function(e,t,n){"use strict";n.r(t),n.d(t,{SettingsContext:function(){return v},default:function(){return y}});var o,a,r=n(7437),i=n(2265),s=n(9910),l=n(9136),c=n(7155),u=n(3269),d=n(4086),h=n(470),p=n(4332),x=n(6285),f=n(7658),g=n(6810),m=n(3971),E=n(1519),T=n(2685),S=n(363),b=n(7049),w=n(6507),A=e=>{let{position:t,closeContextMenu:n}=e,{event_Emitter:o}=(0,f.X)(),{clientX:a,clientY:i,display:s}=t;return(0,r.jsx)(d.d,{onClickAway:()=>n(),children:(0,r.jsx)(h.Z,{sx:{position:"absolute",left:a+2,top:i-6,zIndex:999,display:s?"block":"none",backgroundColor:"#121212",borderRadius:2},children:(0,r.jsxs)(p.Z,{width:175,children:[(0,r.jsx)(x.Z,{startIcon:(0,r.jsx)(g.Z,{}),variant:"text",onClick:()=>{o.emit("statechange","cursor"),n()},children:"Cursor"}),(0,r.jsx)(x.Z,{startIcon:(0,r.jsx)(m.Z,{sx:{rotate:"90deg"}}),variant:"text",onClick:()=>{o.emit("statechange","select"),n()},children:"region"}),(0,r.jsx)(x.Z,{startIcon:(0,r.jsx)(E.Z,{}),variant:"text",onClick:()=>{o.emit("statechange","shift"),n()},children:"shift"}),(0,r.jsx)(x.Z,{startIcon:(0,r.jsx)(T.Z,{}),variant:"text",onClick:()=>{o.emit("statechange","fadein"),n()},children:"fade in"}),(0,r.jsx)(x.Z,{startIcon:(0,r.jsx)(S.Z,{}),variant:"text",onClick:()=>{o.emit("statechange","fadeout"),n()},children:"fade out"}),(0,r.jsx)(x.Z,{startIcon:(0,r.jsx)(b.Z,{}),variant:"text",onClick:()=>{o.emit("zoomin"),n()},children:"zoom in"}),(0,r.jsx)(x.Z,{startIcon:(0,r.jsx)(w.Z,{}),variant:"text",onClick:()=>{o.emit("zoomout"),n()},children:"zoom out"})]})})})};let j={podcast:"Audio Editor for Stella",theme:{mode:"dark",backgroundColor:s._,textColor:"white"},contextMenu:{clientX:0,clientY:0,display:!1},keyPress:{key:"",shiftKey:!1},showAnnotations:!1,enableAnnotations:!0,annotations:[],dialogBox:!1,event_Emitter:{},setEventEmitter:()=>{},themeMode:()=>{},closeContextMenu:()=>{},changeTitle:()=>{},setAnnotations:()=>{},setShowAnnotations:()=>{},setEnableAnnotations:()=>{},setDialogBox:()=>{}};function N(e,t){let{type:n,payload:o}=t;switch(n){case"THEME_DARK":return{...e,theme:{mode:"dark",backgroundColor:s._,textColor:"white"}};case"THEME_LIGHT":return{...e,theme:{mode:"light",backgroundColor:s.R,textColor:"black"}};case"CONTEXT_MENU":return{...e,contextMenu:o};case"CLOSE_CONTEXT_MENU":return{...e,contextMenu:{...e.contextMenu,display:!1}};case"KEY_PRESS":return{...e,keyPress:o};case"EVENT_EMITTER":return{...e,event_Emitter:o};case"PODCAST_TITLE":return{...e,podcast:o};case"ANNOTATIONS":return{...e,annotations:o};case"SETSHOWANNOTATIONS":return{...e,showAnnotations:o};case"SETENEABLEANNOTATIONS":return{...e,enableAnnotations:o};case"SETDIALOGBOX":return{...e,dialogBox:o};default:return e}}(o=a||(a={})).THEME_DARK="THEME_DARK",o.THEME_LIGHT="THEME_LIGHT",o.CONTEXT_MENU="CONTEXT_MENU",o.CLOSE_CONTEXT_MENU="CLOSE_CONTEXT_MENU",o.KEY_PRESS="KEY_PRESS",o.EVENT_EMITTER="EVENT_EMITTER",o.PODCAST_TITLE="PODCAST_TITLE",o.SETSHOWANNOTATIONS="SETSHOWANNOTATIONS",o.SETENEABLEANNOTATIONS="SETENEABLEANNOTATIONS",o.ANNOTATIONS="ANNOTATIONS",o.SETDIALOGBOX="SETDIALOGBOX";let C=(0,i.createContext)({...j}),v=e=>{let{children:t}=e,[n,o]=(0,i.useReducer)(N,j),a=()=>{o({type:"CLOSE_CONTEXT_MENU",payload:null})};(0,i.useEffect)(()=>{let e=document.getElementById("editor");e&&(e.oncontextmenu=e=>{e.preventDefault();let{clientX:t,clientY:n}=e;o({type:"CONTEXT_MENU",payload:{clientX:t,clientY:n,display:!0}})}),window.onkeydown=e=>{let{key:t,shiftKey:n,code:a}=e;o({type:"KEY_PRESS",payload:{key:t,shiftKey:n,code:a}})}},[]);let{theme:{mode:s,backgroundColor:d}}=n,h=(0,l.Z)({palette:{mode:s,background:{default:d}}});return(0,r.jsx)(C.Provider,{value:{...n,themeMode:()=>{let{mode:e}=n.theme;if("dark"===e)return o({type:"THEME_LIGHT",payload:null});o({type:"THEME_DARK",payload:null})},closeContextMenu:a,setEventEmitter:e=>o({type:"EVENT_EMITTER",payload:e}),changeTitle:e=>{o({type:"PODCAST_TITLE",payload:e})},setShowAnnotations:function(e){o({type:"SETSHOWANNOTATIONS",payload:e})},setEnableAnnotations:function(e){o({type:"SETENEABLEANNOTATIONS",payload:e})},setAnnotations:function(e){o({type:"ANNOTATIONS",payload:e})},setDialogBox:function(e){o({type:"SETDIALOGBOX",payload:e})}},children:(0,r.jsxs)(c.Z,{theme:h,children:[(0,r.jsx)(u.ZP,{}),(0,r.jsx)(A,{position:n.contextMenu,closeContextMenu:a}),t]})})};var y=C},7658:function(e,t,n){"use strict";n.d(t,{X:function(){return r}});var o=n(2265),a=n(3586);let r=()=>(0,o.useContext)(a.default)},9910:function(e,t,n){"use strict";n.d(t,{R:function(){return a},_:function(){return o}});let o="#11161a",a="#f3f4f9"}},function(e){e.O(0,[716,895,708,971,69,744],function(){return e(e.s=5564)}),_N_E=e.O()}]);