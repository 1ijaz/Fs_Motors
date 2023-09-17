import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import { AddCars } from 'components/car-details/AddCars';
import CarDetailAdmin from 'components/car-details/CarDetailAdmin';
import ManageUsers from 'components/users/ManageUsers';
import ManageInvestors from 'components/Investors/ManageInvestors';
import ManageWorkshops from 'components/Workshop/ManageWorkshops';
import ManageShowroom from 'components/Showroom/ManageShowroom';
import ManageCars from 'components/Car/ManageCars';
import SoldCars from 'components/Car/SoldCars';
// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page

// render - utilities
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));
import CarCompanyPolicy from './../components/Investors/CarCompanyPolicy';
import CarImageGallery from './../components/Gallery/CarImageGallery';

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
      path: '/manage-workShop',
      element: <ManageWorkshops />
    },
    {
      path: '/manage-investors',
      element: <ManageInvestors />
    },
    {
      path: '/manage-showRoom',
      element: <ManageShowroom />
    },
    {
      path: '/manage-car',
      element: <ManageCars />
    },
    {
      path: '/sold-cars',
      element: <SoldCars />
    },
    {
      path: '/plan-for-investors',
      element: <CarCompanyPolicy />
    },
    {
      path: 'add-car',
      element: <AddCars />
    },
    {
      path: '/gallery',
      element: <CarImageGallery />
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
