(this["webpackJsonplardi-trans"]=this["webpackJsonplardi-trans"]||[]).push([[0],{11:function(t,A,e){"use strict";e.r(A);var n=e(1),o=e.n(n),a=e(4),r=e.n(a),i=(e(9),e(2)),u=e(0),d=function(t){var A=t.count;return Object(u.jsx)("div",{className:"count",children:A})},k=function(t){var A,e=t.boxClassName,o=t.addBoxPositionFunc;function a(){for(var t=0;t<A.length;t++){var e=A[t];e.style.background="gray";var n=window.innerWidth,a=window.innerHeight,r=Math.random()*(a-100),i=Math.random()*(n-100);e.style.top=r+"px",e.style.left=i+"px",o([e.getBoundingClientRect().top,e.getBoundingClientRect().left])}}return Object(n.useEffect)((function(){A=document.getElementsByClassName(e),window.setInterval(a,5e3)}),[window]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"".concat(e," box-style")})})},c=function(t){var A=t.totalBoxes,e=t.tankPosition,o=t.setCheckingCount,a=t.setBoxPositionState,r=t.boxPositionState,d=t.boxDocument,c=Object(n.useState)(),l=Object(i.a)(c,2),s=l[0],C=l[1],f=[];function I(t){f.push(t),f.length===g.length&&(a(f),f=[])}for(var g=[],S=0;S<A;S++)g.push(S+1);return Object(n.useEffect)((function(){for(var t=[],A=function(A,n,a){var r=A&&A.offsetHeight/2,i=r+e[0]-(r+n),u=r+e[1]-(r+a),k=Math.sqrt(Math.pow(i,2)+Math.pow(u,2));t.push(k),C(t),o(!1);for(var c=0;c<d.length;c++)(null===s||void 0===s?void 0:s[c])<45&&(d[c].style.background="black",o(!0))},n=0;n<d.length;n++){var a,i;A(d[n],null===(a=r[n])||void 0===a?void 0:a[0],null===(i=r[n])||void 0===i?void 0:i[1])}}),[e,C]),Object(u.jsx)("div",{className:"allBoxes",children:g.map((function(t){return Object(u.jsx)(k,{addBoxPositionFunc:I,boxClassName:"box".concat(t)},t)}))})},l=function(t){var A=t.shootTank,e=t.setShoot,o=t.tankPosition,a=t.boxPositionState,r=t.boxDocument,i=t.setCheckingCount,d=null,k={"rotate(270deg)":function(t){t.style.left="0px";var A=t.getBoundingClientRect().left;function n(t,A,e){setTimeout((function(){o[1]>A&&o[0]>e-15&&o[0]<e+25&&"black"!=t.style.background&&(t.style.background="black",i(!0))}),500)}t.style.left=-A+"px";for(var u=0;u<r.length;u++){var k,c;n(r[u],null===(k=a[u])||void 0===k?void 0:k[1],null===(c=a[u])||void 0===c?void 0:c[0])}d=setInterval((function(){e(!1),clearInterval(d)}),500)},"rotate(90deg)":function(t){t.style.left="50px";var A=window.innerWidth-t.getBoundingClientRect().right;function n(t,A,e){setTimeout((function(){o[1]<A&&o[0]>e-20&&o[0]<e+10&&"black"!=t.style.background&&(t.style.background="black",i(!0))}),500)}t.style.left=A+45+"px";for(var u=0;u<r.length;u++){var k,c;n(r[u],null===(k=a[u])||void 0===k?void 0:k[1],null===(c=a[u])||void 0===c?void 0:c[0])}d=setInterval((function(){clearInterval(d),e(!1)}),500)},"rotate(360deg)":function(t){t.style.top="0px";var A=t.getBoundingClientRect().top;function n(t,A,e){setTimeout((function(){o[0]>A&&o[1]>e-25&&o[1]<e+5&&"black"!=t.style.background&&(t.style.background="black",i(!0))}),500)}t.style.top=-A+"px";for(var u=0;u<r.length;u++){var k,c;n(r[u],null===(k=a[u])||void 0===k?void 0:k[0],null===(c=a[u])||void 0===c?void 0:c[1])}d=setInterval((function(){clearInterval(d),e(!1)}),500)},"rotate(180deg)":function(t){t.style.top="60px";var A=window.innerHeight-t.getBoundingClientRect().bottom;function n(t,A,e){setTimeout((function(){o[0]<A&&o[1]>e-25&&o[1]<e+5&&"black"!=t.style.background&&(t.style.background="black",i(!0))}),500)}t.style.top=A+60+"px";for(var u=0;u<r.length;u++){var k,c;n(r[u],null===(k=a[u])||void 0===k?void 0:k[0],null===(c=a[u])||void 0===c?void 0:c[1])}d=setInterval((function(){clearInterval(d),e(!1)}),500)}};return A=function(){var t=document.getElementById("tank"),A=document.getElementById("bullet");A.style.background="white",k[t.style.transform](A)},Object(n.useEffect)((function(){return window.addEventListener("keypress",A),function(){window.removeEventListener("keypress",A)}}),[A]),Object(u.jsx)("div",{id:"bullet"})},s=function(t){var A=t.shoot,e=t.setShoot,o=t.tankPosition,a=t.setTankPosition,r=t.boxPositionState,i=t.boxDocument,d=t.setCheckingCount,k={37:function(t){document.getElementById("tank").style.transform="rotate(270deg)";var A=t.getBoundingClientRect().left;0!==A&&(t.style.transform+="translateX(-".concat(A-5<0?A:5,"px)"))},39:function(t){document.getElementById("tank").style.transform="rotate(90deg)";var A=window.innerWidth-t.getBoundingClientRect().right;0!==A&&(t.style.transform+="translateX(".concat(A-5<0?A:5,"px)"))},38:function(t){document.getElementById("tank").style.transform="rotate(360deg)";var A=t.getBoundingClientRect().top;0!==A&&(t.style.transform+="translateY(".concat(A-5<0?-A:-5,"px)"))},40:function(t){document.getElementById("tank").style.transform="rotate(180deg)";var A=window.innerHeight-t.getBoundingClientRect().bottom;0!==A&&(t.style.transform+="translateY(".concat(A-5<0?A:5,"px)"))},32:function(){e(!0)}},c=function(t){var A=document.getElementById("tankBox");37!=t.keyCode&&38!=t.keyCode&&39!=t.keyCode&&40!=t.keyCode&&32!=t.keyCode||k[t.keyCode](A),a([A.getBoundingClientRect().top,A.getBoundingClientRect().left])};return Object(n.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}})),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{id:"tankBox",children:[Object(u.jsx)("img",{id:"tank",src:"data:image/png;base64,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",alt:"tank"}),A?Object(u.jsx)(l,{setShoot:e,boxPositionState:r,boxDocument:i,setCheckingCount:d,tankPosition:o}):""]})})};var C=function(){for(var t=Object(n.useState)(0),A=Object(i.a)(t,2),e=A[0],o=A[1],a=Object(n.useState)(!1),r=Object(i.a)(a,2),k=r[0],l=r[1],C=Object(n.useState)(!1),f=Object(i.a)(C,2),I=f[0],g=f[1],S=Object(n.useState)([]),v=Object(i.a)(S,2),b=v[0],B=v[1],E=Object(n.useState)([]),p=Object(i.a)(E,2),Q=p[0],m=p[1],h=[],x=document.getElementById("tankBox"),J=0;J<Q.length;J++){var U=J+1;h.push(document.querySelector(".box"+U))}return Object(n.useEffect)((function(){I&&o((function(t){return t+1}))}),[I]),Object(u.jsxs)("div",{className:"main",children:[Object(u.jsx)(d,{count:e}),Object(u.jsx)(s,{shoot:k,setShoot:l,tankPosition:b,setTankPosition:B,boxPositionState:Q,boxDocument:h,setCheckingCount:g}),Object(u.jsx)(c,{tank:x,setCount:o,totalBoxes:4,tankPosition:b,setCheckingCount:g,boxPositionState:Q,setBoxPositionState:m,boxDocument:h})]})};var f=function(){return Object(u.jsx)(C,{})};r.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))},9:function(t,A,e){}},[[11,1,2]]]);
//# sourceMappingURL=main.356573d6.chunk.js.map