<template>
  <main>

    <!-- <div id='collection-component-1640798152613'></div>
    <div id='background-sqr'>aaaa</div> -->
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


<script>
import { initializeApp } from 'firebase/app'
import { getStorage, ref, getDownloadURL } from "firebase/storage"
export default {
  mounted() {
    console.log("get inside catalog mounted")
    const firebaseConfig = {
      storageBucket: 'gs://gypsyworks-5cf3e.appspot.com'
    }
      // Initialize Firebase
    const app = initializeApp(firebaseConfig)
    // Initialize Cloud Storage and get a reference to the service
    const storage = getStorage(app)
    // Create a storage reference from our storage service
    // const storageRef = ref(storage);
    const myfileRef = ref(storage, 'my-file111')
    // URL経由でダウンロード
    getDownloadURL(myfileRef)
      .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'

        console.log(url)

        fetch(url)
          .then(result => result.json())
            .then((output) => {
                console.log('Output: ', output);

            }).catch(err => console.error(err));
      })
      .catch((error) => {
        console.log(error)
      })
    // getBlob(myfileRef, 100000)
    //   .then((url) => {
    //     // `url` is the download URL for 'images/stars.jpg'
    //
    //     console.log(url)
    //   })
    //   .catch((error) => {
    //     // Handle any errors
    //     console.log(error)
    //   })
  },

}

</script>
