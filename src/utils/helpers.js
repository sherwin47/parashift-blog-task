
export const truncateText = (text, length = 100) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + "...";
};


export const slugify = (value = "") => {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};


export const createPostSlug = (post) => {
  if (!post?.id) return "";
  return `${slugify(post.title || "blog")}-${post.id}`;
};


export const getPostIdFromSlug = (slug = "") => {
  const parts = slug.split("-");
  const candidate = Number(parts[parts.length - 1]);
  return Number.isInteger(candidate) && candidate > 0 ? candidate : null;
};

// Simple date formatter (Mocking since JSONPlaceholder doesn't provide dates)
export const formatDate = (dateString) => {
  if (!dateString) return "";
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  return new Date(dateString).toLocaleDateString("en-CA", options);
};

export const getPublishDateFromPostId = (postId) => {
  const baseDate = new Date("2026-03-06");
  const normalized = Number(postId) || 1;
  baseDate.setDate(baseDate.getDate() - normalized);
  return baseDate.toISOString();
};

export const getReadTimeFromContent = (content = "") => {
  const words = String(content).trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(3, Math.ceil(words / 45));
  return `${minutes} mins`;
};

// Scroll to top helper
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};