<template>
  <Layout>
    <main class="relative w-screen h-screen overflow-hidden bg-gc-light-grey shadow-md">
      <div class="w-full h-full overflow-hidden kenburns">
        <div class="hero w-full h-full bg-pan"></div>
      </div>
      <div class="w-11/12 sm:w-3/4 lg:w-1/2 absolute top-0 right-0 mt-16 sm:mt-16 md:mt-24 lg:mt-48 mx-8 sm:mr-12 md:mr-16 lg:mr-40">
        <h2 class="text-white text-4xl md:text-5xl font-black font-display text-right mb-4 leading-tight" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">Bespoke Lending Solutions & Investment Management</h2>
        <div class="flex justify-end" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <g-link to="/business/" class="py-2 px-4 rounded ml-4 bg-gc-red text-white font-bold hover:bg-gc-yellow transition-background-color">Our Business</g-link>
          <g-link to="/contact/" class="py-2 px-4 rounded ml-4 bg-gc-dark-grey text-white font-bold hover:bg-gc-light-grey transition-background-color">Contact Us</g-link>
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
.hero {
  background-image: url('./../assets/images/home-melbourne.jpg');
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.bg-pan {
  animation: bg-pan 20s linear infinite alternate;
}

.kenburns {
  animation: kenburns 10s linear infinite alternate;
}


@keyframes bg-pan {
  0% {
    background-position: 50% 50%;
  }
  10% {
    background-position: 55% 50%;
  }
  60% {
    background-position: 30% 50%;
  }
  100% {
    background-position: 50% 50%;
  }
}

@keyframes kenburns {
  0% {
    transform: scale(1);
    }
  100% {
    transform: scale(1.10);
    }
}
</style>
