import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../graphcms";
import Author from "./Author";
import Categories from "./Categories";
import Comments from "./Comments";
import CommentsForm from "./CommentsForm";
import PostDetail from "./PostDetail";
import PostWidget from "./PostWidget";

const PostDetails = () => {
  const [post, setPost] = useState([]);
  const { id: slug } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const postsArr = (await getPostDetails(slug)) || [];
      setPost(postsArr);
    };
    fetchPost();
  }, [slug]);

  if (Object.keys(post).length !== 0) {
    return (
      <>
        <div className="container mx-auto px-10 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="col-span-1 lg:col-span-8">
              <PostDetail post={post} />
              <Author author={post.author} />
              {/* <AdjacentPost /> */}
              <CommentsForm slug={post.slug} />
              <Comments slug={post.slug} />
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="relative lg:sticky top-8">
                <PostWidget
                  slug={post.slug}
                  categories={post.categories.map((category) => category.slug)}
                />
                <Categories />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default PostDetails;
