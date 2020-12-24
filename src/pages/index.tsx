import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Header from '../components/Header';
import RightHeader from '../components/rightHeader';
import Side from '../components/side/side';
import { IMenu } from '../content';
import { routes } from '../route/router';
import './index.less'

const Index = () => {
  const [menu, setMenu] = useState<any[]>([]);
  const [value, setvalue] = useState<IMenu>({ id: 0, label: '实验室简介', path: '/laboratory' });
  function onChange(value: any, menus: IMenu[]) {
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
          <RightHeader menu={menu} />
          <Switch>
            { // 利用render 渲染子路由
              routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props) => { // 利用render 方法处理
                    if (route.children) {
                      return (
                        <div>
                          <route.component props={props}></route.component>
                          <Switch>
                            {
                              route.children.map((child, i) => (
                                <Route
                                  key={i}
                                  path={child.path}
                                  exact={child.exact}
                                  component={child.component}
                                />
                              ))
                            }
                            <Redirect to={route.children[0].path}></Redirect>
                          </Switch>
                        </div>
                      )
                    } else {
                      return (
                        <route.component props={props}></route.component>
                      )
                    }
                  }}
                />
              ))
            }
            <Redirect from='/' to='/laboratory'></Redirect>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Index;
