<template>
  <nav>
    <div class="navbar">
      <NuxtLink to="/">
      <div class="navlogo"></div>
      </NuxtLink>
      <div class="navmenuContainer">
        <NuxtLink to="/catalog">
          <div class="navmenu">catalog</div>
        </NuxtLink>
        <NuxtLink to="/animation">
          <div class="navmenu">PHOTOS</div>
        </NuxtLink>
        <a class="navmenu" href="https://gypsyworks.stores.jp" target="blank">SHOP</a>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
  nav {
    .navbar{
      width: 100%;
      height:20vh;

    }
    .navlogo{
      height:80px;
      width:80px;
      float: left;
      background-color: #f5f;
    }
    //.navmenuContainer{
      .navmenu{
        display: inline-block;
        //float: right;
        width:80px;
        height:80px;
        background-color: #444;
      }
    //}
    width: 100%;
    background-color: #A4A4A4;
  }
</style>
