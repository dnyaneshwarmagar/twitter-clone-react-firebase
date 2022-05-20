import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import Search from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1527525498460508160"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/dnyaneshm"}
          options={{ text: "#reactjs is awesome", via: "dnyaneshm" }}
        />
      </div>
    </div>
  );
}

export default Widgets;



// "@material-ui/core": "^4.12.4",
//     "@material-ui/icons": "^4.11.3",
    // "react": "^17.0.2",
    // "react-dom": "^17.0.2",
    // "react-twitter-embed": "^4.0.4"