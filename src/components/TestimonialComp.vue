<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col" v-for="item in testimonials" :key="item.id">
          <div class="card" style="width: 18rem">
            <img :src="item.image" class="card-img-top" :alt="item.name" loading="lazy" />
            <div class="card-body">
                <h3 class="display-3"> {{item.name}} </h3>
                <h4 class="display-4"> {{item.role}} </h4>
              <p class="card-text">
                {{item.words}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonials");
  },
};
</script>
<style scoped></style>
