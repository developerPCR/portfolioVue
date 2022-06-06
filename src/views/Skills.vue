<template>
    <div>
    <section>
       <AnimationBgSkills />
        <h1 class="flex justify-center text-[#90acd1] text-5xl mt-32 "><span class="font-['poppins'] ">My SKILLS</span></h1>
        <h2 class="flex justify-center">
             
             <router-link class="absolute text-xl mt-2 text-[#90acd1]"  to="/skills/soft-skills">Go to <strong class="text-violet-500">Soft Skills</strong></router-link>
        </h2>
         <div class="flex  justify-around mb-32 mt-32">
          <HTMLskill class="basis-1/2" />
          <Skillcss class="basis-1/2"  />
         </div>



        <div class="flex  justify-evenly">
            <Skilljavascript class="basis-1/3 md:basis-1/4 " />
            <Skillvue class="basis-1/3 md:basis-1/4"/>
            
        </div>
        
    </section>
    </div>
</template>

<script>
import Skilljavascript from '@/components/atoms/designOnly/Skilljavascript.vue'
import Skillcss from '@/components/atoms/designOnly/Skillcss.vue'
import HTMLskill from '@/components/atoms/designOnly/Skillhtml.vue'
import Skillvue from '@/components/atoms/designOnly/Skillvue.vue'
import AnimationBgSkills from '@/components/atoms/designOnly/AnimationBgSkills.vue'

export default {
  components: { Skilljavascript, Skillcss, HTMLskill, Skillvue, AnimationBgSkills,}
  

}
</script>


    

    










