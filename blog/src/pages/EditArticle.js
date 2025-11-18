import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function EditArticle({ articles, setArticles }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = articles.find(a => a.id.toString() === id);

  const [titre, setTitre] = useState(article?.titre || "");
  const [contenu, setContenu] = useState(article?.contenu || "");
  const [error, setError] = useState("");

  if (!article) return <p className="text-danger">Article introuvable.</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titre.trim() || !contenu.trim()) {
      setError("Tous les champs doivent être remplis !");
      return;
    }

    const updated = articles.map(a =>
      a.id.toString() === id ? { ...a, titre, contenu } : a
    );

    setArticles(updated);
    navigate(`/article/${id}`);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-3">Modifier l’article</h2>

        {error && <p className="text-danger">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Titre</label>
            <input
              className="form-control"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contenu</label>
            <textarea
              className="form-control"
              value={contenu}
              onChange={(e) => setContenu(e.target.value)}
              rows="5"
            />
          </div>

          <button type="submit" className="btn btn-primary me-2">Sauvegarder</button>
          <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>Annuler</button>
        </form>
      </div>
    </div>
  );
}

export default EditArticle;
