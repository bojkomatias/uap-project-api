(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{229:function(t,e,r){var content=r(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("7388ab72",content,!0,{sourceMap:!1})},231:function(t,e,r){var content=r(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("56b15182",content,!0,{sourceMap:!1})},256:function(t,e,r){"use strict";var n={data:function(){return{clipped:!0,drawer:!1,items:[{icon:"mdi-apps",title:"Main",to:"/"},{icon:"mdi-chart-bubble",title:"Pacientes",to:"/patients"}],miniVariant:!1,right:!0,rightDrawer:!1}}},o=(r(300),r(84)),c=r(112),l=r.n(c),d=r(389),v=r(394),f=r(390),m=r(187),h=r(173),_=r(174),w=r(108),k=r(175),V=r(81),x=r(391),y=r(392),N=r(393),A=r(395),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",[t._l(t.items,(function(e,i){return r("v-list-item",{key:i,attrs:{to:e.to,"active-class":"accent--text border-color rounded-xl",router:"",exact:""}},[r("v-list-item-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),t._v(" "),r("v-list-item",[r("v-list-item-action",[r("v-switch",{staticStyle:{"padding-left":"20px"},attrs:{inset:""},model:{value:t.$vuetify.theme.dark,callback:function(e){t.$set(t.$vuetify.theme,"dark",e)},expression:"$vuetify.theme.dark"}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("\n          Tema oscuro\n          ")])],1)],1)],2)],1),t._v(" "),r("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[r("v-icon",[t._v("mdi-"+t._s("chevron-"+(t.miniVariant?"right":"left")))])],1),t._v(" "),r("v-spacer")],1),t._v(" "),r("v-main",[r("Nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:d.a,VAppBar:v.a,VAppBarNavIcon:f.a,VBtn:m.a,VIcon:h.a,VList:_.a,VListItem:w.a,VListItemAction:k.a,VListItemContent:V.a,VListItemTitle:V.b,VMain:x.a,VNavigationDrawer:y.a,VSpacer:N.a,VSwitch:A.a})},266:function(t,e,r){r(267),t.exports=r(268)},294:function(t,e,r){"use strict";r(229)},295:function(t,e,r){var n=r(14)(!1);n.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=n},300:function(t,e,r){"use strict";r(231)},301:function(t,e,r){var n=r(14)(!1);n.push([t.i,"::-webkit-scrollbar{width:.4rem}::-webkit-scrollbar-track{background:#fff}::-webkit-scrollbar-thumb{background:#043353;border-radius:.2rem}::-webkit-scrollbar-thumb:hover{background:#292939}",""]),t.exports=n},72:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(294),r(84)),c=r(112),l=r.n(c),d=r(389),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[266,18,7,19]]]);