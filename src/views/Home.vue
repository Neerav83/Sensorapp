<template>
  <div class="home">
    <Main msg="Welcome to Your Vue.js App!!!"/>
  
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    Main:Main
  }
}
</script>
