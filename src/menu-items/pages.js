// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'ManageCars',
  title: 'Manage Cars',
  type: 'group',
  children: [
    {
      id: 'manageCar',
      title: 'Car',
      type: 'item',
      url: '/car',
      icon: icons.LoginOutlined,
      breadcrumbs: false
    },
    {
      id: 'soldCars',
      title: 'Sold Cars',
      type: 'item',
      url: '/sold-cars',
      icon: icons.ProfileOutlined,
      breadcrumbs: false
    }
  ]
};

export default pages;
