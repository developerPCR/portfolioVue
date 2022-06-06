<template>
<div></div>
  <router-link 
              :to="route"
              
              v-slot="{isActive}"
              
  >
  <!-- href, isActive -->
  <a :href="href" 
    target="_blank"
    :class=" isActive ? 'is-active' : 'normal-link'  "> 
     
  <!-- //clases fisicamente que quiero poner. pero si quiero calcular basada ena alguna expresion de javascript hay que usar v-bind -->
  {{link.name}}
  </a>
  </router-link>
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
         return this.link.id === undefined ? { name: this.link.to } : { name: this.link.to, params: { id: this.link.id} } }
         //si es undefineed y no viene un id se madnara el link.to , // pero si viene un id. viene este siguiente objeto
      }
}
</script>

<style>

</style>