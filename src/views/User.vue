<template>
  <div>
    <!-- 搜索 -->
    <el-input
      style="width:300px"
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      v-model="search"
    >
    </el-input>

    <!-- 用户名称 -->
    <label style="margin:0 20px;display:inline-block">用户名称</label>
    <el-input
      style="width:200px"
      placeholder="请输入用户名称"
      v-model="inputname"
    >
    </el-input>

    <!-- 手机号码 -->
    <label style="margin:0 20px;display:inline-block">手机号码</label>
    <el-input
      style="width:200px"
      placeholder="请输入手机号码"
      v-model="inputphonenomber"
    >
    </el-input>

    <!-- 状态 -->
    <label style="margin:0 20px;display:inline-block">状态</label>
    <el-select style="width:200px" v-model="value" placeholder="用户状态">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <!-- 创建时间 -->
    <label style="margin:0 20px;display:inline-block">创建时间</label>
    <el-input
      style="width:200px"
      placeholder="请输入手机号码"
      v-model="inputphonenomber"
    >
    </el-input>
    <!-- 搜索 -->
    <el-button style="margin:0 20px" type="success">搜索</el-button>
    <!-- 重置 -->
    <el-button style="margin:0 10px" type="primary">重置</el-button>
    <el-row>
      <!-- 组织架构 -->
      <el-tree
        style="width:300px;margin-top:20px;float:left;"
        :data="data2"
        :props="defaultProps"
        @node-click="handleNodeClick"
      ></el-tree>
      <!-- 表格主体-->
      <div id="tablebutton" style="float:left;margin-left:65px">
        <el-button
          size="mini"
          style="margin:20px 10px 10px  10px;display:inline-block"
          type="primary"
          @click="dialogAddVisible = true"
        >
          <i class="el-icon-plus"></i>新增
        </el-button>
        <el-button
          size="mini"
          style="margin:20px 10px 10px  10px;display:inline-block"
          type="success"
          @click="show(scope)"
        >
          <i class="el-icon-edit"></i>修改
        </el-button>
        <el-button
          size="mini"
          style="margin:20px 10px 10px  10px;display:inline-block"
          type="danger"
          @click="dialogDeleteVisible = true"
        >
          <i class="el-icon-deletet"></i>删除
        </el-button>
        
        <el-button
            size="mini"
            style="margin:20px 10px 10px  10px;display:inline-block"
            type="info"
          >
          <i class="el-icon-upload2"></i>导入
        </el-button>

        <el-button
          size="mini"
          style="margin:20px 10px 10px  10px;display:inline-block"
          type="warning"
        >
          <i class="el-icon-download"></i>导出
        </el-button>
      </div>
      <el-table
       :data="tableData" style="width:80%;float:right">
        <el-table-column label="Id" prop="id"></el-table-column>
        <el-table-column label="Name" prop="name"></el-table-column>
        <el-table-column label="Age" prop="age"></el-table-column>
        <el-table-column align="middle" label="Operation" prop="operation">
          <template slot-scope="scope">
            <!-- 修改按钮 -->
            <el-button size="mini" type="success" @click="show(scope)"
              >Edit</el-button
            >
            <!-- 修改对话框 -->
            <el-dialog title="修改数据" :visible.sync="dialogEditVisible">
              <el-form :rules="rules" :model="table" ref="myTable">
                <el-form-item
                  label="Name"
                  prop="name"
                  :label-width="formLabelWidth"
                >
                  <el-input v-model="table.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item
                  label="ID"
                  prop="id"
                  :label-width="formLabelWidth"
                >
                  <el-input v-model="table.id" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item
                  label="Age"
                  prop="age"
                  :label-width="formLabelWidth"
                >
                  <el-input v-model="table.age" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogEditVisible = false">取 消</el-button>
                <el-button type="primary" @click="edit()">确 定</el-button>
              </div>
            </el-dialog>
            <!-- 添加按钮 -->
            <el-button
              size="mini"
              type="warning"
              @click="dialogAddVisible = true"
              >Add</el-button
            >
            <!-- 添加对话框 -->
            <el-dialog title="添加数据" :visible.sync="dialogAddVisible">
              <el-form :model="table" ref="myTable" :rules="rules">
                <el-form-item
                  label="Name"
                  prop="name"
                  :label-width="formLabelWidth"
                >
                  <el-input v-model="table.name"></el-input>
                </el-form-item>
                <el-form-item
                  label="ID"
                  prop="id"
                  :label-width="formLabelWidth"
                >
                  <el-input v-model="table.id"></el-input>
                </el-form-item>
                <el-form-item
                  label="Age"
                  prop="age"
                  :label-width="formLabelWidth"
                >
                  <el-input v-model="table.age"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogAddVisible = false">取 消</el-button>
                <el-button
                  type="primary"
                  @click="
                    add();
                    dialogAddVisible = false;
                  "
                  >确 定</el-button
                >
              </div>
            </el-dialog>
            <!-- 删除按钮 -->
            <el-button
              size="mini"
              type="danger"
              @click="dialogDeleteVisible = true"
              >Delete</el-button
            >
            <!-- 删除提示对话框 -->
            <el-dialog
              title="提示"
              :visible.sync="dialogDeleteVisible"
              width="30%"
            >
              <span>确定删除此条数据吗?</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogDeleteVisible = false">反悔</el-button>
                <el-button
                  type="primary"
                  @click="
                    ifClick();
                    del(scope.$index);
                  "
                  >确 定</el-button
                >
              </span>
            </el-dialog>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页查询 -->
      <el-pagination
        style="float:right"
        @size-change="handleSizeChange"
        @current-change="select"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 25]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100"
      >
      </el-pagination>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputname: "",
      inputphonenomber: "",
      currentPage: 1,
      options: [
        {
          value: "选项1",
          label: "正常",
        },
        {
          value: "选项2",
          label: "停用",
        },
      ],
      value: "",
      data2: [
        {
          label: "NIKE科技",
          children: [
            {
              label: "美国总公司",
              children: [
                {
                  label: "研发部门",
                },
                {
                  label: "市场部门",
                },
                {
                  label: "测试部门",
                },
                {
                  label: "财务部门",
                },
                {
                  label: "运维部门",
                },
              ],
            },
            {
              label: "亚太分公司",
              children: [
                {
                  label: "研发部门",
                },
                {
                  label: "市场部门",
                },
                {
                  label: "测试部门",
                },
                {
                  label: "财务部门",
                },
                {
                  label: "运维部门",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      isClick: false,
      totalpage: 0,
      tableData: [],
      data: [
        {
          id: 2001,
          name: "王小虎",
          age: 23,
        },
        {
          id: 2002,
          name: "王小虎",
          age: 23,
        },
        {
          id: 2003,
          name: "王小虎",
          age: 23,
        },
        {
          id: 2004,
          name: "王小虎",
          age: 23,
        },
        {
          id: 2005,
          name: "王小虎",
          age: 23,
        },
        {
          id: 2006,
          name: "王小虎",
          age: 23,
        },
        {
          id: 2007,
          name: "王小虎",
          age: 23,
        },
        {
          id: 2008,
          name: "王小虎",
          age: 23,
        },
        {
          id: 2009,
          name: "王小虎",
          age: 23,
        },
        {
          id: 2010,
          name: "王小虎",
          age: 23,
        },
        {
          id: 2011,
          name: "王小虎",
          age: 23,
        },
        {
          id: 2012,
          name: "王小虎",
          age: 23,
        },
        {
          id: 2013,
          name: "王小虎",
          age: 23,
        },
        {
          id: 2014,
          name: "王小虎",
          age: 23,
        },
        {
          id: 2015,
          name: "王小虎",
          age: 23,
        },
        {
          id: 2016,
          name: "王小虎",
          age: 23,
        },
        {
          id: 2017,
          name: "王小虎",
          age: 23,
        },
        {
          id: 2018,
          name: "王小虎",
          age: 23,
        },
        {
          id: 2019,
          name: "王小虎",
          age: 23,
        },
        {
          id: 2020,
          name: "王小虎",
          age: 23,
        },
      ],
      search: "",
      dialogAddVisible: false,
      dialogEditVisible: false,
      dialogSearchVisible: false,
      dialogDeleteVisible: false,
      table: {},
      table2: {},
      index: "",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "60px",
      // rules集合
      rules: {
        // 限制id的字符数量
        id: [
          { required: true, message: "请输入id", trigger: "blur" },
          { min: 1, max: 5, message: "长度在 1 到 5 个字符", trigger: "blur" },
        ],
        name: [
          { required: true, message: "请输入名字", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        // 限制地址的字符数
        age: [
          { required: true, message: "请输入年龄", trigger: "blur" },
          {
            min: 1,
            max: 3,
            message: "长度在 1 到 3 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    this.select(1); //请求第一页数据
    this.totalpage = Math.ceil(this.data.length / 5); //计算总页数
  },
  computed:{
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
        }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleNodeClick(data) {
      console.log(data);
    },
    //分页查询
    select(currentPage) {
      //计算起始索引
      let start = (currentPage - 1) * 5;
      //筛选数据
      this.tableData = this.data.slice(start, start + 5);
    },
    show(scope) {
      this.dialogEditVisible = true;
      this.table = Object.assign({}, scope.row);
      this.index = scope.$index;
    },
    add() {
      this.dialogAddVisible = true;
      // this.tableData.push(this.table);
      this.$refs.myTable.validate((valid) => {
        if (valid) {
          this.tableData.push(this.table);
        } else {
          this.dialogAddVisible = true;
        }
      });
    },
    edit() {
      this.tableData[this.index].id = this.table.id;
      this.tableData[this.index].name = this.table.name;
      this.tableData[this.index].age = this.table.age;
      this.dialogEditVisible = false;
    },
    del(i) {
      this.dialogDeleteVisible = true;
      if (this.isClick == true) {
        this.dialogDeleteVisible = false;
        this.tableData.splice(i, 1);
      }
    },
    ifClick() {
      this.isClick = true;
    },
    LookUp() {
      if (this.search == (this.data.id || this.data.name || this.data.age)) {
        this.dialogSearchVisible = false;
        this.tableData.push(this.table2);
      }
    },
  },
}
</script>
<style scope>
.el-pagination {
  margin-top: 20px;
}
.el-button {
  min-width: 20px;
}
.el-dialog {
  width: 400px;
  padding: 10px 10px;
}
.el-dialog__header {
  text-align: left;
}
.el-dialog__body {
  text-align: center;
}
.cell {
  text-align: center;
}
.el-button {
  margin: 5px 5px;
}
</style>
