import{r as e,j as n}from"./index-B5QjSDPG.js";const d="_transition_a681u_1",c={transition:d};function u(){return e.useEffect(()=>{function r(){var a=document.createElement("element"),t={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"mozTransitionEnd",WebkitTransition:"webkitTransitionEnd"};for(var i in t)if(a.style[i]!==void 0)return t[i]}var s=r(),o=document.querySelector("#transition-end");o.addEventListener(s,function(){console.info("动画结束")})},[]),n.jsxs(n.Fragment,{children:[n.jsx("h1",{children:"过渡方法："}),n.jsx("p",{children:"说明：过渡触发 transitionstart、transitionrun。过渡结束 transitioncancel transitionend"}),n.jsx("pre",{children:`
          transition:
          transition-property: all;
          transition-duration: 1s;
          transition-timing-function: linear;
          transition-delay: 2s;`}),n.jsx("div",{id:"transition-end",className:c.transition})]})}export{u as default};
