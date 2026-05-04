import React from 'react';
import { Link } from 'react-router-dom';
import { createPostSlug, formatDate, getPublishDateFromPostId, getReadTimeFromContent, truncateText } from '../utils/helpers';
import { api } from '../services/api';

const BlogCard = ({ post }) => {
  const publishDate = formatDate(getPublishDateFromPostId(post.id));
  const readTime = getReadTimeFromContent(post.body);

  return (
    <Link to={`/blogs/${createPostSlug(post)}`} className="group block h-full">
      <article className="h-full border border-[#e7e7e7] bg-white transition-colors duration-300 group-hover:border-[#cfcfcf]">
        <div className="aspect-[16/10] overflow-hidden">
          <img 
            src={api.getPostImage(post.id, 600, 400)}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>

        <div className="min-h-[178px] p-6">
          <h2 className="line-clamp-3 text-[34px] font-normal leading-[1.22] text-[#1f1f1f] max-md:text-[28px]">
            {truncateText(post.title, 72)}
          </h2>
        </div>

        <div className="mx-6 flex items-center justify-between border-t border-[#ededed] py-5 text-[24px] text-[#3c3c3c] max-md:text-[20px]">
          <span>{publishDate}</span>
          <div className="flex items-center gap-2">
            <span className="text-[18px]">◷</span>
            <span>{readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;