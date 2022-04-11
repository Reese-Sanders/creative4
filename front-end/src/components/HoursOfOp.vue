<template>
  <div class="hours-container">
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="outline-overlay">
          <div class="d-flex justify-content-center">
            <div class="hours-op-heading text-center">
              <h2>Hours of Operation</h2>
            </div>
          </div>
          <div class="hours-section px-3 px-lg-5">
            <div class="d-flex justify-content-between my-3" v-for="(hour, index) in hours" v-bind:key="index">
              <p>{{days[index]}}</p>
              <p>{{hour}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
  name: 'HoursOfOp',
  data() {
    return {
      hours: [],
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ]
    }
  },
  created() {
    this.getHours();
  },
  methods: {
    async getHours() {
      try {
        let res = await axios.get("/api/hours/");
        let times = res.data[0].hours;
        this.hours = times;
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>
  .outline-overlay {
    max-width:500px;
    width: 90%;
    height:525px;
    border: 5px solid #FEE996;
  }

  .hours-op-heading {
    background-color: #fff;
    width:70%;
    margin-top:-25px;
  }

  .hours-section p {
    font-size:1.3em;
  }
</style>