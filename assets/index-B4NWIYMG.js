import{j as n}from"./index-B5QjSDPG.js";const a="_content_1ozh3_1",l="_transform_1ozh3_6",m="_element_1ozh3_12",e={content:a,transform:l,element:m};function i(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:e.content,children:n.jsx("div",{className:e.transform,children:n.jsx("div",{className:e.element,children:"Css3"})})})})}const d="_content_5i24h_1",_="_transform_5i24h_6",x="_element_5i24h_13",t={content:d,transform:_,element:x};function h(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:t.content,children:n.jsx("div",{className:t.transform,children:n.jsx("div",{className:t.element,children:"rotateX"})})})})}const f="_content_1o83c_1",j="_transform_1o83c_6",g="_element_1o83c_13",s={content:f,transform:j,element:g};function v(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:s.content,children:n.jsx("div",{className:s.transform,children:n.jsx("div",{className:s.element,children:"scale3d"})})})})}const $="_content_1p0tg_1",N="_transform_1p0tg_6",p="_element_1p0tg_13",r={content:$,transform:N,element:p};function y(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:r.content,children:n.jsx("div",{className:r.transform,children:n.jsx("div",{className:r.element,children:"skew"})})})})}const u="_content_yhwsg_1",b="_transform_yhwsg_6",z="_element_yhwsg_13",c={content:u,transform:b,element:z};function F(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:c.content,children:n.jsx("div",{className:c.transform,children:n.jsx("div",{className:c.element,children:"translateZ"})})})})}const P="_box_n7p2n_2",w="_transform_n7p2n_12",k="_child_n7p2n_21",o={box:P,transform:w,child:k};function C(){return n.jsxs(n.Fragment,{children:[n.jsx("h1",{children:"3D 转换方法："}),n.jsx("pre",{children:`
          transform: translate3d(x,y,z) 偏移
          transform: rotate3d(x,y,z, angle) 旋转
          transform: scale3d(x,y,z) 缩放
          transform: skew(x-angle, y-angle) 倾斜
          transform: matrix3d()

          transform-origin: 20% 40%; 基点位置
          transform-style: preserve-3d; //规定被嵌套元素如何在 3D 空间中显示
          perspective: // 视图的距离
          perspective-origin: // 底部位置
          backface-visibility: hidden; //不面向屏幕时是否可见
        `}),n.jsx("div",{className:o.box,children:n.jsxs("div",{className:o.transform,children:["transform3d",n.jsx("div",{className:o.child,children:"child"})]})}),n.jsxs("div",{children:[n.jsx(F,{}),n.jsx(y,{}),n.jsx(h,{}),n.jsx(v,{}),n.jsx(i,{})]})]})}export{C as default};
