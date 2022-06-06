<template>
<div class="">
    
     <font-awesome-icon  :class="{'icon-active' : isOpen} " 
                class="md:hidden float-right px-5 pt-3  text-2xl cursor-pointer icon"
                @click="toggleMobileNav"
                :icon="['fa' , 'bars']" />

    <transition name="slide">
         <ul v-show="isOpen"  
         class="
         flex
         flex-col
         font-['poppins']
         bg-[#ffff]
         text-left
         relative
         w-72
         h-screen
         font-bold
         pl-10
         leading-10
         pt-6
         bg-opacity-80
         " 
         >
         
            <router-link  class="
            inline-block 
            hover:text-[#90acd1] 
            pb-5 
            "  to="/">Home</router-link> 
            <router-link  class="
            inline-block  
            hover:text-[#90acd1]  
            pb-5 
            "  to="/about">About </router-link>

            <router-link class="
            inline-block 
            hover:text-[#90acd1]  
            pb-5 
            "
            to="/skills" >Skills</router-link>

         
            <router-link class="
            inline-block w-full 
            hover:text-[#90acd1]  
            pb-5 
            "  to="/contact">Contact</router-link>
          </ul>
    </transition>
  </div>  
</template>

<script>

export default {
    
    name: "NavButton",
    data(){
      return{
          isOpen: false,

          
      }
    },
    created(){
      window.addEventListener('resize', this.checkScreen);
    },

    methods:{
      checkScreen(){
        this.isOpen = window.innerWidth
        if(this.isOpen >= 750 ){
          this.isOpen  = false
        }else{
            this.isOpen = false
        }
 
 
      },
      toggleMobileNav(){
          this.isOpen = !this.isOpen
      }
    }
}

</script>

<style scoped>
 .slide-enter-active,
.slide-leave-active{
  transition: opacity .3s, transform .5s;
}

.slide-enter-from,
.slide-leave-to{
  opacity: 0;
  transform: translateX(-50%);

}

 .icon{
    transition: 1s ease all;

} 
.icon-active{
    transform: rotateY(-180deg);
}



</style>
    
        
    
