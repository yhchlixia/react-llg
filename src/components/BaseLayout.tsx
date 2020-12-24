import React from "react";

const BaseLayout = (props: any) => {
  return (
    <div className="base-layout">
      {props.children}
    </div>
  )
}

export default BaseLayout;