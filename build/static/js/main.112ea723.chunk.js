(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(7),o=n.n(r),s=(n(14),n(9)),i=n(5),d=n(2),l=n(0),j=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(l.jsx)("button",{className:"btn",style:{backgroundColor:t},onClick:c,children:n})};j.defaultPropTypes={color:"steelBlue"};var u=j,b=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(l.jsxs)("header",{children:[Object(l.jsx)("h2",{children:t}),Object(l.jsx)(u,{color:c?"red":"green",text:c?"close window":"create task",onClick:n})]})};b.defaultProps={title:"Line UP Uganda"};var O=b,h=n(8),x=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(l.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(l.jsxs)("h3",{children:[t.text,Object(l.jsx)(h.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(l.jsx)("p",{children:t.day})]})},m=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(l.jsx)("div",{className:"container",children:t.map((function(e){return Object(l.jsx)(x,{task:e,onDelete:n,onToggle:c},e.id)}))})},f=function(e){var t=e.onAdd,n=Object(c.useState)(""),a=Object(d.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)(""),i=Object(d.a)(s,2),j=i[0],u=i[1],b=Object(c.useState)(!1),O=Object(d.a)(b,2),h=O[0],x=O[1];return Object(l.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),r?(t({text:r,day:j,reminder:h}),o(""),u(""),x(!1)):alert("Please add a task")},children:[Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{children:"Title"}),Object(l.jsx)("input",{type:"text",placeholder:"Add task",value:r,onChange:function(e){return o(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{children:"Day"}),Object(l.jsx)("input",{type:"date",placeholder:"select date",value:j,onChange:function(e){return u(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-control-check",children:[Object(l.jsx)("label",{children:"Reminder"}),Object(l.jsx)("input",{type:"checkbox",value:h,checked:h,onChange:function(e){return x(e.currentTarget.checked)}})]}),Object(l.jsx)("input",{type:"submit",value:"save",className:"btn btn-block"})]})},g=function(){return Object(l.jsx)("div",{className:"Footer",children:Object(l.jsx)("p",{children:"2021 \xa9 lineup Uganda "})})},p=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([{id:1,text:"Organize notes & update my drive",day:"Feb 11 at 4:00pm",reminder:!0},{id:2,text:"Meeting at work",day:"Feb 19 at 10:00am",reminder:!0},{id:3,text:"Gadget shopping",day:"Feb 13 at 11:00am",reminder:!0}]),o=Object(d.a)(r,2),j=o[0],u=o[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(O,{onAdd:function(){return a(!n)},showAdd:n}),n&&Object(l.jsx)(f,{onAdd:function(e){var t=Math.floor(100*Math.random()+1),n=Object(i.a)({id:t},e);u([n].concat(Object(s.a)(j)))}}),j.length>0?Object(l.jsx)(m,{tasks:j,onDelete:function(e){u(j.filter((function(t){return t.id!==e})))},onToggle:function(e){u(j.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))}}):"No tasks available",Object(l.jsx)(g,{})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.112ea723.chunk.js.map