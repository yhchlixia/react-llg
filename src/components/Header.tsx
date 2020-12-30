import { Divider, Dropdown, Menu } from 'antd';
import React, { useState } from 'react';
import UIIMage from '../ui/UIImage';
import './Header.less';
import { Link } from 'react-router-dom';
import { IMenu, IRoute } from '../content';
import { routes } from '../route/router';

interface IHeader {
  onChange?: (value: any, path: string, menus?: IRoute[]) => void
}

const Header = (props: IHeader) => {

  function getMenu(value: IRoute) {
    const menusHover = value.children;
    let menu = (<div></div>)
    if (menusHover && menusHover.length > 0) {
      menu = (
        <Menu style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
          {
            menusHover.map((item: any, index: number) => (
              <Menu.Item key={index}>
                <Link to={value.path + item.path}><span onClick={() => { onChange(value, value.path + item.path) }}>{item.name}</span></Link>
              </Menu.Item>
            ))
          }
        </Menu>
      );
    }
    return menu;
  }

  function onChange(item: IRoute, path?: string) {
    if (item) {
      const pathName = path ? path : item.children ? item.path + item.children[0].path : item.path;
      props.onChange && props.onChange(item, pathName, item.children)
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
          routes.map((item: any, index: number) => (
            <div className="header-menu-li" key={item.id}>
              <Dropdown overlay={getMenu(item)}><Link to={item.path}><span onClick={() => { onChange(item) }} className="label" style={{cursor: 'pointer'}} title={item.name}>{item.name}</span></Link></Dropdown>
              {
                routes.length == index + 1 ? null : <Divider type="vertical" style={{height: 18, width: 3, margin: '0 10px 0 20px', backgroundColor: '#ffffff'}}></Divider>
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Header;