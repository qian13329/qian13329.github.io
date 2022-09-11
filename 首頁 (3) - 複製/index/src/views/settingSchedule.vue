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
      <h1>八月</h1>
      <div class="schedule">
        <table border="1px">
          <tr>
            <td></td>
            <td>一</td>
            <td>二</td>
            <td>三</td>
            <td>四</td>
            <td>五</td>
            <td>六</td>
            <td>日</td>
          </tr>
          <tr>
            <td>白班</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>小夜</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>大夜</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
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

  .schedule {
    padding-top: 40px;
  }

  table {
    margin: 0 auto;
    width: 650px;
    height: 600px;
    border-collapse: collapse;
    border: gray solid 1px;
    text-align: center;
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

  .schedule {
    padding-top: 40px;
  }

  table {
    margin: 0 auto;
    width: 650px;
    height: 600px;
    border-collapse: collapse;
    border: gray solid 1px;
    text-align: center;
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

  .schedule {
    padding-top: 40px;
  }

  table {
    margin: 0 auto;
    width: 650px;
    height: 600px;
    border-collapse: collapse;
    border: gray solid 1px;
    text-align: center;
  }
}
</style>