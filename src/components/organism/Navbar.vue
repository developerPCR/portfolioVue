<template>
  <div class="fixed z-10 right-0 top-0 w-full ">
    
     <nav class="
     font-['poppins'] 
     z-10 
     hidden 
     md:inline-flex  
     bg-[#f9f9ff] 
     relative 
     pr-10
     w-full 
     justify-end
     items-end">

      
        <ul class=" flex gap-x-8 mt-4 pb-5 items-center font-['poppins'] " >
           
              
          <!-- <router-link class="
            inline-block 
            transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-110  duration-70
            "  to="/">{{$route.name}}</router-link>
            

            <router-link class="
            inline-block 
            transition ease-in-out delay-30   hover:-translate-y-1 hover:scale-110  duration-70
            "
            to="/about">About </router-link>
            

            <router-link class="
              transition ease-in-out delay-30   hover:-translate-y-1 hover:scale-110  duration-70
              cursor-pointer"
            to="/skills" >Skills</router-link>



            <router-link class="
            inline-block 
            transition ease-in-out delay-30   hover:-translate-y-1 hover:scale-110  duration-70"
            to="/contact">Contact</router-link>  -->
            <CustomLink 
              v-for="link in links" :key="link.to" :link="link" 
              />

        </ul>
    </nav>

     <NavResponsive />      
   
 </div>
      
</template>



<script>
import CustomLink from '../molecules/CustomLink.vue';
import NavResponsive from '../atoms/NavResponsive.vue';

export default {
  name: 'Navbar',
  components: {
    NavResponsive,
    CustomLink
  },
    data () {

        return {
            links: [
                { to: '/', name: 'Home'},
                { to: '/about', name: 'About'},

                { to: '/skills', name: 'Skills'},
                { to: '/contact', name: 'Contact'},


              
                // en el to va el name que esta en routes.js
                // pero en el name de este array de objetos va el nombre que ira en el html
                


                ]
        } 
    },
 
 
}
</script>

<style scoped>
/* nav a.router-link-exact-active {
  color: #90acd1;
  border-bottom: 2px solid #90acd1;

} */
</style>

              

                
          
            

            

            
            
            





 
    






















