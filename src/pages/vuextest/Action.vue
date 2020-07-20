<template>
  <div class="box">
    <div>
      Action 类似于 mutation，不同在于：
      Action 提交的是 mutation，而不是直接变更状态。
      Action 可以包含任意异步操作。
      <!-- 传参的话是在调用当中传参，比如 -->
      <el-button @click="incrementAction('action')">action</el-button>
      <p>count：{{count}}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    ...mapActions(["incrementAction"])
  },
  computed: mapState(["count"])
};
</script>

<style scoped>
.box {
  padding: 20px;
}
</style>