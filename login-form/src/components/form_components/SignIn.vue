<template>
    <div class="inside-window">
      <div class="inside-window-signups">
      <form class="inside-window-signup-form">
        <div class="field-group">
          <input type="text" class="field" placeholder="Login or e-mail" required/>
          <input type="password" class="field" placeholder="Password" required/>
        </div>
        <div class="field-group">
          <input type="password" class="field" placeholder="Password" required/>
        </div>
        <br>
        <input type="submit" class="button" value="Sign In">
      </form>
      <a class="recover-password">Cannot log in?</a>
    </div>
    </div>
</template>
  
<script>
export default {
  name: "SignIn"
};
</script>
  
<style scoped lang="scss">

//color variable

$color: #a1a1a1;

.inside-window {
  margin-top: 10px;
}

.field {
  flex: 0 0 98%;
  padding: 4px;
  font-size: 15px;
  border-width: 1px;
  border-color: $color;
  color: $color;
  border-style: solid;
  border-radius: 6px;
  margin: 2px;
  
  &:focus {
    outline:none;
  }

  &::placeholder {
    color: $color;
  }
}

.field-group {
  display: flex;
  justify-content: space-between;
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
  min-width: 45%;

  &:hover{
    transition : 332ms;
    background-color: #fff;
    color: #0066cc;
    border: solid 2px #0066cc;
  }
}

.recover-password {
  outline: none;
  color: #287dd1;
  &:hover{
    color: #0066cc;
    border: solid 1px #0066cc;
    border-radius: 10px;
    cursor: help;
  }
}
</style>