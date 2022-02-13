import React from 'react';
import {
  Button,
  Tabs,
  Tab,
  Link,
} from 'carbon-components-react';

const LandingPage = () => {
  const props = {
    tabs: {
      selected: 0,
      role: 'navigation',
    },
    tab: {
      role: 'presentation',
      tabIndex: 0,
    },
  };
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <h1 className="landing-page__heading">Metropolitan Museum of Art Image Viewer</h1>
        </div>
      </div>
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs} aria-label="Tab navigation">
            <Tab {...props.tab} label="About">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-md-4 bx--col-lg-7">
                    <p className="landing-page__p">
                      This is an Image Viewer that can be used to browse the vast collection
                      of art owned by the Metropolitan Musuem. 
                    </p>
                    <p className="landing-page__p">
                      The Met Collection features art from over 5000 years of history. The collection
                      features art from the first cities of the ancient world to modern works being
                      created today.
                    </p>
                  </div>
                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                    <img
                      className="landing-page__illo"
                      src={`${process.env.PUBLIC_URL}/MuseumFifth.jpeg`}
                      alt="Carbon illustration"
                    />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Museum Info">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                  <p className="landing-page__p">
                    The Metropolitan Museum of Art of New York City, colloquially "the Met", is the 
                    largest art museum in the Western Hemisphere. Its permanent collection contains over two million works,
                    divided among 17 curatorial departments. The main building at 1000 Fifth Avenue,
                    along the Museum Mile on the eastern edge of Central Park on Manhattan's Upper East Side, 
                    is by area one of the world's largest art museums. A much smaller second location, 
                    The Cloisters at Fort Tryon Park in Upper Manhattan, contains an extensive collection of art, architecture, 
                    and artifacts from medieval Europe.
                   </p>
                   <form className="learnmore-nav" action="https://www.metmuseum.org/">
                    <Button type="submit">Learn More</Button>
                   </form>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="bx--row landing-page__r3">
        <div className="bx--col-md-4 bx--col-lg-4">
          <h3 className="landing-page__label">More Info</h3>
        </div>
        <div className="bx--col-md-4 bx--col-lg-4">
          <Link href='https://www.metmuseum.org/'>Metropolitan Musuem Website</Link>
        </div>
        <div className="bx--col-md-4 bx--col-lg-4">
          <Link href='https://metmuseum.github.io/'> Metropolitan Musuem API</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;