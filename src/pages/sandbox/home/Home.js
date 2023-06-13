import React, { useState } from 'react'
import { Image } from 'antd';
import p1 from './p1.png'
import b1 from './b1.png'
import { Input, Space } from 'antd';
const { Search } = Input;
export default function Home() {
  const iamgelist=[
    {
      name:'b1.png',
      src:b1,
      Key:'1'
    },
    {
      name:'p1.png',
      src:p1,
      Key:'1'
    },
    {
      name:'p2.png',
      src:p1,
      Key:'1'
    },
    {
      name:'p3.png',
      src:p1,
      Key:'1'
    },
    {
      name:'p4.png',
      src:p1,
      Key:'1'
    },
    {
      name:'p5.png',
      src:p1,
      Key:'1'
    },
    {
      name:'p6.png',
      src:p1,
      Key:'1'
    },
    {
      name:'p7.png',
      src:p1,
      Key:'1'
    },
    
  
  ]
  const chossList=[
    {
      value:'电脑背景',
      key:1
    },
    {value:'手机背景',key:2},
    {value:'头像',key:3},
  ]
  const [chossState,setChossState]=useState(1)
  const [imglist,setImglist]=useState(iamgelist)
  const onSearch=(value)=>{
     console.log(value)
     setImglist(iamgelist.filter(item=>item.name===value))
  }
  const onChoose=(value)=>{
    //axios
    //setimglist
   // console.log(value)
   setChossState(value)
  }
  return (
    <div className='home'>
      <div className='search'>
        <Space direction="vertical">
    <Search
      placeholder='例如:p1.png'
      onSearch={(value)=>onSearch(value)}
      style={{
        width: 200,
      }}
    />
     </Space>
      </div>
      <div className='chose-image'>
       {
        chossList.map(item=><span onClick={()=>onChoose(item.key)} 
        className={chossState===item.key?'active':''}>{item.value}</span>)
       }
      </div>
       <div className="image-gallery">
       {
        imglist.map((item)=><div><Image src={p1} alt={item.name} width={250} height={350}/></div>
        )
       }
    </div>
    </div>
   
  )
}
