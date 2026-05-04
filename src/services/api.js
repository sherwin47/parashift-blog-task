const BASE_URL = 'https://jsonplaceholder.typicode.com';
const IMAGE_BASE_URL = 'https://picsum.photos';

export const api = {
  // Fetch all posts for the listing page
  getPosts: async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts`);
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error("API Error (getPosts):", error);
      throw error;
    }
  },

  // Fetch a single post for the detail page
  getPostById: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${id}`);
      if (!response.ok) throw new Error('Post not found');
      return await response.json();
    } catch (error) {
      console.error(`API Error (getPostById ${id}):`, error);
      throw error;
    }
  },

  // Build deterministic image URLs using Picsum seeds
  getPostImage: (seed, width = 600, height = 400) => {
    return `${IMAGE_BASE_URL}/seed/${seed}/${width}/${height}`;
  }
};