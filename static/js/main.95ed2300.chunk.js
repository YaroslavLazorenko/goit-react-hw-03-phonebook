(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports={form:"ContactForm_form__eXeNR",label:"ContactForm_label__ljADp",inputField:"ContactForm_inputField__3MkU4",button:"ContactForm_button__vykq0"}},function(t,e,n){t.exports={contactItem:"ContactItem_contactItem__xCvRI",contactText:"ContactItem_contactText__y4kX8",button:"ContactItem_button__3U27G"}},,,function(t,e,n){t.exports={title:"Filter_title__3OYTn",inputField:"Filter_inputField__1hW6J"}},,,function(t,e,n){t.exports={list:"ContactList_list__1To6Z"}},,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),s=(n(19),n(8)),i=n(2),l=n(3),u=n(5),d=n(4),h=n(14),m=n(12),b=n(6),p=n.n(b),j=n(0),f={name:"",number:""},O=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.resetForm=function(){t.setState(f)},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.addContact(t.state.name,t.state.number),t.resetForm()},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{className:p.a.form,action:"#",onSubmit:this.handleSubmit,children:[Object(j.jsx)("label",{className:p.a.label,htmlFor:"name",children:"Name:"}),Object(j.jsx)("input",{className:p.a.inputField,id:"name",type:"text",name:"name",placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:e,onChange:this.handleChange}),Object(j.jsx)("label",{className:p.a.label,htmlFor:"number",children:"Number:"}),Object(j.jsx)("input",{className:p.a.inputField,id:"number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",placeholder:"Enter phone",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:n,onChange:this.handleChange}),Object(j.jsx)("button",{className:p.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=O,v=n(10),g=n.n(v),x=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).handleChange=function(e){var n=e.target.value;t.props.changeFiler(n)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.filter;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:g.a.title,children:"Find contacts by name"}),Object(j.jsx)("input",{className:g.a.inputField,type:"text",name:"filter",placeholder:"Enter name",value:t,onChange:this.handleChange})]})}}]),n}(a.Component),y=x,_=n(7),F=n.n(_),N=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contact,n=t.deleteContact;return Object(j.jsxs)("li",{className:F.a.contactItem,children:[Object(j.jsxs)("span",{className:F.a.contactText,children:[e.name,": ",e.number]}),Object(j.jsx)("button",{className:F.a.button,onClick:function(){return n(e.id)},children:"Delete"})]})}}]),n}(a.Component),S=N,k=n(13),A=n.n(k),w=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.filter,a=t.deleteContact;return Object(j.jsx)("ul",{className:A.a.list,children:e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})).map((function(t){return Object(j.jsx)(S,{contact:t,deleteContact:a},t.name)}))})}}]),n}(a.Component),I=w,T=function(t,e){try{var n=JSON.stringify(e);localStorage.setItem(t,n)}catch(a){console.error("Set state error: ",a.message)}},L=(n(21),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.deleteContact=function(e){var n=t.state.contacts.reduce((function(t,n){return n.id!==e?[].concat(Object(s.a)(t),[n]):t}),[]);t.setState({contacts:n}),T("contacts",n)},t.isContactAlreadySaved=function(e){return t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))},t.updateContacts=function(e,n){if(t.isContactAlreadySaved(e))return alert("".concat(e," is already in contacts."));var a={id:Object(h.a)(),name:e,number:n};t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[a])}})),T("contacts",[].concat(Object(s.a)(t.state.contacts),[a]))},t.updateFilter=function(e){t.setState({filter:e})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=function(t){try{var e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(n){console.error("Get state error: ",n.message)}}("contacts");t&&this.setState({contacts:t})}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"phonebookTitle",children:"Phonebook"}),Object(j.jsx)(C,{addContact:this.updateContacts}),Object(j.jsx)("h2",{className:"contactsTitle",children:"Contacts"}),Object(j.jsx)(y,{filter:n,changeFiler:this.updateFilter}),0!==e.length&&Object(j.jsx)(I,{contacts:e,filter:n,deleteContact:this.deleteContact})]})}}]),n}(a.Component)),J=L,D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(J,{})}),document.getElementById("root")),D()}],[[22,1,2]]]);
//# sourceMappingURL=main.95ed2300.chunk.js.map