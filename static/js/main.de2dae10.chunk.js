(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{188:function(e,t,a){e.exports=a(340)},340:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(38),c=a.n(o),l=a(39),i=a(34),m=a(18),s=a(347),u=a(344),p=a(177),h=a(345),E=function(){return r.a.createElement(s.a,{fixed:"top",inverted:!0},r.a.createElement(u.a,null,r.a.createElement(s.a.Item,{header:!0},r.a.createElement(l.b,{to:"/"},r.a.createElement(p.a,{size:"mini",src:"/logo.png",style:{marginRight:"1.5em"}}),"My Favorite Movies")),r.a.createElement(s.a.Item,null,r.a.createElement(l.b,{to:"/"},"Home")),r.a.createElement(h.a,{item:!0,simple:!0,text:"Dropdown"},r.a.createElement(h.a.Menu,null,r.a.createElement(h.a.Item,null,"List Item"),r.a.createElement(h.a.Item,null,"List Item"),r.a.createElement(h.a.Divider,null),r.a.createElement(h.a.Header,null,"Header Item"),r.a.createElement(h.a.Item,null,r.a.createElement("i",{className:"dropdown icon"}),r.a.createElement("span",{className:"text"},"Submenu"),r.a.createElement(h.a.Menu,null,r.a.createElement(h.a.Item,null,"List Item"),r.a.createElement(h.a.Item,null,"List Item"))),r.a.createElement(h.a.Item,null,"List Item")))))},d=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(E,null),e.children)},f=a(110),v=a.n(f),w=a(175),b=a(76),g=a(77),y=a(79),I=a(78),j=a(80),O=a(348),k=a(346),x=a(176),L=a.n(x),M=function(){return L.a.get("".concat("https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3","/movie/popular").concat("?api_key=274eff2cd363c15f8db65ce717551a9a")).then(function(e){return e.data.results})},C=a(111),H=function(e){return r.a.createElement(k.a,{image:"https://image.tmdb.org/t/p/w500/".concat(e.info.poster_path),header:e.info.title,meta:e.info.overview,as:l.b,to:"movies/".concat((t=e.info.title,t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"-").replace(/^-+|-+$/g,""))),extra:r.a.createElement("span",null,r.a.createElement(C.a,{name:"star"}),e.info.vote_average,"/10")});var t},W=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(y.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={show:!1,movies:[]},a.componentWillMount=Object(w.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:t=e.sent,a.setState(function(){return{show:!0,movies:t}});case 4:case"end":return e.stop()}},e)})),a}return Object(j.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{style:{marginTop:"5em"}},r.a.createElement(O.a,{as:"h1"},"Popular Movies"),r.a.createElement(k.a.Group,{itemsPerRow:4},this.state.show&&this.state.movies.map(function(e){return r.a.createElement(H,{key:e.id,info:e})})))}}]),t}(n.Component),$=function(e){function t(){return Object(b.a)(this,t),Object(y.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{style:{marginTop:"5em"}},r.a.createElement(O.a,{as:"h1"},this.props.match.params.id))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));M().then(function(e){return console.log(e)});var _=r.a.createElement(l.a,{history:Object(m.a)(),basename:"/"},r.a.createElement(d,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",component:W,exact:!0}),r.a.createElement(i.a,{path:"/movies/:id",component:$}))));c.a.render(_,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[188,1,2]]]);
//# sourceMappingURL=main.de2dae10.chunk.js.map