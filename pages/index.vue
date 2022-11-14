<template>
  <main>
    <div class="parent">
      <div class="horizontalize">
        <div class="column_container">
          <div class="column column1">
            <!-- <section id="topback"> -->
              <div id="toplogo">
                <img class="logo_img" src="../static/Gypsyworks_logo_black.png"></img>
              </div>
              <div id="sns_container">
                <img class="snsimg" src="../static/Instagram_logo.png"></img>
                <img class="snsimg" src="../static/Twitter_blue.png"></img>
              </div>
            <!-- </section> -->
          </div>
          <div class="column column2">
            <!-- <section> -->
              <!-- <div class="title_container">
                <h1 class="title_txt">カテゴリ</h1>
              </div> -->
              <!-- <div class="centerize_container">
                <div class="photo_bg">
                  <div class="photo_item"></div>
                  <div class="photo_caption"></div>
                  <div class="stores_container">
                  <div class="storesjp-button" data-storesjp-item="5f617c82fbe5b5732acef0eb" data-storesjp-variation="5f617c82fbe5b5732acef0ed" data-storesjp-name="gypsyworks" data-storesjp-layout="layout_a" data-storesjp-lang="ja" ></div><script>(function(d,s,id){var st=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return;}var nst=d.createElement(s);nst.id=id;nst.src="//btn.stores.jp/button.js";nst.charset="UTF-8";st.parentNode.insertBefore(nst,st);})(document, "script", "storesjp-button");</script>
                  </div>
                </div>
                <div class="photo_bg"></div>
                <div class="photo_bg"></div>
              </div> -->
            <!-- </section> -->
          </div>
          <div class="column column3">
            <!-- <section>
                <div class="stage" @click="moveCat1">
                  <div class="note">クリックしたあたりまでスライドします</div>
                  <BoxCat1 ref="cat1" />
                </div>
            </section> -->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import '../assets/scss/style.scss'
// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import BoxCat1 from '../components/common/BoxCat1'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

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
      accessToken: ''
    }
  },
  mutations: {
  },
  created() {

  },
  mounted() {
    if (this.$store.state.token.access_token === "c26d324daa74924ca3c621512a9619fdbfaaf012a183d2756105efd9a1cf02a7"){
      console.log('in mounted')
      this.getProducts()
    }
    window.addEventListener("load", function(){

      // プラグインを定義 -> import直後へ移動
      // gsap.registerPlugin(ScrollTrigger);

      const parent = document.querySelector(".parent")
      // const horizontalize  = document.querySelector(".horizontalize");
      const columnContainer  = document.querySelector(".column_container");
      const columns = document.querySelectorAll(".column");
      const num   = columns.length;

      // 横幅を指定
      gsap.set(columnContainer,  { width: num * 100 + "%" });
      gsap.set(columns, { width: 100 / num + "%" });

      gsap.to(columns, {
        xPercent: 100 * ( num - 1 ), // x方向に移動させる
        ease: "none",
        scrollTrigger: {
          trigger: parent, // トリガー
          start: "top top", // 開始位置
          end: "+=1000", // 終了位置
          pin: true, // ピン留め
          scrub: true, // スクロール量に応じて動かす
        }
      });
    });
  },
  methods: {
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
    }
  }
}
</script>

<style scoped lang="scss">
.parent {
  // width: 100vw;
  height: 100vh;

  .horizontalize {
    // margin-right: -300vw;
    overflow: hidden;
    // position: absolute;

    // width: auto;
    // height: auto;
    .column_container {
      // float: right;
      // overflow: hidden;
      // height: 80vh;
      margin-left: -200vw;
      display: flex;
      // position: absolute;
      flex-direction: row-reverse;
      // width: 300vw;
      .column {
        // display: flex;
        // width: 100vw;
        height: 100vh;
        background-color: rgb(10, 20, 30);
        position: relative;

        // justify-content: center;
        // align-items: center;
        // font-size: 50px;
        // font-weight: bold;
        // color: #fff;
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
      .column1 { background-color: red; }
      .column2 { background-color: purple; }
      .column3 { background-color: blue; }
    }
  }
}


  // #toplogo{
  //   position: absolute;
  //   width: 30vh;
  //   height: 30vh;
  //   // background-color: rgb(100, 250, 200);
  //   //css3の中央揃え
  //   top: 50%;
  //   left: 50%;
  //   // margin-right: -50%;
  //   transform: translate(-50%, -50%);
  //   .logo_img{
  //     width: 100%;
  //     height: auto;
  //     object-fit: cover;
  //   }
  // }
  // #sns_container{
  //   position:absolute;
  //   display: flex;
  //   width: 30vh;
  //   height: 10vh;
  //   left: 5%;
  //   bottom:10%;
  //   //background-color: rgb(0, 0, 200);
  //   .snsimg{
  //     margin: 0px 10px;
  //     //background-color: rgb(200, 0, 200);
  //     width: 8vh;
  //     height: 8vh;
  //   }
  // }

  .title_txt{
    font-family: 'TF-HOTSU_L';
    font-size: 40px;
    color: rgb(100, 150, 100);
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
