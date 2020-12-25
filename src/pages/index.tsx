import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Header from '../components/Header';
import RightHeader from '../components/rightHeader';
import Side from '../components/side/side';
import { IMenu, IRoute } from '../content';
import { routes } from '../route/router';
import './index.less'

const createRoute = (routes: IRoute[]) => {
  return (
    <Switch>
      {
        routes.map((route, index) => 
          createFixRoute(route, index)
        )
      }
      <Redirect from='/*' to='/laboratory' />
    </Switch>
  );
};
//该组件通过递归的方式，将所有route中带有children路由的父路由进行解构,最终用createBasicRoute函数来渲染
const createFixRoute = (route: IRoute, index: any) => {
  const { path, component: RouteComponent, children } = route;
  if (children) {
    return (
      <Route
        key={index}
        path={path}
        children={props => {
          let redirectPath = null;
          return <RouteComponent {...props}>
            <Switch>
              {children.map((child, index2) => {
                const { path: childPath, redirect } = child;
                if (redirect){
                  redirectPath = childPath;
                }
                return createFixRoute({...child, path: path + childPath}, `${index}-${index2}`);
              })}
              <Redirect from={`${path}`} to={`${path}${redirectPath || children[0].path}`} />
            </Switch>
          </RouteComponent>;
        }}
      />
    );
  } else {
    return createBasicRoute(route, index);
  }
};

const createBasicRoute = (route: IRoute, index: number) => {
  const { path, component: Component } = route;
  return <Route exact key={index} path={path} component={(props: any) => {
    // props.history.listen((path: string) => {    //  路由监听
    //   ...
    // });
    return <Component {...props} />;
  }} />;
};

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
          <Route children={createRoute(routes)} />
        </div>
      </div>
    </div>
  );
}

export default Index;
