export default function ArticleItemStats({ viewCount }) {
  return (
    <ul className="article-item__stats">
      <li>
        <i className="icons ion-ios-eye"></i>
        <span className="text">{viewCount}</span>
      </li>
    </ul>
  );
}
