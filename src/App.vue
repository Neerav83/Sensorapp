<template>
  <div id="nav">
     PlantSensor   
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 15px;
  width:calc(100% - 30px);
  height:35px;
  font-size:18px;
  color:white;
  background-color:green;
  text-align: center;
  position: fixed;
  top:0;
  left:0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
*/
</style>
