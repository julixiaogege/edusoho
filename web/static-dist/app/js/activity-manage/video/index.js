!function(l){function e(e){for(var t,i,n=e[0],a=e[1],r=e[2],o=0,s=[];o<n.length;o++)i=n[o],Object.prototype.hasOwnProperty.call(u,i)&&u[i]&&s.push(u[i][0]),u[i]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(l[t]=a[t]);for(v&&v(e);s.length;)s.shift()();return c.push.apply(c,r||[]),d()}function d(){for(var e,t=0;t<c.length;t++){for(var i=c[t],n=!0,a=1;a<i.length;a++){var r=i[a];0!==u[r]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=i[0]))}return e}var i={},u={39:0},c=[];function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=l,o.c=i,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var a=0;a<t.length;a++)e(t[a]);var v=n;c.push([768,0]),d()}({10:function(e,t){e.exports=jQuery},159:function(e,t,i){"use strict";var n=i(0),a=i.n(n),r=i(1),o=i.n(r),s=i(5),l=function(){function i(e){a()(this,i),this.element=$(e),this.upload_id="subtitle-uploader",this.inited=!1,0<this.element.length&&(this.init(),this.inited=!0);var t=this.element.closest("#video-subtitle-form-group");0<t.find("#ext_mediaId_for_subtitle").val()&&this.render({id:t.find("#ext_mediaId_for_subtitle").val()})}return o()(i,[{key:"init",value:function(){var i=this;this.element.on("click",".js-subtitle-delete",function(){var t=$(this);$.post(t.data("subtitleDeleteUrl"),function(e){e&&(Object(s.a)("success",Translator.trans("activity.video_manage.delete_success_hint")),t.parent().remove(),$("#"+i.upload_id).show())})})}},{key:"render",value:function(e){if(this.inited&&e&&"id"in e&&0<e.id){this.media=e,this.element.html(Translator.trans("activity.video_manage.subtitle_load_hint"));var t=this;$.get(this.element.data("dialogUrl"),{mediaId:this.media.id},function(e){t.element.html(e),t.initUploader()})}}},{key:"initUploader",value:function(){var i=this,t=$("#"+this.upload_id),n=$(".js-subtitle-dialog").data("mediaId"),e=t.data("mediaGlobalId");this.uploader&&this._destroyUploader();var a=new UploaderSDK({sdkBaseUri:app.cloudSdkBaseUri,disableDataUpload:app.cloudDisableLogReport,disableSentry:app.cloudDisableLogReport,initUrl:t.data("initUrl"),finishUrl:t.data("finishUrl"),id:this.upload_id,ui:"simple",multi:!0,accept:{extensions:["srt"],mimeTypes:["text/srt"]},type:"sub",process:{common:{videoNo:e}},locale:document.documentElement.lang});a.on("error",function(e){"Q_TYPE_DENIED"===e.error&&Object(s.a)("danger",Translator.trans("activity.video_manage.subtitle_upload_error_hint"))}),a.on("file.finish",function(e){$.post(t.data("subtitleCreateUrl"),{name:e.name,subtitleId:e.id,mediaId:n}).success(function(e){var t={waiting:Translator.trans("activity.video_manage.convert_status_waiting"),doing:Translator.trans("activity.video_manage.convert_status_doing"),success:Translator.trans("activity.video_manage.convert_status_success"),error:Translator.trans("activity.video_manage.convert_status_error"),none:Translator.trans("activity.video_manage.convert_status_none")};$(".js-media-subtitle-list").append('<li class="pvs mtm"><span class="subtitle-name prl pull-left">'+e.name+'</span><span class="subtitle-transcode-status '+e.convertStatus+'">'+t[e.convertStatus]+'</span><a href="javascript:;" class="btn-link pll color-primary js-subtitle-delete" data-subtitle-delete-url="/media/'+n+"/subtitle/"+e.id+'/delete">'+Translator.trans("activity.video_manage.subtitle_delete_hint")+"</a></li>"),3<$(".js-media-subtitle-list li").length&&$("#"+i.upload_id).hide(),Object(s.a)("success",Translator.trans("activity.video_manage.subtitle_upload_success_hint"))}).error(function(e){Object(s.a)("danger",e.responseJSON.error.message)})}),this.uploader=a}},{key:"show",value:function(){var e=this.element.parent(".form-group");0<e.length&&e.removeClass("hide")}},{key:"hide",value:function(){var e=this.element.parent(".form-group");0<e.length&&e.addClass("hide")}},{key:"_destroyUploader",value:function(){if(this.uploader){this.uploader.__events=null;try{this.uploader.destroy()}catch(e){}this.uploader=null}}},{key:"destroy",value:function(){this.inited&&this._destroyUploader()}}]),i}();t.a=l},768:function(e,t,i){"use strict";i.r(t);var n=i(13),s=i.n(n),a=i(6),l=i.n(a),r=i(0),o=i.n(r),d=i(1),u=i.n(d),c=i(34),v=i(159);new(function(){function e(){o()(this,e),this.showChooseContent(),this.initStep2form(),this.isInitStep3from(),this.autoValidatorLength(),this.initfileChooser(),this.hideSubtitleWidget()}return u()(e,[{key:"hideSubtitleWidget",value:function(){var e=$("#video-subtitle-form-group");$('[role="presentation"] a[href!="#import-video-panel"]').click(function(){e.show()}),$('a[href="#import-video-panel"]').click(function(){e.hide()})}},{key:"showChooseContent",value:function(){$("#iframe-content").on("click",".js-choose-trigger",function(e){c.a.openUI(),$('[name="ext[mediaSource]"]').val(null)})}},{key:"displayFinishCondition",value:function(e){console.log(e),"self"===e?($("#finish-condition option[value=end]").removeAttr("disabled"),$("#finish-condition option[value=end]").text(Translator.trans("activity.video_manage.finish_detail"))):($("#finish-condition option[value=end]").text(Translator.trans("activity.video_manage.other_finish_detail")),$("#finish-condition option[value=end]").attr("disabled","disabled"),$("#finish-condition option[value=time]").attr("selected",!1),$("#finish-condition option[value=time]").attr("selected",!0),$(".viewLength").removeClass("hidden"),this.initStep3from())}},{key:"initStep2form",value:function(){var e=$("#step2-form"),t=e.data("validator");e.validate({groups:{date:"minute second"},rules:{title:{required:!0,maxlength:50,trim:!0,course_title:!0},minute:"required unsigned_integer",second:"required second_range","ext[mediaSource]":"required","ext[finishDetail]":"unsigned_integer"},messages:{minute:{required:Translator.trans("activity.video_manage.length_required_error_hint")},second:{required:Translator.trans("activity.video_manage.length_unsigned_integer_error_hint"),second_range:Translator.trans("activity.video_manage.second_range_error_hint")},"ext[mediaSource]":Translator.trans("activity.video_manage.media_error_hint")}}),e.data("validator",t)}},{key:"initStep3from",value:function(){var e=$("#step3-form"),t=e.data("validator");e.validate({rules:{"ext[finishDetail]":{required:!0,positive_integer:!0,max:300,min:1}},messages:{"ext[finishDetail]":{required:Translator.trans("activity.video_manage.length_required_error_hint")}}}),e.data("validator",t)}},{key:"autoValidatorLength",value:function(){$(".js-length").blur(function(){var e=$("#step2-form").data("validator");if(e&&e.form()){var t=0|l()($("#minute").val()),i=0|l()($("#second").val());$("#length").val(60*t+i)}})}},{key:"isInitStep3from",value:function(){var t=this;"time"===$("#finish-condition").children("option:selected").val()&&($(".viewLength").removeClass("hidden"),this.initStep3from()),$("#finish-condition").on("change",function(e){"time"==e.target.value?($(".viewLength").removeClass("hidden"),t.initStep3from()):($(".viewLength").addClass("hidden"),$('input[name="ext[finishDetail]"]').rules("remove"))})}},{key:"initfileChooser",value:function(){var t=this,e=new c.a,i=new v.a(".js-subtitle-list");e.on("select",function(e){t.displayFinishCondition(e.source),c.a.closeUI();!function(e){if(0!==e.length&&void 0!==e.length){var t=$("#minute"),i=$("#second"),n=$("#length"),a=l()(e.length),r=l()(a/60),o=a%60;t.val(r),i.val(o),n.val(a),e.minute=r,e.second=o}$('[name="media"]').val(s()(e))}(e),$('[name="ext[mediaSource]"]').val(e.source),$("#step2-form").valid(),"self"==e.source?($("#ext_mediaId").val(e.id),$("#ext_mediaUri").val("")):($("#ext_mediaUri").val(e.uri),$("#ext_mediaId").val(0)),i.render(e)})}}]),e}())}});