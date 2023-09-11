// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Investors',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Plan for Investor',
      type: 'item',
      //   url: '/sample-page',
      icon: icons.ChromeOutlined
    },
    {
      id: 'sample-page',
      title: 'Manage Investors',
      type: 'item',
      url: '/manage-investors',
      icon: icons.ChromeOutlined
    }
    // {
    //   id: 'documentation',
    //   title: 'Documentation',
    //   type: 'item',
    //   url: 'https://codedthemes.gitbook.io/mantis/',
    //   icon: icons.QuestionOutlined,
    //   external: true,
    //   target: true
    // }
  ]
};

export default support;
