<template>
  <ul class="flex flex-col items-center justify-center mx-4 mt-4">
    <li v-for="edge in $static.posts.edges" :key="edge.node.id" class="flex items-center py-3 border-b border-gc-lighter-grey">
      <div class="w-1/4">
        <g-image :src="edge.node.image" class="rounded" width="70" height="70"/>
      </div>
      <g-link :to="edge.node.path" class="text-gc-dark-grey hover:text-gc-yellow transition-color text-sm w-3/4 ml-2">
        <div class="font-bold capitalize clamp-2 overflow-hidden">{{ edge.node.title }}</div>
        <div class="text-sm italic">{{ edge.node.date}}</div>
      </g-link>
    </li>
  </ul>
</template>

<static-query>
query {
    posts: allPost(sortBy: "date", order: DESC, limit: 5) {
        edges {
            node {
                id
                title
                date (format: "Do MMMM YYYY")
                path
                image
            }
        }
    }
}
</static-query>

<script>
export default {
  name: 'LatestNews',
  props: ['limit'],
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
