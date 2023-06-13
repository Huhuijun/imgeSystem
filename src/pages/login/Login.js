import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,message } from 'antd';
import'./login.css'

export default function Login(props) {
  
  const userslist=[//测试数据
    {
      name:"user1",
      password:"111111"
    },
    {
      name:"admin",
      password:"111111"
    },
    {
      name:"user2",
      password:"111111"
    },
    {
      name:"user3",
      password:"111111"
    },
    {
      name:"user4",
      password:"111111"
    },
    {
      name:"user5",
      password:"111111"
    },
  ]
  const onFinish = (values) => {//处理用户输入的用户名和密码
    console.log('Received values of form: ', values);
    /*axios.get(`/api?name=${values.username}&password=${values.password}`).then(
      (res)=>{
        //请求成功，判断返回信息
        if(res.data.length===0){
          //无用户
        }else{
          localStorage.setItem("token",res.data[0])
          props.history.push("/")
        }
      })*/
    const confirm=userslist.filter((item)=>{
      //console.log(item.name)
      //console.log(values.username)
      //console.log(item.name===values.username)
      return item.name===values.username&&item.password===values.password
    })
    console.log(confirm)
    if(confirm.length>0){
      localStorage.setItem("token",JSON.stringify(values))
      props.history.push("/")
    }else{
        message.error("登录失败，请检查用户名或密码是否正确！")
    }
    
  };
  return (
    <div className='login'>
        <div className='login-con'>
          <div className='login-title'>组件图片发布管理系统</div>
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={(values)=>onFinish(values)}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="#/register">register now!</a>
      </Form.Item>
    </Form>
        </div>
    </div>
  )
}
