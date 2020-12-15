<template>
  <div id="login">
    <div class="frame col-md-10">
      <img
        style="width:200px;height:160px;"
        src="../assets/nikelogo.png"
        alt=""
      />
      <div class="from">
        <div class="formcontainer">
          <div class="form-group">
            <label class="loginlabel" for="exampleInputName2">邮箱</label>
            <input
              type="text"
              class="form-control"
              id="email"
              placeholder="Jane Doe@gmail.com"
              v-model="user.email"
            />
          </div>
          <div class="form-group">
            <label class="loginlabel" for="exampleInputEmail2">密码</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="user.password"
            />
          </div>
          <div class="form-group">
            <div class="row invitationrow">
              <input
                type="button"
                class="form-control col-md-1 col-md-offset-2 btn btn-primary"
                id="invitation"
                value="获取验证码"
                @click="sendInvitation()"
              />
              <input
                type="text"
                class="form-control col-md-1 col-md-offset-2"
                id="invitationcode"
                placeholder="输入验证码"
              />
            </div>
          </div>
          <div class="form-group">
            <input
              type="submit"
              class="btn btn-success"
              id="submit"
              value="提交"
              @click="redirecttohome()"
            />
          </div>
          <div class="form-group">
            <input
              type="button"
              class="btn btn-danger"
              id="register"
              value="注册"
              @click="register"
            />
          </div>
        </div>
      </div>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>{{ message }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 注册框 -->
    <el-dialog title="注册" :visible.sync="registdialogVisible" width="30%">

      <!-- 表单验证 -->
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="邮箱" prop="mail">
          <el-input
            type="text"
            v-model="ruleForm.mail"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="年龄" prop="age">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="registdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="registdialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<style>
.frame {
  height: 100%;
  margin: 0 auto;
  position: relative;
}
.loginlabel {
  color: white;
}
#invitation,
#submit,
#register {
  outline-style: none;
}
#app,
#login {
  height: 100%;
}
#login {
  background: url("../assets/bcgnike.jpg") no-repeat;
  background-size: 100% 100%;
}
#submit,
#email,
#password,
.invitationrow {
  width: 350px;
}
#invitationcode {
  width: 100px;
}
#invitation {
  width: 100px;
}
.from {
  position: absolute;
  top: 250px;
  right: 30px;
  width: 400px;
}
.formcontainer {
  width: 352px;
  margin: 0 auto;
}
</style>
<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
     var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else {
        if (this.ruleForm.mail !== "") {
          this.$refs.ruleForm.validateField("mail");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        mail:"",
        pass: "",
        checkPass: "",
        age: "",
      },
      rules: {
        mail: [{ validator: validateEmail, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
      },
      newinvitation: "",
      message: "",
      registdialogVisible: false,
      dialogVisible: false,
      user: {
        email: "",
        password: "",
        invitation: "",
      },
    };
  },
  created() {
    document.onkeydown = (e) => {
      if (window.event === undefined) {
        var key = e.keyCode;
      } else {
        // eslint-disable-next-line no-redeclare
        var key = window.event.keyCode;
      }
      if (key === 13) {
        if (this.dialogVisible) {
          this.dialogVisible = false;
        } else if(this.registdialogVisible){
          this.registdialogVisible = false
        }
        this.redirecttohome();
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    login() {
      localStorage.setItem("loginuser", this.user.email);
      //跳转到首页
      this.$router.push("/home/chart");
    },
    checkemail() {
      var regEmail = /^([a-zA-Z0-9]+[-_\\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
      if (this.user.email == "") {
        this.dialogVisible = true;
        this.message = "请输入邮箱!";
      } else if (!regEmail.test(this.user.email)) {
        this.dialogVisible = true;
        this.message = "您输入的邮箱格式错误,请重新输入!";
      } else if (this.user.email == this.ruleForm.mail) {
        return true;
      }
    },
    checkpassword() {
      if (this.user.password == this.ruleForm.pass) {
        return true;
      } else if (this.user.password == "") {
        this.dialogVisible = true;
        this.message = "请输入密码!";
      } else {
        this.dialogVisible = true;
        this.message = "您输入的密码错误,请重新输入!";
      }
    },
    redirecttohome() {
      if (
        this.checkemail() == true &&
        this.checkpassword() == true &&
        this.checkinvitation() == true &&
        document.getElementById("invitationcode").value != ""
      ) {
        this.login();
      }else if(!this.checkemail()){
        this.checkemail()
      }else if(!this.checkpassword()){
        this.checkpassword()
      }else{
        this.dialogVisible = true;
        this.message = "您输入的验证码不能为空,请重新输入!";
      }
    },
    register() {
      // this.dialogVisible = true
      this.registdialogVisible = true;
      //   this.message="恭喜您注册成功,初始账号为nikeuser001@nike.com\n密码为123456\n"
    },
    sendInvitation() {
      var random = Math.floor(Math.random() * 999999);
      this.dialogVisible = true;
      this.message = "您的随机验证码为:" + random;
      this.user.invitation = random;
      this.newinvitation = random;
      return true;
    },
    checkinvitation() {
      if (this.user.invitation == this.newinvitation) {
        return true;
      } else if (this.user.invitation == "") {
        this.dialogVisible = true;
        this.message = "请输入验证码!";
      } else {
        this.dialogVisible = true;
        this.message = "您输入的验证码错误,请重新输入!";
      }
    },
  },
};
</script>
