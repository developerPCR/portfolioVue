<template>
<div>
  <header
  class="
  bg-[#f9f9ff]
  px-5 
  " >

      <p class="
      tracking-[.30em] 
      font-extrabold 
      pt-16
      " >
      HEY! I AM</p>

      <h1 class="
      font-bold  
      font-['poppins'] 
      text-4xl 
      mt-5 
      text-[#90acd1]">
          Pablo CR !</h1>


      <TypeEffect/>

      <SocialMedia/>    
    <MyServices />
  </header>
</div>
</template>

<script>
import MyServices from '@/components/molecules/MyServices.vue'
import TypeEffect from '@/components/molecules/TypeEffect.vue'
import SocialMedia from '@/components/atoms/SocialMedia.vue'
export default {
    components: { 
        MyServices,
        TypeEffect,
        SocialMedia,

    },
  
}
</script>




      



    










