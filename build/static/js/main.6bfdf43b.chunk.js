(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(9),l=a.n(c),o=(a(14),a(4)),i=(a(15),a(8)),r=a.n(i),d=a(5),h=a(0);function b(e){return Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(h.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(d.b,{className:"nav-link",to:"/about",children:"About"})})]}),Object(h.jsxs)("div",{className:"form-check form-switch text-".concat("dark"===e.mode?"light":"dark"),children:[Object(h.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),Object(h.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"dark"===e.mode?"Enable Light Mode":"Enable Dark Mode"})]})]})]})})}function j(e){var t={color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"black":"white"};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"container",style:t,children:Object(h.jsxs)("div",{className:"accordion",id:"accordionPanelsStayOpenExample",style:t,children:[Object(h.jsxs)("div",{className:"accordion-item",children:[Object(h.jsx)("h2",{className:"accordion-header",id:"panelsStayOpen-headingOne",children:Object(h.jsx)("button",{className:"accordion-button",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseOne","aria-expanded":"true","aria-controls":"panelsStayOpen-collapseOne",children:"Analyze your text"})}),Object(h.jsx)("div",{id:"panelsStayOpen-collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"panelsStayOpen-headingOne",children:Object(h.jsxs)("div",{className:"accordion-body",style:t,children:[Object(h.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(h.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(h.jsxs)("div",{className:"accordion-item",style:t,children:[Object(h.jsx)("h2",{className:"accordion-header",id:"panelsStayOpen-headingTwo",children:Object(h.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseTwo","aria-expanded":"false","aria-controls":"panelsStayOpen-collapseTwo",children:"Free Utilities"})}),Object(h.jsx)("div",{id:"panelsStayOpen-collapseTwo",style:t,className:"accordion-collapse collapse","aria-labelledby":"panelsStayOpen-headingTwo",children:Object(h.jsxs)("div",{className:"accordion-body",style:t,children:[Object(h.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(h.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(h.jsxs)("div",{className:"accordion-item",style:t,children:[Object(h.jsx)("h2",{className:"accordion-header",id:"panelsStayOpen-headingThree",children:Object(h.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseThree","aria-expanded":"false","aria-controls":"panelsStayOpen-collapseThree",children:"Browser Compatibilities"})}),Object(h.jsx)("div",{id:"panelsStayOpen-collapseThree",className:"accordion-collapse collapse","aria-labelledby":"panelsStayOpen-headingThree",children:Object(h.jsxs)("div",{className:"accordion-body",style:t,children:[Object(h.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(h.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]})})})}function p(e){var t=Object(s.useState)(""),a=Object(o.a)(t,2),n=a[0],c=a[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(h.jsx)("h1",{children:e.heading}),Object(h.jsx)("div",{className:"mb-3",children:Object(h.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",style:{backgroundColor:"dark"===e.mode?"rgb(35 60 114)":"white",color:"dark"===e.mode?"white":"black"},value:n,onChange:function(e){c(e.target.value)},rows:"5"})}),Object(h.jsxs)("div",{className:"container my-3",children:[Object(h.jsx)("button",{disabled:0===n.length,className:"btn btn-info mx-3  my-1",onClick:function(){var t=n.toUpperCase();c(t),e.showalert("Converted to upperCase","success")},style:{backgroundColor:"#187890"},children:"ToUpperCase"}),Object(h.jsx)("button",{disabled:0===n.length,className:"btn btn-info mx-3 my-1",onClick:function(){var t=n.toLowerCase();c(t),e.showalert("Converted to LowerCase","success")},style:{backgroundColor:"#187890"},children:"ToLowerCase"}),Object(h.jsx)("button",{disabled:0===n.length,className:"btn btn-info mx-3 my-1",onClick:function(){c(""),e.showalert("Text area is cleared","success")},style:{backgroundColor:"#187890"},children:"Clear Screen"})]})]}),Object(h.jsxs)("div",{className:"container ",style:{color:"dark"===e.mode?"white":"black"},children:[Object(h.jsx)("h1",{children:"Your text summary"}),Object(h.jsxs)("p",{children:[n.split(".").length," sentences"]}),Object(h.jsxs)("p",{children:[n.split(/\s+/).filter((function(e){return 0!==e.length})).length," words"]}),Object(h.jsxs)("p",{children:[n.length," character"]}),Object(h.jsxs)("p",{children:[.008*n.split(" ").filter((function(e){return 0!==e.length})).length," minutes reading time"]})]}),Object(h.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(h.jsx)("h1",{children:"Preview"}),Object(h.jsx)("p",{children:n.length>1?n:"Write something to preview it here"})]})]})}b.prototype={title:r.a.string,about:r.a.string},b.defaultProps={title:"Enter the title",about:"About"};var u=function(e){return Object(h.jsx)("div",{style:{height:"70px"},children:e.alert&&Object(h.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(h.jsxs)("strong",{children:[" ",function(e){var t=e.toUpperCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)]}),"  :",e.alert.msg]})})},m=a(2);var g=function(){var e=Object(s.useState)("light"),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(null),l=Object(o.a)(c,2),i=l[0],r=l[1],g=function(e,t){r({msg:e,type:t},setTimeout((function(){r(null)}),1500))};return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(b,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#111d38",g("Dark mode has been enable","success")):(n("light"),document.body.style.backgroundColor="white",g("Light mode has been enable","success"))}}),Object(h.jsx)(u,{alert:i}),Object(h.jsx)("div",{className:"container mb-3",children:Object(h.jsxs)(m.c,{children:[Object(h.jsx)(m.a,{path:"/about",element:Object(h.jsx)(j,{mode:a})}),Object(h.jsx)(m.a,{path:"/",element:Object(h.jsx)(p,{heading:"Enter the text to anlyze below",mode:a,showalert:g})})]})})]})})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),s(e),n(e),c(e),l(e)}))};l.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),O()}},[[19,1,2]]]);
//# sourceMappingURL=main.6bfdf43b.chunk.js.map