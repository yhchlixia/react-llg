import BaseLayout from "../components/BaseLayout";
import { IRoute } from "../content";
import Academic from "../pages/academic/academic/Academic";
import Periodical from "../pages/academic/periodical/Periodical";
import Contact from "../pages/contact";
import CulturePastGraduate from "../pages/culture/pastGraduate";
import CultureDetail from "../pages/culture/pastGraduate/detail";
import Direction from "../pages/direction";
import Laboratory from "../pages/laboratory";
import Copyright from "../pages/patant/copyright";
import Invention from "../pages/patant/invention";
import Report from "../pages/report";
import Software from "../pages/software";
import TeamAcademic from "../pages/team/academic";
import TeamEnginner from "../pages/team/enginner";

export const routes:IRoute[] = [
  {
    path: '/laboratory',
    name: '实验室简介',
    component: Laboratory,
  },
  {
    path: '/direction',
    name: '研究方向',
    component: Direction,
  },
  {
    path: '/paper',
    name: '学术成果',
    component: BaseLayout,
    redirect: true,
    children: [
      {
        path: '/periodical',
        name: '期刊论文',
        component: Periodical,
      },
      {
        path: '/academic',
        name: '会议论文',
        component: Academic,
      },
    ]
  },
  {
    path: '/patant',
    name: '专利与著作权',
    component: BaseLayout,
    redirect: true,
    children: [
      {
        path: '/invention',
        name: '发明专利',
        component: Invention,
      },
      {
        path: '/copyright',
        name: '软件著作权',
        component: Copyright,
      },
    ]
  },
  {
    path: '/software',
    name: '发布软件',
    component: Software,
  },
  {
    path: '/team',
    name: '师生队伍',
    component: BaseLayout,
    redirect: true,
    children: [
      {
        path: '/academic',
        name: '学术队伍',
        component: TeamAcademic,
      },
      {
        path: '/enginner',
        name: '工程队伍',
        component: TeamEnginner,
      },
    ]
  },
  {
    path: '/culture',
    name: '人才培养',
    component: BaseLayout,
    redirect: true,
    children: [
      {
        path: '/pastGraduate',
        name: '往届毕业生',
        component: BaseLayout,
        redirect: true,
        children: [
          {
            path: '/list',
            name: '往届毕业生',
            component: CulturePastGraduate,
          },
          {
            path: '/:id',
            name: '往届毕业生详情',
            component: CultureDetail,
          }
        ]
      }
    ]
  },
  {
    path: '/report',
    name: '媒体报道',
    component: Report,
  },
  {
    path: '/contact',
    name: '联系我们',
    component: Contact,
  }
]