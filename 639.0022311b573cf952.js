"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[639],{1639:(k,f,c)=>{c.r(f),c.d(f,{CraftingModule:()=>D});var a=c(6895),u=c(5202),r=c(4931),I=c(15),t=c(4650),v=c(2364),_=c(5141);let y=(()=>{class n{constructor(){this.UI_ICONS=I.a}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-crafting"]],decls:6,vars:1,consts:[[1,"h-full","pl-[400px]","py-[60px]"],["routerLink","inventory",3,"uiIcon"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"app-module-sidebar")(2,"app-module-sidebar-item",1),t._uU(3,"Inventory-Crafting "),t.qZA()(),t.TgZ(4,"div"),t._UZ(5,"router-outlet"),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("uiIcon",o.UI_ICONS.CRAFTING))},dependencies:[r.lC,r.rH,v.R,_.z]}),n})();var C=c(1577),x=c(4004),T=c(9969),g=c(9813),p=c(936),h=c(4175);function Z(n,i){if(1&n&&(t.TgZ(0,"div",5),t._UZ(1,"app-item-icon",6),t.TgZ(2,"span"),t._uU(3),t.qZA()()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.Q6J("itemName",e.item.iconName),t.xp6(2),t.Oqu(e.item.displayName)}}function L(n,i){if(1&n&&(t.ynx(0),t.YNc(1,Z,4,2,"div",4),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",e.item)}}function N(n,i){1&n&&(t.ynx(0),t._uU(1," (all the same)"),t.BQk())}function Q(n,i){if(1&n&&(t.TgZ(0,"div",5),t._UZ(1,"app-item-icon",6),t.TgZ(2,"span"),t._uU(3),t.YNc(4,N,2,0,"ng-container",2),t.qZA()()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.Q6J("itemName",e.genericItem.iconName),t.xp6(2),t.hij("",e.genericItem.displayName," "),t.xp6(1),t.Q6J("ngIf",e.shouldBeSameItem)}}function J(n,i){if(1&n&&(t.ynx(0),t.YNc(1,Q,5,3,"div",4),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",e.genericItem)}}function A(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"div",1),t.YNc(2,L,2,1,"ng-container",2),t.YNc(3,J,2,1,"ng-container",2),t.TgZ(4,"div",3),t._uU(5),t.qZA()(),t._UZ(6,"hr"),t.BQk()),2&n){const e=i.$implicit,o=t.oxw();t.xp6(2),t.Q6J("ngIf",!o.isGenericEntry(e)),t.xp6(1),t.Q6J("ngIf",o.isGenericEntry(e)),t.xp6(2),t.Oqu(e.amount)}}let R=(()=>{class n{isGenericEntry(e){return"shouldBeSameItem"in e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-item-list"]],inputs:{itemList:"itemList"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"flex","justify-between","py-1"],[4,"ngIf"],[1,"flex","items-center"],["class","flex gap-x-3 items-center",4,"ngIf"],[1,"flex","gap-x-3","items-center"],[1,"w-10",3,"itemName"]],template:function(e,o){1&e&&t.YNc(0,A,7,3,"ng-container",0),2&e&&t.Q6J("ngForOf",o.itemList)},dependencies:[a.sg,a.O5,g.D]}),n})();function F(n,i){if(1&n&&(t.TgZ(0,"app-base-item-card",1),t._UZ(1,"app-item-list",2),t.qZA()),2&n){const e=t.oxw();t.Q6J("item",e.craftingRecipe.item),t.xp6(1),t.Q6J("itemList",e.itemList)}}let O=(()=>{class n{ngOnChanges(e){let o=e.craftingRecipe?.currentValue;o&&(this.itemList=[...o.ingredients,...o.genericIngredients])}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-inventory-details"]],inputs:{craftingRecipe:"craftingRecipe"},features:[t.TTD],decls:1,vars:1,consts:[[3,"item",4,"ngIf"],[3,"item"],[1,"mb-3",3,"itemList"]],template:function(e,o){1&e&&t.YNc(0,F,2,2,"app-base-item-card",0),2&e&&t.Q6J("ngIf",o.craftingRecipe&&o.craftingRecipe.item)},dependencies:[a.O5,h.T,R]}),n})();function U(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"app-item-icon",8),t.NdJ("click",function(){const l=t.CHM(e).$implicit,m=t.oxw(2);return t.KtG(m.selectedEntity=l)}),t.qZA()}if(2&n){const e=i.$implicit;t.Q6J("itemName",null==e.item?null:e.item.iconName)}}function $(n,i){if(1&n&&(t.TgZ(0,"div",6),t.YNc(1,U,1,1,"app-item-icon",7),t.qZA()),2&n){const e=i.ngIf;t.xp6(1),t.Q6J("ngForOf",e)}}function B(n,i){if(1&n&&t._UZ(0,"app-inventory-details",9),2&n){const e=t.oxw();t.Q6J("craftingRecipe",e.selectedEntity)}}const E=[{path:"",pathMatch:"full",redirectTo:"inventory"},{path:"",component:y,children:[{path:"inventory",component:(()=>{class n{constructor(e){this._database=e,this.recipes$=(0,C.a)([e.fetchCraftingRecipes$(),e.fetchItems$(),e.fetchTagBasedItems$()]).pipe((0,x.U)(([o,d,l])=>(o.forEach(m=>{m.item=d.find(s=>s.id===m.key.toLowerCase()),m.genericIngredients.forEach(s=>s.genericItem=l.find(M=>M.key===s.key))}),o)))}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(T.k))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-inventory"]],decls:7,vars:4,consts:[[1,"flex"],["animationDuration","0",1,"px-[50px]","block"],["label","All"],["class","grid gap-4 grid-cols-8",4,"ngIf"],[1,"flex-shrink-0","w-[600px]","px-10"],["class","sticky top-0",3,"craftingRecipe",4,"ngIf"],[1,"grid","gap-4","grid-cols-8"],["class","icon-grid-item",3,"itemName","click",4,"ngFor","ngForOf"],[1,"icon-grid-item",3,"itemName","click"],[1,"sticky","top-0",3,"craftingRecipe"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"mat-tab-group",1)(2,"mat-tab",2),t.YNc(3,$,2,1,"div",3),t.ALo(4,"async"),t.qZA()(),t.TgZ(5,"div",4),t.YNc(6,B,1,1,"app-inventory-details",5),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("ngIf",t.lcZ(4,2,o.recipes$)),t.xp6(3),t.Q6J("ngIf",o.selectedEntity))},dependencies:[a.sg,a.O5,g.D,p.SP,p.uX,O,a.Ov]}),n})()}]}];let Y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.Bz.forChild(E),r.Bz]}),n})(),D=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[a.ez,Y,u.m,p.Nh]}),n})()}}]);