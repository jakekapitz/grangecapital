<template>
    <header class="w-full h-auto mx-auto shadow-lg font-display sticky top-0 z-10 bg-white">
        <div class="container mx-auto px-4 flex justify-between items-center ">
            <g-link to="/">
                <g-image src="~/assets/images/logo.jpg" width="225"  quality="100" class="my-2"/>
            </g-link>
            <nav class="flex hidden lg:flex font-display text-xl text-gray-800 font-bold">
                <g-link class="ml-8 hover:text-gc-yellow transition-color" to="/">Home</g-link>
                <g-link class="ml-8 hover:text-gc-yellow transition-color" to="/business/">Our Business</g-link>
                <g-link class="ml-8 hover:text-gc-yellow transition-color" to="/about/">About</g-link>
                <g-link class="ml-8 hover:text-gc-yellow transition-color" to="/team/">Our Team</g-link>
                <g-link class="ml-8 hover:text-gc-yellow transition-color" to="/news/">News</g-link>
                <g-link class="ml-8 hover:text-gc-yellow transition-color" to="/contact/">Contact</g-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {

        }
    }
}
</script>

<style>
.active--exact {
    color: rgb(196,153,55);
}
</style>
