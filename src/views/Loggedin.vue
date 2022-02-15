<template>

  <div class="loggedin">
      <sensors />
  </div>
</template>

<style scoped>

.loggedin {
  position: fixed;
  top: 55px !important;
  left:0;
  width:100%;
  text-align: center;
}
</style>

<script>


// @ is an alias to /src
//import loggedin from '@/components/checklogin.vue'
import sensors from '@/components/sensors.vue'

export default {
  components: {
 //   loggedin,
    sensors
  }
}

//console.log<();
//console.log(localStorage.getItem('token'));
</script>
