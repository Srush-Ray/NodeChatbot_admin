(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(32),c=n.n(r),o=(n(38),n(39),n(16)),i=n(3),l=n(2),d=n.n(l),u=n(5),j=n(11),h=n(12),b=n(14),m=n(13),f=n(10),x=n.n(f),p=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/api/all").then((function(e){return console.log(e),e})).catch((function(e){return console.log(e),{message:"Error. Please try again later."}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,x.a.post("/api/all/delete",t).then((function(e){return console.log(e),e})).catch((function(e){return console.log(e),{message:"Error. Please try again later."}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/api/all/quetype").then((function(e){return console.log(e),e})).catch((function(e){return console.log(e),{message:"Error. Please try again later."}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,x.a.post("/api/all/addnew",t).then((function(e){return console.log(e),e})).catch((function(e){return console.log(e),{message:"Error. Please try again later."}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,x.a.post("/api/all/deleteUnsat",t).then((function(e){return console.log(e),e})).catch((function(e){return console.log(e),{message:"Error. Please try again later."}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/api/all/unsatQ").then((function(e){return console.log(e),e})).catch((function(e){return console.log(e),{message:"Error. Please try again later."}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,x.a.post("/api/all/addquesType",t).then((function(e){return console.log(e),e})).catch((function(e){return console.log(e),{message:"Error. Please try again later."}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,x.a.post("/api/all/editqa",t).then((function(e){return console.log(e),e})).catch((function(e){return console.log(e),{message:"Error. Please try again later."}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/api/all/countUnsat").then((function(e){return console.log(e),e})).catch((function(e){return console.log(e),{message:"Error. Please try again later."}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,x.a.post("/api/all/deleteQtype",t).then((function(e){return console.log(e),e})).catch((function(e){return console.log(e),{message:"Error. Please try again later."}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=n(0),T=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={errorText:a.props.text||""},a}return Object(h.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(C.jsx)("strong",{children:this.state.errorText}),Object(C.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",children:Object(C.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})}}]),n}(a.Component),k=(n(60),n(18)),A=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).handleChange=function(e){e.preventDefault(),a.setState(Object(k.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=new FormData(e.target),n={};n.questionNew=t.get("questionNew")||a.state.qa.question,n.answerNew=t.get("answerNew")||a.state.qa.answer,n.qid=a.state.qa.id,console.log(n),q(n).then((function(t){console.log(t.data),t.data.error?alert(t.data.error):t.data.message&&(console.log(t),alert(t.data.message),setTimeout((function(){e.target.reset()}),1500))})).catch((function(e){a.setState({text:"Nextwork Error"}),a.setState({gotError:!0})}))},a.state={loading:!0,gotError:!1,errorText:"",qa:a.props.qa,questionNew:"",answerNew:"",isShow:a.props.isVisible},a}return Object(h.a)(n,[{key:"render",value:function(){return Object(C.jsx)("div",{children:Object(C.jsx)("div",{className:"container",children:Object(C.jsx)("div",{className:"row",children:Object(C.jsxs)("div",{className:"col-md-12 offset-md-0 mt-5",children:[Object(C.jsxs)("div",{className:"jumbotron",children:[Object(C.jsx)("h1",{className:"display-4 text-left",children:"Admin"}),Object(C.jsx)("p",{className:"lead font-italic text-left",children:"Update QUESTION - ANSWER"}),Object(C.jsx)("hr",{className:"my-4"})]}),Object(C.jsx)("div",{className:"row d-flex justify-content-center text-left ",children:Object(C.jsx)("div",{className:"col-md-11 col-12 NewQA_Row mb-5",children:Object(C.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{className:"",htmlFor:"question",children:"Question*"}),Object(C.jsx)("input",{type:"text",placeholder:this.state.qa.question,className:"form-control",id:"questionNew",name:"questionNew",onChange:this.handleChange,"aria-describedby":"question"})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{className:"",htmlFor:"question",children:"Answer*"}),Object(C.jsx)("textarea",{type:"text",placeholder:this.state.qa.answer,className:"form-control",onChange:this.handleChange,id:"answerNew",name:"answerNew","aria-describedby":"answer"})]}),Object(C.jsxs)("button",{type:"submit",className:"btn btn-success col-5",children:[Object(C.jsx)("i",{class:"fas fa-database"})," Submit"]}),Object(C.jsx)("a",{href:"/",children:Object(C.jsx)("button",{type:"button",className:"btn btn-light ml-5 col-3",children:"Cancel/Back"})})]})})})]})})})})}}]),n}(a.Component),D=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).handleDelete=function(e){var t={id:e.id};window.confirm("Are you sure you wish to delete this item?")&&O(t).then((function(e){console.log(e.data),e.data.error?alert(e.data.error):e.data.message&&(console.log(e),alert(e.data.message),window.location.reload())})).catch((function(e){a.setState({text:"Nextwork Error"}),a.setState({gotError:!0})}))},a.state={allrows:[],loading:!0,gotError:!1,isAboutVisible:!1,text:"",editItem:{}},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(d.a.mark((function e(){var t=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p().then((function(e){e.message?(console.log(e),t.setState({text:e.message}),t.setState({gotError:!0}),t.setState({loading:!1})):(console.log(e.data),t.setState({loading:!1}),t.setState({allrows:e.data}))})).catch((function(e){t.setState({text:"Nextwork Error"}),t.setState({gotError:!0})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(C.jsxs)("div",{children:[" ",Object(C.jsx)("div",{className:"container",children:this.state.isAboutVisible?Object(C.jsx)(A,{qa:this.state.editItem,isVisible:this.state.isAboutVisible}):Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:"row",children:Object(C.jsxs)("div",{className:"col-md-12 offset-md-0 mt-5",children:[Object(C.jsxs)("div",{className:"jumbotron",children:[Object(C.jsx)("h1",{className:"display-4 text-left",children:"Admin"}),Object(C.jsx)("p",{className:"lead font-italic text-left",children:"QUESTION - ANSWER TABLE"}),Object(C.jsx)("hr",{className:"my-4"}),Object(C.jsxs)("div",{className:"row d-flex align-items-center justify-content-center",children:[Object(C.jsx)("div",{className:"col-md-6",children:Object(C.jsx)(o.b,{to:"./unsatQ",children:Object(C.jsxs)("button",{type:"button",className:"btn btn-dark col-md-12",children:[Object(C.jsx)("span",{className:"mr-2",children:Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-list",viewBox:"0 0 16 16",children:Object(C.jsx)("path",{fillRule:"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"})})}),Object(C.jsx)("span",{children:"List of unsatisfied questions"})]})})}),Object(C.jsx)("div",{className:"col-md-3",children:Object(C.jsxs)(o.b,{to:"./addnew",className:"btn btn-outline-success",children:[Object(C.jsx)("i",{className:"fas fa-plus"})," Add New Question"]})})]})]}),this.state.loading?Object(C.jsx)("div",{children:"Loading"}):Object(C.jsxs)("table",{className:"table table-borderless table-hover text-left",children:[Object(C.jsx)("thead",{className:"border-bottom font-weight-bold",children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"ID"}),Object(C.jsx)("th",{children:"Question"}),Object(C.jsx)("th",{children:"Answer"}),Object(C.jsx)("th",{children:"Viewed Count"}),Object(C.jsx)("th",{children:"Satisfied Count"}),Object(C.jsx)("th",{children:"Unsatisfied Count"}),Object(C.jsx)("th",{}),Object(C.jsx)("th",{})]})}),Object(C.jsx)("tbody",{children:this.state.allrows.map((function(t,n){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:t.id}),Object(C.jsx)("td",{children:t.question}),Object(C.jsx)("td",{children:t.answer}),Object(C.jsx)("td",{children:t.viewed}),Object(C.jsx)("td",{children:t.satisfied}),Object(C.jsx)("td",{children:t.unsatisfied}),Object(C.jsx)("td",{children:Object(C.jsx)("button",{type:"button",onClick:function(){e.setState({isAboutVisible:!0}),e.setState({editItem:t})},className:"AllQuestion_button",children:Object(C.jsx)("i",{className:"far fa-edit fa-lg"})})}),Object(C.jsx)("td",{children:Object(C.jsx)("button",{type:"button",className:"AllQuestion_button",onClick:function(){return e.handleDelete(t)},children:Object(C.jsx)("i",{className:"far fa-trash-alt fa-lg text-danger float-right"})})})]},"tr".concat(n))}))})]})]})}),this.state.gotError&&!this.state.loading&&Object(C.jsx)(T,{text:this.state.text})]})})]})}}]),n}(a.Component),Q=(n(66),function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).handleChange=function(e){e.preventDefault(),a.setState(Object(k.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=new FormData(e.target),n={};n.question=t.get("question")||a.state.question,n.answer=t.get("answer")||a.state.answer,n.queType=t.get("queType")||a.state.queType,n.view=t.get("view")||a.state.view,n.satisfied=t.get("satisfied")||a.state.satisfied,n.unsatisfied=t.get("unsatisfied")||a.state.unsatisfied,console.log(n),w(n).then((function(t){console.log(t.data),t.data.error?alert(t.data.error):t.data.message&&(console.log(t),alert(t.data.message),setTimeout((function(){a.loadData(),e.target.reset()}),2e3))})).catch((function(e){a.setState({text:"Nextwork Error"}),a.setState({gotError:!0})}))},a.handleDeleteQtype=function(e){window.confirm("Are you sure you wish to delete this item?")&&E(e).then((function(e){console.log(e.data),e.data.error?alert(e.data.error):e.data.message&&(console.log(e),alert(e.data.message),a.loadData())})).catch((function(e){a.setState({text:"Nextwork Error"}),a.setState({gotError:!0})}))},a.handleSubmitQueType=function(e){e.preventDefault();var t=new FormData(e.target),n={};n.queTypeNew=t.get("queTypeNew")||a.state.queTypeNew,y(n).then((function(t){console.log(t.data),t.data.error?alert(t.data.error):t.data.message&&(console.log(t),alert(t.data.message),setTimeout((function(){a.loadData(),e.target.reset()}),1500))})).catch((function(e){a.setState({text:"Nextwork Error"}),a.setState({gotError:!0})}))},a.state={loading:!0,gotError:!1,errorText:"",questypes:[],question:"",answer:"",view:"0",satisfied:"0",unsatisfied:"0",queType:"",queTypeNew:"",countOfUnsat:[]},a}return Object(h.a)(n,[{key:"loadData",value:function(){var e=Object(u.a)(d.a.mark((function e(){var t=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g().then((function(e){e.message?(console.log(e),t.setState({errorText:e.message}),t.setState({gotError:!0}),t.setState({loading:!1})):t.setState({questypes:e.data})})).catch((function(e){t.setState({errorText:"Nextwork Error"}),t.setState({gotError:!0})}));case 2:return e.next=4,S().then((function(e){e.message?(console.log(e),t.setState({errorText:e.message}),t.setState({gotError:!0}),t.setState({loading:!1})):t.setState({countOfUnsat:e.data})})).catch((function(e){t.setState({errorText:"Nextwork Error"}),t.setState({gotError:!0})}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this;return Object(C.jsxs)("div",{className:"container",children:[Object(C.jsx)("div",{className:"row",children:Object(C.jsx)("div",{className:"col-md-12 offset-md-0 mt-5",children:Object(C.jsxs)("div",{className:"jumbotron pb-4  ",children:[Object(C.jsx)("h1",{className:"display-4 text-left",children:"Admin"}),Object(C.jsx)("p",{className:"lead font-italic text-left",children:"QUESTION - ANSWER TABLE"}),Object(C.jsx)("hr",{className:"my-4"}),Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("div",{className:"col-6",children:Object(C.jsx)("h4",{children:"Add new question answer"})}),Object(C.jsx)("div",{className:"col-6 d-flex justify-content-end align-items-end",children:Object(C.jsx)("a",{href:"/",children:Object(C.jsx)("button",{type:"button",className:"btn btn-light",children:"GO BACK"})})})]})]})})}),Object(C.jsx)("div",{children:this.state.gotError&&!this.state.loading&&Object(C.jsx)(T,{text:this.state.errorText})}),Object(C.jsx)("div",{className:"row d-flex justify-content-center text-left ",children:Object(C.jsx)("div",{className:"col-md-11 col-12 NewQA_Row mb-5",children:this.state.loading?Object(C.jsxs)("div",{children:[Object(C.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{className:"",htmlFor:"question",children:"Question*"}),Object(C.jsx)("input",{type:"text",className:"form-control",id:"question",name:"question",onChange:this.handleChange,required:!0,"aria-describedby":"question",placeholder:"Enter Question"})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{className:"",htmlFor:"question",children:"Answer*"}),Object(C.jsx)("textarea",{type:"text",required:!0,className:"form-control",onChange:this.handleChange,id:"answer",name:"answer","aria-describedby":"answer",placeholder:"Enter Answer"})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{className:"",htmlFor:"question",children:"Viewed Count (default zero)"}),Object(C.jsx)("input",{type:"number",min:"0",required:!0,className:"form-control",onChange:this.handleChange,id:"view",name:"view","aria-describedby":"view",defaultValue:"0",placeholder:"Enter Viewed Count"})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{className:"",htmlFor:"question",children:"Unsatisfied Count (default zero)"}),Object(C.jsx)("input",{type:"number",min:"0",required:!0,className:"form-control",id:"unsatisfied",onChange:this.handleChange,name:"unsatisfied",defaultValue:"0","aria-describedby":"unsatisfied",placeholder:"Enter Unsatisfied Count"})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{className:"",htmlFor:"question",children:"Satisfied Count (default zero)"}),Object(C.jsx)("input",{type:"number",min:"0",defaultValue:"0",className:"form-control",id:"satisfied",name:"satisfied",onChange:this.handleChange,required:!0,"aria-describedby":"satisfied",placeholder:"Enter Satisfied Count"})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:"queType",children:"Example select"}),Object(C.jsx)("p",{className:"p-0 m-0",children:Object(C.jsx)("small",{children:"If you do not find question type add a new one."})}),Object(C.jsxs)("select",{required:!0,className:"form-control",name:"queType",onChange:this.handleChange,id:"queType",children:[Object(C.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Select Question Type"}),this.state.questypes.map((function(e,t){return Object(C.jsx)("option",{value:e.typename,children:e.typename},e.id)}))]})]}),Object(C.jsxs)("button",{type:"submit",className:"btn btn-success col-5",children:[Object(C.jsx)("i",{class:"fas fa-database"})," Submit"]}),Object(C.jsx)("a",{href:"/",children:Object(C.jsx)("button",{type:"button",className:"btn btn-light ml-5 col-3",children:"Cancel/Back"})})]}),Object(C.jsx)("hr",{className:"NewQA_hr"}),Object(C.jsx)("h5",{children:"Current question types"}),Object(C.jsx)("small",{style:{color:"red"},children:"Deleting question type will delete related questions from database"}),Object(C.jsxs)("table",{className:"table table-borderless table-hover text-left",children:[Object(C.jsx)("thead",{className:"border-bottom font-weight-bold",children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"Question Type"}),Object(C.jsx)("th",{children:"Count of question in database"}),Object(C.jsx)("th",{})]})}),Object(C.jsx)("tbody",{children:this.state.countOfUnsat.map((function(t,n){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:t.typename}),Object(C.jsx)("td",{children:t.count})," ",Object(C.jsx)("td",{children:Object(C.jsx)("button",{type:"button",className:"AllQuestion_button",onClick:function(){return e.handleDeleteQtype(t)},children:Object(C.jsx)("i",{className:"far fa-trash-alt fa-lg text-danger float-right"})})})]},"tr".concat(n))}))})]}),Object(C.jsx)("hr",{className:"NewQA_hr"}),Object(C.jsx)("h5",{children:"Add new question type"}),Object(C.jsxs)("form",{onSubmit:this.handleSubmitQueType,children:[Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{className:"",htmlFor:"questionType",children:"Question Type"}),Object(C.jsx)("input",{type:"text",className:"form-control",id:"queTypeNew",name:"queTypeNew",onChange:this.handleChange,required:!0,"aria-describedby":"questionType",placeholder:"Enter Question Type"})]}),Object(C.jsx)("button",{type:"sumbit",className:"btn btn-success ",children:"ADD"})]})]}):Object(C.jsx)("div",{})})})]})}}]),n}(a.Component)),F=(n(67),function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).handleDelete=function(e){var t={id:e.id};window.confirm("Are you sure you wish to delete this item?")&&N(t).then((function(e){console.log(e.data),e.data.error?alert(e.data.error):e.data.message&&(console.log(e),alert(e.data.message),setTimeout((function(){a.loadData()}),1500))})).catch((function(e){a.setState({text:"Nextwork Error"}),a.setState({gotError:!0})}))},a.state={allrows:[],loading:!0,gotError:!1,text:""},a}return Object(h.a)(n,[{key:"loadData",value:function(){var e=Object(u.a)(d.a.mark((function e(){var t=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v().then((function(e){e.message?(console.log(e),t.setState({text:e.message}),t.setState({gotError:!0}),t.setState({loading:!1})):(console.log(e.data),t.setState({loading:!1}),t.setState({allrows:e.data}))})).catch((function(e){t.setState({text:"Nextwork Error"}),t.setState({gotError:!0})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this;return Object(C.jsx)("div",{children:Object(C.jsxs)("div",{children:[" ",Object(C.jsxs)("div",{className:"container",children:[Object(C.jsx)("div",{className:"row",children:Object(C.jsxs)("div",{className:"col-md-12 offset-md-0 mt-5",children:[Object(C.jsxs)("div",{className:"jumbotron",children:[Object(C.jsx)("h1",{className:"display-4 text-left",children:"Admin"}),Object(C.jsx)("p",{className:"lead font-italic text-left",children:"UNSATISFIED QUESTION - ANSWER TABLE"}),Object(C.jsx)("hr",{className:"my-4"}),Object(C.jsx)("div",{className:"row d-flex align-items-center justify-content-center",children:Object(C.jsx)("div",{className:"col-md-6",children:Object(C.jsx)("a",{href:"/",children:Object(C.jsxs)("button",{type:"button",className:"btn btn-dark col-md-12",children:[Object(C.jsx)("span",{className:"mr-2",children:Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-list",viewBox:"0 0 16 16",children:Object(C.jsx)("path",{fillRule:"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"})})}),Object(C.jsx)("span",{children:"List of all questions"})]})})})})]}),this.state.loading?Object(C.jsx)("div",{children:"Loading"}):Object(C.jsxs)("table",{className:"table table-borderless table-hover text-left",children:[Object(C.jsx)("thead",{className:"border-bottom font-weight-bold",children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"ID"}),Object(C.jsx)("th",{children:"Question"}),Object(C.jsx)("th",{children:"AnswerID"}),Object(C.jsx)("th",{})]})}),Object(C.jsx)("tbody",{children:this.state.allrows.map((function(t,n){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:t.id}),Object(C.jsx)("td",{children:t.question}),Object(C.jsx)("td",{children:t.qid}),Object(C.jsx)("td",{children:Object(C.jsx)("button",{type:"button",className:"UnsatQ_button",onClick:function(){return e.handleDelete(t)},children:Object(C.jsx)("i",{className:"far fa-trash-alt fa-lg text-danger float-right"})})})]},"tr".concat(n))}))})]})]})}),this.state.gotError&&!this.state.loading&&Object(C.jsx)(T,{text:this.state.text})]})]})})}}]),n}(a.Component));var I=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(o.a,{children:Object(C.jsxs)(i.c,{children:[Object(C.jsx)(i.a,{path:"/",component:D,exact:!0}),Object(C.jsx)(i.a,{path:"/addnew",component:Q}),Object(C.jsx)(i.a,{path:"/unsatQ",component:F})]})})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};c.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(I,{})}),document.getElementById("root")),U()}},[[68,1,2]]]);
//# sourceMappingURL=main.346beb56.chunk.js.map