<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>个人信息</span>
          </div>
          <div class="userimage">
            <img
              id="userimage"
              style="cursor:pointer"
              src="../assets/nikelogo.png"
              alt="头像"
            />
            <el-button style="float: right; padding: 3px 0" type="text"
              >操作按钮</el-button
            >
          </div>
          <hr />
          <ul>
            <li v-for="i in information" :key="i" style="list-style: none;">
              <div style="margin:10px 0">
                <i
                  v-for="(item, index) in menuIcon"
                  :key="index"
                  v-bind:class="menuIcon[index]"
                ></i>
                {{ i.info }}
                <div id="pullright" style="float:right;padding: 3px 0">
                  {{ i.inforight }}
                </div>
              </div>
              <hr />
            </li>
          </ul>
        </el-card>
      </el-col>

      <el-col :span="18">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>基本资料</span>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{ "列表内容 " + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style>
.userimage {
  text-align: center;
}
#userimage {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: brown;
  margin: 0 auto;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
  height: 500px;
}
</style>
<script>
export default {
  data() {
    return {
      information: [
        { info: "用户名称", inforight: "admin" },
        { info: "手机号码", inforight: "15736457692" },
        { info: "用户邮箱", inforight: "admin@nike.com" },
        { info: "所属部门", inforight: "总部" },
        { info: "所属角色", inforight: "超级管理员" },
        { info: "创建日期", inforight: "2020/10/16" },
      ],
      menuIcon: [
        "el-icon-user-solid",
        "el-icon-phone",
        "el-icon-message",
        "el-icon-office-building",
        "el-icon-key",
        "el-icon-date",
      ],
    }
  },
  methods:{
      controlloop(){

      }
  }
};
</script>
