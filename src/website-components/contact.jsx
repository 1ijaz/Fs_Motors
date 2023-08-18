import React from 'react';

export const Contact = () => {
  // const [{ name, email, message }, setState] = useState(initialState);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setState((prevState) => ({ ...prevState, [name]: value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(name, email, message);
  // };
  return (
    <div>
      <section id="contact" className="content-section text-center">
        <div className="contact-section">
          <div className="container">
            <h2>Contact Us</h2>
            <p>Feel free to shout us by feeling the contact form or visiting our social network sites like Fackebook,Whatsapp,Twitter.</p>
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <form className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="exampleInputName2">Name</label>
                    <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail2">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com" />
                  </div>
                  <div className="form-group ">
                    <label htmlFor="exampleInputText">Your Message</label>
                    <textarea className="form-control" placeholder="Description"></textarea>
                  </div>
                  <button type="submit" className="btn btn-default">
                    Send Message
                  </button>
                </form>

                <hr />
                <h3>Our Social Sites</h3>
                <ul className="list-inline banner-social-buttons">
                  <li>
                    <a href="#" className="btn btn-default btn-lg">
                      <i className="fa fa-twitter">
                        {' '}
                        <span className="network-name">Twitter</span>
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn btn-default btn-lg">
                      <i className="fa fa-facebook">
                        {' '}
                        <span className="network-name">Facebook</span>
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn btn-default btn-lg">
                      <i className="fa fa-youtube-play">
                        {' '}
                        <span className="network-name">Youtube</span>
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Issaaf Kattan React Land Page Template. Design by{' '}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div> */}
    </div>
  );
};
