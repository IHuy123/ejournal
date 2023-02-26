import { api } from '.';
// import { defaultLocale } from '../i18n';

export const PostService = {
  getListPosts() {
    return api.call().get("/article/");
  },
  getListManus() {
    return api.call().get("/article/manuscript/");
  },
  getLatestPosts({ lang }) {
    return PostService.getListPosts({ lang });
  },
  getPopularPosts() {
    return PostService.getListPosts({
      orderby: "post_views",
    });
  },
  getPostBySlug: (slug) => {
    return PostService.getListPosts({
      slug,
    });
  },
  getRelatedPostByAuthor: (authorId, exclude = []) => {
    return PostService.getListPosts({
      author: authorId,
      exclude,
    });
  },
};