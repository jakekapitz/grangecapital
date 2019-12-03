<template>
    <header class="w-full h-32 mx-auto shadow-lg font-display sticky top-0 z-10 bg-white">
        <div class="container mx-auto px-4 flex justify-between items-center">
            <g-link to="/">
                <g-image src="~/assets/images/logo.jpg" width="250"  quality="100" class="my-2"/>
            </g-link>
            <nav id="navbar">
                <ul class="flex hidden lg:flex font-display text-xl text-gray-800 font-bold">
                    <li class="ml-10 hover:text-gc-yellow transition-color"><g-link to="/">Home</g-link></li>
                    <li class="ml-10">
                        <g-link to="/business/" class="hover:text-gc-yellow transition-color">Our Business</g-link>
                        <font-awesome v-if="!dropdownOpen":icon="['fas', 'chevron-down']" size="sm" class="ml-2 hover:text-gc-yellow transition-color" @click="toggleDropdown"/>
                        <font-awesome v-if="dropdownOpen":icon="['fas', 'chevron-up']" size="sm" class="ml-2 hover:text-gc-yellow transition-color" @click="toggleDropdown"/>
                        <ul v-if="dropdownOpen" class="absolute bg-white mt-8 border rounded-lg shadow-lg">
                            <li class="px-4 py-4 text-gc-dark-grey mx-2 border-b hover:text-gc-yellow transition-color"><g-link to="/business/#seniorDebtFinance">Senior Debt Finance</g-link></li>
                            <li class="px-4 py-4 text-gc-dark-grey mx-2 border-b hover:text-gc-yellow transition-color"><g-link to="/business/#mezzanineFinance">Mezzanine Finance</g-link></li>
                            <li class="px-4 py-4 text-gc-dark-grey mx-2 border-b hover:text-gc-yellow transition-color"><g-link to="/business/#developmentSales">Development Sales</g-link></li>
                            <li class="px-4 py-4 text-gc-dark-grey mx-2 border-b hover:text-gc-yellow transition-color"><g-link to="/business/#grangeCapitalInvestmentFund">Grange Capital Investment Fund</g-link></li>
                            <li class="px-4 py-4 text-gc-dark-grey mx-2 border-b hover:text-gc-yellow transition-color"><g-link to="/business/#gcImfDevelopmentFund">IMF Development Fund</g-link></li>
                            <li class="px-4 py-4 text-gc-dark-grey mx-2 border-b hover:text-gc-yellow transition-color"><g-link to="/business/#gTelecom">Grange Telecom</g-link></li>
                        </ul>
                    </li>
                    <li class="ml-10 hover:text-gc-yellow transition-color"><g-link to="/about/">About</g-link></li>
                    <li class="ml-10 hover:text-gc-yellow transition-color"><g-link to="/team/">Our Team</g-link></li>
                    <li class="ml-10 hover:text-gc-yellow transition-color"><g-link to="/news/">News</g-link></li>
                    <li class="ml-10 hover:text-gc-yellow transition-color"><g-link to="/contact/">Contact</g-link></li>
                </ul>
            </nav>
            <nav class="flex lg:hidden font-display text-xl text-gray-800 font-bold" id="mobileNav">
                <font-awesome :icon="['fas', 'bars']" v-if="!isOpen" @click="toggleMenu" size="lg" class="text-gc-dark-grey"/>
                <font-awesome :icon="['fas', 'times']" v-if="isOpen" @click="toggleMenu" size="lg" class="text-gc-dark-grey"/>
                <ul v-if="isOpen" class="flex flex-col w-64 bg-white py-2 mt-32 w-full absolute top-0 left-0 shadow">
                    <li @click="toggleMenu" class="mx-8 pl-4 pt-2 pb-1 hover:text-gc-yellow transition-color border-b"><g-link to="/">Home</g-link></li>
                    <li class="mx-8 pl-4 py-2 hover:text-gc-yellow transition-color border-b">
                        <g-link @click="toggleMenu" to="/business/">Our Business</g-link>
                        <font-awesome :icon="['fas', 'plus']" size="sm" v-if="!submenuOpen" @click="toggleSubmenu" class="text-gc-yellow hover:text-gc-red cursor-pointer ml-6"/>
                        <font-awesome :icon="['fas', 'minus']" size="sm" v-if="submenuOpen" @click="toggleSubmenu" class="text-gc-yellow hover:text-gc-red cursor-pointer ml-6"/>
                        <ul v-if="submenuOpen">
                            <li @click="toggleMenu" class="ml-8 pt-2 pb-2 text-gc-dark-grey hover:text-gc-yellow transition-color"><g-link to="/business/#seniorDebtFinance">Senior Debt Finance</g-link></li>
                            <li @click="toggleMenu" class="ml-8 pb-2 text-gc-dark-grey hover:text-gc-yellow transition-color"><g-link to="/business/#mezzanineFinance">Mezzanine Finance</g-link></li>
                            <li @click="toggleMenu" class="ml-8 pb-2 text-gc-dark-grey hover:text-gc-yellow transition-color"><g-link to="/business/#developmentSales">Development Sales</g-link></li>
                            <li @click="toggleMenu" class="ml-8 pb-2 text-gc-dark-grey hover:text-gc-yellow transition-color"><g-link to="/business/#grangeCapitalInvestmentFund">Grange Capital Investment Fund</g-link></li>
                            <li @click="toggleMenu" class="ml-8 pb-2 text-gc-dark-grey hover:text-gc-yellow transition-color"><g-link to="/business/#gcImfDevelopmentFund">IMF Development Fund</g-link></li>
                            <li @click="toggleMenu" class="ml-8 pb-2 text-gc-dark-grey hover:text-gc-yellow transition-color"><g-link to="/business/#gTelecom">Grange Telecom</g-link></li>
                        </ul>
                    </li>
                    <li @click="toggleMenu" class="mx-8 pl-4 py-1 hover:text-gc-yellow transition-color border-b"><g-link to="/about/">About</g-link></li>
                    <li @click="toggleMenu" class="mx-8 pl-4 py-1 hover:text-gc-yellow transition-color border-b"><g-link to="/team/">Our Team</g-link></li>
                    <li @click="toggleMenu" class="mx-8 pl-4 py-1 hover:text-gc-yellow transition-color border-b"><g-link to="/news/">News</g-link></li>
                    <li @click="toggleMenu" class="mx-8 pl-4 pt-1 hover:text-gc-yellow transition-color"><g-link to="/contact/">Contact</g-link></li>
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
            isOpen: false,
            submenuOpen: false,
            dropdownOpen: false
        }
    },
    methods: {
        toggleMenu: function () {
            this.isOpen = !this.isOpen;
            this.submenuOpen = false;
        },
        toggleSubmenu: function () {
            this.submenuOpen = !this.submenuOpen
        },
        toggleDropdown: function () {
            this.dropdownOpen = !this.dropdownOpen
        }
    }
}
</script>

<style>
.active--exact {
    color: rgb(196,153,55);
}
</style>
