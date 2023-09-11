// assets
import {
  CheckCircleOutlined,
  HomeOutlined,
  BarcodeOutlined,
  ShoppingCartOutlined,
  CarOutlined,
  LoadingOutlined,
  MessageOutlined
} from '@ant-design/icons';

// icons
const icons = {
  CarOutlined,
  ShoppingCartOutlined,
  BarcodeOutlined,
  HomeOutlined,
  LoadingOutlined,
  CheckCircleOutlined,
  MessageOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Car Logs',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'New Aquision(Add car)',
      type: 'item',
      url: '/add-car',
      icon: icons.CarOutlined,
      breadcrumbs: false
    },
    {
      id: 'util-color',
      title: 'WorkShop',
      type: 'item',
      url: '/car-details-admin',
      icon: icons.ShoppingCartOutlined
    },
    {
      id: 'util-shadow',
      title: 'Showroom',
      type: 'item',
      // url: '/shadow',
      icon: icons.HomeOutlined
    },
    {
      id: 'ant-icons',
      title: 'Cars Sold',
      type: 'item',
      // url: '/icons/ant',
      icon: icons.CheckCircleOutlined,
      breadcrumbs: false
    }
  ]
};

export default utilities;
