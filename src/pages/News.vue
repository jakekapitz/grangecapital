<template>
  <Layout>
    <PageTitleBar :title=title></PageTitleBar>
    <section class="container mx-auto mt-8">
      <ul class="mb-4 justify-center mx-2" id="newsGrid" data-aos="slide-up">
        <li v-for="edge in $page.posts.edges" :key="edge.node.id" class="rounded overflow-hidden shadow hover:shadow-md text-gc-dark-grey bg-gc-lighter-grey flex flex-col justify-between">
          <g-link :to="edge.node.path"><g-image :src="edge.node.image" style="object-fit: cover; height: 200px; width: 100%" /></g-link>
          <div class="py-4">
            <g-link :to="edge.node.path"><div class="font-bold font-display text-xl hover:text-gc-yellow mb-2 bg-gc-lighter-grey px-4 py-4">{{ edge.node.title }}</div></g-link>
            <div class="leading-none px-4 pt-2 italic text-sm">{{ edge.node.date }}</div>
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
@media only screen and (max-width: 768px) {
  #newsGrid {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
  }
}
@media only screen and (min-width: 768px) {
  #newsGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem 4rem;
  }
}

@media only screen and (min-width: 1280px) {
  #newsGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    grid-gap: 2rem 4rem;
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
        date (format: "Do MMMM YYYY")
        image
        content
        path
      }
    }
  }
}
</page-query>
