(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2],{269:function(t,n,e){"use strict";t.exports=function(t,n){return n||(n={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},270:function(t,n,e){t.exports=e.p+"img/gomachan.848c135.svg"},271:function(t,n,e){var content=e(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(57).default)("95304b8c",content,!0,{sourceMap:!1})},272:function(t,n,e){"use strict";e(271)},273:function(t,n,e){var o=e(56),c=e(269),r=e(270),l=o(!1),d=c(r);l.push([t.i,".box-cat[data-v-6772e7bd]{position:absolute;width:80px;height:80px;margin-left:-40px;box-sizing:border-box;background:url("+d+") no-repeat 50%;transform-origin:50% 100%;transition:transform .5s}",""]),t.exports=l},276:function(t,n,e){var content=e(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(57).default)("35a426f7",content,!0,{sourceMap:!1})},278:function(t,n,e){"use strict";e.r(n);var o=e(25),c=(e(72),e(19),e(33),function(t){return new Promise((function(n){return setTimeout(n,t)}))}),r={data:function(){return{x:100,y:300,dur:500}},methods:{moveTo:function(t,n){var e=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return r=e.y,e.x=t,e.dur=500,o.next=5,c(e.dur);case 5:return e.y=n,e.dur=200,o.next=9,c(e.dur);case 9:return e.y=r,e.dur=200,o.next=13,c(e.dur);case 13:case"end":return o.stop()}}),o)})))()}}},l=(e(272),e(44)),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"box-cat",style:{transform:"translate("+t.x+"px, "+t.y+"px)",transition:"transform "+t.dur+"ms"}})}),[],!1,null,"6772e7bd",null);n.default=component.exports},283:function(t,n,e){"use strict";e(276)},284:function(t,n,e){var o=e(56)(!1);o.push([t.i,"#topback[data-v-6b2c07e8]{width:100%;height:80vh;background-color:#6466c8;position:relative}#topback #toplogo[data-v-6b2c07e8]{width:20vh;height:20vh;background-color:#64fac8;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}#topback #sns_container[data-v-6b2c07e8]{position:absolute;width:30vh;height:10vh;left:5%;bottom:10%;background-color:#0000c8}#topback #sns_container .snsimg[data-v-6b2c07e8]{margin:2px;background-color:#c800c8}.page_container .centerize_container .catalog_item[data-v-6b2c07e8]{width:18vw;height:60vh;margin:10px;background-color:#000}.page_container .centerize_container .photo_bg[data-v-6b2c07e8]{display:flex;flex-wrap:wrap;justify-content:left;width:80vw;background-color:#0f0}.page_container .centerize_container .photo_bg .photo_item[data-v-6b2c07e8]{width:16vw;height:16vw;margin:0;background-color:#000}.stage[data-v-6b2c07e8]{position:relative;width:100%;height:350px;border:1px solid #aaa;background-color:#f8f8f7;overflow:hidden}.note[data-v-6b2c07e8]{color:#888;text-align:center;position:absolute;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}",""]),t.exports=o},289:function(t,n,e){"use strict";e.r(n);var o={name:"app",components:{BoxCat1:e(278).default},methods:{moveCat1:function(t){this.$refs.cat1.moveTo(t.offsetX,t.offsetY)}}},c=(e(283),e(44)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("section",[e("div",{staticClass:"stage",on:{click:t.moveCat1}},[e("div",{staticClass:"note"},[t._v("クリックしたあたりまでスライドします")]),t._v(" "),e("BoxCat1",{ref:"cat1"})],1)]),t._v(" "),t._m(3)])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{attrs:{id:"topback"}},[e("div",{attrs:{id:"toplogo"}}),t._v(" "),e("div",{attrs:{id:"sns_container"}},[e("img",{staticClass:"snsimg"}),t._v(" "),e("img",{staticClass:"snsimg"})])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("div",{staticClass:"title_container"},[e("h1",{staticClass:"title_txt"},[t._v("yoyo")])]),t._v(" "),e("div",{staticClass:"page_container"},[e("div",{staticClass:"centerize_container"},[e("div",{staticClass:"catalog_item"}),t._v(" "),e("div",{staticClass:"catalog_item"}),t._v(" "),e("div",{staticClass:"catalog_item"})])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("div",{staticClass:"title_container"},[e("h1",{staticClass:"title_txt"},[t._v("PHOTOS")])]),t._v(" "),e("div",{staticClass:"page_container"},[e("div",{staticClass:"centerize_container"},[e("div",{staticClass:"photo_bg"},[e("img",{staticClass:"photo_item"}),t._v(" "),e("img",{staticClass:"photo_item"}),t._v(" "),e("img",{staticClass:"photo_item"}),t._v(" "),e("img",{staticClass:"photo_item"}),t._v(" "),e("img",{staticClass:"photo_item"}),t._v(" "),e("img",{staticClass:"photo_item"}),t._v(" "),e("img",{staticClass:"photo_item"}),t._v(" "),e("img",{staticClass:"photo_item"}),t._v(" "),e("img",{staticClass:"photo_item"})])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("div",{attrs:{id:"collection-component-1640798152613"}}),t._v(" "),e("script",{attrs:{type:"text/javascript"}},[t._v('\n    /*<![CDATA[*/\n    (function () {\n      var scriptURL = \'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js\';\n      if (window.ShopifyBuy) {\n        if (window.ShopifyBuy.UI) {\n          ShopifyBuyInit();\n        } else {\n          loadScript();\n        }\n      } else {\n        loadScript();\n      }\n      function loadScript() {\n        var script = document.createElement(\'script\');\n        script.async = true;\n        script.src = scriptURL;\n        (document.getElementsByTagName(\'head\')[0] || document.getElementsByTagName(\'body\')[0]).appendChild(script);\n        script.onload = ShopifyBuyInit;\n      }\n      function ShopifyBuyInit() {\n        var client = ShopifyBuy.buildClient({\n          domain: \'gypsyworks.myshopify.com\',\n          storefrontAccessToken: \'6b99c2bda6bc5033ae84e90b037b45d6\',\n        });\n        ShopifyBuy.UI.onReady(client).then(function (ui) {\n          ui.createComponent(\'collection\', {\n            id: \'264384970795\',\n            node: document.getElementById(\'collection-component-1640798152613\'),\n            moneyFormat: \'%C2%A5%7B%7Bamount_no_decimals%7D%7D\',\n            options: {\n      "product": {\n        "styles": {\n          "product": {\n            "@media (min-width: 601px)": {\n              "max-width": "calc(25% - 20px)",\n              "margin-left": "20px",\n              "margin-bottom": "50px",\n              "width": "calc(25% - 20px)"\n            },\n            "img": {\n              "height": "calc(100% - 15px)",\n              "position": "absolute",\n              "left": "0",\n              "right": "0",\n              "top": "0"\n            },\n            "imgWrapper": {\n              "padding-top": "calc(75% + 15px)",\n              "position": "relative",\n              "height": "0"\n            }\n          }\n        },\n        "text": {\n          "button": "Add to cart"\n        }\n      },\n      "productSet": {\n        "styles": {\n          "products": {\n            "@media (min-width: 601px)": {\n              "margin-left": "-20px"\n            }\n          }\n        }\n      },\n      "modalProduct": {\n        "contents": {\n          "img": false,\n          "imgWithCarousel": true,\n          "button": false,\n          "buttonWithQuantity": true\n        },\n        "styles": {\n          "product": {\n            "@media (min-width: 601px)": {\n              "max-width": "100%",\n              "margin-left": "0px",\n              "margin-bottom": "0px"\n            }\n          }\n        },\n        "text": {\n          "button": "Add to cart"\n        }\n      },\n      "option": {},\n      "cart": {\n        "text": {\n          "total": "Subtotal",\n          "button": "Checkout"\n        }\n      },\n      "toggle": {}\n    },\n          });\n        });\n      }\n    })();\n    /*]]>*/\n    ')])])}],!1,null,"6b2c07e8",null);n.default=component.exports}}]);