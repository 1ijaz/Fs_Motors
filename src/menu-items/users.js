// assets

import { UserOutlined } from '@ant-design/icons';

// icons
const icons = {
  UserOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const users = {
  id: 'users-dashboard',
  title: 'Users',
  type: 'group',
  children: [
    {
      id: 'users',
      title: 'Manage User',
      type: 'item',
      url: '/dashboard/users',
      icon: icons.UserOutlined,
      breadcrumbs: false
    }
  ]
};

export default users;
