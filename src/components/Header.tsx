import { Divider, Dropdown, Menu } from 'antd';
import React, { useState } from 'react';
import UIIMage from '../ui/UIImage';
import './Header.less';
import { Link } from 'react-router-dom';
import { IMenu } from '../content';

interface IHeader {
  onChange?: (value: any, menus: any) => void
}

const Header = (props: IHeader) => {
  const menus: IMenu[] = [
    {
      id: 0,
      label: '实验室简介',
      path: '/laboratory',
    }, {
      id: 1,
      label: '研究方向',
      path: '/direction',
    }, {
      id: 2,
      label: '学术成果',
      path: '/paper',
    }, {
      id: 3,
      label: '专利与著作权',
      path: '/patant',
    }, {
      id: 4,
      label: '发布软件',
      path: '/software',
    }, {
      id: 5,
      label: '师生队伍',
      path: '/team',
    }, {
      id: 6,
      label: '人才培养',
      path: '/culture',
    }, {
      id: 7,
      label: '媒体报道',
      path: '/report',
    }, {
      id: 8,
      label: '联系我们',
      path: '/contact',
    }
  ]

  function getMenuItem(index: number) {
    let menu: IMenu[] = [];
    switch (index) {
      case 2:
        menu = [{ id: 21, label: '期刊论文', path: '/paper/periodical' }, { id: 22, label: '会议论文', path: '/paper/academic' }];
        break;
      case 3:
        menu = [{ id: 31, label: '发明专利', path: '/patant/invention' }, { id: 32, label: '软件著作权', path: '/patant/copyright' }];
        break;
      case 5:
        menu = [{ id: 51, label: '学术队伍', path: '/team/academic' }, { id: 52, label: '工程队伍', path: '/team/enginner' }];
        break;
      case 6:
        menu = [{ id: 61, label: '往届毕业生', path: '/culture/pastGraduate' }];
        break;
      default: 
        break;
    }
    return menu;
  }

  function getMenu(value: number) {
    const menusHover = getMenuItem(value)
    let menu = (<div></div>)
    if (menusHover && menusHover.length > 0) {
      menu = (
        <Menu style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
          {
            menusHover.map((item: any, index: number) => (
              <Menu.Item key={index}>
                <Link to={item.path}><span onClick={() => { onChange(menus[value]) }}>{item.label}</span></Link>
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
              <Dropdown overlay={getMenu(index)}><Link to={item.path}><span onClick={() => { onChange(item) }} className="label" style={{cursor: 'pointer'}} title={item.label}>{item.label}</span></Link></Dropdown>
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