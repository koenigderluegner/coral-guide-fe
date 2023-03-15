"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[1],{6336:(I,h,n)=>{n.d(h,{n:()=>t});var t=(()=>{return(e=t||(t={})).BASE="base",e.BRONZE="bronze",e.SILVER="silver",e.GOLD="gold",e.OSMIUM="osmium",t;var e})()},4175:(I,h,n)=>{n.d(h,{T:()=>v});var t=n(5583),e=n(4650),m=n(9969),d=n(6895),_=n(9813),o=n(8635),l=n(6336),f=n(1281),y=n(2314);function g(x,u){if(1&x&&(e.ynx(0),e._UZ(1,"app-money",2)(2,"app-money",2)(3,"app-money",2)(4,"app-money",2)(5,"app-money",2),e.BQk()),2&x){const a=e.oxw();e.xp6(1),e.Q6J("amount",a.item.sellPrice),e.xp6(1),e.Q6J("amount",null==a.item.qualities.bronze?null:a.item.qualities.bronze.sellPrice),e.xp6(1),e.Q6J("amount",null==a.item.qualities.silver?null:a.item.qualities.silver.sellPrice),e.xp6(1),e.Q6J("amount",null==a.item.qualities.gold?null:a.item.qualities.gold.sellPrice),e.xp6(1),e.Q6J("amount",null==a.item.qualities.osmium?null:a.item.qualities.osmium.sellPrice)}}class c{constructor(){this._setClass=!0,this.QUALITY=l.n,this._includePrices=!1}get includePrices(){return this._includePrices}set includePrices(u){this._includePrices=(0,f.Ig)(u)}static#e=this.\u0275fac=function(a){return new(a||c)};static#t=this.\u0275cmp=e.Xpm({type:c,selectors:[["app-quality-grid"]],hostVars:2,hostBindings:function(a,p){2&a&&e.ekj("app-quality-grid",p._setClass)},inputs:{item:"item",includePrices:"includePrices"},decls:6,vars:11,consts:[[3,"itemName","quality"],[4,"ngIf"],[1,"text-black",3,"amount"]],template:function(a,p){1&a&&(e._UZ(0,"app-item-icon",0)(1,"app-item-icon",0)(2,"app-item-icon",0)(3,"app-item-icon",0)(4,"app-item-icon",0),e.YNc(5,g,6,5,"ng-container",1)),2&a&&(e.Q6J("itemName",null==p.item?null:p.item.iconName)("quality",p.QUALITY.BASE),e.xp6(1),e.Q6J("itemName",null==p.item?null:p.item.iconName)("quality",p.QUALITY.BRONZE),e.xp6(1),e.Q6J("itemName",null==p.item?null:p.item.iconName)("quality",p.QUALITY.SILVER),e.xp6(1),e.Q6J("itemName",null==p.item?null:p.item.iconName)("quality",p.QUALITY.GOLD),e.xp6(1),e.Q6J("itemName",null==p.item?null:p.item.iconName)("quality",p.QUALITY.OSMIUM),e.xp6(1),e.Q6J("ngIf",p.includePrices&&p.item))},dependencies:[d.O5,_.D,y.y],styles:[".app-quality-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));justify-items:center;column-gap:.75rem}.app-quality-grid .app-item-icon{background:rgba(127,127,127,.3);border-radius:16px;padding:3px}\n"],encapsulation:2})}function s(x,u){if(1&x&&e._UZ(0,"app-quality-grid",9),2&x){const a=e.oxw(2);e.Q6J("item",a.fetchedItem)}}function i(x,u){if(1&x&&(e.TgZ(0,"app-card",2),e._UZ(1,"app-item-icon",3),e.TgZ(2,"div",4),e._uU(3),e.qZA(),e.TgZ(4,"span",5),e._uU(5),e.qZA(),e._UZ(6,"hr",6),e.TgZ(7,"span",7),e._uU(8),e.qZA(),e.Hsn(9),e.YNc(10,s,1,1,"app-quality-grid",8),e.ALo(11,"keyvalue"),e.qZA()),2&x){const a=e.oxw(),p=e.MAs(2);e.xp6(1),e.s9C("itemName",a.fetchedItem.iconName),e.Q6J("amount",a.amount),e.xp6(2),e.Oqu(a.fetchedItem.displayName),e.xp6(2),e.hij(" ",a.addSpacesToPascalCase(a.fetchedItem.displayKey),""),e.xp6(3),e.Oqu(a.fetchedItem.description),e.xp6(2),e.Q6J("ngIf",e.lcZ(11,7,a.fetchedItem.qualities).length)("ngIfElse",p)}}function r(x,u){if(1&x&&(e.TgZ(0,"div",10),e._uU(1," Sells for: "),e._UZ(2,"app-money",11),e.qZA()),2&x){const a=e.oxw();e.xp6(2),e.Q6J("amount",null==a.fetchedItem?null:a.fetchedItem.sellPrice)}}const b=["*"];class v{constructor(u){this._database=u,this.addSpacesToPascalCase=t.gA}ngOnInit(){this._setItem(this.item)}_setItem(u){!u||(this.fetchedItem=this.isItem(u)?u:this._database.getItems().find(a=>a.id===u.id))}isItem(u){return"sellPrice"in u}ngOnChanges(u){this._setItem(u.item.currentValue)}static#e=this.\u0275fac=function(a){return new(a||v)(e.Y36(m.k))};static#t=this.\u0275cmp=e.Xpm({type:v,selectors:[["app-base-item-card"]],inputs:{item:"item",amount:"amount"},features:[e.TTD],ngContentSelectors:b,decls:3,vars:1,consts:[["class","text-lg font-semibold",4,"ngIf"],["basePrice",""],[1,"text-lg","font-semibold"],["cardIcon","",3,"itemName","amount"],[1,"text-black","text-2xl"],[1,"text-accent","text-2xl"],[1,"my-5"],[1,"text-lg","mb-6"],["includePrices","","class","mt-6",3,"item",4,"ngIf","ngIfElse"],["includePrices","",1,"mt-6",3,"item"],[1,"flex"],[1,"ml-2","text-black",3,"amount"]],template:function(a,p){1&a&&(e.F$t(),e.YNc(0,i,12,9,"app-card",0),e.YNc(1,r,3,1,"ng-template",null,1,e.W1O)),2&a&&e.Q6J("ngIf",p.fetchedItem)},dependencies:[d.O5,_.D,o.A,c,y.y,d.Nd]})}},9813:(I,h,n)=>{n.d(h,{D:()=>g});var t=n(1281),e=n(4650),m=n(6895),d=n(6336);function _(c,s){if(1&c&&(e._UZ(0,"img",1),e.ALo(1,"titlecase")),2&c){const i=e.oxw();e.MGl("src","assets/ui/images/icons/quality-stars/T_Icon_Star",e.lcZ(1,1,i.quality),"B.png",e.LSH)}}class o{constructor(){this.QUALITY=d.n}static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-rarity-icon"]],inputs:{quality:"quality"},decls:1,vars:1,consts:[["onerror","this.onerror=null;this.src='/assets/ui/images/spacer.gif'","alt","",3,"src",4,"ngIf"],["onerror","this.onerror=null;this.src='/assets/ui/images/spacer.gif'","alt","",3,"src"]],template:function(i,r){1&i&&e.YNc(0,_,2,3,"img",0),2&i&&e.Q6J("ngIf",r.quality&&r.quality!==r.QUALITY.BASE)},dependencies:[m.O5,m.rS]})}function l(c,s){if(1&c&&e._UZ(0,"app-item-icon",4),2&c){const i=e.oxw();e.Q6J("itemName",i.subIconName)}}function f(c,s){if(1&c&&e._UZ(0,"app-rarity-icon",5),2&c){const i=e.oxw();e.Q6J("quality",i.quality)}}function y(c,s){if(1&c&&(e.TgZ(0,"div",6),e._uU(1),e.qZA()),2&c){const i=e.oxw();e.xp6(1),e.Oqu(i.amount)}}class g{constructor(){this._setClass=!0,this._amount=0}get amount(){return this._amount}set amount(s){this._amount=(0,t.su)(s)}static#e=this.\u0275fac=function(i){return new(i||g)};static#t=this.\u0275cmp=e.Xpm({type:g,selectors:[["app-item-icon"]],hostVars:2,hostBindings:function(i,r){2&i&&e.ekj("app-item-icon",r._setClass)},inputs:{itemName:"itemName",subIconName:"subIconName",quality:"quality",amount:"amount"},decls:4,vars:4,consts:[["loading","lazy","onerror","this.onerror=null;this.src='assets/ui/images/placeholder.png'","alt","",3,"src"],["class","!absolute bottom-[5px] left-[5px] w-[50%]",3,"itemName",4,"ngIf"],["class","absolute top-[5px] left-[5px] w-[35%]",3,"quality",4,"ngIf"],["class","bg-[#F1D9B5] absolute bottom-0 right-0 py-1 px-2 text-black font-semibold text-lg rounded-lg",4,"ngIf"],[1,"!absolute","bottom-[5px]","left-[5px]","w-[50%]",3,"itemName"],[1,"absolute","top-[5px]","left-[5px]","w-[35%]",3,"quality"],[1,"bg-[#F1D9B5]","absolute","bottom-0","right-0","py-1","px-2","text-black","font-semibold","text-lg","rounded-lg"]],template:function(i,r){1&i&&(e._UZ(0,"img",0),e.YNc(1,l,1,1,"app-item-icon",1),e.YNc(2,f,1,1,"app-rarity-icon",2),e.YNc(3,y,2,1,"div",3)),2&i&&(e.MGl("src","assets/items/icons/",r.itemName,"",e.LSH),e.xp6(1),e.Q6J("ngIf",r.subIconName),e.xp6(1),e.Q6J("ngIf",r.quality),e.xp6(1),e.Q6J("ngIf",r.amount>1))},dependencies:[m.O5,g,o],styles:[".app-item-icon{position:relative;display:block}.app-item-icon>img{width:100%;height:auto;aspect-ratio:1/1}\n"],encapsulation:2})}},9473:(I,h,n)=>{n.d(h,{I:()=>g});var t=n(4650),e=n(2289),m=n(15),d=n(1281),_=n(3267),o=n(4122);const l=["drawer"],f=[[["","listDetail",""]],"*"],y=["[listDetail]","*"];class g{constructor(){this.openDrawerChange=new t.vpe,this._openDrawer=!1,this._removePlaceholder=!1,this.uiIcon=m.a,this.media=(0,t.f3M)(e.vx),this.changeDetectorRef=(0,t.f3M)(t.sBO),this.mobileQuery=this.media.matchMedia("(max-width: 600px)"),this._mobileQueryListener=()=>this.changeDetectorRef.detectChanges(),this.mobileQuery.addListener(this._mobileQueryListener)}get openDrawer(){return this._openDrawer}set openDrawer(s){this._openDrawer=(0,d.Ig)(s),this.openDrawer?this.drawer?.open():this.drawer?.close()}get removePlaceholder(){return this._removePlaceholder}set removePlaceholder(s){this._removePlaceholder=(0,d.Ig)(s)}ngOnDestroy(){this.mobileQuery.removeListener(this._mobileQueryListener)}static#e=this.\u0275fac=function(i){return new(i||g)};static#t=this.\u0275cmp=t.Xpm({type:g,selectors:[["app-list-detail-container"]],viewQuery:function(i,r){if(1&i&&t.Gf(l,5),2&i){let b;t.iGM(b=t.CRH())&&(r.drawer=b.first)}},inputs:{openDrawer:"openDrawer",removePlaceholder:"removePlaceholder"},outputs:{openDrawerChange:"openDrawerChange"},ngContentSelectors:y,decls:8,vars:6,consts:[[3,"hasBackdrop"],["position","end",1,"w-full","lg:w-[600px]",3,"mode","fixedInViewport","closed"],["drawer",""],["type","button",1,"drawer-close-button",3,"click"],[1,"!w-8","!h-8",3,"uiIcon"],[1,"pt-2","pb-6","2xl:pt-[60px]","w-full"]],template:function(i,r){if(1&i){const b=t.EpF();t.F$t(f),t.TgZ(0,"mat-sidenav-container",0)(1,"mat-sidenav",1,2),t.NdJ("closed",function(){return r.openDrawerChange.emit(!1)}),t.TgZ(3,"button",3),t.NdJ("click",function(){t.CHM(b);const x=t.MAs(2);return t.KtG(x.close())}),t._UZ(4,"app-ui-icon",4),t.qZA(),t.Hsn(5),t.qZA(),t.TgZ(6,"mat-sidenav-content",5),t.Hsn(7,1),t.qZA()()}2&i&&(t.Q6J("hasBackdrop",!1),t.xp6(1),t.Q6J("mode","over")("fixedInViewport",r.mobileQuery.matches),t.xp6(3),t.Q6J("uiIcon",r.uiIcon.CROSS),t.xp6(2),t.ekj("placeholder-padding",!r.removePlaceholder))},dependencies:[_.JX,_.TM,_.Rh,o.f],styles:["@media (min-width: 1280px){.placeholder-padding[_ngcontent-%COMP%]{padding-right:600px}}"]})}},5141:(I,h,n)=>{n.d(h,{z:()=>_});var t=n(4650);const e=["innerTemplate"];function m(o,l){1&o&&t.Hsn(0)}const d=["*"];class _{constructor(){this.innerTemplate=null}static#e=this.\u0275fac=function(f){return new(f||_)};static#t=this.\u0275cmp=t.Xpm({type:_,selectors:[["app-module-sidebar-item"]],viewQuery:function(f,y){if(1&f&&t.Gf(e,5),2&f){let g;t.iGM(g=t.CRH())&&(y.innerTemplate=g.first)}},inputs:{uiIcon:"uiIcon",routerLink:"routerLink"},ngContentSelectors:d,decls:2,vars:0,consts:[["innerTemplate",""]],template:function(f,y){1&f&&(t.F$t(),t.YNc(0,m,1,0,"ng-template",null,0,t.W1O))},encapsulation:2})}},2364:(I,h,n)=>{n.d(h,{R:()=>g});var t=n(5141),e=n(4650),m=n(6895),d=n(1667),_=n(4122);function o(c,s){if(1&c&&e._UZ(0,"app-ui-icon",5),2&c){const i=e.oxw().$implicit;e.Q6J("uiIcon",i.uiIcon)}}function l(c,s){}function f(c,s){if(1&c){const i=e.EpF();e.ynx(0),e.TgZ(1,"li")(2,"a",1),e.NdJ("click",function(){e.CHM(i);const b=e.oxw();return e.KtG(b.showMenu=!1)}),e.YNc(3,o,1,1,"app-ui-icon",2),e.YNc(4,l,0,0,"ng-template",3),e.TgZ(5,"button",4),e.NdJ("click",function(b){e.CHM(i);const v=e.oxw();return e.KtG(v.toggleMenu(b))}),e._uU(6,"Menu "),e.qZA()()(),e.BQk()}if(2&c){const i=s.$implicit,r=s.last;e.xp6(2),e.ekj("mb-4",!r),e.Q6J("routerLink",i.routerLink)("routerLinkActive","active"),e.xp6(1),e.Q6J("ngIf",i.uiIcon),e.xp6(1),e.Q6J("ngTemplateOutlet",i.innerTemplate)}}const y=function(){return[]};class g{constructor(){this._setClass=!0,this.showMenu=!1}toggleMenu(s){s.preventDefault(),s.stopPropagation(),this.showMenu=!this.showMenu}static#e=this.\u0275fac=function(i){return new(i||g)};static#t=this.\u0275cmp=e.Xpm({type:g,selectors:[["app-module-sidebar"]],contentQueries:function(i,r,b){if(1&i&&e.Suo(b,t.z,4),2&i){let v;e.iGM(v=e.CRH())&&(r.viewChildren=v)}},hostVars:2,hostBindings:function(i,r){2&i&&e.ekj("app-module-sidebar",r._setClass)},decls:4,vars:4,consts:[[4,"ngFor","ngForOf"],[1,"app-module-sidebar-list-item",3,"routerLink","routerLinkActive","click"],["class","!h-8",3,"uiIcon",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"xl:hidden","block","ml-auto","m-[-18px]","border-l-2","px-5","h-[45px]",3,"click"],[1,"!h-8",3,"uiIcon"]],template:function(i,r){if(1&i&&(e.TgZ(0,"aside")(1,"nav")(2,"ul"),e.YNc(3,f,7,6,"ng-container",0),e.qZA()()()),2&i){let b;e.xp6(2),e.ekj("hide-menu",!r.showMenu),e.xp6(1),e.Q6J("ngForOf",null!==(b=null==r.viewChildren?null:r.viewChildren.toArray())&&void 0!==b?b:e.DdM(3,y))}},dependencies:[m.sg,m.O5,m.tP,d.rH,d.Od,_.f],styles:[".app-module-sidebar{display:block;padding-top:.5rem;padding-bottom:.5rem;--tw-backdrop-blur: blur(24px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);background-color:#000000bf;padding-left:max(8px,env(safe-area-inset-left));padding-right:max(8px,env(safe-area-inset-right))}.app-module-sidebar .hide-menu .app-module-sidebar-list-item:not(.active){display:none}@media (min-width: 1536px){.app-module-sidebar{padding:60px 40px 60px 60px}}.app-module-sidebar-list-item{padding:15px;border-radius:30px;height:46px;border:3px solid #191919;display:flex;align-items:center;justify-content:center;column-gap:.5rem;--tw-border-opacity: 1;border-color:rgb(115 115 115 / var(--tw-border-opacity));font-size:1.125rem;line-height:1.75rem;font-weight:600;--tw-text-opacity: 1;color:rgb(115 115 115 / var(--tw-text-opacity))}.app-module-sidebar-list-item:hover{--tw-border-opacity: 1;border-color:rgb(212 212 212 / var(--tw-border-opacity));--tw-text-opacity: 1;color:rgb(212 212 212 / var(--tw-text-opacity))}.app-module-sidebar-list-item:hover .app-ui-icon{color:#645a54}.app-module-sidebar-list-item .app-ui-icon{color:#3f3834}.app-module-sidebar-list-item.active{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.app-module-sidebar-list-item.active .app-ui-icon{color:#e4b07e}.app-module-sidebar-list-item:not(.active) button{display:none}@media (min-width: 1280px){.app-module-sidebar-list-item{display:flex!important;height:80px}}\n"],encapsulation:2})}},2314:(I,h,n)=>{n.d(h,{y:()=>m});var t=n(4650),e=n(6895);class m{static#e=this.\u0275fac=function(o){return new(o||m)};static#t=this.\u0275cmp=t.Xpm({type:m,selectors:[["app-money"]],inputs:{amount:"amount"},decls:3,vars:3,consts:[["src","assets/ui/images/icons/T_IconCoin.png",1,"app-money-icon"]],template:function(o,l){1&o&&(t._uU(0),t.ALo(1,"number"),t._UZ(2,"img",0)),2&o&&t.Oqu(t.lcZ(1,1,l.amount))},dependencies:[e.JJ],styles:[".app-money-icon[_ngcontent-%COMP%]{height:1em;display:inline-block;vertical-align:text-top;margin-left:2px}"]})}},973:(I,h,n)=>{n.d(h,{L:()=>d});var t=n(4650);const e=[[["app-module-sidebar"]],"*"],m=["app-module-sidebar","*"];class d{static#e=this.\u0275fac=function(l){return new(l||d)};static#t=this.\u0275cmp=t.Xpm({type:d,selectors:[["app-sidebar-container"]],ngContentSelectors:m,decls:4,vars:0,consts:[[1,"h-full","grid","module-grid"],[1,"px-safe"]],template:function(l,f){1&l&&(t.F$t(e),t.TgZ(0,"div",0),t.Hsn(1),t.TgZ(2,"div",1),t.Hsn(3,1),t.qZA()())},styles:[".module-grid{grid-template-columns:1fr;grid-auto-rows:min-content}.module-grid .app-module-sidebar{width:100%}@media (min-width: 1280px){.module-grid .app-module-sidebar{width:300px}}@media (min-width: 1536px){.module-grid .app-module-sidebar{width:400px}}@media (min-width: 1280px){.module-grid{grid-template-columns:300px calc(100% - 300px);grid-auto-rows:auto}.app-module-sidebar{min-height:calc(100vh - 108px)}}@media (min-width: 1536px){.module-grid{grid-template-columns:400px calc(100% - 400px)}}\n"],encapsulation:2})}},5583:(I,h,n)=>{function m(o,l="Any"){return function e(o){const l=Object.keys(o);return l.map(y=>o[y]).filter(y=>y).length===l.length}(o)?l:Object.keys(o).filter(f=>o[f]).map(d).map(_).join(", ")}function d(o){return o.charAt(0).toUpperCase()+o.slice(1)}function _(o){return o.replaceAll(/([A-Z])/g," $1").trim()}n.d(h,{C1:()=>m,gA:()=>_})}}]);