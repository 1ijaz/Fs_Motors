import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
export const Login = () => {
  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-10 col-lg-5 col-xl-5">
              <h2
                style={{
                  fontFamily: 'Brush Script MT, cursive',
                  fontSize: '28px',
                  fontWeight: 'bold'
                  //color: '#ffffff'
                  // textDecoration: 'underline'
                }}
              >
                FS Motors
              </h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5sj1GQGF2vRW7qlA4wEzP2lvhuXO5wyL-tQ&usqp=CAU"
                className="img-fluid"
                alt="Sample"
              />
            </div>
            <div className="col-md-8 col-lg-8 col-xl-6 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                <div className="form-outline mb-4">
                  <Box
                    component="form"
                    sx={{
                      '& > :not(style)': { m: 1, width: '30ch' }
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField id="outlined-basic" label="Email address" variant="outlined" />
                    <TextField id="outlined-basics" label="Password" variant="outlined" />
                  </Box>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <FormControlLabel value="end" control={<Switch color="primary" />} label="Remember Me" labelPlacement="end" />
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', marginLeft: 40 }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Do not have an account?{' '}
                    <a href="#!" className="link-danger">
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div className="text-white mb-3 mb-md-0">Copyright © 2020. All rights reserved.</div>

          <div>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
