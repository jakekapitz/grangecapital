<template>
    <header class="w-full h-32 mx-auto shadow-lg font-display sticky top-0 z-10 bg-white">
        <div class="container mx-auto px-4 flex justify-between items-center">
            <g-link to="/">
                <g-image src="~/assets/images/logo.jpg" width="250"  quality="100" class="my-2"/>
            </g-link>
            <nav class="flex hidden lg:flex font-display text-xl text-gray-800 font-bold">
                <g-link class="ml-8 hover:text-gc-yellow transition-color" to="/">Home</g-link>
                <g-link class="ml-8 hover:text-gc-yellow transition-color" to="/business/">Our Business</g-link>
                <g-link class="ml-8 hover:text-gc-yellow transition-color" to="/about/">About</g-link>
                <g-link class="ml-8 hover:text-gc-yellow transition-color" to="/team/">Our Team</g-link>
                <g-link class="ml-8 hover:text-gc-yellow transition-color" to="/news/">News</g-link>
                <g-link class="ml-8 hover:text-gc-yellow transition-color" to="/contact/">Contact</g-link>
            </nav>
            <nav class="flex lg:hidden font-display text-xl text-gray-800 font-bold">
                <font-awesome :icon="['fas', 'bars']" v-if="!isOpen" @click="toggleMenu" size="lg" class="text-gc-dark-grey"/>
                <font-awesome :icon="['fas', 'times']" v-if="isOpen" @click="toggleMenu" size="lg" class="text-gc-dark-grey"/>
                <ul v-if="isOpen" class="flex flex-col w-64 bg-white py-4 mt-32 w-full absolute top-0 left-0 shadow">
                    <g-link class="ml-8 pl-4 py-1 hover:text-gc-yellow transition-color" to="/">Home</g-link>
                    <g-link class="ml-8 pl-4 py-1 hover:text-gc-yellow transition-color" to="/business/">Our Business</g-link>
                    <g-link class="ml-8 pl-4 py-1 hover:text-gc-yellow transition-color" to="/about/">About</g-link>
                    <g-link class="ml-8 pl-4 py-1 hover:text-gc-yellow transition-color" to="/team/">Our Team</g-link>
                    <g-link class="ml-8 pl-4 py-1 hover:text-gc-yellow transition-color" to="/news/">News</g-link>
                    <g-link class="ml-8 pl-4 py-1 hover:text-gc-yellow transition-color" to="/contact/">Contact</g-link>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleMenu: function () {
            this.isOpen = !this.isOpen
        }
    }
}
</script>

<style>
.active--exact {
    color: rgb(196,153,55);
}
</style>
