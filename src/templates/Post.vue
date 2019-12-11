<template>
  <Layout>
    <PageTitleBar title="News"></PageTitleBar>
    <div class="container mx-auto flex my-8">
      <!-- POST CONTENT -->
      <div class="w-full lg:w-3/4 bg-gc-lighter-grey mx-2 rounded shadow px-4 py-4">
    	  <h2 v-html="$page.post.title" class="font-display text-3xl text-gc-red font-bold capitalize leading-tight relative title-underline mb-2"/>
        <div v-html="$page.post.date" class="font-display italic text-gc-light-grey mb-2" />
        <g-image :src="$page.post.image" class="mb-4" />
    	  <div v-html="$page.post.content" class="text-gc-dark-grey" />
      </div>
      <!-- SIDEBAR -->
      <div class="hidden lg:block w-1/4 bg-gc-lighter-grey mx-2 py-4 rounded shadow">
        <h3 class="font-display font-bold text-2xl uppercase ml-4 text-gc-red relative subtitle-underline" >Latest News</h3>
        <LatestNews></LatestNews>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    title
    content
    date (format: "Do MMMM YYYY")
    image
  }
}
</page-query>

<script>
import PageTitleBar from '~/components/PageTitleBar.vue';
import LatestNews from '~/components/LatestNews.vue';

export default {
  components: {
    PageTitleBar,
    LatestNews
  },
  data () {
    return {
    }
  }
}
</script>
