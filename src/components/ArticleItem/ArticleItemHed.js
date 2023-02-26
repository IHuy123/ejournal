import ArticleItemInfor from "./ArticleItemInfor";
import ArticleItemTitle from "./ArticleItemTitle";
import ArticleItemDesc from "./ArticleItemDesc";
import ArticleItemCategories from "./ArticleItemCategories";
import ArticleItemStats from "./ArticleItemStats";

export default function ArticleItemHed({
  post,
  isShowDesc = false,
  isShowCategories = false,
}) {
  if (!post) {
    return null;
  }

  const title = post.title;
  const slugLink = `/post/${post.id}`;
  const thumbnails = `https://source.unsplash.com/random/?book,post,${post.id}`;

  const authorId = post.id;
  const authorName = post.id;
  const authorAvatar = `https://source.unsplash.com/random/?book,post,${post.id}`;
  const authorLink = `/user/${post.id}`;

  const created = "1/2/2023";

  const shortDesc = post.status;
  const viewCount = post.status;
  const categoriesId = post.author;

  return (
    <section id="mt_banner">
      <div className="swiper-container">
        <div
          className="slide-inner"
          style={{ backgroundImage: `url(${thumbnails})` }}
        />
        <div className="banner_caption_text">
          {isShowCategories && (
            <ArticleItemCategories categoriesId={categoriesId} />
          )}
          {isShowCategories && <ArticleItemStats viewCount={viewCount} />}
          <ArticleItemTitle title={title} slugLink={slugLink} />
          {isShowDesc && <ArticleItemDesc shortDesc={shortDesc} />}
          <ArticleItemInfor
            created={created}
            authorId={authorId}
            authorName={authorName}
            authorLink={authorLink}
            authorAvatar={authorAvatar}
          />
        </div>
      </div>
    </section>
  );
}
