<template>
  <div class="container--Info">
    <!-- 照片 -->
    <div class="mainInfo--left">
      <img src="../assets/img/photo.jpg" class="photo" />
    </div>

    <!-- 主要個資 -->
    <div class="mainInfo--right">
      <div class="mainInfo-div">
        <div class="mainInfo-title"><a>編號</a></div>
        <div class="mainInfo-data">
          <a name="pNum" id="pNum">{{ item.pNum }}</a>
        </div>
      </div>
      <div class="mainInfo-div">
        <div class="mainInfo-title"><a>姓名</a></div>
        <div class="mainInfo-data">
          <a name="pName" id="pName">{{ item.pName }}</a>
        </div>
      </div>
      <div class="mainInfo-div">
        <div class="mainInfo-title"><a>性別</a></div>
        <div class="mainInfo-data">
          <a name="pSex" id="pSex">{{ item.pSex }}</a>
        </div>
      </div>
      <div class="mainInfo-div">
        <div class="mainInfo-title"><a>年齡</a></div>
        <div class="mainInfo-data">
          <a name="pAge" id="pAge">{{ item.pAge }}</a>
        </div>
      </div>
      <div class="mainInfo-div">
        <div class="mainInfo-title"><a>身份證字號</a></div>
        <div class="mainInfo-data">
          <a name="pID" id="pID">{{ item.pID }}</a>
        </div>
      </div>
      <div class="mainInfo-div">
        <div class="mainInfo-title"><a>主治醫師</a></div>
        <div class="mainInfo-data">
          <a name="doctor" id="doctor">{{ item.doctor }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    item: {
      type: String,
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1240px) {
  .container--Info {
    max-width: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
    margin-left: 10px;
    margin-right: 70px;
  }

  .mainInfo--left {
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
  }

  .photo {
    width: 150px;
    height: 200px;
  }

  .mainInfo--right {
    font-size: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mainInfo-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 13px 0;
  }

  .mainInfo-title {
    width: 120px;
    color: #ea9f59;
    font-weight: bold;
  }

  .mainInfo-data {
    width: 120px;
    padding-left: 15px;
  }
}
/* computer */
@media screen and (min-width: 1025px) and (max-width: 1240px) {
  .container--Info {
    width: 30%;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
    margin-right: 30px;
  }

  .mainInfo--left {
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
  }

  .photo {
    width: 150px;
    height: 200px;
  }

  .mainInfo--right {
    /* width: 350px; */
    min-width: 270px;
    font-size: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mainInfo-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 0;
  }

  .mainInfo-title {
    width: 120px;
    color: #ea9f59;
    font-weight: bold;
  }

  .mainInfo-data {
    width: 120px;
    padding-left: 15px;
  }
}

/* pad */
@media screen and (min-width: 767px) and (max-width: 1024px) {
  /* 主要資料 */
  .container--Info {
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .mainInfo--left {
    width: 200px;
  }

  .photo {
    width: 200px;
    height: 250px;
  }

  .mainInfo--right {
    width: 350px;
    font-size: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mainInfo-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 0;
  }

  .mainInfo-title {
    width: 120px;
    color: #ea9f59;
    font-weight: bold;
  }

  .mainInfo-data {
    width: 120px;
    padding-left: 15px;
  }
}

/* phone row */
@media screen and (min-width: 551px) and (max-width: 767px) {
  /* 主要資料 */
  .container--Info {
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .mainInfo--left {
    display: flex;
    align-items: center;
    margin-right: 50px;
  }

  .photo {
    width: 150px;
    height: 200px;
  }

  .mainInfo--right {
    width: 250px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mainInfo-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 8px 0;
  }

  .mainInfo-title {
    width: 120px;
    color: #ea9f59;
    font-weight: bold;
  }

  .mainInfo-data {
    width: 120px;
    padding-left: 15px;
  }
}

/* phone cloumn */
@media screen and (max-width: 550px) {
  /* 主要資料 */
  .container--Info {
    min-width: 320px;
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .mainInfo--left {
    align-items: center;
    margin-right: 30px;
  }

  .photo {
    width: 90px;
    height: 120px;
  }

  .mainInfo--right {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mainInfo-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 5px 0;
  }

  .mainInfo-title {
    width: 100px;
    color: #ea9f59;
    font-weight: bold;
  }

  .mainInfo-data {
    width: 100px;
    padding-left: 15px;
  }
}
</style>