import { PostId } from "custom-type";

export const RECENT_POST_KEY = "recent_post_key";

export const useRecentPosts = (): PostId[] | null => {
  const recentPostItem = localStorage.getItem(RECENT_POST_KEY);
  if (recentPostItem === null) {
    return null;
  }

  const results = JSON.parse(recentPostItem) as PostId[];
  return results.reverse();
};
