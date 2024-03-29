import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Truncate from "react-truncate";
import striptags from "striptags";


const BlogItem = props => {
  const {
    id,
    title,
    content,
    blog_status,
    featured_img_url
  } = props.blogItem;

  return (
    <div>
      <Link to={`/b/${id}`}>
      <h1>{title}</h1>
      </Link>
      <div>
        <Truncate lines={5} ellipsis={
          <span>
            ...<Link to={`/b/${id}`}>Read more</Link>
          </span>
        }>{striptags(content)}</Truncate>
      </div>
    </div>
  );
};


export default BlogItem;