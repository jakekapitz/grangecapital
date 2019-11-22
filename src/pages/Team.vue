<template>
  <Layout>
    <PageTitleBar :title=title></PageTitleBar>
    <section class="container mx-auto text-gc-dark-grey">
      <article class="flex flex-col relative w-full lg:flex-row" id="carlos">
        <g-image src="~/assets/images/carlos.png" class="w-full lg:w-1/2" />
        <div class="w-full lg:w-1/2 flex flex-col justify-evenly p-0 mx-auto" style="background-color: #f1f1f1; min-height: 555px">
          <div class="py-4 px-12">
            <div class="flex flex-col-reverse font-display">
              <h2 class="text-gc-red text-5xl font-black">Carlos Sala</h2>
              <h3 class="text-gc-dark-grey uppercase text-2xl">Director & Founding Partner</h3>
            </div>
            <p class="mb-2 leading-relaxed">A Founding Partner of Grange Capital, Carlos has spent over 15 years gaining experience in commercial debt and the technology sector. During his career he has run Enterprise teams across multiple regions for some of the largest companies in the industry.
            <p class="mb-2 leading-relaxed">Carlos holds a Degree in Finance and a Degree in International Business.</p>
          </div>
          <div class="relative bottom-0 text-center px-3 py-8" style="background-color: #e8e8e8">
            <h3 class="capitalize text-xl pb-4 text-gc-dark-grey">Get In Touch With Carlos</h3>
            <ul class="flex relative justify-between p-0 w-full" id="channels">
              <li class="relative m-0 flex items-center flex-col flex-wrap" style="width: 200px" id="carlos-email">
                <a class="text-gc-dark-grey hover:text-gc-red flex flex-col flex-no-wrap justify-around" href="mailto:carlos@grangecapital.com.au">
                  <font-awesome :icon="['fas', 'at']" class="text-3xl"/>
                  <span class="leading-loose">Email</span>
                </a>
                <span class="gc-bubble">carlos@grangecapital.com.au</span>
              </li>
              <li class="relative m-0 flex items-center flex-col flex-wrap" style="width: 200px" id="carlos-mobile">
                <a class="text-gc-dark-grey hover:text-gc-red flex flex-col flex-no-wrap justify-around" href="tel:0438 853 330">
                  <font-awesome :icon="['fas', 'mobile-alt']" class="text-3xl"/>
                  <span class="leading-loose">Mobile</span>
                </a>
                <span class="gc-bubble">0438 853 330</span>
              </li>
              <li class="relative m-0 flex items-center flex-col flex-wrap" style="width: 200px" id="carlos-linkedin">
                <a class="text-gc-dark-grey hover:text-gc-red flex flex-col flex-no-wrap justify-around" href="https://linkedin.com/in/carlos-sala-45b30b1a" target="_blank">
                  <font-awesome :icon="['fab', 'linkedin']" class="text-3xl"/>
                  <span class="leading-loose">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <article class="gc-employee-profile" id="leigh">
        <div class="gc-photo">
          <img src="https://grangecapital.com.au/wp-content/uploads/2019/04/leigh.png" alt="" style="width:100%" />
        </div>
        <div class="gc-details">
          <div class="gc-upper-section">
            <div class="gc-particulars">
              <h2 class="gc-name">Leigh Smith</h2>
              <h3 class="gc-position">Director & Founding Partner</h3>
            </div>
            <div>
              <p>Coming Soon</p>
            </div>
          </div>
          <div class="gc-lower-section">
            <h3>Get In Touch With Leigh</h3>
            <ul class="gc-channels" id="channels">
              <li class="gc-contact-item" id="leigh-email">
                <a href="mailto:leigh@grangecapital.com.au">
                  <i class="fas fa-at"></i>
                  <span class="gc-mode">Email</span>
                </a>
                <span class="gc-bubble">leigh@grangecapital.com.au</span>
              </li>
              <li class="gc-contact-item" id="leigh-mobile">
                <a href="tel:0424 888 482">
                  <i class="fas fa-mobile-alt"></i>
                  <span class="gc-mode">Mobile</span>
                </a>
                <span class="gc-bubble">0424 888 482</span>
              </li>
              <li class="gc-contact-item" id="leigh-linkedin">
                <a href="https://linkedin.com/in/leigh-smith-43626766" target="_blank">
                  <i class="fab fa-linkedin"></i>
                  <span>LinkedIn</span>
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
.gc-employee-profile {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: 700px;
}
.gc-employee-profile > div {
  width: 100%;
}
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

.gc-photo {
  display: block;
  max-width: 100%;
  height: auto;
  z-index: 1;
}
.gc-photo > img:hover {
  transform: scale(1.05);
  filter: drop-shadow(0, 0, 15px, rgba(0, 0, 0, 0.1));
}

.gc-upper-section {
  padding: 12px 32px;
}
.gc-upper-section > .gc-particulars {
  display: flex;
  flex-direction: column-reverse;
}
.gc-upper-section > .gc-particulars > .gc-position:after {
  content: "";
  display: block;
  position: relative;
  width: 36px;
  border: 2.5px solid #c4993780;
  top: 4px;
}

.gc-upper-section p {
    color: rgba(0,0,0,0.6);
    font-size: 1rem;
    font-weight: 400;
}

.gc-lower-section > h3:after {
  content: "";
  display: block;
  position: relative;
  margin: 0 auto;
  width: 36px;
  border: 2.5px solid #c4993780;
  top: 4px;
}
.gc-lower-section .gc-channels {
  list-style-type: none;
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 0;
  width: 100%;
}

#channels {
    margin-left: 0;
}

.gc-lower-section .gc-channels .gc-contact-item i {
  font-size: 1.75rem;
}
.gc-lower-section .gc-channels .gc-contact-item > a {
  transition: all 0.2s ease-in;
}
.gc-lower-section .gc-channels .gc-contact-item > a:hover {
  color: #e41f2680;
  transform: scale(1.05);
  transition: all 0.2s ease-out;
}

.gc-bubble {
  position: absolute;
  width: max-content;
  top: -67px;
  transform: translate(-50%, -75%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  padding: 16px 24px;
  border-radius: 24px;
  opacity: 0;
  transition: opacity 0.2s ease-out, transform 0.1s linear 0.2s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  font-weight: 700;
  transform: rotateX(180deg);
}

.gc-mode {
  line-height: 2rem;
}

.gc-contact-item:hover .gc-bubble {
  opacity: 1;
  transform: rotateX(360deg);
  transition: opacity 0.2s ease-in 0.2s, transform 0.4s linear;
}
</style>
