import BaseLayout from "../components/BaseLayout";
import { IRoute } from "../content";
import Academic from "../pages/academic/academic/Academic";
import Periodical from "../pages/academic/periodical/Periodical";
import Contact from "../pages/contact";
import CulturePastGraduate from "../pages/culture/pastGraduate";
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
    path: '/patant',
    name: '专利与著作权',
    component: BaseLayout,
    exact:true,
    redirect: true,
    children: [
      {
        path: '/invention',
        name: '发明专利',
        component: Invention,
        exact: true,
      },
      {
        path: '/copyright',
        name: '软件著作权',
        component: Copyright,
        exact: true,
      },
    ]
  },
  {
    path: '/software',
    name: '发布软件',
    component: Software,
    exact:true
  },
  {
    path: '/team',
    name: '师生队伍',
    component: BaseLayout,
    exact:true,
    redirect: true,
    children: [
      {
        path: '/academic',
        name: '学术队伍',
        component: TeamAcademic,
        exact: true,
      },
      {
        path: '/enginner',
        name: '工程队伍',
        component: TeamEnginner,
        exact: true,
      },
    ]
  },
  {
    path: '/culture',
    name: '人才培养',
    component: BaseLayout,
    exact:true,
    redirect: true,
    children: [
      {
        path: '/pastGraduate',
        name: '往届毕业生',
        component: CulturePastGraduate,
        exact: true,
      },
    ]
  },
  {
    path: '/report',
    name: '媒体报道',
    component: Report,
    exact:true
  },
  {
    path: '/contact',
    name: '联系我们',
    component: Contact,
    exact:true
  }
]