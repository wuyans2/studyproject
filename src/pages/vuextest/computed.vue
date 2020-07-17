<template>
  <div class="box">
    <p>
      这是单个的状态获取computed:
      {{count}}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>

<style scoped>
.box {
  padding: 20px;
}
</style>