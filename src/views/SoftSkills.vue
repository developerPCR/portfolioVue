<template>
  <div>
    <section class="grid grid-cols-2 gap-2 md:grid-cols-4 grid-rows-3   mt-40 justify-items-center ">
        <div class="
             w-40  
            md:col-span-4
            col-span-2 
            text-center">
          <font-awesome-icon  class="
                    text-[#fcd1c6]
                    text-5xl
                    mb-2" 
                    :icon="['fa' , 'brain']" />
                    <h3 class=
                    "w-full 
                    font['poppins'] 
                    font-bold 
                    text-[#90acd1]
                    ">Emotional strength and stress management</h3>
        </div>
        <div class="
            col-span-2
            px-12
            py-5
            text-center
            w-52
        ">
            <font-awesome-icon  class="
                    text-[#498be0]
                    text-5xl
                    mb-2" 
                    :icon="['fa' , 'users']" />
                    <h3 class="
                    w-full 
                    font['poppins'] 
                    font-bold 
                    text-[#90acd1]">
                    Respect, discipline and teamwork</h3>
        </div>


        <div class=" 
            col-span-2
            px-12
            py-5
            text-center
            w-52
            ounded-2xl">    


            <font-awesome-icon  class="
                text-5xl 
                text-[#498be0] 
                mb-2" 
                    :icon="['far' , 'lightbulb']" />
                    <h3 class="
                    w-full 
                    font['poppins'] 
                    font-bold 
                    text-[#90acd1]">
                    Problem resolution</h3>

        </div>

        <div class="
            col-span-2
            md:col-span-4
            text-center
            w-40
        ">
           <font-awesome-icon  class="
                text-5xl 
                mb-2" 
                    :icon="['fa' , 'microphone-lines']" />
                    <h3 class="
                    w-full 
                    font['poppins'] 
                    font-bold 
                    text-[#90acd1]">
                    Great communication</h3>

        </div>
    
        </section>
        <AnimationBgSkills />

  </div>  
</template>

<script>
import AnimationBgSkills from '@/components/atoms/designOnly/AnimationBgSkills.vue'
export default {
  components: { AnimationBgSkills },
    name: 'Soft skills',
     
}
</script>
       



