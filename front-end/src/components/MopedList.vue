<template>
  <div class="">
    <div class="card shadow rounded">
      <div>
        <img :src="img" class="card-image">
      </div>
      <div class="price-overlay p-2">
        <p>${{price}}/<br>hour</p>
      </div>
      <div class="px-2 pt-3">
        <h2>{{title}}</h2>
        <hr class="card-divider">
        <p class="card-details"><span class="desc-category">Make:</span> {{make}}</p>
        <p class="card-details"><span class="desc-category">Engine Size:</span> {{engineSize}}</p>
        <p class="card-details"><span class="desc-category">Passengers:</span> {{numPeople}}</p>
        <p class="text-link">More Details ></p>
      </div>
      
    </div>
    
  </div>
</template>

<script>
  export default {
  name: 'MopedList',
  props: {
    title: String,
    make: String,
    engineSize: String,
    img: String,
    numPeople: Number,
    price: Number,
    id: String,
  },
  methods: {
  }
}
</script>

<style scoped>
 .card {
   background-color: #fff;
   transition: box-shadow .1s;
   cursor: pointer;
 }

 .card:hover {
   -webkit-box-shadow: 0 0.7rem 1.2rem rgb(0 0 0 / 25%) !important;
    box-shadow: 0 0.7rem 1.2rem rgb(0 0 0 / 25%) !important;
 }

 .card-image {
   width: 100%;
   height:200px;
   object-fit: cover;
 }

 .price-overlay {
   font-size:.95em;
   position: absolute;
   top:0;
   left:0;
   width:60px;
   height: 60px;
   background: rgba(255, 255, 255, 0.6);
   border-bottom-right-radius: 5px;
 }

 .price-overlay p {
   color:#0B042F;
   font-size:1.2em;
   line-height: 1em;
   font-weight: bold;
 }

  .card-details {
    font-size:1.2em;
  }

  .card-details > span.desc-category {
    font-size:1em;
  }
  
  .card-divider {
    height:2px;
    color:#43387A;
  }

  .text-link {
    color:#FEE996;
    text-decoration: underline;
    font-size:1.45em;
    font-weight: bold;
  }
</style>