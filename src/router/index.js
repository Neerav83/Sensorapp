import { guardReactiveProps } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import loggedin from '../views/Loggedin.vue'
import axios from 'axios'


const guard = function (to, from, next) {

  var token= localStorage.getItem('token');
  axios.post('http://98.128.191.251:8000/checktoken',{},{
  
  
  //axios.post('http://192.168.68.107:8000/checktoken',{},{
    headers: {'x-access-token': token}

})
.then(res=>{
  if (res.data != "Invalid Token"){
  next();
  }
  else {
    document.location="/";

  }
})

.catch (err => {    
    document.location="/";
}) 


}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/loggedin',
    name: 'Loggedin',
     component: loggedin,

     beforeEnter: (to, from , next) => {
     guard(to, from, next);
     }

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
