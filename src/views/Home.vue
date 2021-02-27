<template>
  <div class="home">
    <ThemeA></ThemeA>
  </div>
</template>

<script>
// @ is an alias to /src
import ThemeA from "@/components/home/themeA.vue";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    ThemeA,
  },
  methods: {
    ...mapActions(["getTheme"]),
  },
  mounted() {
    this.getTheme();
  },
};
</script>
