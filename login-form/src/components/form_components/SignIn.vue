<template>
    <div class="inside-window">
      <div class="inside-window-signups">
      <form class="inside-window-signup-form">
        <input type="text" class="field" placeholder="Login or e-mail"/>
        <input type="password" class="field" placeholder="Password"/>
        <input type="submit" value="Sign In">
      </form>
      <div class="section">
        <p class="section-text">Or</p>
        <button class="button">Google</button>
        <button class="button">Microsoft</button>
      </div>
      <a>Cannot log in?</a>
    </div>
    </div>
</template>
  
<script>
export default {
  name: "SignIn"
};
</script>
  
<style scoped lang="scss">
  
</style>