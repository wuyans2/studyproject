<template>
  <div class="box">
    <p>Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。</p>
    <p>doneTodosCount：{{doneTodosCount}}</p>
    <p>store.getters.doneTodos：{{this.$store.getters.doneTodos}}</p>
    <p>doneTodosCount2：{{doneTodosCount2}}</p>
    <p>getTodoById：{{this.$store.getters.getTodoById(2)}}</p>
    <!-- <p>doneCount：{{doneCount}}</p> -->
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {
    // 有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数：
    doneTodosCount() {
      return this.$store.state.todos.filter(todo => todo.done).length;
    },
    doneTodosCount2() {
      return this.$store.getters.doneTodosCount;
    }
  },
  // mapGetters 辅助函数
  // computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    // ...mapGetters([
    //   "doneTodosCount",
    //   "anotherGetter"
    //   // ...
    // ]),
    // ...mapGetters({
    //   // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
    //   doneCount: "doneTodosCount"
    // })
  // }
};
</script>

<style scoped>
.box {
  padding: 20px;
}
</style>