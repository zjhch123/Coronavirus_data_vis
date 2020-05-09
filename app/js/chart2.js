// 每日谣言增长数量vs每日新增感染人数
function renderChart2() {
  const dom = document.getElementById("chart2");
  const chart = echarts.init(dom);
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        crossStyle: {
          color: '#999'
        }
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    legend: {
      data: ['每日谣言增长量', '每日新增感染人数']
    },
    xAxis: [
      {
        type: 'category',
        data: Data_Date,
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '谣言增长量',
        min: 0,
        max: 50,
      },
      {
        type: 'value',
        name: '新增感染人数',
        min: 0,
        max: 16000,
      }
    ],
    series: [
      {
        name: '每日谣言增长量',
        type: 'bar',
        data: Data_RumourDailyIncreseCount,
      },
      {
        name: '每日新增感染人数',
        type: 'line',
        yAxisIndex: 1,
        data: Data_VirusDailyIncreseCount,
      }
    ]
  };
  chart.setOption(option, true);
}