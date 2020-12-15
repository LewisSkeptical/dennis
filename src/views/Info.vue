<template>
  <div class="info" style="display:inline-block">

    <div>
      <div style="display: inline-block">搜索：</div>
      <el-input
        v-model="search"
        style="width:300px;display: inline-block"
        placeholder="请搜索"
      >
      </el-input>
    </div>
    <son></son>
    <div class="myTable" style="width: 100%">
      <el-table
        ref="dormitoryTable"
        :data="tables"
        tooltip-effect="dark"
        stripe
      >
        <el-table-column type="selection" width="45"></el-table-column>
        <el-table-column label="序号" type="index" width="65"></el-table-column>
        <el-table-column label="部门" prop="dept"></el-table-column>
        <el-table-column label="职位" prop="position"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="年龄" prop="age"></el-table-column>
        <el-table-column label="性别" prop="sex"></el-table-column>
        <el-table-column label="学历" prop="degree"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import son from '@/components/son.vue'
export default {
  data() {
    return {
      search: "",
      info: [
        {
          dept: "研发部",
          position: "研发经理",
          name: "Dennis",
          age: "44",
          sex: "男",
          degree: "硕士",
        },
        {
          dept: "研发部",
          position: "研发主管",
          name: "Jake",
          age: "40",
          sex: "男",
          degree: "硕士",
        },
        {
          dept: "研发部",
          position: "研发工程师",
          name: "Harry",
          age: "35",
          sex: "男",
          degree: "本科",
        },
        {
          dept: "研发部",
          position: "研发工程师",
          name: "Nike",
          age: "26",
          sex: "男",
          degree: "本科",
        },
        {
          dept: "市场部",
          position: "市场经理",
          name: "Irving",
          age: "33",
          sex: "男",
          degree: "硕士",
        },
        {
          dept: "市场部",
          position: "市场主管",
          name: "Gary",
          age: "29",
          sex: "男",
          degree: "本科",
        },
        {
          dept: "市场部",
          position: "市场专员",
          name: "Mike",
          age: "25",
          sex: "男",
          degree: "本科",
        },
        {
          dept: "市场部",
          position: "实习生",
          name: "Bake",
          age: "23",
          sex: "男",
          degree: "本科",
        },
        {
          dept: "测试部",
          position: "测试经理",
          name: "Kansis",
          age: "29",
          sex: "男",
          degree: "本科",
        },
        {
          dept: "测试部",
          position: "测试主管",
          name: "Vike",
          age: "56",
          sex: "男",
          degree: "专科",
        },
        {
          dept: "测试部",
          position: "测试专员",
          name: "Tom",
          age: "22",
          sex: "女",
          degree: "本科",
        },
        {
          dept: "财务部",
          position: "财务经理",
          name: "Elite",
          age: "50",
          sex: "女",
          degree: "本科",
        },
        {
          dept: "财务部",
          position: "财务主管",
          name: "Jessica",
          age: "46",
          sex: "女",
          degree: "本科",
        },
        {
          dept: "财务部",
          position: "财务专员",
          name: "Rodman",
          age: "23",
          sex: "女",
          degree: "本科",
        },
        {
          dept: "运维部",
          position: "运维经理",
          name: "Huni",
          age: "39",
          sex: "女",
          degree: "本科",
        },
        {
          dept: "运维部",
          position: "运维主管",
          name: "Piter",
          age: "48",
          sex: "男",
          degree: "专科",
        },
        {
          dept: "运维部",
          position: "运维专员",
          name: "Unity",
          age: "33",
          sex: "女",
          degree: "专科",
        },
      ],
    };
  },
  components:{
      son
  },
  computed: {
    tables() {
      const search = this.search;
      if (search) {
        return this.info.filter(
            data => {
                return Object.keys(data).some(
                    key => {
                        return (
                            String(data[key]).toLowerCase().indexOf(search) > -1
                        );
                    }
          );
        });
      }
        return this.info;
        },
    },
//   methods:{
//       change(e){
//           this.$forceUpdate
//       }
//   }

    //给input框绑定v-model事件
    //<input v-model="search" type="text" placeholder="请输入搜索条件">
    //在data里面定义一下search实现双向数据绑定
    //通过es6的箭头函数进行过滤
    //过滤list数组返回新的数组 遍历循环该数组
    //return this.info.filter(value.name.indexOf(this.search) !== -1)
};
</script>
