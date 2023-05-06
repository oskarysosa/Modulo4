import Post from "./Posts";
import { useState, useEffect } from "react";
import { GetPosts } from "../services/PostServices";

//date, likes, autor, title, img, comments
//Props: - posts  (object array)
const initialState = [];

function PostsList({ autor }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    GetPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <div className="flex-columns">
      {posts === initialState
        ? "Loading..."
        : posts.map((posts, i) => (
            <Post
              key={i}
              img={posts.img}
              text={posts.text}
              comments={posts.comments}
              likes={posts.likes}
              autor={posts.autor}
              date={posts.date}
            />
          ))}
    </div>
  );
}
export default PostsList;
