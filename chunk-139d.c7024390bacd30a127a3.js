(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-139d"],{"1e59":function(t,e,s){},"2d3b":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.search,expression:"$store.state.search"}],ref:"inputsearch",staticClass:"input-search",attrs:{focus:"true",placeholder:"Search",type:"text"},domProps:{value:t.$store.state.search},on:{keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchx(e):null},input:function(e){e.target.composing||t.$set(t.$store.state,"search",e.target.value)}}}),s("h4",{staticClass:"h4x"},[t._v("Results and Search: "),s("b",[t._v(t._s(t.$router.currentRoute.params.searching))])]),t.posts?s("posts",{attrs:{section:t.title,posts:t.posts}}):s("div",{staticClass:"no-coincidence"},[t._v("\n    No results were found\n  ")]),s("CodeFundView",{attrs:{propertyId:"8aed6e67-5cf6-4217-a805-d1713785b7e5"}})],1)},r=[],n=(s("28a5"),s("ac6a"),s("386d"),s("cadf"),s("551c"),s("97c7")),o=s("40b7"),i=s("bf39"),c=s("2ffe"),u=s("7c71"),f={components:{posts:o["a"],titlex:i["a"],menuCircles:c["a"],Carbon:n["a"],CodeFundView:u["a"]},props:{title:{default:"devAwesome",type:String}},data:function(){return{name:"hola",posts:[],tags:[],tagsActive:[]}},computed:{isRoot:function(){return!!this.$store.state.user&&("ldrovira"===this.$store.state.user.displayName||"ManuelRoviraDesign"===this.$store.state.user.displayName||"luisrovirac@gmail.com"===this.$store.state.user.email||"chait7conrom@gmail.com"===this.$store.state.user.email)}},watch:{"$route.params.searching":function(){this.searchPosts()}},mounted:function(){var t=this;this.$nextTick(function(){t.searchPosts(),t.$store.state.search=t.$router.currentRoute.params.searching}),document.querySelector("body").style="overflow: auto",this.$nextTick(function(){t.$store.state.openSidebar=!1})},beforeDestroy:function(){var t=this.$firebase.database().ref("posts");t.off();var e=this.$firebase.database().ref("users");e.off()},methods:{searchx:function(){this.$router.push("/search/"+this.$store.state.search)},reverseObject:function(t){var e={},s=[];for(var a in t)s.push(a);for(var r=s.length-1;r>=0;r--){var n=t[s[r]];(self.isRoot||n.active)&&(e[s[r]]=n)}return e},searchPosts:function(){var t=this,e=this.$firebase.database().ref("posts");e.on("value",function(e){var s=e.val();delete s.undefined;var a=[];for(var r in s)s[r].key=r,a.push(s[r]);a=a.filter(function(e){var s=JSON.stringify(e);return-1!==s.toLowerCase().indexOf(t.$router.currentRoute.params.searching.toLowerCase())||-1!==e.tags.toLowerCase().indexOf(t.$router.currentRoute.params.searching.toLowerCase())});var n={};a.forEach(function(t){n[t.key]=t}),t.$store.state.posts=t.posts=a.length>0?t.reverseObject(n):null})},getTags:function(){var t=this.posts,e=[];for(var s in t){var a=t[s].tags.split(",");a.forEach(function(t){e.hasOwnProperty(t.trim())||e.push(t.trim())})}this.tags=e}}},d=f,h=(s("c615"),s("2877")),l=Object(h["a"])(d,a,r,!1,null,null,null);e["default"]=l.exports},"7c71":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"codefund codefund-posts"},[t.ads?s("div",{ref:"codefund",staticClass:"codefundx"},[s("a",{attrs:{target:"_black",href:t.ads.campaignUrl}},[s("img",{attrs:{src:t.ads.images[2].url,alt:""}}),s("h6",[t._v(t._s(t.ads.headline))]),s("p",[t._v("\n        "+t._s(t.ads.body)+"\n      ")])]),s("a",{staticClass:"a-invite",attrs:{href:"https://codefund.io/invite/DKsKZqvuJko"}},[t._v("\n      Ethical ad by CodeFund\n    ")])]):t._e()])},r=[],n=(s("cadf"),s("551c"),{name:"CodeFund",mounted:function(){var t=this;fetch("https://codefund.app/properties/124/funder.json").then(function(t){return t.json()}).then(function(e){t.ads=e})},data:function(){return{ads:null}}}),o=n,i=(s("b741"),s("2877")),c=Object(i["a"])(o,a,r,!1,null,"1271a6fa",null);e["a"]=c.exports},"9ccf":function(t,e,s){},b741:function(t,e,s){"use strict";var a=s("1e59"),r=s.n(a);r.a},c615:function(t,e,s){"use strict";var a=s("9ccf"),r=s.n(a);r.a}}]);
//# sourceMappingURL=chunk-139d.c7024390bacd30a127a3.js.map