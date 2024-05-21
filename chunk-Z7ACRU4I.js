import{a as te,b as ie,c as ne}from"./chunk-HURAKWJ6.js";import{a as Z}from"./chunk-DTWWVMWC.js";import{a as ee}from"./chunk-4UC7HF7M.js";import"./chunk-TMIHV575.js";import{$ as h,Ad as $,Ca as u,Ea as C,Ha as I,Ia as y,Ja as F,Ka as x,La as e,Ld as V,M as _,Ma as t,Md as q,N as g,Na as c,Oc as E,Pb as R,Rd as G,Ta as k,Ua as b,Uc as B,Ud as Y,V as p,Zb as L,a as w,ac as A,bc as D,ce as J,ee as K,fb as i,gb as T,gd as O,ge as Q,hb as N,hf as X,la as l,ld as U,ma as v,md as P,nc as M,nd as j,qd as m,rd as H,ud as W,vd as z,ya as S}from"./chunk-XCZ7SFHP.js";function ae(o,n){if(o&1&&(e(0,"mat-option",31),i(1),t()),o&2){let f=n.$implicit,r=b();u("value",f),l(),T(r.availableLanguageDisplayName[f])}}function le(o,n){if(o&1&&(e(0,"p",32),c(1,"app-ui-icon",10),i(2," Currently there's no beta. "),t()),o&2){let f=b();l(),u("uiIcon",f.uiIcon.WARNING)}}function ce(o,n){o&1&&(e(0,"p",33),i(1,"Changes that require a reload were made. Saving will reload automatically."),t())}var re=(()=>{let n=class n{constructor(r,a){this._settingsService=r,this._toDo=a,this.reloadRequired=!1,this.uiIcon=L,this.availableLanguages=A,this.availableLanguageDisplayName=D,this.BETA_CODE=h(Z,{optional:!0}),this._checklistOfferings=h(ne),this._checklistCooking=h(ie),this._checklistMuseum=h(te),this._checklistHeartEvents=h(ee),this.settingsForm=new j({useBeta:new m(!1,{nonNullable:!0}),resetLiveToDo:new m(!1,{nonNullable:!0}),resetBetaToDo:new m(!1,{nonNullable:!0}),resetLiveChecklists:new m(!1,{nonNullable:!0}),resetBetaChecklists:new m(!1,{nonNullable:!0}),language:new m("en",{nonNullable:!0}),disableChangelogs:new m(!1,{nonNullable:!0})}),this.BETA_CODE||this.settingsForm.get("useBeta")?.disable();let s=this._settingsService.getSettings();this.settingsForm.patchValue(s),this.settingsForm.valueChanges.subscribe({next:d=>{this.reloadRequired=s.useBeta!==d.useBeta||s.language!==d.language}})}saveSettings(){let r=w({},this.settingsForm.value);r.resetLiveChecklists&&(this._checklistMuseum.resetLiveChecklist(),this._checklistOfferings.resetLiveChecklist(),this._checklistCooking.resetLiveChecklist(),this._checklistHeartEvents.resetLiveChecklist()),r.resetBetaChecklists&&(this._checklistMuseum.resetBetaChecklist(),this._checklistOfferings.resetBetaChecklist(),this._checklistCooking.resetBetaChecklist(),this._checklistHeartEvents.resetBetaChecklist()),r.resetLiveToDo&&this._toDo.resetLiveToDo(),r.resetBetaToDo&&this._toDo.resetBetaToDo(),delete r.resetBetaToDo,delete r.resetLiveToDo,delete r.resetBetaChecklists,delete r.resetLiveChecklists,this._settingsService.saveSettings(r),this.reloadRequired&&location.reload()}};n.\u0275fac=function(a){return new(a||n)(v(M),v(Y))},n.\u0275cmp=_({type:n,selectors:[["app-settings"]],decls:100,vars:7,consts:[[1,"text-black","container","block","mx-auto","my-10"],[3,"formGroup","submit"],[1,"grid","md:grid-cols-3","pb-12","gap-y-10","gap-x-8","border-b","border-accent/50","mb-8"],[1,"leading-7","font-bold","text-lg"],[1,"bg-amber-50/70","md:col-span-2","px-4","py-6","sm:p-8","sm:rounded-lg"],[1,"flex","flex-col","gap-1","items-start"],["for","language",1,"font-bold","leading-6"],[1,"btn","btn-secondary"],["formControlName","language","id","language"],[1,"flex","gap-2","text-black","font-bold","leading-6","items-center","mt-2"],[1,"!w-6","shrink-0",3,"uiIcon"],[1,"flex","gap-x-3"],[1,"flex","h-6","items-center"],["formControlName","useBeta","id","useBeta","name","useBeta","type","checkbox"],["for","useBeta",1,"font-bold","leading-6"],[1,"leading-6"],["class","flex gap-2 text-black font-bold leading-6 items-center"],[1,"bg-amber-50/70","md:col-span-2","px-4","py-6","sm:p-8","sm:rounded-lg","flex","flex-col","gap-6"],["formControlName","resetLiveToDo","id","resetLiveToDo","name","resetLiveToDo","type","checkbox"],["for","resetLiveToDo",1,"font-bold","leading-6"],["formControlName","resetBetaToDo","id","resetBetaToDo","name","resetBetaToDo","type","checkbox"],["for","resetBetaToDo",1,"font-bold","leading-6"],["formControlName","disableChangelogs","id","disableChangelogs","name","disableChangelogs","type","checkbox"],["for","disableChangelogs",1,"font-bold","leading-6"],["formControlName","resetLiveChecklists","id","resetLiveChecklists","name","resetLiveChecklists","type","checkbox"],["for","resetLiveChecklists",1,"font-bold","leading-6"],["formControlName","resetBetaChecklists","id","resetBetaChecklists","name","resetBetaChecklists","type","checkbox"],["for","resetBetaChecklists",1,"font-bold","leading-6"],[1,"mt-6","sm:mt-8","flex","justify-between","items-center"],["class","font-bold"],["type","submit",1,"btn-amber","ml-auto"],[3,"value"],[1,"flex","gap-2","text-black","font-bold","leading-6","items-center"],[1,"font-bold"]],template:function(a,s){if(a&1&&(e(0,"app-card",0)(1,"form",1),k("submit",function(){return s.saveSettings()}),e(2,"div",2)(3,"div")(4,"h3",3),i(5,"Language"),t(),e(6,"p"),i(7,"Change the language of Coral Guide"),t()(),e(8,"div",4)(9,"div",5)(10,"label",6),i(11,"Language"),t(),e(12,"mat-form-field",7)(13,"mat-select",8),F(14,ae,2,2,"mat-option",31,y),t()()(),e(16,"p",9),c(17,"app-ui-icon",10),i(18," Work in progress: Currently only in-game data has translations, the app itself will stay in english. Translations are pulled from game files and will be shown as is. "),t()()(),e(19,"div",2)(20,"div")(21,"h3",3),i(22,"Beta data"),t(),e(23,"p"),i(24),t()(),e(25,"div",4)(26,"div",11)(27,"div",12),c(28,"input",13),t(),e(29,"div")(30,"label",14),i(31,"Use beta data"),t(),e(32,"p",15),i(33,"Switches app data to beta data. Change requires reload."),t()()(),S(34,le,3,1,"p",16),t()(),e(35,"div",2)(36,"div")(37,"h3",3),i(38,"To-Dos"),t(),e(39,"p"),i(40,"Options for to-dos. Reset your to-dos data if they behave in unwanted behavior and set defaults for viewing. "),t()(),e(41,"div",17)(42,"div",11)(43,"div",12),c(44,"input",18),t(),e(45,"div")(46,"label",19),i(47,"Reset live to-dos"),t(),e(48,"p",15),i(49,"Reset all to-dos which were created while using live data."),t()()(),e(50,"div",11)(51,"div",12),c(52,"input",20),t(),e(53,"div")(54,"label",21),i(55,"Reset beta to-dos"),t(),e(56,"p",15),i(57,"Reset all to-dos which were created while using beta data."),t()()()()(),e(58,"div",2)(59,"div")(60,"h3",3),i(61,"Changelogs"),t(),e(62,"p"),i(63,"Options for latest changelogs. If you disabled them you can reactivate them here. "),t()(),e(64,"div",17)(65,"div",11)(66,"div",12),c(67,"input",22),t(),e(68,"div")(69,"label",23),i(70,"Disable latest changelogs"),t(),e(71,"p",15),i(72,"When disabled, latest changes will not be displayed once per update."),t()()()()(),e(73,"div",2)(74,"div")(75,"h3",3),i(76,"Checklists"),t(),e(77,"p"),i(78,"Options for checklists. Reset your checklists data. "),t()(),e(79,"div",17)(80,"div",11)(81,"div",12),c(82,"input",24),t(),e(83,"div")(84,"label",25),i(85,"Reset live checklists"),t(),e(86,"p",15),i(87,"Reset all checklists which were created while using live data."),t()()(),e(88,"div",11)(89,"div",12),c(90,"input",26),t(),e(91,"div")(92,"label",27),i(93,"Reset beta checklists"),t(),e(94,"p",15),i(95,"Reset all checklists which were created while using beta data."),t()()()()(),e(96,"div",28),S(97,ce,2,0,"p",29),e(98,"button",30),i(99,"Save"),t()()()()),a&2){let d;l(),u("formGroup",s.settingsForm),l(13),x(s.availableLanguages),l(3),u("uiIcon",s.uiIcon.WARNING),l(7),N("Options for latest beta build. Current beta code: ",(d=s.BETA_CODE)!==null&&d!==void 0?d:"no ongoing beta"," "),l(5),C("opacity-50",!s.BETA_CODE),l(5),I(34,s.BETA_CODE?-1:34),l(63),I(97,s.reloadRequired?97:-1)}},dependencies:[q,G,H,O,U,P,W,z,J,K,B],encapsulation:2});let o=n;return o})();var se=(()=>{let n=class n{};n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=g({type:n}),n.\u0275inj=p({imports:[E,E]});let o=n;return o})();var me=[{path:"",component:re}],Qe=(()=>{let n=class n{};n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=g({type:n}),n.\u0275inj=p({imports:[R,V.forChild(me),X,$,se,Q]});let o=n;return o})();export{Qe as SettingsModule};
