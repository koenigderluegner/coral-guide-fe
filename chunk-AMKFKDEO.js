import{s as H,t as J}from"./chunk-7S2CCX5F.js";import{$ as k,Ca as u,Ea as _,Ha as p,Ia as x,J as E,Ja as C,K as O,Ka as h,L as S,La as a,Le as L,M as G,Ma as l,Na as I,P as f,Pd as W,Q as g,Ra as w,Rb as K,Ta as v,Ua as m,Ya as A,fb as d,gb as N,gf as j,hb as F,if as z,kb as V,la as r,lb as D,mb as R,ob as P,oc as M,qb as $,sb as y,tb as b,ua as q,ya as B}from"./chunk-5LEGSPOZ.js";function Q(t,n){if(t&1&&(a(0,"div",4),d(1),l()),t&2){let e=m();r(),F(" Reward: ",e.offeringAltar().offeringGroupRewardText," ")}}function U(t,n){if(t&1){let e=w();a(0,"div",6),v("click",function(){let o=f(e).$implicit,c=m(2);return g(c.activeOffering=o)}),I(1,"img",7),a(2,"div",8),d(3),l()()}if(t&2){let e=n.$implicit,i=m(2);_("bg-merino-300",(i.activeOffering==null?null:i.activeOffering.title)===e.title),r(),A("alt","",e.title," offering icon")("ngSrc","",i.bundleAssetPath()+e.imageName,".webp"),r(2),N(e.title)}}function X(t,n){if(t&1&&(a(0,"div",5),C(1,U,4,5,"div",9,x),l()),t&2){let e=m();r(),h(e.offeringAltar().offerings)}}var Y=t=>[t];function Z(t,n){if(t&1&&I(0,"app-offerings-table",3),t&2){let e=m();u("dataSource",$(1,Y,e.offeringAltar()))}}function ee(t,n){if(t&1){let e=w();a(0,"app-item-icon",12),v("click",function(){let o=f(e).$implicit,c=m(2);return g(c.showDetails(o.item))}),y(1,"entityKey"),l()}if(t&2){let e=n.$implicit,i=m(2);_("selected-icon",i.selectedEntity()&&b(1,4,i.selectedEntity())===e.item.id),u("amount",e.amount)("itemName",e.item.iconName)}}function te(t,n){if(t&1){let e=w();a(0,"app-item-icon",13),v("click",function(){let o=f(e).$implicit,c=m(2);return g(c.showDetails(o))}),y(1,"entityKey"),y(2,"entityKey"),l()}if(t&2){let e=n.$implicit,i=m(2);_("selected-icon",i.selectedEntity()&&b(1,5,i.selectedEntity())===b(2,7,e.item)),u("amount",e.amount)("itemName",e.item.iconName)("quality",e.quality)}}function ie(t,n){if(t&1&&(a(0,"div",10),d(1," Rewards: "),l(),a(2,"div",11),C(3,ee,2,6,"app-item-icon",14,x),l(),a(5,"div",10),d(6),l(),a(7,"div",11),C(8,te,3,9,"app-item-icon",15,x),l()),t&2){let e=m();r(3),h(e.activeOffering.rewards.items),r(3),F(" ",e.activeOffering.numOfItemRequired===-1?"All":e.activeOffering.numOfItemRequired," of the following items are required: "),r(2),h(e.activeOffering.requiredItems)}}var ue=(()=>{let n=class n{constructor(){this.offeringAltar=O.required(),this.selectedEntity=O.required(),this.selected=new E,this.useBeta=k(M).getSettings().useBeta,this.bundleAssetPath=q(`assets/${this.useBeta?"beta":"live"}/items/icons/`),this.showTable=!1}showDetails(i){i?this.entryForToDo="item"in i?{itemEntry:i.item,amount:i.amount,quality:i.quality}:{itemEntry:i}:this.entryForToDo=void 0,i&&"amount"in i?this.selected.emit(i.item):this.selected.emit(i)}};n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=G({type:n,selectors:[["app-offering-group"]],inputs:{offeringAltar:[S.SignalBased,"offeringAltar"],selectedEntity:[S.SignalBased,"selectedEntity"]},outputs:{selected:"selected"},standalone:!0,features:[P],decls:5,vars:5,consts:[[3,"showTable","showTableChange"],["class","bg-merino rounded-lg mb-4 text-lg font-semibold p-4"],["class","grid grid-cols-2 md:grid-cols-3 gap-4"],[3,"dataSource"],[1,"bg-merino","rounded-lg","mb-4","text-lg","font-semibold","p-4"],[1,"grid","grid-cols-2","md:grid-cols-3","gap-4"],[1,"rounded-lg","bg-merino","flex","flex-col","items-center","gap-4","px-4","py-8","hover:bg-merino-200",3,"click"],["height","128","width","128",3,"alt","ngSrc"],[1,"text-lg","font-semibold"],["class","rounded-lg bg-merino flex flex-col items-center gap-4 px-4 py-8 hover:bg-merino-200",3,"bg-merino-300"],[1,"bg-merino","rounded-lg","mb-4","text-lg","font-semibold","p-4","my-8"],[1,"grid","gap-4","icon-grid","mt-8"],[1,"icon-grid-item",3,"amount","itemName","click"],[1,"icon-grid-item",3,"amount","itemName","quality","click"],["class","icon-grid-item",3,"amount","selected-icon","itemName"],["class","icon-grid-item",3,"amount","selected-icon","itemName","quality"]],template:function(s,o){s&1&&(a(0,"app-data-filter",0),R("showTableChange",function(T){return D(o.showTable,T)||(o.showTable=T),T}),l(),B(1,Q,2,1,"div",1)(2,X,3,0,"div",2)(3,Z,1,3,"app-offerings-table",3)(4,ie,10,1)),s&2&&(V("showTable",o.showTable),r(),p(1,o.offeringAltar().offeringGroupRewardText?1:-1),r(),p(2,o.showTable?-1:2),r(),p(3,o.showTable?3:-1),r(),p(4,o.activeOffering&&!o.showTable?4:-1))},dependencies:[J,H,K,z,W,L,j],encapsulation:2});let t=n;return t})();export{ue as a};
