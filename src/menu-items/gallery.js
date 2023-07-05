// assets

import { PictureOutlined } from '@ant-design/icons';

// icons
const icons = {
  PictureOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const gallery = {
  id: 'group-dashboard',
  title: 'Gallery',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Gallery',
      type: 'item',
      // url: '/dashboard/default',
      icon: icons.PictureOutlined,
      breadcrumbs: false
    }
  ]
};

export default gallery;
