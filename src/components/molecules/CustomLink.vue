<template>
    <div>
        <router-link :to="route">
            <a  :href="link"> {{link.name}} </a>
        </router-link>

    </div>
</template>
 
  

<script>
export default {
  props: {
    link:{ 
        type: Object,
        required: true
    }
  },
  computed: {
      
            route() {
               return  this.link.to
            }
        }
     
}

</script>

<style  scoped>

.is-active{
   color: #41b883;
   transition: .4s;
 
}
.normal-link{
  color: #c6c5c5;
}

div{
  padding: 5px;
}

</style>

