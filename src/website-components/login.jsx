import * as React from 'react';
import { useMediaQuery, Button, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Google from 'assets/images/icons/google.svg';
import Twitter from 'assets/images/icons/twitter.svg';
import Facebook from 'assets/images/icons/facebook.svg';
export const Login = () => {
  const [showRegisterForm, setShowRegisterForm] = React.useState(false);
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
  const handleRegisterClick = () => {
    setShowRegisterForm(!showRegisterForm);
  };
  const googleHandler = async () => {
    // login || singup
  };
  const twitterHandler = async () => {
    // login || singup
  };

  const facebookHandler = async () => {
    // login || singup
  };
  function loginClick() {
    localStorage.setItem('isLoginLocalStorage', true);
  }
  return (
    <>
      <div className="container mt-5">
        {!showRegisterForm && (
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">Login</div>
                <div className="card-body">
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input type="text" className="form-control" id="username" name="username" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input type="password" className="form-control" id="password" name="password" required />
                  </div>
                  <div className="d-grid gap-2">
                    <button onClick={loginClick} className="btn btn-primary">
                      Login
                    </button>
                  </div>

                  <hr className="my-4" />
                  <p className="text-center">Or login with</p>
                  <Stack
                    direction="row"
                    spacing={matchDownSM ? 1 : 2}
                    justifyContent={matchDownSM ? 'space-around' : 'space-between'}
                    sx={{ '& .MuiButton-startIcon': { mr: matchDownSM ? 0 : 1, ml: matchDownSM ? 0 : -0.5 } }}
                  >
                    <Button
                      variant="outlined"
                      color="secondary"
                      fullWidth={!matchDownSM}
                      startIcon={<img src={Google} alt="Google" />}
                      onClick={googleHandler}
                    >
                      {!matchDownSM && 'Google'}
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      fullWidth={!matchDownSM}
                      startIcon={<img src={Twitter} alt="Twitter" />}
                      onClick={twitterHandler}
                    >
                      {!matchDownSM && 'Twitter'}
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      fullWidth={!matchDownSM}
                      startIcon={<img src={Facebook} alt="Facebook" />}
                      onClick={facebookHandler}
                    >
                      {!matchDownSM && 'Facebook'}
                    </Button>
                  </Stack>
                </div>
                <div className="card-footer">
                  <button className="btn btn-link" onClick={handleRegisterClick}>
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Registration Form */}
        {showRegisterForm && (
          <div className="row justify-content-center mt-4">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">Register</div>
                <div className="card-body">
                  {/* Add your registration form fields here */}
                  <form>
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">
                        Full Name
                      </label>
                      <input type="text" className="form-control" id="fullName" name="fullName" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">
                        Contact Number
                      </label>
                      <input type="text" className="form-control" id="fullName" name="fullName" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">
                        Password
                      </label>
                      <input type="password" className="form-control" id="fullName" name="fullName" required />
                    </div>
                    {/* Add more registration form fields */}
                    <div className="d-grid gap-2">
                      <button type="submit" className="btn btn-primary">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
