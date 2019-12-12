<template>
  <Layout>
    <PageTitleBar title="News"></PageTitleBar>
    <div class="container mx-auto justify-center my-8 px-1" id="postGrid">
      <!-- POST CONTENT -->
      <div class="bg-gc-lighter-grey rounded shadow px-4 py-4">
    	  <h2 v-html="$page.post.title" class="font-display text-3xl text-gc-red font-bold capitalize leading-tight relative title-underline mb-2"/>
        <div v-html="$page.post.date" class="font-display italic text-gc-light-grey mb-2" />
        <div class="mb-4 w-full overflow-hidden">
          <g-image :src="$page.post.image" class="mb-4 w-full object-cover rounded shadow"/>
        </div>
    	  <div v-html="$page.post.content" class="text-gc-dark-grey" />
      </div>
      <!-- SIDEBAR -->
      <div class="bg-gc-lighter-grey py-4 rounded shadow min">
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
}
</script>

<style>
@media screen and (max-width: 1024px) {
  #postGrid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
}
@media screen and (min-width: 1024px) {
  #postGrid {
    display: grid;
    grid-template-columns: 2.5fr 1fr;
    grid-gap: 2rem;
  }
}

</style>
