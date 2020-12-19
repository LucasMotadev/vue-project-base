<template>
<v-app>

  <AppBar />
  <Menu />
</v-app>
</template>

<script>
export default {
    components:{
        AppBar: ()=> import("./AppBar"),
        Menu: () => import("./Menu")
    }
}
</script>

<style>

</style>