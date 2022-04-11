<template>
  <div id="home-head" v-bind:style="{ backgroundImage: 'url(' + img + ')' }">
    <div class="overlay full-width-height">
      <div class="d-flex vert-box full-width-height justify-content-center">
        <div class="text-md-end text-center vertical-center container px-lg-10 px-1" style="width:100%;" >
          <h1>{{heading}}</h1>
          <p class="sub-header-text">{{desc}}</p>
          <router-link to="/rent"><button type="button" class="btn btn-primary btn-lg mt-3">See Mopeds ></button></router-link>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
  export default {
  name: 'HomeHeader',
  props: {
    heading: String,
    desc: String,
    img: String,
  },
  methods: {
  }
}
</script>

<style scoped>
  @media (min-width: 992px) {
    .px-lg-10 {
      padding: 0 10rem !important;
    }
  }
  
  .vertical-center {
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .vert-box {
    position: relative;
  }

  .full-width-height {
    width:100%;
    height:100%;
  }

  .overlay {
    background: rgba(0, 0, 0, 0.452);
  }

  h1 {
    font-size: 4em;
    color:#0B042F;
  }

  .sub-header-text {
    font-size: 1.4em;
    font-weight:300;
    font-style:italic;
  }

  #home-head {
    background-repeat: none;
    background-size: contain;
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.9);
    height:70vh;
  }
</style>