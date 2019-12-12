<template>
  <Layout>
    <main class="relative w-full h-auto overflow-hidden">
      <g-image class="w-full kenburns" src="~/assets/images/home-melbourne.jpg" fit="cover" quality="100" />
      <div class="w-full sm:3/4 lg:w-1/2 absolute top-0 right-0 mt-8 sm:mt-16 md:mt-32 lg:mt-48 mr-8 sm:mr-12 md:mr-24 lg:mr-40">
        <h2 class="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-display text-right mb-4 leading-tight" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">Bespoke Lending Solutions & Investment Management</h2>
        <div class="flex justify-end" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
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
.kenburns {
  -webkit-animation: kenburns 30s ease-out infinite both;
  animation: kenburns 30s ease-out infinite both;
}

@keyframes kenburns {
  0% {
    -webkit-transform: scale(1) translateY(0);
    transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 16%;
    transform-origin: 50% 16%;
  }
  50% {
    -webkit-transform: scale(1.10) translateY(-15px);
    transform: scale(1.10) translateY(-15px);
    -webkit-transform-origin: top;
    transform-origin: top;
  }
  100% {
    -webkit-transform: scale(1) translateY(0);
    transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 16%;
    transform-origin: 50% 16%;
  }
  
}
</style>
