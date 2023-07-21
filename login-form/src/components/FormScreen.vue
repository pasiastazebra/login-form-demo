<template>
  <div class="window">
    <h1 class="window-title">We need a few information about you</h1>
    <nav class="window-switch">
      <router-link to="/signup" class="window-switch-option">Sign Up</router-link>
      <router-link to="/signin" class="window-switch-option">Sign In</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "FormScreen"
};
</script>

<style scoped lang="scss">

//color variables

$primary: #6e98cf;
$secondary: #e8bdba;
$accent: #a17236;
$windowBackground: #f7f7f7;

.window {
  background-color: $windowBackground;

  max-width: 50%;
  margin: 5% 30%;
  padding: 1px;

  border-width: 5px;
  border-style: solid;
  border-color: #f7f7f700;
  border-radius: 16px;

  box-shadow: 14px 14px 16px -11px $primary;

  &-title {
    font-size: 25px;
  }

  &-switch {
  border-width: 1px;
  border-style: solid;
  border-color: $primary;
  border-radius: 6px;

  max-width: 50%;
  margin: 6px 25%;

  display:grid;
  grid-template-columns: 1fr 1fr; 

  &-option {
    text-decoration: none;
    color: $primary;
    margin: 2px;

    transition: background-color 0.3s ease-in-out;
    &.router-link-active {
      background-color: $primary;
      color: white;
      border-color: $primary;
      border-radius: 3px;
    }
  }
  }
}
</style>