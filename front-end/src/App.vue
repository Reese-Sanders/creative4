<template>
<div id="app">
    <div id="nav-bar" class="shadow">  
      <nav class="navbar navbar-expand-lg navbar-light fixed-top shadow">
        <div class="container d-flex justfiy-content-between">
          <router-link to="/">
            <a class="navbar-brand d-flex" href="#">
              <img src="/happy-moped-logo.jpg" alt="" width="50px" height="50px" class="d-inline-block align-text-top">
              <h2 class="p-1">Happy Moped</h2>  
            </a>
          </router-link>
          <button id="ChangeToggle" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" v-on:click="swap">
            <div class="hamburger-icon" id="navbar-hamburger" v-bind:class = "(!isHam)?'hidden':''"><img class="" src="/icons/bars-solid.svg"></div>
            <div class="hamburger-icon" id="navbar-close" v-bind:class = "(!isX)?'hidden':''"><img class="" src="/icons/x-solid.svg"></div>
          </button>
          <div class="collapse navbar-collapse text-center text-md-end" id="navbarNav">
            <ul class="navbar-nav text-center">
              <li class="nav-item">
                <div class="nav-item-overlay">
                  <router-link to="/rent" class="nav-link">Rent</router-link>
                </div>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link">Contact</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/waiver" class="nav-link">Waiver</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/policies" class="nav-link">Policies</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  <div class="content">
    <router-view />
  </div>
  <div class="footer d-flex justify-content-center align-items-center flex-column">
    <router-link to="/admin" class="my-1">Admin</router-link>
    <a href="https://github.com/Reese-Sanders/creative4" class="my-1">Github</a>
    <p class="footer-title my-1">&copy; 2022 Happy Moped LLC</p>
  </div>
</div>
</template>

<script>


export default ({
  data() {
    return {
      isHam: true,
      isX: false
    }
  },
  methods: {
    swap() {
      this.isHam = !this.isHam;
      this.isX = !this.isX;
    }
  }
});
</script>


<style>

@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

@keyframes rotate {
  0% {
    transform: rotate(-.25turn);
  }
  100% {
    transform: rotate(0turn);
  }
}

@keyframes slideDown {
  0% {
    transform: translateY(-1000px);
  }
  100% {
    transform: tanslateY(0);
  }
}

@keyframes slideLeft {
  0% {
    transform: translateX(1000px);
  }
  100% {
    transform: tanslateX(0);
  }
}

@keyframes slideRight {
  0% {
    transform: translateX(-1000px);
  }
  100% {
    transform: tanslateX(0);
  }
}

@media (max-width: 1199.98px) {
  #single-moped {
    animation: .5s ease-out 0s 1 slideRight;
    z-index: 0;
  }
}


body {
  font-family: 'Poppins', sans-serif;
}

h1 {
  font-weight:600;
}

h2 {
  font-weight:500;
}

h1, h2, h3, h4 {
  color: #0B042F;
}

.white-text {
  color: #fff;
}

.router-link-active {
  text-decoration: underline;
  color: #0B042F !important;
}

.policy-divider {
  height:2px !important;
  opacity: 1 !important;
  color: #0B042F;
}

.desc-category {
  font-size:1.2em;
  font-weight:600;
  color:#0B042F;
}

.navbar-collapse {
  flex-grow: 0 !important;
}

.bg-theme-light {
  background-color:#fafafa;
}

.bg-theme-light .hours-op-heading {
  background-color:#fafafa !important;
}

.section-padding {
    padding: 70px 0;
}

.nav-spacer {
  margin-top: 50px;
}

.navbar-toggler:active > div {
  animation: .2s ease-out 0s 1 rotate;
}

.navbar-brand {
  color: #0B042F !important;
}



#nav-bar {
  z-index: 1000000;
  position: relative;
}

.navbar {
  background-color: white !important;
  --bs-bg-opacity: 1;
}

#home-head h1 {
 color:#fff;
}

#home-head p {
 color:#fff;
}


.btn {
  border-radius: 20px !important;
  
}

.btn-primary {
  background-color: #43387A !important;
  border-color: #43387A !important;
}

.btn-primary:hover {
  background-color: #3a3069 !important;
  border-color: #3a3069 !important;
}

.btn-white {
  background-color: #fff !important;
  border-color: #fff !important;
}

.btn-white:hover {
  background-color: #e5e3f0 !important;
  border-color: #e5e3f0 !important;
}

.content {
  z-index: 1;
  position: relative;
}
.hamburger-icon img {
    src: url("/icons/bars-solid.svg");
    display:inline-block;
    width:1.5em;
    height:1.5em;
    vertical-align:middle;
    background-repeat:no-repeat;
    background-position:center;
    background-size:100%
}

.hidden {
    display: none !important;
}

.close-icon {
    background-image: url("/src/assets/icons/x-solid.svg");
    display:inline-block;
    width:1.5em;
    height:1.5em;
    vertical-align:middle;
    background-repeat:no-repeat;
    background-position:center;
    background-size:100%
}

.close-icon.hidden {
    background-image: url("");
    display:inline-block;
    width:1.5em;
    height:1.5em;
    vertical-align:middle;
    background-repeat:no-repeat;
    background-position:center;
    background-size:100%
}

.footer {
  height: 200px;
  
  background: #43387A;
  color:#fff;
  
}

.footer a {
  color: #fff;
}

.footer a:hover {
  color: #FEE996;
}

.content {
  min-height: 80vh;
}

.footer-title {
  font-size: 1.2em;
}

/*html {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}


.header {
  display: flex;
  padding: 10px 100px 0px 100px;
  background-color: #5BDEFF;
  color: #1C454F;
}

.title {
  margin-top: 5px;
}

.title h1 {
  font-size: 30px;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}




h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}*/
</style>
