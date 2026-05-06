import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import { useFetch } from '../hooks/useFetch';
import Skeleton from '../components/Skeleton';
import { createPostSlug, formatDate, getPostIdFromSlug, getPublishDateFromPostId, getReadTimeFromContent } from '../utils/helpers';

const BlogDetail = () => {
  const { slug } = useParams();
  const postId = getPostIdFromSlug(slug);
  const [relatedPosts, setRelatedPosts] = useState([]);

  
  const { data: post, loading, error } = useFetch(
    () => {
      if (!postId) {
        return Promise.reject(new Error('Invalid blog URL'));
      }
      return api.getPostById(postId);
    },
    [postId]
  );
  
  
  const { data: allPosts } = useFetch(api.getPosts);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (allPosts && postId) {
      
      const filtered = allPosts
        .filter((p) => p.id !== postId)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      setRelatedPosts(filtered);
    }
  }, [allPosts, postId]);

  if (error) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-red-700">Blog not found</h2>
          <p className="mt-2 text-red-600">{error}</p>
          <Link to="/blogs" className="inline-block mt-6 text-sm font-semibold text-blue-600 hover:underline">
            Back to all blogs
          </Link>
        </div>
      </div>
    );
  }
  if (loading || !post) return <div className="max-w-5xl mx-auto px-6 py-20"><Skeleton type="detail" /></div>;

  const publishDate = formatDate(getPublishDateFromPostId(post.id));
  const readTime = getReadTimeFromContent(post.body);

  return (
    <article className="pb-20">
      <header className="bg-black text-white">
        <div className="mx-auto max-w-[1220px] px-6 py-12 md:px-8 md:py-14">
          <div className="mb-5 flex items-center gap-2 text-[14px] text-white/80">
            <Link to="/blogs" className="hover:text-white">Blog</Link>
            <span>/</span>
            <span>Article</span>
          </div>
          <h1 className="max-w-[980px] text-[52px] font-semibold leading-[1.06] max-md:text-[38px]">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-7 text-[20px] text-white/85">
            <span>{publishDate}</span>
            <span className="flex items-center gap-2">
              <span className="text-[18px]">◷</span>
              {readTime}
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1220px] px-6 py-10 md:px-8">
        <img 
          src={api.getPostImage(post.id, 1200, 600)}
          className="h-[300px] w-full object-cover md:h-[520px]" 
          alt={post.title}
        />
      </div>

      <div className="mx-auto max-w-[920px] px-6 text-[#262626] md:px-8">
        <div className="prose prose-lg max-w-none prose-p:leading-relaxed prose-p:text-[20px] prose-p:text-[#2a2a2a] prose-blockquote:border-l-[#d0605a] prose-blockquote:text-[#2a2a2a]">
          <p>
            {post.body}
          </p>
          <p>{post.body.repeat(8)}</p>
          <blockquote>
            Digital capability is not optional anymore. It is now your most visible business asset.
          </blockquote>
          <p>{post.body.repeat(4)}</p>
        </div>

        <section className="mt-20 border-t border-[#e2e2e2] pt-10">
          <h3 className="mb-8 text-[40px] font-semibold text-[#1f1f1f] max-md:text-[32px]">
            Related Blogs
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedPosts.map((r) => (
              <Link key={r.id} to={`/blogs/${createPostSlug(r)}`} className="group block border border-[#e7e7e7] bg-white">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={api.getPostImage(r.id, 400, 250)}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" 
                    alt={r.title}
                  />
                </div>
                <h4 className="line-clamp-3 p-5 text-[24px] font-normal leading-[1.25] text-[#1f1f1f]">
                  {r.title}
                </h4>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};

export default BlogDetail;