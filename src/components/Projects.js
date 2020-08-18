import React from 'react';
import '../css/projects.css';
// pls del this line

import comics from '../img/comics_awesome.png';
import wbsfit from '../img/wbsfit.png';
import video from '../img/videoplayer.png';
import geoip from '../img/geoip.png';
import rohrfuchs from '../img/rohrfuchs.png';
import space from '../img/space.png';

export default function Projects() {
  return (
    <>
      <div className="container">
        <div className="content960">
          <div id="NewChapter">projects</div>

          <div id="FlexRow">
            {/* //wrapper */}
            <div className="ProjectCard">
              <img src={rohrfuchs} alt="rohrfuchs" />
              {/* // overlay */}
              <div className="ProjectCardOverlay">
                {/* //content */}
                <div className="ProjectCardContent">
                  <h3>rohrfuchs gmbh</h3>
                  <span>
                    reactJS, express (node.js),
                    <br />
                    materialUI
                  </span>
                </div>
              </div>
            </div>

            <div className="ProjectCard">
              <img src={wbsfit} alt="wbs fit" />
              {/* // overlay */}
              <div className="ProjectCardOverlay">
                {/* //content */}
                <div className="ProjectCardContent">
                  <h3>wbs fit</h3>
                  <span>
                    ReactJS, express (node.js)
                    <br />
                    mongoDB, CSS
                  </span>
                </div>
              </div>
            </div>

            <div className="ProjectCard">
              <img src={comics} alt="comics awesome" />
              {/* // overlay */}
              <div className="ProjectCardOverlay">
                {/* //content */}
                <div className="ProjectCardContent">
                  <h3>Comics Awesome</h3>

                  <span>
                    ReactJS, express (node.js)
                    <br />
                    mongoDB, materialUI, CSS
                  </span>
                </div>
              </div>
            </div>

            <div className="ProjectCard">
              <img src={video} alt="videoplayer" />
              {/* // overlay */}
              <div className="ProjectCardOverlay">
                {/* //content */}
                <div className="ProjectCardContent">
                  <h3>videoplayer</h3>
                  <span>
                    reactJS, JavaScript,
                    <br /> HTML, CSS
                  </span>
                </div>
              </div>
            </div>

            {/* //wrapper */}
            <div className="ProjectCard">
              <img src={geoip} alt="geo ip" />
              {/* // overlay */}
              <div className="ProjectCardOverlay">
                {/* //content */}
                <div className="ProjectCardContent">
                  <h3>geo ip</h3>
                  <span>
                    reactJS, API,
                    <br />
                    CSS, HTML
                  </span>
                </div>
              </div>
            </div>

            <div className="ProjectCard">
              <img src={space} alt="space" />
              {/* // overlay */}
              <div className="ProjectCardOverlay">
                {/* //content */}
                <div className="ProjectCardContent">
                  <h3>space view</h3>
                  <span>reactJS, CSS, API</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
