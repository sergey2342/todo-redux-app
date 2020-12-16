(this["webpackJsonptodo-redux-app"]=this["webpackJsonptodo-redux-app"]||[]).push([[0],{13:function(t,e,o){t.exports={todo_items_list:"TodoItems_todo_items_list__27PmT",todo_items_todo:"TodoItems_todo_items_todo__2iwT4",todo_items_todo_close:"TodoItems_todo_items_todo_close__2LWxj",todo_items_todo_title:"TodoItems_todo_items_todo_title__3Djed",todo_items_todo_checkbox:"TodoItems_todo_items_todo_checkbox__dGF5_",todo_items_todo_alert:"TodoItems_todo_items_todo_alert__2A1vC"}},15:function(t,e,o){t.exports={menu:"Menu_menu__Nr1YE",menu_logo:"Menu_menu_logo__2E6QL",menu_list:"Menu_menu_list__3VEl0",menu_item:"Menu_menu_item__1zZKi",active:"Menu_active__25vZT",menu_load:"Menu_menu_load__1-RfD"}},176:function(t,e,o){},177:function(t,e,o){"use strict";o.r(e);var n=o(1),c=o(0),d=o.n(c),a=o(31),s=o.n(a),i=o(10),r=o(18),l=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,180)).then((function(e){var o=e.getCLS,n=e.getFID,c=e.getFCP,d=e.getLCP,a=e.getTTFB;o(t),n(t),c(t),d(t),a(t)}))},_=o(3),u=o(15),j=Object(n.jsx)("svg",{viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"})}),p=Object(n.jsx)("svg",{viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"})}),m=Object(n.jsx)("svg",{viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})}),b=Object(n.jsx)("svg",{viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})}),O=o(35),h=o(4),x=o(65).create({baseURL:"http://localhost:3001/"});function v(t,e){this.message=t.message,this.text=e}var f={getTodos:function(){return x.get("todos/")},checkedTodo:function(t){return x.put("todos/".concat(t.id),Object(h.a)(Object(h.a)({},t),{},{completed:!t.completed}))},addTodo:function(t){return x.post("todos/",t)},removeTodo:function(t){return x.delete("todos/".concat(t))}},g=o(74),y="ADD_TODO_STARTED",T="ADD_TODO_SUCCESS",N="ADD_TODO_FAILURE",D="ADD_TODO",w="CHECKED_TODO",L="REMOVE_TODO",k={loading:!1,error:null,todos:[]},M=function(t){t({type:y,payload:{type:"getTodos"}}),f.getTodos().then((function(e){var o=e.data;return t({type:T,payload:o})})).catch((function(e){throw t({type:N,payload:{type:"getTodos",message:e.message,text:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0437\u0430\u0434\u0430\u0447"}}),new v(e,"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0437\u0430\u0434\u0430\u0447")}))};function C(t){var e=t.label,o=t.icon,c=t.to,d=t.activeOnlyWhenExact,a=Object(_.g)({path:c,exact:d});return Object(n.jsxs)(r.b,{to:c,className:"".concat(u.menu_item," ").concat(a?"".concat(u.active):""),children:[o," ",e]})}var A=function(){var t=Object(i.b)();return Object(n.jsxs)("div",{className:u.menu,children:[Object(n.jsx)("div",{className:u.menu_logo,children:"Todo App"}),Object(n.jsxs)("ul",{className:u.menu_list,children:[Object(n.jsx)(C,{to:"/all",icon:j,label:"\u0412\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438",activeOnlyWhenExact:!0}),Object(n.jsx)(C,{to:"/complete",icon:p,label:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"})]}),Object(n.jsx)("button",{type:"button",className:u.menu_load,onClick:function(){return t(M)},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0438"})]})},E=o(66),z=o(67),I=o.p+"static/media/spinner.7689471a.svg",S=function(){return Object(n.jsx)("img",{src:I,className:z.spinner,alt:"spinner"})},B=o(13),F=function(){var t=Object(_.f)().path,e=Object(i.b)(),o=Object(i.c)((function(t){return t.todos.todos})),c=Object(i.c)((function(t){return t.todos.loading})),d=Object(i.c)((function(t){return t.todos.error}));return"complete"===t&&(o=o.filter((function(t){return t.completed}))),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:B.todo_items_list,children:c&&"getTodos"===c.type?Object(n.jsx)(S,{}):d&&"getTodos"===d.type?Object(n.jsxs)("div",{className:B.todo_items_todo_alert,children:[Object(n.jsx)("span",{children:d.text}),Object(n.jsx)("span",{children:d.message})]}):0===o.length?Object(n.jsx)("div",{className:B.todo_items_todo_alert,children:Object(n.jsx)("span",{children:"\u041d\u0435\u0442 \u0437\u0430\u0434\u0430\u0447"})}):o.map((function(t){var o=t.id,d=t.title,a=t.completed;return Object(n.jsxs)("div",{className:B.todo_items_todo,children:[Object(n.jsxs)("div",{className:B.todo_items_todo_checkbox,children:[c&&"checkedTodos"===c.type&&o===c.id&&Object(n.jsx)(S,{}),Object(n.jsx)("input",{id:o,type:"checkbox",checked:!!a,onChange:function(){return e(function(t){return function(e){e({type:y,payload:{type:"checkedTodos",id:t.id}}),f.checkedTodo(t).then((function(t){var o=t.data;return e({type:w,payload:o})})).catch((function(t){throw e({type:N,payload:{type:"checkedTodos",message:t.message,text:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445"}}),new v(t,"\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445")}))}}(t))}}),Object(n.jsx)("label",{htmlFor:o,children:m})]}),Object(n.jsx)("div",{className:B.todo_items_todo_title,children:d}),Object(n.jsx)("div",{className:B.todo_items_todo_close,onClick:function(){return e(function(t){return function(e){e({type:y,payload:{type:"removeTodo"}}),f.removeTodo(t).then((function(){return e({type:L,payload:t})})).catch((function(t){throw e({type:N,payload:{type:"removeTodo",message:t.message,text:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447\u0438"}}),new v(t,"\u041e\u0448\u0438\u0431\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447\u0438")}))}}(t.id))},children:b})]},o)}))})})},H=o(73),R=o(19),V=function(){var t=Object(c.useState)(""),e=Object(H.a)(t,2),o=e[0],d=e[1],a=Object(i.b)(),s=function(t){var e;t&&a((e=t,function(t){t({type:y,payload:{type:"addTodo"}});var o={id:Object(g.a)(),title:e,completed:!1};f.addTodo(o).then((function(e){var o=e.data;return t({type:D,payload:o})})).catch((function(e){throw t({type:N,payload:{type:"addTodo",message:e.message,text:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447\u0438"}}),new v(e,"\u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447\u0438")}))})),d("")};return Object(n.jsxs)("div",{className:R.add_todo,children:[Object(n.jsx)("div",{className:R.add_todo_title,children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"}),Object(n.jsxs)("div",{className:R.add_todo_form,children:[Object(n.jsx)("input",{className:R.add_todo_input,type:"text",value:o,onChange:function(t){return d(t.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"}),Object(n.jsx)("button",{className:R.add_todo_button,onClick:function(){return s(o)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"})]})]})},W=function(){return Object(n.jsxs)("div",{className:E.content,children:[Object(n.jsx)(V,{}),Object(n.jsx)(_.c,{children:Object(n.jsx)(_.a,{path:"/:path",component:F})})]})},P=o(68),U=function(){return Object(n.jsxs)("div",{className:P.app,children:[Object(n.jsx)(A,{}),Object(n.jsx)(W,{})]})},Z=o(14),J=o(69),K=o(179),Y=o(70),G=Object(Z.combineReducers)({todos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y:return Object(h.a)(Object(h.a)({},t),{},{loading:e.payload});case T:return Object(h.a)(Object(h.a)({},t),{},{loading:!1,error:null,todos:e.payload});case N:return Object(h.a)(Object(h.a)({},t),{},{loading:!1,error:e.payload});case w:var o=t.todos.findIndex((function(t){return t.id===e.payload.id})),n=t.todos[o],c=Object(h.a)(Object(h.a)({},n),{},{completed:!n.completed}),d=[].concat(Object(O.a)(t.todos.slice(0,o)),[c],Object(O.a)(t.todos.slice(o+1)));return Object(h.a)(Object(h.a)({},t),{},{error:null,loading:!1,todos:d});case D:return Object(h.a)(Object(h.a)({},t),{},{loading:!1,error:null,todos:[].concat(Object(O.a)(t.todos),[e.payload])});case L:return Object(h.a)(Object(h.a)({},t),{},{loading:!1,error:null,todos:t.todos.filter((function(t){return t.id!==e.payload}))});default:return t}},form:K.a}),Q=Object(Z.createStore)(G,Object(J.composeWithDevTools)(Object(Z.applyMiddleware)(Y.a)));o(176);s.a.render(Object(n.jsx)(d.a.StrictMode,{children:Object(n.jsx)(r.a,{basename:"/todo-redux-app",children:Object(n.jsx)(i.a,{store:Q,children:Object(n.jsx)(U,{})})})}),document.getElementById("root")),l()},19:function(t,e,o){t.exports={add_todo_title:"AddTodo_add_todo_title__4DmLb",add_todo_form:"AddTodo_add_todo_form__2B28g",add_todo_input:"AddTodo_add_todo_input__2ihww",add_todo_button:"AddTodo_add_todo_button__YTf9Z"}},66:function(t,e,o){t.exports={content:"Content_content__N4mca"}},67:function(t,e,o){t.exports={spinner:"Spinner_spinner__3sj6B"}},68:function(t,e,o){t.exports={app:"App_app__3O4hu"}}},[[177,1,2]]]);
//# sourceMappingURL=main.b89b65e8.chunk.js.map