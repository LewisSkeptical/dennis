<template>
  <div id="index">
    <div id="indexinfo" 
      style="
      z-index: 9;
      background:white;
      width:100px;
      height:145px;
      text-align:center;
      color:black;
      position:fixed;
      top:250px;
      left:870px;"
      v-show="info">
        <ul style="list-style:none;">
            <a style="color:black;" href="#a"><li style="padding:8px">发展历程</li></a>
            <a style="color:black;" href="#s"><li style="padding:8px">品牌标志</li></a>
            <a style="color:black;" href="#s"><li style="padding:8px">品牌故事</li></a>
            <a style="color:black;" href="#d"><li style="padding:8px">代言球星</li></a>
        </ul>
    </div>
    <div id="indexbusiness" 
      style="
      z-index: 9;
      background:white;
      width:100px;
      height:145px;
      text-align:center;
      color:black;
      position:fixed;
      top:250px;
      left:920px;"
      v-show="business">
        <ul style="list-style:none;">
            <a style="color:black;" href="#a"><li style="padding:8px">亚太业务</li></a>
            <a style="color:black;" href="#s"><li style="padding:8px">欧洲业务</li></a>
            <a style="color:black;" href="#s"><li style="padding:8px">美股业务</li></a>
            <a style="color:black;" href="#d"><li style="padding:8px">业务分类</li></a>
        </ul>
    </div>
    <a href="#top" id="backtop"
      ><div id="backtotop">
        <img width="40px" height="40px" src="../assets/up.png" alt="" /></div
    ></a>
    <div class="header">
      <div id="register">
        <a name="top" href="http://localhost:8080/login" target="_self">
          <span>
            <strong>登录</strong>
          </span>
        </a>
        <a href="http://localhost:8080/login" target="_self">
          <span>
            <strong>注册</strong>
          </span>
        </a>
      </div>
      <ul>
        <a href="#22">
          <img src="../assets/WhiteNike.png" alt="WhiteNikeLogo" />
        </a>
        <a href="#33">
          <li>
            <strong @mouseenter="showinfo()">简介</strong>
          </li>
        </a>
        <a href="#44">
          <li>
            <strong @mouseenter="showbusiness()">业务</strong>
          </li>
        </a>
        <a href="#55">
          <li>
            <strong @mouseenter="showinfo()">员工</strong>
          </li>
        </a>
        <a href="#66">
          <li>
            <strong @mouseenter="showinfo()">企业</strong>
          </li>
        </a>
        <a href="#77">
          <li>
            <strong @mouseenter="showinfo()">投资</strong>
          </li>
        </a>
        <a href="#88">
          <li>
            <strong @mouseenter="showinfo()">媒体</strong>
          </li>
        </a>
        <a href="#99">
          <li>
            <strong @mouseenter="showinfo()">语言</strong>
          </li>
        </a>
      </ul>
      <div id="slogan">
        <a href="#12">
          <p>
            <strong>
              <i>Just Do It.</i>
            </strong>
          </p>
        </a>
      </div>
      <video @mouseleave="hideinfo();hidebusiness()" width="100%" autoplay="autoplay" loop muted>
        <source src="../assets/Zombie.mp4" type="video/mp4" />
      </video>
    </div>
    <hr class="hrfirst" />
    <div id="middletext">
      <div class="classification">
        <a href="#13"><span @click="hovershoes()" id="shoes">体育必选</span></a>
        <a href="#14"><span>潮流必选</span></a>
        <a href="#15"><span>个性必选</span></a>
      </div>
    </div>
    <hr class="hrfirst" />
    <div class="middlepic banner">
      <div class="item" @mouseenter="enter()" @mouseleave="leave()">
        <img :src="dataList[currentIndex]" alt="Nikepic01" />
        <div class="page" v-if="this.dataList.length > 1">
          <ul>
            <li @click="gotoPage(prevIndex)">&lt;</li>
            <li
              :key="item"
              v-for="(item, index) in dataList"
              @click="gotoPage(index)"
              :class="{ current: currentIndex == index }"
            >
              {{ index + 1 }}
            </li>
            <li @click="gotoPage(nextIndex)">&gt;</li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="hrfirst" />
    <div id="middletext">
      <div class="classification">
        <a href="#13"><span @click="hovershoes()" id="shoes">鞋类</span></a>
        <a href="#14"><span>服装</span></a>
        <a href="#15"><span>裤类</span></a>
        <a href="#16"><span>帽类</span></a>
      </div>
    </div>
    <hr class="hrfirst" />
    <div class="middlepic">
      <div>
        <a href="#17"><img src="../assets/nike-.jpg" alt="Nikepic01"/></a>
      </div>
      <div>
        <a href="#18"><img src="../assets/nike- (1).jpg" alt="Nikepic02"/></a>
      </div>
      <div>
        <a href="#19"><img src="../assets/nike- (2).jpg" alt="Nikepic03"/></a>
      </div>
    </div>
    <hr class="hrfirst" />

    <div id="middletext">
      <div class="classification">
        <a href="#11"><span>引领潮流</span></a>
      </div>
    </div>
    <hr class="hrfirst" />
    <div class="middlepic">
      <div>
        <a href="#21"><img src="../assets/nike- (3).jpg" alt="Nikepic01"/></a>
      </div>
    </div>
    <hr class="hrfirst" />

    <div id="middletext">
      <div class="classification">
        <a href="#22"><span>男装</span></a>
        <a href="#23"><span>女装</span></a>
        <a href="#24"><span>男鞋</span></a>
        <a href="#25"><span>女鞋</span></a>
        <a href="#26"><span>童鞋</span></a>
      </div>
    </div>
    <hr class="hrfirst" />
    <div class="middlepic">
      <div>
        <a href="#27"><img src="../assets/woman.jpg" alt="Nikepic01"/></a>
      </div>
      <div>
        <a href="#28"><img src="../assets/woman01.jpg" alt="Nikepic02"/></a>
      </div>
      <div>
        <a href="#29"><img src="../assets/woman02.jpg" alt="Nikepic03"/></a>
      </div>
      <div>
        <a href="#30"><img src="../assets/woman03.jpg" alt="Nikepic03"/></a>
      </div>
    </div>
    <hr class="hrfirst" />
    <div id="middletext">
      <div class="classification">
        <a href="#22"><span><i>Just Do It!</i></span></a>
      </div>
    </div>
    <hr class="hrfirst" />
    <div id="footer">
      <div id="footer-link">
        <ul>
          <a href="#31">
            <li>电子礼品卡</li>
          </a>
          <a href="#32">
            <li>企业团购</li>
          </a>
          <a href="#33">
            <li>附近商店</li>
          </a>
          <a href="#34">
            <li>订阅电子邮件</li>
          </a>
          <a href="#35">
            <li>注册NIKE会员</li>
          </a>
          <a href="#36">
            <li>向我们发送反馈</li>
          </a>
        </ul>
        <ul>
          <a href="#37">
            <li>获得帮助</li>
          </a>
          <a href="#38">
            <li class="smallli">订单状态</li>
          </a>
          <a href="#39">
            <li class="smallli">配送方式</li>
          </a>
          <a href="#40">
            <li class="smallli">退换货</li>
          </a>
          <a href="#41">
            <li class="smallli">付款选项</li>
          </a>
          <a href="#42">
            <li class="smallli">联系我们</li>
          </a>
        </ul>
        <ul id="aboutul">
          <a href="#43">
            <li>关于NIKE</li>
          </a>
          <a href="#44">
            <li class="smallli">新闻</li>
          </a>
          <a href="#45">
            <li class="smallli">投资者</li>
          </a>
          <a href="#46">
            <li class="smallli">招贤纳士</li>
          </a>
          <a href="#47">
            <li class="smallli">新品预览</li>
          </a>
          <a href="#48">
            <li class="smallli">新品预览</li>
          </a>
        </ul>
      </div>
      <hr />
      <div id="bottom">
        <span class="glyphicon glyphicon-map-marker"></span>
        <span id="chinali">中国大陆</span>
        <span class="xsmallli reserveright"
          >&copy;2020 Nike, Inc. 保留所有权利</span
        >
        <span class="xsmallli distanceli">分类浏览</span>
        <span class="xsmallli distanceli">使用条款</span>
        <span class="xsmallli distanceli">销售条款</span>
        <span class="xsmallli distanceli">隐私政策</span>
        <span class="xsmallli distanceli">沪ICP备14009339号</span>
        <span class="xsmallli distanceli">上海工商</span>
        <span class="xsmallli distanceli">沪公网安备31011002000177号</span>
      </div>
    </div>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      business:false,
      info:false,
      dataList: [
        "https://static.nike.com/a/images/f_auto/dpr_1.0/w_1792,c_limit/079e7113-936c-45b4-895d-36f13cae2c1f/nike-.jpg",
        "https://static.nike.com/a/images/f_auto/dpr_1.0/w_1792,c_limit/8df4ddf1-77e6-4e87-ba82-c7fd8c892a85/nike-.jpg",
        "https://static.nike.com/a/images/f_auto/dpr_1.0/w_1229,c_limit/0ce125d4-cae8-4e70-9b55-9a20d92ec0ca/nike-.jpg",
      ],
      currentIndex: 0, //默认显示图片
      timer: null, //定时器
    };
  },
  computed: {
    //上一张
    prevIndex() {
      if (this.currentIndex == 0) {
        return this.dataList.length - 1;
      } else {
        return this.currentIndex - 1;
      }
    },
    //下一张
    nextIndex() {
      if (this.currentIndex == this.dataList.length - 1) {
        return 0;
      } else {
        return this.currentIndex + 1;
      }
    },
  },
  mounted:function(){
    this.runInv()
  },
  methods: {
    hideinfo(){
      this.info = false
    },
    showinfo(){
      this.info = true
    },
    hidebusiness(){
      this.business = false
    },
    showbusiness(){
      this.business = true
    },
    gotoPage(index) {
      this.currentIndex = index;
    },
    //定时器
    runInv:function() {
      this.timer = setInterval(() => {
        this.gotoPage(this.nextIndex);
      }, 1000);
    },
    enter(){
      clearInterval(this.timer)
    },
    leave(){
      this.runInv()
    }
  },
};
</script>
<style scoped>
.middlepic:hover{
  cursor:pointer
}
* {
  margin: 0;
  padding: 0;
}
.item{
  width:1800px;
}
.page ul li {
  list-style: none;
  float: left;
  width: 30px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}
.banner {
  max-width: 1800px;
  margin: 0 auto;
  position: relative;
}
.banner img {
  width: 1800px;
  display: block;
}
.banner .page {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 5px;
  width: 100%;
}
.banner .page ul {
  float: right;
}
.current {
  color: #ff6700;
}

#backtop {
  width: 40px;
  height: 40px;
}
#backtotop {
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 80px;
  right: 20px;
  background-color: white;
}
.middlepic {
  margin: 0 auto;
  width: 1900px;
  text-align: center;
}
.middlepic > div {
  display: inline-block;
  margin: 0 5px;
  border: 1px solid grey;
}
.hrfirst {
  margin: 50px auto;
}
.classification {
  margin: 50px auto;
  width: 350px;
  color: black;
  text-align: center;
}
.classification > a > span {
  margin: 0 15px;
}
.classification > a {
  text-decoration: none;
  color: black;
}
a {
  text-decoration: none;
}
#footer-link a {
  color: white;
}
hr {
  color: grey;
  width: 1400px;
  margin: 0 auto;
}
#bottom {
  text-align: center;
  width: 1400px;
  margin: 20px auto;
}
.reserveright {
  margin-right: 200px;
}
.distanceli {
  margin: 0 10px;
}
#chinali {
  font-size: 12px;
  color: white;
}
.xsmallli {
  font-size: 10px;
  color: grey;
}
.smallli {
  font-size: 12px;
  color: grey;
}
#footer-link {
  width: 900px;
  margin: 0 auto;
  line-height: 25px;
}
#footer-link ul {
  display: inline-block;
  list-style: none;
  margin: 30px 90px;
}
#footer {
  background-color: #111111;
  color: white;
}
#slogan {
  position: absolute;
  top: 865px;
  z-index: 9;
  text-align: center;
  list-style: none;
  width: 100%;
}
#slogan p {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 50px;
  color: white;
}
.header ul a {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 20px;
  color: white;
  display: inline-block;
  padding: 10px;
}
.header ul {
  position: absolute;
  top: 165px;
  width: 100%;
  text-align: center;
  list-style: none;
  z-index: 9;
}
.header ul > a > img {
  width: 120px;
  height: 100px;
}
.header video {
  margin-top: 65px;
  z-index: 0;
  height: 1000px;
  object-fit: fill;
}
#index {
  position: relative;
  letter-spacing: 5px;
  width: 100%;
}
#register {
  position: absolute;
  float: right;
  right: 20px;
  top: 85px;
  z-index: 9;
}
#register a {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 20px;
  color: white;
  padding: 20px;
}
#register a span {
  opacity: 25%;
}
</style>
