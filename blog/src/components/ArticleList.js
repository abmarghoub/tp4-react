import { Link } from 'react-router-dom';

function ArticleList({ articles }) {
  return (
    <ul className="list-group">
      {articles.map((article) => (
        <li key={article.id} className="list-group-item d-flex justify-content-between align-items-center">
          <Link to={`/article/${article.id}`} className="text-decoration-none">
            {article.titre}
          </Link>
          <span className="badge bg-primary rounded-pill">{article.id}</span>
        </li>
      ))}
    </ul>
  );
}

export default ArticleList;
