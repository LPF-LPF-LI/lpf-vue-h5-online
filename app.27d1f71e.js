(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],[,,function(e,t,n){},,,,function(e,t,n){"use strict";var a=n(2);n.n(a).a},,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i={name:"App",data:function(){return{isNavBarShow:!1,title:"",transitionName:"slide-left"}},watch:{$route:{handler:function(e,t){var n=e.path.split("/").length,a=t.path.split("/").length;this.transitionName=n<a?"slide-right":"slide-left","home"!==e.name?(this.isNavBarShow=!0,this.title=e.meta.title):this.isNavBarShow=!1}}}},r=(n(6),n(5)),l=Object(r.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-main",attrs:{id:"main"}},[n("jsl-nav-bar",{directives:[{name:"show",rawName:"v-show",value:e.isNavBarShow,expression:"isNavBarShow"}],attrs:{title:e.title},nativeOn:{click:function(t){return e.$router.go(-1)}}}),n("transition",{attrs:{name:e.transitionName}},[n("router-view",{staticClass:"child-view"})],1)],1)},[],!1,null,"67f11a60",null).exports,m=n(4),s={base:"/jsl-vue-h5-demo/",routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:function(){return n.e(5).then(n.bind(null,35))}},{path:"/list",name:"list",component:function(){return n.e(6).then(n.bind(null,37))},meta:{title:"demo list"}},{path:"/avatar-demo",name:"avatar-demo",component:function(){return n.e(0).then(n.bind(null,45))},meta:{title:"avatar demo"}},{path:"/button-demo",name:"button-demo",component:function(){return n.e(2).then(n.bind(null,43))},meta:{title:"button demo"}},{path:"/close-demo",name:"close-demo",component:function(){return n.e(3).then(n.bind(null,44))},meta:{title:"close demo"}},{path:"/btn-scalable-jump-demo",name:"btn-scalable-jump-demo",component:function(){return n.e(1).then(n.bind(null,36))},meta:{title:"btn-scalable-jump demo"}},{path:"/toast-demo",name:"toast-demo",component:function(){return n.e(10).then(n.bind(null,40))},meta:{title:"toast demo"}},{path:"/grid-demo",name:"grid-demo",component:function(){return n.e(4).then(n.bind(null,38))},meta:{title:"grid demo"}},{path:"/loading-demo",name:"loading-demo",component:function(){return n.e(7).then(n.bind(null,42))},meta:{title:"loading demo"}},{path:"/navbar-demo",name:"navbar-demo",component:function(){return n.e(8).then(n.bind(null,41))},meta:{title:"navbar demo"}},{path:"/nomore-tip-demo",name:"nomore-tip-demo",component:function(){return n.e(9).then(n.bind(null,39))},meta:{title:"nomore-tip demo"}},{path:"*",redirect:"/"}]};o.a.use(m.a);var u=new m.a(s),d=(n(10),n(1));n(11);o.a.use(d.JslAvatar),o.a.use(d.JslBtnScalableJump),o.a.use(d.JslButton),o.a.use(d.JslClose),o.a.use(d.JslGrid),o.a.use(d.JslGridItem),o.a.use(d.JslLoading),o.a.use(d.JslNavBar),o.a.use(d.JslNomoreTip),o.a.use(d.JslToast),new o.a({el:"#app",router:u,render:function(e){return e(l)}})}],[[12,"runtime~app","vendors~app"]]]);