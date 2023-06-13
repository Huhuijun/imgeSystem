import React, { useState } from 'react'
import { Button, Image  } from 'antd';
import p1 from './p1.png'
export default function Workmanage() {
  const [images, setImages] = useState([//一次请求2个数据
    { imgname: 'p1.png', imgurl: p1, auther: 'user1' ,imgclass:'头像',imgstate:0},
    { imgname: 'p2.png', imgurl: p1, auther: 'user1' ,imgclass:'头像',imgstate:0},
  ]);

  const handleApprove = (name,n) => {
    const updatedImages = images.map((image) => {
      if (image.imgname === name) {
        return { ...image, imgstate: n};
      } else {
        return image;
      }
    });
    setImages(updatedImages);
  };

  const nextlist=()=>{
    //axios
    console.log('nextlist')
  }

  return (
    <div>
      <h1>图片审核</h1>
      <div style={{height: '75vh'}}>
        {images.map((image) => (
        <div key={image.imgname} className='imgstate-list'>
           <Image width={200} height={250} src={image.imgurl} alt={image.imgname} />
           <div style={{marginLeft:'50px',alignItems:'center'}}>
             <p>图片名称：{image.imgname}</p>
             <p>作者：{image.auther}</p>
             <p>类别：{image.imgclass}</p>
            <Button type='primary' onClick={() => handleApprove(image.imgname,1)}>审核通过</Button>
            <Button type='primary' onClick={() => handleApprove(image.imgname,2)} style={{marginLeft:'10px'}}>不通过</Button>
             <p>审核状态:{image.imgstate===1?'通过':image.imgstate===2?'未通过':'未审核'}</p>
           </div>
        </div>
      ))}
      </div>
      <Button type='primary' onClick={nextlist} className='next-list'>下一组</Button>
    </div>
  );
}
