import{Aa as C,Ad as te,Ba as h,Bb as ye,Bd as ie,Ca as x,Cc as I,Cd as ne,D as fe,Dc as Oe,Dd as oe,Ea as M,Eb as Be,Ec as Ve,Ed as ae,Fd as qe,G as ue,Ga as w,Gc as V,Gd as be,Ha as s,Ic as Pe,Id as we,J as he,Jd as Ke,K as g,Kd as Qe,L as xe,Ld as re,Md as ve,Nc as j,Nd as Se,O as E,Oa as d,Ob as He,Oc as G,Od as De,P,Pa as N,Pc as q,Pd as Ie,Qa as B,Qd as le,Ra as D,Rd as me,S as H,Sa as Re,Sb as A,Sd as pe,Td as Ye,Ud as se,Xa as ge,Xb as Ue,Xd as ze,Ya as f,Yd as ke,Za as u,_b as O,ac as Ee,cc as Ae,da as r,ea as Ne,ib as Le,j as _e,k as Me,ka as S,la as Fe,ma as U,md as je,na as p,nb as R,ne as Je,ob as L,od as K,pa as $,pb as Te,pd as Q,rd as Y,sd as Ge,ta as c,tb as $e,u as Ce,ua as _,ud as z,va as T,vd as J,wa as y,wd as W,xa as b,xd as X,ya as a,yd as Z,za as l,zd as ee}from"./chunk-IDSY5RWV.js";function xt(e,i){if(e&1&&(a(0,"app-module-sidebar-item",1),d(1,"Inventory-Crafting "),l(),a(2,"app-module-sidebar-item",2),d(3,"Processing "),l(),a(4,"app-module-sidebar-item",3),d(5,"Cooking "),l()),e&2){let t=s();p("uiIcon",t.UI_ICONS.CRAFTING),r(2),p("uiIcon",t.UI_ICONS.ARTISAN),r(2),p("uiIcon",t.UI_ICONS.COOKING)}}var Xe=(()=>{let i=class i{constructor(n){this._databaseService=n,this.UI_ICONS=Be,this.addSpacesToPascalCase=He,this.itemProcessingRecipes$=this._databaseService.fetchItemProcessingRecipes$()}};i.\u0275fac=function(o){return new(o||i)(Ne(A))},i.\u0275cmp=g({type:i,selectors:[["app-crafting"]],decls:5,vars:3,consts:[[1,"hidden"],["routerLink","inventory",3,"uiIcon"],["routerLink","artisan",3,"uiIcon"],["routerLink","cooking",3,"uiIcon"]],template:function(o,m){o&1&&(a(0,"app-sidebar-container")(1,"app-module-sidebar"),c(2,xt,6,3),f(3,"async"),l(),C(4,"router-outlet",0),l()),o&2&&(r(2),_(2,u(3,1,m.itemProcessingRecipes$)?2:-1))},dependencies:[Ue,O,Ve,Oe,je,R],encapsulation:2});let e=i;return e})();function Tt(e,i){if(e&1&&(a(0,"div"),d(1," Unlocked: "),a(2,"span",2),d(3),l()()),e&2){let t=s(2);r(3),D("Level ",t.craftingRecipe.craftingUnlock.masteryLevel," in ",t.craftingRecipe.craftingUnlock.masteryType,"")}}function yt(e,i){if(e&1&&(a(0,"app-base-item-card",0),c(1,Tt,4,2,"div"),C(2,"app-item-list",1),f(3,"craftingRecipeIngredients"),l()),e&2){let t=s();p("amount",t.craftingRecipe.amount)("item",t.craftingRecipe.item),r(1),_(1,t.craftingRecipe.craftingUnlock?1:-1),r(1),p("itemList",u(3,4,t.craftingRecipe))}}var tt=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=g({type:i,selectors:[["app-inventory-details"]],inputs:{craftingRecipe:"craftingRecipe"},decls:1,vars:1,consts:[[3,"amount","item"],[1,"mb-3",3,"itemList"],[1,"text-black"]],template:function(o,m){o&1&&c(0,yt,4,6,"app-base-item-card",0),o&2&&_(0,m.craftingRecipe&&m.craftingRecipe.item?0:-1)},dependencies:[q,j,ve]});let e=i;return e})();function wt(e,i){if(e&1&&(a(0,"td",16),C(1,"app-item-icon",17),l()),e&2){let t=i.$implicit;r(1),p("itemName",t.item==null?null:t.item.iconName)}}function vt(e,i){e&1&&(a(0,"th",18),d(1," Output "),l()),e&2&&U("colspan",2)}function St(e,i){if(e&1&&(a(0,"td",19),d(1),l()),e&2){let t=i.$implicit;r(1),D("",t.item==null?null:t.item.displayName," (",t.amount,") ")}}function Dt(e,i){e&1&&(a(0,"th",20),d(1," Ingredients"),l())}function It(e,i){if(e&1&&(a(0,"td",21),C(1,"app-table-item-list",22),f(2,"craftingRecipeIngredients"),l()),e&2){let t=i.$implicit;r(1),p("itemList",u(2,1,t))}}function kt(e,i){e&1&&(a(0,"th",20),d(1," Unlocked by"),l())}function Et(e,i){if(e&1&&d(0),e&2){let t=s().$implicit;D(" Level ",t.craftingUnlock.masteryLevel," in ",t.craftingUnlock.masteryType," ")}}function Pt(e,i){if(e&1&&(a(0,"td",23),c(1,Et,1,2),l()),e&2){let t=i.$implicit;r(1),_(1,t.craftingUnlock?1:-1)}}function Mt(e,i){e&1&&(a(0,"th",24),d(1," Sell price"),l())}function Nt(e,i){if(e&1&&(a(0,"td",25),C(1,"app-money",26),l()),e&2){let t=i.$implicit;r(1),p("amount",t.item.sellPrice)}}function Ft(e,i){e&1&&C(0,"tr",27)}function Rt(e,i){e&1&&C(0,"tr",28)}function Lt(e,i){if(e&1&&(a(0,"table",0),h(1,1),c(2,wt,2,1,"td",2),x(),h(3,3),c(4,vt,2,1,"th",4)(5,St,2,2,"td",5),x(),h(6,6),c(7,Dt,2,0,"th",7)(8,It,3,3,"td",8),x(),h(9,9),c(10,kt,2,0,"th",7)(11,Pt,2,1,"td",10),x(),h(12,11),c(13,Mt,2,0,"th",12)(14,Nt,2,1,"td",13),x(),c(15,Ft,1,0,"tr",14)(16,Rt,1,0,"tr",15),l()),e&2){let t=s();p("dataSource",t.matDataSource),r(15),p("matHeaderRowDef",t.displayHeaderColumns)("matHeaderRowDefSticky",!0),r(1),p("matRowDefColumns",t.displayedColumns)}}var lt=(()=>{let i=class i extends se{constructor(){super(...arguments),this.BASE_DISPLAY_COLUMNS=["icon","outputName","ingredients","sellPrice","unlock"],this.sortingDataAccessor=(n,o)=>{let m=this.sortHelper(n.item,o);return m!==null?m:0}}};i.\u0275fac=(()=>{let n;return function(m){return(n||(n=H(i)))(m||i)}})(),i.\u0275cmp=g({type:i,selectors:[["app-inventory-table"]],features:[S],decls:2,vars:1,consts:[["mat-table","","matSort","",3,"dataSource"],["matColumnDef","icon","sticky",""],["class","!pl-2 !pr-0  w-10 text-center icon-col ","mat-cell","",4,"matCellDef"],["matColumnDef","outputName"],["class","backdrop-blur-xl","mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","text-col whitespace-nowrap","mat-cell","",4,"matCellDef"],["matColumnDef","ingredients"],["mat-header-cell","",4,"matHeaderCellDef"],["class","list-col","mat-cell","",4,"matCellDef"],["matColumnDef","unlock"],["class","text-col","mat-cell","",4,"matCellDef"],["matColumnDef","sellPrice"],["class","whitespace-nowrap","mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","text-col !text-right w-[1%]","mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-cell","",1,"!pl-2","!pr-0","w-10","text-center","icon-col"],[3,"itemName"],["mat-header-cell","","mat-sort-header","",1,"backdrop-blur-xl"],["mat-cell","",1,"text-col","whitespace-nowrap"],["mat-header-cell",""],["mat-cell","",1,"list-col"],[3,"itemList"],["mat-cell","",1,"text-col"],["mat-header-cell","","mat-sort-header","",1,"whitespace-nowrap"],["mat-cell","",1,"text-col","!text-right","w-[1%]"],[3,"amount"],["mat-header-row",""],["mat-row",""]],template:function(o,m){o&1&&(a(0,"app-responsive-table"),c(1,Lt,17,4,"table",0),l()),o&2&&(r(1),_(1,m.matDataSource?1:-1))},dependencies:[I,V,z,re,J,X,ie,Z,W,ne,ee,te,oe,ae,me,pe,ve],encapsulation:2});let e=i;return e})();function Bt(e,i){if(e&1&&C(0,"app-inventory-details",1),e&2){let t=s();p("craftingRecipe",t.selectedEntity)}}function Ht(e,i){if(e&1){let t=M();a(0,"app-item-icon",8),w("click",function(){let m=E(t).$implicit,v=s(3);return P(v.showDetails(m))}),l()}if(e&2){let t=i.$implicit,n=s(3);$("selected-icon",(n.selectedEntity==null||n.selectedEntity.item==null?null:n.selectedEntity.item.id)===(t.item==null?null:t.item.id)),p("amount",t.amount)("itemName",t.item==null?null:t.item.iconName)}}function Ut(e,i){if(e&1&&(a(0,"div",7),y(1,Ht,1,4,"app-item-icon",9,T),l()),e&2){let t=s();b(1,t)}}function At(e,i){if(e&1&&C(0,"app-inventory-table",6),e&2){let t=s();p("dataSource",t)}}function Ot(e,i){if(e&1&&c(0,Ut,3,0,"div",5)(1,At,1,1,"app-inventory-table",6),e&2){let t=s();_(0,t.showTable?-1:0),r(1),_(1,t.showTable?1:-1)}}var ct=(()=>{let i=class i extends ze{constructor(){super(),this.recipes$=this._database.fetchCraftingRecipes$()}};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=g({type:i,selectors:[["app-inventory"]],features:[S],decls:7,vars:6,consts:[[3,"openDrawer","openDrawerChange"],["listDetail","",3,"craftingRecipe"],["mat-stretch-tabs","false",1,"px-2","xl:px-[50px]","w-full"],["label","All"],[3,"showTable","showTableChange"],["class","grid gap-4 icon-grid"],[3,"dataSource"],[1,"grid","gap-4","icon-grid"],[1,"icon-grid-item",3,"amount","itemName","click"],["class","icon-grid-item",3,"amount","selected-icon","itemName"]],template:function(o,m){if(o&1&&(a(0,"app-list-detail-container",0),w("openDrawerChange",function(k){return m.openDrawer=k}),c(1,Bt,1,1,"app-inventory-details",1),a(2,"mat-tab-group",2)(3,"mat-tab",3)(4,"app-data-filter",4),w("showTableChange",function(k){return m.showTable=k}),l(),c(5,Ot,2,2),f(6,"async"),l()()()),o&2){let v;p("openDrawer",m.openDrawer),r(1),_(1,m.selectedEntity?1:-1),r(3),p("showTable",m.showTable),r(1),_(5,(v=u(6,4,m.recipes$))?5:-1,v)}},dependencies:[I,K,le,Q,Y,tt,lt,R],encapsulation:2});let e=i;return e})();function Gt(e,i){if(e&1&&(a(0,"td",18),C(1,"app-item-icon",19),l()),e&2){let t=i.$implicit;r(1),p("itemName",t.output.item==null?null:t.output.item.iconName)}}function qt(e,i){e&1&&(a(0,"th",20),d(1," Output "),l()),e&2&&U("colspan",2)}function Kt(e,i){if(e&1&&(a(0,"td",21),d(1),l()),e&2){let t=i.$implicit;r(1),D("",t.output.item==null?null:t.output.item.displayName," (",t.output.amount,") ")}}function Qt(e,i){e&1&&(a(0,"th",22),d(1," Ingredients"),l())}function Yt(e,i){if(e&1&&(a(0,"td",23),C(1,"app-table-item-list",24),f(2,"itemProcessingIngredients"),l()),e&2){let t=i.$implicit;r(1),p("itemList",u(2,1,t))}}function zt(e,i){e&1&&(a(0,"th",25),d(1," Sell price"),l())}function Jt(e,i){if(e&1&&(a(0,"td",26),C(1,"app-money",27),l()),e&2){let t=i.$implicit;r(1),p("amount",t.output.item.sellPrice)}}function Wt(e,i){e&1&&(a(0,"th",22),d(1,"Processor"),l())}var Xt=e=>["crafting/artisan",e];function Zt(e,i){if(e&1&&(a(0,"a",30),C(1,"app-item-icon",31),a(2,"span",32),d(3),l()()),e&2){let t=s().$implicit;p("routerLink",ge(3,Xt,t.machine.toLowerCase())),r(1),p("itemName",i.iconName),r(2),N(i.displayName)}}function ei(e,i){if(e&1&&(d(0),f(1,"titlecase"),f(2,"addSpacesToPascalCase")),e&2){let t=s().$implicit;B(" ",u(1,1,u(2,3,t.machine))," ")}}function ti(e,i){if(e&1&&(a(0,"td",28),c(1,Zt,4,5,"a",29)(2,ei,3,5),l()),e&2){let t=i.$implicit,n=s(2),o;r(1),_(1,(o=n.processorMapping[t.machine.toLowerCase()])?1:-1,o),r(1),_(2,n.processorMapping[t.machine.toLowerCase()]?-1:2)}}function ii(e,i){e&1&&(a(0,"th",33),d(1," Time"),l())}function ni(e,i){if(e&1&&(a(0,"td",28),C(1,"app-processing-time",34),l()),e&2){let t=i.$implicit;r(1),p("processingTime",t)}}function oi(e,i){e&1&&C(0,"tr",35)}function ai(e,i){e&1&&C(0,"tr",36)}function ri(e,i){if(e&1&&(a(0,"table",0),h(1,1),c(2,Gt,2,1,"td",2),x(),h(3,3),c(4,qt,2,1,"th",4)(5,Kt,2,2,"td",5),x(),h(6,6),c(7,Qt,2,0,"th",7)(8,Yt,3,3,"td",8),x(),h(9,9),c(10,zt,2,0,"th",10)(11,Jt,2,1,"td",11),x(),h(12,12),c(13,Wt,2,0,"th",7)(14,ti,3,2,"td",13),x(),h(15,14),c(16,ii,2,0,"th",15)(17,ni,2,1,"td",13),x(),c(18,oi,1,0,"tr",16)(19,ai,1,0,"tr",17),l()),e&2){let t=s();p("dataSource",t.matDataSource),r(18),p("matHeaderRowDef",t.displayHeaderColumns)("matHeaderRowDefSticky",!0),r(1),p("matRowDefColumns",t.displayedColumns)}}var _t=(()=>{let i=class i extends se{constructor(){super(...arguments),this.showProcessor=!1,this.BASE_DISPLAY_COLUMNS=["icon","outputName","ingredients","processingTime","sellPrice"],this.processorMapping=he(A).getProcessorMapping(),this.sortingDataAccessor=(n,o)=>{let m=this.sortHelper(n.output.item,o);return m!==null?m:o==="processingTime"?n.day*24*60+n.time.hours*60+n.time.minutes:0}}setupDataSource(n){super.setupDataSource(n);let o=this.displayedColumns.indexOf("processor");this.showProcessor&&o===-1?(this.displayedColumns.splice(3,0,"processor"),this.displayHeaderColumns=this.displayedColumns.filter(m=>m!=="icon")):!this.showProcessor&&o!==-1&&(this.displayedColumns.splice(o,1),this.displayHeaderColumns=this.displayedColumns.filter(m=>m!=="icon"))}};i.\u0275fac=(()=>{let n;return function(m){return(n||(n=H(i)))(m||i)}})(),i.\u0275cmp=g({type:i,selectors:[["app-processor-table"]],inputs:{showProcessor:["showProcessor","showProcessor",Le]},features:[Fe,S],decls:2,vars:1,consts:[["mat-table","","matSort","",3,"dataSource"],["matColumnDef","icon","sticky",""],["class","!pl-2 !pr-0  w-10 text-center icon-col ","mat-cell","",4,"matCellDef"],["matColumnDef","outputName"],["class","backdrop-blur-xl","mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","text-col whitespace-nowrap","mat-cell","",4,"matCellDef"],["matColumnDef","ingredients"],["mat-header-cell","",4,"matHeaderCellDef"],["class","list-col","mat-cell","",4,"matCellDef"],["matColumnDef","sellPrice"],["class","whitespace-nowrap","mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","text-col !text-right w-[1%]","mat-cell","",4,"matCellDef"],["matColumnDef","processor"],["class","text-col w-[1%] whitespace-nowrap","mat-cell","",4,"matCellDef"],["matColumnDef","processingTime"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-cell","",1,"!pl-2","!pr-0","w-10","text-center","icon-col"],[3,"itemName"],["mat-header-cell","","mat-sort-header","",1,"backdrop-blur-xl"],["mat-cell","",1,"text-col","whitespace-nowrap"],["mat-header-cell",""],["mat-cell","",1,"list-col"],[1,"mb-3",3,"itemList"],["mat-header-cell","","mat-sort-header","",1,"whitespace-nowrap"],["mat-cell","",1,"text-col","!text-right","w-[1%]"],[3,"amount"],["mat-cell","",1,"text-col","w-[1%]","whitespace-nowrap"],["class","flex gap-2 items-center",3,"routerLink"],[1,"flex","gap-2","items-center",3,"routerLink"],[1,"!w-7",3,"itemName"],[1,"ml-1","whitespace-nowrap","underline"],["mat-header-cell","","mat-sort-header",""],[3,"processingTime"],["mat-header-row",""],["mat-row",""]],template:function(o,m){o&1&&(a(0,"app-responsive-table"),c(1,ri,20,4,"table",0),l()),o&2&&(r(1),_(1,m.matDataSource?1:-1))},dependencies:[O,I,V,z,we,re,J,X,ie,Z,W,ne,ee,te,oe,ae,me,pe,L,Ie,G],encapsulation:2});let e=i;return e})();function pi(e,i){if(e&1&&(a(0,"div",5),d(1,"Processing time: "),a(2,"span",6),C(3,"app-processing-time",7),l()()),e&2){let t=s(2);r(3),p("processingTime",t.selectedEntity)}}function si(e,i){if(e&1&&(a(0,"div",5),d(1,"Time per input quality "),C(2,"app-processing-time-per-quality",8),l()),e&2){let t=s(2);r(2),p("baseProcessingTime",t.selectedEntity)("processingTimePerQualities",t.selectedEntity.qualities)}}function ci(e,i){if(e&1&&(a(0,"div",5),d(1,"Time to improve quality "),C(2,"app-refinements-list",9),l()),e&2){let t=s(2);r(2),p("refinements",t.selectedEntity.refinements)}}function di(e,i){if(e&1&&(a(0,"app-base-item-card",1),c(1,pi,4,1,"div",3),C(2,"app-item-list",4),f(3,"itemProcessingIngredients"),c(4,si,3,2,"div",3)(5,ci,3,1,"div",3),l()),e&2){let t=s();p("item",t.selectedEntity.output.item)("amount",t.selectedEntity.output.amount),r(1),_(1,t.selectedEntity.qualities?-1:1),r(1),p("itemList",u(3,6,t.selectedEntity)),r(2),_(4,t.selectedEntity.qualities?4:-1),r(1),_(5,t.selectedEntity.refinements?5:-1)}}function _i(e,i){if(e&1){let t=M();a(0,"app-item-icon",15),w("click",function(){let m=E(t).$implicit,v=s(4);return P(v.showDetails(m))}),l()}if(e&2){let t=i.$implicit,n=s(4),o;$("selected-icon",(n.selectedEntity==null||n.selectedEntity.output==null||n.selectedEntity.output.item==null?null:n.selectedEntity.output.item.id)===t.output.item.id),p("amount",t.output.amount)("itemName",t.output.item.iconName)("subIconName",n.reusedImages.includes((o=t.output.item.iconName)!==null&&o!==void 0?o:"")?t.input.item.iconName:void 0)}}function Ci(e,i){if(e&1&&(a(0,"div",14),y(1,_i,1,5,"app-item-icon",16,T),l()),e&2){let t=s();b(1,t)}}function fi(e,i){if(e&1&&C(0,"app-processor-table",13),e&2){let t=s();p("dataSource",t)}}function ui(e,i){if(e&1&&c(0,Ci,3,0,"div",12)(1,fi,1,1,"app-processor-table",13),e&2){let t=s(2);_(0,t.showTable?-1:0),r(1),_(1,t.showTable?1:-1)}}function hi(e,i){if(e&1){let t=M();a(0,"mat-tab",10),f(1,"titlecase"),f(2,"spacesToPascalCase"),a(3,"app-data-filter",11),w("showTableChange",function(o){E(t);let m=s();return P(m.showTable=o)}),l(),c(4,ui,2,2),f(5,"async"),l()}if(e&2){let t=i.$implicit,n=s(),o;p("label",n.processorMapping[t.toLowerCase()]?n.processorMapping[t.toLowerCase()].displayName:u(1,3,u(2,5,t))),r(3),p("showTable",n.showTable),r(1),_(4,(o=u(5,7,n.filteredData$(t)))?4:-1,o)}}var Ct=(()=>{let i=class i extends ke{constructor(){super(),this.quality=ye,this.machineNames=[],this.processorMapping=this._database.getProcessorMapping(),this.urlPathFromLabel=n=>{let o=Object.keys(this.processorMapping).find(m=>this.processorMapping[m].displayName===n);return o||n.toLowerCase().replaceAll(" ","")},this._database.fetchItemProcessingRecipes$().pipe(Ce(1)).subscribe({next:n=>{this.machineNames=Object.keys(n),this.activateTabFromRoute(this.machineNames)}})}filteredData$(n){return this._database.fetchItemProcessingRecipes$().pipe(_e(o=>o[n]),fe(o=>{this.reusedImages=this.getMultipleIconNames(o.map(m=>m.output.item.iconName??""))}))}};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=g({type:i,selectors:[["app-processor"]],features:[S],decls:5,vars:3,consts:[[3,"openDrawer","openDrawerChange"],["listDetail","",3,"item","amount"],["mat-stretch-tabs","false",1,"px-2","xl:px-[50px]","w-full",3,"selectedIndex","selectedTabChange"],["class","mb-3"],[1,"mb-3",3,"itemList"],[1,"mb-3"],[1,"text-black"],[3,"processingTime"],[3,"baseProcessingTime","processingTimePerQualities"],[3,"refinements"],[3,"label"],[3,"showTable","showTableChange"],["class","grid gap-4 icon-grid"],[3,"dataSource"],[1,"grid","gap-4","icon-grid"],[1,"icon-grid-item",3,"amount","itemName","subIconName","click"],["class","icon-grid-item",3,"amount","itemName","subIconName","selected-icon"]],template:function(o,m){o&1&&(a(0,"app-list-detail-container",0),w("openDrawerChange",function(k){return m.openDrawer=k}),c(1,di,6,8,"app-base-item-card",1),a(2,"mat-tab-group",2),w("selectedTabChange",function(k){return m.updateUrl(k)}),y(3,hi,6,9,"mat-tab",10,T),l()()),o&2&&(p("openDrawer",m.openDrawer),r(1),_(1,m.selectedEntity?1:-1),r(1),p("selectedIndex",m.selectedTabIndex),b(3,m.machineNames))},dependencies:[I,q,j,K,Ke,we,Qe,le,Q,Y,_t,R,L,be,Ie],encapsulation:2});let e=i;return e})();function Ti(e,i){if(e&1&&(a(0,"td",19),C(1,"app-item-icon",20),l()),e&2){let t=i.$implicit;r(1),p("itemName",t.item==null?null:t.item.iconName)}}function yi(e,i){e&1&&(a(0,"th",21),d(1," Output "),l()),e&2&&U("colspan",2)}function bi(e,i){if(e&1&&(a(0,"td",22),d(1),l()),e&2){let t=i.$implicit;r(1),D("",t.item==null?null:t.item.displayName," (",t.amount,") ")}}function wi(e,i){e&1&&(a(0,"th",23),d(1," Ingredients"),l())}function vi(e,i){e&1&&C(0,"hr",28)}function Si(e,i){if(e&1&&(C(0,"app-table-item-list",25),c(1,vi,1,0,"hr",27)),e&2){let t=i.$implicit,n=i.$index,o=i.$count;p("itemList",t),r(1),_(1,n!==o-1?1:-1)}}function Di(e,i){if(e&1&&(a(0,"span",26),d(1," Either of the following"),l(),y(2,Si,2,2,null,null,T)),e&2){let t=s().$implicit;b(2,t.eitherOrIngredients)}}function Ii(e,i){if(e&1&&(a(0,"div",32),C(1,"app-item-icon",33),a(2,"span",34),d(3),l()()),e&2){let t=s().$implicit;r(1),p("itemName",t.iconName),r(2),N(t.displayName)}}function ki(e,i){if(e&1&&(a(0,"div",29),c(1,Ii,4,2,"div",30),a(2,"div",31),d(3),l()()),e&2){let t=i.$implicit,n=s().$implicit;r(1),_(1,t?1:-1),r(2),B("as ",n.key,"")}}function Ei(e,i){if(e&1&&(y(0,ki,4,2,"div",35,T),f(2,"castToMinimalItemArray")),e&2){let t=i.$implicit;b(0,u(2,0,t.value))}}function Pi(e,i){if(e&1&&(a(0,"span",26),d(1," The following counting as"),l(),y(2,Ei,3,2,null,null,T),f(4,"keyvalue")),e&2){let t=s().$implicit;b(2,u(4,0,t.additionsToGenerics))}}function Mi(e,i){if(e&1&&(a(0,"td",24),C(1,"app-table-item-list",25),f(2,"cookingRecipeIngredients"),c(3,Di,4,0)(4,Pi,5,2),l()),e&2){let t=i.$implicit;r(1),p("itemList",u(2,3,t)),r(2),_(3,t.eitherOrIngredients.length?3:-1),r(1),_(4,t.additionsToGenerics?4:-1)}}function Ni(e,i){e&1&&(a(0,"th",23),d(1," Unlocked by"),l())}function Fi(e,i){if(e&1&&d(0),e&2){let t=s().$implicit;D(" Level ",t.craftingUnlock.masteryLevel," in ",t.craftingUnlock.masteryType," ")}}function Ri(e,i){if(e&1&&(a(0,"td",36),c(1,Fi,1,2),l()),e&2){let t=i.$implicit;r(1),_(1,t.craftingUnlock?1:-1)}}function Li(e,i){e&1&&(a(0,"th",37),d(1," Sell price"),l())}function $i(e,i){if(e&1&&(a(0,"td",38),C(1,"app-money",39),l()),e&2){let t=i.$implicit;r(1),p("amount",t.item.sellPrice)}}function Bi(e,i){e&1&&(a(0,"th",40),d(1," Utensil"),l())}var Hi=e=>["crafting/cooking",e];function Ui(e,i){if(e&1&&(a(0,"a",43),C(1,"app-item-icon",33),a(2,"span",44),d(3),l()()),e&2){let t=s().$implicit;p("routerLink",ge(3,Hi,t.toLowerCase())),r(1),p("itemName",i.iconName),r(2),N(i.displayName)}}function Ai(e,i){if(e&1&&(d(0),f(1,"titlecase"),f(2,"addSpacesToPascalCase")),e&2){let t=s().$implicit;B(" ",u(1,1,u(2,3,t))," ")}}function Oi(e,i){if(e&1&&(a(0,"div",34),c(1,Ui,4,5,"a",42)(2,Ai,3,5),l()),e&2){let t=i.$implicit,n=s(3),o;r(1),_(1,(o=n.cookingUtensilMapping[t.toLowerCase()])?1:-1,o),r(1),_(2,n.cookingUtensilMapping[t.toLowerCase()]?-1:2)}}function Vi(e,i){if(e&1&&(a(0,"td",41),y(1,Oi,3,2,"div",45,T),l()),e&2){let t=i.$implicit;b(1,t.utensils)}}function ji(e,i){e&1&&C(0,"tr",46)}function Gi(e,i){e&1&&C(0,"tr",47)}function qi(e,i){if(e&1&&(a(0,"table",0),h(1,1),c(2,Ti,2,1,"td",2),x(),h(3,3),c(4,yi,2,1,"th",4)(5,bi,2,2,"td",5),x(),h(6,6),c(7,wi,2,0,"th",7)(8,Mi,5,5,"td",8),x(),h(9,9),c(10,Ni,2,0,"th",7)(11,Ri,2,1,"td",10),x(),h(12,11),c(13,Li,2,0,"th",12)(14,$i,2,1,"td",13),x(),h(15,14),c(16,Bi,2,0,"th",15)(17,Vi,3,0,"td",16),x(),c(18,ji,1,0,"tr",17)(19,Gi,1,0,"tr",18),l()),e&2){let t=s();p("dataSource",t.matDataSource),r(18),p("matHeaderRowDef",t.displayHeaderColumns)("matHeaderRowDefSticky",!0),r(1),p("matRowDefColumns",t.displayedColumns)}}var ft=(()=>{let i=class i extends se{constructor(){super(...arguments),this.BASE_DISPLAY_COLUMNS=["icon","outputName","ingredients","sellPrice","unlock"],this._showUtensil=!1,this.cookingUtensilMapping=he(A).getCookingUtensilMapping(),this.sortingDataAccessor=(n,o)=>{let m=this.sortHelper(n.item,o);return m!==null?m:0}}get showUtensil(){return this._showUtensil}set showUtensil(n){this._showUtensil=Ae(n)}setupDataSource(n){super.setupDataSource(n);let o=this.displayedColumns.indexOf("utensil");this._showUtensil&&o===-1?(this.displayedColumns.splice(3,0,"utensil"),this.displayHeaderColumns=this.displayedColumns.filter(m=>m!=="icon")):!this._showUtensil&&o!==-1&&(this.displayedColumns.splice(o,1),this.displayHeaderColumns=this.displayedColumns.filter(m=>m!=="icon"))}};i.\u0275fac=(()=>{let n;return function(m){return(n||(n=H(i)))(m||i)}})(),i.\u0275cmp=g({type:i,selectors:[["app-cooking-table"]],inputs:{showUtensil:"showUtensil"},features:[S],decls:2,vars:1,consts:[["mat-table","","matSort","",3,"dataSource"],["matColumnDef","icon","sticky",""],["class","!pl-2 !pr-0  w-10 text-center icon-col ","mat-cell","",4,"matCellDef"],["matColumnDef","outputName"],["class","backdrop-blur-xl","mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","text-col whitespace-nowrap","mat-cell","",4,"matCellDef"],["matColumnDef","ingredients"],["mat-header-cell","",4,"matHeaderCellDef"],["class","list-col","mat-cell","",4,"matCellDef"],["matColumnDef","unlock"],["class","text-col","mat-cell","",4,"matCellDef"],["matColumnDef","sellPrice"],["class","whitespace-nowrap","mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","text-col !text-right w-[1%]","mat-cell","",4,"matCellDef"],["matColumnDef","utensil"],["class","whitespace-nowrap","mat-header-cell","",4,"matHeaderCellDef"],["class","text-col w-[1%]","mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-cell","",1,"!pl-2","!pr-0","w-10","text-center","icon-col"],[3,"itemName"],["mat-header-cell","","mat-sort-header","",1,"backdrop-blur-xl"],["mat-cell","",1,"text-col","whitespace-nowrap"],["mat-header-cell",""],["mat-cell","",1,"list-col"],[1,"mb-3",3,"itemList"],[1,"text-black","mt-1"],["class","my-5"],[1,"my-5"],[1,"flex","justify-between","mb-1"],["class","flex gap-x-3 items-center"],[1,"ml-2","flex","items-center","whitespace-nowrap"],[1,"flex","gap-x-3","items-center"],[1,"!w-7",3,"itemName"],[1,"whitespace-nowrap"],["class","flex justify-between mb-1"],["mat-cell","",1,"text-col"],["mat-header-cell","","mat-sort-header","",1,"whitespace-nowrap"],["mat-cell","",1,"text-col","!text-right","w-[1%]"],[3,"amount"],["mat-header-cell","",1,"whitespace-nowrap"],["mat-cell","",1,"text-col","w-[1%]"],["class","flex gap-2 items-center",3,"routerLink"],[1,"flex","gap-2","items-center",3,"routerLink"],[1,"ml-1","whitespace-nowrap","underline"],["class","whitespace-nowrap"],["mat-header-row",""],["mat-row",""]],template:function(o,m){o&1&&(a(0,"app-responsive-table"),c(1,qi,20,4,"table",0),l()),o&2&&(r(1),_(1,m.matDataSource?1:-1))},dependencies:[O,I,V,z,re,J,X,ie,Z,W,ne,ee,te,oe,ae,me,pe,L,Te,Se,De,G],encapsulation:2});let e=i;return e})();function Qi(e,i){if(e&1&&(a(0,"div",7),d(1,"Buff: "),a(2,"span",6),d(3),f(4,"addSpacesToPascalCase"),l()()),e&2){let t=s(3);r(3),Re(" ",u(4,3,t.selectedEntityConsumable.buff),", Level ",t.selectedEntityConsumable.level," for ",t.selectedEntityConsumable.duration," seconds ")}}function Yi(e,i){if(e&1&&(a(0,"div"),d(1,"Health: "),a(2,"span",6),d(3),l()(),a(4,"div"),d(5,"Energy: "),a(6,"span",6),d(7),l()(),c(8,Qi,5,5,"div",4)),e&2){let t=s(2);r(3),N(t.selectedEntityConsumable.healthDelta),r(1),$("mb-3",t.selectedEntityConsumable.buff==="None"),r(3),N(t.selectedEntityConsumable.staminaDelta),r(1),_(8,t.selectedEntityConsumable.buff!=="None"?8:-1)}}function zi(e,i){if(e&1&&(a(0,"div",7),d(1," Unlocked: "),a(2,"span",6),d(3),l()()),e&2){let t=s(2);r(3),D("Level ",t.selectedEntity.craftingUnlock.masteryLevel," in ",t.selectedEntity.craftingUnlock.masteryType,"")}}function Ji(e,i){e&1&&C(0,"hr",9)}function Wi(e,i){if(e&1&&(C(0,"app-item-list",5),c(1,Ji,1,0,"hr",8)),e&2){let t=i.$implicit,n=i.$index,o=i.$count;p("itemList",t),r(1),_(1,n!==o-1?1:-1)}}function Xi(e,i){if(e&1&&(a(0,"span",6),d(1," Either of the following"),l(),y(2,Wi,2,2,null,null,T)),e&2){let t=s(2);b(2,t.selectedEntity.eitherOrIngredients)}}function Zi(e,i){if(e&1&&(a(0,"div",13),C(1,"app-item-icon",14),a(2,"span"),d(3),l()()),e&2){let t=s().$implicit;r(1),p("itemName",t.iconName),r(2),N(t.displayName)}}function en(e,i){if(e&1&&(a(0,"div",10),c(1,Zi,4,2,"div",11),a(2,"div",12),d(3),l()(),C(4,"hr")),e&2){let t=i.$implicit,n=s().$implicit;r(1),_(1,t?1:-1),r(2),B("as ",n.key,"")}}function tn(e,i){if(e&1&&(a(0,"div",7),y(1,en,5,2,null,null,T),f(3,"castToMinimalItemArray"),l()),e&2){let t=i.$implicit;b(1,u(3,0,t.value))}}function nn(e,i){if(e&1&&(a(0,"span",6),d(1," The following counting as"),l(),y(2,tn,4,2,"div",4,T),f(4,"keyvalue")),e&2){let t=s(2);b(2,u(4,0,t.selectedEntity.additionsToGenerics))}}function on(e,i){if(e&1){let t=M();a(0,"app-base-item-card",3),w("addedToToDo",function(){E(t);let o=s();return P(o.registerToToDo(o.selectedEntity))}),c(1,Yi,9,5)(2,zi,4,2,"div",4),C(3,"app-item-list",5),f(4,"cookingRecipeIngredients"),c(5,Xi,4,0)(6,nn,5,2),l()}if(e&2){let t=s();p("item",t.selectedEntity.item)("toDoCategory",t.toDoCategory.COOKING_RECIPES)("amount",t.selectedEntity.amount),r(1),_(1,t.selectedEntityConsumable?1:-1),r(1),_(2,t.selectedEntity.craftingUnlock?2:-1),r(1),p("itemList",u(4,8,t.selectedEntity)),r(2),_(5,t.selectedEntity.eitherOrIngredients.length?5:-1),r(1),_(6,t.selectedEntity.additionsToGenerics?6:-1)}}function an(e,i){if(e&1){let t=M();a(0,"app-item-icon",20),w("click",function(){let m=E(t).$implicit,v=s(4);return P(v.showDetails(m))}),l()}if(e&2){let t=i.$implicit,n=s(4);$("selected-icon",(n.selectedEntity==null||n.selectedEntity.item==null?null:n.selectedEntity.item.id)===t.item.id),p("amount",t.amount)("itemName",t.item.iconName)}}function rn(e,i){if(e&1&&(a(0,"div",19),y(1,an,1,4,"app-item-icon",21,T),l()),e&2){let t=s();b(1,t)}}function ln(e,i){if(e&1&&C(0,"app-cooking-table",18),e&2){let t=s();p("dataSource",t)}}function mn(e,i){if(e&1&&c(0,rn,3,0,"div",17)(1,ln,1,1,"app-cooking-table",18),e&2){let t=s(2);_(0,t.showTable?-1:0),r(1),_(1,t.showTable?1:-1)}}function pn(e,i){if(e&1){let t=M();a(0,"mat-tab",15),f(1,"titlecase"),f(2,"spacesToPascalCase"),a(3,"app-data-filter",16),w("showTableChange",function(o){E(t);let m=s();return P(m.showTable=o)}),l(),c(4,mn,2,2),f(5,"async"),l()}if(e&2){let t=i.$implicit,n=s(),o;p("label",n.cookingUtensilMapping[t.toLowerCase()]?n.cookingUtensilMapping[t.toLowerCase()].displayName:u(1,3,u(2,5,t))),r(3),p("showTable",n.showTable),r(1),_(4,(o=u(5,7,n.filteredData$(t)))?4:-1,o)}}var ut=(()=>{let i=class i extends ke{constructor(){super(),this.utensilNames=[],this.toDoCategory=Pe,this.quality=ye,this._consumables=[],this.cookingUtensilMapping=this._database.getCookingUtensilMapping(),this.urlPathFromLabel=n=>{let o=Object.keys(this.cookingUtensilMapping).find(m=>this.cookingUtensilMapping[m].displayName===n);return o||n.toLowerCase().replaceAll(" ","")},Me([this._database.fetchCookingRecipes$(),this._database.fetchConsumables$()]).pipe(Ce(1)).subscribe({next:([n,o])=>{this._consumables=o,this.utensilNames=Object.keys(n),this.activateTabFromRoute(this.utensilNames)}})}filteredData$(n){return this._database.fetchCookingRecipes$().pipe(_e(o=>o[n]),fe(o=>{this.reusedImages=this.getMultipleIconNames(o.map(m=>m.item?.iconName??""))}))}showDetails(n){super.showDetails(n),this.selectedEntityConsumable=this._consumables.find(o=>o.key===n?.item?.id)}registerToToDo(n){this._todo.add(Pe.COOKING_RECIPES,n)}};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=g({type:i,selectors:[["app-cooking"]],features:[S],decls:5,vars:3,consts:[[3,"openDrawer","openDrawerChange"],["hideQualityGrid","","listDetail","",3,"item","toDoCategory","amount"],["mat-stretch-tabs","false",1,"px-2","xl:px-[50px]","w-full",3,"selectedIndex","selectedTabChange"],["hideQualityGrid","","listDetail","",3,"item","toDoCategory","amount","addedToToDo"],["class","mb-3"],[1,"mb-3",3,"itemList"],[1,"text-black"],[1,"mb-3"],["class","my-5"],[1,"my-5"],[1,"flex","justify-between","py-1"],["class","flex gap-x-3 items-center"],[1,"flex","items-center"],[1,"flex","gap-x-3","items-center"],[1,"w-10",3,"itemName"],[3,"label"],[3,"showTable","showTableChange"],["class","grid gap-4 icon-grid"],[3,"dataSource"],[1,"grid","gap-4","icon-grid"],[1,"icon-grid-item",3,"amount","itemName","click"],["class","icon-grid-item",3,"amount","selected-icon","itemName"]],template:function(o,m){o&1&&(a(0,"app-list-detail-container",0),w("openDrawerChange",function(k){return m.openDrawer=k}),c(1,on,7,10,"app-base-item-card",1),a(2,"mat-tab-group",2),w("selectedTabChange",function(k){return m.updateUrl(k)}),y(3,pn,6,9,"mat-tab",15,T),l()()),o&2&&(p("openDrawer",m.openDrawer),r(1),_(1,m.selectedEntity?1:-1),r(1),p("selectedIndex",m.selectedTabIndex),b(3,m.utensilNames))},dependencies:[I,q,j,K,le,Q,Y,ft,R,L,Te,be,Se,De,G],encapsulation:2});let e=i;return e})();var sn=[{path:"",pathMatch:"full",redirectTo:"inventory"},{path:"",component:Xe,children:[{path:"inventory",component:ct,title:"Inventory - Crafting"},{path:"artisan",redirectTo:"artisan/",pathMatch:"full"},{path:"artisan/:tabName",component:Ct,title:"Artisan - Crafting"},{path:"cooking",redirectTo:"cooking/",pathMatch:"full"},{path:"cooking/:tabName",component:ut,title:"Cooking - Crafting"}]}],ht=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=xe({type:i}),i.\u0275inj=ue({imports:[Ee.forChild(sn),Ee]});let e=i;return e})();var xo=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=xe({type:i}),i.\u0275inj=ue({imports:[$e,ht,Je,Ge,qe,Ye]});let e=i;return e})();export{lt as a,_t as b,ft as c,xo as d};
