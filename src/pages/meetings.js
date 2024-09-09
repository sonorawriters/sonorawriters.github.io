import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const MeetingsPage = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  return (
    <Layout location={location} title={siteTitle}>
      <h1>Meetings</h1>
      <p>
        We meet on Second Saturdays from 10:30am to 12:30pm for a friendly peer
        critique. Occasionally, our meeting date changes due to room scheduling
        conflicts. See the{" "}
        <a href="#meeting-dates">meeting dates for 2024 below</a>.
        <br />
        <br />
        <b>Jamestown Community Hall</b>
        <br /> 18250 Main St.
        <br /> Jamestown, CA 95327
        <br />
        <a href="https://maps.app.goo.gl/RX6uZ3Fy43uXdT8e8">Google Maps</a>
      </p>
      <p>
        {" "}
        If you'd like that all-important feedback, then bring no more than 4
        pages, 12 pt font, double-spaced, 10 copies.
      </p>
      <h2 id="meeting-dates">Upcoming 2024 Dates</h2>
      <ul>
        <li>Saturday, September 14, 2024 </li>
        <li>Saturday, October 12, 2024 </li>
        <li>Saturday, November 9, 2024</li>
        <li>Saturday, December 7, 2024</li>
      </ul>
      <iframe
        id="googlecalendar"
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&showNav=0&mode=AGENDA&showDate=0&showTz=0&showPrint=0&showTabs=0&showCalendars=0&src=NDUzN2Y5NWEwZjFhZjdkMjZkMDk2NjcxYWU0N2QxNjQzMmI4YzI4MGJlYjhmZTc3M2Y3ZTUxNTBiZjk0MWE2NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23E4C441"
        frameborder="0"
        scrolling="no"
      ></iframe>

      <a href="https://calendar.google.com/calendar/u/0?cid=NDUzN2Y5NWEwZjFhZjdkMjZkMDk2NjcxYWU0N2QxNjQzMmI4YzI4MGJlYjhmZTc3M2Y3ZTUxNTBiZjk0MWE2NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t">
        Add these events to your Google Calendar.
      </a>
    </Layout>
  );
};

export default MeetingsPage;

export const Head = () => <Seo title="Sonora Writers Group Meetings" />;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          email
          youtube
          facebook
        }
      }
    }
  }
`;
