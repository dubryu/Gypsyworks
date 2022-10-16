<template>
  <main>
    <div class="products_container">
      <div v-for="product in products" :key= "product.name" class="product_bg">
        <img class="product_photo" :src="product.image_url">
        <div class="product_name"> <p>{{product.name}}<br>¥{{product.members_price_including_tax}}</p></div><br>
        <div class="product_caption">
           <p>{{product.name}}</p>
        </div>

      </div>
    </div>

    <script type="text/javascript">
    </script>
  </main>
</template>


<script>
import { initializeApp } from 'firebase/app'
import { getStorage, ref, getDownloadURL } from "firebase/storage"
export default {
  data () {
    return {
      products: []
    };
  },

  created() {
    console.log("get inside catalog in created")
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
              console.log(this.products);
            }).catch(err => console.error(err));
      })
      .catch((error) => {
        console.log(error)
      })

  },
  mounted() {
    // console.log("get inside catalog mounted")
    // const firebaseConfig = {
    //   storageBucket: 'gs://gypsyworks-5cf3e.appspot.com'
    // }
    //   // Initialize Firebase
    // const app = initializeApp(firebaseConfig)
    // // Initialize Cloud Storage and get a reference to the service
    // const storage = getStorage(app)
    // // Create a storage reference from our storage service
    // const myfileRef = ref(storage, 'my-file')
    // // URL経由でダウンロード
    // getDownloadURL(myfileRef)
    //   .then((url) => {
    //     console.log(url)
    //     fetch(url)
    //       .then(result => result.json())
    //         .then((output) => {
    //           // var tempArr = output[0][1];
    //           for(const i in output.products) {
    //             this.products.push(output.products[i]);
    //           }
    //           console.log(this.products[1])
    //
    //         }).catch(err => console.error(err));
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })

  },

}

</script>
<style scoped lang="scss">
  .body{
    font-family: "Oradano";
  }
  #topback{
    width: 100%;
    height: 80vh;
    background-color: rgb(200, 102, 200);
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

  .products_container{
    display: flex;
    // background-color: rgb(50, 100, 150);
    flex-wrap: wrap;
    margin-top: 50px;
    justify-content: space-around;
    // font-family: "Oradano";
    .product_bg{
      width: 20vw;
      height: 45vh;
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
        height: 2vw;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        // background-color: rgb(100, 0,44);
        text-align: center;
        .p{
          font-family: "Oradano";
          font-size: 20px;
        }
      }
      .product_caption{
        width: 100%;
        height: 2vw;
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
  @font-face {
  	font-family: 'hotu';
  	src: url('../assets/fonts/TF-HOTSU_L.TTF');
    // src: local('TCM Hotsuma Character Large');
  }
</style>
