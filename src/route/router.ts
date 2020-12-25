import BaseLayout from "../components/BaseLayout";
import { IRoute } from "../content";
import Academic from "../pages/academic/academic/Academic";
import Periodical from "../pages/academic/periodical/Periodical";
import Direction from "../pages/direction";
import Laboratory from "../pages/laboratory";

export const routes:IRoute[] = [
  {
    path: '/laboratory',
    name: '实验室简介',
    component: Laboratory,
    exact:true
  },
  {
    path: '/direction',
    name: '研究方向',
    component: Direction,
    exact:true
  },
  {
    path: '/paper',
    name: '学术成果',
    component: BaseLayout,
    exact:true,
    redirect: true,
    children: [
      {
        path: '/periodical',
        name: '期刊论文',
        component: Periodical,
        exact: true,
      },
      {
        path: '/academic',
        name: '会议论文',
        component: Academic,
        exact: true,
      },
    ]
  },
  {
    path: '/laboratory',
    name: '专利与著作权',
    component: Direction,
    exact:true
  },
  {
    path: '/laboratory',
    name: '发布软件',
    component: Laboratory,
    exact:true
  },
  {
    path: '/laboratory',
    name: '师生队伍',
    component: Laboratory,
    exact:true
  },
  {
    path: '/laboratory',
    name: '人才培养',
    component: Laboratory,
    exact:true
  },
  {
    path: '/laboratory',
    name: '媒体报道',
    component: Laboratory,
    exact:true
  },
  {
    path: '/laboratory',
    name: '联系我们',
    component: Laboratory,
    exact:true
  }
]