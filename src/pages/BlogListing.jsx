import React, { useState } from 'react';
import { api } from '../services/api';
import { useFetch } from '../hooks/useFetch';
import BlogCard from '../components/BlogCard';
import Skeleton from '../components/Skeleton';

const tabs = ['All', 'Branding', 'Design', 'Web Design', 'Digital Marketing', 'Support', 'Infographics'];

const getCategoryByPostId = (id) => {
  if (!id) return 'All';
  return tabs[(id % (tabs.length - 1)) + 1];
};

const BlogListing = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const { data: posts, loading, error } = useFetch(api.getPosts);

  const filteredPosts = (posts || []).filter((post) => {
    if (activeTab === 'All') return true;
    return getCategoryByPostId(post.id) === activeTab;
  });

  const loadMore = () => setVisibleCount((prev) => prev + 6);
  const onTabChange = (tab) => {
    setActiveTab(tab);
    setVisibleCount(6);
  };

  return (
    <div>
      <header className="bg-black text-white">
        <div className="mx-auto max-w-[1220px] px-6 py-16 md:px-8 md:py-24">
          <h1 className="text-[64px] font-semibold leading-none tracking-tight max-md:text-[48px]">
            Blogs
          </h1>
          <p className="mt-4 text-[30px] font-normal text-white/95 max-md:text-[24px]">
            Discover the latest insights
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-[1220px] px-6 pb-20 pt-10 md:px-8">
        <div className="overflow-x-auto border-b border-[#dcdcdc]">
          <div className="flex min-w-max gap-8 text-[24px] text-[#2c2c2c]">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => onTabChange(tab)}
                className={`border-b-2 pb-5 transition-colors ${
                  activeTab === tab
                    ? 'border-[#d0605a] text-black'
                    : 'border-transparent text-[#434343] hover:text-black'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {loading
            ? Array(6).fill(0).map((_, i) => <Skeleton key={i} type="card" mirrored={i % 2 === 1} />)
            : filteredPosts.slice(0, visibleCount).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
        </div>

        {!loading && error && (
          <div className="mt-12 rounded border border-red-200 bg-red-50 p-6 text-center">
            <p className="text-lg font-semibold text-red-700">Unable to load blogs right now.</p>
            <p className="mt-2 text-base text-red-600">{error}</p>
          </div>
        )}

        {!loading && !error && filteredPosts.length === 0 && (
          <div className="mt-12 border border-[#dfdfdf] bg-white p-8 text-center text-[#656565]">
            No blogs available in this category.
          </div>
        )}

        {!loading && filteredPosts.length > visibleCount && (
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={loadMore}
              className="border border-[#d5d5d5] bg-white px-8 py-3 text-[22px] text-[#272727] transition-colors hover:bg-[#f0f0f0]"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogListing;