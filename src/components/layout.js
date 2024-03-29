import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header"> <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1></header>
        <nav className="main-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/meetings">Meetings</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/issues">Issues</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </div>
      <footer>© {new Date().getFullYear()} Sonora Writers Group</footer>
    </div>
  );
};

export default Layout;
