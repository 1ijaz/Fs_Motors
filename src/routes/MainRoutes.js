import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import { AddCars } from 'components/car-details/AddCars';
import CarDetailAdmin from 'components/car-details/CarDetailAdmin';
import ManageUsers from 'components/users/ManageUsers';
import ManageInvestors from 'components/Investors/ManageInvestors';
// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page

// render - utilities
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'car-details-admin',
      element: <CarDetailAdmin />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: '/manage-investors',
      element: <ManageInvestors />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'add-car',
      element: <AddCars />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    },
    {
      path: 'dashboard/users',
      element: <ManageUsers />
    }
  ]
};

export default MainRoutes;
