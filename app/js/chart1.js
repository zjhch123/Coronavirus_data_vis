// 每日谣言增长数量vs谣言总量
function renderChart1() {
  const dom = document.getElementById("chart1");
  const chart = echarts.init(dom);
  const option = {
    legend: {
      data: ['当日谣言总量', '当日新增', '数据'],
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '8%',
      right: '4%',
      bottom: '3%',
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
        name: '数量',
      }
    ],
    series: [
      {
        name: '当日新增',
        type: 'bar',
        stack: '数据',
        data: Data_RumourDailyIncreseCount,
      },
      {
        name: '当日谣言总量',
        type: 'bar',
        stack: '数据',
        data: Data_RumourDailyCount,
      },
    ]
  };
  chart.setOption(option, true);
}
