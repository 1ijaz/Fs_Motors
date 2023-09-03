import * as React from 'react';
export const Login = () => {
  const [showRegisterForm, setShowRegisterForm] = React.useState(false);

  const handleRegisterClick = () => {
    setShowRegisterForm(!showRegisterForm);
  };
  return (
    <>
      <div className="container mt-5">
        {!showRegisterForm && (
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">Login</div>
                <div className="card-body">
                  <form>
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
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </div>
                  </form>
                  <hr className="my-4" />
                  <p className="text-center">Or login with</p>
                  <div className="text-center">
                    <a href="#" className="btn btn-outline-primary btn-floating mx-1">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#" className="btn btn-outline-danger btn-floating mx-1">
                      <i className="fa fa-google"></i>
                    </a>
                    <a href="#" className="btn btn-outline-secondary btn-floating mx-1">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </div>
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
