<template>
  <Layout>
    <PageTitleBar :title=title></PageTitleBar>
    <section class="container mx-auto text-gc-dark-grey my-8">
      <article class="flex flex-col relative w-full lg:flex-row" id="carlos">
        <g-image src="~/assets/images/carlos.png" class="w-full lg:w-1/2" />
        <div class="w-full lg:w-1/2 flex flex-col justify-evenly p-0 mx-auto" style="background-color: #f1f1f1; min-height: 555px">
          <div class="py-4 px-12">
            <div class="flex flex-col-reverse font-display">
              <h2 class="text-gc-red text-5xl font-black">Carlos Sala</h2>
              <h3 class="text-gc-dark-grey uppercase text-2xl font-bold relative title-underline">Director & Founding Partner</h3>
            </div>
            <p class="mb-4 leading-relaxed">A Founding Partner of Grange Capital, Carlos has spent over 15 years gaining experience in commercial debt and the technology sector. During his career he has run Enterprise teams across multiple regions for some of the largest companies in the industry.
            <p class="mb-4 leading-relaxed">Carlos holds a Degree in Finance and a Degree in International Business.</p>
          </div>
          <div class="relative bottom-0 text-center px-3 py-8" style="background-color: #e8e8e8">
            <h3 class="capitalize text-2xl pb-8 text-gc-dark-grey font-display font-bold">Get In Touch With Carlos</h3>
            <ul class="flex relative justify-between p-0 w-full" id="channels">
              <li class="gc-contact-item relative m-0 flex items-center flex-col flex-wrap" style="width: 200px" id="carlos-email">
                <a class="text-gc-yellow hover:text-gc-red flex flex-col flex-no-wrap justify-around items-center" href="mailto:carlos@grangecapital.com.au">
                  <font-awesome :icon="['fas', 'at']" size="2x" />
                  <span class="leading-loose">Email</span>
                </a>
                <span class="gc-bubble">carlos@grangecapital.com.au</span>
              </li>
              <li class="gc-contact-item relative m-0 flex items-center flex-col flex-wrap" style="width: 200px" id="carlos-mobile">
                <a class="text-gc-yellow hover:text-gc-red flex flex-col flex-no-wrap justify-around items-center" href="tel:0438 853 330">
                  <font-awesome :icon="['fas', 'mobile-alt']" size="2x"/>
                  <span class="leading-loose">Mobile</span>
                </a>
                <span class="gc-bubble">0438 853 330</span>
              </li>
              <li class="gc-contact-item relative m-0 flex items-center flex-col flex-wrap" style="width: 200px" id="carlos-linkedin">
                <a class="text-gc-yellow hover:text-gc-red flex flex-col flex-no-wrap justify-around items-center" href="https://linkedin.com/in/carlos-sala-45b30b1a" target="_blank">
                  <font-awesome :icon="['fab', 'linkedin']" size="2x"/>
                  <span class="leading-loose">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <article class="flex flex-col relative w-full lg:flex-row-reverse" id="leigh">
        <g-image src="~/assets/images/leigh.png" class="w-full lg:w-1/2" />
        <div class="w-full lg:w-1/2 flex flex-col justify-evenly p-0 mx-auto" style="background-color: #f1f1f1; min-height: 555px">
          <div class="py-4 px-12">
            <div class="flex flex-col-reverse font-display">
              <h2 class="text-gc-red text-5xl font-black">Leigh Smith</h2>
              <h3 class="text-gc-dark-grey uppercase text-2xl font-bold relative title-underline">Director & Founding Partner</h3>
            </div>
            <p class="mb-4 leading-relaxed">Coming Soon</p>
          </div>
          <div class="relative bottom-0 text-center px-3 py-8" style="background-color: #e8e8e8">
            <h3 class="capitalize text-2xl pb-8 text-gc-dark-grey font-display font-bold">Get In Touch With Leigh</h3>
            <ul class="flex relative justify-between p-0 w-full" id="channels">
              <li class="gc-contact-item relative m-0 flex items-center flex-col flex-wrap" style="width: 200px" id="leigh-email">
                <a class="text-gc-yellow hover:text-gc-red flex flex-col flex-no-wrap justify-around items-center" href="mailto:leigh@grangecapital.com.au">
                  <font-awesome :icon="['fas', 'at']" size="2x" />
                  <span class="leading-loose">Email</span>
                </a>
                <span class="gc-bubble">leigh@grangecapital.com.au</span>
              </li>
              <li class="gc-contact-item relative m-0 flex items-center flex-col flex-wrap" style="width: 200px" id="leigh-mobile">
                <a class="text-gc-yellow hover:text-gc-red flex flex-col flex-no-wrap justify-around items-center" href="tel:0424 888 482">
                  <font-awesome :icon="['fas', 'mobile-alt']" size="2x"/>
                  <span class="leading-loose">Mobile</span>
                </a>
                <span class="gc-bubble">0424 888 482</span>
              </li>
              <li class="gc-contact-item relative m-0 flex items-center flex-col flex-wrap" style="width: 200px" id="leigh-linkedin">
                <a class="text-gc-yellow hover:text-gc-red flex flex-col flex-no-wrap justify-around items-center" href="https://linkedin.com/in/leigh-smith-43626766" target="_blank">
                  <font-awesome :icon="['fab', 'linkedin']" size="2x"/>
                  <span class="leading-loose">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  </Layout>
</template>

<script>
import PageTitleBar from '~/components/PageTitleBar.vue'

export default {
  metaInfo: {
    title: 'Our Team'
  },
  components: {
    PageTitleBar
  },
  data () {
    return {
      title: 'Our Team'
    }
  }
}
</script>
<style>
@media screen and (min-width: 991px) {
  .gc-employee-profile {
    min-height: 555px;
    flex-direction: row;
  }
  .gc-employee-profile > div {
    width: 50%;
  }
  .gc-employee-profile#leigh {
    flex-direction: row-reverse;
  }
}

.gc-bubble {
  position: absolute;
  width: max-content;
  top: -67px;
  transform: translate(0%, -75%) rotateX(180deg);
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  padding: 16px 24px;
  border-radius: 24px;
  opacity: 0;
  transition: opacity 0.2s ease-out, transform 0.1s linear 0.2s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  font-weight: 700; 
}

.gc-contact-item:hover .gc-bubble {
  opacity: 1;
  transform: rotateX(360deg);
  transition: opacity 0.2s ease-in 0.2s, transform 0.4s linear;
}
</style>
