<template>
  <div class="container">
    <div class="login">
      <div id="register-active" class="switch">
        <i class="fa fa-toggle-on"></i>
        <a href="">现在注册</a>
      </div>
      <h3>
        登录
        <p class="status"></p>
      </h3>
      <p>
        <label for="uname">
          <i></i>
        </label>
        <input type="text" class="input-control" id="uname" placeholder="请输入用户名" name="uname" >
      </p>
      <p>
        <label for="password">
          <i></i>
        </label>
        <input type="password" class="input-control" id="password" placeholder="请输入密码" name="password">
      </p>
      <a class="close">
        <i></i>
      </a>
      <p class=safe>
        <label for="" class="remembermetext">
          <input type="checkbox" name="remembenme" checked="checked" id="rememberme" class="rememberme" value="forver">
          记住我的登录
        </label>
        <a href="" class="lost">忘记密码？</a>
        <input type="hidden" id="security" name="security" value="">
        <input type="hidden" name="" value="/">
      </p>
      <button>登录</button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>
<style lang="less" scoped>
  .container{
    width: 300px;
    height: 329px;
    padding: 50px 50px 40px;
    background-color: #fff;
    border: 1px solid #ccc;
    .login{
      width: 300px;
      height: 319px;
      display: flex;
      flex-direction: column;
    }
  }
</style>