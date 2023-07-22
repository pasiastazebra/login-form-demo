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
        <br>
        <input type="submit" class="button" value="Sign Up">
      </form>
      <div class="section">
        <p class="section-text">Or</p>
        <button class="google-button">Continue with Google</button>
        <button class="microsoft-button">Continue with Microsoft</button>
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
 
.button{
  font-weight: 100;
  font-size: 14px;
  color: #fff;

  background-color: #0066CC;
  padding: 6px;
  border: 2px solid #0066cc;

  box-shadow: none;
  border-radius: 10px;
  transition : 332ms;
  cursor: pointer;

  margin: 20px;
  //max-width: 45%;
  min-width: 45%;

  &:hover{
    transition : 332ms;
    background-color: #fff;
    color: #0066cc;
    border: solid 2px #0066cc;
  }
}
</style>