<template>
  <main>
    <section id="topback">
      <div id="toplogo"></div>
      <div id="sns_container">
        <img class="snsimg"></img>
        <img class="snsimg"></img>
      </div>
    </section>
    <section>
      <div class="title_container">
        <h1 class="title_txt">yoyo</h1>
      </div>
      <div class="page_container">
        <div class="centerize_container">
          <div class="catalog_item"></div>
          <div class="catalog_item"></div>
          <div class="catalog_item"></div>
        </div>
      </div>
    </section>
    <section>
      <div class="title_container">
        <h1 class="title_txt">PHOTOS</h1>
      </div>
      <div class="page_container">
        <div class="centerize_container">
          <div class="photo_bg">
            <img class="photo_item"></img>
            <img class="photo_item"></img>
            <img class="photo_item"></img>
            <img class="photo_item"></img>
            <img class="photo_item"></img>
            <img class="photo_item"></img>
            <img class="photo_item"></img>
            <img class="photo_item"></img>
            <img class="photo_item"></img>
          </div>
        </div>
      </div>
    </section>
    <section>
      <!-- <div id="app"> -->
        <div class="stage" @click="moveCat1">
          <div class="note">クリックしたあたりまでスライドします</div>
          <BoxCat1 ref="cat1" />
        </div>
      <!-- </div> -->
    </section>
    <h1>Hello world!</h1>
    <NuxtLink to="/fun">
        fun (internal link that belongs to the Nuxt App)
    </NuxtLink>
    <NuxtLink to="/catalog">
        about (internal link that belongs to the Nuxt App)
    </NuxtLink>
    <section>
      <div id='collection-component-1640798152613'></div>
      <script type="text/javascript">
      /*<![CDATA[*/
      (function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        if (window.ShopifyBuy) {
          if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
          } else {
            loadScript();
          }
        } else {
          loadScript();
        }
        function loadScript() {
          var script = document.createElement('script');
          script.async = true;
          script.src = scriptURL;
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
          script.onload = ShopifyBuyInit;
        }
        function ShopifyBuyInit() {
          var client = ShopifyBuy.buildClient({
            domain: 'gypsyworks.myshopify.com',
            storefrontAccessToken: '6b99c2bda6bc5033ae84e90b037b45d6',
          });
          ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('collection', {
              id: '264384970795',
              node: document.getElementById('collection-component-1640798152613'),
              moneyFormat: '%C2%A5%7B%7Bamount_no_decimals%7D%7D',
              options: {
        "product": {
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "calc(25% - 20px)",
                "margin-left": "20px",
                "margin-bottom": "50px",
                "width": "calc(25% - 20px)"
              },
              "img": {
                "height": "calc(100% - 15px)",
                "position": "absolute",
                "left": "0",
                "right": "0",
                "top": "0"
              },
              "imgWrapper": {
                "padding-top": "calc(75% + 15px)",
                "position": "relative",
                "height": "0"
              }
            }
          },
          "text": {
            "button": "Add to cart"
          }
        },
        "productSet": {
          "styles": {
            "products": {
              "@media (min-width: 601px)": {
                "margin-left": "-20px"
              }
            }
          }
        },
        "modalProduct": {
          "contents": {
            "img": false,
            "imgWithCarousel": true,
            "button": false,
            "buttonWithQuantity": true
          },
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px"
              }
            }
          },
          "text": {
            "button": "Add to cart"
          }
        },
        "option": {},
        "cart": {
          "text": {
            "total": "Subtotal",
            "button": "Checkout"
          }
        },
        "toggle": {}
      },
            });
          });
        }
      })();
      /*]]>*/
      </script>
    </section>
  </main>
</template>

<script>
import BoxCat1 from '../components/common/BoxCat1'
export default {
  name: 'app',
  components: {
    BoxCat1
  },
  methods: {
    moveCat1 (ev) {
      // クリックされたX座標までスライドする
      this.$refs.cat1.moveTo(ev.offsetX, ev.offsetY)
    }
  }
}
</script>

<style scoped lang="scss">

  #topback{
    width: 100%;
    height: 80vh;
    background-color: rgb(100, 102, 200);
    // display: flex; //flexは親に設定する
    // align-items: center;
    // justify-content: center;
    //css3の中央揃え
    position: relative;
    #toplogo{
      position: absolute;
      width: 20vh;
      height: 20vh;
      background-color: rgb(100, 250, 200);
      //css3の中央揃え
      position: absolute;
      top: 50%;
      left: 50%;
      // margin-right: -50%;
      transform: translate(-50%, -50%);
    }
    #sns_container{
      position:absolute;
      width: 30vh;
      height: 10vh;
      left: 5%;
      bottom:10%;
      background-color: rgb(0, 0, 200);
      .snsimg{
        margin: 2px;
        background-color: rgb(200, 0, 200);
      }
    }
  }

  .page_container{
    .centerize_container{
      .catalog_item{
        width: 18vw;
        height: 60vh;
        margin: 10px;
        background-color: rgb(0, 0, 0);
      }
      .photo_bg{
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        width: 80vw;
        background-color: rgb(0, 255, 0);
        .photo_item{
          width: 16vw;
          height: 16vw;
          margin: 0px;
          background-color: rgb(0, 0, 0);
        }
      }

    }
  }
  .stage {
  position: relative;
  width: 100%;
  height: 350px;
  border: 1px solid #aaa;
  background-color: rgb(248, 248, 247);
  overflow: hidden;
  }
  .note {
  color: #888;
  text-align: center;
  position: absolute;
  width: 100%;
  user-select: none;
  }
</style>
