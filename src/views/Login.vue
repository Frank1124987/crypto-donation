<template>
  <div class="container-login100" :style="{'background-image': 'url(' + require('../assets/bg-01.jpg') + ')'}">

    <div class="login wrap-login100 p-l-55 p-r-55 p-t-65 p-b-45">
        
        <span class="login100-form-title p-b-30">用戶登錄</span>
        <form @submit.prevent="login" >
            <!-- TODO: 20220225 -->
            <!-- //!TODO: 表單輸入限制 -->
            <!-- //!TODO: 忘記密碼流程? -->
            <!-- //!TODO: 登入按鈕? -->
            <div class="wrap-input100 validate-input m-b-23">
                <!-- <span class="label-input100">Username</span> -->
                <label class="label-input100" for="address">地址:</label>
                <input class="input100" type="text"  id="address" v-model="address" name="address" placeholder="請輸入您的部門地址">
				<span class="focus-input100" data-symbol="&#xf173;"></span>
            </div>
            <div class="wrap-input100 validate-input m-b-23">
                <!-- <span class="label-input100">Username</span> -->
                <label class="label-input100" for="email">帳號:</label>
                <input class="input100" type="text"  id="email" v-model="email" name="email" placeholder="請輸入您的Email">
				<span class="focus-input100" data-symbol="&#xf106;"></span>
            </div>
            <div class="wrap-input100 validate-input ">
                <!-- <span class="label-input100">Username</span> -->
                <label class="label-input100" for="password">密碼:</label>
                <input class="input100" type="text"  id="password" v-model="password" name="password" placeholder="請輸入您的密碼">
				<span class="focus-input100" data-symbol="&#xf190;"></span>
            </div>
            <div id="forgetPassword" class="text-right p-t-8 p-b-31">
						<a href="#">
							忘記密碼?
						</a>
            </div>
            
            <div class="container-login100-form-btn">
                <div class="wrap-login100-form-btn">
                    <div class="login100-form-bgbtn">

                    </div>
                        <button  class="btn login100-form-btn" >
                            登入
                        </button>
                    <!-- <input type="submit" value="Submit"> -->
                    <!-- //!TODO:  把BUTTON的連結加上去 -->
                </div>
            </div>

            <div class="txt1 text-center p-t-54 p-b-20">
                    <span>
                        尚未註冊? 直接加入!
                    </span>
            </div>

            <!-- <div class="text-center p-t-8 p-b-31 ">
                <button type="button" class="login100-form-smbtn" name="Login" value="Submit">
                </button>
            </div> -->

            <div class="container-login100-form-btn">
                <div class="wrap-login50-form-btn">
                    <div class="login100-form-smbtn"></div>
                    <!-- <input type="submit" value="Submit"> -->
                    <!-- //!TODO:  把BUTTON的連結加上去 -->
                    <button  class="login100-form-btn" >
                        <router-link id='routeLink' to="Register">註冊</router-link>
                    </button>
                </div>
            </div>
        </form>
    </div>
 </div>
</template>


<script>
import {ref} from 'vue'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useRouter} from 'vue-router'

export default{
    name: 'Login',
    setup(){
        const email = ref("")
        const password = ref("")
        
        const router = useRouter()

        const login = () => {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    
                    router.push('/')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        }


        return {
            email,
            password,
            login
        }
    }
}
</script>

<style scoped >
.container-login100 {
    width: 100%;
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
form > input {
    margin: 1%;
}

.login {
    text-align: center;
}

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}


.register {
    text-align: center;
}
.wrap-login100 {
    width: 500px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
}
.p-r-55 {
    padding-right: 55px;
}
.p-l-55 {
    padding-left: 55px;
}
.p-b-54 {
    padding-bottom: 54px;
}
.p-b-45 {
    padding-bottom: 45px;
}
.p-b-30 {
    padding-bottom: 30px;
}
.p-t-65 {
    padding-top: 65px;
}


.login100-form-title {
    display: block;
    font-family: 'Poppins', sans-serif;
    font-size: 33px;
    font-weight: 700;
    color: #333333;
    line-height: 1.2;
    text-align: center;
}
.validate-input {
    position: relative;
}
.wrap-input100 {
    width: 100%;
    position: relative;
    border-bottom: 2px solid #d9d9d9;
}
.m-b-23 {
    margin-bottom: 23px;
}
.label-input100 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    line-height: 2;
    text-align: left;
    display: block;
}
.input100 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 16px;
    /* color: #333333; */
    line-height: 1.2;
    display: block;
    width: 100%;
    height: 55px;
    /* background: transparent; */
    padding: 0 7px 0 43px;
    margin: 0;
    border:0;
    /* border-width: 0 0 2px 0; */
    

}
.focus-input100 {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    margin: 0;
    /* border-width: 0 0 2px 0; */
}
.focus-input100::after {
    border: 0;
    content: attr(data-symbol);
    font-family: Material-Design-Iconic-Font;
    color: #1241ff;
    font-size: 22px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    /* height: calc(100% ); */
    bottom: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    padding-left: 12px;
    padding-bottom: 15px;
    /* padding-top: 3px; */
}


.p-b-31 {
    padding-bottom: 15px;
}
.p-t-8 {
    padding-top: 8px;
}
.text-right {
    text-align: right!important;
}
#routeLink {
    font-size: 20px;
    /* background-color: wheat; */
    cursor: pointer;
}
#forgetPassword {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.7;
    color: #666666;
    margin: 0px;
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
}

.container-login100-form-btn {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.wrap-login100-form-btn {
    width: 100%;
    display: block;
    position: relative;
    z-index: 1;
    border-radius: 25px;
    overflow: hidden;
    margin: 0 auto;
    box-shadow: 0 5px 30px 0px rgb(3 216 222 / 20%);
    -moz-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
    -webkit-box-shadow: 0 5px 30px 0px rgb(3 216 222 / 20%);
    -o-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
    -ms-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
}
.wrap-login50-form-btn {
    width: 30%;
    display: block;
    position: relative;
    z-index: 1;
    border-radius: 25px;
    overflow: hidden;
    margin: 0 auto;
    box-shadow: 0 5px 30px 0px rgb(3 216 222 / 20%);
    -moz-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
    -webkit-box-shadow: 0 5px 30px 0px rgb(3 216 222 / 20%);
    -o-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
    -ms-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
}

.login100-form-bgbtn {
  position: absolute;
  z-index: -1;
  width: 300%;
  height: 100%;
  background: #a64bf4;
  background: -webkit-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
  background: -o-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
  background: -moz-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
  background: linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
  top: 0;
  left: -100%;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}
.login100-form-smbtn {
    position: absolute;
    z-index: -1;
    width: 300%;
    height: 100%;
    background: hsl(223, 65%, 58%);
    background: -webkit-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
    background: -o-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
    background: -moz-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
    background: linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
    top: 0;
    left: -100%;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
}

.login100-form-btn {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 20px;
    z-index: 5;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 50px;
}
button {
    outline: none !important;
    border: none;
    background: transparent;
}

.text-center {
    text-align: center !important;
}
.txt1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 1.5;
    color: #666666;
}

.p-b-20 {
    padding-bottom: 20px;
}

.p-t-54 {
    padding-top: 54px;
}


</style>
