<template>
  <div class="text-gray-800">
    <Header></Header>
    <transition name="fade" appear>
      <main>
        <slot/>
      </main>
    </transition>
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
.fade-enter-active {
  transition: opacity .5s;
}
.fade-enter {
  opacity: 0;
}
</style>
