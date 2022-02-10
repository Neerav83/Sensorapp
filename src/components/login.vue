<template>
  <div class="login">
    <form >
    Användarnamn:<br>
    <input class='input' style='margin-bottom:5px;' type=text><br>
    Lösenord:<br>
    <input class='input' type=password><br>
    <br>
    <input class=button  type=submit value="Logga in">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.input {
  padding:5px;
  width:75%;
  height:25px;
  color: #42b983;
}


.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width:75%;
  height: 35px;
}
</style>
