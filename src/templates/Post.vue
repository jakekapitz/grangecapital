<template>
  <Layout>
    <PageTitleBar title="News"></PageTitleBar>
    <div>
    	<h1 v-html="$page.post.title" />
      <div v-html="$page.post.date" />
    	<div v-html="$page.post.content" />
      <div v-html="$page.post.image" />
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
