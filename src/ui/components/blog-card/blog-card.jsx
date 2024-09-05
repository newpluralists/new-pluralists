import React from 'react';
import { CustomLink } from 'tectonica-ui';

const BlogCard = ({ blog }) => {
  return (
    <div className="ui-blog-card">
      {blog.mainImage && <img src={blog.mainImage.url} alt={blog.mainImage.alt} className="img-full" />}
      <div className="card-body">
        <h5 className="card-title">{blog.title}</h5>
        <p className="card-text">{blog.funderPosition}</p>
        <CustomLink to={{ path: blog }} className="btn btn-primary">
          Read more
        </CustomLink>
      </div>
    </div>
  );
};

export default BlogCard;
