"use strict";(self.webpackChunkeCom=self.webpackChunkeCom||[]).push([[603],{2603:(T,d,r)=>{r.r(d),r.d(d,{ProductsModule:()=>D});var n=r(3914),t=r(9212),u=r(7188);let p=(()=>{class i{constructor(o){this.firestore=o}getProduct(o){return this.firestore.collection("products",e=>e.where("id","==",o)).valueChanges()}getSimilarProducts(o){return this.firestore.collection("products",e=>e.where("category","==",o)).valueChanges()}static#t=this.\u0275fac=function(e){return new(e||i)(t.LFG(u.ST))};static#o=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var m=r(3414),l=r(6814);function g(i,c){if(1&i){const o=t.EpF();t.TgZ(0,"button",30),t.NdJ("click",function(){t.CHM(o);const a=t.oxw(3);return t.KtG(a.toggleCart())}),t._uU(1," Add to Cart "),t.qZA()}}function _(i,c){if(1&i){const o=t.EpF();t.TgZ(0,"div")(1,"button",31),t.NdJ("click",function(){t.CHM(o);const a=t.oxw(3);return t.KtG(a.productCart("remove"))}),t._uU(2," - "),t.qZA(),t.TgZ(3,"span",32),t._uU(4),t.qZA(),t.TgZ(5,"button",33),t.NdJ("click",function(){t.CHM(o);const a=t.oxw(3);return t.KtG(a.productCart("add"))}),t._uU(6," + "),t.qZA()()}if(2&i){const o=t.oxw(3);t.xp6(4),t.Oqu(o.cartData.amount),t.xp6(1),t.Q6J("disabled",o.productData.amount==o.productData.stock)}}function f(i,c){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,g,2,0,"button",29)(2,_,7,2,"div",27),t.qZA()),2&i){const o=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!o.isAdd||!o.cartData),t.xp6(1),t.Q6J("ngIf",o.cartData.amount>0)}}function h(i,c){1&i&&(t.TgZ(0,"span",34),t._uU(1,"Max Stock"),t.qZA())}function b(i,c){1&i&&(t.TgZ(0,"span",34),t._uU(1,"Out of Stock"),t.qZA())}function v(i,c){if(1&i&&(t.TgZ(0,"div",2)(1,"nav",3)(2,"ol",4)(3,"li",5)(4,"a",6),t._uU(5,"Home"),t.qZA()(),t.TgZ(6,"li",5)(7,"a",6),t._uU(8,"Products"),t.qZA()(),t.TgZ(9,"li",5)(10,"a",6),t._uU(11),t.qZA()()()(),t.TgZ(12,"div",7)(13,"div",8),t._UZ(14,"img",9),t.qZA(),t.TgZ(15,"div",10)(16,"div",11)(17,"h1",12),t._uU(18),t.qZA()(),t.TgZ(19,"div",13)(20,"span",14),t._uU(21,"4.4 "),t._UZ(22,"img",15),t.qZA(),t.TgZ(23,"span",16),t._uU(24,"12,368 Ratings & 468 user reviews"),t.qZA(),t.TgZ(25,"span",17),t._UZ(26,"img",18),t._uU(27,"Assured"),t.qZA()(),t.TgZ(28,"div",19)(29,"div",20)(30,"p",21),t._uU(31),t.qZA()(),t.TgZ(32,"div",19)(33,"span",22),t._uU(34,"Available offers"),t.qZA(),t.TgZ(35,"ul",23)(36,"li",24)(37,"span",25),t._uU(38,"Bank Offer"),t.qZA(),t._uU(39," Get 10% Cashback on bank Credit Card. "),t.qZA(),t.TgZ(40,"li",24)(41,"span",25),t._uU(42,"Bank Offer"),t.qZA(),t._uU(43," 5% Cashback on Bank Card. "),t.qZA()()(),t.TgZ(44,"div",26),t.YNc(45,f,3,2,"div",27)(46,h,2,0,"span",28)(47,b,2,0,"span",28),t.qZA()()()()()),2&i){const o=t.oxw();t.xp6(11),t.Oqu(o.productData.title),t.xp6(3),t.s9C("src",o.productData.images[0],t.LSH),t.MGl("alt","",o.productData.title," image"),t.xp6(4),t.hij(" ",o.productData.title," "),t.xp6(13),t.hij("$",o.productData.price,""),t.xp6(14),t.Q6J("ngIf",0!=o.productData.stock),t.xp6(1),t.Q6J("ngIf",o.productData.amount==o.productData.stock),t.xp6(1),t.Q6J("ngIf",0==o.productData.stock)}}function x(i,c){if(1&i&&(t.TgZ(0,"a",39)(1,"div",40)(2,"div",41),t._UZ(3,"img",42),t.qZA(),t.TgZ(4,"div",43)(5,"h5",44),t._uU(6),t.qZA(),t.TgZ(7,"div",45)(8,"p",46),t._uU(9),t.qZA()()()()()),2&i){const o=c.$implicit;t.MGl("routerLink","../../product/",o.id,""),t.xp6(3),t.s9C("src",o.images[0],t.LSH),t.xp6(3),t.Oqu(o.title),t.xp6(3),t.hij("$",o.price,"")}}function Z(i,c){if(1&i&&(t.TgZ(0,"div",35)(1,"div",36),t._uU(2,"Similar Products"),t.qZA(),t.TgZ(3,"div",37),t.YNc(4,x,10,4,"a",38),t.qZA()()),2&i){const o=t.oxw();t.xp6(4),t.Q6J("ngForOf",o.similarCategory)}}const C=[{path:"",component:(()=>{class i{constructor(o,e,a){this.productService=o,this.actRoute=e,this.cartServ=a,this.isAdd=!1}ngOnInit(){this.actRoute.params.subscribe(()=>{this.getProductData()}),this.getProductData()}getProductData(){this.actRoute.params.subscribe(o=>{this.productId=o.id}),this.productService.getProduct(this.productId).subscribe(o=>{this.productData=o[0],this.productService.getSimilarProducts(o[0].category).subscribe(s=>{this.similarCategory=s.length>4?s.splice(0,4):s});let e=localStorage.getItem("cart")||"[]";this.prods=JSON.parse(e);let a=this.prods.findIndex(({id:s})=>s===this.productData.id);a>=0?(this.isAdd=!0,this.cartData=this.prods[a],this.cartData=this.prods[a]):(this.isAdd=!1,this.cartData=this.productData)})}productCart(o){this.cartServ.data(this.productData,o),this.getProductData()}toggleCart(){this.productCart("add"),this.productData.isAdd=!this.productData.isAdd,this.getProductData()}static#t=this.\u0275fac=function(e){return new(e||i)(t.Y36(p),t.Y36(n.gz),t.Y36(m.b))};static#o=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-product-details"]],decls:2,vars:2,consts:[["class","container",4,"ngIf"],["class","container mx-auto bg-white rounded mt-4 pb-3",4,"ngIf"],[1,"container"],["aria-label","breadcrumb",1,"",2,"--bs-breadcrumb-divider","'>'"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","/",1,"text-black","small","fw-bold"],[1,"row","bg-white","rounded","py-3"],[1,"col-lg-4","col-12","col-sm-12","mt-3","text-md-center"],[1,"img-fluid","mx-auto","col-12",3,"src","alt"],[1,"col-lg-7","col-12"],[1,"col-12","my-3"],[1,"h5","fw-bolder","col-12"],[1,"col-12","my-2"],[1,"badge","bg-success"],["src","../../assets/star.png","alt",""],[1,"small","fw-semibold","mx-3","pt-3"],[1,"bg-primary","text-white","small","rounded-pill","p-1","px-2","fw-bold"],["src","../../assets/logo.svg","width","15px","alt",""],[1,"col-12"],[1,"text-start","m-2","py-1"],[1,"fw-semibold","h2"],[1,"fw-bold","col-12"],[1,"list-group","mt-2"],[1,"list-group-item"],[1,"fw-semibold"],[1,"mt-4"],[4,"ngIf"],["class","text-black",4,"ngIf"],["class","btn btn-primary rounded-pill fw-semibold btn-sm py-2 px-3",3,"click",4,"ngIf"],[1,"btn","btn-primary","rounded-pill","fw-semibold","btn-sm","py-2","px-3",3,"click"],[1,"btn","btn-danger",3,"click"],[1,"mx-3"],[1,"btn","btn-success",3,"disabled","click"],[1,"text-black"],[1,"container","mx-auto","bg-white","rounded","mt-4","pb-3"],[1,"col-12","ms-2","pt-3","fw-bold","h4"],[1,"row"],["class","col-lg-3 col-sm-12 col-xs-12 col-12 d-sm-block card border-0 text-decoration-none",3,"routerLink",4,"ngFor","ngForOf"],[1,"col-lg-3","col-sm-12","col-xs-12","col-12","d-sm-block","card","border-0","text-decoration-none",3,"routerLink"],[1,"border","rounded","m-2","h-100"],["data-mdb-ripple-color","light",1,"bg-image","hover-overlay","ripple","text-center"],["width","90%","height","150px",1,"pt-3",3,"src"],[1,"card-body"],[1,"card-title","fw-bold","text-center"],[1,"card-text"],[1,"fw-semibold","h6","text-center"]],template:function(e,a){1&e&&t.YNc(0,v,48,8,"div",0)(1,Z,5,1,"div",1),2&e&&(t.Q6J("ngIf",a.productData),t.xp6(1),t.Q6J("ngIf",a.similarCategory))},dependencies:[l.sg,l.O5,n.rH],styles:['ul[_ngcontent-%COMP%]{list-style:none;padding-left:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-left:1.5em}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"";position:absolute;left:5px;top:12px;width:2em;height:1em;background-repeat:no-repeat;background-image:url(https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png);background-size:contain}']})}return i})()}];let D=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#o=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[n.Bz.forChild(C),n.Bz]})}return i})()}}]);