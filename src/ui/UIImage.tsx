import React, { CSSProperties } from 'react';
import { Image } from 'antd';

interface UIImage {
  width?: number | string;
  height?: number | string;
  size?: number | string;
  type: string;
  style?: CSSProperties;
}

const UIIMage = (props: UIImage) => {
  const { type, size = 24, width, height, style } = props;
  return (
    <div className="ui-image" style={{display: 'inline-block'}}>
      <Image style={style} width={width || size} height={height || size} src={`images/${type}.png`} />
    </div>
  )
}

export default UIIMage;