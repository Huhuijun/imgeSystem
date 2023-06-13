import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  HomeOutlined,
  ContactsOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Layout, Menu} from 'antd'

const { Sider} = Layout
//const { SubMenu } = Menu;

function SideMenu(props) {
  /*const toggleCollapsed = () => {
    setCollapsed(!collapsed);//设置导航栏折叠函数
  };*/
  const onClickMenu=(e)=>{
    //console.log(e)
    props.history.push(e.key)//v6写法可使用usenavigate钩子,navigate(e.key)
  }
  const  adminList = [//可根据后端接口控制导航菜单
      {
        key:"/home",
        label:"首页",
        icon:<HomeOutlined />
      },
      {
        key:"/user-manage",
        label:"用户管理",
        icon:<UserOutlined />,
        children:[
          {
            key:"/user-manage/userlist",
            label:"用户列表",
          },
          {
            key:"/user-manage/worklist",
            label:"作品审核"
          }
        ]
      },
      {
        key:"/right-manage",
        label:"作者中心",
        icon:<ContactsOutlined />,
        children:[
          {
            key:"/right-manage/role/list",
            label:"作品上传",
          },
          {
            key:"/right-manage/right/list",
            label:"作者中心",
          }
       ]
      }
     ];
     const  normalList = [//可根据后端接口控制导航菜单
      {
        key:"/home",
        label:"首页",
        icon:<HomeOutlined />
      },
      {
        key:"/right-manage",
        label:"作者中心",
        icon:<ContactsOutlined />,
        children:[
          {
            key:"/right-manage/role/list",
            label:"作品上传",
          },
          {
            key:"/right-manage/right/list",
            label:"作者中心",
          }
       ]
      }
     ];
     /*
      const renderMenu = (menuList)=>{
        return menuList.map(item=>{
          if(item.children){
            return <SubMenu key={item.key} icon={item.icon} label={item.label}>
               { renderMenu(item.children) }
            </SubMenu>
          }
    
          return <Menu.Item key={item.key} icon={item.icon}  onClick={()=>{
              console.log(props)
            props.history.push(item.key)
          }}>{item.label}</Menu.Item>
        })
      }menu内部封装
*/
   const user=JSON.parse(localStorage.getItem('token'))
  // console.log(user)
   const key=props.location.pathname
   const openkeys=["/"+key.split("/")[1]]
  return (
    <Sider trigger={null} collapsible collapsed={props.isCollapsed}>
     <div className="logo">
      组件图片发布管理系统
     </div>
     <Menu
        defaultOpenKeys={openkeys}
        defaultSelectedKeys={[key]}
        mode="inline"
        theme="dark"
        inlineCollapsed={props.isCollapsed}
        items={ user.username==='admin'? adminList:normalList}
        onClick={onClickMenu}
      >
        
      </Menu>
  </Sider>
  )
  }
  const mapStateToProps=({CollApsedReducer:{isCollapsed}})=>{
    return{
      isCollapsed
    }
  }
  export default connect(mapStateToProps)(withRouter(SideMenu)) 