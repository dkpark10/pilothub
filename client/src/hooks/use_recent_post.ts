export const RECENT_POST_KEY = "recent_post_key";

export const useRecentPosts = (): number[] | null => {
  const recentPost: number[] | null = JSON.parse(
    localStorage.getItem(RECENT_POST_KEY) as string
  );

  return recentPost;
};
