import React, { useEffect } from 'react';
import './index.less';

const Laboratory = () => {

  useEffect(() => {
    window.img = function(value:string) {
      console.log('>>>>>',value)
    }
  },[])

  function img(value?: string) {
    
  }

  const data = "【好公司+策略回顾】<br/>【好公司+】策略模拟盘今年3月以来累计对XX只股票发出信号，胜率为XX%，其中表现最好的是XXXX，持仓收益率达到XX%，表现最差的是XXXX，持仓收益率为XX%。</br></br>我们正在积极寻找优质公司择机介入，请您继续关注我们的策略信号。</br></br>历史数据仅供参考，不代表未来收益。入市有风险，投资需谨慎。<br/><a href='https://ayfileres.yjbtest.com/attachment/public/km-service/760066257526458550' >豫金刚石（300064）分析报告.pdf</a><br/><a href='https://ayfileres.yjbtest.com/attachment/public/km-service/760066257526458553' >组合跟踪报告（医药健康）0831.pdf</a><br/><a href='https://ayfileres.yjbtest.com/attachment/public/km-service/760066257526458558' ><img src='https://ayfileres.yjbtest.com/attachment/public/km-service/760066257526458558' /></a><br/><a href='https://ayfileres.yjbtest.com/attachment/public/km-service/760066257526458559' ><img src='https://ayfileres.yjbtest.com/attachment/public/km-service/760066257526458559' /></a><br/><a href='https://ayfileres.yjbtest.com/attachment/public/km-service/760066257526458561' >热点追踪2020.11.17 .txt</a>"
  let a = data.replace(/(<a.{0,100}><img.*?src=[\"|\']?(.*?)[\"|\']?\s.*?><\/a.*?>)/g, "<span onclick='img(`$2`)'><img src='$2' /></span>");
  return (
    <div className="laboratory">
      <div style={{display: 'flex', width: '200px'}}>
        <div>内容</div>
        <div style={{flex: 1}}>
          <div className="lalala" style={{wordBreak: 'break-all'}} dangerouslySetInnerHTML={{__html: a}}></div>
        </div>
        {/* <span dangerouslySetInnerHTML={{__html: data}}></span> */}
      </div>
    </div>
  );
}

export default Laboratory;
