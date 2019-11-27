<template>
  <form 
    name="contact"
    method="post"
    action="https://www.form-data.com/_functions/submit/mdbuehpe4etfgnorm1q9zj"
  >
    <input type="text" name="name" placeholder="Name *" required />
    <input type="email" name="email" placeholder="Email Address *" required />
    <input type="tel" name="phone" placeholder="Contact Number *" required />
    <input type="text" name="company" placeholder="Company Name" />
    <textarea name="message" placeholder="Your Enquiry *" required></textarea>
    <p>* Required Fields</p>
    <button type="submit">Submit Enquiry</button>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
