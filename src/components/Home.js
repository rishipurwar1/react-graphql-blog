import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import PostWidget from "./PostWidget";
import Categories from "./Categories";
import { getPosts } from "../graphcms";
import FeaturedPosts from "./FeaturedPosts";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const postsArr = (await getPosts()) || [];
    setPosts(postsArr);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="container mx-auto px-10 mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post.node} key={index} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
