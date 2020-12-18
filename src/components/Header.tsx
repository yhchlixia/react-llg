import { Divider, Dropdown, Menu } from 'antd';
import React, { useState } from 'react';
import UIIMage from '../ui/UIImage';
import './Header.less';

interface IHeader {
  onChange?: (value: any, menus: any) => void
}

const Header = (props: IHeader) => {
  const menus = [
    {
      id: 0,
      label: '实验室简介',
    }, {
      id: 1,
      label: '研究方向',
    }, {
      id: 2,
      label: '学术成果',
    }, {
      id: 3,
      label: '专利与著作权',
    }, {
      id: 4,
      label: '发布软件',
    }, {
      id: 5,
      label: '师生队伍',
    }, {
      id: 6,
      label: '人才培养',
    }, {
      id: 7,
      label: '媒体报道',
    }, {
      id: 8,
      label: '联系我们',
    }
  ]

  function getMenuItem(index: number) {
    let menu: any[] = [];
    switch (index) {
      case 2:
        menu = [{ id: 21, label: '期刊论文' }, { id: 22, label: '会议论文' }];
        break;
      case 3:
        menu = [{ id: 31, label: '发明专利' }, { id: 32, label: '软件著作权' }];
        break;
      case 5:
        menu = [{ id: 51, label: '学术队伍' }, { id: 52, label: '工程队伍' }];
        break;
      case 6:
        menu = [{ id: 61, label: '往届毕业生' }];
        break;
      default: 
        break;
    }
    return menu;
  }

  function getMenu(index: number) {
    const menus = getMenuItem(index)
    let menu = (<div></div>)
    if (menus && menus.length > 0) {
      menu = (
        <Menu style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
          {
            menus.map((item: any, index: number) => (
              <Menu.Item key={index}>
                <span>{item.label}</span>
              </Menu.Item>
            ))
          }
        </Menu>
      );
    }
    return menu;
  }

  function onChange(item: any) {
    if (item) {
      const menu = getMenuItem(item.id)
      props.onChange && props.onChange(item, menu)
    }
  }

  return (
    <div className="header">
      <div className="header-top">
        <div className="header-logo">
          <UIIMage height={59} width={224} type="logo" />
        </div>
        <div className="hrader-name">
          智能算法研究中心
        </div>
      </div>
      <div className="header-menu">
        {
          menus.map((item: any, index: number) => (
            <div className="header-menu-li" key={item.id}>
              <Dropdown overlay={getMenu(index)}><span onClick={() => { onChange(item) }} className="label" style={{cursor: 'pointer'}} title={item.label}>{item.label}</span></Dropdown>
              {
                menus.length == index + 1 ? null : <Divider type="vertical" style={{height: 18, width: 3, margin: '0 10px 0 20px', backgroundColor: '#ffffff'}}></Divider>
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Header;