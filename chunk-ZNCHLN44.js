import{f as j,g as z,h as G,i as J,j as K,k as Q,l as R,m as X,t as Z}from"./chunk-7S2CCX5F.js";import"./chunk-TFTB324J.js";import"./chunk-JS6CQQZJ.js";import"./chunk-ZBO7XF7X.js";import{Ca as s,Ea as k,Ha as c,Ia as b,Ja as D,Jb as H,Ka as S,La as m,Le as A,M as v,Ma as l,Na as d,Nd as L,Oa as V,P as C,Pa as N,Pb as $,Pd as M,Q as u,Ra as T,Sd as O,Ta as P,Ua as a,fb as h,gb as F,hb as B,if as Y,kb as f,ke as q,la as r,lb as w,mb as g,ob as W,sb as y,tb as I,wa as U,ya as _}from"./chunk-5LEGSPOZ.js";function ee(e,n){if(e&1&&d(0,"app-shop-item-process-data-details",2),e&2){let t=a();s("itemProcessData",t.selectedProcessEntity)}}function te(e,n){if(e&1&&d(0,"app-shop-item-data-details",3),e&2){let t=a();s("shopItemData",t.selectedEntity)}}function ie(e,n){if(e&1&&d(0,"app-item-upgrade-details",4),e&2){let t=a();s("itemUpgradeData",t.selectedItemUpgrade)}}function ne(e,n){e&1&&d(0,"app-opening-hours",8),e&2&&s("openingHours",n)}function oe(e,n){if(e&1&&(_(0,ne,1,1,"app-opening-hours",8),y(1,"async")),e&2){let t=a(),i;c(0,(i=I(1,1,t.openingHours$))?0:-1,i)}}function ae(e,n){if(e&1){let t=T();m(0,"app-item-icon",14),P("click",function(){let o=C(t).$implicit,x=a(4);return u(x.showDetails(o))}),l()}if(e&2){let t=n.$implicit,i=a(4);k("selected-icon",(i.selectedEntity==null||i.selectedEntity.item==null?null:i.selectedEntity.item.id)===t.item.id),s("itemName",t.item.iconName)}}function re(e,n){if(e&1&&(m(0,"div",13),D(1,ae,1,3,"app-item-icon",15,b),l()),e&2){let t=a();r(),S(t)}}function pe(e,n){if(e&1&&d(0,"app-shop-item-data-table",12),e&2){let t=a();s("dataSource",t)}}function ce(e,n){if(e&1){let t=T();m(0,"app-data-filter",10),g("showTableChange",function(p){C(t);let o=a(2);return w(o.showTable,p)||(o.showTable=p),u(p)}),l(),_(1,re,3,0,"div",11)(2,pe,1,1,"app-shop-item-data-table",12)}if(e&2){let t=a(2);f("showTable",t.showTable),r(),c(1,t.showTable?-1:1),r(),c(2,t.showTable?2:-1)}}function le(e,n){if(e&1&&(m(0,"h2",9),h(1,"Stock list"),l(),_(2,ce,3,3),y(3,"async")),e&2){let t=a(),i;r(2),c(2,(i=I(3,1,t.shopItemData$))?2:-1,i)}}function me(e,n){if(e&1){let t=T();m(0,"app-item-icon",14),P("click",function(){let o=C(t).$implicit,x=a(4);return u(x.showProcessDetails(o))}),l()}if(e&2){let t=n.$implicit,i=a(4);k("selected-icon",(i.selectedProcessEntity==null||i.selectedProcessEntity.input==null?null:i.selectedProcessEntity.input.id)===t.input.id),s("itemName",t.input.iconName)}}function se(e,n){if(e&1&&(m(0,"div",13),D(1,me,1,3,"app-item-icon",15,b),l()),e&2){let t=a();r(),S(t)}}function _e(e,n){if(e&1&&d(0,"app-shop-item-process-table",12),e&2){let t=a();s("dataSource",t)}}function de(e,n){if(e&1){let t=T();m(0,"app-data-filter",10),g("showTableChange",function(p){C(t);let o=a(2);return w(o.showProcessingTable,p)||(o.showProcessingTable=p),u(p)}),l(),_(1,se,3,0,"div",11)(2,_e,1,1,"app-shop-item-process-table",12)}if(e&2){let t=a(2);f("showTable",t.showProcessingTable),r(),c(1,t.showProcessingTable?-1:1),r(),c(2,t.showProcessingTable?2:-1)}}function Ce(e,n){if(e&1&&(m(0,"h2",9),h(1,"Item processing"),l(),_(2,de,3,3),y(3,"async")),e&2){let t=a(),i;r(2),c(2,(i=I(3,1,t.itemProcessing$))?2:-1,i)}}function ue(e,n){if(e&1){let t=T();m(0,"app-item-icon",16),P("click",function(){let o=C(t).$implicit,x=a(4);return u(x.showItemUpgradeDetails(o))}),l()}if(e&2){let t=n.$implicit,i=a(4);k("selected-icon",(i.selectedItemUpgrade==null||i.selectedItemUpgrade.item==null?null:i.selectedItemUpgrade.item.id)===t.item.id),s("itemName",t.item.iconName)("quality",t.level)}}function Te(e,n){if(e&1&&(m(0,"div",13),D(1,ue,1,4,"app-item-icon",17,b),l()),e&2){let t=a();r(),S(t)}}function xe(e,n){if(e&1&&d(0,"app-item-upgrade-table",12),e&2){let t=a();s("dataSource",t)}}function he(e,n){if(e&1){let t=T();m(0,"app-data-filter",10),g("showTableChange",function(p){C(t);let o=a(2);return w(o.showPItemUpgradeTable,p)||(o.showPItemUpgradeTable=p),u(p)}),l(),_(1,Te,3,0,"div",11)(2,xe,1,1,"app-item-upgrade-table",12)}if(e&2){let t=a(2);f("showTable",t.showPItemUpgradeTable),r(),c(1,t.showPItemUpgradeTable?-1:1),r(),c(2,t.showPItemUpgradeTable?2:-1)}}function fe(e,n){if(e&1&&(m(0,"h2",9),h(1),l(),_(2,he,3,3),y(3,"async")),e&2){let t=a(),i;r(),F(t.upgradeHeaderText),r(),c(2,(i=I(3,2,t.itemUpgrade$))?2:-1,i)}}var He=(()=>{let n=class n extends j{constructor(){super(),this.shopName="taco-truck",this.shopItemData$=this._database.fetchShopItemData$(this.shopName)}};n.\u0275fac=function(p){return new(p||n)},n.\u0275cmp=v({type:n,selectors:[["app-taco-truck"]],standalone:!0,features:[U,W],decls:14,vars:10,consts:[[3,"openDrawer","openDrawerChange"],["listDetail",""],[3,"itemProcessData"],[3,"shopItemData"],[3,"itemUpgradeData"],[1,"px-2","xl:px-[50px]","w-full"],[1,"mb-4","font-semibold","text-3xl","text-black","flex","items-center","gap-x-4"],[3,"uiIcon"],[3,"openingHours"],[1,"mt-6","mb-3","font-semibold","text-2xl","text-white"],[3,"showTable","showTableChange"],["class","grid gap-4 icon-grid"],[3,"dataSource"],[1,"grid","gap-4","icon-grid"],[1,"icon-grid-item",3,"itemName","click"],["class","icon-grid-item",3,"selected-icon","itemName"],[1,"icon-grid-item",3,"itemName","quality","click"],["class","icon-grid-item",3,"selected-icon","itemName","quality"]],template:function(p,o){p&1&&(m(0,"app-list-detail-container",0),g("openDrawerChange",function(E){return w(o.openDrawer,E)||(o.openDrawer=E),E}),V(1,1),_(2,ee,1,1,"app-shop-item-process-data-details",2)(3,te,1,1,"app-shop-item-data-details",3)(4,ie,1,1,"app-item-upgrade-details",4),N(),m(5,"div",5)(6,"app-card")(7,"h1",6),d(8,"app-ui-icon",7),h(9),l(),_(10,oe,2,3),l(),_(11,le,4,3)(12,Ce,4,3)(13,fe,4,4),l()()),p&2&&(f("openDrawer",o.openDrawer),r(2),c(2,o.selectedProcessEntity?2:-1),r(),c(3,o.selectedEntity?3:-1),r(),c(4,o.selectedItemUpgrade?4:-1),r(4),s("uiIcon",o.SHOP_ICONS[o.shopName]),r(),B(" ",o.SHOP_DISPLAY_NAMES[o.shopName]," "),r(),c(10,o.openingHours$?10:-1),r(),c(11,o.shopItemData$?11:-1),r(),c(12,o.itemProcessing$?12:-1),r(),c(13,o.itemUpgrade$?13:-1))},dependencies:[Z,G,J,X,Q,z,R,K,Y,L,M,O,q,A,H,$],encapsulation:2});let e=n;return e})();export{He as TacoTruckComponent};
