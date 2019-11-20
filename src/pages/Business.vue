<template>
  <Layout>
    <PageTitleBar :title=title></PageTitleBar>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
  </Layout>
</template>

<script>
import PageTitleBar from '~/components/PageTitleBar.vue'

export default {
  metaInfo: {
    title: 'Our Business'
  },
  components: {
    PageTitleBar
  },
  data () {
    return {
      title: 'Our Business'
    }
  }
}
</script>
