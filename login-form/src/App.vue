<template>
  <FormScreen/>
</template>

<script>
import FormScreen from "./components/FormScreen.vue";

export default {
  name: "App",
  components: {
    FormScreen,
  },
};
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #030708;
  margin-top: 60px;
}

body {
  background-color: #d2ecec;
}
</style>
