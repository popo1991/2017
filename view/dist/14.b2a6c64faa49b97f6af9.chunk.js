webpackJsonp([14],{"+56H":function(s,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{isQuestion:!0,isProduct:!1,isVersion:!1,isCharge:!1,isUsage:!1,isDownload:!1,isGroup:!1,isMessage:!1,isSet:!1,isOther:!1,header:""}},created:function(){this.getRoute()},watch:{$route:"getRoute"},methods:{getRoute:function(){var s=this.$route.path;"/help"===s&&(this.isQuestion=!0,this.isProduct=!1,this.isVersion=!1,this.isCharge=!1,this.isUsage=!1,this.isDownload=!1,this.isGroup=!1,this.isMessage=!1,this.isSet=!1,this.isOther=!1,this.header="热门问题"),"/help/isProduct"===s&&(this.isQuestion=!1,this.isProduct=!0,this.isVersion=!1,this.isCharge=!1,this.isUsage=!1,this.isDownload=!1,this.isGroup=!1,this.isMessage=!1,this.isSet=!1,this.isOther=!1,this.header="产品属性"),"/help/isVersion"===s&&(this.isQuestion=!1,this.isProduct=!1,this.isVersion=!0,this.isCharge=!1,this.isUsage=!1,this.isDownload=!1,this.isGroup=!1,this.isMessage=!1,this.isSet=!1,this.isOther=!1,this.header="版本相关"),"/help/isCharge"===s&&(this.isQuestion=!1,this.isProduct=!1,this.isVersion=!1,this.isCharge=!0,this.isUsage=!1,this.isDownload=!1,this.isGroup=!1,this.isMessage=!1,this.isSet=!1,this.isOther=!1,this.header="资费类"),"/help/isUsage"===s&&(this.isQuestion=!1,this.isProduct=!1,this.isVersion=!1,this.isCharge=!1,this.isUsage=!0,this.isDownload=!1,this.isGroup=!1,this.isMessage=!1,this.isSet=!1,this.isOther=!1,this.header="功能使用类"),"/help/isDownload"===s&&(this.isQuestion=!1,this.isProduct=!1,this.isVersion=!1,this.isCharge=!1,this.isUsage=!1,this.isDownload=!0,this.isGroup=!1,this.isMessage=!1,this.isSet=!1,this.isOther=!1,this.header="下载和注册"),"/help/isGroup"===s&&(this.isQuestion=!1,this.isProduct=!1,this.isVersion=!1,this.isCharge=!1,this.isUsage=!1,this.isDownload=!1,this.isGroup=!0,this.isMessage=!1,this.isSet=!1,this.isOther=!1,this.header="群组和功能"),"/help/isMessage"===s&&(this.isQuestion=!1,this.isProduct=!1,this.isVersion=!1,this.isCharge=!1,this.isUsage=!1,this.isDownload=!1,this.isGroup=!1,this.isMessage=!0,this.isSet=!1,this.isOther=!1,this.header="消息|免费短信|电话留言"),"/help/isSet"===s&&(this.isQuestion=!1,this.isProduct=!1,this.isVersion=!1,this.isCharge=!1,this.isUsage=!1,this.isDownload=!1,this.isGroup=!1,this.isMessage=!1,this.isSet=!0,this.isOther=!1,this.header="设置"),"/help/isOther"===s&&(this.isQuestion=!1,this.isProduct=!1,this.isVersion=!1,this.isCharge=!1,this.isUsage=!1,this.isDownload=!1,this.isGroup=!1,this.isMessage=!1,this.isSet=!1,this.isOther=!0,this.header="其他")}}}},"1o+M":function(s,i){},oaMa:function(s,i,t){s.exports={render:function(){var s=this,i=s.$createElement;return(s._self._c||i)("div",{staticClass:"questions"},[s._v("\n  version\n\n")])},staticRenderFns:[]},s.exports.render._withStripped=!0},zCRw:function(s,i,t){t("1o+M");var e=t("mEwh")(t("+56H"),t("oaMa"),"data-v-3007260e",null);e.options.__file="E:\\2017\\official-website\\src\\views\\help\\version.vue",e.esModule&&Object.keys(e.esModule).some(function(s){return"default"!==s&&"__esModule"!==s})&&console.error("named exports are not supported in *.vue files."),e.options.functional&&console.error("[vue-loader] version.vue: functional components are not supported with templates, they should use render functions."),s.exports=e.exports}});