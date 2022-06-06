<template>
    <div class="lg:grid lg:grid-rows-1 lg:grid-flow-col " >
        <ServicesAtom  />
        <section class="sm:flex sm:gap-8 sm:m-8 sm:justify-center lg:mb-0  col-span-2 mt-10  ">
        <div class="background_design"></div>
            <div class="

                bg-[#ffffff] 
                drop-shadow-2xl
                h-72
                w-100
                sm:w-72
                mb-5
                leading-1    
                py-10
                px-8  
                rounded-xl 
                text-center
                md:hover:scale-110
                md:transition-all
                 "> 

                <font-awesome-icon  class="
                    bg-[#e9eef6]
                    mb-8
                    py-5 px-7
                    rounded-xl
                    text-3xl 
                    " 
                    :icon="['fa' , 'code']" />


                <div class="leading-10">  
                    <h4 class=" font-bold text-xl "><strong>Vue Router </strong></h4>

                    <p class="  opacity-50 ">Simple page application</p> 
                </div>  
            </div>

        <!-- Second services -->

            <div class="
                bg-[#ffffff] 
                drop-shadow-2xl
                h-72
                w-100
                sm:w-72
                mb-5
                lg:mt-10
                sm:mt-6    
                leading-1    
                max-w-screen-sm  
                md:max-w-5xl   
                py-10
                px-8  
                rounded-xl 
                text-center
                md:hover:scale-110
                md:transition-all
                "> 

                <font-awesome-icon  class="
                    bg-[#e9eef6]
                    mb-8
                    py-5 px-7
                    rounded-xl
                    text-3xl 
                    " 
                    :icon="['fa' , 'laptop-file']" />


                <div class="leading-10">  
                    <h4 class=" font-bold text-xl "><strong> VueX </strong>></h4>

                    <p class="  opacity-50 ">VueX store and more</p> 
                </div>  
            </div>
        </section>

        <!-- section 2 -->
            <!-- third services -->


        <section class="sm:flex sm:gap-8 sm:m-8 sm:justify-center lg:mt-0  ">
            <div class="
              bg-[#ffffff] 
                drop-shadow-2xl
                h-72
                 w-100
                sm:w-72
                mb-5
                leading-1    
                max-w-screen-sm  
                py-10
                px-8  
                rounded-xl 
                text-center
                md:hover:scale-110
                md:transition-all
                 "> 

                <!-- <font-awesome-icon  class="
                    text-3xl 
                    bg-[#e9eef6]
                    py-5 px-7
                    rounded-xl
                    mb-8
                    " 
                    :icon="['fa' , 'atom']" /> -->
                    <atom-spinner
                        :animation-duration="1000"
                        :size="60"
                        color="#ff1d5e"
                        class=" 
                            mb-8
                            m-auto"/>


                <div class="leading-10">  
                    <h4 class=" font-bold text-xl "><strong>Atomic desing</strong>  </h4>

                    <p class="  opacity-50 ">Clean and tidy code</p> 
                </div>  
            </div>

        <!-- Second services -->

            <div class="
                bg-[#ffffff] 
                drop-shadow-2xl
                h-72
                leading-1    
                lg:mt-10
                max-w-screen-sm  
                mb-5
                px-8  
                py-10
                rounded-xl 
                sm:mt-10     
                text-center
                w-100
                sm:w-72
                md:hover:scale-110
                md:transition-all
                "> 

                    <font-awesome-icon  class="
                    bg-[#e9eef6]
                    mb-8
                    py-5 px-7
                    rounded-xl
                    text-3xl 
                    " 
                    :icon="['fa' , 'mobile']" />


                <div class="leading-10">  
                    <h4 class=" font-bold text-xl "><strong>Mobile First Web</strong> </h4>

                    <p class="  opacity-50 ">Responsive design</p> 
                </div>  
            </div>
        </section>
    </div>    
    
</template>

<script>
import { AtomSpinner } from 'epic-spinners'
import ServicesAtom from '@/components/atoms/ServicesAtom.vue'
export default {
    name: 'PanelServices',
    components: { 
        ServicesAtom,
        AtomSpinner
    },
  
}
</script>

<style scoped>
  *, ::after, ::before {
    box-sizing: border-box;
}



@media (min-width: 768px) {
    
    .background_design{
        position: absolute;
       width: 70vh;
       height: 85vh;
       transform: rotate(-10deg);
       border-radius: 15px;
       border-end-end-radius: 50px;
       margin-top: 2rem;
       background-image: linear-gradient(#f3f7fe, #e0ebfd 70%, #f3f7fe );

   } 
}


</style>
