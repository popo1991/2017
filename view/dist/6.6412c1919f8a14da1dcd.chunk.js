webpackJsonp([6],{100:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=e(52),i=e.n(o);s.default={data:function(){return{isHover1:!1,isHover2:!1,isHover3:!1,isHover4:!1,isChecked:!0,formItem:{account:"",psd:"",radio:"checked"},message:""}},components:{"i-service":i.a},methods:{clearAccount:function(){this.formItem.account=""},submitForm:function(){var t=this.formItem;this.$http.post("../mock/request.json",t).then(function(t){"success"==t.state&&setTimeout(function(){console.log("success")},2e3)}).catch(function(){console.log("服务器异常！")})}}}},122:function(t,s){},149:function(t,s,e){t.exports=e.p+"b8f4385d4521064a624c22da35f651d0.png"},150:function(t,s,e){t.exports=e.p+"ab0d4f4d0fbc0f2b4c4d3f0192706e70.png"},151:function(t,s,e){t.exports=e.p+"c0f1c9de417a148bbf6630bb2d2412d2.png"},152:function(t,s,e){t.exports=e.p+"97f1cabe24146bd276aee65b9ea0da55.png"},153:function(t,s,e){t.exports=e.p+"e70e377cc9a1dce4a79e70c9fc2bc495.png"},154:function(t,s,e){t.exports=e.p+"947d54ecc2e4731947f26e68ab7ad644.png"},155:function(t,s,e){t.exports=e.p+"a2cb5098e3f69ef7a2d1f5a768fca20e.png"},156:function(t,s,e){t.exports=e.p+"c04b92b995026207bdab000f20e21e5b.png"},185:function(t,s,e){t.exports={render:function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"platform"},[o("div",{staticClass:"ibanner"},[o("div",{staticClass:"loginbox"},[o("h4",[t._v("账号登录")]),t._v(" "),o("Form",{attrs:{model:t.formItem,"label-width":80}},[o("div",{staticClass:"form-list clearfix"},[o("div",{staticClass:"iconbox fl"},[o("img",{attrs:{src:e(149),alt:""}})]),t._v(" "),o("div",{staticClass:"inputbox fl"},[o("Input",{attrs:{type:"text",placeholder:"请输入账号"},model:{value:t.formItem.account,callback:function(s){t.$set(t.formItem,"account",s)},expression:"formItem.account"}}),t._v(" "),o("img",{staticClass:"s-icon",attrs:{src:e(150),alt:"×"},on:{click:t.clearAccount}})],1)]),t._v(" "),o("div",{staticClass:"form-list clearfix",staticStyle:{"margin-top":"17px"}},[o("div",{staticClass:"iconbox fl"},[o("img",{attrs:{src:e(156),alt:""}})]),t._v(" "),o("div",{staticClass:"inputbox fl"},[o("Input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.formItem.psd,callback:function(s){t.$set(t.formItem,"psd",s)},expression:"formItem.psd"}}),t._v(" "),o("img",{staticClass:"s-icon",attrs:{src:e(151),alt:""}})],1)]),t._v(" "),o("label",{staticClass:"w-check-label clearfix"},[o("span",{staticClass:"radio-outer fl",on:{click:function(s){t.isChecked=!t.isChecked}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.formItem.radio,expression:"formItem.radio"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.formItem.radio)?t._i(t.formItem.radio,null)>-1:t.formItem.radio},on:{change:function(s){var e=t.formItem.radio,o=s.target,i=!!o.checked;if(Array.isArray(e)){var a=t._i(e,null);o.checked?a<0&&(t.formItem.radio=e.concat([null])):a>-1&&(t.formItem.radio=e.slice(0,a).concat(e.slice(a+1)))}else t.$set(t.formItem,"radio",i)}}}),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.isChecked,expression:"isChecked"}],staticClass:"radio-inside"})]),t._v("\n          记住密码\n        ")]),t._v(" "),o("div",{staticClass:"opt-box"},[o("router-link",{attrs:{to:"/forget"}},[t._v("忘记密码")]),t._v(" "),o("router-link",{attrs:{to:"/register"}},[t._v("立即注册")])],1),t._v(" "),o("Button",{attrs:{type:"success",long:"",size:"large"},on:{click:t.submitForm}},[t._v("登录")])],1)],1)]),t._v(" "),o("div",{staticClass:"i-info i-info1"},[o("i-service")],1),t._v(" "),o("ul",{staticClass:"clearfix"},[t._m(0,!1,!1),t._v(" "),o("li",{staticClass:"fl",on:{mouseover:function(s){t.isHover1=!0},mouseout:function(s){t.isHover1=!1}}},[o("router-link",{attrs:{to:"/sdk"}},[o("div",{staticClass:"iconbox"},[o("img",{staticClass:"animated",class:{wobble:t.isHover1},attrs:{src:e(152)}})]),t._v(" "),o("h4",{staticClass:"animated",class:{bounceInDown:t.isHover1}},[t._v("SKD文档下载")]),t._v(" "),o("p",{staticClass:"animated",class:{bounceInDown:t.isHover1}},[t._v(" SKD DOWNDOAD")])])],1),t._v(" "),t._m(1,!1,!1),t._v(" "),o("li",{staticClass:"fl",on:{mouseover:function(s){t.isHover2=!0},mouseout:function(s){t.isHover2=!1}}},[o("router-link",{attrs:{to:"/contact"}},[o("div",{staticClass:"iconbox"},[o("img",{staticClass:"animated",class:{wobble:t.isHover2},attrs:{src:e(153)}})]),t._v(" "),o("h4",{staticClass:"animated",class:{bounceInDown:t.isHover2}},[t._v("联系我们")]),t._v(" "),o("p",{staticClass:"animated",class:{bounceInDown:t.isHover2}},[t._v("CONTACT US")])])],1),t._v(" "),o("li",{staticClass:"fl",on:{mouseover:function(s){t.isHover3=!0},mouseout:function(s){t.isHover3=!1}}},[o("router-link",{attrs:{to:"/api"}},[o("div",{staticClass:"iconbox"},[o("img",{staticClass:"animated",class:{wobble:t.isHover3},attrs:{src:e(154)}})]),t._v(" "),o("h4",{staticClass:"animated",class:{bounceInDown:t.isHover3}},[t._v("API文档")]),t._v(" "),o("p",{staticClass:"animated",class:{bounceInDown:t.isHover3}},[t._v("API DOCUMENTATION")])])],1),t._v(" "),t._m(2,!1,!1),t._v(" "),o("li",{staticClass:"fl",on:{mouseover:function(s){t.isHover4=!0},mouseout:function(s){t.isHover4=!1}}},[o("router-link",{attrs:{to:"/api"}},[o("div",{staticClass:"iconbox"},[o("img",{staticClass:"animated",class:{wobble:t.isHover4},attrs:{src:e(155)}})]),t._v(" "),o("h4",{staticClass:"animated",class:{bounceInDown:t.isHover4}},[t._v("帮助中心")]),t._v(" "),o("p",{staticClass:"animated",class:{bounceInDown:t.isHover4}},[t._v("HELP AND SUPPORT")])])],1),t._v(" "),t._m(3,!1,!1)]),t._v(" "),o("div",{staticClass:"i-info i-info2"})])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"fl"},[e("div",{staticClass:"mask"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"fl"},[e("div",{staticClass:"mask"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"fl"},[e("div",{staticClass:"mask"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"fl"},[e("div",{staticClass:"mask"})])}]},t.exports.render._withStripped=!0},49:function(t,s,e){e(122);var o=e(16)(e(100),e(185),"data-v-d9ef8e8a",null);o.options.__file="E:\\2017\\official-website\\src\\views\\platform\\platform.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] platform.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},51:function(t,s,e){t.exports=e.p+"36056183f4e4f0ca94e3b308d721234f.png"},52:function(t,s,e){e(54);var o=e(16)(e(53),e(55),null,null);o.options.__file="E:\\2017\\official-website\\src\\components\\service.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] service.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},53:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"",data:function(){return{isServise:!1}},methods:{}}},54:function(t,s){},55:function(t,s,e){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0,!1,!1)},staticRenderFns:[function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",[o("img",{staticClass:"service",attrs:{src:e(51),alt:""}})])}]},t.exports.render._withStripped=!0}});