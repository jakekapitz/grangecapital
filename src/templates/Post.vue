<template>
  <Layout>
    <PageTitleBar title="News"></PageTitleBar>
    <div class="container mx-auto flex my-8">
      <!-- POST CONTENT -->
      <div class="w-full md:w-3/4 bg-gc-lighter-grey mx-2 rounded shadow px-4 py-4">
    	  <h2 v-html="$page.post.title" class="font-display text-3xl text-gc-yellow font-bold capitalize"/>
        <div v-html="$page.post.date" class="font-display italic text-gc-light-grey mb-2" />
        <g-image :src="$page.post.image" class="mb-4" />
    	  <div v-html="$page.post.content" class="text-gc-dark-grey" />
      </div>
      <!-- SIDEBAR -->
      <div class="hidden md:block w-1/4 bg-gc-lighter-grey mx-2 py-4 rounded shadow">
        <h3 class="font-display font-bold text-2xl uppercase ml-4 text-gc-red relative subtitle-underline" >Latest News</h3>
        <ul>
          <li v-for="edge in $page.posts.edges" :key="edge.node.id">
            <g-link :to="edge.node.path" class="text-white hover:text-gc-light-grey transition-color text-center text-sm">
              <div class="font-bold capitalize">{{ edge.node.title }}</div>
              <div class="mb-4">{{ edge.node.date}}</div>
            </g-link>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    title
    content
    date
    image
  }
}
</page-query>

<page-query>
query {
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
</page-query>

<script>
import PageTitleBar from '~/components/PageTitleBar.vue'

export default {
  components: {
    PageTitleBar
  },
  data () {
    return {
    }
  }
}
</script>
