(this["webpackJsonpuno-tracker"]=this["webpackJsonpuno-tracker"]||[]).push([[0],{53:function(e,t,n){"use strict";n.r(t);var r=n(10),c=n(0),a=n(7),s=n.n(a),i=n(39),o=n(23),l=function(e){var t,n=e.item,c=n.split(""),a=Object(o.a)(c,2),s=a[0],i=a[1];switch(s){case"b":t="blue";break;case"r":t="red";break;case"y":t="yellow";break;case"g":t="green";break;default:t="purple"}return Object(r.jsx)("div",{style:{display:"inline-block",width:"7.5vw",height:"7.5vw",backgroundColor:t,borderColor:"black",borderWidth:"10px",borderRadius:"10px",marginRight:"5px"},children:Object(r.jsx)("h2",{style:{textAlign:"center",color:"black"},children:"purple"===t?n:i})})},u=function(e){var t=e.playerName,n=e.prevCards,c=e.setSelectedPerson,a=e.selectedPerson;return Object(r.jsxs)("div",{style:{marginTop:"10px",marginBottom:"10px"},children:[Object(r.jsx)("div",{children:Object(r.jsx)("h1",{style:t===a?{color:"red"}:{},onClick:function(){return c(t)},children:t})}),0!==n.length?n.map((function(e){return console.log("card",e),Object(r.jsx)(l,{item:e})})):null]})},b=n(38),d=n(84),j=n(85),g=function(){var e=new b.a,t={Teta:[],Peter:[],Isaac:[],Jasmine:[],Mina:[]},n=Object(c.useState)(t),a=Object(o.a)(n,2),s=a[0],l=a[1],g=Object(c.useState)(),p=Object(o.a)(g,2),f=p[0],h=p[1],O=Object(c.useState)(),x=Object(o.a)(O,2),m=x[0],v=x[1];return Object(c.useEffect)((function(){null==e.get("uno-game")?e.set("uno-game",JSON.stringify(s)):l(e.get("uno-game"))}),[]),Object(c.useEffect)((function(){e.set("uno-game",JSON.stringify(s))}),[s]),Object(c.useEffect)((function(){return console.log("Uno game 2",s)}),[s]),Object(r.jsxs)("div",{children:[Object(r.jsx)(d.a,{variant:"outlined",label:"Card",onChange:function(e){return h(e.target.value)}}),Object(r.jsx)(j.a,{onClick:function(){if(null!=f&&null!=m){var e=s;e[m].length>=10?e[m].shift():e[m].push(f),l(Object(i.a)({},e))}},children:"Add Card"}),function(){var e=[];for(var t in s)e.push(Object(r.jsx)(u,{playerName:t,prevCards:s[t],setSelectedPerson:v,selectedPerson:m}));return e}(),Object(r.jsx)(j.a,{style:{position:"absolute",right:"10px",top:"10px"},onClick:function(){l(t),e.set("uno-game",JSON.stringify(t))},children:"Reset"})]})};s.a.render(Object(r.jsx)(g,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.49c8cff4.chunk.js.map