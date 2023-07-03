<template>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <h5> Ethan Oliver <br>
         Web Developer</h5>
    
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li> 
        <li class="nav-item">
          <router-link to="/about">About</router-link>
        </li> 

        <li class="nav-item">
          <router-link to="/resume">Resume</router-link>
        </li> 
        
        <li class="nav-item">
          <router-link to="/projects">Projects</router-link>
        </li> 

        <li class="nav-item">
          <router-link to="/testimonial">Testimonials</router-link>
        </li> 

        <li class="nav-item">
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>