<template>
  <div class="block text-center translate-y-60 font-bold font-['poppins']">
     <font-awesome-icon class="
                text-5xl
                mb-7
                "  
                :icon="['fa' , 'circle-exclamation']" />
               
    <h2 class="text-5xl mb-7">404</h2>
    <h2 class="text-5xl  ">Page not found</h2>
    <h3 class="mt-5 text-3xl flex items-center justify-center">
      <p class="text-red-500"> Return to </p>
      <font-awesome-icon class="mx-2 text-[#90acd1]"
                :icon="['fa' , 'arrow-right']" />
       <router-link class="
            text-[#90acd1]
            inline-block 
            transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-110  duration-70
            "  to="/">Home</router-link>
    </h3>
  </div>  
</template>

<script>
export default {
    name: 'error404'
}
</script>

<style>

</style>