<template>
  <div>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <i
      v-for="(item, index) in menuIcon"
      :key="index"
      v-bind:class="menuIcon[index]"
    ></i>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuIcon: [
        "el-icon-user-solid",
        "el-icon-phone",
        "el-icon-message",
        "el-icon-office-building",
        "el-icon-key",
        "el-icon-date",
      ],
    };
  },
  methods: {
    calculateicon() {
      var nm = this.menuIcon[
        Math.floor(Math.random() * this.menuIcon.length)
      ];
      return "card mb-3 col-lg-3 border-" + nm;
    },
  },
};
</script>
