(this.webpackJsonpmemory_game=this.webpackJsonpmemory_game||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(7),c=n.n(a),i=(n(14),n(15),n(8)),s=n(1),l=n(2),u=n(4),d=n(3),v=n(5),m=(n(16),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={},n}return Object(v.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.col,n=e.row,o=e.isActive,a=e.cellId,c=e.onMouseDown,i=o?"node-active":"";return r.a.createElement("div",{id:"node-".concat(n,"-").concat(t),className:"node ".concat(i),onMouseDown:function(){return c(n,t)}},r.a.createElement("div",{className:"node-num"},a))}}]),t}(o.Component)),f=(n(17),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={grid:[],mouseIsPressed:!1,nodesPlayed:[]},n}return Object(v.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=h();this.setState({grid:e})}},{key:"handleMouseDown",value:function(e,t){var n=p(this.state.grid,e,t),o=n[e][t];this.state.nodesPlayed.push(o.cellId),1===this.state.nodesPlayed.length&&this.startGame(),this.gameLogic(o.cellId),this.setState({grid:n,mouseIsPressed:!0})}},{key:"startGame",value:function(){var e,t;window.screen.width<=800?(e=5,t=8):(e=10,t=5);for(var n=this.state.grid,o=0;o<t;o++)for(var r=function(){var e=n[o][a];setTimeout((function(){1===e.isActive&&(document.getElementById("node-".concat(e.row,"-").concat(e.col)).style.color="white"),console.log(e.isActive)}),10*o)},a=0;a<e;a++)r()}},{key:"gameOver",value:function(){var e,t,n=window.screen.width;document.getElementById("gameOverId").style.visibility="visible",n<=800?(e=5,t=8):(e=10,t=5);for(var o=this.state.grid,r=0;r<t;r++)for(var a=function(){var e=o[r][c];setTimeout((function(){document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node node-gameover"}),100*r)},c=0;c<e;c++)a()}},{key:"gameLogic",value:function(e){this.state.nodesPlayed.length!==e&&(console.log("Game Over"),this.gameOver())}},{key:"render",value:function(){var e=this,t=this.state.grid;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid"},r.a.createElement("div",{id:"gameOverId",className:"gameOver"},"Game Over!"),t.map((function(t,n){return r.a.createElement("div",{key:n},t.map((function(t,n){var o=t.row,a=t.col,c=t.isActive,i=t.cellId;return r.a.createElement(m,{key:n,col:a,onMouseDown:function(t,n){return e.handleMouseDown(t,n)},row:o,isActive:c,cellId:i})})))}))),r.a.createElement("button",{id:"play",onClick:function(){window.location.reload()}},"Refresh"))}}]),t}(o.Component)),h=function(){var e,t,n=[];window.screen.width<=800?(e=5,t=8):(e=10,t=5);for(var o=0;o<t;o++){for(var r=[],a=0;a<e;a++)r.push(y(a,o));n.push(r)}return n},w=function(e){for(var t,n,o=e.length;0!==o;)n=Math.floor(Math.random()*o),t=e[o-=1],e[o]=e[n],e[n]=t;for(var r=e.slice(0,9),a=0;a<r.length;a++)Object.assign(r[a],{id:a+1});return r}(function(){var e,t,n=[];window.screen.width<=800?(e=5,t=8):(e=10,t=5);for(var o=0,r=0;r<t;r++)for(var a=0;a<e;a++){var c={index:o+=1,row:r,col:a,id:0};n.push(c)}return n}()),g=function(e,t,n){var o=e.filter((function(e){return e.row===t&&e.col===n}));return void 0===o||0===o.length?void 0:o[0].id},y=function(e,t){return{col:e,row:t,isActive:(t===w[0].row&&e===w[0].col)|(t===w[1].row&&e===w[1].col)|(t===w[2].row&&e===w[2].col)|(t===w[3].row&&e===w[3].col)|(t===w[4].row&&e===w[4].col)|(t===w[5].row&&e===w[5].col)|(t===w[6].row&&e===w[6].col)|(t===w[7].row&&e===w[7].col)|(t===w[8].row&&e===w[8].col),cellId:g(w,t,e)}},p=function(e,t,n){var o=e.slice(),r=o[t][n],a=Object(i.a)({},r,{isActive:!r.isActive});return o[t][n]=a,o};var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.7e39af9e.chunk.js.map