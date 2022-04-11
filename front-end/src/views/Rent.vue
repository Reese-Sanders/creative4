<template>
<div class="rent">
  <section v-bind:class="{ 'd-none': isSingleMoped }" id="moped-list" class="section-padding nav-spacer">
    <h1 class="text-center">Our Mopeds</h1>
    <div class="container mt-lg-5 mt-0">
      <div class="row justify-content-center">
        <div v-for="moped in mopeds" v-bind:key="moped.title" class="col-lg-4 col-md-6 col-12 mt-5 mt-lg-0" v-on:click="setSingle(moped), toggleComponent()">
          <MopedList :title="moped.title" :img="moped.paths[0]" :engineSize="moped.engineSize" :numPeople="moped.numPeople" :make="moped.make" :price="moped.price"/>
        </div>
      </div>
    </div>
  </section>
  <section id="single-moped" v-bind:class="{ 'd-none': isMopedList }" class="section-padding nav-spacer">
    <div class="container">
      <img src="back-icon.png" class="up-button" v-on:click="toggleComponent()">
    </div>
    <SingleMoped :moped="singleMoped" />
    <div class="d-flex justify-content-center mt-5">
      <button class="btn btn-primary btn-lg">Reserve Now</button>
    </div>
  </section>
</div>
</template>

<style scoped>
  .up-button {
    width:50px;
    height:50px;
    cursor:pointer;
    filter: invert(6%) sepia(35%) saturate(5540%) hue-rotate(242deg) brightness(91%) contrast(108%);
  }

  .up-button:hover {
    filter: invert(10%) sepia(24%) saturate(6324%) hue-rotate(238deg) brightness(98%) contrast(117%);
  }
</style>

<script>
import axios from 'axios';
import MopedList from '../components/MopedList.vue';
import SingleMoped from '../components/SingleMoped.vue';

export default {
  components: { MopedList, SingleMoped },
  name: 'rent',
  data() {
    return {
      mopeds: [],
      isSingleMoped: false,
      isMopedList: true,
      singleMoped: null,
    }
  },
  created() {
    this.getMopeds();
    this.initializeSingle();
  },
  methods: {
    async getMopeds() {
      try {
        let response = await axios.get("/api/mopeds");
        this.mopeds = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },

    initializeSingle() {
      this.singleMoped = this.mopeds[0];
    },

    toggleComponent() {
      this.isSingleMoped = !this.isSingleMoped;
      this.isMopedList = !this.isMopedList;
    },

    setSingle(moped) {
      console.log("setting single");
      this.singleMoped = moped;
    }
  }
}
</script>
