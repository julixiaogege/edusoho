!function(s){function e(e){for(var t,r,n=e[0],o=e[1],i=e[2],a=0,u=[];a<n.length;a++)r=n[a],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&u.push(l[r][0]),l[r]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(s[t]=o[t]);for(p&&p(e);u.length;)u.shift()();return f.push.apply(f,i||[]),c()}function c(){for(var e,t=0;t<f.length;t++){for(var r=f[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==l[i]&&(n=!1)}n&&(f.splice(t--,1),e=a(a.s=r[0]))}return e}var r={},l={266:0},f=[];function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return s[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=s,a.c=r,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var p=n;f.push([679,0]),c()}({10:function(e,t){e.exports=jQuery},679:function(e,t,r){"use strict";r.r(t);var n=r(5),o=$("#setup-form"),i=$(".js-submit-setup-form");if(o.length){var a=o.validate({email:{required:!0,es_email:!0,es_remote:{type:"POST"}},nickname:{required:!0,minlength:4,maxlength:18,nickname:!0,chinese_alphanumeric:!0,es_remote:{type:"get"}}});i.click(function(){a.form()&&(i.button("loadding"),$.post(o.attr("action"),o.serialize(),function(){Object(n.a)("success",Translator.trans("settings.setup.set_success.hint")),window.location.href=i.data("goto")}).error(function(){i.button("reset"),Object(n.a)("danger",Translator.trans("settings.setup.set_failed.hint"))}))})}}});