<template>
  <div class="wrape">
    <!-- 標題 -->
    <div class="header">
      <div class="banner">
        <a class="logo">無憂無鬱</a>
      </div>
    </div>

    <!-- 搜尋 -->
    <div class="container--search">
      <div class="search">
        <input name="searchPatient" class="searchBox" placeholder="搜尋病患" />
        <div class="button" type="submit" name="search">搜尋</div>
      </div>
    </div>

    <!-- 列管病患 -->
    <div class="container--patientList">
      <!-- <table class="patientList">
        <tr>
          <th></th>
          <th>編號</th>
          <th>姓名</th>
          <th>性別</th>
          <th>房號</th>
        </tr>
        
      </table> -->

      <div class="patientList-title">
        <div><a>編號</a></div>
        <div><a>姓名</a></div>
        <div><a>性別</a></div>
        <div><a>房號</a></div>
      </div>
      <PatientList v-for="item in patientData" :key="item.pid" :item="item" />
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
            <img src="../assets/img/home.png" alt="首頁" />
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
            <img src="../assets/img/settings-un.png" alt="設定" />
            <a>設定</a>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import patientData from "../data/patientData.json";
import PatientList from "../components/patientList.vue";

export default {
  data() {
    return {
      patientData: patientData,
    };
  },
  watch: {
    search: function () {
      this.fasterSearch();
    },
  },
  methods: {
    fasterSearch() {},
  },
  components: {
    patientData,
    PatientList,
  },
};
</script>

<style scoped>
@media screen and (min-width: 1025px) {
  .container--search {
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 900px;
    height: 40px;
    width: 60%;
    margin: 0 auto;
    margin-top: 40px;
  }

  .search {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  .searchBox {
    width: 90%;
    height: 45px;
    line-height: 45px;
    padding-left: 10px;
    border: 1.8px solid #fae6d4;
    outline: none;
    font-size: 20px;
  }

  .button {
    background-color: #e9b485;
    color: white;
    width: 20%;
    max-width: 63px;
    min-width: 36px;
    height: 45px;
    line-height: 45px;
    text-align: center;
  }

  .container--patientList {
    width: 80%;
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0;
  }

  .patientList-title {
    width: 100%;
    height: 50px;
    background-color: #fae6d4;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .patientList-title div {
    width: 25%;
    text-align: center;
  }
}

/* pad */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .container--search {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 40px;
    width: 60%;
    margin: 0 auto;
    margin-top: 40px;
  }

  .search {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  .searchBox {
    width: 90%;
    height: 40px;
    border: 1.8px solid #fae6d4;
    line-height: 35px;
    padding-left: 10px;
    outline: none;
    font-size: 16px;
  }

  .button {
    background-color: #e9b485;
    color: white;
    width: 20%;
    max-width: 63px;
    min-width: 36px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }

  .container--patientList {
    width: 80%;
    margin: 0 auto;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0;
  }

  .patientList-title {
    width: 100%;
    height: 45px;
    background-color: #fae6d4;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .patientList-title div {
    width: 25%;
    text-align: center;
  }
}

/* phone row */
@media screen and (min-width: 551px) and (max-width: 768px) {
  .container--search {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 30px;
    width: 60%;
    margin: 0 auto;
    margin-top: 30px;
  }

  .search {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  .searchBox {
    width: 100%;
    min-width: 200px;
    height: 30px;
    outline: none;
    line-height: 35px;
    padding-left: 10px;
    border: 1.8px solid #fae6d4;
  }

  .button {
    background-color: #e9b485;
    color: white;
    width: 15%;
    min-width: 45px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: small;
  }

  .container--patientList {
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0;
  }

  .patientList-title {
    width: 100%;
    height: 40px;
    background-color: #fae6d4;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .patientList-title div {
    width: 25%;
    text-align: center;
  }
}

/* phone cloumn*/
@media screen and (max-width: 550px) {
  .container--search {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 30px;
    width: 60%;
    min-width: 200px;
    margin: 0 auto;
    margin-top: 30px;
  }

  .search {
    width: 100%;
    max-width: 767px;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  .searchBox {
    width: 90%;
    max-width: 250px;
    min-width: 144px;
    height: 30px;
    line-height: 35px;
    padding-left: 10px;
    border: 1.8px solid #fae6d4;
    outline: none;
  }

  .button {
    background-color: #e9b485;
    color: white;
    width: 20%;
    min-width: 36px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: small;
  }

  .container--patientList {
    width: 90%;
    margin: 0 auto;
    min-width: 300px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 15px;
    padding: 0;
  }

  .patientList-title {
    width: 100%;
    height: 40px;
    background-color: #fae6d4;
    font-size: 15px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .patientList-title div {
    width: 25%;
    text-align: center;
  }
}
</style>