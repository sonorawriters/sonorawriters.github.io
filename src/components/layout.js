import * as React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            youtube
            facebook
          }
        }
      }
    }
  `);

  const social = site.siteMetadata.social;

  return (
    <div>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">
          {" "}
          <h1 className="main-heading">
            <Link to="/">{title}</Link>
          </h1>
        </header>
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
      <footer>
        <p>© {new Date().getFullYear()} Sonora Writers Group</p>
        <div class="social-media">
          <a href={`https://youtube.com${social?.youtube || ``}`}>
            <svg
              id="youtube-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="#2f4c54"
                d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
              />
            </svg>
          </a>
          <a href={`https://www.facebook.com${social?.facebook || ``}`}>
            <svg
              id="facebook-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="#2f4c54"
                d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
              />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
