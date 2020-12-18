import React, { useState } from 'react';
import Header from '../components/Header';
import Side from '../components/side/side';
import './index.less'

const Index = () => {
  const [menu, setMenu] = useState<any[]>([]);
  const [value, setvalue] = useState({ id: 0, label: '实验室简介'});
  function onChange(value: any, menus: any) {
    setMenu(menus);
    setvalue(value)
  }
  return (
    <div className="index">
      <div className="index-header">
        <Header onChange={(value, menus) => { onChange(value, menus) }} />
      </div>
      <div className="main">
        <div className="main-left">
          <Side menu={menu} value={value} />
        </div>
        <div className="main-right">
        </div>
      </div>
    </div>
  );
}

export default Index;
