<template>
    <div class="inside-window">
      <form class="inside-window-signup-form">
        <!-- Need to delete <br> in the future -->
        <input type="text" class="field" placeholder="First name"/>
        <input type="text" class="field" placeholder="Last name"/>
        <input type="text" class="field" placeholder="Login"/>
        <input type="email" class="field" placeholder="E-mail"/>
        <input type="password" class="field" placeholder="Password"/>
        <input type="password" class="field" placeholder="Confirm password"/>
        <input type="tel" class="field" placeholder="Phone number"/>
        <input type="submit" value="Sign Up">
      </form>
      <div class="section">
        <p class="section-text">Or</p>
        <button class="button">Google</button>
        <button class="button">Microsoft</button>
      </div>
    </div>
</template>
  
<script>
export default {
  name: "SignUp"
};
</script>
  
<style scoped lang="scss">
  
</style>