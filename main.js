$(function(){
  var e = $('.main');
  var chart = echarts.init(document.getElementById('echarts'));

  var option = {
    title: {
      text: 'JavaScript语言排名变化'
    },
    tooltip: {
      trigger:'axis'
    },
    xAxis: {
      data: [2000,2005,2010,2015,2020]
    },
    yAxis: {},
    series: [{
      name: '排名',
      type: 'line',
      smooth: false,
      data: [6, 9, 8, 8, 7]
    }]
  }
  chart.setOption(option);

  return new Handsontable(e.get(0),{
    data:[['Java',1,'降','-0.01%'],['C',2,'升','+2.44%'],['Python',3,'升','+1.41%'],['C++',4,'降','-2.58%'],['C#',5,'升','+2.07%'],['Visual Basic .NET',6,'降','-1.17%'],['JavaScript',7,'降','-0.85%']],
    contextMenu: !0,
    manualRowResize: !0,
    manualColumnResize: !0,
    rowHeaders: 0,
    colWidths:'180px',
    className:'htMiddle htCenter',
    colHeaders:['语言名称','排名','升或降','变化幅度'] 
  })
})
