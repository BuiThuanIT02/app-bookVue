<template>
  <!--Background-->

  <!-- End Background-->
  <!--Section Home-->
  <section class="home">
    <!--Content-->
    <div class="content">
      <a href="#" class="logo"><i class="fa-solid fa-paper-plane"></i>Doan</a>
      <h2>Welcome</h2>
      <h3>To Our New Website</h3>
      <pre>
Loren ipsim , dollor sit amen consenter
    adipisicing elit.Beaatea, asperriores
        </pre
      >
      <div class="icon">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-github"></i>
      </div>
    </div>
    <!--End Content-->
    <div class="login">
      <h2>Login</h2>
      <div class="input">
        <input type="text" class="input1" placeholder="Email" required />
        <!-- <i class="fa-regular fa-envelope"></i> -->
      </div>
      <div class="input">
        <input type="password" class="input1" placeholder="Password" required />
        <!-- <i class="fa-solid fa-lock"></i> -->
      </div>
      <div class="check">
        <label><input type="checkbox" />Remember me</label>
        <a href="#">Forgot Password</a>
      </div>
      <div class="button">
        <button class="btn">Login</button>
      </div>
      <div class="sign-up">
        <p>Don't have an account?</p>
        <a href="#">Sign up</a>
      </div>
    </div>
  </section>
  <!--End Section Home-->
  <Teleport to="body"> <div class="background"></div></Teleport>
</template>

<script>
export default {
  name: "LoginApp",
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Times New Roman", Times, serif;
}
/*
.header{
    position: fixed;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 100px;
    z-index: 99;
    background: transparent;
}

.header .nav a{
    text-decoration: none;
    color:#fff;
    font-size: 20px;
    margin-left: 20px;
    font-weight: 600;
}

.nav a:hover{
    border-bottom: 4px solid #fff;
    transition: .5s;
}

.search i{
    color:#fff;
    font-size: 1.5em;
    margin-left:20px;
}
*/

body {
  border: 1px solid red;
  height: 100vh;
}
.background {
  width: 100vw;
  height: 100vh; /*vh : chiều cao bằng 100% cửa sổ trình duyệt không phụ thuộc vào phản tử cha*/
  background-image: url("../assets/Images/vutru.png");
  background-position: center;
  background-size: cover;
  filter: blur(5px);
}
.home {
  position: absolute;
  top: 50%; /*mép trên của nó dính đúng đg nằm giữa nên nhìn nó bị lệch xg*/
  left: 50%; /*mép trái của nó dính đúng đg nằm dọc nên nhìn nó bị lệch trái*/
  width: 75%;
  height: 75%;
  transform: translate(
    -50%,
    -50%
  ); /*tịnh tiến đúng nửa của chính home này ngang và dọc*/
  background-image: url("../assets/Images/vutru.png");
  background-position: center;
  background-size: cover;
  display: flex;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 10px;
  border: none;
  box-shadow: 5px 10px 10px 0;
}

.content {
  display: flex;
  flex-direction: column;
  width: 700px;
  padding: 100px 0;
}

.content a {
  position: relative;
  text-decoration: none;
  color: #fff;
  font-size: 4em;
  font-weight: 700px;
  top: -40px;
  left: 80px;
}

.content h2 {
  font-size: 3.5em;
  text-align: center;
  color: #fff;
  letter-spacing: 10px;
}
.content h3 {
  font-size: 2em;
  text-align: center;
  color: #fff;
}
.content pre {
  margin-top: 20px;
  text-align: center;
  font-size: 1em;
  color: #fff;
}

.content .icon {
  margin-top: 20px;
  font-size: 1.5em;
  display: flex;
  justify-content: center;
}

.content .icon i {
  margin-left: 20px;
  color: #fff;
}

.login {
  width: 450px;
  position: relative;
  padding: 100px 30px;
  backdrop-filter: blur(10px);
}
.login h2 {
  color: #fff;
  text-align: center;
}

.login .input {
  position: relative;
  width: 100%;
  height: 30px;
  margin-bottom: 40px;
}

.login .input .input1 {
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 2px solid #fff;
  color: #fff;
  width: 100%;
  height: 100%;
}

::placeholder {
  color: #fff;
  font-size: 18px;
}

/* .login .input i{
    position: relative;
    right: -350px;
    bottom: 27px;
    color:#fff;
} */

.check {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  color: #fff;
}

.check a {
  text-decoration: none;
  color: #fff;
}

/* .check a:hover {
} */

.login .button {
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
}

button {
  width: 100%;
  height: 40px;
  background-color: rgb(66, 44, 48);
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 700;
  border-radius: 7px;
  color: #fff;
}

button:active {
  font-size: 25px;
}
.login .sign-up {
  display: flex;
  justify-content: center;
}

.login .sign-up a {
  text-decoration: none;
  color: #fff;
  font-weight: 700;
}

.login .sign-up p {
  color: #fff;
}

.sign-up a:hover {
  text-decoration: underline;
}
</style>
