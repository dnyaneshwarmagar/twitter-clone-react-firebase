import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import FlipMove from "react-flip-move";


function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);
  useEffect(() => {
    getPosts();
  }, [TweetBox]);

  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapshot) =>
  //     setPosts(snapshot.docs.map((doc) => doc.data()))
  //   );
  // }, []);

  function getPosts() {
    const postDataRef = collection(db, "posts");
    getDocs(postDataRef)
      .then((response) => {
        console.log(response.docs);
        const postsDatafrmFb = response.docs.map((doc) => ({
          data: doc.data(),
          id:doc.id
        }));
        console.log("postsDatafrmFb:", postsDatafrmFb);
        setPosts(postsDatafrmFb);
      })
      .catch((err) => console.log(err.message));
  }

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox getPosts={getPosts} />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.data.displayName}
            username={post.data.username}
            verified={post.data.verified}
            text={post.data.text}
            avatar={post.data.avatar}
            image={post.data.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
