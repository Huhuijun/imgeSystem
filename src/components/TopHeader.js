import {MenuFoldOutlined,MenuUnfoldOutlined,UserOutlined} from '@ant-design/icons';
import React from 'react'
import { Layout,Button, Dropdown, Space,Avatar} from 'antd';
import {connect} from 'react-redux'
const { Header} = Layout;

function TopHeader(props) {
const items = [
  {
    key: '1',
    danger: true,
    label: <a href='/login'>退出</a>,
    onClick:()=>loginout()
  },
];
const loginout=()=>{
    localStorage.clear()
}

const changeCollapsed=()=>{
  props.changeCollapsed()
}
  return (
    <Header
          style={{
            padding: 0,
            background: "white",
          }}
        >
          <Button
            type="text"
            icon={ props.isCollapsed? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => changeCollapsed()}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div style={{float:'right'}}>
          <Dropdown menu={{items, }}>
           
                <Space size={16} wrap>
                   欢迎登录
                   <Avatar style={{backgroundColor: '#87d068',}}
                   icon={<UserOutlined />}/>
                </Space>
                
         </Dropdown>
          </div>
        </Header>
  )
}

const mapStateToProps=({CollApsedReducer:{isCollapsed}})=>{
  return{
    isCollapsed
  }
}

const mapDispatchToprops={
  changeCollapsed(){
    return{
      type:"change_collapsed"//payload:状态值true false
    }
  }//action
}

export default  connect(mapStateToProps,mapDispatchToprops)(TopHeader)