import React, { useState } from 'react';

export const Navigation = () => {
  const [activeNavItem, setActiveNavItem] = useState(0); // Default to the first nav item

  const navItems = [
    { text: 'Home', link: '#' },
    { text: 'About', link: '#', subItems: ['About Us', 'Our Team', 'History'] },
    { text: 'Locations', link: '#' },
    { text: 'Menus', link: '#' },
    { text: 'Catering', link: '#' },
    { text: 'Reserve', link: '#' }
  ];

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
            style={{
              fontFamily: 'Brush Script MT, cursive',
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#ffffff'
            }}
          >
            FS Motors
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              {navItems.map((item, index) => (
                <li className="nav-item" key={index}>
                  {item.subItems ? (
                    <div className={`nav-item dropdown ${activeNavItem === index ? 'active' : ''}`}>
                      <a
                        className={`nav-link dropdown-toggle mx-2 ${activeNavItem === index ? 'active' : ''}`}
                        href={item.link}
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded={activeNavItem === index ? 'true' : 'false'}
                        onClick={() => handleNavItemClick(index)}
                      >
                        {item.text}
                      </a>
                      <div className={`dropdown-menu ${activeNavItem === index ? 'show' : ''}`} aria-labelledby="navbarDropdownMenuLink">
                        {item.subItems.map((subItem, subIndex) => (
                          <a className="dropdown-item" href={`#${subItem}`} key={subIndex}>
                            {subItem}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      className={`nav-link mx-2 ${activeNavItem === index ? 'active' : ''}`}
                      aria-current={activeNavItem === index ? 'page' : null}
                      href={item.link}
                      onClick={() => handleNavItemClick(index)}
                    >
                      {item.text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
