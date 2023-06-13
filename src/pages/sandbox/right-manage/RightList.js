import React, { useEffect ,useState} from 'react'
import { useRef} from 'react'
import * as echarts from 'echarts';
export default function RightList() {
const info=JSON.parse(localStorage.getItem('token'))
const [userinfo]=useState([
    {value:4,name:'头像'},
    {value:3, name:'手机背景'},
    {value:5,name:'电脑背景'} 
])
var total=0
for(let i of userinfo){
   total+=i.value
   //console.log(total)
}
const chartx=useRef()
//console.log(userinfo)
  useEffect(()=>{
    var myChart = echarts.init(chartx.current);
    var option = {
      title: {
        text: '作品分类占比图',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: userinfo,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
   option&&myChart.setOption(option);
  },[userinfo])

  return (
    <div>
      <h1>个人中心</h1>
      <p>用户名：{info.username}</p>
      <p>作品总数量：{total}</p>
      <div ref={chartx} style={{
        width:'500px',
        height:'500px',
      }}></div>
    </div>
  )
}
