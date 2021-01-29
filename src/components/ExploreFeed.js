import React from "react";
import Feeds from "./Feeds";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import "./ExploreFeed.css";

function ExploreFeed({ topic }) {
  return (
    <div className="explorefeed">
      <div className="explorefeed__topic">
        <h2>{topic}</h2>
        <KeyboardArrowDownRoundedIcon />
      </div>
      <Feeds
        username="Loremfare"
        displayName="loremfare"
        time="20h"
        post="No humans involved: mitigating a 754 lorem PPS DDoS Attack"
        comment="100"
        repost="100"
        like="900"
        dm="10"
        image="https://pbs.twimg.com/media/EgJ2VozUYAAa-Oa?format=jpg&name=small"
      />
      <Feeds
        username="Loremfare"
        displayName="loremfare"
        time="20h"
        post="No humans involved: mitigating a 754 lorem PPS DDoS Attack"
        comment="100"
        repost="100"
        like="900"
        dm="10"
        image="https://blog-cloudflare-com-assets.storage.googleapis.com/2020/08/image1-13-1.png"
        // image="https://t.co/8zqzpdy25y?amp=1"
      />
      <Feeds
        username="Loremfare"
        displayName="loremfare"
        time="20h"
        post="No humans involved: mitigating a 754 lorem PPS DDoS Attack"
        comment="100"
        repost="100"
        like="900"
        dm="10"
        image="https://pbs.twimg.com/media/EgIzaMSWoAA77Jv?format=jpg&name=small"
      />
      <Feeds
        username="Loremfare"
        displayName="loremfare"
        time="20h"
        post="No humans involved: mitigating a 754 lorem PPS DDoS Attack"
        comment="100"
        repost="100"
        like="900"
        dm="10"
        image="https://pbs.twimg.com/media/EgIOIuzWsAIFaOw?format=jpg&name=small"
      />
    </div>
  );
}

export default ExploreFeed;
