<template>
  <div class="bg-gc-lighter-grey rounded shadow px-4 pt-6 pb-8">
    <h2 class="font-display text-2xl font-bold text-gc-red mb-4 relative subtitle-underline">Contact Form</h2>
    <form 
      name="contact"
      method="post"
      v-on:submit.prevent="handleSubmit"
      action="/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
        Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" placeholder="Name *" v-model="formData.name" required />
      <input class="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" placeholder="Email Address *" v-model="formData.email" required />
      <input class="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="tel" name="phone" placeholder="Contact Number *" v-model="formData.phone" required />
      <input class="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="company" placeholder="Company Name" v-model="formData.company" />
      <textarea class="shadow appearance-none border rounded w-full py-2 px-3 mb-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="message" placeholder="Your Enquiry *" v-model="formData.message" required></textarea>
      <p class="text-gc-light-grey mb-6">* Required Fields</p>
      <button class="bg-gc-yellow hover:bg-gc-red transition-background-color text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit Enquiry</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data () {
    return {
      formData: {}
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
      .then(() => this.$router.push('/success'))
      .catch(error => alert(error))
    }
  }
}
</script>

<style>

</style>
