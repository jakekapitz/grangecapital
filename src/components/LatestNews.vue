<template>
  <ul class="flex flex-col items-center justify-center mx-4 mt-4">
    <li v-for="edge in $static.posts.edges" :key="edge.node.id">
      <g-link :to="edge.node.path" class="text-gc-dark-grey hover:text-gc-yellow transition-color text-sm">
        <div class="font-bold capitalize">{{ edge.node.title }}</div>
        <div class="mb-4 text-sm italic">{{ edge.node.date}}</div>
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
                date
                path
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
