<template>
  <div class="wrapper">
    <div class="header">
      <div class="banner">
        <router-link :to="'/setting'">
          <div>
            <a href="#"><img src="../assets/img/back.png" class="back" /></a>
          </div>
        </router-link>
        <a class="logo">無憂無鬱</a>
      </div>
    </div>

    <div class="container">
      <h1>更改密碼</h1>
      <div class="updatePwd">
        <form action="">
          <div>
            <label>請輸入舊密碼</label>
            <input type="password" />
          </div>
          <div>
            <label>請輸入新密碼</label>
            <input type="password" />
          </div>
          <div>
            <label>　　確認密碼</label>
            <input type="password" />
          </div>
          <div><button type="submit">送出</button></div>
        </form>
      </div>
    </div>

    <div class="footer">
      <div class="footerBg">
        <router-link :to="'/CheckIndex'" class="router-link-footer">
          <div>
            <img src="../assets/img/check-un.png" alt="今日事務" />
            <a>今日事務</a>
          </div>
        </router-link>

        <router-link :to="'/insert'" class="router-link-footer">
          <div>
            <img src="../assets/img/new-file-un.png" alt="新增資料" />
            <a>新增資料</a>
          </div>
        </router-link>

        <router-link :to="'/'" class="router-link-footer">
          <div>
            <img src="../assets/img/home-un.png" alt="首頁" />
            <a>首頁</a>
          </div>
        </router-link>

        <router-link :to="'/DepressionIndex'" class="router-link-footer">
          <div>
            <img src="../assets/img/broken-heart-un.png" alt="憂鬱症專區" />
            <a>憂鬱症專區</a>
          </div>
        </router-link>

        <router-link :to="'/setting'" class="router-link-footer">
          <div>
            <img src="../assets/img/settings.png" alt="設定" />
            <a>設定</a>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
    min-width: 768px;
  }

  h1 {
    text-align: center;
    padding-top: 40px;
  }

  .updatePwd form {
    padding-top: 50px;
    width: 450px;
    line-height: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .updatePwd div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 25px;
    font-weight: bolder;
  }

  .updatePwd input {
    border: none;
    background-color: #fae6d4;
    height: 30px;
    width: 200px;
    border-radius: 7px;
    padding: 5px;
  }

  .updatePwd button {
    width: 70px;
    height: 30px;
    text-align: center;
    margin-top: 40px;
    border: none;
    border-radius: 7px;
    background-color: #e9b485;
    color: white;
  }

  .updatePwd button:hover {
    background-color: #e9b485ce;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    width: 100%;
  }

  h1 {
    text-align: center;
    padding-top: 40px;
  }

  .updatePwd form {
    padding-top: 50px;
    width: 450px;
    line-height: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .updatePwd div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 25px;
    font-weight: bolder;
  }

  .updatePwd input {
    border: none;
    background-color: #fae6d4;
    height: 30px;
    width: 200px;
    border-radius: 7px;
    padding: 5px;
  }

  .updatePwd button {
    width: 70px;
    height: 30px;
    text-align: center;
    margin-top: 40px;
    border: none;
    border-radius: 7px;
    background-color: #e9b485;
    color: white;
  }

  .updatePwd button:hover {
    background-color: #e9b485ce;
  }
}

@media screen and (min-width: 1025px) {
  .container {
    width: 100%;
  }

  h1 {
    text-align: center;
    padding-top: 40px;
  }

  .updatePwd form {
    padding-top: 50px;
    width: 450px;
    line-height: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .updatePwd div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 25px;
    font-weight: bolder;
  }

  .updatePwd input {
    border: none;
    background-color: #fae6d4;
    height: 30px;
    width: 200px;
    border-radius: 7px;
    padding: 5px;
  }

  .updatePwd button {
    width: 70px;
    height: 30px;
    text-align: center;
    margin-top: 40px;
    border: none;
    border-radius: 7px;
    background-color: #e9b485;
    color: white;
  }

  .updatePwd button:hover {
    background-color: #e9b485ce;
  }
}
</style>