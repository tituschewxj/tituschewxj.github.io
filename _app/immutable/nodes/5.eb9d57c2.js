import{s as B,e as L,i as b,d as m,D as N,M as ge,u as E,E as q,r as Q,f as J,g as O,h as V,N as H,z as k,A as X,B as Y,C as Z,O as he,L as _,l as $,a as I,m as G,c as S,j as M,y as T,n as ce}from"../chunks/scheduler.8eb8cce6.js";import{S as U,i as F,a as p,t as y,b as v,d as x,m as j,e as C}from"../chunks/index.3dcbec62.js";import{g as fe}from"../chunks/Frame.9ef481a0.js";import{t as me}from"../chunks/Indicator.svelte_svelte_type_style_lang.04ee9e0c.js";import{C as be}from"../chunks/Card.b9b45879.js";function D(r){let e,t,l,a,i,h;const g=r[10].default,c=Q(g,r,r[9],null);let f=[{type:t=r[0]?void 0:r[1]},{href:r[0]},r[3],{class:r[2]},{role:l=r[0]?"button":void 0}],n={};for(let o=0;o<f.length;o+=1)n=E(n,f[o]);return{c(){e=J(r[0]?"a":"button"),c&&c.c(),this.h()},l(o){e=O(o,((r[0]?"a":"button")||"null").toUpperCase(),{type:!0,href:!0,class:!0,role:!0});var s=V(e);c&&c.l(s),s.forEach(m),this.h()},h(){H(r[0]?"a":"button")(e,n)},m(o,s){b(o,e,s),c&&c.m(e,null),a=!0,i||(h=[k(e,"click",r[11]),k(e,"change",r[12]),k(e,"keydown",r[13]),k(e,"keyup",r[14]),k(e,"touchstart",r[15]),k(e,"touchend",r[16]),k(e,"touchcancel",r[17]),k(e,"mouseenter",r[18]),k(e,"mouseleave",r[19])],i=!0)},p(o,s){c&&c.p&&(!a||s&512)&&X(c,g,o,o[9],a?Z(g,o[9],s,null):Y(o[9]),null),H(o[0]?"a":"button")(e,n=fe(f,[(!a||s&3&&t!==(t=o[0]?void 0:o[1]))&&{type:t},(!a||s&1)&&{href:o[0]},s&8&&o[3],(!a||s&4)&&{class:o[2]},(!a||s&1&&l!==(l=o[0]?"button":void 0))&&{role:l}]))},i(o){a||(p(c,o),a=!0)},o(o){y(c,o),a=!1},d(o){o&&m(e),c&&c.d(o),i=!1,he(h)}}}function pe(r){let e=r[0]?"a":"button",t,l,a=(r[0]?"a":"button")&&D(r);return{c(){a&&a.c(),t=L()},l(i){a&&a.l(i),t=L()},m(i,h){a&&a.m(i,h),b(i,t,h),l=!0},p(i,[h]){i[0],e?B(e,i[0]?"a":"button")?(a.d(1),a=D(i),e=i[0]?"a":"button",a.c(),a.m(t.parentNode,t)):a.p(i,h):(a=D(i),e=i[0]?"a":"button",a.c(),a.m(t.parentNode,t))},i(i){l||(p(a,i),l=!0)},o(i){y(a,i),l=!1},d(i){i&&m(t),a&&a.d(i)}}}function ye(r,e,t){const l=["pill","outline","size","href","type","color","shadow"];let a=N(e,l),{$$slots:i={},$$scope:h}=e;const g=ge("group");let{pill:c=!1}=e,{outline:f=!1}=e,{size:n=g?"sm":"md"}=e,{href:o=void 0}=e,{type:s="button"}=e,{color:u=g?f?"dark":"alternative":"primary"}=e,{shadow:w=!1}=e;const z={alternative:"text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus:text-primary-700 dark:focus:text-white dark:hover:text-white",blue:"text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",dark:"text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700",green:"text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700",light:"text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600",primary:"text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700",purple:"text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700",red:"text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700",yellow:"text-white bg-yellow-400 hover:bg-yellow-500 ",none:""},P={alternative:"focus:ring-gray-200 dark:focus:ring-gray-700",blue:"focus:ring-blue-300 dark:focus:ring-blue-800",dark:"focus:ring-gray-300 dark:focus:ring-gray-700",green:"focus:ring-green-300 dark:focus:ring-green-800",light:"focus:ring-gray-200 dark:focus:ring-gray-700",primary:"focus:ring-primary-300 dark:focus:ring-primary-800",purple:"focus:ring-purple-300 dark:focus:ring-purple-900",red:"focus:ring-red-300 dark:focus:ring-red-900",yellow:"focus:ring-yellow-300 dark:focus:ring-yellow-900",none:""},R={alternative:"shadow-gray-500/50 dark:shadow-gray-800/80",blue:"shadow-blue-500/50 dark:shadow-blue-800/80",dark:"shadow-gray-500/50 dark:shadow-gray-800/80",green:"shadow-green-500/50 dark:shadow-green-800/80",light:"shadow-gray-500/50 dark:shadow-gray-800/80",primary:"shadow-primary-500/50 dark:shadow-primary-800/80",purple:"shadow-purple-500/50 dark:shadow-purple-800/80",red:"shadow-red-500/50 dark:shadow-red-800/80 ",yellow:"shadow-yellow-500/50 dark:shadow-yellow-800/80 ",none:""},W={alternative:"text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white focus:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800",blue:"text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600",dark:"text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600",green:"text-green-700 hover:text-white border border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600",light:"text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600",primary:"text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-700 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600",purple:"text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500",red:"text-red-700 hover:text-white border border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600",yellow:"text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400",none:""},ee={xs:"px-3 py-2 text-xs",sm:"px-4 py-2 text-sm",md:"px-5 py-2.5 text-sm",lg:"px-5 py-3 text-base",xl:"px-6 py-3.5 text-base"},te=()=>f||u==="alternative"||u==="light";let K;function re(d){_.call(this,r,d)}function ae(d){_.call(this,r,d)}function oe(d){_.call(this,r,d)}function le(d){_.call(this,r,d)}function ne(d){_.call(this,r,d)}function se(d){_.call(this,r,d)}function ie(d){_.call(this,r,d)}function de(d){_.call(this,r,d)}function ue(d){_.call(this,r,d)}return r.$$set=d=>{t(27,e=E(E({},e),q(d))),t(3,a=N(e,l)),"pill"in d&&t(4,c=d.pill),"outline"in d&&t(5,f=d.outline),"size"in d&&t(6,n=d.size),"href"in d&&t(0,o=d.href),"type"in d&&t(1,s=d.type),"color"in d&&t(7,u=d.color),"shadow"in d&&t(8,w=d.shadow),"$$scope"in d&&t(9,h=d.$$scope)},r.$$.update=()=>{t(2,K=me("text-center font-medium",g?"focus:ring-2":"focus:ring-4",g&&"focus:z-10",g||"focus:outline-none","inline-flex items-center justify-center "+ee[n],f?W[u]:z[u],u==="alternative"&&(g?"dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600":"dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-700"),f&&u==="dark"&&(g?"dark:text-white dark:border-white":"dark:text-gray-400 dark:border-gray-700"),P[u],te()&&g&&"border-l-0 first:border-l",g?c&&"first:rounded-l-full last:rounded-r-full"||"first:rounded-l-lg last:rounded-r-lg":c&&"rounded-full"||"rounded-lg",w&&"shadow-lg",w&&R[u],e.disabled&&"cursor-not-allowed opacity-50",e.class))},e=q(e),[o,s,K,a,c,f,n,u,w,h,i,re,ae,oe,le,ne,se,ie,de,ue]}class ke extends U{constructor(e){super(),F(this,e,ye,pe,B,{pill:4,outline:5,size:6,href:0,type:1,color:7,shadow:8})}}function _e(r){let e;return{c(){e=$("Learn more")},l(t){e=G(t,"Learn more")},m(t,l){b(t,e,l)},d(t){t&&m(e)}}}function we(r){let e,t,l,a,i,h,g;const c=r[2].default,f=Q(c,r,r[3],null);return h=new ke({props:{href:r[1],class:"absolute bottom-6 right-6",$$slots:{default:[_e]},$$scope:{ctx:r}}}),{c(){e=J("p"),t=$(r[0]),l=I(),a=J("p"),f&&f.c(),i=I(),v(h.$$.fragment),this.h()},l(n){e=O(n,"P",{class:!0});var o=V(e);t=G(o,r[0]),o.forEach(m),l=S(n),a=O(n,"P",{class:!0});var s=V(a);f&&f.l(s),s.forEach(m),i=S(n),x(h.$$.fragment,n),this.h()},h(){M(e,"class","mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"),M(a,"class","font-mormal mb-16 whitespace-normal text-sm text-gray-700 dark:text-gray-400")},m(n,o){b(n,e,o),T(e,t),b(n,l,o),b(n,a,o),f&&f.m(a,null),b(n,i,o),j(h,n,o),g=!0},p(n,o){(!g||o&1)&&ce(t,n[0]),f&&f.p&&(!g||o&8)&&X(f,c,n,n[3],g?Z(c,n[3],o,null):Y(n[3]),null);const s={};o&2&&(s.href=n[1]),o&8&&(s.$$scope={dirty:o,ctx:n}),h.$set(s)},i(n){g||(p(f,n),p(h.$$.fragment,n),g=!0)},o(n){y(f,n),y(h.$$.fragment,n),g=!1},d(n){n&&(m(e),m(l),m(a),m(i)),f&&f.d(n),C(h,n)}}}function ve(r){let e,t;return e=new be({props:{class:"relative",$$slots:{default:[we]},$$scope:{ctx:r}}}),{c(){v(e.$$.fragment)},l(l){x(e.$$.fragment,l)},m(l,a){j(e,l,a),t=!0},p(l,[a]){const i={};a&11&&(i.$$scope={dirty:a,ctx:l}),e.$set(i)},i(l){t||(p(e.$$.fragment,l),t=!0)},o(l){y(e.$$.fragment,l),t=!1},d(l){C(e,l)}}}function xe(r,e,t){let{$$slots:l={},$$scope:a}=e,{title:i="no title"}=e,{link:h="/"}=e;return r.$$set=g=>{"title"in g&&t(0,i=g.title),"link"in g&&t(1,h=g.link),"$$scope"in g&&t(3,a=g.$$scope)},[i,h,l,a]}class A extends U{constructor(e){super(),F(this,e,xe,ve,B,{title:0,link:1})}}function je(r){let e;return{c(){e=$(`I created a full stack application using a React-Typescript frontend, and a Ruby on Rails\r
		backend for the Computing for Voluntary Welfare Organisations (CVWO) Assignment.`)},l(t){e=G(t,`I created a full stack application using a React-Typescript frontend, and a Ruby on Rails\r
		backend for the Computing for Voluntary Welfare Organisations (CVWO) Assignment.`)},m(t,l){b(t,e,l)},d(t){t&&m(e)}}}function Ce(r){let e;return{c(){e=$(`Working as a pair, I designed and implemented the Arcade 2D module in Source Academy using\r
		Typescript, React, and Phaser 3.`)},l(t){e=G(t,`Working as a pair, I designed and implemented the Arcade 2D module in Source Academy using\r
		Typescript, React, and Phaser 3.`)},m(t,l){b(t,e,l)},d(t){t&&m(e)}}}function $e(r){let e;return{c(){e=$("I created a game in the span of 48 hours for the GMTK Game Jam 2023 using Unity.")},l(t){e=G(t,"I created a game in the span of 48 hours for the GMTK Game Jam 2023 using Unity.")},m(t,l){b(t,e,l)},d(t){t&&m(e)}}}function Ge(r){let e;return{c(){e=$("I created a game in a week for the Gamecraft! 2022 Game Jam using Unity.")},l(t){e=G(t,"I created a game in a week for the Gamecraft! 2022 Game Jam using Unity.")},m(t,l){b(t,e,l)},d(t){t&&m(e)}}}function Ie(r){let e;return{c(){e=$("I created this website using Svelte, Tailwind, and the Flowbite Svelte component library.")},l(t){e=G(t,"I created this website using Svelte, Tailwind, and the Flowbite Svelte component library.")},m(t,l){b(t,e,l)},d(t){t&&m(e)}}}function Se(r){let e,t,l,a,i,h,g,c,f,n,o;return t=new A({props:{title:"CVWO Assignment",link:"https://github.com/tituschewxj/gossip-app",$$slots:{default:[je]},$$scope:{ctx:r}}}),a=new A({props:{title:"Arcade 2D",link:"https://github.com/source-academy/modules",$$slots:{default:[Ce]},$$scope:{ctx:r}}}),h=new A({props:{title:"Boxes",link:"https://github.com/tituschewxj/GMTK-Game-Jam-2023-Boxes",$$slots:{default:[$e]},$$scope:{ctx:r}}}),c=new A({props:{title:"Ster",link:"https://github.com/tituschewxj/Gamecraft-2022-Game-Jam-Ster",$$slots:{default:[Ge]},$$scope:{ctx:r}}}),n=new A({props:{title:"Porfolio Website",link:"https://github.com/tituschewxj/tituschewxj.github.io",$$slots:{default:[Ie]},$$scope:{ctx:r}}}),{c(){e=J("div"),v(t.$$.fragment),l=I(),v(a.$$.fragment),i=I(),v(h.$$.fragment),g=I(),v(c.$$.fragment),f=I(),v(n.$$.fragment),this.h()},l(s){e=O(s,"DIV",{class:!0});var u=V(e);x(t.$$.fragment,u),l=S(u),x(a.$$.fragment,u),i=S(u),x(h.$$.fragment,u),g=S(u),x(c.$$.fragment,u),f=S(u),x(n.$$.fragment,u),u.forEach(m),this.h()},h(){M(e,"class","grid gap-4 md:grid-cols-2")},m(s,u){b(s,e,u),j(t,e,null),T(e,l),j(a,e,null),T(e,i),j(h,e,null),T(e,g),j(c,e,null),T(e,f),j(n,e,null),o=!0},p(s,[u]){const w={};u&1&&(w.$$scope={dirty:u,ctx:s}),t.$set(w);const z={};u&1&&(z.$$scope={dirty:u,ctx:s}),a.$set(z);const P={};u&1&&(P.$$scope={dirty:u,ctx:s}),h.$set(P);const R={};u&1&&(R.$$scope={dirty:u,ctx:s}),c.$set(R);const W={};u&1&&(W.$$scope={dirty:u,ctx:s}),n.$set(W)},i(s){o||(p(t.$$.fragment,s),p(a.$$.fragment,s),p(h.$$.fragment,s),p(c.$$.fragment,s),p(n.$$.fragment,s),o=!0)},o(s){y(t.$$.fragment,s),y(a.$$.fragment,s),y(h.$$.fragment,s),y(c.$$.fragment,s),y(n.$$.fragment,s),o=!1},d(s){s&&m(e),C(t),C(a),C(h),C(c),C(n)}}}class We extends U{constructor(e){super(),F(this,e,null,Se,B,{})}}export{We as component};
