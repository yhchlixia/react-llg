import React from "react";

const Contact = (props: any) => {
  const detail = {
    address: '兰州理工大学',
    postCode: '741035',
    email: 'hhhh@163.com'
  }
  return (
    <div className="contact" style={{padding: '30px 0'}}>
      {
        detail ? 
        <div>
          <div style={{marginBottom: 10}}>
            <span>通信地址：</span>
            <span>{detail.address}</span>
          </div>
          <div style={{marginBottom: 10}}>
            <span>邮编：</span>
            <span>{detail.postCode}</span>
          </div>
          <div style={{marginBottom: 10}}>
            <span>Email：</span>
            <span>{detail.email}</span>
          </div>
        </div>
        :
        null
      }
    </div>
  )
}

export default Contact;