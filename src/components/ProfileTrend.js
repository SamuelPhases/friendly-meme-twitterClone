import React from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import "./Trends.css";
import "./ProfileTrend.css";
import Trend from "./Trend";
import Follow from "./Follow";
import Footer from "./Footer";

function ProfileTrend({ explore }) {
  return (
    <div className="trend">
      <div className="trend__input">
        <SearchRoundedIcon />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="trend__gallery">
        <div>
          <img
            src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        {/* <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div> */}
      </div>

      <Follow title="You might like" />

      <div className="trend__list">
        <div className="trend__topic">
          <div>
            <h2>Trends for you</h2>
            <SettingsRoundedIcon />
          </div>
        </div>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <div className="trend__more">
          <p>Show more</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfileTrend;
