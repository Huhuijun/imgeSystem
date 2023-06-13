import React from 'react'
import { Suspense } from 'react'
//route
import { Route, Switch,Redirect } from 'react-router-dom/cjs/react-router-dom.min'
//component
import SideMenu from '../../../components/SideMenu'
import TopHeader from '../../../components/TopHeader'
import Home from '../home/Home'
//antd
import { Layout} from 'antd'
const Userlist=React.lazy(()=>import('./Userlist'))
const RoleList=React.lazy(()=>import('../right-manage/RoleList'))
const RightList=React.lazy(()=>import('../right-manage/RightList'))
const Nopermission=React.lazy(()=>import('../nopermission/Nopermission'))
const Workmanage=React.lazy(()=>import('./Workmanage'))
const {Content } = Layout;
//css

export default function NewSandBox() {
  return (
    <Layout>
        <SideMenu></SideMenu>
        <Layout>
          <TopHeader></TopHeader>
          <Content style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: 'white',
          }}>
            <Suspense>
              <Switch>
                  <Route path="/home" component={Home}/>
                  <Route path="/user-manage/userlist" component={Userlist}/>
                  <Route path="/user-manage/worklist" component={Workmanage}/>
                  <Route path="/right-manage/role/list" component={RoleList}/>
                  <Route path="/right-manage/right/list" component={RightList}/>
                  <Redirect from="/" to="/home" exact/>
                  <Route path='*' component={Nopermission}/>
             </Switch>
             </Suspense>
          </Content>
        </Layout>
    </Layout>
  )
}
