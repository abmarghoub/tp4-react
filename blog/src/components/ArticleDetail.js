import { useParams, Link } from 'react-router-dom';

function ArticleDetail({ articles }) {
  const { id } = useParams();
  const article = articles.find(a => a.id.toString() === id);

  if (!article) return <p className="text-danger">Article non trouvé.</p>;

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h1 className="card-title">{article.titre}</h1>
        <p className="card-text">{article.contenu}</p>
        <Link to={`/article/${article.id}/edit`} className="btn btn-warning me-2">Modifier</Link>
        <Link to="/" className="btn btn-secondary">Retour à l'accueil</Link>
      </div>
    </div>
  );
}

export default ArticleDetail;
