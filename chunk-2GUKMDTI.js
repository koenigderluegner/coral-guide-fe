import{a as tt}from"./chunk-2LRPT5UI.js";import"./chunk-DJJM56ZO.js";import"./chunk-3DPJGY4U.js";import{a as Ze}from"./chunk-SQKPZBPB.js";import{a as et}from"./chunk-4DIC2MYZ.js";import{f as Xe}from"./chunk-JTB7FSPQ.js";import"./chunk-S4L2OLAA.js";import{a as ae,b as De}from"./chunk-KEAITQMW.js";import"./chunk-VU7YN75G.js";import{a as re}from"./chunk-32QQRBUA.js";import{a as Je,b as O}from"./chunk-ELANH4BY.js";import{$ as M,$e as Qe,Bd as ne,Ca as f,Db as G,Ea as V,Ed as Le,F as Te,Gd as He,Ha as m,Hb as we,Ia as C,Id as Ge,Ja as v,Jd as oe,Ka as _,Kb as Fe,La as p,Ld as he,M as b,Ma as a,Mb as Z,Md as q,N as K,Na as d,Od as Ve,P as U,Pd as $e,Q as R,Qb as ee,Qd as Be,Ra as W,Rd as pe,Ta as $,Ua as s,V as Q,Vc as te,We as se,Xd as ce,Xe as Ue,Ya as Y,Yd as Ae,_b as D,_d as qe,_e as Re,af as ze,be as Oe,bf as We,cb as J,d as y,db as X,df as de,e as w,eb as B,ee as le,f as F,fb as l,gb as N,ge as me,hb as E,ib as ge,id as ke,je,jf as Ye,k as j,la as r,md as Me,n as ve,ob as Ne,q as _e,qc as A,qe as Ke,rb as Ie,rd as ie,sb as Se,tb as I,ua as be,ub as S,ud as Pe,v as ye,va as z,w as Ee,ya as u}from"./chunk-PUZLTWSY.js";var it=(()=>{let t=class t{constructor(){this.uiIcons=D,this.isNPCListActive=!1,this.router=M(Ge),this.updateIsNPCListActive(this.router.url),this.router.events.pipe(Je(),ye(n=>n instanceof Le)).subscribe({next:n=>{this.updateIsNPCListActive(n.urlAfterRedirects)}})}updateIsNPCListActive(n){this.isNPCListActive=n.startsWith("/npcs/")&&!n.includes("overview")&&!n.includes("gifting")}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=b({type:t,selectors:[["app-people"]],decls:7,vars:3,consts:[["routerLink","overview",3,"active","uiIcon"],["routerLink","gifting",3,"uiIcon"],[1,"hidden"]],template:function(o,c){o&1&&(p(0,"app-sidebar-container")(1,"app-module-sidebar")(2,"app-module-sidebar-item",0),l(3,"NPC List "),a(),p(4,"app-module-sidebar-item",1),l(5,"Gifting"),a()(),d(6,"router-outlet",2),a()),o&2&&(r(2),f("active",c.isNPCListActive)("uiIcon",c.uiIcons.NEUTRAL),r(2),f("uiIcon",c.uiIcons.GIFTING))},dependencies:[He,oe,Be,$e,je],encapsulation:2});let e=t;return e})();var xe=[{displayName:"Default",value:"default"},{displayName:"Alphabetical",value:"alphabetical"},{displayName:"Birthdate",value:"birthdate"}],Ii=xe.map(e=>e.value);function gt(e,t){if(e&1&&(p(0,"mat-option",4),l(1),a()),e&2){let i=t.$implicit;f("value",i.value),r(),N(i.displayName)}}var k=(()=>{let t=class t{constructor(){this.npcSortOptions=xe,this.searchControl=new ie("",{nonNullable:!0}),this.sortControl=new ie("default",{nonNullable:!0}),this.sortOrderControl=new ie("asc",{nonNullable:!0}),this.searchValueChanges=O(this.searchControl.valueChanges,{initialValue:""}),this.sortValueChanges=O(this.sortControl.valueChanges,{initialValue:"default"}),this.sortOrderValueChanges=O(this.sortOrderControl.valueChanges,{initialValue:"asc"})}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=b({type:t,selectors:[["app-npc-filter"]],standalone:!0,features:[Ne],decls:11,vars:2,consts:[[1,"mb-5","flex","gap-x-3"],[1,"semi-transparent-form-field"],["matInput","",3,"formControl"],["disableOptionCentering","",3,"formControl"],[3,"value"]],template:function(o,c){o&1&&(p(0,"div",0)(1,"mat-form-field",1)(2,"mat-label"),l(3,"Search term"),a(),d(4,"input",2),a(),p(5,"mat-form-field",1)(6,"mat-label"),l(7,"Sorting"),a(),p(8,"mat-select",3),v(9,gt,2,2,"mat-option",4,C),a()()()),o&2&&(r(4),f("formControl",c.searchControl),r(4),f("formControl",c.sortControl),r(),_(c.npcSortOptions))},dependencies:[ee,le,et,Oe,te,me,ne,ke,Me,Pe],encapsulation:2});let e=t;return e})();var rt=new Map([["Spring",100],["Summer",200],["Fall",300],["Winter",400]]);function fe(e,t,i){switch(i){case"alphabetical":e=[...e].sort((n,o)=>{let c="characterName"in n?n.characterName:n.npc?.characterName??"",g="characterName"in o?o.characterName:o.npc?.characterName??"";return c.toLowerCase()==="universal"?1:g.toLowerCase()==="universal"?-1:c.localeCompare(g)});break;case"birthdate":e=[...e].sort((n,o)=>{let c="characterName"in n?n.characterName:n.npc?.characterName??"",g="characterName"in o?o.characterName:o.npc?.characterName??"";if(c.toLowerCase()==="universal")return 1;if(g.toLowerCase()==="universal")return-1;let P="npc"in n?n.npc?.birthday:n.birthday,x="npc"in o?o.npc?.birthday:o.birthday;if(!P&&x)return 1;if(P&&!x)return-1;if(!P&&!x)return 0;P=P,x=x;let h=(rt.get(P.season)??0)+P.day,T=(rt.get(x.season)??0)+x.day;return h-T});break}return t?e.filter(n=>("characterName"in n?n.characterName:n.npc?.characterName??"").toLowerCase().includes(t)):e}function ht(e,t){if(e&1&&d(0,"app-inline-minimal-item",3),e&2){let i=s().$implicit;f("minimalItem",i.item)}}function xt(e,t){if(e&1&&(p(0,"span"),l(1),I(2,"addSpacesToPascalCase"),a()),e&2){let i=s().$implicit;r(),E("All ",S(2,1,i.categoryName),"")}}function Ct(e,t){if(e&1&&u(0,ht,1,1,"app-inline-minimal-item",3)(1,xt,3,3,"span"),e&2){let i=t.$implicit;m(0,i.type==="item"?0:-1),r(),m(1,i.type==="category"?1:-1)}}function vt(e,t){if(e&1&&(p(0,"div",0),d(1,"app-ui-icon",1),l(2),a(),p(3,"div",2),v(4,Ct,2,2,null,null,C),a()),e&2){let i=s().$implicit,n=s();r(),f("uiIcon",i.icon),r(),E(" ",i.label," "),r(2),_(n.preferences[i.preferenceField])}}function _t(e,t){if(e&1&&u(0,vt,6,2),e&2){let i=t.$implicit,n=s();m(0,n.preferences[i.preferenceField].length?0:-1)}}var ue=(()=>{let t=class t{constructor(){this.setCssClass=!0,this.preferencesMap=Ze}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=b({type:t,selectors:[["app-gifting-grid"]],hostVars:2,hostBindings:function(o,c){o&2&&V("gifting-preference-grid",c.setCssClass)},inputs:{preferences:"preferences"},decls:2,vars:0,consts:[[1,"font-semibold","flex","items-center","sm:flex-col","sm:pr-10","mb-1","text-black"],[1,"!text-gifting","mr-1","sm:mr-0","!h-6","!w-6",3,"uiIcon"],[1,"gifting-gifts-grid"],[3,"minimalItem"]],template:function(o,c){o&1&&v(0,_t,1,1,null,null,C),o&2&&_(c.preferencesMap)},dependencies:[q,Ke,qe],styles:[`.gifting-preference-grid{margin-top:.25rem;display:grid;grid-template-columns:repeat(1,minmax(0,1fr));font-size:1.25rem;line-height:1.75rem}@media (min-width: 640px){.gifting-preference-grid{row-gap:.75rem}}.gifting-gifts-grid{margin-top:.25rem;margin-bottom:1rem;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));align-items:center;gap:.5rem}@media (min-width: 640px){.gifting-preference-grid{grid-template-columns:min-content 1fr}.gifting-gifts-grid{grid-template-columns:repeat(auto-fill,minmax(200px,1fr))}}
`],encapsulation:2});let e=t;return e})();function Nt(e,t){if(e&1&&d(0,"app-ui-icon",14),e&2){let i=s(2).$implicit,n=s(2);Y("matTooltip","",i.npc==null?null:i.npc.characterName," is dateable"),f("uiIcon",n.uiIcon.LOVE)}}function It(e,t){if(e&1&&(p(0,"div",15),d(1,"app-ui-icon",16),l(2),I(3,"ingameDate"),a()),e&2){let i=s(2).$implicit,n=s(2);r(),f("uiIcon",n.uiIcon.BIRTHDAY),r(),E(" ",S(3,2,i.npc.birthday)," ")}}function St(e,t){if(e&1&&(d(0,"app-item-icon",9),p(1,"div",10)(2,"div",11),l(3),u(4,Nt,1,2,"app-ui-icon",12),a(),u(5,It,4,4,"div",13),a()),e&2){let i=s().$implicit;f("itemName",i.preferences.npc.iconName),r(3),E(" ",i.preferences.npc.characterName," "),r(),m(4,i.npc!=null&&i.npc.isDateable?4:-1),r(),m(5,i.npc&&i.npc.birthday?5:-1)}}function wt(e,t){e&1&&l(0," Universal ")}function Ft(e,t){if(e&1){let i=W();p(0,"app-expandable",3,4)(2,"div",5),$("click",function(){U(i);let o=B(1);return R(o.toggle())}),p(3,"div",6),u(4,St,6,4)(5,wt,1,0),a(),d(6,"i",7),a(),d(7,"app-gifting-grid",8),a()}if(e&2){let i=t.$implicit,n=B(1);r(4),m(4,i.preferences.npc?4:-1),r(),m(5,i.preferences.mapKey==="ci_universal"?5:-1),r(),V("down",!n.open)("translate-y-[-3px]",n.open)("up",n.open),r(),f("preferences",i.preferences)}}function kt(e,t){if(e&1&&(p(0,"app-card",2),v(1,Ft,8,9,"app-expandable",17,C),a()),e&2){let i=s();r(),_(i.filteredAndSortedNpcs())}}var pt=(()=>{var t,i,n,o,c;let g=class g{constructor(){w(this,t,void 0);w(this,i,void 0);w(this,n,void 0);w(this,o,void 0);w(this,c,void 0);this.uiIcon=D,this.npcFilter=z(k),F(this,t,G(()=>this.npcFilter()?.searchValueChanges()??"")),F(this,i,G(()=>this.npcFilter()?.sortValueChanges()??"default")),F(this,n,fe),F(this,o,be(void 0)),this.filteredAndSortedNpcs=G(()=>{let x=y(this,o).call(this)??[];if(!y(this,t)||!y(this,i))return x;let h=y(this,t).call(this).toLowerCase(),T=y(this,i).call(this);return y(this,n).call(this,x,h,T)}),F(this,c,M(A)),this.gifting$=_e({gifts:y(this,c).fetchGiftingPreferences$(),npcs:y(this,c).fetchNPCs$()}).pipe(Te(({gifts:x,npcs:h})=>{let T=x.map(H=>({preferences:H,npc:h.find(ft=>ft.key===H.mapKey)}));return y(this,o)?.set(T),j(T)}))}};t=new WeakMap,i=new WeakMap,n=new WeakMap,o=new WeakMap,c=new WeakMap,g.\u0275fac=function(h){return new(h||g)},g.\u0275cmp=b({type:g,selectors:[["app-gifting"]],viewQuery:function(h,T){h&1&&J(T.npcFilter,k,5),h&2&&X()},decls:4,vars:3,consts:[[1,"px-2","xl:px-[50px]","w-full","pt-2","pb-6","2xl:pt-[60px]"],["class","text-xl gifting-card"],[1,"text-xl","gifting-card"],["open","",1,"mb-8"],["expandableComponent",""],["expandableHeader","",1,"flex","justify-between","items-center","cursor-pointer",3,"click"],[1,"text-2xl","text-black","font-semibold","flex","items-center","gifting-portrait"],[1,"arrow"],[3,"preferences"],[1,"h-16","mr-3",3,"itemName"],[1,"flex","flex-col"],[1,"flex","gap-2","items-center"],["class","!text-gifting !h-6 !w-6",3,"uiIcon","matTooltip"],["class","text-lg flex gap-2"],[1,"!text-gifting","!h-6","!w-6",3,"uiIcon","matTooltip"],[1,"text-lg","flex","gap-2"],[1,"!h-6","!w-6",3,"uiIcon"],["open","","class","mb-8"]],template:function(h,T){if(h&1&&(p(0,"div",0),d(1,"app-npc-filter"),u(2,kt,3,0,"app-card",1),I(3,"async"),a()),h&2){let H;r(2),m(2,(H=S(3,1,T.gifting$))?2:-1,H)}},dependencies:[q,Ve,pe,de,ce,k,ue,Fe,se],styles:[`.gifting-portrait .app-item-icon>img{width:auto;height:100%;aspect-ratio:unset}.gifting-card{max-width:1100px}
`],encapsulation:2});let e=g;return e})();function Pt(e,t){if(e&1&&d(0,"app-ui-icon",15),e&2){let i=s().$implicit,n=s(2);Y("matTooltip","",i.characterName," is dateable"),f("uiIcon",n.uiIcon.LOVE)}}function Lt(e,t){if(e&1&&(p(0,"div",16),d(1,"app-ui-icon",17),l(2),I(3,"ingameDate"),a()),e&2){let i=s().$implicit,n=s(2);r(),f("uiIcon",n.uiIcon.BIRTHDAY),r(),E(" ",S(3,2,i.birthday)," ")}}function Ht(e,t){e&1&&(p(0,"div",14),l(1,"unofficial head portrait"),a())}var Gt=e=>["..",e],Dt=(e,t)=>({"line-clamp-2":e,"line-clamp-1":t});function Vt(e,t){if(e&1&&(p(0,"a",4),d(1,"div",5),p(2,"div",6),d(3,"app-npc-head-portrait",7),a(),p(4,"div",8)(5,"div",9)(6,"span",10),l(7),a(),u(8,Pt,1,2,"app-ui-icon",11),a(),u(9,Lt,4,4,"div",12),p(10,"div",13),l(11),a(),u(12,Ht,2,0,"div",14),a()()),e&2){let i=t.$implicit;f("routerLink",Ie(9,Gt,i.key)),r(3),f("npcKey",i.key)("portraitName",i.headerPortraitFileName),r(4),N(i.characterName),r(),m(8,i.isDateable?8:-1),r(),m(9,i.birthday?9:-1),r(),f("ngClass",Se(11,Dt,!i.customHead,i.customHead)),r(),N(i.description),r(),m(12,i.customHead?12:-1)}}function $t(e,t){e&1&&(p(0,"div",3),v(1,Vt,13,14,"a",18,C),a()),e&2&&(r(),_(t))}function Bt(e,t){e&1&&d(0,"mat-spinner",19)}var ct=(()=>{var t,i,n,o,c;let g=class g{constructor(){w(this,t,void 0);w(this,i,void 0);w(this,n,void 0);w(this,o,void 0);w(this,c,void 0);this.uiIcon=D,this.npcFilter=z(k),F(this,t,G(()=>this.npcFilter()?.searchValueChanges()??"")),F(this,i,G(()=>this.npcFilter()?.sortValueChanges()??"default")),F(this,n,fe),this.filteredAndSortedNpcs=G(()=>{let x=y(this,o).call(this)??[];if(!y(this,t)||!y(this,i))return x;let h=y(this,t).call(this).toLowerCase(),T=y(this,i).call(this);return y(this,n).call(this,x,h,T)}),F(this,c,M(A)),F(this,o,O(y(this,c).fetchNPCs$().pipe(Ee(()=>j([])))))}};t=new WeakMap,i=new WeakMap,n=new WeakMap,o=new WeakMap,c=new WeakMap,g.\u0275fac=function(h){return new(h||g)},g.\u0275cmp=b({type:g,selectors:[["app-npc-list"]],viewQuery:function(h,T){h&1&&J(T.npcFilter,k,5),h&2&&X()},decls:4,vars:1,consts:[[1,"px-2","xl:px-[50px]","w-full","pt-2","pb-6","2xl:pt-[60px]"],[1,"z-30","relative"],["class","grid npc-list-grid gap-x-4 gap-y-10 "],[1,"grid","npc-list-grid","gap-x-4","gap-y-10"],[1,"flex","bg-[#F5F1E6]","rounded-[30px]","npc-list-entry","group","relative",3,"routerLink"],[1,"frame","absolute","inset-0","rounded-[30px]","z-10","pointer-events-none"],[1,"basis-2/5","aspect-square","bg-[#F1E1CC]","rounded-l-[30px]","group-hover:bg-[#F2DBB7]"],[1,"z-20","flex","h-full","relative","rounded-l-[30px]",3,"npcKey","portraitName"],[1,"basis-3/5","p-2","flex","flex-col"],[1,"inline-flex","gap-2","mt-3","items-center"],[1,"text-black","font-semibold","text-2xl"],["class","!text-gifting !h-6 !w-6",3,"uiIcon","matTooltip"],["class","text-lg flex gap-2 items-center"],[3,"ngClass"],["clasS","mt-auto"],[1,"!text-gifting","!h-6","!w-6",3,"uiIcon","matTooltip"],[1,"text-lg","flex","gap-2","items-center"],[1,"!w-5","!h-5",3,"uiIcon"],["class","flex bg-[#F5F1E6] rounded-[30px] npc-list-entry group relative",3,"routerLink"],[1,"mx-auto"]],template:function(h,T){if(h&1&&(p(0,"div",0),d(1,"app-npc-filter",1),u(2,$t,3,0,"div",2)(3,Bt,1,0),a()),h&2){let H;r(2),m(2,(H=T.filteredAndSortedNpcs())?2:3,H)}},dependencies:[we,oe,q,Qe,ce,ae,k,se],styles:[`.npc-list-entry .npc-head-portrait{display:flex;align-items:flex-end}.npc-list-entry .npc-head-portrait img{object-fit:cover;object-position:bottom;border-top-left-radius:30px;border-bottom-left-radius:30px;height:110%;margin-top:-9.0909090909%}.frame{box-shadow:inset 0 0 1px #e4b383;transition:box-shadow .2s ease-out}.npc-list-entry:hover .frame{box-shadow:inset 0 0 1px 10px #e4b383}.npc-list-entry:hover .npc-head-portrait img{height:120%;margin-top:-18.1818181818%}.npc-list-grid{grid-template-columns:repeat(auto-fill,minmax(360px,1fr))}
`],encapsulation:2});let e=g;return e})();function At(e,t){if(e&1&&(p(0,"div",3),l(1),a()),e&2){let i=t.$implicit;r(),ge("",i.key," : ",i.value?"Has to be seen":"Has to be unseen"," ")}}function qt(e,t){if(e&1&&(v(0,At,2,2,"div",5,C),I(2,"keyvalue")),e&2){let i=t.$implicit;_(S(2,0,i))}}function Ot(e,t){if(e&1&&(p(0,"div"),l(1,"Other cutscenes requirements: "),v(2,qt,3,2,null,null,C),a()),e&2){let i=s();r(2),_(i.heartEventTrigger.otherCutscenesState)}}function jt(e,t){if(e&1&&(p(0,"div"),l(1,"Only on days: "),p(2,"span",3),l(3),a()()),e&2){let i=s();r(3),N(i.heartEventTrigger.specificDay.join(", "))}}function Kt(e,t){if(e&1&&(p(0,"div"),l(1,"Only in seasons: "),p(2,"span",3),l(3),a()()),e&2){let i=s();r(3),N(i.heartEventTrigger.specificMonth.join(", "))}}function Ut(e,t){if(e&1&&(p(0,"div"),l(1,"Only with weather: "),p(2,"span",3),l(3),a()()),e&2){let i=s();r(3),N(i.heartEventTrigger.specificWeather.join(", "))}}function Rt(e,t){if(e&1&&d(0,"app-effect",9),e&2){let i=t.$implicit;f("effect",i)}}function Qt(e,t){if(e&1&&(p(0,"div",6)(1,"span",7),l(2,"Effects when seen"),a(),p(3,"div",8),v(4,Rt,1,1,"app-effect",9,C),a()()),e&2){let i=s();r(4),_(i.heartEventTrigger.effects)}}function zt(e,t){if(e&1&&l(0),e&2){let i=s(2);E(" Unlock requirements (",i.heartEventTrigger.requirements.type==="And"?"all":"any"," of them): ")}}function Wt(e,t){e&1&&l(0," Unlock requirement: ")}function Yt(e,t){if(e&1&&d(0,"app-requirements",10),e&2){let i=t.$implicit;f("requirement",i)}}function Jt(e,t){if(e&1&&(p(0,"div",6)(1,"span",7),u(2,zt,1,1)(3,Wt,1,0),a(),p(4,"div",8),v(5,Yt,1,1,"app-requirements",10,C),a()()),e&2){let i=s();r(2),m(2,i.heartEventTrigger.requirements.requirements.length>1?2:-1),r(),m(3,i.heartEventTrigger.requirements.requirements.length<2?3:-1),r(2),_(i.heartEventTrigger.requirements.requirements)}}var lt=(()=>{let t=class t{constructor(){this.heartEventChecklist=M(tt)}toggleHeartEvent(n){n?this.heartEventChecklist.add(this.heartEventTrigger.cutscene):this.heartEventChecklist.remove(this.heartEventTrigger.cutscene)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=b({type:t,selectors:[["app-heart-event-trigger"]],inputs:{heartEventTrigger:"heartEventTrigger"},decls:32,vars:18,consts:[[1,"flex","justify-between","text-black","mb-1"],[1,"flex","flex-col"],[3,"checked","change"],[1,"text-black"],["class","my-4"],["class","text-black"],[1,"my-4"],[1,"text-lg","text-black"],[1,"flex","flex-col","text-black"],[3,"effect"],[3,"requirement"]],template:function(o,c){o&1&&(p(0,"header",0)(1,"div",1)(2,"h4"),l(3),a(),p(4,"span"),l(5),a()(),p(6,"mat-checkbox",2),$("change",function(P){return c.toggleHeartEvent(P.checked)}),l(7,"Cutscene seen "),a()(),p(8,"div"),l(9,"Enabled: "),p(10,"span",3),l(11),a()(),p(12,"div"),l(13,"Location: "),p(14,"span",3),l(15),a()(),p(16,"div"),l(17,"Day Time of day: "),p(18,"span",3),l(19),I(20,"ingameTime"),I(21,"ingameTime"),a()(),p(22,"div"),l(23,"Can trigger on the same day: "),p(24,"span",3),l(25),a()(),u(26,Ot,4,0,"div")(27,jt,4,1,"div")(28,Kt,4,1,"div")(29,Ut,4,1,"div")(30,Qt,6,0,"div",4)(31,Jt,7,2,"div",4)),o&2&&(r(3),N(c.heartEventTrigger.cutscene),r(2),E("Id: ",c.heartEventTrigger.id," "),r(),f("checked",c.heartEventChecklist.isChecked(c.heartEventTrigger.cutscene)),r(5),N(c.heartEventTrigger.enabled?"Yes":"No"),r(4),N(c.heartEventTrigger.location),r(4),ge(" ",S(20,14,c.heartEventTrigger.time.fromTime),"-",S(21,16,c.heartEventTrigger.time.toTime),`
`),r(6),N(c.heartEventTrigger.canTriggerSameDay?"Yes":"No"),r(),m(26,c.heartEventTrigger.otherCutscenesState.length?26:-1),r(),m(27,c.heartEventTrigger.specificDay.length?27:-1),r(),m(28,c.heartEventTrigger.specificMonth.length?28:-1),r(),m(29,c.heartEventTrigger.specificWeather.length?29:-1),r(),m(30,c.heartEventTrigger.effects&&c.heartEventTrigger.effects.length?30:-1),r(),m(31,c.heartEventTrigger.requirements&&c.heartEventTrigger.requirements.requirements.length?31:-1))},dependencies:[ze,We,re,Z,Ue],styles:["[_nghost-%COMP%]{display:block}"]});let e=t;return e})();function Zt(e,t){e&1&&d(0,"hr",6)}function ei(e,t){if(e&1&&(d(0,"app-heart-event-trigger",4),u(1,Zt,1,0,"hr",5)),e&2){let i=t.$implicit,n=t.$index,o=t.$count;V("mb-3",n===o-1),f("heartEventTrigger",i),r(),m(1,n!==o-1?1:-1)}}function ti(e,t){if(e&1){let i=W();p(0,"app-expandable",0,1)(2,"h3",2),$("click",function(){U(i);let o=B(1);return R(o.toggle())}),l(3),d(4,"i",3),a(),v(5,ei,2,4,null,null,C),a()}if(e&2){let i=t.$implicit,n=B(1);r(3),E(" ",i.heartLevel," hearts event "),r(),V("down",!n.open)("up",n.open),r(),_(i.trigger)}}var mt=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=b({type:t,selectors:[["app-heart-events"]],inputs:{heartEvents:"heartEvents"},decls:2,vars:0,consts:[[1,"bg-amber-50/70","px-4","rounded-lg","mb-3","shadow-sm"],["expandable",""],["expandableHeader","",1,"text-xl","text-black","flex","items-center","justify-between","cursor-pointer","py-4",3,"click"],[1,"arrow"],[3,"heartEventTrigger"],["class","my-3"],[1,"my-3"],["class","bg-amber-50/70 px-4 rounded-lg mb-3 shadow-sm"]],template:function(o,c){o&1&&v(0,ti,7,5,"app-expandable",7,C),o&2&&_(c.heartEvents)},dependencies:[de,lt],encapsulation:2});let e=t;return e})();function ni(e,t){if(e&1&&d(0,"app-gifting-grid",4),e&2){let i=s(2);f("preferences",i.giftingPreferences)}}function ri(e,t){if(e&1&&(p(0,"p",8),l(1),a()),e&2){let i=s(2);r(),E(" ",i.npc.characterName," has no specialized preferences. ")}}function oi(e,t){if(e&1&&d(0,"app-heart-events",7),e&2){let i=s(2);f("heartEvents",i.heartEvents)}}function ai(e,t){if(e&1&&(p(0,"p",8),l(1),a()),e&2){let i=s(2);r(),E(" ",i.npc.characterName," has no heart events. ")}}function pi(e,t){if(e&1&&(p(0,"div",12),d(1,"app-npc-portrait",13),p(2,"span",14),l(3),a()()),e&2){let i=t.$implicit,n=s(5);r(),f("npcKey",n.npc.key)("portraitName",i.value),r(2),N(i.key)}}function ci(e,t){if(e&1&&(p(0,"div",9)(1,"h3",10),l(2),a(),p(3,"div",11),v(4,pi,4,3,"div",15,C),I(6,"keyvalue"),a()()),e&2){let i=t.$implicit;r(2),N(i.key),r(2),_(S(6,1,i.value))}}function li(e,t){if(e&1&&v(0,ci,7,3,"div",16,C),e&2){let i=s();_(i)}}function mi(e,t){if(e&1&&(p(0,"p",8),l(1),a()),e&2){let i=s(3);r(),E(" ",i.npc.characterName," has no appearances. ")}}function si(e,t){e&1&&u(0,li,2,0)(1,mi,2,1,"p",5),e&2&&(m(0,t.length?0:-1),r(),m(1,t.length?-1:1))}function di(e,t){if(e&1&&(p(0,"div",1)(1,"h1",2),l(2),a(),p(3,"app-card")(4,"h2",3),l(5," Gifting "),a(),u(6,ni,1,1,"app-gifting-grid",4)(7,ri,2,1,"p",5),a(),p(8,"app-card",6)(9,"h2",3),l(10," Heart events "),a(),u(11,oi,1,1,"app-heart-events",7)(12,ai,2,1,"p",5),a(),p(13,"app-card",6)(14,"h2",3),l(15," Appearances "),a(),u(16,si,2,2),I(17,"keyvalue"),a()()),e&2){let i=s(),n;r(2),E(" ",i.npc.characterName," "),r(4),m(6,i.giftingPreferences?6:-1),r(),m(7,i.giftingPreferences?-1:7),r(4),m(11,i.heartEvents.length?11:-1),r(),m(12,i.heartEvents.length?-1:12),r(4),m(16,(n=S(17,6,i.npc.appearances))?16:-1,n)}}function fi(e,t){e&1&&(p(0,"app-card",1)(1,"h1",17),l(2," NPC not found. "),a()())}function ui(e,t){e&1&&d(0,"mat-spinner",18)}var st=(()=>{let t=class t{constructor(){this.npc=null,this.heartEvents=[],this.UiIcon=D,this._database=M(A)}ngOnInit(){ve([this._database.fetchNPCs$(),this._database.fetchHeartEvents$(),this._database.fetchGiftingPreferences$()]).subscribe({next:([n,o,c])=>{this.npc=n.find(g=>g.key.toLowerCase()===this.npcKey.toLowerCase()),this.heartEvents=o[this.npcKey.toLowerCase()]??[],this.giftingPreferences=c.find(g=>g.mapKey.toLowerCase()===this.npc?.key.toLowerCase())}})}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=b({type:t,selectors:[["app-npc"]],inputs:{npcKey:"npcKey"},decls:3,vars:1,consts:[["class","npc-wrapper"],[1,"npc-wrapper"],[1,"mb-4","font-semibold","text-3xl","text-white"],[1,"mb-4","font-semibold","text-2xl","text-black"],[3,"preferences"],["class","text-black text-lg"],[1,"mt-6"],[3,"heartEvents"],[1,"text-black","text-lg"],[1,"font-semibold","text-black","mb-6"],[1,"text-xl"],[1,"grid","portrait-grid","gap-4"],[1,"flex","flex-col","shadow-lg","p-2"],[1,"h-[400px]","flex","items-end","justify-center",3,"npcKey","portraitName"],[1,""],["class","flex flex-col shadow-lg p-2"],["class","font-semibold text-black mb-6"],[1,"mb-4","font-semibold","text-3xl","text-black","flex","items-center","gap-x-4"],[1,"mx-auto"]],template:function(o,c){o&1&&u(0,di,18,8,"div",0)(1,fi,3,0)(2,ui,1,0),o&2&&m(0,c.npc?0:c.npc===void 0?1:c.npc===null?2:-1)},dependencies:[pe,Re,ae,mt,ue,Z],styles:[`.portrait-grid{grid-template-columns:repeat(auto-fill,minmax(200px,1fr))}.portrait-grid .npc-portrait img{max-height:400px}@media (min-width: 1280px){.portrait-grid{grid-template-columns:repeat(auto-fill,minmax(200px,1fr))}}.npc-wrapper{max-width:1160px;margin:8px}@media (min-width: 1536px){.npc-wrapper{margin:60px 40px 60px 60px}}
`],encapsulation:2});let e=t;return e})();var gi=[{path:"",pathMatch:"full",redirectTo:"overview"},{path:"",component:it,children:[{path:"gifting",component:pt,title:"Gifting - NPCs"},{path:"overview",component:ct,title:"Overview - NPCs"},{path:":npcKey",component:st}]}],dt=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=K({type:t}),t.\u0275inj=Q({imports:[he.forChild(gi),he]});let e=t;return e})();var lr=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=K({type:t}),t.\u0275inj=Q({imports:[ee,dt,Ye,Ae,De,le,ne,te,me,re,k,Xe]});let e=t;return e})();export{lr as NPCsModule};
