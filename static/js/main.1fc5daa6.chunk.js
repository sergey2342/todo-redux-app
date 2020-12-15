(this["webpackJsonptodo-redux-app"]=this["webpackJsonptodo-redux-app"]||[]).push([[0],{14:function(e,t,o){e.exports={menu:"Menu_menu__2xbQm",menu_logo:"Menu_menu_logo__1o3g8",menu_list:"Menu_menu_list__dajnU",menu_item:"Menu_menu_item__3eJ-M",active:"Menu_active__1d32I",menu_load:"Menu_menu_load__2R9T5"}},15:function(e,t,o){e.exports={todo_items_list:"TodoItems_todo_items_list__18GJy",todo_items_todo:"TodoItems_todo_items_todo__1eMLY",todo_items_todo_title:"TodoItems_todo_items_todo_title__1fpj8",todo_items_todo_checkbox:"TodoItems_todo_items_todo_checkbox__1knWv",todo_items_todo_alert:"TodoItems_todo_items_todo_alert__1aRUa"}},171:function(e,t,o){},172:function(e,t,o){"use strict";o.r(t);var c=o(1),n=o(0),s=o.n(n),a=o(29),d=o.n(a),i=o(11),r=o(18),l=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,175)).then((function(t){var o=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;o(e),c(e),n(e),s(e),a(e)}))},_=o(3),j=o(14),u=Object(c.jsx)("svg",{viewBox:"0 0 24 24",children:Object(c.jsx)("path",{d:"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"})}),m=Object(c.jsx)("svg",{viewBox:"0 0 24 24",children:Object(c.jsx)("path",{d:"M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"})}),b=Object(c.jsx)("svg",{viewBox:"0 0 24 24",children:Object(c.jsx)("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})}),p=o(42),O=o(5),h=o(62).create({baseURL:"https://jsonplaceholder.typicode.com/"});function x(e,t){this.message=e.message,this.text=t}var v={getTodos:function(){return h.get("todos/")},checkedTodo:function(e){return h.put("todos/".concat(e.id),Object(O.a)(Object(O.a)({},e),{},{completed:!e.completed}))}},f="ADD_TODO_STARTED",g="ADD_TODO_SUCCESS",T="ADD_TODO_FAILURE",y="ADD_TODO",D="CHECKED_TODO",M={loading:!1,error:null,todos:[]},N=function(e){e({type:f}),v.getTodos().then((function(t){var o=t.data;return e({type:g,payload:o})})).catch((function(t){throw e({type:T,payload:{type:"getTodos",message:t.message,text:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0437\u0430\u0434\u0430\u0447"}}),new x(t,"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0437\u0430\u0434\u0430\u0447")}))};function L(e){var t=e.label,o=e.icon,n=e.to,s=e.activeOnlyWhenExact,a=Object(_.g)({path:n,exact:s});return Object(c.jsxs)(r.b,{to:n,className:"".concat(j.menu_item," ").concat(a?"".concat(j.active):""),children:[o," ",t]})}var k=function(){var e=Object(i.b)();return Object(c.jsxs)("div",{className:j.menu,children:[Object(c.jsx)("div",{className:j.menu_logo,children:"Todo App"}),Object(c.jsxs)("ul",{className:j.menu_list,children:[Object(c.jsx)(L,{to:"/all",icon:u,label:"\u0412\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438",activeOnlyWhenExact:!0}),Object(c.jsx)(L,{to:"/complete",icon:m,label:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"})]}),Object(c.jsx)("button",{type:"button",className:j.menu_load,onClick:function(){return e(N)},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0438"})]})},w=o(63),z=o(64),C=o.p+"static/media/spinner.7689471a.svg",I=function(){return Object(c.jsx)("img",{src:C,className:z.spinner,alt:"spinner"})},A=o(15),E=function(){var e=Object(_.f)().path,t=Object(i.b)(),o=Object(i.c)((function(e){return e.todos.todos})),n=Object(i.c)((function(e){return e.todos.loading})),s=Object(i.c)((function(e){return e.todos.error}));return"complete"===e&&(o=o.filter((function(e){return e.completed}))),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:A.todo_items_list,children:n?Object(c.jsx)(I,{}):s&&"getTodos"===s.type?Object(c.jsxs)("div",{className:A.todo_items_todo_alert,children:[Object(c.jsx)("span",{children:s.text}),Object(c.jsx)("span",{children:s.message})]}):0===o.length?Object(c.jsx)("div",{className:A.todo_items_todo_alert,children:Object(c.jsx)("span",{children:"\u041d\u0435\u0442 \u0437\u0430\u0434\u0430\u0447"})}):o.map((function(e){var o=e.id,n=e.title,s=e.completed;return Object(c.jsxs)("div",{className:A.todo_items_todo,children:[Object(c.jsxs)("div",{className:A.todo_items_todo_checkbox,children:[Object(c.jsx)("input",{id:o,type:"checkbox",checked:!!s,onChange:function(){return t(function(e){return function(t){v.checkedTodo(e).then((function(e){var o=e.data;return t({type:D,payload:o})})).catch((function(e){throw t({type:T,payload:{type:"checkedTodos",message:e.message,text:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445"}}),new x(e,"\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445")}))}}(e))}}),Object(c.jsx)("label",{htmlFor:o,children:b})]}),Object(c.jsx)("div",{className:A.todo_items_todo_title,children:n})]},o)}))})})},S=function(){return Object(c.jsx)("div",{className:w.content,children:Object(c.jsx)(_.c,{children:Object(c.jsx)(_.a,{path:"/:path",component:E})})})},F=o(65),H=function(){return Object(c.jsxs)("div",{className:F.app,children:[Object(c.jsx)(k,{}),Object(c.jsx)(S,{})]})},B=o(13),R=o(66),U=o(174),J=o(67),W=Object(B.combineReducers)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case g:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,error:null,todos:t.payload});case T:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,error:t.payload});case D:var o=e.todos.findIndex((function(e){return e.id===t.payload.id})),c=e.todos[o],n=Object(O.a)(Object(O.a)({},c),{},{completed:!c.completed}),s=[].concat(Object(p.a)(e.todos.slice(0,o)),[n],Object(p.a)(e.todos.slice(o+1)));return Object(O.a)(Object(O.a)({},e),{},{todos:s});case y:default:return e}},form:U.a}),P=Object(B.createStore)(W,Object(R.composeWithDevTools)(Object(B.applyMiddleware)(J.a)));o(171);d.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(r.a,{basename:"/todo-redux-app",children:Object(c.jsx)(i.a,{store:P,children:Object(c.jsx)(H,{})})})}),document.getElementById("root")),l()},63:function(e,t,o){e.exports={content:"Content_content__1uhUL"}},64:function(e,t,o){e.exports={spinner:"Spinner_spinner__1Nh-g"}},65:function(e,t,o){e.exports={app:"App_app__3BT4Y"}}},[[172,1,2]]]);
//# sourceMappingURL=main.1fc5daa6.chunk.js.map