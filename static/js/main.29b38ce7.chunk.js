(this["webpackJsonphacker-scroller"]=this["webpackJsonphacker-scroller"]||[]).push([[0],{18:function(t,e,n){},22:function(t,e,n){},24:function(t,e,n){},31:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var s=n(1),r=n.n(s),c=n(10),a=n.n(c),o=(n(18),n(13)),i=n(12),l=n(2),u=n.n(l),d=n(3),h=n(4),p=n(5),m=n(7),j=n(6),b=n(9),f=n.n(b),v=n(11),x=n.n(v),O=(n(22),n(0)),y=function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){return Object(h.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"hacker-card "+this.props.story.type,children:[Object(O.jsx)("h2",{className:"story-title",children:Object(O.jsx)("a",{href:this.props.calculatedUrl,children:this.props.story.title})}),Object(O.jsx)("div",{className:"story-url",children:this.props.displayUrl}),Object(O.jsxs)("div",{className:"points-info",children:[Object(O.jsxs)("span",{children:[this.props.story.score," points by ",this.props.story.by," "]}),Object(O.jsxs)("span",{id:"comment-count",children:["| ",this.props.story.descendants?this.props.story.descendants:0," comments"]}),Object(O.jsxs)("span",{children:[" | ",Object(O.jsx)(x.a,{unix:!0,fromNow:!0,children:this.props.story.time})]})]}),"job"!==this.props.story.type&&Object(O.jsxs)("div",{className:"top-comments",children:[void 0!==this.props.topComments&&this.props.topComments.length>0?Object(O.jsx)("h3",{children:"Top Comments"}):"",void 0!==this.props.topComments&&this.props.topComments.length>0?this.props.topComments.map((function(t,e){return Object(O.jsxs)("div",{className:"comment",children:[Object(O.jsxs)("div",{className:"comment-by",children:[t.by," said:"]}),Object(O.jsx)("div",{className:"comment-text",dangerouslySetInnerHTML:{__html:t.text}})]},e)})):Object(O.jsx)("div",{className:"no-comments",children:"No comments yet"})]}),"job"!==this.props.story.type&&Object(O.jsx)("div",{className:"see-on-hn-overlay",children:Object(O.jsx)("div",{className:"see-on-hn",children:Object(O.jsx)("a",{href:this.props.hnUrl,children:"Read on HN"})})})]},this.props.index)}}]),n}(s.Component),g=(n(24),function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(h.a)(this,n),(t=e.call(this)).trackScrolling=Object(d.a)(u.a.mark((function e(){var n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=document.getElementById("bottom-element"),!t.isBottom(n)){e.next=7;break}if(t.state.loading){e.next=7;break}return e.next=5,t.getData();case 5:s=e.sent,t.setState(s);case 7:case"end":return e.stop()}}),e)}))),t.state={topStories:[],storyData:[],currentStoriesSlice:[],currentOffset:10,storiesToLoad:10,loading:!0},t.mounted=!1,t.hnBaseUrl="https://hacker-news.firebaseio.com/v0/",t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=Object(d.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.mounted=!0,!this.mounted){t.next=7;break}return t.next=4,this.getData();case 4:e=t.sent,this.setState(e),document.addEventListener("scroll",this.trackScrolling);case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.trackScrolling)}},{key:"getData",value:function(){var t=Object(d.a)(u.a.mark((function t(){var e,n,s,r,c,a,o,l,h=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({loading:!0}),e=this.state.currentOffset-this.state.storiesToLoad,t.next=4,fetch("".concat(this.hnBaseUrl,"topstories.json"));case 4:return n=t.sent,t.next=7,n.json();case 7:return s=t.sent,r=s.slice(e,this.state.currentOffset),c=[],t.next=12,Promise.all(r.map(function(){var t=Object(d.a)(u.a.mark((function t(e){var n,s,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(h.hnBaseUrl,"item/").concat(e,".json"));case 2:return n=t.sent,t.next=5,n.json();case 5:if(!(s=t.sent).kids){t.next=10;break}return t.next=9,Promise.all(s.kids.slice(0,10).map(function(){var t=Object(d.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(h.hnBaseUrl,"item/").concat(e,".json"));case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 9:c=t.sent;case 10:return r=[],c.length>0&&c.forEach((function(t){null===t&&void 0===t&&t.deleted||r.push(t)})),t.abrupt("return",{story:s,topComments:r});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 12:return a=t.sent,(o=Object.assign([],this.state.storyData)).push.apply(o,Object(i.a)(a)),l=this.state.currentOffset+this.state.storiesToLoad,t.abrupt("return",{storyData:o,currentOffset:l,loading:!1});case 17:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"createHackerCards",value:function(){if(void 0!==this.state.storyData)var t=this.state.storyData.map((function(t,e){var n,s,r=t.story,c=t.topComments,a="https://news.ycombinator.com/item?id=".concat(r.id);if(r.url){var i=r.url.split("/");n=r.url,s=i[2]}else s="news.ycombinator.com",n=a;var l={story:r,calculatedUrl:n,displayUrl:s,hnUrl:a,storyKey:e,topComments:c};return Object(O.jsx)(y,Object(o.a)({},l),e)}));return t}},{key:"isBottom",value:function(t){return t.getBoundingClientRect().bottom<=window.innerHeight+1}},{key:"render",value:function(){var t=this.createHackerCards();return void 0!==t?Object(O.jsxs)("div",{className:"scroller-container",children:[t,Object(O.jsx)("div",{id:"bottom-element"}),Object(O.jsx)("div",{id:"loading-icon-container",children:Object(O.jsx)("div",{id:"loading-icon",className:"loading",children:Object(O.jsx)(f.a,{size:35,color:"black",loading:this.state.loading})})})]}):Object(O.jsx)("div",{id:"loading-icon",className:"loading",children:Object(O.jsx)(f.a,{size:35,color:"black",loading:this.state.loading})})}}]),n}(s.Component));n(31);var k=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)("div",{id:"header",children:[Object(O.jsx)("div",{className:"site-name",children:"Hacker Scroller"}),Object(O.jsx)("div",{className:"about",children:Object(O.jsx)("a",{href:"https://github.com/android2221/hacker-scroller",children:"GitHub Project"})})]}),Object(O.jsx)(g,{})]})},N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(e){var n=e.getCLS,s=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),s(t),r(t),c(t),a(t)}))};a.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root")),N()}},[[33,1,2]]]);
//# sourceMappingURL=main.29b38ce7.chunk.js.map