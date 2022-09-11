<template>
  <div>
    <div class="wrapper">
      <div class="header">
        <div class="banner">
          <a class="logo">無憂無鬱</a>
        </div>
      </div>

      <div class="container">
        <div class="contect">
          <div class="altTitle">
            <a>病患:</a>
          </div>
          <div class="patientInfo">
            <a>201-1 陳曉明、201-2 吳大恩、201-3 劉美美</a>
          </div>
          <div class="datetime">
            <div class="timer">
              <div class="timeNum">8</div>
              <div class="timeNum">9</div>
              <div class="timeNum">10</div>
              <div class="timeNum">11</div>
              <div class="timeNum">12</div>
              <div class="timeNum">13</div>
              <div class="timeNum">14</div>
              <div class="timeNum">15</div>
              <div class="timeNum">16</div>
              <div class="timeNum">17</div>
            </div>
            <div class="todo">
              <!-- 8 -->
              <hr class="todoLine" />
              <div class="todoInfo">
                <div class="todoText"><a class="todoText left"></a></div>
              </div>
              <!-- 9 -->
              <hr class="todoLine" />
              <div class="todoInfo">
                <div class="todoText green">
                  <a class="todoText left">201-3 劉美美做全身健康檢查</a>
                </div>
              </div>
              <!-- 10 -->
              <hr class="todoLine" />
              <div class="todoInfo">
                <div class="todoText"><a class="todoText left"></a></div>
              </div>
              <!-- 11 -->
              <hr class="todoLine" />
              <div class="todoInfo">
                <div class="todoText"><a class="todoText left"></a></div>
              </div>
              <!-- 12 -->
              <hr class="todoLine" />
              <div class="todoInfo">
                <div class="todoText yellow">
                  <a class="todoText left">201-1 陳曉明吃飯後藥</a>
                </div>
                <div class="todoText yellow">
                  <a class="todoText left">201-2 吳大恩吃飯後藥</a>
                </div>
              </div>
              <!-- 13 -->
              <hr class="todoLine" />
              <div class="todoInfo">
                <div class="todoText"><a class="todoText left"></a></div>
              </div>
              <!-- 14 -->
              <hr class="todoLine" />
              <div class="todoInfo">
                <div class="todoText"><a class="todoText left"></a></div>
              </div>
              <!-- 15 -->
              <hr class="todoLine" />
              <div class="todoInfo">
                <div class="todoText"><a class="todoText left"></a></div>
              </div>
              <!-- 16 -->
              <hr class="todoLine" />
              <div class="todoInfo">
                <div class="todoText"><a class="todoText left"></a></div>
              </div>
              <!-- 17 -->
              <hr class="todoLine" />
              <div class="todoInfo">
                <div class="todoText"><a class="todoText left"></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="footerBg">
          <router-link :to="'/CheckIndex'" class="router-link-footer">
            <div>
              <img src="../assets/img/check.png" alt="今日事務" />
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
              <img src="../assets/img/settings-un.png" alt="設定" />
              <a>設定</a>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.container {
  width: 100%;
  font-weight: bold;
}

.contect {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 5%;
  margin-top: 3%;
}

.altTitle {
  font-size: 25px;
}

.patientInfo {
  margin-top: 1%;
  font-size: 23px;
  font-family: "Inter";
  font-style: italic;
}

.datetime {
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 95%;
  height: 680px;
}

.timer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3%;
  font-size: 20px;
}

.todo {
  width: 95%;
  height: 680px;
  display: flex;
  flex-direction: column;
  margin-top: 5%;
}

.todoLine {
  border: 0;
  height: 1px;
  background: grey;
}

.todoInfo {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 61px;
  text-align: left;
  margin-top: 3px;
  margin-bottom: 3px;
}

.todoText {
  width: 100%;
  border-radius: 10px;
  font-size: 24px;
  line-height: 66px;
  margin-left: 1%;
}

.green {
  background-color: #d4eebb;
}

.yellow {
  background-color: #f6f39d;
}

.left {
  margin-left: 10px;
}

/* 電腦 */
@media screen and (min-width: 1025px) {
  .container {
    width: 100%;
    /* min-width: 1200px; */
    font-weight: bold;
  }

  .altTitle {
    font-size: 50px;
  }

  .patientInfo {
    margin-top: 1%;
    font-size: 45px;
    font-family: "Inter";
    font-style: italic;
  }

  .datetime {
    margin-top: 2%;
    height: 900px;
  }

  .timer {
    font-size: 30px;
    margin-top: 2%;
  }

  .todo {
    height: 900px;
    display: flex;
    flex-direction: column;
    margin-top: 6%;
  }

  .todoInfo {
    height: 100px;
    margin-top: 3px;
    margin-bottom: 3px;
  }

  .todoText {
    font-size: 30px;
  }
}

/* 平板 */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .altTitle {
    font-size: 40px;
  }

  .patientInfo {
    margin-top: 1%;
    font-size: 35px;
    font-family: "Inter";
    font-style: italic;
  }
}

@media screen and (min-width: 551px) and (max-width: 767px) {
  .altTitle {
    font-size: 30px;
  }

  .patientInfo {
    margin-top: 1%;
    font-size: 25px;
    font-family: "Inter";
    font-style: italic;
  }

  .todoText {
    font-size: 18px;
    line-height: 50px;
  }
}

/* 手機 */
@media screen and (max-width: 550px) {
  .banner {
    height: 50px;
  }

  .logo {
    font-size: 30px;
    font-weight: bold;
    color: white;
  }

  .container {
    width: 100%;
    min-width: 410px;
    font-weight: bold;
  }

  .altTitle {
    font-size: 20px;
  }

  .patientInfo {
    margin-top: 1%;
    font-size: 18px;
  }

  .datetime {
    height: 850px;
  }

  .timer {
    font-size: 15px;
  }

  .todo {
    margin-left: 3%;
    height: 850px;
    justify-content: space-around;
    margin-top: 11%;
  }

  .todoInfo {
    height: 50px;
  }

  .todoText {
    font-size: 13px;
    line-height: 50px;
  }
  .footerBg a {
    font-size: 8px;
  }
}
</style>