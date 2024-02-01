import{a as $e,b as Ge,c as Be}from"./chunk-WBXX3KMU.js";import{f as Re}from"./chunk-ZPXLLCRC.js";import{a as Z,b as Me,c as Ee,d as Ne,e as ee,f as te,k as oe,l as re,n as Pe}from"./chunk-T7R4YOHN.js";import{a as U,b as j,c as ne,f as Oe}from"./chunk-RAMFR2BT.js";import"./chunk-U4QYNCHI.js";import{a as G,b as xe}from"./chunk-S3YLX6IE.js";import{a as ie}from"./chunk-EEJZHQSA.js";import{$b as ge,$c as Q,Aa as S,Ab as J,Da as C,Ea as b,Eb as _e,Fa as k,Fd as Y,G as q,Ga as x,Ha as a,Ia as s,Ja as d,L as K,Na as F,Ne as Fe,O as E,Pa as g,Pd as De,Pe as Se,Q as h,Qa as p,Qb as he,R as H,Rd as L,Sd as V,Ta as de,U as I,Ua as v,Ud as A,V as D,Vd as we,Yc as O,Zc as P,ab as u,bb as fe,bd as W,cb as ue,ed as R,fd as $,gd as ke,ha as me,kb as _,lb as y,ld as ye,ma as l,mb as z,od as be,qd as le,ta as w,td as B,ud as ve,vd as Te,wa as f,wd as Ie,x as pe,ya as c,yb as N,ye as X,zb as Ce,zd as se}from"./chunk-JU6YEV2O.js";var Le=(()=>{let t=class t{constructor(){this.uiIcon=he}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=h({type:t,selectors:[["app-my-coral-guide"]],decls:15,vars:6,consts:[["exact","","routerLink",".",3,"uiIcon"],["routerLink","to-do",3,"uiIcon"],["routerLink","offerings-checklist",3,"uiIcon"],["routerLink","museum-checklist",3,"uiIcon"],["routerLink","cooking-recipes-checklist",3,"uiIcon"],["routerLink","settings",3,"uiIcon"],[1,"hidden"]],template:function(n,r){n&1&&(a(0,"app-sidebar-container")(1,"app-module-sidebar")(2,"app-module-sidebar-item",0),u(3,"Dashboard"),s(),a(4,"app-module-sidebar-item",1),u(5,"To-dos"),s(),a(6,"app-module-sidebar-item",2),u(7," Offerings checklist "),s(),a(8,"app-module-sidebar-item",3),u(9," Museum checklist "),s(),a(10,"app-module-sidebar-item",4),u(11," Cooking recipes checklist "),s(),a(12,"app-module-sidebar-item",5),u(13," Settings "),s()(),d(14,"router-outlet",6),s()),n&2&&(l(2),c("uiIcon",r.uiIcon.MY_CORAL),l(2),c("uiIcon",r.uiIcon.TO_DO),l(2),c("uiIcon",r.uiIcon.OFFERING),l(2),c("uiIcon",r.uiIcon.MUSEUM),l(2),c("uiIcon",r.uiIcon.COOKING),l(2),c("uiIcon",r.uiIcon.SETTINGS))},dependencies:[ye,be,Te,ve,De],encapsulation:2});let e=t;return e})();var Ve=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=h({type:t,selectors:[["app-index"]],decls:8,vars:0,consts:[[1,"m-2","2xl:mx-16","2xl:mt-16","2xl:mb-10"],[1,"mb-4","font-semibold","text-2xl","text-black"],[1,"prose","lg:prose-xl"],[1,"text-black","text-lg"]],template:function(n,r){n&1&&(a(0,"app-card",0)(1,"h2",1),u(2," My Coral Guide "),s(),a(3,"div",2)(4,"p",3),u(5,' Welcome! This is "My Coral Guide" - your personal space. '),s(),a(6,"p",3),u(7," For now this startpage is quite empty. Sometime in the future this will be your dashboard. Until then, feel free to check the sub navigation to edit some checklist, add to-dos or change your settings. "),s()()())},dependencies:[Ie],encapsulation:2});let e=t;return e})();var ae=(()=>{let t=class t extends X{constructor(){super(),this.checklistForm=new Q({}),this.checklistForm.valueChanges.pipe(ie()).subscribe({next:o=>{let n=[];Object.keys(o).forEach(r=>{o[r]&&n.push(r)}),this.checklistService.set(n)}})}ngOnInit(){this.checklistDefinition$=this.checklistDefinition$.pipe(pe(1),q(o=>{let n=Object.keys(o);n.forEach(r=>{o[r].forEach(m=>{this.checklistForm.addControl(m.id,new W(this.checklistService.isChecked(m.id),{nonNullable:!0}),{emitEvent:!1})})}),this.activateTabFromRoute(n)}))}keyValueNoOrder(){return 0}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=h({type:t,selectors:[["ng-component"]],features:[w],decls:0,vars:0,template:function(n,r){},encapsulation:2});let e=t;return e})();function et(e,t){if(e&1&&d(0,"app-fish",4),e&2){let i=p().$implicit;c("fish",i.fish)}}function tt(e,t){if(e&1&&d(0,"app-insect",5),e&2){let i=p().$implicit;c("critter",i.insect)}}function it(e,t){if(e&1&&d(0,"app-insect",5),e&2){let i=p().$implicit;c("critter",i.oceanCritter)}}function ot(e,t){if(e&1&&d(0,"app-shop-processing-result",6),e&2){let i=p().$implicit;c("itemProcessData",i.chanceAsProcessResult)}}function nt(e,t){if(e&1&&f(0,et,1,1,"app-fish",4)(1,tt,1,1)(2,it,1,1)(3,ot,1,1),e&2){let i=t.$implicit;C(0,i.fish?0:i.insect?1:i.oceanCritter?2:i.chanceAsProcessResult?3:-1)}}function rt(e,t){if(e&1&&(a(0,"app-database-item-details",1),f(1,nt,4,1,"ng-template",3),s()),e&2){let i=p();c("itemId",i.selectedEntity.id)}}function at(e,t){if(e&1){let i=F();a(0,"div",11)(1,"app-item-icon",12),g("click",function(){let r=I(i).$implicit,m=p(4);return D(m.showDetails(r))}),s(),a(2,"label",13),d(3,"mat-checkbox",14),s()()}if(e&2){let i=t.$implicit,o=p(4),n;S("checklist-checked",(n=o.checklistForm.get(i.id))==null?null:n.value)("selected-icon",(o.selectedEntity==null?null:o.selectedEntity.id)===i.id),l(),c("itemName",i.iconName),l(),v("for","entry-",i.id,"-input"),l(),v("id","entry-",i.id,"")("name","entry-",i.id,""),c("formControlName",i.id)}}function lt(e,t){if(e&1&&(a(0,"div",10),k(1,at,4,9,"div",15,b),s()),e&2){let i=p().$implicit;l(),x(i.value)}}function st(e,t){if(e&1&&(a(0,"mat-tab",8),f(1,lt,3,0,"div",9),s()),e&2){let i=t.$implicit,o=p(2);c("formGroup",o.checklistForm)("label",i.key),l(),C(1,o.showTable?-1:1)}}function ct(e,t){if(e&1){let i=F();a(0,"mat-tab-group",7),g("selectedTabChange",function(n){I(i);let r=p();return D(r.updateUrl(n))}),k(1,st,2,3,"mat-tab",8,b),_(3,"keyvalue"),s()}if(e&2){let i=p();c("selectedIndex",i.selectedTabIndex),l(),x(z(3,1,t,i.keyValueNoOrder))}}var Je=(()=>{let t=class t extends ae{constructor(){super(),this.checklistService=E($e),this.checklistDefinition$=this._database.fetchMuseumChecklist$()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=h({type:t,selectors:[["app-museum-checklist"]],features:[w],decls:4,vars:6,consts:[[3,"openDrawer","removePlaceholder","openDrawerChange"],["listDetail","",3,"itemId"],["class"," px-2 xl:px-[50px] w-full","dynamicHeight","","mat-stretch-tabs","false",3,"selectedIndex"],["appDatabaseItemDetails",""],[3,"fish"],[3,"critter"],[1,"mb-4",3,"itemProcessData"],["dynamicHeight","","mat-stretch-tabs","false",1,"px-2","xl:px-[50px]","w-full",3,"selectedIndex","selectedTabChange"],[3,"formGroup","label"],["class","grid gap-4 icon-grid"],[1,"grid","gap-4","icon-grid"],[1,"icon-grid-item","checklist-item","flex","flex-col"],[3,"itemName","click"],[1,"text-white","flex","justify-center",3,"for"],[1,"flex",3,"formControlName","id","name"],["class","icon-grid-item checklist-item  flex flex-col",3,"checklist-checked","selected-icon"]],template:function(n,r){if(n&1&&(a(0,"app-list-detail-container",0),g("openDrawerChange",function(T){return r.openDrawer=T}),f(1,rt,2,1,"app-database-item-details",1)(2,ct,4,4,"mat-tab-group",2),_(3,"async"),s()),n&2){let m;c("openDrawer",r.openDrawer)("removePlaceholder",r.showTable),l(),C(1,r.selectedEntity?1:-1),l(),C(2,(m=y(3,4,r.checklistDefinition$))?2:-1,m)}},dependencies:[B,L,V,A,G,O,P,R,$,j,U,Z,ee,te,N,J],encapsulation:2});let e=t;return e})();var mt=(e,t)=>t.key;function dt(e,t){if(e&1&&d(0,"app-cooking-recipe",4),e&2){let i=t.$implicit;c("cookingRecipe",i)}}function ft(e,t){if(e&1&&k(0,dt,1,1,"app-cooking-recipe",5,mt),e&2){let i=t.$implicit;x(i.cookedFrom)}}function ut(e,t){if(e&1&&(a(0,"app-database-item-details",1),f(1,ft,2,0,"ng-template",3),s()),e&2){let i=p();c("itemId",i.selectedEntity.id)}}function Ct(e,t){if(e&1){let i=F();a(0,"div",9)(1,"app-item-icon",10),g("click",function(){let r=I(i).$implicit,m=p(3);return D(m.showDetails(r))}),s(),a(2,"label",11),d(3,"mat-checkbox",12),s()()}if(e&2){let i=t.$implicit,o=p(3),n;S("checklist-checked",(n=o.checklistForm.get(i.id))==null?null:n.value)("selected-icon",(o.selectedEntity==null?null:o.selectedEntity.id)===i.id),l(),c("itemName",i.iconName),l(),v("for","entry-",i.id,"-input"),l(),v("id","entry-",i.id,"")("name","entry-",i.id,""),c("formControlName",i.id)}}function _t(e,t){if(e&1&&(a(0,"div",8),k(1,Ct,4,9,"div",13,b),s()),e&2){let i=p().$implicit;l(),x(i.value)}}function ht(e,t){if(e&1&&(a(0,"mat-tab",6),_(1,"titlecase"),_(2,"addSpacesToPascalCase"),f(3,_t,3,0,"div",7),s()),e&2){let i=t.$implicit,o=p();c("formGroup",o.checklistForm)("label",o.cookingUtensilMapping[i.key.toLowerCase()]?o.cookingUtensilMapping[i.key.toLowerCase()].displayName:y(1,3,y(2,5,i.key))),l(3),C(3,o.showTable?-1:3)}}var Qe=(()=>{let t=class t extends ae{constructor(){super(),this.checklistService=E(Ge),this.checklistDefinition$=this._database.fetchCookingRecipesChecklist$(),this.cookingUtensilMapping=this._database.getCookingUtensilMapping(),this.urlPathFromLabel=o=>{let n=Object.keys(this.cookingUtensilMapping).find(r=>this.cookingUtensilMapping[r].displayName===o);return n||o.toLowerCase().replaceAll(" ","")}}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=h({type:t,selectors:[["app-cooking-recipes-checklist"]],features:[w],decls:7,vars:9,consts:[[3,"openDrawer","removePlaceholder","openDrawerChange"],["listDetail","","hideQualityGrid","",3,"itemId"],["dynamicHeight","","mat-stretch-tabs","false",1,"px-2","xl:px-[50px]","w-full",3,"selectedIndex","selectedTabChange"],["appDatabaseItemDetails",""],[1,"mb-4",3,"cookingRecipe"],["class","mb-4",3,"cookingRecipe"],[3,"formGroup","label"],["class","grid gap-4 icon-grid"],[1,"grid","gap-4","icon-grid"],[1,"icon-grid-item","checklist-item","flex","flex-col"],[3,"itemName","click"],[1,"text-white","flex","justify-center",3,"for"],[1,"flex",3,"formControlName","id","name"],["class","icon-grid-item checklist-item  flex flex-col",3,"checklist-checked","selected-icon"]],template:function(n,r){n&1&&(a(0,"app-list-detail-container",0),g("openDrawerChange",function(T){return r.openDrawer=T}),f(1,ut,2,1,"app-database-item-details",1),a(2,"mat-tab-group",2),g("selectedTabChange",function(T){return r.updateUrl(T)}),k(3,ht,4,7,"mat-tab",6,b),_(5,"keyvalue"),_(6,"async"),s()()),n&2&&(c("openDrawer",r.openDrawer)("removePlaceholder",r.showTable),l(),C(1,r.selectedEntity?1:-1),l(),c("selectedIndex",r.selectedTabIndex),l(),x(z(5,4,y(6,7,r.checklistDefinition$),r.keyValueNoOrder)))},dependencies:[B,L,V,A,G,O,P,R,$,ne,j,U,N,Ce,J,Y],encapsulation:2});let e=t;return e})();function gt(e,t){if(e&1&&d(0,"app-offering",4),e&2){let i=t.$implicit;c("details",i)}}function kt(e,t){if(e&1&&(a(0,"app-item-card-switch",1),f(1,gt,1,1,"ng-template",3),s()),e&2){let i=p();c("item",i.selectedEntity)}}function xt(e,t){if(e&1){let i=F();a(0,"div",15),_(1,"entityKey"),a(2,"app-item-icon",16),g("click",function(){I(i);let n=p().$implicit,r=p(5);return D(r.showDetails(n))}),s(),a(3,"label",17),d(4,"mat-checkbox",18),s()()}if(e&2){let i=p().$implicit,o=p(5),n;S("checklist-checked",(n=o.checklistForm.get(t))==null?null:n.value)("selected-icon",o.selectedEntity&&y(1,11,o.selectedEntity)===t),l(2),c("amount",i.amount)("itemName",i.item.iconName)("quality",i.quality),l(),v("for","entry-",t,"-input"),l(),v("id","entry-",t,"")("name","entry-",t,""),c("formControlName",t)}}function yt(e,t){if(e&1&&(f(0,xt,5,13,"div",14),_(1,"entityKey")),e&2){let i=t.$implicit,o;C(0,(o=y(1,1,i.item))?0:-1,o)}}function bt(e,t){if(e&1&&(a(0,"div",9)(1,"div",10),d(2,"img",11),a(3,"div",12)(4,"div"),u(5),s(),a(6,"div"),u(7),s()()(),a(8,"div",13),k(9,yt,2,3,null,null,b),s()()),e&2){let i=t.$implicit,o=p(4);l(),S("bg-merino-300",(o.activeOffering==null?null:o.activeOffering.title)===i.title),l(),v("alt","",i.title," offering icon")("src","assets/ui/images/offering/",i.imageName,".png",me),l(3),fe(i.title),l(2),ue(" ",i.numOfItemRequired===-1?"All":i.numOfItemRequired," required: "),l(2),x(i.requiredItems)}}function vt(e,t){if(e&1&&(a(0,"div",8),k(1,bt,11,6,"div",19,b),s()),e&2){let i=p().$implicit;l(),x(i.offerings)}}function Tt(e,t){if(e&1&&(a(0,"mat-tab",6),_(1,"addSpacesToPascalCase"),f(2,vt,3,0,"div",7),s()),e&2){let i=t.$implicit,o=p(2);de("label",y(1,2,i.offeringGroupTitle)),l(2),C(2,o.showTable?-1:2)}}function It(e,t){if(e&1){let i=F();a(0,"mat-tab-group",5),g("selectedTabChange",function(n){I(i);let r=p();return D(r.updateUrl(n))}),k(1,Tt,3,4,"mat-tab",6,b),s()}if(e&2){let i=p();c("formGroup",i.checklistForm)("selectedIndex",i.selectedTabIndex),l(),x(t)}}var We=(()=>{let t=class t extends X{constructor(){super(),this.checklistService=E(Be),this.checklistForm=new Q({}),this.toDoCategory=se,this._altars=[],this.urlPathFromLabel=o=>{let n=o.toLowerCase().replaceAll(" ",""),r=this._altars.find(m=>m.offeringGroupTitle.toLowerCase().replaceAll(" ","")===n);return r?r.urlPath:o.toLowerCase().replaceAll(" ","")},this.checklistForm.valueChanges.pipe(ie()).subscribe({next:o=>{let n=[];Object.keys(o).forEach(r=>{o[r]&&n.push(r)}),this.checklistService.set(n)}}),this.offerings$=this._database.fetchOfferings$().pipe(q(o=>{let n=o.map(r=>r.urlPath);this._altars=o,o.forEach(r=>{let m=Object.keys(r);r.offerings.forEach(T=>{T.requiredItems.forEach(Xe=>{let ce=ge(Xe.item);this.checklistForm.addControl(ce,new W(this.checklistService.isChecked(ce),{nonNullable:!0}),{emitEvent:!1})})})}),this.activateTabFromRoute(n)}))}registerToToDo(o){"item"in o&&this._todo.add(se.OFFERINGS,o)}showDetails(o){this.entryForToDo=o,o&&"amount"in o?super.showDetails(o.item):super.showDetails(o)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=h({type:t,selectors:[["app-offerings-checklist"]],features:[w],decls:4,vars:5,consts:[[3,"openDrawer","openDrawerChange"],["listDetail","",3,"item"],["class","px-2 xl:px-[50px] w-full","mat-stretch-tabs","false",3,"formGroup","selectedIndex"],["appDatabaseItemDetails",""],[3,"details"],["mat-stretch-tabs","false",1,"px-2","xl:px-[50px]","w-full",3,"formGroup","selectedIndex","selectedTabChange"],[3,"label"],["class","grid grid-cols-1 lg:grid-cols-2 gap-6"],[1,"grid","grid-cols-1","lg:grid-cols-2","gap-6"],[1,"flex","flex-col","gap-y-2"],[1,"rounded-lg","bg-merino","flex","items-center","gap-4","p-4"],["height","64","width","64",3,"alt","src"],[1,"flex","flex-col","text-lg","font-semibold"],[1,"grid","gap-4","icon-grid","w-full"],["class","icon-grid-item checklist-item flex flex-col",3,"checklist-checked","selected-icon"],[1,"icon-grid-item","checklist-item","flex","flex-col"],[3,"amount","itemName","quality","click"],[1,"text-white","flex","justify-center",3,"for"],[1,"flex",3,"formControlName","id","name"],["class","flex flex-col gap-y-2"]],template:function(n,r){if(n&1&&(a(0,"app-list-detail-container",0),g("openDrawerChange",function(T){return r.openDrawer=T}),f(1,kt,2,1,"app-item-card-switch",1)(2,It,3,2,"mat-tab-group",2),_(3,"async"),s()),n&2){let m;c("openDrawer",r.openDrawer),l(),C(1,r.selectedEntity?1:-1),l(),C(2,(m=y(3,3,r.offerings$))?2:-1,m)}},dependencies:[B,L,V,A,G,O,P,R,$,U,oe,re,N,Fe,Y],encapsulation:2});let e=t;return e})();var Dt=[{path:"",component:Le,children:[{path:"",component:Ve},{path:"to-do",loadChildren:()=>import("./chunk-YO4EHG5U.js").then(e=>e.ToDoModule)},{path:"museum-checklist",redirectTo:"museum-checklist/",pathMatch:"full"},{path:"museum-checklist/:tabName",component:Je,title:"Museum checklist - My Guide"},{path:"cooking-recipes-checklist",redirectTo:"cooking-recipes-checklist/",pathMatch:"full"},{path:"cooking-recipes-checklist/:tabName",component:Qe,title:"Cooking recipes checklist - My Guide"},{path:"offerings-checklist",redirectTo:"offerings-checklist/",pathMatch:"full"},{path:"offerings-checklist/:tabName",component:We,title:"Offerings checklist - My Guide"},{path:"settings",loadChildren:()=>import("./chunk-QLOMCE4L.js").then(e=>e.SettingsModule),title:"Settings - My Guide"}]}],Ye=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=H({type:t}),t.\u0275inj=K({imports:[le.forChild(Dt),le]});let e=t;return e})();var Zi=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=H({type:t}),t.\u0275inj=K({imports:[_e,Ye,Se,Re,we,xe,ke,Pe,ne,j,Oe,Z,ee,te,oe,Me,Ne,Ee,re]});let e=t;return e})();export{Zi as MyCoralGuideModule};
