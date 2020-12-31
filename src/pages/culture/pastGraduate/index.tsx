import { Breadcrumb, Divider, List, Table } from "antd";
import React from "react";
import { Link } from 'react-router-dom';

const CulturePastGraduate = (props: any) => {
  const detail = {
    prefession: ['软件工程', '计算机科学', '数学'],
    quota: {
      name: '拟招收名额',
      data: [
      {
        name: '博士',
        content: '1-2人'
      },{
        name: '硕士',
        content: '4人'
      }
    ]
  }
  }
  const listData = [
    {
      id: 1,
      name: '闫宏超',
      year: '2019',
      post: '博士'
    },{
      id: 2,
      name: '包海珠',
      year: '2019',
      post: '硕士'
    },{
      id: 3,
      name: '严浩学',
      year: '2020',
      post: '硕士'
    }
  ]
  return (
    <div className="culture-pastgraguate" style={{padding: '30px 0'}}>
      {
        detail ? 
          <div style={{display: 'flex'}}>
            <div style={{display: 'inline-block', fontSize: 16, color: '#333333'}}>
              招生专业：
              {
                detail.prefession && detail.prefession.length > 0 && detail.prefession.map((item: string, index: number) => {
                  return (
                  <span key={index}>{index === 0 ? '' : <span style={{margin: '0 5px'}}>/</span>}{item}</span>
                  )
                })
              }
            </div>
            <Divider type="vertical" style={{height: '25px', margin: '0 15px'}} />
            <div style={{display: 'inline-block', fontSize: 16, color: '#333333'}}>
              {detail.quota.name}：{
                detail.quota.data.map((item: any, index: number) => {
                  return (
                    <span key={index}>{item.name}：{item.content}</span>
                  )
                })
              }
            </div>
          </div>
        : null
      }
      <div>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            defaultPageSize: 10,
            showTotal: total => `总共 ${total} 记录`,
            size: 'small',
            // showQuickJumper: {goButton: <span>去</span>},
            pageSizeOptions: ['5', '10', '20'],
            showQuickJumper: true,
            showSizeChanger: true,
          }}
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.name}
              extra={<span>{item.year}年{item.post}毕业生</span>}
              style={{padding: '0', lineHeight: '30px', border: 'none'}}
            >
              <Link to={'/culture/pastGraduate/'+ item.id}>{item.name}</Link>
            </List.Item>
          )} />
      </div>
    </div>
  )
}

export default CulturePastGraduate;