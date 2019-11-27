<template>
    <footer class="w-full bg-gc-light-grey text-white">
        <div class="container mx-auto px-4 flex flex-col md:flex-row items-around py-12">
            <div class="hidden md:flex w-full md:w-1/3 flex-col items-center">
                <g-image src="~/assets/images/coat-of-arms.png" width="200p" />
                <h3 class="font-display text-center text-xl font-bold uppercase">Grange Capital</h3>
            </div>
            <div class="w-full md:w-1/3 flex flex-col items-center text-center mb-4">
                <h3 class="font-bold capitalize mb-4 text-xl font-display relative subtitle-underline">Contact Us</h3>
                <ul class="font-bold mb-4 text-base leading-relaxed">Phone:
                    <li class="text-sm font-light"><span class="font-semibold">Carlos: </span>0438 853 330</li>
                    <li class="text-sm font-light"><span class="font-semibold">Leigh: </span>0424 888 482</li>
                </ul>
                <ul class="font-medium mb-4 leading-relaxed">Address:
                    <li class="text-sm font-light">Suite 33, 574 Plummer Street<br><span class="font-normal">PORT MELBOURNE VIC 3207</span></li>
                </ul>
                <ul class="flex">
                    <li class="mx-2 text-gc-grey hover:text-gc-red transition-color text-lg"><a href="https://facebook.com/grangecapital"><font-awesome :icon="['fab', 'facebook']" /></a></li>
                    <li class="mx-2 text-gc-grey hover:text-gc-red transition-color text-lg"><a href="https://instagram.com/grangecapital"><font-awesome :icon="['fab', 'instagram']" /></a></li>
                    <li class="mx-2 text-gc-grey hover:text-gc-red transition-color text-lg"><a href="https://linkedin.com/au/grangecapital"><font-awesome :icon="['fab', 'linkedin']" /></a></li>
                </ul>
            </div>
            <div class="w-full md:w-1/3 flex flex-col items-center">
                <h3 class="font-bold capitalize mb-4 font-display text-xl relative subtitle-underline">News</h3>
                <ul class="flex flex-col items-center justify-center">
                    <li v-for="edge in $static.posts.edges" :key="edge.node.id">
                        <g-link :to="edge.node.path" class="text-white hover:text-gc-light-grey transition-color text-center text-sm">
                            <div class="font-bold capitalize">{{ edge.node.title }}</div>
                            <div class="mb-4">{{ edge.node.date}}</div>
                        </g-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="w-full bg-gc-dark-grey py-4 mx-auto flex justify-center items-center lg:justify-end lg:pr-16 text-sm">
            <p>© Grange Capital 2019. All rights reserved.</p>
        </div>
    </footer>
</template>

<static-query>
query {
    metadata {
        siteName
    },
    posts: allPost(sortBy: "date", order: DESC, limit: 3) {
        edges {
            node {
                id
                title
                date
                path
            }
        }
    }
}
</static-query>


<script>
export default {
    name: 'Footer',
    data () {
        return {
            
        }
    }
}
</script>

<style>

</style>
