<template>
  <main>
    <section id="topback">
      <div id="toplogo">
        <img class="logo_img" src="../static/Gypsyworks_logo_black.png"></img>
      </div>
      <div id="sns_container">
        <img class="snsimg" src="../static/Instagram_logo.png"></img>
        <img class="snsimg" src="../static/Twitter_blue.png"></img>
      </div>
    </section>
    <section>
      <div class="title_container">
        <h1 class="title_txt">カテゴリ</h1>
        <button v-on:click="authenticate">get USER</button>
      </div>
      <div class="section_container">

        <div class="centerize_container">
          <div class="storesjp-button" data-storesjp-item="5f617c82fbe5b5732acef0eb" data-storesjp-variation="5f617c82fbe5b5732acef0ed" data-storesjp-name="gypsyworks" data-storesjp-layout="layout_a" data-storesjp-lang="ja" ></div><script>(function(d,s,id){var st=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return;}var nst=d.createElement(s);nst.id=id;nst.src="//btn.stores.jp/button.js";nst.charset="UTF-8";st.parentNode.insertBefore(nst,st);})(document, "script", "storesjp-button");</script>
          <div class="storesjp-button" data-storesjp-item="5f617c82fbe5b5732acef0eb" data-storesjp-variation="5f617c82fbe5b5732acef0ed" data-storesjp-name="gypsyworks" data-storesjp-layout="layout_a" data-storesjp-lang="ja" ></div><script>(function(d,s,id){var st=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return;}var nst=d.createElement(s);nst.id=id;nst.src="//btn.stores.jp/button.js";nst.charset="UTF-8";st.parentNode.insertBefore(nst,st);})(document, "script", "storesjp-button");</script>
          <div class="storesjp-button" data-storesjp-item="5f617c82fbe5b5732acef0eb" data-storesjp-variation="5f617c82fbe5b5732acef0ed" data-storesjp-name="gypsyworks" data-storesjp-layout="layout_a" data-storesjp-lang="ja" ></div><script>(function(d,s,id){var st=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return;}var nst=d.createElement(s);nst.id=id;nst.src="//btn.stores.jp/button.js";nst.charset="UTF-8";st.parentNode.insertBefore(nst,st);})(document, "script", "storesjp-button");</script>
          <div class="photo_bg">
            <!-- <iframe frameborder="0" height="220" width="160" src="https://mrbicycle.base.ec/items/15896127/widget/small" ></iframe> -->
            <!-- <img class="photo_item"></img>
            <img class="photo_item"></img>
            <img class="photo_item"></img>
            <img class="photo_item"></img>
            <img class="photo_item"></img>
            <img class="photo_item"></img>
            <img class="photo_item"></img>
            <img class="photo_item"></img>
            <img class="photo_item"></img> -->
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="title_container">
        <h1 class="title_txt">CATEGORYS</h1>
      </div>
      <div class="section_container">
        <div class="centerize_container">
          <div class="catalog_item"></div>
          <div class="catalog_item"></div>
          <div class="catalog_item"></div>
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
    <!-- <h1>Hello world!</h1>
    <NuxtLink to="/fun">
        fun (internal link that belongs to the Nuxt App)
    </NuxtLink>
    <NuxtLink to="/catalog">
        about (internal link that belongs to the Nuxt App)
    </NuxtLink> -->
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
import '../assets/scss/style.scss'
export default {
  name: 'App',
  components: {
    BoxCat1
  },
  methods: {
    moveCat1 (ev) {
      // クリックされたX座標までスライドする
      this.$refs.cat1.moveTo(ev.offsetX, ev.offsetY)
    },
    authenticate() {
      console.log("ユーザーデータ：", this.$auth.user);
      // this.$auth.loginWith('colorme');
    },
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
      width: 30vh;
      height: 30vh;
      // background-color: rgb(100, 250, 200);
      //css3の中央揃え
      top: 50%;
      left: 50%;
      // margin-right: -50%;
      transform: translate(-50%, -50%);
      .logo_img{
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
    #sns_container{
      position:absolute;
      display: flex;
      width: 30vh;
      height: 10vh;
      left: 5%;
      bottom:10%;
      //background-color: rgb(0, 0, 200);
      .snsimg{
        margin: 0px 10px;
        //background-color: rgb(200, 0, 200);
        width: 8vh;
        height: 8vh;
      }
    }
  }
  .title_txt{
    font-family: 'TF-HOTSU_L';
    font-size: 40px;
    color: rgb(100, 150, 100);
  }
  .section_container{
    // width: 100vw;
    // height: 100vh;
    .centerize_container{
      // width: 100%;
      // height: 100%;
      background-color: rgb(50, 100, 150);
      .photo_bg{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background-color: rgb(0, 255, 0);
        .storesjp-button{
          width: 16vw;
          height: 16vw;
          margin: 10px;
        }
        .photo_item{
          width: 16vw;
          height: 16vw;
          margin: 0px;
          background-color: rgb(100, 0, 0);
        }
      }
      .catalog_item{
        width: 18vw;
        height: 60vh;
        margin: 10px;
        background-color: rgb(0, 44,44);
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
  @font-face {
  	font-family: 'hotu';
  	src: url('../assets/fonts/TF-HOTSU_L.TTF');
    // src: local('TCM Hotsuma Character Large');
  }
</style>
