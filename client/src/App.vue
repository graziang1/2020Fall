<template>
  <div id="app">
    <Nav />
    <router-view/>
    Welcome to New Paltz
  </div>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  components: {
    Nav
  }
}
</script>

<style lang="scss">

</style>
