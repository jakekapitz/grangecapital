<template>
  <div class="">
    <header class="w-full h-auto mx-auto shadow-lg font-display">
      <div class="container mx-auto flex justify-around items-center ">
        <g-link to="/">
            <g-image src="~/assets/images/logo.jpg" width="250" class="my-4"/>
        </g-link>
        <nav class="flex sm:hidden md:flex font-display text-xl text-gray-800 font-bold">
          <g-link class="ml-8 hover:text-grange-yellow transition-color" to="/">Home</g-link>
          <g-link class="ml-8 hover:text-grange-yellow transition-color" to="/business/">Our Business</g-link>
          <g-link class="ml-8 hover:text-grange-yellow transition-color" to="/about/">About</g-link>
          <g-link class="ml-8 hover:text-grange-yellow transition-color" to="/team/">Our Team</g-link>
          <g-link class="ml-8 hover:text-grange-yellow transition-color" to="/news/">News</g-link>
          <g-link class="ml-8 hover:text-grange-yellow transition-color" to="/contact/">Contact</g-link>
        </nav>
      </div>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

</style>
