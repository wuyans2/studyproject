<template>
  <div class="box">
    <p>更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：</p>
    <div>
      <el-button @click="add()">add</el-button>
      <p>count：{{count}}</p>提交载荷（Payload）
      <p>你可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）：</p>
      <!-- <el-button @click="add2()">增加,每次＋5</el-button>
      <p>num：{{num}}</p>-->
      <el-button @click="add3()">增加,每次＋10</el-button>
      <p>num：{{num}}</p>
    </div>
  </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    ...mapMutations({
       add: 'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
    }),
    // add() {
    //   this.$store.commit("increment");
    // },
    add2() {
      this.$store.commit("increment2", 5);
    },
    add3() {
      // this.$store.commit("increment3",{
      //   amount:10
      // })
      // 提交 mutation 的另一种方式是直接使用包含 type 属性的对象：
      this.$store.commit({
        type: "increment3",
        amount: 10
      });
    }
  },
  computed: mapState([
    // 映射 this.count 为 store.state.count
    "count",
    "num"
  ])
};
</script>

<style scoped>
.box {
  padding: 20px;
}
</style>