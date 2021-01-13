import React, { useEffect, useState } from 'react';
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
  const [menu, setMenu] = useState<IRoute[]>([]);
  const [value, setvalue] = useState<IRoute>();
  const [path, setPath] = useState<string>();
  function onChange(value: any, path: string, menus?: IRoute[]) {
    menus ? setMenu(menus) : setMenu([]);
    setvalue(value)
    setPath(path);
  }
  
  useEffect(() => {
    if (window.location.pathname) {
      const menuArray = window.location.pathname.split('/');
      const tabs = routes.find((item: IRoute, index: number) => item.path.split('/')[1] === menuArray[1]);
      if (tabs?.children) {
        setMenu(tabs.children)
      } else {
        setMenu([])
      }
      setvalue(tabs!)
      setPath(window.location.pathname);
    }
  }, [])

  return (
    <div className="index">
      <div className="index-header">
        <Header onChange={(value, path, menus) => { onChange(value, path, menus) }} />
      </div>
      <div className="main">
        <div className="main-left">
          <Side menu={menu} value={value} onChange={(value) => { setPath(value) }} />
        </div>
        <div className="main-right">
          {/* <RightHeader /> */}
          <Route children={createRoute(routes)} />
        </div>
      </div>
    </div>
  );
}

export default Index;
