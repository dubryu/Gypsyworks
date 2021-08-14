<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<!-- TODO 以下がなくても動くか試す -->
<script>
  import TheHeader from '~/components/common/TheHeader.vue';
  import TheFooter from '~/components/common/TheFooter.vue';

  export default {
    components: {
      TheHeader,
      TheFooter
    }
  }
</script>
