import { Menu } from 'antd';
import React, { useEffect } from 'react';
import UIIMage from '../../ui/UIImage';
import './side.less';
import { Link } from 'react-router-dom';
import { IMenu, IRoute } from '../../content';
import { routes } from '../../route/router';

interface ISide {
  menu: IRoute[];
  value: IRoute;
  onChange?: (path: string) => void;
}
const Side = (props: ISide) => {
  const { value, menu } = props;

  function onChange(path: string) {
    props.onChange && props.onChange(path);
  }
  return (
    <div className="side">
      <div className="side-menu">
        <div className="side-menu-title">
          {value.name}
        </div>
        {
          menu && menu.length > 0 ? (
            <Menu style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', margin: '5px 0'}}>
              {
                menu.map((item: any, index: number) => (
                  <Menu.Item key={index} className="side-menu-li" onClick={() => { onChange(value.path + item.path) }}>
                    <Link to={value.path + item.path}>
                      <div style={{display: 'inline-block', width: '19%', textAlign: 'center'}}><UIIMage type="dot2" width={23} height={19} /></div>
                      <span style={{color: '#216ba8', fontWeight: 'bold', cursor:'pointer'}}>{item.name}</span>
                    </Link>
                  </Menu.Item>
                ))
              }
            </Menu>) : null
        }
      </div>
      <UIIMage type="left_bg" width={250} height={735} />
    </div>
  );
}

export default Side;
