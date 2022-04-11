<template>
  <div id="contact-page">
    <section class="section-padding nav-spacer">
      <div class="container">
        <h1 class="text-center">Contact</h1>
        <div class="row">
          <div class="col-lg-6 col-12 text-center text-lg-start mt-5">
            <h2>Email</h2>
            <p>mopedsbusiness@gmail.com</p>
            <div class="small-spacer"></div>
            <h2>Phone Number</h2>
            <p>(111) 111-1111</p>
            <p>(222) 222-2222</p>
            <div class="small-spacer"></div>
            <h2>Address</h2>
            <p>33 N 33 S, <br>Provo UT 84606</p>
          </div>
          <div class="col-lg-6 col-12 mt-5">
            <form class="p-3">
              <div class="form-row">
                <div class="form-group">
                  <label for="inputAddress">Email</label>
                  <input type="email" class="form-control" id="inputAddress" placeholder="youremail@domain.com">
                </div>
                <div class="form-group mt-3">
                  <label for="subject">Subject</label>
                  <input type="text" class="form-control" id="subject" placeholder="Email Subject">
                </div>
                <div class="form-group mt-3">
                  <label for="message">Message</label>
                  <textarea class="form-control" rows="3" id="message" placeholder="Your message"></textarea>
                </div>
              </div>
              <div class="d-flex justify-content-center mt-3">
                <button class="btn btn-primary btn-lg px-2">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-theme-light">
      <div class="container">
        <div class="row">
          <HoursOfOp />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
  form {
    background-color: #0B042F;
    border-radius: 10px;
  }
  label {
    color:white;
  }

  form .btn-lg {
    width:50% !important;
  }
</style>

<script>
import HoursOfOp from '../components/HoursOfOp.vue'

export default {
  components: { HoursOfOp },
  name: 'contact',
}
</script>