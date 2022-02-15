<script>
  import axios from 'axios'


export default {
  data() {


  var token= localStorage.getItem('token');

  if (token!=""){


      axios.post('http://192.168.68.107:8000/checktoken',{},{
          headers: {'x-access-token': token}

      })
      .then(res=>{
         
     // console.log("loggedin");

//    console.log();

      if (res.data == 'Invalid Token'){
    //      alert("test");
          localStorage.setItem('token',"");
         document.location="/"
         //    this.$router.push('/');

      }
      })
    
      .catch (err => {
          
          document.location="/";
      
      //    this.$router.push('/');


      }) 

    return {
     // loggedin:loggedin
    }
  }
}
}
 // console.log();
  //var test="loggedin";

</script>
