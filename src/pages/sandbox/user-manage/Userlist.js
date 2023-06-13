import { useState } from 'react';
import React from 'react'
import { Table,Modal } from 'antd';
const {confirm}=Modal

export default function Userlist() {
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (item) => {return <button className='del-btn' onClick={()=>confirmMethod(item)}>Delete</button>}
    },
  ];
  const data1 = [//参考数据
    {
      key: 1,
      id:1,
      name: 'user1',
    },
    {
      key:2,
      id:2,
      name: 'user2',
    },
    {
      key: 3,
      id:3,
      name: 'user3',
    },
    {
      key: 4,
      id:4,
      name: 'user4',
    },
    {
      key: 5,
      id:5,
      name: 'user5',
    },
  ];
  const [data,setData]=useState(data1)
  const confirmMethod=(item)=>{
     confirm({
      title:'确定删除此用户?',
      onOk(){
        onDel(item)
      },
      onCancel(){

      }
     })
  }
  const onDel=(item)=>{
      //console.log(item);
      setData(data.filter(d=>d.id!==item.id)) 
      //axios.delete("/api/${item.id}")
  }
  return (
    <div>
       <Table
    columns={columns}
    dataSource={data}
  />
    </div>
  )
}
