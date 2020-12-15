<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <img src="../assets/nikelogo.png" height="32" />
        <span v-show="logotext"><i>NIKE</i></span>
      </div>
      <a-menu
        v-on:click="show"
        theme="dark"
        mode="inline"
        :default-selected-keys="['/home']"
      >
        <a-menu-item key="/home/chart">
          <router-link to="/home/chart">
            <a-icon type="home" />
            <span>首页</span>
          </router-link>
        </a-menu-item>
        <a-sub-menu key="sub1" @titleClick="titleClick">
          <span slot="title">
            <a-icon type="setting" />
            <span>系统管理</span>
          </span>
          <a-menu-item key="/home/user">
            <router-link to="/home/user">
              <a-icon type="user" />
              <span>用户管理</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="/home/role">
            <router-link to="/home/role">
              <a-icon type="usergroup-delete" />
              <span>角色管理</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="/home/menu">
            <router-link to="/home/menu">
              <a-icon type="appstore" />
              <span>菜单管理</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="/home/apartment">
            <router-link to="/home/apartment">
              <a-icon type="apartment" />
              <span>部门管理</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="/home/position">
            <router-link to="/home/position">
              <a-icon type="cluster" />
              <span>岗位管理</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="/home/alpha">
            <router-link to="/home/alpha">
              <a-icon type="read" />
              <span>字典管理</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="/home/parameter">
            <router-link to="/home/parameter">
              <a-icon type="profile" />
              <span>参数设置</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="/home/info">
            <router-link to="/home/info">
              <a-icon type="message" />
              <span>通知公告</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="/home/diary">
            <router-link to="/home/diary">
              <a-icon type="form" />
              <span>日志管理</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="/home/system" @titleClick="titleClick">
          <span slot="title"
            ><a-icon type="dashboard" />
            <span>系统监控</span>
          </span>
          <a-menu-item key="/home/onlineuser">
            <router-link to="/home/onlineuser">
              <a-icon type="team" />
              <span>在线用户</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="/home/scheduletask">
            <router-link to="/home/scheduletask">
              <a-icon type="history" />
              <span>定时任务</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="/home/dataspy">
            <router-link to="/home/dataspy">
              <a-icon type="pie-chart" />
              <span>数据监控</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="/home/servicespy">
            <router-link to="/home/servicespy">
              <a-icon type="fund" />
              <span>服务监控</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="/home/systemtool" @titleClick="titleClick">
          <span slot="title"
            ><a-icon type="tool" />
            <span>系统工具</span>
          </span>
          <a-menu-item key="/home/formcreate">
            <router-link to="/home/formcreate">
              <a-icon type="diff" />
              <span>表单构建</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="/home/codecreate">
            <router-link to="/home/codecreate">
              <a-icon type="deployment-unit" />
              <span>代码生成</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="/home/systeminterface">
            <router-link to="/home/systeminterface">
              <a-icon type="api" />
              <span>系统接口</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="/home/officialwebsite">
          <router-link to="/home/officialwebsite">
            <a-icon type="thunderbolt" />
            <span>官网</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          style="display:inline-block"
          class="trigger foldicon"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => ((collapsed = !collapsed), (logotext = !logotext))"
        />
        <div class="navbar trigger">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
              v-for="item in levelList"
              :key="item.path"
              :to="item.path"
            >
              {{ item.meta.title }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="rightheader">
          <!-- 隐藏的搜索框 -->
          <el-autocomplete
            id="headerinput"
            class="headerinput"
            style="width:350px;margin: 0 30px;line-height:64px"
            v-show="searchframe"
            v-model="input"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入内容"
            @select="handleSelect"
          ></el-autocomplete>

          <a href="#" @click="showsearchframe">
            <a-tooltip placement="bottom">
              <template slot="title">
                搜索
              </template>
              <a-icon type="search" style="font-size:22px;color:grey" />
            </a-tooltip>
          </a>
          <a href="#">
            <a-tooltip placement="bottom">
              <template slot="title">
                源码地址
              </template>
              <a-icon type="github" style="font-size:22px;color:grey" />
            </a-tooltip>
          </a>
          <a href="#">
            <a-tooltip placement="bottom">
              <template slot="title">
                文档地址
              </template>
              <a-icon
                type="question-circle"
                style="font-size:22px;color:grey"
              />
            </a-tooltip>
          </a>
          <a href="#">
            <a-tooltip placement="bottom">
              <template slot="title">
                全屏
              </template>
              <a-icon type="fullscreen" @click="screen" style="font-size:22px;color:grey" />
            </a-tooltip>
          </a>
          <a href="#">
            <a-tooltip placement="bottom">
              <template slot="title">
                布局大小
              </template>
              <a-icon type="font-size" style="font-size:22px;color:grey" />
            </a-tooltip>
          </a>
          <a href="#">
            <a-tooltip placement="bottom">
              <template slot="title">
                设置
              </template>
              <img src="../assets/nikelogo.png" height="32" alt="" />
            </a-tooltip>
          </a>
          <a-dropdown placement="bottomLeft">
            <a
              href="#"
              class="ant-dropdown-link"
              @click="(e) => e.preventDefault()"
            >
              <a-icon
                type="caret-down"
                style="font-size:10px;color:grey"
              ></a-icon>
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <router-link to="/home/personalcenter">
                <a href="#">个人中心</a>
                </router-link>
              </a-menu-item>
              <a-menu-item>
                <router-link to="/home/settings">
                <a href="#">布局设置</a>
                </router-link>
              </a-menu-item>
              <a-menu-item>
                <router-link to="/login">
                <a href="#">退出登录</a>
                </router-link>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
        <div class="mytags">
          <el-tag
            @click="jump(tag)"
            :type="tag.type"
            effect="dark"
            @close="closetag(tag)"
            v-for="tag in tags"
            :key="tag.name"
            size="small"
            :closable="tag.closeable"
          >
            {{ tag.name }}
          </el-tag>
        </div>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style>
.foldicon {
  position: relative;
}
.navbar {
  position: absolute;
  top: 0px;
}
.el-breadcrumb,
.breadcrumb-container {
  height: 40px !important;
  display: inline-block;
  margin-top: 20px;
}
.navbar,
.trigger {
  display: inline-block;
  margin: 0px 30px 5px 15px !important;
  padding: 0px !important;
  height: 40px;
}
.el-input__inner {
  height: 30px;
}
.router-link-active {
  text-decoration: none !important;
}
.el-card__body {
  position: relative;
}
.cardtext {
  position: absolute;
  right: 15px;
  top: 20px;
  font-size: 18px;
  color: grey;
  cursor: pointer;
}
.rightheader > a {
  line-height: 64px;
  margin: auto 0;
  padding: 0 5px;
}
.a-layout-header {
  position: relative;
}
.rightheader {
  position: absolute;
  top: 5px;
  right: 55px;
  height: 64px;
}
.ant-menu-dark {
  background: #304156 !important;
}
.ant-layout-sider-children {
  background: #304156;
}
.el-card__body {
  height: 80px;
}
.ant-layout,
#app {
  height: 100%;
}
.logo {
  background: #304156 !important;
  text-align: center;
  color: white;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.mytags {
  border: 1px solid #ddd;
  height: 35px;
  line-height: 20px;
  margin-top: -10px;
  padding: 4px;
}
.el-tag {
  cursor: pointer;
  margin-left: 5px;
}
.ant-layout-header {
  height: 88px !important;
}
</style>
<script>
export default {
  fullscreen: false,
  name: "Navbar",
  data() {
    return {
      restaurants: [],
      state: "",
      timeout: null,
      levelList: [],
      input: "",
      searchframe: false,
      loginuser: "",
      collapsed: false,
      flag: true,
      logotext: true,
      tags: [{ name: "首页", index: "/", type: "info", closeable: false }],
    };
  },
  created() {
    this.loginuser = localStorage.getItem("loginuser");
    this.getBreadcrumb();
  },
  mounted() {
    this.restaurants = this.loadAll();
    window.onresize = () => {
      // 全屏下监控是否按键了ESC
      if (!this.checkFull()) {
        // 全屏下按键esc后要执行的动作
        this.isFullscreen = false;
      }
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  methods: {
    titleClick(e) {
      console.log("titleClick", e);
    },
    showsearchframe() {
      this.searchframe = true;
      var divDisp = document.getElementById("headerinput").style.display;
      if (divDisp == "block") {
        document.getElementById("headerinput").style.display = "none";
      } else {
        document.getElementById("headerinput").style.display = "block";
      }
    },
    show(item) {
      let name = item.item.$el.innerText; //获取菜单文本
      let flag = true;
      //循环所有tag，寻找当前点击的菜单是否已经存在
      //item: 数组里面的每一个元素
      this.tags.forEach(function(item) {
        item.type = "info"; //所有都变灰
        if (item.name == name) {
          item.type = ""; //让已存在的这个变蓝
          flag = false;
        }
      });
      if (flag) {
        this.tags.push({
          name: name,
          index: item.key,
          type: "",
          closeable: true,
        }); //添加
      }
    },
    jump(tag) {
      this.tags.forEach(function(item) {
        item.type = "info"; //所有都变灰
      });
      tag.type = "";
      this.$router.push(tag.index);
    },
    closetag(tag) {
      let i = this.tags.indexOf(tag);
      if (this.tags.length == 1) {
        this.$router.push("/");
        this.tags.splice(i, 1);
        return;
      }
      if (i == this.tags.length - 1) {
        this.$router.push(this.tags[i - 1].index);
        this.tags[i - 1].type = ""; //前一个变蓝
      }
      this.tags.splice(i, 1);
    },
    loginout() {
      document.getElementById("logout").onclick = function() {
        window.location = "http://localhost:8080/login";
      };
    },
    getBreadcrumb() {
      let matched = this.$route.matched.filter((item) => item.name);
      const first = matched[0];
      if (
        first &&
        first.name.trim().toLocaleLowerCase() !==
          "Dashboard".toLocaleLowerCase()
      ) {
        matched = [{ path: "/home/chart", meta: { title: "home" } }].concat(
          matched
        );
      }
      this.levelList = matched;
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 1000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    },
    loadAll() {
      return [
        { value: "用户管理", address: "长宁区新渔路144号" },
        {
          value: "角色管理",
          address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101",
        },
        {
          value: "菜单管理",
          address: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F",
        },
        { value: "部门管理", address: "元丰天山花园(东门) 双流路267号" },
      ];
    },
    screen(){
     let element = document.documentElement;
     if (this.fullscreen) {
      if (document.exitFullscreen) {
       document.exitFullscreen();
      } else if (document.webkitCancelFullScreen) {
       document.webkitCancelFullScreen();
      } else if (document.mozCancelFullScreen) {
       document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
       document.msExitFullscreen();
      }
     } else {
      if (element.requestFullscreen) {
       element.requestFullscreen();
      } else if (element.webkitRequestFullScreen) {
       element.webkitRequestFullScreen();
      } else if (element.mozRequestFullScreen) {
       element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
       // IE11
       element.msRequestFullscreen();
      }
     }
     this.fullscreen = !this.fullscreen;
    },
  },
};
</script>
