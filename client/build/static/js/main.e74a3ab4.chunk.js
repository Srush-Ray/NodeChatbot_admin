(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),r=n(31),c=n.n(r),i=(n(38),n(39),n(17)),o=n(2),l=n(4),d=n.n(l),u=n(9),j=n(11),h=n(12),b=n(14),m=n(13),f=n(16),x=n.n(f),O=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/api/all").then((function(e){return console.log(e),e})).catch((function(e){return console.log(e),{message:"Error. Please try again later."}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,x.a.post("/api/all/delete",t).then((function(e){return console.log(e),e})).catch((function(e){return console.log(e),{message:"Error. Please try again later."}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/api/all/quetype").then((function(e){return console.log(e),e})).catch((function(e){return console.log(e),{message:"Error. Please try again later."}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,x.a.post("/api/all/addnew",t).then((function(e){return console.log(e),e})).catch((function(e){return console.log(e),{message:"Error. Please try again later."}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=n(0),N=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(j.a)(this,n),(s=t.call(this,e)).state={errorText:s.props.text||""},s}return Object(h.a)(n,[{key:"render",value:function(){return Object(w.jsxs)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(w.jsx)("strong",{children:this.state.errorText}),Object(w.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",children:Object(w.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})}}]),n}(s.Component),y=(n(60),function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(j.a)(this,n),(s=t.call(this,e)).handleDelete=function(e){console.log("clicked",e.id);var t={id:e.id};window.confirm("Are you sure you wish to delete this item?")&&(p(t).then((function(e){console.log(e.data),e.data.error?alert(e.data.error):e.data.message&&(console.log(e),alert(e.data.message))})).catch((function(e){s.setState({text:"Nextwork Error"}),s.setState({gotError:!0})})),window.location.reload())},s.state={allrows:[],loading:!0,gotError:!1,text:""},s}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(d.a.mark((function e(){var t=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O().then((function(e){e.message?(console.log(e),t.setState({text:e.message}),t.setState({gotError:!0}),t.setState({loading:!1})):(console.log(e.data),t.setState({loading:!1}),t.setState({allrows:e.data}))})).catch((function(e){t.setState({text:"Nextwork Error"}),t.setState({gotError:!0})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(w.jsxs)("div",{children:[" ",Object(w.jsxs)("div",{className:"container",children:[Object(w.jsx)("div",{className:"row",children:Object(w.jsxs)("div",{className:"col-md-12 offset-md-0 mt-5",children:[Object(w.jsxs)("div",{className:"jumbotron",children:[Object(w.jsx)("h1",{className:"display-4 text-left",children:"Admin"}),Object(w.jsx)("p",{className:"lead font-italic text-left",children:"QUESTION - ANSWER TABLE"}),Object(w.jsx)("hr",{className:"my-4"}),Object(w.jsxs)("div",{className:"row d-flex align-items-center justify-content-center",children:[Object(w.jsx)("div",{className:"col-md-6",children:Object(w.jsxs)("button",{type:"button",className:"btn btn-dark col-md-12",children:[Object(w.jsx)("span",{className:"mr-2",children:Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-list",viewBox:"0 0 16 16",children:Object(w.jsx)("path",{fillRule:"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"})})}),Object(w.jsx)("span",{children:"List of unsatisfied questions"})]})}),Object(w.jsx)("div",{className:"col-md-3",children:Object(w.jsxs)(i.b,{to:"./addnew",children:[Object(w.jsx)("i",{className:"fas fa-plus"})," Add New Question"]})})]})]}),this.state.loading?Object(w.jsx)("div",{children:"Loading"}):Object(w.jsxs)("table",{className:"table table-borderless table-hover text-left",children:[Object(w.jsx)("thead",{className:"border-bottom font-weight-bold",children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"ID"}),Object(w.jsx)("th",{children:"Question"}),Object(w.jsx)("th",{children:"Answer"}),Object(w.jsx)("th",{children:"Viewed Count"}),Object(w.jsx)("th",{children:"Satisfied Count"}),Object(w.jsx)("th",{children:"Unsatisfied Count"}),Object(w.jsx)("th",{}),Object(w.jsx)("th",{})]})}),Object(w.jsx)("tbody",{children:this.state.allrows.map((function(t,n){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:t.id}),Object(w.jsx)("td",{children:t.question}),Object(w.jsx)("td",{children:t.answer}),Object(w.jsx)("td",{children:t.viewed}),Object(w.jsx)("td",{children:t.satisfied}),Object(w.jsx)("td",{children:t.unsatisfied}),Object(w.jsx)("td",{children:Object(w.jsx)("button",{type:"button",className:"AllQuestion_button",children:Object(w.jsx)("i",{className:"far fa-edit fa-lg"})})}),Object(w.jsx)("td",{children:Object(w.jsx)("button",{type:"button",className:"AllQuestion_button",onClick:function(){return e.handleDelete(t)},children:Object(w.jsx)("i",{className:"far fa-trash-alt fa-lg text-danger float-right"})})})]},"tr".concat(n))}))})]})]})}),this.state.gotError&&!this.state.loading&&Object(w.jsx)(N,{text:this.state.text})]})]})}}]),n}(s.Component)),C=n(33),q=(n(66),function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(j.a)(this,n),(s=t.call(this,e)).handleChange=function(e){e.preventDefault(),s.setState(Object(C.a)({},e.target.name,e.target.value))},s.handleSubmit=function(e){e.preventDefault();var t=new FormData(e.target),n={};n.question=t.get("question")||s.state.question,n.answer=t.get("answer")||s.state.answer,n.queType=t.get("queType")||s.state.queType,n.view=t.get("view")||s.state.view,n.satisfied=t.get("satisfied")||s.state.satisfied,n.unsatisfied=t.get("unsatisfied")||s.state.unsatisfied,console.log(n),v(n).then((function(e){console.log(e.data),e.data.error?alert(e.data.error):e.data.message&&(console.log(e),alert(e.data.message),setTimeout((function(){window.location.reload()}),2e3))})).catch((function(e){s.setState({text:"Nextwork Error"}),s.setState({gotError:!0})}))},s.state={loading:!0,gotError:!1,errorText:"",questypes:[],question:"",answer:"",view:"0",satisfied:"0",unsatisfied:"0",queType:""},s}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(d.a.mark((function e(){var t=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g().then((function(e){e.message?(console.log(e),t.setState({errorText:e.message}),t.setState({gotError:!0}),t.setState({loading:!1})):t.setState({questypes:e.data})})).catch((function(e){t.setState({errorText:"Nextwork Error"}),t.setState({gotError:!0})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(w.jsxs)("div",{className:"container",children:[Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"col-md-12 offset-md-0 mt-5",children:Object(w.jsxs)("div",{className:"jumbotron pb-4  ",children:[Object(w.jsx)("h1",{className:"display-4 text-left",children:"Admin"}),Object(w.jsx)("p",{className:"lead font-italic text-left",children:"QUESTION - ANSWER TABLE"}),Object(w.jsx)("hr",{className:"my-4"}),Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("div",{className:"col-6",children:Object(w.jsx)("h4",{children:"Add new question answer"})}),Object(w.jsx)("div",{className:"col-6 d-flex justify-content-end align-items-end",children:Object(w.jsx)("a",{href:"/",children:Object(w.jsx)("button",{type:"button",className:"btn btn-light",children:"GO BACK"})})})]})]})})}),Object(w.jsx)("div",{children:this.state.gotError&&!this.state.loading&&Object(w.jsx)(N,{text:this.state.errorText})}),Object(w.jsx)("div",{className:"row d-flex justify-content-center text-left ",children:Object(w.jsx)("div",{className:"col-md-11 col-12 NewQA_Row mb-5",children:this.state.loading?Object(w.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{className:"",htmlFor:"question",children:"Question*"}),Object(w.jsx)("input",{type:"text",className:"form-control",id:"question",name:"question",onChange:this.handleChange,required:!0,"aria-describedby":"question",placeholder:"Enter Question"})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{className:"",htmlFor:"question",children:"Answer*"}),Object(w.jsx)("textarea",{type:"text",required:!0,className:"form-control",onChange:this.handleChange,id:"answer",name:"answer","aria-describedby":"answer",placeholder:"Enter Answer"})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{className:"",htmlFor:"question",children:"Viewed Count (default zero)"}),Object(w.jsx)("input",{type:"number",min:"0",required:!0,className:"form-control",onChange:this.handleChange,id:"view",name:"view","aria-describedby":"view",defaultValue:"0",placeholder:"Enter Viewed Count"})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{className:"",htmlFor:"question",children:"Unsatisfied Count (default zero)"}),Object(w.jsx)("input",{type:"number",min:"0",required:!0,className:"form-control",id:"unsatisfied",onChange:this.handleChange,name:"unsatisfied",defaultValue:"0","aria-describedby":"unsatisfied",placeholder:"Enter Unsatisfied Count"})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{className:"",htmlFor:"question",children:"Satisfied Count (default zero)"}),Object(w.jsx)("input",{type:"number",min:"0",defaultValue:"0",className:"form-control",id:"satisfied",name:"satisfied",onChange:this.handleChange,required:!0,"aria-describedby":"satisfied",placeholder:"Enter Satisfied Count"})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"queType",children:"Example select"}),Object(w.jsxs)("select",{required:!0,className:"form-control",name:"queType",onChange:this.handleChange,id:"queType",children:[Object(w.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Select Question Type"}),this.state.questypes.map((function(e,t){return Object(w.jsx)("option",{value:e.typename,children:e.typename},e.id)}))]})]}),Object(w.jsxs)("button",{type:"submit",className:"btn btn-success col-5",children:[Object(w.jsx)("i",{class:"fas fa-database"})," Submit"]}),Object(w.jsx)("a",{href:"/",children:Object(w.jsx)("button",{type:"button",className:"btn btn-light ml-5 col-3",children:"Cancel"})})]}):Object(w.jsx)("div",{})})})]})}}]),n}(s.Component));var S=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(i.a,{children:Object(w.jsxs)(o.c,{children:[Object(w.jsx)(o.a,{path:"/",component:y,exact:!0}),Object(w.jsx)(o.a,{path:"/addnew",component:q})]})})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),r(e),c(e)}))};c.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(S,{})}),document.getElementById("root")),E()}},[[67,1,2]]]);
//# sourceMappingURL=main.e74a3ab4.chunk.js.map