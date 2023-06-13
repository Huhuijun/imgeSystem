import React from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import Login from '../pages/login/Login'
import NewSandBox from '../pages/sandbox/user-manage/NewSandBox'
import Register from '../pages/login/Register'
export default function IndexRouter() {
  return (
      <div>
        <HashRouter>
             <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/" render={()=>localStorage.getItem("token")?<NewSandBox/>:<Redirect to="/login" />}/>
            </Switch>
        </HashRouter>
       
      </div>
        
  )
}
