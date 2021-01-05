<template>
  <div class="page-home">
    <Navbar/>

    <div class="main-wrapper">
      <ComeSoon />
    </div>

    <Footer/>
  </div>
</template>

<script>
import Navbar from './Navbar';
import ComeSoon from './page-home/ComeSoon';
import Links from './Links';
import Copyright from './Copyright';
import Footer from './Footer';

import Vue from 'vue';
import VueParticles from 'vue-particles';

Vue.use(VueParticles);

export default {
  components: {
    Navbar,
    ComeSoon,
    Links,
    Copyright,
    Footer,
  },
};
</script>

<style lang="less" scoped>
@import '../styles/content.less';

body {
  background-color: #f9f9f9;
}

.theme-container {
  background-color: #f9f9f9;
}

.main-wrapper{
  flex: 1 0 auto;
  margin-top: 100px;
}
</style>
