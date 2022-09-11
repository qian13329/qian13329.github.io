<template>
  <highcharts :options="options"></highcharts>
</template>

<script>
// import BiochemicalValue from '../data/TAG_Data.json';
export default {
  data() {
    return {
      options: {
        chart: { type: "line" },
        title: { text: "" },
        xAxis: {
          categories: ["6/1", "6/2", "6/3", "6/4", "6/5", "6/6", "6/7", "6/8"],
        },
        yAxis: {
          title: { text: "數值" },
        },
        series: [
          {
            name: "mg/dl",
            data: [81, 82, 85, 89, 86, 75, 83, 85],
          },
        ],
        computed: {
          xAxisCate() {
            return Object.keys(this.data);
          },
          seriesData() {
            return Object.values(this.data);
          },
          options() {
            let options = Object.assign(this.options, {});
            options.xAxis.categories = this.xAxisCate;
            options.series[0].data = this.seriesData;
            return options;
          },
        },
      },
    };
  },
};
</script>

<style scoped>
/* 圖表 */
#TAGChart {
  width: 70%;
  max-width: 400px;
  height: 177px;
}

#HDLChart {
  width: 70%;
  max-width: 400px;
  height: 177px;
}

#VATChart {
  width: 70%;
  max-width: 400px;
  height: 177px;
}

#ACChart {
  width: 70%;
  max-width: 400px;
  height: 177px;
}

#fiveHTTLPRChart {
  width: 70%;
  max-width: 400px;
  height: 177px;
}

#VitaminDChart {
  width: 70%;
  max-width: 400px;
  height: 177px;
}
</style>