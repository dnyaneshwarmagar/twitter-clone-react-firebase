import React, { useEffect, useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
import {addDoc, collection} from "firebase/firestore"

function TweetBox({getPosts}) {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    // db.collection("posts").add({
    //   displayName: "Dnyanesh",
    //   username: "dnyaneshm",
    //   verified: true,
    //   text: tweetMessage,
    //   image: tweetImage,
    //   avatar:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcqnRnHqdkUTq0kgdJzAIJHAeE0flhwJJCxw&usqp=CAU",
    // });

    const postsRef = collection(db,"posts");
    addDoc(postsRef,{ displayName: "Dnyanesh",
    username: "dnyaneshm",
    verified: true,
    text: tweetMessage,
    image: tweetImage,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcqnRnHqdkUTq0kgdJzAIJHAeE0flhwJJCxw&usqp=CAU",}).then(res =>console.log(res)).catch(err=>console.log(err))

    setTweetMessage("");
    setTweetImage("");
    getPosts()
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcqnRnHqdkUTq0kgdJzAIJHAeE0flhwJJCxw&usqp=CAU" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
