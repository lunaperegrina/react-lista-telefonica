(this["webpackJsonpreact-lista-telefonica"]=this["webpackJsonpreact-lista-telefonica"]||[]).push([[0],{359:function(e,t,n){},441:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(14),c=n.n(i),r=n(223),s=n.n(r),u=n(338),l=n(15),d=(n(359),n(224)),f=n.n(d),p=n(341),h=n.n(p).a.create({baseURL:"http://localhost:3003"}),m=n(76);function j(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1];function i(){return c.apply(this,arguments)}function c(){return(c=Object(u.a)(s.a.mark((function e(){var t,n,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/contatos").then((function(e){return e.data})).catch((function(e){console.error("ops! ocorreu um erro".concat(e))}));case 2:for(t=e.sent,n=[],o=0;o<t.length;o++)n.push(t[o]);a(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(o.useEffect)((function(){i()}),[]);var r=[{title:"Name",field:"name",validate:function(e){return void 0!==e.name&&""!==e.name||"Required"}},{title:"Email",field:"email",validate:function(e){return void 0!==e.email&&""!==e.email||"Required"}},{title:"Phone",field:"phone",validate:function(e){return void 0!==e.phone&&""!==e.phone||"Required"}}];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{align:"center",children:"Contatos"}),Object(m.jsx)("div",{className:"tabela-contatos",children:Object(m.jsx)(f.a,{title:"Student Details",columns:r,data:n,options:{actionsColumnIndex:-1,addRowPosition:"first"},editable:{onRowAdd:function(e){return new Promise((function(t,n){var o=e.name,a=e.email,c=e.phone;h.post("/contatos",{name:o,email:a,phone:c}),i(),t()}))},onRowUpdate:function(e,t){return new Promise((function(n,o){var a=e.name,c=e.email,r=e.phone;h.put("/contatos/".concat(t.id),{name:a,email:c,phone:r}).then((function(e){i(),n()}))}))},onRowDelete:function(e){return new Promise((function(t,n){h.delete("/contatos/".concat(e.id)).then((function(e){i(),t()}))}))}}})})]})}c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(j,{})}),document.getElementById("root"))}},[[441,1,2]]]);
//# sourceMappingURL=main.52c924a2.chunk.js.map