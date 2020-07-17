<template>
  <div class="bigbox">
    <div>
      <navmenu></navmenu>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navmenu from "../components/navmenu";
export default {
  components: {
    navmenu
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {}
};
</script>

<style scoped>
.bigbox {
  display: flex;
}
</style>