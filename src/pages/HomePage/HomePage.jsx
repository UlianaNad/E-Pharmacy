import React from "react";
import sprite from "../../assets/sprite.svg";

import FirstBanner from "./FirstBanner/FirstBanner";

const HomePage = () => {
  return (
    <div>
     <FirstBanner/>
      <div>
        <h2>Your Nearest Medicine Store</h2>
        <span>Search for Medicine, Filter by your location</span>
        <ul>
          <li>
            <div>
              <p>Huge Sale</p>
              <div>
                <svg width="16" height="16">
                  <use href={`${sprite}#star`} fill="yellow" />
                </svg>
                <span>2</span>
                <button>OPEN</button>
              </div>
            </div>
            <div>
              <div>
                <svg width="16" height="16">
                  <use href={`${sprite}#map-pin`} fill="yellow" />
                </svg>
                <p>Albenia G83</p>
                <p>Seoul</p>
              </div>
              <div>
                <svg width="16" height="16">
                  <use href={`${sprite}#phone`} fill="yellow" />
                </svg>
                <span>717-24-2429</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
