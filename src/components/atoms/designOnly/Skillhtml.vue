<template>
  <section class="flex  items-center justify-center  ">
    <h1 class="mt-9 font-bold  text-[14px] font-['poppins']">&#60;&#47;HTML&#62;</h1>
    <div class="outer absolute rounded-full flex items-center justify-center"> 
      <div class="inner   flex items-center justify-center rounded-full ">
        <div class="number font-bold text-[#555]">
          <p >{{percentage}}%</p>
        </div>
      </div>
    </div>

    <svg class="absolute items-start" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
           <defs>
              <linearGradient id="GradientColor">
                 <stop offset="0%" stop-color="#e91e63" />
                 <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
           </defs>
           <circle class="fill-transparent   stroke-[20px]" cx="80" cy="80" r="70" stroke-linecap="round" />
   </svg>



  </section> 



</template>

<script>
export default {
  name: 'skillscss',
 
  data: () => {
    return {
      percentage: 0
    }
  },

  created() {
    let interval = setInterval(() => {
      if(this.percentage < 95)
        this.percentage++;
      else
        clearInterval(interval);
    }, 25);
  }
}

</script>

<style scoped>
 .outer{
   height: 160px;
   width: 160px;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0 , 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255 ,0.7) ; 
   
 }

 .inner{
  height: 120px;
  width: 120px;
  box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
    inset -4px -4px 6px -1px rgba(255, 255, 255 ,0.7),
    -0.5px -0.5px 0px rgba(255, 255, 255 ,1),
    .5px .5px 0px rgba(0, 0, 0, 0.15),
    0px 12px 10px -10px rgba(0,0,0,0.05) ;
 }


 circle{
   stroke: url(#GradientColor);
   stroke-dasharray: 472;
   stroke-dashoffset: 472;
  animation: circle 2.5s linear forwards; 

 }
   @keyframes circle {
     100%{
       stroke-dashoffset: 70;
     }
   }



</style>





