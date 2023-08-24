"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[696],{2211:(C,b,o)=>{o.d(b,{nJ:()=>t,y_:()=>n,ln:()=>e,vo:()=>p,yO:()=>l});var t=(()=>((t=t||{}).BASE="base",t.BRONZE="bronze",t.SILVER="silver",t.GOLD="gold",t.OSMIUM="osmium",t))(),n=(()=>((n=n||{}).SPRING="Spring",n.SUMMER="Summer",n.FALL="Fall",n.WINTER="Winter",n))(),l=(()=>((l=l||{}).SUNNY="Sunny",l.RAIN="Rain",l.STORM="Storm",l.WINDY="Windy",l.SNOW="Snow",l.BLIZZARD="Blizzard",l))();const p=["blacksmith","lab","general-store","carpenter","merfolk-oracle-tail-store","merfolk-general-store"],e={blacksmith:"Blacksmith",lab:"Lab","general-store":"Sams general store",carpenter:"Carpenter","merfolk-general-store":"Merfolk general store","merfolk-oracle-tail-store":"Merfolk tail store"}},2696:(C,b,o)=>{o.r(b),o.d(b,{PeopleModule:()=>k});var t=o(6814),n=o(4709),l=o(5612),p=o(9059),e=o(5879),c=o(9888),f=o(2881),_=o(4044);let s=(()=>{class i{constructor(){this.uiIcons=p.a}}return i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-people"]],decls:5,vars:1,consts:[["routerLink","gifting",3,"uiIcon"],[1,"hidden"]],template:function(r,h){1&r&&(e.TgZ(0,"app-sidebar-container")(1,"app-module-sidebar")(2,"app-module-sidebar-item",0),e._uU(3,"Gifting"),e.qZA()(),e._UZ(4,"router-outlet",1),e.qZA()),2&r&&(e.xp6(2),e.Q6J("uiIcon",h.uiIcons.GIFTING))},dependencies:[l.lC,l.rH,c.R,f.z,_.L],encapsulation:2}),i})();var a=o(7043),u=o(1610),m=o(2088),x=o(4984);let g=(()=>{class i{constructor(){this._setClass=!0}}return i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-inline-minimal-item"]],hostVars:2,hostBindings:function(r,h){2&r&&e.ekj("app-inline-minimal-item",h._setClass)},inputs:{minimalItem:"minimalItem"},decls:2,vars:2,consts:[[3,"itemName"]],template:function(r,h){1&r&&(e._UZ(0,"app-item-icon",0),e._uU(1)),2&r&&(e.Q6J("itemName",h.minimalItem.iconName),e.xp6(1),e.hij(" ",h.minimalItem.displayName,"\n"))},dependencies:[m.D],styles:[".app-inline-minimal-item{display:inline-flex;column-gap:3px}.app-inline-minimal-item .app-item-icon img{height:1.4em;width:auto;display:inline-block;vertical-align:text-bottom;margin:-2px 2px -2px 0}\n"],encapsulation:2}),i})();var v=o(9672);function I(i,d){if(1&i&&(e._UZ(0,"app-item-icon",8),e.ALo(1,"lowercase")),2&i){const r=e.oxw().$implicit;e.MGl("itemName","Icon_",e.lcZ(1,1,r.mapKey),"")}}function y(i,d){if(1&i&&e._UZ(0,"app-inline-minimal-item",14),2&i){const r=e.oxw().$implicit;e.Q6J("minimalItem",r.item)}}function M(i,d){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"addSpacesToPascalCase"),e.qZA()),2&i){const r=e.oxw().$implicit;e.xp6(1),e.hij("All ",e.lcZ(2,1,r.categoryName),"")}}function T(i,d){if(1&i&&(e.ynx(0),e.YNc(1,y,1,1,"app-inline-minimal-item",13),e.YNc(2,M,3,3,"span",9),e.BQk()),2&i){const r=d.$implicit;e.xp6(1),e.Q6J("ngIf","item"===r.type),e.xp6(1),e.Q6J("ngIf","category"===r.type)}}function w(i,d){if(1&i&&(e.ynx(0),e.TgZ(1,"div",10),e._UZ(2,"app-ui-icon",11),e._uU(3),e.qZA(),e.TgZ(4,"div",12),e.YNc(5,T,3,2,"ng-container",7),e.qZA(),e.BQk()),2&i){const r=e.oxw().$implicit,h=e.oxw().$implicit;e.xp6(2),e.Q6J("uiIcon",r.icon),e.xp6(1),e.hij(" ",r.label," "),e.xp6(2),e.Q6J("ngForOf",h[r.preferenceField])}}function P(i,d){if(1&i&&(e.ynx(0),e.YNc(1,w,6,3,"ng-container",9),e.BQk()),2&i){const r=d.$implicit,h=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",h[r.preferenceField].length)}}function O(i,d){if(1&i&&(e.TgZ(0,"div",3)(1,"div",4),e.YNc(2,I,2,3,"app-item-icon",5),e._uU(3),e.qZA(),e.TgZ(4,"div",6),e.YNc(5,P,2,1,"ng-container",7),e.qZA()()),2&i){const r=d.$implicit,h=e.oxw(2);e.xp6(2),e.Q6J("ngIf","ci_universal"!==r.mapKey),e.xp6(1),e.hij(" ","ci_universal"!==r.mapKey?r.mapKey:"Universal"," "),e.xp6(2),e.Q6J("ngForOf",h.preferencesMap)}}function E(i,d){if(1&i&&(e.TgZ(0,"app-card",1),e.YNc(1,O,6,3,"div",2),e.qZA()),2&i){const r=d.ngIf;e.xp6(1),e.Q6J("ngForOf",r)}}const A=[{path:"",pathMatch:"full",redirectTo:"gifting"},{path:"",component:s,children:[{path:"gifting",component:(()=>{class i{constructor(){this.gifting$=(0,e.f3M)(a.k).fetchGiftingPreferences$(),this.preferencesMap=[{icon:p.a.LOVE,label:"Favorite",preferenceField:"favoritePreferences"},{icon:p.a.LOVE,label:"Love",preferenceField:"lovePreferences"},{icon:p.a.LIKE,label:"Like",preferenceField:"likePreferences"},{icon:p.a.NEUTRAL,label:"Neutral",preferenceField:"neutralPreferences"},{icon:p.a.DISLIKE,label:"Dislike",preferenceField:"dislikePreferences"},{icon:p.a.HATE,label:"Hate",preferenceField:"hatePreferences"}]}}return i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-gifting"]],decls:2,vars:3,consts:[["class","text-xl gifting-card",4,"ngIf"],[1,"text-xl","gifting-card"],["class","grid grid-cols-1",4,"ngFor","ngForOf"],[1,"grid","grid-cols-1"],[1,"text-2xl","text-black","font-semibold","flex","items-center","gifting-portrait"],["class","h-16 mr-2",3,"itemName",4,"ngIf"],[1,"gifting-preference-grid"],[4,"ngFor","ngForOf"],[1,"h-16","mr-2",3,"itemName"],[4,"ngIf"],[1,"font-semibold","flex","items-center","sm:flex-col","sm:pr-10","mb-1","text-black"],[1,"gifting-icon","mr-1","sm:mr-0","!h-6","!w-6",3,"uiIcon"],[1,"gifting-gifts-grid"],[3,"minimalItem",4,"ngIf"],[3,"minimalItem"]],template:function(r,h){1&r&&(e.YNc(0,E,2,1,"app-card",0),e.ALo(1,"async")),2&r&&e.Q6J("ngIf",e.lcZ(1,1,h.gifting$))},dependencies:[t.sg,t.O5,u.f,m.D,x.A,g,t.Ov,t.i8,v.O],styles:[".gifting-icon{color:#ed7b67}.gifting-portrait .app-item-icon>img{width:auto;height:100%;aspect-ratio:unset}.gifting-gifts-grid{margin-top:.25rem;margin-bottom:1rem;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));align-items:center;gap:.5rem}.gifting-preference-grid{margin-bottom:2rem;margin-top:.25rem;display:grid;grid-template-columns:repeat(1,minmax(0,1fr))}@media (min-width: 640px){.gifting-preference-grid{row-gap:.75rem;grid-template-columns:min-content 1fr}.gifting-gifts-grid{grid-template-columns:repeat(auto-fill,minmax(200px,1fr))}}.gifting-card{max-width:1100px;margin:8px}@media (min-width: 1536px){.gifting-card{margin:60px 40px 60px 60px}}\n"],encapsulation:2}),i})(),title:"Gifting - People"}]}];let S=(()=>{class i{}return i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[l.Bz.forChild(A),l.Bz]}),i})(),k=(()=>{class i{}return i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[t.ez,S,n.m]}),i})()},2088:(C,b,o)=>{o.d(b,{D:()=>_});var t=o(5879),n=o(1063),l=o(6814),p=o(7288);function e(s,a){if(1&s&&t._UZ(0,"app-item-icon",4),2&s){const u=t.oxw();t.Q6J("itemName",u.subIconName)}}function c(s,a){if(1&s&&t._UZ(0,"app-rarity-icon",5),2&s){const u=t.oxw();t.Q6J("quality",u.quality)}}function f(s,a){if(1&s&&(t.TgZ(0,"div",6),t._uU(1),t.qZA()),2&s){const u=t.oxw();t.xp6(1),t.Oqu(u.amount)}}let _=(()=>{class s{constructor(u){this._settings=u,this.amount=0,this._setClass=!0,this.version=this._settings.getSettings().useBeta?"beta":"live"}}return s.\u0275fac=function(u){return new(u||s)(t.Y36(n.g))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-item-icon"]],hostVars:2,hostBindings:function(u,m){2&u&&t.ekj("app-item-icon",m._setClass)},inputs:{itemName:"itemName",subIconName:"subIconName",quality:"quality",amount:["amount","amount",t.Cb_]},features:[t.Xq5],decls:4,vars:5,consts:[["loading","lazy","onerror","this.onerror=null;this.src='assets/ui/images/placeholder.png'","alt","",3,"src"],["class","!absolute bottom-[5px] left-[5px] w-[50%]",3,"itemName",4,"ngIf"],["class","absolute top-[5px] left-[5px] w-[35%]",3,"quality",4,"ngIf"],["class","bg-[#F1D9B5] absolute bottom-0 right-0 py-1 px-2 text-black font-semibold text-lg rounded-lg",4,"ngIf"],[1,"!absolute","bottom-[5px]","left-[5px]","w-[50%]",3,"itemName"],[1,"absolute","top-[5px]","left-[5px]","w-[35%]",3,"quality"],[1,"bg-[#F1D9B5]","absolute","bottom-0","right-0","py-1","px-2","text-black","font-semibold","text-lg","rounded-lg"]],template:function(u,m){1&u&&(t._UZ(0,"img",0),t.YNc(1,e,1,1,"app-item-icon",1),t.YNc(2,c,1,1,"app-rarity-icon",2),t.YNc(3,f,2,1,"div",3)),2&u&&(t.hYB("src","assets/",m.version,"/items/icons/",m.itemName,".webp",t.LSH),t.xp6(1),t.Q6J("ngIf",m.subIconName),t.xp6(1),t.Q6J("ngIf",m.quality),t.xp6(1),t.Q6J("ngIf",m.amount>1))},dependencies:[l.O5,s,p.C],styles:[".app-item-icon{position:relative;display:block}.app-item-icon>img{width:100%;height:auto;aspect-ratio:1/1}\n"],encapsulation:2}),s})()},2881:(C,b,o)=>{o.d(b,{z:()=>e});var t=o(5879);const n=["innerTemplate"];function l(c,f){1&c&&t.Hsn(0)}const p=["*"];let e=(()=>{class c{constructor(){this.innerTemplate=null}}return c.\u0275fac=function(_){return new(_||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-module-sidebar-item"]],viewQuery:function(_,s){if(1&_&&t.Gf(n,5),2&_){let a;t.iGM(a=t.CRH())&&(s.innerTemplate=a.first)}},inputs:{uiIcon:"uiIcon",routerLink:"routerLink",exact:["exact","exact",t.VuI]},features:[t.Xq5],ngContentSelectors:p,decls:2,vars:0,consts:[["innerTemplate",""]],template:function(_,s){1&_&&(t.F$t(),t.YNc(0,l,1,0,"ng-template",null,0,t.W1O))},encapsulation:2}),c})()},9888:(C,b,o)=>{o.d(b,{R:()=>u});var t=o(2881),n=o(5879),l=o(6814),p=o(5612),e=o(1610);function c(m,x){if(1&m&&n._UZ(0,"app-ui-icon",5),2&m){const g=n.oxw().$implicit;n.Q6J("uiIcon",g.uiIcon)}}function f(m,x){}const _=function(m){return{exact:m}};function s(m,x){if(1&m){const g=n.EpF();n.ynx(0),n.TgZ(1,"li")(2,"a",1),n.NdJ("click",function(){n.CHM(g);const I=n.oxw();return n.KtG(I.showMenu=!1)}),n.YNc(3,c,1,1,"app-ui-icon",2),n.YNc(4,f,0,0,"ng-template",3),n.TgZ(5,"button",4),n.NdJ("click",function(I){n.CHM(g);const y=n.oxw();return n.KtG(y.toggleMenu(I))}),n._uU(6,"Menu "),n.qZA()()(),n.BQk()}if(2&m){const g=x.$implicit,v=x.last;n.xp6(2),n.ekj("mb-4",!v),n.Q6J("routerLink",g.routerLink)("routerLinkActive","active")("routerLinkActiveOptions",n.VKq(7,_,!!g.exact)),n.xp6(1),n.Q6J("ngIf",g.uiIcon),n.xp6(1),n.Q6J("ngTemplateOutlet",g.innerTemplate)}}const a=function(){return[]};let u=(()=>{class m{constructor(){this._setClass=!0,this.showMenu=!1}toggleMenu(g){g.preventDefault(),g.stopPropagation(),this.showMenu=!this.showMenu}}return m.\u0275fac=function(g){return new(g||m)},m.\u0275cmp=n.Xpm({type:m,selectors:[["app-module-sidebar"]],contentQueries:function(g,v,I){if(1&g&&n.Suo(I,t.z,4),2&g){let y;n.iGM(y=n.CRH())&&(v.viewChildren=y)}},hostVars:2,hostBindings:function(g,v){2&g&&n.ekj("app-module-sidebar",v._setClass)},decls:4,vars:4,consts:[[4,"ngFor","ngForOf"],[1,"app-module-sidebar-list-item",3,"routerLink","routerLinkActive","routerLinkActiveOptions","click"],["class","!h-8",3,"uiIcon",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"xl:hidden","block","ml-auto","m-[-18px]","border-l-2","px-5","h-[45px]",3,"click"],[1,"!h-8",3,"uiIcon"]],template:function(g,v){if(1&g&&(n.TgZ(0,"aside")(1,"nav")(2,"ul"),n.YNc(3,s,7,9,"ng-container",0),n.qZA()()()),2&g){let I;n.xp6(2),n.ekj("hide-menu",!v.showMenu),n.xp6(1),n.Q6J("ngForOf",null!==(I=null==v.viewChildren?null:v.viewChildren.toArray())&&void 0!==I?I:n.DdM(3,a))}},dependencies:[l.sg,l.O5,l.tP,p.rH,p.Od,e.f],styles:[".app-module-sidebar{display:block;padding-top:.5rem;padding-bottom:.5rem;--tw-backdrop-blur: blur(24px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);background-color:#000000bf;padding-left:max(8px,env(safe-area-inset-left));padding-right:max(8px,env(safe-area-inset-right))}.app-module-sidebar .hide-menu .app-module-sidebar-list-item:not(.active){display:none}@media (min-width: 1536px){.app-module-sidebar{padding:60px 40px 60px 60px}}.app-module-sidebar-list-item{padding:15px;border-radius:30px;height:46px;border:3px solid #191919;display:flex;align-items:center;justify-content:center;column-gap:.5rem;--tw-border-opacity: 1;border-color:rgb(115 115 115 / var(--tw-border-opacity));font-size:1.125rem;line-height:1.75rem;font-weight:600;--tw-text-opacity: 1;color:rgb(115 115 115 / var(--tw-text-opacity))}.app-module-sidebar-list-item:hover{--tw-border-opacity: 1;border-color:rgb(212 212 212 / var(--tw-border-opacity));--tw-text-opacity: 1;color:rgb(212 212 212 / var(--tw-text-opacity))}.app-module-sidebar-list-item:hover .app-ui-icon{color:#645a54}.app-module-sidebar-list-item .app-ui-icon{color:#3f3834}.app-module-sidebar-list-item.active{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.app-module-sidebar-list-item.active .app-ui-icon{color:#e4b07e}.app-module-sidebar-list-item:not(.active) button{display:none}@media (min-width: 1280px){.app-module-sidebar-list-item{display:flex!important;height:80px}}\n"],encapsulation:2}),m})()},7288:(C,b,o)=>{o.d(b,{C:()=>e});var t=o(2211),n=o(5879),l=o(6814);function p(c,f){if(1&c&&(n._UZ(0,"img",1),n.ALo(1,"titlecase")),2&c){const _=n.oxw();n.MGl("src","assets/ui/images/icons/quality-stars/T_Icon_Star",n.lcZ(1,1,_.quality),"B.png",n.LSH)}}let e=(()=>{class c{constructor(){this.QUALITY=t.nJ}}return c.\u0275fac=function(_){return new(_||c)},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-rarity-icon"]],inputs:{quality:"quality"},decls:1,vars:1,consts:[["onerror","this.onerror=null;this.src='/assets/ui/images/spacer.gif'","alt","",3,"src",4,"ngIf"],["onerror","this.onerror=null;this.src='/assets/ui/images/spacer.gif'","alt","",3,"src"]],template:function(_,s){1&_&&n.YNc(0,p,2,3,"img",0),2&_&&n.Q6J("ngIf",s.quality&&s.quality!==s.QUALITY.BASE)},dependencies:[l.O5,l.rS],styles:["[_nghost-%COMP%]{display:block}"]}),c})()},4044:(C,b,o)=>{o.d(b,{L:()=>p});var t=o(5879);const n=[[["app-module-sidebar"]],"*"],l=["app-module-sidebar","*"];let p=(()=>{class e{}return e.\u0275fac=function(f){return new(f||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-sidebar-container"]],ngContentSelectors:l,decls:4,vars:0,consts:[[1,"h-full","grid","module-grid"],[1,"px-safe"]],template:function(f,_){1&f&&(t.F$t(n),t.TgZ(0,"div",0),t.Hsn(1),t.TgZ(2,"div",1),t.Hsn(3,1),t.qZA()())},styles:[".module-grid{grid-template-columns:1fr;grid-auto-rows:min-content}.module-grid .app-module-sidebar{width:100%}@media (min-width: 1280px){.module-grid .app-module-sidebar{width:300px}}@media (min-width: 1536px){.module-grid .app-module-sidebar{width:400px}}@media (min-width: 1280px){.module-grid{grid-template-columns:300px calc(100% - 300px);grid-auto-rows:auto}.app-module-sidebar{min-height:calc(100vh - 108px)}}@media (min-width: 1536px){.module-grid{grid-template-columns:400px calc(100% - 400px)}}\n"],encapsulation:2}),e})()},9672:(C,b,o)=>{o.d(b,{O:()=>l});var t=o(8128),n=o(5879);let l=(()=>{class p{transform(c){return c?(0,t.gA)(c):""}}return p.\u0275fac=function(c){return new(c||p)},p.\u0275pipe=n.Yjl({name:"addSpacesToPascalCase",type:p,pure:!0}),p})()},8128:(C,b,o)=>{o.d(b,{gA:()=>c,Ed:()=>_,C1:()=>p,vJ:()=>s});var t=o(2211);function p(a,u="Any"){return function l(a){const u=Object.keys(a);return u.map(x=>a[x]).filter(x=>x).length===u.length}(a)?u:Object.keys(a).filter(m=>a[m]).map(e).map(c).join(", ")}function e(a){return a.charAt(0).toUpperCase()+a.slice(1)}function c(a){return(a??"").replaceAll(/([A-Z])/g," $1").trim()}function _(a){return a.endsWith("-a")||a.endsWith("-2")?t.nJ.BRONZE:a.endsWith("-b")||a.endsWith("-3")?t.nJ.SILVER:a.endsWith("-c")||a.endsWith("-4")?t.nJ.GOLD:a.endsWith("-d")||a.endsWith("-5")?t.nJ.OSMIUM:t.nJ.BASE}function s(a){return null!=a}}}]);