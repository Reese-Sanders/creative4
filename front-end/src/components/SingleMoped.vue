<template>
  <div class="mt-5" id="moped-single">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-12">
          <h1>{{moped.title}}</h1>
          <hr>
          <p><span class="desc-category">Price: </span>${{moped.price}} per hour</p>
          <p><span class="desc-category">Make: </span>{{moped.make}}</p>
          <p><span class="desc-category">Engine Size: </span>{{moped.engineSize}}</p>
          <p><span class="desc-category">Max Occupants: </span>{{moped.numPeople}}</p>
          <p><span class="desc-category">Other Info: </span>{{moped.otherInfo}}</p>
        </div>
        <div class="col-lg-6 col-12 px-lg-5 px-2">
          <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
            <div class="carousel-inner ">
              <div class="carousel-item" v-for="(image, index) in moped.paths" v-bind:key="image" :class="{ 'active': index === 0 }">
                <img :src="image">
              </div>
            </div>
            <button class="carousel-control-prev  d-block" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next  d-block" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
 .carousel-item img {
   object-fit: cover;
   width:100%;
   height:300px;
 }
</style>

<script>
  export default {
  name: 'SingleMoped',
  props: {
    moped: Object
  },
  methods: {
  }
}
</script>