(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[6],{32:function(t,n,e){"use strict";e.d(n,"e",(function(){return o})),e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return u})),e.d(n,"c",(function(){return s})),e.d(n,"d",(function(){return h}));var r=e(35),a=e.n(r),c="ab234249b42ad0b5c11163146e7a690b",o=function(){var t="https://api.themoviedb.org/3/trending/all/day?api_key=".concat(c);return a.a.get(t).then((function(t){if(200===t.status)return t;throw Error("".concat(t.status," ").concat(t.statusText))}))},i=function(t){var n="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c,"&language=en-US");return a.a.get(n).then((function(t){if(200===t.status)return t;throw Error("".concat(t.status," ").concat(t.statusText))}))},u=function(t){var n="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c);return a.a.get(n).then((function(t){if(200===t.status)return t;throw Error("".concat(t.status," ").concat(t.statusText))}))},s=function(t){var n="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1");return a.a.get(n).then((function(t){if(200===t.status)return t;throw Error("".concat(t.status," ").concat(t.statusText))}))},h=function(t){var n="https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(t,"&page=1&include_adult=false");return a.a.get(n).then((function(t){if(200===t.status)return t;throw Error("".concat(t.status," ").concat(t.statusText))}))}},70:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return d}));var r=e(33),a=e(34),c=e(37),o=e(36),i=e(0),u=e(9),s=e(32),h=e(1),d=function(t){Object(c.a)(e,t);var n=Object(o.a)(e);function e(){var t;Object(r.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=n.call.apply(n,[this].concat(c))).state={trending:[]},t.componentDidMount=function(){Object(s.e)().then((function(n){var e=n.data;return t.setState({trending:e.results})}))},t}return Object(a.a)(e,[{key:"render",value:function(){var t=this,n=this.state.trending;return Object(h.jsxs)(i.Fragment,{children:[Object(h.jsx)("h1",{children:"Trending today"}),Object(h.jsx)("ul",{children:n.map((function(n){return"movie"===n.media_type?Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:{pathname:"/movies/".concat(n.id),state:{from:t.props.location}},children:n.title})},n.id):null}))})]})}}]),e}(i.Component)}}]);
//# sourceMappingURL=6.7014c553.chunk.js.map