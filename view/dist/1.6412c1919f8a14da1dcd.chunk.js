webpackJsonp([1],{116:function(e,t){},181:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"forget"},[i("i-header"),e._v(" "),i("div",{staticClass:"ibanner"}),e._v(" "),e._m(0,!1,!1),e._v(" "),i("div",{staticClass:"w-1200"},[i("form",{staticClass:"forget-form",attrs:{action:"",model:e.formRegister}},[i("p",{staticClass:"tip"},[e._v("*请输入注册时填写的信息，核实后可以找回密码。")]),e._v(" "),i("div",{staticClass:"form-list"},[i("span",{staticClass:"label"},[e._v("账号")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.formRegister.account,expression:"formRegister.account"}],staticClass:"long",attrs:{type:"text",maxlength:"20"},domProps:{value:e.formRegister.account},on:{input:function(t){t.target.composing||e.$set(e.formRegister,"account",t.target.value)}}}),e._v(" "),i("span",{staticClass:"remind"},[e._v("用于登录集分卡公众平台/开放平台")])]),e._v(" "),i("div",{staticClass:"form-list"},[i("span",{staticClass:"label"},[e._v("密码")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.formRegister.psd,expression:"formRegister.psd"}],staticClass:"long",attrs:{type:"password",maxlength:"18"},domProps:{value:e.formRegister.psd},on:{input:function(t){t.target.composing||e.$set(e.formRegister,"psd",t.target.value)}}}),e._v(" "),i("span",{staticClass:"remind"},[e._v("数字/字母/英文符号，6-18位，区分大小写")])]),e._v(" "),i("div",{staticClass:"form-list"},[i("span",{staticClass:"label"},[e._v("确认密码")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.formRegister.psdagain,expression:"formRegister.psdagain"}],staticClass:"long",attrs:{type:"password",maxlength:"18"},domProps:{value:e.formRegister.psdagain},on:{input:function(t){t.target.composing||e.$set(e.formRegister,"psdagain",t.target.value)}}})]),e._v(" "),i("div",{staticClass:"form-list"},[i("span",{staticClass:"label"},[e._v("手机号码")]),e._v(" "),i("input",{staticClass:"prefix",attrs:{type:"text",placeholder:"+86"}}),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.formRegister.tel,expression:"formRegister.tel"}],staticClass:"tel",attrs:{type:"text",maxlength:"11"},domProps:{value:e.formRegister.tel},on:{input:function(t){t.target.composing||e.$set(e.formRegister,"tel",t.target.value)}}})]),e._v(" "),i("div",{staticClass:"form-list  h60"},[i("span",{staticClass:"label"},[e._v("验证码")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.formRegister.code,expression:"formRegister.code"}],staticClass:"code",attrs:{type:"text",maxlength:"6"},domProps:{value:e.formRegister.code},on:{input:[function(t){t.target.composing||e.$set(e.formRegister,"code",t.target.value)},e.testCode]}}),e._v(" "),i("img",{staticClass:"code",attrs:{src:s(74),alt:""}}),e._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:e.isCodeCorrect,expression:"isCodeCorrect"}],staticClass:"correct",attrs:{src:s(76),alt:"√"}})]),e._v(" "),i("div",{staticClass:"form-list"},[i("span",{staticClass:"label "},[e._v("短信验证")]),e._v(" "),i("button",{directives:[{name:"show",rawName:"v-show",value:e.isSend,expression:"isSend"}],staticClass:"send",attrs:{type:"primary",size:"large"},on:{click:function(t){t.preventDefault(),e.getCode(t)}}},[i("span",[e._v("发送短信获取验证码")])]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.formRegister.msg,expression:"formRegister.msg"},{name:"show",rawName:"v-show",value:!e.isSend,expression:"!isSend"}],staticClass:"long",attrs:{type:"text"},domProps:{value:e.formRegister.msg},on:{input:function(t){t.target.composing||e.$set(e.formRegister,"msg",t.target.value)}}}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:!e.isSend,expression:"!isSend"}],staticClass:"remind"},[e._v("验证码已发出 "+e._s(e.count)+"s后可")]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:!e.isSend&&!e.isClear,expression:"(!isSend) && (!isClear)"}],staticClass:"remind"},[e._v("重新发送")]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.isClear,expression:"isClear"}],staticClass:"able-color remind",on:{click:function(t){t.preventDefault(),e.getCode(t)}}},[e._v("重新发送")])]),e._v(" "),i("div",{staticClass:"form-list warn"},[e._v("\n                "+e._s(e.tip)+"\n            ")]),e._v(" "),i("div",{staticClass:"form-list sub-list"},[i("button",{staticClass:"find",on:{click:function(t){t.preventDefault(),e.submitRegisterForm(t)}}},[e._v("\n                    完成\n                ")])])])]),e._v(" "),i("n-footer")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h1",[i("div",{staticClass:"w-1200"},[e._v("注册账号")]),e._v(" "),i("img",{staticClass:"service",attrs:{src:s(51),alt:""}})])}]},e.exports.render._withStripped=!0},44:function(e,t,s){s(116);var i=s(16)(s(95),s(181),"data-v-9cf01be6",null);i.options.__file="E:\\2017\\official-website\\src\\views\\login\\register.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] register.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},51:function(e,t,s){e.exports=s.p+"36056183f4e4f0ca94e3b308d721234f.png"},52:function(e,t,s){s(54);var i=s(16)(s(53),s(55),null,null);i.options.__file="E:\\2017\\official-website\\src\\components\\service.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] service.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},53:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"",data:function(){return{isServise:!1}},methods:{}}},54:function(e,t){},55:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0,!1,!1)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("img",{staticClass:"service",attrs:{src:s(51),alt:""}})])}]},e.exports.render._withStripped=!0},56:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"",data:function(){return{}},mounted:function(){}}},57:function(e,t){},58:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABrCAMAAADAUGU4AAAAgVBMVEUAAACTTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq5AlPUbAAAAKnRSTlMANvPn39LtohMHBPcaC8Wak3x1Py4fsqlKh29hVQ/Zy70nwbetZlxEjoH9j7i4AAAC0UlEQVRo3rWZ266iQBBFq7nfQRQQUARFPfb/f+CMkzF9QTwkbtYzWekUVcXuQN8QtaPDGeHZVg7/ywEuvvf8CV5dVPzFHmu+OvwFuNYZFxhHpHnkEiekueIyGdC8EVpwgzDVbHgwc9Cp6pJg5MIK7mrPUM02/h3iDx2YqvlCMPaqOSxw6lRV3wiHpZhToHmHLrSglc2Jj1TX8pmFGbzzMsJyfomdFmwO7FdrFAQmfmrN5MFI4Bc7NkTHxafbtXVaXUb3p7l7sjpv9rtY9t5c699UmuesjRYkl0weDKPPh7nA8LCUqS9vwect0XOdsNrSlKg2uE53nRcPI3/LqIeN48bh70jYXHIJ+RzuVi5FbvE58rfmH/6JczMEz0KwvDT4B1ya4vLfsMvyJLRz9P7UjOLs69VAoa/bhiOpfHnJQ3GkIbahZjuSMxGS5ChnIqg51lL+Oq3nhcg6x2qQw2FEyua3gOq9uvuB5lS/qsFwYlqrHo0e5GCYAa21mDaTtAVimuRPuDnUzJ6zWj0Yh3HXM816pW5haiueXDJRnEijxjcIPiQkujpbryApTN35q53aidCvUaBn6wdO3QorOt3oyfqGU1sBrfbR3erfr9Uq4pk4dai1X7JeDEk5kGG9q0YPbxHBVbkTm0h1qJSk5EhMDz3qAtuDD41wF+ibncDcwle2YBOIAIXGvv6/O3Ycj8lEj6Ap6EkU4s2piO9omNgjYOzp1QD/dT+AzaZIUuj+2xAhjz37f/OEPrRgC6+04IL/iuHXtkWrhfg76cQOxlwJJTC0zv/t7XEjrhMZ35tHWQidSedIM7jo7hD4XwaHnOaJTNy1QGf3xass6TPMgJuFe24qwy7pE9tYXo0pw7vdndT34bkrg4I1pcWnPGgJ8Y++y2pGMt7BNbUn9rQQNkqL3T3ENCE+pJZ4pPZoObvNxTKcrnzshVcjYE3W212S3d6O4B/YJOErtZA3rwAAAABJRU5ErkJggg=="},59:function(e,t,s){e.exports=s.p+"c7b85292e5a2cdfcc7d344dcd9d04f59.png"},60:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAZCAMAAACB+BfnAAAAclBMVEUAAACcULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULthasI3AAAAJXRSTlMAiJ6MlpMqz+62BK98W02opHNjU0P059V4WEgzHhXJvoFpYAslU5/pAAAAAPhJREFUKM990llygzAQRdEriMBMAeN5ju28/W8xDGUrAsP7QVQduptqATYwc7HVBSIKzcdwJolJ4xmziMgSQu1SykkUQ6aAsONmAmVdI9uoJquJ4X6IFs3jq1cyRJsxOnCQ/ikFPOPx3Hv5Slcoh3MHGiotTuRyqXju5Ks+Nav3ec9po49Kx/c/FJwlX7mXNWncNz+y/Kwsa21TsnYZiXJqXzkkbX+5w7U5LbmPVdiifg/nrdSxx1AZvl9f3l6HnMJXhpXGMf6GrKvkJefhVOjQ6FLUnTJ+pXHTogW2kUdNZ0mtkuQ2Uclt1CZE5JpPxgWoymAuVXLhD5N7Y+7dCA4HAAAAAElFTkSuQmCC"},61:function(e,t,s){e.exports=s.p+"7ff7951c95ec06624995a32d70ba6f95.png"},62:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAdVBMVEUAAACcULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULuYz2EoAAAAJnRSTlMA0wMT81AYCvr3yFvs3L14LB23iGpUSAbnrqSWkH9iI6E841kxJOV18kkAAADnSURBVCjPbc/ZcoQgEIXhg6KC27jrjDpLFt7/EdOxBaZI/gtL/YoG8FsEbpTdkMIXrbq8H2/ztC3qmTq4GWqwX4mQIzgCJmu7uvBsc0YDX8+hpV+JPqi2omc8tlzdYiJVkEhjO3Zu8uoB7JIeDnLeJuuqDJG4+jUixklVT/NMg9yB7S5pUbnjwtLClekJWGuk6pAGvpoO/VkCWzgN33TKmDReHIUlhin9Sz1TxaeYujyxEl3fqDBU4c5ZM5UTwz9k6N4BzTzQp2O3Vx/QF1yjfIePGb6281A2wZ3FCQtB0GsVWok+pdcfOREkuFno8LQAAAAASUVORK5CYII="},63:function(e,t,s){e.exports=s.p+"a80fd86ec22ccf96193275fe079eb70d.png"},64:function(e,t,s){e.exports=s.p+"11c1087209bbb5746524105c7e6230b4.png"},65:function(e,t,s){e.exports=s.p+"d6fc79f7b14f11204815205594f0d337.png"},66:function(e,t,s){s(57);var i=s(16)(s(56),s(67),"data-v-4a4be058",null);i.options.__file="E:\\2017\\official-website\\src\\components\\foot.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] foot.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},67:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0,!1,!1)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("footer",[i("div",{staticClass:"w-1195"},[i("div",{staticClass:"iconbox"},[i("ul",[i("li",[i("div",{staticClass:"logobox"},[i("img",{attrs:{src:s(65),alt:"wxcode"}})])]),e._v(" "),i("li",[i("div",{staticClass:"logobox"},[i("img",{attrs:{src:s(58),alt:"app store"}})]),e._v(" "),i("p",[e._v("App store")])]),e._v(" "),i("li",[i("div",{staticClass:"logobox"},[i("img",{attrs:{src:s(64),alt:"pc"}})]),e._v(" "),i("p",[e._v("电脑版")])]),e._v(" "),i("li",[i("div",{staticClass:"logobox"},[i("img",{attrs:{src:s(63),alt:"android"}})]),e._v(" "),i("p",[e._v("Android")])])])]),e._v(" "),i("section",{staticClass:"contact-us"},[i("h4",[e._v("联系我们")]),e._v(" "),i("p",[e._v("公司地址：杭州市滨江区聚业路26号金秀国际中心")]),e._v(" "),i("p",[e._v(" B座901 ")]),e._v(" "),i("p",[e._v("服务电话：400-825-5368 ")]),e._v(" "),i("p",[e._v("服务手机：1360308223")]),e._v(" "),i("p",[e._v("邮箱：...@.com")]),e._v(" "),i("p",[e._v("官网：www.")])]),e._v(" "),i("section",{staticClass:"bottom"},[i("ul",[i("li",[i("small",[e._v("公司简介")])]),e._v(" "),i("li",[i("small",[e._v("服务条款")])]),e._v(" "),i("li",[i("small",[e._v("网站地图")])]),e._v(" "),i("li",[i("small",[e._v("电信业务增值证")])])]),e._v(" "),i("hr"),e._v(" "),i("p",[i("small",[e._v("Copyright @ 2017  杭州市市天缘网络科技有限公司 版权所有 "),i("img",{attrs:{src:s(59),alt:""}}),e._v(" 浙ICP备100422527  ")])])])])])])}]},e.exports.render._withStripped=!0},68:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:""}},69:function(e,t){},70:function(e,t,s){s(69);var i=s(16)(s(68),s(71),"data-v-5e0e04cf",null);i.options.__file="E:\\2017\\official-website\\src\\components\\header2.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] header2.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},71:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0,!1,!1)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("header",[i("div",{staticClass:"container clearfix"},[i("div",{staticClass:"logo fl"},[i("img",{attrs:{src:s(61),alt:""}})]),e._v(" "),i("div",{staticClass:"contact-way fr"},[i("p",[i("img",{attrs:{src:s(62)}}),e._v("400-081-7007")]),e._v(" "),i("p",[i("img",{attrs:{src:s(60)}}),e._v("000000000@qq.com")])])])])])}]},e.exports.render._withStripped=!0},72:function(e,t){function s(e){return/^[a-zA-Z]{6}$/.test(e)}function i(e){return/^[0-9]{6}$/.test(e)}function o(e){return/^[\w\?%&=\-_]{6,18}$/.test(e)}e.exports={isVerification:s,isSMSVerificantion:i,isPassword:o}},73:function(e,t){function s(e){return/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(e)}e.exports=s},74:function(e,t,s){e.exports=s.p+"4be87216bdd5573b850a8098cdc90f15.png"},76:function(e,t,s){e.exports=s.p+"85652ad8d4913501e338eb2a0f1d7f79.png"},95:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(70),o=s.n(i),r=s(66),n=s.n(r),a=s(52),c=s.n(a),u=s(73),l=s.n(u),p=s(72);s.n(p);t.default={name:"",data:function(){return{formRegister:{account:"",psd:"",psdagain:"",tel:"",code:"",msg:""},tip:"",isSend:!0,isClear:!1,count:"",timer:null,isCodeCorrect:!1}},components:{"i-header":o.a,"n-footer":n.a,"counter-down":c.a},mounted:function(){},methods:{testCode:function(){s.i(p.isVerification)(this.formRegister.code)?this.isCodeCorrect=!0:this.isCodeCorrect=!1},getCode:function(){var e=this;this.timer||(this.count=25,this.isSend=!1,this.timer=setInterval(function(){e.count>0&&e.count<=25?e.count--:(clearInterval(e.timer),e.timer=null,e.isClear=!0)},1e3))},submitRegisterForm:function(){if(""===this.formRegister.account)this.tip="账号不能为空";else if(s.i(p.isPassword)(this.formRegister.psd))if(this.formRegister.psd!==this.formRegister.psdagain)this.tip="两次密码不一致";else if(l()(this.formRegister.tel))if(s.i(p.isVerification)(this.formRegister.code))if(s.i(p.isSMSVerificantion)(this.formRegister.msg)){var e=this.formRegister;this.$http.post("../../mock/request.json",e).then(function(e){"success"==e.state&&setTimeout(function(){},2e3)}).catch(function(){this.$router.push({path:"/success/2"})})}else this.tip="请输入正确的短信验证码";else this.tip="请输入正确的验证码";else this.tip="请输入正确的手机号码";else this.tip="密码格式不正确"}}}}});