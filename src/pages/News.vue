<template>
  <Layout>
    <PageTitleBar :title=title></PageTitleBar>
    <section class="container mx-auto mt-8">
      <ul class="mb-4 flex flex-wrap justify-center">
        <li v-for="edge in $page.posts.edges" :key="edge.node.id" class="w-full md:w-1/4 mx-8 mb-4 rounded overflow-hidden shadow-lg hover:shadow-2xl text-gc-dark-grey">
          <g-link :to="edge.node.path">
            <g-image :src="edge.node.image" class="w-full" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{{ edge.node.title }}</div>
              <div class="leading-none">{{ edge.node.date }}</div>
            </div>
          </g-link>
        </li>
      </ul>
      <Pager :info="$page.posts.pageInfo" class="text-center text-lg" linkClass="mr-2"/>
    </section>
  </Layout>
</template>

<script>
import PageTitleBar from '~/components/PageTitleBar.vue';
import { Pager } from 'gridsome';

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
  posts: allPost(perPage: 6, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    edges {
      node {
        id
        title
        date
        image
        content
        path
      }
    }
  }
}
</page-query>
