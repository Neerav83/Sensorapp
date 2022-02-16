
<template>
<div class=sensors>
  <div class="sensorcontainer">
   <table> 
     <thead>
     <tr><th>AreaName</th><th>Sensorname</th><th>Status</th><th>Tid</th></tr>
     </thead><tbody>
 <tr v-for="item in items" :key="item.id">
          <td>{{ item.areaname }}</td>
          <td>{{ item.sensorname }}</td>
            <td>{{ item.status }}</td>
          <td>{{ new Date(item.time).toLocaleString() }}</td>
          
       
        </tr>
        </tbody>
   </table>
 </div>
 
 </div> 
</template>



<script>
import axios from 'axios'
 // console.log(token);

export default {
  data() {
    return {
      items: ''

    }
    
  },
  methods:{
    
     async Getsensordata(){
     var token= localStorage.getItem('token');
      await axios.post('http://98.128.191.251:5000/getsensors',{},{
    
    //  await axios.post('http://192.168.68.107:8000/getsensors',{},{
          headers: {'x-access-token': token}
      })
      .then(res=>{
        if (res.data=='Invalid Token'){
       } else {
         this.items=res.data;
       }
      })
      .catch(err =>{
     
      })                   
      }
},
mounted() {
  
  this.Getsensordata();
}
}

</script>
<style scoped>

.sensors{
  background-image: url("../assets/chili-planta.jpg");
  height:100vh;
}
.sensorcontainer{
   padding:10px;
  background-color:rgba(211,211,211,0.8);
  height:100%;
  overflow:hidden;
  text-align: left;

}
</style>
