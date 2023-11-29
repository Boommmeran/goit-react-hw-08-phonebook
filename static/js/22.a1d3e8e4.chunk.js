"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[22],{5022:function(n,e,t){t.r(e),t.d(e,{default:function(){return cn}});var r,o,i,a,c,s=t(2791),l=t(9434),d=t(3634),u=t(6916),p=function(n){return n.filter},x=function(n){return n.contacts.items},f=function(n){return n.contacts.isLoading},b=function(n){return n.contacts.error},h=(0,u.P1)([x,p],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),m=t(5705),g=t(1686),Z=t.n(g),j=t(6727),v=t(168),w=t(5706),y=(0,w.Z)(m.l0)(r||(r=(0,v.Z)(["\n  max-width: 300px;\n  margin: 0 auto;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),k=w.Z.label(o||(o=(0,v.Z)(["\n  display: block;\n  color: #0055b3;\n  font-weight: bold;\n  margin-bottom: 15px;\n"]))),z=(0,w.Z)(m.gN)(i||(i=(0,v.Z)(["\n  position: relative;\n  width: 100%;\n  padding: 8px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  outline: none;\n  margin-top: 15px;\n\n  :focus {\n    border-color: #007bff;\n    outline: none;\n    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\n  }\n"]))),C=w.Z.div(a||(a=(0,v.Z)(["\n  position: absolute;\n  color: #c82333;\n  font-size: 14px;\n  margin-top: 5px;\n"]))),_=w.Z.button(c||(c=(0,v.Z)(["\n  background-color: #007bff;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 16px;\n  transition: background-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);\n\n  :hover,\n  :focus {\n    background-color: #0055b3;\n  }\n"]))),I=t(3329),F=j.Ry().shape({name:j.Z_().required("It is required field"),number:j.Z_().matches(/^[0-9+ -]+$/,"Invalid character").required("It is required field")});function N(){var n=(0,l.I0)(),e=(0,l.v9)(x);return(0,I.jsx)(m.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){var o=t.name,i=t.number,a=r.resetForm;return e.find((function(n){return n.name===o}))?Z().Notify.failure("This contact is already in your phone book"):0===o.trim().length?Z().Notify.failure("Please insert contact name"):(n(d.addContact({name:o,number:i})),void a())},validationSchema:F,children:(0,I.jsxs)(y,{children:[(0,I.jsxs)(k,{children:["Name",(0,I.jsx)(z,{type:"text",name:"name"}),(0,I.jsx)(m.Bc,{name:"name",children:function(n){return(0,I.jsx)(C,{children:n})}})]}),(0,I.jsxs)(k,{children:["Number",(0,I.jsx)(z,{type:"text",name:"number",placeholder:"Example: 0997755446"}),(0,I.jsx)(m.Bc,{name:"number",children:function(n){return(0,I.jsx)(C,{children:n})}})]}),(0,I.jsx)(_,{type:"submit",children:"Add contact"})]})})}var q,L,S,B,E,P=t(7322),A=w.Z.p(q||(q=(0,v.Z)(["\n  margin: 0;\n  font-size: 16px;\n  line-height: 1.5;\n"]))),H=w.Z.button(L||(L=(0,v.Z)(["\n  background-color: transparent;\n  color: #007bff;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  transition: color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);\n  \n  :hover {\n    color: #c82333;\n  }\n"]))),J=(0,w.Z)(P.FH3)(S||(S=(0,v.Z)(["\n  width: 35px;\n  height: 35px;\n"])));function M(n){var e=n.contact,t=(0,l.I0)(),r=d.deleteContact,o=e.name,i=e.number,a=e.id;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)("div",{children:[(0,I.jsx)(A,{children:o}),(0,I.jsx)(A,{children:i})]}),(0,I.jsx)(H,{type:"button",onClick:function(){return t(r(a))},children:(0,I.jsx)(J,{})})]})}var O=w.Z.ul(B||(B=(0,v.Z)(["\n  display: flex;\n  width: 600px;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: space-between;\n"]))),R=w.Z.li(E||(E=(0,v.Z)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  align-items: center;\n  padding: 10px;\n  background-color: #f9f9f9;\n  border: 1px solid #ddd;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  width: 290px;\n  box-shadow: 0 0 3px #007bff;\n"])));function T(){var n=h,e=(0,l.v9)(n);return(0,I.jsx)(O,{children:e.map((function(n){return(0,I.jsx)(R,{children:(0,I.jsx)(M,{contact:n})},n.id)}))})}var V,$,D,G=t(1273),K=w.Z.div(V||(V=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n"]))),Q=w.Z.label($||($=(0,v.Z)(["\n  display: block;\n  color: #0055b3;\n  font-weight: bold;\n"]))),U=w.Z.input(D||(D=(0,v.Z)(["\n  max-width: 300px;\n  padding: 8px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n\n  :focus {\n    border-color: #007bff;\n    outline: none;\n    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\n  }\n"])));function W(){var n=(0,l.v9)(p),e=(0,l.I0)();return(0,I.jsxs)(K,{children:[(0,I.jsx)(Q,{htmlFor:"filter",children:"Find contact by name"}),(0,I.jsx)(U,{type:"text",id:"filter",value:n,onChange:function(n){e((0,G.M)(n.target.value))}})]})}var X,Y,nn,en=t(1947),tn=w.Z.p(X||(X=(0,v.Z)(["\n  color: #c82333;\n  font-size: 25px;\n  text-align: center;\n"])));function rn(n){var e=n.text;return(0,I.jsx)(tn,{children:e})}var on=w.Z.div(Y||(Y=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 20px;\n  gap: 15px;\n"]))),an=w.Z.h2(nn||(nn=(0,v.Z)(["\n  color: #007bff;\n  font-size: 22px;\n  line-height: 40px;\n  font-weight: normal;\n  text-transform: uppercase;\n  font-family: 'Orienta', sans-serif;\n  letter-spacing: 1px;\n  font-style: italic;\n"])));function cn(){var n=(0,l.I0)(),e=x,t=f,r=b,o=d.fetchContacts,i=(0,l.v9)(e),a=(0,l.v9)(t),c=(0,l.v9)(r);return(0,s.useEffect)((function(){n(o())}),[n,o]),(0,I.jsxs)(on,{children:[(0,I.jsx)(N,{}),(0,I.jsx)(an,{children:"Contacts"}),(0,I.jsx)(W,{}),0!==i.length&&(0,I.jsx)(T,{}),c&&(0,I.jsx)(rn,{text:"Something went wrong, please reload this page"}),a&&(0,I.jsx)(en.Z,{})]})}}}]);
//# sourceMappingURL=22.a1d3e8e4.chunk.js.map