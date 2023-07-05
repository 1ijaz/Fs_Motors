// assets
import { RiseOutlined } from '@ant-design/icons';

// icons
const icons = {
  RiseOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const profit = {
  id: 'authentication',
  title: 'Profit',
  type: 'group',
  children: [
    {
      id: 'login1',
      title: 'Company Profit',
      type: 'item',
      // url: '/login',
      icon: icons.RiseOutlined
    },
    {
      id: 'register1',
      title: 'Register',
      type: 'item',
      //  url: '/register',
      icon: icons.RiseOutlined
    }
  ]
};

export default profit;
