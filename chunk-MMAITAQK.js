import{s as j,t as z}from"./chunk-NXT6GZDD.js";import{Ba as g,Ea as p,Fa as _,Ga as x,Ha as C,Ia as a,Ja as l,Ka as O,Le as M,N as E,Nd as K,Oa as h,P as G,Pb as P,Qa as w,Ra as m,V as f,Va as S,W as d,ba as T,cb as s,da as k,db as A,eb as I,hb as B,ib as N,if as W,ja as r,jb as V,kf as L,lb as D,mc as $,nb as R,pb as v,qa as q,qb as y,va as F,za as u}from"./chunk-2KIP47FU.js";var H=t=>[t];function J(t,n){if(t&1&&(a(0,"div",1),s(1),l()),t&2){let e=m();r(),I(" Reward: ",e.offeringAltar().offeringGroupRewardText," ")}}function Q(t,n){if(t&1){let e=h();a(0,"div",5),w("click",function(){let c=f(e).$implicit,o=m(2);return d(o.activeOffering=c)}),O(1,"img",6),a(2,"div",7),s(3),l()()}if(t&2){let e=n.$implicit,i=m(2);g("bg-merino-300",(i.activeOffering==null?null:i.activeOffering.title)===e.title),r(),S("alt","",e.title," offering icon"),S("ngSrc","",i.bundleAssetPath()+e.imageName,".webp"),r(2),A(e.title)}}function U(t,n){if(t&1&&(a(0,"div",2),x(1,Q,4,7,"div",4,_),l()),t&2){let e=m();r(),C(e.offeringAltar().offerings)}}function X(t,n){if(t&1&&O(0,"app-offerings-table",3),t&2){let e=m();u("dataSource",R(1,H,e.offeringAltar()))}}function Y(t,n){if(t&1){let e=h();a(0,"app-item-icon",12),v(1,"entityKey"),w("click",function(){let c=f(e).$implicit,o=m(2);return d(o.showDetails(c.item))}),l()}if(t&2){let e=n.$implicit,i=m(2);g("selected-icon",i.selectedEntity()&&y(1,4,i.selectedEntity())===e.item.id),u("amount",e.amount)("itemName",e.item.iconName)}}function Z(t,n){if(t&1){let e=h();a(0,"app-item-icon",13),v(1,"entityKey"),v(2,"entityKey"),w("click",function(){let c=f(e).$implicit,o=m(2);return d(o.showDetails(c))}),l()}if(t&2){let e=n.$implicit,i=m(2);g("selected-icon",i.selectedEntity()&&y(1,5,i.selectedEntity())===y(2,7,e.item)),u("amount",e.amount)("itemName",e.item.iconName)("quality",e.quality)}}function ee(t,n){if(t&1&&(a(0,"div",8),s(1," Rewards: "),l(),a(2,"div",9),x(3,Y,2,6,"app-item-icon",10,_),l(),a(5,"div",8),s(6),l(),a(7,"div",9),x(8,Z,3,9,"app-item-icon",11,_),l()),t&2){let e=m();r(3),C(e.activeOffering.rewards.items),r(3),I(" ",e.activeOffering.numOfItemRequired===-1?"All":e.activeOffering.numOfItemRequired," of the following items are required: "),r(2),C(e.activeOffering.requiredItems)}}var ue=(()=>{let n=class n{constructor(){this.offeringAltar=T.required(),this.selectedEntity=T.required(),this.selected=new k,this.showTable=!1,this.useBeta=E($).getSettings().useBeta,this.bundleAssetPath=q(`assets/${this.useBeta?"beta":"live"}/items/icons/`)}showDetails(i){i?this.entryForToDo="item"in i?{itemEntry:i.item,amount:i.amount,quality:i.quality}:{itemEntry:i}:this.entryForToDo=void 0,i&&"amount"in i?this.selected.emit(i.item):this.selected.emit(i)}};n.\u0275fac=function(c){return new(c||n)},n.\u0275cmp=G({type:n,selectors:[["app-offering-group"]],inputs:{offeringAltar:[1,"offeringAltar"],selectedEntity:[1,"selectedEntity"]},outputs:{selected:"selected"},standalone:!0,features:[D],decls:5,vars:5,consts:[[3,"showTableChange","showTable"],[1,"bg-merino","rounded-lg","mb-4","text-lg","font-semibold","p-4"],[1,"grid","grid-cols-2","md:grid-cols-3","gap-4"],[3,"dataSource"],[1,"rounded-lg","bg-merino","flex","flex-col","items-center","gap-4","px-4","py-8","hover:bg-merino-200",3,"bg-merino-300"],[1,"rounded-lg","bg-merino","flex","flex-col","items-center","gap-4","px-4","py-8","hover:bg-merino-200",3,"click"],["height","128","width","128",3,"alt","ngSrc"],[1,"text-lg","font-semibold"],[1,"bg-merino","rounded-lg","mb-4","text-lg","font-semibold","p-4","my-8"],[1,"icon-grid","mt-8"],[1,"icon-grid-item",3,"amount","selected-icon","itemName"],[1,"icon-grid-item",3,"amount","selected-icon","itemName","quality"],[1,"icon-grid-item",3,"click","amount","itemName"],[1,"icon-grid-item",3,"click","amount","itemName","quality"]],template:function(c,o){c&1&&(a(0,"app-data-filter",0),V("showTableChange",function(b){return N(o.showTable,b)||(o.showTable=b),b}),l(),F(1,J,2,1,"div",1)(2,U,3,0,"div",2)(3,X,1,3,"app-offerings-table",3)(4,ee,10,1)),c&2&&(B("showTable",o.showTable),r(),p(o.offeringAltar().offeringGroupRewardText?1:-1),r(),p(o.showTable?-1:2),r(),p(o.showTable?3:-1),r(),p(o.activeOffering&&!o.showTable?4:-1))},dependencies:[z,j,P,L,K,M,W],encapsulation:2});let t=n;return t})();export{ue as a};
