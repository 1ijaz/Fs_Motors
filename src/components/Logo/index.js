import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';

// material-ui
import { Typography, Chip, Stack } from '@mui/material';
//import { useDispatch, useSelector } from 'react-redux';

// project import
//import Logo from './Logo';
//import config from 'config';
//import { activeItem } from 'store/reducers/menu';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  //const { defaultId } = useSelector((state) => state.menu);
  //const dispatch = useDispatch();
  return (
    <>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography sx={{ color: 'blue', fontSize: 17 }}>FS</Typography>
        <Chip
          label="MOTORS"
          //  label={process.env.REACT_APP_VERSION}
          size="small"
          sx={{ height: 16, '& .MuiChip-label': { fontSize: '0.625rem', py: 0.25 } }}
          component="a"
          // href="https://github.com/codedthemes/mantis-free-react-admin-template"
          target="_blank"
          clickable
        />
      </Stack>
    </>
    // <ButtonBase
    //   disableRipple
    //   component={Link}
    //   onClick={() => dispatch(activeItem({ openItem: [defaultId] }))}
    //   to={!to ? config.defaultPath : to}
    //   sx={sx}
    // >
    //   <Logo />
    // </ButtonBase>
  );
};

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string
};

export default LogoSection;
