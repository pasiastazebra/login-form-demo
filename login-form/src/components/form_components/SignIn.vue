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

//color var

$color: #a1a1a1;

.field {
  padding: 4px;
     font-size: 15px;
     border-width: 1px;
     border-color: $color;
     color: $color;
     border-style: solid;
     border-radius: 6px;

     margin: 2px;
     max-width: 45%;
     &:focus {
      outline:none;
     }

     &::placeholder {
      color: $color;
     }
}
  
</style>