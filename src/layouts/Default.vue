<template>
  <div class="container mx-auto h-40">
    <header class="container mx-auto font-display flex justify-between items-center">
      <strong>
        <g-link to="/">
          <g-image src="~/assets/images/logo-trimmed.svg" width="275" />
        </g-link>
      </strong>
      <nav class="flex sm:hidden md:flex font-display">
        <g-link class="ml-4" to="/">Home</g-link>
        <g-link class="ml-4" to="/ourbusiness/">Our Business</g-link>
        <g-link class="ml-4" to="/about/">About</g-link>
        <g-link class="ml-4" to="/ourteam/">Our Team</g-link>
        <g-link class="ml-4" to="/news/">News</g-link>
        <g-link class="ml-4" to="/contact/">Contact</g-link>
      </nav>
      <nav class="flex sm:flex md:hidden">
        <g-link class="ml-4" to="/">Home</g-link>
        <g-link class="ml-4" to="/about/">About</g-link>
      </nav>
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
