(()=>{var t={n:a=>{var e=a&&a.__esModule?()=>a.default:()=>a;return t.d(e,{a:e}),e},d:(a,e)=>{for(var s in e)t.o(e,s)&&!t.o(a,s)&&Object.defineProperty(a,s,{enumerable:!0,get:e[s]})},o:(t,a)=>Object.prototype.hasOwnProperty.call(t,a),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},a={};(()=>{"use strict";t.r(a);const e=flarum.core.compat["admin/app"];var s=t.n(e);function n(t,a){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,a){return t.__proto__=a,t},n(t,a)}function o(t,a){t.prototype=Object.create(a.prototype),t.prototype.constructor=t,n(t,a)}const r=flarum.core.compat["admin/components/ExtensionPage"];var i=t.n(r);const l=flarum.core.compat["common/components/Alert"];var p=t.n(l);const c=flarum.core.compat["common/components/Button"];var d=t.n(c);const u=flarum.core.compat["common/components/LoadingIndicator"];var v=t.n(u);function h(){return h=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},h.apply(this,arguments)}const g=flarum.core.compat["admin/components/UploadImageButton"];var f=function(t){function a(){return t.apply(this,arguments)||this}o(a,t),a.initAttrs=function(a){t.initAttrs.call(this,a),a.name="pwa-icon-"+a.size+"x"+a.size};var e=a.prototype;return e.view=function(a){return this.attrs.loading=this.loading,this.attrs.className=(this.attrs.className||"")+" Button",s().data.settings["askvortsov-pwa.icon_"+this.attrs.size+"_path"]?(this.attrs.onclick=this.remove.bind(this),m("div",null,m("p",null,m("img",{src:s().forum.attribute(this.attrs.name+"Url"),alt:""})),m("p",null,t.prototype.view.call(this,h({},a,{children:s().translator.trans("core.admin.upload_image.remove_button")}))))):(this.attrs.onclick=this.upload.bind(this),t.prototype.view.call(this,h({},a,{children:s().translator.trans("core.admin.upload_image.upload_button")})))},e.resourceUrl=function(){return s().forum.attribute("apiUrl")+"/pwa/logo/"+this.attrs.size},a}(t.n(g)()),w=function(t){function a(){return t.apply(this,arguments)||this}o(a,t);var e=a.prototype;return e.oninit=function(a){t.prototype.oninit.call(this,a),this.saving=!1,this.refresh()},e.refresh=function(){var t=this;this.loading=!0,this.status_messages=[],this.manifest={},this.sizes=[],s().request({method:"GET",url:s().forum.attribute("apiUrl")+"/pwa/settings"}).then((function(a){t.manifest=a.data.attributes.manifest,t.sizes=a.data.attributes.sizes,t.status_messages=a.data.attributes.status_messages,t.loading=!1,m.redraw()}))},e.checkExistence=function(t){var a=new XMLHttpRequest;return a.open("HEAD",t,!1),a.send(),404!=a.status},e.content=function(){var t=this;return this.loading||this.saving?m("div",{className:"PWAPage"},m("div",{className:"container"},m(v(),null))):m("div",{className:"PWAPage ExtensionPage-settings"},m("div",{className:"container"},m("form",null,m("h2",null,s().translator.trans("askvortsov-pwa.admin.pwa.heading")),m("div",{className:"helpText"},s().translator.trans("askvortsov-pwa.admin.pwa.text")),m("div",{class:"statusCheck"},m("legend",null,s().translator.trans("askvortsov-pwa.admin.pwa.status_check_heading")),this.status_messages.map((function(t){return m(p(),{type:t.type,dismissible:!1},[t.message])}))),m("fieldset",{class:"parent"},m("legend",null,s().translator.trans("askvortsov-pwa.admin.pwa.maintenance.heading")),this.buildSettingComponent({setting:"askvortsov-pwa.debug",label:s().translator.trans("askvortsov-pwa.admin.pwa.maintenance.debug_label"),help:s().translator.trans("askvortsov-pwa.admin.pwa.maintenance.debug_text"),type:"boolean"}),this.buildSettingComponent((function(){return m("div",null,m(d(),{className:"Button",onclick:t.resetVapid.bind(t)},"Reset VAPID keys"),m("div",{className:"helpText"},s().translator.trans("askvortsov-pwa.admin.pwa.maintenance.reset_vapid_text")))}))),m("fieldset",{class:"parent"},m("fieldset",null,m("legend",null,s().translator.trans("askvortsov-pwa.admin.pwa.about.heading")),this.buildSettingComponent({setting:"askvortsov-pwa.shortName",placeholder:this.setting("forum_title")(),label:s().translator.trans("askvortsov-pwa.admin.pwa.about.short_name_label"),help:s().translator.trans("askvortsov-pwa.admin.pwa.about.short_name_text"),type:"text"})),m("fieldset",null,this.buildSettingComponent({setting:"askvortsov-pwa.longName",placeholder:this.setting("forum_title")(),label:s().translator.trans("askvortsov-pwa.admin.pwa.about.long_name_label"),help:s().translator.trans("askvortsov-pwa.admin.pwa.about.long_name_text"),type:"text"})),m("fieldset",null,m("div",{className:"helpText"},s().translator.trans("askvortsov-pwa.admin.pwa.about.description_text")),m("textarea",{className:"FormControl",value:this.manifest.description,disabled:!0},this.manifest.description))),m("fieldset",{class:"parent"},m("fieldset",null,m("legend",null,s().translator.trans("askvortsov-pwa.admin.pwa.colors.heading")),this.buildSettingComponent({setting:"askvortsov-pwa.themeColor",placeholder:this.setting("theme_primary_color")(),label:s().translator.trans("askvortsov-pwa.admin.pwa.colors.theme_color_label"),help:s().translator.trans("askvortsov-pwa.admin.pwa.colors.theme_color_text"),type:"color-preview"})),m("fieldset",null,this.buildSettingComponent({setting:"askvortsov-pwa.backgroundColor",placeholder:"#aaaaaa",label:s().translator.trans("askvortsov-pwa.admin.pwa.colors.background_color_label"),help:s().translator.trans("askvortsov-pwa.admin.pwa.colors.background_color_text"),type:"color-preview"}))),m("fieldset",{class:"parent"},m("fieldset",null,m("legend",null,s().translator.trans("askvortsov-pwa.admin.pwa.other.heading")),this.buildSettingComponent({setting:"askvortsov-pwa.forcePortrait",label:s().translator.trans("askvortsov-pwa.admin.pwa.other.force_portrait_text"),type:"boolean"}))),this.submitButton(),m("fieldset",null,m("legend",null,s().translator.trans("askvortsov-pwa.admin.pwa.logo_heading")),m("div",{className:"helpText"},s().translator.trans("askvortsov-pwa.admin.pwa.logo_text")),this.sizes.map((function(t){return m("fieldset",{class:"logoFieldset"},m(f,{size:t}),m("div",{className:"helpText"},s().translator.trans("askvortsov-pwa.admin.pwa.logo_size_text",{size:t})))}))))))},e.resetVapid=function(){confirm(s().translator.trans("askvortsov-pwa.admin.pwa.maintenance.reset_vapid_confirm"))&&s().request({method:"POST",url:s().forum.attribute("apiUrl")+"/reset_vapid"}).then((function(t){s().alerts.show({type:"success"},s().translator.trans("askvortsov-pwa.admin.pwa.maintenance.reset_vapid_success",{count:t.deleted}))}))},e.saveSettings=function(a){var e=this.setting("askvortsov-pwa.backgroundColor")();if(!e.length||/^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(e))return t.prototype.saveSettings.call(this,a);alert(s().translator.trans("core.admin.appearance.enter_hex_message"))},a}(i());s().initializers.add("askvortsov/flarum-pwa",(function(){s().extensionData.for("askvortsov-pwa").registerPage(w)}))})(),module.exports=a})();
//# sourceMappingURL=admin.js.map