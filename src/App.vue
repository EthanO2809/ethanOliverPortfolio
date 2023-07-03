<template>
  <Navbar/>
  <hr class="hr-01">
  <router-view/>
</template>

<script>
import Navbar from './components/NavBarComp.vue'
export default {
  components: {
    Navbar
  }
}
</script>


<style>
#app {
  font-family: 'Averia Serif GWF', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(to bottom, #3CC4FF, rgb(0, 103, 199), rgb(0, 143, 165), rgb(64, 64, 64));
  background-attachment: fixed;
}

nav {
  padding: 30px;
  margin-bottom: 1rem;
}

nav a {
  font-weight: 500;
  color: rgb(255, 255, 255);
  margin: .8rem;
  font-size: 1.34rem;
}

.hr-01 {
  border: white solid .06rem;
}

</style>
