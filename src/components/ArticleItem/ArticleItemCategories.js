import { Link } from "react-router-dom";

export default function ArticleItemCategories({ categoriesId }) {
  return (
    <div className="post-category">
      <ul>
        {categoriesId.map((cateId) => {
          return (
            <li className="cat-pink" key={cateId.fullname}>
              <Link to={`/category/${cateId.fullname}`} className="white">
                {cateId.fullname}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
