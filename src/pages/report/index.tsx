import { List, Table } from "antd";
import React from "react";
import UIIMage from "../../ui/UIImage";

const Report = (props: any) => {
  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      href: 'https://ant.design',
      title: `ant design part ${i}`,
      time: i + 1,
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        'We supply a series of design principles, ',
    });
  }
  return (
    <div className="report">
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 10,
          showTotal: total => `总共 ${total} 记录`,
        }}
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.title}
            extra={item.time}
            style={{padding: '5px 0', lineHeight: '30px', border: 'none'}}
          >
            <UIIMage type="dot1" size={14} />
            <a style={{color: '#057b8a', marginLeft: 5}} href={item.href}>{item.content}</a>
          </List.Item>
        )} />
    </div>
  )
}

export default Report;