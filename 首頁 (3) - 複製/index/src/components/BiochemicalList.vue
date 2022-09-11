<template>
  <div class="container--biochemical">
    <div class="mainFont secondFont">
      <a>{{ item.bName }}</a>
    </div>

    <div class="container--biochemicalList">
      <div class="value">
        <div class="num">
          <a>80</a>
        </div>
        <div class="unit">
          <a>mg/dl</a>
        </div>
        <button type="button" @click="click" class="button">
          <!-- onclick="TAG()" -->
          <a>紀錄</a>
        </button>
      </div>
      <!-- 圖表 -->
      <!-- <canvas id="TAGChart"> -->
      <Chart />
      <!-- </canvas> -->
    </div>

    <!-- 彈出視窗 -->
    <div id="inputList--TAG" v-if="isPopup">
      <h2>三酸肝油脂</h2>
      <div class="container--inputbox">
        <a id="date"></a>
      </div>
      <div class="container--inputbox">
        <a class="inputbox--text">三酸肝油脂:</a>
        <input
          onmouseout="checkValue()"
          class="inputbox"
          type="input"
          id="TAG"
        />
      </div>
      <div class="container--inputbox">
        <a class="inputbox--text" id="TAGCheck"></a>
      </div>
      <div class="container--inputbox">
        <button @click="close" class="btn submit" id="TAGSubmit">確定</button>
        <button @click="cancel" class="btn cancel" id="TAGclose">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "../components/BiochemicalChart.vue";
export default {
  // props: {
  //   value: {
  //     type: [Number, String],
  //   },
  //   position: {
  //     type: String,
  //     default: "0",
  //   },
  // },
  components: {
    Chart,
  },
  data() {
    return {
      isPopup: false,
    };
  },
  props: {
    item: Object,
  },

  methods: {
    close() {
      this.isPopup = false;
    },
    click() {
      // this.$emit("click");
      this.isPopup = !this.isPopup;
    },
    cancel() {
      this.isPopup = false;
    },
  },
};
</script>
<style scoped>
.mainFont {
  font-size: 40px;
  width: 90%;
  height: 40px;
  margin: 20px 0;
}

.secondFont {
  font-size: 28px;
  display: flex;
  align-items: flex-start;
  margin-top: 0;
  margin: 10px 0;
}
.container--biochemical {
  width: 100%;
  max-width: 600px;
  margin: 20px;
  margin-bottom: 0px;
}

.container--biochemicalList {
  width: 100%;
  max-width: 600px;
  padding: 10px 20px;
  border-radius: 10px;
  border: gray 1px solid;
  display: flex;
  flex-direction: row;
}

.value {
  width: 30%;
  max-width: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.num {
  width: 100%;
  max-width: 150px;
  font-size: 80px;
  height: 70px;
  display: flex;
  justify-content: flex-start;
}

.unit {
  width: 100%;
  max-width: 150px;
  font-size: 28px;
  display: flex;
  justify-content: flex-end;
}

.button {
  width: 50%;
  max-width: 200px;
  height: 35px;
  font-size: 18px;
  line-height: 35px;
  color: black;
  background-color: #cfd2d3;
  border-radius: 20px;
  border: 0;
  text-align: center;
  margin: 20px 0;
  display: flex;
  justify-content: center;
}

#inputList--TAG {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  /* 設定 */
  width: 400px;
  height: 300px;
  padding: 30px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  filter: drop-shadow(10px 10px 20px black);
  background: #ffffff;
  border-radius: 10px;
  border: gray 1px solid;
  display: flex;
  /* display: none; */
  justify-content: center;
  justify-items: center;
  align-items: center;
  flex-direction: column;
}

.container--inputbox {
  width: 280px;
  height: 40px;
  /* margin-top: 10px; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
}

.inputbox--text {
  width: 40%;
  height: 40px;
  font-size: 20px;
  line-height: 40px;
  width: max-content;
}

.inputbox {
  width: 60%;
  height: 25px;
  line-height: 40px;
}

.btn {
  width: 70px;
  height: 30px;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  border: 0px;
  border-radius: 5px;
}

.submit {
  background-color: #3db62a;
}

.cancel {
  background-color: #ffa217;
}
</style>