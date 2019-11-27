<template>
  <Layout>
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
export default {
  
}
</script>
