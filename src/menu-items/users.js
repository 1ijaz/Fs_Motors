// assets

import { UserOutlined } from '@ant-design/icons';

// icons
const icons = {
  UserOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const users = {
  id: 'group-dashboard',
  title: 'Users',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Manage User',
      type: 'item',
      // url: '/dashboard/default',
      icon: icons.UserOutlined,
      breadcrumbs: false
    }
  ]
};

export default users;
