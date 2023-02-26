import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function handleHighlightSearch(originStr, searchStr) {
  return originStr;
}

export default function ArticleItemTitle({ title, slugLink }) {
  const location = useLocation();
  if (location.pathname === "/search") {
    return (
      <h2 className="entry-title">
        <Link to={slugLink} className="white">
          {handleHighlightSearch(title, "best")}
        </Link>
      </h2>
    );
  }

  return (
    <h2 className="entry-title">
      <Link to={slugLink} className="white">
        {title}
      </Link>
    </h2>
  );
}
