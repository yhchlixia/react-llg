import { Breadcrumb } from "antd";
import React from "react";
import { IMenu } from "../../content";

interface IRightHeader {
  menu: IMenu[];
  onChange?: () => void;
}

const RightHeader = (props: IRightHeader) => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export default RightHeader;