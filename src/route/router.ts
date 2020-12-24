import BaseLayout from "../components/BaseLayout";
import { IRoute } from "../content";
import Academic from "../pages/academic/academic/Academic";
import Periodical from "../pages/academic/periodical/Periodical";
import Direction from "../pages/direction";
import Laboratory from "../pages/laboratory";

export const routes:IRoute[] = [
  {
    path: '/laboratory',
    component: Laboratory,
    exact:true
  },
  {
    path: '/direction',
    component: Direction,
    exact:true
  },
  {
    path: '/paper',
    component: BaseLayout,
    exact:true,
    children: [
      {
        path: '/paper/academic',
        component: Academic,
        exact: true,
      },
      {
        path: '/paper/periodical',
        component: Periodical,
        exact: true,
      }
    ]
  },
  {
    path: '/laboratory',
    component: Direction,
    exact:true
  },
  {
    path: '/laboratory',
    component: Laboratory,
    exact:true
  },
  {
    path: '/laboratory',
    component: Laboratory,
    exact:true
  },
  {
    path: '/laboratory',
    component: Laboratory,
    exact:true
  },
  {
    path: '/laboratory',
    component: Laboratory,
    exact:true
  },
  {
    path: '/laboratory',
    component: Laboratory,
    exact:true
  }
]