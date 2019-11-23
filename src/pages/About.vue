<template>
  <Layout>
    <PageTitleBar :title=title></PageTitleBar>
    <div class="container mx-auto flex items-center">
      <div class="w-2/5 px-8">
        <p class="mb-2"><strong>Grange Capital Holdings Pty Ltd (“Grange Capital”)</strong> is the private investment and capital placement vehicle of Carlos Sala and Leigh Smith. Grange Capital provides investment solutions to mid-sized companies in Australia.  Carlos and Leigh have extensive experience establishing, leading and running investment businesses covering debt, high-yield, restructuring and special situations in Australia, Asia and Europe for market leading institutions.</p>
        <p class="mb-2">Grange Capital’s telecommunications team “G Telecom” specialises in delivering “best in class” fibre solutions to both Greenfield and Brownfield sites across Australia</p>
      </div>
      <g-image src="~/assets/images/about.jpg" />
    </div>
  </Layout>
</template>

<script>
import PageTitleBar from '~/components/PageTitleBar.vue'

export default {
  metaInfo: {
    title: 'About Us'
  },
  components: {
    PageTitleBar
  },
  data () {
    return {
      title: 'About Us'
    }
  }
}
</script>
