<template>
  <div class="box">
    <!-- <p>
      这是单个的状态获取computed:
      {{count}}
    </p>-->
    <!-- 测试验证 el-select 的value-key属性-->
    <el-select v-model="test" value-key="id" @change="changeValue">
      <el-option v-for="item in arr" :label="item.name" :key="item.id" :value="item"></el-option>
    </el-select>
    <div>
      多个状态：
      <p>count：{{count}}</p>
      <p>countAlias：{{countAlias}}</p>
      <p>countPlusLocalState：{{countPlusLocalState}}</p>
    </div>
  </div>
</template>

<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from "vuex";
export default {
  data() {
    return {
      test: "",
      arr: [
        { id: 1, name: "张三" },
        { id: 2, name: "李四" },
        { id: 3, name: "王五" }
      ],
      localCount: 3
    };
  },
  mounted() {},
  methods: {
    changeValue(value) {
      console.log("value", value);
      console.log(this.test, "thie.test");
    }
  },
  // 这是单个的状态获取computed:
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   }
  // },
  // mapState 辅助函数
  computed: mapState({
    // 箭头函数可使代码更简练
    count: state => state.count,

    // 传字符串参数'count'等同于'state => state.count'
    countAlias: "count",

    // 为了能够使用'this'获取局部状态，必须使用常规函数
    countPlusLocalState(state) {
      return state.count + this.localCount;
    }
  }),

  // computed: mapState([
  //   // 映射 this.count 为 store.state.count
  //   'count'
  // ]),

  // computed: {
  //   localComputed () { /* ... */ },
  //   // 使用对象展开运算符将此对象混入到外部对象中
  //   ...mapState({
  //     // ...
  //   })
  // }
};
</script>

<style scoped>
.box {
  padding: 20px;
}
</style>