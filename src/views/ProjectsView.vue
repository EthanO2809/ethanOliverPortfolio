<template>
    <div>
        <h4 class="heading">Projects</h4>
        <Projects/>
    </div>
</template>

<script>
import Projects from '../components/ProjectsComp.vue'
export default {
    components: {
        Projects
    }
}
</script>

<style>
    .heading {
        font-size: 2rem;
        margin-bottom: 2rem;
    }
</style>