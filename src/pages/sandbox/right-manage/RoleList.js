import React, { useState } from 'react'
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload ,Steps,Form, Input, Select} from 'antd';
const { Option } = Select;
export default function RoleList() {
  const fileList = []
  const [current,setCurrent]=useState(0)//控制步骤条
  const [form] = Form.useForm()
  const imginfo={imgname:'',imgclass:'',imgstate:0,auther:''}//图片信息
  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  };
  const handlenext=()=>{
    if(current===0){
      form.validateFields().then(res=>
        {
          console.log(res)
          imginfo.imgname=res.imgname
          imginfo.imgclass=res.imgclass
          console.log(imginfo);
          setCurrent(current+1)
        }).catch((err)=>{
          console.log(err)
        })
    }else{
      setCurrent(current+1)
    }
  }
  return (
    <div>
      <h1>作品提交</h1>
    <Steps
    current={current}
    items={[
      {
        title: '基本信息',
        description:'图片名称，分类',
      },
      {
        title: '图片上传',
        description :'注意图片名称要与第一步图片名称一致',
      },
      {
        title: '图片提交',
        description :'审核通过后将在作品列表显示',
      },
    ]}
  />
    <div style={{margin:"20px"}}>
    <div className={current===0?'':'hidden'}>
     <Form
      {...layout}
      form={form}
      name="control-hooks"
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="imgname"
        label="图片名称"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="imgclass"
        label="图片分类"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          <Option value="phoneimg">手机背景</Option>
          <Option value="computerimg">电脑背景</Option>
          <Option value="headimg">头像</Option>
        </Select>
      </Form.Item>
      </Form>
     </div>
     <div className={current===1?'':'hidden'}>
     <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      defaultFileList={[...fileList]}
    >
      <Button icon={<UploadOutlined />} className='upload-btn'>上传作品</Button>
    </Upload>
     </div>
     <div className={current===2?'':'hidden'}>

     </div>
    </div>
     
     <div style={{
      marginTop:'10px'
     }}>
      {
        current<2&&<Button onClick={()=>handlenext()}>下一步</Button>
      }
      {
        current===1&&<Button onClick={()=>setCurrent(current-1)}>上一步</Button>
      }
      {
        current===2&&<Button type='primary'>作品已提交</Button>
      }
     </div>
    </div>
  )
}
