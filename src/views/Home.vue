<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({
      isSizeLoaded: state => state.ui.isSizeLoaded,
      sizeLoading: state => state.ui.sizeLoading,
      sizes: state => state.data.sizes
    })
  },
  created() {
    this.$store.dispatch("data/getSizes");
  }
};
</script>
