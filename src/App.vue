<template>
<header>
  <Navbar/> 
  
</header>
 <routerView v-slot="{Component}" >

   <transition name="slide" mode="out-in">
     <component :is="Component" :key="$route.path"></component>
   </transition>
   
  </routerView>
</template>
   


<script>
import Navbar from '@/components/organism/Navbar'
import { RouterLink, RouterView } from 'vue-router'


export default {
  name: 'app',
  components: { 
    Navbar,

   }
}

</script>
<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
nav a.router-link-exact-active {
  color: #90acd1;
  border-bottom: 2px solid #90acd1;

}
nav a:hover {
  border-bottom: 2px solid #90acd1;
}


 .slide-enter-active,
.slide-leave-active{
  transition: opacity .3s, transform .3s;
}

.slide-enter-from,
.slide-leave-to{
  opacity: 0;
  transform: translateX(-50%);

} 








</style>
            
 



