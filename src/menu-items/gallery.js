// assets

import { PictureOutlined } from '@ant-design/icons';

// icons
const icons = {
  PictureOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const gallery = {
  id: 'gallery-dashboard',
  title: 'Gallery',
  type: 'group',
  children: [
    {
      id: 'gallery',
      title: 'Gallery',
      type: 'item',
      url: '/gallery',
      icon: icons.PictureOutlined,
      breadcrumbs: false
    }
  ]
};

export default gallery;
