<template>
  <div id="js-loading" class="css-loading" v-show="showLoading">
    <div class="container">
      <div class="loader loader-1">
        <div class="loader-outter"></div>
        <div class="loader-inner"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
      showLoading: false
    }
  }
}
</script>

<style scoped>
.css-loading {
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.4);
  position: fixed;
  z-index: 5000;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  left: 0;
  margin: 0 auto;
  text-align: center;
}

.container{
  width: inherit;
  height: inherit;
}

.loader {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  top: 50%;
  margin-top: -30px;
  /* margin: 75px; */
  display: inline-block;
  vertical-align: middle;
}

.loader-star {
  position: absolute;
  top: calc(50% - 12px);
}

/*LOADER-1*/

.loader-1 .loader-outter {
  position: absolute;
  border: 4px solid #ec4280;
  border-left-color: transparent;
  border-bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  -webkit-animation: loader-1-outter 1s cubic-bezier(.42, .61, .58, .41) infinite;
  animation: loader-1-outter 1s cubic-bezier(.42, .61, .58, .41) infinite;
}

.loader-1 .loader-inner {
  position: absolute;
  border: 4px solid #ec4280;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  left: calc(50% - 20px);
  top: calc(50% - 20px);
  border-right: 0;
  border-top-color: transparent;
  -webkit-animation: loader-1-inner 1s cubic-bezier(.42, .61, .58, .41) infinite;
  animation: loader-1-inner 1s cubic-bezier(.42, .61, .58, .41) infinite;
}

/* ----------------     KEYFRAMES    ----------------- */

@-webkit-keyframes loader-1-outter {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loader-1-outter {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-webkit-keyframes loader-1-inner {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}

@keyframes loader-1-inner {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
</style>
