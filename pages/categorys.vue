<template>
  <main>

    <div id='collection-component-1640798152613'></div>
    <div id='background-sqr'>aaaa</div>
    <script type="text/javascript">
    /*<![CDATA[*/
      // (function () {
      //   var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      //   if (window.ShopifyBuy) {
      //     if (window.ShopifyBuy.UI) {
      //       ShopifyBuyInit();
      //     } else {
      //       loadScript();
      //     }
      //   } else {
      //     loadScript();
      //   }
      //   function loadScript() {
      //     var script = document.createElement('script');
      //     script.async = true;
      //     script.src = scriptURL;
      //     (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      //     script.onload = ShopifyBuyInit;
      //   }
      //   function ShopifyBuyInit() {
      //     var client = ShopifyBuy.buildClient({
      //       domain: 'gypsyworks.myshopify.com',
      //       storefrontAccessToken: '6b99c2bda6bc5033ae84e90b037b45d6',
      //     });
      //     ShopifyBuy.UI.onReady(client).then(function (ui) {
      //       ui.createComponent('collection', {
      //         id: '264384970795',
      //         node: document.getElementById('collection-component-1640798152613'),
      //         moneyFormat: '%C2%A5%7B%7Bamount_no_decimals%7D%7D',
      //         options: {
      //           "product": {
      //             "styles": {
      //               "product": {
      //                 "@media (min-width: 601px)": {
      //                   "max-width": "calc(25% - 20px)",
      //                   "margin-left": "20px",
      //                   "margin-bottom": "50px",
      //                   "width": "calc(25% - 20px)"
      //                 },
      //                 "img": {
      //                   "height": "calc(100% - 15px)",
      //                   "position": "absolute",
      //                   "left": "0",
      //                   "right": "0",
      //                   "top": "0"
      //                 },
      //                 "imgWrapper": {
      //                   "padding-top": "calc(75% + 15px)",
      //                   "position": "relative",
      //                   "height": "0"
      //                 }
      //               }
      //             },
      //             "text": {
      //               "button": "Add to cart"
      //             }
      //           },
      //           "productSet": {
      //             "styles": {
      //               "products": {
      //                 "@media (min-width: 601px)": {
      //                   "margin-left": "-20px"
      //                 }
      //               }
      //             }
      //           },
      //           "modalProduct": {
      //             "contents": {
      //               "img": false,
      //               "imgWithCarousel": true,
      //               "button": false,
      //               "buttonWithQuantity": true
      //             },
      //             "styles": {
      //               "product": {
      //                 "@media (min-width: 601px)": {
      //                   "max-width": "100%",
      //                   "margin-left": "0px",
      //                   "margin-bottom": "0px"
      //                 }
      //               }
      //             },
      //             "text": {
      //               "button": "Add to cart"
      //             }
      //           },
      //           "option": {},
      //           "cart": {
      //             "text": {
      //               "total": "Subtotal",
      //               "button": "Checkout"
      //             }
      //           },
      //           "toggle": {}
      //         },
      //       });
      //     });
      //   }
      // })();
    /*]]>*/
    </script>
  </main>
</template>

<!--
<script>
import axios from 'axios'
export default {
  methods: {
    authenticate() {
      console.log("authenticate");
      axios.post('https://api.shop-pro.jp',
      {
          params: {
            client_id: '564295b436f89bb7bad22863961482db4244af8adce6cc4df42230c860e94447',
            client_secret: '854d4609864f38340f059b926c286e9f0de29fe6f95ed33ef80b0bd374f35e3e',
            code: this.$route.query.code,
            grant_type: 'authorization_code',
            redirect_uri: 'https://dubryu.github.io/gypsyworks/categorys'
          }
      })
          .then(response => {
              console.log("response isssssssssssssssssssssssssss");
              console.log(response);
              // this.store.commit('setAccessToken', response.data.access);
              // this.store.commit('setRefreshToken', response.data.refresh);
          })
          .catch(error => {
            console.log(error)
          })

    },
  }
}

</script> -->
