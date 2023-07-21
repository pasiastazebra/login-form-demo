<template>
  <div class="window">
    <h1 class="window-title">We need a few information about you</h1>
    <nav class="window-switch">
      <router-link to="/signup" class="window-switch-option">SignUp</router-link>
      <router-link to="/signin" class="window-switch-option">SignIn</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "FormScreen"
};
</script>

<style scoped lang="scss">

</style>