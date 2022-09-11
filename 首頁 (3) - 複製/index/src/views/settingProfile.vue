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
      <div class="profile">
        <div class="profile__pic">
          <img
            src="../assets/img/profile-pic.png"
            alt="個人頭像"
            width="90px"
            height="90px"
          />
        </div>
      </div>
      <div class="menu">
        <div>
          <a>姓名</a>
          <a v-for="item in userData" :key="item.userID" :item="item">
            {{ item.username }}</a
          >
        </div>
        <div>
          <a>性別</a>
          <a v-for="item in userData" :key="item.userID" :item="item">
            {{ item.userSex }}</a
          >
        </div>
        <div>
          <a>電話</a>
          <a v-for="item in userData" :key="item.userID" :item="item">
            {{ item.userPhone }}</a
          >
        </div>
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
import userData from "../data/userData.json";
export default {
  data() {
    return {
      // userData: userData,
    };
  },
  props: {
    item: Object,
  },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
    min-width: 768px;
  }

  .profile {
    padding-top: 70px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .profile__pic {
    /* padding-left: 30px; */
    margin: 0 auto;
  }

  .menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .menu div {
    width: 600px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 25px;
    font-weight: bolder;
    border-bottom: rgba(128, 128, 128, 0.685) solid 1px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    width: 100%;
  }

  .profile {
    padding-top: 70px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .profile__pic {
    /* padding-left: 30px; */
    margin: 0 auto;
  }

  .menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .menu div {
    width: 600px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 25px;
    font-weight: bolder;
    border-bottom: rgba(128, 128, 128, 0.685) solid 1px;
  }
}

@media screen and (min-width: 1025px) {
  .container {
    width: 100%;
  }

  .profile {
    padding-top: 70px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .profile__pic {
    /* padding-left: 30px; */
    margin: 0 auto;
  }

  .menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .menu div {
    width: 600px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 25px;
    font-weight: bolder;
    border-bottom: rgba(128, 128, 128, 0.685) solid 1px;
  }
}
</style>