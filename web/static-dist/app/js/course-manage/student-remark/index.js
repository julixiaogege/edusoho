!function(t){var n={};function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(e,r,t){a.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(r,e){if(1&e&&(r=a(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)a.d(t,n,function(e){return r[e]}.bind(null,n));return t},a.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(r,"a",r),r},a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},a.p="/static-dist/",a(a.s=563)}({563:function(e,r){var t=$("#student-remark-form").parents(".modal"),n=$("#student-remark-form"),a=n.validate({rules:{remark:{required:!1,maxlength:80}},messages:{remark:{maxlength:Translator.trans("course_manage.student_remark_validate_error_hint")}}});$(".js-student-remark-save-btn").click(function(e){a.form()&&($(e.currentTarget).button("loadding"),$.post(n.attr("action"),n.serialize(),function(e){t.modal("hide");var r=n.data("user");cd.message({type:"success",message:Translator.trans("course_manage.student_remark_success_hint",{username:r}),delay:1e3}).on("close",function(){window.location.reload()})}).error(function(){var e=n.data("user");cd.message({type:"danger",message:Translator.trans("course_manage.student_remark_failed_hint",{username:e})})}))})}});