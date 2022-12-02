<template>
  <main>
    <!-- <div class="parent"> -->
      <div class="horizontalize">
        <div class="column_container">
          <div  id="concept" class="column column1">
            <!-- <section id="topback"> -->
              <div id="toplogo">
                <img class="logo_img" src="../static/Gypsyworks_logo_black.png"></img>
              </div>
              <div id="sns_container">
                <a href="https://instagram.com/fumiiiiii?igshid=YmMyMTA2M2Y="><img class="snsimg" src="../static/Instagram_logo.png"></img></a>
                <!-- <img class="snsimg" src="../static/Twitter_blue.png"></img> -->
              </div>
            <!-- </section> -->
          </div>
          <div  id="product" class="column column2">
            <img src="../static/someru.jpg"></img>
          </div>
          <div  id="company" class="column column3">
            <!-- <section>
                <div class="stage" @click="moveCat1">
                  <div class="note">クリックしたあたりまでスライドします</div>
                  <BoxCat1 ref="cat1" />
                </div>
            </section> -->
          </div>
          <div class="column column4">
            <div class="products_container">
              <div v-for="product in products" :key= "product.name" class="product_bg">
                <img class="product_photo" :src="product.image_url">
                <div class="product_name"> <p>{{product.name}}<br>¥{{product.members_price_including_tax}}</p></div>
                <!-- <h1 class="title_txt">フォントてすとfont</h1> -->
                <div class="product_caption">
                   <p>{{product.name}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <!-- </div> -->
  </main>
</template>

<script>
import axios from 'axios'
import '../assets/scss/style.scss'
// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// firebase to get products
import { initializeApp } from 'firebase/app'
import { getStorage, ref, getDownloadURL } from "firebase/storage"
import '../assets/scss/style.scss'
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

// import BoxCat1 from '../components/common/BoxCat1'



export default {
  name: 'App',
  // components: {
  //   BoxCat1
  // },
  data () {
    return {
      loginForm: {
        email: '',
        password: '',
      },
      users: [],
      accessToken: '',
      msg: 'change point',
      products: [],
    }
  },
  mutations: {
  },
  created() {
    console.log("get inside categories in created")
    const firebaseConfig = {
      storageBucket: 'gs://gypsyworks-5cf3e.appspot.com'
    }
      // Initialize Firebase
    const app = initializeApp(firebaseConfig)
    // Initialize Cloud Storage and get a reference to the service
    const storage = getStorage(app)
    // Create a storage reference from our storage service
    const myfileRef = ref(storage, 'my-file')
    // URL経由でダウンロード
    getDownloadURL(myfileRef)
      .then((url) => {
        console.log(url)
        fetch(url)
          .then(result => result.json())
            .then((output) => {
              for(const i in output.products) {
                this.products.push(output.products[i]);
              }
              // console.log(this.products);
            }).catch(err => console.error(err));
      })
      .catch((error) => {
        console.log(error)
      })
  },
  mounted() {
    this.gsapHorizon();
  },
  methods: {
    gsapHorizon () {
        console.log("mounted∆∆∆∆∆∆∆∆∆∆∆∆∆∆")
      // window.addEventListener("load", function(){
        const horizontalize  = document.querySelector(".horizontalize");
        const columnContainer  = document.querySelector(".column_container");
        const columns = document.querySelectorAll(".column");
        const num   = columns.length;

        // 横幅を指定
        gsap.set(columnContainer,  { width: num * 100 + "%" });
        gsap.set(columnContainer,  { x: (num-1) * -100 + "vw" });
        gsap.set(columns, { width: 100 / num + "%" }); // 横スク用に大きくした親要素が３00%なら、子要素１つが100%

        gsap.to(columns, {
          // xPercent: 100 * ( num - 1 ), // x方向に移動させる
          x: () => (columnContainer.clientWidth - horizontalize.clientWidth),
          ease: "none", // <-- IMPORTANT!
          scrollTrigger: {
            trigger: horizontalize, // トリガー
            start: "top top", // 開始位置
            // end: "+=1000", // 終了位置
            end: () => `+=${columnContainer.clientWidth - horizontalize.clientWidth}`,
            pin: true, // ピン留め=スクロール中指定要素を固定
            scrub: true, // スクロール量に応じて動かす
            // scrub: 2, // アニメーションがスクロールに反応するまでの時間
            // snap: { // キリの良い位置へ移動させる
            //   snapTo: 1 / ( num - 1 ),
            //   duration: 2,
            // },
            invalidateOnRefresh: true,
            // horizontal: true, // スクロールのむき
            // preventOverlaps: true,
            onEnter: ()=> console.log("for debug column amount is...: " + num),
          }
        });

        // right picture clipping mask
        // gsap.fromTo('.right_img_container2', {
        //   // 関数で指定することで、リサイズによって要素の大きさが変わっても自動でアニメーションを計算し直してくれます。
        //   // x: () => -(listEl.clientWidth - listWrapperEl.clientWidth) https://liginc.co.jp/548232#JavaScript
        //   x: "0",
        //   y: "0",
        //   clipPath: "inset(0% 0% 100%)",
        //   // pin: true,
        // },
        // {
        //   x: '0',
        //   y: '0',
        //   clipPath: "inset(0% 0% 0%)",
        //   scrollTrigger: {
        //     trigger: '.main_container',
        //     // 第一引数＝トリガー要素の指定した位置と第二引数=ブラウザ画面の指定した位置 がアニメーションの起点、終点になる
        //     start: 'center left',
        //     end: 'right right',
        //     // アニメーションをスクロール位置にリンクさせる
        //     scrub: true,
        //     markers: true, // マーカー表示
        //     preventOverlaps: true,
        //     // pin: true,
        //     containerAnimation: scrollHorizonal
        //   }
        // });
        // // vertical moving


        // 3
        // gsap.fromTo('.right_img_container3', {
        //   x: "0",
        //   y: "0",
        //   clipPath: "inset(0% 0% 100%)",
        //   containerAnimation: scrollHorizonal,
        // },
        // {
        //   x: '0',
        //   y: '0',
        //   clipPath: "inset(0% 0% 0%)",
        //   scrollTrigger: {
        //     trigger: '.sc_trigger2',
        //     start: 'top bottom',
        //     end: 'bottom bottom',
        //     scrub: true,
        //     markers: false, // マーカー表示
        //     containerAnimation: scrollHorizonal,
        //   }
        // });
      // });
    },
    scrollItemA() {
      // const browserH = String(window.innerHeight);
    },
    scrollItemB() {
    },
    moveCat1 (ev) {
      // クリックされたX座標までスライドする
      this.$refs.cat1.moveTo(ev.offsetX, ev.offsetY)
    },
    getProducts () {
      axios.get('https://api.shop-pro.jp/v1/products', {
        headers: {
          'Authorization': `Bearer ${this.$store.state.token.access_toke}`
        }
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
    },
  }
}
</script>

<style scoped lang="scss">

  .horizontalize {
    overflow: hidden;
    position: relative;
    width: 100vw;
    height: 100vh;
    .column_container {
      // margin-left: -200vw;
      position: absolute;
      display: flex;
      flex-direction: row-reverse;

      width: 300vw;
      height: 100%;
      .column {
        height: 100%;
        background-color: rgb(10, 20, 30);
        position: relative;

        width: 100vw;
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
      .column1 {
        background-color: red;
      }
      .column2 {
        background-color: purple;
        display: flex;
        align-items: center; // 上下中央に
        justify-content: center; // 左右中央に
        img {
          object-fit: contain;
          width: 100%;
          height: auto;
          max-width: 100%; // 🖐sp対策に大事!
        }
      }
      .column3 {
        background-color: blue;
        height: 500vh;
        display: flex;
        flex-direction: column;
      }
      .column4 {
        background-color: red;
      }
    }
  }


  .centerize_container{
    display: flex;
    background-color: rgb(50, 100, 150);

    .photo_bg{
      width: 18vw;
      height: 45vh;
      margin: 10px;
      background-color: rgb(100, 44,44);
      display: block;
      // justify-content: center;
      .photo_item{
        width: 16vw;
        height: 16vw;
        background-color: rgb(0, 44,44);
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
      }
      .photo_caption{
        width: 100%;
        height: 2vw;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        background-color: rgb(0, 100,44);
      }
      .stores_container{
        margin-left: auto;
        margin-right: auto;
        height: 44px;
        // 子要素の大きさに合わせて幅可変
        width: fit-content;
      }

    }
  }

  @mixin triggerCSS {
    width: 300px;
    height: 255px;
    margin-top: 140px;
    background-color: rgb(0, 200, 199);
  }
  @mixin image_containerCSS {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(210, 30, 100);
    overflow: hidden;
    min-width: 100%;
    max-height: 100%;
    object-fit: cover;
    object-position: top;
    position: absolute;
  }
  .main_container {
    height: 50%;
    width: 100vw;
    background-color: rgb(200, 200, 110);
    display: block;
    // position: -webkit-sticky; /* Safariに対応する */
    // position: sticky;
  }
  .main_container_second {
    height: 50%;
    width: 100vw;
    background-color: rgb(255, 200, 110);
    display: flex;
    margin-top: 250vh;
  }
  .left_split{
    width: 50%;
    height: auto;
    background-color: rgb(100, 0, 100);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    //position:-webkit-sticky; position:sticky; top:0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    //display: table-cell;
    .main_title{
      height: 10%;
    }

    .sc_trigger1{
      @include triggerCSS;
    }
    .sc_trigger2{
      @include triggerCSS;
    }
    .sc_trigger3{
      @include triggerCSS;
    }
    .sc_trigger4{
      @include triggerCSS;
    }
    .sc_trigger5{
      @include triggerCSS;
    }
  }
  .right_sprit{
    width: 50%;
    // height: 100%;
    background-color: rgb(200, 0, 100);
    position:relative;
    .right-sticky{
      top: 0;
      left: 0;
      width: 100%;
      height:100vh;
      background-color: rgb(210, 30, 100);
      overflow: hidden;
      min-width: 100%;

      position: -webkit-sticky; /* Safariに対応する */
      position: sticky; /* 要素を固定/解除する */
      //  position: sticky; は、親要素のheightを基準に固定される位置が決まります。
      // （親要素のheightを超えたら、固定が解除される）
      // そのため、親要素にheightを指定しないと、そもそも有効になりません。
      .right_img_container{
        @include image_containerCSS;
      }
      .right_img_container2{
        @include image_containerCSS;
        // transform-origin: left top;
        // clip-path 100%でimgが見えなくなるマスクの設定。適用範囲開始位置以下で100%, 適用終点以上で0%にすることでだんだん表示させる
        // 計算式：1 - ((スクロール量 - クリッピングマスク解除適用開始位置の座標) / 解除開始から終了までのスクロール幅) * 100%
        // clip-path: inset(0% 0% calc((1 - min((max(var(--scroll-Y), 0) - var(--clipStart-YIn1)) / var(--switch-Length), 1)) * 100%));
      }
      .right_img_container3{
        @include image_containerCSS;
      }
      .right_img_container4{
        @include image_containerCSS;
      }
      .right_img_container5{
        @include image_containerCSS;
      }
    }

  }
  // products
  .title_txt{
    font-family: 'Dymo';
    font-size: 20px;
    color: rgb(100, 150, 100);
  }

  .products_container{
    display: flex;
    // background-color: rgb(50, 100, 150);
    flex-wrap: wrap;
    margin-top: 50px;
    justify-content: space-around;
    .product_bg{
      width: 20vw;
      // height: 45vh;
      margin: 0px;
      // background-color: rgb(100, 44,44);
      display: block;
      // justify-content: center;
      .product_photo{
        width: 16vw;
        height: 16vw;
        position: relative;
        left: 2vw;
        object-fit: cover;
        // background-image: url(https://img21.shop-pro.jp/PA01480/113/product/170941223.jpg?cmsp_timestamp=20221015160054);
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
      }
      .product_name{
        width: 100%;
        height: auto;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        // background-color: rgb(100, 0,44);
        text-align: center;
        font-family: "Oradano-mincho-GSRR";
        font-size: 20px;
        font-feature-settings: "titl";
        // .p{
        //   font-family: "Oradano-mincho-GSRR";
        //   font-size: 300px;
        // }
      }
      .product_caption{
        width: 100%;
        height: auto;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        // background-color: rgb(0, 220,44);
        text-align: center;
        font-size: small;
      }
      .stores_container{
        margin-left: auto;
        margin-right: auto;
        height: 44px;
        // 子要素の大きさに合わせて幅可変
        width: fit-content;
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
