<template>
  <v-app-bar 
  :clipped-left="$vuetify.breakpoint.lgAndUp"
  class="white--text" 
  app 
  dense 
  flat 
  color="primary"
  dark
  absolute
  >
       <v-app-bar-nav-icon @click="activeDrawer"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>

</style>