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
        We meet on Second Saturdays from 10:30am to 12:30pm to share our writing
        and get friendly feedback. Occasionally, our meeting date changes due to
        room scheduling conflicts. See the{" "}
        <a href="#meeting-dates">meeting dates for 2025 below</a>.
      </p>
      <p>
        <b>Note: This is our new meeting location as of Nov 2024!</b>
        <br />
        23685 Marble Quarry Rd
        <br />
        Columbia, CA 95310
        <br />
        <a href="https://maps.app.goo.gl/qwdtyF9ViTyyPAmn9">Google Maps</a>
      </p>
      <p>
        <b>Directions</b>
        <br />
        Take Parrotts Ferry Rd to Marble Quarry Road, make a right into the Gold
        Springs Estates complex. Stay on the road as it turns to the right&
        watch for Club House on your left. Parking in front, to the left of the
        building & another lot across the street.
      </p>
      <p>
        {" "}
        If you'd like that all-important feedback, then bring no more than 4
        pages, 12 pt font, double-spaced, 10 copies.
      </p>
      <h2 id="meeting-dates">Upcoming 2025 Dates</h2>
      <ul>
        <li>Saturday, Feb 8th, 2025</li>
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
