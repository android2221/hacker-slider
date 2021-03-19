(this["webpackJsonphacker-scroller"]=this["webpackJsonphacker-scroller"]||[]).push([[0],{17:function(t,e,n){},21:function(t,e,n){},29:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var s=n(1),r=n.n(s),a=n(6),c=n.n(a),i=(n(17),n(10)),o=n(2),l=n.n(o),u=n(3),d=n(7),m=n(8),h=n(12),j=n(11),f=n(5),p=n.n(f),b=n(9),v=n.n(b),x=(n(21),n(0)),O=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(d.a)(this,n),(t=e.call(this)).trackScrolling=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=document.getElementById("bottom-element"),!t.isBottom(n)){e.next=5;break}if(t.state.loading){e.next=5;break}return e.next=5,t.getData();case 5:case"end":return e.stop()}}),e)}))),t.state={topStories:[],storyData:[],currentStoriesSlice:[],displayData:[],currentOffset:10,storiesToLoad:10,loading:!0},t.mounted=!1,t}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.mounted=!0,!this.mounted){t.next=5;break}return t.next=4,this.getData();case 4:document.addEventListener("scroll",this.trackScrolling);case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.trackScrolling)}},{key:"isBottom",value:function(t){return t.getBoundingClientRect().bottom<=window.innerHeight+1}},{key:"getData",value:function(){var t=Object(u.a)(l.a.mark((function t(){var e,n,s,r,a,c,o,d;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({loading:!0}),e=this.state.currentOffset-this.state.storiesToLoad,t.next=4,fetch("https://hacker-news.firebaseio.com/v0/topstories.json");case 4:return n=t.sent,t.next=7,n.json();case 7:return s=t.sent,r=s.slice(e,this.state.currentOffset),t.next=11,Promise.all(r.map(function(){var t=Object(u.a)(l.a.mark((function t(e){var n,s,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://hacker-news.firebaseio.com/v0/item/".concat(e,".json"));case 2:return n=t.sent,t.next=5,n.json();case 5:if(!(s=t.sent).kids){t.next=10;break}return t.next=9,Promise.all(s.kids.slice(0,10).map(function(){var t=Object(u.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://hacker-news.firebaseio.com/v0/item/".concat(e,".json"));case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 9:r=t.sent;case 10:return t.abrupt("return",{story:s,topComments:r});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 11:a=t.sent,(c=this.state.storyData).push.apply(c,Object(i.a)(a)),o=this.state.currentOffset+this.state.storiesToLoad,d=[],void 0!==this.state.storyData&&(d=this.state.storyData.map((function(t,e){var n,s,r=t.story,a=t.topComments,c="https://news.ycombinator.com/item?id=".concat(r.id);if(r.url){var i=r.url.split("/");n=r.url,s=i[2]}else s="news.ycombinator.com",n="https://news.ycombinator.com/item?id=".concat(r.id);return Object(x.jsxs)("div",{className:"hacker-card",children:[Object(x.jsx)("h2",{className:"story-title",children:Object(x.jsx)("a",{href:n,children:r.title})}),Object(x.jsx)("div",{className:"story-url",children:s}),Object(x.jsxs)("div",{className:"points-info",children:[r.score," points by ",r.by," | ",r.descendants?r.descendants:0," comments | ",Object(x.jsx)(v.a,{unix:!0,fromNow:!0,children:r.time})]}),Object(x.jsxs)("div",{className:"top-comments",children:[void 0!==a?Object(x.jsx)("h3",{children:"Top Comments"}):"",void 0!==a?a.map((function(t,e){return Object(x.jsxs)("div",{className:"comment",children:[Object(x.jsxs)("div",{className:"comment-by",children:[t.by," said:"]}),Object(x.jsx)("div",{className:"comment-text",dangerouslySetInnerHTML:{__html:t.text}})]},e)})):Object(x.jsx)("div",{className:"no-comments",children:"No comments yet"})]}),Object(x.jsx)("div",{className:"see-on-hn-overlay",children:Object(x.jsx)("div",{className:"see-on-hn",children:Object(x.jsx)("a",{href:c,children:"Read on HN"})})})]},e)}))),this.setState({topStories:s,storyData:c,currentStoriesSlice:r,currentOffset:o,displayData:d,loading:!1});case 18:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.displayData.length>0?Object(x.jsxs)("div",{className:"scroller-container",children:[this.state.displayData,Object(x.jsx)("div",{id:"bottom-element"}),Object(x.jsx)("div",{id:"loading-icon-container",children:Object(x.jsx)("div",{id:"loading-icon",className:"loading",children:Object(x.jsx)(p.a,{size:35,color:"black",loading:this.state.loading})})})]}):Object(x.jsx)("div",{id:"loading-icon",className:"loading",children:Object(x.jsx)(p.a,{size:35,color:"black",loading:this.state.loading})})}}]),n}(s.Component);n(29);var y=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(O,{})})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(e){var n=e.getCLS,s=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),s(t),r(t),a(t),c(t)}))};c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root")),g()}},[[31,1,2]]]);
//# sourceMappingURL=main.65d6be3e.chunk.js.map