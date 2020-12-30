import React, { useEffect } from 'react';
import { get } from '../../http/axios';
import UIIMage from '../../ui/UIImage';
import './index.less';

const Direction = () => {
  useEffect(() => {
    get({url: '/user/login'}).then(res => {
      debugger
    })
  }, [])
  const directionDetail = {
    imgUrl: 'durition',
    imgName: '实验室研究框架实验图',
    contentLabel: '实验室主要研究智能算法理论、方法及其应用软件，包括学术与工程两大方向：',
    contentType: [
      {
        typeLabel: '学术方向包括：',
        typeLi: [
          '1.智能优化算法理论组：课题组基于鞅论研究算法状态转移与适应值差逼近的平均增益模型，解决了人工蚁群优化算法、演化规划、演化策略等启发式算法的计算时间分析难题；完成了国家自然科学基金、教育部博士点基金等课题；代表作见IEEETCYB、IEEETEVC 、NCA和《中国科学》等。',
          '2.流形优化应用课题组：课题组致力于研究复杂优化问题与算法可控启发式信息的深层次关系，提出了榜样学习策略、收敛速度控制器和启发式关联动态规划等技术，解决了广义旅行商、双层次车辆路径规划等复杂优化问题；完成了国家自然科学基金、省自然科学基金等课题；代表作见IEEE TII、IEEE CIM和INS等学术期刊，入选了ESI。',
          '3.智能化软件工程方法课题组：课题组主要研究智能化软件及其相关软件工程问题求解算法与应用，如路径覆盖测试用例自动生成、软件配置自动配置问题、循环路径测试用例生成、智能化软件测试用例生成与错误修复等相关领域的研究。',
          '4.机器学习课题组。',
        ]
      },
      {
        typeLabel: '工程方向包括：',
        typeLi: [
          '1.计算机视觉组：课题组主要研究图像和视频的高效处理与智能分析算法及其应用，如：图像深度学习检测、人脸检测、人脸识别、人脸跟踪、视频摘要、视频内容检索、答题卡图像智能识别、智能图像边框编码与识别、多角度对象识别、行为理解、林火事件识别、车流计算、特殊事件识别和海量人脸信息搜索等；申请发明专利18项，授权9项。',
          '2.大数据与自然语言处理组：课题组主要研究数值型、文本型、混合型以及多元异构的数据挖掘、分析与预测，特别是针对海量数据处理效率与分析准确性的算法技术与架构设计等；如：客户语音自动评分、客户成功邀请预测、微信公众号挖掘、降水集合预报预测、客户投诉记录智能分析、O2O智能导购、论坛舆情智能监控和英语作文自动评分等。',
          '3.系统仿真与智能优化组：课题组主要研究面向教育的智力游戏和虚拟现实核心技术与系统，完成了中国第一个milestone类图形化编程软件EST和世界第一个AI制造虚拟积木搭建软件，技术成果申请了多项国际和国家发明专利，成功应用于国内多项青少年科技赛事。目前课题组正承担可编程世界等多个游戏化教育系统的研发。',
        ]
      }
    ],
  }
  return (
    <div className="direction">
      <p style={{textAlign: 'center', paddingTop: 20}}>
        <UIIMage width={640} height={300} type={directionDetail.imgUrl} />
      </p>
      <p style={{textAlign: 'center'}}>{directionDetail.imgName}</p>
      <p style={{fontSize: 18}}>{directionDetail.contentLabel}</p>
      {
        directionDetail && directionDetail.contentType && directionDetail.contentType.length > 0 && directionDetail.contentType.map((item: any, index: number) => (
          <div className="content-type" key={index}>
            <p style={{fontSize: 18}}>{item.typeLabel}</p>
            <div>
              {
                item.typeLi && item.typeLi.length > 0 && item.typeLi.map((typeLi: string, i: number) => (
                  <p className="content-type-li" key={i}>{typeLi}</p>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Direction;
