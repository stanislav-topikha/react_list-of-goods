(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var s=n(7),r=n.n(s),a=n(2),c=n(3),i=n(5),l=n(4),o=n(1),h=n.n(o),u=(n(12),n(0)),d=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={isReverse:!1,sortedBy:"default",lengthLimit:1},t.handleReverseBtn=function(){t.setState((function(t){return{isReverse:!t.isReverse}}))},t.handleAlphtSortBtn=function(){return t.sortSwitch("alphabet")},t.handleLengthtSortBtn=function(){return t.sortSwitch("length")},t.handleResetBtn=function(){t.setState({isReverse:!1,sortedBy:"default",lengthLimit:1})},t.handleSelectChange=function(e){t.setState({lengthLimit:+e.target.value})},t}return Object(c.a)(n,[{key:"sortSwitch",value:function(t){this.setState((function(e){return e.sortedBy===t?{sortedBy:"default"}:{sortedBy:t}}))}},{key:"render",value:function(){var t=this.state,e=t.isReverse,n=t.sortedBy,s=t.lengthLimit,r=this.props.goods.filter((function(t){return t.length>=s}));return r.sort((function(t,e){switch(n){case"alphabet":return t.localeCompare(e);case"length":return t.length-e.length;default:return 0}})),e&&r.reverse(),Object(u.jsxs)("div",{className:"columns",children:[Object(u.jsxs)("div",{className:" is-flex is-flex-direction-column mr-6 column is-4 is-offset-8 ",children:[Object(u.jsx)("button",{type:"button",onClick:this.handleResetBtn,className:"button mb-2 is-danger",children:"Reset"}),Object(u.jsx)("button",{type:"button",onClick:this.handleReverseBtn,className:"button mb-2 is-light",children:"Reverse"}),Object(u.jsx)("button",{type:"button",onClick:this.handleAlphtSortBtn,className:"button mb-2 is-light",children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",onClick:this.handleLengthtSortBtn,className:"button mb-2 is-light",children:"Sort by length"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Length >= "}),Object(u.jsx)("div",{className:"select",children:Object(u.jsx)("select",{value:s,name:"select",onChange:this.handleSelectChange,defaultValue:s,children:Array.from(Array(11).keys()).slice(1).map((function(t){return Object(u.jsx)("option",{value:t,children:t},t)}))})})]})]}),Object(u.jsx)("ul",{className:"column",children:r.map((function(t){return Object(u.jsx)("li",{className:" panel-block subtitle is-5 ",children:t},t)}))})]})}}]),n}(h.a.Component),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={listShown:!1},t.handleStartBtn=function(){return t.setState((function(t){return{listShown:!t.listShown}}))},t}return Object(c.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:" container is-max-desktop ",children:[Object(u.jsx)("h1",{className:"title is-1 has-text-centered",children:"Goods"}),this.state.listShown?Object(u.jsx)(d,{goods:b}):Object(u.jsx)("button",{type:"button",onClick:this.handleStartBtn,className:"is-fullwidth button is-success ",children:"Start"})]})}}]),n}(h.a.Component),f=j;r.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e0b141b4.chunk.js.map