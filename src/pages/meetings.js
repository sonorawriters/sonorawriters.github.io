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
        room scheduling conflicts.
      </p>
      <p>
        {" "}
        If you'd like that all-important feedback, then bring no more than 4
        pages, 12 pt font, double-spaced, 10 copies.
      </p>
      <b>
        <span class="c5">Saturday April 11</span>
        <span class="c3">th</span>
        <span class="c5">&nbsp;10:30-12:30</span>
      </b>
      <p>
        <span>Goodness Caf&eacute;,1 S. Washington St</span>
        <span class="c5">.,</span>
        <span class="c2">&nbsp;Sonora, CA 95370</span>
      </p>
      <b>
        <span class="c5">Saturday May 9</span>
        <span class="c3">th</span>
        <span class="c0">&nbsp;10:30-12:30 </span>
      </b>
      <p>
        <span>Goodness Caf&eacute;,1 S. Washington St</span>
        <span class="c5">.,</span>
        <span class="c2">&nbsp;Sonora, CA 95370</span>
      </p>
      <b>
        <span class="c5">Saturday June 13</span>
        <span class="c3">th </span>
        <span class="c0">10:30-12:30</span>
      </b>
      <p>
        <span>Goodness Caf&eacute;,1 S. Washington St., Sonora, CA 95370</span>
      </p>
      <b>
        <span class="c5">Saturday July 11</span>
        <span class="c3">th</span>
        <span class="c5">&nbsp;10:30-12:30,</span>
      </b>
      <p>
        <span>Goodness Caf&eacute;,1 S. Washington St</span>
        <span class="c5">.,</span>
        <span class="c2">&nbsp;Sonora, CA 95370</span>
      </p>
      <b>
        <span class="c5">Saturday August 8</span>
        <span class="c3">th</span>
        <span class="c0">&nbsp;10:30-12:30</span>
      </b>
      <p>
        <span class="c2">
          Goodness Caf&eacute;, 1 S. Washington St., Sonora, CA 95370
        </span>
      </p>
      <b>
        <span class="c5">Saturday September 12</span>
        <span class="c3">th</span>
        <span class="c0">&nbsp;10:30-12:30</span>
      </b>
      <p>
        <span class="c2">
          Goodness Caf&eacute;,1 S. Washington St., Sonora, CA 95370
        </span>
      </p>
      <b>
        <span class="c5">Saturday, October 10</span>
        <span class="c3">th</span>
        <span class="c0">, 10:30-12:30</span>
      </b>
      <p>
        <span class="c2">
          Goodness Caf&eacute;, 1 S. Washington St., Sonora, CA 95370
        </span>
      </p>
      <b>
        <span class="c5">Saturday, November 14</span>
        <span class="c3">th</span>
        <span class="c0">, 10:30-12:30</span>
      </b>
      <p>
        <span class="c2">
          Goodness Caf&eacute;, 1 S. Washington St., Sonora, CA 95370
        </span>
      </p>
      <b>
        <span class="c5">Saturday, December 12</span>
        <span class="c3">th</span>
        <span class="c5">, 10:30-12:30</span>
      </b>
      <p>
        <span class="c2">
          Goodness Caf&eacute;, 1 S. Washington St., Sonora, CA 95370
        </span>
      </p>
      <p class="c1">
        <span class="c0"></span>
      </p>
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
