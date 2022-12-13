<template>
  <nav id="nav">
    <div class="hamburger" v-on:click='active=!active'>
        <span class="line line01" v-bind:class="{'v-line01':active}"></span>
        <span class="line line02" v-bind:class="{'v-line02':active}"></span>
        <span class="line line03" v-bind:class="{'v-line03':active}"></span>
    </div>
    <transition name="menu">
    <div class="menu" v-show="active">
        <ul>
          <NuxtLink to="/">
            <li><div class="humTOP" v-on:click='active=!active'>TOP</div></li>
          </NuxtLink>
          <NuxtLink to="/catalog_parallax">
            <li><div class="humCATA" v-on:click='active=!active'>CATALOG</div></li>
          </Nuxtlink>
            <li><a href="https://gypsyworks.shop-pro.jp" target="blank" v-on:click='active=!active'>SHOP</a></li>
            <!-- <li><a href="#news" v-on:click='active=!active'>NEWS</a></li> -->
        </ul>
    </div>
    </transition>

    <!-- <div class="navbar">
      <NuxtLink to="/">
      <div class="navlogo">
        <img class="logo_img" src="../../static/Gypsyworks_logo_black.png"></img>
      </div>
      </NuxtLink>
      <div class="hummenuContainer">
        <NuxtLink to="/categories">
          <div class="hummenu">CATEGORIES</div>
        </NuxtLink>
        <NuxtLink to="/catalog_parallax">
          <div class="hummenu">CATALOG_PARA</div>
        </NuxtLink>
        <a class="hummenu" href="https://gypsyworks.stores.jp" target="blank">SHOP</a>
      </div>
    </div> -->
  </nav>
</template>
<script>
  export default{
    el: '#nav',
    data() {
      return{active: false}

    }
  };
</script>
<style scoped lang="scss">
  nav {
    width: 10vw;
    // background-color: #A4A4B5;
    height: 100vh;
    // display: flex;
    margin-right: 0;
    margin-left: auto;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1000;
    // flex-direction: row-reverse;
    // justify-content: flex-end;
    .navbar{
      // width: 100%;
      // height:20vh;

      // width: 10vw;
      // height: 100vh;
      display: flex;
      flex-direction: column;
      // z-index: 1000;
      // float: right;
    }
    .navlogo{
      height:80px;
      width:80px;
      float: left;
      background-color: #f56;
      .logo_img{
        height: auto;
        width: 100%;
      }
    }
    //.hummenuContainer{
      .hummenu{
        display: inline-block;
        //float: right;
        width:80px;
        height:80px;
        background-color: #444;
      }
    //}
  }
  a{
  color:#000;
  }
  .hamburger {
    position: fixed;
    top: 26px;
    right: 0;
    width: 70px;
    height: 70px;
    cursor: pointer;
    z-index: 9;
  }
  .hamburger .line {
    position: absolute;
    top: 0;
    left: 20px;
    width: 32px;
    height: 2px;
    background: #FFFFFF;
    text-align: center;
  }
  .hamburger .line01 {
    top: 16px;
    transition: 0.4s ease;
  }
  .hamburger .line02 {
    top: 26px;
    transition: 0.4s ease;
  }
  .hamburger .line03 {
    top: 36px;
    transition: 0.4s ease;
  }
  .v-line01 {
    transform: translateY(10px) rotate(-45deg);
    transition: 0.4s ease;
  }
  .v-line02 {
    transition: 0.4s ease;
    opacity: 0;
  }
  .v-line03 {
    transform: translateY(-10px) rotate(45deg);
    transition: 0.4s ease;
  }
  // vue transitionラッパーによるenterとenter-to(表示時)/leaveとleave-to間に何秒かけるか
  .menu-enter-active, .menu-leave-active {
    transition: opacity 0.4s;
  }
  // 表示イベントの最初と非表示イベントの最後を透明に
  .menu-enter, .menu-leave-to {
    opacity: 0;
  }
  .menu li {
    list-style: none;
    line-height: 1;
    padding: 1rem;
  }
  .menu {
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 8;
    padding: 4vw;
    position: fixed;
    width: 25%;
    height: 100vh;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu ul li {
    font-family: "Oradano-mincho-GSRR";
    font-size: 20px;
    font-feature-settings: "titl";
    font-size: 20px;
    line-height: 2;
    // text-align:center;
    margin: 0% -20% 0%;
    .humTOP {
      transform: rotate(0.3turn);
    }
    .humCATA {
      transform: rotate(-0.01turn);
    }
  }
</style>
