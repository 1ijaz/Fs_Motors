// project import
//import NavCard from './NavCard';
import Navigation from './Navigation';
import SimpleBar from 'components/third-party/SimpleBar';
import { useState } from 'react';
// ==============================|| DRAWER CONTENT ||============================== //

const DrawerContent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <SimpleBar
      sx={{
        '& .simplebar-content': {
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'gray', // Set the background color to gray
          color: 'white' // Change link color on hover
        },
        '& .simplebar-content a': {
          textDecoration: 'none',
          color: isHovered ? 'blue' : 'white' // Change link color on hover
        },
        '& .simplebar-content a:hover': {
          color: 'red' // Change link color when hovered
        }
      }}
    >
      <Navigation onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
    </SimpleBar>
  );
};
export default DrawerContent;
