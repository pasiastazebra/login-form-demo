<template>
    <div class="inside-window">
      <form class="inside-window-signup-form">
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