<template>
    <div class="inside-window">
      <form class="inside-window-signup-form">
        <div class="field-group">
          <input type="text" class="field" placeholder="First name" required/>
          <br>
          <input type="text" class="field" placeholder="Last name" required/>
        </div>
        <div class="field-group">
          <input type="tel" class="field single" placeholder="Phone number" required/>
        </div>
        <div class="field-group">
          <input type="email" class="field single" placeholder="E-mail" required/>
        </div>
        <div class="field-group">
          <input type="text" class="field single" placeholder="Login" required/>
        </div>
        <div class="field-group">
          <input type="password" class="field" placeholder="Password" required/>
          <br>
          <input type="password" class="field" placeholder="Confirm password" required/>
        </div>
        <br>
        <input type="submit" class="button" value="Sign Up">
      </form>
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

.inside-window {
  margin-top: 10px;
}

.inside-window-signup-form {
  padding: 5px;
}

.field-group {
  display: flex;
  justify-content: space-between;

  @media (max-width: 1100px) {
    flex-wrap: wrap;
  }
}

.field {
  flex: 0 0 48%;
  padding: 4px;
  font-size: 15px;
  border-width: 1px;
  border-color: $color;
  color: $color;
  border-style: solid;
  border-radius: 6px;
  margin: 2px;

  @media (max-width: 1100px) {
    flex: 0 0 100%;
  }
  
  &:focus {
    outline:none;
  }

  &::placeholder {
    color: $color;
  }
}

.single {
  flex: 0 0 98%;
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

  margin: 10px;
  max-width: 45%;
  min-width: 45%;

  &:hover{
    transition : 332ms;
    background-color: #fff;
    color: #0066cc;
    border: solid 2px #0066cc;
  }
}

@media (max-width: 1100px) {
  .field-group > br {
    display: none;
  }
}
</style>