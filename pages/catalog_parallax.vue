<template>

  <main>

      <section>
        <div class="title_container">
          <h1 class="title_txt">CATALOG</h1>
        </div>
        <div ref="tri1" class="main_container">
          <div class="left_split">
            <h2 v-rellax="{ speed:2 }" class="main_title">手ぬぐいい</h2>
            <div class="sc_trigger1">{{ msg }}</div>
            <div class="sc_trigger2">{{ msg }}</div>
          </div>
          <div class="right_sprit">
              <div class="right-sticky">
                <img class="right_img_container" src="~@/static/tyedie.jpg"></img>
                <img class="right_img_container2" src="~@/static/tyedie2.jpg"></img>
                <img class="right_img_container3" src="~@/static/tyedie3.jpg"></img>
              </div>
          </div>
        </div>
      </section>

      <section>
        <div ref="tri3" class="main_container_second">
          <div class="left_split">
            <h2 v-rellax="{ speed:2 }" class="main_title">スケートボード</h2>
            <div class="sc_trigger3">{{ msg }}</div>
            <div class="sc_trigger4">trigger4</div>
            <div class="sc_trigger5">trigger5</div>
          </div>
          <div class="right_sprit">
            <div class="right-sticky">
              <img class="right_img_container" src="~@/static/tyedie.jpg"></img>
              <img class="right_img_container4" src="~@/static/wood1.jpg"></img>
              <img class="right_img_container5" src="~@/static/iphone1.jpg"></img>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="title_container">
          <h1 class="title_txt">How to order {{ scrollY }}</h1>
        </div>
        <div class="page_container">
          <instagram-embed
            :url="'https://www.instagram.com/p/Bs_yHwHBjKo/'"
          />
        </div>
      </section>
  </main>

</template>

<style scoped lang="scss">
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
  .main_container{
    height: 250vh;
    width: 100vw;
    background-color: rgb(200, 200, 0);
    display: flex;
    .left_split{
      width: 50%;
      height: auto;
      background-color: rgb(255, 0, 100);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
    }
  }
  .main_container_second {
    height: 250vh;
    width: 100vw;
    background-color: rgb(255, 0, 0);
    display: flex;
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
    height: 100%;
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
        // top: 0;
        // left: 0;
        // width: 100%;
        // height:100vh;
        // background-color: rgb(210, 30, 100);
        // overflow: hidden;
        // min-width: 100%;
        // position: absolute;
        @include image_containerCSS;
      }
      .right_img_container2{
        // top: 0;
        // left: 0;
        // width: 100%;
        // height: 100%;
        // background-color: rgb(210, 30, 100);
        // overflow: hidden;
        // min-width: 100%;
        // max-height: 100%;
        // object-fit: cover;
        // object-position: top;
        // position: absolute;
        @include image_containerCSS;
        transform-origin: left top;
        // clip-path 100%でimgが見えなくなるマスクの設定。適用範囲開始位置以下で100%, 適用終点以上で0%にすることでだんだん表示させる
        // 計算式：1 - ((スクロール量 - クリッピングマスク解除適用開始位置の座標) / 解除開始から終了までのスクロール幅) * 100%
        // clip-path: inset(0% 0% calc((1 - min((max(var(--scroll-Y), 0) - var(--clipStart-YIn1)) / var(--switch-Length), 1)) * 100%));
      }
      .right_img_container3{
        // top: 0;
        // left: 0;
        // width: 100%;
        // height: 100%;
        // background-color: rgb(210, 30, 100);
        // overflow: hidden;
        // min-width: 100%;
        // max-height: 100%;
        // object-fit: cover;
        // object-position: top;
        // position: absolute;
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
  .detail_container{
    width: 60vw;
    height: auto;
    background-color: rgb(100, 150, 200);
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // flex-direction: column;
    #img_container{
      background-color: rgb(100, 150, 0);
      height: 30vh;
      width: 60vw;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      .detail_img{
        margin: 10px;
        height: 10vh;
        width: 13vw;
      }
    }
    #word_container{
      height: 30vh;
      width: 60vw;
      background-color: rgb(200, 150, 0);
      .paragraph{
        background-color: #111;
        //margin: 10px;
      }
    }
  }
  .swiper {
    height: 300px;
    width: 100%;
    .swiper-slide {
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-pagination {
      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }

</style>

<script>
// import Vue from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// クライアントサイドでプラグインを登録しておく
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  // components: { Intersect },
  name: 'SwiperNuxt',
  props: {
    switchLength: {
      type: String,
      default: '200',
    },
  },
  data () {
    return {
      msg: 'I will change',
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      scrollAmount: 0,
      scrollY: 0,
      clipStartYIn1: 0, // ざっくりと意図した範囲外で表示されないための初期値設定
      clipStartY2In1: 0,
      clipStartYIn2: 0,
      clipStartY2In2: 0,
      degugScroll: 0,
    }
  },
  computed: {
    styleVariables() {
      // cssのカスタムプロパティ
      return {
        '--scroll-Y': this.scrollY,
        '--clipStart-YIn1': this.clipStartYIn1, // imgへのクリッピングマスク動作が始まる座標
        '--clipStart-Y2In1': this.clipStartY2In1,
        '--clipStart-YIn2': this.clipStartYIn2,
        '--clipStart-Y2In2': this.clipStartY2In2,
        '--switch-Length': this.switchLength, // 高さ可変imgの100%height表示までの距離
      };
    },

  },
  methods: {
    scrollItemA() {
      // const browserH = String(window.innerHeight);
      gsap.fromTo('.right_img_container2', {
            // 関数で指定することで、リサイズによって要素の大きさが変わっても自動でアニメーションを計算し直してくれます。
            // x: () => -(listEl.clientWidth - listWrapperEl.clientWidth) https://liginc.co.jp/548232#JavaScript
            x: "0",
            y: "0",
            // y: browserH,
            scaleX: 1,
            // scaleY: 0,
            clipPath: "inset(0% 0% 100%)",
        },
        {
          x: '0',
          y: '0',
          // scaleY: 1,
          clipPath: "inset(0% 0% 0%)",
          scrollTrigger: {
            trigger: '.sc_trigger1',
            // 第一引数＝トリガー要素の指定した位置と第二引数=ブラウザ画面の指定した位置 がアニメーションの起点、終点になる
            start: 'top bottom',
            end: 'bottom bottom',
            // アニメーションをスクロール位置にリンクさせる
            scrub: true,
            markers: true, // マーカー表示
            // once: true,
            // pin: true,
            // anticipatePin: 1,
          }
        }
      )
    },
    scrollItemB() {
      gsap.fromTo('.right_img_container3', {
            x: "0",
            y: "0",
            scaleX: 1,
            clipPath: "inset(0% 0% 100%)",
        },
        {
          x: '0',
          y: '0',
          clipPath: "inset(0% 0% 0%)",
          scrollTrigger: {
            trigger: '.sc_trigger2',
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true,
            markers: false, // マーカー表示
          }
        }
      )
    },
    scrollItemC() {
      // const browserH = String(window.innerHeight);
      gsap.fromTo('.right_img_container4', {
            x: "0",
            y: "0",
            // y: browserH,
            scaleX: 1,
            // scaleY: 0,
            clipPath: "inset(0% 0% 100%)",
        },
        {
          x: '0',
          y: '0',
          // scaleY: 1,
          clipPath: "inset(0% 0% 0%)",
          scrollTrigger: {
            trigger: '.sc_trigger3',
            // 第一引数＝トリガー要素の指定した位置と第二引数=ブラウザ画面の指定した位置 がアニメーションの起点、終点になる
            start: 'top bottom',
            end: 'bottom bottom',
            // アニメーションをスクロール位置にリンクさせる
            scrub: true,
            markers: false, // マーカー表示
            // once: true,
          }
        }
      )
    },
    scrollItemD() {
      // const browserH = String(window.innerHeight);
      gsap.fromTo('.right_img_container5', {
            x: "0",
            y: "0",
            // y: browserH,
            scaleX: 1,
            // scaleY: 0,
            clipPath: "inset(0% 0% 100%)",
        },
        {
          x: '0',
          y: '0',
          // scaleY: 1,
          clipPath: "inset(0% 0% 0%)",
          scrollTrigger: {
            trigger: '.sc_trigger4',
            // 第一引数＝トリガー要素の指定した位置と第二引数=ブラウザ画面の指定した位置 がアニメーションの起点、終点になる
            start: 'top bottom',
            end: 'bottom bottom',
            // アニメーションをスクロール位置にリンクさせる
            scrub: true,
            markers: false, // マーカー表示
            // once: true,
          }
        }
      )
    },
    // 以下のようにmethodsに書いた関数を要素のv-observe-visibilityとして指定すると表示領域に入ったら呼ばれるようになる
    visibility1Changed (isVisible, entry) {
      if (isVisible) {
        console.log("zero is visible");
      }
    },
    handleScroll() {
      // スクロール量の取得代入
      this.scrollY = window.scrollY;
    },

  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    // 垂直スライドの起点の要素の座標を取得
    // this.clipStartYIn1 = this.$refs.tri1.getBoundingClientRect().top + window.pageYOffset;
    // this.clipStartY2In1 = this.$refs.tri2.getBoundingClientRect().top + window.pageYOffset;
    // this.clipStartYIn2 = this.$refs.tri3.getBoundingClientRect().top + window.pageYOffset;
    // this.clipStartY2In2 = this.$refs.tri4.getBoundingClientRect().top + window.pageYOffset;
    this.$nextTick(() => {
      this.scrollItemA();
      this.scrollItemB();
      this.scrollItemC();
      this.scrollItemD();
    });
  },
}
</script>
