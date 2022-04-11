<template>
<div class="home nav-spacer">
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item" v-for="(header, index) in headers" v-bind:key="header.heading" :class="{ 'active': index === 0 }">
      <HomeHeader :heading="header.title" :desc="header.desc" :img="header.path" />
    </div>
  </div>
  <button class="carousel-control-prev d-none d-md-block" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next d-none d-md-block" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<section id="check-availability">
  <div class="container">
    <div class="d-flex justify-content-center align-items-center text-center flex-wrap">
      <div class="pb-4 px-4">
        <h2 class="white-text">Check Availability</h2>
      </div>
      <div class="pb-4 px-4">
        <input type="datetime-local" id="meeting-time"
          name="meeting-time" step="1800"
          min="2022-01-14T00:00" max="2050-06-14T00:00" v-model="currentTimeDate">
      </div>
      <div class="pb-4 px-4">
        <button type="button" class="btn btn-white btn-lg">Submit</button>
      </div>
    </div>
  </div>
</section>


<section id="hours-operation" class="section-padding">
  <HoursOfOp />
</section>
    
</div>
</template>

<script>
import axios from 'axios';
import HomeHeader from '../components/HomeHeader.vue'
import HoursOfOp from '../components/HoursOfOp.vue'
// @ is an alias to /src
//col-lg-4 col-md-6 col-12 

export default {
  name: 'Home',
  data() {
    return {
     headers: [],
     hours: [],
     headerTest: {
       heading: "This is a heading",
       desc: "Some description",
       img: "/ordinary.png"
     },
     currentTimeDate: null,
    }
  },
  components: {
    HomeHeader,
    HoursOfOp
  },
  created() {
    this.getFeatures();
  },
  methods: {
    async getFeatures() {
      try {
        let response = await axios.get("/api/feature");
        this.headers = response.data;
        console.log(this.headers);
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async getHours() {
      try {
        let response = await axios.get("/api/hours");
        this.hours = response.data;
        console.log(this.hours);
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    getCurrentDate() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      var hh = String(today.getHours()).padStart(2, '0');
      var minutes = String(today.getMinutes()).padStart(2, '0');
      //"2050-06-14T00:00"
      let todayDate = yyyy + "-" + mm + "-" + dd + "-T" + hh + ":" + minutes;
      this.getCurrentDate = todayDate;
    }
  },
  beforeMount() {
    this.getCurrentDate();
  }
}
</script>

<style scoped>

#check-availability {
  padding: 1.5rem 0 0 0;
  background-color:#43387A;
  color: white;
}

#check-availability input[type="datetime-local"] {
  padding:10px 20px;
  border: none;
}

#check-availability input[type="datetime-local"]:hover {
  background-color: #e5e3f0 !important;
}

#check-availability .btn {
  min-width:150px;
}

.carousel-control-prev-icon {
 background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23D3D3D3' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23D3D3D3' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
}

.image h2 {
  font-style: italic;
}

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.image-gallery {
  column-gap: 1.5em;
}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

.image img {
  width: 100%;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .image-gallery {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .image-gallery {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .image-gallery {
    column-count: 2;
  }
}
</style>
