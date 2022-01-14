import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryPost } from "../graphcms";
import Categories from "./Categories";
import PostCard from "./PostCard";

const CategoryPost = () => {
  const [posts, setPosts] = useState([]);
  const { id: slug } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const postsArr = await getCategoryPost(slug);
      setPosts(postsArr);
    };
    fetchPost();
  }, [slug]);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPost;
