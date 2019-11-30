<template>
    <div class="w-full bg-gc-lighter-grey">
        <div class="container mx-auto px-4 flex justify-between items-center py-10">
            <h2 class="uppercase font-black text-gc-red font-display text-3xl ml-4">{{ title }}</h2>
            <div class="text-xs text-gc-light-grey mx-4"><g-link to="/">Home</g-link> / {{ title }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageTitleBar',
    data () {
        return {
        }
    },
    props: ['title']
}
</script>

<style>

</style>
