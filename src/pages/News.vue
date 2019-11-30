<template>
  <Layout>
    <PageTitleBar :title=title></PageTitleBar>
    <section class="container mx-auto mt-8">
      <ul class="mb-4 justify-center" id="newsGrid">
        <li v-for="edge in $page.posts.edges" :key="edge.node.id" class="mx-8 mb-4 rounded overflow-hidden shadow-lg hover:shadow-2xl text-gc-dark-grey bg-gc-lighter-grey flex flex-col justify-between">
          <g-link :to="edge.node.path"><g-image :src="edge.node.image" style="object-fit: cover; height: 200px; width: 100%" /></g-link>
          <div class="py-4">
            <g-link :to="edge.node.path"><div class="font-bold font-display text-xl mb-2 bg-gc-lighter-grey px-6 py-4">{{ edge.node.title }}</div></g-link>
            <div class="leading-none px-6 pt-2 italic text-sm">{{ edge.node.date }}</div>
          </div>
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
<style>
@media only screen and (max-width: 640px) {
  #newsGrid {
    display: grid;
    grid-template-columns: 1fr;
  }
}
@media only screen and (min-width: 640px) {
  #newsGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (min-width: 1024px) {
  #newsGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
  }
}

</style>
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
