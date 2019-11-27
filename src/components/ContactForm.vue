<template>
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
    <input type="text" name="name" placeholder="Name *" v-model="formData.name" required />
    <input type="email" name="email" placeholder="Email Address *" v-model="formData.email" required />
    <input type="tel" name="phone" placeholder="Contact Number *" v-model="formData.phone" required />
    <input type="text" name="company" placeholder="Company Name" v-model="formData.company" />
    <textarea name="message" placeholder="Your Enquiry *" v-model="formData.message" required></textarea>
    <p>* Required Fields</p>
    <button type="submit">Submit Enquiry</button>
  </form>
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
