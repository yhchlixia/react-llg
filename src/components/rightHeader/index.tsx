import { Breadcrumb } from "antd";
import React, { useEffect, useState } from "react";
import { IRoute } from "../../content";
import { routes } from "../../route/router";
import './index.less'

interface IRightHeader {
  onChange?: () => void;
}

const RightHeader = (props: IRightHeader) => {
  const [menus, setMenus] = useState<string[]>([])
  const [time, setTime] = useState(new Date().getTime());

  useEffect(() => {
    if (window.location.pathname) {
      const timeNew = new Date().getTime();
      setTime(timeNew);
      const menuArray = window.location.pathname.split('/');
      const tabs = getMenus(routes, menuArray, 0);
      setMenus(tabs.split(','));
    }
  }, [window.location.pathname])

  const getMenus = (route: IRoute[], menuArray: string[], index: number): string => {
    const value = route.filter((item: IRoute) => menuArray[index + 1] === item.path.split('/')[1]);
    const name = value[0].name;
    if (value[0].children) {
      index += 1
      return name + ',' + getMenus(value[0].children, menuArray, index)
    } else {
      return name
    }
  }

  return (
    <div>
      {/* <iframe title='iframe' src={`https://chp.shadiao.app/api.php?time=${time}`} frameBorder={0} width="100%"></iframe> */}
      <div className="right-header-breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          {
            menus && menus.length > 0 && menus.map((item: string, index: number) => {
              return (
              <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
              )
            })
          }
        </Breadcrumb>
      </div>
      <div className="right-header-label">
        <div className="right-header-label-p" style={{width: 150}}>
          {menus[menus.length-1]}
        </div>
        <div className="right-header-label-red"></div>
      </div>
    </div>
  )
}

export default RightHeader;