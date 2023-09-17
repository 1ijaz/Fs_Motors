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
  title: 'Management',
  type: 'group',
  children: [
    {
      id: 'ant-icons',
      title: 'Manage Car',
      type: 'item',
      url: '/manage-car',
      icon: icons.CarOutlined,
      breadcrumbs: false
    },
    // {
    //   id: 'util-typography',
    //   title: 'New Aquision(Add car)',
    //   type: 'item',
    //   url: '/add-car',
    //   icon: icons.CarOutlined,
    //   breadcrumbs: false
    // },
    {
      id: 'util-color',
      title: 'WorkShop',
      type: 'item',
      url: '/manage-workShop',
      icon: icons.ShoppingCartOutlined
    },
    {
      id: 'util-shadow',
      title: 'Showroom',
      type: 'item',
      url: '/manage-showRoom',
      icon: icons.HomeOutlined
    }
  ]
};

export default utilities;
