<template>
  <div>
    <h1>Login Succeeded!</h1>
    <button v-on:click="authInfo">Logout</button>
  </div>
</template>
<script>
export default {
  methods: {
    authInfo() {
      console.log('おっす！auth：', this.$auth);
      this.$auth.logout();
    },
  },
};
</script>
