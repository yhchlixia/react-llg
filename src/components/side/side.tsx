import { Menu } from 'antd';
import React from 'react';
import UIIMage from '../../ui/UIImage';
import './side.less';
import { Link } from 'react-router-dom';
import { IMenu } from '../../content';
interface IValue {
  id: number;
  label: string;
}

interface ISide {
  menu: IMenu[];
  value: IValue;
  onChange?: () => void;
}
const Side = (props: ISide) => {
  const { value, menu } = props;
  return (
    <div className="side">
      <div className="side-menu">
        <div className="side-menu-title">
          {value.label}
        </div>
        {
          menu && menu.length > 0 ? (
            <Menu style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', margin: '5px 0'}}>
              {
                menu.map((item: any, index: number) => (
                  <Menu.Item key={index} className="side-menu-li">
                    <Link to={item.path}>
                      <div style={{display: 'inline-block', width: '19%', textAlign: 'center'}}><UIIMage type="dot2" width={23} height={19} /></div>
                      <span style={{color: '#216ba8', fontWeight: 'bold', cursor:'pointer'}}>{item.label}</span>
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
