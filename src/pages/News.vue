<template>
  <Layout>
    <PageTitleBar :title=title></PageTitleBar>
      <ul class="container mx-auto mt-8 flex flex-wrap justify-center">
        <li v-for="edge in $page.posts.edges" :key="edge.node.id" class="w-full md:w-1/4 mx-8 mb-4 rounded overflow-hidden shadow-lg hover:shadow-2xl text-gc-dark-grey">
          <g-image :src="edge.node.image" class="w-full" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ edge.node.title }}</div>
            <div class="leading-none">{{ edge.node.date }}</div>
          </div>
        </li>
      </ul>
      <Pager :info="$page.posts.pageInfo"/>
  </Layout>
</template>

<script>
import PageTitleBar from '~/components/PageTitleBar.vue'
import { Pager } from 'gridsome'

export default {
  metaInfo: {
    title: 'News'
  },
  components: {
    PageTitleBar,
    Pager
  },
  data () {
    return {
      title: 'News'
    }
  }
}
</script>

<page-query>
query ($page: Int) {
  posts: allPost(perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date
        image
        content
      }
    }
  }
}
</page-query>
