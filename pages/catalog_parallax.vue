<template>
  <main>
    <section class="sec1img">
      <!-- <div class="title_container">
        <h1 class="title_txt">CATALOG</h1>
      </div> -->
      <div ref="tri1" class="main_container">
        <div class="main_title">
          <h1 v-rellax="{ speed:1.4 }" class="title_txt">CATALOG</h1>
        </div>
        <div class="sub_title">
          <h1 v-rellax="{ speed:1.4 }" class="title_txt">かすたむおーだー</h1>
        </div>
        <div class="left_split">

          <div id="cap1" v-rellax="{ speed:2 }" class="caption_bx">
            <h2 v-rellax="{ speed:-2 }" class="caption_title">手ぬぐい</h2>
            <div v-rellax="{ speed:-3 }" class="caption_detail">GYPSYWORKSの制作の中心とも云える<br>染めを使ったシンプルな手ぬぐい。<br><br><br><br>
              日本では昔から端切れの布から洗顔入浴装飾包むなど、生活必需品としての親しまれてきた手ぬぐいを、タイダイの手法と独自の発想で染めた一点ものを制作。<br><br><br><br><br><br>
              納期 : 約一ヶ月<br><br><br><br>
              サイズ :~~~ × ~~~~<br><br><br><br>
              カラー : 応相談<br><br><br><br>
              オーダー価格 : ¥4,200
            </div>
          </div>
          <!-- <div class="caption_bx2">{{ msg }}</div> -->
        </div>
        <div class="right_sprit">
            <div class="right-sticky">
              <img class="right_img_container" src="~@/static/tyedie.jpg"></img>
              <img class="right_img_container2" src="~@/static/tyedie2.jpg"></img>
              <img class="right_img_container3" src="~@/static/tyedie3.jpg"></img>
              <img class="right_img_container4" src="~@/static/tenugui4.jpg"></img>
            </div>
        </div>
      </div>
    </section>

    <section class="sec2img">
      <div ref="tri3" class="main_container_second">
        <div class="left_split">
          <!-- <h2 v-rellax="{ speed:-2 }" class="caption_title">スケートボード</h2> -->
          <div id="cap2" v-rellax="{ speed:2 }" class="caption_bx_3split">
            <h2 class="caption_title">スケートボード</h2>
            <div v-rellax="{ speed:-1.8 }" class="caption_detail_narrow">染めた布をスケートボード全体、または一部に張って定着させ<br>
              近代のインクジェット等による量産品とは異なる趣を持った板を制作。<br><br><br><br>
              布を張るのはもちろん'彫り'とその両方の加工、板の指定や持ち込みも◎。<br><br><br><br>
              納期 : 約一ヶ月<br><br><br><br>
              サイズ :~~~ × ~~~~<br><br><br><br>
              カラー : 応相談<br><br><br><br>
              オーダー価格 : ¥100,000
            </div>
          </div>
          <div id="cap3" v-rellax="{ speed:2 }" class="caption_bx_3split">
            <h2 class="caption_title">iphone case</h2>
            <div v-rellax="{ speed:-1.2 }" class="caption_detail_narrow">スケートボードなど木工品以外のアクリル、シリコン製品にも布を張る手法が応用できる<br>
              もはや日用品になった携帯電話を一点ものに変えるケース。<br><br><br><br>
              <br><br><br>
              納期 : 約一ヶ月<br><br><br><br>
              サイズ :~~~ × ~~~~<br><br><br><br>
              カラー : 応相談<br><br><br><br>
            </div>
          </div>
          <div id="cap4" v-rellax="{ speed:2 }" class="caption_bx_3split">
            <h2 class="caption_title">T-SHIRTS</h2>
            <div v-rellax="{ speed:-1.1 }" class="caption_detail_narrow">染めの伝統的な技法で、現代に遊ぶ全ての人を彩る全宇宙的総天然色。<br><br><br><br>
              シルクスクリーンとのミックスや部分的に染める技法もありオーダーのテイストに沿って提案。こちらも持ち込んだTシャツでも◎<br><br>
              納期 : 約一ヶ月<br><br><br><br>
              サイズ :~~~ × ~~~~<br><br><br><br>
              カラー : 応相談<br><br><br><br>
            </div>
          </div>
        </div>
        <div class="right_sprit">
          <div class="right-sticky">
            <img class="right_img_container" src="~@/static/skateboard_1.jpg"></img>
            <img class="right_img_container5" src="~@/static/skateboard_2.jpg"></img>
            <img class="right_img_container6" src="~@/static/iphone1.jpg"></img>
            <img class="right_img_container7" src="~@/static/iphone2.jpg"></img>
            <img class="right_img_container8" src="~@/static/T-Products_3.jpg"></img>
            <img class="right_img_container9" src="~@/static/T-Products_4.jpg"></img>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="title_container">
        <h1 class="title_txt">How to order</h1>
      </div>
      <div class="parag_container">
        <instagram-embed
          :url="'https://www.instagram.com/p/Bs_yHwHBjKo/'"
        />
        ご注文に際しての注意点<br>
        ・当店の商品価格は全て消費税込み（内税）の価格表示となっております。<br>
        ・ご注文は合計額が2,501円以上から承ります。<br>
          この額以下のご注文があった場合、ご注文は無条件で
          キャンセル／削除させていただきますのでご注意ください。<br>
        ・送料や時間指定など配達関連、お支払い方法などについては
          下記に記載がございます。ご注文の前に良くお読みください。<br>
        ・ご注文日から2週間以内に商品をお受け取りになれる方のみ、ご注文ください。<br>
          何週間も先のお受け取り日を指定されても、当方では対応できません。<br><br><br>

      </div>
      <h1>all rights reserved<br>じぷしーわーくす</h1>
    </section>
  </main>

</template>

<style scoped lang="scss">
// @mixin triggerCSS {
//   width: 80%;
//   height: 200vh;
//   margin: 10% 10%;
//   background-color: rgb(255, 250, 250, 0.8);
// }
.sec1img {
  background-image: url("../static/wood1.jpg");
}
.sec2img {
  background-image: url("../static/iphone1.jpg");
}
.title_container {
  // background-color: rgb(255, 222, 222);
  // 対ユーザーエージェント
  color: white;
  h1 {
    margin-bottom: 0px;
  }
}
.title_txt {
  font-family: "Oradano-mincho-GSRR";
  font-size: 40px;
  font-feature-settings: "titl";
  color: #140F0E;
}
.main_container{
  height: 250vh;
  width: 100vw;
  position: relative;
  // background-color: rgb(200, 200, 0);
  display: flex;
  .main_title {
    position: absolute;
    background-color: rgb(0, 0, 0, 0.9);
    left: 20%;
    top: 0%;
    width: 50%;
    transform: rotate(0.01turn);
    z-index: 5;
    .title_txt {
      color: white;
      padding: 0% 20%;
    }
  }
  .sub_title {
    position: absolute;
    background-color: rgb(0, 10, 0, 0.6);
    left: 20%;
    top: 5%;
    width: 50%;
    transform: rotate(-0.005turn);
    z-index: 5;
    .title_txt {
      color: white;
      padding: 0% 20%;
      font-size: 32px;
    }
  }
}
.main_container_second {
  height: 500vh;
  width: 100vw;
  // position: relative;
  // background-color: rgb(255, 0, 0);
  display: flex;
}
.left_split{
  width: 50%;
  height: auto;
  // background-color: rgb(255, 222, 222);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  .caption_bx{
    // @include triggerCSS;
    width: 80%;
    height: 200vh;
    margin: 10% 10%;
    background-color: rgb(255, 250, 250, 0.8);
  }
  .caption_bx_2split{
    width: 80%;
    height: 45%;
    margin: 10% 10%;
    background-color: rgb(255, 250, 250, 0.8);
  }
  .caption_bx_3split {
    width: 80%;
    height: 30%;
    margin: 10% 10%;
    background-color: rgb(255, 250, 250, 0.8);
  }
  .caption_title{
    // height: auto;
    margin: 10% 20% 10% 10% ;
    font-family: "Oradano-mincho-GSRR";
    font-size: 20px;
    font-feature-settings: "titl";
  }
  .caption_detail {
    width: 80%;
    height: 80%;
    margin: 30% 10% 0%;
    font-family: "Oradano-mincho-GSRR";
    font-size: 15px;
    font-feature-settings: "titl";
    // background-color: rgb(0, 0, 0, 0.7);
  }
  .caption_detail_narrow {
    width: 80%;
    height: 80%;
    margin: 10% 10% 0%;
    font-family: "Oradano-mincho-GSRR";
    font-size: 15px;
    font-feature-settings: "titl";
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
    @mixin image_containerCSS {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      min-width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: top;
      position: absolute;
    }
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
    .right_img_container6{
      @include image_containerCSS;
    }
    .right_img_container7{
      @include image_containerCSS;
    }
    .right_img_container8{
      @include image_containerCSS;
    }
    .right_img_container9{
      @include image_containerCSS;
    }
  }

}
.parag_container {
  // 高さは子要素に合わせることにする
  height: 70vh;
  width: 60vw;
  margin: 0% 20% 0% 20%;
  color: #140F0E;
}
.parag_container + h1{
  font-family: "Oradano-mincho-GSRR";
  font-size: 28px;
  font-feature-settings: "titl";
  text-align: center;
  margin-bottom: 5%;
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
  name: 'Scrolls',
  props: {
    switchLength: {
      type: String,
      default: '200',
    },
  },
  data () {
    return {
      msg: 'change point',
      scrollY: 0,
      clipStartYIn1: 0, // ざっくりと意図した範囲外で表示されないための初期値設定
      clipStartY2In1: 0,
      clipStartYIn2: 0,
      clipStartY2In2: 0,
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
            // pin: true,
        },
        {
          x: '0',
          y: '0',
          // scaleY: 1,
          clipPath: "inset(0% 0% 0%)",
          scrollTrigger: {
            trigger: '#cap1',
            // 第一引数＝トリガー要素の指定した位置と第二引数=ブラウザ画面の指定した位置 がアニメーションの起点、終点になる
            start: '40% bottom',
            end: '+=250 bottom',
            // アニメーションをスクロール位置にリンクさせる
            scrub: true,
            markers: false, // マーカー表示
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
            trigger: '#cap1',
            start: '60% bottom',
            end: '+=250 bottom',
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
          clipPath: "inset(0% 0% 0%)",
          scrollTrigger: {
            trigger: '#cap1',
            start: '80% bottom',
            end: '+=250 bottom',
            scrub: true,
            markers: false,
          }
        }
      )
    },
    scrollItemD() {
      // const browserH = String(window.innerHeight);
      gsap.fromTo('.right_img_container5', {
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
            trigger: '#cap2',
            // 第一引数＝トリガー要素の指定した位置と第二引数=ブラウザ画面の指定した位置 がアニメーションの起点、終点になる
            start: '70% bottom',
            end: '+=180 bottom',
            scrub: true,
            markers: false, // マーカー表示
          }
        }
      )
    },
    scrollItemE() {
      gsap.fromTo('.right_img_container6', {
            x: "0",
            y: "0",
            scaleX: 1,
            clipPath: "inset(0% 0% 0% 100%)",
        },
        {
          x: '0',
          y: '0',
          clipPath: "inset(0% 0% 0% 0%)",
          scrollTrigger: {
            trigger: '#cap3',
            start: '10% bottom',
            end: '+=180 bottom',
            scrub: true,
            markers: false, // マーカー表示
          }
        }
      )
    },
    scrollItemF() {
      gsap.fromTo('.right_img_container7', {
            x: "0",
            y: "0",
            scaleX: 1,
            clipPath: "inset(0% 0% 0% 100%)",
        },
        {
          x: '0',
          y: '0',
          clipPath: "inset(0% 0% 0% 0%)",
          scrollTrigger: {
            trigger: '#cap3',
            start: 'center bottom',
            end: '+=180 bottom',
            scrub: true,
            markers: false, // マーカー表示
          }
        }
      )
    },
    scrollItemG() {
      gsap.fromTo('.right_img_container8', {
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
            trigger: '#cap4',
            start: '10% bottom',
            end: '+=180 bottom',
            scrub: true,
            markers: false, // マーカー表示
          }
        }
      )
    },
    scrollItemH() {
      gsap.fromTo('.right_img_container9', {
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
            trigger: '#cap4',
            start: 'center bottom',
            end: '+=180 bottom',
            scrub: true,
            markers: false, // マーカー表示
          }
        }
      )
    },
    scrollGradation() {
      gsap.fromTo('body', {
          background: "#140F0E",
          delay: 50,
        },
        {
          background: "#F1EDDC",
          scrollTrigger: {
            trigger: '.parag_container',
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true,
            markers: false, // マーカー表示
          }
        }
      )
    },

    handleScroll() {
      // スクロール量の取得代入
      this.scrollY = window.scrollY;
    },
    setRandomRotate() {
      // document.getElementByClassName("main_title").style.transform = "rotate(" + Math.floor(Math.random()) + "turn)";

      // const sub = document.getElementsByClassName("sub_title");
      // sub.style.transform = "rotate(" + Math.floor(Math.random()) + "turn)";
    },
    getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    },
  },
  created() {

  },
  mounted() {
    window.addEventListener("load", function(){
      console.log("loooooooooooooooood");
      // document.querySelectorAll('main_title').style.transform = "rotate(0.03turn)"
      $(".main_title").css("transform", "rotate(0.03turn);");
      // this.setRandomRotate();
    });
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
      this.scrollItemE();
      this.scrollItemF();
      this.scrollItemG();
      this.scrollItemH();
      this.scrollGradation();
    });
  },
}
</script>
