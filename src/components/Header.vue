<template>
    <header class="w-full h-auto mx-auto shadow-lg font-display">
        <div class="container mx-auto px-4 flex justify-between items-center ">
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

</style>
