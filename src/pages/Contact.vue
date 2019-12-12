<template>
  <Layout>
    <PageTitleBar :title=title></PageTitleBar>
    <div class="container flex flex-col lg:flex-row justify-center mx-auto my-8">
      <div class="flex-grow mb-8 lg:mb-0 mr-0 lg:mr-8" id="contactGrid">
        <div class="contact-card sm:h-56 sm:pt-6  md:self-start">
          <font-awesome :icon="['fas', 'mobile-alt']" size="2x" class="text-gc-yellow mb-2" />
          <h3 class="contact-card_title">Phone</h3>
          <div class="contact-card_detail">
            <p><span class="font-semibold">Leigh -</span> 0424 888 482</p>
            <p><span class="font-semibold">Carlos -</span> 0438 853 330</p>
          </div>
        </div>
        <a class="contact-card sm:h-56 sm:pt-6 hover:text-gc-red transition-color md:self-start" href="https://goo.gl/maps/ZTzzNvn56jRW3Fhs6" target="_blank">
          <font-awesome :icon="['fas', 'building']" size="2x" class="text-gc-yellow mb-2" />
          <h3 class="contact-card_title">Address</h3>
          <div class="contact-card_detail">
            <p>Suite 33, 574 Plummer Street<br><span class="font-semibold">PORT MELBOURNE VIC 3207</span></p>
          </div>
        </a>
        <div class="contact-card sm:h-56 sm:pt-6 md:self-end">
          <font-awesome :icon="['fas', 'envelope']" size="2x" class="text-gc-yellow mb-2" />
          <h3 class="contact-card_title">Email</h3>
          <div class="contact-card_detail">
            <a href="mailto:enquiries@grangecapital.com.au" class="hover:text-gc-red transition-color px-2"><p>enquiries@grangecapital.com.au</p></a>
          </div>
        </div>
        <div class="contact-card sm:h-56 sm:pt-6 md:self-end">
          <font-awesome :icon="['fas', 'clock']" size="2x" class="text-gc-yellow mb-2" />
          <h3 class="contact-card_title">Business Hours</h3>
          <div class="contact-card_detail">
            <p><strong>Weekdays:</strong> 8am - 5pm</p>
            <p><strong>Weekend:</strong> By Arrangement</p>
          </div>
        </div>
      </div>
      <ContactForm class="w-auto lg:w-1/2"></ContactForm>
    </div>
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

<style>
@media only screen and (max-width: 640px) {
  #contactGrid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
}
@media only screen and (min-width: 640px) {
  #contactGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
}

</style>
