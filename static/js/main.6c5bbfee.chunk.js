(this["webpackJsonpquick-shop"]=this["webpackJsonpquick-shop"]||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),i=a(29),l=a(70),s=a(71),u=a(13),m=a(160),p=a(161),d=a(162),f=a(9),E=a(15),h={token:null},b=a(23),v=[],g={ids:[],value:""},y={id:null},k=[],O=[],S=Object(i.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"AUTH_SUCCESS":return Object(E.a)({},e,{token:n});case"AUTH_LOGOUT":return Object(E.a)({},e,{token:null});default:return e}},phones:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_PHONES_SUCCESS":return n;case"LOAD_MORE_PHONES_SUCCESS":return[].concat(Object(b.a)(e),Object(b.a)(n));case"FETCH_PHONE_BY_ID_SUCCESS":var r=e.find((function(e){return e.id===n.id}));return r?[].concat(Object(b.a)(e),[r]):[n];default:return e}},phonesPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_PHONES_SUCCESS":var r=n.map((function(e){return e.id}));return Object(E.a)({},e,{ids:r});case"LOAD_MORE_PHONES_SUCCESS":var o=n.map((function(e){return e.id})),c=[].concat(Object(b.a)(e.ids),Object(b.a)(o));return Object(E.a)({},e,{ids:c});case"SEARCH_PHONE":return Object(E.a)({},e,{value:n});default:return e}},phonePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_PHONE_BY_ID_SUCCESS":return Object(E.a)({},e,{id:n.id});default:return e}},basket:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ADD_PHONE_TO_BASKET":return[].concat(Object(b.a)(e),[n]);case"DELETE_PHONE_FROM_BASKET":return e.filter((function(e){return e!==n}));case"CLEAN_BASKET":return k;default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_CATEGORIES_SUCCESS":return n;default:return e}}}),_=a(84),x=a(164),j=a(139),C=a(55),w=Object(_.a)({palette:{primary:{main:j.a[800]},secondary:{main:C.a[500]}}}),T=w=Object(x.a)(w),N=a(34),P=a(31),I=a(56),B=a(143),A=a(163),H=a(105),U=a(145),D=a(41),R=a.n(D),L=a(52),F=a.n(L),M=(a(59),a(140)),W=Object(M.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"#63bdf1",position:"fixed",left:0,right:0},form:{display:"flex",flexDirection:"column",background:"white",padding:25,borderRadius:5,minWidth:250},header:{marginBottom:20,"& h4":{fontWeight:"bold"}},formControl:{display:"flex",alignItems:"center",marginBottom:10,"& svg":{marginTop:20,marginRight:10,opacity:.5}},button:{marginTop:30},recovery:{marginTop:10}}})),z=a(7),q=a.n(z),G=a(19),K="https://my-project-1559841200510.firebaseio.com/phones/.json",Q="https://my-project-1559841200510.firebaseio.com/categories/.json",Y="AIzaSyCpUApD9K5SMQxiiDCLUIvnbclYf1yiyVc",$="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat(Y),J="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat(Y),V=function(){var e=Object(G.a)(q.a.mark((function e(t,a,n){var r,o,c,i,l;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n?J:$,o={email:t,password:a,returnSecureToken:!0},e.next=4,fetch(r,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/josn"}});case 4:return c=e.sent,e.next=7,c.json();case 7:if(i=e.sent,console.log("TCL: authApi!!! -> data",i),l=new Date((new Date).getTime()+1e3*i.expiresIn),localStorage.setItem("token",i.idToken),localStorage.setItem("user",i.localId),localStorage.setItem("expirationDate",l),!i.error){e.next=15;break}return e.abrupt("return",i);case 15:return e.abrupt("return",{idToken:i.idToken,expiresIn:i.expiresIn});case 16:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),Z=function(){var e=Object(G.a)(q.a.mark((function e(t){var a,n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",Object.values(n)[0]);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(G.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(K);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(G.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(K);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(G.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(Q);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(G.a)(q.a.mark((function e(t){var a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(K);case 2:return a=e.sent,e.abrupt("return",a.find((function(e){return e.id===t})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(e,t,a){return function(){var n=Object(G.a)(q.a.mark((function n(r){var o;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:"AUTH_REQUEST"}),n.prev=1,n.next=4,V(e,t,a);case 4:(o=n.sent).error&&alert(o.error.message),r(re(o.idToken)),r(oe(1e3*o.expiresIn)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),r({type:"AUTH_FAILURE",payload:n.t0,error:!0});case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}()},re=function(e){return{type:"AUTH_SUCCESS",payload:e}},oe=function(e){return function(t){var a=setTimeout((function(){t(ce()),clearTimeout(a)}),e)}},ce=function(){return localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}},ie=function(e,t,a){if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),t.email&&(n=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.toString().toLowerCase())&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.samePassword&&(n=e===a&&n),n},le=function(e,t){return e.phones.find((function(e){return e.id===t}))},se=function(e,t){var a=t.match.params.id||void 0;return e.phonesPage.ids.map((function(t){return le(e,t)})).filter((function(t){return t.name.toLowerCase().indexOf(e.phonesPage.value.toLowerCase())>-1})).filter((function(e){return void 0===a||a===e.categoryId}))},ue=function(e){return e.basket.length},me=function(e){return e.basket.map((function(t){return le(e,t)})).map((function(e){return e.price})).reduce((function(e,t){return e+t}),0)},pe=function(e){var t=Object(b.a)(new Set(e.basket));return t.map((function(t){return le(e,t)})).map((function(t){return Object(E.a)({},t,{count:(a=t.id,e.basket.filter((function(e){return e===a})).length)});var a}))},de={auth:ne},fe=Object(u.b)(null,de)((function(e){var t=e.auth,a=W(),o=Object(n.useState)({email:{type:"email",label:"Email",value:"",valid:!1,touched:!1,errorMessage:"Enter correct email.",validation:{required:!0,email:!0}},password:{type:"password",label:"Password",value:"",valid:!1,touched:!1,errorMessage:"At least 6 characters.",validation:{required:!0,minLength:6}}}),c=Object(P.a)(o,2),i=c[0],l=c[1],s=function(e){return function(t){var a=Object(E.a)({},i),n=a[e];n.value=t.target.value,n.touched=!0,n.valid=ie(n.value,n.validation),l(a)}},u=r.a.createElement("div",{className:a.header},r.a.createElement(I.a,{variant:"h4",color:"primary"},"Sign In"),r.a.createElement(I.a,{variant:"h4",color:"secondary"},"Sign Up"));return r.a.createElement("div",{className:a.root},r.a.createElement(H.a,{elevation:3},r.a.createElement("form",{className:a.form},u,Object.keys(i).map((function(e,t){var n=i[e],o=!n.valid&&n.touched,c=o?n.errorMessage||"Incorrect entry.":"",l=null;switch(e){case"email":l=r.a.createElement(R.a,{fontSize:"small"});break;case"password":l=r.a.createElement(F.a,{fontSize:"small"});break;default:l=null}return r.a.createElement(B.a,{container:!0,key:t,className:a.formControl},r.a.createElement(B.a,{item:!0},l),r.a.createElement(B.a,{item:!0},r.a.createElement(A.a,{id:e+t,type:n.type,label:n.label,value:n.value,error:o,helperText:c,className:a.textField,onChange:s(e)})))})),r.a.createElement(f.b,{to:"/recovery",className:"form__link"},"Forgot password?"),r.a.createElement(U.a,{variant:"contained",color:"primary",className:a.button,onClick:function(){return t(i.email.value,i.password.value,!0)}},"Sign In"),r.a.createElement(f.b,{to:"/sign-in",className:"form__link form__link_policy"},"Privacy Policy"),r.a.createElement(f.b,{to:"/",className:"form__link form__link_cancel"},"Cancel"))))})),Ee=a(77),he=a.n(Ee),be={auth:ne},ve=Object(u.b)(null,be)((function(e){var t=e.auth,a=W(),o=Object(n.useState)({email:{type:"email",label:"Email",value:"",valid:!1,touched:!1,errorMessage:"Enter correct email.",validation:{required:!0,email:!0}},password:{type:"password",label:"Password",value:"",valid:!1,touched:!1,errorMessage:"At least 6 characters.",validation:{required:!0,minLength:6}},verifyPassword:{type:"password",label:"Verify Password",value:"",valid:!1,touched:!1,errorMessage:"Enter correct password.",validation:{required:!0,samePassword:!0}}}),c=Object(P.a)(o,2),i=c[0],l=c[1],s=function(e){return function(t){var a=Object(E.a)({},i),n=a[e];n.value=t.target.value,n.touched=!0,n.valid=ie(n.value,n.validation,i.password.value),l(a)}},u=r.a.createElement("div",{className:a.header},r.a.createElement(I.a,{variant:"h4",color:"secondary"},"Sign In"),r.a.createElement(I.a,{variant:"h4",color:"primary"},"Sign Up"));return r.a.createElement("div",{className:a.root},r.a.createElement(H.a,{elevation:3},r.a.createElement("form",{className:a.form},u,Object.keys(i).map((function(e,t){var n=i[e],o=!n.valid&&n.touched,c=o?n.errorMessage||"Incorrect entry.":"",l=null;switch(e){case"email":l=r.a.createElement(R.a,{fontSize:"small"});break;case"password":l=r.a.createElement(F.a,{fontSize:"small"});break;case"verifyPassword":l=r.a.createElement(he.a,{fontSize:"small"});break;default:l=null}return r.a.createElement(B.a,{container:!0,key:t,className:a.formControl},r.a.createElement(B.a,{item:!0},l),r.a.createElement(B.a,{item:!0},r.a.createElement(A.a,{id:e+t,type:n.type,label:n.label,value:n.value,error:o,helperText:c,className:a.textField,onChange:s(e)})))})),r.a.createElement(U.a,{variant:"contained",color:"primary",className:a.button,onClick:function(){return t(i.email.value,i.password.value,!1)}},"Sign Up"),r.a.createElement(f.b,{to:"/sign-up",className:"form__link form__link_policy"},"Privacy Policy"),r.a.createElement(f.b,{to:"/",className:"form__link form__link_cancel"},"Cancel"))))})),ge=function(){var e=W(),t=Object(n.useState)({email:{type:"email",label:"Email",value:"",valid:!1,touched:!1,errorMessage:"Enter correct email.",validation:{required:!0,email:!0}}}),a=Object(P.a)(t,2),o=a[0],c=a[1],i=function(e){return function(t){var a=Object(E.a)({},o),n=a[e];n.value=t.target.value,n.touched=!0,n.valid=ie(n.value,n.validation),c(a)}};return r.a.createElement("div",{className:e.root},r.a.createElement(H.a,{elevation:3},r.a.createElement("form",{className:e.form},r.a.createElement("div",{className:e.header},r.a.createElement(I.a,{variant:"h4",color:"primary"},"Recovery")),Object.keys(o).map((function(t,a){var n=o[t],c=!n.valid&&n.touched,l=c?n.errorMessage||"Incorrect entry.":"";return r.a.createElement(B.a,{container:!0,className:e.formControl},r.a.createElement(B.a,{item:!0},r.a.createElement(R.a,{fontSize:"small"})),r.a.createElement(B.a,{item:!0},r.a.createElement(A.a,{key:a,id:t+a,type:n.type,label:n.label,value:n.value,error:c,helperText:l,className:e.textField,onChange:i(t)})))})),r.a.createElement(U.a,{variant:"contained",color:"primary",className:e.recovery},"Recovery"),r.a.createElement(f.b,{to:"/",className:"form__link form__link_cancel"},"Cancel"))))},ye=Object(u.b)(null,(function(e){return{logout:function(){return e(ce())}}}))((function(e){var t=e.logout;return Object(n.useEffect)((function(){t()})),r.a.createElement(N.a,{to:"/"})})),ke=a(18),Oe=a(106),Se=Object(Oe.a)((function(e){var t;return{root:(t={marginTop:20},Object(ke.a)(t,e.breakpoints.up("sm"),{marginTop:30}),Object(ke.a)(t,e.breakpoints.up("lg"),{marginTop:35}),t),"& .MuiGrid-spacing-xs-4":{},sidebar:Object(ke.a)({display:"block"},e.breakpoints.down("lg"),{marginBottom:30}),card:Object(ke.a)({},e.breakpoints.down("xs"),{margin:"0 auto"}),loadMore:{display:"flex",justifyContent:"flex-end",width:"100%",margin:"30px 0 50px"}}})),_e=a(146),xe=a(147),je=a(150),Ce=a(149),we=a(148),Te=Object(Oe.a)((function(e){return{root:{marginTop:95},title:{display:"flex",justifyContent:"space-between",alignItems:"baseline","& a":{color:"#007bff",textDecoration:"none","&:hover":{textDecoration:"underline"}},"& span":{fontSize:"1.2rem",fontWeight:"bold"}},link:{color:"#0277bd",textDecoration:"none"}}})),Ne=function(e){return function(t){t({type:"ADD_PHONE_TO_BASKET",payload:e})}},Pe={addPhoneToBasket:Ne},Ie=Object(u.b)(null,Pe)((function(e){var t,a=e.phone,n=e.addPhoneToBasket,o=Te(),c="".concat(a.description.slice(0,61),"...");return r.a.createElement(_e.a,{raised:!0},r.a.createElement(xe.a,null,r.a.createElement(we.a,{component:"img",alt:a.name,src:a.image}),r.a.createElement(Ce.a,null,r.a.createElement(I.a,{gutterBottom:!0,variant:"h5",componnet:"h2",className:o.title},r.a.createElement(f.b,{to:"/phones/".concat(a.id)},a.name),r.a.createElement("span",null,"$",a.price)),r.a.createElement(I.a,{variant:"body2",color:"textSecondary",component:"p"},c))),r.a.createElement(je.a,null,r.a.createElement(U.a,{color:"primary",onClick:(t=a.id,function(){return n(t)})},"Buy now!"),r.a.createElement(f.b,{to:"/phones/".concat(a.id),className:o.link},r.a.createElement(U.a,{color:"primary"},"Learn More"))))})),Be=a(78),Ae=a.n(Be),He=Object(M.a)({link:{textDecoration:"none",width:"100%","& button":{textTransform:"none"}}}),Ue=Object(u.b)((function(e){return{totalBasketCount:ue(e),totalBasketPrice:me(e)}}))((function(e){var t=e.totalBasketCount,a=e.totalBasketPrice,n=He();return r.a.createElement(f.b,{to:"/basket",className:n.link},r.a.createElement(U.a,{startIcon:r.a.createElement(Ae.a,null),variant:"contained",color:"primary",fullWidth:!0},t," item(s) - $ ",a))})),De=a(151),Re=a(79),Le=a.n(Re),Fe=Object(M.a)({root:{padding:"60px 25px",background:"#eee",marginBottom:30,"& form":{display:"flex",position:"relative","& > div":{width:"100%"}},"& input":{background:"white"},"& button":{position:"absolute",top:5,right:5}}}),Me={searchPhone:function(e){return function(t){t({type:"SEARCH_PHONE",payload:e})}}},We=Object(u.b)(null,Me)((function(e){var t=e.searchPhone,a=Fe(),o=Object(n.useState)(""),c=Object(P.a)(o,2),i=c[0],l=c[1];return r.a.createElement("div",{className:a.root},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(i)}},r.a.createElement(A.a,{id:"search",variant:"outlined",label:"Search",onChange:function(e){return l(e.target.value)}}),r.a.createElement(De.a,{type:"submit","aria-label":"search"},r.a.createElement(Le.a,null))))})),ze=a(152),qe=a(153),Ge=a(144),Ke=Object(M.a)((function(e){return{root:{padding:"50px 25px 60px",background:"#eee","& nav":{background:"white",padding:0}},category:{padding:0,"& a":{width:"100%",padding:"8px 16px",textDecoration:"none",color:"inherit"},"& span":{fontSize:"1.3rem"},"&.Mui-selected":{background:[e.palette.primary.main],color:"white",trnasition:"0.3s","&:hover":{background:[e.palette.primary.main]}}}}})),Qe=Object(N.g)((function(e){var t=e.categories,a=e.match,n=Ke(),o=a.params.id||void 0;return r.a.createElement("div",{className:n.root},r.a.createElement(I.a,{gutterBottom:!0,variant:"h4"},"Brand"),r.a.createElement(Ge.a,{component:"nav"},r.a.createElement(ze.a,{button:!0,divider:!0,selected:void 0===o,className:n.category},r.a.createElement(f.b,{to:"/"},r.a.createElement(qe.a,{primary:"All"}))),t.map((function(e){return r.a.createElement(ze.a,{button:!0,divider:!0,key:e.id,selected:e.id===o,className:n.category},r.a.createElement(f.b,{to:"/categories/".concat(e.id)},r.a.createElement(qe.a,{primary:e.name})))}))))})),Ye={fetchPhones:function(){return function(){var e=Object(G.a)(q.a.mark((function e(t){var a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_PHONES_REQUEST"}),e.prev=1,e.next=4,X();case 4:a=e.sent,t({type:"FETCH_PHONES_SUCCESS",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"FETCH_PHONES_FAILURE",payload:e.t0,error:!0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},loadMorePhones:function(){return function(){var e=Object(G.a)(q.a.mark((function e(t){var a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOAD_MORE_PHONES_REQUEST"}),e.prev=1,e.next=4,ee();case 4:a=e.sent,t({type:"LOAD_MORE_PHONES_SUCCESS",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"LOAD_MORE_PHONES_FAILURE",payload:e.t0,error:!0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},fetchCategories:function(){return function(){var e=Object(G.a)(q.a.mark((function e(t){var a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_CATEGORIES_REQUEST"}),e.prev=1,e.next=4,te();case 4:a=e.sent,t({type:"FETCH_CATEGORIES_SUCCESS",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"FETCH_CATEGORIES_FAILURE",payload:e.t0,error:!0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}},$e=Object(u.b)((function(e,t){return{phones:se(e,t),categories:e.categories}}),Ye)((function(e){var t=e.fetchPhones,a=e.phones,o=e.loadMorePhones,c=e.fetchCategories,i=e.categories,l=Se();Object(n.useEffect)((function(){t(),c()}),[t,c]);return r.a.createElement("div",{className:l.root},r.a.createElement(B.a,{container:!0,justify:"space-between"},r.a.createElement(B.a,{container:!0,item:!0,md:4,lg:3,className:l.sidebar},r.a.createElement(Ue,null),r.a.createElement(We,null),r.a.createElement(Qe,{categories:i})),r.a.createElement(n.Fragment,null,r.a.createElement(B.a,{container:!0,item:!0,md:8,lg:9,spacing:4,className:l.content},a.map((function(e,t){return function(e,t){return r.a.createElement(B.a,{item:!0,xs:10,sm:6,md:6,lg:4,key:t,className:l.card},r.a.createElement(Ie,{phone:e}))}(e,t)}))),r.a.createElement("div",{className:l.loadMore},r.a.createElement(U.a,{variant:"contained",color:"primary",onClick:function(){return o()}},"Load More")))))})),Je=Object(Oe.a)((function(e){var t;return{root:(t={marginTop:20},Object(ke.a)(t,e.breakpoints.up("sm"),{marginTop:35}),Object(ke.a)(t,e.breakpoints.up("lg"),{marginTop:45}),t),info:{marginBottom:20},image:{maxWidth:300,marginBottom:30},title:{display:"flex",justifyContent:"space-between",alignItems:"baseline","& span":{fontSize:"1.3rem",fontWeight:"bold"}},field:{display:"flex",alignItems:"center",padding:"10px 0",borderBottom:"1px dotted #ccc","& h6":{marginRight:10}},sidebarTitle:{marginTop:20},backToStore:{margin:"15px 0",display:"block",textDecoration:"none","& button":{color:"white",background:e.palette.info.main,trnasition:"0.3s","&:hover":{background:e.palette.info.dark}}},addToBasket:{color:"white",background:e.palette.success.main,"&:hover":{background:e.palette.success.dark}}}})),Ve={fetchPhoneById:function(e){return function(){var t=Object(G.a)(q.a.mark((function t(a){var n;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"FETCH_PHONE_BY_ID_REQUEST"}),t.prev=1,t.next=4,ae(e);case 4:n=t.sent,a({type:"FETCH_PHONE_BY_ID_SUCCESS",payload:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:"FETCH_PHONE_BY_ID_FAILURE",payload:t.t0,error:!0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},addPhoneToBasket:Ne},Ze=Object(u.b)((function(e){return{phone:le(e,e.phonePage.id)}}),Ve)((function(e){var t=e.fetchPhoneById,a=e.match,o=e.phone,c=e.addPhoneToBasket,i=Je();Object(n.useEffect)((function(){t(a.params.id)}));return r.a.createElement("div",{className:i.root},r.a.createElement(B.a,{container:!0,spacing:5},r.a.createElement(B.a,{item:!0,xs:12,md:8,lg:9,className:i.contect},o&&r.a.createElement(_e.a,{raised:!0},r.a.createElement(Ce.a,null,r.a.createElement(B.a,{container:!0,className:i.info},r.a.createElement(B.a,{item:!0,xs:12,md:6},r.a.createElement(we.a,{component:"img",src:o.image,alt:o.name,className:i.image})),r.a.createElement(B.a,{item:!0,xs:12,md:6},Object.keys(o).filter((function(e){return"cpu"===e||"size"===e||"weight"===e||"display"===e||"memory"===e||"battery"===e})).map((function(e){return r.a.createElement("div",{className:i.field,key:e},r.a.createElement(I.a,{variant:"h6"},e),r.a.createElement(I.a,{variant:"body2"},o[e]))})))),r.a.createElement("div",{className:i.title},r.a.createElement(I.a,{gutterBottom:!0,variant:"h4"},o.name),r.a.createElement("span",null,"$",o.price)),r.a.createElement(I.a,{variant:"body1"},o.description)))),r.a.createElement(B.a,{item:!0,xs:12,md:4,lg:3,className:i.sidebar},o&&function(){return r.a.createElement("div",null,r.a.createElement(I.a,{gutterBottom:!0,variant:"h5"},"Quick Shop"),r.a.createElement(Ue,null),r.a.createElement(I.a,{variant:"h4",className:i.sidebarTitle},o.name),r.a.createElement(I.a,{variant:"h4"},"$",o.price),r.a.createElement(f.b,{to:"/",className:i.backToStore},r.a.createElement(U.a,{variant:"contained",fullWidth:!0},"Back to Store")),r.a.createElement(U.a,{variant:"contained",className:i.addToBasket,fullWidth:!0,onClick:(e=o.id,function(){return c(e)})},"Add to Cart"));var e}())))})),Xe=a(83),et=a.n(Xe),tt=a(81),at=a.n(tt),nt=a(82),rt=a.n(nt),ot=Object(M.a)((function(e){var t;return{root:(t={marginTop:20},Object(ke.a)(t,e.breakpoints.up("sm"),{marginTop:35}),Object(ke.a)(t,e.breakpoints.up("lg"),{marginTop:45}),Object(ke.a)(t,"& table tr:nth-of-type(even)",{background:"#eee"}),Object(ke.a)(t,"& table td",{padding:5,border:"1px solid #ccc"}),Object(ke.a)(t,"& table td:last-child",{width:"12%"}),t),image:{width:"12%","& img":{maxWidth:100}},deletePhone:{"&:hover":{color:[e.palette.error.main]}},totalPrice:{display:"flex",justifyContent:"flex-end",margin:"15px 0","& b":{marginRight:5}},continueShopping:{display:"block",textDecoration:"none",borderRadius:5,marginBottom:10,background:[e.palette.info.main],"&:hover":{background:[e.palette.info.dark]},"& span":{color:"white"}},cleanBasket:{background:[e.palette.error.main],"&:hover":{background:[e.palette.error.dark]},color:"white",marginBottom:10},checkout:{background:[e.palette.success.main],"&:hover":{background:[e.palette.success.dark]},color:"white"}}})),ct=a(154),it=a(155),lt=a(156),st=a(157),ut=a(158),mt=a(159),pt=a(80),dt=a.n(pt),ft=function(e){var t=e.phones,a=e.handleRemovePhone,n=ot();return r.a.createElement(ct.a,{component:H.a},r.a.createElement(it.a,{"aria-label":"basket table"},r.a.createElement(lt.a,null),r.a.createElement(st.a,null,t.map((function(e){return r.a.createElement(ut.a,{key:e.name},r.a.createElement(mt.a,{align:"center",className:n.image},r.a.createElement("img",{src:e.image,alt:e.name})),r.a.createElement(mt.a,{align:"center"},e.name),r.a.createElement(mt.a,{align:"center"},"$",e.price),r.a.createElement(mt.a,{align:"center"},e.count),r.a.createElement(mt.a,{align:"center"},r.a.createElement(De.a,{className:n.deletePhone,onClick:function(){return a(e.id)}},r.a.createElement(dt.a,null))))})))))},Et={handleRemovePhone:function(e){return function(t){t({type:"DELETE_PHONE_FROM_BASKET",payload:e})}},handleCleanBasket:function(){return function(e){e({type:"CLEAN_BASKET"})}},handleCheckout:function(e){return function(){return function(){return alert(JSON.stringify(e))}}}},ht=Object(u.b)((function(e){return{phones:pe(e),totalBasketPrice:me(e)}}),Et)((function(e){var t=e.phones,a=e.totalBasketPrice,o=e.handleRemovePhone,c=e.handleCleanBasket,i=e.handleCheckout,l=ot(),s=r.a.createElement(I.a,{variant:"h4"},"Your shopping cart is empty."),u=r.a.createElement("div",{className:l.totalPrice},r.a.createElement("b",null,"Total:"),"$",a),m=r.a.createElement(n.Fragment,null,r.a.createElement(U.a,{fullWidth:!0,startIcon:r.a.createElement(at.a,null),className:l.cleanBasket,onClick:c},"Clean Basket"),r.a.createElement(U.a,{fullWidth:!0,startIcon:r.a.createElement(rt.a,null),className:l.checkout,onClick:i(t)},"Checkout"));return r.a.createElement("div",{className:l.root},r.a.createElement(B.a,{container:!0,spacing:4},r.a.createElement(B.a,{item:!0,xs:12,md:8,lg:9},0===t.length&&s,r.a.createElement(ft,{phones:t,handleRemovePhone:o}),t.length>0&&u),r.a.createElement(B.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(f.b,{to:"/",className:l.continueShopping},r.a.createElement(U.a,{fullWidth:!0,startIcon:r.a.createElement(et.a,null)},"Continue shopping!")),t.length>0&&m)))})),bt={autoLogin:function(){return function(e){var t=localStorage.getItem("token");if(t){var a=new Date(localStorage.getItem("expirationDate"));if(a<=new Date)e(ce());else{var n=a.getTime()-(new Date).getTime();e(re(t)),e(oe(n))}}else e(ce())}}},vt=Object(u.b)((function(e){return{isAuthenticated:!!e.auth.token}}),bt)((function(e){var t=e.isAuthenticated,a=e.autoLogin;return Object(n.useEffect)((function(){a()})),t?r.a.createElement(N.d,null,r.a.createElement(N.b,{path:"/logout",component:ye}),r.a.createElement(N.b,{exact:!0,path:"/",component:$e}),r.a.createElement(N.b,{path:"/phones/:id",component:Ze}),r.a.createElement(N.b,{path:"/categories/:id",component:$e}),r.a.createElement(N.b,{path:"/basket",component:ht}),r.a.createElement(N.a,{to:"/"})):r.a.createElement(N.d,null,r.a.createElement(N.b,{path:"/sign-in",component:fe}),r.a.createElement(N.b,{path:"/sign-up",component:ve}),r.a.createElement(N.b,{path:"/recovery",component:ge}),r.a.createElement(N.b,{exact:!0,path:"/",component:$e}),r.a.createElement(N.b,{path:"/phones/:id",component:Ze}),r.a.createElement(N.b,{path:"/categories/:id",component:$e}),r.a.createElement(N.b,{path:"/basket",component:ht}),r.a.createElement(N.a,{to:"/"}))})),gt=[l.a],yt=Object(i.createStore)(S,Object(s.composeWithDevTools)(i.applyMiddleware.apply(void 0,gt)));c.a.render(r.a.createElement(u.a,{store:yt},r.a.createElement(f.a,null,r.a.createElement(m.a,{theme:T},r.a.createElement(p.a,null),r.a.createElement(d.a,{style:{minWidth:320},fixed:!0},r.a.createElement(vt,null))))),document.getElementById("root"))},59:function(e,t,a){},91:function(e,t,a){e.exports=a(103)}},[[91,1,2]]]);
//# sourceMappingURL=main.6c5bbfee.chunk.js.map