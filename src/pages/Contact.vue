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
    title: 'Contact Us'
  },
  components: {
    PageTitleBar
  },
  data () {
    return {
      title: 'Contact Us'
    }
  }
}
</script>
