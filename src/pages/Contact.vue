<template>
  <Layout>
    <PageTitleBar :title=title></PageTitleBar>
    <div class="container mx-auto flex flex-wrap items-center justify-center py-20 px-32">
      <div class="w-full md:w-1/2 mb-12 flex flex-col items-center text-center">
        <h3 class="text-gc-red font-display font-bold text-xl"><font-awesome :icon="['fas', 'mobile-alt']" size="lg" class="text-gc-yellow mr-4" />Phone</h3>
        <div class="pl-4 py-4">
          <p><span class="font-semibold">Leigh -</span> 0424 888 482</p>
          <p><span class="font-semibold">Carlos -</span> 0438 853 330</p>
        </div>
      </div>
      <div class="w-full md:w-1/2 mb-12 flex flex-col items-center text-center">
        <h3 class="text-gc-red font-display font-bold text-xl"><font-awesome :icon="['fas', 'building']" size="lg" class="text-gc-yellow mr-4" />Address</h3>
        <div class="pl-4 py-4">
          <p>Suite 33, 574 Plummer Street<br><span class="font-semibold">PORT MELBOURNE VIC 3207</span></p>
        </div>
      </div>
      <div class="w-full md:w-1/2 mb-12 flex flex-col items-center text-center">
        <h3 class="text-gc-red font-display font-bold text-xl"><font-awesome :icon="['fas', 'envelope']" size="lg" class="text-gc-yellow mr-4" />Email</h3>
        <div class="pl-4 py-4">
          <p>enquiries@grangecapital.com.au</p>
        </div>
      </div>
      <div class="w-full md:w-1/2 mb-12 flex flex-col items-center text-center">
        <h3 class="text-gc-red font-display font-bold text-xl"><font-awesome :icon="['fas', 'clock']" size="lg" class="text-gc-yellow mr-4" />Business Hours</h3>
        <div class="pl-4 py-4">
          <p><strong>Monday - Friday</strong> 8am - 5pm</p>
          <p><strong>Weekend</strong> By Appointment</p>
        </div>
      </div>
    </div>
    <ContactForm></ContactForm>
  </Layout>
</template>

<script>
import PageTitleBar from '~/components/PageTitleBar.vue'
import ContactForm from '~/components/ContactForm.vue'

export default {
  metaInfo: {
    title: 'Contact Us'
  },
  components: {
    PageTitleBar,
    ContactForm
  },
  data () {
    return {
      title: 'Contact Us'
    }
  }
}
</script>
