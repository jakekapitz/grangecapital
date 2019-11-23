<template>
  <div class="text-gray-800">
    <Header></Header>
    <slot/>
    <Footer></Footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>


</style>
