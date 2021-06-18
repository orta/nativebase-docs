(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{745:function(e,t,a){"use strict";var n=a(0),r=a(746);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},746:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},747:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(745),i=a(743),o=a(56),c=a.n(o);const s=37,d=39;t.a=function(e){const{lazy:t,block:a,defaultValue:o,values:m,groupId:f,className:p}=e,{tabGroupChoices:b,setTabGroupChoices:u}=Object(l.a)(),[h,v]=Object(n.useState)(o),x=n.Children.toArray(e.children);if(null!=f){const e=b[f];null!=e&&e!==h&&m.some(t=>t.value===e)&&v(e)}const g=e=>{v(e),null!=f&&u(f,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},p)},m.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case d:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e)},onFocus:()=>g(e),onClick:()=>{g(e)}},t))),t?Object(n.cloneElement)(x.filter(e=>e.props.value===h)[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},x.map((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h}))))}},748:function(e,t,a){"use strict";var n=a(742),r=a(0),l=a.n(r);t.a=function({children:e,hidden:t,className:a}){return l.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:a}),e)}},753:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return d})),a.d(t,"h",(function(){return p})),a.d(t,"a",(function(){return b})),a.d(t,"f",(function(){return u})),a.d(t,"i",(function(){return v})),a.d(t,"g",(function(){return g})),a.d(t,"e",(function(){return y})),a.d(t,"j",(function(){return w})),a.d(t,"c",(function(){return k}));var n=a(0),r=a.n(n);var l=({name:e,variants:t})=>(e=e.charAt(0).toUpperCase()+e.slice(1),r.a.createElement("div",null,r.a.createElement("h3",{style:{marginTop:"3rem"}},e),r.a.createElement("div",{style:{display:"grid",gridGap:"1rem",gridTemplateColumns:"repeat( auto-fit, minmax(200px, 1fr) )",marginTop:"1rem"}},Object.keys(t).map((a,n)=>r.a.createElement("div",{style:{display:"flex",flexDirection:"row"},key:`color-component-${a}-${n}`},r.a.createElement("div",{style:{width:"3rem",height:"3rem",backgroundColor:t[a],borderRadius:"0.375rem",marginRight:"0.5rem"}}),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("div",{style:{fontWeight:"bold"}},`${"Singletons"!==e?e:""} ${a.charAt(0).toUpperCase()+a.slice(1)}`),r.a.createElement("div",null,t[a])))))));const i={singletons:{white:"#FFFFFF",black:"#000000",lightText:"#FFFFFF",darkText:"#27272a"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},lightBlue:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},warmGray:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},trueGray:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},gray:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},dark:{50:"#18181b",100:"#27272a",200:"#3f3f46",300:"#52525b",400:"#71717a",500:"#a1a1aa",600:"#d4d4d8",700:"#e4e4e7",800:"#f4f4f5",900:"#fafafa"},coolGray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},blueGray:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}};var o=({})=>r.a.createElement("div",null,Object.keys(i).map((e,t)=>r.a.createElement(l,{variants:i[e],name:e,key:`space-block-${e}-${t}`})));var c=({name:e,value:t})=>r.a.createElement("div",{style:{display:"flex",alignItems:"flex-start",paddingTop:10,paddingBottom:10}},r.a.createElement("dt",{style:{lineHeight:1,width:"48px",flexShrink:0}},e),r.a.createElement("dd",{style:{lineHeight:"xs"!==t?1:void 0,fontSize:t,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",maxWidth:"600px",marginLeft:"20px"}},"The quick brown fox jumped over the lazy dog."));const s={xxs:10,xs:12,sm:14,md:16,lg:18,xl:20,"2xl":24,"3xl":30,"4xl":36,"5xl":48,"6xl":60,"7xl":72,"8xl":96,"9xl":128};var d=({})=>r.a.createElement("dl",{style:{backgroundColor:"#292d3e",borderRadius:4,padding:16,color:"white"}},Object.keys(s).map((e,t)=>r.a.createElement(c,{name:e,value:s[e],key:`space-component-${e}-${t}`})));var m=({name:e,value:t})=>r.a.createElement("tr",{style:{backgroundColor:"inherit"}},r.a.createElement("td",{style:{borderWidth:0,borderBottomWidth:1}},e),r.a.createElement("td",{style:{borderWidth:0,borderBottomWidth:1}},t),r.a.createElement("td",{style:{borderWidth:0,borderBottomWidth:1}},r.a.createElement("div",{style:{height:16,width:t,backgroundColor:"#4B3AB2"}})));const f={px:"1px",.5:"2px",1:"4px",1.5:"6px",2:"8px",2.5:"10px",3:"12px",3.5:"14px",4:"16px",5:"20px",6:"24px",7:"28px",8:"32px",9:"36px",10:"40px",12:"48px",16:"64px",20:"80px",24:"96px",32:"128px",40:"160px",48:"192px",56:"224px",64:"256px",72:"288px",80:"320px",96:"384px"};var p=({})=>r.a.createElement("table",{style:{borderRadius:4,padding:16,borderWidth:0}},r.a.createElement("thead",null,r.a.createElement("tr",{style:{borderWidth:0}},r.a.createElement("th",{style:{borderWidth:0}}," Value "),r.a.createElement("th",{style:{borderWidth:0}}," Pixels "),r.a.createElement("th",{style:{borderWidth:0}},"Representation"))),r.a.createElement("tbody",null,Object.keys(f).map((e,t)=>r.a.createElement(m,{name:e,value:f[e],key:`space-component-${e}-${t}`}))));var b=()=>r.a.createElement("div",{className:"label android"},"Android");function u(){return r.a.createElement("div",{className:"kichen-sink-iframe mx-auto"},r.a.createElement("svg",{class:"kichen-sink-iframe-notch",viewBox:"0 0 219 31"},r.a.createElement("path",{d:"M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z","fill-rule":"evenodd"})),r.a.createElement("iframe",{loading:"lazy",importance:"low",frameBorder:"0",className:"kichen-sink-iframe-iframe",src:"https://kitchen-sink.vercel.app/"}))}var h=a(756);function v({title:e,description:t,className:a="",url:n,imgSrc:l,imgStyle:i,titleClassName:o="text-white",descriptionClassName:c="text-gray-100"}){return r.a.createElement(h.a,{to:n,className:"relative overflow-hidden no-underline col col--5 rounded-md pt-6 px-4 shadow-2xl mx-2 mb-2 "+a},r.a.createElement("div",{className:"font-bold text-md mb-2 "+o},e),r.a.createElement("p",{className:" text-sm leading-5 "+c},t),r.a.createElement("div",{className:"absolute h-20 w-20",style:i||{right:-20,top:-10}},l&&r.a.createElement("img",{src:l})))}var x=a(749);function g(){const{isDarkTheme:e}=Object(x.a)(),t=e?"":"text-white",a=e?"border-blueGray-100":"border-blueGray-200",n=e?"bg-blueGray-600":"bg-blueGray-500",l=e?"bg-cyan-700":"bg-cyan-500";return r.a.createElement("div",{className:"border-0 border-l-4 border-solid "+t+" "+a},r.a.createElement("div",{className:"flex items-center"},r.a.createElement("div",{className:"w-5 h-5 rounded-full "+l,style:{marginLeft:"-12px"}}),r.a.createElement("div",{className:"ml-8 py-5 px-6 shadow-xl rounded-md "+l,style:{maxWidth:"100%",width:"100%"}},r.a.createElement("h4",null,"NativeBase v3"),r.a.createElement("span",null,"We wanted to make NativeBase the go-to component library for anyone building with React Native. This version is accessible, highly customisable and consistent across android, iOS & web. That's not all though, read on for the full benefits of using v3."))),r.a.createElement("div",{className:"flex items-center mt-8"},r.a.createElement("div",{className:"w-5 h-5 bg-gray-500 rounded-full",style:{marginLeft:"-12px"}}),r.a.createElement("div",{className:"ml-8 py-5 px-6 shadow-xl rounded-md "+n,style:{maxWidth:"100%",width:"100%"}},r.a.createElement("h4",null,"NativeBase v2"),r.a.createElement("span",null,"The second version was released with new components, preset themes, unified icons & more. The main focus of v2 was to make components easy to theme with very few modifications. From v2.4.1 onwards, NativeBase also included support for the web."))),r.a.createElement("div",{className:"flex items-center mt-8"},r.a.createElement("div",{className:"w-5 h-5 bg-gray-500 rounded-full",style:{marginLeft:"-12px"}}),r.a.createElement("div",{className:"ml-8 py-5 px-6 shadow-xl rounded-md "+n,style:{maxWidth:"100%",width:"100%"}},r.a.createElement("h4",null,"NativeBase v1"),r.a.createElement("span",null,"NativeBase started out as an open source framework that enabled developers to build high-quality mobile apps using React Native. The first version included UITabBar on iOS and Drawer on Android. NativeBase v1 was very well-received by the dev community."))))}function y(){const{isDarkTheme:e}=Object(x.a)(),t=e?"bg-blueGray-700":"bg-gray-600";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row -m-2"},r.a.createElement(v,{title:"Install in Expo project",url:"install-expo",description:"Follow this guide to install NativeBase in your existing or new Expo project",className:"mt-2 "+t,imgSrc:"/img/expo.svg",imgStyle:{top:50,right:-310,width:400,height:400,opacity:.1}}),r.a.createElement(v,{title:"Install in React Native CLI project",url:"install-rn",description:"Follow this guide to install NativeBase in your existing or new React Native CLI inititiated project",className:"mt-2 "+t,imgSrc:"/img/react-native.svg",imgStyle:{bottom:-50,right:-40,height:140,width:140,opacity:.1}})),r.a.createElement("div",{className:"mt-2 -m-2 row"},r.a.createElement(v,{title:"Install in NextJS project",url:"install-next",description:"Follow this guide to install NativeBase in your existing or new React Native CLI inititiated project",className:"mt-2 "+t,imgSrc:"/img/next.svg",imgStyle:{bottom:-180,right:-90,height:260,width:260,opacity:.1}}),r.a.createElement(v,{title:"Install in Create React App project",url:"install-cra",description:"Follow this guide to install NativeBase in your existing or new React Native CLI inititiated project",className:"mt-2 "+t,imgSrc:"/img/cra.svg",imgStyle:{bottom:-62,right:-45,height:165,width:165,opacity:.1}})))}var E=a(752);function w(){return n.createElement(E.NativeBaseProvider,null,n.createElement(E.Box,{bg:"primary.600",py:4,px:3,rounded:"md",alignSelf:"center",width:375,maxWidth:"100%"},n.createElement(E.HStack,{justifyContent:"space-between"},n.createElement(E.Box,{justifyContent:"space-between"},n.createElement(E.VStack,{space:2},n.createElement(E.Text,{fontSize:"sm",color:"white"},"Today @ 9PM"),n.createElement(E.Text,{color:"white",fontSize:"lg"},"Let's talk about avatar!")),n.createElement(E.Pressable,{rounded:"sm",bg:"primary.500",alignSelf:"flex-start",py:2,px:3},n.createElement(E.Text,{textTransform:"uppercase",fontSize:"sm",fontWeight:"bold",color:"white"},"Remind me"))),n.createElement(E.Image,{source:{uri:"https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg"},alt:"Aang flying and surrounded by clouds",height:100,rounded:"full",width:100}))))}var N=a(763),j=a(754);const O=j.REPO_LINK+"/tree/"+j.REPO_BRANCH;function k({name:e,componentName:t,fileName:a}){var n;return a=null!==(n=a)&&void 0!==n?n:e,r.a.createElement(E.VStack,{space:4,style:{"--ifm-link-hover-decoration":"none"}},r.a.createElement(E.Box,{rounded:"md"},r.a.createElement(E.Text,null,"NativeBase ships with a default theme for each component."," ",r.a.createElement(E.Link,{_text:{textDecorationLine:"none"},href:O+"/src/theme/components/"+a+".ts",isExternal:!0},r.a.createElement(E.Text,{borderBottomWidth:"2px",_hover:{bg:"secondary.200",color:"black",borderColor:"gray.900"},borderStyle:"dashed",rounded:"md",p:1,borderColor:"secondary.300"},"Checkout the default theme of ",e)))),r.a.createElement(E.Heading,{size:"sm"},"We can easily extend the ",e," component theme using extendTheme function as shown below."),r.a.createElement(N.a,{className:"language-jsx"},(e=>`\nimport { extendTheme, NativeBaseProvider } from "native-base";\n\nconst theme = extendTheme({\n    components: {\n        ${e}: {\n            baseStyle: {},\n            defaultProps: {},\n            variants: {},\n            sizes: {},\n        }\n    } \n});\n\nfunction MyApp() {\n    return (\n        <NativeBaseProvider theme={theme}>\n            {/* Rest of the app goes here */}\n        </NativeBaseProvider>\n    )\n}\n`)(null!=t?t:e[0].toUpperCase()+e.slice(1,e.length))),r.a.createElement(E.Link,{_text:{textDecorationLine:"none"},href:"customizingComponents"},r.a.createElement(E.Text,{borderBottomWidth:"2px",_hover:{bg:"secondary.200",color:"black",borderColor:"gray.900"},borderStyle:"dashed",rounded:"md",p:1,borderColor:"secondary.300",fontWeight:"bold"},"Read more about extending component theme here.")))}},754:function(e,t){e.exports={REPO_LINK:"https://github.com/GeekyAnts/NativeBase",REPO_BRANCH:"v3-pre-beta"}},759:function(e,t){},77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return m})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(741)),i=a(747),o=a(748),c=a(753),s={id:"install-expo",title:"Install in Expo project"},d={unversionedId:"install-expo",id:"install-expo",isDocsHomePage:!1,title:"Install in Expo project",description:"Expo helps you to create universal (iOS, Android and Web) React Native apps with no build configuration.",source:"@site/docs/install-expo.mdx",slug:"/install-expo",permalink:"/next/install-expo",editUrl:"https://github.com/nativebase/website/tree/main/docs/install-expo.mdx",version:"current",sidebar:"componentsSidebar",previous:{title:"FAQ's",permalink:"/next/faq"},next:{title:"Install in React Native CLI initiated project",permalink:"/next/install-rn"}},m=[{value:"Create a new expo project",id:"create-a-new-expo-project",children:[]},{value:"Install dependencies",id:"install-dependencies",children:[]},{value:"Run the Hello world example",id:"run-the-hello-world-example",children:[]}],f={toc:m};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},f,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Expo helps you to create universal (iOS, Android and Web) React Native apps with no build configuration."),Object(l.b)("h3",{id:"create-a-new-expo-project"},"Create a new expo project"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install --global expo-cli\nexpo init my-project\ncd my-project/\n")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.expo.io/"}),"Refer this link")," for additional information on\xa0Expo and setting up an Expo starter app."),Object(l.b)("h3",{id:"install-dependencies"},"Install dependencies"),Object(l.b)(i.a,{defaultValue:"yarn",values:[{label:"yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add native-base@next styled-components styled-system\n"))),Object(l.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install native-base@next styled-components styled-system\n")))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"expo install react-native-svg\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"expo install react-native-safe-area-context\n")),Object(l.b)("h3",{id:"run-the-hello-world-example"},"Run the Hello world example"),Object(l.b)("p",null,"Put the below code in your App.js"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { NativeBaseProvider, Box } from 'native-base';\n\nfunction App() {\n  return (\n    <NativeBaseProvider>\n      <Box>Hello world</Box>\n    </NativeBaseProvider>\n  );\n}\n")),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)("img",{src:"/img/minion.gif",alt:"minions clapping"})),Object(l.b)("div",{className:"tailwind"},Object(l.b)("div",{className:"mt-4 mb-8"},Object(l.b)("div",{className:"row"},Object(l.b)(c.i,{title:"Customize NativeBaseProvider",url:"setup-provider",description:"NativeBaseProvider provides theme throughout your application",className:"bg-blueGray-600 mt-2",mdxType:"TileLink"}),Object(l.b)(c.i,{title:"Theme",url:"default-theme",description:"Read more about the default NativeBase theme and how to override it",className:"bg-blueGray-600  mt-2",mdxType:"TileLink"})),Object(l.b)("div",{className:"row mt-2"},Object(l.b)(c.i,{title:"Utility props",url:"utility-props",description:"Shorthands of commonly used styling props which maps with the provided theme",className:"bg-blueGray-600",mdxType:"TileLink"})))))}p.isMDXComponent=!0}}]);