"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[152],{7359:(I,g,a)=>{a.d(g,{e:()=>x});var e=a(5879),y=a(6814),_=a(2787),p=a(7251),l=a(6945);function c(t,r){1&t&&(e.ynx(0),e._uU(1,"Increases max stamina"),e.BQk())}function u(t,r){if(1&t&&(e.ynx(0),e._uU(1),e._UZ(2,"app-item-icon",1),e._uU(3),e.BQk()),2&t){const i=e.oxw();let f;e.xp6(1),e.hij(" Adds ",(null!==(f=i.effect.meta.quantity)&&void 0!==f?f:1)>1?i.effect.meta.quantity+"x ":""," "),e.xp6(1),e.Q6J("itemName",i.effect.meta.item.iconName),e.xp6(1),e.hij(" ",i.effect.meta.item.displayName," to inventory\n")}}function d(t,r){if(1&t&&(e.TgZ(0,"div"),e._uU(1," Unlocks "),e._UZ(2,"app-item-icon",2),e._uU(3),e.qZA()),2&t){const i=e.oxw();e.xp6(2),e.Q6J("itemName",i.effect.meta.item.iconName),e.xp6(1),e.hij(" ",i.effect.meta.item.displayName," crafting recipe\n")}}function q(t,r){if(1&t&&(e.TgZ(0,"div"),e._uU(1," Unlocks "),e._UZ(2,"app-item-icon",2),e._uU(3),e.qZA()),2&t){const i=e.oxw();e.xp6(2),e.Q6J("itemName",i.effect.meta.item.iconName),e.xp6(1),e.hij(" ",i.effect.meta.item.displayName," cooking recipe\n")}}function C(t,r){if(1&t&&(e.ynx(0),e._uU(1),e.BQk()),2&t){const i=e.oxw();e.xp6(1),e.hij(" Unlocks ",i.effect.meta.utensil," utensil\n")}}function Q(t,r){if(1&t&&(e.ynx(0),e._uU(1),e.BQk()),2&t){const i=e.oxw();e.xp6(1),e.hij(" Sets quests fact '",i.effect.meta.factName,"'\n")}}function U(t,r){if(1&t&&(e.ynx(0),e._uU(1),e.BQk()),2&t){const i=e.oxw();e.xp6(1),e.hij(" Unlocks 1 skill point for ",i.effect.meta.mastery," mastery\n")}}function N(t,r){if(1&t&&(e.TgZ(0,"div"),e._uU(1," Adds "),e._UZ(2,"app-money",3),e.qZA()),2&t){const i=e.oxw();e.xp6(2),e.Q6J("amount",i.effect.meta.amount)}}function v(t,r){if(1&t&&(e.ynx(0),e._UZ(1,"app-item-icon",2),e._uU(2),e.BQk()),2&t){const i=e.oxw(2);e.xp6(1),e.Q6J("itemName",i.effect.meta.item.iconName),e.xp6(1),e.hij(" ",i.effect.meta.item.displayName," ")}}function T(t,r){if(1&t&&(e.ynx(0),e._uU(1),e.BQk()),2&t){const i=e.oxw(2);e.xp6(1),e.hij(" items of category ",i.effect.meta.category," ")}}function E(t,r){if(1&t&&(e.TgZ(0,"div"),e._uU(1),e.YNc(2,v,3,2,"ng-container",0),e.YNc(3,T,2,1,"ng-container",0),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.hij(" Removes ",i.effect.meta.amount,"x "),e.xp6(1),e.Q6J("ngIf",i.hasMinimalItem(i.effect.meta)),e.xp6(1),e.Q6J("ngIf",!i.hasMinimalItem(i.effect.meta))}}const h=function(t){return{selectedId:t}},P=function(){return["/journal","notes","letters"]};function k(t,r){if(1&t&&(e.ynx(0),e._uU(1," Sends mail '"),e.TgZ(2,"a",4),e._uU(3),e.qZA(),e._uU(4),e.BQk()),2&t){const i=e.oxw();e.xp6(2),e.Q6J("queryParams",e.VKq(4,h,i.effect.meta.mail.mailId))("routerLink",e.DdM(6,P)),e.xp6(1),e.Oqu(i.effect.meta.mail.title),e.xp6(1),e.hij("' ",i.effect.meta.dayDelay>0?" after "+i.effect.meta.dayDelay+" day(s)":"","\n")}}function B(t,r){if(1&t&&(e.ynx(0),e._uU(1),e.BQk()),2&t){const i=e.oxw();e.xp6(1),e.hij(" Activates quest '",i.effect.meta.questId,"'\n")}}function n(t,r){if(1&t&&(e.ynx(0),e._uU(1),e.BQk()),2&t){const i=e.oxw();e.xp6(1),e.hij(" Completes quest '",i.effect.meta.questId,"'\n")}}function m(t,r){if(1&t&&(e.ynx(0),e._uU(1),e.BQk()),2&t){const i=e.oxw();e.xp6(1),e.hij(" Updates schedules of NPCs: '",i.effect.meta.npcIds.join(", "),"'\n")}}function o(t,r){if(1&t&&(e.ynx(0),e._uU(1),e.BQk()),2&t){const i=e.oxw();let f;e.xp6(1),e.AsE(" Sets state of '",null!==(f=i.effect.meta.customName)&&void 0!==f?f:i.effect.meta.id,"' to '",i.effect.meta.state,"'\n")}}let x=(()=>{var t;class r{hasMinimalItem(f){return"item"in f}}return(t=r).\u0275fac=function(f){return new(f||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-effect"]],inputs:{effect:"effect"},decls:14,vars:14,consts:[[4,"ngIf"],[1,"!w-7","-my-1","translate-y-1","!inline-block",3,"itemName"],[1,"!w-7","ml-1","-my-1","translate-y-1","!inline-block",3,"itemName"],[1,"!w-7","-my-1","translate-y-1","ml-1","!inline-block",3,"amount"],[1,"underline",3,"queryParams","routerLink"]],template:function(f,s){1&f&&(e.YNc(0,c,2,0,"ng-container",0),e.YNc(1,u,4,3,"ng-container",0),e.YNc(2,d,4,2,"div",0),e.YNc(3,q,4,2,"div",0),e.YNc(4,C,2,1,"ng-container",0),e.YNc(5,Q,2,1,"ng-container",0),e.YNc(6,U,2,1,"ng-container",0),e.YNc(7,N,3,1,"div",0),e.YNc(8,E,4,3,"div",0),e.YNc(9,k,5,7,"ng-container",0),e.YNc(10,B,2,1,"ng-container",0),e.YNc(11,n,2,1,"ng-container",0),e.YNc(12,m,2,1,"ng-container",0),e.YNc(13,o,2,2,"ng-container",0)),2&f&&(e.Q6J("ngIf","BoostMaxStamina"===s.effect.type),e.xp6(1),e.Q6J("ngIf","AddItemToInventory"===s.effect.type),e.xp6(1),e.Q6J("ngIf","UnlockCraftingRecipe"===s.effect.type),e.xp6(1),e.Q6J("ngIf","UnlockCookingRecipe"===s.effect.type),e.xp6(1),e.Q6J("ngIf","UnlockCookingUtensil"===s.effect.type),e.xp6(1),e.Q6J("ngIf","SetQuestFactValue"===s.effect.type),e.xp6(1),e.Q6J("ngIf","ConsumeItemMastery"===s.effect.type),e.xp6(1),e.Q6J("ngIf","VaryMoney"===s.effect.type),e.xp6(1),e.Q6J("ngIf","RemoveItemFromInventory"===s.effect.type),e.xp6(1),e.Q6J("ngIf","SendMailToPlayer"===s.effect.type),e.xp6(1),e.Q6J("ngIf","SetQuestActive"===s.effect.type),e.xp6(1),e.Q6J("ngIf","SetQuestCompleted"===s.effect.type),e.xp6(1),e.Q6J("ngIf","UpdateNpcSchedule"===s.effect.type),e.xp6(1),e.Q6J("ngIf","ChangeObjectState"===s.effect.type))},dependencies:[y.O5,_.rH,p.D,l.y],encapsulation:2}),r})()},5165:(I,g,a)=>{a.d(g,{H:()=>_});var e=a(5879),y=a(9729);let _=(()=>{var p;class l{constructor(u){this._settings=u,this._setClass=!0,this.version=this._settings.getSettings().useBeta?"beta":"live"}}return(p=l).\u0275fac=function(u){return new(u||p)(e.Y36(y.g))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-npc-portrait"]],hostVars:2,hostBindings:function(u,d){2&u&&e.ekj("npc-portrait",d._setClass)},inputs:{portraitName:"portraitName",npcKey:"npcKey"},decls:1,vars:3,consts:[["alt","","loading","lazy","onerror","this.onerror=null;this.src='assets/ui/images/placeholder.png'",3,"src"]],template:function(u,d){1&u&&e._UZ(0,"img",0),2&u&&e.cQ8("src","assets/",d.version,"/portraits/",d.npcKey,"/",d.portraitName,".webp",e.LSH)},encapsulation:2}),l})()},3613:(I,g,a)=>{a.d(g,{L:()=>B});var e=a(5879),y=a(6814),_=a(7251),p=a(7405);function l(n,m){if(1&n&&(e.TgZ(0,"div"),e._uU(1," Achievement "),e._UZ(2,"app-item-icon",1),e._uU(3),e.qZA()),2&n){const o=e.oxw();e.xp6(2),e.Q6J("itemName",o.requirement.meta.achievement.iconName),e.xp6(1),e.hij(" ",o.requirement.meta.achievement.title," unlocked\n")}}function c(n,m){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const o=e.oxw();e.xp6(1),e.hij(" Mount ",o.requirement.meta.inverted?"not ":""," acquired\n")}}function u(n,m){1&n&&(e.ynx(0),e._uU(1," Game in developer editor\n"),e.BQk())}function d(n,m){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const o=e.oxw();e.xp6(1),e.hij(" Reached ",o.requirement.meta.expectedHeartLevel," hearts with any NPC\n")}}function q(n,m){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const o=e.oxw();e.xp6(1),e.hij(" Viewed ",o.requirement.meta.cutsceneTopic," cutscene\n")}}function C(n,m){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const o=e.oxw();e.xp6(1),e.hij(" Marriage ",o.requirement.meta.inverted?"hasn't been ":"","proposed\n")}}function Q(n,m){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const o=e.oxw();e.xp6(1),e.hij(" Unlocked ",o.requirement.meta.types," giants\n")}}function U(n,m){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const o=e.oxw();e.xp6(1),e.hij(" Quest fact ",o.requirement.meta.factName," set\n")}}function N(n,m){if(1&n&&(e.TgZ(0,"div"),e._uU(1," Acquired special item "),e._UZ(2,"app-item-icon",1),e._uU(3),e.qZA()),2&n){const o=e.oxw();e.xp6(2),e.Q6J("itemName",o.requirement.meta.item.iconName),e.xp6(1),e.hij(" ",o.requirement.meta.item.displayName,"\n")}}function v(n,m){if(1&n&&(e.ynx(0),e._uU(1),e.ALo(2,"ingameDate"),e.ALo(3,"ingameDate"),e.BQk()),2&n){const o=e.oxw();e.xp6(1),e.lnq(" Date is ",o.requirement.meta.inverted?"not ":"","between ",e.lcZ(2,3,o.requirement.meta.from)," and ",e.lcZ(3,5,o.requirement.meta.to),"\n")}}function T(n,m){if(1&n&&(e.TgZ(0,"div"),e._uU(1),e._UZ(2,"app-item-icon",2),e._uU(3),e.qZA()),2&n){const o=e.oxw();e.xp6(1),e.hij(" Has ",o.requirement.meta.amount,"x "),e.xp6(1),e.Q6J("itemName",o.requirement.meta.item.iconName),e.xp6(1),e.AsE(" ",o.requirement.meta.item.displayName,"",o.requirement.meta.requiredQuality?" of "+o.requirement.meta.requiredQuality+" quality":""," in inventory\n")}}function E(n,m){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const o=e.oxw();e.xp6(1),e.AsE(" Has ",o.requirement.meta.amount,"x items of category ",o.requirement.meta.categoryName," in inventory\n")}}function h(n,m){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const o=e.oxw();let x;e.xp6(1),e.AsE(" State of '",null!==(x=o.requirement.meta.customName)&&void 0!==x?x:o.requirement.meta.id,"' is '",o.requirement.meta.state,"'\n")}}function P(n,m){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const o=e.oxw();e.xp6(1),e.hij(" Quest '",o.requirement.meta.questId,"' is active\n")}}function k(n,m){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const o=e.oxw();e.xp6(1),e.hij(" Temple has reached level ",o.requirement.meta.level,"\n")}}let B=(()=>{var n;class m{}return(n=m).\u0275fac=function(x){return new(x||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-requirements"]],inputs:{requirement:"requirement"},decls:15,vars:15,consts:[[4,"ngIf"],[1,"!w-7","-my-1","translate-y-1","ml-1","mr-0.5","!inline-block",3,"itemName"],[1,"!w-7","ml-1","-my-1","translate-y-1","mr-0.5","!inline-block",3,"itemName"]],template:function(x,t){1&x&&(e.YNc(0,l,4,2,"div",0),e.YNc(1,c,2,1,"ng-container",0),e.YNc(2,u,2,0,"ng-container",0),e.YNc(3,d,2,1,"ng-container",0),e.YNc(4,q,2,1,"ng-container",0),e.YNc(5,C,2,1,"ng-container",0),e.YNc(6,Q,2,1,"ng-container",0),e.YNc(7,U,2,1,"ng-container",0),e.YNc(8,N,4,2,"div",0),e.YNc(9,v,4,7,"ng-container",0),e.YNc(10,T,4,4,"div",0),e.YNc(11,E,2,2,"ng-container",0),e.YNc(12,h,2,2,"ng-container",0),e.YNc(13,P,2,1,"ng-container",0),e.YNc(14,k,2,1,"ng-container",0)),2&x&&(e.Q6J("ngIf","IsAchievementCompleted"===t.requirement.type),e.xp6(1),e.Q6J("ngIf","MountAcquired"===t.requirement.type),e.xp6(1),e.Q6J("ngIf","EditorOnly"===t.requirement.type),e.xp6(1),e.Q6J("ngIf","CountNPCHeartLevel"===t.requirement.type),e.xp6(1),e.Q6J("ngIf","IsCutsceneTriggered"===t.requirement.type),e.xp6(1),e.Q6J("ngIf","MarriageHasProposed"===t.requirement.type),e.xp6(1),e.Q6J("ngIf","IsGiantUnlocked"===t.requirement.type),e.xp6(1),e.Q6J("ngIf","QuestFact"===t.requirement.type),e.xp6(1),e.Q6J("ngIf","SpecialItem"===t.requirement.type),e.xp6(1),e.Q6J("ngIf","DateSeasonRange"===t.requirement.type),e.xp6(1),e.Q6J("ngIf","ItemInInventory"===t.requirement.type),e.xp6(1),e.Q6J("ngIf","ItemWithCategoryInInventory"===t.requirement.type),e.xp6(1),e.Q6J("ngIf","ObjectState"===t.requirement.type),e.xp6(1),e.Q6J("ngIf","QuestActive"===t.requirement.type),e.xp6(1),e.Q6J("ngIf","TempleLevel"===t.requirement.type))},dependencies:[y.O5,_.D,p.h],encapsulation:2}),m})()},7405:(I,g,a)=>{a.d(g,{h:()=>y});var e=a(5879);let y=(()=>{var _;class p{transform(c){return`${c.day} ${c.season}`+(c.year<0?"":`, Year ${c.year}`)}}return(_=p).\u0275fac=function(c){return new(c||_)},_.\u0275pipe=e.Yjl({name:"ingameDate",type:_,pure:!0}),p})()},1173:(I,g,a)=>{a.d(g,{W:()=>y});var e=a(5879);let y=(()=>{var _;class p{transform(c){return`${c.hours.toString().padStart(2,"0")}:${c.minutes.toString().padStart(2,"0")}`}}return(_=p).\u0275fac=function(c){return new(c||_)},_.\u0275pipe=e.Yjl({name:"ingameTime",type:_,pure:!0}),p})()}}]);