<template>
  <div>
    <div class="container">
      <h3>Education:</h3>
      <div class="row">
        <div class="col-6" v-for="item in education" :key="item.id">
          <div class="card" style="width: 18rem">
            <img
              :src="item.image"
              class="card-img-top"
              :alt="item.place"
              loading="lazy"
            />
            <div class="card-body">
              <h5 class="card-title">{{ item.place }}</h5>
              <p class="card-text">
                {{ item.qualification }}
              </p>
              <p>{{ item.year }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
<!-- soft skills -->
</template>
<script>
export default {
  computed: {
    education() {
      return this.$store.state.education;
    },
    softskills() {
      return this.$store.state.softskills;
    },
    hardskills() {
      return this.$store.state.hardskills;
    },
    experience() {
      return this.$store.state.experience;
    },
  },
  mounted() {
    this.$store.dispatch("fetchEducation");
    this.$store.dispatch("fetchSoftskills");
    this.$store.dispatch("fetchHardskills");
    this.$store.dispatch("fetchExperience");
  },
};
</script>
<style scoped></style>
