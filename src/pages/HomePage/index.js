import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticlesLatest from "../../components/ArticlesLatest";
import ArticlesPopular from "../../components/ArticlesPopular";
import ArticlesList from "../../components/ArticlesList";
import {
  actFetchLatestPostsAsync,
  actFetchPopularPostsAsync,
  actFetchPostsAsync,
} from "../../store/post/actions";
import Instagram from "../../components/Instagram";
import SideBar from "./SideBar";

export default function HomePage() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.App.lang);

  useEffect(
    () => {
      dispatch(actFetchLatestPostsAsync());
      dispatch(actFetchPopularPostsAsync());
      dispatch(actFetchPostsAsync());
    },
    // eslint-disable-next-line
    [lang]
  );

  return (
    <>
      <ArticlesLatest />
      <section id="mt_blog" className="light-bg">
        <div className="container">
          <div className="row">
            <div
              className="blog_post_sec blog_post_inner width70"
              style={{ width: "70%", float: "left" }}
            >
              <div className="row">
                <ArticlesPopular />
                <ArticlesList />
              </div>
            </div>
            <SideBar />
          </div>
        </div>
      </section>
      <Instagram />
    </>
  );
}
