<template>
  <Layout>
    <main class="relative w-full h-auto">
      <g-image class="w-full" src="~/assets/images/home-melbourne.jpg" fit="cover" quality="100" />
      <div class="w-3/4 lg:w-1/2 absolute top-0 right-0 mt-16 md:mt-32 lg:mt-48 mr-12 md:mr-24 lg:mr-40">
        <h2 class="text-white text-3xl md:text-4xl lg:text-5xl font-black font-display text-right mb-4 leading-tight">Bespoke Lending Solutions & Investment Management</h2>
        <div class="flex justify-end">
          <g-link to="/business/" class="py-2 px-4 rounded ml-4 bg-gc-red text-white font-bold hover:bg-gc-yellow transition-background-color">Our Business</g-link>
          <g-link to="/contact/" class="py-2 px-4 rounded ml-4 bg-gc-dark-grey text-white font-bold hover:bg-gc-light-grey transition-background-color">Contact Us</g-link>
        </div>
      </div>
      </div>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
</style>
